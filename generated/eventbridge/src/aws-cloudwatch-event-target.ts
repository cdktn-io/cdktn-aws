// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCloudwatchEventTargetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#arn AwsCloudwatchEventTarget#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#event_bus_name AwsCloudwatchEventTarget#event_bus_name}
  */
  readonly eventBusName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#force_destroy AwsCloudwatchEventTarget#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#id AwsCloudwatchEventTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#input AwsCloudwatchEventTarget#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#input_path AwsCloudwatchEventTarget#input_path}
  */
  readonly inputPath?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#region AwsCloudwatchEventTarget#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#role_arn AwsCloudwatchEventTarget#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#rule AwsCloudwatchEventTarget#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#target_id AwsCloudwatchEventTarget#target_id}
  */
  readonly targetId?: string;
  /**
  * appsync_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#appsync_target AwsCloudwatchEventTarget#appsync_target}
  */
  readonly appsyncTarget?: AwsCloudwatchEventTarget.AppsyncTargetProperty;
  /**
  * batch_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#batch_target AwsCloudwatchEventTarget#batch_target}
  */
  readonly batchTarget?: AwsCloudwatchEventTarget.BatchTargetProperty;
  /**
  * dead_letter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#dead_letter_config AwsCloudwatchEventTarget#dead_letter_config}
  */
  readonly deadLetterConfig?: AwsCloudwatchEventTarget.DeadLetterConfigProperty;
  /**
  * ecs_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#ecs_target AwsCloudwatchEventTarget#ecs_target}
  */
  readonly ecsTarget?: AwsCloudwatchEventTarget.EcsTargetProperty;
  /**
  * http_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#http_target AwsCloudwatchEventTarget#http_target}
  */
  readonly httpTarget?: AwsCloudwatchEventTarget.HttpTargetProperty;
  /**
  * input_transformer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#input_transformer AwsCloudwatchEventTarget#input_transformer}
  */
  readonly inputTransformer?: AwsCloudwatchEventTarget.InputTransformerProperty;
  /**
  * kinesis_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#kinesis_target AwsCloudwatchEventTarget#kinesis_target}
  */
  readonly kinesisTarget?: AwsCloudwatchEventTarget.KinesisTargetProperty;
  /**
  * redshift_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#redshift_target AwsCloudwatchEventTarget#redshift_target}
  */
  readonly redshiftTarget?: AwsCloudwatchEventTarget.RedshiftTargetProperty;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#retry_policy AwsCloudwatchEventTarget#retry_policy}
  */
  readonly retryPolicy?: AwsCloudwatchEventTarget.RetryPolicyProperty;
  /**
  * run_command_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#run_command_targets AwsCloudwatchEventTarget#run_command_targets}
  */
  readonly runCommandTargets?: AwsCloudwatchEventTarget.RunCommandTargetsProperty[] | cdktn.IResolvable;
  /**
  * sagemaker_pipeline_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#sagemaker_pipeline_target AwsCloudwatchEventTarget#sagemaker_pipeline_target}
  */
  readonly sagemakerPipelineTarget?: AwsCloudwatchEventTarget.SagemakerPipelineTargetProperty;
  /**
  * sqs_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#sqs_target AwsCloudwatchEventTarget#sqs_target}
  */
  readonly sqsTarget?: AwsCloudwatchEventTarget.SqsTargetProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target aws_cloudwatch_event_target}
*/
export class AwsCloudwatchEventTarget extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_event_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCloudwatchEventTarget resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCloudwatchEventTarget to import
  * @param importFromId The id of the existing AwsCloudwatchEventTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCloudwatchEventTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_event_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target aws_cloudwatch_event_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCloudwatchEventTargetConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCloudwatchEventTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_target',
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
    this._arn = config.arn;
    this._eventBusName = config.eventBusName;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._input = config.input;
    this._inputPath = config.inputPath;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._rule = config.rule;
    this._targetId = config.targetId;
    this._appsyncTarget.internalValue = config.appsyncTarget;
    this._batchTarget.internalValue = config.batchTarget;
    this._deadLetterConfig.internalValue = config.deadLetterConfig;
    this._ecsTarget.internalValue = config.ecsTarget;
    this._httpTarget.internalValue = config.httpTarget;
    this._inputTransformer.internalValue = config.inputTransformer;
    this._kinesisTarget.internalValue = config.kinesisTarget;
    this._redshiftTarget.internalValue = config.redshiftTarget;
    this._retryPolicy.internalValue = config.retryPolicy;
    this._runCommandTargets.internalValue = config.runCommandTargets;
    this._sagemakerPipelineTarget.internalValue = config.sagemakerPipelineTarget;
    this._sqsTarget.internalValue = config.sqsTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // event_bus_name - computed: false, optional: true, required: false
  private _eventBusName?: string; 
  public get eventBusName() {
    return this.getStringAttribute('event_bus_name');
  }
  public set eventBusName(value: string) {
    this._eventBusName = value;
  }
  public resetEventBusName() {
    this._eventBusName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusNameInput() {
    return this._eventBusName;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktn.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktn.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // input_path - computed: false, optional: true, required: false
  private _inputPath?: string; 
  public get inputPath() {
    return this.getStringAttribute('input_path');
  }
  public set inputPath(value: string) {
    this._inputPath = value;
  }
  public resetInputPath() {
    this._inputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPathInput() {
    return this._inputPath;
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

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // appsync_target - computed: false, optional: true, required: false
  private _appsyncTarget = new AwsCloudwatchEventTarget.AppsyncTargetPropertyOutputReference(this, "appsync_target");
  public get appsyncTarget() {
    return this._appsyncTarget;
  }
  public putAppsyncTarget(value: AwsCloudwatchEventTarget.AppsyncTargetProperty) {
    this._appsyncTarget.internalValue = value;
  }
  public resetAppsyncTarget() {
    this._appsyncTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsyncTargetInput() {
    return this._appsyncTarget.internalValue;
  }

  // batch_target - computed: false, optional: true, required: false
  private _batchTarget = new AwsCloudwatchEventTarget.BatchTargetPropertyOutputReference(this, "batch_target");
  public get batchTarget() {
    return this._batchTarget;
  }
  public putBatchTarget(value: AwsCloudwatchEventTarget.BatchTargetProperty) {
    this._batchTarget.internalValue = value;
  }
  public resetBatchTarget() {
    this._batchTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTargetInput() {
    return this._batchTarget.internalValue;
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new AwsCloudwatchEventTarget.DeadLetterConfigPropertyOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: AwsCloudwatchEventTarget.DeadLetterConfigProperty) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
  }

  // ecs_target - computed: false, optional: true, required: false
  private _ecsTarget = new AwsCloudwatchEventTarget.EcsTargetPropertyOutputReference(this, "ecs_target");
  public get ecsTarget() {
    return this._ecsTarget;
  }
  public putEcsTarget(value: AwsCloudwatchEventTarget.EcsTargetProperty) {
    this._ecsTarget.internalValue = value;
  }
  public resetEcsTarget() {
    this._ecsTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsTargetInput() {
    return this._ecsTarget.internalValue;
  }

  // http_target - computed: false, optional: true, required: false
  private _httpTarget = new AwsCloudwatchEventTarget.HttpTargetPropertyOutputReference(this, "http_target");
  public get httpTarget() {
    return this._httpTarget;
  }
  public putHttpTarget(value: AwsCloudwatchEventTarget.HttpTargetProperty) {
    this._httpTarget.internalValue = value;
  }
  public resetHttpTarget() {
    this._httpTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTargetInput() {
    return this._httpTarget.internalValue;
  }

  // input_transformer - computed: false, optional: true, required: false
  private _inputTransformer = new AwsCloudwatchEventTarget.InputTransformerPropertyOutputReference(this, "input_transformer");
  public get inputTransformer() {
    return this._inputTransformer;
  }
  public putInputTransformer(value: AwsCloudwatchEventTarget.InputTransformerProperty) {
    this._inputTransformer.internalValue = value;
  }
  public resetInputTransformer() {
    this._inputTransformer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTransformerInput() {
    return this._inputTransformer.internalValue;
  }

  // kinesis_target - computed: false, optional: true, required: false
  private _kinesisTarget = new AwsCloudwatchEventTarget.KinesisTargetPropertyOutputReference(this, "kinesis_target");
  public get kinesisTarget() {
    return this._kinesisTarget;
  }
  public putKinesisTarget(value: AwsCloudwatchEventTarget.KinesisTargetProperty) {
    this._kinesisTarget.internalValue = value;
  }
  public resetKinesisTarget() {
    this._kinesisTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisTargetInput() {
    return this._kinesisTarget.internalValue;
  }

  // redshift_target - computed: false, optional: true, required: false
  private _redshiftTarget = new AwsCloudwatchEventTarget.RedshiftTargetPropertyOutputReference(this, "redshift_target");
  public get redshiftTarget() {
    return this._redshiftTarget;
  }
  public putRedshiftTarget(value: AwsCloudwatchEventTarget.RedshiftTargetProperty) {
    this._redshiftTarget.internalValue = value;
  }
  public resetRedshiftTarget() {
    this._redshiftTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftTargetInput() {
    return this._redshiftTarget.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new AwsCloudwatchEventTarget.RetryPolicyPropertyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: AwsCloudwatchEventTarget.RetryPolicyProperty) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // run_command_targets - computed: false, optional: true, required: false
  private _runCommandTargets = new AwsCloudwatchEventTarget.RunCommandTargetsPropertyList(this, "run_command_targets", false);
  public get runCommandTargets() {
    return this._runCommandTargets;
  }
  public putRunCommandTargets(value: AwsCloudwatchEventTarget.RunCommandTargetsProperty[] | cdktn.IResolvable) {
    this._runCommandTargets.internalValue = value;
  }
  public resetRunCommandTargets() {
    this._runCommandTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCommandTargetsInput() {
    return this._runCommandTargets.internalValue;
  }

  // sagemaker_pipeline_target - computed: false, optional: true, required: false
  private _sagemakerPipelineTarget = new AwsCloudwatchEventTarget.SagemakerPipelineTargetPropertyOutputReference(this, "sagemaker_pipeline_target");
  public get sagemakerPipelineTarget() {
    return this._sagemakerPipelineTarget;
  }
  public putSagemakerPipelineTarget(value: AwsCloudwatchEventTarget.SagemakerPipelineTargetProperty) {
    this._sagemakerPipelineTarget.internalValue = value;
  }
  public resetSagemakerPipelineTarget() {
    this._sagemakerPipelineTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerPipelineTargetInput() {
    return this._sagemakerPipelineTarget.internalValue;
  }

  // sqs_target - computed: false, optional: true, required: false
  private _sqsTarget = new AwsCloudwatchEventTarget.SqsTargetPropertyOutputReference(this, "sqs_target");
  public get sqsTarget() {
    return this._sqsTarget;
  }
  public putSqsTarget(value: AwsCloudwatchEventTarget.SqsTargetProperty) {
    this._sqsTarget.internalValue = value;
  }
  public resetSqsTarget() {
    this._sqsTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsTargetInput() {
    return this._sqsTarget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktn.stringToTerraform(this._arn),
      event_bus_name: cdktn.stringToTerraform(this._eventBusName),
      force_destroy: cdktn.booleanToTerraform(this._forceDestroy),
      id: cdktn.stringToTerraform(this._id),
      input: cdktn.stringToTerraform(this._input),
      input_path: cdktn.stringToTerraform(this._inputPath),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      rule: cdktn.stringToTerraform(this._rule),
      target_id: cdktn.stringToTerraform(this._targetId),
      appsync_target: awsCloudwatchEventTargetAppsyncTargetPropertyToTerraform(this._appsyncTarget.internalValue),
      batch_target: awsCloudwatchEventTargetBatchTargetPropertyToTerraform(this._batchTarget.internalValue),
      dead_letter_config: awsCloudwatchEventTargetDeadLetterConfigPropertyToTerraform(this._deadLetterConfig.internalValue),
      ecs_target: awsCloudwatchEventTargetEcsTargetPropertyToTerraform(this._ecsTarget.internalValue),
      http_target: awsCloudwatchEventTargetHttpTargetPropertyToTerraform(this._httpTarget.internalValue),
      input_transformer: awsCloudwatchEventTargetInputTransformerPropertyToTerraform(this._inputTransformer.internalValue),
      kinesis_target: awsCloudwatchEventTargetKinesisTargetPropertyToTerraform(this._kinesisTarget.internalValue),
      redshift_target: awsCloudwatchEventTargetRedshiftTargetPropertyToTerraform(this._redshiftTarget.internalValue),
      retry_policy: awsCloudwatchEventTargetRetryPolicyPropertyToTerraform(this._retryPolicy.internalValue),
      run_command_targets: cdktn.listMapper(awsCloudwatchEventTargetRunCommandTargetsPropertyToTerraform, true)(this._runCommandTargets.internalValue),
      sagemaker_pipeline_target: awsCloudwatchEventTargetSagemakerPipelineTargetPropertyToTerraform(this._sagemakerPipelineTarget.internalValue),
      sqs_target: awsCloudwatchEventTargetSqsTargetPropertyToTerraform(this._sqsTarget.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktn.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_bus_name: {
        value: cdktn.stringToHclTerraform(this._eventBusName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktn.booleanToHclTerraform(this._forceDestroy),
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
      input: {
        value: cdktn.stringToHclTerraform(this._input),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_path: {
        value: cdktn.stringToHclTerraform(this._inputPath),
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
      rule: {
        value: cdktn.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktn.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appsync_target: {
        value: awsCloudwatchEventTargetAppsyncTargetPropertyToHclTerraform(this._appsyncTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.AppsyncTargetPropertyList",
      },
      batch_target: {
        value: awsCloudwatchEventTargetBatchTargetPropertyToHclTerraform(this._batchTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.BatchTargetPropertyList",
      },
      dead_letter_config: {
        value: awsCloudwatchEventTargetDeadLetterConfigPropertyToHclTerraform(this._deadLetterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.DeadLetterConfigPropertyList",
      },
      ecs_target: {
        value: awsCloudwatchEventTargetEcsTargetPropertyToHclTerraform(this._ecsTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.EcsTargetPropertyList",
      },
      http_target: {
        value: awsCloudwatchEventTargetHttpTargetPropertyToHclTerraform(this._httpTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.HttpTargetPropertyList",
      },
      input_transformer: {
        value: awsCloudwatchEventTargetInputTransformerPropertyToHclTerraform(this._inputTransformer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.InputTransformerPropertyList",
      },
      kinesis_target: {
        value: awsCloudwatchEventTargetKinesisTargetPropertyToHclTerraform(this._kinesisTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.KinesisTargetPropertyList",
      },
      redshift_target: {
        value: awsCloudwatchEventTargetRedshiftTargetPropertyToHclTerraform(this._redshiftTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.RedshiftTargetPropertyList",
      },
      retry_policy: {
        value: awsCloudwatchEventTargetRetryPolicyPropertyToHclTerraform(this._retryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.RetryPolicyPropertyList",
      },
      run_command_targets: {
        value: cdktn.listMapperHcl(awsCloudwatchEventTargetRunCommandTargetsPropertyToHclTerraform, true)(this._runCommandTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.RunCommandTargetsPropertyList",
      },
      sagemaker_pipeline_target: {
        value: awsCloudwatchEventTargetSagemakerPipelineTargetPropertyToHclTerraform(this._sagemakerPipelineTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.SagemakerPipelineTargetPropertyList",
      },
      sqs_target: {
        value: awsCloudwatchEventTargetSqsTargetPropertyToHclTerraform(this._sqsTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudwatchEventTarget.SqsTargetPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCloudwatchEventTargetAppsyncTargetPropertyToTerraform(struct?: AwsCloudwatchEventTarget.AppsyncTargetPropertyOutputReference | AwsCloudwatchEventTarget.AppsyncTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    graphql_operation: cdktn.stringToTerraform(struct!.graphqlOperation),
  }
}


export function awsCloudwatchEventTargetAppsyncTargetPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.AppsyncTargetPropertyOutputReference | AwsCloudwatchEventTarget.AppsyncTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    graphql_operation: {
      value: cdktn.stringToHclTerraform(struct!.graphqlOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetBatchTargetPropertyToTerraform(struct?: AwsCloudwatchEventTarget.BatchTargetPropertyOutputReference | AwsCloudwatchEventTarget.BatchTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    array_size: cdktn.numberToTerraform(struct!.arraySize),
    job_attempts: cdktn.numberToTerraform(struct!.jobAttempts),
    job_definition: cdktn.stringToTerraform(struct!.jobDefinition),
    job_name: cdktn.stringToTerraform(struct!.jobName),
  }
}


export function awsCloudwatchEventTargetBatchTargetPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.BatchTargetPropertyOutputReference | AwsCloudwatchEventTarget.BatchTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    array_size: {
      value: cdktn.numberToHclTerraform(struct!.arraySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_attempts: {
      value: cdktn.numberToHclTerraform(struct!.jobAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_definition: {
      value: cdktn.stringToHclTerraform(struct!.jobDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_name: {
      value: cdktn.stringToHclTerraform(struct!.jobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetDeadLetterConfigPropertyToTerraform(struct?: AwsCloudwatchEventTarget.DeadLetterConfigPropertyOutputReference | AwsCloudwatchEventTarget.DeadLetterConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function awsCloudwatchEventTargetDeadLetterConfigPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.DeadLetterConfigPropertyOutputReference | AwsCloudwatchEventTarget.DeadLetterConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetCapacityProviderStrategyPropertyToTerraform(struct?: AwsCloudwatchEventTarget.CapacityProviderStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: cdktn.numberToTerraform(struct!.base),
    capacity_provider: cdktn.stringToTerraform(struct!.capacityProvider),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function awsCloudwatchEventTargetCapacityProviderStrategyPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.CapacityProviderStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: cdktn.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_provider: {
      value: cdktn.stringToHclTerraform(struct!.capacityProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetNetworkConfigurationPropertyToTerraform(struct?: AwsCloudwatchEventTarget.NetworkConfigurationPropertyOutputReference | AwsCloudwatchEventTarget.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assign_public_ip: cdktn.booleanToTerraform(struct!.assignPublicIp),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function awsCloudwatchEventTargetNetworkConfigurationPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.NetworkConfigurationPropertyOutputReference | AwsCloudwatchEventTarget.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktn.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetOrderedPlacementStrategyPropertyToTerraform(struct?: AwsCloudwatchEventTarget.OrderedPlacementStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsCloudwatchEventTargetOrderedPlacementStrategyPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.OrderedPlacementStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
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


export function awsCloudwatchEventTargetPlacementConstraintPropertyToTerraform(struct?: AwsCloudwatchEventTarget.PlacementConstraintProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsCloudwatchEventTargetPlacementConstraintPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.PlacementConstraintProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
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


export function awsCloudwatchEventTargetEcsTargetPropertyToTerraform(struct?: AwsCloudwatchEventTarget.EcsTargetPropertyOutputReference | AwsCloudwatchEventTarget.EcsTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_ecs_managed_tags: cdktn.booleanToTerraform(struct!.enableEcsManagedTags),
    enable_execute_command: cdktn.booleanToTerraform(struct!.enableExecuteCommand),
    group: cdktn.stringToTerraform(struct!.group),
    launch_type: cdktn.stringToTerraform(struct!.launchType),
    platform_version: cdktn.stringToTerraform(struct!.platformVersion),
    propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    task_count: cdktn.numberToTerraform(struct!.taskCount),
    task_definition_arn: cdktn.stringToTerraform(struct!.taskDefinitionArn),
    capacity_provider_strategy: cdktn.listMapper(awsCloudwatchEventTargetCapacityProviderStrategyPropertyToTerraform, true)(struct!.capacityProviderStrategy),
    network_configuration: awsCloudwatchEventTargetNetworkConfigurationPropertyToTerraform(struct!.networkConfiguration),
    ordered_placement_strategy: cdktn.listMapper(awsCloudwatchEventTargetOrderedPlacementStrategyPropertyToTerraform, true)(struct!.orderedPlacementStrategy),
    placement_constraint: cdktn.listMapper(awsCloudwatchEventTargetPlacementConstraintPropertyToTerraform, true)(struct!.placementConstraint),
  }
}


export function awsCloudwatchEventTargetEcsTargetPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.EcsTargetPropertyOutputReference | AwsCloudwatchEventTarget.EcsTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_ecs_managed_tags: {
      value: cdktn.booleanToHclTerraform(struct!.enableEcsManagedTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_execute_command: {
      value: cdktn.booleanToHclTerraform(struct!.enableExecuteCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group: {
      value: cdktn.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_type: {
      value: cdktn.stringToHclTerraform(struct!.launchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform_version: {
      value: cdktn.stringToHclTerraform(struct!.platformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate_tags: {
      value: cdktn.stringToHclTerraform(struct!.propagateTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    task_count: {
      value: cdktn.numberToHclTerraform(struct!.taskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_definition_arn: {
      value: cdktn.stringToHclTerraform(struct!.taskDefinitionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_provider_strategy: {
      value: cdktn.listMapperHcl(awsCloudwatchEventTargetCapacityProviderStrategyPropertyToHclTerraform, true)(struct!.capacityProviderStrategy),
      isBlock: true,
      type: "set",
      storageClassType: "CapacityProviderStrategyPropertyList",
    },
    network_configuration: {
      value: awsCloudwatchEventTargetNetworkConfigurationPropertyToHclTerraform(struct!.networkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkConfigurationPropertyList",
    },
    ordered_placement_strategy: {
      value: cdktn.listMapperHcl(awsCloudwatchEventTargetOrderedPlacementStrategyPropertyToHclTerraform, true)(struct!.orderedPlacementStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "OrderedPlacementStrategyPropertyList",
    },
    placement_constraint: {
      value: cdktn.listMapperHcl(awsCloudwatchEventTargetPlacementConstraintPropertyToHclTerraform, true)(struct!.placementConstraint),
      isBlock: true,
      type: "set",
      storageClassType: "PlacementConstraintPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetHttpTargetPropertyToTerraform(struct?: AwsCloudwatchEventTarget.HttpTargetPropertyOutputReference | AwsCloudwatchEventTarget.HttpTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headerParameters),
    path_parameter_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathParameterValues),
    query_string_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.queryStringParameters),
  }
}


export function awsCloudwatchEventTargetHttpTargetPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.HttpTargetPropertyOutputReference | AwsCloudwatchEventTarget.HttpTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headerParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path_parameter_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathParameterValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_string_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.queryStringParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetInputTransformerPropertyToTerraform(struct?: AwsCloudwatchEventTarget.InputTransformerPropertyOutputReference | AwsCloudwatchEventTarget.InputTransformerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_paths: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.inputPaths),
    input_template: cdktn.stringToTerraform(struct!.inputTemplate),
  }
}


export function awsCloudwatchEventTargetInputTransformerPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.InputTransformerPropertyOutputReference | AwsCloudwatchEventTarget.InputTransformerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_paths: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.inputPaths),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    input_template: {
      value: cdktn.stringToHclTerraform(struct!.inputTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetKinesisTargetPropertyToTerraform(struct?: AwsCloudwatchEventTarget.KinesisTargetPropertyOutputReference | AwsCloudwatchEventTarget.KinesisTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition_key_path: cdktn.stringToTerraform(struct!.partitionKeyPath),
  }
}


export function awsCloudwatchEventTargetKinesisTargetPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.KinesisTargetPropertyOutputReference | AwsCloudwatchEventTarget.KinesisTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition_key_path: {
      value: cdktn.stringToHclTerraform(struct!.partitionKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetRedshiftTargetPropertyToTerraform(struct?: AwsCloudwatchEventTarget.RedshiftTargetPropertyOutputReference | AwsCloudwatchEventTarget.RedshiftTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    db_user: cdktn.stringToTerraform(struct!.dbUser),
    secrets_manager_arn: cdktn.stringToTerraform(struct!.secretsManagerArn),
    sql: cdktn.stringToTerraform(struct!.sql),
    statement_name: cdktn.stringToTerraform(struct!.statementName),
    with_event: cdktn.booleanToTerraform(struct!.withEvent),
  }
}


export function awsCloudwatchEventTargetRedshiftTargetPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.RedshiftTargetPropertyOutputReference | AwsCloudwatchEventTarget.RedshiftTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_user: {
      value: cdktn.stringToHclTerraform(struct!.dbUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statement_name: {
      value: cdktn.stringToHclTerraform(struct!.statementName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_event: {
      value: cdktn.booleanToHclTerraform(struct!.withEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetRetryPolicyPropertyToTerraform(struct?: AwsCloudwatchEventTarget.RetryPolicyPropertyOutputReference | AwsCloudwatchEventTarget.RetryPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_event_age_in_seconds: cdktn.numberToTerraform(struct!.maximumEventAgeInSeconds),
    maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function awsCloudwatchEventTargetRetryPolicyPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.RetryPolicyPropertyOutputReference | AwsCloudwatchEventTarget.RetryPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_event_age_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumEventAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetRunCommandTargetsPropertyToTerraform(struct?: AwsCloudwatchEventTarget.RunCommandTargetsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCloudwatchEventTargetRunCommandTargetsPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.RunCommandTargetsProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetPipelineParameterListPropertyToTerraform(struct?: AwsCloudwatchEventTarget.PipelineParameterListProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsCloudwatchEventTargetPipelineParameterListPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.PipelineParameterListProperty | cdktn.IResolvable): any {
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


export function awsCloudwatchEventTargetSagemakerPipelineTargetPropertyToTerraform(struct?: AwsCloudwatchEventTarget.SagemakerPipelineTargetPropertyOutputReference | AwsCloudwatchEventTarget.SagemakerPipelineTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pipeline_parameter_list: cdktn.listMapper(awsCloudwatchEventTargetPipelineParameterListPropertyToTerraform, true)(struct!.pipelineParameterList),
  }
}


export function awsCloudwatchEventTargetSagemakerPipelineTargetPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.SagemakerPipelineTargetPropertyOutputReference | AwsCloudwatchEventTarget.SagemakerPipelineTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pipeline_parameter_list: {
      value: cdktn.listMapperHcl(awsCloudwatchEventTargetPipelineParameterListPropertyToHclTerraform, true)(struct!.pipelineParameterList),
      isBlock: true,
      type: "set",
      storageClassType: "PipelineParameterListPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCloudwatchEventTargetSqsTargetPropertyToTerraform(struct?: AwsCloudwatchEventTarget.SqsTargetPropertyOutputReference | AwsCloudwatchEventTarget.SqsTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_group_id: cdktn.stringToTerraform(struct!.messageGroupId),
  }
}


export function awsCloudwatchEventTargetSqsTargetPropertyToHclTerraform(struct?: AwsCloudwatchEventTarget.SqsTargetPropertyOutputReference | AwsCloudwatchEventTarget.SqsTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_group_id: {
      value: cdktn.stringToHclTerraform(struct!.messageGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCloudwatchEventTarget {
export interface AppsyncTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#graphql_operation AwsCloudwatchEventTarget#graphql_operation}
  */
  readonly graphqlOperation?: string;
}
export class AppsyncTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graphqlOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlOperation = this._graphqlOperation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._graphqlOperation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._graphqlOperation = value.graphqlOperation;
    }
  }

  // graphql_operation - computed: false, optional: true, required: false
  private _graphqlOperation?: string; 
  public get graphqlOperation() {
    return this.getStringAttribute('graphql_operation');
  }
  public set graphqlOperation(value: string) {
    this._graphqlOperation = value;
  }
  public resetGraphqlOperation() {
    this._graphqlOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlOperationInput() {
    return this._graphqlOperation;
  }
}
export interface BatchTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#array_size AwsCloudwatchEventTarget#array_size}
  */
  readonly arraySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#job_attempts AwsCloudwatchEventTarget#job_attempts}
  */
  readonly jobAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#job_definition AwsCloudwatchEventTarget#job_definition}
  */
  readonly jobDefinition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#job_name AwsCloudwatchEventTarget#job_name}
  */
  readonly jobName: string;
}
export class BatchTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arraySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.arraySize = this._arraySize;
    }
    if (this._jobAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobAttempts = this._jobAttempts;
    }
    if (this._jobDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobDefinition = this._jobDefinition;
    }
    if (this._jobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobName = this._jobName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arraySize = undefined;
      this._jobAttempts = undefined;
      this._jobDefinition = undefined;
      this._jobName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arraySize = value.arraySize;
      this._jobAttempts = value.jobAttempts;
      this._jobDefinition = value.jobDefinition;
      this._jobName = value.jobName;
    }
  }

  // array_size - computed: false, optional: true, required: false
  private _arraySize?: number; 
  public get arraySize() {
    return this.getNumberAttribute('array_size');
  }
  public set arraySize(value: number) {
    this._arraySize = value;
  }
  public resetArraySize() {
    this._arraySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arraySizeInput() {
    return this._arraySize;
  }

  // job_attempts - computed: false, optional: true, required: false
  private _jobAttempts?: number; 
  public get jobAttempts() {
    return this.getNumberAttribute('job_attempts');
  }
  public set jobAttempts(value: number) {
    this._jobAttempts = value;
  }
  public resetJobAttempts() {
    this._jobAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobAttemptsInput() {
    return this._jobAttempts;
  }

  // job_definition - computed: false, optional: false, required: true
  private _jobDefinition?: string; 
  public get jobDefinition() {
    return this.getStringAttribute('job_definition');
  }
  public set jobDefinition(value: string) {
    this._jobDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDefinitionInput() {
    return this._jobDefinition;
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }
}
export interface DeadLetterConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#arn AwsCloudwatchEventTarget#arn}
  */
  readonly arn?: string;
}
export class DeadLetterConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeadLetterConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeadLetterConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface CapacityProviderStrategyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#base AwsCloudwatchEventTarget#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#capacity_provider AwsCloudwatchEventTarget#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#weight AwsCloudwatchEventTarget#weight}
  */
  readonly weight?: number;
}
export class CapacityProviderStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CapacityProviderStrategyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._capacityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProvider = this._capacityProvider;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityProviderStrategyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._capacityProvider = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._capacityProvider = value.capacityProvider;
      this._weight = value.weight;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // capacity_provider - computed: false, optional: false, required: true
  private _capacityProvider?: string; 
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }
  public set capacityProvider(value: string) {
    this._capacityProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderInput() {
    return this._capacityProvider;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class CapacityProviderStrategyPropertyList extends cdktn.ComplexList {
  public internalValue? : CapacityProviderStrategyProperty[] | cdktn.IResolvable

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
  public get(index: number): CapacityProviderStrategyPropertyOutputReference {
    return new CapacityProviderStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#assign_public_ip AwsCloudwatchEventTarget#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#security_groups AwsCloudwatchEventTarget#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#subnets AwsCloudwatchEventTarget#subnets}
  */
  readonly subnets: string[];
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktn.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktn.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface OrderedPlacementStrategyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#field AwsCloudwatchEventTarget#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#type AwsCloudwatchEventTarget#type}
  */
  readonly type: string;
}
export class OrderedPlacementStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OrderedPlacementStrategyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrderedPlacementStrategyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class OrderedPlacementStrategyPropertyList extends cdktn.ComplexList {
  public internalValue? : OrderedPlacementStrategyProperty[] | cdktn.IResolvable

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
  public get(index: number): OrderedPlacementStrategyPropertyOutputReference {
    return new OrderedPlacementStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlacementConstraintProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#expression AwsCloudwatchEventTarget#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#type AwsCloudwatchEventTarget#type}
  */
  readonly type: string;
}
export class PlacementConstraintPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PlacementConstraintProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlacementConstraintProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._type = value.type;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

export class PlacementConstraintPropertyList extends cdktn.ComplexList {
  public internalValue? : PlacementConstraintProperty[] | cdktn.IResolvable

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
  public get(index: number): PlacementConstraintPropertyOutputReference {
    return new PlacementConstraintPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#enable_ecs_managed_tags AwsCloudwatchEventTarget#enable_ecs_managed_tags}
  */
  readonly enableEcsManagedTags?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#enable_execute_command AwsCloudwatchEventTarget#enable_execute_command}
  */
  readonly enableExecuteCommand?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#group AwsCloudwatchEventTarget#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#launch_type AwsCloudwatchEventTarget#launch_type}
  */
  readonly launchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#platform_version AwsCloudwatchEventTarget#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#propagate_tags AwsCloudwatchEventTarget#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#tags AwsCloudwatchEventTarget#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#task_count AwsCloudwatchEventTarget#task_count}
  */
  readonly taskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#task_definition_arn AwsCloudwatchEventTarget#task_definition_arn}
  */
  readonly taskDefinitionArn: string;
  /**
  * capacity_provider_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#capacity_provider_strategy AwsCloudwatchEventTarget#capacity_provider_strategy}
  */
  readonly capacityProviderStrategy?: CapacityProviderStrategyProperty[] | cdktn.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#network_configuration AwsCloudwatchEventTarget#network_configuration}
  */
  readonly networkConfiguration?: NetworkConfigurationProperty;
  /**
  * ordered_placement_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#ordered_placement_strategy AwsCloudwatchEventTarget#ordered_placement_strategy}
  */
  readonly orderedPlacementStrategy?: OrderedPlacementStrategyProperty[] | cdktn.IResolvable;
  /**
  * placement_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#placement_constraint AwsCloudwatchEventTarget#placement_constraint}
  */
  readonly placementConstraint?: PlacementConstraintProperty[] | cdktn.IResolvable;
}
export class EcsTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableEcsManagedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEcsManagedTags = this._enableEcsManagedTags;
    }
    if (this._enableExecuteCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExecuteCommand = this._enableExecuteCommand;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._launchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchType = this._launchType;
    }
    if (this._platformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformVersion = this._platformVersion;
    }
    if (this._propagateTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateTags = this._propagateTags;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._taskDefinitionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDefinitionArn = this._taskDefinitionArn;
    }
    if (this._capacityProviderStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProviderStrategy = this._capacityProviderStrategy?.internalValue;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    if (this._orderedPlacementStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderedPlacementStrategy = this._orderedPlacementStrategy?.internalValue;
    }
    if (this._placementConstraint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementConstraint = this._placementConstraint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableEcsManagedTags = undefined;
      this._enableExecuteCommand = undefined;
      this._group = undefined;
      this._launchType = undefined;
      this._platformVersion = undefined;
      this._propagateTags = undefined;
      this._tags = undefined;
      this._taskCount = undefined;
      this._taskDefinitionArn = undefined;
      this._capacityProviderStrategy.internalValue = undefined;
      this._networkConfiguration.internalValue = undefined;
      this._orderedPlacementStrategy.internalValue = undefined;
      this._placementConstraint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableEcsManagedTags = value.enableEcsManagedTags;
      this._enableExecuteCommand = value.enableExecuteCommand;
      this._group = value.group;
      this._launchType = value.launchType;
      this._platformVersion = value.platformVersion;
      this._propagateTags = value.propagateTags;
      this._tags = value.tags;
      this._taskCount = value.taskCount;
      this._taskDefinitionArn = value.taskDefinitionArn;
      this._capacityProviderStrategy.internalValue = value.capacityProviderStrategy;
      this._networkConfiguration.internalValue = value.networkConfiguration;
      this._orderedPlacementStrategy.internalValue = value.orderedPlacementStrategy;
      this._placementConstraint.internalValue = value.placementConstraint;
    }
  }

  // enable_ecs_managed_tags - computed: false, optional: true, required: false
  private _enableEcsManagedTags?: boolean | cdktn.IResolvable; 
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }
  public set enableEcsManagedTags(value: boolean | cdktn.IResolvable) {
    this._enableEcsManagedTags = value;
  }
  public resetEnableEcsManagedTags() {
    this._enableEcsManagedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEcsManagedTagsInput() {
    return this._enableEcsManagedTags;
  }

  // enable_execute_command - computed: false, optional: true, required: false
  private _enableExecuteCommand?: boolean | cdktn.IResolvable; 
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }
  public set enableExecuteCommand(value: boolean | cdktn.IResolvable) {
    this._enableExecuteCommand = value;
  }
  public resetEnableExecuteCommand() {
    this._enableExecuteCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExecuteCommandInput() {
    return this._enableExecuteCommand;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // launch_type - computed: false, optional: true, required: false
  private _launchType?: string; 
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  public resetLaunchType() {
    this._launchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType;
  }

  // platform_version - computed: false, optional: true, required: false
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string; 
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
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

  // task_count - computed: false, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // task_definition_arn - computed: false, optional: false, required: true
  private _taskDefinitionArn?: string; 
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }
  public set taskDefinitionArn(value: string) {
    this._taskDefinitionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionArnInput() {
    return this._taskDefinitionArn;
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy = new CapacityProviderStrategyPropertyList(this, "capacity_provider_strategy", true);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }
  public putCapacityProviderStrategy(value: CapacityProviderStrategyProperty[] | cdktn.IResolvable) {
    this._capacityProviderStrategy.internalValue = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new NetworkConfigurationPropertyOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: NetworkConfigurationProperty) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // ordered_placement_strategy - computed: false, optional: true, required: false
  private _orderedPlacementStrategy = new OrderedPlacementStrategyPropertyList(this, "ordered_placement_strategy", false);
  public get orderedPlacementStrategy() {
    return this._orderedPlacementStrategy;
  }
  public putOrderedPlacementStrategy(value: OrderedPlacementStrategyProperty[] | cdktn.IResolvable) {
    this._orderedPlacementStrategy.internalValue = value;
  }
  public resetOrderedPlacementStrategy() {
    this._orderedPlacementStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedPlacementStrategyInput() {
    return this._orderedPlacementStrategy.internalValue;
  }

  // placement_constraint - computed: false, optional: true, required: false
  private _placementConstraint = new PlacementConstraintPropertyList(this, "placement_constraint", true);
  public get placementConstraint() {
    return this._placementConstraint;
  }
  public putPlacementConstraint(value: PlacementConstraintProperty[] | cdktn.IResolvable) {
    this._placementConstraint.internalValue = value;
  }
  public resetPlacementConstraint() {
    this._placementConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintInput() {
    return this._placementConstraint.internalValue;
  }
}
export interface HttpTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#header_parameters AwsCloudwatchEventTarget#header_parameters}
  */
  readonly headerParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#path_parameter_values AwsCloudwatchEventTarget#path_parameter_values}
  */
  readonly pathParameterValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#query_string_parameters AwsCloudwatchEventTarget#query_string_parameters}
  */
  readonly queryStringParameters?: { [key: string]: string };
}
export class HttpTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerParameters = this._headerParameters;
    }
    if (this._pathParameterValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathParameterValues = this._pathParameterValues;
    }
    if (this._queryStringParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringParameters = this._queryStringParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerParameters = undefined;
      this._pathParameterValues = undefined;
      this._queryStringParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerParameters = value.headerParameters;
      this._pathParameterValues = value.pathParameterValues;
      this._queryStringParameters = value.queryStringParameters;
    }
  }

  // header_parameters - computed: false, optional: true, required: false
  private _headerParameters?: { [key: string]: string }; 
  public get headerParameters() {
    return this.getStringMapAttribute('header_parameters');
  }
  public set headerParameters(value: { [key: string]: string }) {
    this._headerParameters = value;
  }
  public resetHeaderParameters() {
    this._headerParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerParametersInput() {
    return this._headerParameters;
  }

  // path_parameter_values - computed: false, optional: true, required: false
  private _pathParameterValues?: string[]; 
  public get pathParameterValues() {
    return this.getListAttribute('path_parameter_values');
  }
  public set pathParameterValues(value: string[]) {
    this._pathParameterValues = value;
  }
  public resetPathParameterValues() {
    this._pathParameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathParameterValuesInput() {
    return this._pathParameterValues;
  }

  // query_string_parameters - computed: false, optional: true, required: false
  private _queryStringParameters?: { [key: string]: string }; 
  public get queryStringParameters() {
    return this.getStringMapAttribute('query_string_parameters');
  }
  public set queryStringParameters(value: { [key: string]: string }) {
    this._queryStringParameters = value;
  }
  public resetQueryStringParameters() {
    this._queryStringParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringParametersInput() {
    return this._queryStringParameters;
  }
}
export interface InputTransformerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#input_paths AwsCloudwatchEventTarget#input_paths}
  */
  readonly inputPaths?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#input_template AwsCloudwatchEventTarget#input_template}
  */
  readonly inputTemplate: string;
}
export class InputTransformerPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputTransformerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputPaths = this._inputPaths;
    }
    if (this._inputTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputTemplate = this._inputTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputTransformerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputPaths = undefined;
      this._inputTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputPaths = value.inputPaths;
      this._inputTemplate = value.inputTemplate;
    }
  }

  // input_paths - computed: false, optional: true, required: false
  private _inputPaths?: { [key: string]: string }; 
  public get inputPaths() {
    return this.getStringMapAttribute('input_paths');
  }
  public set inputPaths(value: { [key: string]: string }) {
    this._inputPaths = value;
  }
  public resetInputPaths() {
    this._inputPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPathsInput() {
    return this._inputPaths;
  }

  // input_template - computed: false, optional: false, required: true
  private _inputTemplate?: string; 
  public get inputTemplate() {
    return this.getStringAttribute('input_template');
  }
  public set inputTemplate(value: string) {
    this._inputTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTemplateInput() {
    return this._inputTemplate;
  }
}
export interface KinesisTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#partition_key_path AwsCloudwatchEventTarget#partition_key_path}
  */
  readonly partitionKeyPath?: string;
}
export class KinesisTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKeyPath = this._partitionKeyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionKeyPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionKeyPath = value.partitionKeyPath;
    }
  }

  // partition_key_path - computed: false, optional: true, required: false
  private _partitionKeyPath?: string; 
  public get partitionKeyPath() {
    return this.getStringAttribute('partition_key_path');
  }
  public set partitionKeyPath(value: string) {
    this._partitionKeyPath = value;
  }
  public resetPartitionKeyPath() {
    this._partitionKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyPathInput() {
    return this._partitionKeyPath;
  }
}
export interface RedshiftTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#database AwsCloudwatchEventTarget#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#db_user AwsCloudwatchEventTarget#db_user}
  */
  readonly dbUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#secrets_manager_arn AwsCloudwatchEventTarget#secrets_manager_arn}
  */
  readonly secretsManagerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#sql AwsCloudwatchEventTarget#sql}
  */
  readonly sql?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#statement_name AwsCloudwatchEventTarget#statement_name}
  */
  readonly statementName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#with_event AwsCloudwatchEventTarget#with_event}
  */
  readonly withEvent?: boolean | cdktn.IResolvable;
}
export class RedshiftTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._dbUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUser = this._dbUser;
    }
    if (this._secretsManagerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerArn = this._secretsManagerArn;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._statementName !== undefined) {
      hasAnyValues = true;
      internalValueResult.statementName = this._statementName;
    }
    if (this._withEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.withEvent = this._withEvent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._dbUser = undefined;
      this._secretsManagerArn = undefined;
      this._sql = undefined;
      this._statementName = undefined;
      this._withEvent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._dbUser = value.dbUser;
      this._secretsManagerArn = value.secretsManagerArn;
      this._sql = value.sql;
      this._statementName = value.statementName;
      this._withEvent = value.withEvent;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // db_user - computed: false, optional: true, required: false
  private _dbUser?: string; 
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }
  public resetDbUser() {
    this._dbUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserInput() {
    return this._dbUser;
  }

  // secrets_manager_arn - computed: false, optional: true, required: false
  private _secretsManagerArn?: string; 
  public get secretsManagerArn() {
    return this.getStringAttribute('secrets_manager_arn');
  }
  public set secretsManagerArn(value: string) {
    this._secretsManagerArn = value;
  }
  public resetSecretsManagerArn() {
    this._secretsManagerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerArnInput() {
    return this._secretsManagerArn;
  }

  // sql - computed: false, optional: true, required: false
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  public resetSql() {
    this._sql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // statement_name - computed: false, optional: true, required: false
  private _statementName?: string; 
  public get statementName() {
    return this.getStringAttribute('statement_name');
  }
  public set statementName(value: string) {
    this._statementName = value;
  }
  public resetStatementName() {
    this._statementName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementNameInput() {
    return this._statementName;
  }

  // with_event - computed: false, optional: true, required: false
  private _withEvent?: boolean | cdktn.IResolvable; 
  public get withEvent() {
    return this.getBooleanAttribute('with_event');
  }
  public set withEvent(value: boolean | cdktn.IResolvable) {
    this._withEvent = value;
  }
  public resetWithEvent() {
    this._withEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withEventInput() {
    return this._withEvent;
  }
}
export interface RetryPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#maximum_event_age_in_seconds AwsCloudwatchEventTarget#maximum_event_age_in_seconds}
  */
  readonly maximumEventAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#maximum_retry_attempts AwsCloudwatchEventTarget#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}
export class RetryPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetryPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumEventAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEventAgeInSeconds = this._maximumEventAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetryPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumEventAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumEventAgeInSeconds = value.maximumEventAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_event_age_in_seconds - computed: false, optional: true, required: false
  private _maximumEventAgeInSeconds?: number; 
  public get maximumEventAgeInSeconds() {
    return this.getNumberAttribute('maximum_event_age_in_seconds');
  }
  public set maximumEventAgeInSeconds(value: number) {
    this._maximumEventAgeInSeconds = value;
  }
  public resetMaximumEventAgeInSeconds() {
    this._maximumEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEventAgeInSecondsInput() {
    return this._maximumEventAgeInSeconds;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
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
}
export interface RunCommandTargetsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#key AwsCloudwatchEventTarget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#values AwsCloudwatchEventTarget#values}
  */
  readonly values: string[];
}
export class RunCommandTargetsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RunCommandTargetsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RunCommandTargetsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class RunCommandTargetsPropertyList extends cdktn.ComplexList {
  public internalValue? : RunCommandTargetsProperty[] | cdktn.IResolvable

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
  public get(index: number): RunCommandTargetsPropertyOutputReference {
    return new RunCommandTargetsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineParameterListProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#name AwsCloudwatchEventTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#value AwsCloudwatchEventTarget#value}
  */
  readonly value: string;
}
export class PipelineParameterListPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipelineParameterListProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PipelineParameterListProperty | cdktn.IResolvable | undefined) {
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

export class PipelineParameterListPropertyList extends cdktn.ComplexList {
  public internalValue? : PipelineParameterListProperty[] | cdktn.IResolvable

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
  public get(index: number): PipelineParameterListPropertyOutputReference {
    return new PipelineParameterListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerPipelineTargetProperty {
  /**
  * pipeline_parameter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#pipeline_parameter_list AwsCloudwatchEventTarget#pipeline_parameter_list}
  */
  readonly pipelineParameterList?: PipelineParameterListProperty[] | cdktn.IResolvable;
}
export class SagemakerPipelineTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerPipelineTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineParameterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineParameterList = this._pipelineParameterList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerPipelineTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pipelineParameterList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pipelineParameterList.internalValue = value.pipelineParameterList;
    }
  }

  // pipeline_parameter_list - computed: false, optional: true, required: false
  private _pipelineParameterList = new PipelineParameterListPropertyList(this, "pipeline_parameter_list", true);
  public get pipelineParameterList() {
    return this._pipelineParameterList;
  }
  public putPipelineParameterList(value: PipelineParameterListProperty[] | cdktn.IResolvable) {
    this._pipelineParameterList.internalValue = value;
  }
  public resetPipelineParameterList() {
    this._pipelineParameterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParameterListInput() {
    return this._pipelineParameterList.internalValue;
  }
}
export interface SqsTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_target#message_group_id AwsCloudwatchEventTarget#message_group_id}
  */
  readonly messageGroupId?: string;
}
export class SqsTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqsTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroupId = this._messageGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqsTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageGroupId = value.messageGroupId;
    }
  }

  // message_group_id - computed: false, optional: true, required: false
  private _messageGroupId?: string; 
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }
  public set messageGroupId(value: string) {
    this._messageGroupId = value;
  }
  public resetMessageGroupId() {
    this._messageGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupIdInput() {
    return this._messageGroupId;
  }
}
}
