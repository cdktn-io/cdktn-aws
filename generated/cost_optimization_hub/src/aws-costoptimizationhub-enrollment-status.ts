// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/costoptimizationhub_enrollment_status
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfEnrollmentStatusConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/costoptimizationhub_enrollment_status#include_member_accounts TfEnrollmentStatus#include_member_accounts}
  */
  readonly includeMemberAccounts?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/costoptimizationhub_enrollment_status aws_costoptimizationhub_enrollment_status}
*/
export class TfEnrollmentStatus extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_costoptimizationhub_enrollment_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfEnrollmentStatus resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfEnrollmentStatus to import
  * @param importFromId The id of the existing TfEnrollmentStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/costoptimizationhub_enrollment_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfEnrollmentStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_costoptimizationhub_enrollment_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/costoptimizationhub_enrollment_status aws_costoptimizationhub_enrollment_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfEnrollmentStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TfEnrollmentStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_costoptimizationhub_enrollment_status',
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
    this._includeMemberAccounts = config.includeMemberAccounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_member_accounts - computed: true, optional: true, required: false
  private _includeMemberAccounts?: boolean | cdktn.IResolvable; 
  public get includeMemberAccounts() {
    return this.getBooleanAttribute('include_member_accounts');
  }
  public set includeMemberAccounts(value: boolean | cdktn.IResolvable) {
    this._includeMemberAccounts = value;
  }
  public resetIncludeMemberAccounts() {
    this._includeMemberAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMemberAccountsInput() {
    return this._includeMemberAccounts;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_member_accounts: cdktn.booleanToTerraform(this._includeMemberAccounts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_member_accounts: {
        value: cdktn.booleanToHclTerraform(this._includeMemberAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
