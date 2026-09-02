// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfRiskConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#client_id TfRiskConfiguration#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#id TfRiskConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#region TfRiskConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#user_pool_id TfRiskConfiguration#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * account_takeover_risk_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#account_takeover_risk_configuration TfRiskConfiguration#account_takeover_risk_configuration}
  */
  readonly accountTakeoverRiskConfiguration?: TfRiskConfiguration.AccountTakeoverRiskConfigurationProperty;
  /**
  * compromised_credentials_risk_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#compromised_credentials_risk_configuration TfRiskConfiguration#compromised_credentials_risk_configuration}
  */
  readonly compromisedCredentialsRiskConfiguration?: TfRiskConfiguration.CompromisedCredentialsRiskConfigurationProperty;
  /**
  * risk_exception_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#risk_exception_configuration TfRiskConfiguration#risk_exception_configuration}
  */
  readonly riskExceptionConfiguration?: TfRiskConfiguration.RiskExceptionConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration aws_cognito_risk_configuration}
*/
export class TfRiskConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_risk_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfRiskConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfRiskConfiguration to import
  * @param importFromId The id of the existing TfRiskConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfRiskConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_risk_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration aws_cognito_risk_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfRiskConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: TfRiskConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_risk_configuration',
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
    this._clientId = config.clientId;
    this._id = config.id;
    this._region = config.region;
    this._userPoolId = config.userPoolId;
    this._accountTakeoverRiskConfiguration.internalValue = config.accountTakeoverRiskConfiguration;
    this._compromisedCredentialsRiskConfiguration.internalValue = config.compromisedCredentialsRiskConfiguration;
    this._riskExceptionConfiguration.internalValue = config.riskExceptionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // account_takeover_risk_configuration - computed: false, optional: true, required: false
  private _accountTakeoverRiskConfiguration = new TfRiskConfiguration.AccountTakeoverRiskConfigurationPropertyOutputReference(this, "account_takeover_risk_configuration");
  public get accountTakeoverRiskConfiguration() {
    return this._accountTakeoverRiskConfiguration;
  }
  public putAccountTakeoverRiskConfiguration(value: TfRiskConfiguration.AccountTakeoverRiskConfigurationProperty) {
    this._accountTakeoverRiskConfiguration.internalValue = value;
  }
  public resetAccountTakeoverRiskConfiguration() {
    this._accountTakeoverRiskConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTakeoverRiskConfigurationInput() {
    return this._accountTakeoverRiskConfiguration.internalValue;
  }

  // compromised_credentials_risk_configuration - computed: false, optional: true, required: false
  private _compromisedCredentialsRiskConfiguration = new TfRiskConfiguration.CompromisedCredentialsRiskConfigurationPropertyOutputReference(this, "compromised_credentials_risk_configuration");
  public get compromisedCredentialsRiskConfiguration() {
    return this._compromisedCredentialsRiskConfiguration;
  }
  public putCompromisedCredentialsRiskConfiguration(value: TfRiskConfiguration.CompromisedCredentialsRiskConfigurationProperty) {
    this._compromisedCredentialsRiskConfiguration.internalValue = value;
  }
  public resetCompromisedCredentialsRiskConfiguration() {
    this._compromisedCredentialsRiskConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compromisedCredentialsRiskConfigurationInput() {
    return this._compromisedCredentialsRiskConfiguration.internalValue;
  }

  // risk_exception_configuration - computed: false, optional: true, required: false
  private _riskExceptionConfiguration = new TfRiskConfiguration.RiskExceptionConfigurationPropertyOutputReference(this, "risk_exception_configuration");
  public get riskExceptionConfiguration() {
    return this._riskExceptionConfiguration;
  }
  public putRiskExceptionConfiguration(value: TfRiskConfiguration.RiskExceptionConfigurationProperty) {
    this._riskExceptionConfiguration.internalValue = value;
  }
  public resetRiskExceptionConfiguration() {
    this._riskExceptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskExceptionConfigurationInput() {
    return this._riskExceptionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktn.stringToTerraform(this._clientId),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      user_pool_id: cdktn.stringToTerraform(this._userPoolId),
      account_takeover_risk_configuration: tfRiskConfigurationAccountTakeoverRiskConfigurationPropertyToTerraform(this._accountTakeoverRiskConfiguration.internalValue),
      compromised_credentials_risk_configuration: tfRiskConfigurationCompromisedCredentialsRiskConfigurationPropertyToTerraform(this._compromisedCredentialsRiskConfiguration.internalValue),
      risk_exception_configuration: tfRiskConfigurationRiskExceptionConfigurationPropertyToTerraform(this._riskExceptionConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktn.stringToHclTerraform(this._clientId),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_pool_id: {
        value: cdktn.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_takeover_risk_configuration: {
        value: tfRiskConfigurationAccountTakeoverRiskConfigurationPropertyToHclTerraform(this._accountTakeoverRiskConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRiskConfiguration.AccountTakeoverRiskConfigurationPropertyList",
      },
      compromised_credentials_risk_configuration: {
        value: tfRiskConfigurationCompromisedCredentialsRiskConfigurationPropertyToHclTerraform(this._compromisedCredentialsRiskConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRiskConfiguration.CompromisedCredentialsRiskConfigurationPropertyList",
      },
      risk_exception_configuration: {
        value: tfRiskConfigurationRiskExceptionConfigurationPropertyToHclTerraform(this._riskExceptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRiskConfiguration.RiskExceptionConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfRiskConfigurationHighActionPropertyToTerraform(struct?: TfRiskConfiguration.HighActionPropertyOutputReference | TfRiskConfiguration.HighActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_action: cdktn.stringToTerraform(struct!.eventAction),
    notify: cdktn.booleanToTerraform(struct!.notify),
  }
}


export function tfRiskConfigurationHighActionPropertyToHclTerraform(struct?: TfRiskConfiguration.HighActionPropertyOutputReference | TfRiskConfiguration.HighActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_action: {
      value: cdktn.stringToHclTerraform(struct!.eventAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify: {
      value: cdktn.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationLowActionPropertyToTerraform(struct?: TfRiskConfiguration.LowActionPropertyOutputReference | TfRiskConfiguration.LowActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_action: cdktn.stringToTerraform(struct!.eventAction),
    notify: cdktn.booleanToTerraform(struct!.notify),
  }
}


export function tfRiskConfigurationLowActionPropertyToHclTerraform(struct?: TfRiskConfiguration.LowActionPropertyOutputReference | TfRiskConfiguration.LowActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_action: {
      value: cdktn.stringToHclTerraform(struct!.eventAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify: {
      value: cdktn.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationMediumActionPropertyToTerraform(struct?: TfRiskConfiguration.MediumActionPropertyOutputReference | TfRiskConfiguration.MediumActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_action: cdktn.stringToTerraform(struct!.eventAction),
    notify: cdktn.booleanToTerraform(struct!.notify),
  }
}


export function tfRiskConfigurationMediumActionPropertyToHclTerraform(struct?: TfRiskConfiguration.MediumActionPropertyOutputReference | TfRiskConfiguration.MediumActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_action: {
      value: cdktn.stringToHclTerraform(struct!.eventAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify: {
      value: cdktn.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationAccountTakeoverRiskConfigurationActionsPropertyToTerraform(struct?: TfRiskConfiguration.AccountTakeoverRiskConfigurationActionsPropertyOutputReference | TfRiskConfiguration.AccountTakeoverRiskConfigurationActionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    high_action: tfRiskConfigurationHighActionPropertyToTerraform(struct!.highAction),
    low_action: tfRiskConfigurationLowActionPropertyToTerraform(struct!.lowAction),
    medium_action: tfRiskConfigurationMediumActionPropertyToTerraform(struct!.mediumAction),
  }
}


export function tfRiskConfigurationAccountTakeoverRiskConfigurationActionsPropertyToHclTerraform(struct?: TfRiskConfiguration.AccountTakeoverRiskConfigurationActionsPropertyOutputReference | TfRiskConfiguration.AccountTakeoverRiskConfigurationActionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    high_action: {
      value: tfRiskConfigurationHighActionPropertyToHclTerraform(struct!.highAction),
      isBlock: true,
      type: "list",
      storageClassType: "HighActionPropertyList",
    },
    low_action: {
      value: tfRiskConfigurationLowActionPropertyToHclTerraform(struct!.lowAction),
      isBlock: true,
      type: "list",
      storageClassType: "LowActionPropertyList",
    },
    medium_action: {
      value: tfRiskConfigurationMediumActionPropertyToHclTerraform(struct!.mediumAction),
      isBlock: true,
      type: "list",
      storageClassType: "MediumActionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationBlockEmailPropertyToTerraform(struct?: TfRiskConfiguration.BlockEmailPropertyOutputReference | TfRiskConfiguration.BlockEmailProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    html_body: cdktn.stringToTerraform(struct!.htmlBody),
    subject: cdktn.stringToTerraform(struct!.subject),
    text_body: cdktn.stringToTerraform(struct!.textBody),
  }
}


export function tfRiskConfigurationBlockEmailPropertyToHclTerraform(struct?: TfRiskConfiguration.BlockEmailPropertyOutputReference | TfRiskConfiguration.BlockEmailProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    html_body: {
      value: cdktn.stringToHclTerraform(struct!.htmlBody),
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
    text_body: {
      value: cdktn.stringToHclTerraform(struct!.textBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationMfaEmailPropertyToTerraform(struct?: TfRiskConfiguration.MfaEmailPropertyOutputReference | TfRiskConfiguration.MfaEmailProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    html_body: cdktn.stringToTerraform(struct!.htmlBody),
    subject: cdktn.stringToTerraform(struct!.subject),
    text_body: cdktn.stringToTerraform(struct!.textBody),
  }
}


export function tfRiskConfigurationMfaEmailPropertyToHclTerraform(struct?: TfRiskConfiguration.MfaEmailPropertyOutputReference | TfRiskConfiguration.MfaEmailProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    html_body: {
      value: cdktn.stringToHclTerraform(struct!.htmlBody),
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
    text_body: {
      value: cdktn.stringToHclTerraform(struct!.textBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationNoActionEmailPropertyToTerraform(struct?: TfRiskConfiguration.NoActionEmailPropertyOutputReference | TfRiskConfiguration.NoActionEmailProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    html_body: cdktn.stringToTerraform(struct!.htmlBody),
    subject: cdktn.stringToTerraform(struct!.subject),
    text_body: cdktn.stringToTerraform(struct!.textBody),
  }
}


export function tfRiskConfigurationNoActionEmailPropertyToHclTerraform(struct?: TfRiskConfiguration.NoActionEmailPropertyOutputReference | TfRiskConfiguration.NoActionEmailProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    html_body: {
      value: cdktn.stringToHclTerraform(struct!.htmlBody),
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
    text_body: {
      value: cdktn.stringToHclTerraform(struct!.textBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationNotifyConfigurationPropertyToTerraform(struct?: TfRiskConfiguration.NotifyConfigurationPropertyOutputReference | TfRiskConfiguration.NotifyConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.stringToTerraform(struct!.from),
    reply_to: cdktn.stringToTerraform(struct!.replyTo),
    source_arn: cdktn.stringToTerraform(struct!.sourceArn),
    block_email: tfRiskConfigurationBlockEmailPropertyToTerraform(struct!.blockEmail),
    mfa_email: tfRiskConfigurationMfaEmailPropertyToTerraform(struct!.mfaEmail),
    no_action_email: tfRiskConfigurationNoActionEmailPropertyToTerraform(struct!.noActionEmail),
  }
}


export function tfRiskConfigurationNotifyConfigurationPropertyToHclTerraform(struct?: TfRiskConfiguration.NotifyConfigurationPropertyOutputReference | TfRiskConfiguration.NotifyConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reply_to: {
      value: cdktn.stringToHclTerraform(struct!.replyTo),
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
    block_email: {
      value: tfRiskConfigurationBlockEmailPropertyToHclTerraform(struct!.blockEmail),
      isBlock: true,
      type: "list",
      storageClassType: "BlockEmailPropertyList",
    },
    mfa_email: {
      value: tfRiskConfigurationMfaEmailPropertyToHclTerraform(struct!.mfaEmail),
      isBlock: true,
      type: "list",
      storageClassType: "MfaEmailPropertyList",
    },
    no_action_email: {
      value: tfRiskConfigurationNoActionEmailPropertyToHclTerraform(struct!.noActionEmail),
      isBlock: true,
      type: "list",
      storageClassType: "NoActionEmailPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationAccountTakeoverRiskConfigurationPropertyToTerraform(struct?: TfRiskConfiguration.AccountTakeoverRiskConfigurationPropertyOutputReference | TfRiskConfiguration.AccountTakeoverRiskConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: tfRiskConfigurationAccountTakeoverRiskConfigurationActionsPropertyToTerraform(struct!.actions),
    notify_configuration: tfRiskConfigurationNotifyConfigurationPropertyToTerraform(struct!.notifyConfiguration),
  }
}


export function tfRiskConfigurationAccountTakeoverRiskConfigurationPropertyToHclTerraform(struct?: TfRiskConfiguration.AccountTakeoverRiskConfigurationPropertyOutputReference | TfRiskConfiguration.AccountTakeoverRiskConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: tfRiskConfigurationAccountTakeoverRiskConfigurationActionsPropertyToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "AccountTakeoverRiskConfigurationActionsPropertyList",
    },
    notify_configuration: {
      value: tfRiskConfigurationNotifyConfigurationPropertyToHclTerraform(struct!.notifyConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NotifyConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationCompromisedCredentialsRiskConfigurationActionsPropertyToTerraform(struct?: TfRiskConfiguration.CompromisedCredentialsRiskConfigurationActionsPropertyOutputReference | TfRiskConfiguration.CompromisedCredentialsRiskConfigurationActionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_action: cdktn.stringToTerraform(struct!.eventAction),
  }
}


export function tfRiskConfigurationCompromisedCredentialsRiskConfigurationActionsPropertyToHclTerraform(struct?: TfRiskConfiguration.CompromisedCredentialsRiskConfigurationActionsPropertyOutputReference | TfRiskConfiguration.CompromisedCredentialsRiskConfigurationActionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_action: {
      value: cdktn.stringToHclTerraform(struct!.eventAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationCompromisedCredentialsRiskConfigurationPropertyToTerraform(struct?: TfRiskConfiguration.CompromisedCredentialsRiskConfigurationPropertyOutputReference | TfRiskConfiguration.CompromisedCredentialsRiskConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventFilter),
    actions: tfRiskConfigurationCompromisedCredentialsRiskConfigurationActionsPropertyToTerraform(struct!.actions),
  }
}


export function tfRiskConfigurationCompromisedCredentialsRiskConfigurationPropertyToHclTerraform(struct?: TfRiskConfiguration.CompromisedCredentialsRiskConfigurationPropertyOutputReference | TfRiskConfiguration.CompromisedCredentialsRiskConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_filter: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    actions: {
      value: tfRiskConfigurationCompromisedCredentialsRiskConfigurationActionsPropertyToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "CompromisedCredentialsRiskConfigurationActionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRiskConfigurationRiskExceptionConfigurationPropertyToTerraform(struct?: TfRiskConfiguration.RiskExceptionConfigurationPropertyOutputReference | TfRiskConfiguration.RiskExceptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blocked_ip_range_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blockedIpRangeList),
    skipped_ip_range_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skippedIpRangeList),
  }
}


export function tfRiskConfigurationRiskExceptionConfigurationPropertyToHclTerraform(struct?: TfRiskConfiguration.RiskExceptionConfigurationPropertyOutputReference | TfRiskConfiguration.RiskExceptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blocked_ip_range_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blockedIpRangeList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    skipped_ip_range_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skippedIpRangeList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfRiskConfiguration {
export interface HighActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#event_action TfRiskConfiguration#event_action}
  */
  readonly eventAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#notify TfRiskConfiguration#notify}
  */
  readonly notify: boolean | cdktn.IResolvable;
}
export class HighActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HighActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HighActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventAction = undefined;
      this._notify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventAction = value.eventAction;
      this._notify = value.notify;
    }
  }

  // event_action - computed: false, optional: false, required: true
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // notify - computed: false, optional: false, required: true
  private _notify?: boolean | cdktn.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktn.IResolvable) {
    this._notify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}
export interface LowActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#event_action TfRiskConfiguration#event_action}
  */
  readonly eventAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#notify TfRiskConfiguration#notify}
  */
  readonly notify: boolean | cdktn.IResolvable;
}
export class LowActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LowActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LowActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventAction = undefined;
      this._notify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventAction = value.eventAction;
      this._notify = value.notify;
    }
  }

  // event_action - computed: false, optional: false, required: true
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // notify - computed: false, optional: false, required: true
  private _notify?: boolean | cdktn.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktn.IResolvable) {
    this._notify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}
export interface MediumActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#event_action TfRiskConfiguration#event_action}
  */
  readonly eventAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#notify TfRiskConfiguration#notify}
  */
  readonly notify: boolean | cdktn.IResolvable;
}
export class MediumActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediumActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediumActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventAction = undefined;
      this._notify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventAction = value.eventAction;
      this._notify = value.notify;
    }
  }

  // event_action - computed: false, optional: false, required: true
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // notify - computed: false, optional: false, required: true
  private _notify?: boolean | cdktn.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktn.IResolvable) {
    this._notify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}
export interface AccountTakeoverRiskConfigurationActionsProperty {
  /**
  * high_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#high_action TfRiskConfiguration#high_action}
  */
  readonly highAction?: HighActionProperty;
  /**
  * low_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#low_action TfRiskConfiguration#low_action}
  */
  readonly lowAction?: LowActionProperty;
  /**
  * medium_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#medium_action TfRiskConfiguration#medium_action}
  */
  readonly mediumAction?: MediumActionProperty;
}
export class AccountTakeoverRiskConfigurationActionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountTakeoverRiskConfigurationActionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAction = this._highAction?.internalValue;
    }
    if (this._lowAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowAction = this._lowAction?.internalValue;
    }
    if (this._mediumAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumAction = this._mediumAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountTakeoverRiskConfigurationActionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highAction.internalValue = undefined;
      this._lowAction.internalValue = undefined;
      this._mediumAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highAction.internalValue = value.highAction;
      this._lowAction.internalValue = value.lowAction;
      this._mediumAction.internalValue = value.mediumAction;
    }
  }

  // high_action - computed: false, optional: true, required: false
  private _highAction = new HighActionPropertyOutputReference(this, "high_action");
  public get highAction() {
    return this._highAction;
  }
  public putHighAction(value: HighActionProperty) {
    this._highAction.internalValue = value;
  }
  public resetHighAction() {
    this._highAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highActionInput() {
    return this._highAction.internalValue;
  }

  // low_action - computed: false, optional: true, required: false
  private _lowAction = new LowActionPropertyOutputReference(this, "low_action");
  public get lowAction() {
    return this._lowAction;
  }
  public putLowAction(value: LowActionProperty) {
    this._lowAction.internalValue = value;
  }
  public resetLowAction() {
    this._lowAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowActionInput() {
    return this._lowAction.internalValue;
  }

  // medium_action - computed: false, optional: true, required: false
  private _mediumAction = new MediumActionPropertyOutputReference(this, "medium_action");
  public get mediumAction() {
    return this._mediumAction;
  }
  public putMediumAction(value: MediumActionProperty) {
    this._mediumAction.internalValue = value;
  }
  public resetMediumAction() {
    this._mediumAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumActionInput() {
    return this._mediumAction.internalValue;
  }
}
export interface BlockEmailProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#html_body TfRiskConfiguration#html_body}
  */
  readonly htmlBody: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#subject TfRiskConfiguration#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#text_body TfRiskConfiguration#text_body}
  */
  readonly textBody: string;
}
export class BlockEmailPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlockEmailProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htmlBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlBody = this._htmlBody;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._textBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBody = this._textBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockEmailProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._htmlBody = undefined;
      this._subject = undefined;
      this._textBody = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._htmlBody = value.htmlBody;
      this._subject = value.subject;
      this._textBody = value.textBody;
    }
  }

  // html_body - computed: false, optional: false, required: true
  private _htmlBody?: string; 
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }
  public set htmlBody(value: string) {
    this._htmlBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlBodyInput() {
    return this._htmlBody;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text_body - computed: false, optional: false, required: true
  private _textBody?: string; 
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
  public set textBody(value: string) {
    this._textBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textBodyInput() {
    return this._textBody;
  }
}
export interface MfaEmailProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#html_body TfRiskConfiguration#html_body}
  */
  readonly htmlBody: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#subject TfRiskConfiguration#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#text_body TfRiskConfiguration#text_body}
  */
  readonly textBody: string;
}
export class MfaEmailPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MfaEmailProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htmlBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlBody = this._htmlBody;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._textBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBody = this._textBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaEmailProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._htmlBody = undefined;
      this._subject = undefined;
      this._textBody = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._htmlBody = value.htmlBody;
      this._subject = value.subject;
      this._textBody = value.textBody;
    }
  }

  // html_body - computed: false, optional: false, required: true
  private _htmlBody?: string; 
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }
  public set htmlBody(value: string) {
    this._htmlBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlBodyInput() {
    return this._htmlBody;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text_body - computed: false, optional: false, required: true
  private _textBody?: string; 
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
  public set textBody(value: string) {
    this._textBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textBodyInput() {
    return this._textBody;
  }
}
export interface NoActionEmailProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#html_body TfRiskConfiguration#html_body}
  */
  readonly htmlBody: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#subject TfRiskConfiguration#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#text_body TfRiskConfiguration#text_body}
  */
  readonly textBody: string;
}
export class NoActionEmailPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NoActionEmailProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htmlBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlBody = this._htmlBody;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._textBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBody = this._textBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoActionEmailProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._htmlBody = undefined;
      this._subject = undefined;
      this._textBody = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._htmlBody = value.htmlBody;
      this._subject = value.subject;
      this._textBody = value.textBody;
    }
  }

  // html_body - computed: false, optional: false, required: true
  private _htmlBody?: string; 
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }
  public set htmlBody(value: string) {
    this._htmlBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlBodyInput() {
    return this._htmlBody;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text_body - computed: false, optional: false, required: true
  private _textBody?: string; 
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
  public set textBody(value: string) {
    this._textBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textBodyInput() {
    return this._textBody;
  }
}
export interface NotifyConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#from TfRiskConfiguration#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#reply_to TfRiskConfiguration#reply_to}
  */
  readonly replyTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#source_arn TfRiskConfiguration#source_arn}
  */
  readonly sourceArn: string;
  /**
  * block_email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#block_email TfRiskConfiguration#block_email}
  */
  readonly blockEmail?: BlockEmailProperty;
  /**
  * mfa_email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#mfa_email TfRiskConfiguration#mfa_email}
  */
  readonly mfaEmail?: MfaEmailProperty;
  /**
  * no_action_email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#no_action_email TfRiskConfiguration#no_action_email}
  */
  readonly noActionEmail?: NoActionEmailProperty;
}
export class NotifyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotifyConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._replyTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyTo = this._replyTo;
    }
    if (this._sourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArn = this._sourceArn;
    }
    if (this._blockEmail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockEmail = this._blockEmail?.internalValue;
    }
    if (this._mfaEmail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaEmail = this._mfaEmail?.internalValue;
    }
    if (this._noActionEmail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noActionEmail = this._noActionEmail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotifyConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._replyTo = undefined;
      this._sourceArn = undefined;
      this._blockEmail.internalValue = undefined;
      this._mfaEmail.internalValue = undefined;
      this._noActionEmail.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._replyTo = value.replyTo;
      this._sourceArn = value.sourceArn;
      this._blockEmail.internalValue = value.blockEmail;
      this._mfaEmail.internalValue = value.mfaEmail;
      this._noActionEmail.internalValue = value.noActionEmail;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // reply_to - computed: false, optional: true, required: false
  private _replyTo?: string; 
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }
  public set replyTo(value: string) {
    this._replyTo = value;
  }
  public resetReplyTo() {
    this._replyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToInput() {
    return this._replyTo;
  }

  // source_arn - computed: false, optional: false, required: true
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }

  // block_email - computed: false, optional: true, required: false
  private _blockEmail = new BlockEmailPropertyOutputReference(this, "block_email");
  public get blockEmail() {
    return this._blockEmail;
  }
  public putBlockEmail(value: BlockEmailProperty) {
    this._blockEmail.internalValue = value;
  }
  public resetBlockEmail() {
    this._blockEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockEmailInput() {
    return this._blockEmail.internalValue;
  }

  // mfa_email - computed: false, optional: true, required: false
  private _mfaEmail = new MfaEmailPropertyOutputReference(this, "mfa_email");
  public get mfaEmail() {
    return this._mfaEmail;
  }
  public putMfaEmail(value: MfaEmailProperty) {
    this._mfaEmail.internalValue = value;
  }
  public resetMfaEmail() {
    this._mfaEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEmailInput() {
    return this._mfaEmail.internalValue;
  }

  // no_action_email - computed: false, optional: true, required: false
  private _noActionEmail = new NoActionEmailPropertyOutputReference(this, "no_action_email");
  public get noActionEmail() {
    return this._noActionEmail;
  }
  public putNoActionEmail(value: NoActionEmailProperty) {
    this._noActionEmail.internalValue = value;
  }
  public resetNoActionEmail() {
    this._noActionEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noActionEmailInput() {
    return this._noActionEmail.internalValue;
  }
}
export interface AccountTakeoverRiskConfigurationProperty {
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#actions TfRiskConfiguration#actions}
  */
  readonly actions: AccountTakeoverRiskConfigurationActionsProperty;
  /**
  * notify_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#notify_configuration TfRiskConfiguration#notify_configuration}
  */
  readonly notifyConfiguration?: NotifyConfigurationProperty;
}
export class AccountTakeoverRiskConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountTakeoverRiskConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._notifyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyConfiguration = this._notifyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountTakeoverRiskConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions.internalValue = undefined;
      this._notifyConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions.internalValue = value.actions;
      this._notifyConfiguration.internalValue = value.notifyConfiguration;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new AccountTakeoverRiskConfigurationActionsPropertyOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: AccountTakeoverRiskConfigurationActionsProperty) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // notify_configuration - computed: false, optional: true, required: false
  private _notifyConfiguration = new NotifyConfigurationPropertyOutputReference(this, "notify_configuration");
  public get notifyConfiguration() {
    return this._notifyConfiguration;
  }
  public putNotifyConfiguration(value: NotifyConfigurationProperty) {
    this._notifyConfiguration.internalValue = value;
  }
  public resetNotifyConfiguration() {
    this._notifyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyConfigurationInput() {
    return this._notifyConfiguration.internalValue;
  }
}
export interface CompromisedCredentialsRiskConfigurationActionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#event_action TfRiskConfiguration#event_action}
  */
  readonly eventAction: string;
}
export class CompromisedCredentialsRiskConfigurationActionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CompromisedCredentialsRiskConfigurationActionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CompromisedCredentialsRiskConfigurationActionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventAction = value.eventAction;
    }
  }

  // event_action - computed: false, optional: false, required: true
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }
}
export interface CompromisedCredentialsRiskConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#event_filter TfRiskConfiguration#event_filter}
  */
  readonly eventFilter?: string[];
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#actions TfRiskConfiguration#actions}
  */
  readonly actions: CompromisedCredentialsRiskConfigurationActionsProperty;
}
export class CompromisedCredentialsRiskConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CompromisedCredentialsRiskConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventFilter = this._eventFilter;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CompromisedCredentialsRiskConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventFilter = undefined;
      this._actions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventFilter = value.eventFilter;
      this._actions.internalValue = value.actions;
    }
  }

  // event_filter - computed: true, optional: true, required: false
  private _eventFilter?: string[]; 
  public get eventFilter() {
    return cdktn.Fn.tolist(this.getListAttribute('event_filter'));
  }
  public set eventFilter(value: string[]) {
    this._eventFilter = value;
  }
  public resetEventFilter() {
    this._eventFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterInput() {
    return this._eventFilter;
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new CompromisedCredentialsRiskConfigurationActionsPropertyOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: CompromisedCredentialsRiskConfigurationActionsProperty) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }
}
export interface RiskExceptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#blocked_ip_range_list TfRiskConfiguration#blocked_ip_range_list}
  */
  readonly blockedIpRangeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cognito_risk_configuration#skipped_ip_range_list TfRiskConfiguration#skipped_ip_range_list}
  */
  readonly skippedIpRangeList?: string[];
}
export class RiskExceptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RiskExceptionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedIpRangeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedIpRangeList = this._blockedIpRangeList;
    }
    if (this._skippedIpRangeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippedIpRangeList = this._skippedIpRangeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskExceptionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockedIpRangeList = undefined;
      this._skippedIpRangeList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockedIpRangeList = value.blockedIpRangeList;
      this._skippedIpRangeList = value.skippedIpRangeList;
    }
  }

  // blocked_ip_range_list - computed: false, optional: true, required: false
  private _blockedIpRangeList?: string[]; 
  public get blockedIpRangeList() {
    return cdktn.Fn.tolist(this.getListAttribute('blocked_ip_range_list'));
  }
  public set blockedIpRangeList(value: string[]) {
    this._blockedIpRangeList = value;
  }
  public resetBlockedIpRangeList() {
    this._blockedIpRangeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedIpRangeListInput() {
    return this._blockedIpRangeList;
  }

  // skipped_ip_range_list - computed: false, optional: true, required: false
  private _skippedIpRangeList?: string[]; 
  public get skippedIpRangeList() {
    return cdktn.Fn.tolist(this.getListAttribute('skipped_ip_range_list'));
  }
  public set skippedIpRangeList(value: string[]) {
    this._skippedIpRangeList = value;
  }
  public resetSkippedIpRangeList() {
    this._skippedIpRangeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippedIpRangeListInput() {
    return this._skippedIpRangeList;
  }
}
}
