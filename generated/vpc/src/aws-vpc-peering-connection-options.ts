// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsVpcPeeringConnectionOptionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options#id AwsVpcPeeringConnectionOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options#region AwsVpcPeeringConnectionOptions#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options#vpc_peering_connection_id AwsVpcPeeringConnectionOptions#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId: string;
  /**
  * accepter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options#accepter AwsVpcPeeringConnectionOptions#accepter}
  */
  readonly accepter?: AwsVpcPeeringConnectionOptions.AccepterProperty;
  /**
  * requester block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options#requester AwsVpcPeeringConnectionOptions#requester}
  */
  readonly requester?: AwsVpcPeeringConnectionOptions.RequesterProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options aws_vpc_peering_connection_options}
*/
export class AwsVpcPeeringConnectionOptions extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_peering_connection_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsVpcPeeringConnectionOptions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsVpcPeeringConnectionOptions to import
  * @param importFromId The id of the existing AwsVpcPeeringConnectionOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsVpcPeeringConnectionOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_peering_connection_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options aws_vpc_peering_connection_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsVpcPeeringConnectionOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: AwsVpcPeeringConnectionOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_peering_connection_options',
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
    this._region = config.region;
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    this._accepter.internalValue = config.accepter;
    this._requester.internalValue = config.requester;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // vpc_peering_connection_id - computed: false, optional: false, required: true
  private _vpcPeeringConnectionId?: string; 
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId;
  }

  // accepter - computed: false, optional: true, required: false
  private _accepter = new AwsVpcPeeringConnectionOptions.AccepterPropertyOutputReference(this, "accepter");
  public get accepter() {
    return this._accepter;
  }
  public putAccepter(value: AwsVpcPeeringConnectionOptions.AccepterProperty) {
    this._accepter.internalValue = value;
  }
  public resetAccepter() {
    this._accepter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accepterInput() {
    return this._accepter.internalValue;
  }

  // requester - computed: false, optional: true, required: false
  private _requester = new AwsVpcPeeringConnectionOptions.RequesterPropertyOutputReference(this, "requester");
  public get requester() {
    return this._requester;
  }
  public putRequester(value: AwsVpcPeeringConnectionOptions.RequesterProperty) {
    this._requester.internalValue = value;
  }
  public resetRequester() {
    this._requester.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterInput() {
    return this._requester.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      vpc_peering_connection_id: cdktn.stringToTerraform(this._vpcPeeringConnectionId),
      accepter: awsVpcPeeringConnectionOptionsAccepterPropertyToTerraform(this._accepter.internalValue),
      requester: awsVpcPeeringConnectionOptionsRequesterPropertyToTerraform(this._requester.internalValue),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
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
      accepter: {
        value: awsVpcPeeringConnectionOptionsAccepterPropertyToHclTerraform(this._accepter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcPeeringConnectionOptions.AccepterPropertyList",
      },
      requester: {
        value: awsVpcPeeringConnectionOptionsRequesterPropertyToHclTerraform(this._requester.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcPeeringConnectionOptions.RequesterPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsVpcPeeringConnectionOptionsAccepterPropertyToTerraform(struct?: AwsVpcPeeringConnectionOptions.AccepterPropertyOutputReference | AwsVpcPeeringConnectionOptions.AccepterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_remote_vpc_dns_resolution: cdktn.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
  }
}


export function awsVpcPeeringConnectionOptionsAccepterPropertyToHclTerraform(struct?: AwsVpcPeeringConnectionOptions.AccepterPropertyOutputReference | AwsVpcPeeringConnectionOptions.AccepterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_remote_vpc_dns_resolution: {
      value: cdktn.booleanToHclTerraform(struct!.allowRemoteVpcDnsResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsVpcPeeringConnectionOptionsRequesterPropertyToTerraform(struct?: AwsVpcPeeringConnectionOptions.RequesterPropertyOutputReference | AwsVpcPeeringConnectionOptions.RequesterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_remote_vpc_dns_resolution: cdktn.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
  }
}


export function awsVpcPeeringConnectionOptionsRequesterPropertyToHclTerraform(struct?: AwsVpcPeeringConnectionOptions.RequesterPropertyOutputReference | AwsVpcPeeringConnectionOptions.RequesterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_remote_vpc_dns_resolution: {
      value: cdktn.booleanToHclTerraform(struct!.allowRemoteVpcDnsResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsVpcPeeringConnectionOptions {
export interface AccepterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options#allow_remote_vpc_dns_resolution AwsVpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktn.IResolvable;
}
export class AccepterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccepterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRemoteVpcDnsResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccepterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowRemoteVpcDnsResolution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
    }
  }

  // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
  private _allowRemoteVpcDnsResolution?: boolean | cdktn.IResolvable; 
  public get allowRemoteVpcDnsResolution() {
    return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
  }
  public set allowRemoteVpcDnsResolution(value: boolean | cdktn.IResolvable) {
    this._allowRemoteVpcDnsResolution = value;
  }
  public resetAllowRemoteVpcDnsResolution() {
    this._allowRemoteVpcDnsResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteVpcDnsResolutionInput() {
    return this._allowRemoteVpcDnsResolution;
  }
}
export interface RequesterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_peering_connection_options#allow_remote_vpc_dns_resolution AwsVpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktn.IResolvable;
}
export class RequesterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequesterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRemoteVpcDnsResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequesterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowRemoteVpcDnsResolution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
    }
  }

  // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
  private _allowRemoteVpcDnsResolution?: boolean | cdktn.IResolvable; 
  public get allowRemoteVpcDnsResolution() {
    return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
  }
  public set allowRemoteVpcDnsResolution(value: boolean | cdktn.IResolvable) {
    this._allowRemoteVpcDnsResolution = value;
  }
  public resetAllowRemoteVpcDnsResolution() {
    this._allowRemoteVpcDnsResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteVpcDnsResolutionInput() {
    return this._allowRemoteVpcDnsResolution;
  }
}
}
