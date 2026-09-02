// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfIamPolicyAssignmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment#assignment_name TfIamPolicyAssignment#assignment_name}
  */
  readonly assignmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment#assignment_status TfIamPolicyAssignment#assignment_status}
  */
  readonly assignmentStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id TfIamPolicyAssignment#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment#namespace TfIamPolicyAssignment#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment#policy_arn TfIamPolicyAssignment#policy_arn}
  */
  readonly policyArn?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment#region TfIamPolicyAssignment#region}
  */
  readonly region?: string;
  /**
  * identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment#identities TfIamPolicyAssignment#identities}
  */
  readonly identities?: TfIamPolicyAssignment.IdentitiesProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment aws_quicksight_iam_policy_assignment}
*/
export class TfIamPolicyAssignment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_iam_policy_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfIamPolicyAssignment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfIamPolicyAssignment to import
  * @param importFromId The id of the existing TfIamPolicyAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfIamPolicyAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_iam_policy_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment aws_quicksight_iam_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfIamPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: TfIamPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_iam_policy_assignment',
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
    this._assignmentName = config.assignmentName;
    this._assignmentStatus = config.assignmentStatus;
    this._awsAccountId = config.awsAccountId;
    this._namespace = config.namespace;
    this._policyArn = config.policyArn;
    this._region = config.region;
    this._identities.internalValue = config.identities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_id - computed: true, optional: false, required: false
  public get assignmentId() {
    return this.getStringAttribute('assignment_id');
  }

  // assignment_name - computed: false, optional: false, required: true
  private _assignmentName?: string; 
  public get assignmentName() {
    return this.getStringAttribute('assignment_name');
  }
  public set assignmentName(value: string) {
    this._assignmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentNameInput() {
    return this._assignmentName;
  }

  // assignment_status - computed: false, optional: false, required: true
  private _assignmentStatus?: string; 
  public get assignmentStatus() {
    return this.getStringAttribute('assignment_status');
  }
  public set assignmentStatus(value: string) {
    this._assignmentStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentStatusInput() {
    return this._assignmentStatus;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // policy_arn - computed: false, optional: true, required: false
  private _policyArn?: string; 
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  public resetPolicyArn() {
    this._policyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn;
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

  // identities - computed: false, optional: true, required: false
  private _identities = new TfIamPolicyAssignment.IdentitiesPropertyList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: TfIamPolicyAssignment.IdentitiesProperty[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignment_name: cdktn.stringToTerraform(this._assignmentName),
      assignment_status: cdktn.stringToTerraform(this._assignmentStatus),
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      policy_arn: cdktn.stringToTerraform(this._policyArn),
      region: cdktn.stringToTerraform(this._region),
      identities: cdktn.listMapper(tfIamPolicyAssignmentIdentitiesPropertyToTerraform, true)(this._identities.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_name: {
        value: cdktn.stringToHclTerraform(this._assignmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment_status: {
        value: cdktn.stringToHclTerraform(this._assignmentStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_arn: {
        value: cdktn.stringToHclTerraform(this._policyArn),
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
      identities: {
        value: cdktn.listMapperHcl(tfIamPolicyAssignmentIdentitiesPropertyToHclTerraform, true)(this._identities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIamPolicyAssignment.IdentitiesPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfIamPolicyAssignmentIdentitiesPropertyToTerraform(struct?: TfIamPolicyAssignment.IdentitiesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.group),
    user: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.user),
  }
}


export function tfIamPolicyAssignmentIdentitiesPropertyToHclTerraform(struct?: TfIamPolicyAssignment.IdentitiesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.user),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfIamPolicyAssignment {
export interface IdentitiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment#group TfIamPolicyAssignment#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_iam_policy_assignment#user TfIamPolicyAssignment#user}
  */
  readonly user?: string[];
}
export class IdentitiesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IdentitiesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentitiesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._user = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._user = value.user;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return cdktn.Fn.tolist(this.getListAttribute('group'));
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string[]; 
  public get user() {
    return cdktn.Fn.tolist(this.getListAttribute('user'));
  }
  public set user(value: string[]) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class IdentitiesPropertyList extends cdktn.ComplexList {
  public internalValue? : IdentitiesProperty[] | cdktn.IResolvable

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
  public get(index: number): IdentitiesPropertyOutputReference {
    return new IdentitiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
