// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsScheduledQueryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#execution_role_arn AwsScheduledQuery#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#kms_key_id AwsScheduledQuery#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#name AwsScheduledQuery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#query_string AwsScheduledQuery#query_string}
  */
  readonly queryString: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#region AwsScheduledQuery#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#tags AwsScheduledQuery#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * error_report_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#error_report_configuration AwsScheduledQuery#error_report_configuration}
  */
  readonly errorReportConfiguration?: AwsScheduledQuery.ErrorReportConfigurationProperty[] | cdktn.IResolvable;
  /**
  * last_run_summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#last_run_summary AwsScheduledQuery#last_run_summary}
  */
  readonly lastRunSummary?: AwsScheduledQuery.LastRunSummaryProperty[] | cdktn.IResolvable;
  /**
  * notification_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#notification_configuration AwsScheduledQuery#notification_configuration}
  */
  readonly notificationConfiguration?: AwsScheduledQuery.NotificationConfigurationProperty[] | cdktn.IResolvable;
  /**
  * recently_failed_runs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#recently_failed_runs AwsScheduledQuery#recently_failed_runs}
  */
  readonly recentlyFailedRuns?: AwsScheduledQuery.RecentlyFailedRunsProperty[] | cdktn.IResolvable;
  /**
  * schedule_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#schedule_configuration AwsScheduledQuery#schedule_configuration}
  */
  readonly scheduleConfiguration?: AwsScheduledQuery.ScheduleConfigurationProperty[] | cdktn.IResolvable;
  /**
  * target_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#target_configuration AwsScheduledQuery#target_configuration}
  */
  readonly targetConfiguration?: AwsScheduledQuery.TargetConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#timeouts AwsScheduledQuery#timeouts}
  */
  readonly timeouts?: AwsScheduledQuery.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query aws_timestreamquery_scheduled_query}
*/
export class AwsScheduledQuery extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_timestreamquery_scheduled_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsScheduledQuery resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsScheduledQuery to import
  * @param importFromId The id of the existing AwsScheduledQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsScheduledQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_timestreamquery_scheduled_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query aws_timestreamquery_scheduled_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsScheduledQueryConfig
  */
  public constructor(scope: Construct, id: string, config: AwsScheduledQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_timestreamquery_scheduled_query',
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
    this._executionRoleArn = config.executionRoleArn;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._queryString = config.queryString;
    this._region = config.region;
    this._tags = config.tags;
    this._errorReportConfiguration.internalValue = config.errorReportConfiguration;
    this._lastRunSummary.internalValue = config.lastRunSummary;
    this._notificationConfiguration.internalValue = config.notificationConfiguration;
    this._recentlyFailedRuns.internalValue = config.recentlyFailedRuns;
    this._scheduleConfiguration.internalValue = config.scheduleConfiguration;
    this._targetConfiguration.internalValue = config.targetConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // next_invocation_time - computed: true, optional: false, required: false
  public get nextInvocationTime() {
    return this.getStringAttribute('next_invocation_time');
  }

  // previous_invocation_time - computed: true, optional: false, required: false
  public get previousInvocationTime() {
    return this.getStringAttribute('previous_invocation_time');
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // error_report_configuration - computed: false, optional: true, required: false
  private _errorReportConfiguration = new AwsScheduledQuery.ErrorReportConfigurationPropertyList(this, "error_report_configuration", false);
  public get errorReportConfiguration() {
    return this._errorReportConfiguration;
  }
  public putErrorReportConfiguration(value: AwsScheduledQuery.ErrorReportConfigurationProperty[] | cdktn.IResolvable) {
    this._errorReportConfiguration.internalValue = value;
  }
  public resetErrorReportConfiguration() {
    this._errorReportConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorReportConfigurationInput() {
    return this._errorReportConfiguration.internalValue;
  }

  // last_run_summary - computed: false, optional: true, required: false
  private _lastRunSummary = new AwsScheduledQuery.LastRunSummaryPropertyList(this, "last_run_summary", false);
  public get lastRunSummary() {
    return this._lastRunSummary;
  }
  public putLastRunSummary(value: AwsScheduledQuery.LastRunSummaryProperty[] | cdktn.IResolvable) {
    this._lastRunSummary.internalValue = value;
  }
  public resetLastRunSummary() {
    this._lastRunSummary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRunSummaryInput() {
    return this._lastRunSummary.internalValue;
  }

  // notification_configuration - computed: false, optional: true, required: false
  private _notificationConfiguration = new AwsScheduledQuery.NotificationConfigurationPropertyList(this, "notification_configuration", false);
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }
  public putNotificationConfiguration(value: AwsScheduledQuery.NotificationConfigurationProperty[] | cdktn.IResolvable) {
    this._notificationConfiguration.internalValue = value;
  }
  public resetNotificationConfiguration() {
    this._notificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigurationInput() {
    return this._notificationConfiguration.internalValue;
  }

  // recently_failed_runs - computed: false, optional: true, required: false
  private _recentlyFailedRuns = new AwsScheduledQuery.RecentlyFailedRunsPropertyList(this, "recently_failed_runs", false);
  public get recentlyFailedRuns() {
    return this._recentlyFailedRuns;
  }
  public putRecentlyFailedRuns(value: AwsScheduledQuery.RecentlyFailedRunsProperty[] | cdktn.IResolvable) {
    this._recentlyFailedRuns.internalValue = value;
  }
  public resetRecentlyFailedRuns() {
    this._recentlyFailedRuns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentlyFailedRunsInput() {
    return this._recentlyFailedRuns.internalValue;
  }

  // schedule_configuration - computed: false, optional: true, required: false
  private _scheduleConfiguration = new AwsScheduledQuery.ScheduleConfigurationPropertyList(this, "schedule_configuration", false);
  public get scheduleConfiguration() {
    return this._scheduleConfiguration;
  }
  public putScheduleConfiguration(value: AwsScheduledQuery.ScheduleConfigurationProperty[] | cdktn.IResolvable) {
    this._scheduleConfiguration.internalValue = value;
  }
  public resetScheduleConfiguration() {
    this._scheduleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleConfigurationInput() {
    return this._scheduleConfiguration.internalValue;
  }

  // target_configuration - computed: false, optional: true, required: false
  private _targetConfiguration = new AwsScheduledQuery.TargetConfigurationPropertyList(this, "target_configuration", false);
  public get targetConfiguration() {
    return this._targetConfiguration;
  }
  public putTargetConfiguration(value: AwsScheduledQuery.TargetConfigurationProperty[] | cdktn.IResolvable) {
    this._targetConfiguration.internalValue = value;
  }
  public resetTargetConfiguration() {
    this._targetConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConfigurationInput() {
    return this._targetConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsScheduledQuery.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsScheduledQuery.TimeoutsProperty) {
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
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      name: cdktn.stringToTerraform(this._name),
      query_string: cdktn.stringToTerraform(this._queryString),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      error_report_configuration: cdktn.listMapper(awsScheduledQueryErrorReportConfigurationPropertyToTerraform, true)(this._errorReportConfiguration.internalValue),
      last_run_summary: cdktn.listMapper(awsScheduledQueryLastRunSummaryPropertyToTerraform, true)(this._lastRunSummary.internalValue),
      notification_configuration: cdktn.listMapper(awsScheduledQueryNotificationConfigurationPropertyToTerraform, true)(this._notificationConfiguration.internalValue),
      recently_failed_runs: cdktn.listMapper(awsScheduledQueryRecentlyFailedRunsPropertyToTerraform, true)(this._recentlyFailedRuns.internalValue),
      schedule_configuration: cdktn.listMapper(awsScheduledQueryScheduleConfigurationPropertyToTerraform, true)(this._scheduleConfiguration.internalValue),
      target_configuration: cdktn.listMapper(awsScheduledQueryTargetConfigurationPropertyToTerraform, true)(this._targetConfiguration.internalValue),
      timeouts: awsScheduledQueryTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
      query_string: {
        value: cdktn.stringToHclTerraform(this._queryString),
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
      error_report_configuration: {
        value: cdktn.listMapperHcl(awsScheduledQueryErrorReportConfigurationPropertyToHclTerraform, true)(this._errorReportConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsScheduledQuery.ErrorReportConfigurationPropertyList",
      },
      last_run_summary: {
        value: cdktn.listMapperHcl(awsScheduledQueryLastRunSummaryPropertyToHclTerraform, true)(this._lastRunSummary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsScheduledQuery.LastRunSummaryPropertyList",
      },
      notification_configuration: {
        value: cdktn.listMapperHcl(awsScheduledQueryNotificationConfigurationPropertyToHclTerraform, true)(this._notificationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsScheduledQuery.NotificationConfigurationPropertyList",
      },
      recently_failed_runs: {
        value: cdktn.listMapperHcl(awsScheduledQueryRecentlyFailedRunsPropertyToHclTerraform, true)(this._recentlyFailedRuns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsScheduledQuery.RecentlyFailedRunsPropertyList",
      },
      schedule_configuration: {
        value: cdktn.listMapperHcl(awsScheduledQueryScheduleConfigurationPropertyToHclTerraform, true)(this._scheduleConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsScheduledQuery.ScheduleConfigurationPropertyList",
      },
      target_configuration: {
        value: cdktn.listMapperHcl(awsScheduledQueryTargetConfigurationPropertyToHclTerraform, true)(this._targetConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsScheduledQuery.TargetConfigurationPropertyList",
      },
      timeouts: {
        value: awsScheduledQueryTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsScheduledQuery.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsScheduledQueryS3ConfigurationPropertyToTerraform(struct?: AwsScheduledQuery.S3ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    encryption_option: cdktn.stringToTerraform(struct!.encryptionOption),
    object_key_prefix: cdktn.stringToTerraform(struct!.objectKeyPrefix),
  }
}


export function awsScheduledQueryS3ConfigurationPropertyToHclTerraform(struct?: AwsScheduledQuery.S3ConfigurationProperty | cdktn.IResolvable): any {
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
    encryption_option: {
      value: cdktn.stringToHclTerraform(struct!.encryptionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.objectKeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryErrorReportConfigurationPropertyToTerraform(struct?: AwsScheduledQuery.ErrorReportConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_configuration: cdktn.listMapper(awsScheduledQueryS3ConfigurationPropertyToTerraform, true)(struct!.s3Configuration),
  }
}


export function awsScheduledQueryErrorReportConfigurationPropertyToHclTerraform(struct?: AwsScheduledQuery.ErrorReportConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_configuration: {
      value: cdktn.listMapperHcl(awsScheduledQueryS3ConfigurationPropertyToHclTerraform, true)(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "S3ConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationPropertyToTerraform(struct?: AwsScheduledQuery.LastRunSummaryErrorReportLocationS3ReportLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationPropertyToHclTerraform(struct?: AwsScheduledQuery.LastRunSummaryErrorReportLocationS3ReportLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsScheduledQueryLastRunSummaryErrorReportLocationPropertyToTerraform(struct?: AwsScheduledQuery.LastRunSummaryErrorReportLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_report_location: cdktn.listMapper(awsScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationPropertyToTerraform, true)(struct!.s3ReportLocation),
  }
}


export function awsScheduledQueryLastRunSummaryErrorReportLocationPropertyToHclTerraform(struct?: AwsScheduledQuery.LastRunSummaryErrorReportLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_report_location: {
      value: cdktn.listMapperHcl(awsScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationPropertyToHclTerraform, true)(struct!.s3ReportLocation),
      isBlock: true,
      type: "list",
      storageClassType: "LastRunSummaryErrorReportLocationS3ReportLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryLastRunSummaryExecutionStatsPropertyToTerraform(struct?: AwsScheduledQuery.LastRunSummaryExecutionStatsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsScheduledQueryLastRunSummaryExecutionStatsPropertyToHclTerraform(struct?: AwsScheduledQuery.LastRunSummaryExecutionStatsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxPropertyToTerraform(struct?: AwsScheduledQuery.LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxPropertyToHclTerraform(struct?: AwsScheduledQuery.LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoveragePropertyToTerraform(struct?: AwsScheduledQuery.LastRunSummaryQueryInsightsResponseQuerySpatialCoverageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.listMapper(awsScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxPropertyToTerraform, true)(struct!.max),
  }
}


export function awsScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoveragePropertyToHclTerraform(struct?: AwsScheduledQuery.LastRunSummaryQueryInsightsResponseQuerySpatialCoverageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.listMapperHcl(awsScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxPropertyToHclTerraform, true)(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxPropertyToTerraform(struct?: AwsScheduledQuery.LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxPropertyToHclTerraform(struct?: AwsScheduledQuery.LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangePropertyToTerraform(struct?: AwsScheduledQuery.LastRunSummaryQueryInsightsResponseQueryTemporalRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.listMapper(awsScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxPropertyToTerraform, true)(struct!.max),
  }
}


export function awsScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangePropertyToHclTerraform(struct?: AwsScheduledQuery.LastRunSummaryQueryInsightsResponseQueryTemporalRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.listMapperHcl(awsScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxPropertyToHclTerraform, true)(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryLastRunSummaryQueryInsightsResponsePropertyToTerraform(struct?: AwsScheduledQuery.LastRunSummaryQueryInsightsResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_spatial_coverage: cdktn.listMapper(awsScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoveragePropertyToTerraform, true)(struct!.querySpatialCoverage),
    query_temporal_range: cdktn.listMapper(awsScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangePropertyToTerraform, true)(struct!.queryTemporalRange),
  }
}


export function awsScheduledQueryLastRunSummaryQueryInsightsResponsePropertyToHclTerraform(struct?: AwsScheduledQuery.LastRunSummaryQueryInsightsResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_spatial_coverage: {
      value: cdktn.listMapperHcl(awsScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoveragePropertyToHclTerraform, true)(struct!.querySpatialCoverage),
      isBlock: true,
      type: "list",
      storageClassType: "LastRunSummaryQueryInsightsResponseQuerySpatialCoveragePropertyList",
    },
    query_temporal_range: {
      value: cdktn.listMapperHcl(awsScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangePropertyToHclTerraform, true)(struct!.queryTemporalRange),
      isBlock: true,
      type: "list",
      storageClassType: "LastRunSummaryQueryInsightsResponseQueryTemporalRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryLastRunSummaryPropertyToTerraform(struct?: AwsScheduledQuery.LastRunSummaryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_report_location: cdktn.listMapper(awsScheduledQueryLastRunSummaryErrorReportLocationPropertyToTerraform, true)(struct!.errorReportLocation),
    execution_stats: cdktn.listMapper(awsScheduledQueryLastRunSummaryExecutionStatsPropertyToTerraform, true)(struct!.executionStats),
    query_insights_response: cdktn.listMapper(awsScheduledQueryLastRunSummaryQueryInsightsResponsePropertyToTerraform, true)(struct!.queryInsightsResponse),
  }
}


export function awsScheduledQueryLastRunSummaryPropertyToHclTerraform(struct?: AwsScheduledQuery.LastRunSummaryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_report_location: {
      value: cdktn.listMapperHcl(awsScheduledQueryLastRunSummaryErrorReportLocationPropertyToHclTerraform, true)(struct!.errorReportLocation),
      isBlock: true,
      type: "list",
      storageClassType: "LastRunSummaryErrorReportLocationPropertyList",
    },
    execution_stats: {
      value: cdktn.listMapperHcl(awsScheduledQueryLastRunSummaryExecutionStatsPropertyToHclTerraform, true)(struct!.executionStats),
      isBlock: true,
      type: "list",
      storageClassType: "LastRunSummaryExecutionStatsPropertyList",
    },
    query_insights_response: {
      value: cdktn.listMapperHcl(awsScheduledQueryLastRunSummaryQueryInsightsResponsePropertyToHclTerraform, true)(struct!.queryInsightsResponse),
      isBlock: true,
      type: "list",
      storageClassType: "LastRunSummaryQueryInsightsResponsePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQuerySnsConfigurationPropertyToTerraform(struct?: AwsScheduledQuery.SnsConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function awsScheduledQuerySnsConfigurationPropertyToHclTerraform(struct?: AwsScheduledQuery.SnsConfigurationProperty | cdktn.IResolvable): any {
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


export function awsScheduledQueryNotificationConfigurationPropertyToTerraform(struct?: AwsScheduledQuery.NotificationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sns_configuration: cdktn.listMapper(awsScheduledQuerySnsConfigurationPropertyToTerraform, true)(struct!.snsConfiguration),
  }
}


export function awsScheduledQueryNotificationConfigurationPropertyToHclTerraform(struct?: AwsScheduledQuery.NotificationConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sns_configuration: {
      value: cdktn.listMapperHcl(awsScheduledQuerySnsConfigurationPropertyToHclTerraform, true)(struct!.snsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SnsConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationPropertyToTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsErrorReportLocationS3ReportLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationPropertyToHclTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsErrorReportLocationS3ReportLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsScheduledQueryRecentlyFailedRunsErrorReportLocationPropertyToTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsErrorReportLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_report_location: cdktn.listMapper(awsScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationPropertyToTerraform, true)(struct!.s3ReportLocation),
  }
}


export function awsScheduledQueryRecentlyFailedRunsErrorReportLocationPropertyToHclTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsErrorReportLocationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_report_location: {
      value: cdktn.listMapperHcl(awsScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationPropertyToHclTerraform, true)(struct!.s3ReportLocation),
      isBlock: true,
      type: "list",
      storageClassType: "RecentlyFailedRunsErrorReportLocationS3ReportLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryRecentlyFailedRunsExecutionStatsPropertyToTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsExecutionStatsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsScheduledQueryRecentlyFailedRunsExecutionStatsPropertyToHclTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsExecutionStatsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxPropertyToTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxPropertyToHclTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoveragePropertyToTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.listMapper(awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxPropertyToTerraform, true)(struct!.max),
  }
}


export function awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoveragePropertyToHclTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.listMapperHcl(awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxPropertyToHclTerraform, true)(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxPropertyToTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxPropertyToHclTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangePropertyToTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.listMapper(awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxPropertyToTerraform, true)(struct!.max),
  }
}


export function awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangePropertyToHclTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.listMapperHcl(awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxPropertyToHclTerraform, true)(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryRecentlyFailedRunsQueryInsightsResponsePropertyToTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsQueryInsightsResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_spatial_coverage: cdktn.listMapper(awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoveragePropertyToTerraform, true)(struct!.querySpatialCoverage),
    query_temporal_range: cdktn.listMapper(awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangePropertyToTerraform, true)(struct!.queryTemporalRange),
  }
}


export function awsScheduledQueryRecentlyFailedRunsQueryInsightsResponsePropertyToHclTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsQueryInsightsResponseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_spatial_coverage: {
      value: cdktn.listMapperHcl(awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoveragePropertyToHclTerraform, true)(struct!.querySpatialCoverage),
      isBlock: true,
      type: "list",
      storageClassType: "RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoveragePropertyList",
    },
    query_temporal_range: {
      value: cdktn.listMapperHcl(awsScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangePropertyToHclTerraform, true)(struct!.queryTemporalRange),
      isBlock: true,
      type: "list",
      storageClassType: "RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryRecentlyFailedRunsPropertyToTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_report_location: cdktn.listMapper(awsScheduledQueryRecentlyFailedRunsErrorReportLocationPropertyToTerraform, true)(struct!.errorReportLocation),
    execution_stats: cdktn.listMapper(awsScheduledQueryRecentlyFailedRunsExecutionStatsPropertyToTerraform, true)(struct!.executionStats),
    query_insights_response: cdktn.listMapper(awsScheduledQueryRecentlyFailedRunsQueryInsightsResponsePropertyToTerraform, true)(struct!.queryInsightsResponse),
  }
}


export function awsScheduledQueryRecentlyFailedRunsPropertyToHclTerraform(struct?: AwsScheduledQuery.RecentlyFailedRunsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_report_location: {
      value: cdktn.listMapperHcl(awsScheduledQueryRecentlyFailedRunsErrorReportLocationPropertyToHclTerraform, true)(struct!.errorReportLocation),
      isBlock: true,
      type: "list",
      storageClassType: "RecentlyFailedRunsErrorReportLocationPropertyList",
    },
    execution_stats: {
      value: cdktn.listMapperHcl(awsScheduledQueryRecentlyFailedRunsExecutionStatsPropertyToHclTerraform, true)(struct!.executionStats),
      isBlock: true,
      type: "list",
      storageClassType: "RecentlyFailedRunsExecutionStatsPropertyList",
    },
    query_insights_response: {
      value: cdktn.listMapperHcl(awsScheduledQueryRecentlyFailedRunsQueryInsightsResponsePropertyToHclTerraform, true)(struct!.queryInsightsResponse),
      isBlock: true,
      type: "list",
      storageClassType: "RecentlyFailedRunsQueryInsightsResponsePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryScheduleConfigurationPropertyToTerraform(struct?: AwsScheduledQuery.ScheduleConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
  }
}


export function awsScheduledQueryScheduleConfigurationPropertyToHclTerraform(struct?: AwsScheduledQuery.ScheduleConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryDimensionMappingPropertyToTerraform(struct?: AwsScheduledQuery.DimensionMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_value_type: cdktn.stringToTerraform(struct!.dimensionValueType),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsScheduledQueryDimensionMappingPropertyToHclTerraform(struct?: AwsScheduledQuery.DimensionMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_value_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingPropertyToTerraform(struct?: AwsScheduledQuery.TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
    source_column: cdktn.stringToTerraform(struct!.sourceColumn),
    target_multi_measure_attribute_name: cdktn.stringToTerraform(struct!.targetMultiMeasureAttributeName),
  }
}


export function awsScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingPropertyToHclTerraform(struct?: AwsScheduledQuery.TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    measure_value_type: {
      value: cdktn.stringToHclTerraform(struct!.measureValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_multi_measure_attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMultiMeasureAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryMixedMeasureMappingPropertyToTerraform(struct?: AwsScheduledQuery.MixedMeasureMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    measure_name: cdktn.stringToTerraform(struct!.measureName),
    measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
    source_column: cdktn.stringToTerraform(struct!.sourceColumn),
    target_measure_name: cdktn.stringToTerraform(struct!.targetMeasureName),
    multi_measure_attribute_mapping: cdktn.listMapper(awsScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingPropertyToTerraform, true)(struct!.multiMeasureAttributeMapping),
  }
}


export function awsScheduledQueryMixedMeasureMappingPropertyToHclTerraform(struct?: AwsScheduledQuery.MixedMeasureMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    measure_name: {
      value: cdktn.stringToHclTerraform(struct!.measureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure_value_type: {
      value: cdktn.stringToHclTerraform(struct!.measureValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_measure_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMeasureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_measure_attribute_mapping: {
      value: cdktn.listMapperHcl(awsScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingPropertyToHclTerraform, true)(struct!.multiMeasureAttributeMapping),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingPropertyToTerraform(struct?: AwsScheduledQuery.TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
    source_column: cdktn.stringToTerraform(struct!.sourceColumn),
    target_multi_measure_attribute_name: cdktn.stringToTerraform(struct!.targetMultiMeasureAttributeName),
  }
}


export function awsScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingPropertyToHclTerraform(struct?: AwsScheduledQuery.TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    measure_value_type: {
      value: cdktn.stringToHclTerraform(struct!.measureValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_multi_measure_attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMultiMeasureAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryMultiMeasureMappingsPropertyToTerraform(struct?: AwsScheduledQuery.MultiMeasureMappingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_multi_measure_name: cdktn.stringToTerraform(struct!.targetMultiMeasureName),
    multi_measure_attribute_mapping: cdktn.listMapper(awsScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingPropertyToTerraform, true)(struct!.multiMeasureAttributeMapping),
  }
}


export function awsScheduledQueryMultiMeasureMappingsPropertyToHclTerraform(struct?: AwsScheduledQuery.MultiMeasureMappingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_multi_measure_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMultiMeasureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_measure_attribute_mapping: {
      value: cdktn.listMapperHcl(awsScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingPropertyToHclTerraform, true)(struct!.multiMeasureAttributeMapping),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryTimestreamConfigurationPropertyToTerraform(struct?: AwsScheduledQuery.TimestreamConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    measure_name_column: cdktn.stringToTerraform(struct!.measureNameColumn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    time_column: cdktn.stringToTerraform(struct!.timeColumn),
    dimension_mapping: cdktn.listMapper(awsScheduledQueryDimensionMappingPropertyToTerraform, true)(struct!.dimensionMapping),
    mixed_measure_mapping: cdktn.listMapper(awsScheduledQueryMixedMeasureMappingPropertyToTerraform, true)(struct!.mixedMeasureMapping),
    multi_measure_mappings: cdktn.listMapper(awsScheduledQueryMultiMeasureMappingsPropertyToTerraform, true)(struct!.multiMeasureMappings),
  }
}


export function awsScheduledQueryTimestreamConfigurationPropertyToHclTerraform(struct?: AwsScheduledQuery.TimestreamConfigurationProperty | cdktn.IResolvable): any {
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
    measure_name_column: {
      value: cdktn.stringToHclTerraform(struct!.measureNameColumn),
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
    time_column: {
      value: cdktn.stringToHclTerraform(struct!.timeColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_mapping: {
      value: cdktn.listMapperHcl(awsScheduledQueryDimensionMappingPropertyToHclTerraform, true)(struct!.dimensionMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DimensionMappingPropertyList",
    },
    mixed_measure_mapping: {
      value: cdktn.listMapperHcl(awsScheduledQueryMixedMeasureMappingPropertyToHclTerraform, true)(struct!.mixedMeasureMapping),
      isBlock: true,
      type: "list",
      storageClassType: "MixedMeasureMappingPropertyList",
    },
    multi_measure_mappings: {
      value: cdktn.listMapperHcl(awsScheduledQueryMultiMeasureMappingsPropertyToHclTerraform, true)(struct!.multiMeasureMappings),
      isBlock: true,
      type: "list",
      storageClassType: "MultiMeasureMappingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryTargetConfigurationPropertyToTerraform(struct?: AwsScheduledQuery.TargetConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timestream_configuration: cdktn.listMapper(awsScheduledQueryTimestreamConfigurationPropertyToTerraform, true)(struct!.timestreamConfiguration),
  }
}


export function awsScheduledQueryTargetConfigurationPropertyToHclTerraform(struct?: AwsScheduledQuery.TargetConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timestream_configuration: {
      value: cdktn.listMapperHcl(awsScheduledQueryTimestreamConfigurationPropertyToHclTerraform, true)(struct!.timestreamConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsScheduledQueryTimeoutsPropertyToTerraform(struct?: AwsScheduledQuery.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsScheduledQueryTimeoutsPropertyToHclTerraform(struct?: AwsScheduledQuery.TimeoutsProperty | cdktn.IResolvable): any {
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
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsScheduledQuery {
export interface S3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#bucket_name AwsScheduledQuery#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#encryption_option AwsScheduledQuery#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#object_key_prefix AwsScheduledQuery#object_key_prefix}
  */
  readonly objectKeyPrefix?: string;
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._objectKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKeyPrefix = this._objectKeyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._encryptionOption = undefined;
      this._objectKeyPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._encryptionOption = value.encryptionOption;
      this._objectKeyPrefix = value.objectKeyPrefix;
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

  // encryption_option - computed: true, optional: true, required: false
  private _encryptionOption?: string; 
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
  }

  // object_key_prefix - computed: false, optional: true, required: false
  private _objectKeyPrefix?: string; 
  public get objectKeyPrefix() {
    return this.getStringAttribute('object_key_prefix');
  }
  public set objectKeyPrefix(value: string) {
    this._objectKeyPrefix = value;
  }
  public resetObjectKeyPrefix() {
    this._objectKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyPrefixInput() {
    return this._objectKeyPrefix;
  }
}

export class S3ConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : S3ConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): S3ConfigurationPropertyOutputReference {
    return new S3ConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ErrorReportConfigurationProperty {
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#s3_configuration AwsScheduledQuery#s3_configuration}
  */
  readonly s3Configuration?: S3ConfigurationProperty[] | cdktn.IResolvable;
}
export class ErrorReportConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ErrorReportConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorReportConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new S3ConfigurationPropertyList(this, "s3_configuration", false);
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: S3ConfigurationProperty[] | cdktn.IResolvable) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}

export class ErrorReportConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ErrorReportConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ErrorReportConfigurationPropertyOutputReference {
    return new ErrorReportConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastRunSummaryErrorReportLocationS3ReportLocationProperty {
}
export class LastRunSummaryErrorReportLocationS3ReportLocationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastRunSummaryErrorReportLocationS3ReportLocationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastRunSummaryErrorReportLocationS3ReportLocationProperty | cdktn.IResolvable | undefined) {
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

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // object_key - computed: true, optional: false, required: false
  public get objectKey() {
    return this.getStringAttribute('object_key');
  }
}

export class LastRunSummaryErrorReportLocationS3ReportLocationPropertyList extends cdktn.ComplexList {
  public internalValue? : LastRunSummaryErrorReportLocationS3ReportLocationProperty[] | cdktn.IResolvable

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
  public get(index: number): LastRunSummaryErrorReportLocationS3ReportLocationPropertyOutputReference {
    return new LastRunSummaryErrorReportLocationS3ReportLocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastRunSummaryErrorReportLocationProperty {
  /**
  * s3_report_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#s3_report_location AwsScheduledQuery#s3_report_location}
  */
  readonly s3ReportLocation?: LastRunSummaryErrorReportLocationS3ReportLocationProperty[] | cdktn.IResolvable;
}
export class LastRunSummaryErrorReportLocationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastRunSummaryErrorReportLocationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3ReportLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ReportLocation = this._s3ReportLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastRunSummaryErrorReportLocationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3ReportLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3ReportLocation.internalValue = value.s3ReportLocation;
    }
  }

  // s3_report_location - computed: false, optional: true, required: false
  private _s3ReportLocation = new LastRunSummaryErrorReportLocationS3ReportLocationPropertyList(this, "s3_report_location", false);
  public get s3ReportLocation() {
    return this._s3ReportLocation;
  }
  public putS3ReportLocation(value: LastRunSummaryErrorReportLocationS3ReportLocationProperty[] | cdktn.IResolvable) {
    this._s3ReportLocation.internalValue = value;
  }
  public resetS3ReportLocation() {
    this._s3ReportLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ReportLocationInput() {
    return this._s3ReportLocation.internalValue;
  }
}

export class LastRunSummaryErrorReportLocationPropertyList extends cdktn.ComplexList {
  public internalValue? : LastRunSummaryErrorReportLocationProperty[] | cdktn.IResolvable

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
  public get(index: number): LastRunSummaryErrorReportLocationPropertyOutputReference {
    return new LastRunSummaryErrorReportLocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastRunSummaryExecutionStatsProperty {
}
export class LastRunSummaryExecutionStatsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastRunSummaryExecutionStatsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastRunSummaryExecutionStatsProperty | cdktn.IResolvable | undefined) {
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

  // bytes_metered - computed: true, optional: false, required: false
  public get bytesMetered() {
    return this.getNumberAttribute('bytes_metered');
  }

  // cumulative_bytes_scanned - computed: true, optional: false, required: false
  public get cumulativeBytesScanned() {
    return this.getNumberAttribute('cumulative_bytes_scanned');
  }

  // data_writes - computed: true, optional: false, required: false
  public get dataWrites() {
    return this.getNumberAttribute('data_writes');
  }

  // execution_time_in_millis - computed: true, optional: false, required: false
  public get executionTimeInMillis() {
    return this.getNumberAttribute('execution_time_in_millis');
  }

  // query_result_rows - computed: true, optional: false, required: false
  public get queryResultRows() {
    return this.getNumberAttribute('query_result_rows');
  }

  // records_ingested - computed: true, optional: false, required: false
  public get recordsIngested() {
    return this.getNumberAttribute('records_ingested');
  }
}

export class LastRunSummaryExecutionStatsPropertyList extends cdktn.ComplexList {
  public internalValue? : LastRunSummaryExecutionStatsProperty[] | cdktn.IResolvable

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
  public get(index: number): LastRunSummaryExecutionStatsPropertyOutputReference {
    return new LastRunSummaryExecutionStatsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxProperty {
}
export class LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxProperty | cdktn.IResolvable | undefined) {
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

  // partition_key - computed: true, optional: false, required: false
  public get partitionKey() {
    return this.getListAttribute('partition_key');
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxPropertyList extends cdktn.ComplexList {
  public internalValue? : LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxProperty[] | cdktn.IResolvable

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
  public get(index: number): LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxPropertyOutputReference {
    return new LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastRunSummaryQueryInsightsResponseQuerySpatialCoverageProperty {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#max AwsScheduledQuery#max}
  */
  readonly max?: LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxProperty[] | cdktn.IResolvable;
}
export class LastRunSummaryQueryInsightsResponseQuerySpatialCoveragePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastRunSummaryQueryInsightsResponseQuerySpatialCoverageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastRunSummaryQueryInsightsResponseQuerySpatialCoverageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxPropertyList(this, "max", false);
  public get max() {
    return this._max;
  }
  public putMax(value: LastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxProperty[] | cdktn.IResolvable) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }
}

export class LastRunSummaryQueryInsightsResponseQuerySpatialCoveragePropertyList extends cdktn.ComplexList {
  public internalValue? : LastRunSummaryQueryInsightsResponseQuerySpatialCoverageProperty[] | cdktn.IResolvable

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
  public get(index: number): LastRunSummaryQueryInsightsResponseQuerySpatialCoveragePropertyOutputReference {
    return new LastRunSummaryQueryInsightsResponseQuerySpatialCoveragePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxProperty {
}
export class LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxProperty | cdktn.IResolvable | undefined) {
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

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxPropertyList extends cdktn.ComplexList {
  public internalValue? : LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxProperty[] | cdktn.IResolvable

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
  public get(index: number): LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxPropertyOutputReference {
    return new LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastRunSummaryQueryInsightsResponseQueryTemporalRangeProperty {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#max AwsScheduledQuery#max}
  */
  readonly max?: LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxProperty[] | cdktn.IResolvable;
}
export class LastRunSummaryQueryInsightsResponseQueryTemporalRangePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastRunSummaryQueryInsightsResponseQueryTemporalRangeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastRunSummaryQueryInsightsResponseQueryTemporalRangeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxPropertyList(this, "max", false);
  public get max() {
    return this._max;
  }
  public putMax(value: LastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxProperty[] | cdktn.IResolvable) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }
}

export class LastRunSummaryQueryInsightsResponseQueryTemporalRangePropertyList extends cdktn.ComplexList {
  public internalValue? : LastRunSummaryQueryInsightsResponseQueryTemporalRangeProperty[] | cdktn.IResolvable

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
  public get(index: number): LastRunSummaryQueryInsightsResponseQueryTemporalRangePropertyOutputReference {
    return new LastRunSummaryQueryInsightsResponseQueryTemporalRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastRunSummaryQueryInsightsResponseProperty {
  /**
  * query_spatial_coverage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#query_spatial_coverage AwsScheduledQuery#query_spatial_coverage}
  */
  readonly querySpatialCoverage?: LastRunSummaryQueryInsightsResponseQuerySpatialCoverageProperty[] | cdktn.IResolvable;
  /**
  * query_temporal_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#query_temporal_range AwsScheduledQuery#query_temporal_range}
  */
  readonly queryTemporalRange?: LastRunSummaryQueryInsightsResponseQueryTemporalRangeProperty[] | cdktn.IResolvable;
}
export class LastRunSummaryQueryInsightsResponsePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastRunSummaryQueryInsightsResponseProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._querySpatialCoverage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.querySpatialCoverage = this._querySpatialCoverage?.internalValue;
    }
    if (this._queryTemporalRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTemporalRange = this._queryTemporalRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastRunSummaryQueryInsightsResponseProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._querySpatialCoverage.internalValue = undefined;
      this._queryTemporalRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._querySpatialCoverage.internalValue = value.querySpatialCoverage;
      this._queryTemporalRange.internalValue = value.queryTemporalRange;
    }
  }

  // output_bytes - computed: true, optional: false, required: false
  public get outputBytes() {
    return this.getNumberAttribute('output_bytes');
  }

  // output_rows - computed: true, optional: false, required: false
  public get outputRows() {
    return this.getNumberAttribute('output_rows');
  }

  // query_table_count - computed: true, optional: false, required: false
  public get queryTableCount() {
    return this.getNumberAttribute('query_table_count');
  }

  // query_spatial_coverage - computed: false, optional: true, required: false
  private _querySpatialCoverage = new LastRunSummaryQueryInsightsResponseQuerySpatialCoveragePropertyList(this, "query_spatial_coverage", false);
  public get querySpatialCoverage() {
    return this._querySpatialCoverage;
  }
  public putQuerySpatialCoverage(value: LastRunSummaryQueryInsightsResponseQuerySpatialCoverageProperty[] | cdktn.IResolvable) {
    this._querySpatialCoverage.internalValue = value;
  }
  public resetQuerySpatialCoverage() {
    this._querySpatialCoverage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querySpatialCoverageInput() {
    return this._querySpatialCoverage.internalValue;
  }

  // query_temporal_range - computed: false, optional: true, required: false
  private _queryTemporalRange = new LastRunSummaryQueryInsightsResponseQueryTemporalRangePropertyList(this, "query_temporal_range", false);
  public get queryTemporalRange() {
    return this._queryTemporalRange;
  }
  public putQueryTemporalRange(value: LastRunSummaryQueryInsightsResponseQueryTemporalRangeProperty[] | cdktn.IResolvable) {
    this._queryTemporalRange.internalValue = value;
  }
  public resetQueryTemporalRange() {
    this._queryTemporalRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTemporalRangeInput() {
    return this._queryTemporalRange.internalValue;
  }
}

export class LastRunSummaryQueryInsightsResponsePropertyList extends cdktn.ComplexList {
  public internalValue? : LastRunSummaryQueryInsightsResponseProperty[] | cdktn.IResolvable

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
  public get(index: number): LastRunSummaryQueryInsightsResponsePropertyOutputReference {
    return new LastRunSummaryQueryInsightsResponsePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastRunSummaryProperty {
  /**
  * error_report_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#error_report_location AwsScheduledQuery#error_report_location}
  */
  readonly errorReportLocation?: LastRunSummaryErrorReportLocationProperty[] | cdktn.IResolvable;
  /**
  * execution_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#execution_stats AwsScheduledQuery#execution_stats}
  */
  readonly executionStats?: LastRunSummaryExecutionStatsProperty[] | cdktn.IResolvable;
  /**
  * query_insights_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#query_insights_response AwsScheduledQuery#query_insights_response}
  */
  readonly queryInsightsResponse?: LastRunSummaryQueryInsightsResponseProperty[] | cdktn.IResolvable;
}
export class LastRunSummaryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LastRunSummaryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorReportLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorReportLocation = this._errorReportLocation?.internalValue;
    }
    if (this._executionStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionStats = this._executionStats?.internalValue;
    }
    if (this._queryInsightsResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInsightsResponse = this._queryInsightsResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastRunSummaryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorReportLocation.internalValue = undefined;
      this._executionStats.internalValue = undefined;
      this._queryInsightsResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorReportLocation.internalValue = value.errorReportLocation;
      this._executionStats.internalValue = value.executionStats;
      this._queryInsightsResponse.internalValue = value.queryInsightsResponse;
    }
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // invocation_time - computed: true, optional: false, required: false
  public get invocationTime() {
    return this.getStringAttribute('invocation_time');
  }

  // run_status - computed: true, optional: false, required: false
  public get runStatus() {
    return this.getStringAttribute('run_status');
  }

  // trigger_time - computed: true, optional: false, required: false
  public get triggerTime() {
    return this.getStringAttribute('trigger_time');
  }

  // error_report_location - computed: false, optional: true, required: false
  private _errorReportLocation = new LastRunSummaryErrorReportLocationPropertyList(this, "error_report_location", false);
  public get errorReportLocation() {
    return this._errorReportLocation;
  }
  public putErrorReportLocation(value: LastRunSummaryErrorReportLocationProperty[] | cdktn.IResolvable) {
    this._errorReportLocation.internalValue = value;
  }
  public resetErrorReportLocation() {
    this._errorReportLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorReportLocationInput() {
    return this._errorReportLocation.internalValue;
  }

  // execution_stats - computed: false, optional: true, required: false
  private _executionStats = new LastRunSummaryExecutionStatsPropertyList(this, "execution_stats", false);
  public get executionStats() {
    return this._executionStats;
  }
  public putExecutionStats(value: LastRunSummaryExecutionStatsProperty[] | cdktn.IResolvable) {
    this._executionStats.internalValue = value;
  }
  public resetExecutionStats() {
    this._executionStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionStatsInput() {
    return this._executionStats.internalValue;
  }

  // query_insights_response - computed: false, optional: true, required: false
  private _queryInsightsResponse = new LastRunSummaryQueryInsightsResponsePropertyList(this, "query_insights_response", false);
  public get queryInsightsResponse() {
    return this._queryInsightsResponse;
  }
  public putQueryInsightsResponse(value: LastRunSummaryQueryInsightsResponseProperty[] | cdktn.IResolvable) {
    this._queryInsightsResponse.internalValue = value;
  }
  public resetQueryInsightsResponse() {
    this._queryInsightsResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInsightsResponseInput() {
    return this._queryInsightsResponse.internalValue;
  }
}

export class LastRunSummaryPropertyList extends cdktn.ComplexList {
  public internalValue? : LastRunSummaryProperty[] | cdktn.IResolvable

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
  public get(index: number): LastRunSummaryPropertyOutputReference {
    return new LastRunSummaryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#topic_arn AwsScheduledQuery#topic_arn}
  */
  readonly topicArn: string;
}
export class SnsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SnsConfigurationProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SnsConfigurationProperty | cdktn.IResolvable | undefined) {
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

export class SnsConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SnsConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SnsConfigurationPropertyOutputReference {
    return new SnsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationConfigurationProperty {
  /**
  * sns_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#sns_configuration AwsScheduledQuery#sns_configuration}
  */
  readonly snsConfiguration?: SnsConfigurationProperty[] | cdktn.IResolvable;
}
export class NotificationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NotificationConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsConfiguration = this._snsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snsConfiguration.internalValue = value.snsConfiguration;
    }
  }

  // sns_configuration - computed: false, optional: true, required: false
  private _snsConfiguration = new SnsConfigurationPropertyList(this, "sns_configuration", false);
  public get snsConfiguration() {
    return this._snsConfiguration;
  }
  public putSnsConfiguration(value: SnsConfigurationProperty[] | cdktn.IResolvable) {
    this._snsConfiguration.internalValue = value;
  }
  public resetSnsConfiguration() {
    this._snsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsConfigurationInput() {
    return this._snsConfiguration.internalValue;
  }
}

export class NotificationConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : NotificationConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): NotificationConfigurationPropertyOutputReference {
    return new NotificationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecentlyFailedRunsErrorReportLocationS3ReportLocationProperty {
}
export class RecentlyFailedRunsErrorReportLocationS3ReportLocationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecentlyFailedRunsErrorReportLocationS3ReportLocationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecentlyFailedRunsErrorReportLocationS3ReportLocationProperty | cdktn.IResolvable | undefined) {
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

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // object_key - computed: true, optional: false, required: false
  public get objectKey() {
    return this.getStringAttribute('object_key');
  }
}

export class RecentlyFailedRunsErrorReportLocationS3ReportLocationPropertyList extends cdktn.ComplexList {
  public internalValue? : RecentlyFailedRunsErrorReportLocationS3ReportLocationProperty[] | cdktn.IResolvable

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
  public get(index: number): RecentlyFailedRunsErrorReportLocationS3ReportLocationPropertyOutputReference {
    return new RecentlyFailedRunsErrorReportLocationS3ReportLocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecentlyFailedRunsErrorReportLocationProperty {
  /**
  * s3_report_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#s3_report_location AwsScheduledQuery#s3_report_location}
  */
  readonly s3ReportLocation?: RecentlyFailedRunsErrorReportLocationS3ReportLocationProperty[] | cdktn.IResolvable;
}
export class RecentlyFailedRunsErrorReportLocationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecentlyFailedRunsErrorReportLocationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3ReportLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ReportLocation = this._s3ReportLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecentlyFailedRunsErrorReportLocationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3ReportLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3ReportLocation.internalValue = value.s3ReportLocation;
    }
  }

  // s3_report_location - computed: false, optional: true, required: false
  private _s3ReportLocation = new RecentlyFailedRunsErrorReportLocationS3ReportLocationPropertyList(this, "s3_report_location", false);
  public get s3ReportLocation() {
    return this._s3ReportLocation;
  }
  public putS3ReportLocation(value: RecentlyFailedRunsErrorReportLocationS3ReportLocationProperty[] | cdktn.IResolvable) {
    this._s3ReportLocation.internalValue = value;
  }
  public resetS3ReportLocation() {
    this._s3ReportLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ReportLocationInput() {
    return this._s3ReportLocation.internalValue;
  }
}

export class RecentlyFailedRunsErrorReportLocationPropertyList extends cdktn.ComplexList {
  public internalValue? : RecentlyFailedRunsErrorReportLocationProperty[] | cdktn.IResolvable

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
  public get(index: number): RecentlyFailedRunsErrorReportLocationPropertyOutputReference {
    return new RecentlyFailedRunsErrorReportLocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecentlyFailedRunsExecutionStatsProperty {
}
export class RecentlyFailedRunsExecutionStatsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecentlyFailedRunsExecutionStatsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecentlyFailedRunsExecutionStatsProperty | cdktn.IResolvable | undefined) {
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

  // bytes_metered - computed: true, optional: false, required: false
  public get bytesMetered() {
    return this.getNumberAttribute('bytes_metered');
  }

  // cumulative_bytes_scanned - computed: true, optional: false, required: false
  public get cumulativeBytesScanned() {
    return this.getNumberAttribute('cumulative_bytes_scanned');
  }

  // data_writes - computed: true, optional: false, required: false
  public get dataWrites() {
    return this.getNumberAttribute('data_writes');
  }

  // execution_time_in_millis - computed: true, optional: false, required: false
  public get executionTimeInMillis() {
    return this.getNumberAttribute('execution_time_in_millis');
  }

  // query_result_rows - computed: true, optional: false, required: false
  public get queryResultRows() {
    return this.getNumberAttribute('query_result_rows');
  }

  // records_ingested - computed: true, optional: false, required: false
  public get recordsIngested() {
    return this.getNumberAttribute('records_ingested');
  }
}

export class RecentlyFailedRunsExecutionStatsPropertyList extends cdktn.ComplexList {
  public internalValue? : RecentlyFailedRunsExecutionStatsProperty[] | cdktn.IResolvable

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
  public get(index: number): RecentlyFailedRunsExecutionStatsPropertyOutputReference {
    return new RecentlyFailedRunsExecutionStatsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxProperty {
}
export class RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxProperty | cdktn.IResolvable | undefined) {
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

  // partition_key - computed: true, optional: false, required: false
  public get partitionKey() {
    return this.getListAttribute('partition_key');
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxPropertyList extends cdktn.ComplexList {
  public internalValue? : RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxProperty[] | cdktn.IResolvable

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
  public get(index: number): RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxPropertyOutputReference {
    return new RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageProperty {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#max AwsScheduledQuery#max}
  */
  readonly max?: RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxProperty[] | cdktn.IResolvable;
}
export class RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoveragePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxPropertyList(this, "max", false);
  public get max() {
    return this._max;
  }
  public putMax(value: RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxProperty[] | cdktn.IResolvable) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }
}

export class RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoveragePropertyList extends cdktn.ComplexList {
  public internalValue? : RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageProperty[] | cdktn.IResolvable

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
  public get(index: number): RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoveragePropertyOutputReference {
    return new RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoveragePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxProperty {
}
export class RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxProperty | cdktn.IResolvable | undefined) {
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

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxPropertyList extends cdktn.ComplexList {
  public internalValue? : RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxProperty[] | cdktn.IResolvable

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
  public get(index: number): RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxPropertyOutputReference {
    return new RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeProperty {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#max AwsScheduledQuery#max}
  */
  readonly max?: RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxProperty[] | cdktn.IResolvable;
}
export class RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxPropertyList(this, "max", false);
  public get max() {
    return this._max;
  }
  public putMax(value: RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxProperty[] | cdktn.IResolvable) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }
}

export class RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangePropertyList extends cdktn.ComplexList {
  public internalValue? : RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeProperty[] | cdktn.IResolvable

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
  public get(index: number): RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangePropertyOutputReference {
    return new RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecentlyFailedRunsQueryInsightsResponseProperty {
  /**
  * query_spatial_coverage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#query_spatial_coverage AwsScheduledQuery#query_spatial_coverage}
  */
  readonly querySpatialCoverage?: RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageProperty[] | cdktn.IResolvable;
  /**
  * query_temporal_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#query_temporal_range AwsScheduledQuery#query_temporal_range}
  */
  readonly queryTemporalRange?: RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeProperty[] | cdktn.IResolvable;
}
export class RecentlyFailedRunsQueryInsightsResponsePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecentlyFailedRunsQueryInsightsResponseProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._querySpatialCoverage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.querySpatialCoverage = this._querySpatialCoverage?.internalValue;
    }
    if (this._queryTemporalRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTemporalRange = this._queryTemporalRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecentlyFailedRunsQueryInsightsResponseProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._querySpatialCoverage.internalValue = undefined;
      this._queryTemporalRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._querySpatialCoverage.internalValue = value.querySpatialCoverage;
      this._queryTemporalRange.internalValue = value.queryTemporalRange;
    }
  }

  // output_bytes - computed: true, optional: false, required: false
  public get outputBytes() {
    return this.getNumberAttribute('output_bytes');
  }

  // output_rows - computed: true, optional: false, required: false
  public get outputRows() {
    return this.getNumberAttribute('output_rows');
  }

  // query_table_count - computed: true, optional: false, required: false
  public get queryTableCount() {
    return this.getNumberAttribute('query_table_count');
  }

  // query_spatial_coverage - computed: false, optional: true, required: false
  private _querySpatialCoverage = new RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoveragePropertyList(this, "query_spatial_coverage", false);
  public get querySpatialCoverage() {
    return this._querySpatialCoverage;
  }
  public putQuerySpatialCoverage(value: RecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageProperty[] | cdktn.IResolvable) {
    this._querySpatialCoverage.internalValue = value;
  }
  public resetQuerySpatialCoverage() {
    this._querySpatialCoverage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querySpatialCoverageInput() {
    return this._querySpatialCoverage.internalValue;
  }

  // query_temporal_range - computed: false, optional: true, required: false
  private _queryTemporalRange = new RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangePropertyList(this, "query_temporal_range", false);
  public get queryTemporalRange() {
    return this._queryTemporalRange;
  }
  public putQueryTemporalRange(value: RecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeProperty[] | cdktn.IResolvable) {
    this._queryTemporalRange.internalValue = value;
  }
  public resetQueryTemporalRange() {
    this._queryTemporalRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTemporalRangeInput() {
    return this._queryTemporalRange.internalValue;
  }
}

export class RecentlyFailedRunsQueryInsightsResponsePropertyList extends cdktn.ComplexList {
  public internalValue? : RecentlyFailedRunsQueryInsightsResponseProperty[] | cdktn.IResolvable

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
  public get(index: number): RecentlyFailedRunsQueryInsightsResponsePropertyOutputReference {
    return new RecentlyFailedRunsQueryInsightsResponsePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecentlyFailedRunsProperty {
  /**
  * error_report_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#error_report_location AwsScheduledQuery#error_report_location}
  */
  readonly errorReportLocation?: RecentlyFailedRunsErrorReportLocationProperty[] | cdktn.IResolvable;
  /**
  * execution_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#execution_stats AwsScheduledQuery#execution_stats}
  */
  readonly executionStats?: RecentlyFailedRunsExecutionStatsProperty[] | cdktn.IResolvable;
  /**
  * query_insights_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#query_insights_response AwsScheduledQuery#query_insights_response}
  */
  readonly queryInsightsResponse?: RecentlyFailedRunsQueryInsightsResponseProperty[] | cdktn.IResolvable;
}
export class RecentlyFailedRunsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RecentlyFailedRunsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorReportLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorReportLocation = this._errorReportLocation?.internalValue;
    }
    if (this._executionStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionStats = this._executionStats?.internalValue;
    }
    if (this._queryInsightsResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInsightsResponse = this._queryInsightsResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecentlyFailedRunsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorReportLocation.internalValue = undefined;
      this._executionStats.internalValue = undefined;
      this._queryInsightsResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorReportLocation.internalValue = value.errorReportLocation;
      this._executionStats.internalValue = value.executionStats;
      this._queryInsightsResponse.internalValue = value.queryInsightsResponse;
    }
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // invocation_time - computed: true, optional: false, required: false
  public get invocationTime() {
    return this.getStringAttribute('invocation_time');
  }

  // run_status - computed: true, optional: false, required: false
  public get runStatus() {
    return this.getStringAttribute('run_status');
  }

  // trigger_time - computed: true, optional: false, required: false
  public get triggerTime() {
    return this.getStringAttribute('trigger_time');
  }

  // error_report_location - computed: false, optional: true, required: false
  private _errorReportLocation = new RecentlyFailedRunsErrorReportLocationPropertyList(this, "error_report_location", false);
  public get errorReportLocation() {
    return this._errorReportLocation;
  }
  public putErrorReportLocation(value: RecentlyFailedRunsErrorReportLocationProperty[] | cdktn.IResolvable) {
    this._errorReportLocation.internalValue = value;
  }
  public resetErrorReportLocation() {
    this._errorReportLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorReportLocationInput() {
    return this._errorReportLocation.internalValue;
  }

  // execution_stats - computed: false, optional: true, required: false
  private _executionStats = new RecentlyFailedRunsExecutionStatsPropertyList(this, "execution_stats", false);
  public get executionStats() {
    return this._executionStats;
  }
  public putExecutionStats(value: RecentlyFailedRunsExecutionStatsProperty[] | cdktn.IResolvable) {
    this._executionStats.internalValue = value;
  }
  public resetExecutionStats() {
    this._executionStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionStatsInput() {
    return this._executionStats.internalValue;
  }

  // query_insights_response - computed: false, optional: true, required: false
  private _queryInsightsResponse = new RecentlyFailedRunsQueryInsightsResponsePropertyList(this, "query_insights_response", false);
  public get queryInsightsResponse() {
    return this._queryInsightsResponse;
  }
  public putQueryInsightsResponse(value: RecentlyFailedRunsQueryInsightsResponseProperty[] | cdktn.IResolvable) {
    this._queryInsightsResponse.internalValue = value;
  }
  public resetQueryInsightsResponse() {
    this._queryInsightsResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInsightsResponseInput() {
    return this._queryInsightsResponse.internalValue;
  }
}

export class RecentlyFailedRunsPropertyList extends cdktn.ComplexList {
  public internalValue? : RecentlyFailedRunsProperty[] | cdktn.IResolvable

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
  public get(index: number): RecentlyFailedRunsPropertyOutputReference {
    return new RecentlyFailedRunsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#schedule_expression AwsScheduledQuery#schedule_expression}
  */
  readonly scheduleExpression: string;
}
export class ScheduleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScheduleConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheduleExpression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheduleExpression = value.scheduleExpression;
    }
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }
}

export class ScheduleConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ScheduleConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ScheduleConfigurationPropertyOutputReference {
    return new ScheduleConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DimensionMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#dimension_value_type AwsScheduledQuery#dimension_value_type}
  */
  readonly dimensionValueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#name AwsScheduledQuery#name}
  */
  readonly name: string;
}
export class DimensionMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DimensionMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionValueType = this._dimensionValueType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DimensionMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionValueType = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionValueType = value.dimensionValueType;
      this._name = value.name;
    }
  }

  // dimension_value_type - computed: false, optional: false, required: true
  private _dimensionValueType?: string; 
  public get dimensionValueType() {
    return this.getStringAttribute('dimension_value_type');
  }
  public set dimensionValueType(value: string) {
    this._dimensionValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionValueTypeInput() {
    return this._dimensionValueType;
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
}

export class DimensionMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : DimensionMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): DimensionMappingPropertyOutputReference {
    return new DimensionMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#measure_value_type AwsScheduledQuery#measure_value_type}
  */
  readonly measureValueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#source_column AwsScheduledQuery#source_column}
  */
  readonly sourceColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#target_multi_measure_attribute_name AwsScheduledQuery#target_multi_measure_attribute_name}
  */
  readonly targetMultiMeasureAttributeName?: string;
}
export class TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measureValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureValueType = this._measureValueType;
    }
    if (this._sourceColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceColumn = this._sourceColumn;
    }
    if (this._targetMultiMeasureAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMultiMeasureAttributeName = this._targetMultiMeasureAttributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measureValueType = undefined;
      this._sourceColumn = undefined;
      this._targetMultiMeasureAttributeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measureValueType = value.measureValueType;
      this._sourceColumn = value.sourceColumn;
      this._targetMultiMeasureAttributeName = value.targetMultiMeasureAttributeName;
    }
  }

  // measure_value_type - computed: false, optional: false, required: true
  private _measureValueType?: string; 
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }
  public set measureValueType(value: string) {
    this._measureValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureValueTypeInput() {
    return this._measureValueType;
  }

  // source_column - computed: false, optional: false, required: true
  private _sourceColumn?: string; 
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }
  public set sourceColumn(value: string) {
    this._sourceColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceColumnInput() {
    return this._sourceColumn;
  }

  // target_multi_measure_attribute_name - computed: false, optional: true, required: false
  private _targetMultiMeasureAttributeName?: string; 
  public get targetMultiMeasureAttributeName() {
    return this.getStringAttribute('target_multi_measure_attribute_name');
  }
  public set targetMultiMeasureAttributeName(value: string) {
    this._targetMultiMeasureAttributeName = value;
  }
  public resetTargetMultiMeasureAttributeName() {
    this._targetMultiMeasureAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMultiMeasureAttributeNameInput() {
    return this._targetMultiMeasureAttributeName;
  }
}

export class TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingPropertyOutputReference {
    return new TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MixedMeasureMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#measure_name AwsScheduledQuery#measure_name}
  */
  readonly measureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#measure_value_type AwsScheduledQuery#measure_value_type}
  */
  readonly measureValueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#source_column AwsScheduledQuery#source_column}
  */
  readonly sourceColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#target_measure_name AwsScheduledQuery#target_measure_name}
  */
  readonly targetMeasureName?: string;
  /**
  * multi_measure_attribute_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#multi_measure_attribute_mapping AwsScheduledQuery#multi_measure_attribute_mapping}
  */
  readonly multiMeasureAttributeMapping?: TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingProperty[] | cdktn.IResolvable;
}
export class MixedMeasureMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MixedMeasureMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureName = this._measureName;
    }
    if (this._measureValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureValueType = this._measureValueType;
    }
    if (this._sourceColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceColumn = this._sourceColumn;
    }
    if (this._targetMeasureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMeasureName = this._targetMeasureName;
    }
    if (this._multiMeasureAttributeMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiMeasureAttributeMapping = this._multiMeasureAttributeMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MixedMeasureMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measureName = undefined;
      this._measureValueType = undefined;
      this._sourceColumn = undefined;
      this._targetMeasureName = undefined;
      this._multiMeasureAttributeMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measureName = value.measureName;
      this._measureValueType = value.measureValueType;
      this._sourceColumn = value.sourceColumn;
      this._targetMeasureName = value.targetMeasureName;
      this._multiMeasureAttributeMapping.internalValue = value.multiMeasureAttributeMapping;
    }
  }

  // measure_name - computed: false, optional: true, required: false
  private _measureName?: string; 
  public get measureName() {
    return this.getStringAttribute('measure_name');
  }
  public set measureName(value: string) {
    this._measureName = value;
  }
  public resetMeasureName() {
    this._measureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureNameInput() {
    return this._measureName;
  }

  // measure_value_type - computed: false, optional: false, required: true
  private _measureValueType?: string; 
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }
  public set measureValueType(value: string) {
    this._measureValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureValueTypeInput() {
    return this._measureValueType;
  }

  // source_column - computed: false, optional: true, required: false
  private _sourceColumn?: string; 
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }
  public set sourceColumn(value: string) {
    this._sourceColumn = value;
  }
  public resetSourceColumn() {
    this._sourceColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceColumnInput() {
    return this._sourceColumn;
  }

  // target_measure_name - computed: false, optional: true, required: false
  private _targetMeasureName?: string; 
  public get targetMeasureName() {
    return this.getStringAttribute('target_measure_name');
  }
  public set targetMeasureName(value: string) {
    this._targetMeasureName = value;
  }
  public resetTargetMeasureName() {
    this._targetMeasureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMeasureNameInput() {
    return this._targetMeasureName;
  }

  // multi_measure_attribute_mapping - computed: false, optional: true, required: false
  private _multiMeasureAttributeMapping = new TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingPropertyList(this, "multi_measure_attribute_mapping", false);
  public get multiMeasureAttributeMapping() {
    return this._multiMeasureAttributeMapping;
  }
  public putMultiMeasureAttributeMapping(value: TargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingProperty[] | cdktn.IResolvable) {
    this._multiMeasureAttributeMapping.internalValue = value;
  }
  public resetMultiMeasureAttributeMapping() {
    this._multiMeasureAttributeMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMeasureAttributeMappingInput() {
    return this._multiMeasureAttributeMapping.internalValue;
  }
}

export class MixedMeasureMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : MixedMeasureMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): MixedMeasureMappingPropertyOutputReference {
    return new MixedMeasureMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#measure_value_type AwsScheduledQuery#measure_value_type}
  */
  readonly measureValueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#source_column AwsScheduledQuery#source_column}
  */
  readonly sourceColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#target_multi_measure_attribute_name AwsScheduledQuery#target_multi_measure_attribute_name}
  */
  readonly targetMultiMeasureAttributeName?: string;
}
export class TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measureValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureValueType = this._measureValueType;
    }
    if (this._sourceColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceColumn = this._sourceColumn;
    }
    if (this._targetMultiMeasureAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMultiMeasureAttributeName = this._targetMultiMeasureAttributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measureValueType = undefined;
      this._sourceColumn = undefined;
      this._targetMultiMeasureAttributeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measureValueType = value.measureValueType;
      this._sourceColumn = value.sourceColumn;
      this._targetMultiMeasureAttributeName = value.targetMultiMeasureAttributeName;
    }
  }

  // measure_value_type - computed: false, optional: false, required: true
  private _measureValueType?: string; 
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }
  public set measureValueType(value: string) {
    this._measureValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureValueTypeInput() {
    return this._measureValueType;
  }

  // source_column - computed: false, optional: false, required: true
  private _sourceColumn?: string; 
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }
  public set sourceColumn(value: string) {
    this._sourceColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceColumnInput() {
    return this._sourceColumn;
  }

  // target_multi_measure_attribute_name - computed: false, optional: true, required: false
  private _targetMultiMeasureAttributeName?: string; 
  public get targetMultiMeasureAttributeName() {
    return this.getStringAttribute('target_multi_measure_attribute_name');
  }
  public set targetMultiMeasureAttributeName(value: string) {
    this._targetMultiMeasureAttributeName = value;
  }
  public resetTargetMultiMeasureAttributeName() {
    this._targetMultiMeasureAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMultiMeasureAttributeNameInput() {
    return this._targetMultiMeasureAttributeName;
  }
}

export class TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingPropertyOutputReference {
    return new TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MultiMeasureMappingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#target_multi_measure_name AwsScheduledQuery#target_multi_measure_name}
  */
  readonly targetMultiMeasureName?: string;
  /**
  * multi_measure_attribute_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#multi_measure_attribute_mapping AwsScheduledQuery#multi_measure_attribute_mapping}
  */
  readonly multiMeasureAttributeMapping?: TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingProperty[] | cdktn.IResolvable;
}
export class MultiMeasureMappingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MultiMeasureMappingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetMultiMeasureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMultiMeasureName = this._targetMultiMeasureName;
    }
    if (this._multiMeasureAttributeMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiMeasureAttributeMapping = this._multiMeasureAttributeMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MultiMeasureMappingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetMultiMeasureName = undefined;
      this._multiMeasureAttributeMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetMultiMeasureName = value.targetMultiMeasureName;
      this._multiMeasureAttributeMapping.internalValue = value.multiMeasureAttributeMapping;
    }
  }

  // target_multi_measure_name - computed: false, optional: true, required: false
  private _targetMultiMeasureName?: string; 
  public get targetMultiMeasureName() {
    return this.getStringAttribute('target_multi_measure_name');
  }
  public set targetMultiMeasureName(value: string) {
    this._targetMultiMeasureName = value;
  }
  public resetTargetMultiMeasureName() {
    this._targetMultiMeasureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMultiMeasureNameInput() {
    return this._targetMultiMeasureName;
  }

  // multi_measure_attribute_mapping - computed: false, optional: true, required: false
  private _multiMeasureAttributeMapping = new TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingPropertyList(this, "multi_measure_attribute_mapping", false);
  public get multiMeasureAttributeMapping() {
    return this._multiMeasureAttributeMapping;
  }
  public putMultiMeasureAttributeMapping(value: TargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingProperty[] | cdktn.IResolvable) {
    this._multiMeasureAttributeMapping.internalValue = value;
  }
  public resetMultiMeasureAttributeMapping() {
    this._multiMeasureAttributeMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMeasureAttributeMappingInput() {
    return this._multiMeasureAttributeMapping.internalValue;
  }
}

export class MultiMeasureMappingsPropertyList extends cdktn.ComplexList {
  public internalValue? : MultiMeasureMappingsProperty[] | cdktn.IResolvable

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
  public get(index: number): MultiMeasureMappingsPropertyOutputReference {
    return new MultiMeasureMappingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#database_name AwsScheduledQuery#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#measure_name_column AwsScheduledQuery#measure_name_column}
  */
  readonly measureNameColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#table_name AwsScheduledQuery#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#time_column AwsScheduledQuery#time_column}
  */
  readonly timeColumn: string;
  /**
  * dimension_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#dimension_mapping AwsScheduledQuery#dimension_mapping}
  */
  readonly dimensionMapping?: DimensionMappingProperty[] | cdktn.IResolvable;
  /**
  * mixed_measure_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#mixed_measure_mapping AwsScheduledQuery#mixed_measure_mapping}
  */
  readonly mixedMeasureMapping?: MixedMeasureMappingProperty[] | cdktn.IResolvable;
  /**
  * multi_measure_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#multi_measure_mappings AwsScheduledQuery#multi_measure_mappings}
  */
  readonly multiMeasureMappings?: MultiMeasureMappingsProperty[] | cdktn.IResolvable;
}
export class TimestreamConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._measureNameColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureNameColumn = this._measureNameColumn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._timeColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeColumn = this._timeColumn;
    }
    if (this._dimensionMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionMapping = this._dimensionMapping?.internalValue;
    }
    if (this._mixedMeasureMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mixedMeasureMapping = this._mixedMeasureMapping?.internalValue;
    }
    if (this._multiMeasureMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiMeasureMappings = this._multiMeasureMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._measureNameColumn = undefined;
      this._tableName = undefined;
      this._timeColumn = undefined;
      this._dimensionMapping.internalValue = undefined;
      this._mixedMeasureMapping.internalValue = undefined;
      this._multiMeasureMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._measureNameColumn = value.measureNameColumn;
      this._tableName = value.tableName;
      this._timeColumn = value.timeColumn;
      this._dimensionMapping.internalValue = value.dimensionMapping;
      this._mixedMeasureMapping.internalValue = value.mixedMeasureMapping;
      this._multiMeasureMappings.internalValue = value.multiMeasureMappings;
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

  // measure_name_column - computed: false, optional: true, required: false
  private _measureNameColumn?: string; 
  public get measureNameColumn() {
    return this.getStringAttribute('measure_name_column');
  }
  public set measureNameColumn(value: string) {
    this._measureNameColumn = value;
  }
  public resetMeasureNameColumn() {
    this._measureNameColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureNameColumnInput() {
    return this._measureNameColumn;
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

  // time_column - computed: false, optional: false, required: true
  private _timeColumn?: string; 
  public get timeColumn() {
    return this.getStringAttribute('time_column');
  }
  public set timeColumn(value: string) {
    this._timeColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeColumnInput() {
    return this._timeColumn;
  }

  // dimension_mapping - computed: false, optional: true, required: false
  private _dimensionMapping = new DimensionMappingPropertyList(this, "dimension_mapping", false);
  public get dimensionMapping() {
    return this._dimensionMapping;
  }
  public putDimensionMapping(value: DimensionMappingProperty[] | cdktn.IResolvable) {
    this._dimensionMapping.internalValue = value;
  }
  public resetDimensionMapping() {
    this._dimensionMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionMappingInput() {
    return this._dimensionMapping.internalValue;
  }

  // mixed_measure_mapping - computed: false, optional: true, required: false
  private _mixedMeasureMapping = new MixedMeasureMappingPropertyList(this, "mixed_measure_mapping", false);
  public get mixedMeasureMapping() {
    return this._mixedMeasureMapping;
  }
  public putMixedMeasureMapping(value: MixedMeasureMappingProperty[] | cdktn.IResolvable) {
    this._mixedMeasureMapping.internalValue = value;
  }
  public resetMixedMeasureMapping() {
    this._mixedMeasureMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixedMeasureMappingInput() {
    return this._mixedMeasureMapping.internalValue;
  }

  // multi_measure_mappings - computed: false, optional: true, required: false
  private _multiMeasureMappings = new MultiMeasureMappingsPropertyList(this, "multi_measure_mappings", false);
  public get multiMeasureMappings() {
    return this._multiMeasureMappings;
  }
  public putMultiMeasureMappings(value: MultiMeasureMappingsProperty[] | cdktn.IResolvable) {
    this._multiMeasureMappings.internalValue = value;
  }
  public resetMultiMeasureMappings() {
    this._multiMeasureMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMeasureMappingsInput() {
    return this._multiMeasureMappings.internalValue;
  }
}

export class TimestreamConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : TimestreamConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): TimestreamConfigurationPropertyOutputReference {
    return new TimestreamConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationProperty {
  /**
  * timestream_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#timestream_configuration AwsScheduledQuery#timestream_configuration}
  */
  readonly timestreamConfiguration?: TimestreamConfigurationProperty[] | cdktn.IResolvable;
}
export class TargetConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestreamConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestreamConfiguration = this._timestreamConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timestreamConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timestreamConfiguration.internalValue = value.timestreamConfiguration;
    }
  }

  // timestream_configuration - computed: false, optional: true, required: false
  private _timestreamConfiguration = new TimestreamConfigurationPropertyList(this, "timestream_configuration", false);
  public get timestreamConfiguration() {
    return this._timestreamConfiguration;
  }
  public putTimestreamConfiguration(value: TimestreamConfigurationProperty[] | cdktn.IResolvable) {
    this._timestreamConfiguration.internalValue = value;
  }
  public resetTimestreamConfiguration() {
    this._timestreamConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamConfigurationInput() {
    return this._timestreamConfiguration.internalValue;
  }
}

export class TargetConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationPropertyOutputReference {
    return new TargetConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#create AwsScheduledQuery#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#delete AwsScheduledQuery#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamquery_scheduled_query#update AwsScheduledQuery#update}
  */
  readonly update?: string;
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
}
