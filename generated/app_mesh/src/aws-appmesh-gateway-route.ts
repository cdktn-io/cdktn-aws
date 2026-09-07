// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsGatewayRouteConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#id AwsGatewayRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#mesh_name AwsGatewayRoute#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#mesh_owner AwsGatewayRoute#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#name AwsGatewayRoute#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#region AwsGatewayRoute#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#tags AwsGatewayRoute#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#tags_all AwsGatewayRoute#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#virtual_gateway_name AwsGatewayRoute#virtual_gateway_name}
  */
  readonly virtualGatewayName: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#spec AwsGatewayRoute#spec}
  */
  readonly spec: AwsGatewayRoute.SpecProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route aws_appmesh_gateway_route}
*/
export class AwsGatewayRoute extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appmesh_gateway_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsGatewayRoute resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsGatewayRoute to import
  * @param importFromId The id of the existing AwsGatewayRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsGatewayRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appmesh_gateway_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route aws_appmesh_gateway_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsGatewayRouteConfig
  */
  public constructor(scope: Construct, id: string, config: AwsGatewayRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_gateway_route',
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
    this._id = config.id;
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._virtualGatewayName = config.virtualGatewayName;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_name - computed: false, optional: false, required: true
  private _meshName?: string; 
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName;
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string; 
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner;
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

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
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

  // virtual_gateway_name - computed: false, optional: false, required: true
  private _virtualGatewayName?: string; 
  public get virtualGatewayName() {
    return this.getStringAttribute('virtual_gateway_name');
  }
  public set virtualGatewayName(value: string) {
    this._virtualGatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayNameInput() {
    return this._virtualGatewayName;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new AwsGatewayRoute.SpecPropertyOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AwsGatewayRoute.SpecProperty) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      mesh_name: cdktn.stringToTerraform(this._meshName),
      mesh_owner: cdktn.stringToTerraform(this._meshOwner),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      virtual_gateway_name: cdktn.stringToTerraform(this._virtualGatewayName),
      spec: awsGatewayRouteSpecPropertyToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_name: {
        value: cdktn.stringToHclTerraform(this._meshName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_owner: {
        value: cdktn.stringToHclTerraform(this._meshOwner),
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
      virtual_gateway_name: {
        value: cdktn.stringToHclTerraform(this._virtualGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: awsGatewayRouteSpecPropertyToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGatewayRoute.SpecPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsGatewayRouteSpecGrpcRouteActionTargetVirtualServicePropertyToTerraform(struct?: AwsGatewayRoute.SpecGrpcRouteActionTargetVirtualServicePropertyOutputReference | AwsGatewayRoute.SpecGrpcRouteActionTargetVirtualServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    virtual_service_name: cdktn.stringToTerraform(struct!.virtualServiceName),
  }
}


export function awsGatewayRouteSpecGrpcRouteActionTargetVirtualServicePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecGrpcRouteActionTargetVirtualServicePropertyOutputReference | AwsGatewayRoute.SpecGrpcRouteActionTargetVirtualServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    virtual_service_name: {
      value: cdktn.stringToHclTerraform(struct!.virtualServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecGrpcRouteActionTargetPropertyToTerraform(struct?: AwsGatewayRoute.SpecGrpcRouteActionTargetPropertyOutputReference | AwsGatewayRoute.SpecGrpcRouteActionTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    virtual_service: awsGatewayRouteSpecGrpcRouteActionTargetVirtualServicePropertyToTerraform(struct!.virtualService),
  }
}


export function awsGatewayRouteSpecGrpcRouteActionTargetPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecGrpcRouteActionTargetPropertyOutputReference | AwsGatewayRoute.SpecGrpcRouteActionTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_service: {
      value: awsGatewayRouteSpecGrpcRouteActionTargetVirtualServicePropertyToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteActionTargetVirtualServicePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecGrpcRouteActionPropertyToTerraform(struct?: AwsGatewayRoute.SpecGrpcRouteActionPropertyOutputReference | AwsGatewayRoute.SpecGrpcRouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target: awsGatewayRouteSpecGrpcRouteActionTargetPropertyToTerraform(struct!.target),
  }
}


export function awsGatewayRouteSpecGrpcRouteActionPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecGrpcRouteActionPropertyOutputReference | AwsGatewayRoute.SpecGrpcRouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target: {
      value: awsGatewayRouteSpecGrpcRouteActionTargetPropertyToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteActionTargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecGrpcRouteMatchPropertyToTerraform(struct?: AwsGatewayRoute.SpecGrpcRouteMatchPropertyOutputReference | AwsGatewayRoute.SpecGrpcRouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    service_name: cdktn.stringToTerraform(struct!.serviceName),
  }
}


export function awsGatewayRouteSpecGrpcRouteMatchPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecGrpcRouteMatchPropertyOutputReference | AwsGatewayRoute.SpecGrpcRouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteGrpcRoutePropertyToTerraform(struct?: AwsGatewayRoute.GrpcRoutePropertyOutputReference | AwsGatewayRoute.GrpcRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: awsGatewayRouteSpecGrpcRouteActionPropertyToTerraform(struct!.action),
    match: awsGatewayRouteSpecGrpcRouteMatchPropertyToTerraform(struct!.match),
  }
}


export function awsGatewayRouteGrpcRoutePropertyToHclTerraform(struct?: AwsGatewayRoute.GrpcRoutePropertyOutputReference | AwsGatewayRoute.GrpcRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: awsGatewayRouteSpecGrpcRouteActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteActionPropertyList",
    },
    match: {
      value: awsGatewayRouteSpecGrpcRouteMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteActionRewriteHostnamePropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionRewriteHostnamePropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionRewriteHostnameProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_target_hostname: cdktn.stringToTerraform(struct!.defaultTargetHostname),
  }
}


export function awsGatewayRouteSpecHttp2RouteActionRewriteHostnamePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionRewriteHostnamePropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionRewriteHostnameProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_target_hostname: {
      value: cdktn.stringToHclTerraform(struct!.defaultTargetHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteActionRewritePathPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionRewritePathPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionRewritePathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
  }
}


export function awsGatewayRouteSpecHttp2RouteActionRewritePathPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionRewritePathPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionRewritePathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteActionRewritePrefixPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionRewritePrefixPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionRewritePrefixProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_prefix: cdktn.stringToTerraform(struct!.defaultPrefix),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsGatewayRouteSpecHttp2RouteActionRewritePrefixPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionRewritePrefixPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionRewritePrefixProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_prefix: {
      value: cdktn.stringToHclTerraform(struct!.defaultPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteActionRewritePropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionRewritePropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionRewriteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: awsGatewayRouteSpecHttp2RouteActionRewriteHostnamePropertyToTerraform(struct!.hostname),
    path: awsGatewayRouteSpecHttp2RouteActionRewritePathPropertyToTerraform(struct!.path),
    prefix: awsGatewayRouteSpecHttp2RouteActionRewritePrefixPropertyToTerraform(struct!.prefix),
  }
}


export function awsGatewayRouteSpecHttp2RouteActionRewritePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionRewritePropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionRewriteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: awsGatewayRouteSpecHttp2RouteActionRewriteHostnamePropertyToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteActionRewriteHostnamePropertyList",
    },
    path: {
      value: awsGatewayRouteSpecHttp2RouteActionRewritePathPropertyToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteActionRewritePathPropertyList",
    },
    prefix: {
      value: awsGatewayRouteSpecHttp2RouteActionRewritePrefixPropertyToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteActionRewritePrefixPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteActionTargetVirtualServicePropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionTargetVirtualServicePropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionTargetVirtualServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    virtual_service_name: cdktn.stringToTerraform(struct!.virtualServiceName),
  }
}


export function awsGatewayRouteSpecHttp2RouteActionTargetVirtualServicePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionTargetVirtualServicePropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionTargetVirtualServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    virtual_service_name: {
      value: cdktn.stringToHclTerraform(struct!.virtualServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteActionTargetPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionTargetPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    virtual_service: awsGatewayRouteSpecHttp2RouteActionTargetVirtualServicePropertyToTerraform(struct!.virtualService),
  }
}


export function awsGatewayRouteSpecHttp2RouteActionTargetPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionTargetPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_service: {
      value: awsGatewayRouteSpecHttp2RouteActionTargetVirtualServicePropertyToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteActionTargetVirtualServicePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteActionPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rewrite: awsGatewayRouteSpecHttp2RouteActionRewritePropertyToTerraform(struct!.rewrite),
    target: awsGatewayRouteSpecHttp2RouteActionTargetPropertyToTerraform(struct!.target),
  }
}


export function awsGatewayRouteSpecHttp2RouteActionPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteActionPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rewrite: {
      value: awsGatewayRouteSpecHttp2RouteActionRewritePropertyToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteActionRewritePropertyList",
    },
    target: {
      value: awsGatewayRouteSpecHttp2RouteActionTargetPropertyToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteActionTargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteMatchHeaderMatchRangePropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchHeaderMatchRangePropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchHeaderMatchRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.numberToTerraform(struct!.end),
    start: cdktn.numberToTerraform(struct!.start),
  }
}


export function awsGatewayRouteSpecHttp2RouteMatchHeaderMatchRangePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchHeaderMatchRangePropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchHeaderMatchRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktn.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteMatchHeaderMatchPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchHeaderMatchPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchHeaderMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    regex: cdktn.stringToTerraform(struct!.regex),
    suffix: cdktn.stringToTerraform(struct!.suffix),
    range: awsGatewayRouteSpecHttp2RouteMatchHeaderMatchRangePropertyToTerraform(struct!.range),
  }
}


export function awsGatewayRouteSpecHttp2RouteMatchHeaderMatchPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchHeaderMatchPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchHeaderMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: awsGatewayRouteSpecHttp2RouteMatchHeaderMatchRangePropertyToHclTerraform(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchHeaderMatchRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteMatchHeaderPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invert: cdktn.booleanToTerraform(struct!.invert),
    name: cdktn.stringToTerraform(struct!.name),
    match: awsGatewayRouteSpecHttp2RouteMatchHeaderMatchPropertyToTerraform(struct!.match),
  }
}


export function awsGatewayRouteSpecHttp2RouteMatchHeaderPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invert: {
      value: cdktn.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: awsGatewayRouteSpecHttp2RouteMatchHeaderMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchHeaderMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteMatchHostnamePropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchHostnamePropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchHostnameProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function awsGatewayRouteSpecHttp2RouteMatchHostnamePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchHostnamePropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchHostnameProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteMatchPathPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchPathPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchPathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function awsGatewayRouteSpecHttp2RouteMatchPathPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchPathPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchPathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteMatchQueryParameterMatchPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchQueryParameterMatchPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchQueryParameterMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
  }
}


export function awsGatewayRouteSpecHttp2RouteMatchQueryParameterMatchPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchQueryParameterMatchPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchQueryParameterMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteMatchQueryParameterPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchQueryParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    match: awsGatewayRouteSpecHttp2RouteMatchQueryParameterMatchPropertyToTerraform(struct!.match),
  }
}


export function awsGatewayRouteSpecHttp2RouteMatchQueryParameterPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchQueryParameterProperty | cdktn.IResolvable): any {
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
    match: {
      value: awsGatewayRouteSpecHttp2RouteMatchQueryParameterMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchQueryParameterMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttp2RouteMatchPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    header: cdktn.listMapper(awsGatewayRouteSpecHttp2RouteMatchHeaderPropertyToTerraform, true)(struct!.header),
    hostname: awsGatewayRouteSpecHttp2RouteMatchHostnamePropertyToTerraform(struct!.hostname),
    path: awsGatewayRouteSpecHttp2RouteMatchPathPropertyToTerraform(struct!.path),
    query_parameter: cdktn.listMapper(awsGatewayRouteSpecHttp2RouteMatchQueryParameterPropertyToTerraform, true)(struct!.queryParameter),
  }
}


export function awsGatewayRouteSpecHttp2RouteMatchPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttp2RouteMatchPropertyOutputReference | AwsGatewayRoute.SpecHttp2RouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(awsGatewayRouteSpecHttp2RouteMatchHeaderPropertyToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "SpecHttp2RouteMatchHeaderPropertyList",
    },
    hostname: {
      value: awsGatewayRouteSpecHttp2RouteMatchHostnamePropertyToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchHostnamePropertyList",
    },
    path: {
      value: awsGatewayRouteSpecHttp2RouteMatchPathPropertyToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchPathPropertyList",
    },
    query_parameter: {
      value: cdktn.listMapperHcl(awsGatewayRouteSpecHttp2RouteMatchQueryParameterPropertyToHclTerraform, true)(struct!.queryParameter),
      isBlock: true,
      type: "set",
      storageClassType: "SpecHttp2RouteMatchQueryParameterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteHttp2RoutePropertyToTerraform(struct?: AwsGatewayRoute.Http2RoutePropertyOutputReference | AwsGatewayRoute.Http2RouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: awsGatewayRouteSpecHttp2RouteActionPropertyToTerraform(struct!.action),
    match: awsGatewayRouteSpecHttp2RouteMatchPropertyToTerraform(struct!.match),
  }
}


export function awsGatewayRouteHttp2RoutePropertyToHclTerraform(struct?: AwsGatewayRoute.Http2RoutePropertyOutputReference | AwsGatewayRoute.Http2RouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: awsGatewayRouteSpecHttp2RouteActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteActionPropertyList",
    },
    match: {
      value: awsGatewayRouteSpecHttp2RouteMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteActionRewriteHostnamePropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionRewriteHostnamePropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionRewriteHostnameProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_target_hostname: cdktn.stringToTerraform(struct!.defaultTargetHostname),
  }
}


export function awsGatewayRouteSpecHttpRouteActionRewriteHostnamePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionRewriteHostnamePropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionRewriteHostnameProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_target_hostname: {
      value: cdktn.stringToHclTerraform(struct!.defaultTargetHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteActionRewritePathPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionRewritePathPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionRewritePathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
  }
}


export function awsGatewayRouteSpecHttpRouteActionRewritePathPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionRewritePathPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionRewritePathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteActionRewritePrefixPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionRewritePrefixPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionRewritePrefixProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_prefix: cdktn.stringToTerraform(struct!.defaultPrefix),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsGatewayRouteSpecHttpRouteActionRewritePrefixPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionRewritePrefixPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionRewritePrefixProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_prefix: {
      value: cdktn.stringToHclTerraform(struct!.defaultPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteActionRewritePropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionRewritePropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionRewriteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: awsGatewayRouteSpecHttpRouteActionRewriteHostnamePropertyToTerraform(struct!.hostname),
    path: awsGatewayRouteSpecHttpRouteActionRewritePathPropertyToTerraform(struct!.path),
    prefix: awsGatewayRouteSpecHttpRouteActionRewritePrefixPropertyToTerraform(struct!.prefix),
  }
}


export function awsGatewayRouteSpecHttpRouteActionRewritePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionRewritePropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionRewriteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: awsGatewayRouteSpecHttpRouteActionRewriteHostnamePropertyToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteActionRewriteHostnamePropertyList",
    },
    path: {
      value: awsGatewayRouteSpecHttpRouteActionRewritePathPropertyToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteActionRewritePathPropertyList",
    },
    prefix: {
      value: awsGatewayRouteSpecHttpRouteActionRewritePrefixPropertyToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteActionRewritePrefixPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteActionTargetVirtualServicePropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionTargetVirtualServicePropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionTargetVirtualServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    virtual_service_name: cdktn.stringToTerraform(struct!.virtualServiceName),
  }
}


export function awsGatewayRouteSpecHttpRouteActionTargetVirtualServicePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionTargetVirtualServicePropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionTargetVirtualServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    virtual_service_name: {
      value: cdktn.stringToHclTerraform(struct!.virtualServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteActionTargetPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionTargetPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    virtual_service: awsGatewayRouteSpecHttpRouteActionTargetVirtualServicePropertyToTerraform(struct!.virtualService),
  }
}


export function awsGatewayRouteSpecHttpRouteActionTargetPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionTargetPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_service: {
      value: awsGatewayRouteSpecHttpRouteActionTargetVirtualServicePropertyToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteActionTargetVirtualServicePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteActionPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rewrite: awsGatewayRouteSpecHttpRouteActionRewritePropertyToTerraform(struct!.rewrite),
    target: awsGatewayRouteSpecHttpRouteActionTargetPropertyToTerraform(struct!.target),
  }
}


export function awsGatewayRouteSpecHttpRouteActionPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteActionPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rewrite: {
      value: awsGatewayRouteSpecHttpRouteActionRewritePropertyToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteActionRewritePropertyList",
    },
    target: {
      value: awsGatewayRouteSpecHttpRouteActionTargetPropertyToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteActionTargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteMatchHeaderMatchRangePropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchHeaderMatchRangePropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchHeaderMatchRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.numberToTerraform(struct!.end),
    start: cdktn.numberToTerraform(struct!.start),
  }
}


export function awsGatewayRouteSpecHttpRouteMatchHeaderMatchRangePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchHeaderMatchRangePropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchHeaderMatchRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktn.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteMatchHeaderMatchPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchHeaderMatchPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchHeaderMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    regex: cdktn.stringToTerraform(struct!.regex),
    suffix: cdktn.stringToTerraform(struct!.suffix),
    range: awsGatewayRouteSpecHttpRouteMatchHeaderMatchRangePropertyToTerraform(struct!.range),
  }
}


export function awsGatewayRouteSpecHttpRouteMatchHeaderMatchPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchHeaderMatchPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchHeaderMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: awsGatewayRouteSpecHttpRouteMatchHeaderMatchRangePropertyToHclTerraform(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchHeaderMatchRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteMatchHeaderPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invert: cdktn.booleanToTerraform(struct!.invert),
    name: cdktn.stringToTerraform(struct!.name),
    match: awsGatewayRouteSpecHttpRouteMatchHeaderMatchPropertyToTerraform(struct!.match),
  }
}


export function awsGatewayRouteSpecHttpRouteMatchHeaderPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invert: {
      value: cdktn.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: awsGatewayRouteSpecHttpRouteMatchHeaderMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchHeaderMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteMatchHostnamePropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchHostnamePropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchHostnameProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function awsGatewayRouteSpecHttpRouteMatchHostnamePropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchHostnamePropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchHostnameProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteMatchPathPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchPathPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchPathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function awsGatewayRouteSpecHttpRouteMatchPathPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchPathPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchPathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteMatchQueryParameterMatchPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchQueryParameterMatchPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchQueryParameterMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
  }
}


export function awsGatewayRouteSpecHttpRouteMatchQueryParameterMatchPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchQueryParameterMatchPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchQueryParameterMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteMatchQueryParameterPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchQueryParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    match: awsGatewayRouteSpecHttpRouteMatchQueryParameterMatchPropertyToTerraform(struct!.match),
  }
}


export function awsGatewayRouteSpecHttpRouteMatchQueryParameterPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchQueryParameterProperty | cdktn.IResolvable): any {
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
    match: {
      value: awsGatewayRouteSpecHttpRouteMatchQueryParameterMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchQueryParameterMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecHttpRouteMatchPropertyToTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    header: cdktn.listMapper(awsGatewayRouteSpecHttpRouteMatchHeaderPropertyToTerraform, true)(struct!.header),
    hostname: awsGatewayRouteSpecHttpRouteMatchHostnamePropertyToTerraform(struct!.hostname),
    path: awsGatewayRouteSpecHttpRouteMatchPathPropertyToTerraform(struct!.path),
    query_parameter: cdktn.listMapper(awsGatewayRouteSpecHttpRouteMatchQueryParameterPropertyToTerraform, true)(struct!.queryParameter),
  }
}


export function awsGatewayRouteSpecHttpRouteMatchPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecHttpRouteMatchPropertyOutputReference | AwsGatewayRoute.SpecHttpRouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(awsGatewayRouteSpecHttpRouteMatchHeaderPropertyToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "SpecHttpRouteMatchHeaderPropertyList",
    },
    hostname: {
      value: awsGatewayRouteSpecHttpRouteMatchHostnamePropertyToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchHostnamePropertyList",
    },
    path: {
      value: awsGatewayRouteSpecHttpRouteMatchPathPropertyToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchPathPropertyList",
    },
    query_parameter: {
      value: cdktn.listMapperHcl(awsGatewayRouteSpecHttpRouteMatchQueryParameterPropertyToHclTerraform, true)(struct!.queryParameter),
      isBlock: true,
      type: "set",
      storageClassType: "SpecHttpRouteMatchQueryParameterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteHttpRoutePropertyToTerraform(struct?: AwsGatewayRoute.HttpRoutePropertyOutputReference | AwsGatewayRoute.HttpRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: awsGatewayRouteSpecHttpRouteActionPropertyToTerraform(struct!.action),
    match: awsGatewayRouteSpecHttpRouteMatchPropertyToTerraform(struct!.match),
  }
}


export function awsGatewayRouteHttpRoutePropertyToHclTerraform(struct?: AwsGatewayRoute.HttpRoutePropertyOutputReference | AwsGatewayRoute.HttpRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: awsGatewayRouteSpecHttpRouteActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteActionPropertyList",
    },
    match: {
      value: awsGatewayRouteSpecHttpRouteMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGatewayRouteSpecPropertyToTerraform(struct?: AwsGatewayRoute.SpecPropertyOutputReference | AwsGatewayRoute.SpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    grpc_route: awsGatewayRouteGrpcRoutePropertyToTerraform(struct!.grpcRoute),
    http2_route: awsGatewayRouteHttp2RoutePropertyToTerraform(struct!.http2Route),
    http_route: awsGatewayRouteHttpRoutePropertyToTerraform(struct!.httpRoute),
  }
}


export function awsGatewayRouteSpecPropertyToHclTerraform(struct?: AwsGatewayRoute.SpecPropertyOutputReference | AwsGatewayRoute.SpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc_route: {
      value: awsGatewayRouteGrpcRoutePropertyToHclTerraform(struct!.grpcRoute),
      isBlock: true,
      type: "list",
      storageClassType: "GrpcRoutePropertyList",
    },
    http2_route: {
      value: awsGatewayRouteHttp2RoutePropertyToHclTerraform(struct!.http2Route),
      isBlock: true,
      type: "list",
      storageClassType: "Http2RoutePropertyList",
    },
    http_route: {
      value: awsGatewayRouteHttpRoutePropertyToHclTerraform(struct!.httpRoute),
      isBlock: true,
      type: "list",
      storageClassType: "HttpRoutePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsGatewayRoute {
export interface SpecGrpcRouteActionTargetVirtualServiceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#virtual_service_name AwsGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}
export class SpecGrpcRouteActionTargetVirtualServicePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteActionTargetVirtualServiceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceName = this._virtualServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteActionTargetVirtualServiceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServiceName = value.virtualServiceName;
    }
  }

  // virtual_service_name - computed: false, optional: false, required: true
  private _virtualServiceName?: string; 
  public get virtualServiceName() {
    return this.getStringAttribute('virtual_service_name');
  }
  public set virtualServiceName(value: string) {
    this._virtualServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceNameInput() {
    return this._virtualServiceName;
  }
}
export interface SpecGrpcRouteActionTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#port AwsGatewayRoute#port}
  */
  readonly port?: number;
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#virtual_service AwsGatewayRoute#virtual_service}
  */
  readonly virtualService: SpecGrpcRouteActionTargetVirtualServiceProperty;
}
export class SpecGrpcRouteActionTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteActionTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteActionTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._virtualService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._virtualService.internalValue = value.virtualService;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new SpecGrpcRouteActionTargetVirtualServicePropertyOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: SpecGrpcRouteActionTargetVirtualServiceProperty) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}
export interface SpecGrpcRouteActionProperty {
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#target AwsGatewayRoute#target}
  */
  readonly target: SpecGrpcRouteActionTargetProperty;
}
export class SpecGrpcRouteActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target.internalValue = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target = new SpecGrpcRouteActionTargetPropertyOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: SpecGrpcRouteActionTargetProperty) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface SpecGrpcRouteMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#port AwsGatewayRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#service_name AwsGatewayRoute#service_name}
  */
  readonly serviceName: string;
}
export class SpecGrpcRouteMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteMatchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._serviceName = value.serviceName;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface GrpcRouteProperty {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#action AwsGatewayRoute#action}
  */
  readonly action: SpecGrpcRouteActionProperty;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#match AwsGatewayRoute#match}
  */
  readonly match: SpecGrpcRouteMatchProperty;
}
export class GrpcRoutePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrpcRouteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrpcRouteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new SpecGrpcRouteActionPropertyOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SpecGrpcRouteActionProperty) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new SpecGrpcRouteMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecGrpcRouteMatchProperty) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface SpecHttp2RouteActionRewriteHostnameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#default_target_hostname AwsGatewayRoute#default_target_hostname}
  */
  readonly defaultTargetHostname: string;
}
export class SpecHttp2RouteActionRewriteHostnamePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteActionRewriteHostnameProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTargetHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTargetHostname = this._defaultTargetHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteActionRewriteHostnameProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTargetHostname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTargetHostname = value.defaultTargetHostname;
    }
  }

  // default_target_hostname - computed: false, optional: false, required: true
  private _defaultTargetHostname?: string; 
  public get defaultTargetHostname() {
    return this.getStringAttribute('default_target_hostname');
  }
  public set defaultTargetHostname(value: string) {
    this._defaultTargetHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetHostnameInput() {
    return this._defaultTargetHostname;
  }
}
export interface SpecHttp2RouteActionRewritePathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#exact AwsGatewayRoute#exact}
  */
  readonly exact: string;
}
export class SpecHttp2RouteActionRewritePathPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteActionRewritePathProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteActionRewritePathProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface SpecHttp2RouteActionRewritePrefixProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#default_prefix AwsGatewayRoute#default_prefix}
  */
  readonly defaultPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#value AwsGatewayRoute#value}
  */
  readonly value?: string;
}
export class SpecHttp2RouteActionRewritePrefixPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteActionRewritePrefixProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPrefix = this._defaultPrefix;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteActionRewritePrefixProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPrefix = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPrefix = value.defaultPrefix;
      this._value = value.value;
    }
  }

  // default_prefix - computed: false, optional: true, required: false
  private _defaultPrefix?: string; 
  public get defaultPrefix() {
    return this.getStringAttribute('default_prefix');
  }
  public set defaultPrefix(value: string) {
    this._defaultPrefix = value;
  }
  public resetDefaultPrefix() {
    this._defaultPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrefixInput() {
    return this._defaultPrefix;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecHttp2RouteActionRewriteProperty {
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#hostname AwsGatewayRoute#hostname}
  */
  readonly hostname?: SpecHttp2RouteActionRewriteHostnameProperty;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#path AwsGatewayRoute#path}
  */
  readonly path?: SpecHttp2RouteActionRewritePathProperty;
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#prefix AwsGatewayRoute#prefix}
  */
  readonly prefix?: SpecHttp2RouteActionRewritePrefixProperty;
}
export class SpecHttp2RouteActionRewritePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteActionRewriteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteActionRewriteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname.internalValue = undefined;
      this._path.internalValue = undefined;
      this._prefix.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname.internalValue = value.hostname;
      this._path.internalValue = value.path;
      this._prefix.internalValue = value.prefix;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new SpecHttp2RouteActionRewriteHostnamePropertyOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: SpecHttp2RouteActionRewriteHostnameProperty) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new SpecHttp2RouteActionRewritePathPropertyOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SpecHttp2RouteActionRewritePathProperty) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix = new SpecHttp2RouteActionRewritePrefixPropertyOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: SpecHttp2RouteActionRewritePrefixProperty) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}
export interface SpecHttp2RouteActionTargetVirtualServiceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#virtual_service_name AwsGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}
export class SpecHttp2RouteActionTargetVirtualServicePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteActionTargetVirtualServiceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceName = this._virtualServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteActionTargetVirtualServiceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServiceName = value.virtualServiceName;
    }
  }

  // virtual_service_name - computed: false, optional: false, required: true
  private _virtualServiceName?: string; 
  public get virtualServiceName() {
    return this.getStringAttribute('virtual_service_name');
  }
  public set virtualServiceName(value: string) {
    this._virtualServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceNameInput() {
    return this._virtualServiceName;
  }
}
export interface SpecHttp2RouteActionTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#port AwsGatewayRoute#port}
  */
  readonly port?: number;
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#virtual_service AwsGatewayRoute#virtual_service}
  */
  readonly virtualService: SpecHttp2RouteActionTargetVirtualServiceProperty;
}
export class SpecHttp2RouteActionTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteActionTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteActionTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._virtualService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._virtualService.internalValue = value.virtualService;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new SpecHttp2RouteActionTargetVirtualServicePropertyOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: SpecHttp2RouteActionTargetVirtualServiceProperty) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}
export interface SpecHttp2RouteActionProperty {
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#rewrite AwsGatewayRoute#rewrite}
  */
  readonly rewrite?: SpecHttp2RouteActionRewriteProperty;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#target AwsGatewayRoute#target}
  */
  readonly target: SpecHttp2RouteActionTargetProperty;
}
export class SpecHttp2RouteActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rewrite.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rewrite.internalValue = value.rewrite;
      this._target.internalValue = value.target;
    }
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new SpecHttp2RouteActionRewritePropertyOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: SpecHttp2RouteActionRewriteProperty) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new SpecHttp2RouteActionTargetPropertyOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: SpecHttp2RouteActionTargetProperty) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface SpecHttp2RouteMatchHeaderMatchRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#end AwsGatewayRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#start AwsGatewayRoute#start}
  */
  readonly start: number;
}
export class SpecHttp2RouteMatchHeaderMatchRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteMatchHeaderMatchRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteMatchHeaderMatchRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface SpecHttp2RouteMatchHeaderMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#exact AwsGatewayRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#prefix AwsGatewayRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#regex AwsGatewayRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#suffix AwsGatewayRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#range AwsGatewayRoute#range}
  */
  readonly range?: SpecHttp2RouteMatchHeaderMatchRangeProperty;
}
export class SpecHttp2RouteMatchHeaderMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteMatchHeaderMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteMatchHeaderMatchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
      this._suffix = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
      this._suffix = value.suffix;
      this._range.internalValue = value.range;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // range - computed: false, optional: true, required: false
  private _range = new SpecHttp2RouteMatchHeaderMatchRangePropertyOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: SpecHttp2RouteMatchHeaderMatchRangeProperty) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface SpecHttp2RouteMatchHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#invert AwsGatewayRoute#invert}
  */
  readonly invert?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#name AwsGatewayRoute#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#match AwsGatewayRoute#match}
  */
  readonly match?: SpecHttp2RouteMatchHeaderMatchProperty;
}
export class SpecHttp2RouteMatchHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecHttp2RouteMatchHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteMatchHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._name = value.name;
      this._match.internalValue = value.match;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktn.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktn.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
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

  // match - computed: false, optional: true, required: false
  private _match = new SpecHttp2RouteMatchHeaderMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecHttp2RouteMatchHeaderMatchProperty) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class SpecHttp2RouteMatchHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : SpecHttp2RouteMatchHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): SpecHttp2RouteMatchHeaderPropertyOutputReference {
    return new SpecHttp2RouteMatchHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecHttp2RouteMatchHostnameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#exact AwsGatewayRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#suffix AwsGatewayRoute#suffix}
  */
  readonly suffix?: string;
}
export class SpecHttp2RouteMatchHostnamePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteMatchHostnameProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteMatchHostnameProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface SpecHttp2RouteMatchPathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#exact AwsGatewayRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#regex AwsGatewayRoute#regex}
  */
  readonly regex?: string;
}
export class SpecHttp2RouteMatchPathPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteMatchPathProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteMatchPathProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface SpecHttp2RouteMatchQueryParameterMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#exact AwsGatewayRoute#exact}
  */
  readonly exact?: string;
}
export class SpecHttp2RouteMatchQueryParameterMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteMatchQueryParameterMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteMatchQueryParameterMatchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface SpecHttp2RouteMatchQueryParameterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#name AwsGatewayRoute#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#match AwsGatewayRoute#match}
  */
  readonly match?: SpecHttp2RouteMatchQueryParameterMatchProperty;
}
export class SpecHttp2RouteMatchQueryParameterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecHttp2RouteMatchQueryParameterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteMatchQueryParameterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._match.internalValue = value.match;
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

  // match - computed: false, optional: true, required: false
  private _match = new SpecHttp2RouteMatchQueryParameterMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecHttp2RouteMatchQueryParameterMatchProperty) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class SpecHttp2RouteMatchQueryParameterPropertyList extends cdktn.ComplexList {
  public internalValue? : SpecHttp2RouteMatchQueryParameterProperty[] | cdktn.IResolvable

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
  public get(index: number): SpecHttp2RouteMatchQueryParameterPropertyOutputReference {
    return new SpecHttp2RouteMatchQueryParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecHttp2RouteMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#port AwsGatewayRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#prefix AwsGatewayRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#header AwsGatewayRoute#header}
  */
  readonly header?: SpecHttp2RouteMatchHeaderProperty[] | cdktn.IResolvable;
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#hostname AwsGatewayRoute#hostname}
  */
  readonly hostname?: SpecHttp2RouteMatchHostnameProperty;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#path AwsGatewayRoute#path}
  */
  readonly path?: SpecHttp2RouteMatchPathProperty;
  /**
  * query_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#query_parameter AwsGatewayRoute#query_parameter}
  */
  readonly queryParameter?: SpecHttp2RouteMatchQueryParameterProperty[] | cdktn.IResolvable;
}
export class SpecHttp2RouteMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameter = this._queryParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteMatchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._prefix = undefined;
      this._header.internalValue = undefined;
      this._hostname.internalValue = undefined;
      this._path.internalValue = undefined;
      this._queryParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._prefix = value.prefix;
      this._header.internalValue = value.header;
      this._hostname.internalValue = value.hostname;
      this._path.internalValue = value.path;
      this._queryParameter.internalValue = value.queryParameter;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // header - computed: false, optional: true, required: false
  private _header = new SpecHttp2RouteMatchHeaderPropertyList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: SpecHttp2RouteMatchHeaderProperty[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new SpecHttp2RouteMatchHostnamePropertyOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: SpecHttp2RouteMatchHostnameProperty) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new SpecHttp2RouteMatchPathPropertyOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SpecHttp2RouteMatchPathProperty) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter = new SpecHttp2RouteMatchQueryParameterPropertyList(this, "query_parameter", true);
  public get queryParameter() {
    return this._queryParameter;
  }
  public putQueryParameter(value: SpecHttp2RouteMatchQueryParameterProperty[] | cdktn.IResolvable) {
    this._queryParameter.internalValue = value;
  }
  public resetQueryParameter() {
    this._queryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter.internalValue;
  }
}
export interface Http2RouteProperty {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#action AwsGatewayRoute#action}
  */
  readonly action: SpecHttp2RouteActionProperty;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#match AwsGatewayRoute#match}
  */
  readonly match: SpecHttp2RouteMatchProperty;
}
export class Http2RoutePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Http2RouteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Http2RouteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new SpecHttp2RouteActionPropertyOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SpecHttp2RouteActionProperty) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new SpecHttp2RouteMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecHttp2RouteMatchProperty) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface SpecHttpRouteActionRewriteHostnameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#default_target_hostname AwsGatewayRoute#default_target_hostname}
  */
  readonly defaultTargetHostname: string;
}
export class SpecHttpRouteActionRewriteHostnamePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteActionRewriteHostnameProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTargetHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTargetHostname = this._defaultTargetHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteActionRewriteHostnameProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTargetHostname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTargetHostname = value.defaultTargetHostname;
    }
  }

  // default_target_hostname - computed: false, optional: false, required: true
  private _defaultTargetHostname?: string; 
  public get defaultTargetHostname() {
    return this.getStringAttribute('default_target_hostname');
  }
  public set defaultTargetHostname(value: string) {
    this._defaultTargetHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetHostnameInput() {
    return this._defaultTargetHostname;
  }
}
export interface SpecHttpRouteActionRewritePathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#exact AwsGatewayRoute#exact}
  */
  readonly exact: string;
}
export class SpecHttpRouteActionRewritePathPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteActionRewritePathProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteActionRewritePathProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface SpecHttpRouteActionRewritePrefixProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#default_prefix AwsGatewayRoute#default_prefix}
  */
  readonly defaultPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#value AwsGatewayRoute#value}
  */
  readonly value?: string;
}
export class SpecHttpRouteActionRewritePrefixPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteActionRewritePrefixProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPrefix = this._defaultPrefix;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteActionRewritePrefixProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPrefix = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPrefix = value.defaultPrefix;
      this._value = value.value;
    }
  }

  // default_prefix - computed: false, optional: true, required: false
  private _defaultPrefix?: string; 
  public get defaultPrefix() {
    return this.getStringAttribute('default_prefix');
  }
  public set defaultPrefix(value: string) {
    this._defaultPrefix = value;
  }
  public resetDefaultPrefix() {
    this._defaultPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrefixInput() {
    return this._defaultPrefix;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecHttpRouteActionRewriteProperty {
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#hostname AwsGatewayRoute#hostname}
  */
  readonly hostname?: SpecHttpRouteActionRewriteHostnameProperty;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#path AwsGatewayRoute#path}
  */
  readonly path?: SpecHttpRouteActionRewritePathProperty;
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#prefix AwsGatewayRoute#prefix}
  */
  readonly prefix?: SpecHttpRouteActionRewritePrefixProperty;
}
export class SpecHttpRouteActionRewritePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteActionRewriteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteActionRewriteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname.internalValue = undefined;
      this._path.internalValue = undefined;
      this._prefix.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname.internalValue = value.hostname;
      this._path.internalValue = value.path;
      this._prefix.internalValue = value.prefix;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new SpecHttpRouteActionRewriteHostnamePropertyOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: SpecHttpRouteActionRewriteHostnameProperty) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new SpecHttpRouteActionRewritePathPropertyOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SpecHttpRouteActionRewritePathProperty) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix = new SpecHttpRouteActionRewritePrefixPropertyOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: SpecHttpRouteActionRewritePrefixProperty) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}
export interface SpecHttpRouteActionTargetVirtualServiceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#virtual_service_name AwsGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}
export class SpecHttpRouteActionTargetVirtualServicePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteActionTargetVirtualServiceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceName = this._virtualServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteActionTargetVirtualServiceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServiceName = value.virtualServiceName;
    }
  }

  // virtual_service_name - computed: false, optional: false, required: true
  private _virtualServiceName?: string; 
  public get virtualServiceName() {
    return this.getStringAttribute('virtual_service_name');
  }
  public set virtualServiceName(value: string) {
    this._virtualServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceNameInput() {
    return this._virtualServiceName;
  }
}
export interface SpecHttpRouteActionTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#port AwsGatewayRoute#port}
  */
  readonly port?: number;
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#virtual_service AwsGatewayRoute#virtual_service}
  */
  readonly virtualService: SpecHttpRouteActionTargetVirtualServiceProperty;
}
export class SpecHttpRouteActionTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteActionTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteActionTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._virtualService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._virtualService.internalValue = value.virtualService;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new SpecHttpRouteActionTargetVirtualServicePropertyOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: SpecHttpRouteActionTargetVirtualServiceProperty) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}
export interface SpecHttpRouteActionProperty {
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#rewrite AwsGatewayRoute#rewrite}
  */
  readonly rewrite?: SpecHttpRouteActionRewriteProperty;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#target AwsGatewayRoute#target}
  */
  readonly target: SpecHttpRouteActionTargetProperty;
}
export class SpecHttpRouteActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rewrite.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rewrite.internalValue = value.rewrite;
      this._target.internalValue = value.target;
    }
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new SpecHttpRouteActionRewritePropertyOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: SpecHttpRouteActionRewriteProperty) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new SpecHttpRouteActionTargetPropertyOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: SpecHttpRouteActionTargetProperty) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface SpecHttpRouteMatchHeaderMatchRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#end AwsGatewayRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#start AwsGatewayRoute#start}
  */
  readonly start: number;
}
export class SpecHttpRouteMatchHeaderMatchRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteMatchHeaderMatchRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteMatchHeaderMatchRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface SpecHttpRouteMatchHeaderMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#exact AwsGatewayRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#prefix AwsGatewayRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#regex AwsGatewayRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#suffix AwsGatewayRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#range AwsGatewayRoute#range}
  */
  readonly range?: SpecHttpRouteMatchHeaderMatchRangeProperty;
}
export class SpecHttpRouteMatchHeaderMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteMatchHeaderMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteMatchHeaderMatchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
      this._suffix = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
      this._suffix = value.suffix;
      this._range.internalValue = value.range;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // range - computed: false, optional: true, required: false
  private _range = new SpecHttpRouteMatchHeaderMatchRangePropertyOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: SpecHttpRouteMatchHeaderMatchRangeProperty) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface SpecHttpRouteMatchHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#invert AwsGatewayRoute#invert}
  */
  readonly invert?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#name AwsGatewayRoute#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#match AwsGatewayRoute#match}
  */
  readonly match?: SpecHttpRouteMatchHeaderMatchProperty;
}
export class SpecHttpRouteMatchHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecHttpRouteMatchHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteMatchHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._name = value.name;
      this._match.internalValue = value.match;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktn.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktn.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
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

  // match - computed: false, optional: true, required: false
  private _match = new SpecHttpRouteMatchHeaderMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecHttpRouteMatchHeaderMatchProperty) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class SpecHttpRouteMatchHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : SpecHttpRouteMatchHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): SpecHttpRouteMatchHeaderPropertyOutputReference {
    return new SpecHttpRouteMatchHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecHttpRouteMatchHostnameProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#exact AwsGatewayRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#suffix AwsGatewayRoute#suffix}
  */
  readonly suffix?: string;
}
export class SpecHttpRouteMatchHostnamePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteMatchHostnameProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteMatchHostnameProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface SpecHttpRouteMatchPathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#exact AwsGatewayRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#regex AwsGatewayRoute#regex}
  */
  readonly regex?: string;
}
export class SpecHttpRouteMatchPathPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteMatchPathProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteMatchPathProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface SpecHttpRouteMatchQueryParameterMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#exact AwsGatewayRoute#exact}
  */
  readonly exact?: string;
}
export class SpecHttpRouteMatchQueryParameterMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteMatchQueryParameterMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteMatchQueryParameterMatchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface SpecHttpRouteMatchQueryParameterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#name AwsGatewayRoute#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#match AwsGatewayRoute#match}
  */
  readonly match?: SpecHttpRouteMatchQueryParameterMatchProperty;
}
export class SpecHttpRouteMatchQueryParameterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecHttpRouteMatchQueryParameterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteMatchQueryParameterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._match.internalValue = value.match;
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

  // match - computed: false, optional: true, required: false
  private _match = new SpecHttpRouteMatchQueryParameterMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecHttpRouteMatchQueryParameterMatchProperty) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class SpecHttpRouteMatchQueryParameterPropertyList extends cdktn.ComplexList {
  public internalValue? : SpecHttpRouteMatchQueryParameterProperty[] | cdktn.IResolvable

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
  public get(index: number): SpecHttpRouteMatchQueryParameterPropertyOutputReference {
    return new SpecHttpRouteMatchQueryParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecHttpRouteMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#port AwsGatewayRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#prefix AwsGatewayRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#header AwsGatewayRoute#header}
  */
  readonly header?: SpecHttpRouteMatchHeaderProperty[] | cdktn.IResolvable;
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#hostname AwsGatewayRoute#hostname}
  */
  readonly hostname?: SpecHttpRouteMatchHostnameProperty;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#path AwsGatewayRoute#path}
  */
  readonly path?: SpecHttpRouteMatchPathProperty;
  /**
  * query_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#query_parameter AwsGatewayRoute#query_parameter}
  */
  readonly queryParameter?: SpecHttpRouteMatchQueryParameterProperty[] | cdktn.IResolvable;
}
export class SpecHttpRouteMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameter = this._queryParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteMatchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._prefix = undefined;
      this._header.internalValue = undefined;
      this._hostname.internalValue = undefined;
      this._path.internalValue = undefined;
      this._queryParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._prefix = value.prefix;
      this._header.internalValue = value.header;
      this._hostname.internalValue = value.hostname;
      this._path.internalValue = value.path;
      this._queryParameter.internalValue = value.queryParameter;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // header - computed: false, optional: true, required: false
  private _header = new SpecHttpRouteMatchHeaderPropertyList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: SpecHttpRouteMatchHeaderProperty[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new SpecHttpRouteMatchHostnamePropertyOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: SpecHttpRouteMatchHostnameProperty) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new SpecHttpRouteMatchPathPropertyOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: SpecHttpRouteMatchPathProperty) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter = new SpecHttpRouteMatchQueryParameterPropertyList(this, "query_parameter", true);
  public get queryParameter() {
    return this._queryParameter;
  }
  public putQueryParameter(value: SpecHttpRouteMatchQueryParameterProperty[] | cdktn.IResolvable) {
    this._queryParameter.internalValue = value;
  }
  public resetQueryParameter() {
    this._queryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter.internalValue;
  }
}
export interface HttpRouteProperty {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#action AwsGatewayRoute#action}
  */
  readonly action: SpecHttpRouteActionProperty;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#match AwsGatewayRoute#match}
  */
  readonly match: SpecHttpRouteMatchProperty;
}
export class HttpRoutePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpRouteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpRouteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new SpecHttpRouteActionPropertyOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SpecHttpRouteActionProperty) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new SpecHttpRouteMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecHttpRouteMatchProperty) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface SpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#priority AwsGatewayRoute#priority}
  */
  readonly priority?: number;
  /**
  * grpc_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#grpc_route AwsGatewayRoute#grpc_route}
  */
  readonly grpcRoute?: GrpcRouteProperty;
  /**
  * http2_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#http2_route AwsGatewayRoute#http2_route}
  */
  readonly http2Route?: Http2RouteProperty;
  /**
  * http_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_gateway_route#http_route AwsGatewayRoute#http_route}
  */
  readonly httpRoute?: HttpRouteProperty;
}
export class SpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._grpcRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRoute = this._grpcRoute?.internalValue;
    }
    if (this._http2Route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Route = this._http2Route?.internalValue;
    }
    if (this._httpRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
      this._grpcRoute.internalValue = undefined;
      this._http2Route.internalValue = undefined;
      this._httpRoute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
      this._grpcRoute.internalValue = value.grpcRoute;
      this._http2Route.internalValue = value.http2Route;
      this._httpRoute.internalValue = value.httpRoute;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // grpc_route - computed: false, optional: true, required: false
  private _grpcRoute = new GrpcRoutePropertyOutputReference(this, "grpc_route");
  public get grpcRoute() {
    return this._grpcRoute;
  }
  public putGrpcRoute(value: GrpcRouteProperty) {
    this._grpcRoute.internalValue = value;
  }
  public resetGrpcRoute() {
    this._grpcRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRouteInput() {
    return this._grpcRoute.internalValue;
  }

  // http2_route - computed: false, optional: true, required: false
  private _http2Route = new Http2RoutePropertyOutputReference(this, "http2_route");
  public get http2Route() {
    return this._http2Route;
  }
  public putHttp2Route(value: Http2RouteProperty) {
    this._http2Route.internalValue = value;
  }
  public resetHttp2Route() {
    this._http2Route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2RouteInput() {
    return this._http2Route.internalValue;
  }

  // http_route - computed: false, optional: true, required: false
  private _httpRoute = new HttpRoutePropertyOutputReference(this, "http_route");
  public get httpRoute() {
    return this._httpRoute;
  }
  public putHttpRoute(value: HttpRouteProperty) {
    this._httpRoute.internalValue = value;
  }
  public resetHttpRoute() {
    this._httpRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute.internalValue;
  }
}
}
