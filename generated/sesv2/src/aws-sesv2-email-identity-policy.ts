// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_email_identity_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsEmailIdentityPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_email_identity_policy#email_identity AwsEmailIdentityPolicy#email_identity}
  */
  readonly emailIdentity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_email_identity_policy#id AwsEmailIdentityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_email_identity_policy#policy AwsEmailIdentityPolicy#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_email_identity_policy#policy_name AwsEmailIdentityPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_email_identity_policy#region AwsEmailIdentityPolicy#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_email_identity_policy aws_sesv2_email_identity_policy}
*/
export class AwsEmailIdentityPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_email_identity_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsEmailIdentityPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsEmailIdentityPolicy to import
  * @param importFromId The id of the existing AwsEmailIdentityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_email_identity_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsEmailIdentityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sesv2_email_identity_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_email_identity_policy aws_sesv2_email_identity_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsEmailIdentityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsEmailIdentityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_email_identity_policy',
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
    this._emailIdentity = config.emailIdentity;
    this._id = config.id;
    this._policy = config.policy;
    this._policyName = config.policyName;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_identity - computed: false, optional: false, required: true
  private _emailIdentity?: string; 
  public get emailIdentity() {
    return this.getStringAttribute('email_identity');
  }
  public set emailIdentity(value: string) {
    this._emailIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdentityInput() {
    return this._emailIdentity;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_identity: cdktn.stringToTerraform(this._emailIdentity),
      id: cdktn.stringToTerraform(this._id),
      policy: cdktn.stringToTerraform(this._policy),
      policy_name: cdktn.stringToTerraform(this._policyName),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_identity: {
        value: cdktn.stringToHclTerraform(this._emailIdentity),
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
      policy: {
        value: cdktn.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktn.stringToHclTerraform(this._policyName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
