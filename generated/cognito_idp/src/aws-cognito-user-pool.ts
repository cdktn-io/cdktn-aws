// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfUserPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#alias_attributes TfUserPool#alias_attributes}
  */
  readonly aliasAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#auto_verified_attributes TfUserPool#auto_verified_attributes}
  */
  readonly autoVerifiedAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#deletion_protection TfUserPool#deletion_protection}
  */
  readonly deletionProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_verification_message TfUserPool#email_verification_message}
  */
  readonly emailVerificationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_verification_subject TfUserPool#email_verification_subject}
  */
  readonly emailVerificationSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#id TfUserPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#mfa_configuration TfUserPool#mfa_configuration}
  */
  readonly mfaConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#name TfUserPool#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#region TfUserPool#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#sms_authentication_message TfUserPool#sms_authentication_message}
  */
  readonly smsAuthenticationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#sms_verification_message TfUserPool#sms_verification_message}
  */
  readonly smsVerificationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#tags TfUserPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#tags_all TfUserPool#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#user_pool_tier TfUserPool#user_pool_tier}
  */
  readonly userPoolTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#username_attributes TfUserPool#username_attributes}
  */
  readonly usernameAttributes?: string[];
  /**
  * account_recovery_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#account_recovery_setting TfUserPool#account_recovery_setting}
  */
  readonly accountRecoverySetting?: TfUserPool.AccountRecoverySettingProperty;
  /**
  * admin_create_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#admin_create_user_config TfUserPool#admin_create_user_config}
  */
  readonly adminCreateUserConfig?: TfUserPool.AdminCreateUserConfigProperty;
  /**
  * device_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#device_configuration TfUserPool#device_configuration}
  */
  readonly deviceConfiguration?: TfUserPool.DeviceConfigurationProperty;
  /**
  * email_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_configuration TfUserPool#email_configuration}
  */
  readonly emailConfiguration?: TfUserPool.EmailConfigurationProperty;
  /**
  * email_mfa_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_mfa_configuration TfUserPool#email_mfa_configuration}
  */
  readonly emailMfaConfiguration?: TfUserPool.EmailMfaConfigurationProperty;
  /**
  * lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#lambda_config TfUserPool#lambda_config}
  */
  readonly lambdaConfig?: TfUserPool.LambdaConfigProperty;
  /**
  * password_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#password_policy TfUserPool#password_policy}
  */
  readonly passwordPolicy?: TfUserPool.PasswordPolicyProperty;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#schema TfUserPool#schema}
  */
  readonly schema?: TfUserPool.SchemaProperty[] | cdktn.IResolvable;
  /**
  * sign_in_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#sign_in_policy TfUserPool#sign_in_policy}
  */
  readonly signInPolicy?: TfUserPool.SignInPolicyProperty;
  /**
  * sms_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#sms_configuration TfUserPool#sms_configuration}
  */
  readonly smsConfiguration?: TfUserPool.SmsConfigurationProperty;
  /**
  * software_token_mfa_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#software_token_mfa_configuration TfUserPool#software_token_mfa_configuration}
  */
  readonly softwareTokenMfaConfiguration?: TfUserPool.SoftwareTokenMfaConfigurationProperty;
  /**
  * user_attribute_update_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#user_attribute_update_settings TfUserPool#user_attribute_update_settings}
  */
  readonly userAttributeUpdateSettings?: TfUserPool.UserAttributeUpdateSettingsProperty;
  /**
  * user_pool_add_ons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#user_pool_add_ons TfUserPool#user_pool_add_ons}
  */
  readonly userPoolAddOns?: TfUserPool.UserPoolAddOnsProperty;
  /**
  * username_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#username_configuration TfUserPool#username_configuration}
  */
  readonly usernameConfiguration?: TfUserPool.UsernameConfigurationProperty;
  /**
  * verification_message_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#verification_message_template TfUserPool#verification_message_template}
  */
  readonly verificationMessageTemplate?: TfUserPool.VerificationMessageTemplateProperty;
  /**
  * web_authn_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#web_authn_configuration TfUserPool#web_authn_configuration}
  */
  readonly webAuthnConfiguration?: TfUserPool.WebAuthnConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool aws_cognito_user_pool}
*/
export class TfUserPool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_user_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfUserPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfUserPool to import
  * @param importFromId The id of the existing TfUserPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfUserPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_user_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool aws_cognito_user_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfUserPoolConfig
  */
  public constructor(scope: Construct, id: string, config: TfUserPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool',
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
    this._aliasAttributes = config.aliasAttributes;
    this._autoVerifiedAttributes = config.autoVerifiedAttributes;
    this._deletionProtection = config.deletionProtection;
    this._emailVerificationMessage = config.emailVerificationMessage;
    this._emailVerificationSubject = config.emailVerificationSubject;
    this._id = config.id;
    this._mfaConfiguration = config.mfaConfiguration;
    this._name = config.name;
    this._region = config.region;
    this._smsAuthenticationMessage = config.smsAuthenticationMessage;
    this._smsVerificationMessage = config.smsVerificationMessage;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userPoolTier = config.userPoolTier;
    this._usernameAttributes = config.usernameAttributes;
    this._accountRecoverySetting.internalValue = config.accountRecoverySetting;
    this._adminCreateUserConfig.internalValue = config.adminCreateUserConfig;
    this._deviceConfiguration.internalValue = config.deviceConfiguration;
    this._emailConfiguration.internalValue = config.emailConfiguration;
    this._emailMfaConfiguration.internalValue = config.emailMfaConfiguration;
    this._lambdaConfig.internalValue = config.lambdaConfig;
    this._passwordPolicy.internalValue = config.passwordPolicy;
    this._schema.internalValue = config.schema;
    this._signInPolicy.internalValue = config.signInPolicy;
    this._smsConfiguration.internalValue = config.smsConfiguration;
    this._softwareTokenMfaConfiguration.internalValue = config.softwareTokenMfaConfiguration;
    this._userAttributeUpdateSettings.internalValue = config.userAttributeUpdateSettings;
    this._userPoolAddOns.internalValue = config.userPoolAddOns;
    this._usernameConfiguration.internalValue = config.usernameConfiguration;
    this._verificationMessageTemplate.internalValue = config.verificationMessageTemplate;
    this._webAuthnConfiguration.internalValue = config.webAuthnConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_attributes - computed: false, optional: true, required: false
  private _aliasAttributes?: string[]; 
  public get aliasAttributes() {
    return cdktn.Fn.tolist(this.getListAttribute('alias_attributes'));
  }
  public set aliasAttributes(value: string[]) {
    this._aliasAttributes = value;
  }
  public resetAliasAttributes() {
    this._aliasAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasAttributesInput() {
    return this._aliasAttributes;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_verified_attributes - computed: false, optional: true, required: false
  private _autoVerifiedAttributes?: string[]; 
  public get autoVerifiedAttributes() {
    return cdktn.Fn.tolist(this.getListAttribute('auto_verified_attributes'));
  }
  public set autoVerifiedAttributes(value: string[]) {
    this._autoVerifiedAttributes = value;
  }
  public resetAutoVerifiedAttributes() {
    this._autoVerifiedAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVerifiedAttributesInput() {
    return this._autoVerifiedAttributes;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // custom_domain - computed: true, optional: false, required: false
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: string; 
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }
  public set deletionProtection(value: string) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // email_verification_message - computed: true, optional: true, required: false
  private _emailVerificationMessage?: string; 
  public get emailVerificationMessage() {
    return this.getStringAttribute('email_verification_message');
  }
  public set emailVerificationMessage(value: string) {
    this._emailVerificationMessage = value;
  }
  public resetEmailVerificationMessage() {
    this._emailVerificationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationMessageInput() {
    return this._emailVerificationMessage;
  }

  // email_verification_subject - computed: true, optional: true, required: false
  private _emailVerificationSubject?: string; 
  public get emailVerificationSubject() {
    return this.getStringAttribute('email_verification_subject');
  }
  public set emailVerificationSubject(value: string) {
    this._emailVerificationSubject = value;
  }
  public resetEmailVerificationSubject() {
    this._emailVerificationSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationSubjectInput() {
    return this._emailVerificationSubject;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // estimated_number_of_users - computed: true, optional: false, required: false
  public get estimatedNumberOfUsers() {
    return this.getNumberAttribute('estimated_number_of_users');
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

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // mfa_configuration - computed: false, optional: true, required: false
  private _mfaConfiguration?: string; 
  public get mfaConfiguration() {
    return this.getStringAttribute('mfa_configuration');
  }
  public set mfaConfiguration(value: string) {
    this._mfaConfiguration = value;
  }
  public resetMfaConfiguration() {
    this._mfaConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaConfigurationInput() {
    return this._mfaConfiguration;
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

  // sms_authentication_message - computed: false, optional: true, required: false
  private _smsAuthenticationMessage?: string; 
  public get smsAuthenticationMessage() {
    return this.getStringAttribute('sms_authentication_message');
  }
  public set smsAuthenticationMessage(value: string) {
    this._smsAuthenticationMessage = value;
  }
  public resetSmsAuthenticationMessage() {
    this._smsAuthenticationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsAuthenticationMessageInput() {
    return this._smsAuthenticationMessage;
  }

  // sms_verification_message - computed: true, optional: true, required: false
  private _smsVerificationMessage?: string; 
  public get smsVerificationMessage() {
    return this.getStringAttribute('sms_verification_message');
  }
  public set smsVerificationMessage(value: string) {
    this._smsVerificationMessage = value;
  }
  public resetSmsVerificationMessage() {
    this._smsVerificationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsVerificationMessageInput() {
    return this._smsVerificationMessage;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // user_pool_tier - computed: true, optional: true, required: false
  private _userPoolTier?: string; 
  public get userPoolTier() {
    return this.getStringAttribute('user_pool_tier');
  }
  public set userPoolTier(value: string) {
    this._userPoolTier = value;
  }
  public resetUserPoolTier() {
    this._userPoolTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolTierInput() {
    return this._userPoolTier;
  }

  // username_attributes - computed: false, optional: true, required: false
  private _usernameAttributes?: string[]; 
  public get usernameAttributes() {
    return cdktn.Fn.tolist(this.getListAttribute('username_attributes'));
  }
  public set usernameAttributes(value: string[]) {
    this._usernameAttributes = value;
  }
  public resetUsernameAttributes() {
    this._usernameAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAttributesInput() {
    return this._usernameAttributes;
  }

  // account_recovery_setting - computed: false, optional: true, required: false
  private _accountRecoverySetting = new TfUserPool.AccountRecoverySettingPropertyOutputReference(this, "account_recovery_setting");
  public get accountRecoverySetting() {
    return this._accountRecoverySetting;
  }
  public putAccountRecoverySetting(value: TfUserPool.AccountRecoverySettingProperty) {
    this._accountRecoverySetting.internalValue = value;
  }
  public resetAccountRecoverySetting() {
    this._accountRecoverySetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRecoverySettingInput() {
    return this._accountRecoverySetting.internalValue;
  }

  // admin_create_user_config - computed: false, optional: true, required: false
  private _adminCreateUserConfig = new TfUserPool.AdminCreateUserConfigPropertyOutputReference(this, "admin_create_user_config");
  public get adminCreateUserConfig() {
    return this._adminCreateUserConfig;
  }
  public putAdminCreateUserConfig(value: TfUserPool.AdminCreateUserConfigProperty) {
    this._adminCreateUserConfig.internalValue = value;
  }
  public resetAdminCreateUserConfig() {
    this._adminCreateUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCreateUserConfigInput() {
    return this._adminCreateUserConfig.internalValue;
  }

  // device_configuration - computed: false, optional: true, required: false
  private _deviceConfiguration = new TfUserPool.DeviceConfigurationPropertyOutputReference(this, "device_configuration");
  public get deviceConfiguration() {
    return this._deviceConfiguration;
  }
  public putDeviceConfiguration(value: TfUserPool.DeviceConfigurationProperty) {
    this._deviceConfiguration.internalValue = value;
  }
  public resetDeviceConfiguration() {
    this._deviceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceConfigurationInput() {
    return this._deviceConfiguration.internalValue;
  }

  // email_configuration - computed: false, optional: true, required: false
  private _emailConfiguration = new TfUserPool.EmailConfigurationPropertyOutputReference(this, "email_configuration");
  public get emailConfiguration() {
    return this._emailConfiguration;
  }
  public putEmailConfiguration(value: TfUserPool.EmailConfigurationProperty) {
    this._emailConfiguration.internalValue = value;
  }
  public resetEmailConfiguration() {
    this._emailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigurationInput() {
    return this._emailConfiguration.internalValue;
  }

  // email_mfa_configuration - computed: false, optional: true, required: false
  private _emailMfaConfiguration = new TfUserPool.EmailMfaConfigurationPropertyOutputReference(this, "email_mfa_configuration");
  public get emailMfaConfiguration() {
    return this._emailMfaConfiguration;
  }
  public putEmailMfaConfiguration(value: TfUserPool.EmailMfaConfigurationProperty) {
    this._emailMfaConfiguration.internalValue = value;
  }
  public resetEmailMfaConfiguration() {
    this._emailMfaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMfaConfigurationInput() {
    return this._emailMfaConfiguration.internalValue;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig = new TfUserPool.LambdaConfigPropertyOutputReference(this, "lambda_config");
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: TfUserPool.LambdaConfigProperty) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy = new TfUserPool.PasswordPolicyPropertyOutputReference(this, "password_policy");
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public putPasswordPolicy(value: TfUserPool.PasswordPolicyProperty) {
    this._passwordPolicy.internalValue = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new TfUserPool.SchemaPropertyList(this, "schema", true);
  public get schema() {
    return this._schema;
  }
  public putSchema(value: TfUserPool.SchemaProperty[] | cdktn.IResolvable) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // sign_in_policy - computed: false, optional: true, required: false
  private _signInPolicy = new TfUserPool.SignInPolicyPropertyOutputReference(this, "sign_in_policy");
  public get signInPolicy() {
    return this._signInPolicy;
  }
  public putSignInPolicy(value: TfUserPool.SignInPolicyProperty) {
    this._signInPolicy.internalValue = value;
  }
  public resetSignInPolicy() {
    this._signInPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInPolicyInput() {
    return this._signInPolicy.internalValue;
  }

  // sms_configuration - computed: false, optional: true, required: false
  private _smsConfiguration = new TfUserPool.SmsConfigurationPropertyOutputReference(this, "sms_configuration");
  public get smsConfiguration() {
    return this._smsConfiguration;
  }
  public putSmsConfiguration(value: TfUserPool.SmsConfigurationProperty) {
    this._smsConfiguration.internalValue = value;
  }
  public resetSmsConfiguration() {
    this._smsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsConfigurationInput() {
    return this._smsConfiguration.internalValue;
  }

  // software_token_mfa_configuration - computed: false, optional: true, required: false
  private _softwareTokenMfaConfiguration = new TfUserPool.SoftwareTokenMfaConfigurationPropertyOutputReference(this, "software_token_mfa_configuration");
  public get softwareTokenMfaConfiguration() {
    return this._softwareTokenMfaConfiguration;
  }
  public putSoftwareTokenMfaConfiguration(value: TfUserPool.SoftwareTokenMfaConfigurationProperty) {
    this._softwareTokenMfaConfiguration.internalValue = value;
  }
  public resetSoftwareTokenMfaConfiguration() {
    this._softwareTokenMfaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareTokenMfaConfigurationInput() {
    return this._softwareTokenMfaConfiguration.internalValue;
  }

  // user_attribute_update_settings - computed: false, optional: true, required: false
  private _userAttributeUpdateSettings = new TfUserPool.UserAttributeUpdateSettingsPropertyOutputReference(this, "user_attribute_update_settings");
  public get userAttributeUpdateSettings() {
    return this._userAttributeUpdateSettings;
  }
  public putUserAttributeUpdateSettings(value: TfUserPool.UserAttributeUpdateSettingsProperty) {
    this._userAttributeUpdateSettings.internalValue = value;
  }
  public resetUserAttributeUpdateSettings() {
    this._userAttributeUpdateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeUpdateSettingsInput() {
    return this._userAttributeUpdateSettings.internalValue;
  }

  // user_pool_add_ons - computed: false, optional: true, required: false
  private _userPoolAddOns = new TfUserPool.UserPoolAddOnsPropertyOutputReference(this, "user_pool_add_ons");
  public get userPoolAddOns() {
    return this._userPoolAddOns;
  }
  public putUserPoolAddOns(value: TfUserPool.UserPoolAddOnsProperty) {
    this._userPoolAddOns.internalValue = value;
  }
  public resetUserPoolAddOns() {
    this._userPoolAddOns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolAddOnsInput() {
    return this._userPoolAddOns.internalValue;
  }

  // username_configuration - computed: false, optional: true, required: false
  private _usernameConfiguration = new TfUserPool.UsernameConfigurationPropertyOutputReference(this, "username_configuration");
  public get usernameConfiguration() {
    return this._usernameConfiguration;
  }
  public putUsernameConfiguration(value: TfUserPool.UsernameConfigurationProperty) {
    this._usernameConfiguration.internalValue = value;
  }
  public resetUsernameConfiguration() {
    this._usernameConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameConfigurationInput() {
    return this._usernameConfiguration.internalValue;
  }

  // verification_message_template - computed: false, optional: true, required: false
  private _verificationMessageTemplate = new TfUserPool.VerificationMessageTemplatePropertyOutputReference(this, "verification_message_template");
  public get verificationMessageTemplate() {
    return this._verificationMessageTemplate;
  }
  public putVerificationMessageTemplate(value: TfUserPool.VerificationMessageTemplateProperty) {
    this._verificationMessageTemplate.internalValue = value;
  }
  public resetVerificationMessageTemplate() {
    this._verificationMessageTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMessageTemplateInput() {
    return this._verificationMessageTemplate.internalValue;
  }

  // web_authn_configuration - computed: false, optional: true, required: false
  private _webAuthnConfiguration = new TfUserPool.WebAuthnConfigurationPropertyOutputReference(this, "web_authn_configuration");
  public get webAuthnConfiguration() {
    return this._webAuthnConfiguration;
  }
  public putWebAuthnConfiguration(value: TfUserPool.WebAuthnConfigurationProperty) {
    this._webAuthnConfiguration.internalValue = value;
  }
  public resetWebAuthnConfiguration() {
    this._webAuthnConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAuthnConfigurationInput() {
    return this._webAuthnConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._aliasAttributes),
      auto_verified_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._autoVerifiedAttributes),
      deletion_protection: cdktn.stringToTerraform(this._deletionProtection),
      email_verification_message: cdktn.stringToTerraform(this._emailVerificationMessage),
      email_verification_subject: cdktn.stringToTerraform(this._emailVerificationSubject),
      id: cdktn.stringToTerraform(this._id),
      mfa_configuration: cdktn.stringToTerraform(this._mfaConfiguration),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      sms_authentication_message: cdktn.stringToTerraform(this._smsAuthenticationMessage),
      sms_verification_message: cdktn.stringToTerraform(this._smsVerificationMessage),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      user_pool_tier: cdktn.stringToTerraform(this._userPoolTier),
      username_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._usernameAttributes),
      account_recovery_setting: tfUserPoolAccountRecoverySettingPropertyToTerraform(this._accountRecoverySetting.internalValue),
      admin_create_user_config: tfUserPoolAdminCreateUserConfigPropertyToTerraform(this._adminCreateUserConfig.internalValue),
      device_configuration: tfUserPoolDeviceConfigurationPropertyToTerraform(this._deviceConfiguration.internalValue),
      email_configuration: tfUserPoolEmailConfigurationPropertyToTerraform(this._emailConfiguration.internalValue),
      email_mfa_configuration: tfUserPoolEmailMfaConfigurationPropertyToTerraform(this._emailMfaConfiguration.internalValue),
      lambda_config: tfUserPoolLambdaConfigPropertyToTerraform(this._lambdaConfig.internalValue),
      password_policy: tfUserPoolPasswordPolicyPropertyToTerraform(this._passwordPolicy.internalValue),
      schema: cdktn.listMapper(tfUserPoolSchemaPropertyToTerraform, true)(this._schema.internalValue),
      sign_in_policy: tfUserPoolSignInPolicyPropertyToTerraform(this._signInPolicy.internalValue),
      sms_configuration: tfUserPoolSmsConfigurationPropertyToTerraform(this._smsConfiguration.internalValue),
      software_token_mfa_configuration: tfUserPoolSoftwareTokenMfaConfigurationPropertyToTerraform(this._softwareTokenMfaConfiguration.internalValue),
      user_attribute_update_settings: tfUserPoolUserAttributeUpdateSettingsPropertyToTerraform(this._userAttributeUpdateSettings.internalValue),
      user_pool_add_ons: tfUserPoolUserPoolAddOnsPropertyToTerraform(this._userPoolAddOns.internalValue),
      username_configuration: tfUserPoolUsernameConfigurationPropertyToTerraform(this._usernameConfiguration.internalValue),
      verification_message_template: tfUserPoolVerificationMessageTemplatePropertyToTerraform(this._verificationMessageTemplate.internalValue),
      web_authn_configuration: tfUserPoolWebAuthnConfigurationPropertyToTerraform(this._webAuthnConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_attributes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._aliasAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_verified_attributes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._autoVerifiedAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      deletion_protection: {
        value: cdktn.stringToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_verification_message: {
        value: cdktn.stringToHclTerraform(this._emailVerificationMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_verification_subject: {
        value: cdktn.stringToHclTerraform(this._emailVerificationSubject),
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
      mfa_configuration: {
        value: cdktn.stringToHclTerraform(this._mfaConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      sms_authentication_message: {
        value: cdktn.stringToHclTerraform(this._smsAuthenticationMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_verification_message: {
        value: cdktn.stringToHclTerraform(this._smsVerificationMessage),
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
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_pool_tier: {
        value: cdktn.stringToHclTerraform(this._userPoolTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_attributes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._usernameAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      account_recovery_setting: {
        value: tfUserPoolAccountRecoverySettingPropertyToHclTerraform(this._accountRecoverySetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.AccountRecoverySettingPropertyList",
      },
      admin_create_user_config: {
        value: tfUserPoolAdminCreateUserConfigPropertyToHclTerraform(this._adminCreateUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.AdminCreateUserConfigPropertyList",
      },
      device_configuration: {
        value: tfUserPoolDeviceConfigurationPropertyToHclTerraform(this._deviceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.DeviceConfigurationPropertyList",
      },
      email_configuration: {
        value: tfUserPoolEmailConfigurationPropertyToHclTerraform(this._emailConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.EmailConfigurationPropertyList",
      },
      email_mfa_configuration: {
        value: tfUserPoolEmailMfaConfigurationPropertyToHclTerraform(this._emailMfaConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.EmailMfaConfigurationPropertyList",
      },
      lambda_config: {
        value: tfUserPoolLambdaConfigPropertyToHclTerraform(this._lambdaConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.LambdaConfigPropertyList",
      },
      password_policy: {
        value: tfUserPoolPasswordPolicyPropertyToHclTerraform(this._passwordPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.PasswordPolicyPropertyList",
      },
      schema: {
        value: cdktn.listMapperHcl(tfUserPoolSchemaPropertyToHclTerraform, true)(this._schema.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfUserPool.SchemaPropertyList",
      },
      sign_in_policy: {
        value: tfUserPoolSignInPolicyPropertyToHclTerraform(this._signInPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.SignInPolicyPropertyList",
      },
      sms_configuration: {
        value: tfUserPoolSmsConfigurationPropertyToHclTerraform(this._smsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.SmsConfigurationPropertyList",
      },
      software_token_mfa_configuration: {
        value: tfUserPoolSoftwareTokenMfaConfigurationPropertyToHclTerraform(this._softwareTokenMfaConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.SoftwareTokenMfaConfigurationPropertyList",
      },
      user_attribute_update_settings: {
        value: tfUserPoolUserAttributeUpdateSettingsPropertyToHclTerraform(this._userAttributeUpdateSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.UserAttributeUpdateSettingsPropertyList",
      },
      user_pool_add_ons: {
        value: tfUserPoolUserPoolAddOnsPropertyToHclTerraform(this._userPoolAddOns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.UserPoolAddOnsPropertyList",
      },
      username_configuration: {
        value: tfUserPoolUsernameConfigurationPropertyToHclTerraform(this._usernameConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.UsernameConfigurationPropertyList",
      },
      verification_message_template: {
        value: tfUserPoolVerificationMessageTemplatePropertyToHclTerraform(this._verificationMessageTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.VerificationMessageTemplatePropertyList",
      },
      web_authn_configuration: {
        value: tfUserPoolWebAuthnConfigurationPropertyToHclTerraform(this._webAuthnConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserPool.WebAuthnConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfUserPoolRecoveryMechanismPropertyToTerraform(struct?: TfUserPool.RecoveryMechanismProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    priority: cdktn.numberToTerraform(struct!.priority),
  }
}


export function tfUserPoolRecoveryMechanismPropertyToHclTerraform(struct?: TfUserPool.RecoveryMechanismProperty | cdktn.IResolvable): any {
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
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolAccountRecoverySettingPropertyToTerraform(struct?: TfUserPool.AccountRecoverySettingPropertyOutputReference | TfUserPool.AccountRecoverySettingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recovery_mechanism: cdktn.listMapper(tfUserPoolRecoveryMechanismPropertyToTerraform, true)(struct!.recoveryMechanism),
  }
}


export function tfUserPoolAccountRecoverySettingPropertyToHclTerraform(struct?: TfUserPool.AccountRecoverySettingPropertyOutputReference | TfUserPool.AccountRecoverySettingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    recovery_mechanism: {
      value: cdktn.listMapperHcl(tfUserPoolRecoveryMechanismPropertyToHclTerraform, true)(struct!.recoveryMechanism),
      isBlock: true,
      type: "set",
      storageClassType: "RecoveryMechanismPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolInviteMessageTemplatePropertyToTerraform(struct?: TfUserPool.InviteMessageTemplatePropertyOutputReference | TfUserPool.InviteMessageTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email_message: cdktn.stringToTerraform(struct!.emailMessage),
    email_subject: cdktn.stringToTerraform(struct!.emailSubject),
    sms_message: cdktn.stringToTerraform(struct!.smsMessage),
  }
}


export function tfUserPoolInviteMessageTemplatePropertyToHclTerraform(struct?: TfUserPool.InviteMessageTemplatePropertyOutputReference | TfUserPool.InviteMessageTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email_message: {
      value: cdktn.stringToHclTerraform(struct!.emailMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_subject: {
      value: cdktn.stringToHclTerraform(struct!.emailSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_message: {
      value: cdktn.stringToHclTerraform(struct!.smsMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolAdminCreateUserConfigPropertyToTerraform(struct?: TfUserPool.AdminCreateUserConfigPropertyOutputReference | TfUserPool.AdminCreateUserConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_admin_create_user_only: cdktn.booleanToTerraform(struct!.allowAdminCreateUserOnly),
    invite_message_template: tfUserPoolInviteMessageTemplatePropertyToTerraform(struct!.inviteMessageTemplate),
  }
}


export function tfUserPoolAdminCreateUserConfigPropertyToHclTerraform(struct?: TfUserPool.AdminCreateUserConfigPropertyOutputReference | TfUserPool.AdminCreateUserConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_admin_create_user_only: {
      value: cdktn.booleanToHclTerraform(struct!.allowAdminCreateUserOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invite_message_template: {
      value: tfUserPoolInviteMessageTemplatePropertyToHclTerraform(struct!.inviteMessageTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "InviteMessageTemplatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolDeviceConfigurationPropertyToTerraform(struct?: TfUserPool.DeviceConfigurationPropertyOutputReference | TfUserPool.DeviceConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    challenge_required_on_new_device: cdktn.booleanToTerraform(struct!.challengeRequiredOnNewDevice),
    device_only_remembered_on_user_prompt: cdktn.booleanToTerraform(struct!.deviceOnlyRememberedOnUserPrompt),
  }
}


export function tfUserPoolDeviceConfigurationPropertyToHclTerraform(struct?: TfUserPool.DeviceConfigurationPropertyOutputReference | TfUserPool.DeviceConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    challenge_required_on_new_device: {
      value: cdktn.booleanToHclTerraform(struct!.challengeRequiredOnNewDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_only_remembered_on_user_prompt: {
      value: cdktn.booleanToHclTerraform(struct!.deviceOnlyRememberedOnUserPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolEmailConfigurationPropertyToTerraform(struct?: TfUserPool.EmailConfigurationPropertyOutputReference | TfUserPool.EmailConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_set: cdktn.stringToTerraform(struct!.configurationSet),
    email_sending_account: cdktn.stringToTerraform(struct!.emailSendingAccount),
    from_email_address: cdktn.stringToTerraform(struct!.fromEmailAddress),
    reply_to_email_address: cdktn.stringToTerraform(struct!.replyToEmailAddress),
    source_arn: cdktn.stringToTerraform(struct!.sourceArn),
  }
}


export function tfUserPoolEmailConfigurationPropertyToHclTerraform(struct?: TfUserPool.EmailConfigurationPropertyOutputReference | TfUserPool.EmailConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_set: {
      value: cdktn.stringToHclTerraform(struct!.configurationSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_sending_account: {
      value: cdktn.stringToHclTerraform(struct!.emailSendingAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_email_address: {
      value: cdktn.stringToHclTerraform(struct!.fromEmailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reply_to_email_address: {
      value: cdktn.stringToHclTerraform(struct!.replyToEmailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_arn: {
      value: cdktn.stringToHclTerraform(struct!.sourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolEmailMfaConfigurationPropertyToTerraform(struct?: TfUserPool.EmailMfaConfigurationPropertyOutputReference | TfUserPool.EmailMfaConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.stringToTerraform(struct!.message),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function tfUserPoolEmailMfaConfigurationPropertyToHclTerraform(struct?: TfUserPool.EmailMfaConfigurationPropertyOutputReference | TfUserPool.EmailMfaConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolCustomEmailSenderPropertyToTerraform(struct?: TfUserPool.CustomEmailSenderPropertyOutputReference | TfUserPool.CustomEmailSenderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
  }
}


export function tfUserPoolCustomEmailSenderPropertyToHclTerraform(struct?: TfUserPool.CustomEmailSenderPropertyOutputReference | TfUserPool.CustomEmailSenderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_version: {
      value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolCustomSmsSenderPropertyToTerraform(struct?: TfUserPool.CustomSmsSenderPropertyOutputReference | TfUserPool.CustomSmsSenderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
  }
}


export function tfUserPoolCustomSmsSenderPropertyToHclTerraform(struct?: TfUserPool.CustomSmsSenderPropertyOutputReference | TfUserPool.CustomSmsSenderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_version: {
      value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolPreTokenGenerationConfigPropertyToTerraform(struct?: TfUserPool.PreTokenGenerationConfigPropertyOutputReference | TfUserPool.PreTokenGenerationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
  }
}


export function tfUserPoolPreTokenGenerationConfigPropertyToHclTerraform(struct?: TfUserPool.PreTokenGenerationConfigPropertyOutputReference | TfUserPool.PreTokenGenerationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_version: {
      value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolLambdaConfigPropertyToTerraform(struct?: TfUserPool.LambdaConfigPropertyOutputReference | TfUserPool.LambdaConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create_auth_challenge: cdktn.stringToTerraform(struct!.createAuthChallenge),
    custom_message: cdktn.stringToTerraform(struct!.customMessage),
    define_auth_challenge: cdktn.stringToTerraform(struct!.defineAuthChallenge),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    post_authentication: cdktn.stringToTerraform(struct!.postAuthentication),
    post_confirmation: cdktn.stringToTerraform(struct!.postConfirmation),
    pre_authentication: cdktn.stringToTerraform(struct!.preAuthentication),
    pre_sign_up: cdktn.stringToTerraform(struct!.preSignUp),
    pre_token_generation: cdktn.stringToTerraform(struct!.preTokenGeneration),
    user_migration: cdktn.stringToTerraform(struct!.userMigration),
    verify_auth_challenge_response: cdktn.stringToTerraform(struct!.verifyAuthChallengeResponse),
    custom_email_sender: tfUserPoolCustomEmailSenderPropertyToTerraform(struct!.customEmailSender),
    custom_sms_sender: tfUserPoolCustomSmsSenderPropertyToTerraform(struct!.customSmsSender),
    pre_token_generation_config: tfUserPoolPreTokenGenerationConfigPropertyToTerraform(struct!.preTokenGenerationConfig),
  }
}


export function tfUserPoolLambdaConfigPropertyToHclTerraform(struct?: TfUserPool.LambdaConfigPropertyOutputReference | TfUserPool.LambdaConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create_auth_challenge: {
      value: cdktn.stringToHclTerraform(struct!.createAuthChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_message: {
      value: cdktn.stringToHclTerraform(struct!.customMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    define_auth_challenge: {
      value: cdktn.stringToHclTerraform(struct!.defineAuthChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_authentication: {
      value: cdktn.stringToHclTerraform(struct!.postAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_confirmation: {
      value: cdktn.stringToHclTerraform(struct!.postConfirmation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_authentication: {
      value: cdktn.stringToHclTerraform(struct!.preAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_sign_up: {
      value: cdktn.stringToHclTerraform(struct!.preSignUp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_token_generation: {
      value: cdktn.stringToHclTerraform(struct!.preTokenGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_migration: {
      value: cdktn.stringToHclTerraform(struct!.userMigration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_auth_challenge_response: {
      value: cdktn.stringToHclTerraform(struct!.verifyAuthChallengeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_email_sender: {
      value: tfUserPoolCustomEmailSenderPropertyToHclTerraform(struct!.customEmailSender),
      isBlock: true,
      type: "list",
      storageClassType: "CustomEmailSenderPropertyList",
    },
    custom_sms_sender: {
      value: tfUserPoolCustomSmsSenderPropertyToHclTerraform(struct!.customSmsSender),
      isBlock: true,
      type: "list",
      storageClassType: "CustomSmsSenderPropertyList",
    },
    pre_token_generation_config: {
      value: tfUserPoolPreTokenGenerationConfigPropertyToHclTerraform(struct!.preTokenGenerationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PreTokenGenerationConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolPasswordPolicyPropertyToTerraform(struct?: TfUserPool.PasswordPolicyPropertyOutputReference | TfUserPool.PasswordPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_length: cdktn.numberToTerraform(struct!.minimumLength),
    password_history_size: cdktn.numberToTerraform(struct!.passwordHistorySize),
    require_lowercase: cdktn.booleanToTerraform(struct!.requireLowercase),
    require_numbers: cdktn.booleanToTerraform(struct!.requireNumbers),
    require_symbols: cdktn.booleanToTerraform(struct!.requireSymbols),
    require_uppercase: cdktn.booleanToTerraform(struct!.requireUppercase),
    temporary_password_validity_days: cdktn.numberToTerraform(struct!.temporaryPasswordValidityDays),
  }
}


export function tfUserPoolPasswordPolicyPropertyToHclTerraform(struct?: TfUserPool.PasswordPolicyPropertyOutputReference | TfUserPool.PasswordPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_length: {
      value: cdktn.numberToHclTerraform(struct!.minimumLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_history_size: {
      value: cdktn.numberToHclTerraform(struct!.passwordHistorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_lowercase: {
      value: cdktn.booleanToHclTerraform(struct!.requireLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_numbers: {
      value: cdktn.booleanToHclTerraform(struct!.requireNumbers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_symbols: {
      value: cdktn.booleanToHclTerraform(struct!.requireSymbols),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_uppercase: {
      value: cdktn.booleanToHclTerraform(struct!.requireUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    temporary_password_validity_days: {
      value: cdktn.numberToHclTerraform(struct!.temporaryPasswordValidityDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolNumberAttributeConstraintsPropertyToTerraform(struct?: TfUserPool.NumberAttributeConstraintsPropertyOutputReference | TfUserPool.NumberAttributeConstraintsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
  }
}


export function tfUserPoolNumberAttributeConstraintsPropertyToHclTerraform(struct?: TfUserPool.NumberAttributeConstraintsPropertyOutputReference | TfUserPool.NumberAttributeConstraintsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolStringAttributeConstraintsPropertyToTerraform(struct?: TfUserPool.StringAttributeConstraintsPropertyOutputReference | TfUserPool.StringAttributeConstraintsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_length: cdktn.stringToTerraform(struct!.maxLength),
    min_length: cdktn.stringToTerraform(struct!.minLength),
  }
}


export function tfUserPoolStringAttributeConstraintsPropertyToHclTerraform(struct?: TfUserPool.StringAttributeConstraintsPropertyOutputReference | TfUserPool.StringAttributeConstraintsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_length: {
      value: cdktn.stringToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_length: {
      value: cdktn.stringToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolSchemaPropertyToTerraform(struct?: TfUserPool.SchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_data_type: cdktn.stringToTerraform(struct!.attributeDataType),
    developer_only_attribute: cdktn.booleanToTerraform(struct!.developerOnlyAttribute),
    mutable: cdktn.booleanToTerraform(struct!.mutable),
    name: cdktn.stringToTerraform(struct!.name),
    required: cdktn.booleanToTerraform(struct!.required),
    number_attribute_constraints: tfUserPoolNumberAttributeConstraintsPropertyToTerraform(struct!.numberAttributeConstraints),
    string_attribute_constraints: tfUserPoolStringAttributeConstraintsPropertyToTerraform(struct!.stringAttributeConstraints),
  }
}


export function tfUserPoolSchemaPropertyToHclTerraform(struct?: TfUserPool.SchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_data_type: {
      value: cdktn.stringToHclTerraform(struct!.attributeDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    developer_only_attribute: {
      value: cdktn.booleanToHclTerraform(struct!.developerOnlyAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mutable: {
      value: cdktn.booleanToHclTerraform(struct!.mutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_attribute_constraints: {
      value: tfUserPoolNumberAttributeConstraintsPropertyToHclTerraform(struct!.numberAttributeConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "NumberAttributeConstraintsPropertyList",
    },
    string_attribute_constraints: {
      value: tfUserPoolStringAttributeConstraintsPropertyToHclTerraform(struct!.stringAttributeConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "StringAttributeConstraintsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolSignInPolicyPropertyToTerraform(struct?: TfUserPool.SignInPolicyPropertyOutputReference | TfUserPool.SignInPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_first_auth_factors: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedFirstAuthFactors),
  }
}


export function tfUserPoolSignInPolicyPropertyToHclTerraform(struct?: TfUserPool.SignInPolicyPropertyOutputReference | TfUserPool.SignInPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_first_auth_factors: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedFirstAuthFactors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolSmsConfigurationPropertyToTerraform(struct?: TfUserPool.SmsConfigurationPropertyOutputReference | TfUserPool.SmsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_id: cdktn.stringToTerraform(struct!.externalId),
    sns_caller_arn: cdktn.stringToTerraform(struct!.snsCallerArn),
    sns_region: cdktn.stringToTerraform(struct!.snsRegion),
  }
}


export function tfUserPoolSmsConfigurationPropertyToHclTerraform(struct?: TfUserPool.SmsConfigurationPropertyOutputReference | TfUserPool.SmsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_caller_arn: {
      value: cdktn.stringToHclTerraform(struct!.snsCallerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_region: {
      value: cdktn.stringToHclTerraform(struct!.snsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolSoftwareTokenMfaConfigurationPropertyToTerraform(struct?: TfUserPool.SoftwareTokenMfaConfigurationPropertyOutputReference | TfUserPool.SoftwareTokenMfaConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function tfUserPoolSoftwareTokenMfaConfigurationPropertyToHclTerraform(struct?: TfUserPool.SoftwareTokenMfaConfigurationPropertyOutputReference | TfUserPool.SoftwareTokenMfaConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolUserAttributeUpdateSettingsPropertyToTerraform(struct?: TfUserPool.UserAttributeUpdateSettingsPropertyOutputReference | TfUserPool.UserAttributeUpdateSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes_require_verification_before_update: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributesRequireVerificationBeforeUpdate),
  }
}


export function tfUserPoolUserAttributeUpdateSettingsPropertyToHclTerraform(struct?: TfUserPool.UserAttributeUpdateSettingsPropertyOutputReference | TfUserPool.UserAttributeUpdateSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes_require_verification_before_update: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributesRequireVerificationBeforeUpdate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolAdvancedSecurityAdditionalFlowsPropertyToTerraform(struct?: TfUserPool.AdvancedSecurityAdditionalFlowsPropertyOutputReference | TfUserPool.AdvancedSecurityAdditionalFlowsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_auth_mode: cdktn.stringToTerraform(struct!.customAuthMode),
  }
}


export function tfUserPoolAdvancedSecurityAdditionalFlowsPropertyToHclTerraform(struct?: TfUserPool.AdvancedSecurityAdditionalFlowsPropertyOutputReference | TfUserPool.AdvancedSecurityAdditionalFlowsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_auth_mode: {
      value: cdktn.stringToHclTerraform(struct!.customAuthMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolUserPoolAddOnsPropertyToTerraform(struct?: TfUserPool.UserPoolAddOnsPropertyOutputReference | TfUserPool.UserPoolAddOnsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    advanced_security_mode: cdktn.stringToTerraform(struct!.advancedSecurityMode),
    advanced_security_additional_flows: tfUserPoolAdvancedSecurityAdditionalFlowsPropertyToTerraform(struct!.advancedSecurityAdditionalFlows),
  }
}


export function tfUserPoolUserPoolAddOnsPropertyToHclTerraform(struct?: TfUserPool.UserPoolAddOnsPropertyOutputReference | TfUserPool.UserPoolAddOnsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    advanced_security_mode: {
      value: cdktn.stringToHclTerraform(struct!.advancedSecurityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_security_additional_flows: {
      value: tfUserPoolAdvancedSecurityAdditionalFlowsPropertyToHclTerraform(struct!.advancedSecurityAdditionalFlows),
      isBlock: true,
      type: "list",
      storageClassType: "AdvancedSecurityAdditionalFlowsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolUsernameConfigurationPropertyToTerraform(struct?: TfUserPool.UsernameConfigurationPropertyOutputReference | TfUserPool.UsernameConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    case_sensitive: cdktn.booleanToTerraform(struct!.caseSensitive),
  }
}


export function tfUserPoolUsernameConfigurationPropertyToHclTerraform(struct?: TfUserPool.UsernameConfigurationPropertyOutputReference | TfUserPool.UsernameConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    case_sensitive: {
      value: cdktn.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolVerificationMessageTemplatePropertyToTerraform(struct?: TfUserPool.VerificationMessageTemplatePropertyOutputReference | TfUserPool.VerificationMessageTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_email_option: cdktn.stringToTerraform(struct!.defaultEmailOption),
    email_message: cdktn.stringToTerraform(struct!.emailMessage),
    email_message_by_link: cdktn.stringToTerraform(struct!.emailMessageByLink),
    email_subject: cdktn.stringToTerraform(struct!.emailSubject),
    email_subject_by_link: cdktn.stringToTerraform(struct!.emailSubjectByLink),
    sms_message: cdktn.stringToTerraform(struct!.smsMessage),
  }
}


export function tfUserPoolVerificationMessageTemplatePropertyToHclTerraform(struct?: TfUserPool.VerificationMessageTemplatePropertyOutputReference | TfUserPool.VerificationMessageTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_email_option: {
      value: cdktn.stringToHclTerraform(struct!.defaultEmailOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_message: {
      value: cdktn.stringToHclTerraform(struct!.emailMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_message_by_link: {
      value: cdktn.stringToHclTerraform(struct!.emailMessageByLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_subject: {
      value: cdktn.stringToHclTerraform(struct!.emailSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_subject_by_link: {
      value: cdktn.stringToHclTerraform(struct!.emailSubjectByLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_message: {
      value: cdktn.stringToHclTerraform(struct!.smsMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserPoolWebAuthnConfigurationPropertyToTerraform(struct?: TfUserPool.WebAuthnConfigurationPropertyOutputReference | TfUserPool.WebAuthnConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    relying_party_id: cdktn.stringToTerraform(struct!.relyingPartyId),
    user_verification: cdktn.stringToTerraform(struct!.userVerification),
  }
}


export function tfUserPoolWebAuthnConfigurationPropertyToHclTerraform(struct?: TfUserPool.WebAuthnConfigurationPropertyOutputReference | TfUserPool.WebAuthnConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    relying_party_id: {
      value: cdktn.stringToHclTerraform(struct!.relyingPartyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_verification: {
      value: cdktn.stringToHclTerraform(struct!.userVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfUserPool {
export interface RecoveryMechanismProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#name TfUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#priority TfUserPool#priority}
  */
  readonly priority: number;
}
export class RecoveryMechanismPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecoveryMechanismProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryMechanismProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class RecoveryMechanismPropertyList extends cdktn.ComplexList {
  public internalValue? : RecoveryMechanismProperty[] | cdktn.IResolvable

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
  public get(index: number): RecoveryMechanismPropertyOutputReference {
    return new RecoveryMechanismPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountRecoverySettingProperty {
  /**
  * recovery_mechanism block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#recovery_mechanism TfUserPool#recovery_mechanism}
  */
  readonly recoveryMechanism?: RecoveryMechanismProperty[] | cdktn.IResolvable;
}
export class AccountRecoverySettingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountRecoverySettingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryMechanism?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryMechanism = this._recoveryMechanism?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountRecoverySettingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoveryMechanism.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoveryMechanism.internalValue = value.recoveryMechanism;
    }
  }

  // recovery_mechanism - computed: false, optional: true, required: false
  private _recoveryMechanism = new RecoveryMechanismPropertyList(this, "recovery_mechanism", true);
  public get recoveryMechanism() {
    return this._recoveryMechanism;
  }
  public putRecoveryMechanism(value: RecoveryMechanismProperty[] | cdktn.IResolvable) {
    this._recoveryMechanism.internalValue = value;
  }
  public resetRecoveryMechanism() {
    this._recoveryMechanism.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryMechanismInput() {
    return this._recoveryMechanism.internalValue;
  }
}
export interface InviteMessageTemplateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_message TfUserPool#email_message}
  */
  readonly emailMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_subject TfUserPool#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#sms_message TfUserPool#sms_message}
  */
  readonly smsMessage?: string;
}
export class InviteMessageTemplatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InviteMessageTemplateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMessage = this._emailMessage;
    }
    if (this._emailSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSubject = this._emailSubject;
    }
    if (this._smsMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsMessage = this._smsMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InviteMessageTemplateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailMessage = undefined;
      this._emailSubject = undefined;
      this._smsMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailMessage = value.emailMessage;
      this._emailSubject = value.emailSubject;
      this._smsMessage = value.smsMessage;
    }
  }

  // email_message - computed: false, optional: true, required: false
  private _emailMessage?: string; 
  public get emailMessage() {
    return this.getStringAttribute('email_message');
  }
  public set emailMessage(value: string) {
    this._emailMessage = value;
  }
  public resetEmailMessage() {
    this._emailMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageInput() {
    return this._emailMessage;
  }

  // email_subject - computed: false, optional: true, required: false
  private _emailSubject?: string; 
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
  public set emailSubject(value: string) {
    this._emailSubject = value;
  }
  public resetEmailSubject() {
    this._emailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectInput() {
    return this._emailSubject;
  }

  // sms_message - computed: false, optional: true, required: false
  private _smsMessage?: string; 
  public get smsMessage() {
    return this.getStringAttribute('sms_message');
  }
  public set smsMessage(value: string) {
    this._smsMessage = value;
  }
  public resetSmsMessage() {
    this._smsMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMessageInput() {
    return this._smsMessage;
  }
}
export interface AdminCreateUserConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#allow_admin_create_user_only TfUserPool#allow_admin_create_user_only}
  */
  readonly allowAdminCreateUserOnly?: boolean | cdktn.IResolvable;
  /**
  * invite_message_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#invite_message_template TfUserPool#invite_message_template}
  */
  readonly inviteMessageTemplate?: InviteMessageTemplateProperty;
}
export class AdminCreateUserConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdminCreateUserConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAdminCreateUserOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAdminCreateUserOnly = this._allowAdminCreateUserOnly;
    }
    if (this._inviteMessageTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteMessageTemplate = this._inviteMessageTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminCreateUserConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAdminCreateUserOnly = undefined;
      this._inviteMessageTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAdminCreateUserOnly = value.allowAdminCreateUserOnly;
      this._inviteMessageTemplate.internalValue = value.inviteMessageTemplate;
    }
  }

  // allow_admin_create_user_only - computed: false, optional: true, required: false
  private _allowAdminCreateUserOnly?: boolean | cdktn.IResolvable; 
  public get allowAdminCreateUserOnly() {
    return this.getBooleanAttribute('allow_admin_create_user_only');
  }
  public set allowAdminCreateUserOnly(value: boolean | cdktn.IResolvable) {
    this._allowAdminCreateUserOnly = value;
  }
  public resetAllowAdminCreateUserOnly() {
    this._allowAdminCreateUserOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdminCreateUserOnlyInput() {
    return this._allowAdminCreateUserOnly;
  }

  // invite_message_template - computed: false, optional: true, required: false
  private _inviteMessageTemplate = new InviteMessageTemplatePropertyOutputReference(this, "invite_message_template");
  public get inviteMessageTemplate() {
    return this._inviteMessageTemplate;
  }
  public putInviteMessageTemplate(value: InviteMessageTemplateProperty) {
    this._inviteMessageTemplate.internalValue = value;
  }
  public resetInviteMessageTemplate() {
    this._inviteMessageTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteMessageTemplateInput() {
    return this._inviteMessageTemplate.internalValue;
  }
}
export interface DeviceConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#challenge_required_on_new_device TfUserPool#challenge_required_on_new_device}
  */
  readonly challengeRequiredOnNewDevice?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#device_only_remembered_on_user_prompt TfUserPool#device_only_remembered_on_user_prompt}
  */
  readonly deviceOnlyRememberedOnUserPrompt?: boolean | cdktn.IResolvable;
}
export class DeviceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeviceConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challengeRequiredOnNewDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeRequiredOnNewDevice = this._challengeRequiredOnNewDevice;
    }
    if (this._deviceOnlyRememberedOnUserPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceOnlyRememberedOnUserPrompt = this._deviceOnlyRememberedOnUserPrompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._challengeRequiredOnNewDevice = undefined;
      this._deviceOnlyRememberedOnUserPrompt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._challengeRequiredOnNewDevice = value.challengeRequiredOnNewDevice;
      this._deviceOnlyRememberedOnUserPrompt = value.deviceOnlyRememberedOnUserPrompt;
    }
  }

  // challenge_required_on_new_device - computed: false, optional: true, required: false
  private _challengeRequiredOnNewDevice?: boolean | cdktn.IResolvable; 
  public get challengeRequiredOnNewDevice() {
    return this.getBooleanAttribute('challenge_required_on_new_device');
  }
  public set challengeRequiredOnNewDevice(value: boolean | cdktn.IResolvable) {
    this._challengeRequiredOnNewDevice = value;
  }
  public resetChallengeRequiredOnNewDevice() {
    this._challengeRequiredOnNewDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeRequiredOnNewDeviceInput() {
    return this._challengeRequiredOnNewDevice;
  }

  // device_only_remembered_on_user_prompt - computed: false, optional: true, required: false
  private _deviceOnlyRememberedOnUserPrompt?: boolean | cdktn.IResolvable; 
  public get deviceOnlyRememberedOnUserPrompt() {
    return this.getBooleanAttribute('device_only_remembered_on_user_prompt');
  }
  public set deviceOnlyRememberedOnUserPrompt(value: boolean | cdktn.IResolvable) {
    this._deviceOnlyRememberedOnUserPrompt = value;
  }
  public resetDeviceOnlyRememberedOnUserPrompt() {
    this._deviceOnlyRememberedOnUserPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOnlyRememberedOnUserPromptInput() {
    return this._deviceOnlyRememberedOnUserPrompt;
  }
}
export interface EmailConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#configuration_set TfUserPool#configuration_set}
  */
  readonly configurationSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_sending_account TfUserPool#email_sending_account}
  */
  readonly emailSendingAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#from_email_address TfUserPool#from_email_address}
  */
  readonly fromEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#reply_to_email_address TfUserPool#reply_to_email_address}
  */
  readonly replyToEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#source_arn TfUserPool#source_arn}
  */
  readonly sourceArn?: string;
}
export class EmailConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationSet = this._configurationSet;
    }
    if (this._emailSendingAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSendingAccount = this._emailSendingAccount;
    }
    if (this._fromEmailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEmailAddress = this._fromEmailAddress;
    }
    if (this._replyToEmailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyToEmailAddress = this._replyToEmailAddress;
    }
    if (this._sourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArn = this._sourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationSet = undefined;
      this._emailSendingAccount = undefined;
      this._fromEmailAddress = undefined;
      this._replyToEmailAddress = undefined;
      this._sourceArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationSet = value.configurationSet;
      this._emailSendingAccount = value.emailSendingAccount;
      this._fromEmailAddress = value.fromEmailAddress;
      this._replyToEmailAddress = value.replyToEmailAddress;
      this._sourceArn = value.sourceArn;
    }
  }

  // configuration_set - computed: false, optional: true, required: false
  private _configurationSet?: string; 
  public get configurationSet() {
    return this.getStringAttribute('configuration_set');
  }
  public set configurationSet(value: string) {
    this._configurationSet = value;
  }
  public resetConfigurationSet() {
    this._configurationSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetInput() {
    return this._configurationSet;
  }

  // email_sending_account - computed: false, optional: true, required: false
  private _emailSendingAccount?: string; 
  public get emailSendingAccount() {
    return this.getStringAttribute('email_sending_account');
  }
  public set emailSendingAccount(value: string) {
    this._emailSendingAccount = value;
  }
  public resetEmailSendingAccount() {
    this._emailSendingAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSendingAccountInput() {
    return this._emailSendingAccount;
  }

  // from_email_address - computed: false, optional: true, required: false
  private _fromEmailAddress?: string; 
  public get fromEmailAddress() {
    return this.getStringAttribute('from_email_address');
  }
  public set fromEmailAddress(value: string) {
    this._fromEmailAddress = value;
  }
  public resetFromEmailAddress() {
    this._fromEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailAddressInput() {
    return this._fromEmailAddress;
  }

  // reply_to_email_address - computed: false, optional: true, required: false
  private _replyToEmailAddress?: string; 
  public get replyToEmailAddress() {
    return this.getStringAttribute('reply_to_email_address');
  }
  public set replyToEmailAddress(value: string) {
    this._replyToEmailAddress = value;
  }
  public resetReplyToEmailAddress() {
    this._replyToEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToEmailAddressInput() {
    return this._replyToEmailAddress;
  }

  // source_arn - computed: false, optional: true, required: false
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  public resetSourceArn() {
    this._sourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }
}
export interface EmailMfaConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#message TfUserPool#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#subject TfUserPool#subject}
  */
  readonly subject?: string;
}
export class EmailMfaConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailMfaConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailMfaConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._subject = value.subject;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface CustomEmailSenderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#lambda_arn TfUserPool#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#lambda_version TfUserPool#lambda_version}
  */
  readonly lambdaVersion: string;
}
export class CustomEmailSenderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomEmailSenderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._lambdaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaVersion = this._lambdaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomEmailSenderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaArn = undefined;
      this._lambdaVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaArn = value.lambdaArn;
      this._lambdaVersion = value.lambdaVersion;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // lambda_version - computed: false, optional: false, required: true
  private _lambdaVersion?: string; 
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion;
  }
}
export interface CustomSmsSenderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#lambda_arn TfUserPool#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#lambda_version TfUserPool#lambda_version}
  */
  readonly lambdaVersion: string;
}
export class CustomSmsSenderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomSmsSenderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._lambdaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaVersion = this._lambdaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomSmsSenderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaArn = undefined;
      this._lambdaVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaArn = value.lambdaArn;
      this._lambdaVersion = value.lambdaVersion;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // lambda_version - computed: false, optional: false, required: true
  private _lambdaVersion?: string; 
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion;
  }
}
export interface PreTokenGenerationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#lambda_arn TfUserPool#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#lambda_version TfUserPool#lambda_version}
  */
  readonly lambdaVersion: string;
}
export class PreTokenGenerationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PreTokenGenerationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._lambdaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaVersion = this._lambdaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreTokenGenerationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaArn = undefined;
      this._lambdaVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaArn = value.lambdaArn;
      this._lambdaVersion = value.lambdaVersion;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // lambda_version - computed: false, optional: false, required: true
  private _lambdaVersion?: string; 
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion;
  }
}
export interface LambdaConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#create_auth_challenge TfUserPool#create_auth_challenge}
  */
  readonly createAuthChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#custom_message TfUserPool#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#define_auth_challenge TfUserPool#define_auth_challenge}
  */
  readonly defineAuthChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#kms_key_id TfUserPool#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#post_authentication TfUserPool#post_authentication}
  */
  readonly postAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#post_confirmation TfUserPool#post_confirmation}
  */
  readonly postConfirmation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#pre_authentication TfUserPool#pre_authentication}
  */
  readonly preAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#pre_sign_up TfUserPool#pre_sign_up}
  */
  readonly preSignUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#pre_token_generation TfUserPool#pre_token_generation}
  */
  readonly preTokenGeneration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#user_migration TfUserPool#user_migration}
  */
  readonly userMigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#verify_auth_challenge_response TfUserPool#verify_auth_challenge_response}
  */
  readonly verifyAuthChallengeResponse?: string;
  /**
  * custom_email_sender block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#custom_email_sender TfUserPool#custom_email_sender}
  */
  readonly customEmailSender?: CustomEmailSenderProperty;
  /**
  * custom_sms_sender block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#custom_sms_sender TfUserPool#custom_sms_sender}
  */
  readonly customSmsSender?: CustomSmsSenderProperty;
  /**
  * pre_token_generation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#pre_token_generation_config TfUserPool#pre_token_generation_config}
  */
  readonly preTokenGenerationConfig?: PreTokenGenerationConfigProperty;
}
export class LambdaConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createAuthChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAuthChallenge = this._createAuthChallenge;
    }
    if (this._customMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMessage = this._customMessage;
    }
    if (this._defineAuthChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.defineAuthChallenge = this._defineAuthChallenge;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._postAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAuthentication = this._postAuthentication;
    }
    if (this._postConfirmation !== undefined) {
      hasAnyValues = true;
      internalValueResult.postConfirmation = this._postConfirmation;
    }
    if (this._preAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.preAuthentication = this._preAuthentication;
    }
    if (this._preSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSignUp = this._preSignUp;
    }
    if (this._preTokenGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.preTokenGeneration = this._preTokenGeneration;
    }
    if (this._userMigration !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMigration = this._userMigration;
    }
    if (this._verifyAuthChallengeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAuthChallengeResponse = this._verifyAuthChallengeResponse;
    }
    if (this._customEmailSender?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEmailSender = this._customEmailSender?.internalValue;
    }
    if (this._customSmsSender?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSmsSender = this._customSmsSender?.internalValue;
    }
    if (this._preTokenGenerationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preTokenGenerationConfig = this._preTokenGenerationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createAuthChallenge = undefined;
      this._customMessage = undefined;
      this._defineAuthChallenge = undefined;
      this._kmsKeyId = undefined;
      this._postAuthentication = undefined;
      this._postConfirmation = undefined;
      this._preAuthentication = undefined;
      this._preSignUp = undefined;
      this._preTokenGeneration = undefined;
      this._userMigration = undefined;
      this._verifyAuthChallengeResponse = undefined;
      this._customEmailSender.internalValue = undefined;
      this._customSmsSender.internalValue = undefined;
      this._preTokenGenerationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createAuthChallenge = value.createAuthChallenge;
      this._customMessage = value.customMessage;
      this._defineAuthChallenge = value.defineAuthChallenge;
      this._kmsKeyId = value.kmsKeyId;
      this._postAuthentication = value.postAuthentication;
      this._postConfirmation = value.postConfirmation;
      this._preAuthentication = value.preAuthentication;
      this._preSignUp = value.preSignUp;
      this._preTokenGeneration = value.preTokenGeneration;
      this._userMigration = value.userMigration;
      this._verifyAuthChallengeResponse = value.verifyAuthChallengeResponse;
      this._customEmailSender.internalValue = value.customEmailSender;
      this._customSmsSender.internalValue = value.customSmsSender;
      this._preTokenGenerationConfig.internalValue = value.preTokenGenerationConfig;
    }
  }

  // create_auth_challenge - computed: false, optional: true, required: false
  private _createAuthChallenge?: string; 
  public get createAuthChallenge() {
    return this.getStringAttribute('create_auth_challenge');
  }
  public set createAuthChallenge(value: string) {
    this._createAuthChallenge = value;
  }
  public resetCreateAuthChallenge() {
    this._createAuthChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAuthChallengeInput() {
    return this._createAuthChallenge;
  }

  // custom_message - computed: false, optional: true, required: false
  private _customMessage?: string; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
  }

  // define_auth_challenge - computed: false, optional: true, required: false
  private _defineAuthChallenge?: string; 
  public get defineAuthChallenge() {
    return this.getStringAttribute('define_auth_challenge');
  }
  public set defineAuthChallenge(value: string) {
    this._defineAuthChallenge = value;
  }
  public resetDefineAuthChallenge() {
    this._defineAuthChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defineAuthChallengeInput() {
    return this._defineAuthChallenge;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // post_authentication - computed: false, optional: true, required: false
  private _postAuthentication?: string; 
  public get postAuthentication() {
    return this.getStringAttribute('post_authentication');
  }
  public set postAuthentication(value: string) {
    this._postAuthentication = value;
  }
  public resetPostAuthentication() {
    this._postAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAuthenticationInput() {
    return this._postAuthentication;
  }

  // post_confirmation - computed: false, optional: true, required: false
  private _postConfirmation?: string; 
  public get postConfirmation() {
    return this.getStringAttribute('post_confirmation');
  }
  public set postConfirmation(value: string) {
    this._postConfirmation = value;
  }
  public resetPostConfirmation() {
    this._postConfirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postConfirmationInput() {
    return this._postConfirmation;
  }

  // pre_authentication - computed: false, optional: true, required: false
  private _preAuthentication?: string; 
  public get preAuthentication() {
    return this.getStringAttribute('pre_authentication');
  }
  public set preAuthentication(value: string) {
    this._preAuthentication = value;
  }
  public resetPreAuthentication() {
    this._preAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthenticationInput() {
    return this._preAuthentication;
  }

  // pre_sign_up - computed: false, optional: true, required: false
  private _preSignUp?: string; 
  public get preSignUp() {
    return this.getStringAttribute('pre_sign_up');
  }
  public set preSignUp(value: string) {
    this._preSignUp = value;
  }
  public resetPreSignUp() {
    this._preSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSignUpInput() {
    return this._preSignUp;
  }

  // pre_token_generation - computed: true, optional: true, required: false
  private _preTokenGeneration?: string; 
  public get preTokenGeneration() {
    return this.getStringAttribute('pre_token_generation');
  }
  public set preTokenGeneration(value: string) {
    this._preTokenGeneration = value;
  }
  public resetPreTokenGeneration() {
    this._preTokenGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTokenGenerationInput() {
    return this._preTokenGeneration;
  }

  // user_migration - computed: false, optional: true, required: false
  private _userMigration?: string; 
  public get userMigration() {
    return this.getStringAttribute('user_migration');
  }
  public set userMigration(value: string) {
    this._userMigration = value;
  }
  public resetUserMigration() {
    this._userMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMigrationInput() {
    return this._userMigration;
  }

  // verify_auth_challenge_response - computed: false, optional: true, required: false
  private _verifyAuthChallengeResponse?: string; 
  public get verifyAuthChallengeResponse() {
    return this.getStringAttribute('verify_auth_challenge_response');
  }
  public set verifyAuthChallengeResponse(value: string) {
    this._verifyAuthChallengeResponse = value;
  }
  public resetVerifyAuthChallengeResponse() {
    this._verifyAuthChallengeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAuthChallengeResponseInput() {
    return this._verifyAuthChallengeResponse;
  }

  // custom_email_sender - computed: false, optional: true, required: false
  private _customEmailSender = new CustomEmailSenderPropertyOutputReference(this, "custom_email_sender");
  public get customEmailSender() {
    return this._customEmailSender;
  }
  public putCustomEmailSender(value: CustomEmailSenderProperty) {
    this._customEmailSender.internalValue = value;
  }
  public resetCustomEmailSender() {
    this._customEmailSender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEmailSenderInput() {
    return this._customEmailSender.internalValue;
  }

  // custom_sms_sender - computed: false, optional: true, required: false
  private _customSmsSender = new CustomSmsSenderPropertyOutputReference(this, "custom_sms_sender");
  public get customSmsSender() {
    return this._customSmsSender;
  }
  public putCustomSmsSender(value: CustomSmsSenderProperty) {
    this._customSmsSender.internalValue = value;
  }
  public resetCustomSmsSender() {
    this._customSmsSender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSmsSenderInput() {
    return this._customSmsSender.internalValue;
  }

  // pre_token_generation_config - computed: false, optional: true, required: false
  private _preTokenGenerationConfig = new PreTokenGenerationConfigPropertyOutputReference(this, "pre_token_generation_config");
  public get preTokenGenerationConfig() {
    return this._preTokenGenerationConfig;
  }
  public putPreTokenGenerationConfig(value: PreTokenGenerationConfigProperty) {
    this._preTokenGenerationConfig.internalValue = value;
  }
  public resetPreTokenGenerationConfig() {
    this._preTokenGenerationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTokenGenerationConfigInput() {
    return this._preTokenGenerationConfig.internalValue;
  }
}
export interface PasswordPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#minimum_length TfUserPool#minimum_length}
  */
  readonly minimumLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#password_history_size TfUserPool#password_history_size}
  */
  readonly passwordHistorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#require_lowercase TfUserPool#require_lowercase}
  */
  readonly requireLowercase?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#require_numbers TfUserPool#require_numbers}
  */
  readonly requireNumbers?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#require_symbols TfUserPool#require_symbols}
  */
  readonly requireSymbols?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#require_uppercase TfUserPool#require_uppercase}
  */
  readonly requireUppercase?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#temporary_password_validity_days TfUserPool#temporary_password_validity_days}
  */
  readonly temporaryPasswordValidityDays?: number;
}
export class PasswordPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PasswordPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLength = this._minimumLength;
    }
    if (this._passwordHistorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordHistorySize = this._passwordHistorySize;
    }
    if (this._requireLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireLowercase = this._requireLowercase;
    }
    if (this._requireNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireNumbers = this._requireNumbers;
    }
    if (this._requireSymbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSymbols = this._requireSymbols;
    }
    if (this._requireUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireUppercase = this._requireUppercase;
    }
    if (this._temporaryPasswordValidityDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryPasswordValidityDays = this._temporaryPasswordValidityDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PasswordPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minimumLength = undefined;
      this._passwordHistorySize = undefined;
      this._requireLowercase = undefined;
      this._requireNumbers = undefined;
      this._requireSymbols = undefined;
      this._requireUppercase = undefined;
      this._temporaryPasswordValidityDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minimumLength = value.minimumLength;
      this._passwordHistorySize = value.passwordHistorySize;
      this._requireLowercase = value.requireLowercase;
      this._requireNumbers = value.requireNumbers;
      this._requireSymbols = value.requireSymbols;
      this._requireUppercase = value.requireUppercase;
      this._temporaryPasswordValidityDays = value.temporaryPasswordValidityDays;
    }
  }

  // minimum_length - computed: false, optional: true, required: false
  private _minimumLength?: number; 
  public get minimumLength() {
    return this.getNumberAttribute('minimum_length');
  }
  public set minimumLength(value: number) {
    this._minimumLength = value;
  }
  public resetMinimumLength() {
    this._minimumLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLengthInput() {
    return this._minimumLength;
  }

  // password_history_size - computed: false, optional: true, required: false
  private _passwordHistorySize?: number; 
  public get passwordHistorySize() {
    return this.getNumberAttribute('password_history_size');
  }
  public set passwordHistorySize(value: number) {
    this._passwordHistorySize = value;
  }
  public resetPasswordHistorySize() {
    this._passwordHistorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHistorySizeInput() {
    return this._passwordHistorySize;
  }

  // require_lowercase - computed: false, optional: true, required: false
  private _requireLowercase?: boolean | cdktn.IResolvable; 
  public get requireLowercase() {
    return this.getBooleanAttribute('require_lowercase');
  }
  public set requireLowercase(value: boolean | cdktn.IResolvable) {
    this._requireLowercase = value;
  }
  public resetRequireLowercase() {
    this._requireLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLowercaseInput() {
    return this._requireLowercase;
  }

  // require_numbers - computed: false, optional: true, required: false
  private _requireNumbers?: boolean | cdktn.IResolvable; 
  public get requireNumbers() {
    return this.getBooleanAttribute('require_numbers');
  }
  public set requireNumbers(value: boolean | cdktn.IResolvable) {
    this._requireNumbers = value;
  }
  public resetRequireNumbers() {
    this._requireNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireNumbersInput() {
    return this._requireNumbers;
  }

  // require_symbols - computed: false, optional: true, required: false
  private _requireSymbols?: boolean | cdktn.IResolvable; 
  public get requireSymbols() {
    return this.getBooleanAttribute('require_symbols');
  }
  public set requireSymbols(value: boolean | cdktn.IResolvable) {
    this._requireSymbols = value;
  }
  public resetRequireSymbols() {
    this._requireSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSymbolsInput() {
    return this._requireSymbols;
  }

  // require_uppercase - computed: false, optional: true, required: false
  private _requireUppercase?: boolean | cdktn.IResolvable; 
  public get requireUppercase() {
    return this.getBooleanAttribute('require_uppercase');
  }
  public set requireUppercase(value: boolean | cdktn.IResolvable) {
    this._requireUppercase = value;
  }
  public resetRequireUppercase() {
    this._requireUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireUppercaseInput() {
    return this._requireUppercase;
  }

  // temporary_password_validity_days - computed: true, optional: true, required: false
  private _temporaryPasswordValidityDays?: number; 
  public get temporaryPasswordValidityDays() {
    return this.getNumberAttribute('temporary_password_validity_days');
  }
  public set temporaryPasswordValidityDays(value: number) {
    this._temporaryPasswordValidityDays = value;
  }
  public resetTemporaryPasswordValidityDays() {
    this._temporaryPasswordValidityDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryPasswordValidityDaysInput() {
    return this._temporaryPasswordValidityDays;
  }
}
export interface NumberAttributeConstraintsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#max_value TfUserPool#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#min_value TfUserPool#min_value}
  */
  readonly minValue?: string;
}
export class NumberAttributeConstraintsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NumberAttributeConstraintsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NumberAttributeConstraintsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface StringAttributeConstraintsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#max_length TfUserPool#max_length}
  */
  readonly maxLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#min_length TfUserPool#min_length}
  */
  readonly minLength?: string;
}
export class StringAttributeConstraintsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StringAttributeConstraintsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StringAttributeConstraintsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxLength = undefined;
      this._minLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
    }
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: string; 
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }
  public set maxLength(value: string) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: string; 
  public get minLength() {
    return this.getStringAttribute('min_length');
  }
  public set minLength(value: string) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }
}
export interface SchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#attribute_data_type TfUserPool#attribute_data_type}
  */
  readonly attributeDataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#developer_only_attribute TfUserPool#developer_only_attribute}
  */
  readonly developerOnlyAttribute?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#mutable TfUserPool#mutable}
  */
  readonly mutable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#name TfUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#required TfUserPool#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * number_attribute_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#number_attribute_constraints TfUserPool#number_attribute_constraints}
  */
  readonly numberAttributeConstraints?: NumberAttributeConstraintsProperty;
  /**
  * string_attribute_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#string_attribute_constraints TfUserPool#string_attribute_constraints}
  */
  readonly stringAttributeConstraints?: StringAttributeConstraintsProperty;
}
export class SchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeDataType = this._attributeDataType;
    }
    if (this._developerOnlyAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerOnlyAttribute = this._developerOnlyAttribute;
    }
    if (this._mutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutable = this._mutable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._numberAttributeConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberAttributeConstraints = this._numberAttributeConstraints?.internalValue;
    }
    if (this._stringAttributeConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringAttributeConstraints = this._stringAttributeConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeDataType = undefined;
      this._developerOnlyAttribute = undefined;
      this._mutable = undefined;
      this._name = undefined;
      this._required = undefined;
      this._numberAttributeConstraints.internalValue = undefined;
      this._stringAttributeConstraints.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeDataType = value.attributeDataType;
      this._developerOnlyAttribute = value.developerOnlyAttribute;
      this._mutable = value.mutable;
      this._name = value.name;
      this._required = value.required;
      this._numberAttributeConstraints.internalValue = value.numberAttributeConstraints;
      this._stringAttributeConstraints.internalValue = value.stringAttributeConstraints;
    }
  }

  // attribute_data_type - computed: false, optional: false, required: true
  private _attributeDataType?: string; 
  public get attributeDataType() {
    return this.getStringAttribute('attribute_data_type');
  }
  public set attributeDataType(value: string) {
    this._attributeDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDataTypeInput() {
    return this._attributeDataType;
  }

  // developer_only_attribute - computed: false, optional: true, required: false
  private _developerOnlyAttribute?: boolean | cdktn.IResolvable; 
  public get developerOnlyAttribute() {
    return this.getBooleanAttribute('developer_only_attribute');
  }
  public set developerOnlyAttribute(value: boolean | cdktn.IResolvable) {
    this._developerOnlyAttribute = value;
  }
  public resetDeveloperOnlyAttribute() {
    this._developerOnlyAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerOnlyAttributeInput() {
    return this._developerOnlyAttribute;
  }

  // mutable - computed: false, optional: true, required: false
  private _mutable?: boolean | cdktn.IResolvable; 
  public get mutable() {
    return this.getBooleanAttribute('mutable');
  }
  public set mutable(value: boolean | cdktn.IResolvable) {
    this._mutable = value;
  }
  public resetMutable() {
    this._mutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutableInput() {
    return this._mutable;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // number_attribute_constraints - computed: false, optional: true, required: false
  private _numberAttributeConstraints = new NumberAttributeConstraintsPropertyOutputReference(this, "number_attribute_constraints");
  public get numberAttributeConstraints() {
    return this._numberAttributeConstraints;
  }
  public putNumberAttributeConstraints(value: NumberAttributeConstraintsProperty) {
    this._numberAttributeConstraints.internalValue = value;
  }
  public resetNumberAttributeConstraints() {
    this._numberAttributeConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberAttributeConstraintsInput() {
    return this._numberAttributeConstraints.internalValue;
  }

  // string_attribute_constraints - computed: false, optional: true, required: false
  private _stringAttributeConstraints = new StringAttributeConstraintsPropertyOutputReference(this, "string_attribute_constraints");
  public get stringAttributeConstraints() {
    return this._stringAttributeConstraints;
  }
  public putStringAttributeConstraints(value: StringAttributeConstraintsProperty) {
    this._stringAttributeConstraints.internalValue = value;
  }
  public resetStringAttributeConstraints() {
    this._stringAttributeConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringAttributeConstraintsInput() {
    return this._stringAttributeConstraints.internalValue;
  }
}

export class SchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : SchemaProperty[] | cdktn.IResolvable

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
  public get(index: number): SchemaPropertyOutputReference {
    return new SchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SignInPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#allowed_first_auth_factors TfUserPool#allowed_first_auth_factors}
  */
  readonly allowedFirstAuthFactors?: string[];
}
export class SignInPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignInPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedFirstAuthFactors !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFirstAuthFactors = this._allowedFirstAuthFactors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignInPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedFirstAuthFactors = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedFirstAuthFactors = value.allowedFirstAuthFactors;
    }
  }

  // allowed_first_auth_factors - computed: false, optional: true, required: false
  private _allowedFirstAuthFactors?: string[]; 
  public get allowedFirstAuthFactors() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_first_auth_factors'));
  }
  public set allowedFirstAuthFactors(value: string[]) {
    this._allowedFirstAuthFactors = value;
  }
  public resetAllowedFirstAuthFactors() {
    this._allowedFirstAuthFactors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFirstAuthFactorsInput() {
    return this._allowedFirstAuthFactors;
  }
}
export interface SmsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#external_id TfUserPool#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#sns_caller_arn TfUserPool#sns_caller_arn}
  */
  readonly snsCallerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#sns_region TfUserPool#sns_region}
  */
  readonly snsRegion?: string;
}
export class SmsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmsConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._snsCallerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsCallerArn = this._snsCallerArn;
    }
    if (this._snsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsRegion = this._snsRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmsConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._snsCallerArn = undefined;
      this._snsRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._snsCallerArn = value.snsCallerArn;
      this._snsRegion = value.snsRegion;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // sns_caller_arn - computed: false, optional: false, required: true
  private _snsCallerArn?: string; 
  public get snsCallerArn() {
    return this.getStringAttribute('sns_caller_arn');
  }
  public set snsCallerArn(value: string) {
    this._snsCallerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsCallerArnInput() {
    return this._snsCallerArn;
  }

  // sns_region - computed: true, optional: true, required: false
  private _snsRegion?: string; 
  public get snsRegion() {
    return this.getStringAttribute('sns_region');
  }
  public set snsRegion(value: string) {
    this._snsRegion = value;
  }
  public resetSnsRegion() {
    this._snsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsRegionInput() {
    return this._snsRegion;
  }
}
export interface SoftwareTokenMfaConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#enabled TfUserPool#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}
export class SoftwareTokenMfaConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SoftwareTokenMfaConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SoftwareTokenMfaConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface UserAttributeUpdateSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#attributes_require_verification_before_update TfUserPool#attributes_require_verification_before_update}
  */
  readonly attributesRequireVerificationBeforeUpdate: string[];
}
export class UserAttributeUpdateSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserAttributeUpdateSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributesRequireVerificationBeforeUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesRequireVerificationBeforeUpdate = this._attributesRequireVerificationBeforeUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAttributeUpdateSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributesRequireVerificationBeforeUpdate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributesRequireVerificationBeforeUpdate = value.attributesRequireVerificationBeforeUpdate;
    }
  }

  // attributes_require_verification_before_update - computed: false, optional: false, required: true
  private _attributesRequireVerificationBeforeUpdate?: string[]; 
  public get attributesRequireVerificationBeforeUpdate() {
    return cdktn.Fn.tolist(this.getListAttribute('attributes_require_verification_before_update'));
  }
  public set attributesRequireVerificationBeforeUpdate(value: string[]) {
    this._attributesRequireVerificationBeforeUpdate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesRequireVerificationBeforeUpdateInput() {
    return this._attributesRequireVerificationBeforeUpdate;
  }
}
export interface AdvancedSecurityAdditionalFlowsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#custom_auth_mode TfUserPool#custom_auth_mode}
  */
  readonly customAuthMode?: string;
}
export class AdvancedSecurityAdditionalFlowsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedSecurityAdditionalFlowsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAuthMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAuthMode = this._customAuthMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedSecurityAdditionalFlowsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customAuthMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customAuthMode = value.customAuthMode;
    }
  }

  // custom_auth_mode - computed: true, optional: true, required: false
  private _customAuthMode?: string; 
  public get customAuthMode() {
    return this.getStringAttribute('custom_auth_mode');
  }
  public set customAuthMode(value: string) {
    this._customAuthMode = value;
  }
  public resetCustomAuthMode() {
    this._customAuthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthModeInput() {
    return this._customAuthMode;
  }
}
export interface UserPoolAddOnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#advanced_security_mode TfUserPool#advanced_security_mode}
  */
  readonly advancedSecurityMode: string;
  /**
  * advanced_security_additional_flows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#advanced_security_additional_flows TfUserPool#advanced_security_additional_flows}
  */
  readonly advancedSecurityAdditionalFlows?: AdvancedSecurityAdditionalFlowsProperty;
}
export class UserPoolAddOnsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserPoolAddOnsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedSecurityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSecurityMode = this._advancedSecurityMode;
    }
    if (this._advancedSecurityAdditionalFlows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSecurityAdditionalFlows = this._advancedSecurityAdditionalFlows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPoolAddOnsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedSecurityMode = undefined;
      this._advancedSecurityAdditionalFlows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedSecurityMode = value.advancedSecurityMode;
      this._advancedSecurityAdditionalFlows.internalValue = value.advancedSecurityAdditionalFlows;
    }
  }

  // advanced_security_mode - computed: false, optional: false, required: true
  private _advancedSecurityMode?: string; 
  public get advancedSecurityMode() {
    return this.getStringAttribute('advanced_security_mode');
  }
  public set advancedSecurityMode(value: string) {
    this._advancedSecurityMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityModeInput() {
    return this._advancedSecurityMode;
  }

  // advanced_security_additional_flows - computed: false, optional: true, required: false
  private _advancedSecurityAdditionalFlows = new AdvancedSecurityAdditionalFlowsPropertyOutputReference(this, "advanced_security_additional_flows");
  public get advancedSecurityAdditionalFlows() {
    return this._advancedSecurityAdditionalFlows;
  }
  public putAdvancedSecurityAdditionalFlows(value: AdvancedSecurityAdditionalFlowsProperty) {
    this._advancedSecurityAdditionalFlows.internalValue = value;
  }
  public resetAdvancedSecurityAdditionalFlows() {
    this._advancedSecurityAdditionalFlows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityAdditionalFlowsInput() {
    return this._advancedSecurityAdditionalFlows.internalValue;
  }
}
export interface UsernameConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#case_sensitive TfUserPool#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktn.IResolvable;
}
export class UsernameConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UsernameConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UsernameConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
    }
  }

  // case_sensitive - computed: true, optional: true, required: false
  private _caseSensitive?: boolean | cdktn.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktn.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }
}
export interface VerificationMessageTemplateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#default_email_option TfUserPool#default_email_option}
  */
  readonly defaultEmailOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_message TfUserPool#email_message}
  */
  readonly emailMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_message_by_link TfUserPool#email_message_by_link}
  */
  readonly emailMessageByLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_subject TfUserPool#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#email_subject_by_link TfUserPool#email_subject_by_link}
  */
  readonly emailSubjectByLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#sms_message TfUserPool#sms_message}
  */
  readonly smsMessage?: string;
}
export class VerificationMessageTemplatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerificationMessageTemplateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEmailOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEmailOption = this._defaultEmailOption;
    }
    if (this._emailMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMessage = this._emailMessage;
    }
    if (this._emailMessageByLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMessageByLink = this._emailMessageByLink;
    }
    if (this._emailSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSubject = this._emailSubject;
    }
    if (this._emailSubjectByLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSubjectByLink = this._emailSubjectByLink;
    }
    if (this._smsMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsMessage = this._smsMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerificationMessageTemplateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEmailOption = undefined;
      this._emailMessage = undefined;
      this._emailMessageByLink = undefined;
      this._emailSubject = undefined;
      this._emailSubjectByLink = undefined;
      this._smsMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEmailOption = value.defaultEmailOption;
      this._emailMessage = value.emailMessage;
      this._emailMessageByLink = value.emailMessageByLink;
      this._emailSubject = value.emailSubject;
      this._emailSubjectByLink = value.emailSubjectByLink;
      this._smsMessage = value.smsMessage;
    }
  }

  // default_email_option - computed: false, optional: true, required: false
  private _defaultEmailOption?: string; 
  public get defaultEmailOption() {
    return this.getStringAttribute('default_email_option');
  }
  public set defaultEmailOption(value: string) {
    this._defaultEmailOption = value;
  }
  public resetDefaultEmailOption() {
    this._defaultEmailOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEmailOptionInput() {
    return this._defaultEmailOption;
  }

  // email_message - computed: true, optional: true, required: false
  private _emailMessage?: string; 
  public get emailMessage() {
    return this.getStringAttribute('email_message');
  }
  public set emailMessage(value: string) {
    this._emailMessage = value;
  }
  public resetEmailMessage() {
    this._emailMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageInput() {
    return this._emailMessage;
  }

  // email_message_by_link - computed: true, optional: true, required: false
  private _emailMessageByLink?: string; 
  public get emailMessageByLink() {
    return this.getStringAttribute('email_message_by_link');
  }
  public set emailMessageByLink(value: string) {
    this._emailMessageByLink = value;
  }
  public resetEmailMessageByLink() {
    this._emailMessageByLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageByLinkInput() {
    return this._emailMessageByLink;
  }

  // email_subject - computed: true, optional: true, required: false
  private _emailSubject?: string; 
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
  public set emailSubject(value: string) {
    this._emailSubject = value;
  }
  public resetEmailSubject() {
    this._emailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectInput() {
    return this._emailSubject;
  }

  // email_subject_by_link - computed: true, optional: true, required: false
  private _emailSubjectByLink?: string; 
  public get emailSubjectByLink() {
    return this.getStringAttribute('email_subject_by_link');
  }
  public set emailSubjectByLink(value: string) {
    this._emailSubjectByLink = value;
  }
  public resetEmailSubjectByLink() {
    this._emailSubjectByLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectByLinkInput() {
    return this._emailSubjectByLink;
  }

  // sms_message - computed: true, optional: true, required: false
  private _smsMessage?: string; 
  public get smsMessage() {
    return this.getStringAttribute('sms_message');
  }
  public set smsMessage(value: string) {
    this._smsMessage = value;
  }
  public resetSmsMessage() {
    this._smsMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMessageInput() {
    return this._smsMessage;
  }
}
export interface WebAuthnConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#relying_party_id TfUserPool#relying_party_id}
  */
  readonly relyingPartyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_user_pool#user_verification TfUserPool#user_verification}
  */
  readonly userVerification?: string;
}
export class WebAuthnConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAuthnConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relyingPartyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relyingPartyId = this._relyingPartyId;
    }
    if (this._userVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.userVerification = this._userVerification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAuthnConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relyingPartyId = undefined;
      this._userVerification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relyingPartyId = value.relyingPartyId;
      this._userVerification = value.userVerification;
    }
  }

  // relying_party_id - computed: false, optional: true, required: false
  private _relyingPartyId?: string; 
  public get relyingPartyId() {
    return this.getStringAttribute('relying_party_id');
  }
  public set relyingPartyId(value: string) {
    this._relyingPartyId = value;
  }
  public resetRelyingPartyId() {
    this._relyingPartyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingPartyIdInput() {
    return this._relyingPartyId;
  }

  // user_verification - computed: false, optional: true, required: false
  private _userVerification?: string; 
  public get userVerification() {
    return this.getStringAttribute('user_verification');
  }
  public set userVerification(value: string) {
    this._userVerification = value;
  }
  public resetUserVerification() {
    this._userVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVerificationInput() {
    return this._userVerification;
  }
}
}
