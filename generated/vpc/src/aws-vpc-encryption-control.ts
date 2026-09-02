// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfEncryptionControlConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#egress_only_internet_gateway_exclusion TfEncryptionControl#egress_only_internet_gateway_exclusion}
  */
  readonly egressOnlyInternetGatewayExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#elastic_file_system_exclusion TfEncryptionControl#elastic_file_system_exclusion}
  */
  readonly elasticFileSystemExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#internet_gateway_exclusion TfEncryptionControl#internet_gateway_exclusion}
  */
  readonly internetGatewayExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#lambda_exclusion TfEncryptionControl#lambda_exclusion}
  */
  readonly lambdaExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#mode TfEncryptionControl#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#nat_gateway_exclusion TfEncryptionControl#nat_gateway_exclusion}
  */
  readonly natGatewayExclusion?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#region TfEncryptionControl#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#tags TfEncryptionControl#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#virtual_private_gateway_exclusion TfEncryptionControl#virtual_private_gateway_exclusion}
  */
  readonly virtualPrivateGatewayExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#vpc_id TfEncryptionControl#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#vpc_lattice_exclusion TfEncryptionControl#vpc_lattice_exclusion}
  */
  readonly vpcLatticeExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#vpc_peering_exclusion TfEncryptionControl#vpc_peering_exclusion}
  */
  readonly vpcPeeringExclusion?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#timeouts TfEncryptionControl#timeouts}
  */
  readonly timeouts?: TfEncryptionControl.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control aws_vpc_encryption_control}
*/
export class TfEncryptionControl extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_encryption_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfEncryptionControl resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfEncryptionControl to import
  * @param importFromId The id of the existing TfEncryptionControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfEncryptionControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_encryption_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control aws_vpc_encryption_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfEncryptionControlConfig
  */
  public constructor(scope: Construct, id: string, config: TfEncryptionControlConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_encryption_control',
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
    this._egressOnlyInternetGatewayExclusion = config.egressOnlyInternetGatewayExclusion;
    this._elasticFileSystemExclusion = config.elasticFileSystemExclusion;
    this._internetGatewayExclusion = config.internetGatewayExclusion;
    this._lambdaExclusion = config.lambdaExclusion;
    this._mode = config.mode;
    this._natGatewayExclusion = config.natGatewayExclusion;
    this._region = config.region;
    this._tags = config.tags;
    this._virtualPrivateGatewayExclusion = config.virtualPrivateGatewayExclusion;
    this._vpcId = config.vpcId;
    this._vpcLatticeExclusion = config.vpcLatticeExclusion;
    this._vpcPeeringExclusion = config.vpcPeeringExclusion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // egress_only_internet_gateway_exclusion - computed: true, optional: true, required: false
  private _egressOnlyInternetGatewayExclusion?: string; 
  public get egressOnlyInternetGatewayExclusion() {
    return this.getStringAttribute('egress_only_internet_gateway_exclusion');
  }
  public set egressOnlyInternetGatewayExclusion(value: string) {
    this._egressOnlyInternetGatewayExclusion = value;
  }
  public resetEgressOnlyInternetGatewayExclusion() {
    this._egressOnlyInternetGatewayExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressOnlyInternetGatewayExclusionInput() {
    return this._egressOnlyInternetGatewayExclusion;
  }

  // elastic_file_system_exclusion - computed: true, optional: true, required: false
  private _elasticFileSystemExclusion?: string; 
  public get elasticFileSystemExclusion() {
    return this.getStringAttribute('elastic_file_system_exclusion');
  }
  public set elasticFileSystemExclusion(value: string) {
    this._elasticFileSystemExclusion = value;
  }
  public resetElasticFileSystemExclusion() {
    this._elasticFileSystemExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticFileSystemExclusionInput() {
    return this._elasticFileSystemExclusion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_gateway_exclusion - computed: true, optional: true, required: false
  private _internetGatewayExclusion?: string; 
  public get internetGatewayExclusion() {
    return this.getStringAttribute('internet_gateway_exclusion');
  }
  public set internetGatewayExclusion(value: string) {
    this._internetGatewayExclusion = value;
  }
  public resetInternetGatewayExclusion() {
    this._internetGatewayExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayExclusionInput() {
    return this._internetGatewayExclusion;
  }

  // lambda_exclusion - computed: true, optional: true, required: false
  private _lambdaExclusion?: string; 
  public get lambdaExclusion() {
    return this.getStringAttribute('lambda_exclusion');
  }
  public set lambdaExclusion(value: string) {
    this._lambdaExclusion = value;
  }
  public resetLambdaExclusion() {
    this._lambdaExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaExclusionInput() {
    return this._lambdaExclusion;
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

  // nat_gateway_exclusion - computed: true, optional: true, required: false
  private _natGatewayExclusion?: string; 
  public get natGatewayExclusion() {
    return this.getStringAttribute('nat_gateway_exclusion');
  }
  public set natGatewayExclusion(value: string) {
    this._natGatewayExclusion = value;
  }
  public resetNatGatewayExclusion() {
    this._natGatewayExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayExclusionInput() {
    return this._natGatewayExclusion;
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

  // resource_exclusions - computed: true, optional: false, required: false
  private _resourceExclusions = new TfEncryptionControl.ResourceExclusionsPropertyOutputReference(this, "resource_exclusions");
  public get resourceExclusions() {
    return this._resourceExclusions;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
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

  // virtual_private_gateway_exclusion - computed: true, optional: true, required: false
  private _virtualPrivateGatewayExclusion?: string; 
  public get virtualPrivateGatewayExclusion() {
    return this.getStringAttribute('virtual_private_gateway_exclusion');
  }
  public set virtualPrivateGatewayExclusion(value: string) {
    this._virtualPrivateGatewayExclusion = value;
  }
  public resetVirtualPrivateGatewayExclusion() {
    this._virtualPrivateGatewayExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPrivateGatewayExclusionInput() {
    return this._virtualPrivateGatewayExclusion;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_lattice_exclusion - computed: true, optional: true, required: false
  private _vpcLatticeExclusion?: string; 
  public get vpcLatticeExclusion() {
    return this.getStringAttribute('vpc_lattice_exclusion');
  }
  public set vpcLatticeExclusion(value: string) {
    this._vpcLatticeExclusion = value;
  }
  public resetVpcLatticeExclusion() {
    this._vpcLatticeExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcLatticeExclusionInput() {
    return this._vpcLatticeExclusion;
  }

  // vpc_peering_exclusion - computed: true, optional: true, required: false
  private _vpcPeeringExclusion?: string; 
  public get vpcPeeringExclusion() {
    return this.getStringAttribute('vpc_peering_exclusion');
  }
  public set vpcPeeringExclusion(value: string) {
    this._vpcPeeringExclusion = value;
  }
  public resetVpcPeeringExclusion() {
    this._vpcPeeringExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringExclusionInput() {
    return this._vpcPeeringExclusion;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfEncryptionControl.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfEncryptionControl.TimeoutsProperty) {
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
      egress_only_internet_gateway_exclusion: cdktn.stringToTerraform(this._egressOnlyInternetGatewayExclusion),
      elastic_file_system_exclusion: cdktn.stringToTerraform(this._elasticFileSystemExclusion),
      internet_gateway_exclusion: cdktn.stringToTerraform(this._internetGatewayExclusion),
      lambda_exclusion: cdktn.stringToTerraform(this._lambdaExclusion),
      mode: cdktn.stringToTerraform(this._mode),
      nat_gateway_exclusion: cdktn.stringToTerraform(this._natGatewayExclusion),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      virtual_private_gateway_exclusion: cdktn.stringToTerraform(this._virtualPrivateGatewayExclusion),
      vpc_id: cdktn.stringToTerraform(this._vpcId),
      vpc_lattice_exclusion: cdktn.stringToTerraform(this._vpcLatticeExclusion),
      vpc_peering_exclusion: cdktn.stringToTerraform(this._vpcPeeringExclusion),
      timeouts: tfEncryptionControlTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      egress_only_internet_gateway_exclusion: {
        value: cdktn.stringToHclTerraform(this._egressOnlyInternetGatewayExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elastic_file_system_exclusion: {
        value: cdktn.stringToHclTerraform(this._elasticFileSystemExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_gateway_exclusion: {
        value: cdktn.stringToHclTerraform(this._internetGatewayExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_exclusion: {
        value: cdktn.stringToHclTerraform(this._lambdaExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktn.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_gateway_exclusion: {
        value: cdktn.stringToHclTerraform(this._natGatewayExclusion),
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
      virtual_private_gateway_exclusion: {
        value: cdktn.stringToHclTerraform(this._virtualPrivateGatewayExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktn.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_lattice_exclusion: {
        value: cdktn.stringToHclTerraform(this._vpcLatticeExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peering_exclusion: {
        value: cdktn.stringToHclTerraform(this._vpcPeeringExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: tfEncryptionControlTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfEncryptionControl.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfEncryptionControlEgressOnlyInternetGatewayPropertyToTerraform(struct?: TfEncryptionControl.EgressOnlyInternetGatewayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEncryptionControlEgressOnlyInternetGatewayPropertyToHclTerraform(struct?: TfEncryptionControl.EgressOnlyInternetGatewayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEncryptionControlElasticFileSystemPropertyToTerraform(struct?: TfEncryptionControl.ElasticFileSystemProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEncryptionControlElasticFileSystemPropertyToHclTerraform(struct?: TfEncryptionControl.ElasticFileSystemProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEncryptionControlInternetGatewayPropertyToTerraform(struct?: TfEncryptionControl.InternetGatewayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEncryptionControlInternetGatewayPropertyToHclTerraform(struct?: TfEncryptionControl.InternetGatewayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEncryptionControlLambdaPropertyToTerraform(struct?: TfEncryptionControl.LambdaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEncryptionControlLambdaPropertyToHclTerraform(struct?: TfEncryptionControl.LambdaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEncryptionControlNatGatewayPropertyToTerraform(struct?: TfEncryptionControl.NatGatewayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEncryptionControlNatGatewayPropertyToHclTerraform(struct?: TfEncryptionControl.NatGatewayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEncryptionControlVirtualPrivateGatewayPropertyToTerraform(struct?: TfEncryptionControl.VirtualPrivateGatewayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEncryptionControlVirtualPrivateGatewayPropertyToHclTerraform(struct?: TfEncryptionControl.VirtualPrivateGatewayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEncryptionControlVpcLatticePropertyToTerraform(struct?: TfEncryptionControl.VpcLatticeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEncryptionControlVpcLatticePropertyToHclTerraform(struct?: TfEncryptionControl.VpcLatticeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEncryptionControlVpcPeeringPropertyToTerraform(struct?: TfEncryptionControl.VpcPeeringProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEncryptionControlVpcPeeringPropertyToHclTerraform(struct?: TfEncryptionControl.VpcPeeringProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEncryptionControlResourceExclusionsPropertyToTerraform(struct?: TfEncryptionControl.ResourceExclusionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEncryptionControlResourceExclusionsPropertyToHclTerraform(struct?: TfEncryptionControl.ResourceExclusionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEncryptionControlTimeoutsPropertyToTerraform(struct?: TfEncryptionControl.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfEncryptionControlTimeoutsPropertyToHclTerraform(struct?: TfEncryptionControl.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfEncryptionControl {
export interface EgressOnlyInternetGatewayProperty {
}
export class EgressOnlyInternetGatewayPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EgressOnlyInternetGatewayProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EgressOnlyInternetGatewayProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface ElasticFileSystemProperty {
}
export class ElasticFileSystemPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticFileSystemProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticFileSystemProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface InternetGatewayProperty {
}
export class InternetGatewayPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InternetGatewayProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetGatewayProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface LambdaProperty {
}
export class LambdaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface NatGatewayProperty {
}
export class NatGatewayPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatGatewayProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatGatewayProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VirtualPrivateGatewayProperty {
}
export class VirtualPrivateGatewayPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualPrivateGatewayProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualPrivateGatewayProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VpcLatticeProperty {
}
export class VpcLatticePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcLatticeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcLatticeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface VpcPeeringProperty {
}
export class VpcPeeringPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcPeeringProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface ResourceExclusionsProperty {
}
export class ResourceExclusionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceExclusionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceExclusionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_only_internet_gateway - computed: true, optional: false, required: false
  private _egressOnlyInternetGateway = new EgressOnlyInternetGatewayPropertyOutputReference(this, "egress_only_internet_gateway");
  public get egressOnlyInternetGateway() {
    return this._egressOnlyInternetGateway;
  }

  // elastic_file_system - computed: true, optional: false, required: false
  private _elasticFileSystem = new ElasticFileSystemPropertyOutputReference(this, "elastic_file_system");
  public get elasticFileSystem() {
    return this._elasticFileSystem;
  }

  // internet_gateway - computed: true, optional: false, required: false
  private _internetGateway = new InternetGatewayPropertyOutputReference(this, "internet_gateway");
  public get internetGateway() {
    return this._internetGateway;
  }

  // lambda - computed: true, optional: false, required: false
  private _lambda = new LambdaPropertyOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }

  // nat_gateway - computed: true, optional: false, required: false
  private _natGateway = new NatGatewayPropertyOutputReference(this, "nat_gateway");
  public get natGateway() {
    return this._natGateway;
  }

  // virtual_private_gateway - computed: true, optional: false, required: false
  private _virtualPrivateGateway = new VirtualPrivateGatewayPropertyOutputReference(this, "virtual_private_gateway");
  public get virtualPrivateGateway() {
    return this._virtualPrivateGateway;
  }

  // vpc_lattice - computed: true, optional: false, required: false
  private _vpcLattice = new VpcLatticePropertyOutputReference(this, "vpc_lattice");
  public get vpcLattice() {
    return this._vpcLattice;
  }

  // vpc_peering - computed: true, optional: false, required: false
  private _vpcPeering = new VpcPeeringPropertyOutputReference(this, "vpc_peering");
  public get vpcPeering() {
    return this._vpcPeering;
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#create TfEncryptionControl#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#delete TfEncryptionControl#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/vpc_encryption_control#update TfEncryptionControl#update}
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
