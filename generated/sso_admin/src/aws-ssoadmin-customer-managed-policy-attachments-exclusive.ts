// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#instance_arn AwsSsoadminCustomerManagedPolicyAttachmentsExclusive#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#permission_set_arn AwsSsoadminCustomerManagedPolicyAttachmentsExclusive#permission_set_arn}
  */
  readonly permissionSetArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#region AwsSsoadminCustomerManagedPolicyAttachmentsExclusive#region}
  */
  readonly region?: string;
  /**
  * customer_managed_policy_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#customer_managed_policy_reference AwsSsoadminCustomerManagedPolicyAttachmentsExclusive#customer_managed_policy_reference}
  */
  readonly customerManagedPolicyReference?: AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.CustomerManagedPolicyReferenceProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#timeouts AwsSsoadminCustomerManagedPolicyAttachmentsExclusive#timeouts}
  */
  readonly timeouts?: AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive aws_ssoadmin_customer_managed_policy_attachments_exclusive}
*/
export class AwsSsoadminCustomerManagedPolicyAttachmentsExclusive extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_customer_managed_policy_attachments_exclusive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSsoadminCustomerManagedPolicyAttachmentsExclusive resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSsoadminCustomerManagedPolicyAttachmentsExclusive to import
  * @param importFromId The id of the existing AwsSsoadminCustomerManagedPolicyAttachmentsExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSsoadminCustomerManagedPolicyAttachmentsExclusive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_customer_managed_policy_attachments_exclusive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive aws_ssoadmin_customer_managed_policy_attachments_exclusive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_customer_managed_policy_attachments_exclusive',
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
    this._instanceArn = config.instanceArn;
    this._permissionSetArn = config.permissionSetArn;
    this._region = config.region;
    this._customerManagedPolicyReference.internalValue = config.customerManagedPolicyReference;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // permission_set_arn - computed: false, optional: false, required: true
  private _permissionSetArn?: string; 
  public get permissionSetArn() {
    return this.getStringAttribute('permission_set_arn');
  }
  public set permissionSetArn(value: string) {
    this._permissionSetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetArnInput() {
    return this._permissionSetArn;
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

  // customer_managed_policy_reference - computed: false, optional: true, required: false
  private _customerManagedPolicyReference = new AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.CustomerManagedPolicyReferencePropertyList(this, "customer_managed_policy_reference", false);
  public get customerManagedPolicyReference() {
    return this._customerManagedPolicyReference;
  }
  public putCustomerManagedPolicyReference(value: AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.CustomerManagedPolicyReferenceProperty[] | cdktn.IResolvable) {
    this._customerManagedPolicyReference.internalValue = value;
  }
  public resetCustomerManagedPolicyReference() {
    this._customerManagedPolicyReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedPolicyReferenceInput() {
    return this._customerManagedPolicyReference.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.TimeoutsProperty) {
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
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      permission_set_arn: cdktn.stringToTerraform(this._permissionSetArn),
      region: cdktn.stringToTerraform(this._region),
      customer_managed_policy_reference: cdktn.listMapper(awsSsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferencePropertyToTerraform, true)(this._customerManagedPolicyReference.internalValue),
      timeouts: awsSsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_set_arn: {
        value: cdktn.stringToHclTerraform(this._permissionSetArn),
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
      customer_managed_policy_reference: {
        value: cdktn.listMapperHcl(awsSsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferencePropertyToHclTerraform, true)(this._customerManagedPolicyReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.CustomerManagedPolicyReferencePropertyList",
      },
      timeouts: {
        value: awsSsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferencePropertyToTerraform(struct?: AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.CustomerManagedPolicyReferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsSsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferencePropertyToHclTerraform(struct?: AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.CustomerManagedPolicyReferenceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsPropertyToTerraform(struct?: AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsSsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsPropertyToHclTerraform(struct?: AwsSsoadminCustomerManagedPolicyAttachmentsExclusive.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsSsoadminCustomerManagedPolicyAttachmentsExclusive {
export interface CustomerManagedPolicyReferenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#name AwsSsoadminCustomerManagedPolicyAttachmentsExclusive#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#path AwsSsoadminCustomerManagedPolicyAttachmentsExclusive#path}
  */
  readonly path?: string;
}
export class CustomerManagedPolicyReferencePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerManagedPolicyReferenceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerManagedPolicyReferenceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class CustomerManagedPolicyReferencePropertyList extends cdktn.ComplexList {
  public internalValue? : CustomerManagedPolicyReferenceProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomerManagedPolicyReferencePropertyOutputReference {
    return new CustomerManagedPolicyReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#create AwsSsoadminCustomerManagedPolicyAttachmentsExclusive#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#update AwsSsoadminCustomerManagedPolicyAttachmentsExclusive#update}
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
