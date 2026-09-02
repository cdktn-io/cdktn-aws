// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfEventDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Name of the configuration set this event destination belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#configuration_set_name TfEventDestination#configuration_set_name}
  */
  readonly configurationSetName: string;
  /**
  * Whether the event destination is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#enabled TfEventDestination#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Name of the event destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#event_destination_name TfEventDestination#event_destination_name}
  */
  readonly eventDestinationName: string;
  /**
  * Event types for which the destination receives records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#matching_event_types TfEventDestination#matching_event_types}
  */
  readonly matchingEventTypes: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#region TfEventDestination#region}
  */
  readonly region?: string;
  /**
  * cloudwatch_logs_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#cloudwatch_logs_destination TfEventDestination#cloudwatch_logs_destination}
  */
  readonly cloudwatchLogsDestination?: TfEventDestination.CloudwatchLogsDestinationProperty[] | cdktn.IResolvable;
  /**
  * kinesis_firehose_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#kinesis_firehose_destination TfEventDestination#kinesis_firehose_destination}
  */
  readonly kinesisFirehoseDestination?: TfEventDestination.KinesisFirehoseDestinationProperty[] | cdktn.IResolvable;
  /**
  * sns_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#sns_destination TfEventDestination#sns_destination}
  */
  readonly snsDestination?: TfEventDestination.SnsDestinationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination aws_pinpointsmsvoicev2_event_destination}
*/
export class TfEventDestination extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpointsmsvoicev2_event_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfEventDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfEventDestination to import
  * @param importFromId The id of the existing TfEventDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfEventDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpointsmsvoicev2_event_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination aws_pinpointsmsvoicev2_event_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfEventDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: TfEventDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpointsmsvoicev2_event_destination',
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
    this._enabled = config.enabled;
    this._eventDestinationName = config.eventDestinationName;
    this._matchingEventTypes = config.matchingEventTypes;
    this._region = config.region;
    this._cloudwatchLogsDestination.internalValue = config.cloudwatchLogsDestination;
    this._kinesisFirehoseDestination.internalValue = config.kinesisFirehoseDestination;
    this._snsDestination.internalValue = config.snsDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_set_arn - computed: true, optional: false, required: false
  public get configurationSetArn() {
    return this.getStringAttribute('configuration_set_arn');
  }

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

  // enabled - computed: true, optional: true, required: false
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

  // cloudwatch_logs_destination - computed: false, optional: true, required: false
  private _cloudwatchLogsDestination = new TfEventDestination.CloudwatchLogsDestinationPropertyList(this, "cloudwatch_logs_destination", false);
  public get cloudwatchLogsDestination() {
    return this._cloudwatchLogsDestination;
  }
  public putCloudwatchLogsDestination(value: TfEventDestination.CloudwatchLogsDestinationProperty[] | cdktn.IResolvable) {
    this._cloudwatchLogsDestination.internalValue = value;
  }
  public resetCloudwatchLogsDestination() {
    this._cloudwatchLogsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsDestinationInput() {
    return this._cloudwatchLogsDestination.internalValue;
  }

  // kinesis_firehose_destination - computed: false, optional: true, required: false
  private _kinesisFirehoseDestination = new TfEventDestination.KinesisFirehoseDestinationPropertyList(this, "kinesis_firehose_destination", false);
  public get kinesisFirehoseDestination() {
    return this._kinesisFirehoseDestination;
  }
  public putKinesisFirehoseDestination(value: TfEventDestination.KinesisFirehoseDestinationProperty[] | cdktn.IResolvable) {
    this._kinesisFirehoseDestination.internalValue = value;
  }
  public resetKinesisFirehoseDestination() {
    this._kinesisFirehoseDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseDestinationInput() {
    return this._kinesisFirehoseDestination.internalValue;
  }

  // sns_destination - computed: false, optional: true, required: false
  private _snsDestination = new TfEventDestination.SnsDestinationPropertyList(this, "sns_destination", false);
  public get snsDestination() {
    return this._snsDestination;
  }
  public putSnsDestination(value: TfEventDestination.SnsDestinationProperty[] | cdktn.IResolvable) {
    this._snsDestination.internalValue = value;
  }
  public resetSnsDestination() {
    this._snsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsDestinationInput() {
    return this._snsDestination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_name: cdktn.stringToTerraform(this._configurationSetName),
      enabled: cdktn.booleanToTerraform(this._enabled),
      event_destination_name: cdktn.stringToTerraform(this._eventDestinationName),
      matching_event_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._matchingEventTypes),
      region: cdktn.stringToTerraform(this._region),
      cloudwatch_logs_destination: cdktn.listMapper(tfEventDestinationCloudwatchLogsDestinationPropertyToTerraform, true)(this._cloudwatchLogsDestination.internalValue),
      kinesis_firehose_destination: cdktn.listMapper(tfEventDestinationKinesisFirehoseDestinationPropertyToTerraform, true)(this._kinesisFirehoseDestination.internalValue),
      sns_destination: cdktn.listMapper(tfEventDestinationSnsDestinationPropertyToTerraform, true)(this._snsDestination.internalValue),
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
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_destination_name: {
        value: cdktn.stringToHclTerraform(this._eventDestinationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matching_event_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._matchingEventTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudwatch_logs_destination: {
        value: cdktn.listMapperHcl(tfEventDestinationCloudwatchLogsDestinationPropertyToHclTerraform, true)(this._cloudwatchLogsDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventDestination.CloudwatchLogsDestinationPropertyList",
      },
      kinesis_firehose_destination: {
        value: cdktn.listMapperHcl(tfEventDestinationKinesisFirehoseDestinationPropertyToHclTerraform, true)(this._kinesisFirehoseDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventDestination.KinesisFirehoseDestinationPropertyList",
      },
      sns_destination: {
        value: cdktn.listMapperHcl(tfEventDestinationSnsDestinationPropertyToHclTerraform, true)(this._snsDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventDestination.SnsDestinationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfEventDestinationCloudwatchLogsDestinationPropertyToTerraform(struct?: TfEventDestination.CloudwatchLogsDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
    log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
  }
}


export function tfEventDestinationCloudwatchLogsDestinationPropertyToHclTerraform(struct?: TfEventDestination.CloudwatchLogsDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventDestinationKinesisFirehoseDestinationPropertyToTerraform(struct?: TfEventDestination.KinesisFirehoseDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream_arn: cdktn.stringToTerraform(struct!.deliveryStreamArn),
    iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
  }
}


export function tfEventDestinationKinesisFirehoseDestinationPropertyToHclTerraform(struct?: TfEventDestination.KinesisFirehoseDestinationProperty | cdktn.IResolvable): any {
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


export function tfEventDestinationSnsDestinationPropertyToTerraform(struct?: TfEventDestination.SnsDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function tfEventDestinationSnsDestinationPropertyToHclTerraform(struct?: TfEventDestination.SnsDestinationProperty | cdktn.IResolvable): any {
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


export namespace TfEventDestination {
export interface CloudwatchLogsDestinationProperty {
  /**
  * ARN of the IAM role that End User Messaging SMS assumes to write to the log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#iam_role_arn TfEventDestination#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * ARN of the Amazon CloudWatch log group that receives the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#log_group_arn TfEventDestination#log_group_arn}
  */
  readonly logGroupArn: string;
}
export class CloudwatchLogsDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogsDestinationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogsDestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamRoleArn = undefined;
      this._logGroupArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamRoleArn = value.iamRoleArn;
      this._logGroupArn = value.logGroupArn;
    }
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

  // log_group_arn - computed: false, optional: false, required: true
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }
}

export class CloudwatchLogsDestinationPropertyList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogsDestinationProperty[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogsDestinationPropertyOutputReference {
    return new CloudwatchLogsDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisFirehoseDestinationProperty {
  /**
  * ARN of the Amazon Data Firehose delivery stream that receives the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#delivery_stream_arn TfEventDestination#delivery_stream_arn}
  */
  readonly deliveryStreamArn: string;
  /**
  * ARN of the IAM role that End User Messaging SMS assumes to write to the delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#iam_role_arn TfEventDestination#iam_role_arn}
  */
  readonly iamRoleArn: string;
}
export class KinesisFirehoseDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KinesisFirehoseDestinationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: KinesisFirehoseDestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStreamArn = undefined;
      this._iamRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class KinesisFirehoseDestinationPropertyList extends cdktn.ComplexList {
  public internalValue? : KinesisFirehoseDestinationProperty[] | cdktn.IResolvable

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
  public get(index: number): KinesisFirehoseDestinationPropertyOutputReference {
    return new KinesisFirehoseDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnsDestinationProperty {
  /**
  * ARN of the Amazon SNS topic that receives the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_event_destination#topic_arn TfEventDestination#topic_arn}
  */
  readonly topicArn: string;
}
export class SnsDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SnsDestinationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnsDestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class SnsDestinationPropertyList extends cdktn.ComplexList {
  public internalValue? : SnsDestinationProperty[] | cdktn.IResolvable

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
  public get(index: number): SnsDestinationPropertyOutputReference {
    return new SnsDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
