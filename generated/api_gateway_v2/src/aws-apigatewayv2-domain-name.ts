// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsDomainNameConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#domain_name AwsDomainName#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#id AwsDomainName#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#region AwsDomainName#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#routing_mode AwsDomainName#routing_mode}
  */
  readonly routingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#tags AwsDomainName#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#tags_all AwsDomainName#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * domain_name_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#domain_name_configuration AwsDomainName#domain_name_configuration}
  */
  readonly domainNameConfiguration: AwsDomainName.DomainNameConfigurationProperty;
  /**
  * mutual_tls_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#mutual_tls_authentication AwsDomainName#mutual_tls_authentication}
  */
  readonly mutualTlsAuthentication?: AwsDomainName.MutualTlsAuthenticationProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#timeouts AwsDomainName#timeouts}
  */
  readonly timeouts?: AwsDomainName.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name aws_apigatewayv2_domain_name}
*/
export class AwsDomainName extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apigatewayv2_domain_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsDomainName resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsDomainName to import
  * @param importFromId The id of the existing AwsDomainName that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsDomainName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_apigatewayv2_domain_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name aws_apigatewayv2_domain_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsDomainNameConfig
  */
  public constructor(scope: Construct, id: string, config: AwsDomainNameConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_domain_name',
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
    this._domainName = config.domainName;
    this._id = config.id;
    this._region = config.region;
    this._routingMode = config.routingMode;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._domainNameConfiguration.internalValue = config.domainNameConfiguration;
    this._mutualTlsAuthentication.internalValue = config.mutualTlsAuthentication;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_mapping_selection_expression - computed: true, optional: false, required: false
  public get apiMappingSelectionExpression() {
    return this.getStringAttribute('api_mapping_selection_expression');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // routing_mode - computed: true, optional: true, required: false
  private _routingMode?: string; 
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }
  public set routingMode(value: string) {
    this._routingMode = value;
  }
  public resetRoutingMode() {
    this._routingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingModeInput() {
    return this._routingMode;
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

  // domain_name_configuration - computed: false, optional: false, required: true
  private _domainNameConfiguration = new AwsDomainName.DomainNameConfigurationPropertyOutputReference(this, "domain_name_configuration");
  public get domainNameConfiguration() {
    return this._domainNameConfiguration;
  }
  public putDomainNameConfiguration(value: AwsDomainName.DomainNameConfigurationProperty) {
    this._domainNameConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameConfigurationInput() {
    return this._domainNameConfiguration.internalValue;
  }

  // mutual_tls_authentication - computed: false, optional: true, required: false
  private _mutualTlsAuthentication = new AwsDomainName.MutualTlsAuthenticationPropertyOutputReference(this, "mutual_tls_authentication");
  public get mutualTlsAuthentication() {
    return this._mutualTlsAuthentication;
  }
  public putMutualTlsAuthentication(value: AwsDomainName.MutualTlsAuthenticationProperty) {
    this._mutualTlsAuthentication.internalValue = value;
  }
  public resetMutualTlsAuthentication() {
    this._mutualTlsAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualTlsAuthenticationInput() {
    return this._mutualTlsAuthentication.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsDomainName.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsDomainName.TimeoutsProperty) {
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
      domain_name: cdktn.stringToTerraform(this._domainName),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      routing_mode: cdktn.stringToTerraform(this._routingMode),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      domain_name_configuration: awsDomainNameDomainNameConfigurationPropertyToTerraform(this._domainNameConfiguration.internalValue),
      mutual_tls_authentication: awsDomainNameMutualTlsAuthenticationPropertyToTerraform(this._mutualTlsAuthentication.internalValue),
      timeouts: awsDomainNameTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_mode: {
        value: cdktn.stringToHclTerraform(this._routingMode),
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
      domain_name_configuration: {
        value: awsDomainNameDomainNameConfigurationPropertyToHclTerraform(this._domainNameConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomainName.DomainNameConfigurationPropertyList",
      },
      mutual_tls_authentication: {
        value: awsDomainNameMutualTlsAuthenticationPropertyToHclTerraform(this._mutualTlsAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomainName.MutualTlsAuthenticationPropertyList",
      },
      timeouts: {
        value: awsDomainNameTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsDomainName.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsDomainNameDomainNameConfigurationPropertyToTerraform(struct?: AwsDomainName.DomainNameConfigurationPropertyOutputReference | AwsDomainName.DomainNameConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    endpoint_type: cdktn.stringToTerraform(struct!.endpointType),
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    ownership_verification_certificate_arn: cdktn.stringToTerraform(struct!.ownershipVerificationCertificateArn),
    security_policy: cdktn.stringToTerraform(struct!.securityPolicy),
  }
}


export function awsDomainNameDomainNameConfigurationPropertyToHclTerraform(struct?: AwsDomainName.DomainNameConfigurationPropertyOutputReference | AwsDomainName.DomainNameConfigurationProperty): any {
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
    endpoint_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ownership_verification_certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.ownershipVerificationCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export function awsDomainNameMutualTlsAuthenticationPropertyToTerraform(struct?: AwsDomainName.MutualTlsAuthenticationPropertyOutputReference | AwsDomainName.MutualTlsAuthenticationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    truststore_uri: cdktn.stringToTerraform(struct!.truststoreUri),
    truststore_version: cdktn.stringToTerraform(struct!.truststoreVersion),
  }
}


export function awsDomainNameMutualTlsAuthenticationPropertyToHclTerraform(struct?: AwsDomainName.MutualTlsAuthenticationPropertyOutputReference | AwsDomainName.MutualTlsAuthenticationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    truststore_uri: {
      value: cdktn.stringToHclTerraform(struct!.truststoreUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truststore_version: {
      value: cdktn.stringToHclTerraform(struct!.truststoreVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainNameTimeoutsPropertyToTerraform(struct?: AwsDomainName.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsDomainNameTimeoutsPropertyToHclTerraform(struct?: AwsDomainName.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsDomainName {
export interface DomainNameConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#certificate_arn AwsDomainName#certificate_arn}
  */
  readonly certificateArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#endpoint_type AwsDomainName#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#ip_address_type AwsDomainName#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#ownership_verification_certificate_arn AwsDomainName#ownership_verification_certificate_arn}
  */
  readonly ownershipVerificationCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#security_policy AwsDomainName#security_policy}
  */
  readonly securityPolicy: string;
}
export class DomainNameConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainNameConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._endpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointType = this._endpointType;
    }
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._ownershipVerificationCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownershipVerificationCertificateArn = this._ownershipVerificationCertificateArn;
    }
    if (this._securityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPolicy = this._securityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainNameConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateArn = undefined;
      this._endpointType = undefined;
      this._ipAddressType = undefined;
      this._ownershipVerificationCertificateArn = undefined;
      this._securityPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateArn = value.certificateArn;
      this._endpointType = value.endpointType;
      this._ipAddressType = value.ipAddressType;
      this._ownershipVerificationCertificateArn = value.ownershipVerificationCertificateArn;
      this._securityPolicy = value.securityPolicy;
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

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // ownership_verification_certificate_arn - computed: true, optional: true, required: false
  private _ownershipVerificationCertificateArn?: string; 
  public get ownershipVerificationCertificateArn() {
    return this.getStringAttribute('ownership_verification_certificate_arn');
  }
  public set ownershipVerificationCertificateArn(value: string) {
    this._ownershipVerificationCertificateArn = value;
  }
  public resetOwnershipVerificationCertificateArn() {
    this._ownershipVerificationCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipVerificationCertificateArnInput() {
    return this._ownershipVerificationCertificateArn;
  }

  // security_policy - computed: false, optional: false, required: true
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // target_domain_name - computed: true, optional: false, required: false
  public get targetDomainName() {
    return this.getStringAttribute('target_domain_name');
  }
}
export interface MutualTlsAuthenticationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#truststore_uri AwsDomainName#truststore_uri}
  */
  readonly truststoreUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#truststore_version AwsDomainName#truststore_version}
  */
  readonly truststoreVersion?: string;
}
export class MutualTlsAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutualTlsAuthenticationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._truststoreUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststoreUri = this._truststoreUri;
    }
    if (this._truststoreVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststoreVersion = this._truststoreVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutualTlsAuthenticationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._truststoreUri = undefined;
      this._truststoreVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._truststoreUri = value.truststoreUri;
      this._truststoreVersion = value.truststoreVersion;
    }
  }

  // truststore_uri - computed: false, optional: false, required: true
  private _truststoreUri?: string; 
  public get truststoreUri() {
    return this.getStringAttribute('truststore_uri');
  }
  public set truststoreUri(value: string) {
    this._truststoreUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreUriInput() {
    return this._truststoreUri;
  }

  // truststore_version - computed: false, optional: true, required: false
  private _truststoreVersion?: string; 
  public get truststoreVersion() {
    return this.getStringAttribute('truststore_version');
  }
  public set truststoreVersion(value: string) {
    this._truststoreVersion = value;
  }
  public resetTruststoreVersion() {
    this._truststoreVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreVersionInput() {
    return this._truststoreVersion;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#create AwsDomainName#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_domain_name#update AwsDomainName#update}
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
