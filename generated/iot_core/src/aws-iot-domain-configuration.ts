// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfDomainConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#application_protocol TfDomainConfiguration#application_protocol}
  */
  readonly applicationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#authentication_type TfDomainConfiguration#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#domain_name TfDomainConfiguration#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#id TfDomainConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#name TfDomainConfiguration#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#region TfDomainConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#server_certificate_arns TfDomainConfiguration#server_certificate_arns}
  */
  readonly serverCertificateArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#service_type TfDomainConfiguration#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#status TfDomainConfiguration#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#tags TfDomainConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#tags_all TfDomainConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#validation_certificate_arn TfDomainConfiguration#validation_certificate_arn}
  */
  readonly validationCertificateArn?: string;
  /**
  * authorizer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#authorizer_config TfDomainConfiguration#authorizer_config}
  */
  readonly authorizerConfig?: TfDomainConfiguration.AuthorizerConfigProperty;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#tls_config TfDomainConfiguration#tls_config}
  */
  readonly tlsConfig?: TfDomainConfiguration.TlsConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration aws_iot_domain_configuration}
*/
export class TfDomainConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_domain_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfDomainConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfDomainConfiguration to import
  * @param importFromId The id of the existing TfDomainConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfDomainConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_domain_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration aws_iot_domain_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfDomainConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: TfDomainConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_domain_configuration',
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
    this._applicationProtocol = config.applicationProtocol;
    this._authenticationType = config.authenticationType;
    this._domainName = config.domainName;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._serverCertificateArns = config.serverCertificateArns;
    this._serviceType = config.serviceType;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._validationCertificateArn = config.validationCertificateArn;
    this._authorizerConfig.internalValue = config.authorizerConfig;
    this._tlsConfig.internalValue = config.tlsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_protocol - computed: true, optional: true, required: false
  private _applicationProtocol?: string; 
  public get applicationProtocol() {
    return this.getStringAttribute('application_protocol');
  }
  public set applicationProtocol(value: string) {
    this._applicationProtocol = value;
  }
  public resetApplicationProtocol() {
    this._applicationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProtocolInput() {
    return this._applicationProtocol;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
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

  // server_certificate_arns - computed: false, optional: true, required: false
  private _serverCertificateArns?: string[]; 
  public get serverCertificateArns() {
    return cdktn.Fn.tolist(this.getListAttribute('server_certificate_arns'));
  }
  public set serverCertificateArns(value: string[]) {
    this._serverCertificateArns = value;
  }
  public resetServerCertificateArns() {
    this._serverCertificateArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateArnsInput() {
    return this._serverCertificateArns;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // validation_certificate_arn - computed: false, optional: true, required: false
  private _validationCertificateArn?: string; 
  public get validationCertificateArn() {
    return this.getStringAttribute('validation_certificate_arn');
  }
  public set validationCertificateArn(value: string) {
    this._validationCertificateArn = value;
  }
  public resetValidationCertificateArn() {
    this._validationCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCertificateArnInput() {
    return this._validationCertificateArn;
  }

  // authorizer_config - computed: false, optional: true, required: false
  private _authorizerConfig = new TfDomainConfiguration.AuthorizerConfigPropertyOutputReference(this, "authorizer_config");
  public get authorizerConfig() {
    return this._authorizerConfig;
  }
  public putAuthorizerConfig(value: TfDomainConfiguration.AuthorizerConfigProperty) {
    this._authorizerConfig.internalValue = value;
  }
  public resetAuthorizerConfig() {
    this._authorizerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigInput() {
    return this._authorizerConfig.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new TfDomainConfiguration.TlsConfigPropertyOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: TfDomainConfiguration.TlsConfigProperty) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_protocol: cdktn.stringToTerraform(this._applicationProtocol),
      authentication_type: cdktn.stringToTerraform(this._authenticationType),
      domain_name: cdktn.stringToTerraform(this._domainName),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      server_certificate_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._serverCertificateArns),
      service_type: cdktn.stringToTerraform(this._serviceType),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      validation_certificate_arn: cdktn.stringToTerraform(this._validationCertificateArn),
      authorizer_config: tfDomainConfigurationAuthorizerConfigPropertyToTerraform(this._authorizerConfig.internalValue),
      tls_config: tfDomainConfigurationTlsConfigPropertyToTerraform(this._tlsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_protocol: {
        value: cdktn.stringToHclTerraform(this._applicationProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type: {
        value: cdktn.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
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
      server_certificate_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._serverCertificateArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_type: {
        value: cdktn.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
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
      validation_certificate_arn: {
        value: cdktn.stringToHclTerraform(this._validationCertificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_config: {
        value: tfDomainConfigurationAuthorizerConfigPropertyToHclTerraform(this._authorizerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDomainConfiguration.AuthorizerConfigPropertyList",
      },
      tls_config: {
        value: tfDomainConfigurationTlsConfigPropertyToHclTerraform(this._tlsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDomainConfiguration.TlsConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfDomainConfigurationAuthorizerConfigPropertyToTerraform(struct?: TfDomainConfiguration.AuthorizerConfigPropertyOutputReference | TfDomainConfiguration.AuthorizerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_authorizer_override: cdktn.booleanToTerraform(struct!.allowAuthorizerOverride),
    default_authorizer_name: cdktn.stringToTerraform(struct!.defaultAuthorizerName),
  }
}


export function tfDomainConfigurationAuthorizerConfigPropertyToHclTerraform(struct?: TfDomainConfiguration.AuthorizerConfigPropertyOutputReference | TfDomainConfiguration.AuthorizerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_authorizer_override: {
      value: cdktn.booleanToHclTerraform(struct!.allowAuthorizerOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_authorizer_name: {
      value: cdktn.stringToHclTerraform(struct!.defaultAuthorizerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDomainConfigurationTlsConfigPropertyToTerraform(struct?: TfDomainConfiguration.TlsConfigPropertyOutputReference | TfDomainConfiguration.TlsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_policy: cdktn.stringToTerraform(struct!.securityPolicy),
  }
}


export function tfDomainConfigurationTlsConfigPropertyToHclTerraform(struct?: TfDomainConfiguration.TlsConfigPropertyOutputReference | TfDomainConfiguration.TlsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_policy: {
      value: cdktn.stringToHclTerraform(struct!.securityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfDomainConfiguration {
export interface AuthorizerConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#allow_authorizer_override TfDomainConfiguration#allow_authorizer_override}
  */
  readonly allowAuthorizerOverride?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#default_authorizer_name TfDomainConfiguration#default_authorizer_name}
  */
  readonly defaultAuthorizerName?: string;
}
export class AuthorizerConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthorizerConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAuthorizerOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAuthorizerOverride = this._allowAuthorizerOverride;
    }
    if (this._defaultAuthorizerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAuthorizerName = this._defaultAuthorizerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizerConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAuthorizerOverride = undefined;
      this._defaultAuthorizerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAuthorizerOverride = value.allowAuthorizerOverride;
      this._defaultAuthorizerName = value.defaultAuthorizerName;
    }
  }

  // allow_authorizer_override - computed: false, optional: true, required: false
  private _allowAuthorizerOverride?: boolean | cdktn.IResolvable; 
  public get allowAuthorizerOverride() {
    return this.getBooleanAttribute('allow_authorizer_override');
  }
  public set allowAuthorizerOverride(value: boolean | cdktn.IResolvable) {
    this._allowAuthorizerOverride = value;
  }
  public resetAllowAuthorizerOverride() {
    this._allowAuthorizerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthorizerOverrideInput() {
    return this._allowAuthorizerOverride;
  }

  // default_authorizer_name - computed: false, optional: true, required: false
  private _defaultAuthorizerName?: string; 
  public get defaultAuthorizerName() {
    return this.getStringAttribute('default_authorizer_name');
  }
  public set defaultAuthorizerName(value: string) {
    this._defaultAuthorizerName = value;
  }
  public resetDefaultAuthorizerName() {
    this._defaultAuthorizerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthorizerNameInput() {
    return this._defaultAuthorizerName;
  }
}
export interface TlsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_domain_configuration#security_policy TfDomainConfiguration#security_policy}
  */
  readonly securityPolicy?: string;
}
export class TlsConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TlsConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPolicy = this._securityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityPolicy = value.securityPolicy;
    }
  }

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }
}
}
