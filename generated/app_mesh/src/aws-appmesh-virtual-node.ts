// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfVirtualNodeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#id TfVirtualNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#mesh_name TfVirtualNode#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#mesh_owner TfVirtualNode#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#name TfVirtualNode#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#region TfVirtualNode#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#tags TfVirtualNode#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#tags_all TfVirtualNode#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#spec TfVirtualNode#spec}
  */
  readonly spec: TfVirtualNode.SpecProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node aws_appmesh_virtual_node}
*/
export class TfVirtualNode extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appmesh_virtual_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfVirtualNode resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfVirtualNode to import
  * @param importFromId The id of the existing TfVirtualNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfVirtualNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appmesh_virtual_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node aws_appmesh_virtual_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfVirtualNodeConfig
  */
  public constructor(scope: Construct, id: string, config: TfVirtualNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_node',
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

  // spec - computed: false, optional: false, required: true
  private _spec = new TfVirtualNode.SpecPropertyOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: TfVirtualNode.SpecProperty) {
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
      spec: tfVirtualNodeSpecPropertyToTerraform(this._spec.internalValue),
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
      spec: {
        value: tfVirtualNodeSpecPropertyToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfVirtualNode.SpecPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFilePropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificateFilePropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificateFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: cdktn.stringToTerraform(struct!.certificateChain),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFilePropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificateFilePropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificateFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_chain: {
      value: cdktn.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsPropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificateSdsPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificateSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificateSdsPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificateSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificatePropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificatePropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFilePropertyToTerraform(struct!.file),
    sds: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsPropertyToTerraform(struct!.sds),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificatePropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificatePropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsCertificateFilePropertyList",
    },
    sds: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsPropertyToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsCertificateSdsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exact),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exact),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesPropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToTerraform(struct!.match),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmPropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_authority_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.certificateAuthorityArns),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_authority_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.certificateAuthorityArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFilePropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustFilePropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: cdktn.stringToTerraform(struct!.certificateChain),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFilePropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustFilePropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_chain: {
      value: cdktn.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsPropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustPropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acm: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmPropertyToTerraform(struct!.acm),
    file: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFilePropertyToTerraform(struct!.file),
    sds: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsPropertyToTerraform(struct!.sds),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationTrustProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acm: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmPropertyToHclTerraform(struct!.acm),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmPropertyList",
    },
    file: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsValidationTrustFilePropertyList",
    },
    sds: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsPropertyToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationPropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subject_alternative_names: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesPropertyToTerraform(struct!.subjectAlternativeNames),
    trust: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustPropertyToTerraform(struct!.trust),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subject_alternative_names: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesPropertyToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesPropertyList",
    },
    trust: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustPropertyToHclTerraform(struct!.trust),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsValidationTrustPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsPropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforce: cdktn.booleanToTerraform(struct!.enforce),
    ports: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.ports),
    certificate: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificatePropertyToTerraform(struct!.certificate),
    validation: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationPropertyToTerraform(struct!.validation),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyTlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enforce: {
      value: cdktn.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    certificate: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificatePropertyToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsCertificatePropertyList",
    },
    validation: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationPropertyToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsValidationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyPropertyToTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tls: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsPropertyToTerraform(struct!.tls),
  }
}


export function tfVirtualNodeSpecBackendVirtualServiceClientPolicyPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendVirtualServiceClientPolicyPropertyOutputReference | TfVirtualNode.SpecBackendVirtualServiceClientPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tls: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyTlsPropertyToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyTlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeVirtualServicePropertyToTerraform(struct?: TfVirtualNode.VirtualServicePropertyOutputReference | TfVirtualNode.VirtualServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    virtual_service_name: cdktn.stringToTerraform(struct!.virtualServiceName),
    client_policy: tfVirtualNodeSpecBackendVirtualServiceClientPolicyPropertyToTerraform(struct!.clientPolicy),
  }
}


export function tfVirtualNodeVirtualServicePropertyToHclTerraform(struct?: TfVirtualNode.VirtualServicePropertyOutputReference | TfVirtualNode.VirtualServiceProperty): any {
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
    client_policy: {
      value: tfVirtualNodeSpecBackendVirtualServiceClientPolicyPropertyToHclTerraform(struct!.clientPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendVirtualServiceClientPolicyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeBackendPropertyToTerraform(struct?: TfVirtualNode.BackendProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    virtual_service: tfVirtualNodeVirtualServicePropertyToTerraform(struct!.virtualService),
  }
}


export function tfVirtualNodeBackendPropertyToHclTerraform(struct?: TfVirtualNode.BackendProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    virtual_service: {
      value: tfVirtualNodeVirtualServicePropertyToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualServicePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFilePropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificateFilePropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificateFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: cdktn.stringToTerraform(struct!.certificateChain),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFilePropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificateFilePropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificateFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_chain: {
      value: cdktn.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificateSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificateSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificatePropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificatePropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFilePropertyToTerraform(struct!.file),
    sds: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyToTerraform(struct!.sds),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificatePropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificatePropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsCertificateFilePropertyList",
    },
    sds: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exact),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exact),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToTerraform(struct!.match),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustAcmProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_authority_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.certificateAuthorityArns),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustAcmProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_authority_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.certificateAuthorityArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: cdktn.stringToTerraform(struct!.certificateChain),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_chain: {
      value: cdktn.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustPropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acm: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyToTerraform(struct!.acm),
    file: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyToTerraform(struct!.file),
    sds: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyToTerraform(struct!.sds),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationTrustProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acm: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyToHclTerraform(struct!.acm),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyList",
    },
    file: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyList",
    },
    sds: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationPropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subject_alternative_names: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyToTerraform(struct!.subjectAlternativeNames),
    trust: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustPropertyToTerraform(struct!.trust),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subject_alternative_names: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyList",
    },
    trust: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustPropertyToHclTerraform(struct!.trust),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationTrustPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsPropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforce: cdktn.booleanToTerraform(struct!.enforce),
    ports: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.ports),
    certificate: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificatePropertyToTerraform(struct!.certificate),
    validation: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationPropertyToTerraform(struct!.validation),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyTlsPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyTlsPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyTlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enforce: {
      value: cdktn.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    certificate: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificatePropertyToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsCertificatePropertyList",
    },
    validation: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationPropertyToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyPropertyToTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tls: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsPropertyToTerraform(struct!.tls),
  }
}


export function tfVirtualNodeSpecBackendDefaultsClientPolicyPropertyToHclTerraform(struct?: TfVirtualNode.SpecBackendDefaultsClientPolicyPropertyOutputReference | TfVirtualNode.SpecBackendDefaultsClientPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tls: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyTlsPropertyToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeBackendDefaultsPropertyToTerraform(struct?: TfVirtualNode.BackendDefaultsPropertyOutputReference | TfVirtualNode.BackendDefaultsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_policy: tfVirtualNodeSpecBackendDefaultsClientPolicyPropertyToTerraform(struct!.clientPolicy),
  }
}


export function tfVirtualNodeBackendDefaultsPropertyToHclTerraform(struct?: TfVirtualNode.BackendDefaultsPropertyOutputReference | TfVirtualNode.BackendDefaultsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_policy: {
      value: tfVirtualNodeSpecBackendDefaultsClientPolicyPropertyToHclTerraform(struct!.clientPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerConnectionPoolGrpcPropertyToTerraform(struct?: TfVirtualNode.SpecListenerConnectionPoolGrpcPropertyOutputReference | TfVirtualNode.SpecListenerConnectionPoolGrpcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_requests: cdktn.numberToTerraform(struct!.maxRequests),
  }
}


export function tfVirtualNodeSpecListenerConnectionPoolGrpcPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerConnectionPoolGrpcPropertyOutputReference | TfVirtualNode.SpecListenerConnectionPoolGrpcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_requests: {
      value: cdktn.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerConnectionPoolHttpPropertyToTerraform(struct?: TfVirtualNode.SpecListenerConnectionPoolHttpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_connections: cdktn.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktn.numberToTerraform(struct!.maxPendingRequests),
  }
}


export function tfVirtualNodeSpecListenerConnectionPoolHttpPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerConnectionPoolHttpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_connections: {
      value: cdktn.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_requests: {
      value: cdktn.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerConnectionPoolHttp2PropertyToTerraform(struct?: TfVirtualNode.SpecListenerConnectionPoolHttp2Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_requests: cdktn.numberToTerraform(struct!.maxRequests),
  }
}


export function tfVirtualNodeSpecListenerConnectionPoolHttp2PropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerConnectionPoolHttp2Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_requests: {
      value: cdktn.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerConnectionPoolTcpPropertyToTerraform(struct?: TfVirtualNode.SpecListenerConnectionPoolTcpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_connections: cdktn.numberToTerraform(struct!.maxConnections),
  }
}


export function tfVirtualNodeSpecListenerConnectionPoolTcpPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerConnectionPoolTcpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_connections: {
      value: cdktn.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeConnectionPoolPropertyToTerraform(struct?: TfVirtualNode.ConnectionPoolPropertyOutputReference | TfVirtualNode.ConnectionPoolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grpc: tfVirtualNodeSpecListenerConnectionPoolGrpcPropertyToTerraform(struct!.grpc),
    http: cdktn.listMapper(tfVirtualNodeSpecListenerConnectionPoolHttpPropertyToTerraform, true)(struct!.http),
    http2: cdktn.listMapper(tfVirtualNodeSpecListenerConnectionPoolHttp2PropertyToTerraform, true)(struct!.http2),
    tcp: cdktn.listMapper(tfVirtualNodeSpecListenerConnectionPoolTcpPropertyToTerraform, true)(struct!.tcp),
  }
}


export function tfVirtualNodeConnectionPoolPropertyToHclTerraform(struct?: TfVirtualNode.ConnectionPoolPropertyOutputReference | TfVirtualNode.ConnectionPoolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grpc: {
      value: tfVirtualNodeSpecListenerConnectionPoolGrpcPropertyToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerConnectionPoolGrpcPropertyList",
    },
    http: {
      value: cdktn.listMapperHcl(tfVirtualNodeSpecListenerConnectionPoolHttpPropertyToHclTerraform, true)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerConnectionPoolHttpPropertyList",
    },
    http2: {
      value: cdktn.listMapperHcl(tfVirtualNodeSpecListenerConnectionPoolHttp2PropertyToHclTerraform, true)(struct!.http2),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerConnectionPoolHttp2PropertyList",
    },
    tcp: {
      value: cdktn.listMapperHcl(tfVirtualNodeSpecListenerConnectionPoolTcpPropertyToHclTerraform, true)(struct!.tcp),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerConnectionPoolTcpPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeHealthCheckPropertyToTerraform(struct?: TfVirtualNode.HealthCheckPropertyOutputReference | TfVirtualNode.HealthCheckProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    healthy_threshold: cdktn.numberToTerraform(struct!.healthyThreshold),
    interval_millis: cdktn.numberToTerraform(struct!.intervalMillis),
    path: cdktn.stringToTerraform(struct!.path),
    port: cdktn.numberToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    timeout_millis: cdktn.numberToTerraform(struct!.timeoutMillis),
    unhealthy_threshold: cdktn.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function tfVirtualNodeHealthCheckPropertyToHclTerraform(struct?: TfVirtualNode.HealthCheckPropertyOutputReference | TfVirtualNode.HealthCheckProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    healthy_threshold: {
      value: cdktn.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_millis: {
      value: cdktn.numberToHclTerraform(struct!.intervalMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
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
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_millis: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktn.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeBaseEjectionDurationPropertyToTerraform(struct?: TfVirtualNode.BaseEjectionDurationPropertyOutputReference | TfVirtualNode.BaseEjectionDurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function tfVirtualNodeBaseEjectionDurationPropertyToHclTerraform(struct?: TfVirtualNode.BaseEjectionDurationPropertyOutputReference | TfVirtualNode.BaseEjectionDurationProperty): any {
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


export function tfVirtualNodeIntervalPropertyToTerraform(struct?: TfVirtualNode.IntervalPropertyOutputReference | TfVirtualNode.IntervalProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function tfVirtualNodeIntervalPropertyToHclTerraform(struct?: TfVirtualNode.IntervalPropertyOutputReference | TfVirtualNode.IntervalProperty): any {
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


export function tfVirtualNodeOutlierDetectionPropertyToTerraform(struct?: TfVirtualNode.OutlierDetectionPropertyOutputReference | TfVirtualNode.OutlierDetectionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_ejection_percent: cdktn.numberToTerraform(struct!.maxEjectionPercent),
    max_server_errors: cdktn.numberToTerraform(struct!.maxServerErrors),
    base_ejection_duration: tfVirtualNodeBaseEjectionDurationPropertyToTerraform(struct!.baseEjectionDuration),
    interval: tfVirtualNodeIntervalPropertyToTerraform(struct!.interval),
  }
}


export function tfVirtualNodeOutlierDetectionPropertyToHclTerraform(struct?: TfVirtualNode.OutlierDetectionPropertyOutputReference | TfVirtualNode.OutlierDetectionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_ejection_percent: {
      value: cdktn.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_server_errors: {
      value: cdktn.numberToHclTerraform(struct!.maxServerErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    base_ejection_duration: {
      value: tfVirtualNodeBaseEjectionDurationPropertyToHclTerraform(struct!.baseEjectionDuration),
      isBlock: true,
      type: "list",
      storageClassType: "BaseEjectionDurationPropertyList",
    },
    interval: {
      value: tfVirtualNodeIntervalPropertyToHclTerraform(struct!.interval),
      isBlock: true,
      type: "list",
      storageClassType: "IntervalPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodePortMappingPropertyToTerraform(struct?: TfVirtualNode.PortMappingPropertyOutputReference | TfVirtualNode.PortMappingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function tfVirtualNodePortMappingPropertyToHclTerraform(struct?: TfVirtualNode.PortMappingPropertyOutputReference | TfVirtualNode.PortMappingProperty): any {
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
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTimeoutGrpcIdlePropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutGrpcIdlePropertyOutputReference | TfVirtualNode.SpecListenerTimeoutGrpcIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function tfVirtualNodeSpecListenerTimeoutGrpcIdlePropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutGrpcIdlePropertyOutputReference | TfVirtualNode.SpecListenerTimeoutGrpcIdleProperty): any {
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


export function tfVirtualNodeSpecListenerTimeoutGrpcPerRequestPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutGrpcPerRequestPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutGrpcPerRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function tfVirtualNodeSpecListenerTimeoutGrpcPerRequestPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutGrpcPerRequestPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutGrpcPerRequestProperty): any {
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


export function tfVirtualNodeSpecListenerTimeoutGrpcPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutGrpcPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutGrpcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle: tfVirtualNodeSpecListenerTimeoutGrpcIdlePropertyToTerraform(struct!.idle),
    per_request: tfVirtualNodeSpecListenerTimeoutGrpcPerRequestPropertyToTerraform(struct!.perRequest),
  }
}


export function tfVirtualNodeSpecListenerTimeoutGrpcPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutGrpcPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutGrpcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle: {
      value: tfVirtualNodeSpecListenerTimeoutGrpcIdlePropertyToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutGrpcIdlePropertyList",
    },
    per_request: {
      value: tfVirtualNodeSpecListenerTimeoutGrpcPerRequestPropertyToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutGrpcPerRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTimeoutHttpIdlePropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttpIdlePropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttpIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function tfVirtualNodeSpecListenerTimeoutHttpIdlePropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttpIdlePropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttpIdleProperty): any {
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


export function tfVirtualNodeSpecListenerTimeoutHttpPerRequestPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttpPerRequestPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttpPerRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function tfVirtualNodeSpecListenerTimeoutHttpPerRequestPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttpPerRequestPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttpPerRequestProperty): any {
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


export function tfVirtualNodeSpecListenerTimeoutHttpPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttpPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttpProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle: tfVirtualNodeSpecListenerTimeoutHttpIdlePropertyToTerraform(struct!.idle),
    per_request: tfVirtualNodeSpecListenerTimeoutHttpPerRequestPropertyToTerraform(struct!.perRequest),
  }
}


export function tfVirtualNodeSpecListenerTimeoutHttpPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttpPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttpProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle: {
      value: tfVirtualNodeSpecListenerTimeoutHttpIdlePropertyToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutHttpIdlePropertyList",
    },
    per_request: {
      value: tfVirtualNodeSpecListenerTimeoutHttpPerRequestPropertyToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutHttpPerRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTimeoutHttp2IdlePropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttp2IdlePropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttp2IdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function tfVirtualNodeSpecListenerTimeoutHttp2IdlePropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttp2IdlePropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttp2IdleProperty): any {
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


export function tfVirtualNodeSpecListenerTimeoutHttp2PerRequestPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttp2PerRequestPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttp2PerRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function tfVirtualNodeSpecListenerTimeoutHttp2PerRequestPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttp2PerRequestPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttp2PerRequestProperty): any {
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


export function tfVirtualNodeSpecListenerTimeoutHttp2PropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttp2PropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttp2Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle: tfVirtualNodeSpecListenerTimeoutHttp2IdlePropertyToTerraform(struct!.idle),
    per_request: tfVirtualNodeSpecListenerTimeoutHttp2PerRequestPropertyToTerraform(struct!.perRequest),
  }
}


export function tfVirtualNodeSpecListenerTimeoutHttp2PropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutHttp2PropertyOutputReference | TfVirtualNode.SpecListenerTimeoutHttp2Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle: {
      value: tfVirtualNodeSpecListenerTimeoutHttp2IdlePropertyToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutHttp2IdlePropertyList",
    },
    per_request: {
      value: tfVirtualNodeSpecListenerTimeoutHttp2PerRequestPropertyToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutHttp2PerRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTimeoutTcpIdlePropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutTcpIdlePropertyOutputReference | TfVirtualNode.SpecListenerTimeoutTcpIdleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function tfVirtualNodeSpecListenerTimeoutTcpIdlePropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutTcpIdlePropertyOutputReference | TfVirtualNode.SpecListenerTimeoutTcpIdleProperty): any {
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


export function tfVirtualNodeSpecListenerTimeoutTcpPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTimeoutTcpPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutTcpProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle: tfVirtualNodeSpecListenerTimeoutTcpIdlePropertyToTerraform(struct!.idle),
  }
}


export function tfVirtualNodeSpecListenerTimeoutTcpPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTimeoutTcpPropertyOutputReference | TfVirtualNode.SpecListenerTimeoutTcpProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle: {
      value: tfVirtualNodeSpecListenerTimeoutTcpIdlePropertyToHclTerraform(struct!.idle),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutTcpIdlePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeTimeoutPropertyToTerraform(struct?: TfVirtualNode.TimeoutPropertyOutputReference | TfVirtualNode.TimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grpc: tfVirtualNodeSpecListenerTimeoutGrpcPropertyToTerraform(struct!.grpc),
    http: tfVirtualNodeSpecListenerTimeoutHttpPropertyToTerraform(struct!.http),
    http2: tfVirtualNodeSpecListenerTimeoutHttp2PropertyToTerraform(struct!.http2),
    tcp: tfVirtualNodeSpecListenerTimeoutTcpPropertyToTerraform(struct!.tcp),
  }
}


export function tfVirtualNodeTimeoutPropertyToHclTerraform(struct?: TfVirtualNode.TimeoutPropertyOutputReference | TfVirtualNode.TimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grpc: {
      value: tfVirtualNodeSpecListenerTimeoutGrpcPropertyToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutGrpcPropertyList",
    },
    http: {
      value: tfVirtualNodeSpecListenerTimeoutHttpPropertyToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutHttpPropertyList",
    },
    http2: {
      value: tfVirtualNodeSpecListenerTimeoutHttp2PropertyToHclTerraform(struct!.http2),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutHttp2PropertyList",
    },
    tcp: {
      value: tfVirtualNodeSpecListenerTimeoutTcpPropertyToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTimeoutTcpPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsCertificateAcmPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsCertificateAcmPropertyOutputReference | TfVirtualNode.SpecListenerTlsCertificateAcmProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
  }
}


export function tfVirtualNodeSpecListenerTlsCertificateAcmPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsCertificateAcmPropertyOutputReference | TfVirtualNode.SpecListenerTlsCertificateAcmProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsCertificateFilePropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsCertificateFilePropertyOutputReference | TfVirtualNode.SpecListenerTlsCertificateFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: cdktn.stringToTerraform(struct!.certificateChain),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function tfVirtualNodeSpecListenerTlsCertificateFilePropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsCertificateFilePropertyOutputReference | TfVirtualNode.SpecListenerTlsCertificateFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_chain: {
      value: cdktn.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsCertificateSdsPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsCertificateSdsPropertyOutputReference | TfVirtualNode.SpecListenerTlsCertificateSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function tfVirtualNodeSpecListenerTlsCertificateSdsPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsCertificateSdsPropertyOutputReference | TfVirtualNode.SpecListenerTlsCertificateSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsCertificatePropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsCertificatePropertyOutputReference | TfVirtualNode.SpecListenerTlsCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acm: tfVirtualNodeSpecListenerTlsCertificateAcmPropertyToTerraform(struct!.acm),
    file: tfVirtualNodeSpecListenerTlsCertificateFilePropertyToTerraform(struct!.file),
    sds: tfVirtualNodeSpecListenerTlsCertificateSdsPropertyToTerraform(struct!.sds),
  }
}


export function tfVirtualNodeSpecListenerTlsCertificatePropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsCertificatePropertyOutputReference | TfVirtualNode.SpecListenerTlsCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acm: {
      value: tfVirtualNodeSpecListenerTlsCertificateAcmPropertyToHclTerraform(struct!.acm),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsCertificateAcmPropertyList",
    },
    file: {
      value: tfVirtualNodeSpecListenerTlsCertificateFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsCertificateFilePropertyList",
    },
    sds: {
      value: tfVirtualNodeSpecListenerTlsCertificateSdsPropertyToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsCertificateSdsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationSubjectAlternativeNamesMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exact),
  }
}


export function tfVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationSubjectAlternativeNamesMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exact),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationSubjectAlternativeNamesPropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationSubjectAlternativeNamesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match: tfVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyToTerraform(struct!.match),
  }
}


export function tfVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationSubjectAlternativeNamesPropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationSubjectAlternativeNamesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match: {
      value: tfVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsValidationTrustFilePropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationTrustFilePropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationTrustFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: cdktn.stringToTerraform(struct!.certificateChain),
  }
}


export function tfVirtualNodeSpecListenerTlsValidationTrustFilePropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationTrustFilePropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationTrustFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_chain: {
      value: cdktn.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsValidationTrustSdsPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationTrustSdsPropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationTrustSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function tfVirtualNodeSpecListenerTlsValidationTrustSdsPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationTrustSdsPropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationTrustSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsValidationTrustPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationTrustPropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationTrustProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file: tfVirtualNodeSpecListenerTlsValidationTrustFilePropertyToTerraform(struct!.file),
    sds: tfVirtualNodeSpecListenerTlsValidationTrustSdsPropertyToTerraform(struct!.sds),
  }
}


export function tfVirtualNodeSpecListenerTlsValidationTrustPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationTrustPropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationTrustProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file: {
      value: tfVirtualNodeSpecListenerTlsValidationTrustFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationTrustFilePropertyList",
    },
    sds: {
      value: tfVirtualNodeSpecListenerTlsValidationTrustSdsPropertyToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationTrustSdsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsValidationPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationPropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subject_alternative_names: tfVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesPropertyToTerraform(struct!.subjectAlternativeNames),
    trust: tfVirtualNodeSpecListenerTlsValidationTrustPropertyToTerraform(struct!.trust),
  }
}


export function tfVirtualNodeSpecListenerTlsValidationPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsValidationPropertyOutputReference | TfVirtualNode.SpecListenerTlsValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subject_alternative_names: {
      value: tfVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesPropertyToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationSubjectAlternativeNamesPropertyList",
    },
    trust: {
      value: tfVirtualNodeSpecListenerTlsValidationTrustPropertyToHclTerraform(struct!.trust),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationTrustPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecListenerTlsPropertyToTerraform(struct?: TfVirtualNode.SpecListenerTlsPropertyOutputReference | TfVirtualNode.SpecListenerTlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    certificate: tfVirtualNodeSpecListenerTlsCertificatePropertyToTerraform(struct!.certificate),
    validation: tfVirtualNodeSpecListenerTlsValidationPropertyToTerraform(struct!.validation),
  }
}


export function tfVirtualNodeSpecListenerTlsPropertyToHclTerraform(struct?: TfVirtualNode.SpecListenerTlsPropertyOutputReference | TfVirtualNode.SpecListenerTlsProperty): any {
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
    certificate: {
      value: tfVirtualNodeSpecListenerTlsCertificatePropertyToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsCertificatePropertyList",
    },
    validation: {
      value: tfVirtualNodeSpecListenerTlsValidationPropertyToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeListenerPropertyToTerraform(struct?: TfVirtualNode.ListenerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_pool: tfVirtualNodeConnectionPoolPropertyToTerraform(struct!.connectionPool),
    health_check: tfVirtualNodeHealthCheckPropertyToTerraform(struct!.healthCheck),
    outlier_detection: tfVirtualNodeOutlierDetectionPropertyToTerraform(struct!.outlierDetection),
    port_mapping: tfVirtualNodePortMappingPropertyToTerraform(struct!.portMapping),
    timeout: tfVirtualNodeTimeoutPropertyToTerraform(struct!.timeout),
    tls: tfVirtualNodeSpecListenerTlsPropertyToTerraform(struct!.tls),
  }
}


export function tfVirtualNodeListenerPropertyToHclTerraform(struct?: TfVirtualNode.ListenerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_pool: {
      value: tfVirtualNodeConnectionPoolPropertyToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionPoolPropertyList",
    },
    health_check: {
      value: tfVirtualNodeHealthCheckPropertyToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "HealthCheckPropertyList",
    },
    outlier_detection: {
      value: tfVirtualNodeOutlierDetectionPropertyToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "list",
      storageClassType: "OutlierDetectionPropertyList",
    },
    port_mapping: {
      value: tfVirtualNodePortMappingPropertyToHclTerraform(struct!.portMapping),
      isBlock: true,
      type: "list",
      storageClassType: "PortMappingPropertyList",
    },
    timeout: {
      value: tfVirtualNodeTimeoutPropertyToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "TimeoutPropertyList",
    },
    tls: {
      value: tfVirtualNodeSpecListenerTlsPropertyToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeJsonPropertyToTerraform(struct?: TfVirtualNode.JsonProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfVirtualNodeJsonPropertyToHclTerraform(struct?: TfVirtualNode.JsonProperty | cdktn.IResolvable): any {
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


export function tfVirtualNodeFormatPropertyToTerraform(struct?: TfVirtualNode.FormatPropertyOutputReference | TfVirtualNode.FormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    json: cdktn.listMapper(tfVirtualNodeJsonPropertyToTerraform, true)(struct!.json),
  }
}


export function tfVirtualNodeFormatPropertyToHclTerraform(struct?: TfVirtualNode.FormatPropertyOutputReference | TfVirtualNode.FormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktn.listMapperHcl(tfVirtualNodeJsonPropertyToHclTerraform, true)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "JsonPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecLoggingAccessLogFilePropertyToTerraform(struct?: TfVirtualNode.SpecLoggingAccessLogFilePropertyOutputReference | TfVirtualNode.SpecLoggingAccessLogFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    format: tfVirtualNodeFormatPropertyToTerraform(struct!.format),
  }
}


export function tfVirtualNodeSpecLoggingAccessLogFilePropertyToHclTerraform(struct?: TfVirtualNode.SpecLoggingAccessLogFilePropertyOutputReference | TfVirtualNode.SpecLoggingAccessLogFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: tfVirtualNodeFormatPropertyToHclTerraform(struct!.format),
      isBlock: true,
      type: "list",
      storageClassType: "FormatPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeAccessLogPropertyToTerraform(struct?: TfVirtualNode.AccessLogPropertyOutputReference | TfVirtualNode.AccessLogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file: tfVirtualNodeSpecLoggingAccessLogFilePropertyToTerraform(struct!.file),
  }
}


export function tfVirtualNodeAccessLogPropertyToHclTerraform(struct?: TfVirtualNode.AccessLogPropertyOutputReference | TfVirtualNode.AccessLogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file: {
      value: tfVirtualNodeSpecLoggingAccessLogFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecLoggingAccessLogFilePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeLoggingPropertyToTerraform(struct?: TfVirtualNode.LoggingPropertyOutputReference | TfVirtualNode.LoggingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_log: tfVirtualNodeAccessLogPropertyToTerraform(struct!.accessLog),
  }
}


export function tfVirtualNodeLoggingPropertyToHclTerraform(struct?: TfVirtualNode.LoggingPropertyOutputReference | TfVirtualNode.LoggingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_log: {
      value: tfVirtualNodeAccessLogPropertyToHclTerraform(struct!.accessLog),
      isBlock: true,
      type: "list",
      storageClassType: "AccessLogPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeAwsCloudMapPropertyToTerraform(struct?: TfVirtualNode.AwsCloudMapPropertyOutputReference | TfVirtualNode.AwsCloudMapProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
    namespace_name: cdktn.stringToTerraform(struct!.namespaceName),
    service_name: cdktn.stringToTerraform(struct!.serviceName),
  }
}


export function tfVirtualNodeAwsCloudMapPropertyToHclTerraform(struct?: TfVirtualNode.AwsCloudMapPropertyOutputReference | TfVirtualNode.AwsCloudMapProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace_name: {
      value: cdktn.stringToHclTerraform(struct!.namespaceName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeDnsPropertyToTerraform(struct?: TfVirtualNode.DnsPropertyOutputReference | TfVirtualNode.DnsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    ip_preference: cdktn.stringToTerraform(struct!.ipPreference),
    response_type: cdktn.stringToTerraform(struct!.responseType),
  }
}


export function tfVirtualNodeDnsPropertyToHclTerraform(struct?: TfVirtualNode.DnsPropertyOutputReference | TfVirtualNode.DnsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_preference: {
      value: cdktn.stringToHclTerraform(struct!.ipPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_type: {
      value: cdktn.stringToHclTerraform(struct!.responseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeServiceDiscoveryPropertyToTerraform(struct?: TfVirtualNode.ServiceDiscoveryPropertyOutputReference | TfVirtualNode.ServiceDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_cloud_map: tfVirtualNodeAwsCloudMapPropertyToTerraform(struct!.awsCloudMap),
    dns: tfVirtualNodeDnsPropertyToTerraform(struct!.dns),
  }
}


export function tfVirtualNodeServiceDiscoveryPropertyToHclTerraform(struct?: TfVirtualNode.ServiceDiscoveryPropertyOutputReference | TfVirtualNode.ServiceDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_cloud_map: {
      value: tfVirtualNodeAwsCloudMapPropertyToHclTerraform(struct!.awsCloudMap),
      isBlock: true,
      type: "list",
      storageClassType: "AwsCloudMapPropertyList",
    },
    dns: {
      value: tfVirtualNodeDnsPropertyToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "DnsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfVirtualNodeSpecPropertyToTerraform(struct?: TfVirtualNode.SpecPropertyOutputReference | TfVirtualNode.SpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backend: cdktn.listMapper(tfVirtualNodeBackendPropertyToTerraform, true)(struct!.backend),
    backend_defaults: tfVirtualNodeBackendDefaultsPropertyToTerraform(struct!.backendDefaults),
    listener: cdktn.listMapper(tfVirtualNodeListenerPropertyToTerraform, true)(struct!.listener),
    logging: tfVirtualNodeLoggingPropertyToTerraform(struct!.logging),
    service_discovery: tfVirtualNodeServiceDiscoveryPropertyToTerraform(struct!.serviceDiscovery),
  }
}


export function tfVirtualNodeSpecPropertyToHclTerraform(struct?: TfVirtualNode.SpecPropertyOutputReference | TfVirtualNode.SpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backend: {
      value: cdktn.listMapperHcl(tfVirtualNodeBackendPropertyToHclTerraform, true)(struct!.backend),
      isBlock: true,
      type: "set",
      storageClassType: "BackendPropertyList",
    },
    backend_defaults: {
      value: tfVirtualNodeBackendDefaultsPropertyToHclTerraform(struct!.backendDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "BackendDefaultsPropertyList",
    },
    listener: {
      value: cdktn.listMapperHcl(tfVirtualNodeListenerPropertyToHclTerraform, true)(struct!.listener),
      isBlock: true,
      type: "list",
      storageClassType: "ListenerPropertyList",
    },
    logging: {
      value: tfVirtualNodeLoggingPropertyToHclTerraform(struct!.logging),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingPropertyList",
    },
    service_discovery: {
      value: tfVirtualNodeServiceDiscoveryPropertyToHclTerraform(struct!.serviceDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDiscoveryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfVirtualNode {
export interface SpecBackendVirtualServiceClientPolicyTlsCertificateFileProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate_chain TfVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#private_key TfVirtualNode#private_key}
  */
  readonly privateKey: string;
}
export class SpecBackendVirtualServiceClientPolicyTlsCertificateFilePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsCertificateFileProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsCertificateFileProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
      this._privateKey = value.privateKey;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface SpecBackendVirtualServiceClientPolicyTlsCertificateSdsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#secret_name TfVirtualNode#secret_name}
  */
  readonly secretName: string;
}
export class SpecBackendVirtualServiceClientPolicyTlsCertificateSdsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsCertificateSdsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsCertificateSdsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface SpecBackendVirtualServiceClientPolicyTlsCertificateProperty {
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#file TfVirtualNode#file}
  */
  readonly file?: SpecBackendVirtualServiceClientPolicyTlsCertificateFileProperty;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#sds TfVirtualNode#sds}
  */
  readonly sds?: SpecBackendVirtualServiceClientPolicyTlsCertificateSdsProperty;
}
export class SpecBackendVirtualServiceClientPolicyTlsCertificatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsCertificateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsCertificateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new SpecBackendVirtualServiceClientPolicyTlsCertificateFilePropertyOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SpecBackendVirtualServiceClientPolicyTlsCertificateFileProperty) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new SpecBackendVirtualServiceClientPolicyTlsCertificateSdsPropertyOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: SpecBackendVirtualServiceClientPolicyTlsCertificateSdsProperty) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#exact TfVirtualNode#exact}
  */
  readonly exact: string[];
}
export class SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty | undefined) {
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
  private _exact?: string[]; 
  public get exact() {
    return cdktn.Fn.tolist(this.getListAttribute('exact'));
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesProperty {
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#match TfVirtualNode#match}
  */
  readonly match: SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty;
}
export class SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._match.internalValue = value.match;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate_authority_arns TfVirtualNode#certificate_authority_arns}
  */
  readonly certificateAuthorityArns: string[];
}
export class SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArns = this._certificateAuthorityArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateAuthorityArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateAuthorityArns = value.certificateAuthorityArns;
    }
  }

  // certificate_authority_arns - computed: false, optional: false, required: true
  private _certificateAuthorityArns?: string[]; 
  public get certificateAuthorityArns() {
    return cdktn.Fn.tolist(this.getListAttribute('certificate_authority_arns'));
  }
  public set certificateAuthorityArns(value: string[]) {
    this._certificateAuthorityArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnsInput() {
    return this._certificateAuthorityArns;
  }
}
export interface SpecBackendVirtualServiceClientPolicyTlsValidationTrustFileProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate_chain TfVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}
export class SpecBackendVirtualServiceClientPolicyTlsValidationTrustFilePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsValidationTrustFileProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsValidationTrustFileProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }
}
export interface SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#secret_name TfVirtualNode#secret_name}
  */
  readonly secretName: string;
}
export class SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface SpecBackendVirtualServiceClientPolicyTlsValidationTrustProperty {
  /**
  * acm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#acm TfVirtualNode#acm}
  */
  readonly acm?: SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmProperty;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#file TfVirtualNode#file}
  */
  readonly file?: SpecBackendVirtualServiceClientPolicyTlsValidationTrustFileProperty;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#sds TfVirtualNode#sds}
  */
  readonly sds?: SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsProperty;
}
export class SpecBackendVirtualServiceClientPolicyTlsValidationTrustPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsValidationTrustProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acm = this._acm?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsValidationTrustProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acm.internalValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acm.internalValue = value.acm;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // acm - computed: false, optional: true, required: false
  private _acm = new SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmPropertyOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: SpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmProperty) {
    this._acm.internalValue = value;
  }
  public resetAcm() {
    this._acm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new SpecBackendVirtualServiceClientPolicyTlsValidationTrustFilePropertyOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SpecBackendVirtualServiceClientPolicyTlsValidationTrustFileProperty) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsPropertyOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: SpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsProperty) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface SpecBackendVirtualServiceClientPolicyTlsValidationProperty {
  /**
  * subject_alternative_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#subject_alternative_names TfVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesProperty;
  /**
  * trust block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#trust TfVirtualNode#trust}
  */
  readonly trust: SpecBackendVirtualServiceClientPolicyTlsValidationTrustProperty;
}
export class SpecBackendVirtualServiceClientPolicyTlsValidationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsValidationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    if (this._trust?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsValidationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subjectAlternativeNames.internalValue = undefined;
      this._trust.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
      this._trust.internalValue = value.trust;
    }
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesPropertyOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: SpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesProperty) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }

  // trust - computed: false, optional: false, required: true
  private _trust = new SpecBackendVirtualServiceClientPolicyTlsValidationTrustPropertyOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: SpecBackendVirtualServiceClientPolicyTlsValidationTrustProperty) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface SpecBackendVirtualServiceClientPolicyTlsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#enforce TfVirtualNode#enforce}
  */
  readonly enforce?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#ports TfVirtualNode#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate TfVirtualNode#certificate}
  */
  readonly certificate?: SpecBackendVirtualServiceClientPolicyTlsCertificateProperty;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#validation TfVirtualNode#validation}
  */
  readonly validation: SpecBackendVirtualServiceClientPolicyTlsValidationProperty;
}
export class SpecBackendVirtualServiceClientPolicyTlsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyTlsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyTlsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce = undefined;
      this._ports = undefined;
      this._certificate.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce = value.enforce;
      this._ports = value.ports;
      this._certificate.internalValue = value.certificate;
      this._validation.internalValue = value.validation;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktn.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktn.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new SpecBackendVirtualServiceClientPolicyTlsCertificatePropertyOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: SpecBackendVirtualServiceClientPolicyTlsCertificateProperty) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new SpecBackendVirtualServiceClientPolicyTlsValidationPropertyOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: SpecBackendVirtualServiceClientPolicyTlsValidationProperty) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface SpecBackendVirtualServiceClientPolicyProperty {
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#tls TfVirtualNode#tls}
  */
  readonly tls?: SpecBackendVirtualServiceClientPolicyTlsProperty;
}
export class SpecBackendVirtualServiceClientPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendVirtualServiceClientPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendVirtualServiceClientPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls.internalValue = value.tls;
    }
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new SpecBackendVirtualServiceClientPolicyTlsPropertyOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: SpecBackendVirtualServiceClientPolicyTlsProperty) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface VirtualServiceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#virtual_service_name TfVirtualNode#virtual_service_name}
  */
  readonly virtualServiceName: string;
  /**
  * client_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#client_policy TfVirtualNode#client_policy}
  */
  readonly clientPolicy?: SpecBackendVirtualServiceClientPolicyProperty;
}
export class VirtualServicePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualServiceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceName = this._virtualServiceName;
    }
    if (this._clientPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPolicy = this._clientPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServiceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServiceName = undefined;
      this._clientPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServiceName = value.virtualServiceName;
      this._clientPolicy.internalValue = value.clientPolicy;
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

  // client_policy - computed: false, optional: true, required: false
  private _clientPolicy = new SpecBackendVirtualServiceClientPolicyPropertyOutputReference(this, "client_policy");
  public get clientPolicy() {
    return this._clientPolicy;
  }
  public putClientPolicy(value: SpecBackendVirtualServiceClientPolicyProperty) {
    this._clientPolicy.internalValue = value;
  }
  public resetClientPolicy() {
    this._clientPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPolicyInput() {
    return this._clientPolicy.internalValue;
  }
}
export interface BackendProperty {
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#virtual_service TfVirtualNode#virtual_service}
  */
  readonly virtualService: VirtualServiceProperty;
}
export class BackendPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackendProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackendProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualService.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualService.internalValue = value.virtualService;
    }
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new VirtualServicePropertyOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: VirtualServiceProperty) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}

export class BackendPropertyList extends cdktn.ComplexList {
  public internalValue? : BackendProperty[] | cdktn.IResolvable

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
  public get(index: number): BackendPropertyOutputReference {
    return new BackendPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecBackendDefaultsClientPolicyTlsCertificateFileProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate_chain TfVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#private_key TfVirtualNode#private_key}
  */
  readonly privateKey: string;
}
export class SpecBackendDefaultsClientPolicyTlsCertificateFilePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsCertificateFileProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsCertificateFileProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
      this._privateKey = value.privateKey;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface SpecBackendDefaultsClientPolicyTlsCertificateSdsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#secret_name TfVirtualNode#secret_name}
  */
  readonly secretName: string;
}
export class SpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsCertificateSdsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsCertificateSdsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface SpecBackendDefaultsClientPolicyTlsCertificateProperty {
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#file TfVirtualNode#file}
  */
  readonly file?: SpecBackendDefaultsClientPolicyTlsCertificateFileProperty;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#sds TfVirtualNode#sds}
  */
  readonly sds?: SpecBackendDefaultsClientPolicyTlsCertificateSdsProperty;
}
export class SpecBackendDefaultsClientPolicyTlsCertificatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsCertificateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsCertificateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new SpecBackendDefaultsClientPolicyTlsCertificateFilePropertyOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SpecBackendDefaultsClientPolicyTlsCertificateFileProperty) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new SpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: SpecBackendDefaultsClientPolicyTlsCertificateSdsProperty) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#exact TfVirtualNode#exact}
  */
  readonly exact: string[];
}
export class SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty | undefined) {
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
  private _exact?: string[]; 
  public get exact() {
    return cdktn.Fn.tolist(this.getListAttribute('exact'));
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesProperty {
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#match TfVirtualNode#match}
  */
  readonly match: SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty;
}
export class SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._match.internalValue = value.match;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface SpecBackendDefaultsClientPolicyTlsValidationTrustAcmProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate_authority_arns TfVirtualNode#certificate_authority_arns}
  */
  readonly certificateAuthorityArns: string[];
}
export class SpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsValidationTrustAcmProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArns = this._certificateAuthorityArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsValidationTrustAcmProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateAuthorityArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateAuthorityArns = value.certificateAuthorityArns;
    }
  }

  // certificate_authority_arns - computed: false, optional: false, required: true
  private _certificateAuthorityArns?: string[]; 
  public get certificateAuthorityArns() {
    return cdktn.Fn.tolist(this.getListAttribute('certificate_authority_arns'));
  }
  public set certificateAuthorityArns(value: string[]) {
    this._certificateAuthorityArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnsInput() {
    return this._certificateAuthorityArns;
  }
}
export interface SpecBackendDefaultsClientPolicyTlsValidationTrustFileProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate_chain TfVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}
export class SpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsValidationTrustFileProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsValidationTrustFileProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }
}
export interface SpecBackendDefaultsClientPolicyTlsValidationTrustSdsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#secret_name TfVirtualNode#secret_name}
  */
  readonly secretName: string;
}
export class SpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsValidationTrustSdsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsValidationTrustSdsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface SpecBackendDefaultsClientPolicyTlsValidationTrustProperty {
  /**
  * acm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#acm TfVirtualNode#acm}
  */
  readonly acm?: SpecBackendDefaultsClientPolicyTlsValidationTrustAcmProperty;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#file TfVirtualNode#file}
  */
  readonly file?: SpecBackendDefaultsClientPolicyTlsValidationTrustFileProperty;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#sds TfVirtualNode#sds}
  */
  readonly sds?: SpecBackendDefaultsClientPolicyTlsValidationTrustSdsProperty;
}
export class SpecBackendDefaultsClientPolicyTlsValidationTrustPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsValidationTrustProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acm = this._acm?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsValidationTrustProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acm.internalValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acm.internalValue = value.acm;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // acm - computed: false, optional: true, required: false
  private _acm = new SpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: SpecBackendDefaultsClientPolicyTlsValidationTrustAcmProperty) {
    this._acm.internalValue = value;
  }
  public resetAcm() {
    this._acm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new SpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SpecBackendDefaultsClientPolicyTlsValidationTrustFileProperty) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new SpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: SpecBackendDefaultsClientPolicyTlsValidationTrustSdsProperty) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface SpecBackendDefaultsClientPolicyTlsValidationProperty {
  /**
  * subject_alternative_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#subject_alternative_names TfVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesProperty;
  /**
  * trust block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#trust TfVirtualNode#trust}
  */
  readonly trust: SpecBackendDefaultsClientPolicyTlsValidationTrustProperty;
}
export class SpecBackendDefaultsClientPolicyTlsValidationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsValidationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    if (this._trust?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsValidationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subjectAlternativeNames.internalValue = undefined;
      this._trust.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
      this._trust.internalValue = value.trust;
    }
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesProperty) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }

  // trust - computed: false, optional: false, required: true
  private _trust = new SpecBackendDefaultsClientPolicyTlsValidationTrustPropertyOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: SpecBackendDefaultsClientPolicyTlsValidationTrustProperty) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface SpecBackendDefaultsClientPolicyTlsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#enforce TfVirtualNode#enforce}
  */
  readonly enforce?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#ports TfVirtualNode#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate TfVirtualNode#certificate}
  */
  readonly certificate?: SpecBackendDefaultsClientPolicyTlsCertificateProperty;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#validation TfVirtualNode#validation}
  */
  readonly validation: SpecBackendDefaultsClientPolicyTlsValidationProperty;
}
export class SpecBackendDefaultsClientPolicyTlsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyTlsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyTlsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce = undefined;
      this._ports = undefined;
      this._certificate.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce = value.enforce;
      this._ports = value.ports;
      this._certificate.internalValue = value.certificate;
      this._validation.internalValue = value.validation;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktn.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktn.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new SpecBackendDefaultsClientPolicyTlsCertificatePropertyOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: SpecBackendDefaultsClientPolicyTlsCertificateProperty) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new SpecBackendDefaultsClientPolicyTlsValidationPropertyOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: SpecBackendDefaultsClientPolicyTlsValidationProperty) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface SpecBackendDefaultsClientPolicyProperty {
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#tls TfVirtualNode#tls}
  */
  readonly tls?: SpecBackendDefaultsClientPolicyTlsProperty;
}
export class SpecBackendDefaultsClientPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecBackendDefaultsClientPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecBackendDefaultsClientPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls.internalValue = value.tls;
    }
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new SpecBackendDefaultsClientPolicyTlsPropertyOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: SpecBackendDefaultsClientPolicyTlsProperty) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface BackendDefaultsProperty {
  /**
  * client_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#client_policy TfVirtualNode#client_policy}
  */
  readonly clientPolicy?: SpecBackendDefaultsClientPolicyProperty;
}
export class BackendDefaultsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackendDefaultsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPolicy = this._clientPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackendDefaultsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientPolicy.internalValue = value.clientPolicy;
    }
  }

  // client_policy - computed: false, optional: true, required: false
  private _clientPolicy = new SpecBackendDefaultsClientPolicyPropertyOutputReference(this, "client_policy");
  public get clientPolicy() {
    return this._clientPolicy;
  }
  public putClientPolicy(value: SpecBackendDefaultsClientPolicyProperty) {
    this._clientPolicy.internalValue = value;
  }
  public resetClientPolicy() {
    this._clientPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPolicyInput() {
    return this._clientPolicy.internalValue;
  }
}
export interface SpecListenerConnectionPoolGrpcProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#max_requests TfVirtualNode#max_requests}
  */
  readonly maxRequests: number;
}
export class SpecListenerConnectionPoolGrpcPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerConnectionPoolGrpcProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerConnectionPoolGrpcProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRequests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRequests = value.maxRequests;
    }
  }

  // max_requests - computed: false, optional: false, required: true
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }
}
export interface SpecListenerConnectionPoolHttpProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#max_connections TfVirtualNode#max_connections}
  */
  readonly maxConnections: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#max_pending_requests TfVirtualNode#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}
export class SpecListenerConnectionPoolHttpPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecListenerConnectionPoolHttpProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerConnectionPoolHttpProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
    }
  }

  // max_connections - computed: false, optional: false, required: true
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }
}

export class SpecListenerConnectionPoolHttpPropertyList extends cdktn.ComplexList {
  public internalValue? : SpecListenerConnectionPoolHttpProperty[] | cdktn.IResolvable

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
  public get(index: number): SpecListenerConnectionPoolHttpPropertyOutputReference {
    return new SpecListenerConnectionPoolHttpPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecListenerConnectionPoolHttp2Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#max_requests TfVirtualNode#max_requests}
  */
  readonly maxRequests: number;
}
export class SpecListenerConnectionPoolHttp2PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecListenerConnectionPoolHttp2Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerConnectionPoolHttp2Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRequests = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRequests = value.maxRequests;
    }
  }

  // max_requests - computed: false, optional: false, required: true
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }
}

export class SpecListenerConnectionPoolHttp2PropertyList extends cdktn.ComplexList {
  public internalValue? : SpecListenerConnectionPoolHttp2Property[] | cdktn.IResolvable

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
  public get(index: number): SpecListenerConnectionPoolHttp2PropertyOutputReference {
    return new SpecListenerConnectionPoolHttp2PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpecListenerConnectionPoolTcpProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#max_connections TfVirtualNode#max_connections}
  */
  readonly maxConnections: number;
}
export class SpecListenerConnectionPoolTcpPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SpecListenerConnectionPoolTcpProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerConnectionPoolTcpProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
    }
  }

  // max_connections - computed: false, optional: false, required: true
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }
}

export class SpecListenerConnectionPoolTcpPropertyList extends cdktn.ComplexList {
  public internalValue? : SpecListenerConnectionPoolTcpProperty[] | cdktn.IResolvable

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
  public get(index: number): SpecListenerConnectionPoolTcpPropertyOutputReference {
    return new SpecListenerConnectionPoolTcpPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionPoolProperty {
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#grpc TfVirtualNode#grpc}
  */
  readonly grpc?: SpecListenerConnectionPoolGrpcProperty;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#http TfVirtualNode#http}
  */
  readonly http?: SpecListenerConnectionPoolHttpProperty[] | cdktn.IResolvable;
  /**
  * http2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#http2 TfVirtualNode#http2}
  */
  readonly http2?: SpecListenerConnectionPoolHttp2Property[] | cdktn.IResolvable;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#tcp TfVirtualNode#tcp}
  */
  readonly tcp?: SpecListenerConnectionPoolTcpProperty[] | cdktn.IResolvable;
}
export class ConnectionPoolPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionPoolProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._http2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionPoolProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
      this._http2.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
      this._http2.internalValue = value.http2;
      this._tcp.internalValue = value.tcp;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new SpecListenerConnectionPoolGrpcPropertyOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: SpecListenerConnectionPoolGrpcProperty) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new SpecListenerConnectionPoolHttpPropertyList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: SpecListenerConnectionPoolHttpProperty[] | cdktn.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // http2 - computed: false, optional: true, required: false
  private _http2 = new SpecListenerConnectionPoolHttp2PropertyList(this, "http2", false);
  public get http2() {
    return this._http2;
  }
  public putHttp2(value: SpecListenerConnectionPoolHttp2Property[] | cdktn.IResolvable) {
    this._http2.internalValue = value;
  }
  public resetHttp2() {
    this._http2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new SpecListenerConnectionPoolTcpPropertyList(this, "tcp", false);
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: SpecListenerConnectionPoolTcpProperty[] | cdktn.IResolvable) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface HealthCheckProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#healthy_threshold TfVirtualNode#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#interval_millis TfVirtualNode#interval_millis}
  */
  readonly intervalMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#path TfVirtualNode#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#port TfVirtualNode#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#protocol TfVirtualNode#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#timeout_millis TfVirtualNode#timeout_millis}
  */
  readonly timeoutMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#unhealthy_threshold TfVirtualNode#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
}
export class HealthCheckPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthCheckProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._intervalMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMillis = this._intervalMillis;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeoutMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMillis = this._timeoutMillis;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthCheckProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthyThreshold = undefined;
      this._intervalMillis = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeoutMillis = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthyThreshold = value.healthyThreshold;
      this._intervalMillis = value.intervalMillis;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeoutMillis = value.timeoutMillis;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // healthy_threshold - computed: false, optional: false, required: true
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval_millis - computed: false, optional: false, required: true
  private _intervalMillis?: number; 
  public get intervalMillis() {
    return this.getNumberAttribute('interval_millis');
  }
  public set intervalMillis(value: number) {
    this._intervalMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMillisInput() {
    return this._intervalMillis;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout_millis - computed: false, optional: false, required: true
  private _timeoutMillis?: number; 
  public get timeoutMillis() {
    return this.getNumberAttribute('timeout_millis');
  }
  public set timeoutMillis(value: number) {
    this._timeoutMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMillisInput() {
    return this._timeoutMillis;
  }

  // unhealthy_threshold - computed: false, optional: false, required: true
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface BaseEjectionDurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#unit TfVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#value TfVirtualNode#value}
  */
  readonly value: number;
}
export class BaseEjectionDurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BaseEjectionDurationProperty | undefined {
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

  public set internalValue(value: BaseEjectionDurationProperty | undefined) {
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
export interface IntervalProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#unit TfVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#value TfVirtualNode#value}
  */
  readonly value: number;
}
export class IntervalPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntervalProperty | undefined {
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

  public set internalValue(value: IntervalProperty | undefined) {
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
export interface OutlierDetectionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#max_ejection_percent TfVirtualNode#max_ejection_percent}
  */
  readonly maxEjectionPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#max_server_errors TfVirtualNode#max_server_errors}
  */
  readonly maxServerErrors: number;
  /**
  * base_ejection_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#base_ejection_duration TfVirtualNode#base_ejection_duration}
  */
  readonly baseEjectionDuration: BaseEjectionDurationProperty;
  /**
  * interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#interval TfVirtualNode#interval}
  */
  readonly interval: IntervalProperty;
}
export class OutlierDetectionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutlierDetectionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._maxServerErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxServerErrors = this._maxServerErrors;
    }
    if (this._baseEjectionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionDuration = this._baseEjectionDuration?.internalValue;
    }
    if (this._interval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutlierDetectionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxEjectionPercent = undefined;
      this._maxServerErrors = undefined;
      this._baseEjectionDuration.internalValue = undefined;
      this._interval.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._maxServerErrors = value.maxServerErrors;
      this._baseEjectionDuration.internalValue = value.baseEjectionDuration;
      this._interval.internalValue = value.interval;
    }
  }

  // max_ejection_percent - computed: false, optional: false, required: true
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // max_server_errors - computed: false, optional: false, required: true
  private _maxServerErrors?: number; 
  public get maxServerErrors() {
    return this.getNumberAttribute('max_server_errors');
  }
  public set maxServerErrors(value: number) {
    this._maxServerErrors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxServerErrorsInput() {
    return this._maxServerErrors;
  }

  // base_ejection_duration - computed: false, optional: false, required: true
  private _baseEjectionDuration = new BaseEjectionDurationPropertyOutputReference(this, "base_ejection_duration");
  public get baseEjectionDuration() {
    return this._baseEjectionDuration;
  }
  public putBaseEjectionDuration(value: BaseEjectionDurationProperty) {
    this._baseEjectionDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionDurationInput() {
    return this._baseEjectionDuration.internalValue;
  }

  // interval - computed: false, optional: false, required: true
  private _interval = new IntervalPropertyOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }
  public putInterval(value: IntervalProperty) {
    this._interval.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval.internalValue;
  }
}
export interface PortMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#port TfVirtualNode#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#protocol TfVirtualNode#protocol}
  */
  readonly protocol: string;
}
export class PortMappingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortMappingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortMappingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface SpecListenerTimeoutGrpcIdleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#unit TfVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#value TfVirtualNode#value}
  */
  readonly value: number;
}
export class SpecListenerTimeoutGrpcIdlePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutGrpcIdleProperty | undefined {
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

  public set internalValue(value: SpecListenerTimeoutGrpcIdleProperty | undefined) {
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
export interface SpecListenerTimeoutGrpcPerRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#unit TfVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#value TfVirtualNode#value}
  */
  readonly value: number;
}
export class SpecListenerTimeoutGrpcPerRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutGrpcPerRequestProperty | undefined {
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

  public set internalValue(value: SpecListenerTimeoutGrpcPerRequestProperty | undefined) {
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
export interface SpecListenerTimeoutGrpcProperty {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#idle TfVirtualNode#idle}
  */
  readonly idle?: SpecListenerTimeoutGrpcIdleProperty;
  /**
  * per_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#per_request TfVirtualNode#per_request}
  */
  readonly perRequest?: SpecListenerTimeoutGrpcPerRequestProperty;
}
export class SpecListenerTimeoutGrpcPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutGrpcProperty | undefined {
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

  public set internalValue(value: SpecListenerTimeoutGrpcProperty | undefined) {
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
  private _idle = new SpecListenerTimeoutGrpcIdlePropertyOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: SpecListenerTimeoutGrpcIdleProperty) {
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
  private _perRequest = new SpecListenerTimeoutGrpcPerRequestPropertyOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: SpecListenerTimeoutGrpcPerRequestProperty) {
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
export interface SpecListenerTimeoutHttpIdleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#unit TfVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#value TfVirtualNode#value}
  */
  readonly value: number;
}
export class SpecListenerTimeoutHttpIdlePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutHttpIdleProperty | undefined {
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

  public set internalValue(value: SpecListenerTimeoutHttpIdleProperty | undefined) {
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
export interface SpecListenerTimeoutHttpPerRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#unit TfVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#value TfVirtualNode#value}
  */
  readonly value: number;
}
export class SpecListenerTimeoutHttpPerRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutHttpPerRequestProperty | undefined {
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

  public set internalValue(value: SpecListenerTimeoutHttpPerRequestProperty | undefined) {
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
export interface SpecListenerTimeoutHttpProperty {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#idle TfVirtualNode#idle}
  */
  readonly idle?: SpecListenerTimeoutHttpIdleProperty;
  /**
  * per_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#per_request TfVirtualNode#per_request}
  */
  readonly perRequest?: SpecListenerTimeoutHttpPerRequestProperty;
}
export class SpecListenerTimeoutHttpPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutHttpProperty | undefined {
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

  public set internalValue(value: SpecListenerTimeoutHttpProperty | undefined) {
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
  private _idle = new SpecListenerTimeoutHttpIdlePropertyOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: SpecListenerTimeoutHttpIdleProperty) {
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
  private _perRequest = new SpecListenerTimeoutHttpPerRequestPropertyOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: SpecListenerTimeoutHttpPerRequestProperty) {
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
export interface SpecListenerTimeoutHttp2IdleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#unit TfVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#value TfVirtualNode#value}
  */
  readonly value: number;
}
export class SpecListenerTimeoutHttp2IdlePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutHttp2IdleProperty | undefined {
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

  public set internalValue(value: SpecListenerTimeoutHttp2IdleProperty | undefined) {
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
export interface SpecListenerTimeoutHttp2PerRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#unit TfVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#value TfVirtualNode#value}
  */
  readonly value: number;
}
export class SpecListenerTimeoutHttp2PerRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutHttp2PerRequestProperty | undefined {
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

  public set internalValue(value: SpecListenerTimeoutHttp2PerRequestProperty | undefined) {
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
export interface SpecListenerTimeoutHttp2Property {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#idle TfVirtualNode#idle}
  */
  readonly idle?: SpecListenerTimeoutHttp2IdleProperty;
  /**
  * per_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#per_request TfVirtualNode#per_request}
  */
  readonly perRequest?: SpecListenerTimeoutHttp2PerRequestProperty;
}
export class SpecListenerTimeoutHttp2PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutHttp2Property | undefined {
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

  public set internalValue(value: SpecListenerTimeoutHttp2Property | undefined) {
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
  private _idle = new SpecListenerTimeoutHttp2IdlePropertyOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: SpecListenerTimeoutHttp2IdleProperty) {
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
  private _perRequest = new SpecListenerTimeoutHttp2PerRequestPropertyOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: SpecListenerTimeoutHttp2PerRequestProperty) {
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
export interface SpecListenerTimeoutTcpIdleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#unit TfVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#value TfVirtualNode#value}
  */
  readonly value: number;
}
export class SpecListenerTimeoutTcpIdlePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutTcpIdleProperty | undefined {
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

  public set internalValue(value: SpecListenerTimeoutTcpIdleProperty | undefined) {
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
export interface SpecListenerTimeoutTcpProperty {
  /**
  * idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#idle TfVirtualNode#idle}
  */
  readonly idle?: SpecListenerTimeoutTcpIdleProperty;
}
export class SpecListenerTimeoutTcpPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTimeoutTcpProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTimeoutTcpProperty | undefined) {
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
  private _idle = new SpecListenerTimeoutTcpIdlePropertyOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: SpecListenerTimeoutTcpIdleProperty) {
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
export interface TimeoutProperty {
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#grpc TfVirtualNode#grpc}
  */
  readonly grpc?: SpecListenerTimeoutGrpcProperty;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#http TfVirtualNode#http}
  */
  readonly http?: SpecListenerTimeoutHttpProperty;
  /**
  * http2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#http2 TfVirtualNode#http2}
  */
  readonly http2?: SpecListenerTimeoutHttp2Property;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#tcp TfVirtualNode#tcp}
  */
  readonly tcp?: SpecListenerTimeoutTcpProperty;
}
export class TimeoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimeoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._http2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
      this._http2.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
      this._http2.internalValue = value.http2;
      this._tcp.internalValue = value.tcp;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new SpecListenerTimeoutGrpcPropertyOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: SpecListenerTimeoutGrpcProperty) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new SpecListenerTimeoutHttpPropertyOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: SpecListenerTimeoutHttpProperty) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // http2 - computed: false, optional: true, required: false
  private _http2 = new SpecListenerTimeoutHttp2PropertyOutputReference(this, "http2");
  public get http2() {
    return this._http2;
  }
  public putHttp2(value: SpecListenerTimeoutHttp2Property) {
    this._http2.internalValue = value;
  }
  public resetHttp2() {
    this._http2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new SpecListenerTimeoutTcpPropertyOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: SpecListenerTimeoutTcpProperty) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface SpecListenerTlsCertificateAcmProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate_arn TfVirtualNode#certificate_arn}
  */
  readonly certificateArn: string;
}
export class SpecListenerTlsCertificateAcmPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsCertificateAcmProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsCertificateAcmProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateArn = value.certificateArn;
    }
  }

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }
}
export interface SpecListenerTlsCertificateFileProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate_chain TfVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#private_key TfVirtualNode#private_key}
  */
  readonly privateKey: string;
}
export class SpecListenerTlsCertificateFilePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsCertificateFileProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsCertificateFileProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
      this._privateKey = value.privateKey;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface SpecListenerTlsCertificateSdsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#secret_name TfVirtualNode#secret_name}
  */
  readonly secretName: string;
}
export class SpecListenerTlsCertificateSdsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsCertificateSdsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsCertificateSdsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface SpecListenerTlsCertificateProperty {
  /**
  * acm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#acm TfVirtualNode#acm}
  */
  readonly acm?: SpecListenerTlsCertificateAcmProperty;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#file TfVirtualNode#file}
  */
  readonly file?: SpecListenerTlsCertificateFileProperty;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#sds TfVirtualNode#sds}
  */
  readonly sds?: SpecListenerTlsCertificateSdsProperty;
}
export class SpecListenerTlsCertificatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsCertificateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acm = this._acm?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsCertificateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acm.internalValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acm.internalValue = value.acm;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // acm - computed: false, optional: true, required: false
  private _acm = new SpecListenerTlsCertificateAcmPropertyOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: SpecListenerTlsCertificateAcmProperty) {
    this._acm.internalValue = value;
  }
  public resetAcm() {
    this._acm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new SpecListenerTlsCertificateFilePropertyOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SpecListenerTlsCertificateFileProperty) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new SpecListenerTlsCertificateSdsPropertyOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: SpecListenerTlsCertificateSdsProperty) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface SpecListenerTlsValidationSubjectAlternativeNamesMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#exact TfVirtualNode#exact}
  */
  readonly exact: string[];
}
export class SpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsValidationSubjectAlternativeNamesMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsValidationSubjectAlternativeNamesMatchProperty | undefined) {
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
  private _exact?: string[]; 
  public get exact() {
    return cdktn.Fn.tolist(this.getListAttribute('exact'));
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface SpecListenerTlsValidationSubjectAlternativeNamesProperty {
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#match TfVirtualNode#match}
  */
  readonly match: SpecListenerTlsValidationSubjectAlternativeNamesMatchProperty;
}
export class SpecListenerTlsValidationSubjectAlternativeNamesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsValidationSubjectAlternativeNamesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsValidationSubjectAlternativeNamesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._match.internalValue = value.match;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new SpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SpecListenerTlsValidationSubjectAlternativeNamesMatchProperty) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface SpecListenerTlsValidationTrustFileProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate_chain TfVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}
export class SpecListenerTlsValidationTrustFilePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsValidationTrustFileProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsValidationTrustFileProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChain = value.certificateChain;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }
}
export interface SpecListenerTlsValidationTrustSdsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#secret_name TfVirtualNode#secret_name}
  */
  readonly secretName: string;
}
export class SpecListenerTlsValidationTrustSdsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsValidationTrustSdsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsValidationTrustSdsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface SpecListenerTlsValidationTrustProperty {
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#file TfVirtualNode#file}
  */
  readonly file?: SpecListenerTlsValidationTrustFileProperty;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#sds TfVirtualNode#sds}
  */
  readonly sds?: SpecListenerTlsValidationTrustSdsProperty;
}
export class SpecListenerTlsValidationTrustPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsValidationTrustProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsValidationTrustProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new SpecListenerTlsValidationTrustFilePropertyOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SpecListenerTlsValidationTrustFileProperty) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new SpecListenerTlsValidationTrustSdsPropertyOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: SpecListenerTlsValidationTrustSdsProperty) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface SpecListenerTlsValidationProperty {
  /**
  * subject_alternative_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#subject_alternative_names TfVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: SpecListenerTlsValidationSubjectAlternativeNamesProperty;
  /**
  * trust block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#trust TfVirtualNode#trust}
  */
  readonly trust: SpecListenerTlsValidationTrustProperty;
}
export class SpecListenerTlsValidationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsValidationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    if (this._trust?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsValidationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subjectAlternativeNames.internalValue = undefined;
      this._trust.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
      this._trust.internalValue = value.trust;
    }
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new SpecListenerTlsValidationSubjectAlternativeNamesPropertyOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: SpecListenerTlsValidationSubjectAlternativeNamesProperty) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }

  // trust - computed: false, optional: false, required: true
  private _trust = new SpecListenerTlsValidationTrustPropertyOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: SpecListenerTlsValidationTrustProperty) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface SpecListenerTlsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#mode TfVirtualNode#mode}
  */
  readonly mode: string;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#certificate TfVirtualNode#certificate}
  */
  readonly certificate: SpecListenerTlsCertificateProperty;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#validation TfVirtualNode#validation}
  */
  readonly validation?: SpecListenerTlsValidationProperty;
}
export class SpecListenerTlsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecListenerTlsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecListenerTlsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._certificate.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._certificate.internalValue = value.certificate;
      this._validation.internalValue = value.validation;
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

  // certificate - computed: false, optional: false, required: true
  private _certificate = new SpecListenerTlsCertificatePropertyOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: SpecListenerTlsCertificateProperty) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new SpecListenerTlsValidationPropertyOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: SpecListenerTlsValidationProperty) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface ListenerProperty {
  /**
  * connection_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#connection_pool TfVirtualNode#connection_pool}
  */
  readonly connectionPool?: ConnectionPoolProperty;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#health_check TfVirtualNode#health_check}
  */
  readonly healthCheck?: HealthCheckProperty;
  /**
  * outlier_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#outlier_detection TfVirtualNode#outlier_detection}
  */
  readonly outlierDetection?: OutlierDetectionProperty;
  /**
  * port_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#port_mapping TfVirtualNode#port_mapping}
  */
  readonly portMapping: PortMappingProperty;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#timeout TfVirtualNode#timeout}
  */
  readonly timeout?: TimeoutProperty;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#tls TfVirtualNode#tls}
  */
  readonly tls?: SpecListenerTlsProperty;
}
export class ListenerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ListenerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPool = this._connectionPool?.internalValue;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    if (this._portMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMapping = this._portMapping?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListenerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
      this._portMapping.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = value.connectionPool;
      this._healthCheck.internalValue = value.healthCheck;
      this._outlierDetection.internalValue = value.outlierDetection;
      this._portMapping.internalValue = value.portMapping;
      this._timeout.internalValue = value.timeout;
      this._tls.internalValue = value.tls;
    }
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool = new ConnectionPoolPropertyOutputReference(this, "connection_pool");
  public get connectionPool() {
    return this._connectionPool;
  }
  public putConnectionPool(value: ConnectionPoolProperty) {
    this._connectionPool.internalValue = value;
  }
  public resetConnectionPool() {
    this._connectionPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new HealthCheckPropertyOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: HealthCheckProperty) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new OutlierDetectionPropertyOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: OutlierDetectionProperty) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // port_mapping - computed: false, optional: false, required: true
  private _portMapping = new PortMappingPropertyOutputReference(this, "port_mapping");
  public get portMapping() {
    return this._portMapping;
  }
  public putPortMapping(value: PortMappingProperty) {
    this._portMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingInput() {
    return this._portMapping.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new TimeoutPropertyOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: TimeoutProperty) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new SpecListenerTlsPropertyOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: SpecListenerTlsProperty) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ListenerPropertyList extends cdktn.ComplexList {
  public internalValue? : ListenerProperty[] | cdktn.IResolvable

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
  public get(index: number): ListenerPropertyOutputReference {
    return new ListenerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JsonProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#key TfVirtualNode#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#value TfVirtualNode#value}
  */
  readonly value: string;
}
export class JsonPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JsonProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JsonProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class JsonPropertyList extends cdktn.ComplexList {
  public internalValue? : JsonProperty[] | cdktn.IResolvable

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
  public get(index: number): JsonPropertyOutputReference {
    return new JsonPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FormatProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#text TfVirtualNode#text}
  */
  readonly text?: string;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#json TfVirtualNode#json}
  */
  readonly json?: JsonProperty[] | cdktn.IResolvable;
}
export class FormatPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FormatProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FormatProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
      this._json.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
      this._json.internalValue = value.json;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // json - computed: false, optional: true, required: false
  private _json = new JsonPropertyList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: JsonProperty[] | cdktn.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }
}
export interface SpecLoggingAccessLogFileProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#path TfVirtualNode#path}
  */
  readonly path: string;
  /**
  * format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#format TfVirtualNode#format}
  */
  readonly format?: FormatProperty;
}
export class SpecLoggingAccessLogFilePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpecLoggingAccessLogFileProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecLoggingAccessLogFileProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._format.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._format.internalValue = value.format;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // format - computed: false, optional: true, required: false
  private _format = new FormatPropertyOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: FormatProperty) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }
}
export interface AccessLogProperty {
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#file TfVirtualNode#file}
  */
  readonly file?: SpecLoggingAccessLogFileProperty;
}
export class AccessLogPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessLogProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessLogProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file.internalValue = value.file;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new SpecLoggingAccessLogFilePropertyOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SpecLoggingAccessLogFileProperty) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface LoggingProperty {
  /**
  * access_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#access_log TfVirtualNode#access_log}
  */
  readonly accessLog?: AccessLogProperty;
}
export class LoggingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLog = this._accessLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLog.internalValue = value.accessLog;
    }
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog = new AccessLogPropertyOutputReference(this, "access_log");
  public get accessLog() {
    return this._accessLog;
  }
  public putAccessLog(value: AccessLogProperty) {
    this._accessLog.internalValue = value;
  }
  public resetAccessLog() {
    this._accessLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog.internalValue;
  }
}
export interface AwsCloudMapProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#attributes TfVirtualNode#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#namespace_name TfVirtualNode#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#service_name TfVirtualNode#service_name}
  */
  readonly serviceName: string;
}
export class AwsCloudMapPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsCloudMapProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._namespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceName = this._namespaceName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCloudMapProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._namespaceName = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._namespaceName = value.namespaceName;
      this._serviceName = value.serviceName;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
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
export interface DnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#hostname TfVirtualNode#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#ip_preference TfVirtualNode#ip_preference}
  */
  readonly ipPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#response_type TfVirtualNode#response_type}
  */
  readonly responseType?: string;
}
export class DnsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPreference = this._ipPreference;
    }
    if (this._responseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseType = this._responseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._ipPreference = undefined;
      this._responseType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._ipPreference = value.ipPreference;
      this._responseType = value.responseType;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_preference - computed: false, optional: true, required: false
  private _ipPreference?: string; 
  public get ipPreference() {
    return this.getStringAttribute('ip_preference');
  }
  public set ipPreference(value: string) {
    this._ipPreference = value;
  }
  public resetIpPreference() {
    this._ipPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPreferenceInput() {
    return this._ipPreference;
  }

  // response_type - computed: false, optional: true, required: false
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  public resetResponseType() {
    this._responseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }
}
export interface ServiceDiscoveryProperty {
  /**
  * aws_cloud_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#aws_cloud_map TfVirtualNode#aws_cloud_map}
  */
  readonly awsCloudMap?: AwsCloudMapProperty;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#dns TfVirtualNode#dns}
  */
  readonly dns?: DnsProperty;
}
export class ServiceDiscoveryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDiscoveryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsCloudMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCloudMap = this._awsCloudMap?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsCloudMap.internalValue = undefined;
      this._dns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsCloudMap.internalValue = value.awsCloudMap;
      this._dns.internalValue = value.dns;
    }
  }

  // aws_cloud_map - computed: false, optional: true, required: false
  private _awsCloudMap = new AwsCloudMapPropertyOutputReference(this, "aws_cloud_map");
  public get awsCloudMap() {
    return this._awsCloudMap;
  }
  public putAwsCloudMap(value: AwsCloudMapProperty) {
    this._awsCloudMap.internalValue = value;
  }
  public resetAwsCloudMap() {
    this._awsCloudMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudMapInput() {
    return this._awsCloudMap.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DnsPropertyOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: DnsProperty) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }
}
export interface SpecProperty {
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#backend TfVirtualNode#backend}
  */
  readonly backend?: BackendProperty[] | cdktn.IResolvable;
  /**
  * backend_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#backend_defaults TfVirtualNode#backend_defaults}
  */
  readonly backendDefaults?: BackendDefaultsProperty;
  /**
  * listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#listener TfVirtualNode#listener}
  */
  readonly listener?: ListenerProperty[] | cdktn.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#logging TfVirtualNode#logging}
  */
  readonly logging?: LoggingProperty;
  /**
  * service_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_node#service_discovery TfVirtualNode#service_discovery}
  */
  readonly serviceDiscovery?: ServiceDiscoveryProperty;
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
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._backendDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDefaults = this._backendDefaults?.internalValue;
    }
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._serviceDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDiscovery = this._serviceDiscovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backend.internalValue = undefined;
      this._backendDefaults.internalValue = undefined;
      this._listener.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._serviceDiscovery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backend.internalValue = value.backend;
      this._backendDefaults.internalValue = value.backendDefaults;
      this._listener.internalValue = value.listener;
      this._logging.internalValue = value.logging;
      this._serviceDiscovery.internalValue = value.serviceDiscovery;
    }
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new BackendPropertyList(this, "backend", true);
  public get backend() {
    return this._backend;
  }
  public putBackend(value: BackendProperty[] | cdktn.IResolvable) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // backend_defaults - computed: false, optional: true, required: false
  private _backendDefaults = new BackendDefaultsPropertyOutputReference(this, "backend_defaults");
  public get backendDefaults() {
    return this._backendDefaults;
  }
  public putBackendDefaults(value: BackendDefaultsProperty) {
    this._backendDefaults.internalValue = value;
  }
  public resetBackendDefaults() {
    this._backendDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDefaultsInput() {
    return this._backendDefaults.internalValue;
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new ListenerPropertyList(this, "listener", false);
  public get listener() {
    return this._listener;
  }
  public putListener(value: ListenerProperty[] | cdktn.IResolvable) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new LoggingPropertyOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: LoggingProperty) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery = new ServiceDiscoveryPropertyOutputReference(this, "service_discovery");
  public get serviceDiscovery() {
    return this._serviceDiscovery;
  }
  public putServiceDiscovery(value: ServiceDiscoveryProperty) {
    this._serviceDiscovery.internalValue = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery.internalValue;
  }
}
}
