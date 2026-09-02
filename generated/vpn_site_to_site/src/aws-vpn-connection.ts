// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#customer_gateway_id TfConnection#customer_gateway_id}
  */
  readonly customerGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#enable_acceleration TfConnection#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#id TfConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#local_ipv4_network_cidr TfConnection#local_ipv4_network_cidr}
  */
  readonly localIpv4NetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#local_ipv6_network_cidr TfConnection#local_ipv6_network_cidr}
  */
  readonly localIpv6NetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#outside_ip_address_type TfConnection#outside_ip_address_type}
  */
  readonly outsideIpAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#preshared_key_storage TfConnection#preshared_key_storage}
  */
  readonly presharedKeyStorage?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#region TfConnection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#remote_ipv4_network_cidr TfConnection#remote_ipv4_network_cidr}
  */
  readonly remoteIpv4NetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#remote_ipv6_network_cidr TfConnection#remote_ipv6_network_cidr}
  */
  readonly remoteIpv6NetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#static_routes_only TfConnection#static_routes_only}
  */
  readonly staticRoutesOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tags TfConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tags_all TfConnection#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#transit_gateway_id TfConnection#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#transport_transit_gateway_attachment_id TfConnection#transport_transit_gateway_attachment_id}
  */
  readonly transportTransitGatewayAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_dpd_timeout_action TfConnection#tunnel1_dpd_timeout_action}
  */
  readonly tunnel1DpdTimeoutAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_dpd_timeout_seconds TfConnection#tunnel1_dpd_timeout_seconds}
  */
  readonly tunnel1DpdTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_enable_tunnel_lifecycle_control TfConnection#tunnel1_enable_tunnel_lifecycle_control}
  */
  readonly tunnel1EnableTunnelLifecycleControl?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_ike_versions TfConnection#tunnel1_ike_versions}
  */
  readonly tunnel1IkeVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_inside_cidr TfConnection#tunnel1_inside_cidr}
  */
  readonly tunnel1InsideCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_inside_ipv6_cidr TfConnection#tunnel1_inside_ipv6_cidr}
  */
  readonly tunnel1InsideIpv6Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_phase1_dh_group_numbers TfConnection#tunnel1_phase1_dh_group_numbers}
  */
  readonly tunnel1Phase1DhGroupNumbers?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_phase1_encryption_algorithms TfConnection#tunnel1_phase1_encryption_algorithms}
  */
  readonly tunnel1Phase1EncryptionAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_phase1_integrity_algorithms TfConnection#tunnel1_phase1_integrity_algorithms}
  */
  readonly tunnel1Phase1IntegrityAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_phase1_lifetime_seconds TfConnection#tunnel1_phase1_lifetime_seconds}
  */
  readonly tunnel1Phase1LifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_phase2_dh_group_numbers TfConnection#tunnel1_phase2_dh_group_numbers}
  */
  readonly tunnel1Phase2DhGroupNumbers?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_phase2_encryption_algorithms TfConnection#tunnel1_phase2_encryption_algorithms}
  */
  readonly tunnel1Phase2EncryptionAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_phase2_integrity_algorithms TfConnection#tunnel1_phase2_integrity_algorithms}
  */
  readonly tunnel1Phase2IntegrityAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_phase2_lifetime_seconds TfConnection#tunnel1_phase2_lifetime_seconds}
  */
  readonly tunnel1Phase2LifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_preshared_key TfConnection#tunnel1_preshared_key}
  */
  readonly tunnel1PresharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_rekey_fuzz_percentage TfConnection#tunnel1_rekey_fuzz_percentage}
  */
  readonly tunnel1RekeyFuzzPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_rekey_margin_time_seconds TfConnection#tunnel1_rekey_margin_time_seconds}
  */
  readonly tunnel1RekeyMarginTimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_replay_window_size TfConnection#tunnel1_replay_window_size}
  */
  readonly tunnel1ReplayWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_startup_action TfConnection#tunnel1_startup_action}
  */
  readonly tunnel1StartupAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_dpd_timeout_action TfConnection#tunnel2_dpd_timeout_action}
  */
  readonly tunnel2DpdTimeoutAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_dpd_timeout_seconds TfConnection#tunnel2_dpd_timeout_seconds}
  */
  readonly tunnel2DpdTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_enable_tunnel_lifecycle_control TfConnection#tunnel2_enable_tunnel_lifecycle_control}
  */
  readonly tunnel2EnableTunnelLifecycleControl?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_ike_versions TfConnection#tunnel2_ike_versions}
  */
  readonly tunnel2IkeVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_inside_cidr TfConnection#tunnel2_inside_cidr}
  */
  readonly tunnel2InsideCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_inside_ipv6_cidr TfConnection#tunnel2_inside_ipv6_cidr}
  */
  readonly tunnel2InsideIpv6Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_phase1_dh_group_numbers TfConnection#tunnel2_phase1_dh_group_numbers}
  */
  readonly tunnel2Phase1DhGroupNumbers?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_phase1_encryption_algorithms TfConnection#tunnel2_phase1_encryption_algorithms}
  */
  readonly tunnel2Phase1EncryptionAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_phase1_integrity_algorithms TfConnection#tunnel2_phase1_integrity_algorithms}
  */
  readonly tunnel2Phase1IntegrityAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_phase1_lifetime_seconds TfConnection#tunnel2_phase1_lifetime_seconds}
  */
  readonly tunnel2Phase1LifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_phase2_dh_group_numbers TfConnection#tunnel2_phase2_dh_group_numbers}
  */
  readonly tunnel2Phase2DhGroupNumbers?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_phase2_encryption_algorithms TfConnection#tunnel2_phase2_encryption_algorithms}
  */
  readonly tunnel2Phase2EncryptionAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_phase2_integrity_algorithms TfConnection#tunnel2_phase2_integrity_algorithms}
  */
  readonly tunnel2Phase2IntegrityAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_phase2_lifetime_seconds TfConnection#tunnel2_phase2_lifetime_seconds}
  */
  readonly tunnel2Phase2LifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_preshared_key TfConnection#tunnel2_preshared_key}
  */
  readonly tunnel2PresharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_rekey_fuzz_percentage TfConnection#tunnel2_rekey_fuzz_percentage}
  */
  readonly tunnel2RekeyFuzzPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_rekey_margin_time_seconds TfConnection#tunnel2_rekey_margin_time_seconds}
  */
  readonly tunnel2RekeyMarginTimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_replay_window_size TfConnection#tunnel2_replay_window_size}
  */
  readonly tunnel2ReplayWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_startup_action TfConnection#tunnel2_startup_action}
  */
  readonly tunnel2StartupAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel_bandwidth TfConnection#tunnel_bandwidth}
  */
  readonly tunnelBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel_inside_ip_version TfConnection#tunnel_inside_ip_version}
  */
  readonly tunnelInsideIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#type TfConnection#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#vpn_concentrator_id TfConnection#vpn_concentrator_id}
  */
  readonly vpnConcentratorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#vpn_gateway_id TfConnection#vpn_gateway_id}
  */
  readonly vpnGatewayId?: string;
  /**
  * tunnel1_log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel1_log_options TfConnection#tunnel1_log_options}
  */
  readonly tunnel1LogOptions?: TfConnection.Tunnel1LogOptionsProperty;
  /**
  * tunnel2_log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#tunnel2_log_options TfConnection#tunnel2_log_options}
  */
  readonly tunnel2LogOptions?: TfConnection.Tunnel2LogOptionsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection aws_vpn_connection}
*/
export class TfConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpn_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfConnection to import
  * @param importFromId The id of the existing TfConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpn_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection aws_vpn_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: TfConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpn_connection',
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
    this._customerGatewayId = config.customerGatewayId;
    this._enableAcceleration = config.enableAcceleration;
    this._id = config.id;
    this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
    this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
    this._outsideIpAddressType = config.outsideIpAddressType;
    this._presharedKeyStorage = config.presharedKeyStorage;
    this._region = config.region;
    this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
    this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
    this._staticRoutesOnly = config.staticRoutesOnly;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transitGatewayId = config.transitGatewayId;
    this._transportTransitGatewayAttachmentId = config.transportTransitGatewayAttachmentId;
    this._tunnel1DpdTimeoutAction = config.tunnel1DpdTimeoutAction;
    this._tunnel1DpdTimeoutSeconds = config.tunnel1DpdTimeoutSeconds;
    this._tunnel1EnableTunnelLifecycleControl = config.tunnel1EnableTunnelLifecycleControl;
    this._tunnel1IkeVersions = config.tunnel1IkeVersions;
    this._tunnel1InsideCidr = config.tunnel1InsideCidr;
    this._tunnel1InsideIpv6Cidr = config.tunnel1InsideIpv6Cidr;
    this._tunnel1Phase1DhGroupNumbers = config.tunnel1Phase1DhGroupNumbers;
    this._tunnel1Phase1EncryptionAlgorithms = config.tunnel1Phase1EncryptionAlgorithms;
    this._tunnel1Phase1IntegrityAlgorithms = config.tunnel1Phase1IntegrityAlgorithms;
    this._tunnel1Phase1LifetimeSeconds = config.tunnel1Phase1LifetimeSeconds;
    this._tunnel1Phase2DhGroupNumbers = config.tunnel1Phase2DhGroupNumbers;
    this._tunnel1Phase2EncryptionAlgorithms = config.tunnel1Phase2EncryptionAlgorithms;
    this._tunnel1Phase2IntegrityAlgorithms = config.tunnel1Phase2IntegrityAlgorithms;
    this._tunnel1Phase2LifetimeSeconds = config.tunnel1Phase2LifetimeSeconds;
    this._tunnel1PresharedKey = config.tunnel1PresharedKey;
    this._tunnel1RekeyFuzzPercentage = config.tunnel1RekeyFuzzPercentage;
    this._tunnel1RekeyMarginTimeSeconds = config.tunnel1RekeyMarginTimeSeconds;
    this._tunnel1ReplayWindowSize = config.tunnel1ReplayWindowSize;
    this._tunnel1StartupAction = config.tunnel1StartupAction;
    this._tunnel2DpdTimeoutAction = config.tunnel2DpdTimeoutAction;
    this._tunnel2DpdTimeoutSeconds = config.tunnel2DpdTimeoutSeconds;
    this._tunnel2EnableTunnelLifecycleControl = config.tunnel2EnableTunnelLifecycleControl;
    this._tunnel2IkeVersions = config.tunnel2IkeVersions;
    this._tunnel2InsideCidr = config.tunnel2InsideCidr;
    this._tunnel2InsideIpv6Cidr = config.tunnel2InsideIpv6Cidr;
    this._tunnel2Phase1DhGroupNumbers = config.tunnel2Phase1DhGroupNumbers;
    this._tunnel2Phase1EncryptionAlgorithms = config.tunnel2Phase1EncryptionAlgorithms;
    this._tunnel2Phase1IntegrityAlgorithms = config.tunnel2Phase1IntegrityAlgorithms;
    this._tunnel2Phase1LifetimeSeconds = config.tunnel2Phase1LifetimeSeconds;
    this._tunnel2Phase2DhGroupNumbers = config.tunnel2Phase2DhGroupNumbers;
    this._tunnel2Phase2EncryptionAlgorithms = config.tunnel2Phase2EncryptionAlgorithms;
    this._tunnel2Phase2IntegrityAlgorithms = config.tunnel2Phase2IntegrityAlgorithms;
    this._tunnel2Phase2LifetimeSeconds = config.tunnel2Phase2LifetimeSeconds;
    this._tunnel2PresharedKey = config.tunnel2PresharedKey;
    this._tunnel2RekeyFuzzPercentage = config.tunnel2RekeyFuzzPercentage;
    this._tunnel2RekeyMarginTimeSeconds = config.tunnel2RekeyMarginTimeSeconds;
    this._tunnel2ReplayWindowSize = config.tunnel2ReplayWindowSize;
    this._tunnel2StartupAction = config.tunnel2StartupAction;
    this._tunnelBandwidth = config.tunnelBandwidth;
    this._tunnelInsideIpVersion = config.tunnelInsideIpVersion;
    this._type = config.type;
    this._vpnConcentratorId = config.vpnConcentratorId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._tunnel1LogOptions.internalValue = config.tunnel1LogOptions;
    this._tunnel2LogOptions.internalValue = config.tunnel2LogOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // core_network_arn - computed: true, optional: false, required: false
  public get coreNetworkArn() {
    return this.getStringAttribute('core_network_arn');
  }

  // core_network_attachment_arn - computed: true, optional: false, required: false
  public get coreNetworkAttachmentArn() {
    return this.getStringAttribute('core_network_attachment_arn');
  }

  // customer_gateway_configuration - computed: true, optional: false, required: false
  public get customerGatewayConfiguration() {
    return this.getStringAttribute('customer_gateway_configuration');
  }

  // customer_gateway_id - computed: false, optional: false, required: true
  private _customerGatewayId?: string; 
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }
  public set customerGatewayId(value: string) {
    this._customerGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayIdInput() {
    return this._customerGatewayId;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktn.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktn.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
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

  // local_ipv4_network_cidr - computed: true, optional: true, required: false
  private _localIpv4NetworkCidr?: string; 
  public get localIpv4NetworkCidr() {
    return this.getStringAttribute('local_ipv4_network_cidr');
  }
  public set localIpv4NetworkCidr(value: string) {
    this._localIpv4NetworkCidr = value;
  }
  public resetLocalIpv4NetworkCidr() {
    this._localIpv4NetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv4NetworkCidrInput() {
    return this._localIpv4NetworkCidr;
  }

  // local_ipv6_network_cidr - computed: true, optional: true, required: false
  private _localIpv6NetworkCidr?: string; 
  public get localIpv6NetworkCidr() {
    return this.getStringAttribute('local_ipv6_network_cidr');
  }
  public set localIpv6NetworkCidr(value: string) {
    this._localIpv6NetworkCidr = value;
  }
  public resetLocalIpv6NetworkCidr() {
    this._localIpv6NetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv6NetworkCidrInput() {
    return this._localIpv6NetworkCidr;
  }

  // outside_ip_address_type - computed: true, optional: true, required: false
  private _outsideIpAddressType?: string; 
  public get outsideIpAddressType() {
    return this.getStringAttribute('outside_ip_address_type');
  }
  public set outsideIpAddressType(value: string) {
    this._outsideIpAddressType = value;
  }
  public resetOutsideIpAddressType() {
    this._outsideIpAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideIpAddressTypeInput() {
    return this._outsideIpAddressType;
  }

  // preshared_key_arn - computed: true, optional: false, required: false
  public get presharedKeyArn() {
    return this.getStringAttribute('preshared_key_arn');
  }

  // preshared_key_storage - computed: true, optional: true, required: false
  private _presharedKeyStorage?: string; 
  public get presharedKeyStorage() {
    return this.getStringAttribute('preshared_key_storage');
  }
  public set presharedKeyStorage(value: string) {
    this._presharedKeyStorage = value;
  }
  public resetPresharedKeyStorage() {
    this._presharedKeyStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyStorageInput() {
    return this._presharedKeyStorage;
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

  // remote_ipv4_network_cidr - computed: true, optional: true, required: false
  private _remoteIpv4NetworkCidr?: string; 
  public get remoteIpv4NetworkCidr() {
    return this.getStringAttribute('remote_ipv4_network_cidr');
  }
  public set remoteIpv4NetworkCidr(value: string) {
    this._remoteIpv4NetworkCidr = value;
  }
  public resetRemoteIpv4NetworkCidr() {
    this._remoteIpv4NetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv4NetworkCidrInput() {
    return this._remoteIpv4NetworkCidr;
  }

  // remote_ipv6_network_cidr - computed: true, optional: true, required: false
  private _remoteIpv6NetworkCidr?: string; 
  public get remoteIpv6NetworkCidr() {
    return this.getStringAttribute('remote_ipv6_network_cidr');
  }
  public set remoteIpv6NetworkCidr(value: string) {
    this._remoteIpv6NetworkCidr = value;
  }
  public resetRemoteIpv6NetworkCidr() {
    this._remoteIpv6NetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6NetworkCidrInput() {
    return this._remoteIpv6NetworkCidr;
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new TfConnection.RoutesPropertyList(this, "routes", true);
  public get routes() {
    return this._routes;
  }

  // static_routes_only - computed: true, optional: true, required: false
  private _staticRoutesOnly?: boolean | cdktn.IResolvable; 
  public get staticRoutesOnly() {
    return this.getBooleanAttribute('static_routes_only');
  }
  public set staticRoutesOnly(value: boolean | cdktn.IResolvable) {
    this._staticRoutesOnly = value;
  }
  public resetStaticRoutesOnly() {
    this._staticRoutesOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesOnlyInput() {
    return this._staticRoutesOnly;
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

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // transport_transit_gateway_attachment_id - computed: false, optional: true, required: false
  private _transportTransitGatewayAttachmentId?: string; 
  public get transportTransitGatewayAttachmentId() {
    return this.getStringAttribute('transport_transit_gateway_attachment_id');
  }
  public set transportTransitGatewayAttachmentId(value: string) {
    this._transportTransitGatewayAttachmentId = value;
  }
  public resetTransportTransitGatewayAttachmentId() {
    this._transportTransitGatewayAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTransitGatewayAttachmentIdInput() {
    return this._transportTransitGatewayAttachmentId;
  }

  // tunnel1_address - computed: true, optional: false, required: false
  public get tunnel1Address() {
    return this.getStringAttribute('tunnel1_address');
  }

  // tunnel1_bgp_asn - computed: true, optional: false, required: false
  public get tunnel1BgpAsn() {
    return this.getStringAttribute('tunnel1_bgp_asn');
  }

  // tunnel1_bgp_holdtime - computed: true, optional: false, required: false
  public get tunnel1BgpHoldtime() {
    return this.getNumberAttribute('tunnel1_bgp_holdtime');
  }

  // tunnel1_cgw_inside_address - computed: true, optional: false, required: false
  public get tunnel1CgwInsideAddress() {
    return this.getStringAttribute('tunnel1_cgw_inside_address');
  }

  // tunnel1_dpd_timeout_action - computed: false, optional: true, required: false
  private _tunnel1DpdTimeoutAction?: string; 
  public get tunnel1DpdTimeoutAction() {
    return this.getStringAttribute('tunnel1_dpd_timeout_action');
  }
  public set tunnel1DpdTimeoutAction(value: string) {
    this._tunnel1DpdTimeoutAction = value;
  }
  public resetTunnel1DpdTimeoutAction() {
    this._tunnel1DpdTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1DpdTimeoutActionInput() {
    return this._tunnel1DpdTimeoutAction;
  }

  // tunnel1_dpd_timeout_seconds - computed: false, optional: true, required: false
  private _tunnel1DpdTimeoutSeconds?: number; 
  public get tunnel1DpdTimeoutSeconds() {
    return this.getNumberAttribute('tunnel1_dpd_timeout_seconds');
  }
  public set tunnel1DpdTimeoutSeconds(value: number) {
    this._tunnel1DpdTimeoutSeconds = value;
  }
  public resetTunnel1DpdTimeoutSeconds() {
    this._tunnel1DpdTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1DpdTimeoutSecondsInput() {
    return this._tunnel1DpdTimeoutSeconds;
  }

  // tunnel1_enable_tunnel_lifecycle_control - computed: false, optional: true, required: false
  private _tunnel1EnableTunnelLifecycleControl?: boolean | cdktn.IResolvable; 
  public get tunnel1EnableTunnelLifecycleControl() {
    return this.getBooleanAttribute('tunnel1_enable_tunnel_lifecycle_control');
  }
  public set tunnel1EnableTunnelLifecycleControl(value: boolean | cdktn.IResolvable) {
    this._tunnel1EnableTunnelLifecycleControl = value;
  }
  public resetTunnel1EnableTunnelLifecycleControl() {
    this._tunnel1EnableTunnelLifecycleControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1EnableTunnelLifecycleControlInput() {
    return this._tunnel1EnableTunnelLifecycleControl;
  }

  // tunnel1_ike_versions - computed: false, optional: true, required: false
  private _tunnel1IkeVersions?: string[]; 
  public get tunnel1IkeVersions() {
    return cdktn.Fn.tolist(this.getListAttribute('tunnel1_ike_versions'));
  }
  public set tunnel1IkeVersions(value: string[]) {
    this._tunnel1IkeVersions = value;
  }
  public resetTunnel1IkeVersions() {
    this._tunnel1IkeVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1IkeVersionsInput() {
    return this._tunnel1IkeVersions;
  }

  // tunnel1_inside_cidr - computed: true, optional: true, required: false
  private _tunnel1InsideCidr?: string; 
  public get tunnel1InsideCidr() {
    return this.getStringAttribute('tunnel1_inside_cidr');
  }
  public set tunnel1InsideCidr(value: string) {
    this._tunnel1InsideCidr = value;
  }
  public resetTunnel1InsideCidr() {
    this._tunnel1InsideCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1InsideCidrInput() {
    return this._tunnel1InsideCidr;
  }

  // tunnel1_inside_ipv6_cidr - computed: true, optional: true, required: false
  private _tunnel1InsideIpv6Cidr?: string; 
  public get tunnel1InsideIpv6Cidr() {
    return this.getStringAttribute('tunnel1_inside_ipv6_cidr');
  }
  public set tunnel1InsideIpv6Cidr(value: string) {
    this._tunnel1InsideIpv6Cidr = value;
  }
  public resetTunnel1InsideIpv6Cidr() {
    this._tunnel1InsideIpv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1InsideIpv6CidrInput() {
    return this._tunnel1InsideIpv6Cidr;
  }

  // tunnel1_phase1_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel1Phase1DhGroupNumbers?: number[]; 
  public get tunnel1Phase1DhGroupNumbers() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('tunnel1_phase1_dh_group_numbers')));
  }
  public set tunnel1Phase1DhGroupNumbers(value: number[]) {
    this._tunnel1Phase1DhGroupNumbers = value;
  }
  public resetTunnel1Phase1DhGroupNumbers() {
    this._tunnel1Phase1DhGroupNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase1DhGroupNumbersInput() {
    return this._tunnel1Phase1DhGroupNumbers;
  }

  // tunnel1_phase1_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase1EncryptionAlgorithms?: string[]; 
  public get tunnel1Phase1EncryptionAlgorithms() {
    return cdktn.Fn.tolist(this.getListAttribute('tunnel1_phase1_encryption_algorithms'));
  }
  public set tunnel1Phase1EncryptionAlgorithms(value: string[]) {
    this._tunnel1Phase1EncryptionAlgorithms = value;
  }
  public resetTunnel1Phase1EncryptionAlgorithms() {
    this._tunnel1Phase1EncryptionAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase1EncryptionAlgorithmsInput() {
    return this._tunnel1Phase1EncryptionAlgorithms;
  }

  // tunnel1_phase1_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase1IntegrityAlgorithms?: string[]; 
  public get tunnel1Phase1IntegrityAlgorithms() {
    return cdktn.Fn.tolist(this.getListAttribute('tunnel1_phase1_integrity_algorithms'));
  }
  public set tunnel1Phase1IntegrityAlgorithms(value: string[]) {
    this._tunnel1Phase1IntegrityAlgorithms = value;
  }
  public resetTunnel1Phase1IntegrityAlgorithms() {
    this._tunnel1Phase1IntegrityAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase1IntegrityAlgorithmsInput() {
    return this._tunnel1Phase1IntegrityAlgorithms;
  }

  // tunnel1_phase1_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel1Phase1LifetimeSeconds?: number; 
  public get tunnel1Phase1LifetimeSeconds() {
    return this.getNumberAttribute('tunnel1_phase1_lifetime_seconds');
  }
  public set tunnel1Phase1LifetimeSeconds(value: number) {
    this._tunnel1Phase1LifetimeSeconds = value;
  }
  public resetTunnel1Phase1LifetimeSeconds() {
    this._tunnel1Phase1LifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase1LifetimeSecondsInput() {
    return this._tunnel1Phase1LifetimeSeconds;
  }

  // tunnel1_phase2_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel1Phase2DhGroupNumbers?: number[]; 
  public get tunnel1Phase2DhGroupNumbers() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('tunnel1_phase2_dh_group_numbers')));
  }
  public set tunnel1Phase2DhGroupNumbers(value: number[]) {
    this._tunnel1Phase2DhGroupNumbers = value;
  }
  public resetTunnel1Phase2DhGroupNumbers() {
    this._tunnel1Phase2DhGroupNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase2DhGroupNumbersInput() {
    return this._tunnel1Phase2DhGroupNumbers;
  }

  // tunnel1_phase2_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase2EncryptionAlgorithms?: string[]; 
  public get tunnel1Phase2EncryptionAlgorithms() {
    return cdktn.Fn.tolist(this.getListAttribute('tunnel1_phase2_encryption_algorithms'));
  }
  public set tunnel1Phase2EncryptionAlgorithms(value: string[]) {
    this._tunnel1Phase2EncryptionAlgorithms = value;
  }
  public resetTunnel1Phase2EncryptionAlgorithms() {
    this._tunnel1Phase2EncryptionAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase2EncryptionAlgorithmsInput() {
    return this._tunnel1Phase2EncryptionAlgorithms;
  }

  // tunnel1_phase2_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase2IntegrityAlgorithms?: string[]; 
  public get tunnel1Phase2IntegrityAlgorithms() {
    return cdktn.Fn.tolist(this.getListAttribute('tunnel1_phase2_integrity_algorithms'));
  }
  public set tunnel1Phase2IntegrityAlgorithms(value: string[]) {
    this._tunnel1Phase2IntegrityAlgorithms = value;
  }
  public resetTunnel1Phase2IntegrityAlgorithms() {
    this._tunnel1Phase2IntegrityAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase2IntegrityAlgorithmsInput() {
    return this._tunnel1Phase2IntegrityAlgorithms;
  }

  // tunnel1_phase2_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel1Phase2LifetimeSeconds?: number; 
  public get tunnel1Phase2LifetimeSeconds() {
    return this.getNumberAttribute('tunnel1_phase2_lifetime_seconds');
  }
  public set tunnel1Phase2LifetimeSeconds(value: number) {
    this._tunnel1Phase2LifetimeSeconds = value;
  }
  public resetTunnel1Phase2LifetimeSeconds() {
    this._tunnel1Phase2LifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase2LifetimeSecondsInput() {
    return this._tunnel1Phase2LifetimeSeconds;
  }

  // tunnel1_preshared_key - computed: true, optional: true, required: false
  private _tunnel1PresharedKey?: string; 
  public get tunnel1PresharedKey() {
    return this.getStringAttribute('tunnel1_preshared_key');
  }
  public set tunnel1PresharedKey(value: string) {
    this._tunnel1PresharedKey = value;
  }
  public resetTunnel1PresharedKey() {
    this._tunnel1PresharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1PresharedKeyInput() {
    return this._tunnel1PresharedKey;
  }

  // tunnel1_rekey_fuzz_percentage - computed: false, optional: true, required: false
  private _tunnel1RekeyFuzzPercentage?: number; 
  public get tunnel1RekeyFuzzPercentage() {
    return this.getNumberAttribute('tunnel1_rekey_fuzz_percentage');
  }
  public set tunnel1RekeyFuzzPercentage(value: number) {
    this._tunnel1RekeyFuzzPercentage = value;
  }
  public resetTunnel1RekeyFuzzPercentage() {
    this._tunnel1RekeyFuzzPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1RekeyFuzzPercentageInput() {
    return this._tunnel1RekeyFuzzPercentage;
  }

  // tunnel1_rekey_margin_time_seconds - computed: false, optional: true, required: false
  private _tunnel1RekeyMarginTimeSeconds?: number; 
  public get tunnel1RekeyMarginTimeSeconds() {
    return this.getNumberAttribute('tunnel1_rekey_margin_time_seconds');
  }
  public set tunnel1RekeyMarginTimeSeconds(value: number) {
    this._tunnel1RekeyMarginTimeSeconds = value;
  }
  public resetTunnel1RekeyMarginTimeSeconds() {
    this._tunnel1RekeyMarginTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1RekeyMarginTimeSecondsInput() {
    return this._tunnel1RekeyMarginTimeSeconds;
  }

  // tunnel1_replay_window_size - computed: false, optional: true, required: false
  private _tunnel1ReplayWindowSize?: number; 
  public get tunnel1ReplayWindowSize() {
    return this.getNumberAttribute('tunnel1_replay_window_size');
  }
  public set tunnel1ReplayWindowSize(value: number) {
    this._tunnel1ReplayWindowSize = value;
  }
  public resetTunnel1ReplayWindowSize() {
    this._tunnel1ReplayWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1ReplayWindowSizeInput() {
    return this._tunnel1ReplayWindowSize;
  }

  // tunnel1_startup_action - computed: false, optional: true, required: false
  private _tunnel1StartupAction?: string; 
  public get tunnel1StartupAction() {
    return this.getStringAttribute('tunnel1_startup_action');
  }
  public set tunnel1StartupAction(value: string) {
    this._tunnel1StartupAction = value;
  }
  public resetTunnel1StartupAction() {
    this._tunnel1StartupAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1StartupActionInput() {
    return this._tunnel1StartupAction;
  }

  // tunnel1_vgw_inside_address - computed: true, optional: false, required: false
  public get tunnel1VgwInsideAddress() {
    return this.getStringAttribute('tunnel1_vgw_inside_address');
  }

  // tunnel2_address - computed: true, optional: false, required: false
  public get tunnel2Address() {
    return this.getStringAttribute('tunnel2_address');
  }

  // tunnel2_bgp_asn - computed: true, optional: false, required: false
  public get tunnel2BgpAsn() {
    return this.getStringAttribute('tunnel2_bgp_asn');
  }

  // tunnel2_bgp_holdtime - computed: true, optional: false, required: false
  public get tunnel2BgpHoldtime() {
    return this.getNumberAttribute('tunnel2_bgp_holdtime');
  }

  // tunnel2_cgw_inside_address - computed: true, optional: false, required: false
  public get tunnel2CgwInsideAddress() {
    return this.getStringAttribute('tunnel2_cgw_inside_address');
  }

  // tunnel2_dpd_timeout_action - computed: false, optional: true, required: false
  private _tunnel2DpdTimeoutAction?: string; 
  public get tunnel2DpdTimeoutAction() {
    return this.getStringAttribute('tunnel2_dpd_timeout_action');
  }
  public set tunnel2DpdTimeoutAction(value: string) {
    this._tunnel2DpdTimeoutAction = value;
  }
  public resetTunnel2DpdTimeoutAction() {
    this._tunnel2DpdTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2DpdTimeoutActionInput() {
    return this._tunnel2DpdTimeoutAction;
  }

  // tunnel2_dpd_timeout_seconds - computed: false, optional: true, required: false
  private _tunnel2DpdTimeoutSeconds?: number; 
  public get tunnel2DpdTimeoutSeconds() {
    return this.getNumberAttribute('tunnel2_dpd_timeout_seconds');
  }
  public set tunnel2DpdTimeoutSeconds(value: number) {
    this._tunnel2DpdTimeoutSeconds = value;
  }
  public resetTunnel2DpdTimeoutSeconds() {
    this._tunnel2DpdTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2DpdTimeoutSecondsInput() {
    return this._tunnel2DpdTimeoutSeconds;
  }

  // tunnel2_enable_tunnel_lifecycle_control - computed: false, optional: true, required: false
  private _tunnel2EnableTunnelLifecycleControl?: boolean | cdktn.IResolvable; 
  public get tunnel2EnableTunnelLifecycleControl() {
    return this.getBooleanAttribute('tunnel2_enable_tunnel_lifecycle_control');
  }
  public set tunnel2EnableTunnelLifecycleControl(value: boolean | cdktn.IResolvable) {
    this._tunnel2EnableTunnelLifecycleControl = value;
  }
  public resetTunnel2EnableTunnelLifecycleControl() {
    this._tunnel2EnableTunnelLifecycleControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2EnableTunnelLifecycleControlInput() {
    return this._tunnel2EnableTunnelLifecycleControl;
  }

  // tunnel2_ike_versions - computed: false, optional: true, required: false
  private _tunnel2IkeVersions?: string[]; 
  public get tunnel2IkeVersions() {
    return cdktn.Fn.tolist(this.getListAttribute('tunnel2_ike_versions'));
  }
  public set tunnel2IkeVersions(value: string[]) {
    this._tunnel2IkeVersions = value;
  }
  public resetTunnel2IkeVersions() {
    this._tunnel2IkeVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2IkeVersionsInput() {
    return this._tunnel2IkeVersions;
  }

  // tunnel2_inside_cidr - computed: true, optional: true, required: false
  private _tunnel2InsideCidr?: string; 
  public get tunnel2InsideCidr() {
    return this.getStringAttribute('tunnel2_inside_cidr');
  }
  public set tunnel2InsideCidr(value: string) {
    this._tunnel2InsideCidr = value;
  }
  public resetTunnel2InsideCidr() {
    this._tunnel2InsideCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2InsideCidrInput() {
    return this._tunnel2InsideCidr;
  }

  // tunnel2_inside_ipv6_cidr - computed: true, optional: true, required: false
  private _tunnel2InsideIpv6Cidr?: string; 
  public get tunnel2InsideIpv6Cidr() {
    return this.getStringAttribute('tunnel2_inside_ipv6_cidr');
  }
  public set tunnel2InsideIpv6Cidr(value: string) {
    this._tunnel2InsideIpv6Cidr = value;
  }
  public resetTunnel2InsideIpv6Cidr() {
    this._tunnel2InsideIpv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2InsideIpv6CidrInput() {
    return this._tunnel2InsideIpv6Cidr;
  }

  // tunnel2_phase1_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel2Phase1DhGroupNumbers?: number[]; 
  public get tunnel2Phase1DhGroupNumbers() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('tunnel2_phase1_dh_group_numbers')));
  }
  public set tunnel2Phase1DhGroupNumbers(value: number[]) {
    this._tunnel2Phase1DhGroupNumbers = value;
  }
  public resetTunnel2Phase1DhGroupNumbers() {
    this._tunnel2Phase1DhGroupNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase1DhGroupNumbersInput() {
    return this._tunnel2Phase1DhGroupNumbers;
  }

  // tunnel2_phase1_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase1EncryptionAlgorithms?: string[]; 
  public get tunnel2Phase1EncryptionAlgorithms() {
    return cdktn.Fn.tolist(this.getListAttribute('tunnel2_phase1_encryption_algorithms'));
  }
  public set tunnel2Phase1EncryptionAlgorithms(value: string[]) {
    this._tunnel2Phase1EncryptionAlgorithms = value;
  }
  public resetTunnel2Phase1EncryptionAlgorithms() {
    this._tunnel2Phase1EncryptionAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase1EncryptionAlgorithmsInput() {
    return this._tunnel2Phase1EncryptionAlgorithms;
  }

  // tunnel2_phase1_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase1IntegrityAlgorithms?: string[]; 
  public get tunnel2Phase1IntegrityAlgorithms() {
    return cdktn.Fn.tolist(this.getListAttribute('tunnel2_phase1_integrity_algorithms'));
  }
  public set tunnel2Phase1IntegrityAlgorithms(value: string[]) {
    this._tunnel2Phase1IntegrityAlgorithms = value;
  }
  public resetTunnel2Phase1IntegrityAlgorithms() {
    this._tunnel2Phase1IntegrityAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase1IntegrityAlgorithmsInput() {
    return this._tunnel2Phase1IntegrityAlgorithms;
  }

  // tunnel2_phase1_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel2Phase1LifetimeSeconds?: number; 
  public get tunnel2Phase1LifetimeSeconds() {
    return this.getNumberAttribute('tunnel2_phase1_lifetime_seconds');
  }
  public set tunnel2Phase1LifetimeSeconds(value: number) {
    this._tunnel2Phase1LifetimeSeconds = value;
  }
  public resetTunnel2Phase1LifetimeSeconds() {
    this._tunnel2Phase1LifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase1LifetimeSecondsInput() {
    return this._tunnel2Phase1LifetimeSeconds;
  }

  // tunnel2_phase2_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel2Phase2DhGroupNumbers?: number[]; 
  public get tunnel2Phase2DhGroupNumbers() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('tunnel2_phase2_dh_group_numbers')));
  }
  public set tunnel2Phase2DhGroupNumbers(value: number[]) {
    this._tunnel2Phase2DhGroupNumbers = value;
  }
  public resetTunnel2Phase2DhGroupNumbers() {
    this._tunnel2Phase2DhGroupNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase2DhGroupNumbersInput() {
    return this._tunnel2Phase2DhGroupNumbers;
  }

  // tunnel2_phase2_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase2EncryptionAlgorithms?: string[]; 
  public get tunnel2Phase2EncryptionAlgorithms() {
    return cdktn.Fn.tolist(this.getListAttribute('tunnel2_phase2_encryption_algorithms'));
  }
  public set tunnel2Phase2EncryptionAlgorithms(value: string[]) {
    this._tunnel2Phase2EncryptionAlgorithms = value;
  }
  public resetTunnel2Phase2EncryptionAlgorithms() {
    this._tunnel2Phase2EncryptionAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase2EncryptionAlgorithmsInput() {
    return this._tunnel2Phase2EncryptionAlgorithms;
  }

  // tunnel2_phase2_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase2IntegrityAlgorithms?: string[]; 
  public get tunnel2Phase2IntegrityAlgorithms() {
    return cdktn.Fn.tolist(this.getListAttribute('tunnel2_phase2_integrity_algorithms'));
  }
  public set tunnel2Phase2IntegrityAlgorithms(value: string[]) {
    this._tunnel2Phase2IntegrityAlgorithms = value;
  }
  public resetTunnel2Phase2IntegrityAlgorithms() {
    this._tunnel2Phase2IntegrityAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase2IntegrityAlgorithmsInput() {
    return this._tunnel2Phase2IntegrityAlgorithms;
  }

  // tunnel2_phase2_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel2Phase2LifetimeSeconds?: number; 
  public get tunnel2Phase2LifetimeSeconds() {
    return this.getNumberAttribute('tunnel2_phase2_lifetime_seconds');
  }
  public set tunnel2Phase2LifetimeSeconds(value: number) {
    this._tunnel2Phase2LifetimeSeconds = value;
  }
  public resetTunnel2Phase2LifetimeSeconds() {
    this._tunnel2Phase2LifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase2LifetimeSecondsInput() {
    return this._tunnel2Phase2LifetimeSeconds;
  }

  // tunnel2_preshared_key - computed: true, optional: true, required: false
  private _tunnel2PresharedKey?: string; 
  public get tunnel2PresharedKey() {
    return this.getStringAttribute('tunnel2_preshared_key');
  }
  public set tunnel2PresharedKey(value: string) {
    this._tunnel2PresharedKey = value;
  }
  public resetTunnel2PresharedKey() {
    this._tunnel2PresharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2PresharedKeyInput() {
    return this._tunnel2PresharedKey;
  }

  // tunnel2_rekey_fuzz_percentage - computed: false, optional: true, required: false
  private _tunnel2RekeyFuzzPercentage?: number; 
  public get tunnel2RekeyFuzzPercentage() {
    return this.getNumberAttribute('tunnel2_rekey_fuzz_percentage');
  }
  public set tunnel2RekeyFuzzPercentage(value: number) {
    this._tunnel2RekeyFuzzPercentage = value;
  }
  public resetTunnel2RekeyFuzzPercentage() {
    this._tunnel2RekeyFuzzPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2RekeyFuzzPercentageInput() {
    return this._tunnel2RekeyFuzzPercentage;
  }

  // tunnel2_rekey_margin_time_seconds - computed: false, optional: true, required: false
  private _tunnel2RekeyMarginTimeSeconds?: number; 
  public get tunnel2RekeyMarginTimeSeconds() {
    return this.getNumberAttribute('tunnel2_rekey_margin_time_seconds');
  }
  public set tunnel2RekeyMarginTimeSeconds(value: number) {
    this._tunnel2RekeyMarginTimeSeconds = value;
  }
  public resetTunnel2RekeyMarginTimeSeconds() {
    this._tunnel2RekeyMarginTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2RekeyMarginTimeSecondsInput() {
    return this._tunnel2RekeyMarginTimeSeconds;
  }

  // tunnel2_replay_window_size - computed: false, optional: true, required: false
  private _tunnel2ReplayWindowSize?: number; 
  public get tunnel2ReplayWindowSize() {
    return this.getNumberAttribute('tunnel2_replay_window_size');
  }
  public set tunnel2ReplayWindowSize(value: number) {
    this._tunnel2ReplayWindowSize = value;
  }
  public resetTunnel2ReplayWindowSize() {
    this._tunnel2ReplayWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2ReplayWindowSizeInput() {
    return this._tunnel2ReplayWindowSize;
  }

  // tunnel2_startup_action - computed: false, optional: true, required: false
  private _tunnel2StartupAction?: string; 
  public get tunnel2StartupAction() {
    return this.getStringAttribute('tunnel2_startup_action');
  }
  public set tunnel2StartupAction(value: string) {
    this._tunnel2StartupAction = value;
  }
  public resetTunnel2StartupAction() {
    this._tunnel2StartupAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2StartupActionInput() {
    return this._tunnel2StartupAction;
  }

  // tunnel2_vgw_inside_address - computed: true, optional: false, required: false
  public get tunnel2VgwInsideAddress() {
    return this.getStringAttribute('tunnel2_vgw_inside_address');
  }

  // tunnel_bandwidth - computed: true, optional: true, required: false
  private _tunnelBandwidth?: string; 
  public get tunnelBandwidth() {
    return this.getStringAttribute('tunnel_bandwidth');
  }
  public set tunnelBandwidth(value: string) {
    this._tunnelBandwidth = value;
  }
  public resetTunnelBandwidth() {
    this._tunnelBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelBandwidthInput() {
    return this._tunnelBandwidth;
  }

  // tunnel_inside_ip_version - computed: true, optional: true, required: false
  private _tunnelInsideIpVersion?: string; 
  public get tunnelInsideIpVersion() {
    return this.getStringAttribute('tunnel_inside_ip_version');
  }
  public set tunnelInsideIpVersion(value: string) {
    this._tunnelInsideIpVersion = value;
  }
  public resetTunnelInsideIpVersion() {
    this._tunnelInsideIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInsideIpVersionInput() {
    return this._tunnelInsideIpVersion;
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

  // vgw_telemetry - computed: true, optional: false, required: false
  private _vgwTelemetry = new TfConnection.VgwTelemetryPropertyList(this, "vgw_telemetry", true);
  public get vgwTelemetry() {
    return this._vgwTelemetry;
  }

  // vpn_concentrator_id - computed: false, optional: true, required: false
  private _vpnConcentratorId?: string; 
  public get vpnConcentratorId() {
    return this.getStringAttribute('vpn_concentrator_id');
  }
  public set vpnConcentratorId(value: string) {
    this._vpnConcentratorId = value;
  }
  public resetVpnConcentratorId() {
    this._vpnConcentratorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConcentratorIdInput() {
    return this._vpnConcentratorId;
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  public resetVpnGatewayId() {
    this._vpnGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // tunnel1_log_options - computed: false, optional: true, required: false
  private _tunnel1LogOptions = new TfConnection.Tunnel1LogOptionsPropertyOutputReference(this, "tunnel1_log_options");
  public get tunnel1LogOptions() {
    return this._tunnel1LogOptions;
  }
  public putTunnel1LogOptions(value: TfConnection.Tunnel1LogOptionsProperty) {
    this._tunnel1LogOptions.internalValue = value;
  }
  public resetTunnel1LogOptions() {
    this._tunnel1LogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1LogOptionsInput() {
    return this._tunnel1LogOptions.internalValue;
  }

  // tunnel2_log_options - computed: false, optional: true, required: false
  private _tunnel2LogOptions = new TfConnection.Tunnel2LogOptionsPropertyOutputReference(this, "tunnel2_log_options");
  public get tunnel2LogOptions() {
    return this._tunnel2LogOptions;
  }
  public putTunnel2LogOptions(value: TfConnection.Tunnel2LogOptionsProperty) {
    this._tunnel2LogOptions.internalValue = value;
  }
  public resetTunnel2LogOptions() {
    this._tunnel2LogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2LogOptionsInput() {
    return this._tunnel2LogOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_gateway_id: cdktn.stringToTerraform(this._customerGatewayId),
      enable_acceleration: cdktn.booleanToTerraform(this._enableAcceleration),
      id: cdktn.stringToTerraform(this._id),
      local_ipv4_network_cidr: cdktn.stringToTerraform(this._localIpv4NetworkCidr),
      local_ipv6_network_cidr: cdktn.stringToTerraform(this._localIpv6NetworkCidr),
      outside_ip_address_type: cdktn.stringToTerraform(this._outsideIpAddressType),
      preshared_key_storage: cdktn.stringToTerraform(this._presharedKeyStorage),
      region: cdktn.stringToTerraform(this._region),
      remote_ipv4_network_cidr: cdktn.stringToTerraform(this._remoteIpv4NetworkCidr),
      remote_ipv6_network_cidr: cdktn.stringToTerraform(this._remoteIpv6NetworkCidr),
      static_routes_only: cdktn.booleanToTerraform(this._staticRoutesOnly),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      transit_gateway_id: cdktn.stringToTerraform(this._transitGatewayId),
      transport_transit_gateway_attachment_id: cdktn.stringToTerraform(this._transportTransitGatewayAttachmentId),
      tunnel1_dpd_timeout_action: cdktn.stringToTerraform(this._tunnel1DpdTimeoutAction),
      tunnel1_dpd_timeout_seconds: cdktn.numberToTerraform(this._tunnel1DpdTimeoutSeconds),
      tunnel1_enable_tunnel_lifecycle_control: cdktn.booleanToTerraform(this._tunnel1EnableTunnelLifecycleControl),
      tunnel1_ike_versions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tunnel1IkeVersions),
      tunnel1_inside_cidr: cdktn.stringToTerraform(this._tunnel1InsideCidr),
      tunnel1_inside_ipv6_cidr: cdktn.stringToTerraform(this._tunnel1InsideIpv6Cidr),
      tunnel1_phase1_dh_group_numbers: cdktn.listMapper(cdktn.numberToTerraform, false)(this._tunnel1Phase1DhGroupNumbers),
      tunnel1_phase1_encryption_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tunnel1Phase1EncryptionAlgorithms),
      tunnel1_phase1_integrity_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tunnel1Phase1IntegrityAlgorithms),
      tunnel1_phase1_lifetime_seconds: cdktn.numberToTerraform(this._tunnel1Phase1LifetimeSeconds),
      tunnel1_phase2_dh_group_numbers: cdktn.listMapper(cdktn.numberToTerraform, false)(this._tunnel1Phase2DhGroupNumbers),
      tunnel1_phase2_encryption_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tunnel1Phase2EncryptionAlgorithms),
      tunnel1_phase2_integrity_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tunnel1Phase2IntegrityAlgorithms),
      tunnel1_phase2_lifetime_seconds: cdktn.numberToTerraform(this._tunnel1Phase2LifetimeSeconds),
      tunnel1_preshared_key: cdktn.stringToTerraform(this._tunnel1PresharedKey),
      tunnel1_rekey_fuzz_percentage: cdktn.numberToTerraform(this._tunnel1RekeyFuzzPercentage),
      tunnel1_rekey_margin_time_seconds: cdktn.numberToTerraform(this._tunnel1RekeyMarginTimeSeconds),
      tunnel1_replay_window_size: cdktn.numberToTerraform(this._tunnel1ReplayWindowSize),
      tunnel1_startup_action: cdktn.stringToTerraform(this._tunnel1StartupAction),
      tunnel2_dpd_timeout_action: cdktn.stringToTerraform(this._tunnel2DpdTimeoutAction),
      tunnel2_dpd_timeout_seconds: cdktn.numberToTerraform(this._tunnel2DpdTimeoutSeconds),
      tunnel2_enable_tunnel_lifecycle_control: cdktn.booleanToTerraform(this._tunnel2EnableTunnelLifecycleControl),
      tunnel2_ike_versions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tunnel2IkeVersions),
      tunnel2_inside_cidr: cdktn.stringToTerraform(this._tunnel2InsideCidr),
      tunnel2_inside_ipv6_cidr: cdktn.stringToTerraform(this._tunnel2InsideIpv6Cidr),
      tunnel2_phase1_dh_group_numbers: cdktn.listMapper(cdktn.numberToTerraform, false)(this._tunnel2Phase1DhGroupNumbers),
      tunnel2_phase1_encryption_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tunnel2Phase1EncryptionAlgorithms),
      tunnel2_phase1_integrity_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tunnel2Phase1IntegrityAlgorithms),
      tunnel2_phase1_lifetime_seconds: cdktn.numberToTerraform(this._tunnel2Phase1LifetimeSeconds),
      tunnel2_phase2_dh_group_numbers: cdktn.listMapper(cdktn.numberToTerraform, false)(this._tunnel2Phase2DhGroupNumbers),
      tunnel2_phase2_encryption_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tunnel2Phase2EncryptionAlgorithms),
      tunnel2_phase2_integrity_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tunnel2Phase2IntegrityAlgorithms),
      tunnel2_phase2_lifetime_seconds: cdktn.numberToTerraform(this._tunnel2Phase2LifetimeSeconds),
      tunnel2_preshared_key: cdktn.stringToTerraform(this._tunnel2PresharedKey),
      tunnel2_rekey_fuzz_percentage: cdktn.numberToTerraform(this._tunnel2RekeyFuzzPercentage),
      tunnel2_rekey_margin_time_seconds: cdktn.numberToTerraform(this._tunnel2RekeyMarginTimeSeconds),
      tunnel2_replay_window_size: cdktn.numberToTerraform(this._tunnel2ReplayWindowSize),
      tunnel2_startup_action: cdktn.stringToTerraform(this._tunnel2StartupAction),
      tunnel_bandwidth: cdktn.stringToTerraform(this._tunnelBandwidth),
      tunnel_inside_ip_version: cdktn.stringToTerraform(this._tunnelInsideIpVersion),
      type: cdktn.stringToTerraform(this._type),
      vpn_concentrator_id: cdktn.stringToTerraform(this._vpnConcentratorId),
      vpn_gateway_id: cdktn.stringToTerraform(this._vpnGatewayId),
      tunnel1_log_options: tfConnectionTunnel1LogOptionsPropertyToTerraform(this._tunnel1LogOptions.internalValue),
      tunnel2_log_options: tfConnectionTunnel2LogOptionsPropertyToTerraform(this._tunnel2LogOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_gateway_id: {
        value: cdktn.stringToHclTerraform(this._customerGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_acceleration: {
        value: cdktn.booleanToHclTerraform(this._enableAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ipv4_network_cidr: {
        value: cdktn.stringToHclTerraform(this._localIpv4NetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ipv6_network_cidr: {
        value: cdktn.stringToHclTerraform(this._localIpv6NetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outside_ip_address_type: {
        value: cdktn.stringToHclTerraform(this._outsideIpAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preshared_key_storage: {
        value: cdktn.stringToHclTerraform(this._presharedKeyStorage),
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
      remote_ipv4_network_cidr: {
        value: cdktn.stringToHclTerraform(this._remoteIpv4NetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ipv6_network_cidr: {
        value: cdktn.stringToHclTerraform(this._remoteIpv6NetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_routes_only: {
        value: cdktn.booleanToHclTerraform(this._staticRoutesOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      transit_gateway_id: {
        value: cdktn.stringToHclTerraform(this._transitGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_transit_gateway_attachment_id: {
        value: cdktn.stringToHclTerraform(this._transportTransitGatewayAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_dpd_timeout_action: {
        value: cdktn.stringToHclTerraform(this._tunnel1DpdTimeoutAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_dpd_timeout_seconds: {
        value: cdktn.numberToHclTerraform(this._tunnel1DpdTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel1_enable_tunnel_lifecycle_control: {
        value: cdktn.booleanToHclTerraform(this._tunnel1EnableTunnelLifecycleControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel1_ike_versions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tunnel1IkeVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel1_inside_cidr: {
        value: cdktn.stringToHclTerraform(this._tunnel1InsideCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_inside_ipv6_cidr: {
        value: cdktn.stringToHclTerraform(this._tunnel1InsideIpv6Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_phase1_dh_group_numbers: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._tunnel1Phase1DhGroupNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tunnel1_phase1_encryption_algorithms: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tunnel1Phase1EncryptionAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel1_phase1_integrity_algorithms: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tunnel1Phase1IntegrityAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel1_phase1_lifetime_seconds: {
        value: cdktn.numberToHclTerraform(this._tunnel1Phase1LifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel1_phase2_dh_group_numbers: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._tunnel1Phase2DhGroupNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tunnel1_phase2_encryption_algorithms: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tunnel1Phase2EncryptionAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel1_phase2_integrity_algorithms: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tunnel1Phase2IntegrityAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel1_phase2_lifetime_seconds: {
        value: cdktn.numberToHclTerraform(this._tunnel1Phase2LifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel1_preshared_key: {
        value: cdktn.stringToHclTerraform(this._tunnel1PresharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_rekey_fuzz_percentage: {
        value: cdktn.numberToHclTerraform(this._tunnel1RekeyFuzzPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel1_rekey_margin_time_seconds: {
        value: cdktn.numberToHclTerraform(this._tunnel1RekeyMarginTimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel1_replay_window_size: {
        value: cdktn.numberToHclTerraform(this._tunnel1ReplayWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel1_startup_action: {
        value: cdktn.stringToHclTerraform(this._tunnel1StartupAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_dpd_timeout_action: {
        value: cdktn.stringToHclTerraform(this._tunnel2DpdTimeoutAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_dpd_timeout_seconds: {
        value: cdktn.numberToHclTerraform(this._tunnel2DpdTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel2_enable_tunnel_lifecycle_control: {
        value: cdktn.booleanToHclTerraform(this._tunnel2EnableTunnelLifecycleControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel2_ike_versions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tunnel2IkeVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel2_inside_cidr: {
        value: cdktn.stringToHclTerraform(this._tunnel2InsideCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_inside_ipv6_cidr: {
        value: cdktn.stringToHclTerraform(this._tunnel2InsideIpv6Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_phase1_dh_group_numbers: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._tunnel2Phase1DhGroupNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tunnel2_phase1_encryption_algorithms: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tunnel2Phase1EncryptionAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel2_phase1_integrity_algorithms: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tunnel2Phase1IntegrityAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel2_phase1_lifetime_seconds: {
        value: cdktn.numberToHclTerraform(this._tunnel2Phase1LifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel2_phase2_dh_group_numbers: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._tunnel2Phase2DhGroupNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tunnel2_phase2_encryption_algorithms: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tunnel2Phase2EncryptionAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel2_phase2_integrity_algorithms: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tunnel2Phase2IntegrityAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel2_phase2_lifetime_seconds: {
        value: cdktn.numberToHclTerraform(this._tunnel2Phase2LifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel2_preshared_key: {
        value: cdktn.stringToHclTerraform(this._tunnel2PresharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel2_rekey_fuzz_percentage: {
        value: cdktn.numberToHclTerraform(this._tunnel2RekeyFuzzPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel2_rekey_margin_time_seconds: {
        value: cdktn.numberToHclTerraform(this._tunnel2RekeyMarginTimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel2_replay_window_size: {
        value: cdktn.numberToHclTerraform(this._tunnel2ReplayWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel2_startup_action: {
        value: cdktn.stringToHclTerraform(this._tunnel2StartupAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_bandwidth: {
        value: cdktn.stringToHclTerraform(this._tunnelBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_inside_ip_version: {
        value: cdktn.stringToHclTerraform(this._tunnelInsideIpVersion),
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
      vpn_concentrator_id: {
        value: cdktn.stringToHclTerraform(this._vpnConcentratorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway_id: {
        value: cdktn.stringToHclTerraform(this._vpnGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel1_log_options: {
        value: tfConnectionTunnel1LogOptionsPropertyToHclTerraform(this._tunnel1LogOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfConnection.Tunnel1LogOptionsPropertyList",
      },
      tunnel2_log_options: {
        value: tfConnectionTunnel2LogOptionsPropertyToHclTerraform(this._tunnel2LogOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfConnection.Tunnel2LogOptionsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfConnectionRoutesPropertyToTerraform(struct?: TfConnection.RoutesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfConnectionRoutesPropertyToHclTerraform(struct?: TfConnection.RoutesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfConnectionVgwTelemetryPropertyToTerraform(struct?: TfConnection.VgwTelemetryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfConnectionVgwTelemetryPropertyToHclTerraform(struct?: TfConnection.VgwTelemetryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfConnectionTunnel1LogOptionsCloudwatchLogOptionsPropertyToTerraform(struct?: TfConnection.Tunnel1LogOptionsCloudwatchLogOptionsPropertyOutputReference | TfConnection.Tunnel1LogOptionsCloudwatchLogOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bgp_log_enabled: cdktn.booleanToTerraform(struct!.bgpLogEnabled),
    bgp_log_group_arn: cdktn.stringToTerraform(struct!.bgpLogGroupArn),
    bgp_log_output_format: cdktn.stringToTerraform(struct!.bgpLogOutputFormat),
    log_enabled: cdktn.booleanToTerraform(struct!.logEnabled),
    log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
    log_output_format: cdktn.stringToTerraform(struct!.logOutputFormat),
  }
}


export function tfConnectionTunnel1LogOptionsCloudwatchLogOptionsPropertyToHclTerraform(struct?: TfConnection.Tunnel1LogOptionsCloudwatchLogOptionsPropertyOutputReference | TfConnection.Tunnel1LogOptionsCloudwatchLogOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bgp_log_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.bgpLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bgp_log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.bgpLogGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_log_output_format: {
      value: cdktn.stringToHclTerraform(struct!.bgpLogOutputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.logEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_output_format: {
      value: cdktn.stringToHclTerraform(struct!.logOutputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectionTunnel1LogOptionsPropertyToTerraform(struct?: TfConnection.Tunnel1LogOptionsPropertyOutputReference | TfConnection.Tunnel1LogOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_log_options: tfConnectionTunnel1LogOptionsCloudwatchLogOptionsPropertyToTerraform(struct!.cloudwatchLogOptions),
  }
}


export function tfConnectionTunnel1LogOptionsPropertyToHclTerraform(struct?: TfConnection.Tunnel1LogOptionsPropertyOutputReference | TfConnection.Tunnel1LogOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_log_options: {
      value: tfConnectionTunnel1LogOptionsCloudwatchLogOptionsPropertyToHclTerraform(struct!.cloudwatchLogOptions),
      isBlock: true,
      type: "list",
      storageClassType: "Tunnel1LogOptionsCloudwatchLogOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectionTunnel2LogOptionsCloudwatchLogOptionsPropertyToTerraform(struct?: TfConnection.Tunnel2LogOptionsCloudwatchLogOptionsPropertyOutputReference | TfConnection.Tunnel2LogOptionsCloudwatchLogOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bgp_log_enabled: cdktn.booleanToTerraform(struct!.bgpLogEnabled),
    bgp_log_group_arn: cdktn.stringToTerraform(struct!.bgpLogGroupArn),
    bgp_log_output_format: cdktn.stringToTerraform(struct!.bgpLogOutputFormat),
    log_enabled: cdktn.booleanToTerraform(struct!.logEnabled),
    log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
    log_output_format: cdktn.stringToTerraform(struct!.logOutputFormat),
  }
}


export function tfConnectionTunnel2LogOptionsCloudwatchLogOptionsPropertyToHclTerraform(struct?: TfConnection.Tunnel2LogOptionsCloudwatchLogOptionsPropertyOutputReference | TfConnection.Tunnel2LogOptionsCloudwatchLogOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bgp_log_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.bgpLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bgp_log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.bgpLogGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_log_output_format: {
      value: cdktn.stringToHclTerraform(struct!.bgpLogOutputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.logEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_output_format: {
      value: cdktn.stringToHclTerraform(struct!.logOutputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectionTunnel2LogOptionsPropertyToTerraform(struct?: TfConnection.Tunnel2LogOptionsPropertyOutputReference | TfConnection.Tunnel2LogOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_log_options: tfConnectionTunnel2LogOptionsCloudwatchLogOptionsPropertyToTerraform(struct!.cloudwatchLogOptions),
  }
}


export function tfConnectionTunnel2LogOptionsPropertyToHclTerraform(struct?: TfConnection.Tunnel2LogOptionsPropertyOutputReference | TfConnection.Tunnel2LogOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_log_options: {
      value: tfConnectionTunnel2LogOptionsCloudwatchLogOptionsPropertyToHclTerraform(struct!.cloudwatchLogOptions),
      isBlock: true,
      type: "list",
      storageClassType: "Tunnel2LogOptionsCloudwatchLogOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfConnection {
export interface RoutesProperty {
}
export class RoutesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RoutesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr_block - computed: true, optional: false, required: false
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class RoutesPropertyList extends cdktn.ComplexList {

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
  public get(index: number): RoutesPropertyOutputReference {
    return new RoutesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VgwTelemetryProperty {
}
export class VgwTelemetryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VgwTelemetryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VgwTelemetryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accepted_route_count - computed: true, optional: false, required: false
  public get acceptedRouteCount() {
    return this.getNumberAttribute('accepted_route_count');
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // last_status_change - computed: true, optional: false, required: false
  public get lastStatusChange() {
    return this.getStringAttribute('last_status_change');
  }

  // outside_ip_address - computed: true, optional: false, required: false
  public get outsideIpAddress() {
    return this.getStringAttribute('outside_ip_address');
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

export class VgwTelemetryPropertyList extends cdktn.ComplexList {

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
  public get(index: number): VgwTelemetryPropertyOutputReference {
    return new VgwTelemetryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Tunnel1LogOptionsCloudwatchLogOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#bgp_log_enabled TfConnection#bgp_log_enabled}
  */
  readonly bgpLogEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#bgp_log_group_arn TfConnection#bgp_log_group_arn}
  */
  readonly bgpLogGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#bgp_log_output_format TfConnection#bgp_log_output_format}
  */
  readonly bgpLogOutputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#log_enabled TfConnection#log_enabled}
  */
  readonly logEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#log_group_arn TfConnection#log_group_arn}
  */
  readonly logGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#log_output_format TfConnection#log_output_format}
  */
  readonly logOutputFormat?: string;
}
export class Tunnel1LogOptionsCloudwatchLogOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Tunnel1LogOptionsCloudwatchLogOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpLogEnabled = this._bgpLogEnabled;
    }
    if (this._bgpLogGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpLogGroupArn = this._bgpLogGroupArn;
    }
    if (this._bgpLogOutputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpLogOutputFormat = this._bgpLogOutputFormat;
    }
    if (this._logEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnabled = this._logEnabled;
    }
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    if (this._logOutputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOutputFormat = this._logOutputFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Tunnel1LogOptionsCloudwatchLogOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpLogEnabled = undefined;
      this._bgpLogGroupArn = undefined;
      this._bgpLogOutputFormat = undefined;
      this._logEnabled = undefined;
      this._logGroupArn = undefined;
      this._logOutputFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpLogEnabled = value.bgpLogEnabled;
      this._bgpLogGroupArn = value.bgpLogGroupArn;
      this._bgpLogOutputFormat = value.bgpLogOutputFormat;
      this._logEnabled = value.logEnabled;
      this._logGroupArn = value.logGroupArn;
      this._logOutputFormat = value.logOutputFormat;
    }
  }

  // bgp_log_enabled - computed: false, optional: true, required: false
  private _bgpLogEnabled?: boolean | cdktn.IResolvable; 
  public get bgpLogEnabled() {
    return this.getBooleanAttribute('bgp_log_enabled');
  }
  public set bgpLogEnabled(value: boolean | cdktn.IResolvable) {
    this._bgpLogEnabled = value;
  }
  public resetBgpLogEnabled() {
    this._bgpLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLogEnabledInput() {
    return this._bgpLogEnabled;
  }

  // bgp_log_group_arn - computed: false, optional: true, required: false
  private _bgpLogGroupArn?: string; 
  public get bgpLogGroupArn() {
    return this.getStringAttribute('bgp_log_group_arn');
  }
  public set bgpLogGroupArn(value: string) {
    this._bgpLogGroupArn = value;
  }
  public resetBgpLogGroupArn() {
    this._bgpLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLogGroupArnInput() {
    return this._bgpLogGroupArn;
  }

  // bgp_log_output_format - computed: false, optional: true, required: false
  private _bgpLogOutputFormat?: string; 
  public get bgpLogOutputFormat() {
    return this.getStringAttribute('bgp_log_output_format');
  }
  public set bgpLogOutputFormat(value: string) {
    this._bgpLogOutputFormat = value;
  }
  public resetBgpLogOutputFormat() {
    this._bgpLogOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLogOutputFormatInput() {
    return this._bgpLogOutputFormat;
  }

  // log_enabled - computed: false, optional: true, required: false
  private _logEnabled?: boolean | cdktn.IResolvable; 
  public get logEnabled() {
    return this.getBooleanAttribute('log_enabled');
  }
  public set logEnabled(value: boolean | cdktn.IResolvable) {
    this._logEnabled = value;
  }
  public resetLogEnabled() {
    this._logEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnabledInput() {
    return this._logEnabled;
  }

  // log_group_arn - computed: false, optional: true, required: false
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  public resetLogGroupArn() {
    this._logGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }

  // log_output_format - computed: false, optional: true, required: false
  private _logOutputFormat?: string; 
  public get logOutputFormat() {
    return this.getStringAttribute('log_output_format');
  }
  public set logOutputFormat(value: string) {
    this._logOutputFormat = value;
  }
  public resetLogOutputFormat() {
    this._logOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOutputFormatInput() {
    return this._logOutputFormat;
  }
}
export interface Tunnel1LogOptionsProperty {
  /**
  * cloudwatch_log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#cloudwatch_log_options TfConnection#cloudwatch_log_options}
  */
  readonly cloudwatchLogOptions?: Tunnel1LogOptionsCloudwatchLogOptionsProperty;
}
export class Tunnel1LogOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Tunnel1LogOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogOptions = this._cloudwatchLogOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Tunnel1LogOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogOptions.internalValue = value.cloudwatchLogOptions;
    }
  }

  // cloudwatch_log_options - computed: false, optional: true, required: false
  private _cloudwatchLogOptions = new Tunnel1LogOptionsCloudwatchLogOptionsPropertyOutputReference(this, "cloudwatch_log_options");
  public get cloudwatchLogOptions() {
    return this._cloudwatchLogOptions;
  }
  public putCloudwatchLogOptions(value: Tunnel1LogOptionsCloudwatchLogOptionsProperty) {
    this._cloudwatchLogOptions.internalValue = value;
  }
  public resetCloudwatchLogOptions() {
    this._cloudwatchLogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogOptionsInput() {
    return this._cloudwatchLogOptions.internalValue;
  }
}
export interface Tunnel2LogOptionsCloudwatchLogOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#bgp_log_enabled TfConnection#bgp_log_enabled}
  */
  readonly bgpLogEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#bgp_log_group_arn TfConnection#bgp_log_group_arn}
  */
  readonly bgpLogGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#bgp_log_output_format TfConnection#bgp_log_output_format}
  */
  readonly bgpLogOutputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#log_enabled TfConnection#log_enabled}
  */
  readonly logEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#log_group_arn TfConnection#log_group_arn}
  */
  readonly logGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#log_output_format TfConnection#log_output_format}
  */
  readonly logOutputFormat?: string;
}
export class Tunnel2LogOptionsCloudwatchLogOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Tunnel2LogOptionsCloudwatchLogOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpLogEnabled = this._bgpLogEnabled;
    }
    if (this._bgpLogGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpLogGroupArn = this._bgpLogGroupArn;
    }
    if (this._bgpLogOutputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpLogOutputFormat = this._bgpLogOutputFormat;
    }
    if (this._logEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnabled = this._logEnabled;
    }
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    if (this._logOutputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOutputFormat = this._logOutputFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Tunnel2LogOptionsCloudwatchLogOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpLogEnabled = undefined;
      this._bgpLogGroupArn = undefined;
      this._bgpLogOutputFormat = undefined;
      this._logEnabled = undefined;
      this._logGroupArn = undefined;
      this._logOutputFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpLogEnabled = value.bgpLogEnabled;
      this._bgpLogGroupArn = value.bgpLogGroupArn;
      this._bgpLogOutputFormat = value.bgpLogOutputFormat;
      this._logEnabled = value.logEnabled;
      this._logGroupArn = value.logGroupArn;
      this._logOutputFormat = value.logOutputFormat;
    }
  }

  // bgp_log_enabled - computed: false, optional: true, required: false
  private _bgpLogEnabled?: boolean | cdktn.IResolvable; 
  public get bgpLogEnabled() {
    return this.getBooleanAttribute('bgp_log_enabled');
  }
  public set bgpLogEnabled(value: boolean | cdktn.IResolvable) {
    this._bgpLogEnabled = value;
  }
  public resetBgpLogEnabled() {
    this._bgpLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLogEnabledInput() {
    return this._bgpLogEnabled;
  }

  // bgp_log_group_arn - computed: false, optional: true, required: false
  private _bgpLogGroupArn?: string; 
  public get bgpLogGroupArn() {
    return this.getStringAttribute('bgp_log_group_arn');
  }
  public set bgpLogGroupArn(value: string) {
    this._bgpLogGroupArn = value;
  }
  public resetBgpLogGroupArn() {
    this._bgpLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLogGroupArnInput() {
    return this._bgpLogGroupArn;
  }

  // bgp_log_output_format - computed: false, optional: true, required: false
  private _bgpLogOutputFormat?: string; 
  public get bgpLogOutputFormat() {
    return this.getStringAttribute('bgp_log_output_format');
  }
  public set bgpLogOutputFormat(value: string) {
    this._bgpLogOutputFormat = value;
  }
  public resetBgpLogOutputFormat() {
    this._bgpLogOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLogOutputFormatInput() {
    return this._bgpLogOutputFormat;
  }

  // log_enabled - computed: false, optional: true, required: false
  private _logEnabled?: boolean | cdktn.IResolvable; 
  public get logEnabled() {
    return this.getBooleanAttribute('log_enabled');
  }
  public set logEnabled(value: boolean | cdktn.IResolvable) {
    this._logEnabled = value;
  }
  public resetLogEnabled() {
    this._logEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnabledInput() {
    return this._logEnabled;
  }

  // log_group_arn - computed: false, optional: true, required: false
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  public resetLogGroupArn() {
    this._logGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }

  // log_output_format - computed: false, optional: true, required: false
  private _logOutputFormat?: string; 
  public get logOutputFormat() {
    return this.getStringAttribute('log_output_format');
  }
  public set logOutputFormat(value: string) {
    this._logOutputFormat = value;
  }
  public resetLogOutputFormat() {
    this._logOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOutputFormatInput() {
    return this._logOutputFormat;
  }
}
export interface Tunnel2LogOptionsProperty {
  /**
  * cloudwatch_log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpn_connection#cloudwatch_log_options TfConnection#cloudwatch_log_options}
  */
  readonly cloudwatchLogOptions?: Tunnel2LogOptionsCloudwatchLogOptionsProperty;
}
export class Tunnel2LogOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Tunnel2LogOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogOptions = this._cloudwatchLogOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Tunnel2LogOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogOptions.internalValue = value.cloudwatchLogOptions;
    }
  }

  // cloudwatch_log_options - computed: false, optional: true, required: false
  private _cloudwatchLogOptions = new Tunnel2LogOptionsCloudwatchLogOptionsPropertyOutputReference(this, "cloudwatch_log_options");
  public get cloudwatchLogOptions() {
    return this._cloudwatchLogOptions;
  }
  public putCloudwatchLogOptions(value: Tunnel2LogOptionsCloudwatchLogOptionsProperty) {
    this._cloudwatchLogOptions.internalValue = value;
  }
  public resetCloudwatchLogOptions() {
    this._cloudwatchLogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogOptionsInput() {
    return this._cloudwatchLogOptions.internalValue;
  }
}
}
