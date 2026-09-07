// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsPermissionsBoundaryAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#id AwsPermissionsBoundaryAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#instance_arn AwsPermissionsBoundaryAttachment#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#permission_set_arn AwsPermissionsBoundaryAttachment#permission_set_arn}
  */
  readonly permissionSetArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#region AwsPermissionsBoundaryAttachment#region}
  */
  readonly region?: string;
  /**
  * permissions_boundary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#permissions_boundary AwsPermissionsBoundaryAttachment#permissions_boundary}
  */
  readonly permissionsBoundary: AwsPermissionsBoundaryAttachment.PermissionsBoundaryProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#timeouts AwsPermissionsBoundaryAttachment#timeouts}
  */
  readonly timeouts?: AwsPermissionsBoundaryAttachment.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment aws_ssoadmin_permissions_boundary_attachment}
*/
export class AwsPermissionsBoundaryAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_permissions_boundary_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsPermissionsBoundaryAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsPermissionsBoundaryAttachment to import
  * @param importFromId The id of the existing AwsPermissionsBoundaryAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsPermissionsBoundaryAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_permissions_boundary_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment aws_ssoadmin_permissions_boundary_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsPermissionsBoundaryAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AwsPermissionsBoundaryAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_permissions_boundary_attachment',
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
    this._instanceArn = config.instanceArn;
    this._permissionSetArn = config.permissionSetArn;
    this._region = config.region;
    this._permissionsBoundary.internalValue = config.permissionsBoundary;
    this._timeouts.internalValue = config.timeouts;
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

  // permissions_boundary - computed: false, optional: false, required: true
  private _permissionsBoundary = new AwsPermissionsBoundaryAttachment.PermissionsBoundaryPropertyOutputReference(this, "permissions_boundary");
  public get permissionsBoundary() {
    return this._permissionsBoundary;
  }
  public putPermissionsBoundary(value: AwsPermissionsBoundaryAttachment.PermissionsBoundaryProperty) {
    this._permissionsBoundary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryInput() {
    return this._permissionsBoundary.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsPermissionsBoundaryAttachment.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsPermissionsBoundaryAttachment.TimeoutsProperty) {
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
      id: cdktn.stringToTerraform(this._id),
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      permission_set_arn: cdktn.stringToTerraform(this._permissionSetArn),
      region: cdktn.stringToTerraform(this._region),
      permissions_boundary: awsPermissionsBoundaryAttachmentPermissionsBoundaryPropertyToTerraform(this._permissionsBoundary.internalValue),
      timeouts: awsPermissionsBoundaryAttachmentTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      permissions_boundary: {
        value: awsPermissionsBoundaryAttachmentPermissionsBoundaryPropertyToHclTerraform(this._permissionsBoundary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPermissionsBoundaryAttachment.PermissionsBoundaryPropertyList",
      },
      timeouts: {
        value: awsPermissionsBoundaryAttachmentTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsPermissionsBoundaryAttachment.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsPermissionsBoundaryAttachmentCustomerManagedPolicyReferencePropertyToTerraform(struct?: AwsPermissionsBoundaryAttachment.CustomerManagedPolicyReferencePropertyOutputReference | AwsPermissionsBoundaryAttachment.CustomerManagedPolicyReferenceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsPermissionsBoundaryAttachmentCustomerManagedPolicyReferencePropertyToHclTerraform(struct?: AwsPermissionsBoundaryAttachment.CustomerManagedPolicyReferencePropertyOutputReference | AwsPermissionsBoundaryAttachment.CustomerManagedPolicyReferenceProperty): any {
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


export function awsPermissionsBoundaryAttachmentPermissionsBoundaryPropertyToTerraform(struct?: AwsPermissionsBoundaryAttachment.PermissionsBoundaryPropertyOutputReference | AwsPermissionsBoundaryAttachment.PermissionsBoundaryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_policy_arn: cdktn.stringToTerraform(struct!.managedPolicyArn),
    customer_managed_policy_reference: awsPermissionsBoundaryAttachmentCustomerManagedPolicyReferencePropertyToTerraform(struct!.customerManagedPolicyReference),
  }
}


export function awsPermissionsBoundaryAttachmentPermissionsBoundaryPropertyToHclTerraform(struct?: AwsPermissionsBoundaryAttachment.PermissionsBoundaryPropertyOutputReference | AwsPermissionsBoundaryAttachment.PermissionsBoundaryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_policy_arn: {
      value: cdktn.stringToHclTerraform(struct!.managedPolicyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_managed_policy_reference: {
      value: awsPermissionsBoundaryAttachmentCustomerManagedPolicyReferencePropertyToHclTerraform(struct!.customerManagedPolicyReference),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerManagedPolicyReferencePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPermissionsBoundaryAttachmentTimeoutsPropertyToTerraform(struct?: AwsPermissionsBoundaryAttachment.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function awsPermissionsBoundaryAttachmentTimeoutsPropertyToHclTerraform(struct?: AwsPermissionsBoundaryAttachment.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsPermissionsBoundaryAttachment {
export interface CustomerManagedPolicyReferenceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#name AwsPermissionsBoundaryAttachment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#path AwsPermissionsBoundaryAttachment#path}
  */
  readonly path?: string;
}
export class CustomerManagedPolicyReferencePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomerManagedPolicyReferenceProperty | undefined {
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

  public set internalValue(value: CustomerManagedPolicyReferenceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // path - computed: false, optional: true, required: false
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
export interface PermissionsBoundaryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#managed_policy_arn AwsPermissionsBoundaryAttachment#managed_policy_arn}
  */
  readonly managedPolicyArn?: string;
  /**
  * customer_managed_policy_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#customer_managed_policy_reference AwsPermissionsBoundaryAttachment#customer_managed_policy_reference}
  */
  readonly customerManagedPolicyReference?: CustomerManagedPolicyReferenceProperty;
}
export class PermissionsBoundaryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PermissionsBoundaryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedPolicyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPolicyArn = this._managedPolicyArn;
    }
    if (this._customerManagedPolicyReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedPolicyReference = this._customerManagedPolicyReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionsBoundaryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedPolicyArn = undefined;
      this._customerManagedPolicyReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedPolicyArn = value.managedPolicyArn;
      this._customerManagedPolicyReference.internalValue = value.customerManagedPolicyReference;
    }
  }

  // managed_policy_arn - computed: false, optional: true, required: false
  private _managedPolicyArn?: string; 
  public get managedPolicyArn() {
    return this.getStringAttribute('managed_policy_arn');
  }
  public set managedPolicyArn(value: string) {
    this._managedPolicyArn = value;
  }
  public resetManagedPolicyArn() {
    this._managedPolicyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPolicyArnInput() {
    return this._managedPolicyArn;
  }

  // customer_managed_policy_reference - computed: false, optional: true, required: false
  private _customerManagedPolicyReference = new CustomerManagedPolicyReferencePropertyOutputReference(this, "customer_managed_policy_reference");
  public get customerManagedPolicyReference() {
    return this._customerManagedPolicyReference;
  }
  public putCustomerManagedPolicyReference(value: CustomerManagedPolicyReferenceProperty) {
    this._customerManagedPolicyReference.internalValue = value;
  }
  public resetCustomerManagedPolicyReference() {
    this._customerManagedPolicyReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedPolicyReferenceInput() {
    return this._customerManagedPolicyReference.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#create AwsPermissionsBoundaryAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssoadmin_permissions_boundary_attachment#delete AwsPermissionsBoundaryAttachment#delete}
  */
  readonly delete?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
}
