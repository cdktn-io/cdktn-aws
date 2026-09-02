// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/organizations_organization
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfOrganizationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/organizations_organization#aws_service_access_principals TfOrganization#aws_service_access_principals}
  */
  readonly awsServiceAccessPrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/organizations_organization#enabled_policy_types TfOrganization#enabled_policy_types}
  */
  readonly enabledPolicyTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/organizations_organization#feature_set TfOrganization#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/organizations_organization#id TfOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/organizations_organization#return_organization_only TfOrganization#return_organization_only}
  */
  readonly returnOrganizationOnly?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/organizations_organization aws_organizations_organization}
*/
export class TfOrganization extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_organizations_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfOrganization resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfOrganization to import
  * @param importFromId The id of the existing TfOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/organizations_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_organizations_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/organizations_organization aws_organizations_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfOrganizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TfOrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_organization',
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
    this._awsServiceAccessPrincipals = config.awsServiceAccessPrincipals;
    this._enabledPolicyTypes = config.enabledPolicyTypes;
    this._featureSet = config.featureSet;
    this._id = config.id;
    this._returnOrganizationOnly = config.returnOrganizationOnly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: true, optional: false, required: false
  private _accounts = new TfOrganization.AccountsPropertyList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_service_access_principals - computed: false, optional: true, required: false
  private _awsServiceAccessPrincipals?: string[]; 
  public get awsServiceAccessPrincipals() {
    return cdktn.Fn.tolist(this.getListAttribute('aws_service_access_principals'));
  }
  public set awsServiceAccessPrincipals(value: string[]) {
    this._awsServiceAccessPrincipals = value;
  }
  public resetAwsServiceAccessPrincipals() {
    this._awsServiceAccessPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceAccessPrincipalsInput() {
    return this._awsServiceAccessPrincipals;
  }

  // enabled_policy_types - computed: false, optional: true, required: false
  private _enabledPolicyTypes?: string[]; 
  public get enabledPolicyTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('enabled_policy_types'));
  }
  public set enabledPolicyTypes(value: string[]) {
    this._enabledPolicyTypes = value;
  }
  public resetEnabledPolicyTypes() {
    this._enabledPolicyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledPolicyTypesInput() {
    return this._enabledPolicyTypes;
  }

  // feature_set - computed: false, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
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

  // master_account_arn - computed: true, optional: false, required: false
  public get masterAccountArn() {
    return this.getStringAttribute('master_account_arn');
  }

  // master_account_email - computed: true, optional: false, required: false
  public get masterAccountEmail() {
    return this.getStringAttribute('master_account_email');
  }

  // master_account_id - computed: true, optional: false, required: false
  public get masterAccountId() {
    return this.getStringAttribute('master_account_id');
  }

  // master_account_name - computed: true, optional: false, required: false
  public get masterAccountName() {
    return this.getStringAttribute('master_account_name');
  }

  // non_master_accounts - computed: true, optional: false, required: false
  private _nonMasterAccounts = new TfOrganization.NonMasterAccountsPropertyList(this, "non_master_accounts", false);
  public get nonMasterAccounts() {
    return this._nonMasterAccounts;
  }

  // return_organization_only - computed: false, optional: true, required: false
  private _returnOrganizationOnly?: boolean | cdktn.IResolvable; 
  public get returnOrganizationOnly() {
    return this.getBooleanAttribute('return_organization_only');
  }
  public set returnOrganizationOnly(value: boolean | cdktn.IResolvable) {
    this._returnOrganizationOnly = value;
  }
  public resetReturnOrganizationOnly() {
    this._returnOrganizationOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnOrganizationOnlyInput() {
    return this._returnOrganizationOnly;
  }

  // roots - computed: true, optional: false, required: false
  private _roots = new TfOrganization.RootsPropertyList(this, "roots", false);
  public get roots() {
    return this._roots;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_service_access_principals: cdktn.listMapper(cdktn.stringToTerraform, false)(this._awsServiceAccessPrincipals),
      enabled_policy_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enabledPolicyTypes),
      feature_set: cdktn.stringToTerraform(this._featureSet),
      id: cdktn.stringToTerraform(this._id),
      return_organization_only: cdktn.booleanToTerraform(this._returnOrganizationOnly),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_service_access_principals: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._awsServiceAccessPrincipals),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled_policy_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._enabledPolicyTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      feature_set: {
        value: cdktn.stringToHclTerraform(this._featureSet),
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
      return_organization_only: {
        value: cdktn.booleanToHclTerraform(this._returnOrganizationOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfOrganizationAccountsPropertyToTerraform(struct?: TfOrganization.AccountsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOrganizationAccountsPropertyToHclTerraform(struct?: TfOrganization.AccountsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOrganizationNonMasterAccountsPropertyToTerraform(struct?: TfOrganization.NonMasterAccountsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOrganizationNonMasterAccountsPropertyToHclTerraform(struct?: TfOrganization.NonMasterAccountsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOrganizationPolicyTypesPropertyToTerraform(struct?: TfOrganization.PolicyTypesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOrganizationPolicyTypesPropertyToHclTerraform(struct?: TfOrganization.PolicyTypesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOrganizationRootsPropertyToTerraform(struct?: TfOrganization.RootsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOrganizationRootsPropertyToHclTerraform(struct?: TfOrganization.RootsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export namespace TfOrganization {
export interface AccountsProperty {
}
export class AccountsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccountsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // joined_method - computed: true, optional: false, required: false
  public get joinedMethod() {
    return this.getStringAttribute('joined_method');
  }

  // joined_timestamp - computed: true, optional: false, required: false
  public get joinedTimestamp() {
    return this.getStringAttribute('joined_timestamp');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class AccountsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): AccountsPropertyOutputReference {
    return new AccountsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NonMasterAccountsProperty {
}
export class NonMasterAccountsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NonMasterAccountsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NonMasterAccountsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // joined_method - computed: true, optional: false, required: false
  public get joinedMethod() {
    return this.getStringAttribute('joined_method');
  }

  // joined_timestamp - computed: true, optional: false, required: false
  public get joinedTimestamp() {
    return this.getStringAttribute('joined_timestamp');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class NonMasterAccountsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): NonMasterAccountsPropertyOutputReference {
    return new NonMasterAccountsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTypesProperty {
}
export class PolicyTypesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PolicyTypesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTypesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PolicyTypesPropertyList extends cdktn.ComplexList {

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
  public get(index: number): PolicyTypesPropertyOutputReference {
    return new PolicyTypesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RootsProperty {
}
export class RootsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RootsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RootsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_types - computed: true, optional: false, required: false
  private _policyTypes = new PolicyTypesPropertyList(this, "policy_types", false);
  public get policyTypes() {
    return this._policyTypes;
  }
}

export class RootsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): RootsPropertyOutputReference {
    return new RootsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
