// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfKxEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#description TfKxEnvironment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#kms_key_id TfKxEnvironment#kms_key_id}
  */
  readonly kmsKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#name TfKxEnvironment#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#region TfKxEnvironment#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#tags TfKxEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#tags_all TfKxEnvironment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * custom_dns_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#custom_dns_configuration TfKxEnvironment#custom_dns_configuration}
  */
  readonly customDnsConfiguration?: TfKxEnvironment.CustomDnsConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#timeouts TfKxEnvironment#timeouts}
  */
  readonly timeouts?: TfKxEnvironment.TimeoutsProperty;
  /**
  * transit_gateway_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#transit_gateway_configuration TfKxEnvironment#transit_gateway_configuration}
  */
  readonly transitGatewayConfiguration?: TfKxEnvironment.TransitGatewayConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment aws_finspace_kx_environment}
*/
export class TfKxEnvironment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_finspace_kx_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfKxEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfKxEnvironment to import
  * @param importFromId The id of the existing TfKxEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfKxEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_finspace_kx_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment aws_finspace_kx_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfKxEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: TfKxEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_finspace_kx_environment',
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
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._customDnsConfiguration.internalValue = config.customDnsConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._transitGatewayConfiguration.internalValue = config.transitGatewayConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_account_id - computed: true, optional: false, required: false
  public get infrastructureAccountId() {
    return this.getStringAttribute('infrastructure_account_id');
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // last_modified_timestamp - computed: true, optional: false, required: false
  public get lastModifiedTimestamp() {
    return this.getStringAttribute('last_modified_timestamp');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // custom_dns_configuration - computed: false, optional: true, required: false
  private _customDnsConfiguration = new TfKxEnvironment.CustomDnsConfigurationPropertyList(this, "custom_dns_configuration", false);
  public get customDnsConfiguration() {
    return this._customDnsConfiguration;
  }
  public putCustomDnsConfiguration(value: TfKxEnvironment.CustomDnsConfigurationProperty[] | cdktn.IResolvable) {
    this._customDnsConfiguration.internalValue = value;
  }
  public resetCustomDnsConfiguration() {
    this._customDnsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsConfigurationInput() {
    return this._customDnsConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfKxEnvironment.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfKxEnvironment.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // transit_gateway_configuration - computed: false, optional: true, required: false
  private _transitGatewayConfiguration = new TfKxEnvironment.TransitGatewayConfigurationPropertyOutputReference(this, "transit_gateway_configuration");
  public get transitGatewayConfiguration() {
    return this._transitGatewayConfiguration;
  }
  public putTransitGatewayConfiguration(value: TfKxEnvironment.TransitGatewayConfigurationProperty) {
    this._transitGatewayConfiguration.internalValue = value;
  }
  public resetTransitGatewayConfiguration() {
    this._transitGatewayConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConfigurationInput() {
    return this._transitGatewayConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      custom_dns_configuration: cdktn.listMapper(tfKxEnvironmentCustomDnsConfigurationPropertyToTerraform, true)(this._customDnsConfiguration.internalValue),
      timeouts: tfKxEnvironmentTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      transit_gateway_configuration: tfKxEnvironmentTransitGatewayConfigurationPropertyToTerraform(this._transitGatewayConfiguration.internalValue),
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
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
      custom_dns_configuration: {
        value: cdktn.listMapperHcl(tfKxEnvironmentCustomDnsConfigurationPropertyToHclTerraform, true)(this._customDnsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfKxEnvironment.CustomDnsConfigurationPropertyList",
      },
      timeouts: {
        value: tfKxEnvironmentTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfKxEnvironment.TimeoutsProperty",
      },
      transit_gateway_configuration: {
        value: tfKxEnvironmentTransitGatewayConfigurationPropertyToHclTerraform(this._transitGatewayConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfKxEnvironment.TransitGatewayConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfKxEnvironmentCustomDnsConfigurationPropertyToTerraform(struct?: TfKxEnvironment.CustomDnsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_dns_server_ip: cdktn.stringToTerraform(struct!.customDnsServerIp),
    custom_dns_server_name: cdktn.stringToTerraform(struct!.customDnsServerName),
  }
}


export function tfKxEnvironmentCustomDnsConfigurationPropertyToHclTerraform(struct?: TfKxEnvironment.CustomDnsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_dns_server_ip: {
      value: cdktn.stringToHclTerraform(struct!.customDnsServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_dns_server_name: {
      value: cdktn.stringToHclTerraform(struct!.customDnsServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfKxEnvironmentTimeoutsPropertyToTerraform(struct?: TfKxEnvironment.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfKxEnvironmentTimeoutsPropertyToHclTerraform(struct?: TfKxEnvironment.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfKxEnvironmentIcmpTypeCodePropertyToTerraform(struct?: TfKxEnvironment.IcmpTypeCodePropertyOutputReference | TfKxEnvironment.IcmpTypeCodeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code: cdktn.numberToTerraform(struct!.code),
    type: cdktn.numberToTerraform(struct!.type),
  }
}


export function tfKxEnvironmentIcmpTypeCodePropertyToHclTerraform(struct?: TfKxEnvironment.IcmpTypeCodePropertyOutputReference | TfKxEnvironment.IcmpTypeCodeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code: {
      value: cdktn.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfKxEnvironmentPortRangePropertyToTerraform(struct?: TfKxEnvironment.PortRangePropertyOutputReference | TfKxEnvironment.PortRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function tfKxEnvironmentPortRangePropertyToHclTerraform(struct?: TfKxEnvironment.PortRangePropertyOutputReference | TfKxEnvironment.PortRangeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktn.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfKxEnvironmentAttachmentNetworkAclConfigurationPropertyToTerraform(struct?: TfKxEnvironment.AttachmentNetworkAclConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr_block: cdktn.stringToTerraform(struct!.cidrBlock),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    rule_action: cdktn.stringToTerraform(struct!.ruleAction),
    rule_number: cdktn.numberToTerraform(struct!.ruleNumber),
    icmp_type_code: tfKxEnvironmentIcmpTypeCodePropertyToTerraform(struct!.icmpTypeCode),
    port_range: tfKxEnvironmentPortRangePropertyToTerraform(struct!.portRange),
  }
}


export function tfKxEnvironmentAttachmentNetworkAclConfigurationPropertyToHclTerraform(struct?: TfKxEnvironment.AttachmentNetworkAclConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_action: {
      value: cdktn.stringToHclTerraform(struct!.ruleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_number: {
      value: cdktn.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type_code: {
      value: tfKxEnvironmentIcmpTypeCodePropertyToHclTerraform(struct!.icmpTypeCode),
      isBlock: true,
      type: "list",
      storageClassType: "IcmpTypeCodePropertyList",
    },
    port_range: {
      value: tfKxEnvironmentPortRangePropertyToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "list",
      storageClassType: "PortRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfKxEnvironmentTransitGatewayConfigurationPropertyToTerraform(struct?: TfKxEnvironment.TransitGatewayConfigurationPropertyOutputReference | TfKxEnvironment.TransitGatewayConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routable_cidr_space: cdktn.stringToTerraform(struct!.routableCidrSpace),
    transit_gateway_id: cdktn.stringToTerraform(struct!.transitGatewayId),
    attachment_network_acl_configuration: cdktn.listMapper(tfKxEnvironmentAttachmentNetworkAclConfigurationPropertyToTerraform, true)(struct!.attachmentNetworkAclConfiguration),
  }
}


export function tfKxEnvironmentTransitGatewayConfigurationPropertyToHclTerraform(struct?: TfKxEnvironment.TransitGatewayConfigurationPropertyOutputReference | TfKxEnvironment.TransitGatewayConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routable_cidr_space: {
      value: cdktn.stringToHclTerraform(struct!.routableCidrSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_id: {
      value: cdktn.stringToHclTerraform(struct!.transitGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attachment_network_acl_configuration: {
      value: cdktn.listMapperHcl(tfKxEnvironmentAttachmentNetworkAclConfigurationPropertyToHclTerraform, true)(struct!.attachmentNetworkAclConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AttachmentNetworkAclConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfKxEnvironment {
export interface CustomDnsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#custom_dns_server_ip TfKxEnvironment#custom_dns_server_ip}
  */
  readonly customDnsServerIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#custom_dns_server_name TfKxEnvironment#custom_dns_server_name}
  */
  readonly customDnsServerName: string;
}
export class CustomDnsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomDnsConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDnsServerIp = this._customDnsServerIp;
    }
    if (this._customDnsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDnsServerName = this._customDnsServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDnsConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customDnsServerIp = undefined;
      this._customDnsServerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customDnsServerIp = value.customDnsServerIp;
      this._customDnsServerName = value.customDnsServerName;
    }
  }

  // custom_dns_server_ip - computed: false, optional: false, required: true
  private _customDnsServerIp?: string; 
  public get customDnsServerIp() {
    return this.getStringAttribute('custom_dns_server_ip');
  }
  public set customDnsServerIp(value: string) {
    this._customDnsServerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsServerIpInput() {
    return this._customDnsServerIp;
  }

  // custom_dns_server_name - computed: false, optional: false, required: true
  private _customDnsServerName?: string; 
  public get customDnsServerName() {
    return this.getStringAttribute('custom_dns_server_name');
  }
  public set customDnsServerName(value: string) {
    this._customDnsServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsServerNameInput() {
    return this._customDnsServerName;
  }
}

export class CustomDnsConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomDnsConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomDnsConfigurationPropertyOutputReference {
    return new CustomDnsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#create TfKxEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#delete TfKxEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#update TfKxEnvironment#update}
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
export interface IcmpTypeCodeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#code TfKxEnvironment#code}
  */
  readonly code: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#type TfKxEnvironment#type}
  */
  readonly type: number;
}
export class IcmpTypeCodePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcmpTypeCodeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcmpTypeCodeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface PortRangeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#from TfKxEnvironment#from}
  */
  readonly from: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#to TfKxEnvironment#to}
  */
  readonly to: number;
}
export class PortRangePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortRangeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortRangeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface AttachmentNetworkAclConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#cidr_block TfKxEnvironment#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#protocol TfKxEnvironment#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#rule_action TfKxEnvironment#rule_action}
  */
  readonly ruleAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#rule_number TfKxEnvironment#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * icmp_type_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#icmp_type_code TfKxEnvironment#icmp_type_code}
  */
  readonly icmpTypeCode?: IcmpTypeCodeProperty;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#port_range TfKxEnvironment#port_range}
  */
  readonly portRange?: PortRangeProperty;
}
export class AttachmentNetworkAclConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AttachmentNetworkAclConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleAction = this._ruleAction;
    }
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    if (this._icmpTypeCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeCode = this._icmpTypeCode?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttachmentNetworkAclConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._protocol = undefined;
      this._ruleAction = undefined;
      this._ruleNumber = undefined;
      this._icmpTypeCode.internalValue = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._protocol = value.protocol;
      this._ruleAction = value.ruleAction;
      this._ruleNumber = value.ruleNumber;
      this._icmpTypeCode.internalValue = value.icmpTypeCode;
      this._portRange.internalValue = value.portRange;
    }
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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

  // rule_action - computed: false, optional: false, required: true
  private _ruleAction?: string; 
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction;
  }

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // icmp_type_code - computed: false, optional: true, required: false
  private _icmpTypeCode = new IcmpTypeCodePropertyOutputReference(this, "icmp_type_code");
  public get icmpTypeCode() {
    return this._icmpTypeCode;
  }
  public putIcmpTypeCode(value: IcmpTypeCodeProperty) {
    this._icmpTypeCode.internalValue = value;
  }
  public resetIcmpTypeCode() {
    this._icmpTypeCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeCodeInput() {
    return this._icmpTypeCode.internalValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new PortRangePropertyOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: PortRangeProperty) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}

export class AttachmentNetworkAclConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : AttachmentNetworkAclConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): AttachmentNetworkAclConfigurationPropertyOutputReference {
    return new AttachmentNetworkAclConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitGatewayConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#routable_cidr_space TfKxEnvironment#routable_cidr_space}
  */
  readonly routableCidrSpace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#transit_gateway_id TfKxEnvironment#transit_gateway_id}
  */
  readonly transitGatewayId: string;
  /**
  * attachment_network_acl_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_environment#attachment_network_acl_configuration TfKxEnvironment#attachment_network_acl_configuration}
  */
  readonly attachmentNetworkAclConfiguration?: AttachmentNetworkAclConfigurationProperty[] | cdktn.IResolvable;
}
export class TransitGatewayConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransitGatewayConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routableCidrSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.routableCidrSpace = this._routableCidrSpace;
    }
    if (this._transitGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayId = this._transitGatewayId;
    }
    if (this._attachmentNetworkAclConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentNetworkAclConfiguration = this._attachmentNetworkAclConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitGatewayConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routableCidrSpace = undefined;
      this._transitGatewayId = undefined;
      this._attachmentNetworkAclConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routableCidrSpace = value.routableCidrSpace;
      this._transitGatewayId = value.transitGatewayId;
      this._attachmentNetworkAclConfiguration.internalValue = value.attachmentNetworkAclConfiguration;
    }
  }

  // routable_cidr_space - computed: false, optional: false, required: true
  private _routableCidrSpace?: string; 
  public get routableCidrSpace() {
    return this.getStringAttribute('routable_cidr_space');
  }
  public set routableCidrSpace(value: string) {
    this._routableCidrSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routableCidrSpaceInput() {
    return this._routableCidrSpace;
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // attachment_network_acl_configuration - computed: false, optional: true, required: false
  private _attachmentNetworkAclConfiguration = new AttachmentNetworkAclConfigurationPropertyList(this, "attachment_network_acl_configuration", false);
  public get attachmentNetworkAclConfiguration() {
    return this._attachmentNetworkAclConfiguration;
  }
  public putAttachmentNetworkAclConfiguration(value: AttachmentNetworkAclConfigurationProperty[] | cdktn.IResolvable) {
    this._attachmentNetworkAclConfiguration.internalValue = value;
  }
  public resetAttachmentNetworkAclConfiguration() {
    this._attachmentNetworkAclConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentNetworkAclConfigurationInput() {
    return this._attachmentNetworkAclConfiguration.internalValue;
  }
}
}
