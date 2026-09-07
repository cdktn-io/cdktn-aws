// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBucketNotificationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#bucket AwsBucketNotification#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#eventbridge AwsBucketNotification#eventbridge}
  */
  readonly eventbridge?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#id AwsBucketNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#region AwsBucketNotification#region}
  */
  readonly region?: string;
  /**
  * lambda_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#lambda_function AwsBucketNotification#lambda_function}
  */
  readonly lambdaFunction?: AwsBucketNotification.LambdaFunctionProperty[] | cdktn.IResolvable;
  /**
  * queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#queue AwsBucketNotification#queue}
  */
  readonly queue?: AwsBucketNotification.QueueProperty[] | cdktn.IResolvable;
  /**
  * topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#topic AwsBucketNotification#topic}
  */
  readonly topic?: AwsBucketNotification.TopicProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification aws_s3_bucket_notification}
*/
export class AwsBucketNotification extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBucketNotification resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBucketNotification to import
  * @param importFromId The id of the existing AwsBucketNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBucketNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification aws_s3_bucket_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBucketNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBucketNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_notification',
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
    this._bucket = config.bucket;
    this._eventbridge = config.eventbridge;
    this._id = config.id;
    this._region = config.region;
    this._lambdaFunction.internalValue = config.lambdaFunction;
    this._queue.internalValue = config.queue;
    this._topic.internalValue = config.topic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // eventbridge - computed: false, optional: true, required: false
  private _eventbridge?: boolean | cdktn.IResolvable; 
  public get eventbridge() {
    return this.getBooleanAttribute('eventbridge');
  }
  public set eventbridge(value: boolean | cdktn.IResolvable) {
    this._eventbridge = value;
  }
  public resetEventbridge() {
    this._eventbridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventbridgeInput() {
    return this._eventbridge;
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

  // lambda_function - computed: false, optional: true, required: false
  private _lambdaFunction = new AwsBucketNotification.LambdaFunctionPropertyList(this, "lambda_function", false);
  public get lambdaFunction() {
    return this._lambdaFunction;
  }
  public putLambdaFunction(value: AwsBucketNotification.LambdaFunctionProperty[] | cdktn.IResolvable) {
    this._lambdaFunction.internalValue = value;
  }
  public resetLambdaFunction() {
    this._lambdaFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionInput() {
    return this._lambdaFunction.internalValue;
  }

  // queue - computed: false, optional: true, required: false
  private _queue = new AwsBucketNotification.QueuePropertyList(this, "queue", false);
  public get queue() {
    return this._queue;
  }
  public putQueue(value: AwsBucketNotification.QueueProperty[] | cdktn.IResolvable) {
    this._queue.internalValue = value;
  }
  public resetQueue() {
    this._queue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue.internalValue;
  }

  // topic - computed: false, optional: true, required: false
  private _topic = new AwsBucketNotification.TopicPropertyList(this, "topic", false);
  public get topic() {
    return this._topic;
  }
  public putTopic(value: AwsBucketNotification.TopicProperty[] | cdktn.IResolvable) {
    this._topic.internalValue = value;
  }
  public resetTopic() {
    this._topic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktn.stringToTerraform(this._bucket),
      eventbridge: cdktn.booleanToTerraform(this._eventbridge),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      lambda_function: cdktn.listMapper(awsBucketNotificationLambdaFunctionPropertyToTerraform, true)(this._lambdaFunction.internalValue),
      queue: cdktn.listMapper(awsBucketNotificationQueuePropertyToTerraform, true)(this._queue.internalValue),
      topic: cdktn.listMapper(awsBucketNotificationTopicPropertyToTerraform, true)(this._topic.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktn.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventbridge: {
        value: cdktn.booleanToHclTerraform(this._eventbridge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      lambda_function: {
        value: cdktn.listMapperHcl(awsBucketNotificationLambdaFunctionPropertyToHclTerraform, true)(this._lambdaFunction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBucketNotification.LambdaFunctionPropertyList",
      },
      queue: {
        value: cdktn.listMapperHcl(awsBucketNotificationQueuePropertyToHclTerraform, true)(this._queue.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBucketNotification.QueuePropertyList",
      },
      topic: {
        value: cdktn.listMapperHcl(awsBucketNotificationTopicPropertyToHclTerraform, true)(this._topic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBucketNotification.TopicPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBucketNotificationLambdaFunctionPropertyToTerraform(struct?: AwsBucketNotification.LambdaFunctionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
    filter_prefix: cdktn.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktn.stringToTerraform(struct!.filterSuffix),
    id: cdktn.stringToTerraform(struct!.id),
    lambda_function_arn: cdktn.stringToTerraform(struct!.lambdaFunctionArn),
  }
}


export function awsBucketNotificationLambdaFunctionPropertyToHclTerraform(struct?: AwsBucketNotification.LambdaFunctionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_prefix: {
      value: cdktn.stringToHclTerraform(struct!.filterPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_suffix: {
      value: cdktn.stringToHclTerraform(struct!.filterSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_function_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaFunctionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketNotificationQueuePropertyToTerraform(struct?: AwsBucketNotification.QueueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
    filter_prefix: cdktn.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktn.stringToTerraform(struct!.filterSuffix),
    id: cdktn.stringToTerraform(struct!.id),
    queue_arn: cdktn.stringToTerraform(struct!.queueArn),
  }
}


export function awsBucketNotificationQueuePropertyToHclTerraform(struct?: AwsBucketNotification.QueueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_prefix: {
      value: cdktn.stringToHclTerraform(struct!.filterPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_suffix: {
      value: cdktn.stringToHclTerraform(struct!.filterSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_arn: {
      value: cdktn.stringToHclTerraform(struct!.queueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBucketNotificationTopicPropertyToTerraform(struct?: AwsBucketNotification.TopicProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
    filter_prefix: cdktn.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktn.stringToTerraform(struct!.filterSuffix),
    id: cdktn.stringToTerraform(struct!.id),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function awsBucketNotificationTopicPropertyToHclTerraform(struct?: AwsBucketNotification.TopicProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_prefix: {
      value: cdktn.stringToHclTerraform(struct!.filterPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_suffix: {
      value: cdktn.stringToHclTerraform(struct!.filterSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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


export namespace AwsBucketNotification {
export interface LambdaFunctionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#events AwsBucketNotification#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#filter_prefix AwsBucketNotification#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#filter_suffix AwsBucketNotification#filter_suffix}
  */
  readonly filterSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#id AwsBucketNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#lambda_function_arn AwsBucketNotification#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}
export class LambdaFunctionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaFunctionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._filterPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPrefix = this._filterPrefix;
    }
    if (this._filterSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSuffix = this._filterSuffix;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._filterPrefix = undefined;
      this._filterSuffix = undefined;
      this._id = undefined;
      this._lambdaFunctionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._filterPrefix = value.filterPrefix;
      this._filterSuffix = value.filterSuffix;
      this._id = value.id;
      this._lambdaFunctionArn = value.lambdaFunctionArn;
    }
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return cdktn.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // filter_prefix - computed: false, optional: true, required: false
  private _filterPrefix?: string; 
  public get filterPrefix() {
    return this.getStringAttribute('filter_prefix');
  }
  public set filterPrefix(value: string) {
    this._filterPrefix = value;
  }
  public resetFilterPrefix() {
    this._filterPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPrefixInput() {
    return this._filterPrefix;
  }

  // filter_suffix - computed: false, optional: true, required: false
  private _filterSuffix?: string; 
  public get filterSuffix() {
    return this.getStringAttribute('filter_suffix');
  }
  public set filterSuffix(value: string) {
    this._filterSuffix = value;
  }
  public resetFilterSuffix() {
    this._filterSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSuffixInput() {
    return this._filterSuffix;
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

  // lambda_function_arn - computed: false, optional: true, required: false
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  public resetLambdaFunctionArn() {
    this._lambdaFunctionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}

export class LambdaFunctionPropertyList extends cdktn.ComplexList {
  public internalValue? : LambdaFunctionProperty[] | cdktn.IResolvable

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
  public get(index: number): LambdaFunctionPropertyOutputReference {
    return new LambdaFunctionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#events AwsBucketNotification#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#filter_prefix AwsBucketNotification#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#filter_suffix AwsBucketNotification#filter_suffix}
  */
  readonly filterSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#id AwsBucketNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#queue_arn AwsBucketNotification#queue_arn}
  */
  readonly queueArn: string;
}
export class QueuePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QueueProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._filterPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPrefix = this._filterPrefix;
    }
    if (this._filterSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSuffix = this._filterSuffix;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._queueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueArn = this._queueArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._filterPrefix = undefined;
      this._filterSuffix = undefined;
      this._id = undefined;
      this._queueArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._filterPrefix = value.filterPrefix;
      this._filterSuffix = value.filterSuffix;
      this._id = value.id;
      this._queueArn = value.queueArn;
    }
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return cdktn.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // filter_prefix - computed: false, optional: true, required: false
  private _filterPrefix?: string; 
  public get filterPrefix() {
    return this.getStringAttribute('filter_prefix');
  }
  public set filterPrefix(value: string) {
    this._filterPrefix = value;
  }
  public resetFilterPrefix() {
    this._filterPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPrefixInput() {
    return this._filterPrefix;
  }

  // filter_suffix - computed: false, optional: true, required: false
  private _filterSuffix?: string; 
  public get filterSuffix() {
    return this.getStringAttribute('filter_suffix');
  }
  public set filterSuffix(value: string) {
    this._filterSuffix = value;
  }
  public resetFilterSuffix() {
    this._filterSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSuffixInput() {
    return this._filterSuffix;
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

  // queue_arn - computed: false, optional: false, required: true
  private _queueArn?: string; 
  public get queueArn() {
    return this.getStringAttribute('queue_arn');
  }
  public set queueArn(value: string) {
    this._queueArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueArnInput() {
    return this._queueArn;
  }
}

export class QueuePropertyList extends cdktn.ComplexList {
  public internalValue? : QueueProperty[] | cdktn.IResolvable

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
  public get(index: number): QueuePropertyOutputReference {
    return new QueuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TopicProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#events AwsBucketNotification#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#filter_prefix AwsBucketNotification#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#filter_suffix AwsBucketNotification#filter_suffix}
  */
  readonly filterSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#id AwsBucketNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3_bucket_notification#topic_arn AwsBucketNotification#topic_arn}
  */
  readonly topicArn: string;
}
export class TopicPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TopicProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._filterPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPrefix = this._filterPrefix;
    }
    if (this._filterSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSuffix = this._filterSuffix;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TopicProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._filterPrefix = undefined;
      this._filterSuffix = undefined;
      this._id = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._filterPrefix = value.filterPrefix;
      this._filterSuffix = value.filterSuffix;
      this._id = value.id;
      this._topicArn = value.topicArn;
    }
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return cdktn.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // filter_prefix - computed: false, optional: true, required: false
  private _filterPrefix?: string; 
  public get filterPrefix() {
    return this.getStringAttribute('filter_prefix');
  }
  public set filterPrefix(value: string) {
    this._filterPrefix = value;
  }
  public resetFilterPrefix() {
    this._filterPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPrefixInput() {
    return this._filterPrefix;
  }

  // filter_suffix - computed: false, optional: true, required: false
  private _filterSuffix?: string; 
  public get filterSuffix() {
    return this.getStringAttribute('filter_suffix');
  }
  public set filterSuffix(value: string) {
    this._filterSuffix = value;
  }
  public resetFilterSuffix() {
    this._filterSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSuffixInput() {
    return this._filterSuffix;
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

export class TopicPropertyList extends cdktn.ComplexList {
  public internalValue? : TopicProperty[] | cdktn.IResolvable

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
  public get(index: number): TopicPropertyOutputReference {
    return new TopicPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
