// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#description TfEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#id TfEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#name TfEndpoint#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#region TfEndpoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#role_arn TfEndpoint#role_arn}
  */
  readonly roleArn?: string;
  /**
  * event_bus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#event_bus TfEndpoint#event_bus}
  */
  readonly eventBus: TfEndpoint.EventBusProperty[] | cdktn.IResolvable;
  /**
  * replication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#replication_config TfEndpoint#replication_config}
  */
  readonly replicationConfig?: TfEndpoint.ReplicationConfigProperty;
  /**
  * routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#routing_config TfEndpoint#routing_config}
  */
  readonly routingConfig: TfEndpoint.RoutingConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint aws_cloudwatch_event_endpoint}
*/
export class TfEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_event_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfEndpoint to import
  * @param importFromId The id of the existing TfEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_event_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint aws_cloudwatch_event_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: TfEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_endpoint',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._eventBus.internalValue = config.eventBus;
    this._replicationConfig.internalValue = config.replicationConfig;
    this._routingConfig.internalValue = config.routingConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // event_bus - computed: false, optional: false, required: true
  private _eventBus = new TfEndpoint.EventBusPropertyList(this, "event_bus", false);
  public get eventBus() {
    return this._eventBus;
  }
  public putEventBus(value: TfEndpoint.EventBusProperty[] | cdktn.IResolvable) {
    this._eventBus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusInput() {
    return this._eventBus.internalValue;
  }

  // replication_config - computed: false, optional: true, required: false
  private _replicationConfig = new TfEndpoint.ReplicationConfigPropertyOutputReference(this, "replication_config");
  public get replicationConfig() {
    return this._replicationConfig;
  }
  public putReplicationConfig(value: TfEndpoint.ReplicationConfigProperty) {
    this._replicationConfig.internalValue = value;
  }
  public resetReplicationConfig() {
    this._replicationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigInput() {
    return this._replicationConfig.internalValue;
  }

  // routing_config - computed: false, optional: false, required: true
  private _routingConfig = new TfEndpoint.RoutingConfigPropertyOutputReference(this, "routing_config");
  public get routingConfig() {
    return this._routingConfig;
  }
  public putRoutingConfig(value: TfEndpoint.RoutingConfigProperty) {
    this._routingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      event_bus: cdktn.listMapper(tfEndpointEventBusPropertyToTerraform, true)(this._eventBus.internalValue),
      replication_config: tfEndpointReplicationConfigPropertyToTerraform(this._replicationConfig.internalValue),
      routing_config: tfEndpointRoutingConfigPropertyToTerraform(this._routingConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_bus: {
        value: cdktn.listMapperHcl(tfEndpointEventBusPropertyToHclTerraform, true)(this._eventBus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEndpoint.EventBusPropertyList",
      },
      replication_config: {
        value: tfEndpointReplicationConfigPropertyToHclTerraform(this._replicationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEndpoint.ReplicationConfigPropertyList",
      },
      routing_config: {
        value: tfEndpointRoutingConfigPropertyToHclTerraform(this._routingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEndpoint.RoutingConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfEndpointEventBusPropertyToTerraform(struct?: TfEndpoint.EventBusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_bus_arn: cdktn.stringToTerraform(struct!.eventBusArn),
  }
}


export function tfEndpointEventBusPropertyToHclTerraform(struct?: TfEndpoint.EventBusProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_bus_arn: {
      value: cdktn.stringToHclTerraform(struct!.eventBusArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointReplicationConfigPropertyToTerraform(struct?: TfEndpoint.ReplicationConfigPropertyOutputReference | TfEndpoint.ReplicationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function tfEndpointReplicationConfigPropertyToHclTerraform(struct?: TfEndpoint.ReplicationConfigPropertyOutputReference | TfEndpoint.ReplicationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointPrimaryPropertyToTerraform(struct?: TfEndpoint.PrimaryPropertyOutputReference | TfEndpoint.PrimaryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    health_check: cdktn.stringToTerraform(struct!.healthCheck),
  }
}


export function tfEndpointPrimaryPropertyToHclTerraform(struct?: TfEndpoint.PrimaryPropertyOutputReference | TfEndpoint.PrimaryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    health_check: {
      value: cdktn.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointSecondaryPropertyToTerraform(struct?: TfEndpoint.SecondaryPropertyOutputReference | TfEndpoint.SecondaryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    route: cdktn.stringToTerraform(struct!.route),
  }
}


export function tfEndpointSecondaryPropertyToHclTerraform(struct?: TfEndpoint.SecondaryPropertyOutputReference | TfEndpoint.SecondaryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    route: {
      value: cdktn.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointFailoverConfigPropertyToTerraform(struct?: TfEndpoint.FailoverConfigPropertyOutputReference | TfEndpoint.FailoverConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary: tfEndpointPrimaryPropertyToTerraform(struct!.primary),
    secondary: tfEndpointSecondaryPropertyToTerraform(struct!.secondary),
  }
}


export function tfEndpointFailoverConfigPropertyToHclTerraform(struct?: TfEndpoint.FailoverConfigPropertyOutputReference | TfEndpoint.FailoverConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    primary: {
      value: tfEndpointPrimaryPropertyToHclTerraform(struct!.primary),
      isBlock: true,
      type: "list",
      storageClassType: "PrimaryPropertyList",
    },
    secondary: {
      value: tfEndpointSecondaryPropertyToHclTerraform(struct!.secondary),
      isBlock: true,
      type: "list",
      storageClassType: "SecondaryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEndpointRoutingConfigPropertyToTerraform(struct?: TfEndpoint.RoutingConfigPropertyOutputReference | TfEndpoint.RoutingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failover_config: tfEndpointFailoverConfigPropertyToTerraform(struct!.failoverConfig),
  }
}


export function tfEndpointRoutingConfigPropertyToHclTerraform(struct?: TfEndpoint.RoutingConfigPropertyOutputReference | TfEndpoint.RoutingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failover_config: {
      value: tfEndpointFailoverConfigPropertyToHclTerraform(struct!.failoverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FailoverConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfEndpoint {
export interface EventBusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#event_bus_arn TfEndpoint#event_bus_arn}
  */
  readonly eventBusArn: string;
}
export class EventBusPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventBusProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventBusArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBusArn = this._eventBusArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBusProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventBusArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventBusArn = value.eventBusArn;
    }
  }

  // event_bus_arn - computed: false, optional: false, required: true
  private _eventBusArn?: string; 
  public get eventBusArn() {
    return this.getStringAttribute('event_bus_arn');
  }
  public set eventBusArn(value: string) {
    this._eventBusArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusArnInput() {
    return this._eventBusArn;
  }
}

export class EventBusPropertyList extends cdktn.ComplexList {
  public internalValue? : EventBusProperty[] | cdktn.IResolvable

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
  public get(index: number): EventBusPropertyOutputReference {
    return new EventBusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReplicationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#state TfEndpoint#state}
  */
  readonly state?: string;
}
export class ReplicationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReplicationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReplicationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface PrimaryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#health_check TfEndpoint#health_check}
  */
  readonly healthCheck?: string;
}
export class PrimaryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrimaryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrimaryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheck = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheck = value.healthCheck;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }
}
export interface SecondaryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#route TfEndpoint#route}
  */
  readonly route?: string;
}
export class SecondaryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecondaryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecondaryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._route = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._route = value.route;
    }
  }

  // route - computed: false, optional: true, required: false
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }
}
export interface FailoverConfigProperty {
  /**
  * primary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#primary TfEndpoint#primary}
  */
  readonly primary: PrimaryProperty;
  /**
  * secondary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#secondary TfEndpoint#secondary}
  */
  readonly secondary: SecondaryProperty;
}
export class FailoverConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailoverConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    if (this._secondary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailoverConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primary.internalValue = undefined;
      this._secondary.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primary.internalValue = value.primary;
      this._secondary.internalValue = value.secondary;
    }
  }

  // primary - computed: false, optional: false, required: true
  private _primary = new PrimaryPropertyOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: PrimaryProperty) {
    this._primary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // secondary - computed: false, optional: false, required: true
  private _secondary = new SecondaryPropertyOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: SecondaryProperty) {
    this._secondary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }
}
export interface RoutingConfigProperty {
  /**
  * failover_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_endpoint#failover_config TfEndpoint#failover_config}
  */
  readonly failoverConfig: FailoverConfigProperty;
}
export class RoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverConfig = this._failoverConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failoverConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failoverConfig.internalValue = value.failoverConfig;
    }
  }

  // failover_config - computed: false, optional: false, required: true
  private _failoverConfig = new FailoverConfigPropertyOutputReference(this, "failover_config");
  public get failoverConfig() {
    return this._failoverConfig;
  }
  public putFailoverConfig(value: FailoverConfigProperty) {
    this._failoverConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverConfigInput() {
    return this._failoverConfig.internalValue;
  }
}
}
