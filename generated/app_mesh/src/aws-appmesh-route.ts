// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAppmeshRouteConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#id AwsAppmeshRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#mesh_name AwsAppmeshRoute#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#mesh_owner AwsAppmeshRoute#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#name AwsAppmeshRoute#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#region AwsAppmeshRoute#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#tags AwsAppmeshRoute#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#tags_all AwsAppmeshRoute#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#virtual_router_name AwsAppmeshRoute#virtual_router_name}
  */
  readonly virtualRouterName: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#spec AwsAppmeshRoute#spec}
  */
  readonly spec: AwsAppmeshRoute.SpecProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route aws_appmesh_route}
*/
export class AwsAppmeshRoute extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appmesh_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAppmeshRoute resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAppmeshRoute to import
  * @param importFromId The id of the existing AwsAppmeshRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAppmeshRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appmesh_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route aws_appmesh_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAppmeshRouteConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAppmeshRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_route',
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
    this._virtualRouterName = config.virtualRouterName;
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

  // virtual_router_name - computed: false, optional: false, required: true
  private _virtualRouterName?: string; 
  public get virtualRouterName() {
    return this.getStringAttribute('virtual_router_name');
  }
  public set virtualRouterName(value: string) {
    this._virtualRouterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterNameInput() {
    return this._virtualRouterName;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new AwsAppmeshRoute.SpecPropertyOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AwsAppmeshRoute.SpecProperty) {
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
      virtual_router_name: cdktn.stringToTerraform(this._virtualRouterName),
      spec: awsAppmeshRouteSpecPropertyToTerraform(this._spec.internalValue),
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
      virtual_router_name: {
        value: cdktn.stringToHclTerraform(this._virtualRouterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: awsAppmeshRouteSpecPropertyToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppmeshRoute.SpecPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsAppmeshRouteSpecGrpcRouteActionWeightedTargetPropertyToTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteActionWeightedTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    virtual_node: cdktn.stringToTerraform(struct!.virtualNode),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function awsAppmeshRouteSpecGrpcRouteActionWeightedTargetPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteActionWeightedTargetProperty | cdktn.IResolvable): any {
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
    virtual_node: {
      value: cdktn.stringToHclTerraform(struct!.virtualNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecGrpcRouteActionPropertyToTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteActionPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    weighted_target: cdktn.listMapper(awsAppmeshRouteSpecGrpcRouteActionWeightedTargetPropertyToTerraform, true)(struct!.weightedTarget),
  }
}


export function awsAppmeshRouteSpecGrpcRouteActionPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteActionPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    weighted_target: {
      value: cdktn.listMapperHcl(awsAppmeshRouteSpecGrpcRouteActionWeightedTargetPropertyToHclTerraform, true)(struct!.weightedTarget),
      isBlock: true,
      type: "set",
      storageClassType: "SpecGrpcRouteActionWeightedTargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRangePropertyToTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteMatchMetadataMatchRangePropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteMatchMetadataMatchRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.numberToTerraform(struct!.end),
    start: cdktn.numberToTerraform(struct!.start),
  }
}


export function awsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRangePropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteMatchMetadataMatchRangePropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteMatchMetadataMatchRangeProperty): any {
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


export function awsAppmeshRouteSpecGrpcRouteMatchMetadataMatchPropertyToTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteMatchMetadataMatchPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteMatchMetadataMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    regex: cdktn.stringToTerraform(struct!.regex),
    suffix: cdktn.stringToTerraform(struct!.suffix),
    range: awsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRangePropertyToTerraform(struct!.range),
  }
}


export function awsAppmeshRouteSpecGrpcRouteMatchMetadataMatchPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteMatchMetadataMatchPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteMatchMetadataMatchProperty): any {
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
      value: awsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRangePropertyToHclTerraform(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteMatchMetadataMatchRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteMetadataPropertyToTerraform(struct?: AwsAppmeshRoute.MetadataProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invert: cdktn.booleanToTerraform(struct!.invert),
    name: cdktn.stringToTerraform(struct!.name),
    match: awsAppmeshRouteSpecGrpcRouteMatchMetadataMatchPropertyToTerraform(struct!.match),
  }
}


export function awsAppmeshRouteMetadataPropertyToHclTerraform(struct?: AwsAppmeshRoute.MetadataProperty | cdktn.IResolvable): any {
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
      value: awsAppmeshRouteSpecGrpcRouteMatchMetadataMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteMatchMetadataMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecGrpcRouteMatchPropertyToTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteMatchPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    method_name: cdktn.stringToTerraform(struct!.methodName),
    port: cdktn.numberToTerraform(struct!.port),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    service_name: cdktn.stringToTerraform(struct!.serviceName),
    metadata: cdktn.listMapper(awsAppmeshRouteMetadataPropertyToTerraform, true)(struct!.metadata),
  }
}


export function awsAppmeshRouteSpecGrpcRouteMatchPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteMatchPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    method_name: {
      value: cdktn.stringToHclTerraform(struct!.methodName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.listMapperHcl(awsAppmeshRouteMetadataPropertyToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "MetadataPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutPropertyToTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteRetryPolicyPerRetryTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteRetryPolicyPerRetryTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteRetryPolicyPerRetryTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteRetryPolicyPerRetryTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecGrpcRouteRetryPolicyPropertyToTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteRetryPolicyPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteRetryPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grpc_retry_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.grpcRetryEvents),
    http_retry_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.httpRetryEvents),
    max_retries: cdktn.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tcpRetryEvents),
    per_retry_timeout: awsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutPropertyToTerraform(struct!.perRetryTimeout),
  }
}


export function awsAppmeshRouteSpecGrpcRouteRetryPolicyPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteRetryPolicyPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteRetryPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grpc_retry_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.grpcRetryEvents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    http_retry_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.httpRetryEvents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_retries: {
      value: cdktn.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_retry_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tcpRetryEvents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_retry_timeout: {
      value: awsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutPropertyToHclTerraform(struct!.perRetryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteRetryPolicyPerRetryTimeoutPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecGrpcRouteTimeoutIdlePropertyToTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteTimeoutIdlePropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteTimeoutIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAppmeshRouteSpecGrpcRouteTimeoutIdlePropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteTimeoutIdlePropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteTimeoutIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecGrpcRouteTimeoutPerRequestPropertyToTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteTimeoutPerRequestPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteTimeoutPerRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAppmeshRouteSpecGrpcRouteTimeoutPerRequestPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteTimeoutPerRequestPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteTimeoutPerRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecGrpcRouteTimeoutPropertyToTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle: awsAppmeshRouteSpecGrpcRouteTimeoutIdlePropertyToTerraform(struct!.idle),
    per_request: awsAppmeshRouteSpecGrpcRouteTimeoutPerRequestPropertyToTerraform(struct!.perRequest),
  }
}


export function awsAppmeshRouteSpecGrpcRouteTimeoutPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecGrpcRouteTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecGrpcRouteTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle: {
      value: awsAppmeshRouteSpecGrpcRouteTimeoutIdlePropertyToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteTimeoutIdlePropertyList",
    },
    per_request: {
      value: awsAppmeshRouteSpecGrpcRouteTimeoutPerRequestPropertyToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteTimeoutPerRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteGrpcRoutePropertyToTerraform(struct?: AwsAppmeshRoute.GrpcRoutePropertyOutputReference | AwsAppmeshRoute.GrpcRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: awsAppmeshRouteSpecGrpcRouteActionPropertyToTerraform(struct!.action),
    match: awsAppmeshRouteSpecGrpcRouteMatchPropertyToTerraform(struct!.match),
    retry_policy: awsAppmeshRouteSpecGrpcRouteRetryPolicyPropertyToTerraform(struct!.retryPolicy),
    timeout: awsAppmeshRouteSpecGrpcRouteTimeoutPropertyToTerraform(struct!.timeout),
  }
}


export function awsAppmeshRouteGrpcRoutePropertyToHclTerraform(struct?: AwsAppmeshRoute.GrpcRoutePropertyOutputReference | AwsAppmeshRoute.GrpcRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: awsAppmeshRouteSpecGrpcRouteActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteActionPropertyList",
    },
    match: {
      value: awsAppmeshRouteSpecGrpcRouteMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteMatchPropertyList",
    },
    retry_policy: {
      value: awsAppmeshRouteSpecGrpcRouteRetryPolicyPropertyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteRetryPolicyPropertyList",
    },
    timeout: {
      value: awsAppmeshRouteSpecGrpcRouteTimeoutPropertyToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "SpecGrpcRouteTimeoutPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteActionWeightedTargetPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteActionWeightedTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    virtual_node: cdktn.stringToTerraform(struct!.virtualNode),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function awsAppmeshRouteSpecHttp2RouteActionWeightedTargetPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteActionWeightedTargetProperty | cdktn.IResolvable): any {
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
    virtual_node: {
      value: cdktn.stringToHclTerraform(struct!.virtualNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteActionPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteActionPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    weighted_target: cdktn.listMapper(awsAppmeshRouteSpecHttp2RouteActionWeightedTargetPropertyToTerraform, true)(struct!.weightedTarget),
  }
}


export function awsAppmeshRouteSpecHttp2RouteActionPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteActionPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    weighted_target: {
      value: cdktn.listMapperHcl(awsAppmeshRouteSpecHttp2RouteActionWeightedTargetPropertyToHclTerraform, true)(struct!.weightedTarget),
      isBlock: true,
      type: "set",
      storageClassType: "SpecHttp2RouteActionWeightedTargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRangePropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchHeaderMatchRangePropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteMatchHeaderMatchRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.numberToTerraform(struct!.end),
    start: cdktn.numberToTerraform(struct!.start),
  }
}


export function awsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRangePropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchHeaderMatchRangePropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteMatchHeaderMatchRangeProperty): any {
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


export function awsAppmeshRouteSpecHttp2RouteMatchHeaderMatchPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchHeaderMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteMatchHeaderMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    regex: cdktn.stringToTerraform(struct!.regex),
    suffix: cdktn.stringToTerraform(struct!.suffix),
    range: awsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRangePropertyToTerraform(struct!.range),
  }
}


export function awsAppmeshRouteSpecHttp2RouteMatchHeaderMatchPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchHeaderMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteMatchHeaderMatchProperty): any {
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
      value: awsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRangePropertyToHclTerraform(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchHeaderMatchRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteMatchHeaderPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invert: cdktn.booleanToTerraform(struct!.invert),
    name: cdktn.stringToTerraform(struct!.name),
    match: awsAppmeshRouteSpecHttp2RouteMatchHeaderMatchPropertyToTerraform(struct!.match),
  }
}


export function awsAppmeshRouteSpecHttp2RouteMatchHeaderPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchHeaderProperty | cdktn.IResolvable): any {
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
      value: awsAppmeshRouteSpecHttp2RouteMatchHeaderMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchHeaderMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteMatchPathPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchPathPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteMatchPathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function awsAppmeshRouteSpecHttp2RouteMatchPathPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchPathPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteMatchPathProperty): any {
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


export function awsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatchPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchQueryParameterMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteMatchQueryParameterMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
  }
}


export function awsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatchPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchQueryParameterMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteMatchQueryParameterMatchProperty): any {
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


export function awsAppmeshRouteSpecHttp2RouteMatchQueryParameterPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchQueryParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    match: awsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatchPropertyToTerraform(struct!.match),
  }
}


export function awsAppmeshRouteSpecHttp2RouteMatchQueryParameterPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchQueryParameterProperty | cdktn.IResolvable): any {
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
      value: awsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchQueryParameterMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteMatchPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    port: cdktn.numberToTerraform(struct!.port),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    scheme: cdktn.stringToTerraform(struct!.scheme),
    header: cdktn.listMapper(awsAppmeshRouteSpecHttp2RouteMatchHeaderPropertyToTerraform, true)(struct!.header),
    path: awsAppmeshRouteSpecHttp2RouteMatchPathPropertyToTerraform(struct!.path),
    query_parameter: cdktn.listMapper(awsAppmeshRouteSpecHttp2RouteMatchQueryParameterPropertyToTerraform, true)(struct!.queryParameter),
  }
}


export function awsAppmeshRouteSpecHttp2RouteMatchPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(awsAppmeshRouteSpecHttp2RouteMatchHeaderPropertyToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "SpecHttp2RouteMatchHeaderPropertyList",
    },
    path: {
      value: awsAppmeshRouteSpecHttp2RouteMatchPathPropertyToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchPathPropertyList",
    },
    query_parameter: {
      value: cdktn.listMapperHcl(awsAppmeshRouteSpecHttp2RouteMatchQueryParameterPropertyToHclTerraform, true)(struct!.queryParameter),
      isBlock: true,
      type: "set",
      storageClassType: "SpecHttp2RouteMatchQueryParameterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteRetryPolicyPerRetryTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteRetryPolicyPerRetryTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteRetryPolicyPerRetryTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteRetryPolicyPerRetryTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteRetryPolicyPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteRetryPolicyPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteRetryPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_retry_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.httpRetryEvents),
    max_retries: cdktn.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tcpRetryEvents),
    per_retry_timeout: awsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutPropertyToTerraform(struct!.perRetryTimeout),
  }
}


export function awsAppmeshRouteSpecHttp2RouteRetryPolicyPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteRetryPolicyPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteRetryPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_retry_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.httpRetryEvents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_retries: {
      value: cdktn.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_retry_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tcpRetryEvents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_retry_timeout: {
      value: awsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutPropertyToHclTerraform(struct!.perRetryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteRetryPolicyPerRetryTimeoutPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteTimeoutIdlePropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteTimeoutIdlePropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteTimeoutIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAppmeshRouteSpecHttp2RouteTimeoutIdlePropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteTimeoutIdlePropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteTimeoutIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteTimeoutPerRequestPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteTimeoutPerRequestPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteTimeoutPerRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAppmeshRouteSpecHttp2RouteTimeoutPerRequestPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteTimeoutPerRequestPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteTimeoutPerRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttp2RouteTimeoutPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle: awsAppmeshRouteSpecHttp2RouteTimeoutIdlePropertyToTerraform(struct!.idle),
    per_request: awsAppmeshRouteSpecHttp2RouteTimeoutPerRequestPropertyToTerraform(struct!.perRequest),
  }
}


export function awsAppmeshRouteSpecHttp2RouteTimeoutPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttp2RouteTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecHttp2RouteTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle: {
      value: awsAppmeshRouteSpecHttp2RouteTimeoutIdlePropertyToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteTimeoutIdlePropertyList",
    },
    per_request: {
      value: awsAppmeshRouteSpecHttp2RouteTimeoutPerRequestPropertyToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteTimeoutPerRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteHttp2RoutePropertyToTerraform(struct?: AwsAppmeshRoute.Http2RoutePropertyOutputReference | AwsAppmeshRoute.Http2RouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: awsAppmeshRouteSpecHttp2RouteActionPropertyToTerraform(struct!.action),
    match: awsAppmeshRouteSpecHttp2RouteMatchPropertyToTerraform(struct!.match),
    retry_policy: awsAppmeshRouteSpecHttp2RouteRetryPolicyPropertyToTerraform(struct!.retryPolicy),
    timeout: awsAppmeshRouteSpecHttp2RouteTimeoutPropertyToTerraform(struct!.timeout),
  }
}


export function awsAppmeshRouteHttp2RoutePropertyToHclTerraform(struct?: AwsAppmeshRoute.Http2RoutePropertyOutputReference | AwsAppmeshRoute.Http2RouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: awsAppmeshRouteSpecHttp2RouteActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteActionPropertyList",
    },
    match: {
      value: awsAppmeshRouteSpecHttp2RouteMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteMatchPropertyList",
    },
    retry_policy: {
      value: awsAppmeshRouteSpecHttp2RouteRetryPolicyPropertyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteRetryPolicyPropertyList",
    },
    timeout: {
      value: awsAppmeshRouteSpecHttp2RouteTimeoutPropertyToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttp2RouteTimeoutPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteActionWeightedTargetPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteActionWeightedTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    virtual_node: cdktn.stringToTerraform(struct!.virtualNode),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function awsAppmeshRouteSpecHttpRouteActionWeightedTargetPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteActionWeightedTargetProperty | cdktn.IResolvable): any {
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
    virtual_node: {
      value: cdktn.stringToHclTerraform(struct!.virtualNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteActionPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteActionPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    weighted_target: cdktn.listMapper(awsAppmeshRouteSpecHttpRouteActionWeightedTargetPropertyToTerraform, true)(struct!.weightedTarget),
  }
}


export function awsAppmeshRouteSpecHttpRouteActionPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteActionPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    weighted_target: {
      value: cdktn.listMapperHcl(awsAppmeshRouteSpecHttpRouteActionWeightedTargetPropertyToHclTerraform, true)(struct!.weightedTarget),
      isBlock: true,
      type: "set",
      storageClassType: "SpecHttpRouteActionWeightedTargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteMatchHeaderMatchRangePropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchHeaderMatchRangePropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteMatchHeaderMatchRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.numberToTerraform(struct!.end),
    start: cdktn.numberToTerraform(struct!.start),
  }
}


export function awsAppmeshRouteSpecHttpRouteMatchHeaderMatchRangePropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchHeaderMatchRangePropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteMatchHeaderMatchRangeProperty): any {
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


export function awsAppmeshRouteSpecHttpRouteMatchHeaderMatchPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchHeaderMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteMatchHeaderMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    regex: cdktn.stringToTerraform(struct!.regex),
    suffix: cdktn.stringToTerraform(struct!.suffix),
    range: awsAppmeshRouteSpecHttpRouteMatchHeaderMatchRangePropertyToTerraform(struct!.range),
  }
}


export function awsAppmeshRouteSpecHttpRouteMatchHeaderMatchPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchHeaderMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteMatchHeaderMatchProperty): any {
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
      value: awsAppmeshRouteSpecHttpRouteMatchHeaderMatchRangePropertyToHclTerraform(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchHeaderMatchRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteMatchHeaderPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invert: cdktn.booleanToTerraform(struct!.invert),
    name: cdktn.stringToTerraform(struct!.name),
    match: awsAppmeshRouteSpecHttpRouteMatchHeaderMatchPropertyToTerraform(struct!.match),
  }
}


export function awsAppmeshRouteSpecHttpRouteMatchHeaderPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchHeaderProperty | cdktn.IResolvable): any {
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
      value: awsAppmeshRouteSpecHttpRouteMatchHeaderMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchHeaderMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteMatchPathPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchPathPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteMatchPathProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function awsAppmeshRouteSpecHttpRouteMatchPathPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchPathPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteMatchPathProperty): any {
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


export function awsAppmeshRouteSpecHttpRouteMatchQueryParameterMatchPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchQueryParameterMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteMatchQueryParameterMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
  }
}


export function awsAppmeshRouteSpecHttpRouteMatchQueryParameterMatchPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchQueryParameterMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteMatchQueryParameterMatchProperty): any {
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


export function awsAppmeshRouteSpecHttpRouteMatchQueryParameterPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchQueryParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    match: awsAppmeshRouteSpecHttpRouteMatchQueryParameterMatchPropertyToTerraform(struct!.match),
  }
}


export function awsAppmeshRouteSpecHttpRouteMatchQueryParameterPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchQueryParameterProperty | cdktn.IResolvable): any {
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
      value: awsAppmeshRouteSpecHttpRouteMatchQueryParameterMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchQueryParameterMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteMatchPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    port: cdktn.numberToTerraform(struct!.port),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    scheme: cdktn.stringToTerraform(struct!.scheme),
    header: cdktn.listMapper(awsAppmeshRouteSpecHttpRouteMatchHeaderPropertyToTerraform, true)(struct!.header),
    path: awsAppmeshRouteSpecHttpRouteMatchPathPropertyToTerraform(struct!.path),
    query_parameter: cdktn.listMapper(awsAppmeshRouteSpecHttpRouteMatchQueryParameterPropertyToTerraform, true)(struct!.queryParameter),
  }
}


export function awsAppmeshRouteSpecHttpRouteMatchPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteMatchPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(awsAppmeshRouteSpecHttpRouteMatchHeaderPropertyToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "SpecHttpRouteMatchHeaderPropertyList",
    },
    path: {
      value: awsAppmeshRouteSpecHttpRouteMatchPathPropertyToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchPathPropertyList",
    },
    query_parameter: {
      value: cdktn.listMapperHcl(awsAppmeshRouteSpecHttpRouteMatchQueryParameterPropertyToHclTerraform, true)(struct!.queryParameter),
      isBlock: true,
      type: "set",
      storageClassType: "SpecHttpRouteMatchQueryParameterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteRetryPolicyPerRetryTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteRetryPolicyPerRetryTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteRetryPolicyPerRetryTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteRetryPolicyPerRetryTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteRetryPolicyPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteRetryPolicyPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteRetryPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_retry_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.httpRetryEvents),
    max_retries: cdktn.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tcpRetryEvents),
    per_retry_timeout: awsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutPropertyToTerraform(struct!.perRetryTimeout),
  }
}


export function awsAppmeshRouteSpecHttpRouteRetryPolicyPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteRetryPolicyPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteRetryPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_retry_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.httpRetryEvents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_retries: {
      value: cdktn.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_retry_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tcpRetryEvents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_retry_timeout: {
      value: awsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutPropertyToHclTerraform(struct!.perRetryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteRetryPolicyPerRetryTimeoutPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteTimeoutIdlePropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteTimeoutIdlePropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteTimeoutIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAppmeshRouteSpecHttpRouteTimeoutIdlePropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteTimeoutIdlePropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteTimeoutIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteTimeoutPerRequestPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteTimeoutPerRequestPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteTimeoutPerRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAppmeshRouteSpecHttpRouteTimeoutPerRequestPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteTimeoutPerRequestPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteTimeoutPerRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecHttpRouteTimeoutPropertyToTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle: awsAppmeshRouteSpecHttpRouteTimeoutIdlePropertyToTerraform(struct!.idle),
    per_request: awsAppmeshRouteSpecHttpRouteTimeoutPerRequestPropertyToTerraform(struct!.perRequest),
  }
}


export function awsAppmeshRouteSpecHttpRouteTimeoutPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecHttpRouteTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecHttpRouteTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle: {
      value: awsAppmeshRouteSpecHttpRouteTimeoutIdlePropertyToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteTimeoutIdlePropertyList",
    },
    per_request: {
      value: awsAppmeshRouteSpecHttpRouteTimeoutPerRequestPropertyToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteTimeoutPerRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteHttpRoutePropertyToTerraform(struct?: AwsAppmeshRoute.HttpRoutePropertyOutputReference | AwsAppmeshRoute.HttpRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: awsAppmeshRouteSpecHttpRouteActionPropertyToTerraform(struct!.action),
    match: awsAppmeshRouteSpecHttpRouteMatchPropertyToTerraform(struct!.match),
    retry_policy: awsAppmeshRouteSpecHttpRouteRetryPolicyPropertyToTerraform(struct!.retryPolicy),
    timeout: awsAppmeshRouteSpecHttpRouteTimeoutPropertyToTerraform(struct!.timeout),
  }
}


export function awsAppmeshRouteHttpRoutePropertyToHclTerraform(struct?: AwsAppmeshRoute.HttpRoutePropertyOutputReference | AwsAppmeshRoute.HttpRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: awsAppmeshRouteSpecHttpRouteActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteActionPropertyList",
    },
    match: {
      value: awsAppmeshRouteSpecHttpRouteMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteMatchPropertyList",
    },
    retry_policy: {
      value: awsAppmeshRouteSpecHttpRouteRetryPolicyPropertyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteRetryPolicyPropertyList",
    },
    timeout: {
      value: awsAppmeshRouteSpecHttpRouteTimeoutPropertyToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "SpecHttpRouteTimeoutPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecTcpRouteActionWeightedTargetPropertyToTerraform(struct?: AwsAppmeshRoute.SpecTcpRouteActionWeightedTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    virtual_node: cdktn.stringToTerraform(struct!.virtualNode),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function awsAppmeshRouteSpecTcpRouteActionWeightedTargetPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecTcpRouteActionWeightedTargetProperty | cdktn.IResolvable): any {
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
    virtual_node: {
      value: cdktn.stringToHclTerraform(struct!.virtualNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecTcpRouteActionPropertyToTerraform(struct?: AwsAppmeshRoute.SpecTcpRouteActionPropertyOutputReference | AwsAppmeshRoute.SpecTcpRouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    weighted_target: cdktn.listMapper(awsAppmeshRouteSpecTcpRouteActionWeightedTargetPropertyToTerraform, true)(struct!.weightedTarget),
  }
}


export function awsAppmeshRouteSpecTcpRouteActionPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecTcpRouteActionPropertyOutputReference | AwsAppmeshRoute.SpecTcpRouteActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    weighted_target: {
      value: cdktn.listMapperHcl(awsAppmeshRouteSpecTcpRouteActionWeightedTargetPropertyToHclTerraform, true)(struct!.weightedTarget),
      isBlock: true,
      type: "set",
      storageClassType: "SpecTcpRouteActionWeightedTargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecTcpRouteMatchPropertyToTerraform(struct?: AwsAppmeshRoute.SpecTcpRouteMatchPropertyOutputReference | AwsAppmeshRoute.SpecTcpRouteMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function awsAppmeshRouteSpecTcpRouteMatchPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecTcpRouteMatchPropertyOutputReference | AwsAppmeshRoute.SpecTcpRouteMatchProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecTcpRouteTimeoutIdlePropertyToTerraform(struct?: AwsAppmeshRoute.SpecTcpRouteTimeoutIdlePropertyOutputReference | AwsAppmeshRoute.SpecTcpRouteTimeoutIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsAppmeshRouteSpecTcpRouteTimeoutIdlePropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecTcpRouteTimeoutIdlePropertyOutputReference | AwsAppmeshRoute.SpecTcpRouteTimeoutIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecTcpRouteTimeoutPropertyToTerraform(struct?: AwsAppmeshRoute.SpecTcpRouteTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecTcpRouteTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle: awsAppmeshRouteSpecTcpRouteTimeoutIdlePropertyToTerraform(struct!.idle),
  }
}


export function awsAppmeshRouteSpecTcpRouteTimeoutPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecTcpRouteTimeoutPropertyOutputReference | AwsAppmeshRoute.SpecTcpRouteTimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle: {
      value: awsAppmeshRouteSpecTcpRouteTimeoutIdlePropertyToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "SpecTcpRouteTimeoutIdlePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteTcpRoutePropertyToTerraform(struct?: AwsAppmeshRoute.TcpRoutePropertyOutputReference | AwsAppmeshRoute.TcpRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: awsAppmeshRouteSpecTcpRouteActionPropertyToTerraform(struct!.action),
    match: awsAppmeshRouteSpecTcpRouteMatchPropertyToTerraform(struct!.match),
    timeout: awsAppmeshRouteSpecTcpRouteTimeoutPropertyToTerraform(struct!.timeout),
  }
}


export function awsAppmeshRouteTcpRoutePropertyToHclTerraform(struct?: AwsAppmeshRoute.TcpRoutePropertyOutputReference | AwsAppmeshRoute.TcpRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: awsAppmeshRouteSpecTcpRouteActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SpecTcpRouteActionPropertyList",
    },
    match: {
      value: awsAppmeshRouteSpecTcpRouteMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecTcpRouteMatchPropertyList",
    },
    timeout: {
      value: awsAppmeshRouteSpecTcpRouteTimeoutPropertyToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "SpecTcpRouteTimeoutPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshRouteSpecPropertyToTerraform(struct?: AwsAppmeshRoute.SpecPropertyOutputReference | AwsAppmeshRoute.SpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    grpc_route: awsAppmeshRouteGrpcRoutePropertyToTerraform(struct!.grpcRoute),
    http2_route: awsAppmeshRouteHttp2RoutePropertyToTerraform(struct!.http2Route),
    http_route: awsAppmeshRouteHttpRoutePropertyToTerraform(struct!.httpRoute),
    tcp_route: awsAppmeshRouteTcpRoutePropertyToTerraform(struct!.tcpRoute),
  }
}


export function awsAppmeshRouteSpecPropertyToHclTerraform(struct?: AwsAppmeshRoute.SpecPropertyOutputReference | AwsAppmeshRoute.SpecProperty): any {
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
      value: awsAppmeshRouteGrpcRoutePropertyToHclTerraform(struct!.grpcRoute),
      isBlock: true,
      type: "list",
      storageClassType: "GrpcRoutePropertyList",
    },
    http2_route: {
      value: awsAppmeshRouteHttp2RoutePropertyToHclTerraform(struct!.http2Route),
      isBlock: true,
      type: "list",
      storageClassType: "Http2RoutePropertyList",
    },
    http_route: {
      value: awsAppmeshRouteHttpRoutePropertyToHclTerraform(struct!.httpRoute),
      isBlock: true,
      type: "list",
      storageClassType: "HttpRoutePropertyList",
    },
    tcp_route: {
      value: awsAppmeshRouteTcpRoutePropertyToHclTerraform(struct!.tcpRoute),
      isBlock: true,
      type: "list",
      storageClassType: "TcpRoutePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAppmeshRoute {
export interface SpecGrpcRouteActionWeightedTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#port AwsAppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#virtual_node AwsAppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#weight AwsAppmeshRoute#weight}
  */
  readonly weight: number;
}
export class SpecGrpcRouteActionWeightedTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecGrpcRouteActionWeightedTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNode = this._virtualNode;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteActionWeightedTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNode = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNode = value.virtualNode;
      this._weight = value.weight;
    }
  }

  // port - computed: true, optional: true, required: false
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

  // virtual_node - computed: false, optional: false, required: true
  private _virtualNode?: string; 
  public get virtualNode() {
    return this.getStringAttribute('virtual_node');
  }
  public set virtualNode(value: string) {
    this._virtualNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeInput() {
    return this._virtualNode;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class SpecGrpcRouteActionWeightedTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : SpecGrpcRouteActionWeightedTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): SpecGrpcRouteActionWeightedTargetPropertyOutputReference {
    return new SpecGrpcRouteActionWeightedTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecGrpcRouteActionProperty {
  /**
  * weighted_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#weighted_target AwsAppmeshRoute#weighted_target}
  */
  readonly weightedTarget: SpecGrpcRouteActionWeightedTargetProperty[] | cdktn.IResolvable;
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
    if (this._weightedTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTarget = this._weightedTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weightedTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weightedTarget.internalValue = value.weightedTarget;
    }
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget = new SpecGrpcRouteActionWeightedTargetPropertyList(this, "weighted_target", true);
  public get weightedTarget() {
    return this._weightedTarget;
  }
  public putWeightedTarget(value: SpecGrpcRouteActionWeightedTargetProperty[] | cdktn.IResolvable) {
    this._weightedTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget.internalValue;
  }
}
export interface SpecGrpcRouteMatchMetadataMatchRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#end AwsAppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#start AwsAppmeshRoute#start}
  */
  readonly start: number;
}
export class SpecGrpcRouteMatchMetadataMatchRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteMatchMetadataMatchRangeProperty | undefined {
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

  public set internalValue(value: SpecGrpcRouteMatchMetadataMatchRangeProperty | undefined) {
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
export interface SpecGrpcRouteMatchMetadataMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#exact AwsAppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#prefix AwsAppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#regex AwsAppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#suffix AwsAppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#range AwsAppmeshRoute#range}
  */
  readonly range?: SpecGrpcRouteMatchMetadataMatchRangeProperty;
}
export class SpecGrpcRouteMatchMetadataMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteMatchMetadataMatchProperty | undefined {
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

  public set internalValue(value: SpecGrpcRouteMatchMetadataMatchProperty | undefined) {
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
  private _range = new SpecGrpcRouteMatchMetadataMatchRangePropertyOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: SpecGrpcRouteMatchMetadataMatchRangeProperty) {
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
export interface MetadataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#invert AwsAppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#name AwsAppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#match AwsAppmeshRoute#match}
  */
  readonly match?: SpecGrpcRouteMatchMetadataMatchProperty;
}
export class MetadataPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MetadataProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MetadataProperty | cdktn.IResolvable | undefined) {
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
  private _match = new SpecGrpcRouteMatchMetadataMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecGrpcRouteMatchMetadataMatchProperty) {
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

export class MetadataPropertyList extends cdktn.ComplexList {
  public internalValue? : MetadataProperty[] | cdktn.IResolvable

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
  public get(index: number): MetadataPropertyOutputReference {
    return new MetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecGrpcRouteMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#method_name AwsAppmeshRoute#method_name}
  */
  readonly methodName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#port AwsAppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#prefix AwsAppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#service_name AwsAppmeshRoute#service_name}
  */
  readonly serviceName?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#metadata AwsAppmeshRoute#metadata}
  */
  readonly metadata?: MetadataProperty[] | cdktn.IResolvable;
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
    if (this._methodName !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodName = this._methodName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteMatchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methodName = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._serviceName = undefined;
      this._metadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methodName = value.methodName;
      this._port = value.port;
      this._prefix = value.prefix;
      this._serviceName = value.serviceName;
      this._metadata.internalValue = value.metadata;
    }
  }

  // method_name - computed: false, optional: true, required: false
  private _methodName?: string; 
  public get methodName() {
    return this.getStringAttribute('method_name');
  }
  public set methodName(value: string) {
    this._methodName = value;
  }
  public resetMethodName() {
    this._methodName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodNameInput() {
    return this._methodName;
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

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new MetadataPropertyList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: MetadataProperty[] | cdktn.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface SpecGrpcRouteRetryPolicyPerRetryTimeoutProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#unit AwsAppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#value AwsAppmeshRoute#value}
  */
  readonly value: number;
}
export class SpecGrpcRouteRetryPolicyPerRetryTimeoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteRetryPolicyPerRetryTimeoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteRetryPolicyPerRetryTimeoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecGrpcRouteRetryPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#grpc_retry_events AwsAppmeshRoute#grpc_retry_events}
  */
  readonly grpcRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#http_retry_events AwsAppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#max_retries AwsAppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#tcp_retry_events AwsAppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#per_retry_timeout AwsAppmeshRoute#per_retry_timeout}
  */
  readonly perRetryTimeout: SpecGrpcRouteRetryPolicyPerRetryTimeoutProperty;
}
export class SpecGrpcRouteRetryPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteRetryPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRetryEvents = this._grpcRetryEvents;
    }
    if (this._httpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryEvents = this._httpRetryEvents;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._tcpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
    }
    if (this._perRetryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRetryTimeout = this._perRetryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteRetryPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpcRetryEvents = undefined;
      this._httpRetryEvents = undefined;
      this._maxRetries = undefined;
      this._tcpRetryEvents = undefined;
      this._perRetryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpcRetryEvents = value.grpcRetryEvents;
      this._httpRetryEvents = value.httpRetryEvents;
      this._maxRetries = value.maxRetries;
      this._tcpRetryEvents = value.tcpRetryEvents;
      this._perRetryTimeout.internalValue = value.perRetryTimeout;
    }
  }

  // grpc_retry_events - computed: false, optional: true, required: false
  private _grpcRetryEvents?: string[]; 
  public get grpcRetryEvents() {
    return cdktn.Fn.tolist(this.getListAttribute('grpc_retry_events'));
  }
  public set grpcRetryEvents(value: string[]) {
    this._grpcRetryEvents = value;
  }
  public resetGrpcRetryEvents() {
    this._grpcRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRetryEventsInput() {
    return this._grpcRetryEvents;
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[]; 
  public get httpRetryEvents() {
    return cdktn.Fn.tolist(this.getListAttribute('http_retry_events'));
  }
  public set httpRetryEvents(value: string[]) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[]; 
  public get tcpRetryEvents() {
    return cdktn.Fn.tolist(this.getListAttribute('tcp_retry_events'));
  }
  public set tcpRetryEvents(value: string[]) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents;
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout = new SpecGrpcRouteRetryPolicyPerRetryTimeoutPropertyOutputReference(this, "per_retry_timeout");
  public get perRetryTimeout() {
    return this._perRetryTimeout;
  }
  public putPerRetryTimeout(value: SpecGrpcRouteRetryPolicyPerRetryTimeoutProperty) {
    this._perRetryTimeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout.internalValue;
  }
}
export interface SpecGrpcRouteTimeoutIdleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#unit AwsAppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#value AwsAppmeshRoute#value}
  */
  readonly value: number;
}
export class SpecGrpcRouteTimeoutIdlePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteTimeoutIdleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteTimeoutIdleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecGrpcRouteTimeoutPerRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#unit AwsAppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#value AwsAppmeshRoute#value}
  */
  readonly value: number;
}
export class SpecGrpcRouteTimeoutPerRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteTimeoutPerRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteTimeoutPerRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecGrpcRouteTimeoutProperty {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#idle AwsAppmeshRoute#idle}
  */
  readonly idle?: SpecGrpcRouteTimeoutIdleProperty;
  /**
  * per_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#per_request AwsAppmeshRoute#per_request}
  */
  readonly perRequest?: SpecGrpcRouteTimeoutPerRequestProperty;
}
export class SpecGrpcRouteTimeoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecGrpcRouteTimeoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecGrpcRouteTimeoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new SpecGrpcRouteTimeoutIdlePropertyOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: SpecGrpcRouteTimeoutIdleProperty) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new SpecGrpcRouteTimeoutPerRequestPropertyOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: SpecGrpcRouteTimeoutPerRequestProperty) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface GrpcRouteProperty {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#action AwsAppmeshRoute#action}
  */
  readonly action: SpecGrpcRouteActionProperty;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#match AwsAppmeshRoute#match}
  */
  readonly match?: SpecGrpcRouteMatchProperty;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#retry_policy AwsAppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: SpecGrpcRouteRetryPolicyProperty;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#timeout AwsAppmeshRoute#timeout}
  */
  readonly timeout?: SpecGrpcRouteTimeoutProperty;
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
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrpcRouteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
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

  // match - computed: false, optional: true, required: false
  private _match = new SpecGrpcRouteMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecGrpcRouteMatchProperty) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new SpecGrpcRouteRetryPolicyPropertyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: SpecGrpcRouteRetryPolicyProperty) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new SpecGrpcRouteTimeoutPropertyOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: SpecGrpcRouteTimeoutProperty) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface SpecHttp2RouteActionWeightedTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#port AwsAppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#virtual_node AwsAppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#weight AwsAppmeshRoute#weight}
  */
  readonly weight: number;
}
export class SpecHttp2RouteActionWeightedTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecHttp2RouteActionWeightedTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNode = this._virtualNode;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteActionWeightedTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNode = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNode = value.virtualNode;
      this._weight = value.weight;
    }
  }

  // port - computed: true, optional: true, required: false
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

  // virtual_node - computed: false, optional: false, required: true
  private _virtualNode?: string; 
  public get virtualNode() {
    return this.getStringAttribute('virtual_node');
  }
  public set virtualNode(value: string) {
    this._virtualNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeInput() {
    return this._virtualNode;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class SpecHttp2RouteActionWeightedTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : SpecHttp2RouteActionWeightedTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): SpecHttp2RouteActionWeightedTargetPropertyOutputReference {
    return new SpecHttp2RouteActionWeightedTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecHttp2RouteActionProperty {
  /**
  * weighted_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#weighted_target AwsAppmeshRoute#weighted_target}
  */
  readonly weightedTarget: SpecHttp2RouteActionWeightedTargetProperty[] | cdktn.IResolvable;
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
    if (this._weightedTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTarget = this._weightedTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weightedTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weightedTarget.internalValue = value.weightedTarget;
    }
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget = new SpecHttp2RouteActionWeightedTargetPropertyList(this, "weighted_target", true);
  public get weightedTarget() {
    return this._weightedTarget;
  }
  public putWeightedTarget(value: SpecHttp2RouteActionWeightedTargetProperty[] | cdktn.IResolvable) {
    this._weightedTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget.internalValue;
  }
}
export interface SpecHttp2RouteMatchHeaderMatchRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#end AwsAppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#start AwsAppmeshRoute#start}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#exact AwsAppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#prefix AwsAppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#regex AwsAppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#suffix AwsAppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#range AwsAppmeshRoute#range}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#invert AwsAppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#name AwsAppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#match AwsAppmeshRoute#match}
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
export interface SpecHttp2RouteMatchPathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#exact AwsAppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#regex AwsAppmeshRoute#regex}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#exact AwsAppmeshRoute#exact}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#name AwsAppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#match AwsAppmeshRoute#match}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#method AwsAppmeshRoute#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#port AwsAppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#prefix AwsAppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#scheme AwsAppmeshRoute#scheme}
  */
  readonly scheme?: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#header AwsAppmeshRoute#header}
  */
  readonly header?: SpecHttp2RouteMatchHeaderProperty[] | cdktn.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#path AwsAppmeshRoute#path}
  */
  readonly path?: SpecHttp2RouteMatchPathProperty;
  /**
  * query_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#query_parameter AwsAppmeshRoute#query_parameter}
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
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
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
      this._method = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._scheme = undefined;
      this._header.internalValue = undefined;
      this._path.internalValue = undefined;
      this._queryParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._port = value.port;
      this._prefix = value.prefix;
      this._scheme = value.scheme;
      this._header.internalValue = value.header;
      this._path.internalValue = value.path;
      this._queryParameter.internalValue = value.queryParameter;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
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
export interface SpecHttp2RouteRetryPolicyPerRetryTimeoutProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#unit AwsAppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#value AwsAppmeshRoute#value}
  */
  readonly value: number;
}
export class SpecHttp2RouteRetryPolicyPerRetryTimeoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteRetryPolicyPerRetryTimeoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteRetryPolicyPerRetryTimeoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecHttp2RouteRetryPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#http_retry_events AwsAppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#max_retries AwsAppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#tcp_retry_events AwsAppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#per_retry_timeout AwsAppmeshRoute#per_retry_timeout}
  */
  readonly perRetryTimeout: SpecHttp2RouteRetryPolicyPerRetryTimeoutProperty;
}
export class SpecHttp2RouteRetryPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteRetryPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryEvents = this._httpRetryEvents;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._tcpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
    }
    if (this._perRetryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRetryTimeout = this._perRetryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteRetryPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpRetryEvents = undefined;
      this._maxRetries = undefined;
      this._tcpRetryEvents = undefined;
      this._perRetryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpRetryEvents = value.httpRetryEvents;
      this._maxRetries = value.maxRetries;
      this._tcpRetryEvents = value.tcpRetryEvents;
      this._perRetryTimeout.internalValue = value.perRetryTimeout;
    }
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[]; 
  public get httpRetryEvents() {
    return cdktn.Fn.tolist(this.getListAttribute('http_retry_events'));
  }
  public set httpRetryEvents(value: string[]) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[]; 
  public get tcpRetryEvents() {
    return cdktn.Fn.tolist(this.getListAttribute('tcp_retry_events'));
  }
  public set tcpRetryEvents(value: string[]) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents;
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout = new SpecHttp2RouteRetryPolicyPerRetryTimeoutPropertyOutputReference(this, "per_retry_timeout");
  public get perRetryTimeout() {
    return this._perRetryTimeout;
  }
  public putPerRetryTimeout(value: SpecHttp2RouteRetryPolicyPerRetryTimeoutProperty) {
    this._perRetryTimeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout.internalValue;
  }
}
export interface SpecHttp2RouteTimeoutIdleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#unit AwsAppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#value AwsAppmeshRoute#value}
  */
  readonly value: number;
}
export class SpecHttp2RouteTimeoutIdlePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteTimeoutIdleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteTimeoutIdleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecHttp2RouteTimeoutPerRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#unit AwsAppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#value AwsAppmeshRoute#value}
  */
  readonly value: number;
}
export class SpecHttp2RouteTimeoutPerRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteTimeoutPerRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteTimeoutPerRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecHttp2RouteTimeoutProperty {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#idle AwsAppmeshRoute#idle}
  */
  readonly idle?: SpecHttp2RouteTimeoutIdleProperty;
  /**
  * per_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#per_request AwsAppmeshRoute#per_request}
  */
  readonly perRequest?: SpecHttp2RouteTimeoutPerRequestProperty;
}
export class SpecHttp2RouteTimeoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttp2RouteTimeoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttp2RouteTimeoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new SpecHttp2RouteTimeoutIdlePropertyOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: SpecHttp2RouteTimeoutIdleProperty) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new SpecHttp2RouteTimeoutPerRequestPropertyOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: SpecHttp2RouteTimeoutPerRequestProperty) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface Http2RouteProperty {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#action AwsAppmeshRoute#action}
  */
  readonly action: SpecHttp2RouteActionProperty;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#match AwsAppmeshRoute#match}
  */
  readonly match: SpecHttp2RouteMatchProperty;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#retry_policy AwsAppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: SpecHttp2RouteRetryPolicyProperty;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#timeout AwsAppmeshRoute#timeout}
  */
  readonly timeout?: SpecHttp2RouteTimeoutProperty;
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
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Http2RouteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
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

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new SpecHttp2RouteRetryPolicyPropertyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: SpecHttp2RouteRetryPolicyProperty) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new SpecHttp2RouteTimeoutPropertyOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: SpecHttp2RouteTimeoutProperty) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface SpecHttpRouteActionWeightedTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#port AwsAppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#virtual_node AwsAppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#weight AwsAppmeshRoute#weight}
  */
  readonly weight: number;
}
export class SpecHttpRouteActionWeightedTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecHttpRouteActionWeightedTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNode = this._virtualNode;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteActionWeightedTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNode = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNode = value.virtualNode;
      this._weight = value.weight;
    }
  }

  // port - computed: true, optional: true, required: false
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

  // virtual_node - computed: false, optional: false, required: true
  private _virtualNode?: string; 
  public get virtualNode() {
    return this.getStringAttribute('virtual_node');
  }
  public set virtualNode(value: string) {
    this._virtualNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeInput() {
    return this._virtualNode;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class SpecHttpRouteActionWeightedTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : SpecHttpRouteActionWeightedTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): SpecHttpRouteActionWeightedTargetPropertyOutputReference {
    return new SpecHttpRouteActionWeightedTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecHttpRouteActionProperty {
  /**
  * weighted_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#weighted_target AwsAppmeshRoute#weighted_target}
  */
  readonly weightedTarget: SpecHttpRouteActionWeightedTargetProperty[] | cdktn.IResolvable;
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
    if (this._weightedTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTarget = this._weightedTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weightedTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weightedTarget.internalValue = value.weightedTarget;
    }
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget = new SpecHttpRouteActionWeightedTargetPropertyList(this, "weighted_target", true);
  public get weightedTarget() {
    return this._weightedTarget;
  }
  public putWeightedTarget(value: SpecHttpRouteActionWeightedTargetProperty[] | cdktn.IResolvable) {
    this._weightedTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget.internalValue;
  }
}
export interface SpecHttpRouteMatchHeaderMatchRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#end AwsAppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#start AwsAppmeshRoute#start}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#exact AwsAppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#prefix AwsAppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#regex AwsAppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#suffix AwsAppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#range AwsAppmeshRoute#range}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#invert AwsAppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#name AwsAppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#match AwsAppmeshRoute#match}
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
export interface SpecHttpRouteMatchPathProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#exact AwsAppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#regex AwsAppmeshRoute#regex}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#exact AwsAppmeshRoute#exact}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#name AwsAppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#match AwsAppmeshRoute#match}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#method AwsAppmeshRoute#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#port AwsAppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#prefix AwsAppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#scheme AwsAppmeshRoute#scheme}
  */
  readonly scheme?: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#header AwsAppmeshRoute#header}
  */
  readonly header?: SpecHttpRouteMatchHeaderProperty[] | cdktn.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#path AwsAppmeshRoute#path}
  */
  readonly path?: SpecHttpRouteMatchPathProperty;
  /**
  * query_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#query_parameter AwsAppmeshRoute#query_parameter}
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
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
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
      this._method = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._scheme = undefined;
      this._header.internalValue = undefined;
      this._path.internalValue = undefined;
      this._queryParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._port = value.port;
      this._prefix = value.prefix;
      this._scheme = value.scheme;
      this._header.internalValue = value.header;
      this._path.internalValue = value.path;
      this._queryParameter.internalValue = value.queryParameter;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
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
export interface SpecHttpRouteRetryPolicyPerRetryTimeoutProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#unit AwsAppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#value AwsAppmeshRoute#value}
  */
  readonly value: number;
}
export class SpecHttpRouteRetryPolicyPerRetryTimeoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteRetryPolicyPerRetryTimeoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteRetryPolicyPerRetryTimeoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecHttpRouteRetryPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#http_retry_events AwsAppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#max_retries AwsAppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#tcp_retry_events AwsAppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#per_retry_timeout AwsAppmeshRoute#per_retry_timeout}
  */
  readonly perRetryTimeout: SpecHttpRouteRetryPolicyPerRetryTimeoutProperty;
}
export class SpecHttpRouteRetryPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteRetryPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryEvents = this._httpRetryEvents;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._tcpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
    }
    if (this._perRetryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRetryTimeout = this._perRetryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteRetryPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpRetryEvents = undefined;
      this._maxRetries = undefined;
      this._tcpRetryEvents = undefined;
      this._perRetryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpRetryEvents = value.httpRetryEvents;
      this._maxRetries = value.maxRetries;
      this._tcpRetryEvents = value.tcpRetryEvents;
      this._perRetryTimeout.internalValue = value.perRetryTimeout;
    }
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[]; 
  public get httpRetryEvents() {
    return cdktn.Fn.tolist(this.getListAttribute('http_retry_events'));
  }
  public set httpRetryEvents(value: string[]) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[]; 
  public get tcpRetryEvents() {
    return cdktn.Fn.tolist(this.getListAttribute('tcp_retry_events'));
  }
  public set tcpRetryEvents(value: string[]) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents;
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout = new SpecHttpRouteRetryPolicyPerRetryTimeoutPropertyOutputReference(this, "per_retry_timeout");
  public get perRetryTimeout() {
    return this._perRetryTimeout;
  }
  public putPerRetryTimeout(value: SpecHttpRouteRetryPolicyPerRetryTimeoutProperty) {
    this._perRetryTimeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout.internalValue;
  }
}
export interface SpecHttpRouteTimeoutIdleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#unit AwsAppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#value AwsAppmeshRoute#value}
  */
  readonly value: number;
}
export class SpecHttpRouteTimeoutIdlePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteTimeoutIdleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteTimeoutIdleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecHttpRouteTimeoutPerRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#unit AwsAppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#value AwsAppmeshRoute#value}
  */
  readonly value: number;
}
export class SpecHttpRouteTimeoutPerRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteTimeoutPerRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteTimeoutPerRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecHttpRouteTimeoutProperty {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#idle AwsAppmeshRoute#idle}
  */
  readonly idle?: SpecHttpRouteTimeoutIdleProperty;
  /**
  * per_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#per_request AwsAppmeshRoute#per_request}
  */
  readonly perRequest?: SpecHttpRouteTimeoutPerRequestProperty;
}
export class SpecHttpRouteTimeoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecHttpRouteTimeoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecHttpRouteTimeoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new SpecHttpRouteTimeoutIdlePropertyOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: SpecHttpRouteTimeoutIdleProperty) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new SpecHttpRouteTimeoutPerRequestPropertyOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: SpecHttpRouteTimeoutPerRequestProperty) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface HttpRouteProperty {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#action AwsAppmeshRoute#action}
  */
  readonly action: SpecHttpRouteActionProperty;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#match AwsAppmeshRoute#match}
  */
  readonly match: SpecHttpRouteMatchProperty;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#retry_policy AwsAppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: SpecHttpRouteRetryPolicyProperty;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#timeout AwsAppmeshRoute#timeout}
  */
  readonly timeout?: SpecHttpRouteTimeoutProperty;
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
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpRouteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
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

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new SpecHttpRouteRetryPolicyPropertyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: SpecHttpRouteRetryPolicyProperty) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new SpecHttpRouteTimeoutPropertyOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: SpecHttpRouteTimeoutProperty) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface SpecTcpRouteActionWeightedTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#port AwsAppmeshRoute#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#virtual_node AwsAppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#weight AwsAppmeshRoute#weight}
  */
  readonly weight: number;
}
export class SpecTcpRouteActionWeightedTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecTcpRouteActionWeightedTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNode = this._virtualNode;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecTcpRouteActionWeightedTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNode = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNode = value.virtualNode;
      this._weight = value.weight;
    }
  }

  // port - computed: true, optional: true, required: false
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

  // virtual_node - computed: false, optional: false, required: true
  private _virtualNode?: string; 
  public get virtualNode() {
    return this.getStringAttribute('virtual_node');
  }
  public set virtualNode(value: string) {
    this._virtualNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeInput() {
    return this._virtualNode;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class SpecTcpRouteActionWeightedTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : SpecTcpRouteActionWeightedTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): SpecTcpRouteActionWeightedTargetPropertyOutputReference {
    return new SpecTcpRouteActionWeightedTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecTcpRouteActionProperty {
  /**
  * weighted_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#weighted_target AwsAppmeshRoute#weighted_target}
  */
  readonly weightedTarget: SpecTcpRouteActionWeightedTargetProperty[] | cdktn.IResolvable;
}
export class SpecTcpRouteActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecTcpRouteActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightedTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTarget = this._weightedTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecTcpRouteActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weightedTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weightedTarget.internalValue = value.weightedTarget;
    }
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget = new SpecTcpRouteActionWeightedTargetPropertyList(this, "weighted_target", true);
  public get weightedTarget() {
    return this._weightedTarget;
  }
  public putWeightedTarget(value: SpecTcpRouteActionWeightedTargetProperty[] | cdktn.IResolvable) {
    this._weightedTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget.internalValue;
  }
}
export interface SpecTcpRouteMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#port AwsAppmeshRoute#port}
  */
  readonly port?: number;
}
export class SpecTcpRouteMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecTcpRouteMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecTcpRouteMatchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
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
}
export interface SpecTcpRouteTimeoutIdleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#unit AwsAppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#value AwsAppmeshRoute#value}
  */
  readonly value: number;
}
export class SpecTcpRouteTimeoutIdlePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecTcpRouteTimeoutIdleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecTcpRouteTimeoutIdleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SpecTcpRouteTimeoutProperty {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#idle AwsAppmeshRoute#idle}
  */
  readonly idle?: SpecTcpRouteTimeoutIdleProperty;
}
export class SpecTcpRouteTimeoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecTcpRouteTimeoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecTcpRouteTimeoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idle.internalValue = value.idle;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new SpecTcpRouteTimeoutIdlePropertyOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: SpecTcpRouteTimeoutIdleProperty) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }
}
export interface TcpRouteProperty {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#action AwsAppmeshRoute#action}
  */
  readonly action: SpecTcpRouteActionProperty;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#match AwsAppmeshRoute#match}
  */
  readonly match?: SpecTcpRouteMatchProperty;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#timeout AwsAppmeshRoute#timeout}
  */
  readonly timeout?: SpecTcpRouteTimeoutProperty;
}
export class TcpRoutePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcpRouteProperty | undefined {
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
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcpRouteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._timeout.internalValue = value.timeout;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new SpecTcpRouteActionPropertyOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SpecTcpRouteActionProperty) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new SpecTcpRouteMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecTcpRouteMatchProperty) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new SpecTcpRouteTimeoutPropertyOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: SpecTcpRouteTimeoutProperty) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface SpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#priority AwsAppmeshRoute#priority}
  */
  readonly priority?: number;
  /**
  * grpc_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#grpc_route AwsAppmeshRoute#grpc_route}
  */
  readonly grpcRoute?: GrpcRouteProperty;
  /**
  * http2_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#http2_route AwsAppmeshRoute#http2_route}
  */
  readonly http2Route?: Http2RouteProperty;
  /**
  * http_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#http_route AwsAppmeshRoute#http_route}
  */
  readonly httpRoute?: HttpRouteProperty;
  /**
  * tcp_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_route#tcp_route AwsAppmeshRoute#tcp_route}
  */
  readonly tcpRoute?: TcpRouteProperty;
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
    if (this._tcpRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRoute = this._tcpRoute?.internalValue;
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
      this._tcpRoute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
      this._grpcRoute.internalValue = value.grpcRoute;
      this._http2Route.internalValue = value.http2Route;
      this._httpRoute.internalValue = value.httpRoute;
      this._tcpRoute.internalValue = value.tcpRoute;
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

  // tcp_route - computed: false, optional: true, required: false
  private _tcpRoute = new TcpRoutePropertyOutputReference(this, "tcp_route");
  public get tcpRoute() {
    return this._tcpRoute;
  }
  public putTcpRoute(value: TcpRouteProperty) {
    this._tcpRoute.internalValue = value;
  }
  public resetTcpRoute() {
    this._tcpRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRouteInput() {
    return this._tcpRoute.internalValue;
  }
}
}
