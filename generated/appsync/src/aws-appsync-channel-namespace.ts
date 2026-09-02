// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfChannelNamespaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#api_id TfChannelNamespace#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#code_handlers TfChannelNamespace#code_handlers}
  */
  readonly codeHandlers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#name TfChannelNamespace#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#region TfChannelNamespace#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#tags TfChannelNamespace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * handler_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#handler_configs TfChannelNamespace#handler_configs}
  */
  readonly handlerConfigs?: TfChannelNamespace.HandlerConfigsProperty[] | cdktn.IResolvable;
  /**
  * publish_auth_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#publish_auth_mode TfChannelNamespace#publish_auth_mode}
  */
  readonly publishAuthMode?: TfChannelNamespace.PublishAuthModeProperty[] | cdktn.IResolvable;
  /**
  * subscribe_auth_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#subscribe_auth_mode TfChannelNamespace#subscribe_auth_mode}
  */
  readonly subscribeAuthMode?: TfChannelNamespace.SubscribeAuthModeProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace aws_appsync_channel_namespace}
*/
export class TfChannelNamespace extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_channel_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfChannelNamespace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfChannelNamespace to import
  * @param importFromId The id of the existing TfChannelNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfChannelNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_channel_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace aws_appsync_channel_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfChannelNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: TfChannelNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_channel_namespace',
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
    this._apiId = config.apiId;
    this._codeHandlers = config.codeHandlers;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._handlerConfigs.internalValue = config.handlerConfigs;
    this._publishAuthMode.internalValue = config.publishAuthMode;
    this._subscribeAuthMode.internalValue = config.subscribeAuthMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // channel_namespace_arn - computed: true, optional: false, required: false
  public get channelNamespaceArn() {
    return this.getStringAttribute('channel_namespace_arn');
  }

  // code_handlers - computed: false, optional: true, required: false
  private _codeHandlers?: string; 
  public get codeHandlers() {
    return this.getStringAttribute('code_handlers');
  }
  public set codeHandlers(value: string) {
    this._codeHandlers = value;
  }
  public resetCodeHandlers() {
    this._codeHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeHandlersInput() {
    return this._codeHandlers;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // handler_configs - computed: false, optional: true, required: false
  private _handlerConfigs = new TfChannelNamespace.HandlerConfigsPropertyList(this, "handler_configs", false);
  public get handlerConfigs() {
    return this._handlerConfigs;
  }
  public putHandlerConfigs(value: TfChannelNamespace.HandlerConfigsProperty[] | cdktn.IResolvable) {
    this._handlerConfigs.internalValue = value;
  }
  public resetHandlerConfigs() {
    this._handlerConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerConfigsInput() {
    return this._handlerConfigs.internalValue;
  }

  // publish_auth_mode - computed: false, optional: true, required: false
  private _publishAuthMode = new TfChannelNamespace.PublishAuthModePropertyList(this, "publish_auth_mode", false);
  public get publishAuthMode() {
    return this._publishAuthMode;
  }
  public putPublishAuthMode(value: TfChannelNamespace.PublishAuthModeProperty[] | cdktn.IResolvable) {
    this._publishAuthMode.internalValue = value;
  }
  public resetPublishAuthMode() {
    this._publishAuthMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishAuthModeInput() {
    return this._publishAuthMode.internalValue;
  }

  // subscribe_auth_mode - computed: false, optional: true, required: false
  private _subscribeAuthMode = new TfChannelNamespace.SubscribeAuthModePropertyList(this, "subscribe_auth_mode", false);
  public get subscribeAuthMode() {
    return this._subscribeAuthMode;
  }
  public putSubscribeAuthMode(value: TfChannelNamespace.SubscribeAuthModeProperty[] | cdktn.IResolvable) {
    this._subscribeAuthMode.internalValue = value;
  }
  public resetSubscribeAuthMode() {
    this._subscribeAuthMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeAuthModeInput() {
    return this._subscribeAuthMode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktn.stringToTerraform(this._apiId),
      code_handlers: cdktn.stringToTerraform(this._codeHandlers),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      handler_configs: cdktn.listMapper(tfChannelNamespaceHandlerConfigsPropertyToTerraform, true)(this._handlerConfigs.internalValue),
      publish_auth_mode: cdktn.listMapper(tfChannelNamespacePublishAuthModePropertyToTerraform, true)(this._publishAuthMode.internalValue),
      subscribe_auth_mode: cdktn.listMapper(tfChannelNamespaceSubscribeAuthModePropertyToTerraform, true)(this._subscribeAuthMode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktn.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_handlers: {
        value: cdktn.stringToHclTerraform(this._codeHandlers),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      handler_configs: {
        value: cdktn.listMapperHcl(tfChannelNamespaceHandlerConfigsPropertyToHclTerraform, true)(this._handlerConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfChannelNamespace.HandlerConfigsPropertyList",
      },
      publish_auth_mode: {
        value: cdktn.listMapperHcl(tfChannelNamespacePublishAuthModePropertyToHclTerraform, true)(this._publishAuthMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfChannelNamespace.PublishAuthModePropertyList",
      },
      subscribe_auth_mode: {
        value: cdktn.listMapperHcl(tfChannelNamespaceSubscribeAuthModePropertyToHclTerraform, true)(this._subscribeAuthMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfChannelNamespace.SubscribeAuthModePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigPropertyToTerraform(struct?: TfChannelNamespace.HandlerConfigsOnPublishIntegrationLambdaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invoke_type: cdktn.stringToTerraform(struct!.invokeType),
  }
}


export function tfChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigPropertyToHclTerraform(struct?: TfChannelNamespace.HandlerConfigsOnPublishIntegrationLambdaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invoke_type: {
      value: cdktn.stringToHclTerraform(struct!.invokeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfChannelNamespaceHandlerConfigsOnPublishIntegrationPropertyToTerraform(struct?: TfChannelNamespace.HandlerConfigsOnPublishIntegrationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_name: cdktn.stringToTerraform(struct!.dataSourceName),
    lambda_config: cdktn.listMapper(tfChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigPropertyToTerraform, true)(struct!.lambdaConfig),
  }
}


export function tfChannelNamespaceHandlerConfigsOnPublishIntegrationPropertyToHclTerraform(struct?: TfChannelNamespace.HandlerConfigsOnPublishIntegrationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_config: {
      value: cdktn.listMapperHcl(tfChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigPropertyToHclTerraform, true)(struct!.lambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HandlerConfigsOnPublishIntegrationLambdaConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfChannelNamespaceOnPublishPropertyToTerraform(struct?: TfChannelNamespace.OnPublishProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    integration: cdktn.listMapper(tfChannelNamespaceHandlerConfigsOnPublishIntegrationPropertyToTerraform, true)(struct!.integration),
  }
}


export function tfChannelNamespaceOnPublishPropertyToHclTerraform(struct?: TfChannelNamespace.OnPublishProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration: {
      value: cdktn.listMapperHcl(tfChannelNamespaceHandlerConfigsOnPublishIntegrationPropertyToHclTerraform, true)(struct!.integration),
      isBlock: true,
      type: "list",
      storageClassType: "HandlerConfigsOnPublishIntegrationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyToTerraform(struct?: TfChannelNamespace.HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invoke_type: cdktn.stringToTerraform(struct!.invokeType),
  }
}


export function tfChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyToHclTerraform(struct?: TfChannelNamespace.HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invoke_type: {
      value: cdktn.stringToHclTerraform(struct!.invokeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfChannelNamespaceHandlerConfigsOnSubscribeIntegrationPropertyToTerraform(struct?: TfChannelNamespace.HandlerConfigsOnSubscribeIntegrationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_name: cdktn.stringToTerraform(struct!.dataSourceName),
    lambda_config: cdktn.listMapper(tfChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyToTerraform, true)(struct!.lambdaConfig),
  }
}


export function tfChannelNamespaceHandlerConfigsOnSubscribeIntegrationPropertyToHclTerraform(struct?: TfChannelNamespace.HandlerConfigsOnSubscribeIntegrationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_config: {
      value: cdktn.listMapperHcl(tfChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyToHclTerraform, true)(struct!.lambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfChannelNamespaceOnSubscribePropertyToTerraform(struct?: TfChannelNamespace.OnSubscribeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    integration: cdktn.listMapper(tfChannelNamespaceHandlerConfigsOnSubscribeIntegrationPropertyToTerraform, true)(struct!.integration),
  }
}


export function tfChannelNamespaceOnSubscribePropertyToHclTerraform(struct?: TfChannelNamespace.OnSubscribeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration: {
      value: cdktn.listMapperHcl(tfChannelNamespaceHandlerConfigsOnSubscribeIntegrationPropertyToHclTerraform, true)(struct!.integration),
      isBlock: true,
      type: "list",
      storageClassType: "HandlerConfigsOnSubscribeIntegrationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfChannelNamespaceHandlerConfigsPropertyToTerraform(struct?: TfChannelNamespace.HandlerConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_publish: cdktn.listMapper(tfChannelNamespaceOnPublishPropertyToTerraform, true)(struct!.onPublish),
    on_subscribe: cdktn.listMapper(tfChannelNamespaceOnSubscribePropertyToTerraform, true)(struct!.onSubscribe),
  }
}


export function tfChannelNamespaceHandlerConfigsPropertyToHclTerraform(struct?: TfChannelNamespace.HandlerConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_publish: {
      value: cdktn.listMapperHcl(tfChannelNamespaceOnPublishPropertyToHclTerraform, true)(struct!.onPublish),
      isBlock: true,
      type: "list",
      storageClassType: "OnPublishPropertyList",
    },
    on_subscribe: {
      value: cdktn.listMapperHcl(tfChannelNamespaceOnSubscribePropertyToHclTerraform, true)(struct!.onSubscribe),
      isBlock: true,
      type: "list",
      storageClassType: "OnSubscribePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfChannelNamespacePublishAuthModePropertyToTerraform(struct?: TfChannelNamespace.PublishAuthModeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
  }
}


export function tfChannelNamespacePublishAuthModePropertyToHclTerraform(struct?: TfChannelNamespace.PublishAuthModeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfChannelNamespaceSubscribeAuthModePropertyToTerraform(struct?: TfChannelNamespace.SubscribeAuthModeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
  }
}


export function tfChannelNamespaceSubscribeAuthModePropertyToHclTerraform(struct?: TfChannelNamespace.SubscribeAuthModeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfChannelNamespace {
export interface HandlerConfigsOnPublishIntegrationLambdaConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#invoke_type TfChannelNamespace#invoke_type}
  */
  readonly invokeType?: string;
}
export class HandlerConfigsOnPublishIntegrationLambdaConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HandlerConfigsOnPublishIntegrationLambdaConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invokeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeType = this._invokeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HandlerConfigsOnPublishIntegrationLambdaConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invokeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invokeType = value.invokeType;
    }
  }

  // invoke_type - computed: false, optional: true, required: false
  private _invokeType?: string; 
  public get invokeType() {
    return this.getStringAttribute('invoke_type');
  }
  public set invokeType(value: string) {
    this._invokeType = value;
  }
  public resetInvokeType() {
    this._invokeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeTypeInput() {
    return this._invokeType;
  }
}

export class HandlerConfigsOnPublishIntegrationLambdaConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : HandlerConfigsOnPublishIntegrationLambdaConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): HandlerConfigsOnPublishIntegrationLambdaConfigPropertyOutputReference {
    return new HandlerConfigsOnPublishIntegrationLambdaConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HandlerConfigsOnPublishIntegrationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#data_source_name TfChannelNamespace#data_source_name}
  */
  readonly dataSourceName: string;
  /**
  * lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#lambda_config TfChannelNamespace#lambda_config}
  */
  readonly lambdaConfig?: HandlerConfigsOnPublishIntegrationLambdaConfigProperty[] | cdktn.IResolvable;
}
export class HandlerConfigsOnPublishIntegrationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HandlerConfigsOnPublishIntegrationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    if (this._lambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConfig = this._lambdaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HandlerConfigsOnPublishIntegrationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
      this._lambdaConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
      this._lambdaConfig.internalValue = value.lambdaConfig;
    }
  }

  // data_source_name - computed: false, optional: false, required: true
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig = new HandlerConfigsOnPublishIntegrationLambdaConfigPropertyList(this, "lambda_config", false);
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: HandlerConfigsOnPublishIntegrationLambdaConfigProperty[] | cdktn.IResolvable) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }
}

export class HandlerConfigsOnPublishIntegrationPropertyList extends cdktn.ComplexList {
  public internalValue? : HandlerConfigsOnPublishIntegrationProperty[] | cdktn.IResolvable

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
  public get(index: number): HandlerConfigsOnPublishIntegrationPropertyOutputReference {
    return new HandlerConfigsOnPublishIntegrationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OnPublishProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#behavior TfChannelNamespace#behavior}
  */
  readonly behavior: string;
  /**
  * integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#integration TfChannelNamespace#integration}
  */
  readonly integration?: HandlerConfigsOnPublishIntegrationProperty[] | cdktn.IResolvable;
}
export class OnPublishPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OnPublishProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._integration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnPublishProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._integration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._integration.internalValue = value.integration;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // integration - computed: false, optional: true, required: false
  private _integration = new HandlerConfigsOnPublishIntegrationPropertyList(this, "integration", false);
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: HandlerConfigsOnPublishIntegrationProperty[] | cdktn.IResolvable) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }
}

export class OnPublishPropertyList extends cdktn.ComplexList {
  public internalValue? : OnPublishProperty[] | cdktn.IResolvable

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
  public get(index: number): OnPublishPropertyOutputReference {
    return new OnPublishPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#invoke_type TfChannelNamespace#invoke_type}
  */
  readonly invokeType?: string;
}
export class HandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invokeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeType = this._invokeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invokeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invokeType = value.invokeType;
    }
  }

  // invoke_type - computed: false, optional: true, required: false
  private _invokeType?: string; 
  public get invokeType() {
    return this.getStringAttribute('invoke_type');
  }
  public set invokeType(value: string) {
    this._invokeType = value;
  }
  public resetInvokeType() {
    this._invokeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeTypeInput() {
    return this._invokeType;
  }
}

export class HandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): HandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyOutputReference {
    return new HandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HandlerConfigsOnSubscribeIntegrationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#data_source_name TfChannelNamespace#data_source_name}
  */
  readonly dataSourceName: string;
  /**
  * lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#lambda_config TfChannelNamespace#lambda_config}
  */
  readonly lambdaConfig?: HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty[] | cdktn.IResolvable;
}
export class HandlerConfigsOnSubscribeIntegrationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HandlerConfigsOnSubscribeIntegrationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    if (this._lambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConfig = this._lambdaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HandlerConfigsOnSubscribeIntegrationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
      this._lambdaConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
      this._lambdaConfig.internalValue = value.lambdaConfig;
    }
  }

  // data_source_name - computed: false, optional: false, required: true
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig = new HandlerConfigsOnSubscribeIntegrationLambdaConfigPropertyList(this, "lambda_config", false);
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: HandlerConfigsOnSubscribeIntegrationLambdaConfigProperty[] | cdktn.IResolvable) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }
}

export class HandlerConfigsOnSubscribeIntegrationPropertyList extends cdktn.ComplexList {
  public internalValue? : HandlerConfigsOnSubscribeIntegrationProperty[] | cdktn.IResolvable

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
  public get(index: number): HandlerConfigsOnSubscribeIntegrationPropertyOutputReference {
    return new HandlerConfigsOnSubscribeIntegrationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OnSubscribeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#behavior TfChannelNamespace#behavior}
  */
  readonly behavior: string;
  /**
  * integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#integration TfChannelNamespace#integration}
  */
  readonly integration?: HandlerConfigsOnSubscribeIntegrationProperty[] | cdktn.IResolvable;
}
export class OnSubscribePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OnSubscribeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._integration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnSubscribeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._integration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._integration.internalValue = value.integration;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // integration - computed: false, optional: true, required: false
  private _integration = new HandlerConfigsOnSubscribeIntegrationPropertyList(this, "integration", false);
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: HandlerConfigsOnSubscribeIntegrationProperty[] | cdktn.IResolvable) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }
}

export class OnSubscribePropertyList extends cdktn.ComplexList {
  public internalValue? : OnSubscribeProperty[] | cdktn.IResolvable

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
  public get(index: number): OnSubscribePropertyOutputReference {
    return new OnSubscribePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HandlerConfigsProperty {
  /**
  * on_publish block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#on_publish TfChannelNamespace#on_publish}
  */
  readonly onPublish?: OnPublishProperty[] | cdktn.IResolvable;
  /**
  * on_subscribe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#on_subscribe TfChannelNamespace#on_subscribe}
  */
  readonly onSubscribe?: OnSubscribeProperty[] | cdktn.IResolvable;
}
export class HandlerConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HandlerConfigsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onPublish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPublish = this._onPublish?.internalValue;
    }
    if (this._onSubscribe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSubscribe = this._onSubscribe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HandlerConfigsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onPublish.internalValue = undefined;
      this._onSubscribe.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onPublish.internalValue = value.onPublish;
      this._onSubscribe.internalValue = value.onSubscribe;
    }
  }

  // on_publish - computed: false, optional: true, required: false
  private _onPublish = new OnPublishPropertyList(this, "on_publish", false);
  public get onPublish() {
    return this._onPublish;
  }
  public putOnPublish(value: OnPublishProperty[] | cdktn.IResolvable) {
    this._onPublish.internalValue = value;
  }
  public resetOnPublish() {
    this._onPublish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPublishInput() {
    return this._onPublish.internalValue;
  }

  // on_subscribe - computed: false, optional: true, required: false
  private _onSubscribe = new OnSubscribePropertyList(this, "on_subscribe", false);
  public get onSubscribe() {
    return this._onSubscribe;
  }
  public putOnSubscribe(value: OnSubscribeProperty[] | cdktn.IResolvable) {
    this._onSubscribe.internalValue = value;
  }
  public resetOnSubscribe() {
    this._onSubscribe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSubscribeInput() {
    return this._onSubscribe.internalValue;
  }
}

export class HandlerConfigsPropertyList extends cdktn.ComplexList {
  public internalValue? : HandlerConfigsProperty[] | cdktn.IResolvable

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
  public get(index: number): HandlerConfigsPropertyOutputReference {
    return new HandlerConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PublishAuthModeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#auth_type TfChannelNamespace#auth_type}
  */
  readonly authType: string;
}
export class PublishAuthModePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PublishAuthModeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PublishAuthModeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}

export class PublishAuthModePropertyList extends cdktn.ComplexList {
  public internalValue? : PublishAuthModeProperty[] | cdktn.IResolvable

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
  public get(index: number): PublishAuthModePropertyOutputReference {
    return new PublishAuthModePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscribeAuthModeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_channel_namespace#auth_type TfChannelNamespace#auth_type}
  */
  readonly authType: string;
}
export class SubscribeAuthModePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubscribeAuthModeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscribeAuthModeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}

export class SubscribeAuthModePropertyList extends cdktn.ComplexList {
  public internalValue? : SubscribeAuthModeProperty[] | cdktn.IResolvable

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
  public get(index: number): SubscribeAuthModePropertyOutputReference {
    return new SubscribeAuthModePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
