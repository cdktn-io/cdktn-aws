// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_phone_number_contact_flow_association
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsConnectPhoneNumberContactFlowAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_phone_number_contact_flow_association#contact_flow_id AwsConnectPhoneNumberContactFlowAssociation#contact_flow_id}
  */
  readonly contactFlowId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_phone_number_contact_flow_association#instance_id AwsConnectPhoneNumberContactFlowAssociation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_phone_number_contact_flow_association#phone_number_id AwsConnectPhoneNumberContactFlowAssociation#phone_number_id}
  */
  readonly phoneNumberId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_phone_number_contact_flow_association#region AwsConnectPhoneNumberContactFlowAssociation#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_phone_number_contact_flow_association aws_connect_phone_number_contact_flow_association}
*/
export class AwsConnectPhoneNumberContactFlowAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_phone_number_contact_flow_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsConnectPhoneNumberContactFlowAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsConnectPhoneNumberContactFlowAssociation to import
  * @param importFromId The id of the existing AwsConnectPhoneNumberContactFlowAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_phone_number_contact_flow_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsConnectPhoneNumberContactFlowAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_connect_phone_number_contact_flow_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/connect_phone_number_contact_flow_association aws_connect_phone_number_contact_flow_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsConnectPhoneNumberContactFlowAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsConnectPhoneNumberContactFlowAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_phone_number_contact_flow_association',
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
    this._contactFlowId = config.contactFlowId;
    this._instanceId = config.instanceId;
    this._phoneNumberId = config.phoneNumberId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_flow_id - computed: false, optional: false, required: true
  private _contactFlowId?: string; 
  public get contactFlowId() {
    return this.getStringAttribute('contact_flow_id');
  }
  public set contactFlowId(value: string) {
    this._contactFlowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactFlowIdInput() {
    return this._contactFlowId;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // phone_number_id - computed: false, optional: false, required: true
  private _phoneNumberId?: string; 
  public get phoneNumberId() {
    return this.getStringAttribute('phone_number_id');
  }
  public set phoneNumberId(value: string) {
    this._phoneNumberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberIdInput() {
    return this._phoneNumberId;
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
      contact_flow_id: cdktn.stringToTerraform(this._contactFlowId),
      instance_id: cdktn.stringToTerraform(this._instanceId),
      phone_number_id: cdktn.stringToTerraform(this._phoneNumberId),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_flow_id: {
        value: cdktn.stringToHclTerraform(this._contactFlowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktn.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_number_id: {
        value: cdktn.stringToHclTerraform(this._phoneNumberId),
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
