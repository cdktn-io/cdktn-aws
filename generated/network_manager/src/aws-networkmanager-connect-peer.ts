// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsConnectPeerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#connect_attachment_id AwsConnectPeer#connect_attachment_id}
  */
  readonly connectAttachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#core_network_address AwsConnectPeer#core_network_address}
  */
  readonly coreNetworkAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#id AwsConnectPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#inside_cidr_blocks AwsConnectPeer#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#peer_address AwsConnectPeer#peer_address}
  */
  readonly peerAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#subnet_arn AwsConnectPeer#subnet_arn}
  */
  readonly subnetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#tags AwsConnectPeer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#tags_all AwsConnectPeer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * bgp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#bgp_options AwsConnectPeer#bgp_options}
  */
  readonly bgpOptions?: AwsConnectPeer.BgpOptionsProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#timeouts AwsConnectPeer#timeouts}
  */
  readonly timeouts?: AwsConnectPeer.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer aws_networkmanager_connect_peer}
*/
export class AwsConnectPeer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkmanager_connect_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsConnectPeer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsConnectPeer to import
  * @param importFromId The id of the existing AwsConnectPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsConnectPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkmanager_connect_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer aws_networkmanager_connect_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsConnectPeerConfig
  */
  public constructor(scope: Construct, id: string, config: AwsConnectPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkmanager_connect_peer',
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
    this._connectAttachmentId = config.connectAttachmentId;
    this._coreNetworkAddress = config.coreNetworkAddress;
    this._id = config.id;
    this._insideCidrBlocks = config.insideCidrBlocks;
    this._peerAddress = config.peerAddress;
    this._subnetArn = config.subnetArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._bgpOptions.internalValue = config.bgpOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new AwsConnectPeer.ConfigurationPropertyList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // connect_attachment_id - computed: false, optional: false, required: true
  private _connectAttachmentId?: string; 
  public get connectAttachmentId() {
    return this.getStringAttribute('connect_attachment_id');
  }
  public set connectAttachmentId(value: string) {
    this._connectAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectAttachmentIdInput() {
    return this._connectAttachmentId;
  }

  // connect_peer_id - computed: true, optional: false, required: false
  public get connectPeerId() {
    return this.getStringAttribute('connect_peer_id');
  }

  // core_network_address - computed: false, optional: true, required: false
  private _coreNetworkAddress?: string; 
  public get coreNetworkAddress() {
    return this.getStringAttribute('core_network_address');
  }
  public set coreNetworkAddress(value: string) {
    this._coreNetworkAddress = value;
  }
  public resetCoreNetworkAddress() {
    this._coreNetworkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkAddressInput() {
    return this._coreNetworkAddress;
  }

  // core_network_id - computed: true, optional: false, required: false
  public get coreNetworkId() {
    return this.getStringAttribute('core_network_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // edge_location - computed: true, optional: false, required: false
  public get edgeLocation() {
    return this.getStringAttribute('edge_location');
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

  // inside_cidr_blocks - computed: false, optional: true, required: false
  private _insideCidrBlocks?: string[]; 
  public get insideCidrBlocks() {
    return this.getListAttribute('inside_cidr_blocks');
  }
  public set insideCidrBlocks(value: string[]) {
    this._insideCidrBlocks = value;
  }
  public resetInsideCidrBlocks() {
    this._insideCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideCidrBlocksInput() {
    return this._insideCidrBlocks;
  }

  // peer_address - computed: false, optional: false, required: true
  private _peerAddress?: string; 
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }
  public set peerAddress(value: string) {
    this._peerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_arn - computed: false, optional: true, required: false
  private _subnetArn?: string; 
  public get subnetArn() {
    return this.getStringAttribute('subnet_arn');
  }
  public set subnetArn(value: string) {
    this._subnetArn = value;
  }
  public resetSubnetArn() {
    this._subnetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetArnInput() {
    return this._subnetArn;
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

  // bgp_options - computed: false, optional: true, required: false
  private _bgpOptions = new AwsConnectPeer.BgpOptionsPropertyOutputReference(this, "bgp_options");
  public get bgpOptions() {
    return this._bgpOptions;
  }
  public putBgpOptions(value: AwsConnectPeer.BgpOptionsProperty) {
    this._bgpOptions.internalValue = value;
  }
  public resetBgpOptions() {
    this._bgpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpOptionsInput() {
    return this._bgpOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsConnectPeer.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsConnectPeer.TimeoutsProperty) {
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
      connect_attachment_id: cdktn.stringToTerraform(this._connectAttachmentId),
      core_network_address: cdktn.stringToTerraform(this._coreNetworkAddress),
      id: cdktn.stringToTerraform(this._id),
      inside_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(this._insideCidrBlocks),
      peer_address: cdktn.stringToTerraform(this._peerAddress),
      subnet_arn: cdktn.stringToTerraform(this._subnetArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      bgp_options: awsConnectPeerBgpOptionsPropertyToTerraform(this._bgpOptions.internalValue),
      timeouts: awsConnectPeerTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_attachment_id: {
        value: cdktn.stringToHclTerraform(this._connectAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_network_address: {
        value: cdktn.stringToHclTerraform(this._coreNetworkAddress),
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
      inside_cidr_blocks: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._insideCidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      peer_address: {
        value: cdktn.stringToHclTerraform(this._peerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_arn: {
        value: cdktn.stringToHclTerraform(this._subnetArn),
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
      bgp_options: {
        value: awsConnectPeerBgpOptionsPropertyToHclTerraform(this._bgpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnectPeer.BgpOptionsPropertyList",
      },
      timeouts: {
        value: awsConnectPeerTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsConnectPeer.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsConnectPeerBgpConfigurationsPropertyToTerraform(struct?: AwsConnectPeer.BgpConfigurationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsConnectPeerBgpConfigurationsPropertyToHclTerraform(struct?: AwsConnectPeer.BgpConfigurationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsConnectPeerConfigurationPropertyToTerraform(struct?: AwsConnectPeer.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsConnectPeerConfigurationPropertyToHclTerraform(struct?: AwsConnectPeer.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsConnectPeerBgpOptionsPropertyToTerraform(struct?: AwsConnectPeer.BgpOptionsPropertyOutputReference | AwsConnectPeer.BgpOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    peer_asn: cdktn.stringToTerraform(struct!.peerAsn),
  }
}


export function awsConnectPeerBgpOptionsPropertyToHclTerraform(struct?: AwsConnectPeer.BgpOptionsPropertyOutputReference | AwsConnectPeer.BgpOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    peer_asn: {
      value: cdktn.stringToHclTerraform(struct!.peerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectPeerTimeoutsPropertyToTerraform(struct?: AwsConnectPeer.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function awsConnectPeerTimeoutsPropertyToHclTerraform(struct?: AwsConnectPeer.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsConnectPeer {
export interface BgpConfigurationsProperty {
}
export class BgpConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BgpConfigurationsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpConfigurationsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_network_address - computed: true, optional: false, required: false
  public get coreNetworkAddress() {
    return this.getStringAttribute('core_network_address');
  }

  // core_network_asn - computed: true, optional: false, required: false
  public get coreNetworkAsn() {
    return this.getNumberAttribute('core_network_asn');
  }

  // peer_address - computed: true, optional: false, required: false
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getStringAttribute('peer_asn');
  }
}

export class BgpConfigurationsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): BgpConfigurationsPropertyOutputReference {
    return new BgpConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationProperty {
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_configurations - computed: true, optional: false, required: false
  private _bgpConfigurations = new BgpConfigurationsPropertyList(this, "bgp_configurations", false);
  public get bgpConfigurations() {
    return this._bgpConfigurations;
  }

  // core_network_address - computed: true, optional: false, required: false
  public get coreNetworkAddress() {
    return this.getStringAttribute('core_network_address');
  }

  // inside_cidr_blocks - computed: true, optional: false, required: false
  public get insideCidrBlocks() {
    return cdktn.Fn.tolist(this.getListAttribute('inside_cidr_blocks'));
  }

  // peer_address - computed: true, optional: false, required: false
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class ConfigurationPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ConfigurationPropertyOutputReference {
    return new ConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#peer_asn AwsConnectPeer#peer_asn}
  */
  readonly peerAsn?: string;
}
export class BgpOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAsn = this._peerAsn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._peerAsn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._peerAsn = value.peerAsn;
    }
  }

  // peer_asn - computed: true, optional: true, required: false
  private _peerAsn?: string; 
  public get peerAsn() {
    return this.getStringAttribute('peer_asn');
  }
  public set peerAsn(value: string) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#create AwsConnectPeer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_connect_peer#delete AwsConnectPeer#delete}
  */
  readonly delete?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
}
