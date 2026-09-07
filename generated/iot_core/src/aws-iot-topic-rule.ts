// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsTopicRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#description AwsTopicRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#enabled AwsTopicRule#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#id AwsTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#name AwsTopicRule#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#region AwsTopicRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#sql AwsTopicRule#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#sql_version AwsTopicRule#sql_version}
  */
  readonly sqlVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#tags AwsTopicRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#tags_all AwsTopicRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * cloudwatch_alarm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#cloudwatch_alarm AwsTopicRule#cloudwatch_alarm}
  */
  readonly cloudwatchAlarm?: AwsTopicRule.CloudwatchAlarmProperty[] | cdktn.IResolvable;
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#cloudwatch_logs AwsTopicRule#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: AwsTopicRule.CloudwatchLogsProperty[] | cdktn.IResolvable;
  /**
  * cloudwatch_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#cloudwatch_metric AwsTopicRule#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: AwsTopicRule.CloudwatchMetricProperty[] | cdktn.IResolvable;
  /**
  * dynamodb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#dynamodb AwsTopicRule#dynamodb}
  */
  readonly dynamodb?: AwsTopicRule.DynamodbProperty[] | cdktn.IResolvable;
  /**
  * dynamodbv2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#dynamodbv2 AwsTopicRule#dynamodbv2}
  */
  readonly dynamodbv2?: AwsTopicRule.Dynamodbv2Property[] | cdktn.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#elasticsearch AwsTopicRule#elasticsearch}
  */
  readonly elasticsearch?: AwsTopicRule.ElasticsearchProperty[] | cdktn.IResolvable;
  /**
  * error_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#error_action AwsTopicRule#error_action}
  */
  readonly errorAction?: AwsTopicRule.ErrorActionProperty;
  /**
  * firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#firehose AwsTopicRule#firehose}
  */
  readonly firehose?: AwsTopicRule.FirehoseProperty[] | cdktn.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#http AwsTopicRule#http}
  */
  readonly http?: AwsTopicRule.HttpProperty[] | cdktn.IResolvable;
  /**
  * iot_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#iot_analytics AwsTopicRule#iot_analytics}
  */
  readonly iotAnalytics?: AwsTopicRule.IotAnalyticsProperty[] | cdktn.IResolvable;
  /**
  * iot_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#iot_events AwsTopicRule#iot_events}
  */
  readonly iotEvents?: AwsTopicRule.IotEventsProperty[] | cdktn.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#kafka AwsTopicRule#kafka}
  */
  readonly kafka?: AwsTopicRule.KafkaProperty[] | cdktn.IResolvable;
  /**
  * kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#kinesis AwsTopicRule#kinesis}
  */
  readonly kinesis?: AwsTopicRule.KinesisProperty[] | cdktn.IResolvable;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#lambda AwsTopicRule#lambda}
  */
  readonly lambda?: AwsTopicRule.LambdaProperty[] | cdktn.IResolvable;
  /**
  * republish block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#republish AwsTopicRule#republish}
  */
  readonly republish?: AwsTopicRule.RepublishProperty[] | cdktn.IResolvable;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#s3 AwsTopicRule#s3}
  */
  readonly s3?: AwsTopicRule.S3Property[] | cdktn.IResolvable;
  /**
  * sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#sns AwsTopicRule#sns}
  */
  readonly sns?: AwsTopicRule.SnsProperty[] | cdktn.IResolvable;
  /**
  * sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#sqs AwsTopicRule#sqs}
  */
  readonly sqs?: AwsTopicRule.SqsProperty[] | cdktn.IResolvable;
  /**
  * step_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#step_functions AwsTopicRule#step_functions}
  */
  readonly stepFunctions?: AwsTopicRule.StepFunctionsProperty[] | cdktn.IResolvable;
  /**
  * timestream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#timestream AwsTopicRule#timestream}
  */
  readonly timestream?: AwsTopicRule.TimestreamProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule aws_iot_topic_rule}
*/
export class AwsTopicRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_topic_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsTopicRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTopicRule to import
  * @param importFromId The id of the existing AwsTopicRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTopicRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_topic_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule aws_iot_topic_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTopicRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTopicRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_topic_rule',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._sql = config.sql;
    this._sqlVersion = config.sqlVersion;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cloudwatchAlarm.internalValue = config.cloudwatchAlarm;
    this._cloudwatchLogs.internalValue = config.cloudwatchLogs;
    this._cloudwatchMetric.internalValue = config.cloudwatchMetric;
    this._dynamodb.internalValue = config.dynamodb;
    this._dynamodbv2.internalValue = config.dynamodbv2;
    this._elasticsearch.internalValue = config.elasticsearch;
    this._errorAction.internalValue = config.errorAction;
    this._firehose.internalValue = config.firehose;
    this._http.internalValue = config.http;
    this._iotAnalytics.internalValue = config.iotAnalytics;
    this._iotEvents.internalValue = config.iotEvents;
    this._kafka.internalValue = config.kafka;
    this._kinesis.internalValue = config.kinesis;
    this._lambda.internalValue = config.lambda;
    this._republish.internalValue = config.republish;
    this._s3.internalValue = config.s3;
    this._sns.internalValue = config.sns;
    this._sqs.internalValue = config.sqs;
    this._stepFunctions.internalValue = config.stepFunctions;
    this._timestream.internalValue = config.timestream;
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

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // sql_version - computed: false, optional: false, required: true
  private _sqlVersion?: string; 
  public get sqlVersion() {
    return this.getStringAttribute('sql_version');
  }
  public set sqlVersion(value: string) {
    this._sqlVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlVersionInput() {
    return this._sqlVersion;
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

  // cloudwatch_alarm - computed: false, optional: true, required: false
  private _cloudwatchAlarm = new AwsTopicRule.CloudwatchAlarmPropertyList(this, "cloudwatch_alarm", true);
  public get cloudwatchAlarm() {
    return this._cloudwatchAlarm;
  }
  public putCloudwatchAlarm(value: AwsTopicRule.CloudwatchAlarmProperty[] | cdktn.IResolvable) {
    this._cloudwatchAlarm.internalValue = value;
  }
  public resetCloudwatchAlarm() {
    this._cloudwatchAlarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmInput() {
    return this._cloudwatchAlarm.internalValue;
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new AwsTopicRule.CloudwatchLogsPropertyList(this, "cloudwatch_logs", true);
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: AwsTopicRule.CloudwatchLogsProperty[] | cdktn.IResolvable) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // cloudwatch_metric - computed: false, optional: true, required: false
  private _cloudwatchMetric = new AwsTopicRule.CloudwatchMetricPropertyList(this, "cloudwatch_metric", true);
  public get cloudwatchMetric() {
    return this._cloudwatchMetric;
  }
  public putCloudwatchMetric(value: AwsTopicRule.CloudwatchMetricProperty[] | cdktn.IResolvable) {
    this._cloudwatchMetric.internalValue = value;
  }
  public resetCloudwatchMetric() {
    this._cloudwatchMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricInput() {
    return this._cloudwatchMetric.internalValue;
  }

  // dynamodb - computed: false, optional: true, required: false
  private _dynamodb = new AwsTopicRule.DynamodbPropertyList(this, "dynamodb", true);
  public get dynamodb() {
    return this._dynamodb;
  }
  public putDynamodb(value: AwsTopicRule.DynamodbProperty[] | cdktn.IResolvable) {
    this._dynamodb.internalValue = value;
  }
  public resetDynamodb() {
    this._dynamodb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbInput() {
    return this._dynamodb.internalValue;
  }

  // dynamodbv2 - computed: false, optional: true, required: false
  private _dynamodbv2 = new AwsTopicRule.Dynamodbv2PropertyList(this, "dynamodbv2", true);
  public get dynamodbv2() {
    return this._dynamodbv2;
  }
  public putDynamodbv2(value: AwsTopicRule.Dynamodbv2Property[] | cdktn.IResolvable) {
    this._dynamodbv2.internalValue = value;
  }
  public resetDynamodbv2() {
    this._dynamodbv2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbv2Input() {
    return this._dynamodbv2.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new AwsTopicRule.ElasticsearchPropertyList(this, "elasticsearch", true);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: AwsTopicRule.ElasticsearchProperty[] | cdktn.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // error_action - computed: false, optional: true, required: false
  private _errorAction = new AwsTopicRule.ErrorActionPropertyOutputReference(this, "error_action");
  public get errorAction() {
    return this._errorAction;
  }
  public putErrorAction(value: AwsTopicRule.ErrorActionProperty) {
    this._errorAction.internalValue = value;
  }
  public resetErrorAction() {
    this._errorAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorActionInput() {
    return this._errorAction.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new AwsTopicRule.FirehosePropertyList(this, "firehose", true);
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: AwsTopicRule.FirehoseProperty[] | cdktn.IResolvable) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new AwsTopicRule.HttpPropertyList(this, "http", true);
  public get http() {
    return this._http;
  }
  public putHttp(value: AwsTopicRule.HttpProperty[] | cdktn.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // iot_analytics - computed: false, optional: true, required: false
  private _iotAnalytics = new AwsTopicRule.IotAnalyticsPropertyList(this, "iot_analytics", true);
  public get iotAnalytics() {
    return this._iotAnalytics;
  }
  public putIotAnalytics(value: AwsTopicRule.IotAnalyticsProperty[] | cdktn.IResolvable) {
    this._iotAnalytics.internalValue = value;
  }
  public resetIotAnalytics() {
    this._iotAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotAnalyticsInput() {
    return this._iotAnalytics.internalValue;
  }

  // iot_events - computed: false, optional: true, required: false
  private _iotEvents = new AwsTopicRule.IotEventsPropertyList(this, "iot_events", true);
  public get iotEvents() {
    return this._iotEvents;
  }
  public putIotEvents(value: AwsTopicRule.IotEventsProperty[] | cdktn.IResolvable) {
    this._iotEvents.internalValue = value;
  }
  public resetIotEvents() {
    this._iotEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEventsInput() {
    return this._iotEvents.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new AwsTopicRule.KafkaPropertyList(this, "kafka", true);
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: AwsTopicRule.KafkaProperty[] | cdktn.IResolvable) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis = new AwsTopicRule.KinesisPropertyList(this, "kinesis", true);
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: AwsTopicRule.KinesisProperty[] | cdktn.IResolvable) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new AwsTopicRule.LambdaPropertyList(this, "lambda", true);
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: AwsTopicRule.LambdaProperty[] | cdktn.IResolvable) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // republish - computed: false, optional: true, required: false
  private _republish = new AwsTopicRule.RepublishPropertyList(this, "republish", true);
  public get republish() {
    return this._republish;
  }
  public putRepublish(value: AwsTopicRule.RepublishProperty[] | cdktn.IResolvable) {
    this._republish.internalValue = value;
  }
  public resetRepublish() {
    this._republish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishInput() {
    return this._republish.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new AwsTopicRule.S3PropertyList(this, "s3", true);
  public get s3() {
    return this._s3;
  }
  public putS3(value: AwsTopicRule.S3Property[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // sns - computed: false, optional: true, required: false
  private _sns = new AwsTopicRule.SnsPropertyList(this, "sns", true);
  public get sns() {
    return this._sns;
  }
  public putSns(value: AwsTopicRule.SnsProperty[] | cdktn.IResolvable) {
    this._sns.internalValue = value;
  }
  public resetSns() {
    this._sns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns.internalValue;
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs = new AwsTopicRule.SqsPropertyList(this, "sqs", true);
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: AwsTopicRule.SqsProperty[] | cdktn.IResolvable) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }

  // step_functions - computed: false, optional: true, required: false
  private _stepFunctions = new AwsTopicRule.StepFunctionsPropertyList(this, "step_functions", true);
  public get stepFunctions() {
    return this._stepFunctions;
  }
  public putStepFunctions(value: AwsTopicRule.StepFunctionsProperty[] | cdktn.IResolvable) {
    this._stepFunctions.internalValue = value;
  }
  public resetStepFunctions() {
    this._stepFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsInput() {
    return this._stepFunctions.internalValue;
  }

  // timestream - computed: false, optional: true, required: false
  private _timestream = new AwsTopicRule.TimestreamPropertyList(this, "timestream", true);
  public get timestream() {
    return this._timestream;
  }
  public putTimestream(value: AwsTopicRule.TimestreamProperty[] | cdktn.IResolvable) {
    this._timestream.internalValue = value;
  }
  public resetTimestream() {
    this._timestream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamInput() {
    return this._timestream.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      sql: cdktn.stringToTerraform(this._sql),
      sql_version: cdktn.stringToTerraform(this._sqlVersion),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      cloudwatch_alarm: cdktn.listMapper(awsTopicRuleCloudwatchAlarmPropertyToTerraform, true)(this._cloudwatchAlarm.internalValue),
      cloudwatch_logs: cdktn.listMapper(awsTopicRuleCloudwatchLogsPropertyToTerraform, true)(this._cloudwatchLogs.internalValue),
      cloudwatch_metric: cdktn.listMapper(awsTopicRuleCloudwatchMetricPropertyToTerraform, true)(this._cloudwatchMetric.internalValue),
      dynamodb: cdktn.listMapper(awsTopicRuleDynamodbPropertyToTerraform, true)(this._dynamodb.internalValue),
      dynamodbv2: cdktn.listMapper(awsTopicRuleDynamodbv2PropertyToTerraform, true)(this._dynamodbv2.internalValue),
      elasticsearch: cdktn.listMapper(awsTopicRuleElasticsearchPropertyToTerraform, true)(this._elasticsearch.internalValue),
      error_action: awsTopicRuleErrorActionPropertyToTerraform(this._errorAction.internalValue),
      firehose: cdktn.listMapper(awsTopicRuleFirehosePropertyToTerraform, true)(this._firehose.internalValue),
      http: cdktn.listMapper(awsTopicRuleHttpPropertyToTerraform, true)(this._http.internalValue),
      iot_analytics: cdktn.listMapper(awsTopicRuleIotAnalyticsPropertyToTerraform, true)(this._iotAnalytics.internalValue),
      iot_events: cdktn.listMapper(awsTopicRuleIotEventsPropertyToTerraform, true)(this._iotEvents.internalValue),
      kafka: cdktn.listMapper(awsTopicRuleKafkaPropertyToTerraform, true)(this._kafka.internalValue),
      kinesis: cdktn.listMapper(awsTopicRuleKinesisPropertyToTerraform, true)(this._kinesis.internalValue),
      lambda: cdktn.listMapper(awsTopicRuleLambdaPropertyToTerraform, true)(this._lambda.internalValue),
      republish: cdktn.listMapper(awsTopicRuleRepublishPropertyToTerraform, true)(this._republish.internalValue),
      s3: cdktn.listMapper(awsTopicRuleS3PropertyToTerraform, true)(this._s3.internalValue),
      sns: cdktn.listMapper(awsTopicRuleSnsPropertyToTerraform, true)(this._sns.internalValue),
      sqs: cdktn.listMapper(awsTopicRuleSqsPropertyToTerraform, true)(this._sqs.internalValue),
      step_functions: cdktn.listMapper(awsTopicRuleStepFunctionsPropertyToTerraform, true)(this._stepFunctions.internalValue),
      timestream: cdktn.listMapper(awsTopicRuleTimestreamPropertyToTerraform, true)(this._timestream.internalValue),
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
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
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
      sql: {
        value: cdktn.stringToHclTerraform(this._sql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_version: {
        value: cdktn.stringToHclTerraform(this._sqlVersion),
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
      cloudwatch_alarm: {
        value: cdktn.listMapperHcl(awsTopicRuleCloudwatchAlarmPropertyToHclTerraform, true)(this._cloudwatchAlarm.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.CloudwatchAlarmPropertyList",
      },
      cloudwatch_logs: {
        value: cdktn.listMapperHcl(awsTopicRuleCloudwatchLogsPropertyToHclTerraform, true)(this._cloudwatchLogs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.CloudwatchLogsPropertyList",
      },
      cloudwatch_metric: {
        value: cdktn.listMapperHcl(awsTopicRuleCloudwatchMetricPropertyToHclTerraform, true)(this._cloudwatchMetric.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.CloudwatchMetricPropertyList",
      },
      dynamodb: {
        value: cdktn.listMapperHcl(awsTopicRuleDynamodbPropertyToHclTerraform, true)(this._dynamodb.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.DynamodbPropertyList",
      },
      dynamodbv2: {
        value: cdktn.listMapperHcl(awsTopicRuleDynamodbv2PropertyToHclTerraform, true)(this._dynamodbv2.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.Dynamodbv2PropertyList",
      },
      elasticsearch: {
        value: cdktn.listMapperHcl(awsTopicRuleElasticsearchPropertyToHclTerraform, true)(this._elasticsearch.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.ElasticsearchPropertyList",
      },
      error_action: {
        value: awsTopicRuleErrorActionPropertyToHclTerraform(this._errorAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTopicRule.ErrorActionPropertyList",
      },
      firehose: {
        value: cdktn.listMapperHcl(awsTopicRuleFirehosePropertyToHclTerraform, true)(this._firehose.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.FirehosePropertyList",
      },
      http: {
        value: cdktn.listMapperHcl(awsTopicRuleHttpPropertyToHclTerraform, true)(this._http.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.HttpPropertyList",
      },
      iot_analytics: {
        value: cdktn.listMapperHcl(awsTopicRuleIotAnalyticsPropertyToHclTerraform, true)(this._iotAnalytics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.IotAnalyticsPropertyList",
      },
      iot_events: {
        value: cdktn.listMapperHcl(awsTopicRuleIotEventsPropertyToHclTerraform, true)(this._iotEvents.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.IotEventsPropertyList",
      },
      kafka: {
        value: cdktn.listMapperHcl(awsTopicRuleKafkaPropertyToHclTerraform, true)(this._kafka.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.KafkaPropertyList",
      },
      kinesis: {
        value: cdktn.listMapperHcl(awsTopicRuleKinesisPropertyToHclTerraform, true)(this._kinesis.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.KinesisPropertyList",
      },
      lambda: {
        value: cdktn.listMapperHcl(awsTopicRuleLambdaPropertyToHclTerraform, true)(this._lambda.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.LambdaPropertyList",
      },
      republish: {
        value: cdktn.listMapperHcl(awsTopicRuleRepublishPropertyToHclTerraform, true)(this._republish.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.RepublishPropertyList",
      },
      s3: {
        value: cdktn.listMapperHcl(awsTopicRuleS3PropertyToHclTerraform, true)(this._s3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.S3PropertyList",
      },
      sns: {
        value: cdktn.listMapperHcl(awsTopicRuleSnsPropertyToHclTerraform, true)(this._sns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.SnsPropertyList",
      },
      sqs: {
        value: cdktn.listMapperHcl(awsTopicRuleSqsPropertyToHclTerraform, true)(this._sqs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.SqsPropertyList",
      },
      step_functions: {
        value: cdktn.listMapperHcl(awsTopicRuleStepFunctionsPropertyToHclTerraform, true)(this._stepFunctions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.StepFunctionsPropertyList",
      },
      timestream: {
        value: cdktn.listMapperHcl(awsTopicRuleTimestreamPropertyToHclTerraform, true)(this._timestream.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsTopicRule.TimestreamPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsTopicRuleCloudwatchAlarmPropertyToTerraform(struct?: AwsTopicRule.CloudwatchAlarmProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_reason: cdktn.stringToTerraform(struct!.stateReason),
    state_value: cdktn.stringToTerraform(struct!.stateValue),
  }
}


export function awsTopicRuleCloudwatchAlarmPropertyToHclTerraform(struct?: AwsTopicRule.CloudwatchAlarmProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_reason: {
      value: cdktn.stringToHclTerraform(struct!.stateReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_value: {
      value: cdktn.stringToHclTerraform(struct!.stateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleCloudwatchLogsPropertyToTerraform(struct?: AwsTopicRule.CloudwatchLogsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsTopicRuleCloudwatchLogsPropertyToHclTerraform(struct?: AwsTopicRule.CloudwatchLogsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleCloudwatchMetricPropertyToTerraform(struct?: AwsTopicRule.CloudwatchMetricProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metric_namespace: cdktn.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktn.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktn.stringToTerraform(struct!.metricUnit),
    metric_value: cdktn.stringToTerraform(struct!.metricValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsTopicRuleCloudwatchMetricPropertyToHclTerraform(struct?: AwsTopicRule.CloudwatchMetricProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktn.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_timestamp: {
      value: cdktn.stringToHclTerraform(struct!.metricTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_unit: {
      value: cdktn.stringToHclTerraform(struct!.metricUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktn.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleDynamodbPropertyToTerraform(struct?: AwsTopicRule.DynamodbProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
    operation: cdktn.stringToTerraform(struct!.operation),
    payload_field: cdktn.stringToTerraform(struct!.payloadField),
    range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function awsTopicRuleDynamodbPropertyToHclTerraform(struct?: AwsTopicRule.DynamodbProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hash_key_field: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_type: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_value: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktn.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_field: {
      value: cdktn.stringToHclTerraform(struct!.payloadField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_field: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_type: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_value: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleDynamodbv2PutItemPropertyToTerraform(struct?: AwsTopicRule.Dynamodbv2PutItemPropertyOutputReference | AwsTopicRule.Dynamodbv2PutItemProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function awsTopicRuleDynamodbv2PutItemPropertyToHclTerraform(struct?: AwsTopicRule.Dynamodbv2PutItemPropertyOutputReference | AwsTopicRule.Dynamodbv2PutItemProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleDynamodbv2PropertyToTerraform(struct?: AwsTopicRule.Dynamodbv2Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    put_item: awsTopicRuleDynamodbv2PutItemPropertyToTerraform(struct!.putItem),
  }
}


export function awsTopicRuleDynamodbv2PropertyToHclTerraform(struct?: AwsTopicRule.Dynamodbv2Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    put_item: {
      value: awsTopicRuleDynamodbv2PutItemPropertyToHclTerraform(struct!.putItem),
      isBlock: true,
      type: "list",
      storageClassType: "Dynamodbv2PutItemPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleElasticsearchPropertyToTerraform(struct?: AwsTopicRule.ElasticsearchProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    id: cdktn.stringToTerraform(struct!.id),
    index: cdktn.stringToTerraform(struct!.index),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsTopicRuleElasticsearchPropertyToHclTerraform(struct?: AwsTopicRule.ElasticsearchProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
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
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionCloudwatchAlarmPropertyToTerraform(struct?: AwsTopicRule.ErrorActionCloudwatchAlarmPropertyOutputReference | AwsTopicRule.ErrorActionCloudwatchAlarmProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_reason: cdktn.stringToTerraform(struct!.stateReason),
    state_value: cdktn.stringToTerraform(struct!.stateValue),
  }
}


export function awsTopicRuleErrorActionCloudwatchAlarmPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionCloudwatchAlarmPropertyOutputReference | AwsTopicRule.ErrorActionCloudwatchAlarmProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_reason: {
      value: cdktn.stringToHclTerraform(struct!.stateReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_value: {
      value: cdktn.stringToHclTerraform(struct!.stateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionCloudwatchLogsPropertyToTerraform(struct?: AwsTopicRule.ErrorActionCloudwatchLogsPropertyOutputReference | AwsTopicRule.ErrorActionCloudwatchLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsTopicRuleErrorActionCloudwatchLogsPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionCloudwatchLogsPropertyOutputReference | AwsTopicRule.ErrorActionCloudwatchLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionCloudwatchMetricPropertyToTerraform(struct?: AwsTopicRule.ErrorActionCloudwatchMetricPropertyOutputReference | AwsTopicRule.ErrorActionCloudwatchMetricProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metric_namespace: cdktn.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktn.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktn.stringToTerraform(struct!.metricUnit),
    metric_value: cdktn.stringToTerraform(struct!.metricValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsTopicRuleErrorActionCloudwatchMetricPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionCloudwatchMetricPropertyOutputReference | AwsTopicRule.ErrorActionCloudwatchMetricProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktn.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_timestamp: {
      value: cdktn.stringToHclTerraform(struct!.metricTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_unit: {
      value: cdktn.stringToHclTerraform(struct!.metricUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktn.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionDynamodbPropertyToTerraform(struct?: AwsTopicRule.ErrorActionDynamodbPropertyOutputReference | AwsTopicRule.ErrorActionDynamodbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
    operation: cdktn.stringToTerraform(struct!.operation),
    payload_field: cdktn.stringToTerraform(struct!.payloadField),
    range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function awsTopicRuleErrorActionDynamodbPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionDynamodbPropertyOutputReference | AwsTopicRule.ErrorActionDynamodbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hash_key_field: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_type: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_value: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktn.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_field: {
      value: cdktn.stringToHclTerraform(struct!.payloadField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_field: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_type: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_value: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionDynamodbv2PutItemPropertyToTerraform(struct?: AwsTopicRule.ErrorActionDynamodbv2PutItemPropertyOutputReference | AwsTopicRule.ErrorActionDynamodbv2PutItemProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function awsTopicRuleErrorActionDynamodbv2PutItemPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionDynamodbv2PutItemPropertyOutputReference | AwsTopicRule.ErrorActionDynamodbv2PutItemProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionDynamodbv2PropertyToTerraform(struct?: AwsTopicRule.ErrorActionDynamodbv2PropertyOutputReference | AwsTopicRule.ErrorActionDynamodbv2Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    put_item: awsTopicRuleErrorActionDynamodbv2PutItemPropertyToTerraform(struct!.putItem),
  }
}


export function awsTopicRuleErrorActionDynamodbv2PropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionDynamodbv2PropertyOutputReference | AwsTopicRule.ErrorActionDynamodbv2Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    put_item: {
      value: awsTopicRuleErrorActionDynamodbv2PutItemPropertyToHclTerraform(struct!.putItem),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionDynamodbv2PutItemPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionElasticsearchPropertyToTerraform(struct?: AwsTopicRule.ErrorActionElasticsearchPropertyOutputReference | AwsTopicRule.ErrorActionElasticsearchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    id: cdktn.stringToTerraform(struct!.id),
    index: cdktn.stringToTerraform(struct!.index),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsTopicRuleErrorActionElasticsearchPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionElasticsearchPropertyOutputReference | AwsTopicRule.ErrorActionElasticsearchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
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
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionFirehosePropertyToTerraform(struct?: AwsTopicRule.ErrorActionFirehosePropertyOutputReference | AwsTopicRule.ErrorActionFirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    separator: cdktn.stringToTerraform(struct!.separator),
  }
}


export function awsTopicRuleErrorActionFirehosePropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionFirehosePropertyOutputReference | AwsTopicRule.ErrorActionFirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delivery_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktn.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionHttpHttpHeaderPropertyToTerraform(struct?: AwsTopicRule.ErrorActionHttpHttpHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsTopicRuleErrorActionHttpHttpHeaderPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionHttpHttpHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionHttpPropertyToTerraform(struct?: AwsTopicRule.ErrorActionHttpPropertyOutputReference | AwsTopicRule.ErrorActionHttpProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confirmation_url: cdktn.stringToTerraform(struct!.confirmationUrl),
    url: cdktn.stringToTerraform(struct!.url),
    http_header: cdktn.listMapper(awsTopicRuleErrorActionHttpHttpHeaderPropertyToTerraform, true)(struct!.httpHeader),
  }
}


export function awsTopicRuleErrorActionHttpPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionHttpPropertyOutputReference | AwsTopicRule.ErrorActionHttpProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confirmation_url: {
      value: cdktn.stringToHclTerraform(struct!.confirmationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktn.listMapperHcl(awsTopicRuleErrorActionHttpHttpHeaderPropertyToHclTerraform, true)(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionHttpHttpHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionIotAnalyticsPropertyToTerraform(struct?: AwsTopicRule.ErrorActionIotAnalyticsPropertyOutputReference | AwsTopicRule.ErrorActionIotAnalyticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsTopicRuleErrorActionIotAnalyticsPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionIotAnalyticsPropertyOutputReference | AwsTopicRule.ErrorActionIotAnalyticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionIotEventsPropertyToTerraform(struct?: AwsTopicRule.ErrorActionIotEventsPropertyOutputReference | AwsTopicRule.ErrorActionIotEventsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    input_name: cdktn.stringToTerraform(struct!.inputName),
    message_id: cdktn.stringToTerraform(struct!.messageId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsTopicRuleErrorActionIotEventsPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionIotEventsPropertyOutputReference | AwsTopicRule.ErrorActionIotEventsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktn.stringToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionKafkaHeaderPropertyToTerraform(struct?: AwsTopicRule.ErrorActionKafkaHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsTopicRuleErrorActionKafkaHeaderPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionKafkaHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionKafkaPropertyToTerraform(struct?: AwsTopicRule.ErrorActionKafkaPropertyOutputReference | AwsTopicRule.ErrorActionKafkaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.clientProperties),
    destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
    key: cdktn.stringToTerraform(struct!.key),
    partition: cdktn.stringToTerraform(struct!.partition),
    topic: cdktn.stringToTerraform(struct!.topic),
    header: cdktn.listMapper(awsTopicRuleErrorActionKafkaHeaderPropertyToTerraform, true)(struct!.header),
  }
}


export function awsTopicRuleErrorActionKafkaPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionKafkaPropertyOutputReference | AwsTopicRule.ErrorActionKafkaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.clientProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    destination_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktn.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(awsTopicRuleErrorActionKafkaHeaderPropertyToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionKafkaHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionKinesisPropertyToTerraform(struct?: AwsTopicRule.ErrorActionKinesisPropertyOutputReference | AwsTopicRule.ErrorActionKinesisProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition_key: cdktn.stringToTerraform(struct!.partitionKey),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    stream_name: cdktn.stringToTerraform(struct!.streamName),
  }
}


export function awsTopicRuleErrorActionKinesisPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionKinesisPropertyOutputReference | AwsTopicRule.ErrorActionKinesisProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition_key: {
      value: cdktn.stringToHclTerraform(struct!.partitionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktn.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionLambdaPropertyToTerraform(struct?: AwsTopicRule.ErrorActionLambdaPropertyOutputReference | AwsTopicRule.ErrorActionLambdaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function awsTopicRuleErrorActionLambdaPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionLambdaPropertyOutputReference | AwsTopicRule.ErrorActionLambdaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionRepublishPropertyToTerraform(struct?: AwsTopicRule.ErrorActionRepublishPropertyOutputReference | AwsTopicRule.ErrorActionRepublishProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    qos: cdktn.numberToTerraform(struct!.qos),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function awsTopicRuleErrorActionRepublishPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionRepublishPropertyOutputReference | AwsTopicRule.ErrorActionRepublishProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    qos: {
      value: cdktn.numberToHclTerraform(struct!.qos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionS3PropertyToTerraform(struct?: AwsTopicRule.ErrorActionS3PropertyOutputReference | AwsTopicRule.ErrorActionS3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    key: cdktn.stringToTerraform(struct!.key),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsTopicRuleErrorActionS3PropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionS3PropertyOutputReference | AwsTopicRule.ErrorActionS3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionSnsPropertyToTerraform(struct?: AwsTopicRule.ErrorActionSnsPropertyOutputReference | AwsTopicRule.ErrorActionSnsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_format: cdktn.stringToTerraform(struct!.messageFormat),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function awsTopicRuleErrorActionSnsPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionSnsPropertyOutputReference | AwsTopicRule.ErrorActionSnsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_format: {
      value: cdktn.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionSqsPropertyToTerraform(struct?: AwsTopicRule.ErrorActionSqsPropertyOutputReference | AwsTopicRule.ErrorActionSqsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    use_base64: cdktn.booleanToTerraform(struct!.useBase64),
  }
}


export function awsTopicRuleErrorActionSqsPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionSqsPropertyOutputReference | AwsTopicRule.ErrorActionSqsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_base64: {
      value: cdktn.booleanToHclTerraform(struct!.useBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionStepFunctionsPropertyToTerraform(struct?: AwsTopicRule.ErrorActionStepFunctionsPropertyOutputReference | AwsTopicRule.ErrorActionStepFunctionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_name_prefix: cdktn.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktn.stringToTerraform(struct!.stateMachineName),
  }
}


export function awsTopicRuleErrorActionStepFunctionsPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionStepFunctionsPropertyOutputReference | AwsTopicRule.ErrorActionStepFunctionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.executionNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_machine_name: {
      value: cdktn.stringToHclTerraform(struct!.stateMachineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionTimestreamDimensionPropertyToTerraform(struct?: AwsTopicRule.ErrorActionTimestreamDimensionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsTopicRuleErrorActionTimestreamDimensionPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionTimestreamDimensionProperty | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionTimestreamTimestampPropertyToTerraform(struct?: AwsTopicRule.ErrorActionTimestreamTimestampPropertyOutputReference | AwsTopicRule.ErrorActionTimestreamTimestampProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsTopicRuleErrorActionTimestreamTimestampPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionTimestreamTimestampPropertyOutputReference | AwsTopicRule.ErrorActionTimestreamTimestampProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionTimestreamPropertyToTerraform(struct?: AwsTopicRule.ErrorActionTimestreamPropertyOutputReference | AwsTopicRule.ErrorActionTimestreamProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    dimension: cdktn.listMapper(awsTopicRuleErrorActionTimestreamDimensionPropertyToTerraform, true)(struct!.dimension),
    timestamp: awsTopicRuleErrorActionTimestreamTimestampPropertyToTerraform(struct!.timestamp),
  }
}


export function awsTopicRuleErrorActionTimestreamPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionTimestreamPropertyOutputReference | AwsTopicRule.ErrorActionTimestreamProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktn.listMapperHcl(awsTopicRuleErrorActionTimestreamDimensionPropertyToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "ErrorActionTimestreamDimensionPropertyList",
    },
    timestamp: {
      value: awsTopicRuleErrorActionTimestreamTimestampPropertyToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionTimestreamTimestampPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleErrorActionPropertyToTerraform(struct?: AwsTopicRule.ErrorActionPropertyOutputReference | AwsTopicRule.ErrorActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_alarm: awsTopicRuleErrorActionCloudwatchAlarmPropertyToTerraform(struct!.cloudwatchAlarm),
    cloudwatch_logs: awsTopicRuleErrorActionCloudwatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
    cloudwatch_metric: awsTopicRuleErrorActionCloudwatchMetricPropertyToTerraform(struct!.cloudwatchMetric),
    dynamodb: awsTopicRuleErrorActionDynamodbPropertyToTerraform(struct!.dynamodb),
    dynamodbv2: awsTopicRuleErrorActionDynamodbv2PropertyToTerraform(struct!.dynamodbv2),
    elasticsearch: awsTopicRuleErrorActionElasticsearchPropertyToTerraform(struct!.elasticsearch),
    firehose: awsTopicRuleErrorActionFirehosePropertyToTerraform(struct!.firehose),
    http: awsTopicRuleErrorActionHttpPropertyToTerraform(struct!.http),
    iot_analytics: awsTopicRuleErrorActionIotAnalyticsPropertyToTerraform(struct!.iotAnalytics),
    iot_events: awsTopicRuleErrorActionIotEventsPropertyToTerraform(struct!.iotEvents),
    kafka: awsTopicRuleErrorActionKafkaPropertyToTerraform(struct!.kafka),
    kinesis: awsTopicRuleErrorActionKinesisPropertyToTerraform(struct!.kinesis),
    lambda: awsTopicRuleErrorActionLambdaPropertyToTerraform(struct!.lambda),
    republish: awsTopicRuleErrorActionRepublishPropertyToTerraform(struct!.republish),
    s3: awsTopicRuleErrorActionS3PropertyToTerraform(struct!.s3),
    sns: awsTopicRuleErrorActionSnsPropertyToTerraform(struct!.sns),
    sqs: awsTopicRuleErrorActionSqsPropertyToTerraform(struct!.sqs),
    step_functions: awsTopicRuleErrorActionStepFunctionsPropertyToTerraform(struct!.stepFunctions),
    timestream: awsTopicRuleErrorActionTimestreamPropertyToTerraform(struct!.timestream),
  }
}


export function awsTopicRuleErrorActionPropertyToHclTerraform(struct?: AwsTopicRule.ErrorActionPropertyOutputReference | AwsTopicRule.ErrorActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_alarm: {
      value: awsTopicRuleErrorActionCloudwatchAlarmPropertyToHclTerraform(struct!.cloudwatchAlarm),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionCloudwatchAlarmPropertyList",
    },
    cloudwatch_logs: {
      value: awsTopicRuleErrorActionCloudwatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionCloudwatchLogsPropertyList",
    },
    cloudwatch_metric: {
      value: awsTopicRuleErrorActionCloudwatchMetricPropertyToHclTerraform(struct!.cloudwatchMetric),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionCloudwatchMetricPropertyList",
    },
    dynamodb: {
      value: awsTopicRuleErrorActionDynamodbPropertyToHclTerraform(struct!.dynamodb),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionDynamodbPropertyList",
    },
    dynamodbv2: {
      value: awsTopicRuleErrorActionDynamodbv2PropertyToHclTerraform(struct!.dynamodbv2),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionDynamodbv2PropertyList",
    },
    elasticsearch: {
      value: awsTopicRuleErrorActionElasticsearchPropertyToHclTerraform(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionElasticsearchPropertyList",
    },
    firehose: {
      value: awsTopicRuleErrorActionFirehosePropertyToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionFirehosePropertyList",
    },
    http: {
      value: awsTopicRuleErrorActionHttpPropertyToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionHttpPropertyList",
    },
    iot_analytics: {
      value: awsTopicRuleErrorActionIotAnalyticsPropertyToHclTerraform(struct!.iotAnalytics),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionIotAnalyticsPropertyList",
    },
    iot_events: {
      value: awsTopicRuleErrorActionIotEventsPropertyToHclTerraform(struct!.iotEvents),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionIotEventsPropertyList",
    },
    kafka: {
      value: awsTopicRuleErrorActionKafkaPropertyToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionKafkaPropertyList",
    },
    kinesis: {
      value: awsTopicRuleErrorActionKinesisPropertyToHclTerraform(struct!.kinesis),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionKinesisPropertyList",
    },
    lambda: {
      value: awsTopicRuleErrorActionLambdaPropertyToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionLambdaPropertyList",
    },
    republish: {
      value: awsTopicRuleErrorActionRepublishPropertyToHclTerraform(struct!.republish),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionRepublishPropertyList",
    },
    s3: {
      value: awsTopicRuleErrorActionS3PropertyToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionS3PropertyList",
    },
    sns: {
      value: awsTopicRuleErrorActionSnsPropertyToHclTerraform(struct!.sns),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionSnsPropertyList",
    },
    sqs: {
      value: awsTopicRuleErrorActionSqsPropertyToHclTerraform(struct!.sqs),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionSqsPropertyList",
    },
    step_functions: {
      value: awsTopicRuleErrorActionStepFunctionsPropertyToHclTerraform(struct!.stepFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionStepFunctionsPropertyList",
    },
    timestream: {
      value: awsTopicRuleErrorActionTimestreamPropertyToHclTerraform(struct!.timestream),
      isBlock: true,
      type: "list",
      storageClassType: "ErrorActionTimestreamPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleFirehosePropertyToTerraform(struct?: AwsTopicRule.FirehoseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    separator: cdktn.stringToTerraform(struct!.separator),
  }
}


export function awsTopicRuleFirehosePropertyToHclTerraform(struct?: AwsTopicRule.FirehoseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delivery_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktn.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleHttpHttpHeaderPropertyToTerraform(struct?: AwsTopicRule.HttpHttpHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsTopicRuleHttpHttpHeaderPropertyToHclTerraform(struct?: AwsTopicRule.HttpHttpHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleHttpPropertyToTerraform(struct?: AwsTopicRule.HttpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confirmation_url: cdktn.stringToTerraform(struct!.confirmationUrl),
    url: cdktn.stringToTerraform(struct!.url),
    http_header: cdktn.listMapper(awsTopicRuleHttpHttpHeaderPropertyToTerraform, true)(struct!.httpHeader),
  }
}


export function awsTopicRuleHttpPropertyToHclTerraform(struct?: AwsTopicRule.HttpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confirmation_url: {
      value: cdktn.stringToHclTerraform(struct!.confirmationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktn.listMapperHcl(awsTopicRuleHttpHttpHeaderPropertyToHclTerraform, true)(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "HttpHttpHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleIotAnalyticsPropertyToTerraform(struct?: AwsTopicRule.IotAnalyticsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsTopicRuleIotAnalyticsPropertyToHclTerraform(struct?: AwsTopicRule.IotAnalyticsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleIotEventsPropertyToTerraform(struct?: AwsTopicRule.IotEventsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    input_name: cdktn.stringToTerraform(struct!.inputName),
    message_id: cdktn.stringToTerraform(struct!.messageId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsTopicRuleIotEventsPropertyToHclTerraform(struct?: AwsTopicRule.IotEventsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktn.stringToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleKafkaHeaderPropertyToTerraform(struct?: AwsTopicRule.KafkaHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsTopicRuleKafkaHeaderPropertyToHclTerraform(struct?: AwsTopicRule.KafkaHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleKafkaPropertyToTerraform(struct?: AwsTopicRule.KafkaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.clientProperties),
    destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
    key: cdktn.stringToTerraform(struct!.key),
    partition: cdktn.stringToTerraform(struct!.partition),
    topic: cdktn.stringToTerraform(struct!.topic),
    header: cdktn.listMapper(awsTopicRuleKafkaHeaderPropertyToTerraform, true)(struct!.header),
  }
}


export function awsTopicRuleKafkaPropertyToHclTerraform(struct?: AwsTopicRule.KafkaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.clientProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    destination_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktn.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(awsTopicRuleKafkaHeaderPropertyToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleKinesisPropertyToTerraform(struct?: AwsTopicRule.KinesisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition_key: cdktn.stringToTerraform(struct!.partitionKey),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    stream_name: cdktn.stringToTerraform(struct!.streamName),
  }
}


export function awsTopicRuleKinesisPropertyToHclTerraform(struct?: AwsTopicRule.KinesisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition_key: {
      value: cdktn.stringToHclTerraform(struct!.partitionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktn.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleLambdaPropertyToTerraform(struct?: AwsTopicRule.LambdaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function awsTopicRuleLambdaPropertyToHclTerraform(struct?: AwsTopicRule.LambdaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleRepublishPropertyToTerraform(struct?: AwsTopicRule.RepublishProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    qos: cdktn.numberToTerraform(struct!.qos),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function awsTopicRuleRepublishPropertyToHclTerraform(struct?: AwsTopicRule.RepublishProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    qos: {
      value: cdktn.numberToHclTerraform(struct!.qos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleS3PropertyToTerraform(struct?: AwsTopicRule.S3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    key: cdktn.stringToTerraform(struct!.key),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsTopicRuleS3PropertyToHclTerraform(struct?: AwsTopicRule.S3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleSnsPropertyToTerraform(struct?: AwsTopicRule.SnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_format: cdktn.stringToTerraform(struct!.messageFormat),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function awsTopicRuleSnsPropertyToHclTerraform(struct?: AwsTopicRule.SnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_format: {
      value: cdktn.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleSqsPropertyToTerraform(struct?: AwsTopicRule.SqsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    use_base64: cdktn.booleanToTerraform(struct!.useBase64),
  }
}


export function awsTopicRuleSqsPropertyToHclTerraform(struct?: AwsTopicRule.SqsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_base64: {
      value: cdktn.booleanToHclTerraform(struct!.useBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleStepFunctionsPropertyToTerraform(struct?: AwsTopicRule.StepFunctionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_name_prefix: cdktn.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktn.stringToTerraform(struct!.stateMachineName),
  }
}


export function awsTopicRuleStepFunctionsPropertyToHclTerraform(struct?: AwsTopicRule.StepFunctionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.executionNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_machine_name: {
      value: cdktn.stringToHclTerraform(struct!.stateMachineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleTimestreamDimensionPropertyToTerraform(struct?: AwsTopicRule.TimestreamDimensionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsTopicRuleTimestreamDimensionPropertyToHclTerraform(struct?: AwsTopicRule.TimestreamDimensionProperty | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleTimestreamTimestampPropertyToTerraform(struct?: AwsTopicRule.TimestreamTimestampPropertyOutputReference | AwsTopicRule.TimestreamTimestampProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsTopicRuleTimestreamTimestampPropertyToHclTerraform(struct?: AwsTopicRule.TimestreamTimestampPropertyOutputReference | AwsTopicRule.TimestreamTimestampProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTopicRuleTimestreamPropertyToTerraform(struct?: AwsTopicRule.TimestreamProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    dimension: cdktn.listMapper(awsTopicRuleTimestreamDimensionPropertyToTerraform, true)(struct!.dimension),
    timestamp: awsTopicRuleTimestreamTimestampPropertyToTerraform(struct!.timestamp),
  }
}


export function awsTopicRuleTimestreamPropertyToHclTerraform(struct?: AwsTopicRule.TimestreamProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktn.listMapperHcl(awsTopicRuleTimestreamDimensionPropertyToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "TimestreamDimensionPropertyList",
    },
    timestamp: {
      value: awsTopicRuleTimestreamTimestampPropertyToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamTimestampPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsTopicRule {
export interface CloudwatchAlarmProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#alarm_name AwsTopicRule#alarm_name}
  */
  readonly alarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#state_reason AwsTopicRule#state_reason}
  */
  readonly stateReason: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#state_value AwsTopicRule#state_value}
  */
  readonly stateValue: string;
}
export class CloudwatchAlarmPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchAlarmProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateReason = this._stateReason;
    }
    if (this._stateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateValue = this._stateValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlarmProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
      this._roleArn = undefined;
      this._stateReason = undefined;
      this._stateValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
      this._roleArn = value.roleArn;
      this._stateReason = value.stateReason;
      this._stateValue = value.stateValue;
    }
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_reason - computed: false, optional: false, required: true
  private _stateReason?: string; 
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
  public set stateReason(value: string) {
    this._stateReason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateReasonInput() {
    return this._stateReason;
  }

  // state_value - computed: false, optional: false, required: true
  private _stateValue?: string; 
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
  public set stateValue(value: string) {
    this._stateValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateValueInput() {
    return this._stateValue;
  }
}

export class CloudwatchAlarmPropertyList extends cdktn.ComplexList {
  public internalValue? : CloudwatchAlarmProperty[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchAlarmPropertyOutputReference {
    return new CloudwatchAlarmPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#batch_mode AwsTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#log_group_name AwsTopicRule#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
}
export class CloudwatchLogsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._logGroupName = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._logGroupName = value.logGroupName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class CloudwatchLogsPropertyList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogsProperty[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogsPropertyOutputReference {
    return new CloudwatchLogsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchMetricProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#metric_name AwsTopicRule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#metric_namespace AwsTopicRule#metric_namespace}
  */
  readonly metricNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#metric_timestamp AwsTopicRule#metric_timestamp}
  */
  readonly metricTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#metric_unit AwsTopicRule#metric_unit}
  */
  readonly metricUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#metric_value AwsTopicRule#metric_value}
  */
  readonly metricValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
}
export class CloudwatchMetricPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchMetricProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._metricTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTimestamp = this._metricTimestamp;
    }
    if (this._metricUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricUnit = this._metricUnit;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._metricTimestamp = undefined;
      this._metricUnit = undefined;
      this._metricValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._metricTimestamp = value.metricTimestamp;
      this._metricUnit = value.metricUnit;
      this._metricValue = value.metricValue;
      this._roleArn = value.roleArn;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: false, required: true
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // metric_timestamp - computed: false, optional: true, required: false
  private _metricTimestamp?: string; 
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }
  public set metricTimestamp(value: string) {
    this._metricTimestamp = value;
  }
  public resetMetricTimestamp() {
    this._metricTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTimestampInput() {
    return this._metricTimestamp;
  }

  // metric_unit - computed: false, optional: false, required: true
  private _metricUnit?: string; 
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }
  public set metricUnit(value: string) {
    this._metricUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUnitInput() {
    return this._metricUnit;
  }

  // metric_value - computed: false, optional: false, required: true
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class CloudwatchMetricPropertyList extends cdktn.ComplexList {
  public internalValue? : CloudwatchMetricProperty[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchMetricPropertyOutputReference {
    return new CloudwatchMetricPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#hash_key_field AwsTopicRule#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#hash_key_type AwsTopicRule#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#hash_key_value AwsTopicRule#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#operation AwsTopicRule#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#payload_field AwsTopicRule#payload_field}
  */
  readonly payloadField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#range_key_field AwsTopicRule#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#range_key_type AwsTopicRule#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#range_key_value AwsTopicRule#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#table_name AwsTopicRule#table_name}
  */
  readonly tableName: string;
}
export class DynamodbPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyField = this._hashKeyField;
    }
    if (this._hashKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyType = this._hashKeyType;
    }
    if (this._hashKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyValue = this._hashKeyValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._payloadField !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadField = this._payloadField;
    }
    if (this._rangeKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyField = this._rangeKeyField;
    }
    if (this._rangeKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyType = this._rangeKeyType;
    }
    if (this._rangeKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyValue = this._rangeKeyValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashKeyField = undefined;
      this._hashKeyType = undefined;
      this._hashKeyValue = undefined;
      this._operation = undefined;
      this._payloadField = undefined;
      this._rangeKeyField = undefined;
      this._rangeKeyType = undefined;
      this._rangeKeyValue = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashKeyField = value.hashKeyField;
      this._hashKeyType = value.hashKeyType;
      this._hashKeyValue = value.hashKeyValue;
      this._operation = value.operation;
      this._payloadField = value.payloadField;
      this._rangeKeyField = value.rangeKeyField;
      this._rangeKeyType = value.rangeKeyType;
      this._rangeKeyValue = value.rangeKeyValue;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
    }
  }

  // hash_key_field - computed: false, optional: false, required: true
  private _hashKeyField?: string; 
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }
  public set hashKeyField(value: string) {
    this._hashKeyField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyFieldInput() {
    return this._hashKeyField;
  }

  // hash_key_type - computed: false, optional: true, required: false
  private _hashKeyType?: string; 
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }
  public set hashKeyType(value: string) {
    this._hashKeyType = value;
  }
  public resetHashKeyType() {
    this._hashKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyTypeInput() {
    return this._hashKeyType;
  }

  // hash_key_value - computed: false, optional: false, required: true
  private _hashKeyValue?: string; 
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }
  public set hashKeyValue(value: string) {
    this._hashKeyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyValueInput() {
    return this._hashKeyValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // payload_field - computed: false, optional: true, required: false
  private _payloadField?: string; 
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }
  public set payloadField(value: string) {
    this._payloadField = value;
  }
  public resetPayloadField() {
    this._payloadField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFieldInput() {
    return this._payloadField;
  }

  // range_key_field - computed: false, optional: true, required: false
  private _rangeKeyField?: string; 
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }
  public set rangeKeyField(value: string) {
    this._rangeKeyField = value;
  }
  public resetRangeKeyField() {
    this._rangeKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyFieldInput() {
    return this._rangeKeyField;
  }

  // range_key_type - computed: false, optional: true, required: false
  private _rangeKeyType?: string; 
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }
  public set rangeKeyType(value: string) {
    this._rangeKeyType = value;
  }
  public resetRangeKeyType() {
    this._rangeKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyTypeInput() {
    return this._rangeKeyType;
  }

  // range_key_value - computed: false, optional: true, required: false
  private _rangeKeyValue?: string; 
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }
  public set rangeKeyValue(value: string) {
    this._rangeKeyValue = value;
  }
  public resetRangeKeyValue() {
    this._rangeKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyValueInput() {
    return this._rangeKeyValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class DynamodbPropertyList extends cdktn.ComplexList {
  public internalValue? : DynamodbProperty[] | cdktn.IResolvable

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
  public get(index: number): DynamodbPropertyOutputReference {
    return new DynamodbPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Dynamodbv2PutItemProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#table_name AwsTopicRule#table_name}
  */
  readonly tableName: string;
}
export class Dynamodbv2PutItemPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Dynamodbv2PutItemProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Dynamodbv2PutItemProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableName = value.tableName;
    }
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface Dynamodbv2Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * put_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#put_item AwsTopicRule#put_item}
  */
  readonly putItem?: Dynamodbv2PutItemProperty;
}
export class Dynamodbv2PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Dynamodbv2Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._putItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.putItem = this._putItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Dynamodbv2Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._putItem.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._putItem.internalValue = value.putItem;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // put_item - computed: false, optional: true, required: false
  private _putItem = new Dynamodbv2PutItemPropertyOutputReference(this, "put_item");
  public get putItem() {
    return this._putItem;
  }
  public putPutItem(value: Dynamodbv2PutItemProperty) {
    this._putItem.internalValue = value;
  }
  public resetPutItem() {
    this._putItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putItemInput() {
    return this._putItem.internalValue;
  }
}

export class Dynamodbv2PropertyList extends cdktn.ComplexList {
  public internalValue? : Dynamodbv2Property[] | cdktn.IResolvable

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
  public get(index: number): Dynamodbv2PropertyOutputReference {
    return new Dynamodbv2PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#endpoint AwsTopicRule#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#id AwsTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#index AwsTopicRule#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#type AwsTopicRule#type}
  */
  readonly type: string;
}
export class ElasticsearchPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElasticsearchProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._index = undefined;
      this._roleArn = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._index = value.index;
      this._roleArn = value.roleArn;
      this._type = value.type;
    }
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ElasticsearchPropertyList extends cdktn.ComplexList {
  public internalValue? : ElasticsearchProperty[] | cdktn.IResolvable

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
  public get(index: number): ElasticsearchPropertyOutputReference {
    return new ElasticsearchPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ErrorActionCloudwatchAlarmProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#alarm_name AwsTopicRule#alarm_name}
  */
  readonly alarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#state_reason AwsTopicRule#state_reason}
  */
  readonly stateReason: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#state_value AwsTopicRule#state_value}
  */
  readonly stateValue: string;
}
export class ErrorActionCloudwatchAlarmPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionCloudwatchAlarmProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateReason = this._stateReason;
    }
    if (this._stateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateValue = this._stateValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionCloudwatchAlarmProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarmName = undefined;
      this._roleArn = undefined;
      this._stateReason = undefined;
      this._stateValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarmName = value.alarmName;
      this._roleArn = value.roleArn;
      this._stateReason = value.stateReason;
      this._stateValue = value.stateValue;
    }
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_reason - computed: false, optional: false, required: true
  private _stateReason?: string; 
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
  public set stateReason(value: string) {
    this._stateReason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateReasonInput() {
    return this._stateReason;
  }

  // state_value - computed: false, optional: false, required: true
  private _stateValue?: string; 
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
  public set stateValue(value: string) {
    this._stateValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateValueInput() {
    return this._stateValue;
  }
}
export interface ErrorActionCloudwatchLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#batch_mode AwsTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#log_group_name AwsTopicRule#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
}
export class ErrorActionCloudwatchLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionCloudwatchLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionCloudwatchLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMode = undefined;
      this._logGroupName = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMode = value.batchMode;
      this._logGroupName = value.logGroupName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface ErrorActionCloudwatchMetricProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#metric_name AwsTopicRule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#metric_namespace AwsTopicRule#metric_namespace}
  */
  readonly metricNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#metric_timestamp AwsTopicRule#metric_timestamp}
  */
  readonly metricTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#metric_unit AwsTopicRule#metric_unit}
  */
  readonly metricUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#metric_value AwsTopicRule#metric_value}
  */
  readonly metricValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
}
export class ErrorActionCloudwatchMetricPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionCloudwatchMetricProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._metricTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTimestamp = this._metricTimestamp;
    }
    if (this._metricUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricUnit = this._metricUnit;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionCloudwatchMetricProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._metricTimestamp = undefined;
      this._metricUnit = undefined;
      this._metricValue = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._metricTimestamp = value.metricTimestamp;
      this._metricUnit = value.metricUnit;
      this._metricValue = value.metricValue;
      this._roleArn = value.roleArn;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: false, required: true
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // metric_timestamp - computed: false, optional: true, required: false
  private _metricTimestamp?: string; 
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }
  public set metricTimestamp(value: string) {
    this._metricTimestamp = value;
  }
  public resetMetricTimestamp() {
    this._metricTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTimestampInput() {
    return this._metricTimestamp;
  }

  // metric_unit - computed: false, optional: false, required: true
  private _metricUnit?: string; 
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }
  public set metricUnit(value: string) {
    this._metricUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUnitInput() {
    return this._metricUnit;
  }

  // metric_value - computed: false, optional: false, required: true
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface ErrorActionDynamodbProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#hash_key_field AwsTopicRule#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#hash_key_type AwsTopicRule#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#hash_key_value AwsTopicRule#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#operation AwsTopicRule#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#payload_field AwsTopicRule#payload_field}
  */
  readonly payloadField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#range_key_field AwsTopicRule#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#range_key_type AwsTopicRule#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#range_key_value AwsTopicRule#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#table_name AwsTopicRule#table_name}
  */
  readonly tableName: string;
}
export class ErrorActionDynamodbPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionDynamodbProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyField = this._hashKeyField;
    }
    if (this._hashKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyType = this._hashKeyType;
    }
    if (this._hashKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyValue = this._hashKeyValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._payloadField !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadField = this._payloadField;
    }
    if (this._rangeKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyField = this._rangeKeyField;
    }
    if (this._rangeKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyType = this._rangeKeyType;
    }
    if (this._rangeKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyValue = this._rangeKeyValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionDynamodbProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashKeyField = undefined;
      this._hashKeyType = undefined;
      this._hashKeyValue = undefined;
      this._operation = undefined;
      this._payloadField = undefined;
      this._rangeKeyField = undefined;
      this._rangeKeyType = undefined;
      this._rangeKeyValue = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashKeyField = value.hashKeyField;
      this._hashKeyType = value.hashKeyType;
      this._hashKeyValue = value.hashKeyValue;
      this._operation = value.operation;
      this._payloadField = value.payloadField;
      this._rangeKeyField = value.rangeKeyField;
      this._rangeKeyType = value.rangeKeyType;
      this._rangeKeyValue = value.rangeKeyValue;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
    }
  }

  // hash_key_field - computed: false, optional: false, required: true
  private _hashKeyField?: string; 
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }
  public set hashKeyField(value: string) {
    this._hashKeyField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyFieldInput() {
    return this._hashKeyField;
  }

  // hash_key_type - computed: false, optional: true, required: false
  private _hashKeyType?: string; 
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }
  public set hashKeyType(value: string) {
    this._hashKeyType = value;
  }
  public resetHashKeyType() {
    this._hashKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyTypeInput() {
    return this._hashKeyType;
  }

  // hash_key_value - computed: false, optional: false, required: true
  private _hashKeyValue?: string; 
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }
  public set hashKeyValue(value: string) {
    this._hashKeyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyValueInput() {
    return this._hashKeyValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // payload_field - computed: false, optional: true, required: false
  private _payloadField?: string; 
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }
  public set payloadField(value: string) {
    this._payloadField = value;
  }
  public resetPayloadField() {
    this._payloadField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFieldInput() {
    return this._payloadField;
  }

  // range_key_field - computed: false, optional: true, required: false
  private _rangeKeyField?: string; 
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }
  public set rangeKeyField(value: string) {
    this._rangeKeyField = value;
  }
  public resetRangeKeyField() {
    this._rangeKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyFieldInput() {
    return this._rangeKeyField;
  }

  // range_key_type - computed: false, optional: true, required: false
  private _rangeKeyType?: string; 
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }
  public set rangeKeyType(value: string) {
    this._rangeKeyType = value;
  }
  public resetRangeKeyType() {
    this._rangeKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyTypeInput() {
    return this._rangeKeyType;
  }

  // range_key_value - computed: false, optional: true, required: false
  private _rangeKeyValue?: string; 
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }
  public set rangeKeyValue(value: string) {
    this._rangeKeyValue = value;
  }
  public resetRangeKeyValue() {
    this._rangeKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyValueInput() {
    return this._rangeKeyValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface ErrorActionDynamodbv2PutItemProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#table_name AwsTopicRule#table_name}
  */
  readonly tableName: string;
}
export class ErrorActionDynamodbv2PutItemPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionDynamodbv2PutItemProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionDynamodbv2PutItemProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableName = value.tableName;
    }
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface ErrorActionDynamodbv2Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * put_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#put_item AwsTopicRule#put_item}
  */
  readonly putItem?: ErrorActionDynamodbv2PutItemProperty;
}
export class ErrorActionDynamodbv2PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionDynamodbv2Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._putItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.putItem = this._putItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionDynamodbv2Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._putItem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._putItem.internalValue = value.putItem;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // put_item - computed: false, optional: true, required: false
  private _putItem = new ErrorActionDynamodbv2PutItemPropertyOutputReference(this, "put_item");
  public get putItem() {
    return this._putItem;
  }
  public putPutItem(value: ErrorActionDynamodbv2PutItemProperty) {
    this._putItem.internalValue = value;
  }
  public resetPutItem() {
    this._putItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putItemInput() {
    return this._putItem.internalValue;
  }
}
export interface ErrorActionElasticsearchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#endpoint AwsTopicRule#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#id AwsTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#index AwsTopicRule#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#type AwsTopicRule#type}
  */
  readonly type: string;
}
export class ErrorActionElasticsearchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionElasticsearchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionElasticsearchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._id = undefined;
      this._index = undefined;
      this._roleArn = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._index = value.index;
      this._roleArn = value.roleArn;
      this._type = value.type;
    }
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ErrorActionFirehoseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#batch_mode AwsTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#delivery_stream_name AwsTopicRule#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#separator AwsTopicRule#separator}
  */
  readonly separator?: string;
}
export class ErrorActionFirehosePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionFirehoseProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._deliveryStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamName = this._deliveryStreamName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionFirehoseProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMode = undefined;
      this._deliveryStreamName = undefined;
      this._roleArn = undefined;
      this._separator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMode = value.batchMode;
      this._deliveryStreamName = value.deliveryStreamName;
      this._roleArn = value.roleArn;
      this._separator = value.separator;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // delivery_stream_name - computed: false, optional: false, required: true
  private _deliveryStreamName?: string; 
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }
  public set deliveryStreamName(value: string) {
    this._deliveryStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamNameInput() {
    return this._deliveryStreamName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}
export interface ErrorActionHttpHttpHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#key AwsTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#value AwsTopicRule#value}
  */
  readonly value: string;
}
export class ErrorActionHttpHttpHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ErrorActionHttpHttpHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionHttpHttpHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ErrorActionHttpHttpHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : ErrorActionHttpHttpHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): ErrorActionHttpHttpHeaderPropertyOutputReference {
    return new ErrorActionHttpHttpHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ErrorActionHttpProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#confirmation_url AwsTopicRule#confirmation_url}
  */
  readonly confirmationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#url AwsTopicRule#url}
  */
  readonly url: string;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#http_header AwsTopicRule#http_header}
  */
  readonly httpHeader?: ErrorActionHttpHttpHeaderProperty[] | cdktn.IResolvable;
}
export class ErrorActionHttpPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionHttpProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationUrl = this._confirmationUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionHttpProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confirmationUrl = undefined;
      this._url = undefined;
      this._httpHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confirmationUrl = value.confirmationUrl;
      this._url = value.url;
      this._httpHeader.internalValue = value.httpHeader;
    }
  }

  // confirmation_url - computed: false, optional: true, required: false
  private _confirmationUrl?: string; 
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }
  public set confirmationUrl(value: string) {
    this._confirmationUrl = value;
  }
  public resetConfirmationUrl() {
    this._confirmationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationUrlInput() {
    return this._confirmationUrl;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new ErrorActionHttpHttpHeaderPropertyList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: ErrorActionHttpHttpHeaderProperty[] | cdktn.IResolvable) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }
}
export interface ErrorActionIotAnalyticsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#batch_mode AwsTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#channel_name AwsTopicRule#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
}
export class ErrorActionIotAnalyticsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionIotAnalyticsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionIotAnalyticsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMode = undefined;
      this._channelName = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMode = value.batchMode;
      this._channelName = value.channelName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface ErrorActionIotEventsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#batch_mode AwsTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#input_name AwsTopicRule#input_name}
  */
  readonly inputName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#message_id AwsTopicRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
}
export class ErrorActionIotEventsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionIotEventsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionIotEventsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMode = undefined;
      this._inputName = undefined;
      this._messageId = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMode = value.batchMode;
      this._inputName = value.inputName;
      this._messageId = value.messageId;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // input_name - computed: false, optional: false, required: true
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: string; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface ErrorActionKafkaHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#key AwsTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#value AwsTopicRule#value}
  */
  readonly value: string;
}
export class ErrorActionKafkaHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ErrorActionKafkaHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionKafkaHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ErrorActionKafkaHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : ErrorActionKafkaHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): ErrorActionKafkaHeaderPropertyOutputReference {
    return new ErrorActionKafkaHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ErrorActionKafkaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#client_properties AwsTopicRule#client_properties}
  */
  readonly clientProperties: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#destination_arn AwsTopicRule#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#key AwsTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#partition AwsTopicRule#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#topic AwsTopicRule#topic}
  */
  readonly topic: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#header AwsTopicRule#header}
  */
  readonly header?: ErrorActionKafkaHeaderProperty[] | cdktn.IResolvable;
}
export class ErrorActionKafkaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionKafkaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientProperties = this._clientProperties;
    }
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionKafkaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientProperties = undefined;
      this._destinationArn = undefined;
      this._key = undefined;
      this._partition = undefined;
      this._topic = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientProperties = value.clientProperties;
      this._destinationArn = value.destinationArn;
      this._key = value.key;
      this._partition = value.partition;
      this._topic = value.topic;
      this._header.internalValue = value.header;
    }
  }

  // client_properties - computed: false, optional: false, required: true
  private _clientProperties?: { [key: string]: string }; 
  public get clientProperties() {
    return this.getStringMapAttribute('client_properties');
  }
  public set clientProperties(value: { [key: string]: string }) {
    this._clientProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPropertiesInput() {
    return this._clientProperties;
  }

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ErrorActionKafkaHeaderPropertyList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ErrorActionKafkaHeaderProperty[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface ErrorActionKinesisProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#partition_key AwsTopicRule#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#stream_name AwsTopicRule#stream_name}
  */
  readonly streamName: string;
}
export class ErrorActionKinesisPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionKinesisProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionKinesisProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionKey = undefined;
      this._roleArn = undefined;
      this._streamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionKey = value.partitionKey;
      this._roleArn = value.roleArn;
      this._streamName = value.streamName;
    }
  }

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}
export interface ErrorActionLambdaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#function_arn AwsTopicRule#function_arn}
  */
  readonly functionArn: string;
}
export class ErrorActionLambdaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionLambdaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionLambdaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionArn = value.functionArn;
    }
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}
export interface ErrorActionRepublishProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#qos AwsTopicRule#qos}
  */
  readonly qos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#topic AwsTopicRule#topic}
  */
  readonly topic: string;
}
export class ErrorActionRepublishPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionRepublishProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qos !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionRepublishProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._qos = undefined;
      this._roleArn = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._qos = value.qos;
      this._roleArn = value.roleArn;
      this._topic = value.topic;
    }
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: number; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface ErrorActionS3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#bucket_name AwsTopicRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#canned_acl AwsTopicRule#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#key AwsTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
}
export class ErrorActionS3PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionS3Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionS3Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._cannedAcl = undefined;
      this._key = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._cannedAcl = value.cannedAcl;
      this._key = value.key;
      this._roleArn = value.roleArn;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface ErrorActionSnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#message_format AwsTopicRule#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#target_arn AwsTopicRule#target_arn}
  */
  readonly targetArn: string;
}
export class ErrorActionSnsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionSnsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionSnsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageFormat = undefined;
      this._roleArn = undefined;
      this._targetArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageFormat = value.messageFormat;
      this._roleArn = value.roleArn;
      this._targetArn = value.targetArn;
    }
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // target_arn - computed: false, optional: false, required: true
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }
}
export interface ErrorActionSqsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#queue_url AwsTopicRule#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#use_base64 AwsTopicRule#use_base64}
  */
  readonly useBase64: boolean | cdktn.IResolvable;
}
export class ErrorActionSqsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionSqsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._useBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBase64 = this._useBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionSqsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queueUrl = undefined;
      this._roleArn = undefined;
      this._useBase64 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queueUrl = value.queueUrl;
      this._roleArn = value.roleArn;
      this._useBase64 = value.useBase64;
    }
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // use_base64 - computed: false, optional: false, required: true
  private _useBase64?: boolean | cdktn.IResolvable; 
  public get useBase64() {
    return this.getBooleanAttribute('use_base64');
  }
  public set useBase64(value: boolean | cdktn.IResolvable) {
    this._useBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useBase64Input() {
    return this._useBase64;
  }
}
export interface ErrorActionStepFunctionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#execution_name_prefix AwsTopicRule#execution_name_prefix}
  */
  readonly executionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#state_machine_name AwsTopicRule#state_machine_name}
  */
  readonly stateMachineName: string;
}
export class ErrorActionStepFunctionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionStepFunctionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionNamePrefix = this._executionNamePrefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateMachineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMachineName = this._stateMachineName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionStepFunctionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionNamePrefix = undefined;
      this._roleArn = undefined;
      this._stateMachineName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionNamePrefix = value.executionNamePrefix;
      this._roleArn = value.roleArn;
      this._stateMachineName = value.stateMachineName;
    }
  }

  // execution_name_prefix - computed: false, optional: true, required: false
  private _executionNamePrefix?: string; 
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }
  public set executionNamePrefix(value: string) {
    this._executionNamePrefix = value;
  }
  public resetExecutionNamePrefix() {
    this._executionNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionNamePrefixInput() {
    return this._executionNamePrefix;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_machine_name - computed: false, optional: false, required: true
  private _stateMachineName?: string; 
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
  public set stateMachineName(value: string) {
    this._stateMachineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineNameInput() {
    return this._stateMachineName;
  }
}
export interface ErrorActionTimestreamDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#name AwsTopicRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#value AwsTopicRule#value}
  */
  readonly value: string;
}
export class ErrorActionTimestreamDimensionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ErrorActionTimestreamDimensionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionTimestreamDimensionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ErrorActionTimestreamDimensionPropertyList extends cdktn.ComplexList {
  public internalValue? : ErrorActionTimestreamDimensionProperty[] | cdktn.IResolvable

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
  public get(index: number): ErrorActionTimestreamDimensionPropertyOutputReference {
    return new ErrorActionTimestreamDimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ErrorActionTimestreamTimestampProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#unit AwsTopicRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#value AwsTopicRule#value}
  */
  readonly value: string;
}
export class ErrorActionTimestreamTimestampPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionTimestreamTimestampProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionTimestreamTimestampProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ErrorActionTimestreamProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#database_name AwsTopicRule#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#table_name AwsTopicRule#table_name}
  */
  readonly tableName: string;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#dimension AwsTopicRule#dimension}
  */
  readonly dimension: ErrorActionTimestreamDimensionProperty[] | cdktn.IResolvable;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#timestamp AwsTopicRule#timestamp}
  */
  readonly timestamp?: ErrorActionTimestreamTimestampProperty;
}
export class ErrorActionTimestreamPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionTimestreamProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionTimestreamProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
      this._dimension.internalValue = undefined;
      this._timestamp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
      this._dimension.internalValue = value.dimension;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new ErrorActionTimestreamDimensionPropertyList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: ErrorActionTimestreamDimensionProperty[] | cdktn.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp = new ErrorActionTimestreamTimestampPropertyOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: ErrorActionTimestreamTimestampProperty) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}
export interface ErrorActionProperty {
  /**
  * cloudwatch_alarm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#cloudwatch_alarm AwsTopicRule#cloudwatch_alarm}
  */
  readonly cloudwatchAlarm?: ErrorActionCloudwatchAlarmProperty;
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#cloudwatch_logs AwsTopicRule#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: ErrorActionCloudwatchLogsProperty;
  /**
  * cloudwatch_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#cloudwatch_metric AwsTopicRule#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: ErrorActionCloudwatchMetricProperty;
  /**
  * dynamodb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#dynamodb AwsTopicRule#dynamodb}
  */
  readonly dynamodb?: ErrorActionDynamodbProperty;
  /**
  * dynamodbv2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#dynamodbv2 AwsTopicRule#dynamodbv2}
  */
  readonly dynamodbv2?: ErrorActionDynamodbv2Property;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#elasticsearch AwsTopicRule#elasticsearch}
  */
  readonly elasticsearch?: ErrorActionElasticsearchProperty;
  /**
  * firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#firehose AwsTopicRule#firehose}
  */
  readonly firehose?: ErrorActionFirehoseProperty;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#http AwsTopicRule#http}
  */
  readonly http?: ErrorActionHttpProperty;
  /**
  * iot_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#iot_analytics AwsTopicRule#iot_analytics}
  */
  readonly iotAnalytics?: ErrorActionIotAnalyticsProperty;
  /**
  * iot_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#iot_events AwsTopicRule#iot_events}
  */
  readonly iotEvents?: ErrorActionIotEventsProperty;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#kafka AwsTopicRule#kafka}
  */
  readonly kafka?: ErrorActionKafkaProperty;
  /**
  * kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#kinesis AwsTopicRule#kinesis}
  */
  readonly kinesis?: ErrorActionKinesisProperty;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#lambda AwsTopicRule#lambda}
  */
  readonly lambda?: ErrorActionLambdaProperty;
  /**
  * republish block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#republish AwsTopicRule#republish}
  */
  readonly republish?: ErrorActionRepublishProperty;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#s3 AwsTopicRule#s3}
  */
  readonly s3?: ErrorActionS3Property;
  /**
  * sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#sns AwsTopicRule#sns}
  */
  readonly sns?: ErrorActionSnsProperty;
  /**
  * sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#sqs AwsTopicRule#sqs}
  */
  readonly sqs?: ErrorActionSqsProperty;
  /**
  * step_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#step_functions AwsTopicRule#step_functions}
  */
  readonly stepFunctions?: ErrorActionStepFunctionsProperty;
  /**
  * timestream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#timestream AwsTopicRule#timestream}
  */
  readonly timestream?: ErrorActionTimestreamProperty;
}
export class ErrorActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ErrorActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchAlarm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchAlarm = this._cloudwatchAlarm?.internalValue;
    }
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._cloudwatchMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetric = this._cloudwatchMetric?.internalValue;
    }
    if (this._dynamodb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamodb = this._dynamodb?.internalValue;
    }
    if (this._dynamodbv2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamodbv2 = this._dynamodbv2?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._iotAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotAnalytics = this._iotAnalytics?.internalValue;
    }
    if (this._iotEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotEvents = this._iotEvents?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._kinesis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesis = this._kinesis?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._republish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.republish = this._republish?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._sns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sns = this._sns?.internalValue;
    }
    if (this._sqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqs = this._sqs?.internalValue;
    }
    if (this._stepFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepFunctions = this._stepFunctions?.internalValue;
    }
    if (this._timestream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestream = this._timestream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchAlarm.internalValue = undefined;
      this._cloudwatchLogs.internalValue = undefined;
      this._cloudwatchMetric.internalValue = undefined;
      this._dynamodb.internalValue = undefined;
      this._dynamodbv2.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._http.internalValue = undefined;
      this._iotAnalytics.internalValue = undefined;
      this._iotEvents.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._kinesis.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._republish.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._sns.internalValue = undefined;
      this._sqs.internalValue = undefined;
      this._stepFunctions.internalValue = undefined;
      this._timestream.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchAlarm.internalValue = value.cloudwatchAlarm;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._cloudwatchMetric.internalValue = value.cloudwatchMetric;
      this._dynamodb.internalValue = value.dynamodb;
      this._dynamodbv2.internalValue = value.dynamodbv2;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._firehose.internalValue = value.firehose;
      this._http.internalValue = value.http;
      this._iotAnalytics.internalValue = value.iotAnalytics;
      this._iotEvents.internalValue = value.iotEvents;
      this._kafka.internalValue = value.kafka;
      this._kinesis.internalValue = value.kinesis;
      this._lambda.internalValue = value.lambda;
      this._republish.internalValue = value.republish;
      this._s3.internalValue = value.s3;
      this._sns.internalValue = value.sns;
      this._sqs.internalValue = value.sqs;
      this._stepFunctions.internalValue = value.stepFunctions;
      this._timestream.internalValue = value.timestream;
    }
  }

  // cloudwatch_alarm - computed: false, optional: true, required: false
  private _cloudwatchAlarm = new ErrorActionCloudwatchAlarmPropertyOutputReference(this, "cloudwatch_alarm");
  public get cloudwatchAlarm() {
    return this._cloudwatchAlarm;
  }
  public putCloudwatchAlarm(value: ErrorActionCloudwatchAlarmProperty) {
    this._cloudwatchAlarm.internalValue = value;
  }
  public resetCloudwatchAlarm() {
    this._cloudwatchAlarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmInput() {
    return this._cloudwatchAlarm.internalValue;
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new ErrorActionCloudwatchLogsPropertyOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: ErrorActionCloudwatchLogsProperty) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // cloudwatch_metric - computed: false, optional: true, required: false
  private _cloudwatchMetric = new ErrorActionCloudwatchMetricPropertyOutputReference(this, "cloudwatch_metric");
  public get cloudwatchMetric() {
    return this._cloudwatchMetric;
  }
  public putCloudwatchMetric(value: ErrorActionCloudwatchMetricProperty) {
    this._cloudwatchMetric.internalValue = value;
  }
  public resetCloudwatchMetric() {
    this._cloudwatchMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricInput() {
    return this._cloudwatchMetric.internalValue;
  }

  // dynamodb - computed: false, optional: true, required: false
  private _dynamodb = new ErrorActionDynamodbPropertyOutputReference(this, "dynamodb");
  public get dynamodb() {
    return this._dynamodb;
  }
  public putDynamodb(value: ErrorActionDynamodbProperty) {
    this._dynamodb.internalValue = value;
  }
  public resetDynamodb() {
    this._dynamodb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbInput() {
    return this._dynamodb.internalValue;
  }

  // dynamodbv2 - computed: false, optional: true, required: false
  private _dynamodbv2 = new ErrorActionDynamodbv2PropertyOutputReference(this, "dynamodbv2");
  public get dynamodbv2() {
    return this._dynamodbv2;
  }
  public putDynamodbv2(value: ErrorActionDynamodbv2Property) {
    this._dynamodbv2.internalValue = value;
  }
  public resetDynamodbv2() {
    this._dynamodbv2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbv2Input() {
    return this._dynamodbv2.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new ErrorActionElasticsearchPropertyOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: ErrorActionElasticsearchProperty) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new ErrorActionFirehosePropertyOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: ErrorActionFirehoseProperty) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ErrorActionHttpPropertyOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ErrorActionHttpProperty) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // iot_analytics - computed: false, optional: true, required: false
  private _iotAnalytics = new ErrorActionIotAnalyticsPropertyOutputReference(this, "iot_analytics");
  public get iotAnalytics() {
    return this._iotAnalytics;
  }
  public putIotAnalytics(value: ErrorActionIotAnalyticsProperty) {
    this._iotAnalytics.internalValue = value;
  }
  public resetIotAnalytics() {
    this._iotAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotAnalyticsInput() {
    return this._iotAnalytics.internalValue;
  }

  // iot_events - computed: false, optional: true, required: false
  private _iotEvents = new ErrorActionIotEventsPropertyOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }
  public putIotEvents(value: ErrorActionIotEventsProperty) {
    this._iotEvents.internalValue = value;
  }
  public resetIotEvents() {
    this._iotEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEventsInput() {
    return this._iotEvents.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new ErrorActionKafkaPropertyOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: ErrorActionKafkaProperty) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis = new ErrorActionKinesisPropertyOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: ErrorActionKinesisProperty) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new ErrorActionLambdaPropertyOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: ErrorActionLambdaProperty) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // republish - computed: false, optional: true, required: false
  private _republish = new ErrorActionRepublishPropertyOutputReference(this, "republish");
  public get republish() {
    return this._republish;
  }
  public putRepublish(value: ErrorActionRepublishProperty) {
    this._republish.internalValue = value;
  }
  public resetRepublish() {
    this._republish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishInput() {
    return this._republish.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new ErrorActionS3PropertyOutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: ErrorActionS3Property) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // sns - computed: false, optional: true, required: false
  private _sns = new ErrorActionSnsPropertyOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: ErrorActionSnsProperty) {
    this._sns.internalValue = value;
  }
  public resetSns() {
    this._sns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns.internalValue;
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs = new ErrorActionSqsPropertyOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: ErrorActionSqsProperty) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }

  // step_functions - computed: false, optional: true, required: false
  private _stepFunctions = new ErrorActionStepFunctionsPropertyOutputReference(this, "step_functions");
  public get stepFunctions() {
    return this._stepFunctions;
  }
  public putStepFunctions(value: ErrorActionStepFunctionsProperty) {
    this._stepFunctions.internalValue = value;
  }
  public resetStepFunctions() {
    this._stepFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsInput() {
    return this._stepFunctions.internalValue;
  }

  // timestream - computed: false, optional: true, required: false
  private _timestream = new ErrorActionTimestreamPropertyOutputReference(this, "timestream");
  public get timestream() {
    return this._timestream;
  }
  public putTimestream(value: ErrorActionTimestreamProperty) {
    this._timestream.internalValue = value;
  }
  public resetTimestream() {
    this._timestream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamInput() {
    return this._timestream.internalValue;
  }
}
export interface FirehoseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#batch_mode AwsTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#delivery_stream_name AwsTopicRule#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#separator AwsTopicRule#separator}
  */
  readonly separator?: string;
}
export class FirehosePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirehoseProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._deliveryStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamName = this._deliveryStreamName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirehoseProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._deliveryStreamName = undefined;
      this._roleArn = undefined;
      this._separator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._deliveryStreamName = value.deliveryStreamName;
      this._roleArn = value.roleArn;
      this._separator = value.separator;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // delivery_stream_name - computed: false, optional: false, required: true
  private _deliveryStreamName?: string; 
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }
  public set deliveryStreamName(value: string) {
    this._deliveryStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamNameInput() {
    return this._deliveryStreamName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}

export class FirehosePropertyList extends cdktn.ComplexList {
  public internalValue? : FirehoseProperty[] | cdktn.IResolvable

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
  public get(index: number): FirehosePropertyOutputReference {
    return new FirehosePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpHttpHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#key AwsTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#value AwsTopicRule#value}
  */
  readonly value: string;
}
export class HttpHttpHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HttpHttpHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpHttpHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HttpHttpHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : HttpHttpHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): HttpHttpHeaderPropertyOutputReference {
    return new HttpHttpHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#confirmation_url AwsTopicRule#confirmation_url}
  */
  readonly confirmationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#url AwsTopicRule#url}
  */
  readonly url: string;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#http_header AwsTopicRule#http_header}
  */
  readonly httpHeader?: HttpHttpHeaderProperty[] | cdktn.IResolvable;
}
export class HttpPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HttpProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationUrl = this._confirmationUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confirmationUrl = undefined;
      this._url = undefined;
      this._httpHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confirmationUrl = value.confirmationUrl;
      this._url = value.url;
      this._httpHeader.internalValue = value.httpHeader;
    }
  }

  // confirmation_url - computed: false, optional: true, required: false
  private _confirmationUrl?: string; 
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }
  public set confirmationUrl(value: string) {
    this._confirmationUrl = value;
  }
  public resetConfirmationUrl() {
    this._confirmationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationUrlInput() {
    return this._confirmationUrl;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new HttpHttpHeaderPropertyList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: HttpHttpHeaderProperty[] | cdktn.IResolvable) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }
}

export class HttpPropertyList extends cdktn.ComplexList {
  public internalValue? : HttpProperty[] | cdktn.IResolvable

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
  public get(index: number): HttpPropertyOutputReference {
    return new HttpPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotAnalyticsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#batch_mode AwsTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#channel_name AwsTopicRule#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
}
export class IotAnalyticsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotAnalyticsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAnalyticsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._channelName = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._channelName = value.channelName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class IotAnalyticsPropertyList extends cdktn.ComplexList {
  public internalValue? : IotAnalyticsProperty[] | cdktn.IResolvable

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
  public get(index: number): IotAnalyticsPropertyOutputReference {
    return new IotAnalyticsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotEventsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#batch_mode AwsTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#input_name AwsTopicRule#input_name}
  */
  readonly inputName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#message_id AwsTopicRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
}
export class IotEventsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotEventsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotEventsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._inputName = undefined;
      this._messageId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._inputName = value.inputName;
      this._messageId = value.messageId;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // input_name - computed: false, optional: false, required: true
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: string; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class IotEventsPropertyList extends cdktn.ComplexList {
  public internalValue? : IotEventsProperty[] | cdktn.IResolvable

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
  public get(index: number): IotEventsPropertyOutputReference {
    return new IotEventsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#key AwsTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#value AwsTopicRule#value}
  */
  readonly value: string;
}
export class KafkaHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KafkaHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KafkaHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : KafkaHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): KafkaHeaderPropertyOutputReference {
    return new KafkaHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#client_properties AwsTopicRule#client_properties}
  */
  readonly clientProperties: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#destination_arn AwsTopicRule#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#key AwsTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#partition AwsTopicRule#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#topic AwsTopicRule#topic}
  */
  readonly topic: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#header AwsTopicRule#header}
  */
  readonly header?: KafkaHeaderProperty[] | cdktn.IResolvable;
}
export class KafkaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KafkaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientProperties = this._clientProperties;
    }
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientProperties = undefined;
      this._destinationArn = undefined;
      this._key = undefined;
      this._partition = undefined;
      this._topic = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientProperties = value.clientProperties;
      this._destinationArn = value.destinationArn;
      this._key = value.key;
      this._partition = value.partition;
      this._topic = value.topic;
      this._header.internalValue = value.header;
    }
  }

  // client_properties - computed: false, optional: false, required: true
  private _clientProperties?: { [key: string]: string }; 
  public get clientProperties() {
    return this.getStringMapAttribute('client_properties');
  }
  public set clientProperties(value: { [key: string]: string }) {
    this._clientProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPropertiesInput() {
    return this._clientProperties;
  }

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // header - computed: false, optional: true, required: false
  private _header = new KafkaHeaderPropertyList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: KafkaHeaderProperty[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class KafkaPropertyList extends cdktn.ComplexList {
  public internalValue? : KafkaProperty[] | cdktn.IResolvable

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
  public get(index: number): KafkaPropertyOutputReference {
    return new KafkaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#partition_key AwsTopicRule#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#stream_name AwsTopicRule#stream_name}
  */
  readonly streamName: string;
}
export class KinesisPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KinesisProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionKey = undefined;
      this._roleArn = undefined;
      this._streamName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionKey = value.partitionKey;
      this._roleArn = value.roleArn;
      this._streamName = value.streamName;
    }
  }

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class KinesisPropertyList extends cdktn.ComplexList {
  public internalValue? : KinesisProperty[] | cdktn.IResolvable

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
  public get(index: number): KinesisPropertyOutputReference {
    return new KinesisPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#function_arn AwsTopicRule#function_arn}
  */
  readonly functionArn: string;
}
export class LambdaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionArn = value.functionArn;
    }
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}

export class LambdaPropertyList extends cdktn.ComplexList {
  public internalValue? : LambdaProperty[] | cdktn.IResolvable

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
  public get(index: number): LambdaPropertyOutputReference {
    return new LambdaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepublishProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#qos AwsTopicRule#qos}
  */
  readonly qos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#topic AwsTopicRule#topic}
  */
  readonly topic: string;
}
export class RepublishPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RepublishProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qos !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepublishProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._qos = undefined;
      this._roleArn = undefined;
      this._topic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._qos = value.qos;
      this._roleArn = value.roleArn;
      this._topic = value.topic;
    }
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: number; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

export class RepublishPropertyList extends cdktn.ComplexList {
  public internalValue? : RepublishProperty[] | cdktn.IResolvable

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
  public get(index: number): RepublishPropertyOutputReference {
    return new RepublishPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#bucket_name AwsTopicRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#canned_acl AwsTopicRule#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#key AwsTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._cannedAcl = undefined;
      this._key = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._cannedAcl = value.cannedAcl;
      this._key = value.key;
      this._roleArn = value.roleArn;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class S3PropertyList extends cdktn.ComplexList {
  public internalValue? : S3Property[] | cdktn.IResolvable

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
  public get(index: number): S3PropertyOutputReference {
    return new S3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#message_format AwsTopicRule#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#target_arn AwsTopicRule#target_arn}
  */
  readonly targetArn: string;
}
export class SnsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SnsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageFormat = undefined;
      this._roleArn = undefined;
      this._targetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageFormat = value.messageFormat;
      this._roleArn = value.roleArn;
      this._targetArn = value.targetArn;
    }
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // target_arn - computed: false, optional: false, required: true
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }
}

export class SnsPropertyList extends cdktn.ComplexList {
  public internalValue? : SnsProperty[] | cdktn.IResolvable

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
  public get(index: number): SnsPropertyOutputReference {
    return new SnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#queue_url AwsTopicRule#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#use_base64 AwsTopicRule#use_base64}
  */
  readonly useBase64: boolean | cdktn.IResolvable;
}
export class SqsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SqsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._useBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBase64 = this._useBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queueUrl = undefined;
      this._roleArn = undefined;
      this._useBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queueUrl = value.queueUrl;
      this._roleArn = value.roleArn;
      this._useBase64 = value.useBase64;
    }
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // use_base64 - computed: false, optional: false, required: true
  private _useBase64?: boolean | cdktn.IResolvable; 
  public get useBase64() {
    return this.getBooleanAttribute('use_base64');
  }
  public set useBase64(value: boolean | cdktn.IResolvable) {
    this._useBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useBase64Input() {
    return this._useBase64;
  }
}

export class SqsPropertyList extends cdktn.ComplexList {
  public internalValue? : SqsProperty[] | cdktn.IResolvable

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
  public get(index: number): SqsPropertyOutputReference {
    return new SqsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StepFunctionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#execution_name_prefix AwsTopicRule#execution_name_prefix}
  */
  readonly executionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#state_machine_name AwsTopicRule#state_machine_name}
  */
  readonly stateMachineName: string;
}
export class StepFunctionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StepFunctionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionNamePrefix = this._executionNamePrefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateMachineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMachineName = this._stateMachineName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepFunctionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionNamePrefix = undefined;
      this._roleArn = undefined;
      this._stateMachineName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionNamePrefix = value.executionNamePrefix;
      this._roleArn = value.roleArn;
      this._stateMachineName = value.stateMachineName;
    }
  }

  // execution_name_prefix - computed: false, optional: true, required: false
  private _executionNamePrefix?: string; 
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }
  public set executionNamePrefix(value: string) {
    this._executionNamePrefix = value;
  }
  public resetExecutionNamePrefix() {
    this._executionNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionNamePrefixInput() {
    return this._executionNamePrefix;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_machine_name - computed: false, optional: false, required: true
  private _stateMachineName?: string; 
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
  public set stateMachineName(value: string) {
    this._stateMachineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineNameInput() {
    return this._stateMachineName;
  }
}

export class StepFunctionsPropertyList extends cdktn.ComplexList {
  public internalValue? : StepFunctionsProperty[] | cdktn.IResolvable

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
  public get(index: number): StepFunctionsPropertyOutputReference {
    return new StepFunctionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#name AwsTopicRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#value AwsTopicRule#value}
  */
  readonly value: string;
}
export class TimestreamDimensionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamDimensionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamDimensionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TimestreamDimensionPropertyList extends cdktn.ComplexList {
  public internalValue? : TimestreamDimensionProperty[] | cdktn.IResolvable

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
  public get(index: number): TimestreamDimensionPropertyOutputReference {
    return new TimestreamDimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamTimestampProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#unit AwsTopicRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#value AwsTopicRule#value}
  */
  readonly value: string;
}
export class TimestreamTimestampPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimestreamTimestampProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamTimestampProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TimestreamProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#database_name AwsTopicRule#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#role_arn AwsTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#table_name AwsTopicRule#table_name}
  */
  readonly tableName: string;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#dimension AwsTopicRule#dimension}
  */
  readonly dimension: TimestreamDimensionProperty[] | cdktn.IResolvable;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/iot_topic_rule#timestamp AwsTopicRule#timestamp}
  */
  readonly timestamp?: TimestreamTimestampProperty;
}
export class TimestreamPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
      this._dimension.internalValue = undefined;
      this._timestamp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
      this._dimension.internalValue = value.dimension;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new TimestreamDimensionPropertyList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: TimestreamDimensionProperty[] | cdktn.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp = new TimestreamTimestampPropertyOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: TimestreamTimestampProperty) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}

export class TimestreamPropertyList extends cdktn.ComplexList {
  public internalValue? : TimestreamProperty[] | cdktn.IResolvable

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
  public get(index: number): TimestreamPropertyOutputReference {
    return new TimestreamPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
