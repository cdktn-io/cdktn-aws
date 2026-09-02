// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfIngressPointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#name TfIngressPoint#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#region TfIngressPoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#rule_set_id TfIngressPoint#rule_set_id}
  */
  readonly ruleSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tags TfIngressPoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tls_policy TfIngressPoint#tls_policy}
  */
  readonly tlsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#traffic_policy_id TfIngressPoint#traffic_policy_id}
  */
  readonly trafficPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#type TfIngressPoint#type}
  */
  readonly type: string;
  /**
  * ingress_point_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#ingress_point_configuration TfIngressPoint#ingress_point_configuration}
  */
  readonly ingressPointConfiguration?: TfIngressPoint.IngressPointConfigurationProperty[] | cdktn.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#network_configuration TfIngressPoint#network_configuration}
  */
  readonly networkConfiguration?: TfIngressPoint.NetworkConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#timeouts TfIngressPoint#timeouts}
  */
  readonly timeouts?: TfIngressPoint.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point aws_mailmanager_ingress_point}
*/
export class TfIngressPoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mailmanager_ingress_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfIngressPoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfIngressPoint to import
  * @param importFromId The id of the existing TfIngressPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfIngressPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_mailmanager_ingress_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point aws_mailmanager_ingress_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfIngressPointConfig
  */
  public constructor(scope: Construct, id: string, config: TfIngressPointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mailmanager_ingress_point',
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
    this._name = config.name;
    this._region = config.region;
    this._ruleSetId = config.ruleSetId;
    this._tags = config.tags;
    this._tlsPolicy = config.tlsPolicy;
    this._trafficPolicyId = config.trafficPolicyId;
    this._type = config.type;
    this._ingressPointConfiguration.internalValue = config.ingressPointConfiguration;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // a_record - computed: true, optional: false, required: false
  public get aRecord() {
    return this.getStringAttribute('a_record');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_timestamp - computed: true, optional: false, required: false
  public get lastUpdatedTimestamp() {
    return this.getStringAttribute('last_updated_timestamp');
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

  // rule_set_id - computed: false, optional: false, required: true
  private _ruleSetId?: string; 
  public get ruleSetId() {
    return this.getStringAttribute('rule_set_id');
  }
  public set ruleSetId(value: string) {
    this._ruleSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetIdInput() {
    return this._ruleSetId;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // tls_policy - computed: true, optional: true, required: false
  private _tlsPolicy?: string; 
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }
  public set tlsPolicy(value: string) {
    this._tlsPolicy = value;
  }
  public resetTlsPolicy() {
    this._tlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPolicyInput() {
    return this._tlsPolicy;
  }

  // traffic_policy_id - computed: false, optional: false, required: true
  private _trafficPolicyId?: string; 
  public get trafficPolicyId() {
    return this.getStringAttribute('traffic_policy_id');
  }
  public set trafficPolicyId(value: string) {
    this._trafficPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyIdInput() {
    return this._trafficPolicyId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // ingress_point_configuration - computed: false, optional: true, required: false
  private _ingressPointConfiguration = new TfIngressPoint.IngressPointConfigurationPropertyList(this, "ingress_point_configuration", false);
  public get ingressPointConfiguration() {
    return this._ingressPointConfiguration;
  }
  public putIngressPointConfiguration(value: TfIngressPoint.IngressPointConfigurationProperty[] | cdktn.IResolvable) {
    this._ingressPointConfiguration.internalValue = value;
  }
  public resetIngressPointConfiguration() {
    this._ingressPointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPointConfigurationInput() {
    return this._ingressPointConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new TfIngressPoint.NetworkConfigurationPropertyList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: TfIngressPoint.NetworkConfigurationProperty[] | cdktn.IResolvable) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfIngressPoint.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfIngressPoint.TimeoutsProperty) {
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
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      rule_set_id: cdktn.stringToTerraform(this._ruleSetId),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tls_policy: cdktn.stringToTerraform(this._tlsPolicy),
      traffic_policy_id: cdktn.stringToTerraform(this._trafficPolicyId),
      type: cdktn.stringToTerraform(this._type),
      ingress_point_configuration: cdktn.listMapper(tfIngressPointIngressPointConfigurationPropertyToTerraform, true)(this._ingressPointConfiguration.internalValue),
      network_configuration: cdktn.listMapper(tfIngressPointNetworkConfigurationPropertyToTerraform, true)(this._networkConfiguration.internalValue),
      timeouts: tfIngressPointTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      rule_set_id: {
        value: cdktn.stringToHclTerraform(this._ruleSetId),
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
      tls_policy: {
        value: cdktn.stringToHclTerraform(this._tlsPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_policy_id: {
        value: cdktn.stringToHclTerraform(this._trafficPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_point_configuration: {
        value: cdktn.listMapperHcl(tfIngressPointIngressPointConfigurationPropertyToHclTerraform, true)(this._ingressPointConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIngressPoint.IngressPointConfigurationPropertyList",
      },
      network_configuration: {
        value: cdktn.listMapperHcl(tfIngressPointNetworkConfigurationPropertyToHclTerraform, true)(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIngressPoint.NetworkConfigurationPropertyList",
      },
      timeouts: {
        value: tfIngressPointTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfIngressPoint.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfIngressPointTrustStorePropertyToTerraform(struct?: TfIngressPoint.TrustStoreProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_content: cdktn.stringToTerraform(struct!.caContent),
    crl_content: cdktn.stringToTerraform(struct!.crlContent),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function tfIngressPointTrustStorePropertyToHclTerraform(struct?: TfIngressPoint.TrustStoreProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_content: {
      value: cdktn.stringToHclTerraform(struct!.caContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_content: {
      value: cdktn.stringToHclTerraform(struct!.crlContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIngressPointTlsAuthConfigurationPropertyToTerraform(struct?: TfIngressPoint.TlsAuthConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trust_store: cdktn.listMapper(tfIngressPointTrustStorePropertyToTerraform, true)(struct!.trustStore),
  }
}


export function tfIngressPointTlsAuthConfigurationPropertyToHclTerraform(struct?: TfIngressPoint.TlsAuthConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    trust_store: {
      value: cdktn.listMapperHcl(tfIngressPointTrustStorePropertyToHclTerraform, true)(struct!.trustStore),
      isBlock: true,
      type: "list",
      storageClassType: "TrustStorePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIngressPointIngressPointConfigurationPropertyToTerraform(struct?: TfIngressPoint.IngressPointConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    smtp_password_wo: cdktn.stringToTerraform(struct!.smtpPasswordWo),
    smtp_password_wo_version: cdktn.numberToTerraform(struct!.smtpPasswordWoVersion),
    tls_auth_configuration: cdktn.listMapper(tfIngressPointTlsAuthConfigurationPropertyToTerraform, true)(struct!.tlsAuthConfiguration),
  }
}


export function tfIngressPointIngressPointConfigurationPropertyToHclTerraform(struct?: TfIngressPoint.IngressPointConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_password_wo: {
      value: cdktn.stringToHclTerraform(struct!.smtpPasswordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_password_wo_version: {
      value: cdktn.numberToHclTerraform(struct!.smtpPasswordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_auth_configuration: {
      value: cdktn.listMapperHcl(tfIngressPointTlsAuthConfigurationPropertyToHclTerraform, true)(struct!.tlsAuthConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TlsAuthConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIngressPointPrivateNetworkConfigurationPropertyToTerraform(struct?: TfIngressPoint.PrivateNetworkConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_endpoint_id: cdktn.stringToTerraform(struct!.vpcEndpointId),
  }
}


export function tfIngressPointPrivateNetworkConfigurationPropertyToHclTerraform(struct?: TfIngressPoint.PrivateNetworkConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_endpoint_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIngressPointPublicNetworkConfigurationPropertyToTerraform(struct?: TfIngressPoint.PublicNetworkConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_type: cdktn.stringToTerraform(struct!.ipType),
  }
}


export function tfIngressPointPublicNetworkConfigurationPropertyToHclTerraform(struct?: TfIngressPoint.PublicNetworkConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_type: {
      value: cdktn.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIngressPointNetworkConfigurationPropertyToTerraform(struct?: TfIngressPoint.NetworkConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_network_configuration: cdktn.listMapper(tfIngressPointPrivateNetworkConfigurationPropertyToTerraform, true)(struct!.privateNetworkConfiguration),
    public_network_configuration: cdktn.listMapper(tfIngressPointPublicNetworkConfigurationPropertyToTerraform, true)(struct!.publicNetworkConfiguration),
  }
}


export function tfIngressPointNetworkConfigurationPropertyToHclTerraform(struct?: TfIngressPoint.NetworkConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_network_configuration: {
      value: cdktn.listMapperHcl(tfIngressPointPrivateNetworkConfigurationPropertyToHclTerraform, true)(struct!.privateNetworkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PrivateNetworkConfigurationPropertyList",
    },
    public_network_configuration: {
      value: cdktn.listMapperHcl(tfIngressPointPublicNetworkConfigurationPropertyToHclTerraform, true)(struct!.publicNetworkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PublicNetworkConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIngressPointTimeoutsPropertyToTerraform(struct?: TfIngressPoint.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfIngressPointTimeoutsPropertyToHclTerraform(struct?: TfIngressPoint.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfIngressPoint {
export interface TrustStoreProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#ca_content TfIngressPoint#ca_content}
  */
  readonly caContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#crl_content TfIngressPoint#crl_content}
  */
  readonly crlContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#kms_key_arn TfIngressPoint#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}
export class TrustStorePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrustStoreProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.caContent = this._caContent;
    }
    if (this._crlContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlContent = this._crlContent;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustStoreProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caContent = undefined;
      this._crlContent = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caContent = value.caContent;
      this._crlContent = value.crlContent;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // ca_content - computed: false, optional: false, required: true
  private _caContent?: string; 
  public get caContent() {
    return this.getStringAttribute('ca_content');
  }
  public set caContent(value: string) {
    this._caContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caContentInput() {
    return this._caContent;
  }

  // crl_content - computed: false, optional: true, required: false
  private _crlContent?: string; 
  public get crlContent() {
    return this.getStringAttribute('crl_content');
  }
  public set crlContent(value: string) {
    this._crlContent = value;
  }
  public resetCrlContent() {
    this._crlContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlContentInput() {
    return this._crlContent;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}

export class TrustStorePropertyList extends cdktn.ComplexList {
  public internalValue? : TrustStoreProperty[] | cdktn.IResolvable

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
  public get(index: number): TrustStorePropertyOutputReference {
    return new TrustStorePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TlsAuthConfigurationProperty {
  /**
  * trust_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#trust_store TfIngressPoint#trust_store}
  */
  readonly trustStore?: TrustStoreProperty[] | cdktn.IResolvable;
}
export class TlsAuthConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TlsAuthConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStore = this._trustStore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsAuthConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trustStore.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trustStore.internalValue = value.trustStore;
    }
  }

  // trust_store - computed: false, optional: true, required: false
  private _trustStore = new TrustStorePropertyList(this, "trust_store", false);
  public get trustStore() {
    return this._trustStore;
  }
  public putTrustStore(value: TrustStoreProperty[] | cdktn.IResolvable) {
    this._trustStore.internalValue = value;
  }
  public resetTrustStore() {
    this._trustStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreInput() {
    return this._trustStore.internalValue;
  }
}

export class TlsAuthConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : TlsAuthConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): TlsAuthConfigurationPropertyOutputReference {
    return new TlsAuthConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IngressPointConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#secret_arn TfIngressPoint#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#smtp_password_wo TfIngressPoint#smtp_password_wo}
  */
  readonly smtpPasswordWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#smtp_password_wo_version TfIngressPoint#smtp_password_wo_version}
  */
  readonly smtpPasswordWoVersion?: number;
  /**
  * tls_auth_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#tls_auth_configuration TfIngressPoint#tls_auth_configuration}
  */
  readonly tlsAuthConfiguration?: TlsAuthConfigurationProperty[] | cdktn.IResolvable;
}
export class IngressPointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IngressPointConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._smtpPasswordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpPasswordWo = this._smtpPasswordWo;
    }
    if (this._smtpPasswordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpPasswordWoVersion = this._smtpPasswordWoVersion;
    }
    if (this._tlsAuthConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsAuthConfiguration = this._tlsAuthConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IngressPointConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretArn = undefined;
      this._smtpPasswordWo = undefined;
      this._smtpPasswordWoVersion = undefined;
      this._tlsAuthConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretArn = value.secretArn;
      this._smtpPasswordWo = value.smtpPasswordWo;
      this._smtpPasswordWoVersion = value.smtpPasswordWoVersion;
      this._tlsAuthConfiguration.internalValue = value.tlsAuthConfiguration;
    }
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // smtp_password_wo - computed: false, optional: true, required: false
  private _smtpPasswordWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get smtpPasswordWo() {
    return this.getStringAttribute('smtp_password_wo');
  }
  public set smtpPasswordWo(value: string) {
    this._smtpPasswordWo = value;
  }
  public resetSmtpPasswordWo() {
    this._smtpPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPasswordWoInput() {
    return this._smtpPasswordWo;
  }

  // smtp_password_wo_version - computed: false, optional: true, required: false
  private _smtpPasswordWoVersion?: number; 
  public get smtpPasswordWoVersion() {
    return this.getNumberAttribute('smtp_password_wo_version');
  }
  public set smtpPasswordWoVersion(value: number) {
    this._smtpPasswordWoVersion = value;
  }
  public resetSmtpPasswordWoVersion() {
    this._smtpPasswordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPasswordWoVersionInput() {
    return this._smtpPasswordWoVersion;
  }

  // tls_auth_configuration - computed: false, optional: true, required: false
  private _tlsAuthConfiguration = new TlsAuthConfigurationPropertyList(this, "tls_auth_configuration", false);
  public get tlsAuthConfiguration() {
    return this._tlsAuthConfiguration;
  }
  public putTlsAuthConfiguration(value: TlsAuthConfigurationProperty[] | cdktn.IResolvable) {
    this._tlsAuthConfiguration.internalValue = value;
  }
  public resetTlsAuthConfiguration() {
    this._tlsAuthConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsAuthConfigurationInput() {
    return this._tlsAuthConfiguration.internalValue;
  }
}

export class IngressPointConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : IngressPointConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): IngressPointConfigurationPropertyOutputReference {
    return new IngressPointConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateNetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#vpc_endpoint_id TfIngressPoint#vpc_endpoint_id}
  */
  readonly vpcEndpointId: string;
}
export class PrivateNetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrivateNetworkConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointId = this._vpcEndpointId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateNetworkConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcEndpointId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcEndpointId = value.vpcEndpointId;
    }
  }

  // vpc_endpoint_id - computed: false, optional: false, required: true
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }
}

export class PrivateNetworkConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : PrivateNetworkConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): PrivateNetworkConfigurationPropertyOutputReference {
    return new PrivateNetworkConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PublicNetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#ip_type TfIngressPoint#ip_type}
  */
  readonly ipType: string;
}
export class PublicNetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PublicNetworkConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PublicNetworkConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipType = value.ipType;
    }
  }

  // ip_type - computed: false, optional: false, required: true
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }
}

export class PublicNetworkConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : PublicNetworkConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): PublicNetworkConfigurationPropertyOutputReference {
    return new PublicNetworkConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConfigurationProperty {
  /**
  * private_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#private_network_configuration TfIngressPoint#private_network_configuration}
  */
  readonly privateNetworkConfiguration?: PrivateNetworkConfigurationProperty[] | cdktn.IResolvable;
  /**
  * public_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#public_network_configuration TfIngressPoint#public_network_configuration}
  */
  readonly publicNetworkConfiguration?: PublicNetworkConfigurationProperty[] | cdktn.IResolvable;
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateNetworkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkConfiguration = this._privateNetworkConfiguration?.internalValue;
    }
    if (this._publicNetworkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkConfiguration = this._publicNetworkConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateNetworkConfiguration.internalValue = undefined;
      this._publicNetworkConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateNetworkConfiguration.internalValue = value.privateNetworkConfiguration;
      this._publicNetworkConfiguration.internalValue = value.publicNetworkConfiguration;
    }
  }

  // private_network_configuration - computed: false, optional: true, required: false
  private _privateNetworkConfiguration = new PrivateNetworkConfigurationPropertyList(this, "private_network_configuration", false);
  public get privateNetworkConfiguration() {
    return this._privateNetworkConfiguration;
  }
  public putPrivateNetworkConfiguration(value: PrivateNetworkConfigurationProperty[] | cdktn.IResolvable) {
    this._privateNetworkConfiguration.internalValue = value;
  }
  public resetPrivateNetworkConfiguration() {
    this._privateNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkConfigurationInput() {
    return this._privateNetworkConfiguration.internalValue;
  }

  // public_network_configuration - computed: false, optional: true, required: false
  private _publicNetworkConfiguration = new PublicNetworkConfigurationPropertyList(this, "public_network_configuration", false);
  public get publicNetworkConfiguration() {
    return this._publicNetworkConfiguration;
  }
  public putPublicNetworkConfiguration(value: PublicNetworkConfigurationProperty[] | cdktn.IResolvable) {
    this._publicNetworkConfiguration.internalValue = value;
  }
  public resetPublicNetworkConfiguration() {
    this._publicNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkConfigurationInput() {
    return this._publicNetworkConfiguration.internalValue;
  }
}

export class NetworkConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : NetworkConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): NetworkConfigurationPropertyOutputReference {
    return new NetworkConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#create TfIngressPoint#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#delete TfIngressPoint#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_ingress_point#update TfIngressPoint#update}
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
