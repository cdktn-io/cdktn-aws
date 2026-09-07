// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsTlsInspectionConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#description AwsTlsInspectionConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#encryption_configuration AwsTlsInspectionConfiguration#encryption_configuration}
  */
  readonly encryptionConfiguration?: AwsTlsInspectionConfiguration.EncryptionConfigurationProperty[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#name AwsTlsInspectionConfiguration#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#region AwsTlsInspectionConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#tags AwsTlsInspectionConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#timeouts AwsTlsInspectionConfiguration#timeouts}
  */
  readonly timeouts?: AwsTlsInspectionConfiguration.TimeoutsProperty;
  /**
  * tls_inspection_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#tls_inspection_configuration AwsTlsInspectionConfiguration#tls_inspection_configuration}
  */
  readonly tlsInspectionConfiguration?: AwsTlsInspectionConfiguration.TlsInspectionConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration aws_networkfirewall_tls_inspection_configuration}
*/
export class AwsTlsInspectionConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkfirewall_tls_inspection_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsTlsInspectionConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTlsInspectionConfiguration to import
  * @param importFromId The id of the existing AwsTlsInspectionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTlsInspectionConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkfirewall_tls_inspection_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration aws_networkfirewall_tls_inspection_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTlsInspectionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTlsInspectionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkfirewall_tls_inspection_configuration',
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
    this._description = config.description;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._tlsInspectionConfiguration.internalValue = config.tlsInspectionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority - computed: true, optional: false, required: false
  private _certificateAuthority = new AwsTlsInspectionConfiguration.CertificateAuthorityPropertyList(this, "certificate_authority", false);
  public get certificateAuthority() {
    return this._certificateAuthority;
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new AwsTlsInspectionConfiguration.CertificatesPropertyList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
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

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new AwsTlsInspectionConfiguration.EncryptionConfigurationPropertyList(this, "encryption_configuration", false);
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AwsTlsInspectionConfiguration.EncryptionConfigurationProperty[] | cdktn.IResolvable) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // number_of_associations - computed: true, optional: false, required: false
  public get numberOfAssociations() {
    return this.getNumberAttribute('number_of_associations');
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

  // tls_inspection_configuration_id - computed: true, optional: false, required: false
  public get tlsInspectionConfigurationId() {
    return this.getStringAttribute('tls_inspection_configuration_id');
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsTlsInspectionConfiguration.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsTlsInspectionConfiguration.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls_inspection_configuration - computed: false, optional: true, required: false
  private _tlsInspectionConfiguration = new AwsTlsInspectionConfiguration.TlsInspectionConfigurationPropertyList(this, "tls_inspection_configuration", false);
  public get tlsInspectionConfiguration() {
    return this._tlsInspectionConfiguration;
  }
  public putTlsInspectionConfiguration(value: AwsTlsInspectionConfiguration.TlsInspectionConfigurationProperty[] | cdktn.IResolvable) {
    this._tlsInspectionConfiguration.internalValue = value;
  }
  public resetTlsInspectionConfiguration() {
    this._tlsInspectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInspectionConfigurationInput() {
    return this._tlsInspectionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      encryption_configuration: cdktn.listMapper(awsTlsInspectionConfigurationEncryptionConfigurationPropertyToTerraform, false)(this._encryptionConfiguration.internalValue),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeouts: awsTlsInspectionConfigurationTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      tls_inspection_configuration: cdktn.listMapper(awsTlsInspectionConfigurationTlsInspectionConfigurationPropertyToTerraform, true)(this._tlsInspectionConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_configuration: {
        value: cdktn.listMapperHcl(awsTlsInspectionConfigurationEncryptionConfigurationPropertyToHclTerraform, false)(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTlsInspectionConfiguration.EncryptionConfigurationPropertyList",
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
      timeouts: {
        value: awsTlsInspectionConfigurationTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsTlsInspectionConfiguration.TimeoutsProperty",
      },
      tls_inspection_configuration: {
        value: cdktn.listMapperHcl(awsTlsInspectionConfigurationTlsInspectionConfigurationPropertyToHclTerraform, true)(this._tlsInspectionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTlsInspectionConfiguration.TlsInspectionConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsTlsInspectionConfigurationCertificateAuthorityPropertyToTerraform(struct?: AwsTlsInspectionConfiguration.CertificateAuthorityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsTlsInspectionConfigurationCertificateAuthorityPropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.CertificateAuthorityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsTlsInspectionConfigurationCertificatesPropertyToTerraform(struct?: AwsTlsInspectionConfiguration.CertificatesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsTlsInspectionConfigurationCertificatesPropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.CertificatesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsTlsInspectionConfigurationEncryptionConfigurationPropertyToTerraform(struct?: AwsTlsInspectionConfiguration.EncryptionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsTlsInspectionConfigurationEncryptionConfigurationPropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.EncryptionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTlsInspectionConfigurationTimeoutsPropertyToTerraform(struct?: AwsTlsInspectionConfiguration.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsTlsInspectionConfigurationTimeoutsPropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsTlsInspectionConfigurationCheckCertificateRevocationStatusPropertyToTerraform(struct?: AwsTlsInspectionConfiguration.CheckCertificateRevocationStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    revoked_status_action: cdktn.stringToTerraform(struct!.revokedStatusAction),
    unknown_status_action: cdktn.stringToTerraform(struct!.unknownStatusAction),
  }
}


export function awsTlsInspectionConfigurationCheckCertificateRevocationStatusPropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.CheckCertificateRevocationStatusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    revoked_status_action: {
      value: cdktn.stringToHclTerraform(struct!.revokedStatusAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_status_action: {
      value: cdktn.stringToHclTerraform(struct!.unknownStatusAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTlsInspectionConfigurationDestinationPropertyToTerraform(struct?: AwsTlsInspectionConfiguration.DestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_definition: cdktn.stringToTerraform(struct!.addressDefinition),
  }
}


export function awsTlsInspectionConfigurationDestinationPropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.DestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_definition: {
      value: cdktn.stringToHclTerraform(struct!.addressDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTlsInspectionConfigurationDestinationPortsPropertyToTerraform(struct?: AwsTlsInspectionConfiguration.DestinationPortsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function awsTlsInspectionConfigurationDestinationPortsPropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.DestinationPortsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTlsInspectionConfigurationSourcePropertyToTerraform(struct?: AwsTlsInspectionConfiguration.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_definition: cdktn.stringToTerraform(struct!.addressDefinition),
  }
}


export function awsTlsInspectionConfigurationSourcePropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_definition: {
      value: cdktn.stringToHclTerraform(struct!.addressDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTlsInspectionConfigurationSourcePortsPropertyToTerraform(struct?: AwsTlsInspectionConfiguration.SourcePortsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function awsTlsInspectionConfigurationSourcePortsPropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.SourcePortsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTlsInspectionConfigurationScopePropertyToTerraform(struct?: AwsTlsInspectionConfiguration.ScopeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    protocols: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.protocols),
    destination: cdktn.listMapper(awsTlsInspectionConfigurationDestinationPropertyToTerraform, true)(struct!.destination),
    destination_ports: cdktn.listMapper(awsTlsInspectionConfigurationDestinationPortsPropertyToTerraform, true)(struct!.destinationPorts),
    source: cdktn.listMapper(awsTlsInspectionConfigurationSourcePropertyToTerraform, true)(struct!.source),
    source_ports: cdktn.listMapper(awsTlsInspectionConfigurationSourcePortsPropertyToTerraform, true)(struct!.sourcePorts),
  }
}


export function awsTlsInspectionConfigurationScopePropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.ScopeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    protocols: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    destination: {
      value: cdktn.listMapperHcl(awsTlsInspectionConfigurationDestinationPropertyToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationPropertyList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(awsTlsInspectionConfigurationDestinationPortsPropertyToHclTerraform, true)(struct!.destinationPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationPortsPropertyList",
    },
    source: {
      value: cdktn.listMapperHcl(awsTlsInspectionConfigurationSourcePropertyToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "SourcePropertyList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(awsTlsInspectionConfigurationSourcePortsPropertyToHclTerraform, true)(struct!.sourcePorts),
      isBlock: true,
      type: "list",
      storageClassType: "SourcePortsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTlsInspectionConfigurationServerCertificatePropertyToTerraform(struct?: AwsTlsInspectionConfiguration.ServerCertificateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function awsTlsInspectionConfigurationServerCertificatePropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.ServerCertificateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTlsInspectionConfigurationServerCertificateConfigurationPropertyToTerraform(struct?: AwsTlsInspectionConfiguration.ServerCertificateConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_authority_arn: cdktn.stringToTerraform(struct!.certificateAuthorityArn),
    check_certificate_revocation_status: cdktn.listMapper(awsTlsInspectionConfigurationCheckCertificateRevocationStatusPropertyToTerraform, true)(struct!.checkCertificateRevocationStatus),
    scope: cdktn.listMapper(awsTlsInspectionConfigurationScopePropertyToTerraform, true)(struct!.scope),
    server_certificate: cdktn.listMapper(awsTlsInspectionConfigurationServerCertificatePropertyToTerraform, true)(struct!.serverCertificate),
  }
}


export function awsTlsInspectionConfigurationServerCertificateConfigurationPropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.ServerCertificateConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_authority_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateAuthorityArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_certificate_revocation_status: {
      value: cdktn.listMapperHcl(awsTlsInspectionConfigurationCheckCertificateRevocationStatusPropertyToHclTerraform, true)(struct!.checkCertificateRevocationStatus),
      isBlock: true,
      type: "list",
      storageClassType: "CheckCertificateRevocationStatusPropertyList",
    },
    scope: {
      value: cdktn.listMapperHcl(awsTlsInspectionConfigurationScopePropertyToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "ScopePropertyList",
    },
    server_certificate: {
      value: cdktn.listMapperHcl(awsTlsInspectionConfigurationServerCertificatePropertyToHclTerraform, true)(struct!.serverCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "ServerCertificatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTlsInspectionConfigurationTlsInspectionConfigurationPropertyToTerraform(struct?: AwsTlsInspectionConfiguration.TlsInspectionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    server_certificate_configuration: cdktn.listMapper(awsTlsInspectionConfigurationServerCertificateConfigurationPropertyToTerraform, true)(struct!.serverCertificateConfiguration),
  }
}


export function awsTlsInspectionConfigurationTlsInspectionConfigurationPropertyToHclTerraform(struct?: AwsTlsInspectionConfiguration.TlsInspectionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    server_certificate_configuration: {
      value: cdktn.listMapperHcl(awsTlsInspectionConfigurationServerCertificateConfigurationPropertyToHclTerraform, true)(struct!.serverCertificateConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ServerCertificateConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsTlsInspectionConfiguration {
export interface CertificateAuthorityProperty {
}
export class CertificateAuthorityPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CertificateAuthorityProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateAuthorityProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_serial - computed: true, optional: false, required: false
  public get certificateSerial() {
    return this.getStringAttribute('certificate_serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

export class CertificateAuthorityPropertyList extends cdktn.ComplexList {

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
  public get(index: number): CertificateAuthorityPropertyOutputReference {
    return new CertificateAuthorityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatesProperty {
}
export class CertificatesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CertificatesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_serial - computed: true, optional: false, required: false
  public get certificateSerial() {
    return this.getStringAttribute('certificate_serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

export class CertificatesPropertyList extends cdktn.ComplexList {

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
  public get(index: number): CertificatesPropertyOutputReference {
    return new CertificatesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#key_id AwsTlsInspectionConfiguration#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#type AwsTlsInspectionConfiguration#type}
  */
  readonly type?: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._type = value.type;
    }
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EncryptionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : EncryptionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): EncryptionConfigurationPropertyOutputReference {
    return new EncryptionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#create AwsTlsInspectionConfiguration#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#delete AwsTlsInspectionConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#update AwsTlsInspectionConfiguration#update}
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
export interface CheckCertificateRevocationStatusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#revoked_status_action AwsTlsInspectionConfiguration#revoked_status_action}
  */
  readonly revokedStatusAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#unknown_status_action AwsTlsInspectionConfiguration#unknown_status_action}
  */
  readonly unknownStatusAction?: string;
}
export class CheckCertificateRevocationStatusPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CheckCertificateRevocationStatusProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revokedStatusAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedStatusAction = this._revokedStatusAction;
    }
    if (this._unknownStatusAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownStatusAction = this._unknownStatusAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckCertificateRevocationStatusProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revokedStatusAction = undefined;
      this._unknownStatusAction = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revokedStatusAction = value.revokedStatusAction;
      this._unknownStatusAction = value.unknownStatusAction;
    }
  }

  // revoked_status_action - computed: false, optional: true, required: false
  private _revokedStatusAction?: string; 
  public get revokedStatusAction() {
    return this.getStringAttribute('revoked_status_action');
  }
  public set revokedStatusAction(value: string) {
    this._revokedStatusAction = value;
  }
  public resetRevokedStatusAction() {
    this._revokedStatusAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedStatusActionInput() {
    return this._revokedStatusAction;
  }

  // unknown_status_action - computed: false, optional: true, required: false
  private _unknownStatusAction?: string; 
  public get unknownStatusAction() {
    return this.getStringAttribute('unknown_status_action');
  }
  public set unknownStatusAction(value: string) {
    this._unknownStatusAction = value;
  }
  public resetUnknownStatusAction() {
    this._unknownStatusAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownStatusActionInput() {
    return this._unknownStatusAction;
  }
}

export class CheckCertificateRevocationStatusPropertyList extends cdktn.ComplexList {
  public internalValue? : CheckCertificateRevocationStatusProperty[] | cdktn.IResolvable

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
  public get(index: number): CheckCertificateRevocationStatusPropertyOutputReference {
    return new CheckCertificateRevocationStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#address_definition AwsTlsInspectionConfiguration#address_definition}
  */
  readonly addressDefinition: string;
}
export class DestinationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DestinationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: false, optional: false, required: true
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class DestinationPropertyList extends cdktn.ComplexList {
  public internalValue? : DestinationProperty[] | cdktn.IResolvable

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
  public get(index: number): DestinationPropertyOutputReference {
    return new DestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationPortsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#from_port AwsTlsInspectionConfiguration#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#to_port AwsTlsInspectionConfiguration#to_port}
  */
  readonly toPort: number;
}
export class DestinationPortsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DestinationPortsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPortsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class DestinationPortsPropertyList extends cdktn.ComplexList {
  public internalValue? : DestinationPortsProperty[] | cdktn.IResolvable

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
  public get(index: number): DestinationPortsPropertyOutputReference {
    return new DestinationPortsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#address_definition AwsTlsInspectionConfiguration#address_definition}
  */
  readonly addressDefinition: string;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: false, optional: false, required: true
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class SourcePropertyList extends cdktn.ComplexList {
  public internalValue? : SourceProperty[] | cdktn.IResolvable

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
  public get(index: number): SourcePropertyOutputReference {
    return new SourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourcePortsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#from_port AwsTlsInspectionConfiguration#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#to_port AwsTlsInspectionConfiguration#to_port}
  */
  readonly toPort: number;
}
export class SourcePortsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourcePortsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePortsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class SourcePortsPropertyList extends cdktn.ComplexList {
  public internalValue? : SourcePortsProperty[] | cdktn.IResolvable

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
  public get(index: number): SourcePortsPropertyOutputReference {
    return new SourcePortsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScopeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#protocols AwsTlsInspectionConfiguration#protocols}
  */
  readonly protocols: number[];
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#destination AwsTlsInspectionConfiguration#destination}
  */
  readonly destination?: DestinationProperty[] | cdktn.IResolvable;
  /**
  * destination_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#destination_ports AwsTlsInspectionConfiguration#destination_ports}
  */
  readonly destinationPorts?: DestinationPortsProperty[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#source AwsTlsInspectionConfiguration#source}
  */
  readonly source?: SourceProperty[] | cdktn.IResolvable;
  /**
  * source_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#source_ports AwsTlsInspectionConfiguration#source_ports}
  */
  readonly sourcePorts?: SourcePortsProperty[] | cdktn.IResolvable;
}
export class ScopePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScopeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._destinationPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sourcePorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScopeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocols = undefined;
      this._destination.internalValue = undefined;
      this._destinationPorts.internalValue = undefined;
      this._source.internalValue = undefined;
      this._sourcePorts.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocols = value.protocols;
      this._destination.internalValue = value.destination;
      this._destinationPorts.internalValue = value.destinationPorts;
      this._source.internalValue = value.source;
      this._sourcePorts.internalValue = value.sourcePorts;
    }
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: number[]; 
  public get protocols() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('protocols')));
  }
  public set protocols(value: number[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DestinationPropertyList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DestinationProperty[] | cdktn.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts = new DestinationPortsPropertyList(this, "destination_ports", false);
  public get destinationPorts() {
    return this._destinationPorts;
  }
  public putDestinationPorts(value: DestinationPortsProperty[] | cdktn.IResolvable) {
    this._destinationPorts.internalValue = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new SourcePropertyList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: SourceProperty[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts = new SourcePortsPropertyList(this, "source_ports", false);
  public get sourcePorts() {
    return this._sourcePorts;
  }
  public putSourcePorts(value: SourcePortsProperty[] | cdktn.IResolvable) {
    this._sourcePorts.internalValue = value;
  }
  public resetSourcePorts() {
    this._sourcePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts.internalValue;
  }
}

export class ScopePropertyList extends cdktn.ComplexList {
  public internalValue? : ScopeProperty[] | cdktn.IResolvable

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
  public get(index: number): ScopePropertyOutputReference {
    return new ScopePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerCertificateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#resource_arn AwsTlsInspectionConfiguration#resource_arn}
  */
  readonly resourceArn?: string;
}
export class ServerCertificatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServerCertificateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerCertificateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceArn = value.resourceArn;
    }
  }

  // resource_arn - computed: false, optional: true, required: false
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  public resetResourceArn() {
    this._resourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}

export class ServerCertificatePropertyList extends cdktn.ComplexList {
  public internalValue? : ServerCertificateProperty[] | cdktn.IResolvable

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
  public get(index: number): ServerCertificatePropertyOutputReference {
    return new ServerCertificatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerCertificateConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#certificate_authority_arn AwsTlsInspectionConfiguration#certificate_authority_arn}
  */
  readonly certificateAuthorityArn?: string;
  /**
  * check_certificate_revocation_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#check_certificate_revocation_status AwsTlsInspectionConfiguration#check_certificate_revocation_status}
  */
  readonly checkCertificateRevocationStatus?: CheckCertificateRevocationStatusProperty[] | cdktn.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#scope AwsTlsInspectionConfiguration#scope}
  */
  readonly scope?: ScopeProperty[] | cdktn.IResolvable;
  /**
  * server_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#server_certificate AwsTlsInspectionConfiguration#server_certificate}
  */
  readonly serverCertificate?: ServerCertificateProperty[] | cdktn.IResolvable;
}
export class ServerCertificateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServerCertificateConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArn = this._certificateAuthorityArn;
    }
    if (this._checkCertificateRevocationStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkCertificateRevocationStatus = this._checkCertificateRevocationStatus?.internalValue;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._serverCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificate = this._serverCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerCertificateConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthorityArn = undefined;
      this._checkCertificateRevocationStatus.internalValue = undefined;
      this._scope.internalValue = undefined;
      this._serverCertificate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthorityArn = value.certificateAuthorityArn;
      this._checkCertificateRevocationStatus.internalValue = value.checkCertificateRevocationStatus;
      this._scope.internalValue = value.scope;
      this._serverCertificate.internalValue = value.serverCertificate;
    }
  }

  // certificate_authority_arn - computed: false, optional: true, required: false
  private _certificateAuthorityArn?: string; 
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  public resetCertificateAuthorityArn() {
    this._certificateAuthorityArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn;
  }

  // check_certificate_revocation_status - computed: false, optional: true, required: false
  private _checkCertificateRevocationStatus = new CheckCertificateRevocationStatusPropertyList(this, "check_certificate_revocation_status", false);
  public get checkCertificateRevocationStatus() {
    return this._checkCertificateRevocationStatus;
  }
  public putCheckCertificateRevocationStatus(value: CheckCertificateRevocationStatusProperty[] | cdktn.IResolvable) {
    this._checkCertificateRevocationStatus.internalValue = value;
  }
  public resetCheckCertificateRevocationStatus() {
    this._checkCertificateRevocationStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkCertificateRevocationStatusInput() {
    return this._checkCertificateRevocationStatus.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new ScopePropertyList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ScopeProperty[] | cdktn.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate = new ServerCertificatePropertyList(this, "server_certificate", false);
  public get serverCertificate() {
    return this._serverCertificate;
  }
  public putServerCertificate(value: ServerCertificateProperty[] | cdktn.IResolvable) {
    this._serverCertificate.internalValue = value;
  }
  public resetServerCertificate() {
    this._serverCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate.internalValue;
  }
}

export class ServerCertificateConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ServerCertificateConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ServerCertificateConfigurationPropertyOutputReference {
    return new ServerCertificateConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TlsInspectionConfigurationProperty {
  /**
  * server_certificate_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkfirewall_tls_inspection_configuration#server_certificate_configuration AwsTlsInspectionConfiguration#server_certificate_configuration}
  */
  readonly serverCertificateConfiguration?: ServerCertificateConfigurationProperty[] | cdktn.IResolvable;
}
export class TlsInspectionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TlsInspectionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverCertificateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateConfiguration = this._serverCertificateConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsInspectionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverCertificateConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverCertificateConfiguration.internalValue = value.serverCertificateConfiguration;
    }
  }

  // server_certificate_configuration - computed: false, optional: true, required: false
  private _serverCertificateConfiguration = new ServerCertificateConfigurationPropertyList(this, "server_certificate_configuration", false);
  public get serverCertificateConfiguration() {
    return this._serverCertificateConfiguration;
  }
  public putServerCertificateConfiguration(value: ServerCertificateConfigurationProperty[] | cdktn.IResolvable) {
    this._serverCertificateConfiguration.internalValue = value;
  }
  public resetServerCertificateConfiguration() {
    this._serverCertificateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateConfigurationInput() {
    return this._serverCertificateConfiguration.internalValue;
  }
}

export class TlsInspectionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : TlsInspectionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): TlsInspectionConfigurationPropertyOutputReference {
    return new TlsInspectionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
