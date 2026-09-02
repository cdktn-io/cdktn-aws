// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfAlbListenerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#alpn_policy TfAlbListener#alpn_policy}
  */
  readonly alpnPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#certificate_arn TfAlbListener#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#id TfAlbListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#load_balancer_arn TfAlbListener#load_balancer_arn}
  */
  readonly loadBalancerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#port TfAlbListener#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#protocol TfAlbListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#region TfAlbListener#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_header_name TfAlbListener#routing_http_request_x_amzn_mtls_clientcert_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name TfAlbListener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertIssuerHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name TfAlbListener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertLeafHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name TfAlbListener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name TfAlbListener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertSubjectHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name TfAlbListener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertValidityHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_request_x_amzn_tls_cipher_suite_header_name TfAlbListener#routing_http_request_x_amzn_tls_cipher_suite_header_name}
  */
  readonly routingHttpRequestXAmznTlsCipherSuiteHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_request_x_amzn_tls_version_header_name TfAlbListener#routing_http_request_x_amzn_tls_version_header_name}
  */
  readonly routingHttpRequestXAmznTlsVersionHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_access_control_allow_credentials_header_value TfAlbListener#routing_http_response_access_control_allow_credentials_header_value}
  */
  readonly routingHttpResponseAccessControlAllowCredentialsHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_access_control_allow_headers_header_value TfAlbListener#routing_http_response_access_control_allow_headers_header_value}
  */
  readonly routingHttpResponseAccessControlAllowHeadersHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_access_control_allow_methods_header_value TfAlbListener#routing_http_response_access_control_allow_methods_header_value}
  */
  readonly routingHttpResponseAccessControlAllowMethodsHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_access_control_allow_origin_header_value TfAlbListener#routing_http_response_access_control_allow_origin_header_value}
  */
  readonly routingHttpResponseAccessControlAllowOriginHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_access_control_expose_headers_header_value TfAlbListener#routing_http_response_access_control_expose_headers_header_value}
  */
  readonly routingHttpResponseAccessControlExposeHeadersHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_access_control_max_age_header_value TfAlbListener#routing_http_response_access_control_max_age_header_value}
  */
  readonly routingHttpResponseAccessControlMaxAgeHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_content_security_policy_header_value TfAlbListener#routing_http_response_content_security_policy_header_value}
  */
  readonly routingHttpResponseContentSecurityPolicyHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_server_enabled TfAlbListener#routing_http_response_server_enabled}
  */
  readonly routingHttpResponseServerEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_strict_transport_security_header_value TfAlbListener#routing_http_response_strict_transport_security_header_value}
  */
  readonly routingHttpResponseStrictTransportSecurityHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_x_content_type_options_header_value TfAlbListener#routing_http_response_x_content_type_options_header_value}
  */
  readonly routingHttpResponseXContentTypeOptionsHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#routing_http_response_x_frame_options_header_value TfAlbListener#routing_http_response_x_frame_options_header_value}
  */
  readonly routingHttpResponseXFrameOptionsHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#ssl_policy TfAlbListener#ssl_policy}
  */
  readonly sslPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#tags TfAlbListener#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#tags_all TfAlbListener#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#tcp_idle_timeout_seconds TfAlbListener#tcp_idle_timeout_seconds}
  */
  readonly tcpIdleTimeoutSeconds?: number;
  /**
  * default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#default_action TfAlbListener#default_action}
  */
  readonly defaultAction: TfAlbListener.DefaultActionProperty[] | cdktn.IResolvable;
  /**
  * mutual_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#mutual_authentication TfAlbListener#mutual_authentication}
  */
  readonly mutualAuthentication?: TfAlbListener.MutualAuthenticationProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#timeouts TfAlbListener#timeouts}
  */
  readonly timeouts?: TfAlbListener.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener aws_alb_listener}
*/
export class TfAlbListener extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_alb_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfAlbListener resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfAlbListener to import
  * @param importFromId The id of the existing TfAlbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfAlbListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_alb_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener aws_alb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfAlbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: TfAlbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_alb_listener',
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
    this._alpnPolicy = config.alpnPolicy;
    this._certificateArn = config.certificateArn;
    this._id = config.id;
    this._loadBalancerArn = config.loadBalancerArn;
    this._port = config.port;
    this._protocol = config.protocol;
    this._region = config.region;
    this._routingHttpRequestXAmznMtlsClientcertHeaderName = config.routingHttpRequestXAmznMtlsClientcertHeaderName;
    this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName = config.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName;
    this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName = config.routingHttpRequestXAmznMtlsClientcertLeafHeaderName;
    this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName = config.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName;
    this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName = config.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName;
    this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName = config.routingHttpRequestXAmznMtlsClientcertValidityHeaderName;
    this._routingHttpRequestXAmznTlsCipherSuiteHeaderName = config.routingHttpRequestXAmznTlsCipherSuiteHeaderName;
    this._routingHttpRequestXAmznTlsVersionHeaderName = config.routingHttpRequestXAmznTlsVersionHeaderName;
    this._routingHttpResponseAccessControlAllowCredentialsHeaderValue = config.routingHttpResponseAccessControlAllowCredentialsHeaderValue;
    this._routingHttpResponseAccessControlAllowHeadersHeaderValue = config.routingHttpResponseAccessControlAllowHeadersHeaderValue;
    this._routingHttpResponseAccessControlAllowMethodsHeaderValue = config.routingHttpResponseAccessControlAllowMethodsHeaderValue;
    this._routingHttpResponseAccessControlAllowOriginHeaderValue = config.routingHttpResponseAccessControlAllowOriginHeaderValue;
    this._routingHttpResponseAccessControlExposeHeadersHeaderValue = config.routingHttpResponseAccessControlExposeHeadersHeaderValue;
    this._routingHttpResponseAccessControlMaxAgeHeaderValue = config.routingHttpResponseAccessControlMaxAgeHeaderValue;
    this._routingHttpResponseContentSecurityPolicyHeaderValue = config.routingHttpResponseContentSecurityPolicyHeaderValue;
    this._routingHttpResponseServerEnabled = config.routingHttpResponseServerEnabled;
    this._routingHttpResponseStrictTransportSecurityHeaderValue = config.routingHttpResponseStrictTransportSecurityHeaderValue;
    this._routingHttpResponseXContentTypeOptionsHeaderValue = config.routingHttpResponseXContentTypeOptionsHeaderValue;
    this._routingHttpResponseXFrameOptionsHeaderValue = config.routingHttpResponseXFrameOptionsHeaderValue;
    this._sslPolicy = config.sslPolicy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._tcpIdleTimeoutSeconds = config.tcpIdleTimeoutSeconds;
    this._defaultAction.internalValue = config.defaultAction;
    this._mutualAuthentication.internalValue = config.mutualAuthentication;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alpn_policy - computed: false, optional: true, required: false
  private _alpnPolicy?: string; 
  public get alpnPolicy() {
    return this.getStringAttribute('alpn_policy');
  }
  public set alpnPolicy(value: string) {
    this._alpnPolicy = value;
  }
  public resetAlpnPolicy() {
    this._alpnPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnPolicyInput() {
    return this._alpnPolicy;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
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

  // load_balancer_arn - computed: false, optional: false, required: true
  private _loadBalancerArn?: string; 
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }
  public set loadBalancerArn(value: string) {
    this._loadBalancerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerArnInput() {
    return this._loadBalancerArn;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // routing_http_request_x_amzn_mtls_clientcert_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertHeaderName;
  }

  // routing_http_request_x_amzn_mtls_clientcert_issuer_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertIssuerHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertIssuerHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_issuer_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertIssuerHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName;
  }

  // routing_http_request_x_amzn_mtls_clientcert_leaf_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertLeafHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertLeafHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_leaf_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertLeafHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName;
  }

  // routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName;
  }

  // routing_http_request_x_amzn_mtls_clientcert_subject_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertSubjectHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertSubjectHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_subject_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertSubjectHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName;
  }

  // routing_http_request_x_amzn_mtls_clientcert_validity_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertValidityHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertValidityHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_validity_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertValidityHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName;
  }

  // routing_http_request_x_amzn_tls_cipher_suite_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznTlsCipherSuiteHeaderName?: string; 
  public get routingHttpRequestXAmznTlsCipherSuiteHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_tls_cipher_suite_header_name');
  }
  public set routingHttpRequestXAmznTlsCipherSuiteHeaderName(value: string) {
    this._routingHttpRequestXAmznTlsCipherSuiteHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName() {
    this._routingHttpRequestXAmznTlsCipherSuiteHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznTlsCipherSuiteHeaderNameInput() {
    return this._routingHttpRequestXAmznTlsCipherSuiteHeaderName;
  }

  // routing_http_request_x_amzn_tls_version_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznTlsVersionHeaderName?: string; 
  public get routingHttpRequestXAmznTlsVersionHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_tls_version_header_name');
  }
  public set routingHttpRequestXAmznTlsVersionHeaderName(value: string) {
    this._routingHttpRequestXAmznTlsVersionHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznTlsVersionHeaderName() {
    this._routingHttpRequestXAmznTlsVersionHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznTlsVersionHeaderNameInput() {
    return this._routingHttpRequestXAmznTlsVersionHeaderName;
  }

  // routing_http_response_access_control_allow_credentials_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlAllowCredentialsHeaderValue?: string; 
  public get routingHttpResponseAccessControlAllowCredentialsHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_allow_credentials_header_value');
  }
  public set routingHttpResponseAccessControlAllowCredentialsHeaderValue(value: string) {
    this._routingHttpResponseAccessControlAllowCredentialsHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue() {
    this._routingHttpResponseAccessControlAllowCredentialsHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlAllowCredentialsHeaderValueInput() {
    return this._routingHttpResponseAccessControlAllowCredentialsHeaderValue;
  }

  // routing_http_response_access_control_allow_headers_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlAllowHeadersHeaderValue?: string; 
  public get routingHttpResponseAccessControlAllowHeadersHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_allow_headers_header_value');
  }
  public set routingHttpResponseAccessControlAllowHeadersHeaderValue(value: string) {
    this._routingHttpResponseAccessControlAllowHeadersHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlAllowHeadersHeaderValue() {
    this._routingHttpResponseAccessControlAllowHeadersHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlAllowHeadersHeaderValueInput() {
    return this._routingHttpResponseAccessControlAllowHeadersHeaderValue;
  }

  // routing_http_response_access_control_allow_methods_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlAllowMethodsHeaderValue?: string; 
  public get routingHttpResponseAccessControlAllowMethodsHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_allow_methods_header_value');
  }
  public set routingHttpResponseAccessControlAllowMethodsHeaderValue(value: string) {
    this._routingHttpResponseAccessControlAllowMethodsHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlAllowMethodsHeaderValue() {
    this._routingHttpResponseAccessControlAllowMethodsHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlAllowMethodsHeaderValueInput() {
    return this._routingHttpResponseAccessControlAllowMethodsHeaderValue;
  }

  // routing_http_response_access_control_allow_origin_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlAllowOriginHeaderValue?: string; 
  public get routingHttpResponseAccessControlAllowOriginHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_allow_origin_header_value');
  }
  public set routingHttpResponseAccessControlAllowOriginHeaderValue(value: string) {
    this._routingHttpResponseAccessControlAllowOriginHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlAllowOriginHeaderValue() {
    this._routingHttpResponseAccessControlAllowOriginHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlAllowOriginHeaderValueInput() {
    return this._routingHttpResponseAccessControlAllowOriginHeaderValue;
  }

  // routing_http_response_access_control_expose_headers_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlExposeHeadersHeaderValue?: string; 
  public get routingHttpResponseAccessControlExposeHeadersHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_expose_headers_header_value');
  }
  public set routingHttpResponseAccessControlExposeHeadersHeaderValue(value: string) {
    this._routingHttpResponseAccessControlExposeHeadersHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlExposeHeadersHeaderValue() {
    this._routingHttpResponseAccessControlExposeHeadersHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlExposeHeadersHeaderValueInput() {
    return this._routingHttpResponseAccessControlExposeHeadersHeaderValue;
  }

  // routing_http_response_access_control_max_age_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlMaxAgeHeaderValue?: string; 
  public get routingHttpResponseAccessControlMaxAgeHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_max_age_header_value');
  }
  public set routingHttpResponseAccessControlMaxAgeHeaderValue(value: string) {
    this._routingHttpResponseAccessControlMaxAgeHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlMaxAgeHeaderValue() {
    this._routingHttpResponseAccessControlMaxAgeHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlMaxAgeHeaderValueInput() {
    return this._routingHttpResponseAccessControlMaxAgeHeaderValue;
  }

  // routing_http_response_content_security_policy_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseContentSecurityPolicyHeaderValue?: string; 
  public get routingHttpResponseContentSecurityPolicyHeaderValue() {
    return this.getStringAttribute('routing_http_response_content_security_policy_header_value');
  }
  public set routingHttpResponseContentSecurityPolicyHeaderValue(value: string) {
    this._routingHttpResponseContentSecurityPolicyHeaderValue = value;
  }
  public resetRoutingHttpResponseContentSecurityPolicyHeaderValue() {
    this._routingHttpResponseContentSecurityPolicyHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseContentSecurityPolicyHeaderValueInput() {
    return this._routingHttpResponseContentSecurityPolicyHeaderValue;
  }

  // routing_http_response_server_enabled - computed: true, optional: true, required: false
  private _routingHttpResponseServerEnabled?: boolean | cdktn.IResolvable; 
  public get routingHttpResponseServerEnabled() {
    return this.getBooleanAttribute('routing_http_response_server_enabled');
  }
  public set routingHttpResponseServerEnabled(value: boolean | cdktn.IResolvable) {
    this._routingHttpResponseServerEnabled = value;
  }
  public resetRoutingHttpResponseServerEnabled() {
    this._routingHttpResponseServerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseServerEnabledInput() {
    return this._routingHttpResponseServerEnabled;
  }

  // routing_http_response_strict_transport_security_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseStrictTransportSecurityHeaderValue?: string; 
  public get routingHttpResponseStrictTransportSecurityHeaderValue() {
    return this.getStringAttribute('routing_http_response_strict_transport_security_header_value');
  }
  public set routingHttpResponseStrictTransportSecurityHeaderValue(value: string) {
    this._routingHttpResponseStrictTransportSecurityHeaderValue = value;
  }
  public resetRoutingHttpResponseStrictTransportSecurityHeaderValue() {
    this._routingHttpResponseStrictTransportSecurityHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseStrictTransportSecurityHeaderValueInput() {
    return this._routingHttpResponseStrictTransportSecurityHeaderValue;
  }

  // routing_http_response_x_content_type_options_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseXContentTypeOptionsHeaderValue?: string; 
  public get routingHttpResponseXContentTypeOptionsHeaderValue() {
    return this.getStringAttribute('routing_http_response_x_content_type_options_header_value');
  }
  public set routingHttpResponseXContentTypeOptionsHeaderValue(value: string) {
    this._routingHttpResponseXContentTypeOptionsHeaderValue = value;
  }
  public resetRoutingHttpResponseXContentTypeOptionsHeaderValue() {
    this._routingHttpResponseXContentTypeOptionsHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseXContentTypeOptionsHeaderValueInput() {
    return this._routingHttpResponseXContentTypeOptionsHeaderValue;
  }

  // routing_http_response_x_frame_options_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseXFrameOptionsHeaderValue?: string; 
  public get routingHttpResponseXFrameOptionsHeaderValue() {
    return this.getStringAttribute('routing_http_response_x_frame_options_header_value');
  }
  public set routingHttpResponseXFrameOptionsHeaderValue(value: string) {
    this._routingHttpResponseXFrameOptionsHeaderValue = value;
  }
  public resetRoutingHttpResponseXFrameOptionsHeaderValue() {
    this._routingHttpResponseXFrameOptionsHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseXFrameOptionsHeaderValueInput() {
    return this._routingHttpResponseXFrameOptionsHeaderValue;
  }

  // ssl_policy - computed: true, optional: true, required: false
  private _sslPolicy?: string; 
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
  }
  public set sslPolicy(value: string) {
    this._sslPolicy = value;
  }
  public resetSslPolicy() {
    this._sslPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy;
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

  // tcp_idle_timeout_seconds - computed: true, optional: true, required: false
  private _tcpIdleTimeoutSeconds?: number; 
  public get tcpIdleTimeoutSeconds() {
    return this.getNumberAttribute('tcp_idle_timeout_seconds');
  }
  public set tcpIdleTimeoutSeconds(value: number) {
    this._tcpIdleTimeoutSeconds = value;
  }
  public resetTcpIdleTimeoutSeconds() {
    this._tcpIdleTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIdleTimeoutSecondsInput() {
    return this._tcpIdleTimeoutSeconds;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction = new TfAlbListener.DefaultActionPropertyList(this, "default_action", false);
  public get defaultAction() {
    return this._defaultAction;
  }
  public putDefaultAction(value: TfAlbListener.DefaultActionProperty[] | cdktn.IResolvable) {
    this._defaultAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction.internalValue;
  }

  // mutual_authentication - computed: false, optional: true, required: false
  private _mutualAuthentication = new TfAlbListener.MutualAuthenticationPropertyOutputReference(this, "mutual_authentication");
  public get mutualAuthentication() {
    return this._mutualAuthentication;
  }
  public putMutualAuthentication(value: TfAlbListener.MutualAuthenticationProperty) {
    this._mutualAuthentication.internalValue = value;
  }
  public resetMutualAuthentication() {
    this._mutualAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualAuthenticationInput() {
    return this._mutualAuthentication.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfAlbListener.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfAlbListener.TimeoutsProperty) {
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
      alpn_policy: cdktn.stringToTerraform(this._alpnPolicy),
      certificate_arn: cdktn.stringToTerraform(this._certificateArn),
      id: cdktn.stringToTerraform(this._id),
      load_balancer_arn: cdktn.stringToTerraform(this._loadBalancerArn),
      port: cdktn.numberToTerraform(this._port),
      protocol: cdktn.stringToTerraform(this._protocol),
      region: cdktn.stringToTerraform(this._region),
      routing_http_request_x_amzn_mtls_clientcert_header_name: cdktn.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertHeaderName),
      routing_http_request_x_amzn_mtls_clientcert_issuer_header_name: cdktn.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName),
      routing_http_request_x_amzn_mtls_clientcert_leaf_header_name: cdktn.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName),
      routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name: cdktn.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName),
      routing_http_request_x_amzn_mtls_clientcert_subject_header_name: cdktn.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName),
      routing_http_request_x_amzn_mtls_clientcert_validity_header_name: cdktn.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName),
      routing_http_request_x_amzn_tls_cipher_suite_header_name: cdktn.stringToTerraform(this._routingHttpRequestXAmznTlsCipherSuiteHeaderName),
      routing_http_request_x_amzn_tls_version_header_name: cdktn.stringToTerraform(this._routingHttpRequestXAmznTlsVersionHeaderName),
      routing_http_response_access_control_allow_credentials_header_value: cdktn.stringToTerraform(this._routingHttpResponseAccessControlAllowCredentialsHeaderValue),
      routing_http_response_access_control_allow_headers_header_value: cdktn.stringToTerraform(this._routingHttpResponseAccessControlAllowHeadersHeaderValue),
      routing_http_response_access_control_allow_methods_header_value: cdktn.stringToTerraform(this._routingHttpResponseAccessControlAllowMethodsHeaderValue),
      routing_http_response_access_control_allow_origin_header_value: cdktn.stringToTerraform(this._routingHttpResponseAccessControlAllowOriginHeaderValue),
      routing_http_response_access_control_expose_headers_header_value: cdktn.stringToTerraform(this._routingHttpResponseAccessControlExposeHeadersHeaderValue),
      routing_http_response_access_control_max_age_header_value: cdktn.stringToTerraform(this._routingHttpResponseAccessControlMaxAgeHeaderValue),
      routing_http_response_content_security_policy_header_value: cdktn.stringToTerraform(this._routingHttpResponseContentSecurityPolicyHeaderValue),
      routing_http_response_server_enabled: cdktn.booleanToTerraform(this._routingHttpResponseServerEnabled),
      routing_http_response_strict_transport_security_header_value: cdktn.stringToTerraform(this._routingHttpResponseStrictTransportSecurityHeaderValue),
      routing_http_response_x_content_type_options_header_value: cdktn.stringToTerraform(this._routingHttpResponseXContentTypeOptionsHeaderValue),
      routing_http_response_x_frame_options_header_value: cdktn.stringToTerraform(this._routingHttpResponseXFrameOptionsHeaderValue),
      ssl_policy: cdktn.stringToTerraform(this._sslPolicy),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      tcp_idle_timeout_seconds: cdktn.numberToTerraform(this._tcpIdleTimeoutSeconds),
      default_action: cdktn.listMapper(tfAlbListenerDefaultActionPropertyToTerraform, true)(this._defaultAction.internalValue),
      mutual_authentication: tfAlbListenerMutualAuthenticationPropertyToTerraform(this._mutualAuthentication.internalValue),
      timeouts: tfAlbListenerTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alpn_policy: {
        value: cdktn.stringToHclTerraform(this._alpnPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_arn: {
        value: cdktn.stringToHclTerraform(this._certificateArn),
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
      load_balancer_arn: {
        value: cdktn.stringToHclTerraform(this._loadBalancerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktn.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktn.stringToHclTerraform(this._protocol),
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
      routing_http_request_x_amzn_mtls_clientcert_header_name: {
        value: cdktn.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_issuer_header_name: {
        value: cdktn.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_leaf_header_name: {
        value: cdktn.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name: {
        value: cdktn.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_subject_header_name: {
        value: cdktn.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_validity_header_name: {
        value: cdktn.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_tls_cipher_suite_header_name: {
        value: cdktn.stringToHclTerraform(this._routingHttpRequestXAmznTlsCipherSuiteHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_tls_version_header_name: {
        value: cdktn.stringToHclTerraform(this._routingHttpRequestXAmznTlsVersionHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_allow_credentials_header_value: {
        value: cdktn.stringToHclTerraform(this._routingHttpResponseAccessControlAllowCredentialsHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_allow_headers_header_value: {
        value: cdktn.stringToHclTerraform(this._routingHttpResponseAccessControlAllowHeadersHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_allow_methods_header_value: {
        value: cdktn.stringToHclTerraform(this._routingHttpResponseAccessControlAllowMethodsHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_allow_origin_header_value: {
        value: cdktn.stringToHclTerraform(this._routingHttpResponseAccessControlAllowOriginHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_expose_headers_header_value: {
        value: cdktn.stringToHclTerraform(this._routingHttpResponseAccessControlExposeHeadersHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_max_age_header_value: {
        value: cdktn.stringToHclTerraform(this._routingHttpResponseAccessControlMaxAgeHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_content_security_policy_header_value: {
        value: cdktn.stringToHclTerraform(this._routingHttpResponseContentSecurityPolicyHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_server_enabled: {
        value: cdktn.booleanToHclTerraform(this._routingHttpResponseServerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_http_response_strict_transport_security_header_value: {
        value: cdktn.stringToHclTerraform(this._routingHttpResponseStrictTransportSecurityHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_x_content_type_options_header_value: {
        value: cdktn.stringToHclTerraform(this._routingHttpResponseXContentTypeOptionsHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_x_frame_options_header_value: {
        value: cdktn.stringToHclTerraform(this._routingHttpResponseXFrameOptionsHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_policy: {
        value: cdktn.stringToHclTerraform(this._sslPolicy),
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
      tcp_idle_timeout_seconds: {
        value: cdktn.numberToHclTerraform(this._tcpIdleTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_action: {
        value: cdktn.listMapperHcl(tfAlbListenerDefaultActionPropertyToHclTerraform, true)(this._defaultAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfAlbListener.DefaultActionPropertyList",
      },
      mutual_authentication: {
        value: tfAlbListenerMutualAuthenticationPropertyToHclTerraform(this._mutualAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfAlbListener.MutualAuthenticationPropertyList",
      },
      timeouts: {
        value: tfAlbListenerTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfAlbListener.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfAlbListenerAuthenticateCognitoPropertyToTerraform(struct?: TfAlbListener.AuthenticateCognitoPropertyOutputReference | TfAlbListener.AuthenticateCognitoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
    on_unauthenticated_request: cdktn.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktn.stringToTerraform(struct!.scope),
    session_cookie_name: cdktn.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktn.numberToTerraform(struct!.sessionTimeout),
    user_pool_arn: cdktn.stringToTerraform(struct!.userPoolArn),
    user_pool_client_id: cdktn.stringToTerraform(struct!.userPoolClientId),
    user_pool_domain: cdktn.stringToTerraform(struct!.userPoolDomain),
  }
}


export function tfAlbListenerAuthenticateCognitoPropertyToHclTerraform(struct?: TfAlbListener.AuthenticateCognitoPropertyOutputReference | TfAlbListener.AuthenticateCognitoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    on_unauthenticated_request: {
      value: cdktn.stringToHclTerraform(struct!.onUnauthenticatedRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_pool_arn: {
      value: cdktn.stringToHclTerraform(struct!.userPoolArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_client_id: {
      value: cdktn.stringToHclTerraform(struct!.userPoolClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_domain: {
      value: cdktn.stringToHclTerraform(struct!.userPoolDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAlbListenerAuthenticateOidcPropertyToTerraform(struct?: TfAlbListener.AuthenticateOidcPropertyOutputReference | TfAlbListener.AuthenticateOidcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
    authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    on_unauthenticated_request: cdktn.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktn.stringToTerraform(struct!.scope),
    session_cookie_name: cdktn.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktn.numberToTerraform(struct!.sessionTimeout),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    user_info_endpoint: cdktn.stringToTerraform(struct!.userInfoEndpoint),
  }
}


export function tfAlbListenerAuthenticateOidcPropertyToHclTerraform(struct?: TfAlbListener.AuthenticateOidcPropertyOutputReference | TfAlbListener.AuthenticateOidcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_unauthenticated_request: {
      value: cdktn.stringToHclTerraform(struct!.onUnauthenticatedRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.userInfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAlbListenerFixedResponsePropertyToTerraform(struct?: TfAlbListener.FixedResponsePropertyOutputReference | TfAlbListener.FixedResponseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_type: cdktn.stringToTerraform(struct!.contentType),
    message_body: cdktn.stringToTerraform(struct!.messageBody),
    status_code: cdktn.stringToTerraform(struct!.statusCode),
  }
}


export function tfAlbListenerFixedResponsePropertyToHclTerraform(struct?: TfAlbListener.FixedResponsePropertyOutputReference | TfAlbListener.FixedResponseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_body: {
      value: cdktn.stringToHclTerraform(struct!.messageBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktn.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAlbListenerStickinessPropertyToTerraform(struct?: TfAlbListener.StickinessPropertyOutputReference | TfAlbListener.StickinessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.numberToTerraform(struct!.duration),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function tfAlbListenerStickinessPropertyToHclTerraform(struct?: TfAlbListener.StickinessPropertyOutputReference | TfAlbListener.StickinessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAlbListenerTargetGroupPropertyToTerraform(struct?: TfAlbListener.TargetGroupProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function tfAlbListenerTargetGroupPropertyToHclTerraform(struct?: TfAlbListener.TargetGroupProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
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


export function tfAlbListenerForwardPropertyToTerraform(struct?: TfAlbListener.ForwardPropertyOutputReference | TfAlbListener.ForwardProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stickiness: tfAlbListenerStickinessPropertyToTerraform(struct!.stickiness),
    target_group: cdktn.listMapper(tfAlbListenerTargetGroupPropertyToTerraform, true)(struct!.targetGroup),
  }
}


export function tfAlbListenerForwardPropertyToHclTerraform(struct?: TfAlbListener.ForwardPropertyOutputReference | TfAlbListener.ForwardProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    stickiness: {
      value: tfAlbListenerStickinessPropertyToHclTerraform(struct!.stickiness),
      isBlock: true,
      type: "list",
      storageClassType: "StickinessPropertyList",
    },
    target_group: {
      value: cdktn.listMapperHcl(tfAlbListenerTargetGroupPropertyToHclTerraform, true)(struct!.targetGroup),
      isBlock: true,
      type: "set",
      storageClassType: "TargetGroupPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAlbListenerAdditionalClaimPropertyToTerraform(struct?: TfAlbListener.AdditionalClaimProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfAlbListenerAdditionalClaimPropertyToHclTerraform(struct?: TfAlbListener.AdditionalClaimProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAlbListenerJwtValidationPropertyToTerraform(struct?: TfAlbListener.JwtValidationPropertyOutputReference | TfAlbListener.JwtValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    issuer: cdktn.stringToTerraform(struct!.issuer),
    jwks_endpoint: cdktn.stringToTerraform(struct!.jwksEndpoint),
    additional_claim: cdktn.listMapper(tfAlbListenerAdditionalClaimPropertyToTerraform, true)(struct!.additionalClaim),
  }
}


export function tfAlbListenerJwtValidationPropertyToHclTerraform(struct?: TfAlbListener.JwtValidationPropertyOutputReference | TfAlbListener.JwtValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.jwksEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_claim: {
      value: cdktn.listMapperHcl(tfAlbListenerAdditionalClaimPropertyToHclTerraform, true)(struct!.additionalClaim),
      isBlock: true,
      type: "set",
      storageClassType: "AdditionalClaimPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAlbListenerRedirectPropertyToTerraform(struct?: TfAlbListener.RedirectPropertyOutputReference | TfAlbListener.RedirectProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    path: cdktn.stringToTerraform(struct!.path),
    port: cdktn.stringToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    query: cdktn.stringToTerraform(struct!.query),
    status_code: cdktn.stringToTerraform(struct!.statusCode),
  }
}


export function tfAlbListenerRedirectPropertyToHclTerraform(struct?: TfAlbListener.RedirectPropertyOutputReference | TfAlbListener.RedirectProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
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
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktn.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAlbListenerDefaultActionPropertyToTerraform(struct?: TfAlbListener.DefaultActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order: cdktn.numberToTerraform(struct!.order),
    target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
    type: cdktn.stringToTerraform(struct!.type),
    authenticate_cognito: tfAlbListenerAuthenticateCognitoPropertyToTerraform(struct!.authenticateCognito),
    authenticate_oidc: tfAlbListenerAuthenticateOidcPropertyToTerraform(struct!.authenticateOidc),
    fixed_response: tfAlbListenerFixedResponsePropertyToTerraform(struct!.fixedResponse),
    forward: tfAlbListenerForwardPropertyToTerraform(struct!.forward),
    jwt_validation: tfAlbListenerJwtValidationPropertyToTerraform(struct!.jwtValidation),
    redirect: tfAlbListenerRedirectPropertyToTerraform(struct!.redirect),
  }
}


export function tfAlbListenerDefaultActionPropertyToHclTerraform(struct?: TfAlbListener.DefaultActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    order: {
      value: cdktn.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
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
    authenticate_cognito: {
      value: tfAlbListenerAuthenticateCognitoPropertyToHclTerraform(struct!.authenticateCognito),
      isBlock: true,
      type: "list",
      storageClassType: "AuthenticateCognitoPropertyList",
    },
    authenticate_oidc: {
      value: tfAlbListenerAuthenticateOidcPropertyToHclTerraform(struct!.authenticateOidc),
      isBlock: true,
      type: "list",
      storageClassType: "AuthenticateOidcPropertyList",
    },
    fixed_response: {
      value: tfAlbListenerFixedResponsePropertyToHclTerraform(struct!.fixedResponse),
      isBlock: true,
      type: "list",
      storageClassType: "FixedResponsePropertyList",
    },
    forward: {
      value: tfAlbListenerForwardPropertyToHclTerraform(struct!.forward),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardPropertyList",
    },
    jwt_validation: {
      value: tfAlbListenerJwtValidationPropertyToHclTerraform(struct!.jwtValidation),
      isBlock: true,
      type: "list",
      storageClassType: "JwtValidationPropertyList",
    },
    redirect: {
      value: tfAlbListenerRedirectPropertyToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "RedirectPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAlbListenerMutualAuthenticationPropertyToTerraform(struct?: TfAlbListener.MutualAuthenticationPropertyOutputReference | TfAlbListener.MutualAuthenticationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    advertise_trust_store_ca_names: cdktn.stringToTerraform(struct!.advertiseTrustStoreCaNames),
    ignore_client_certificate_expiry: cdktn.booleanToTerraform(struct!.ignoreClientCertificateExpiry),
    mode: cdktn.stringToTerraform(struct!.mode),
    trust_store_arn: cdktn.stringToTerraform(struct!.trustStoreArn),
  }
}


export function tfAlbListenerMutualAuthenticationPropertyToHclTerraform(struct?: TfAlbListener.MutualAuthenticationPropertyOutputReference | TfAlbListener.MutualAuthenticationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    advertise_trust_store_ca_names: {
      value: cdktn.stringToHclTerraform(struct!.advertiseTrustStoreCaNames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_client_certificate_expiry: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreClientCertificateExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_arn: {
      value: cdktn.stringToHclTerraform(struct!.trustStoreArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfAlbListenerTimeoutsPropertyToTerraform(struct?: TfAlbListener.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function tfAlbListenerTimeoutsPropertyToHclTerraform(struct?: TfAlbListener.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfAlbListener {
export interface AuthenticateCognitoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#authentication_request_extra_params TfAlbListener#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#on_unauthenticated_request TfAlbListener#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#scope TfAlbListener#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#session_cookie_name TfAlbListener#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#session_timeout TfAlbListener#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#user_pool_arn TfAlbListener#user_pool_arn}
  */
  readonly userPoolArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#user_pool_client_id TfAlbListener#user_pool_client_id}
  */
  readonly userPoolClientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#user_pool_domain TfAlbListener#user_pool_domain}
  */
  readonly userPoolDomain: string;
}
export class AuthenticateCognitoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticateCognitoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._onUnauthenticatedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._userPoolArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolArn = this._userPoolArn;
    }
    if (this._userPoolClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolClientId = this._userPoolClientId;
    }
    if (this._userPoolDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolDomain = this._userPoolDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticateCognitoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationRequestExtraParams = undefined;
      this._onUnauthenticatedRequest = undefined;
      this._scope = undefined;
      this._sessionCookieName = undefined;
      this._sessionTimeout = undefined;
      this._userPoolArn = undefined;
      this._userPoolClientId = undefined;
      this._userPoolDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
      this._scope = value.scope;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionTimeout = value.sessionTimeout;
      this._userPoolArn = value.userPoolArn;
      this._userPoolClientId = value.userPoolClientId;
      this._userPoolDomain = value.userPoolDomain;
    }
  }

  // authentication_request_extra_params - computed: false, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // on_unauthenticated_request - computed: true, optional: true, required: false
  private _onUnauthenticatedRequest?: string; 
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }
  public set onUnauthenticatedRequest(value: string) {
    this._onUnauthenticatedRequest = value;
  }
  public resetOnUnauthenticatedRequest() {
    this._onUnauthenticatedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnauthenticatedRequestInput() {
    return this._onUnauthenticatedRequest;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_cookie_name - computed: true, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // user_pool_arn - computed: false, optional: false, required: true
  private _userPoolArn?: string; 
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
  public set userPoolArn(value: string) {
    this._userPoolArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolArnInput() {
    return this._userPoolArn;
  }

  // user_pool_client_id - computed: false, optional: false, required: true
  private _userPoolClientId?: string; 
  public get userPoolClientId() {
    return this.getStringAttribute('user_pool_client_id');
  }
  public set userPoolClientId(value: string) {
    this._userPoolClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolClientIdInput() {
    return this._userPoolClientId;
  }

  // user_pool_domain - computed: false, optional: false, required: true
  private _userPoolDomain?: string; 
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
  public set userPoolDomain(value: string) {
    this._userPoolDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolDomainInput() {
    return this._userPoolDomain;
  }
}
export interface AuthenticateOidcProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#authentication_request_extra_params TfAlbListener#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#authorization_endpoint TfAlbListener#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#client_id TfAlbListener#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#client_secret TfAlbListener#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#issuer TfAlbListener#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#on_unauthenticated_request TfAlbListener#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#scope TfAlbListener#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#session_cookie_name TfAlbListener#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#session_timeout TfAlbListener#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#token_endpoint TfAlbListener#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#user_info_endpoint TfAlbListener#user_info_endpoint}
  */
  readonly userInfoEndpoint: string;
}
export class AuthenticateOidcPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticateOidcProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._onUnauthenticatedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._userInfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticateOidcProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationRequestExtraParams = undefined;
      this._authorizationEndpoint = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._issuer = undefined;
      this._onUnauthenticatedRequest = undefined;
      this._scope = undefined;
      this._sessionCookieName = undefined;
      this._sessionTimeout = undefined;
      this._tokenEndpoint = undefined;
      this._userInfoEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._issuer = value.issuer;
      this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
      this._scope = value.scope;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionTimeout = value.sessionTimeout;
      this._tokenEndpoint = value.tokenEndpoint;
      this._userInfoEndpoint = value.userInfoEndpoint;
    }
  }

  // authentication_request_extra_params - computed: false, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // on_unauthenticated_request - computed: true, optional: true, required: false
  private _onUnauthenticatedRequest?: string; 
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }
  public set onUnauthenticatedRequest(value: string) {
    this._onUnauthenticatedRequest = value;
  }
  public resetOnUnauthenticatedRequest() {
    this._onUnauthenticatedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnauthenticatedRequestInput() {
    return this._onUnauthenticatedRequest;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_cookie_name - computed: true, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // user_info_endpoint - computed: false, optional: false, required: true
  private _userInfoEndpoint?: string; 
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
  public set userInfoEndpoint(value: string) {
    this._userInfoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoEndpointInput() {
    return this._userInfoEndpoint;
  }
}
export interface FixedResponseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#content_type TfAlbListener#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#message_body TfAlbListener#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#status_code TfAlbListener#status_code}
  */
  readonly statusCode?: string;
}
export class FixedResponsePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FixedResponseProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._messageBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FixedResponseProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
      this._messageBody = value.messageBody;
      this._statusCode = value.statusCode;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // message_body - computed: false, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface StickinessProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#duration TfAlbListener#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#enabled TfAlbListener#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StickinessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StickinessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StickinessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enabled = value.enabled;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface TargetGroupProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#arn TfAlbListener#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#weight TfAlbListener#weight}
  */
  readonly weight?: number;
}
export class TargetGroupPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetGroupProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetGroupProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._weight = value.weight;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class TargetGroupPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetGroupProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetGroupPropertyOutputReference {
    return new TargetGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProperty {
  /**
  * stickiness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#stickiness TfAlbListener#stickiness}
  */
  readonly stickiness?: StickinessProperty;
  /**
  * target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#target_group TfAlbListener#target_group}
  */
  readonly targetGroup: TargetGroupProperty[] | cdktn.IResolvable;
}
export class ForwardPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stickiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickiness = this._stickiness?.internalValue;
    }
    if (this._targetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stickiness.internalValue = undefined;
      this._targetGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stickiness.internalValue = value.stickiness;
      this._targetGroup.internalValue = value.targetGroup;
    }
  }

  // stickiness - computed: false, optional: true, required: false
  private _stickiness = new StickinessPropertyOutputReference(this, "stickiness");
  public get stickiness() {
    return this._stickiness;
  }
  public putStickiness(value: StickinessProperty) {
    this._stickiness.internalValue = value;
  }
  public resetStickiness() {
    this._stickiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness.internalValue;
  }

  // target_group - computed: false, optional: false, required: true
  private _targetGroup = new TargetGroupPropertyList(this, "target_group", true);
  public get targetGroup() {
    return this._targetGroup;
  }
  public putTargetGroup(value: TargetGroupProperty[] | cdktn.IResolvable) {
    this._targetGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup.internalValue;
  }
}
export interface AdditionalClaimProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#format TfAlbListener#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#name TfAlbListener#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#values TfAlbListener#values}
  */
  readonly values: string[];
}
export class AdditionalClaimPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AdditionalClaimProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdditionalClaimProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AdditionalClaimPropertyList extends cdktn.ComplexList {
  public internalValue? : AdditionalClaimProperty[] | cdktn.IResolvable

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
  public get(index: number): AdditionalClaimPropertyOutputReference {
    return new AdditionalClaimPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JwtValidationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#issuer TfAlbListener#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#jwks_endpoint TfAlbListener#jwks_endpoint}
  */
  readonly jwksEndpoint: string;
  /**
  * additional_claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#additional_claim TfAlbListener#additional_claim}
  */
  readonly additionalClaim?: AdditionalClaimProperty[] | cdktn.IResolvable;
}
export class JwtValidationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JwtValidationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksEndpoint = this._jwksEndpoint;
    }
    if (this._additionalClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalClaim = this._additionalClaim?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JwtValidationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuer = undefined;
      this._jwksEndpoint = undefined;
      this._additionalClaim.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuer = value.issuer;
      this._jwksEndpoint = value.jwksEndpoint;
      this._additionalClaim.internalValue = value.additionalClaim;
    }
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_endpoint - computed: false, optional: false, required: true
  private _jwksEndpoint?: string; 
  public get jwksEndpoint() {
    return this.getStringAttribute('jwks_endpoint');
  }
  public set jwksEndpoint(value: string) {
    this._jwksEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksEndpointInput() {
    return this._jwksEndpoint;
  }

  // additional_claim - computed: false, optional: true, required: false
  private _additionalClaim = new AdditionalClaimPropertyList(this, "additional_claim", true);
  public get additionalClaim() {
    return this._additionalClaim;
  }
  public putAdditionalClaim(value: AdditionalClaimProperty[] | cdktn.IResolvable) {
    this._additionalClaim.internalValue = value;
  }
  public resetAdditionalClaim() {
    this._additionalClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalClaimInput() {
    return this._additionalClaim.internalValue;
  }
}
export interface RedirectProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#host TfAlbListener#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#path TfAlbListener#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#port TfAlbListener#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#protocol TfAlbListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#query TfAlbListener#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#status_code TfAlbListener#status_code}
  */
  readonly statusCode: string;
}
export class RedirectPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedirectProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
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
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedirectProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._query = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._query = value.query;
      this._statusCode = value.statusCode;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface DefaultActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#order TfAlbListener#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#target_group_arn TfAlbListener#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#type TfAlbListener#type}
  */
  readonly type: string;
  /**
  * authenticate_cognito block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#authenticate_cognito TfAlbListener#authenticate_cognito}
  */
  readonly authenticateCognito?: AuthenticateCognitoProperty;
  /**
  * authenticate_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#authenticate_oidc TfAlbListener#authenticate_oidc}
  */
  readonly authenticateOidc?: AuthenticateOidcProperty;
  /**
  * fixed_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#fixed_response TfAlbListener#fixed_response}
  */
  readonly fixedResponse?: FixedResponseProperty;
  /**
  * forward block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#forward TfAlbListener#forward}
  */
  readonly forward?: ForwardProperty;
  /**
  * jwt_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#jwt_validation TfAlbListener#jwt_validation}
  */
  readonly jwtValidation?: JwtValidationProperty;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#redirect TfAlbListener#redirect}
  */
  readonly redirect?: RedirectProperty;
}
export class DefaultActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._authenticateCognito?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateCognito = this._authenticateCognito?.internalValue;
    }
    if (this._authenticateOidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateOidc = this._authenticateOidc?.internalValue;
    }
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._jwtValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtValidation = this._jwtValidation?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._targetGroupArn = undefined;
      this._type = undefined;
      this._authenticateCognito.internalValue = undefined;
      this._authenticateOidc.internalValue = undefined;
      this._fixedResponse.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._jwtValidation.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._targetGroupArn = value.targetGroupArn;
      this._type = value.type;
      this._authenticateCognito.internalValue = value.authenticateCognito;
      this._authenticateOidc.internalValue = value.authenticateOidc;
      this._fixedResponse.internalValue = value.fixedResponse;
      this._forward.internalValue = value.forward;
      this._jwtValidation.internalValue = value.jwtValidation;
      this._redirect.internalValue = value.redirect;
    }
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // target_group_arn - computed: false, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
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

  // authenticate_cognito - computed: false, optional: true, required: false
  private _authenticateCognito = new AuthenticateCognitoPropertyOutputReference(this, "authenticate_cognito");
  public get authenticateCognito() {
    return this._authenticateCognito;
  }
  public putAuthenticateCognito(value: AuthenticateCognitoProperty) {
    this._authenticateCognito.internalValue = value;
  }
  public resetAuthenticateCognito() {
    this._authenticateCognito.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateCognitoInput() {
    return this._authenticateCognito.internalValue;
  }

  // authenticate_oidc - computed: false, optional: true, required: false
  private _authenticateOidc = new AuthenticateOidcPropertyOutputReference(this, "authenticate_oidc");
  public get authenticateOidc() {
    return this._authenticateOidc;
  }
  public putAuthenticateOidc(value: AuthenticateOidcProperty) {
    this._authenticateOidc.internalValue = value;
  }
  public resetAuthenticateOidc() {
    this._authenticateOidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateOidcInput() {
    return this._authenticateOidc.internalValue;
  }

  // fixed_response - computed: false, optional: true, required: false
  private _fixedResponse = new FixedResponsePropertyOutputReference(this, "fixed_response");
  public get fixedResponse() {
    return this._fixedResponse;
  }
  public putFixedResponse(value: FixedResponseProperty) {
    this._fixedResponse.internalValue = value;
  }
  public resetFixedResponse() {
    this._fixedResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseInput() {
    return this._fixedResponse.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new ForwardPropertyOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: ForwardProperty) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // jwt_validation - computed: false, optional: true, required: false
  private _jwtValidation = new JwtValidationPropertyOutputReference(this, "jwt_validation");
  public get jwtValidation() {
    return this._jwtValidation;
  }
  public putJwtValidation(value: JwtValidationProperty) {
    this._jwtValidation.internalValue = value;
  }
  public resetJwtValidation() {
    this._jwtValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtValidationInput() {
    return this._jwtValidation.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new RedirectPropertyOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: RedirectProperty) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class DefaultActionPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultActionProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultActionPropertyOutputReference {
    return new DefaultActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MutualAuthenticationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#advertise_trust_store_ca_names TfAlbListener#advertise_trust_store_ca_names}
  */
  readonly advertiseTrustStoreCaNames?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#ignore_client_certificate_expiry TfAlbListener#ignore_client_certificate_expiry}
  */
  readonly ignoreClientCertificateExpiry?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#mode TfAlbListener#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#trust_store_arn TfAlbListener#trust_store_arn}
  */
  readonly trustStoreArn?: string;
}
export class MutualAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutualAuthenticationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseTrustStoreCaNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseTrustStoreCaNames = this._advertiseTrustStoreCaNames;
    }
    if (this._ignoreClientCertificateExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientCertificateExpiry = this._ignoreClientCertificateExpiry;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._trustStoreArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreArn = this._trustStoreArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutualAuthenticationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseTrustStoreCaNames = undefined;
      this._ignoreClientCertificateExpiry = undefined;
      this._mode = undefined;
      this._trustStoreArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseTrustStoreCaNames = value.advertiseTrustStoreCaNames;
      this._ignoreClientCertificateExpiry = value.ignoreClientCertificateExpiry;
      this._mode = value.mode;
      this._trustStoreArn = value.trustStoreArn;
    }
  }

  // advertise_trust_store_ca_names - computed: true, optional: true, required: false
  private _advertiseTrustStoreCaNames?: string; 
  public get advertiseTrustStoreCaNames() {
    return this.getStringAttribute('advertise_trust_store_ca_names');
  }
  public set advertiseTrustStoreCaNames(value: string) {
    this._advertiseTrustStoreCaNames = value;
  }
  public resetAdvertiseTrustStoreCaNames() {
    this._advertiseTrustStoreCaNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseTrustStoreCaNamesInput() {
    return this._advertiseTrustStoreCaNames;
  }

  // ignore_client_certificate_expiry - computed: false, optional: true, required: false
  private _ignoreClientCertificateExpiry?: boolean | cdktn.IResolvable; 
  public get ignoreClientCertificateExpiry() {
    return this.getBooleanAttribute('ignore_client_certificate_expiry');
  }
  public set ignoreClientCertificateExpiry(value: boolean | cdktn.IResolvable) {
    this._ignoreClientCertificateExpiry = value;
  }
  public resetIgnoreClientCertificateExpiry() {
    this._ignoreClientCertificateExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientCertificateExpiryInput() {
    return this._ignoreClientCertificateExpiry;
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

  // trust_store_arn - computed: false, optional: true, required: false
  private _trustStoreArn?: string; 
  public get trustStoreArn() {
    return this.getStringAttribute('trust_store_arn');
  }
  public set trustStoreArn(value: string) {
    this._trustStoreArn = value;
  }
  public resetTrustStoreArn() {
    this._trustStoreArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreArnInput() {
    return this._trustStoreArn;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#create TfAlbListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/alb_listener#update TfAlbListener#update}
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
