// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfSubscriberNotificationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#region TfSubscriberNotification#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#subscriber_id TfSubscriberNotification#subscriber_id}
  */
  readonly subscriberId: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#configuration TfSubscriberNotification#configuration}
  */
  readonly configuration?: TfSubscriberNotification.ConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification aws_securitylake_subscriber_notification}
*/
export class TfSubscriberNotification extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securitylake_subscriber_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfSubscriberNotification resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfSubscriberNotification to import
  * @param importFromId The id of the existing TfSubscriberNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfSubscriberNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securitylake_subscriber_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification aws_securitylake_subscriber_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfSubscriberNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: TfSubscriberNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securitylake_subscriber_notification',
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
    this._region = config.region;
    this._subscriberId = config.subscriberId;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // subscriber_endpoint - computed: true, optional: false, required: false
  public get subscriberEndpoint() {
    return this.getStringAttribute('subscriber_endpoint');
  }

  // subscriber_id - computed: false, optional: false, required: true
  private _subscriberId?: string; 
  public get subscriberId() {
    return this.getStringAttribute('subscriber_id');
  }
  public set subscriberId(value: string) {
    this._subscriberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberIdInput() {
    return this._subscriberId;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new TfSubscriberNotification.ConfigurationPropertyList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: TfSubscriberNotification.ConfigurationProperty[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      subscriber_id: cdktn.stringToTerraform(this._subscriberId),
      configuration: cdktn.listMapper(tfSubscriberNotificationConfigurationPropertyToTerraform, true)(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_id: {
        value: cdktn.stringToHclTerraform(this._subscriberId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktn.listMapperHcl(tfSubscriberNotificationConfigurationPropertyToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfSubscriberNotification.ConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfSubscriberNotificationHttpsNotificationConfigurationPropertyToTerraform(struct?: TfSubscriberNotification.HttpsNotificationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_api_key_name: cdktn.stringToTerraform(struct!.authorizationApiKeyName),
    authorization_api_key_value: cdktn.stringToTerraform(struct!.authorizationApiKeyValue),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    http_method: cdktn.stringToTerraform(struct!.httpMethod),
    target_role_arn: cdktn.stringToTerraform(struct!.targetRoleArn),
  }
}


export function tfSubscriberNotificationHttpsNotificationConfigurationPropertyToHclTerraform(struct?: TfSubscriberNotification.HttpsNotificationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_api_key_name: {
      value: cdktn.stringToHclTerraform(struct!.authorizationApiKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_api_key_value: {
      value: cdktn.stringToHclTerraform(struct!.authorizationApiKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktn.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfSubscriberNotificationSqsNotificationConfigurationPropertyToTerraform(struct?: TfSubscriberNotification.SqsNotificationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfSubscriberNotificationSqsNotificationConfigurationPropertyToHclTerraform(struct?: TfSubscriberNotification.SqsNotificationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfSubscriberNotificationConfigurationPropertyToTerraform(struct?: TfSubscriberNotification.ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    https_notification_configuration: cdktn.listMapper(tfSubscriberNotificationHttpsNotificationConfigurationPropertyToTerraform, true)(struct!.httpsNotificationConfiguration),
    sqs_notification_configuration: cdktn.listMapper(tfSubscriberNotificationSqsNotificationConfigurationPropertyToTerraform, true)(struct!.sqsNotificationConfiguration),
  }
}


export function tfSubscriberNotificationConfigurationPropertyToHclTerraform(struct?: TfSubscriberNotification.ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    https_notification_configuration: {
      value: cdktn.listMapperHcl(tfSubscriberNotificationHttpsNotificationConfigurationPropertyToHclTerraform, true)(struct!.httpsNotificationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "HttpsNotificationConfigurationPropertyList",
    },
    sqs_notification_configuration: {
      value: cdktn.listMapperHcl(tfSubscriberNotificationSqsNotificationConfigurationPropertyToHclTerraform, true)(struct!.sqsNotificationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SqsNotificationConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfSubscriberNotification {
export interface HttpsNotificationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_name TfSubscriberNotification#authorization_api_key_name}
  */
  readonly authorizationApiKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_value TfSubscriberNotification#authorization_api_key_value}
  */
  readonly authorizationApiKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#endpoint TfSubscriberNotification#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#http_method TfSubscriberNotification#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#target_role_arn TfSubscriberNotification#target_role_arn}
  */
  readonly targetRoleArn: string;
}
export class HttpsNotificationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HttpsNotificationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationApiKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationApiKeyName = this._authorizationApiKeyName;
    }
    if (this._authorizationApiKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationApiKeyValue = this._authorizationApiKeyValue;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._targetRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRoleArn = this._targetRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpsNotificationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationApiKeyName = undefined;
      this._authorizationApiKeyValue = undefined;
      this._endpoint = undefined;
      this._httpMethod = undefined;
      this._targetRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationApiKeyName = value.authorizationApiKeyName;
      this._authorizationApiKeyValue = value.authorizationApiKeyValue;
      this._endpoint = value.endpoint;
      this._httpMethod = value.httpMethod;
      this._targetRoleArn = value.targetRoleArn;
    }
  }

  // authorization_api_key_name - computed: false, optional: true, required: false
  private _authorizationApiKeyName?: string; 
  public get authorizationApiKeyName() {
    return this.getStringAttribute('authorization_api_key_name');
  }
  public set authorizationApiKeyName(value: string) {
    this._authorizationApiKeyName = value;
  }
  public resetAuthorizationApiKeyName() {
    this._authorizationApiKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationApiKeyNameInput() {
    return this._authorizationApiKeyName;
  }

  // authorization_api_key_value - computed: false, optional: true, required: false
  private _authorizationApiKeyValue?: string; 
  public get authorizationApiKeyValue() {
    return this.getStringAttribute('authorization_api_key_value');
  }
  public set authorizationApiKeyValue(value: string) {
    this._authorizationApiKeyValue = value;
  }
  public resetAuthorizationApiKeyValue() {
    this._authorizationApiKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationApiKeyValueInput() {
    return this._authorizationApiKeyValue;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // target_role_arn - computed: false, optional: false, required: true
  private _targetRoleArn?: string; 
  public get targetRoleArn() {
    return this.getStringAttribute('target_role_arn');
  }
  public set targetRoleArn(value: string) {
    this._targetRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRoleArnInput() {
    return this._targetRoleArn;
  }
}

export class HttpsNotificationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : HttpsNotificationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): HttpsNotificationConfigurationPropertyOutputReference {
    return new HttpsNotificationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqsNotificationConfigurationProperty {
}
export class SqsNotificationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SqsNotificationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqsNotificationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class SqsNotificationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SqsNotificationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SqsNotificationConfigurationPropertyOutputReference {
    return new SqsNotificationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationProperty {
  /**
  * https_notification_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#https_notification_configuration TfSubscriberNotification#https_notification_configuration}
  */
  readonly httpsNotificationConfiguration?: HttpsNotificationConfigurationProperty[] | cdktn.IResolvable;
  /**
  * sqs_notification_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_subscriber_notification#sqs_notification_configuration TfSubscriberNotification#sqs_notification_configuration}
  */
  readonly sqsNotificationConfiguration?: SqsNotificationConfigurationProperty[] | cdktn.IResolvable;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpsNotificationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsNotificationConfiguration = this._httpsNotificationConfiguration?.internalValue;
    }
    if (this._sqsNotificationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsNotificationConfiguration = this._sqsNotificationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpsNotificationConfiguration.internalValue = undefined;
      this._sqsNotificationConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpsNotificationConfiguration.internalValue = value.httpsNotificationConfiguration;
      this._sqsNotificationConfiguration.internalValue = value.sqsNotificationConfiguration;
    }
  }

  // https_notification_configuration - computed: false, optional: true, required: false
  private _httpsNotificationConfiguration = new HttpsNotificationConfigurationPropertyList(this, "https_notification_configuration", false);
  public get httpsNotificationConfiguration() {
    return this._httpsNotificationConfiguration;
  }
  public putHttpsNotificationConfiguration(value: HttpsNotificationConfigurationProperty[] | cdktn.IResolvable) {
    this._httpsNotificationConfiguration.internalValue = value;
  }
  public resetHttpsNotificationConfiguration() {
    this._httpsNotificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsNotificationConfigurationInput() {
    return this._httpsNotificationConfiguration.internalValue;
  }

  // sqs_notification_configuration - computed: false, optional: true, required: false
  private _sqsNotificationConfiguration = new SqsNotificationConfigurationPropertyList(this, "sqs_notification_configuration", false);
  public get sqsNotificationConfiguration() {
    return this._sqsNotificationConfiguration;
  }
  public putSqsNotificationConfiguration(value: SqsNotificationConfigurationProperty[] | cdktn.IResolvable) {
    this._sqsNotificationConfiguration.internalValue = value;
  }
  public resetSqsNotificationConfiguration() {
    this._sqsNotificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsNotificationConfigurationInput() {
    return this._sqsNotificationConfiguration.internalValue;
  }
}

export class ConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationPropertyOutputReference {
    return new ConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
