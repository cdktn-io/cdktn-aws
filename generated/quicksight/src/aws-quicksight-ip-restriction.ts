// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_ip_restriction
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsIpRestrictionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_ip_restriction#aws_account_id AwsIpRestriction#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_ip_restriction#enabled AwsIpRestriction#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_ip_restriction#ip_restriction_rule_map AwsIpRestriction#ip_restriction_rule_map}
  */
  readonly ipRestrictionRuleMap?: { [key: string]: string };
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_ip_restriction#region AwsIpRestriction#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_ip_restriction#vpc_endpoint_id_restriction_rule_map AwsIpRestriction#vpc_endpoint_id_restriction_rule_map}
  */
  readonly vpcEndpointIdRestrictionRuleMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_ip_restriction#vpc_id_restriction_rule_map AwsIpRestriction#vpc_id_restriction_rule_map}
  */
  readonly vpcIdRestrictionRuleMap?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_ip_restriction aws_quicksight_ip_restriction}
*/
export class AwsIpRestriction extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_ip_restriction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsIpRestriction resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsIpRestriction to import
  * @param importFromId The id of the existing AwsIpRestriction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_ip_restriction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsIpRestriction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_ip_restriction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_ip_restriction aws_quicksight_ip_restriction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsIpRestrictionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsIpRestrictionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_ip_restriction',
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
    this._awsAccountId = config.awsAccountId;
    this._enabled = config.enabled;
    this._ipRestrictionRuleMap = config.ipRestrictionRuleMap;
    this._region = config.region;
    this._vpcEndpointIdRestrictionRuleMap = config.vpcEndpointIdRestrictionRuleMap;
    this._vpcIdRestrictionRuleMap = config.vpcIdRestrictionRuleMap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ip_restriction_rule_map - computed: false, optional: true, required: false
  private _ipRestrictionRuleMap?: { [key: string]: string }; 
  public get ipRestrictionRuleMap() {
    return this.getStringMapAttribute('ip_restriction_rule_map');
  }
  public set ipRestrictionRuleMap(value: { [key: string]: string }) {
    this._ipRestrictionRuleMap = value;
  }
  public resetIpRestrictionRuleMap() {
    this._ipRestrictionRuleMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionRuleMapInput() {
    return this._ipRestrictionRuleMap;
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

  // vpc_endpoint_id_restriction_rule_map - computed: false, optional: true, required: false
  private _vpcEndpointIdRestrictionRuleMap?: { [key: string]: string }; 
  public get vpcEndpointIdRestrictionRuleMap() {
    return this.getStringMapAttribute('vpc_endpoint_id_restriction_rule_map');
  }
  public set vpcEndpointIdRestrictionRuleMap(value: { [key: string]: string }) {
    this._vpcEndpointIdRestrictionRuleMap = value;
  }
  public resetVpcEndpointIdRestrictionRuleMap() {
    this._vpcEndpointIdRestrictionRuleMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdRestrictionRuleMapInput() {
    return this._vpcEndpointIdRestrictionRuleMap;
  }

  // vpc_id_restriction_rule_map - computed: false, optional: true, required: false
  private _vpcIdRestrictionRuleMap?: { [key: string]: string }; 
  public get vpcIdRestrictionRuleMap() {
    return this.getStringMapAttribute('vpc_id_restriction_rule_map');
  }
  public set vpcIdRestrictionRuleMap(value: { [key: string]: string }) {
    this._vpcIdRestrictionRuleMap = value;
  }
  public resetVpcIdRestrictionRuleMap() {
    this._vpcIdRestrictionRuleMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdRestrictionRuleMapInput() {
    return this._vpcIdRestrictionRuleMap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      enabled: cdktn.booleanToTerraform(this._enabled),
      ip_restriction_rule_map: cdktn.hashMapper(cdktn.stringToTerraform)(this._ipRestrictionRuleMap),
      region: cdktn.stringToTerraform(this._region),
      vpc_endpoint_id_restriction_rule_map: cdktn.hashMapper(cdktn.stringToTerraform)(this._vpcEndpointIdRestrictionRuleMap),
      vpc_id_restriction_rule_map: cdktn.hashMapper(cdktn.stringToTerraform)(this._vpcIdRestrictionRuleMap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_restriction_rule_map: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._ipRestrictionRuleMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_endpoint_id_restriction_rule_map: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._vpcEndpointIdRestrictionRuleMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id_restriction_rule_map: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._vpcIdRestrictionRuleMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
