// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAppmeshVirtualGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#id AwsAppmeshVirtualGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#mesh_name AwsAppmeshVirtualGateway#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#mesh_owner AwsAppmeshVirtualGateway#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#name AwsAppmeshVirtualGateway#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#region AwsAppmeshVirtualGateway#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#tags AwsAppmeshVirtualGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#tags_all AwsAppmeshVirtualGateway#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#spec AwsAppmeshVirtualGateway#spec}
  */
  readonly spec: AwsAppmeshVirtualGateway.SpecProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway aws_appmesh_virtual_gateway}
*/
export class AwsAppmeshVirtualGateway extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appmesh_virtual_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAppmeshVirtualGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAppmeshVirtualGateway to import
  * @param importFromId The id of the existing AwsAppmeshVirtualGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAppmeshVirtualGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appmesh_virtual_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway aws_appmesh_virtual_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAppmeshVirtualGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAppmeshVirtualGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_gateway',
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
  private _spec = new AwsAppmeshVirtualGateway.SpecPropertyOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AwsAppmeshVirtualGateway.SpecProperty) {
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
      spec: awsAppmeshVirtualGatewaySpecPropertyToTerraform(this._spec.internalValue),
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
        value: awsAppmeshVirtualGatewaySpecPropertyToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppmeshVirtualGateway.SpecPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFilePropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificateFilePropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificateFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: cdktn.stringToTerraform(struct!.certificateChain),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFilePropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificateFilePropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificateFileProperty): any {
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


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificateSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificateSdsProperty): any {
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


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificatePropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificatePropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFilePropertyToTerraform(struct!.file),
    sds: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyToTerraform(struct!.sds),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificatePropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificatePropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file: {
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsCertificateFilePropertyList",
    },
    sds: {
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsCertificateSdsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exact),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchProperty): any {
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


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToTerraform(struct!.match),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match: {
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustAcmProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_authority_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.certificateAuthorityArns),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustAcmProperty): any {
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


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: cdktn.stringToTerraform(struct!.certificateChain),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustFileProperty): any {
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


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustSdsProperty): any {
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


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acm: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyToTerraform(struct!.acm),
    file: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyToTerraform(struct!.file),
    sds: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyToTerraform(struct!.sds),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationTrustProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acm: {
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyToHclTerraform(struct!.acm),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationTrustAcmPropertyList",
    },
    file: {
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationTrustFilePropertyList",
    },
    sds: {
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationTrustSdsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subject_alternative_names: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyToTerraform(struct!.subjectAlternativeNames),
    trust: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustPropertyToTerraform(struct!.trust),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subject_alternative_names: {
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesPropertyList",
    },
    trust: {
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustPropertyToHclTerraform(struct!.trust),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationTrustPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforce: cdktn.booleanToTerraform(struct!.enforce),
    ports: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.ports),
    certificate: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificatePropertyToTerraform(struct!.certificate),
    validation: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationPropertyToTerraform(struct!.validation),
  }
}


export function awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecBackendDefaultsClientPolicyTlsProperty): any {
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
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificatePropertyToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsCertificatePropertyList",
    },
    validation: {
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationPropertyToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsValidationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewayClientPolicyPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.ClientPolicyPropertyOutputReference | AwsAppmeshVirtualGateway.ClientPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tls: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsPropertyToTerraform(struct!.tls),
  }
}


export function awsAppmeshVirtualGatewayClientPolicyPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.ClientPolicyPropertyOutputReference | AwsAppmeshVirtualGateway.ClientPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tls: {
      value: awsAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsPropertyToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "SpecBackendDefaultsClientPolicyTlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewayBackendDefaultsPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.BackendDefaultsPropertyOutputReference | AwsAppmeshVirtualGateway.BackendDefaultsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_policy: awsAppmeshVirtualGatewayClientPolicyPropertyToTerraform(struct!.clientPolicy),
  }
}


export function awsAppmeshVirtualGatewayBackendDefaultsPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.BackendDefaultsPropertyOutputReference | AwsAppmeshVirtualGateway.BackendDefaultsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_policy: {
      value: awsAppmeshVirtualGatewayClientPolicyPropertyToHclTerraform(struct!.clientPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ClientPolicyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewayGrpcPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.GrpcPropertyOutputReference | AwsAppmeshVirtualGateway.GrpcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_requests: cdktn.numberToTerraform(struct!.maxRequests),
  }
}


export function awsAppmeshVirtualGatewayGrpcPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.GrpcPropertyOutputReference | AwsAppmeshVirtualGateway.GrpcProperty): any {
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


export function awsAppmeshVirtualGatewayHttpPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.HttpPropertyOutputReference | AwsAppmeshVirtualGateway.HttpProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_connections: cdktn.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktn.numberToTerraform(struct!.maxPendingRequests),
  }
}


export function awsAppmeshVirtualGatewayHttpPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.HttpPropertyOutputReference | AwsAppmeshVirtualGateway.HttpProperty): any {
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


export function awsAppmeshVirtualGatewayHttp2PropertyToTerraform(struct?: AwsAppmeshVirtualGateway.Http2PropertyOutputReference | AwsAppmeshVirtualGateway.Http2Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_requests: cdktn.numberToTerraform(struct!.maxRequests),
  }
}


export function awsAppmeshVirtualGatewayHttp2PropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.Http2PropertyOutputReference | AwsAppmeshVirtualGateway.Http2Property): any {
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


export function awsAppmeshVirtualGatewayConnectionPoolPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.ConnectionPoolPropertyOutputReference | AwsAppmeshVirtualGateway.ConnectionPoolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grpc: awsAppmeshVirtualGatewayGrpcPropertyToTerraform(struct!.grpc),
    http: awsAppmeshVirtualGatewayHttpPropertyToTerraform(struct!.http),
    http2: awsAppmeshVirtualGatewayHttp2PropertyToTerraform(struct!.http2),
  }
}


export function awsAppmeshVirtualGatewayConnectionPoolPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.ConnectionPoolPropertyOutputReference | AwsAppmeshVirtualGateway.ConnectionPoolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grpc: {
      value: awsAppmeshVirtualGatewayGrpcPropertyToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "GrpcPropertyList",
    },
    http: {
      value: awsAppmeshVirtualGatewayHttpPropertyToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "HttpPropertyList",
    },
    http2: {
      value: awsAppmeshVirtualGatewayHttp2PropertyToHclTerraform(struct!.http2),
      isBlock: true,
      type: "list",
      storageClassType: "Http2PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewayHealthCheckPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.HealthCheckPropertyOutputReference | AwsAppmeshVirtualGateway.HealthCheckProperty): any {
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


export function awsAppmeshVirtualGatewayHealthCheckPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.HealthCheckPropertyOutputReference | AwsAppmeshVirtualGateway.HealthCheckProperty): any {
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


export function awsAppmeshVirtualGatewayPortMappingPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.PortMappingPropertyOutputReference | AwsAppmeshVirtualGateway.PortMappingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function awsAppmeshVirtualGatewayPortMappingPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.PortMappingPropertyOutputReference | AwsAppmeshVirtualGateway.PortMappingProperty): any {
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


export function awsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsCertificateAcmPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsCertificateAcmProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsCertificateAcmPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsCertificateAcmProperty): any {
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


export function awsAppmeshVirtualGatewaySpecListenerTlsCertificateFilePropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsCertificateFilePropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsCertificateFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: cdktn.stringToTerraform(struct!.certificateChain),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsCertificateFilePropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsCertificateFilePropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsCertificateFileProperty): any {
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


export function awsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsCertificateSdsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsCertificateSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsCertificateSdsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsCertificateSdsProperty): any {
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


export function awsAppmeshVirtualGatewaySpecListenerTlsCertificatePropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsCertificatePropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acm: awsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmPropertyToTerraform(struct!.acm),
    file: awsAppmeshVirtualGatewaySpecListenerTlsCertificateFilePropertyToTerraform(struct!.file),
    sds: awsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsPropertyToTerraform(struct!.sds),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsCertificatePropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsCertificatePropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsCertificateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acm: {
      value: awsAppmeshVirtualGatewaySpecListenerTlsCertificateAcmPropertyToHclTerraform(struct!.acm),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsCertificateAcmPropertyList",
    },
    file: {
      value: awsAppmeshVirtualGatewaySpecListenerTlsCertificateFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsCertificateFilePropertyList",
    },
    sds: {
      value: awsAppmeshVirtualGatewaySpecListenerTlsCertificateSdsPropertyToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsCertificateSdsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationSubjectAlternativeNamesMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exact),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationSubjectAlternativeNamesMatchProperty): any {
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


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationSubjectAlternativeNamesPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationSubjectAlternativeNamesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match: awsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyToTerraform(struct!.match),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationSubjectAlternativeNamesPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationSubjectAlternativeNamesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match: {
      value: awsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationSubjectAlternativeNamesMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFilePropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustFilePropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: cdktn.stringToTerraform(struct!.certificateChain),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFilePropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustFilePropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustFileProperty): any {
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


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustSdsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustSdsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustSdsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustSdsProperty): any {
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


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file: awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFilePropertyToTerraform(struct!.file),
    sds: awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsPropertyToTerraform(struct!.sds),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationTrustProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file: {
      value: awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationTrustFilePropertyList",
    },
    sds: {
      value: awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsPropertyToHclTerraform(struct!.sds),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationTrustSdsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subject_alternative_names: awsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesPropertyToTerraform(struct!.subjectAlternativeNames),
    trust: awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustPropertyToTerraform(struct!.trust),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsValidationPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsValidationPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subject_alternative_names: {
      value: awsAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesPropertyToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationSubjectAlternativeNamesPropertyList",
    },
    trust: {
      value: awsAppmeshVirtualGatewaySpecListenerTlsValidationTrustPropertyToHclTerraform(struct!.trust),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationTrustPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewaySpecListenerTlsPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    certificate: awsAppmeshVirtualGatewaySpecListenerTlsCertificatePropertyToTerraform(struct!.certificate),
    validation: awsAppmeshVirtualGatewaySpecListenerTlsValidationPropertyToTerraform(struct!.validation),
  }
}


export function awsAppmeshVirtualGatewaySpecListenerTlsPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecListenerTlsPropertyOutputReference | AwsAppmeshVirtualGateway.SpecListenerTlsProperty): any {
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
      value: awsAppmeshVirtualGatewaySpecListenerTlsCertificatePropertyToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsCertificatePropertyList",
    },
    validation: {
      value: awsAppmeshVirtualGatewaySpecListenerTlsValidationPropertyToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsValidationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewayListenerPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.ListenerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_pool: awsAppmeshVirtualGatewayConnectionPoolPropertyToTerraform(struct!.connectionPool),
    health_check: awsAppmeshVirtualGatewayHealthCheckPropertyToTerraform(struct!.healthCheck),
    port_mapping: awsAppmeshVirtualGatewayPortMappingPropertyToTerraform(struct!.portMapping),
    tls: awsAppmeshVirtualGatewaySpecListenerTlsPropertyToTerraform(struct!.tls),
  }
}


export function awsAppmeshVirtualGatewayListenerPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.ListenerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_pool: {
      value: awsAppmeshVirtualGatewayConnectionPoolPropertyToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionPoolPropertyList",
    },
    health_check: {
      value: awsAppmeshVirtualGatewayHealthCheckPropertyToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "HealthCheckPropertyList",
    },
    port_mapping: {
      value: awsAppmeshVirtualGatewayPortMappingPropertyToHclTerraform(struct!.portMapping),
      isBlock: true,
      type: "list",
      storageClassType: "PortMappingPropertyList",
    },
    tls: {
      value: awsAppmeshVirtualGatewaySpecListenerTlsPropertyToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "SpecListenerTlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewayJsonPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.JsonProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAppmeshVirtualGatewayJsonPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.JsonProperty | cdktn.IResolvable): any {
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


export function awsAppmeshVirtualGatewayFormatPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.FormatPropertyOutputReference | AwsAppmeshVirtualGateway.FormatProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    json: cdktn.listMapper(awsAppmeshVirtualGatewayJsonPropertyToTerraform, true)(struct!.json),
  }
}


export function awsAppmeshVirtualGatewayFormatPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.FormatPropertyOutputReference | AwsAppmeshVirtualGateway.FormatProperty): any {
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
      value: cdktn.listMapperHcl(awsAppmeshVirtualGatewayJsonPropertyToHclTerraform, true)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "JsonPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewaySpecLoggingAccessLogFilePropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecLoggingAccessLogFilePropertyOutputReference | AwsAppmeshVirtualGateway.SpecLoggingAccessLogFileProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    format: awsAppmeshVirtualGatewayFormatPropertyToTerraform(struct!.format),
  }
}


export function awsAppmeshVirtualGatewaySpecLoggingAccessLogFilePropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecLoggingAccessLogFilePropertyOutputReference | AwsAppmeshVirtualGateway.SpecLoggingAccessLogFileProperty): any {
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
      value: awsAppmeshVirtualGatewayFormatPropertyToHclTerraform(struct!.format),
      isBlock: true,
      type: "list",
      storageClassType: "FormatPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewayAccessLogPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.AccessLogPropertyOutputReference | AwsAppmeshVirtualGateway.AccessLogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file: awsAppmeshVirtualGatewaySpecLoggingAccessLogFilePropertyToTerraform(struct!.file),
  }
}


export function awsAppmeshVirtualGatewayAccessLogPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.AccessLogPropertyOutputReference | AwsAppmeshVirtualGateway.AccessLogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file: {
      value: awsAppmeshVirtualGatewaySpecLoggingAccessLogFilePropertyToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "SpecLoggingAccessLogFilePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewayLoggingPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.LoggingPropertyOutputReference | AwsAppmeshVirtualGateway.LoggingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_log: awsAppmeshVirtualGatewayAccessLogPropertyToTerraform(struct!.accessLog),
  }
}


export function awsAppmeshVirtualGatewayLoggingPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.LoggingPropertyOutputReference | AwsAppmeshVirtualGateway.LoggingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_log: {
      value: awsAppmeshVirtualGatewayAccessLogPropertyToHclTerraform(struct!.accessLog),
      isBlock: true,
      type: "list",
      storageClassType: "AccessLogPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppmeshVirtualGatewaySpecPropertyToTerraform(struct?: AwsAppmeshVirtualGateway.SpecPropertyOutputReference | AwsAppmeshVirtualGateway.SpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backend_defaults: awsAppmeshVirtualGatewayBackendDefaultsPropertyToTerraform(struct!.backendDefaults),
    listener: cdktn.listMapper(awsAppmeshVirtualGatewayListenerPropertyToTerraform, true)(struct!.listener),
    logging: awsAppmeshVirtualGatewayLoggingPropertyToTerraform(struct!.logging),
  }
}


export function awsAppmeshVirtualGatewaySpecPropertyToHclTerraform(struct?: AwsAppmeshVirtualGateway.SpecPropertyOutputReference | AwsAppmeshVirtualGateway.SpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backend_defaults: {
      value: awsAppmeshVirtualGatewayBackendDefaultsPropertyToHclTerraform(struct!.backendDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "BackendDefaultsPropertyList",
    },
    listener: {
      value: cdktn.listMapperHcl(awsAppmeshVirtualGatewayListenerPropertyToHclTerraform, true)(struct!.listener),
      isBlock: true,
      type: "list",
      storageClassType: "ListenerPropertyList",
    },
    logging: {
      value: awsAppmeshVirtualGatewayLoggingPropertyToHclTerraform(struct!.logging),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAppmeshVirtualGateway {
export interface SpecBackendDefaultsClientPolicyTlsCertificateFileProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#certificate_chain AwsAppmeshVirtualGateway#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#private_key AwsAppmeshVirtualGateway#private_key}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#secret_name AwsAppmeshVirtualGateway#secret_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#file AwsAppmeshVirtualGateway#file}
  */
  readonly file?: SpecBackendDefaultsClientPolicyTlsCertificateFileProperty;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#sds AwsAppmeshVirtualGateway#sds}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#exact AwsAppmeshVirtualGateway#exact}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#match AwsAppmeshVirtualGateway#match}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#certificate_authority_arns AwsAppmeshVirtualGateway#certificate_authority_arns}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#certificate_chain AwsAppmeshVirtualGateway#certificate_chain}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#secret_name AwsAppmeshVirtualGateway#secret_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#acm AwsAppmeshVirtualGateway#acm}
  */
  readonly acm?: SpecBackendDefaultsClientPolicyTlsValidationTrustAcmProperty;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#file AwsAppmeshVirtualGateway#file}
  */
  readonly file?: SpecBackendDefaultsClientPolicyTlsValidationTrustFileProperty;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#sds AwsAppmeshVirtualGateway#sds}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#subject_alternative_names AwsAppmeshVirtualGateway#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: SpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesProperty;
  /**
  * trust block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#trust AwsAppmeshVirtualGateway#trust}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#enforce AwsAppmeshVirtualGateway#enforce}
  */
  readonly enforce?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#ports AwsAppmeshVirtualGateway#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#certificate AwsAppmeshVirtualGateway#certificate}
  */
  readonly certificate?: SpecBackendDefaultsClientPolicyTlsCertificateProperty;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#validation AwsAppmeshVirtualGateway#validation}
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
export interface ClientPolicyProperty {
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#tls AwsAppmeshVirtualGateway#tls}
  */
  readonly tls?: SpecBackendDefaultsClientPolicyTlsProperty;
}
export class ClientPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientPolicyProperty | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#client_policy AwsAppmeshVirtualGateway#client_policy}
  */
  readonly clientPolicy?: ClientPolicyProperty;
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
  private _clientPolicy = new ClientPolicyPropertyOutputReference(this, "client_policy");
  public get clientPolicy() {
    return this._clientPolicy;
  }
  public putClientPolicy(value: ClientPolicyProperty) {
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
export interface GrpcProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#max_requests AwsAppmeshVirtualGateway#max_requests}
  */
  readonly maxRequests: number;
}
export class GrpcPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrpcProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrpcProperty | undefined) {
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
export interface HttpProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#max_connections AwsAppmeshVirtualGateway#max_connections}
  */
  readonly maxConnections: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#max_pending_requests AwsAppmeshVirtualGateway#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}
export class HttpPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpProperty | undefined {
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

  public set internalValue(value: HttpProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface Http2Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#max_requests AwsAppmeshVirtualGateway#max_requests}
  */
  readonly maxRequests: number;
}
export class Http2PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Http2Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Http2Property | undefined) {
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
export interface ConnectionPoolProperty {
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#grpc AwsAppmeshVirtualGateway#grpc}
  */
  readonly grpc?: GrpcProperty;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#http AwsAppmeshVirtualGateway#http}
  */
  readonly http?: HttpProperty;
  /**
  * http2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#http2 AwsAppmeshVirtualGateway#http2}
  */
  readonly http2?: Http2Property;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionPoolProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
      this._http2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
      this._http2.internalValue = value.http2;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new GrpcPropertyOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: GrpcProperty) {
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
  private _http = new HttpPropertyOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: HttpProperty) {
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
  private _http2 = new Http2PropertyOutputReference(this, "http2");
  public get http2() {
    return this._http2;
  }
  public putHttp2(value: Http2Property) {
    this._http2.internalValue = value;
  }
  public resetHttp2() {
    this._http2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2.internalValue;
  }
}
export interface HealthCheckProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#healthy_threshold AwsAppmeshVirtualGateway#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#interval_millis AwsAppmeshVirtualGateway#interval_millis}
  */
  readonly intervalMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#path AwsAppmeshVirtualGateway#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#port AwsAppmeshVirtualGateway#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#protocol AwsAppmeshVirtualGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#timeout_millis AwsAppmeshVirtualGateway#timeout_millis}
  */
  readonly timeoutMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#unhealthy_threshold AwsAppmeshVirtualGateway#unhealthy_threshold}
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
export interface PortMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#port AwsAppmeshVirtualGateway#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#protocol AwsAppmeshVirtualGateway#protocol}
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
export interface SpecListenerTlsCertificateAcmProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#certificate_arn AwsAppmeshVirtualGateway#certificate_arn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#certificate_chain AwsAppmeshVirtualGateway#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#private_key AwsAppmeshVirtualGateway#private_key}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#secret_name AwsAppmeshVirtualGateway#secret_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#acm AwsAppmeshVirtualGateway#acm}
  */
  readonly acm?: SpecListenerTlsCertificateAcmProperty;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#file AwsAppmeshVirtualGateway#file}
  */
  readonly file?: SpecListenerTlsCertificateFileProperty;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#sds AwsAppmeshVirtualGateway#sds}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#exact AwsAppmeshVirtualGateway#exact}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#match AwsAppmeshVirtualGateway#match}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#certificate_chain AwsAppmeshVirtualGateway#certificate_chain}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#secret_name AwsAppmeshVirtualGateway#secret_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#file AwsAppmeshVirtualGateway#file}
  */
  readonly file?: SpecListenerTlsValidationTrustFileProperty;
  /**
  * sds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#sds AwsAppmeshVirtualGateway#sds}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#subject_alternative_names AwsAppmeshVirtualGateway#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: SpecListenerTlsValidationSubjectAlternativeNamesProperty;
  /**
  * trust block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#trust AwsAppmeshVirtualGateway#trust}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#mode AwsAppmeshVirtualGateway#mode}
  */
  readonly mode: string;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#certificate AwsAppmeshVirtualGateway#certificate}
  */
  readonly certificate: SpecListenerTlsCertificateProperty;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#validation AwsAppmeshVirtualGateway#validation}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#connection_pool AwsAppmeshVirtualGateway#connection_pool}
  */
  readonly connectionPool?: ConnectionPoolProperty;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#health_check AwsAppmeshVirtualGateway#health_check}
  */
  readonly healthCheck?: HealthCheckProperty;
  /**
  * port_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#port_mapping AwsAppmeshVirtualGateway#port_mapping}
  */
  readonly portMapping: PortMappingProperty;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#tls AwsAppmeshVirtualGateway#tls}
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
    if (this._portMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMapping = this._portMapping?.internalValue;
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
      this._portMapping.internalValue = undefined;
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
      this._portMapping.internalValue = value.portMapping;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#key AwsAppmeshVirtualGateway#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#value AwsAppmeshVirtualGateway#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#text AwsAppmeshVirtualGateway#text}
  */
  readonly text?: string;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#json AwsAppmeshVirtualGateway#json}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#path AwsAppmeshVirtualGateway#path}
  */
  readonly path: string;
  /**
  * format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#format AwsAppmeshVirtualGateway#format}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#file AwsAppmeshVirtualGateway#file}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#access_log AwsAppmeshVirtualGateway#access_log}
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
export interface SpecProperty {
  /**
  * backend_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#backend_defaults AwsAppmeshVirtualGateway#backend_defaults}
  */
  readonly backendDefaults?: BackendDefaultsProperty;
  /**
  * listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#listener AwsAppmeshVirtualGateway#listener}
  */
  readonly listener: ListenerProperty[] | cdktn.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appmesh_virtual_gateway#logging AwsAppmeshVirtualGateway#logging}
  */
  readonly logging?: LoggingProperty;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendDefaults.internalValue = undefined;
      this._listener.internalValue = undefined;
      this._logging.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendDefaults.internalValue = value.backendDefaults;
      this._listener.internalValue = value.listener;
      this._logging.internalValue = value.logging;
    }
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

  // listener - computed: false, optional: false, required: true
  private _listener = new ListenerPropertyList(this, "listener", false);
  public get listener() {
    return this._listener;
  }
  public putListener(value: ListenerProperty[] | cdktn.IResolvable) {
    this._listener.internalValue = value;
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
}
}
