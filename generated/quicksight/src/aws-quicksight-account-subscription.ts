// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAccountSubscriptionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#account_name AwsAccountSubscription#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#active_directory_name AwsAccountSubscription#active_directory_name}
  */
  readonly activeDirectoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#admin_group AwsAccountSubscription#admin_group}
  */
  readonly adminGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#admin_pro_group AwsAccountSubscription#admin_pro_group}
  */
  readonly adminProGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#authentication_method AwsAccountSubscription#authentication_method}
  */
  readonly authenticationMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#author_group AwsAccountSubscription#author_group}
  */
  readonly authorGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#author_pro_group AwsAccountSubscription#author_pro_group}
  */
  readonly authorProGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#aws_account_id AwsAccountSubscription#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#contact_number AwsAccountSubscription#contact_number}
  */
  readonly contactNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#directory_id AwsAccountSubscription#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#edition AwsAccountSubscription#edition}
  */
  readonly edition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#email_address AwsAccountSubscription#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#first_name AwsAccountSubscription#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn AwsAccountSubscription#iam_identity_center_instance_arn}
  */
  readonly iamIdentityCenterInstanceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#id AwsAccountSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#last_name AwsAccountSubscription#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#notification_email AwsAccountSubscription#notification_email}
  */
  readonly notificationEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#reader_group AwsAccountSubscription#reader_group}
  */
  readonly readerGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#reader_pro_group AwsAccountSubscription#reader_pro_group}
  */
  readonly readerProGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#realm AwsAccountSubscription#realm}
  */
  readonly realm?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#region AwsAccountSubscription#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#timeouts AwsAccountSubscription#timeouts}
  */
  readonly timeouts?: AwsAccountSubscription.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription aws_quicksight_account_subscription}
*/
export class AwsAccountSubscription extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_account_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAccountSubscription resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAccountSubscription to import
  * @param importFromId The id of the existing AwsAccountSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAccountSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_account_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription aws_quicksight_account_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAccountSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAccountSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_account_subscription',
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
    this._accountName = config.accountName;
    this._activeDirectoryName = config.activeDirectoryName;
    this._adminGroup = config.adminGroup;
    this._adminProGroup = config.adminProGroup;
    this._authenticationMethod = config.authenticationMethod;
    this._authorGroup = config.authorGroup;
    this._authorProGroup = config.authorProGroup;
    this._awsAccountId = config.awsAccountId;
    this._contactNumber = config.contactNumber;
    this._directoryId = config.directoryId;
    this._edition = config.edition;
    this._emailAddress = config.emailAddress;
    this._firstName = config.firstName;
    this._iamIdentityCenterInstanceArn = config.iamIdentityCenterInstanceArn;
    this._id = config.id;
    this._lastName = config.lastName;
    this._notificationEmail = config.notificationEmail;
    this._readerGroup = config.readerGroup;
    this._readerProGroup = config.readerProGroup;
    this._realm = config.realm;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // account_subscription_status - computed: true, optional: false, required: false
  public get accountSubscriptionStatus() {
    return this.getStringAttribute('account_subscription_status');
  }

  // active_directory_name - computed: false, optional: true, required: false
  private _activeDirectoryName?: string; 
  public get activeDirectoryName() {
    return this.getStringAttribute('active_directory_name');
  }
  public set activeDirectoryName(value: string) {
    this._activeDirectoryName = value;
  }
  public resetActiveDirectoryName() {
    this._activeDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryNameInput() {
    return this._activeDirectoryName;
  }

  // admin_group - computed: false, optional: true, required: false
  private _adminGroup?: string[]; 
  public get adminGroup() {
    return this.getListAttribute('admin_group');
  }
  public set adminGroup(value: string[]) {
    this._adminGroup = value;
  }
  public resetAdminGroup() {
    this._adminGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupInput() {
    return this._adminGroup;
  }

  // admin_pro_group - computed: false, optional: true, required: false
  private _adminProGroup?: string[]; 
  public get adminProGroup() {
    return this.getListAttribute('admin_pro_group');
  }
  public set adminProGroup(value: string[]) {
    this._adminProGroup = value;
  }
  public resetAdminProGroup() {
    this._adminProGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminProGroupInput() {
    return this._adminProGroup;
  }

  // authentication_method - computed: false, optional: false, required: true
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // author_group - computed: false, optional: true, required: false
  private _authorGroup?: string[]; 
  public get authorGroup() {
    return this.getListAttribute('author_group');
  }
  public set authorGroup(value: string[]) {
    this._authorGroup = value;
  }
  public resetAuthorGroup() {
    this._authorGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorGroupInput() {
    return this._authorGroup;
  }

  // author_pro_group - computed: false, optional: true, required: false
  private _authorProGroup?: string[]; 
  public get authorProGroup() {
    return this.getListAttribute('author_pro_group');
  }
  public set authorProGroup(value: string[]) {
    this._authorProGroup = value;
  }
  public resetAuthorProGroup() {
    this._authorProGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorProGroupInput() {
    return this._authorProGroup;
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

  // contact_number - computed: false, optional: true, required: false
  private _contactNumber?: string; 
  public get contactNumber() {
    return this.getStringAttribute('contact_number');
  }
  public set contactNumber(value: string) {
    this._contactNumber = value;
  }
  public resetContactNumber() {
    this._contactNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactNumberInput() {
    return this._contactNumber;
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // edition - computed: false, optional: false, required: true
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // iam_identity_center_instance_arn - computed: false, optional: true, required: false
  private _iamIdentityCenterInstanceArn?: string; 
  public get iamIdentityCenterInstanceArn() {
    return this.getStringAttribute('iam_identity_center_instance_arn');
  }
  public set iamIdentityCenterInstanceArn(value: string) {
    this._iamIdentityCenterInstanceArn = value;
  }
  public resetIamIdentityCenterInstanceArn() {
    this._iamIdentityCenterInstanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamIdentityCenterInstanceArnInput() {
    return this._iamIdentityCenterInstanceArn;
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

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // notification_email - computed: false, optional: false, required: true
  private _notificationEmail?: string; 
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }
  public set notificationEmail(value: string) {
    this._notificationEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailInput() {
    return this._notificationEmail;
  }

  // reader_group - computed: false, optional: true, required: false
  private _readerGroup?: string[]; 
  public get readerGroup() {
    return this.getListAttribute('reader_group');
  }
  public set readerGroup(value: string[]) {
    this._readerGroup = value;
  }
  public resetReaderGroup() {
    this._readerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readerGroupInput() {
    return this._readerGroup;
  }

  // reader_pro_group - computed: false, optional: true, required: false
  private _readerProGroup?: string[]; 
  public get readerProGroup() {
    return this.getListAttribute('reader_pro_group');
  }
  public set readerProGroup(value: string[]) {
    this._readerProGroup = value;
  }
  public resetReaderProGroup() {
    this._readerProGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readerProGroupInput() {
    return this._readerProGroup;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsAccountSubscription.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsAccountSubscription.TimeoutsProperty) {
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
      account_name: cdktn.stringToTerraform(this._accountName),
      active_directory_name: cdktn.stringToTerraform(this._activeDirectoryName),
      admin_group: cdktn.listMapper(cdktn.stringToTerraform, false)(this._adminGroup),
      admin_pro_group: cdktn.listMapper(cdktn.stringToTerraform, false)(this._adminProGroup),
      authentication_method: cdktn.stringToTerraform(this._authenticationMethod),
      author_group: cdktn.listMapper(cdktn.stringToTerraform, false)(this._authorGroup),
      author_pro_group: cdktn.listMapper(cdktn.stringToTerraform, false)(this._authorProGroup),
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      contact_number: cdktn.stringToTerraform(this._contactNumber),
      directory_id: cdktn.stringToTerraform(this._directoryId),
      edition: cdktn.stringToTerraform(this._edition),
      email_address: cdktn.stringToTerraform(this._emailAddress),
      first_name: cdktn.stringToTerraform(this._firstName),
      iam_identity_center_instance_arn: cdktn.stringToTerraform(this._iamIdentityCenterInstanceArn),
      id: cdktn.stringToTerraform(this._id),
      last_name: cdktn.stringToTerraform(this._lastName),
      notification_email: cdktn.stringToTerraform(this._notificationEmail),
      reader_group: cdktn.listMapper(cdktn.stringToTerraform, false)(this._readerGroup),
      reader_pro_group: cdktn.listMapper(cdktn.stringToTerraform, false)(this._readerProGroup),
      realm: cdktn.stringToTerraform(this._realm),
      region: cdktn.stringToTerraform(this._region),
      timeouts: awsAccountSubscriptionTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktn.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_directory_name: {
        value: cdktn.stringToHclTerraform(this._activeDirectoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_group: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._adminGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      admin_pro_group: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._adminProGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      authentication_method: {
        value: cdktn.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      author_group: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._authorGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      author_pro_group: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._authorProGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_number: {
        value: cdktn.stringToHclTerraform(this._contactNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_id: {
        value: cdktn.stringToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition: {
        value: cdktn.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address: {
        value: cdktn.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktn.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_identity_center_instance_arn: {
        value: cdktn.stringToHclTerraform(this._iamIdentityCenterInstanceArn),
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
      last_name: {
        value: cdktn.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_email: {
        value: cdktn.stringToHclTerraform(this._notificationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reader_group: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._readerGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      reader_pro_group: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._readerProGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      realm: {
        value: cdktn.stringToHclTerraform(this._realm),
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
      timeouts: {
        value: awsAccountSubscriptionTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsAccountSubscription.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsAccountSubscriptionTimeoutsPropertyToTerraform(struct?: AwsAccountSubscription.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function awsAccountSubscriptionTimeoutsPropertyToHclTerraform(struct?: AwsAccountSubscription.TimeoutsProperty | cdktn.IResolvable): any {
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
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAccountSubscription {
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#create AwsAccountSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#delete AwsAccountSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/quicksight_account_subscription#read AwsAccountSubscription#read}
  */
  readonly read?: string;
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
}
