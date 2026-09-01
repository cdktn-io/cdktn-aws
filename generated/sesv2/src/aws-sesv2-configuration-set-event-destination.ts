// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSesv2ConfigurationSetEventDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#configuration_set_name AwsSesv2ConfigurationSetEventDestination#configuration_set_name}
  */
  readonly configurationSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#event_destination_name AwsSesv2ConfigurationSetEventDestination#event_destination_name}
  */
  readonly eventDestinationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#id AwsSesv2ConfigurationSetEventDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#region AwsSesv2ConfigurationSetEventDestination#region}
  */
  readonly region?: string;
  /**
  * event_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#event_destination AwsSesv2ConfigurationSetEventDestination#event_destination}
  */
  readonly eventDestination: AwsSesv2ConfigurationSetEventDestination.EventDestinationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination aws_sesv2_configuration_set_event_destination}
*/
export class AwsSesv2ConfigurationSetEventDestination extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_configuration_set_event_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSesv2ConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSesv2ConfigurationSetEventDestination to import
  * @param importFromId The id of the existing AwsSesv2ConfigurationSetEventDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSesv2ConfigurationSetEventDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sesv2_configuration_set_event_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination aws_sesv2_configuration_set_event_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSesv2ConfigurationSetEventDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSesv2ConfigurationSetEventDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_configuration_set_event_destination',
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
    this._configurationSetName = config.configurationSetName;
    this._eventDestinationName = config.eventDestinationName;
    this._id = config.id;
    this._region = config.region;
    this._eventDestination.internalValue = config.eventDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_set_name - computed: false, optional: false, required: true
  private _configurationSetName?: string; 
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetNameInput() {
    return this._configurationSetName;
  }

  // event_destination_name - computed: false, optional: false, required: true
  private _eventDestinationName?: string; 
  public get eventDestinationName() {
    return this.getStringAttribute('event_destination_name');
  }
  public set eventDestinationName(value: string) {
    this._eventDestinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDestinationNameInput() {
    return this._eventDestinationName;
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

  // event_destination - computed: false, optional: false, required: true
  private _eventDestination = new AwsSesv2ConfigurationSetEventDestination.EventDestinationPropertyOutputReference(this, "event_destination");
  public get eventDestination() {
    return this._eventDestination;
  }
  public putEventDestination(value: AwsSesv2ConfigurationSetEventDestination.EventDestinationProperty) {
    this._eventDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDestinationInput() {
    return this._eventDestination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_name: cdktn.stringToTerraform(this._configurationSetName),
      event_destination_name: cdktn.stringToTerraform(this._eventDestinationName),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      event_destination: awsSesv2ConfigurationSetEventDestinationEventDestinationPropertyToTerraform(this._eventDestination.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_set_name: {
        value: cdktn.stringToHclTerraform(this._configurationSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_destination_name: {
        value: cdktn.stringToHclTerraform(this._eventDestinationName),
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
      event_destination: {
        value: awsSesv2ConfigurationSetEventDestinationEventDestinationPropertyToHclTerraform(this._eventDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSesv2ConfigurationSetEventDestination.EventDestinationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSesv2ConfigurationSetEventDestinationDimensionConfigurationPropertyToTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.DimensionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_dimension_value: cdktn.stringToTerraform(struct!.defaultDimensionValue),
    dimension_name: cdktn.stringToTerraform(struct!.dimensionName),
    dimension_value_source: cdktn.stringToTerraform(struct!.dimensionValueSource),
  }
}


export function awsSesv2ConfigurationSetEventDestinationDimensionConfigurationPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.DimensionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_dimension_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultDimensionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_name: {
      value: cdktn.stringToHclTerraform(struct!.dimensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_value_source: {
      value: cdktn.stringToHclTerraform(struct!.dimensionValueSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetEventDestinationCloudWatchDestinationPropertyToTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.CloudWatchDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.CloudWatchDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_configuration: cdktn.listMapper(awsSesv2ConfigurationSetEventDestinationDimensionConfigurationPropertyToTerraform, true)(struct!.dimensionConfiguration),
  }
}


export function awsSesv2ConfigurationSetEventDestinationCloudWatchDestinationPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.CloudWatchDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.CloudWatchDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_configuration: {
      value: cdktn.listMapperHcl(awsSesv2ConfigurationSetEventDestinationDimensionConfigurationPropertyToHclTerraform, true)(struct!.dimensionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DimensionConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetEventDestinationEventBridgeDestinationPropertyToTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.EventBridgeDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.EventBridgeDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_bus_arn: cdktn.stringToTerraform(struct!.eventBusArn),
  }
}


export function awsSesv2ConfigurationSetEventDestinationEventBridgeDestinationPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.EventBridgeDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.EventBridgeDestinationProperty): any {
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


export function awsSesv2ConfigurationSetEventDestinationKinesisFirehoseDestinationPropertyToTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.KinesisFirehoseDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.KinesisFirehoseDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream_arn: cdktn.stringToTerraform(struct!.deliveryStreamArn),
    iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
  }
}


export function awsSesv2ConfigurationSetEventDestinationKinesisFirehoseDestinationPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.KinesisFirehoseDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.KinesisFirehoseDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetEventDestinationPinpointDestinationPropertyToTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.PinpointDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.PinpointDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_arn: cdktn.stringToTerraform(struct!.applicationArn),
  }
}


export function awsSesv2ConfigurationSetEventDestinationPinpointDestinationPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.PinpointDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.PinpointDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_arn: {
      value: cdktn.stringToHclTerraform(struct!.applicationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetEventDestinationSnsDestinationPropertyToTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.SnsDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.SnsDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function awsSesv2ConfigurationSetEventDestinationSnsDestinationPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.SnsDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.SnsDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetEventDestinationEventDestinationPropertyToTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.EventDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.EventDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    matching_event_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchingEventTypes),
    cloud_watch_destination: awsSesv2ConfigurationSetEventDestinationCloudWatchDestinationPropertyToTerraform(struct!.cloudWatchDestination),
    event_bridge_destination: awsSesv2ConfigurationSetEventDestinationEventBridgeDestinationPropertyToTerraform(struct!.eventBridgeDestination),
    kinesis_firehose_destination: awsSesv2ConfigurationSetEventDestinationKinesisFirehoseDestinationPropertyToTerraform(struct!.kinesisFirehoseDestination),
    pinpoint_destination: awsSesv2ConfigurationSetEventDestinationPinpointDestinationPropertyToTerraform(struct!.pinpointDestination),
    sns_destination: awsSesv2ConfigurationSetEventDestinationSnsDestinationPropertyToTerraform(struct!.snsDestination),
  }
}


export function awsSesv2ConfigurationSetEventDestinationEventDestinationPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSetEventDestination.EventDestinationPropertyOutputReference | AwsSesv2ConfigurationSetEventDestination.EventDestinationProperty): any {
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
    matching_event_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchingEventTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cloud_watch_destination: {
      value: awsSesv2ConfigurationSetEventDestinationCloudWatchDestinationPropertyToHclTerraform(struct!.cloudWatchDestination),
      isBlock: true,
      type: "list",
      storageClassType: "CloudWatchDestinationPropertyList",
    },
    event_bridge_destination: {
      value: awsSesv2ConfigurationSetEventDestinationEventBridgeDestinationPropertyToHclTerraform(struct!.eventBridgeDestination),
      isBlock: true,
      type: "list",
      storageClassType: "EventBridgeDestinationPropertyList",
    },
    kinesis_firehose_destination: {
      value: awsSesv2ConfigurationSetEventDestinationKinesisFirehoseDestinationPropertyToHclTerraform(struct!.kinesisFirehoseDestination),
      isBlock: true,
      type: "list",
      storageClassType: "KinesisFirehoseDestinationPropertyList",
    },
    pinpoint_destination: {
      value: awsSesv2ConfigurationSetEventDestinationPinpointDestinationPropertyToHclTerraform(struct!.pinpointDestination),
      isBlock: true,
      type: "list",
      storageClassType: "PinpointDestinationPropertyList",
    },
    sns_destination: {
      value: awsSesv2ConfigurationSetEventDestinationSnsDestinationPropertyToHclTerraform(struct!.snsDestination),
      isBlock: true,
      type: "list",
      storageClassType: "SnsDestinationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsSesv2ConfigurationSetEventDestination {
export interface DimensionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#default_dimension_value AwsSesv2ConfigurationSetEventDestination#default_dimension_value}
  */
  readonly defaultDimensionValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#dimension_name AwsSesv2ConfigurationSetEventDestination#dimension_name}
  */
  readonly dimensionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#dimension_value_source AwsSesv2ConfigurationSetEventDestination#dimension_value_source}
  */
  readonly dimensionValueSource: string;
}
export class DimensionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DimensionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDimensionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDimensionValue = this._defaultDimensionValue;
    }
    if (this._dimensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionName = this._dimensionName;
    }
    if (this._dimensionValueSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionValueSource = this._dimensionValueSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DimensionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultDimensionValue = undefined;
      this._dimensionName = undefined;
      this._dimensionValueSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultDimensionValue = value.defaultDimensionValue;
      this._dimensionName = value.dimensionName;
      this._dimensionValueSource = value.dimensionValueSource;
    }
  }

  // default_dimension_value - computed: false, optional: false, required: true
  private _defaultDimensionValue?: string; 
  public get defaultDimensionValue() {
    return this.getStringAttribute('default_dimension_value');
  }
  public set defaultDimensionValue(value: string) {
    this._defaultDimensionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDimensionValueInput() {
    return this._defaultDimensionValue;
  }

  // dimension_name - computed: false, optional: false, required: true
  private _dimensionName?: string; 
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }
  public set dimensionName(value: string) {
    this._dimensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionNameInput() {
    return this._dimensionName;
  }

  // dimension_value_source - computed: false, optional: false, required: true
  private _dimensionValueSource?: string; 
  public get dimensionValueSource() {
    return this.getStringAttribute('dimension_value_source');
  }
  public set dimensionValueSource(value: string) {
    this._dimensionValueSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionValueSourceInput() {
    return this._dimensionValueSource;
  }
}

export class DimensionConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DimensionConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DimensionConfigurationPropertyOutputReference {
    return new DimensionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudWatchDestinationProperty {
  /**
  * dimension_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#dimension_configuration AwsSesv2ConfigurationSetEventDestination#dimension_configuration}
  */
  readonly dimensionConfiguration: DimensionConfigurationProperty[] | cdktn.IResolvable;
}
export class CloudWatchDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudWatchDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionConfiguration = this._dimensionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudWatchDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensionConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensionConfiguration.internalValue = value.dimensionConfiguration;
    }
  }

  // dimension_configuration - computed: false, optional: false, required: true
  private _dimensionConfiguration = new DimensionConfigurationPropertyList(this, "dimension_configuration", false);
  public get dimensionConfiguration() {
    return this._dimensionConfiguration;
  }
  public putDimensionConfiguration(value: DimensionConfigurationProperty[] | cdktn.IResolvable) {
    this._dimensionConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionConfigurationInput() {
    return this._dimensionConfiguration.internalValue;
  }
}
export interface EventBridgeDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#event_bus_arn AwsSesv2ConfigurationSetEventDestination#event_bus_arn}
  */
  readonly eventBusArn: string;
}
export class EventBridgeDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventBridgeDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventBusArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBusArn = this._eventBusArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBridgeDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventBusArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface KinesisFirehoseDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#delivery_stream_arn AwsSesv2ConfigurationSetEventDestination#delivery_stream_arn}
  */
  readonly deliveryStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#iam_role_arn AwsSesv2ConfigurationSetEventDestination#iam_role_arn}
  */
  readonly iamRoleArn: string;
}
export class KinesisFirehoseDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisFirehoseDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamArn = this._deliveryStreamArn;
    }
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisFirehoseDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryStreamArn = undefined;
      this._iamRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryStreamArn = value.deliveryStreamArn;
      this._iamRoleArn = value.iamRoleArn;
    }
  }

  // delivery_stream_arn - computed: false, optional: false, required: true
  private _deliveryStreamArn?: string; 
  public get deliveryStreamArn() {
    return this.getStringAttribute('delivery_stream_arn');
  }
  public set deliveryStreamArn(value: string) {
    this._deliveryStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamArnInput() {
    return this._deliveryStreamArn;
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }
}
export interface PinpointDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#application_arn AwsSesv2ConfigurationSetEventDestination#application_arn}
  */
  readonly applicationArn: string;
}
export class PinpointDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PinpointDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationArn = this._applicationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationArn = value.applicationArn;
    }
  }

  // application_arn - computed: false, optional: false, required: true
  private _applicationArn?: string; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }
}
export interface SnsDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#topic_arn AwsSesv2ConfigurationSetEventDestination#topic_arn}
  */
  readonly topicArn: string;
}
export class SnsDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnsDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnsDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topicArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topicArn = value.topicArn;
    }
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}
export interface EventDestinationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#enabled AwsSesv2ConfigurationSetEventDestination#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#matching_event_types AwsSesv2ConfigurationSetEventDestination#matching_event_types}
  */
  readonly matchingEventTypes: string[];
  /**
  * cloud_watch_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#cloud_watch_destination AwsSesv2ConfigurationSetEventDestination#cloud_watch_destination}
  */
  readonly cloudWatchDestination?: CloudWatchDestinationProperty;
  /**
  * event_bridge_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#event_bridge_destination AwsSesv2ConfigurationSetEventDestination#event_bridge_destination}
  */
  readonly eventBridgeDestination?: EventBridgeDestinationProperty;
  /**
  * kinesis_firehose_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#kinesis_firehose_destination AwsSesv2ConfigurationSetEventDestination#kinesis_firehose_destination}
  */
  readonly kinesisFirehoseDestination?: KinesisFirehoseDestinationProperty;
  /**
  * pinpoint_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#pinpoint_destination AwsSesv2ConfigurationSetEventDestination#pinpoint_destination}
  */
  readonly pinpointDestination?: PinpointDestinationProperty;
  /**
  * sns_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set_event_destination#sns_destination AwsSesv2ConfigurationSetEventDestination#sns_destination}
  */
  readonly snsDestination?: SnsDestinationProperty;
}
export class EventDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._matchingEventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingEventTypes = this._matchingEventTypes;
    }
    if (this._cloudWatchDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchDestination = this._cloudWatchDestination?.internalValue;
    }
    if (this._eventBridgeDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBridgeDestination = this._eventBridgeDestination?.internalValue;
    }
    if (this._kinesisFirehoseDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehoseDestination = this._kinesisFirehoseDestination?.internalValue;
    }
    if (this._pinpointDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinpointDestination = this._pinpointDestination?.internalValue;
    }
    if (this._snsDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsDestination = this._snsDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._matchingEventTypes = undefined;
      this._cloudWatchDestination.internalValue = undefined;
      this._eventBridgeDestination.internalValue = undefined;
      this._kinesisFirehoseDestination.internalValue = undefined;
      this._pinpointDestination.internalValue = undefined;
      this._snsDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._matchingEventTypes = value.matchingEventTypes;
      this._cloudWatchDestination.internalValue = value.cloudWatchDestination;
      this._eventBridgeDestination.internalValue = value.eventBridgeDestination;
      this._kinesisFirehoseDestination.internalValue = value.kinesisFirehoseDestination;
      this._pinpointDestination.internalValue = value.pinpointDestination;
      this._snsDestination.internalValue = value.snsDestination;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // matching_event_types - computed: false, optional: false, required: true
  private _matchingEventTypes?: string[]; 
  public get matchingEventTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('matching_event_types'));
  }
  public set matchingEventTypes(value: string[]) {
    this._matchingEventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingEventTypesInput() {
    return this._matchingEventTypes;
  }

  // cloud_watch_destination - computed: false, optional: true, required: false
  private _cloudWatchDestination = new CloudWatchDestinationPropertyOutputReference(this, "cloud_watch_destination");
  public get cloudWatchDestination() {
    return this._cloudWatchDestination;
  }
  public putCloudWatchDestination(value: CloudWatchDestinationProperty) {
    this._cloudWatchDestination.internalValue = value;
  }
  public resetCloudWatchDestination() {
    this._cloudWatchDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchDestinationInput() {
    return this._cloudWatchDestination.internalValue;
  }

  // event_bridge_destination - computed: false, optional: true, required: false
  private _eventBridgeDestination = new EventBridgeDestinationPropertyOutputReference(this, "event_bridge_destination");
  public get eventBridgeDestination() {
    return this._eventBridgeDestination;
  }
  public putEventBridgeDestination(value: EventBridgeDestinationProperty) {
    this._eventBridgeDestination.internalValue = value;
  }
  public resetEventBridgeDestination() {
    this._eventBridgeDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeDestinationInput() {
    return this._eventBridgeDestination.internalValue;
  }

  // kinesis_firehose_destination - computed: false, optional: true, required: false
  private _kinesisFirehoseDestination = new KinesisFirehoseDestinationPropertyOutputReference(this, "kinesis_firehose_destination");
  public get kinesisFirehoseDestination() {
    return this._kinesisFirehoseDestination;
  }
  public putKinesisFirehoseDestination(value: KinesisFirehoseDestinationProperty) {
    this._kinesisFirehoseDestination.internalValue = value;
  }
  public resetKinesisFirehoseDestination() {
    this._kinesisFirehoseDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseDestinationInput() {
    return this._kinesisFirehoseDestination.internalValue;
  }

  // pinpoint_destination - computed: false, optional: true, required: false
  private _pinpointDestination = new PinpointDestinationPropertyOutputReference(this, "pinpoint_destination");
  public get pinpointDestination() {
    return this._pinpointDestination;
  }
  public putPinpointDestination(value: PinpointDestinationProperty) {
    this._pinpointDestination.internalValue = value;
  }
  public resetPinpointDestination() {
    this._pinpointDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinpointDestinationInput() {
    return this._pinpointDestination.internalValue;
  }

  // sns_destination - computed: false, optional: true, required: false
  private _snsDestination = new SnsDestinationPropertyOutputReference(this, "sns_destination");
  public get snsDestination() {
    return this._snsDestination;
  }
  public putSnsDestination(value: SnsDestinationProperty) {
    this._snsDestination.internalValue = value;
  }
  public resetSnsDestination() {
    this._snsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsDestinationInput() {
    return this._snsDestination.internalValue;
  }
}
}
