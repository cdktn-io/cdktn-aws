// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfEventSourceMappingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#batch_size TfEventSourceMapping#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error TfEventSourceMapping#bisect_batch_on_function_error}
  */
  readonly bisectBatchOnFunctionError?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#enabled TfEventSourceMapping#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#event_source_arn TfEventSourceMapping#event_source_arn}
  */
  readonly eventSourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#function_name TfEventSourceMapping#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#function_response_types TfEventSourceMapping#function_response_types}
  */
  readonly functionResponseTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#id TfEventSourceMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#kms_key_arn TfEventSourceMapping#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds TfEventSourceMapping#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds TfEventSourceMapping#maximum_record_age_in_seconds}
  */
  readonly maximumRecordAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts TfEventSourceMapping#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#parallelization_factor TfEventSourceMapping#parallelization_factor}
  */
  readonly parallelizationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#queues TfEventSourceMapping#queues}
  */
  readonly queues?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#region TfEventSourceMapping#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#starting_position TfEventSourceMapping#starting_position}
  */
  readonly startingPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp TfEventSourceMapping#starting_position_timestamp}
  */
  readonly startingPositionTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#tags TfEventSourceMapping#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#tags_all TfEventSourceMapping#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#topics TfEventSourceMapping#topics}
  */
  readonly topics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds TfEventSourceMapping#tumbling_window_in_seconds}
  */
  readonly tumblingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#use_resource_timeout_for_propagation TfEventSourceMapping#use_resource_timeout_for_propagation}
  */
  readonly useResourceTimeoutForPropagation?: boolean | cdktn.IResolvable;
  /**
  * amazon_managed_kafka_event_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#amazon_managed_kafka_event_source_config TfEventSourceMapping#amazon_managed_kafka_event_source_config}
  */
  readonly amazonManagedKafkaEventSourceConfig?: TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty;
  /**
  * destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#destination_config TfEventSourceMapping#destination_config}
  */
  readonly destinationConfig?: TfEventSourceMapping.DestinationConfigProperty;
  /**
  * document_db_event_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#document_db_event_source_config TfEventSourceMapping#document_db_event_source_config}
  */
  readonly documentDbEventSourceConfig?: TfEventSourceMapping.DocumentDbEventSourceConfigProperty;
  /**
  * filter_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#filter_criteria TfEventSourceMapping#filter_criteria}
  */
  readonly filterCriteria?: TfEventSourceMapping.FilterCriteriaProperty;
  /**
  * metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#metrics_config TfEventSourceMapping#metrics_config}
  */
  readonly metricsConfig?: TfEventSourceMapping.MetricsConfigProperty;
  /**
  * provisioned_poller_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#provisioned_poller_config TfEventSourceMapping#provisioned_poller_config}
  */
  readonly provisionedPollerConfig?: TfEventSourceMapping.ProvisionedPollerConfigProperty;
  /**
  * scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#scaling_config TfEventSourceMapping#scaling_config}
  */
  readonly scalingConfig?: TfEventSourceMapping.ScalingConfigProperty;
  /**
  * self_managed_event_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#self_managed_event_source TfEventSourceMapping#self_managed_event_source}
  */
  readonly selfManagedEventSource?: TfEventSourceMapping.SelfManagedEventSourceProperty;
  /**
  * self_managed_kafka_event_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#self_managed_kafka_event_source_config TfEventSourceMapping#self_managed_kafka_event_source_config}
  */
  readonly selfManagedKafkaEventSourceConfig?: TfEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty;
  /**
  * source_access_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#source_access_configuration TfEventSourceMapping#source_access_configuration}
  */
  readonly sourceAccessConfiguration?: TfEventSourceMapping.SourceAccessConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#timeouts TfEventSourceMapping#timeouts}
  */
  readonly timeouts?: TfEventSourceMapping.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping aws_lambda_event_source_mapping}
*/
export class TfEventSourceMapping extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_event_source_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfEventSourceMapping resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfEventSourceMapping to import
  * @param importFromId The id of the existing TfEventSourceMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfEventSourceMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_event_source_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping aws_lambda_event_source_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfEventSourceMappingConfig
  */
  public constructor(scope: Construct, id: string, config: TfEventSourceMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_event_source_mapping',
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
    this._batchSize = config.batchSize;
    this._bisectBatchOnFunctionError = config.bisectBatchOnFunctionError;
    this._enabled = config.enabled;
    this._eventSourceArn = config.eventSourceArn;
    this._functionName = config.functionName;
    this._functionResponseTypes = config.functionResponseTypes;
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._maximumBatchingWindowInSeconds = config.maximumBatchingWindowInSeconds;
    this._maximumRecordAgeInSeconds = config.maximumRecordAgeInSeconds;
    this._maximumRetryAttempts = config.maximumRetryAttempts;
    this._parallelizationFactor = config.parallelizationFactor;
    this._queues = config.queues;
    this._region = config.region;
    this._startingPosition = config.startingPosition;
    this._startingPositionTimestamp = config.startingPositionTimestamp;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._topics = config.topics;
    this._tumblingWindowInSeconds = config.tumblingWindowInSeconds;
    this._useResourceTimeoutForPropagation = config.useResourceTimeoutForPropagation;
    this._amazonManagedKafkaEventSourceConfig.internalValue = config.amazonManagedKafkaEventSourceConfig;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._documentDbEventSourceConfig.internalValue = config.documentDbEventSourceConfig;
    this._filterCriteria.internalValue = config.filterCriteria;
    this._metricsConfig.internalValue = config.metricsConfig;
    this._provisionedPollerConfig.internalValue = config.provisionedPollerConfig;
    this._scalingConfig.internalValue = config.scalingConfig;
    this._selfManagedEventSource.internalValue = config.selfManagedEventSource;
    this._selfManagedKafkaEventSourceConfig.internalValue = config.selfManagedKafkaEventSourceConfig;
    this._sourceAccessConfiguration.internalValue = config.sourceAccessConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // bisect_batch_on_function_error - computed: false, optional: true, required: false
  private _bisectBatchOnFunctionError?: boolean | cdktn.IResolvable; 
  public get bisectBatchOnFunctionError() {
    return this.getBooleanAttribute('bisect_batch_on_function_error');
  }
  public set bisectBatchOnFunctionError(value: boolean | cdktn.IResolvable) {
    this._bisectBatchOnFunctionError = value;
  }
  public resetBisectBatchOnFunctionError() {
    this._bisectBatchOnFunctionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bisectBatchOnFunctionErrorInput() {
    return this._bisectBatchOnFunctionError;
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

  // event_source_arn - computed: false, optional: true, required: false
  private _eventSourceArn?: string; 
  public get eventSourceArn() {
    return this.getStringAttribute('event_source_arn');
  }
  public set eventSourceArn(value: string) {
    this._eventSourceArn = value;
  }
  public resetEventSourceArn() {
    this._eventSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceArnInput() {
    return this._eventSourceArn;
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_response_types - computed: false, optional: true, required: false
  private _functionResponseTypes?: string[]; 
  public get functionResponseTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('function_response_types'));
  }
  public set functionResponseTypes(value: string[]) {
    this._functionResponseTypes = value;
  }
  public resetFunctionResponseTypes() {
    this._functionResponseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionResponseTypesInput() {
    return this._functionResponseTypes;
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_processing_result - computed: true, optional: false, required: false
  public get lastProcessingResult() {
    return this.getStringAttribute('last_processing_result');
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // maximum_record_age_in_seconds - computed: true, optional: true, required: false
  private _maximumRecordAgeInSeconds?: number; 
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }
  public set maximumRecordAgeInSeconds(value: number) {
    this._maximumRecordAgeInSeconds = value;
  }
  public resetMaximumRecordAgeInSeconds() {
    this._maximumRecordAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecordAgeInSecondsInput() {
    return this._maximumRecordAgeInSeconds;
  }

  // maximum_retry_attempts - computed: true, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }

  // parallelization_factor - computed: true, optional: true, required: false
  private _parallelizationFactor?: number; 
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }
  public set parallelizationFactor(value: number) {
    this._parallelizationFactor = value;
  }
  public resetParallelizationFactor() {
    this._parallelizationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelizationFactorInput() {
    return this._parallelizationFactor;
  }

  // queues - computed: false, optional: true, required: false
  private _queues?: string[]; 
  public get queues() {
    return this.getListAttribute('queues');
  }
  public set queues(value: string[]) {
    this._queues = value;
  }
  public resetQueues() {
    this._queues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuesInput() {
    return this._queues;
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

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }

  // starting_position_timestamp - computed: false, optional: true, required: false
  private _startingPositionTimestamp?: string; 
  public get startingPositionTimestamp() {
    return this.getStringAttribute('starting_position_timestamp');
  }
  public set startingPositionTimestamp(value: string) {
    this._startingPositionTimestamp = value;
  }
  public resetStartingPositionTimestamp() {
    this._startingPositionTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionTimestampInput() {
    return this._startingPositionTimestamp;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_transition_reason - computed: true, optional: false, required: false
  public get stateTransitionReason() {
    return this.getStringAttribute('state_transition_reason');
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

  // topics - computed: false, optional: true, required: false
  private _topics?: string[]; 
  public get topics() {
    return cdktn.Fn.tolist(this.getListAttribute('topics'));
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // tumbling_window_in_seconds - computed: false, optional: true, required: false
  private _tumblingWindowInSeconds?: number; 
  public get tumblingWindowInSeconds() {
    return this.getNumberAttribute('tumbling_window_in_seconds');
  }
  public set tumblingWindowInSeconds(value: number) {
    this._tumblingWindowInSeconds = value;
  }
  public resetTumblingWindowInSeconds() {
    this._tumblingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tumblingWindowInSecondsInput() {
    return this._tumblingWindowInSeconds;
  }

  // use_resource_timeout_for_propagation - computed: false, optional: true, required: false
  private _useResourceTimeoutForPropagation?: boolean | cdktn.IResolvable; 
  public get useResourceTimeoutForPropagation() {
    return this.getBooleanAttribute('use_resource_timeout_for_propagation');
  }
  public set useResourceTimeoutForPropagation(value: boolean | cdktn.IResolvable) {
    this._useResourceTimeoutForPropagation = value;
  }
  public resetUseResourceTimeoutForPropagation() {
    this._useResourceTimeoutForPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useResourceTimeoutForPropagationInput() {
    return this._useResourceTimeoutForPropagation;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // amazon_managed_kafka_event_source_config - computed: false, optional: true, required: false
  private _amazonManagedKafkaEventSourceConfig = new TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigPropertyOutputReference(this, "amazon_managed_kafka_event_source_config");
  public get amazonManagedKafkaEventSourceConfig() {
    return this._amazonManagedKafkaEventSourceConfig;
  }
  public putAmazonManagedKafkaEventSourceConfig(value: TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty) {
    this._amazonManagedKafkaEventSourceConfig.internalValue = value;
  }
  public resetAmazonManagedKafkaEventSourceConfig() {
    this._amazonManagedKafkaEventSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonManagedKafkaEventSourceConfigInput() {
    return this._amazonManagedKafkaEventSourceConfig.internalValue;
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig = new TfEventSourceMapping.DestinationConfigPropertyOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: TfEventSourceMapping.DestinationConfigProperty) {
    this._destinationConfig.internalValue = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // document_db_event_source_config - computed: false, optional: true, required: false
  private _documentDbEventSourceConfig = new TfEventSourceMapping.DocumentDbEventSourceConfigPropertyOutputReference(this, "document_db_event_source_config");
  public get documentDbEventSourceConfig() {
    return this._documentDbEventSourceConfig;
  }
  public putDocumentDbEventSourceConfig(value: TfEventSourceMapping.DocumentDbEventSourceConfigProperty) {
    this._documentDbEventSourceConfig.internalValue = value;
  }
  public resetDocumentDbEventSourceConfig() {
    this._documentDbEventSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDbEventSourceConfigInput() {
    return this._documentDbEventSourceConfig.internalValue;
  }

  // filter_criteria - computed: false, optional: true, required: false
  private _filterCriteria = new TfEventSourceMapping.FilterCriteriaPropertyOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
  }
  public putFilterCriteria(value: TfEventSourceMapping.FilterCriteriaProperty) {
    this._filterCriteria.internalValue = value;
  }
  public resetFilterCriteria() {
    this._filterCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria.internalValue;
  }

  // metrics_config - computed: false, optional: true, required: false
  private _metricsConfig = new TfEventSourceMapping.MetricsConfigPropertyOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }
  public putMetricsConfig(value: TfEventSourceMapping.MetricsConfigProperty) {
    this._metricsConfig.internalValue = value;
  }
  public resetMetricsConfig() {
    this._metricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigInput() {
    return this._metricsConfig.internalValue;
  }

  // provisioned_poller_config - computed: false, optional: true, required: false
  private _provisionedPollerConfig = new TfEventSourceMapping.ProvisionedPollerConfigPropertyOutputReference(this, "provisioned_poller_config");
  public get provisionedPollerConfig() {
    return this._provisionedPollerConfig;
  }
  public putProvisionedPollerConfig(value: TfEventSourceMapping.ProvisionedPollerConfigProperty) {
    this._provisionedPollerConfig.internalValue = value;
  }
  public resetProvisionedPollerConfig() {
    this._provisionedPollerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedPollerConfigInput() {
    return this._provisionedPollerConfig.internalValue;
  }

  // scaling_config - computed: false, optional: true, required: false
  private _scalingConfig = new TfEventSourceMapping.ScalingConfigPropertyOutputReference(this, "scaling_config");
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: TfEventSourceMapping.ScalingConfigProperty) {
    this._scalingConfig.internalValue = value;
  }
  public resetScalingConfig() {
    this._scalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // self_managed_event_source - computed: false, optional: true, required: false
  private _selfManagedEventSource = new TfEventSourceMapping.SelfManagedEventSourcePropertyOutputReference(this, "self_managed_event_source");
  public get selfManagedEventSource() {
    return this._selfManagedEventSource;
  }
  public putSelfManagedEventSource(value: TfEventSourceMapping.SelfManagedEventSourceProperty) {
    this._selfManagedEventSource.internalValue = value;
  }
  public resetSelfManagedEventSource() {
    this._selfManagedEventSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedEventSourceInput() {
    return this._selfManagedEventSource.internalValue;
  }

  // self_managed_kafka_event_source_config - computed: false, optional: true, required: false
  private _selfManagedKafkaEventSourceConfig = new TfEventSourceMapping.SelfManagedKafkaEventSourceConfigPropertyOutputReference(this, "self_managed_kafka_event_source_config");
  public get selfManagedKafkaEventSourceConfig() {
    return this._selfManagedKafkaEventSourceConfig;
  }
  public putSelfManagedKafkaEventSourceConfig(value: TfEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty) {
    this._selfManagedKafkaEventSourceConfig.internalValue = value;
  }
  public resetSelfManagedKafkaEventSourceConfig() {
    this._selfManagedKafkaEventSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedKafkaEventSourceConfigInput() {
    return this._selfManagedKafkaEventSourceConfig.internalValue;
  }

  // source_access_configuration - computed: false, optional: true, required: false
  private _sourceAccessConfiguration = new TfEventSourceMapping.SourceAccessConfigurationPropertyList(this, "source_access_configuration", true);
  public get sourceAccessConfiguration() {
    return this._sourceAccessConfiguration;
  }
  public putSourceAccessConfiguration(value: TfEventSourceMapping.SourceAccessConfigurationProperty[] | cdktn.IResolvable) {
    this._sourceAccessConfiguration.internalValue = value;
  }
  public resetSourceAccessConfiguration() {
    this._sourceAccessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAccessConfigurationInput() {
    return this._sourceAccessConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfEventSourceMapping.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfEventSourceMapping.TimeoutsProperty) {
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
      batch_size: cdktn.numberToTerraform(this._batchSize),
      bisect_batch_on_function_error: cdktn.booleanToTerraform(this._bisectBatchOnFunctionError),
      enabled: cdktn.booleanToTerraform(this._enabled),
      event_source_arn: cdktn.stringToTerraform(this._eventSourceArn),
      function_name: cdktn.stringToTerraform(this._functionName),
      function_response_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._functionResponseTypes),
      id: cdktn.stringToTerraform(this._id),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      maximum_batching_window_in_seconds: cdktn.numberToTerraform(this._maximumBatchingWindowInSeconds),
      maximum_record_age_in_seconds: cdktn.numberToTerraform(this._maximumRecordAgeInSeconds),
      maximum_retry_attempts: cdktn.numberToTerraform(this._maximumRetryAttempts),
      parallelization_factor: cdktn.numberToTerraform(this._parallelizationFactor),
      queues: cdktn.listMapper(cdktn.stringToTerraform, false)(this._queues),
      region: cdktn.stringToTerraform(this._region),
      starting_position: cdktn.stringToTerraform(this._startingPosition),
      starting_position_timestamp: cdktn.stringToTerraform(this._startingPositionTimestamp),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      topics: cdktn.listMapper(cdktn.stringToTerraform, false)(this._topics),
      tumbling_window_in_seconds: cdktn.numberToTerraform(this._tumblingWindowInSeconds),
      use_resource_timeout_for_propagation: cdktn.booleanToTerraform(this._useResourceTimeoutForPropagation),
      amazon_managed_kafka_event_source_config: tfEventSourceMappingAmazonManagedKafkaEventSourceConfigPropertyToTerraform(this._amazonManagedKafkaEventSourceConfig.internalValue),
      destination_config: tfEventSourceMappingDestinationConfigPropertyToTerraform(this._destinationConfig.internalValue),
      document_db_event_source_config: tfEventSourceMappingDocumentDbEventSourceConfigPropertyToTerraform(this._documentDbEventSourceConfig.internalValue),
      filter_criteria: tfEventSourceMappingFilterCriteriaPropertyToTerraform(this._filterCriteria.internalValue),
      metrics_config: tfEventSourceMappingMetricsConfigPropertyToTerraform(this._metricsConfig.internalValue),
      provisioned_poller_config: tfEventSourceMappingProvisionedPollerConfigPropertyToTerraform(this._provisionedPollerConfig.internalValue),
      scaling_config: tfEventSourceMappingScalingConfigPropertyToTerraform(this._scalingConfig.internalValue),
      self_managed_event_source: tfEventSourceMappingSelfManagedEventSourcePropertyToTerraform(this._selfManagedEventSource.internalValue),
      self_managed_kafka_event_source_config: tfEventSourceMappingSelfManagedKafkaEventSourceConfigPropertyToTerraform(this._selfManagedKafkaEventSourceConfig.internalValue),
      source_access_configuration: cdktn.listMapper(tfEventSourceMappingSourceAccessConfigurationPropertyToTerraform, true)(this._sourceAccessConfiguration.internalValue),
      timeouts: tfEventSourceMappingTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batch_size: {
        value: cdktn.numberToHclTerraform(this._batchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bisect_batch_on_function_error: {
        value: cdktn.booleanToHclTerraform(this._bisectBatchOnFunctionError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_source_arn: {
        value: cdktn.stringToHclTerraform(this._eventSourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktn.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_response_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._functionResponseTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_batching_window_in_seconds: {
        value: cdktn.numberToHclTerraform(this._maximumBatchingWindowInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_record_age_in_seconds: {
        value: cdktn.numberToHclTerraform(this._maximumRecordAgeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_retry_attempts: {
        value: cdktn.numberToHclTerraform(this._maximumRetryAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parallelization_factor: {
        value: cdktn.numberToHclTerraform(this._parallelizationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queues: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._queues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starting_position: {
        value: cdktn.stringToHclTerraform(this._startingPosition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starting_position_timestamp: {
        value: cdktn.stringToHclTerraform(this._startingPositionTimestamp),
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
      topics: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._topics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tumbling_window_in_seconds: {
        value: cdktn.numberToHclTerraform(this._tumblingWindowInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_resource_timeout_for_propagation: {
        value: cdktn.booleanToHclTerraform(this._useResourceTimeoutForPropagation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      amazon_managed_kafka_event_source_config: {
        value: tfEventSourceMappingAmazonManagedKafkaEventSourceConfigPropertyToHclTerraform(this._amazonManagedKafkaEventSourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigPropertyList",
      },
      destination_config: {
        value: tfEventSourceMappingDestinationConfigPropertyToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventSourceMapping.DestinationConfigPropertyList",
      },
      document_db_event_source_config: {
        value: tfEventSourceMappingDocumentDbEventSourceConfigPropertyToHclTerraform(this._documentDbEventSourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventSourceMapping.DocumentDbEventSourceConfigPropertyList",
      },
      filter_criteria: {
        value: tfEventSourceMappingFilterCriteriaPropertyToHclTerraform(this._filterCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventSourceMapping.FilterCriteriaPropertyList",
      },
      metrics_config: {
        value: tfEventSourceMappingMetricsConfigPropertyToHclTerraform(this._metricsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventSourceMapping.MetricsConfigPropertyList",
      },
      provisioned_poller_config: {
        value: tfEventSourceMappingProvisionedPollerConfigPropertyToHclTerraform(this._provisionedPollerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventSourceMapping.ProvisionedPollerConfigPropertyList",
      },
      scaling_config: {
        value: tfEventSourceMappingScalingConfigPropertyToHclTerraform(this._scalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventSourceMapping.ScalingConfigPropertyList",
      },
      self_managed_event_source: {
        value: tfEventSourceMappingSelfManagedEventSourcePropertyToHclTerraform(this._selfManagedEventSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventSourceMapping.SelfManagedEventSourcePropertyList",
      },
      self_managed_kafka_event_source_config: {
        value: tfEventSourceMappingSelfManagedKafkaEventSourceConfigPropertyToHclTerraform(this._selfManagedKafkaEventSourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEventSourceMapping.SelfManagedKafkaEventSourceConfigPropertyList",
      },
      source_access_configuration: {
        value: cdktn.listMapperHcl(tfEventSourceMappingSourceAccessConfigurationPropertyToHclTerraform, true)(this._sourceAccessConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfEventSourceMapping.SourceAccessConfigurationPropertyList",
      },
      timeouts: {
        value: tfEventSourceMappingTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfEventSourceMapping.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyToTerraform(struct?: TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyToTerraform(struct?: TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToTerraform(struct?: TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyOutputReference | TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_record_format: cdktn.stringToTerraform(struct!.eventRecordFormat),
    schema_registry_uri: cdktn.stringToTerraform(struct!.schemaRegistryUri),
    access_config: cdktn.listMapper(tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyToTerraform, true)(struct!.accessConfig),
    schema_validation_config: cdktn.listMapper(tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyToTerraform, true)(struct!.schemaValidationConfig),
  }
}


export function tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyOutputReference | TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_record_format: {
      value: cdktn.stringToHclTerraform(struct!.eventRecordFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_uri: {
      value: cdktn.stringToHclTerraform(struct!.schemaRegistryUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_config: {
      value: cdktn.listMapperHcl(tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyToHclTerraform, true)(struct!.accessConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyList",
    },
    schema_validation_config: {
      value: cdktn.listMapperHcl(tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyToHclTerraform, true)(struct!.schemaValidationConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingAmazonManagedKafkaEventSourceConfigPropertyToTerraform(struct?: TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigPropertyOutputReference | TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consumer_group_id: cdktn.stringToTerraform(struct!.consumerGroupId),
    schema_registry_config: tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToTerraform(struct!.schemaRegistryConfig),
  }
}


export function tfEventSourceMappingAmazonManagedKafkaEventSourceConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigPropertyOutputReference | TfEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consumer_group_id: {
      value: cdktn.stringToHclTerraform(struct!.consumerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_config: {
      value: tfEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToHclTerraform(struct!.schemaRegistryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingOnFailurePropertyToTerraform(struct?: TfEventSourceMapping.OnFailurePropertyOutputReference | TfEventSourceMapping.OnFailureProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
  }
}


export function tfEventSourceMappingOnFailurePropertyToHclTerraform(struct?: TfEventSourceMapping.OnFailurePropertyOutputReference | TfEventSourceMapping.OnFailureProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingDestinationConfigPropertyToTerraform(struct?: TfEventSourceMapping.DestinationConfigPropertyOutputReference | TfEventSourceMapping.DestinationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_failure: tfEventSourceMappingOnFailurePropertyToTerraform(struct!.onFailure),
  }
}


export function tfEventSourceMappingDestinationConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.DestinationConfigPropertyOutputReference | TfEventSourceMapping.DestinationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_failure: {
      value: tfEventSourceMappingOnFailurePropertyToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "OnFailurePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingDocumentDbEventSourceConfigPropertyToTerraform(struct?: TfEventSourceMapping.DocumentDbEventSourceConfigPropertyOutputReference | TfEventSourceMapping.DocumentDbEventSourceConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection_name: cdktn.stringToTerraform(struct!.collectionName),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    full_document: cdktn.stringToTerraform(struct!.fullDocument),
  }
}


export function tfEventSourceMappingDocumentDbEventSourceConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.DocumentDbEventSourceConfigPropertyOutputReference | TfEventSourceMapping.DocumentDbEventSourceConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection_name: {
      value: cdktn.stringToHclTerraform(struct!.collectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_document: {
      value: cdktn.stringToHclTerraform(struct!.fullDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingFilterPropertyToTerraform(struct?: TfEventSourceMapping.FilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function tfEventSourceMappingFilterPropertyToHclTerraform(struct?: TfEventSourceMapping.FilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingFilterCriteriaPropertyToTerraform(struct?: TfEventSourceMapping.FilterCriteriaPropertyOutputReference | TfEventSourceMapping.FilterCriteriaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.listMapper(tfEventSourceMappingFilterPropertyToTerraform, true)(struct!.filter),
  }
}


export function tfEventSourceMappingFilterCriteriaPropertyToHclTerraform(struct?: TfEventSourceMapping.FilterCriteriaPropertyOutputReference | TfEventSourceMapping.FilterCriteriaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.listMapperHcl(tfEventSourceMappingFilterPropertyToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "set",
      storageClassType: "FilterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingMetricsConfigPropertyToTerraform(struct?: TfEventSourceMapping.MetricsConfigPropertyOutputReference | TfEventSourceMapping.MetricsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metrics),
  }
}


export function tfEventSourceMappingMetricsConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.MetricsConfigPropertyOutputReference | TfEventSourceMapping.MetricsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingProvisionedPollerConfigPropertyToTerraform(struct?: TfEventSourceMapping.ProvisionedPollerConfigPropertyOutputReference | TfEventSourceMapping.ProvisionedPollerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_pollers: cdktn.numberToTerraform(struct!.maximumPollers),
    minimum_pollers: cdktn.numberToTerraform(struct!.minimumPollers),
    poller_group_name: cdktn.stringToTerraform(struct!.pollerGroupName),
  }
}


export function tfEventSourceMappingProvisionedPollerConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.ProvisionedPollerConfigPropertyOutputReference | TfEventSourceMapping.ProvisionedPollerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_pollers: {
      value: cdktn.numberToHclTerraform(struct!.maximumPollers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_pollers: {
      value: cdktn.numberToHclTerraform(struct!.minimumPollers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poller_group_name: {
      value: cdktn.stringToHclTerraform(struct!.pollerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingScalingConfigPropertyToTerraform(struct?: TfEventSourceMapping.ScalingConfigPropertyOutputReference | TfEventSourceMapping.ScalingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_concurrency: cdktn.numberToTerraform(struct!.maximumConcurrency),
  }
}


export function tfEventSourceMappingScalingConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.ScalingConfigPropertyOutputReference | TfEventSourceMapping.ScalingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_concurrency: {
      value: cdktn.numberToHclTerraform(struct!.maximumConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingSelfManagedEventSourcePropertyToTerraform(struct?: TfEventSourceMapping.SelfManagedEventSourcePropertyOutputReference | TfEventSourceMapping.SelfManagedEventSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoints: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.endpoints),
  }
}


export function tfEventSourceMappingSelfManagedEventSourcePropertyToHclTerraform(struct?: TfEventSourceMapping.SelfManagedEventSourcePropertyOutputReference | TfEventSourceMapping.SelfManagedEventSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoints: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.endpoints),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyToTerraform(struct?: TfEventSourceMapping.SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyToTerraform(struct?: TfEventSourceMapping.SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToTerraform(struct?: TfEventSourceMapping.SelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyOutputReference | TfEventSourceMapping.SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_record_format: cdktn.stringToTerraform(struct!.eventRecordFormat),
    schema_registry_uri: cdktn.stringToTerraform(struct!.schemaRegistryUri),
    access_config: cdktn.listMapper(tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyToTerraform, true)(struct!.accessConfig),
    schema_validation_config: cdktn.listMapper(tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyToTerraform, true)(struct!.schemaValidationConfig),
  }
}


export function tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.SelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyOutputReference | TfEventSourceMapping.SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_record_format: {
      value: cdktn.stringToHclTerraform(struct!.eventRecordFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_uri: {
      value: cdktn.stringToHclTerraform(struct!.schemaRegistryUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_config: {
      value: cdktn.listMapperHcl(tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyToHclTerraform, true)(struct!.accessConfig),
      isBlock: true,
      type: "set",
      storageClassType: "SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyList",
    },
    schema_validation_config: {
      value: cdktn.listMapperHcl(tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyToHclTerraform, true)(struct!.schemaValidationConfig),
      isBlock: true,
      type: "set",
      storageClassType: "SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingSelfManagedKafkaEventSourceConfigPropertyToTerraform(struct?: TfEventSourceMapping.SelfManagedKafkaEventSourceConfigPropertyOutputReference | TfEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consumer_group_id: cdktn.stringToTerraform(struct!.consumerGroupId),
    schema_registry_config: tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToTerraform(struct!.schemaRegistryConfig),
  }
}


export function tfEventSourceMappingSelfManagedKafkaEventSourceConfigPropertyToHclTerraform(struct?: TfEventSourceMapping.SelfManagedKafkaEventSourceConfigPropertyOutputReference | TfEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consumer_group_id: {
      value: cdktn.stringToHclTerraform(struct!.consumerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_config: {
      value: tfEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToHclTerraform(struct!.schemaRegistryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingSourceAccessConfigurationPropertyToTerraform(struct?: TfEventSourceMapping.SourceAccessConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function tfEventSourceMappingSourceAccessConfigurationPropertyToHclTerraform(struct?: TfEventSourceMapping.SourceAccessConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEventSourceMappingTimeoutsPropertyToTerraform(struct?: TfEventSourceMapping.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfEventSourceMappingTimeoutsPropertyToHclTerraform(struct?: TfEventSourceMapping.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfEventSourceMapping {
export interface AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#type TfEventSourceMapping#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#uri TfEventSourceMapping#uri}
  */
  readonly uri?: string;
}
export class AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyOutputReference {
    return new AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#attribute TfEventSourceMapping#attribute}
  */
  readonly attribute?: string;
}
export class AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyOutputReference {
    return new AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#event_record_format TfEventSourceMapping#event_record_format}
  */
  readonly eventRecordFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#schema_registry_uri TfEventSourceMapping#schema_registry_uri}
  */
  readonly schemaRegistryUri?: string;
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#access_config TfEventSourceMapping#access_config}
  */
  readonly accessConfig?: AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty[] | cdktn.IResolvable;
  /**
  * schema_validation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#schema_validation_config TfEventSourceMapping#schema_validation_config}
  */
  readonly schemaValidationConfig?: AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty[] | cdktn.IResolvable;
}
export class AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventRecordFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventRecordFormat = this._eventRecordFormat;
    }
    if (this._schemaRegistryUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryUri = this._schemaRegistryUri;
    }
    if (this._accessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfig = this._accessConfig?.internalValue;
    }
    if (this._schemaValidationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaValidationConfig = this._schemaValidationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventRecordFormat = undefined;
      this._schemaRegistryUri = undefined;
      this._accessConfig.internalValue = undefined;
      this._schemaValidationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventRecordFormat = value.eventRecordFormat;
      this._schemaRegistryUri = value.schemaRegistryUri;
      this._accessConfig.internalValue = value.accessConfig;
      this._schemaValidationConfig.internalValue = value.schemaValidationConfig;
    }
  }

  // event_record_format - computed: false, optional: true, required: false
  private _eventRecordFormat?: string; 
  public get eventRecordFormat() {
    return this.getStringAttribute('event_record_format');
  }
  public set eventRecordFormat(value: string) {
    this._eventRecordFormat = value;
  }
  public resetEventRecordFormat() {
    this._eventRecordFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRecordFormatInput() {
    return this._eventRecordFormat;
  }

  // schema_registry_uri - computed: false, optional: true, required: false
  private _schemaRegistryUri?: string; 
  public get schemaRegistryUri() {
    return this.getStringAttribute('schema_registry_uri');
  }
  public set schemaRegistryUri(value: string) {
    this._schemaRegistryUri = value;
  }
  public resetSchemaRegistryUri() {
    this._schemaRegistryUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryUriInput() {
    return this._schemaRegistryUri;
  }

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyList(this, "access_config", true);
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty[] | cdktn.IResolvable) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // schema_validation_config - computed: false, optional: true, required: false
  private _schemaValidationConfig = new AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyList(this, "schema_validation_config", true);
  public get schemaValidationConfig() {
    return this._schemaValidationConfig;
  }
  public putSchemaValidationConfig(value: AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty[] | cdktn.IResolvable) {
    this._schemaValidationConfig.internalValue = value;
  }
  public resetSchemaValidationConfig() {
    this._schemaValidationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaValidationConfigInput() {
    return this._schemaValidationConfig.internalValue;
  }
}
export interface AmazonManagedKafkaEventSourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#consumer_group_id TfEventSourceMapping#consumer_group_id}
  */
  readonly consumerGroupId?: string;
  /**
  * schema_registry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#schema_registry_config TfEventSourceMapping#schema_registry_config}
  */
  readonly schemaRegistryConfig?: AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigProperty;
}
export class AmazonManagedKafkaEventSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmazonManagedKafkaEventSourceConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupId = this._consumerGroupId;
    }
    if (this._schemaRegistryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryConfig = this._schemaRegistryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmazonManagedKafkaEventSourceConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerGroupId = undefined;
      this._schemaRegistryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerGroupId = value.consumerGroupId;
      this._schemaRegistryConfig.internalValue = value.schemaRegistryConfig;
    }
  }

  // consumer_group_id - computed: true, optional: true, required: false
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  public resetConsumerGroupId() {
    this._consumerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }

  // schema_registry_config - computed: false, optional: true, required: false
  private _schemaRegistryConfig = new AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyOutputReference(this, "schema_registry_config");
  public get schemaRegistryConfig() {
    return this._schemaRegistryConfig;
  }
  public putSchemaRegistryConfig(value: AmazonManagedKafkaEventSourceConfigSchemaRegistryConfigProperty) {
    this._schemaRegistryConfig.internalValue = value;
  }
  public resetSchemaRegistryConfig() {
    this._schemaRegistryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConfigInput() {
    return this._schemaRegistryConfig.internalValue;
  }
}
export interface OnFailureProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#destination_arn TfEventSourceMapping#destination_arn}
  */
  readonly destinationArn: string;
}
export class OnFailurePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnFailureProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnFailureProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationArn = value.destinationArn;
    }
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
}
export interface DestinationConfigProperty {
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#on_failure TfEventSourceMapping#on_failure}
  */
  readonly onFailure?: OnFailureProperty;
}
export class DestinationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DestinationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onFailure.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onFailure.internalValue = value.onFailure;
    }
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new OnFailurePropertyOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: OnFailureProperty) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }
}
export interface DocumentDbEventSourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#collection_name TfEventSourceMapping#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#database_name TfEventSourceMapping#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#full_document TfEventSourceMapping#full_document}
  */
  readonly fullDocument?: string;
}
export class DocumentDbEventSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentDbEventSourceConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._fullDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullDocument = this._fullDocument;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentDbEventSourceConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectionName = undefined;
      this._databaseName = undefined;
      this._fullDocument = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collectionName = value.collectionName;
      this._databaseName = value.databaseName;
      this._fullDocument = value.fullDocument;
    }
  }

  // collection_name - computed: false, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
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

  // full_document - computed: false, optional: true, required: false
  private _fullDocument?: string; 
  public get fullDocument() {
    return this.getStringAttribute('full_document');
  }
  public set fullDocument(value: string) {
    this._fullDocument = value;
  }
  public resetFullDocument() {
    this._fullDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDocumentInput() {
    return this._fullDocument;
  }
}
export interface FilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#pattern TfEventSourceMapping#pattern}
  */
  readonly pattern?: string;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class FilterPropertyList extends cdktn.ComplexList {
  public internalValue? : FilterProperty[] | cdktn.IResolvable

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
  public get(index: number): FilterPropertyOutputReference {
    return new FilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilterCriteriaProperty {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#filter TfEventSourceMapping#filter}
  */
  readonly filter?: FilterProperty[] | cdktn.IResolvable;
}
export class FilterCriteriaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterCriteriaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterCriteriaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new FilterPropertyList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: FilterProperty[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface MetricsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#metrics TfEventSourceMapping#metrics}
  */
  readonly metrics: string[];
}
export class MetricsConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricsConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricsConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metrics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metrics = value.metrics;
    }
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics?: string[]; 
  public get metrics() {
    return cdktn.Fn.tolist(this.getListAttribute('metrics'));
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }
}
export interface ProvisionedPollerConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#maximum_pollers TfEventSourceMapping#maximum_pollers}
  */
  readonly maximumPollers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#minimum_pollers TfEventSourceMapping#minimum_pollers}
  */
  readonly minimumPollers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#poller_group_name TfEventSourceMapping#poller_group_name}
  */
  readonly pollerGroupName?: string;
}
export class ProvisionedPollerConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProvisionedPollerConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumPollers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPollers = this._maximumPollers;
    }
    if (this._minimumPollers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPollers = this._minimumPollers;
    }
    if (this._pollerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollerGroupName = this._pollerGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProvisionedPollerConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumPollers = undefined;
      this._minimumPollers = undefined;
      this._pollerGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumPollers = value.maximumPollers;
      this._minimumPollers = value.minimumPollers;
      this._pollerGroupName = value.pollerGroupName;
    }
  }

  // maximum_pollers - computed: true, optional: true, required: false
  private _maximumPollers?: number; 
  public get maximumPollers() {
    return this.getNumberAttribute('maximum_pollers');
  }
  public set maximumPollers(value: number) {
    this._maximumPollers = value;
  }
  public resetMaximumPollers() {
    this._maximumPollers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPollersInput() {
    return this._maximumPollers;
  }

  // minimum_pollers - computed: true, optional: true, required: false
  private _minimumPollers?: number; 
  public get minimumPollers() {
    return this.getNumberAttribute('minimum_pollers');
  }
  public set minimumPollers(value: number) {
    this._minimumPollers = value;
  }
  public resetMinimumPollers() {
    this._minimumPollers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPollersInput() {
    return this._minimumPollers;
  }

  // poller_group_name - computed: true, optional: true, required: false
  private _pollerGroupName?: string; 
  public get pollerGroupName() {
    return this.getStringAttribute('poller_group_name');
  }
  public set pollerGroupName(value: string) {
    this._pollerGroupName = value;
  }
  public resetPollerGroupName() {
    this._pollerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollerGroupNameInput() {
    return this._pollerGroupName;
  }
}
export interface ScalingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#maximum_concurrency TfEventSourceMapping#maximum_concurrency}
  */
  readonly maximumConcurrency?: number;
}
export class ScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScalingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumConcurrency = this._maximumConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScalingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumConcurrency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumConcurrency = value.maximumConcurrency;
    }
  }

  // maximum_concurrency - computed: false, optional: true, required: false
  private _maximumConcurrency?: number; 
  public get maximumConcurrency() {
    return this.getNumberAttribute('maximum_concurrency');
  }
  public set maximumConcurrency(value: number) {
    this._maximumConcurrency = value;
  }
  public resetMaximumConcurrency() {
    this._maximumConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrencyInput() {
    return this._maximumConcurrency;
  }
}
export interface SelfManagedEventSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#endpoints TfEventSourceMapping#endpoints}
  */
  readonly endpoints: { [key: string]: string };
}
export class SelfManagedEventSourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SelfManagedEventSourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfManagedEventSourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoints = value.endpoints;
    }
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: { [key: string]: string }; 
  public get endpoints() {
    return this.getStringMapAttribute('endpoints');
  }
  public set endpoints(value: { [key: string]: string }) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }
}
export interface SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#type TfEventSourceMapping#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#uri TfEventSourceMapping#uri}
  */
  readonly uri?: string;
}
export class SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyOutputReference {
    return new SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#attribute TfEventSourceMapping#attribute}
  */
  readonly attribute?: string;
}
export class SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyOutputReference {
    return new SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#event_record_format TfEventSourceMapping#event_record_format}
  */
  readonly eventRecordFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#schema_registry_uri TfEventSourceMapping#schema_registry_uri}
  */
  readonly schemaRegistryUri?: string;
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#access_config TfEventSourceMapping#access_config}
  */
  readonly accessConfig?: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty[] | cdktn.IResolvable;
  /**
  * schema_validation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#schema_validation_config TfEventSourceMapping#schema_validation_config}
  */
  readonly schemaValidationConfig?: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty[] | cdktn.IResolvable;
}
export class SelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventRecordFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventRecordFormat = this._eventRecordFormat;
    }
    if (this._schemaRegistryUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryUri = this._schemaRegistryUri;
    }
    if (this._accessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfig = this._accessConfig?.internalValue;
    }
    if (this._schemaValidationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaValidationConfig = this._schemaValidationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventRecordFormat = undefined;
      this._schemaRegistryUri = undefined;
      this._accessConfig.internalValue = undefined;
      this._schemaValidationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventRecordFormat = value.eventRecordFormat;
      this._schemaRegistryUri = value.schemaRegistryUri;
      this._accessConfig.internalValue = value.accessConfig;
      this._schemaValidationConfig.internalValue = value.schemaValidationConfig;
    }
  }

  // event_record_format - computed: false, optional: true, required: false
  private _eventRecordFormat?: string; 
  public get eventRecordFormat() {
    return this.getStringAttribute('event_record_format');
  }
  public set eventRecordFormat(value: string) {
    this._eventRecordFormat = value;
  }
  public resetEventRecordFormat() {
    this._eventRecordFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRecordFormatInput() {
    return this._eventRecordFormat;
  }

  // schema_registry_uri - computed: false, optional: true, required: false
  private _schemaRegistryUri?: string; 
  public get schemaRegistryUri() {
    return this.getStringAttribute('schema_registry_uri');
  }
  public set schemaRegistryUri(value: string) {
    this._schemaRegistryUri = value;
  }
  public resetSchemaRegistryUri() {
    this._schemaRegistryUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryUriInput() {
    return this._schemaRegistryUri;
  }

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigPropertyList(this, "access_config", true);
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigProperty[] | cdktn.IResolvable) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // schema_validation_config - computed: false, optional: true, required: false
  private _schemaValidationConfig = new SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigPropertyList(this, "schema_validation_config", true);
  public get schemaValidationConfig() {
    return this._schemaValidationConfig;
  }
  public putSchemaValidationConfig(value: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigProperty[] | cdktn.IResolvable) {
    this._schemaValidationConfig.internalValue = value;
  }
  public resetSchemaValidationConfig() {
    this._schemaValidationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaValidationConfigInput() {
    return this._schemaValidationConfig.internalValue;
  }
}
export interface SelfManagedKafkaEventSourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#consumer_group_id TfEventSourceMapping#consumer_group_id}
  */
  readonly consumerGroupId?: string;
  /**
  * schema_registry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#schema_registry_config TfEventSourceMapping#schema_registry_config}
  */
  readonly schemaRegistryConfig?: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty;
}
export class SelfManagedKafkaEventSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SelfManagedKafkaEventSourceConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupId = this._consumerGroupId;
    }
    if (this._schemaRegistryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryConfig = this._schemaRegistryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfManagedKafkaEventSourceConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerGroupId = undefined;
      this._schemaRegistryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerGroupId = value.consumerGroupId;
      this._schemaRegistryConfig.internalValue = value.schemaRegistryConfig;
    }
  }

  // consumer_group_id - computed: true, optional: true, required: false
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  public resetConsumerGroupId() {
    this._consumerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }

  // schema_registry_config - computed: false, optional: true, required: false
  private _schemaRegistryConfig = new SelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyOutputReference(this, "schema_registry_config");
  public get schemaRegistryConfig() {
    return this._schemaRegistryConfig;
  }
  public putSchemaRegistryConfig(value: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty) {
    this._schemaRegistryConfig.internalValue = value;
  }
  public resetSchemaRegistryConfig() {
    this._schemaRegistryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConfigInput() {
    return this._schemaRegistryConfig.internalValue;
  }
}
export interface SourceAccessConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#type TfEventSourceMapping#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#uri TfEventSourceMapping#uri}
  */
  readonly uri: string;
}
export class SourceAccessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceAccessConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceAccessConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._uri = value.uri;
    }
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

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class SourceAccessConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : SourceAccessConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): SourceAccessConfigurationPropertyOutputReference {
    return new SourceAccessConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#create TfEventSourceMapping#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#delete TfEventSourceMapping#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_event_source_mapping#update TfEventSourceMapping#update}
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
