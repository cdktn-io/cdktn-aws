// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfRouteConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#carrier_gateway_id TfRoute#carrier_gateway_id}
  */
  readonly carrierGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#core_network_arn TfRoute#core_network_arn}
  */
  readonly coreNetworkArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#destination_cidr_block TfRoute#destination_cidr_block}
  */
  readonly destinationCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#destination_ipv6_cidr_block TfRoute#destination_ipv6_cidr_block}
  */
  readonly destinationIpv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#destination_prefix_list_id TfRoute#destination_prefix_list_id}
  */
  readonly destinationPrefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#egress_only_gateway_id TfRoute#egress_only_gateway_id}
  */
  readonly egressOnlyGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#gateway_id TfRoute#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#id TfRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#local_gateway_id TfRoute#local_gateway_id}
  */
  readonly localGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#nat_gateway_id TfRoute#nat_gateway_id}
  */
  readonly natGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#network_interface_id TfRoute#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#odb_network_arn TfRoute#odb_network_arn}
  */
  readonly odbNetworkArn?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#region TfRoute#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#route_table_id TfRoute#route_table_id}
  */
  readonly routeTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#transit_gateway_id TfRoute#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#vpc_endpoint_id TfRoute#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#vpc_peering_connection_id TfRoute#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#timeouts TfRoute#timeouts}
  */
  readonly timeouts?: TfRoute.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route aws_route}
*/
export class TfRoute extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfRoute resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfRoute to import
  * @param importFromId The id of the existing TfRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route aws_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfRouteConfig
  */
  public constructor(scope: Construct, id: string, config: TfRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route',
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
    this._carrierGatewayId = config.carrierGatewayId;
    this._coreNetworkArn = config.coreNetworkArn;
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._destinationIpv6CidrBlock = config.destinationIpv6CidrBlock;
    this._destinationPrefixListId = config.destinationPrefixListId;
    this._egressOnlyGatewayId = config.egressOnlyGatewayId;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._localGatewayId = config.localGatewayId;
    this._natGatewayId = config.natGatewayId;
    this._networkInterfaceId = config.networkInterfaceId;
    this._odbNetworkArn = config.odbNetworkArn;
    this._region = config.region;
    this._routeTableId = config.routeTableId;
    this._transitGatewayId = config.transitGatewayId;
    this._vpcEndpointId = config.vpcEndpointId;
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // carrier_gateway_id - computed: false, optional: true, required: false
  private _carrierGatewayId?: string; 
  public get carrierGatewayId() {
    return this.getStringAttribute('carrier_gateway_id');
  }
  public set carrierGatewayId(value: string) {
    this._carrierGatewayId = value;
  }
  public resetCarrierGatewayId() {
    this._carrierGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierGatewayIdInput() {
    return this._carrierGatewayId;
  }

  // core_network_arn - computed: false, optional: true, required: false
  private _coreNetworkArn?: string; 
  public get coreNetworkArn() {
    return this.getStringAttribute('core_network_arn');
  }
  public set coreNetworkArn(value: string) {
    this._coreNetworkArn = value;
  }
  public resetCoreNetworkArn() {
    this._coreNetworkArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkArnInput() {
    return this._coreNetworkArn;
  }

  // destination_cidr_block - computed: false, optional: true, required: false
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  public resetDestinationCidrBlock() {
    this._destinationCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
  }

  // destination_ipv6_cidr_block - computed: false, optional: true, required: false
  private _destinationIpv6CidrBlock?: string; 
  public get destinationIpv6CidrBlock() {
    return this.getStringAttribute('destination_ipv6_cidr_block');
  }
  public set destinationIpv6CidrBlock(value: string) {
    this._destinationIpv6CidrBlock = value;
  }
  public resetDestinationIpv6CidrBlock() {
    this._destinationIpv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpv6CidrBlockInput() {
    return this._destinationIpv6CidrBlock;
  }

  // destination_prefix_list_id - computed: false, optional: true, required: false
  private _destinationPrefixListId?: string; 
  public get destinationPrefixListId() {
    return this.getStringAttribute('destination_prefix_list_id');
  }
  public set destinationPrefixListId(value: string) {
    this._destinationPrefixListId = value;
  }
  public resetDestinationPrefixListId() {
    this._destinationPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListIdInput() {
    return this._destinationPrefixListId;
  }

  // egress_only_gateway_id - computed: false, optional: true, required: false
  private _egressOnlyGatewayId?: string; 
  public get egressOnlyGatewayId() {
    return this.getStringAttribute('egress_only_gateway_id');
  }
  public set egressOnlyGatewayId(value: string) {
    this._egressOnlyGatewayId = value;
  }
  public resetEgressOnlyGatewayId() {
    this._egressOnlyGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressOnlyGatewayIdInput() {
    return this._egressOnlyGatewayId;
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_owner_id - computed: true, optional: false, required: false
  public get instanceOwnerId() {
    return this.getStringAttribute('instance_owner_id');
  }

  // local_gateway_id - computed: false, optional: true, required: false
  private _localGatewayId?: string; 
  public get localGatewayId() {
    return this.getStringAttribute('local_gateway_id');
  }
  public set localGatewayId(value: string) {
    this._localGatewayId = value;
  }
  public resetLocalGatewayId() {
    this._localGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayIdInput() {
    return this._localGatewayId;
  }

  // nat_gateway_id - computed: false, optional: true, required: false
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  public resetNatGatewayId() {
    this._natGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // odb_network_arn - computed: false, optional: true, required: false
  private _odbNetworkArn?: string; 
  public get odbNetworkArn() {
    return this.getStringAttribute('odb_network_arn');
  }
  public set odbNetworkArn(value: string) {
    this._odbNetworkArn = value;
  }
  public resetOdbNetworkArn() {
    this._odbNetworkArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbNetworkArnInput() {
    return this._odbNetworkArn;
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
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

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // vpc_endpoint_id - computed: false, optional: true, required: false
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // vpc_peering_connection_id - computed: false, optional: true, required: false
  private _vpcPeeringConnectionId?: string; 
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  public resetVpcPeeringConnectionId() {
    this._vpcPeeringConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfRoute.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfRoute.TimeoutsProperty) {
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
      carrier_gateway_id: cdktn.stringToTerraform(this._carrierGatewayId),
      core_network_arn: cdktn.stringToTerraform(this._coreNetworkArn),
      destination_cidr_block: cdktn.stringToTerraform(this._destinationCidrBlock),
      destination_ipv6_cidr_block: cdktn.stringToTerraform(this._destinationIpv6CidrBlock),
      destination_prefix_list_id: cdktn.stringToTerraform(this._destinationPrefixListId),
      egress_only_gateway_id: cdktn.stringToTerraform(this._egressOnlyGatewayId),
      gateway_id: cdktn.stringToTerraform(this._gatewayId),
      id: cdktn.stringToTerraform(this._id),
      local_gateway_id: cdktn.stringToTerraform(this._localGatewayId),
      nat_gateway_id: cdktn.stringToTerraform(this._natGatewayId),
      network_interface_id: cdktn.stringToTerraform(this._networkInterfaceId),
      odb_network_arn: cdktn.stringToTerraform(this._odbNetworkArn),
      region: cdktn.stringToTerraform(this._region),
      route_table_id: cdktn.stringToTerraform(this._routeTableId),
      transit_gateway_id: cdktn.stringToTerraform(this._transitGatewayId),
      vpc_endpoint_id: cdktn.stringToTerraform(this._vpcEndpointId),
      vpc_peering_connection_id: cdktn.stringToTerraform(this._vpcPeeringConnectionId),
      timeouts: tfRouteTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      carrier_gateway_id: {
        value: cdktn.stringToHclTerraform(this._carrierGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_network_arn: {
        value: cdktn.stringToHclTerraform(this._coreNetworkArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_cidr_block: {
        value: cdktn.stringToHclTerraform(this._destinationCidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ipv6_cidr_block: {
        value: cdktn.stringToHclTerraform(this._destinationIpv6CidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_prefix_list_id: {
        value: cdktn.stringToHclTerraform(this._destinationPrefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_only_gateway_id: {
        value: cdktn.stringToHclTerraform(this._egressOnlyGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktn.stringToHclTerraform(this._gatewayId),
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
      local_gateway_id: {
        value: cdktn.stringToHclTerraform(this._localGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_gateway_id: {
        value: cdktn.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_id: {
        value: cdktn.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      odb_network_arn: {
        value: cdktn.stringToHclTerraform(this._odbNetworkArn),
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
      route_table_id: {
        value: cdktn.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_id: {
        value: cdktn.stringToHclTerraform(this._transitGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_endpoint_id: {
        value: cdktn.stringToHclTerraform(this._vpcEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peering_connection_id: {
        value: cdktn.stringToHclTerraform(this._vpcPeeringConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: tfRouteTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfRoute.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfRouteTimeoutsPropertyToTerraform(struct?: TfRoute.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfRouteTimeoutsPropertyToHclTerraform(struct?: TfRoute.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfRoute {
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#create TfRoute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#delete TfRoute#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route#update TfRoute#update}
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
