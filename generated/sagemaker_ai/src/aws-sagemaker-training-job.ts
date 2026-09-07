// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsTrainingJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether to delete model packages in the configured model package group when destroying the training job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#delete_model_packages_on_destroy AwsTrainingJob#delete_model_packages_on_destroy}
  */
  readonly deleteModelPackagesOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Whether to delete detached VPC ENIs that SageMaker may leave behind when destroying the training job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#delete_vpc_enis_on_destroy AwsTrainingJob#delete_vpc_enis_on_destroy}
  */
  readonly deleteVpcEnisOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#enable_inter_container_traffic_encryption AwsTrainingJob#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#enable_managed_spot_training AwsTrainingJob#enable_managed_spot_training}
  */
  readonly enableManagedSpotTraining?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#enable_network_isolation AwsTrainingJob#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#environment AwsTrainingJob#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#hyper_parameters AwsTrainingJob#hyper_parameters}
  */
  readonly hyperParameters?: { [key: string]: string };
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#region AwsTrainingJob#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#role_arn AwsTrainingJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#tags AwsTrainingJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#training_job_name AwsTrainingJob#training_job_name}
  */
  readonly trainingJobName: string;
  /**
  * algorithm_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#algorithm_specification AwsTrainingJob#algorithm_specification}
  */
  readonly algorithmSpecification?: AwsTrainingJob.AlgorithmSpecificationProperty[] | cdktn.IResolvable;
  /**
  * checkpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#checkpoint_config AwsTrainingJob#checkpoint_config}
  */
  readonly checkpointConfig?: AwsTrainingJob.CheckpointConfigProperty[] | cdktn.IResolvable;
  /**
  * debug_hook_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#debug_hook_config AwsTrainingJob#debug_hook_config}
  */
  readonly debugHookConfig?: AwsTrainingJob.DebugHookConfigProperty[] | cdktn.IResolvable;
  /**
  * debug_rule_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#debug_rule_configurations AwsTrainingJob#debug_rule_configurations}
  */
  readonly debugRuleConfigurations?: AwsTrainingJob.DebugRuleConfigurationsProperty[] | cdktn.IResolvable;
  /**
  * experiment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#experiment_config AwsTrainingJob#experiment_config}
  */
  readonly experimentConfig?: AwsTrainingJob.ExperimentConfigProperty[] | cdktn.IResolvable;
  /**
  * infra_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#infra_check_config AwsTrainingJob#infra_check_config}
  */
  readonly infraCheckConfig?: AwsTrainingJob.InfraCheckConfigProperty[] | cdktn.IResolvable;
  /**
  * input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#input_data_config AwsTrainingJob#input_data_config}
  */
  readonly inputDataConfig?: AwsTrainingJob.InputDataConfigProperty[] | cdktn.IResolvable;
  /**
  * mlflow_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#mlflow_config AwsTrainingJob#mlflow_config}
  */
  readonly mlflowConfig?: AwsTrainingJob.MlflowConfigProperty[] | cdktn.IResolvable;
  /**
  * model_package_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#model_package_config AwsTrainingJob#model_package_config}
  */
  readonly modelPackageConfig?: AwsTrainingJob.ModelPackageConfigProperty[] | cdktn.IResolvable;
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#output_data_config AwsTrainingJob#output_data_config}
  */
  readonly outputDataConfig?: AwsTrainingJob.OutputDataConfigProperty[] | cdktn.IResolvable;
  /**
  * profiler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#profiler_config AwsTrainingJob#profiler_config}
  */
  readonly profilerConfig?: AwsTrainingJob.ProfilerConfigProperty[] | cdktn.IResolvable;
  /**
  * profiler_rule_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#profiler_rule_configurations AwsTrainingJob#profiler_rule_configurations}
  */
  readonly profilerRuleConfigurations?: AwsTrainingJob.ProfilerRuleConfigurationsProperty[] | cdktn.IResolvable;
  /**
  * remote_debug_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#remote_debug_config AwsTrainingJob#remote_debug_config}
  */
  readonly remoteDebugConfig?: AwsTrainingJob.RemoteDebugConfigProperty[] | cdktn.IResolvable;
  /**
  * resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#resource_config AwsTrainingJob#resource_config}
  */
  readonly resourceConfig?: AwsTrainingJob.ResourceConfigProperty[] | cdktn.IResolvable;
  /**
  * retry_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#retry_strategy AwsTrainingJob#retry_strategy}
  */
  readonly retryStrategy?: AwsTrainingJob.RetryStrategyProperty[] | cdktn.IResolvable;
  /**
  * serverless_job_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#serverless_job_config AwsTrainingJob#serverless_job_config}
  */
  readonly serverlessJobConfig?: AwsTrainingJob.ServerlessJobConfigProperty[] | cdktn.IResolvable;
  /**
  * session_chaining_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#session_chaining_config AwsTrainingJob#session_chaining_config}
  */
  readonly sessionChainingConfig?: AwsTrainingJob.SessionChainingConfigProperty[] | cdktn.IResolvable;
  /**
  * stopping_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#stopping_condition AwsTrainingJob#stopping_condition}
  */
  readonly stoppingCondition?: AwsTrainingJob.StoppingConditionProperty[] | cdktn.IResolvable;
  /**
  * tensor_board_output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#tensor_board_output_config AwsTrainingJob#tensor_board_output_config}
  */
  readonly tensorBoardOutputConfig?: AwsTrainingJob.TensorBoardOutputConfigProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#timeouts AwsTrainingJob#timeouts}
  */
  readonly timeouts?: AwsTrainingJob.TimeoutsProperty;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#vpc_config AwsTrainingJob#vpc_config}
  */
  readonly vpcConfig?: AwsTrainingJob.VpcConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job aws_sagemaker_training_job}
*/
export class AwsTrainingJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_training_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsTrainingJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTrainingJob to import
  * @param importFromId The id of the existing AwsTrainingJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTrainingJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_training_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job aws_sagemaker_training_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTrainingJobConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTrainingJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_training_job',
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
    this._deleteModelPackagesOnDestroy = config.deleteModelPackagesOnDestroy;
    this._deleteVpcEnisOnDestroy = config.deleteVpcEnisOnDestroy;
    this._enableInterContainerTrafficEncryption = config.enableInterContainerTrafficEncryption;
    this._enableManagedSpotTraining = config.enableManagedSpotTraining;
    this._enableNetworkIsolation = config.enableNetworkIsolation;
    this._environment = config.environment;
    this._hyperParameters = config.hyperParameters;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._trainingJobName = config.trainingJobName;
    this._algorithmSpecification.internalValue = config.algorithmSpecification;
    this._checkpointConfig.internalValue = config.checkpointConfig;
    this._debugHookConfig.internalValue = config.debugHookConfig;
    this._debugRuleConfigurations.internalValue = config.debugRuleConfigurations;
    this._experimentConfig.internalValue = config.experimentConfig;
    this._infraCheckConfig.internalValue = config.infraCheckConfig;
    this._inputDataConfig.internalValue = config.inputDataConfig;
    this._mlflowConfig.internalValue = config.mlflowConfig;
    this._modelPackageConfig.internalValue = config.modelPackageConfig;
    this._outputDataConfig.internalValue = config.outputDataConfig;
    this._profilerConfig.internalValue = config.profilerConfig;
    this._profilerRuleConfigurations.internalValue = config.profilerRuleConfigurations;
    this._remoteDebugConfig.internalValue = config.remoteDebugConfig;
    this._resourceConfig.internalValue = config.resourceConfig;
    this._retryStrategy.internalValue = config.retryStrategy;
    this._serverlessJobConfig.internalValue = config.serverlessJobConfig;
    this._sessionChainingConfig.internalValue = config.sessionChainingConfig;
    this._stoppingCondition.internalValue = config.stoppingCondition;
    this._tensorBoardOutputConfig.internalValue = config.tensorBoardOutputConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delete_model_packages_on_destroy - computed: false, optional: true, required: false
  private _deleteModelPackagesOnDestroy?: boolean | cdktn.IResolvable; 
  public get deleteModelPackagesOnDestroy() {
    return this.getBooleanAttribute('delete_model_packages_on_destroy');
  }
  public set deleteModelPackagesOnDestroy(value: boolean | cdktn.IResolvable) {
    this._deleteModelPackagesOnDestroy = value;
  }
  public resetDeleteModelPackagesOnDestroy() {
    this._deleteModelPackagesOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModelPackagesOnDestroyInput() {
    return this._deleteModelPackagesOnDestroy;
  }

  // delete_vpc_enis_on_destroy - computed: false, optional: true, required: false
  private _deleteVpcEnisOnDestroy?: boolean | cdktn.IResolvable; 
  public get deleteVpcEnisOnDestroy() {
    return this.getBooleanAttribute('delete_vpc_enis_on_destroy');
  }
  public set deleteVpcEnisOnDestroy(value: boolean | cdktn.IResolvable) {
    this._deleteVpcEnisOnDestroy = value;
  }
  public resetDeleteVpcEnisOnDestroy() {
    this._deleteVpcEnisOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVpcEnisOnDestroyInput() {
    return this._deleteVpcEnisOnDestroy;
  }

  // enable_inter_container_traffic_encryption - computed: true, optional: true, required: false
  private _enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable; 
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }
  public set enableInterContainerTrafficEncryption(value: boolean | cdktn.IResolvable) {
    this._enableInterContainerTrafficEncryption = value;
  }
  public resetEnableInterContainerTrafficEncryption() {
    this._enableInterContainerTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterContainerTrafficEncryptionInput() {
    return this._enableInterContainerTrafficEncryption;
  }

  // enable_managed_spot_training - computed: true, optional: true, required: false
  private _enableManagedSpotTraining?: boolean | cdktn.IResolvable; 
  public get enableManagedSpotTraining() {
    return this.getBooleanAttribute('enable_managed_spot_training');
  }
  public set enableManagedSpotTraining(value: boolean | cdktn.IResolvable) {
    this._enableManagedSpotTraining = value;
  }
  public resetEnableManagedSpotTraining() {
    this._enableManagedSpotTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagedSpotTrainingInput() {
    return this._enableManagedSpotTraining;
  }

  // enable_network_isolation - computed: true, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // hyper_parameters - computed: false, optional: true, required: false
  private _hyperParameters?: { [key: string]: string }; 
  public get hyperParameters() {
    return this.getStringMapAttribute('hyper_parameters');
  }
  public set hyperParameters(value: { [key: string]: string }) {
    this._hyperParameters = value;
  }
  public resetHyperParameters() {
    this._hyperParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParametersInput() {
    return this._hyperParameters;
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

  // training_job_name - computed: false, optional: false, required: true
  private _trainingJobName?: string; 
  public get trainingJobName() {
    return this.getStringAttribute('training_job_name');
  }
  public set trainingJobName(value: string) {
    this._trainingJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobNameInput() {
    return this._trainingJobName;
  }

  // algorithm_specification - computed: false, optional: true, required: false
  private _algorithmSpecification = new AwsTrainingJob.AlgorithmSpecificationPropertyList(this, "algorithm_specification", false);
  public get algorithmSpecification() {
    return this._algorithmSpecification;
  }
  public putAlgorithmSpecification(value: AwsTrainingJob.AlgorithmSpecificationProperty[] | cdktn.IResolvable) {
    this._algorithmSpecification.internalValue = value;
  }
  public resetAlgorithmSpecification() {
    this._algorithmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmSpecificationInput() {
    return this._algorithmSpecification.internalValue;
  }

  // checkpoint_config - computed: false, optional: true, required: false
  private _checkpointConfig = new AwsTrainingJob.CheckpointConfigPropertyList(this, "checkpoint_config", false);
  public get checkpointConfig() {
    return this._checkpointConfig;
  }
  public putCheckpointConfig(value: AwsTrainingJob.CheckpointConfigProperty[] | cdktn.IResolvable) {
    this._checkpointConfig.internalValue = value;
  }
  public resetCheckpointConfig() {
    this._checkpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigInput() {
    return this._checkpointConfig.internalValue;
  }

  // debug_hook_config - computed: false, optional: true, required: false
  private _debugHookConfig = new AwsTrainingJob.DebugHookConfigPropertyList(this, "debug_hook_config", false);
  public get debugHookConfig() {
    return this._debugHookConfig;
  }
  public putDebugHookConfig(value: AwsTrainingJob.DebugHookConfigProperty[] | cdktn.IResolvable) {
    this._debugHookConfig.internalValue = value;
  }
  public resetDebugHookConfig() {
    this._debugHookConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugHookConfigInput() {
    return this._debugHookConfig.internalValue;
  }

  // debug_rule_configurations - computed: false, optional: true, required: false
  private _debugRuleConfigurations = new AwsTrainingJob.DebugRuleConfigurationsPropertyList(this, "debug_rule_configurations", false);
  public get debugRuleConfigurations() {
    return this._debugRuleConfigurations;
  }
  public putDebugRuleConfigurations(value: AwsTrainingJob.DebugRuleConfigurationsProperty[] | cdktn.IResolvable) {
    this._debugRuleConfigurations.internalValue = value;
  }
  public resetDebugRuleConfigurations() {
    this._debugRuleConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugRuleConfigurationsInput() {
    return this._debugRuleConfigurations.internalValue;
  }

  // experiment_config - computed: false, optional: true, required: false
  private _experimentConfig = new AwsTrainingJob.ExperimentConfigPropertyList(this, "experiment_config", false);
  public get experimentConfig() {
    return this._experimentConfig;
  }
  public putExperimentConfig(value: AwsTrainingJob.ExperimentConfigProperty[] | cdktn.IResolvable) {
    this._experimentConfig.internalValue = value;
  }
  public resetExperimentConfig() {
    this._experimentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentConfigInput() {
    return this._experimentConfig.internalValue;
  }

  // infra_check_config - computed: false, optional: true, required: false
  private _infraCheckConfig = new AwsTrainingJob.InfraCheckConfigPropertyList(this, "infra_check_config", false);
  public get infraCheckConfig() {
    return this._infraCheckConfig;
  }
  public putInfraCheckConfig(value: AwsTrainingJob.InfraCheckConfigProperty[] | cdktn.IResolvable) {
    this._infraCheckConfig.internalValue = value;
  }
  public resetInfraCheckConfig() {
    this._infraCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraCheckConfigInput() {
    return this._infraCheckConfig.internalValue;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new AwsTrainingJob.InputDataConfigPropertyList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: AwsTrainingJob.InputDataConfigProperty[] | cdktn.IResolvable) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // mlflow_config - computed: false, optional: true, required: false
  private _mlflowConfig = new AwsTrainingJob.MlflowConfigPropertyList(this, "mlflow_config", false);
  public get mlflowConfig() {
    return this._mlflowConfig;
  }
  public putMlflowConfig(value: AwsTrainingJob.MlflowConfigProperty[] | cdktn.IResolvable) {
    this._mlflowConfig.internalValue = value;
  }
  public resetMlflowConfig() {
    this._mlflowConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowConfigInput() {
    return this._mlflowConfig.internalValue;
  }

  // model_package_config - computed: false, optional: true, required: false
  private _modelPackageConfig = new AwsTrainingJob.ModelPackageConfigPropertyList(this, "model_package_config", false);
  public get modelPackageConfig() {
    return this._modelPackageConfig;
  }
  public putModelPackageConfig(value: AwsTrainingJob.ModelPackageConfigProperty[] | cdktn.IResolvable) {
    this._modelPackageConfig.internalValue = value;
  }
  public resetModelPackageConfig() {
    this._modelPackageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageConfigInput() {
    return this._modelPackageConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new AwsTrainingJob.OutputDataConfigPropertyList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: AwsTrainingJob.OutputDataConfigProperty[] | cdktn.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // profiler_config - computed: false, optional: true, required: false
  private _profilerConfig = new AwsTrainingJob.ProfilerConfigPropertyList(this, "profiler_config", false);
  public get profilerConfig() {
    return this._profilerConfig;
  }
  public putProfilerConfig(value: AwsTrainingJob.ProfilerConfigProperty[] | cdktn.IResolvable) {
    this._profilerConfig.internalValue = value;
  }
  public resetProfilerConfig() {
    this._profilerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilerConfigInput() {
    return this._profilerConfig.internalValue;
  }

  // profiler_rule_configurations - computed: false, optional: true, required: false
  private _profilerRuleConfigurations = new AwsTrainingJob.ProfilerRuleConfigurationsPropertyList(this, "profiler_rule_configurations", false);
  public get profilerRuleConfigurations() {
    return this._profilerRuleConfigurations;
  }
  public putProfilerRuleConfigurations(value: AwsTrainingJob.ProfilerRuleConfigurationsProperty[] | cdktn.IResolvable) {
    this._profilerRuleConfigurations.internalValue = value;
  }
  public resetProfilerRuleConfigurations() {
    this._profilerRuleConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilerRuleConfigurationsInput() {
    return this._profilerRuleConfigurations.internalValue;
  }

  // remote_debug_config - computed: false, optional: true, required: false
  private _remoteDebugConfig = new AwsTrainingJob.RemoteDebugConfigPropertyList(this, "remote_debug_config", false);
  public get remoteDebugConfig() {
    return this._remoteDebugConfig;
  }
  public putRemoteDebugConfig(value: AwsTrainingJob.RemoteDebugConfigProperty[] | cdktn.IResolvable) {
    this._remoteDebugConfig.internalValue = value;
  }
  public resetRemoteDebugConfig() {
    this._remoteDebugConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDebugConfigInput() {
    return this._remoteDebugConfig.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new AwsTrainingJob.ResourceConfigPropertyList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: AwsTrainingJob.ResourceConfigProperty[] | cdktn.IResolvable) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new AwsTrainingJob.RetryStrategyPropertyList(this, "retry_strategy", false);
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: AwsTrainingJob.RetryStrategyProperty[] | cdktn.IResolvable) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }

  // serverless_job_config - computed: false, optional: true, required: false
  private _serverlessJobConfig = new AwsTrainingJob.ServerlessJobConfigPropertyList(this, "serverless_job_config", false);
  public get serverlessJobConfig() {
    return this._serverlessJobConfig;
  }
  public putServerlessJobConfig(value: AwsTrainingJob.ServerlessJobConfigProperty[] | cdktn.IResolvable) {
    this._serverlessJobConfig.internalValue = value;
  }
  public resetServerlessJobConfig() {
    this._serverlessJobConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessJobConfigInput() {
    return this._serverlessJobConfig.internalValue;
  }

  // session_chaining_config - computed: false, optional: true, required: false
  private _sessionChainingConfig = new AwsTrainingJob.SessionChainingConfigPropertyList(this, "session_chaining_config", false);
  public get sessionChainingConfig() {
    return this._sessionChainingConfig;
  }
  public putSessionChainingConfig(value: AwsTrainingJob.SessionChainingConfigProperty[] | cdktn.IResolvable) {
    this._sessionChainingConfig.internalValue = value;
  }
  public resetSessionChainingConfig() {
    this._sessionChainingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionChainingConfigInput() {
    return this._sessionChainingConfig.internalValue;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new AwsTrainingJob.StoppingConditionPropertyList(this, "stopping_condition", false);
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: AwsTrainingJob.StoppingConditionProperty[] | cdktn.IResolvable) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tensor_board_output_config - computed: false, optional: true, required: false
  private _tensorBoardOutputConfig = new AwsTrainingJob.TensorBoardOutputConfigPropertyList(this, "tensor_board_output_config", false);
  public get tensorBoardOutputConfig() {
    return this._tensorBoardOutputConfig;
  }
  public putTensorBoardOutputConfig(value: AwsTrainingJob.TensorBoardOutputConfigProperty[] | cdktn.IResolvable) {
    this._tensorBoardOutputConfig.internalValue = value;
  }
  public resetTensorBoardOutputConfig() {
    this._tensorBoardOutputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorBoardOutputConfigInput() {
    return this._tensorBoardOutputConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsTrainingJob.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsTrainingJob.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new AwsTrainingJob.VpcConfigPropertyList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: AwsTrainingJob.VpcConfigProperty[] | cdktn.IResolvable) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_model_packages_on_destroy: cdktn.booleanToTerraform(this._deleteModelPackagesOnDestroy),
      delete_vpc_enis_on_destroy: cdktn.booleanToTerraform(this._deleteVpcEnisOnDestroy),
      enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(this._enableInterContainerTrafficEncryption),
      enable_managed_spot_training: cdktn.booleanToTerraform(this._enableManagedSpotTraining),
      enable_network_isolation: cdktn.booleanToTerraform(this._enableNetworkIsolation),
      environment: cdktn.hashMapper(cdktn.stringToTerraform)(this._environment),
      hyper_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._hyperParameters),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      training_job_name: cdktn.stringToTerraform(this._trainingJobName),
      algorithm_specification: cdktn.listMapper(awsTrainingJobAlgorithmSpecificationPropertyToTerraform, true)(this._algorithmSpecification.internalValue),
      checkpoint_config: cdktn.listMapper(awsTrainingJobCheckpointConfigPropertyToTerraform, true)(this._checkpointConfig.internalValue),
      debug_hook_config: cdktn.listMapper(awsTrainingJobDebugHookConfigPropertyToTerraform, true)(this._debugHookConfig.internalValue),
      debug_rule_configurations: cdktn.listMapper(awsTrainingJobDebugRuleConfigurationsPropertyToTerraform, true)(this._debugRuleConfigurations.internalValue),
      experiment_config: cdktn.listMapper(awsTrainingJobExperimentConfigPropertyToTerraform, true)(this._experimentConfig.internalValue),
      infra_check_config: cdktn.listMapper(awsTrainingJobInfraCheckConfigPropertyToTerraform, true)(this._infraCheckConfig.internalValue),
      input_data_config: cdktn.listMapper(awsTrainingJobInputDataConfigPropertyToTerraform, true)(this._inputDataConfig.internalValue),
      mlflow_config: cdktn.listMapper(awsTrainingJobMlflowConfigPropertyToTerraform, true)(this._mlflowConfig.internalValue),
      model_package_config: cdktn.listMapper(awsTrainingJobModelPackageConfigPropertyToTerraform, true)(this._modelPackageConfig.internalValue),
      output_data_config: cdktn.listMapper(awsTrainingJobOutputDataConfigPropertyToTerraform, true)(this._outputDataConfig.internalValue),
      profiler_config: cdktn.listMapper(awsTrainingJobProfilerConfigPropertyToTerraform, true)(this._profilerConfig.internalValue),
      profiler_rule_configurations: cdktn.listMapper(awsTrainingJobProfilerRuleConfigurationsPropertyToTerraform, true)(this._profilerRuleConfigurations.internalValue),
      remote_debug_config: cdktn.listMapper(awsTrainingJobRemoteDebugConfigPropertyToTerraform, true)(this._remoteDebugConfig.internalValue),
      resource_config: cdktn.listMapper(awsTrainingJobResourceConfigPropertyToTerraform, true)(this._resourceConfig.internalValue),
      retry_strategy: cdktn.listMapper(awsTrainingJobRetryStrategyPropertyToTerraform, true)(this._retryStrategy.internalValue),
      serverless_job_config: cdktn.listMapper(awsTrainingJobServerlessJobConfigPropertyToTerraform, true)(this._serverlessJobConfig.internalValue),
      session_chaining_config: cdktn.listMapper(awsTrainingJobSessionChainingConfigPropertyToTerraform, true)(this._sessionChainingConfig.internalValue),
      stopping_condition: cdktn.listMapper(awsTrainingJobStoppingConditionPropertyToTerraform, true)(this._stoppingCondition.internalValue),
      tensor_board_output_config: cdktn.listMapper(awsTrainingJobTensorBoardOutputConfigPropertyToTerraform, true)(this._tensorBoardOutputConfig.internalValue),
      timeouts: awsTrainingJobTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      vpc_config: cdktn.listMapper(awsTrainingJobVpcConfigPropertyToTerraform, true)(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_model_packages_on_destroy: {
        value: cdktn.booleanToHclTerraform(this._deleteModelPackagesOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_vpc_enis_on_destroy: {
        value: cdktn.booleanToHclTerraform(this._deleteVpcEnisOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_inter_container_traffic_encryption: {
        value: cdktn.booleanToHclTerraform(this._enableInterContainerTrafficEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_managed_spot_training: {
        value: cdktn.booleanToHclTerraform(this._enableManagedSpotTraining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_network_isolation: {
        value: cdktn.booleanToHclTerraform(this._enableNetworkIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      hyper_parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._hyperParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      training_job_name: {
        value: cdktn.stringToHclTerraform(this._trainingJobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      algorithm_specification: {
        value: cdktn.listMapperHcl(awsTrainingJobAlgorithmSpecificationPropertyToHclTerraform, true)(this._algorithmSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.AlgorithmSpecificationPropertyList",
      },
      checkpoint_config: {
        value: cdktn.listMapperHcl(awsTrainingJobCheckpointConfigPropertyToHclTerraform, true)(this._checkpointConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.CheckpointConfigPropertyList",
      },
      debug_hook_config: {
        value: cdktn.listMapperHcl(awsTrainingJobDebugHookConfigPropertyToHclTerraform, true)(this._debugHookConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.DebugHookConfigPropertyList",
      },
      debug_rule_configurations: {
        value: cdktn.listMapperHcl(awsTrainingJobDebugRuleConfigurationsPropertyToHclTerraform, true)(this._debugRuleConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.DebugRuleConfigurationsPropertyList",
      },
      experiment_config: {
        value: cdktn.listMapperHcl(awsTrainingJobExperimentConfigPropertyToHclTerraform, true)(this._experimentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.ExperimentConfigPropertyList",
      },
      infra_check_config: {
        value: cdktn.listMapperHcl(awsTrainingJobInfraCheckConfigPropertyToHclTerraform, true)(this._infraCheckConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.InfraCheckConfigPropertyList",
      },
      input_data_config: {
        value: cdktn.listMapperHcl(awsTrainingJobInputDataConfigPropertyToHclTerraform, true)(this._inputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.InputDataConfigPropertyList",
      },
      mlflow_config: {
        value: cdktn.listMapperHcl(awsTrainingJobMlflowConfigPropertyToHclTerraform, true)(this._mlflowConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.MlflowConfigPropertyList",
      },
      model_package_config: {
        value: cdktn.listMapperHcl(awsTrainingJobModelPackageConfigPropertyToHclTerraform, true)(this._modelPackageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.ModelPackageConfigPropertyList",
      },
      output_data_config: {
        value: cdktn.listMapperHcl(awsTrainingJobOutputDataConfigPropertyToHclTerraform, true)(this._outputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.OutputDataConfigPropertyList",
      },
      profiler_config: {
        value: cdktn.listMapperHcl(awsTrainingJobProfilerConfigPropertyToHclTerraform, true)(this._profilerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.ProfilerConfigPropertyList",
      },
      profiler_rule_configurations: {
        value: cdktn.listMapperHcl(awsTrainingJobProfilerRuleConfigurationsPropertyToHclTerraform, true)(this._profilerRuleConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.ProfilerRuleConfigurationsPropertyList",
      },
      remote_debug_config: {
        value: cdktn.listMapperHcl(awsTrainingJobRemoteDebugConfigPropertyToHclTerraform, true)(this._remoteDebugConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.RemoteDebugConfigPropertyList",
      },
      resource_config: {
        value: cdktn.listMapperHcl(awsTrainingJobResourceConfigPropertyToHclTerraform, true)(this._resourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.ResourceConfigPropertyList",
      },
      retry_strategy: {
        value: cdktn.listMapperHcl(awsTrainingJobRetryStrategyPropertyToHclTerraform, true)(this._retryStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.RetryStrategyPropertyList",
      },
      serverless_job_config: {
        value: cdktn.listMapperHcl(awsTrainingJobServerlessJobConfigPropertyToHclTerraform, true)(this._serverlessJobConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.ServerlessJobConfigPropertyList",
      },
      session_chaining_config: {
        value: cdktn.listMapperHcl(awsTrainingJobSessionChainingConfigPropertyToHclTerraform, true)(this._sessionChainingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.SessionChainingConfigPropertyList",
      },
      stopping_condition: {
        value: cdktn.listMapperHcl(awsTrainingJobStoppingConditionPropertyToHclTerraform, true)(this._stoppingCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.StoppingConditionPropertyList",
      },
      tensor_board_output_config: {
        value: cdktn.listMapperHcl(awsTrainingJobTensorBoardOutputConfigPropertyToHclTerraform, true)(this._tensorBoardOutputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.TensorBoardOutputConfigPropertyList",
      },
      timeouts: {
        value: awsTrainingJobTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsTrainingJob.TimeoutsProperty",
      },
      vpc_config: {
        value: cdktn.listMapperHcl(awsTrainingJobVpcConfigPropertyToHclTerraform, true)(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTrainingJob.VpcConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsTrainingJobMetricDefinitionsPropertyToTerraform(struct?: AwsTrainingJob.MetricDefinitionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function awsTrainingJobMetricDefinitionsPropertyToHclTerraform(struct?: AwsTrainingJob.MetricDefinitionsProperty | cdktn.IResolvable): any {
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
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobTrainingRepositoryAuthConfigPropertyToTerraform(struct?: AwsTrainingJob.TrainingRepositoryAuthConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    training_repository_credentials_provider_arn: cdktn.stringToTerraform(struct!.trainingRepositoryCredentialsProviderArn),
  }
}


export function awsTrainingJobTrainingRepositoryAuthConfigPropertyToHclTerraform(struct?: AwsTrainingJob.TrainingRepositoryAuthConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    training_repository_credentials_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingRepositoryCredentialsProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobTrainingImageConfigPropertyToTerraform(struct?: AwsTrainingJob.TrainingImageConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    training_repository_access_mode: cdktn.stringToTerraform(struct!.trainingRepositoryAccessMode),
    training_repository_auth_config: cdktn.listMapper(awsTrainingJobTrainingRepositoryAuthConfigPropertyToTerraform, true)(struct!.trainingRepositoryAuthConfig),
  }
}


export function awsTrainingJobTrainingImageConfigPropertyToHclTerraform(struct?: AwsTrainingJob.TrainingImageConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    training_repository_access_mode: {
      value: cdktn.stringToHclTerraform(struct!.trainingRepositoryAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_repository_auth_config: {
      value: cdktn.listMapperHcl(awsTrainingJobTrainingRepositoryAuthConfigPropertyToHclTerraform, true)(struct!.trainingRepositoryAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingRepositoryAuthConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobAlgorithmSpecificationPropertyToTerraform(struct?: AwsTrainingJob.AlgorithmSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm_name: cdktn.stringToTerraform(struct!.algorithmName),
    container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
    enable_sagemaker_metrics_time_series: cdktn.booleanToTerraform(struct!.enableSagemakerMetricsTimeSeries),
    training_image: cdktn.stringToTerraform(struct!.trainingImage),
    training_input_mode: cdktn.stringToTerraform(struct!.trainingInputMode),
    metric_definitions: cdktn.listMapper(awsTrainingJobMetricDefinitionsPropertyToTerraform, true)(struct!.metricDefinitions),
    training_image_config: cdktn.listMapper(awsTrainingJobTrainingImageConfigPropertyToTerraform, true)(struct!.trainingImageConfig),
  }
}


export function awsTrainingJobAlgorithmSpecificationPropertyToHclTerraform(struct?: AwsTrainingJob.AlgorithmSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm_name: {
      value: cdktn.stringToHclTerraform(struct!.algorithmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_arguments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_sagemaker_metrics_time_series: {
      value: cdktn.booleanToHclTerraform(struct!.enableSagemakerMetricsTimeSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    training_image: {
      value: cdktn.stringToHclTerraform(struct!.trainingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_input_mode: {
      value: cdktn.stringToHclTerraform(struct!.trainingInputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_definitions: {
      value: cdktn.listMapperHcl(awsTrainingJobMetricDefinitionsPropertyToHclTerraform, true)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "MetricDefinitionsPropertyList",
    },
    training_image_config: {
      value: cdktn.listMapperHcl(awsTrainingJobTrainingImageConfigPropertyToHclTerraform, true)(struct!.trainingImageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TrainingImageConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobCheckpointConfigPropertyToTerraform(struct?: AwsTrainingJob.CheckpointConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function awsTrainingJobCheckpointConfigPropertyToHclTerraform(struct?: AwsTrainingJob.CheckpointConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobCollectionConfigurationsPropertyToTerraform(struct?: AwsTrainingJob.CollectionConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection_name: cdktn.stringToTerraform(struct!.collectionName),
    collection_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.collectionParameters),
  }
}


export function awsTrainingJobCollectionConfigurationsPropertyToHclTerraform(struct?: AwsTrainingJob.CollectionConfigurationsProperty | cdktn.IResolvable): any {
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
    collection_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.collectionParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobDebugHookConfigPropertyToTerraform(struct?: AwsTrainingJob.DebugHookConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hook_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.hookParameters),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    collection_configurations: cdktn.listMapper(awsTrainingJobCollectionConfigurationsPropertyToTerraform, true)(struct!.collectionConfigurations),
  }
}


export function awsTrainingJobDebugHookConfigPropertyToHclTerraform(struct?: AwsTrainingJob.DebugHookConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hook_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.hookParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collection_configurations: {
      value: cdktn.listMapperHcl(awsTrainingJobCollectionConfigurationsPropertyToHclTerraform, true)(struct!.collectionConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "CollectionConfigurationsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobDebugRuleConfigurationsPropertyToTerraform(struct?: AwsTrainingJob.DebugRuleConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    rule_configuration_name: cdktn.stringToTerraform(struct!.ruleConfigurationName),
    rule_evaluator_image: cdktn.stringToTerraform(struct!.ruleEvaluatorImage),
    rule_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.ruleParameters),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function awsTrainingJobDebugRuleConfigurationsPropertyToHclTerraform(struct?: AwsTrainingJob.DebugRuleConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_configuration_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_evaluator_image: {
      value: cdktn.stringToHclTerraform(struct!.ruleEvaluatorImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.ruleParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobExperimentConfigPropertyToTerraform(struct?: AwsTrainingJob.ExperimentConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    experiment_name: cdktn.stringToTerraform(struct!.experimentName),
    run_name: cdktn.stringToTerraform(struct!.runName),
    trial_component_display_name: cdktn.stringToTerraform(struct!.trialComponentDisplayName),
    trial_name: cdktn.stringToTerraform(struct!.trialName),
  }
}


export function awsTrainingJobExperimentConfigPropertyToHclTerraform(struct?: AwsTrainingJob.ExperimentConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    experiment_name: {
      value: cdktn.stringToHclTerraform(struct!.experimentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_name: {
      value: cdktn.stringToHclTerraform(struct!.runName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trial_component_display_name: {
      value: cdktn.stringToHclTerraform(struct!.trialComponentDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trial_name: {
      value: cdktn.stringToHclTerraform(struct!.trialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobInfraCheckConfigPropertyToTerraform(struct?: AwsTrainingJob.InfraCheckConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_infra_check: cdktn.booleanToTerraform(struct!.enableInfraCheck),
  }
}


export function awsTrainingJobInfraCheckConfigPropertyToHclTerraform(struct?: AwsTrainingJob.InfraCheckConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_infra_check: {
      value: cdktn.booleanToHclTerraform(struct!.enableInfraCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobFileSystemDataSourcePropertyToTerraform(struct?: AwsTrainingJob.FileSystemDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_path: cdktn.stringToTerraform(struct!.directoryPath),
    file_system_access_mode: cdktn.stringToTerraform(struct!.fileSystemAccessMode),
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_type: cdktn.stringToTerraform(struct!.fileSystemType),
  }
}


export function awsTrainingJobFileSystemDataSourcePropertyToHclTerraform(struct?: AwsTrainingJob.FileSystemDataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_path: {
      value: cdktn.stringToHclTerraform(struct!.directoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_access_mode: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_type: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobHubAccessConfigPropertyToTerraform(struct?: AwsTrainingJob.HubAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hub_content_arn: cdktn.stringToTerraform(struct!.hubContentArn),
  }
}


export function awsTrainingJobHubAccessConfigPropertyToHclTerraform(struct?: AwsTrainingJob.HubAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hub_content_arn: {
      value: cdktn.stringToHclTerraform(struct!.hubContentArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobModelAccessConfigPropertyToTerraform(struct?: AwsTrainingJob.ModelAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function awsTrainingJobModelAccessConfigPropertyToHclTerraform(struct?: AwsTrainingJob.ModelAccessConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobS3DataSourcePropertyToTerraform(struct?: AwsTrainingJob.S3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributeNames),
    instance_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGroupNames),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    hub_access_config: cdktn.listMapper(awsTrainingJobHubAccessConfigPropertyToTerraform, true)(struct!.hubAccessConfig),
    model_access_config: cdktn.listMapper(awsTrainingJobModelAccessConfigPropertyToTerraform, true)(struct!.modelAccessConfig),
  }
}


export function awsTrainingJobS3DataSourcePropertyToHclTerraform(struct?: AwsTrainingJob.S3DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instance_group_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceGroupNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hub_access_config: {
      value: cdktn.listMapperHcl(awsTrainingJobHubAccessConfigPropertyToHclTerraform, true)(struct!.hubAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HubAccessConfigPropertyList",
    },
    model_access_config: {
      value: cdktn.listMapperHcl(awsTrainingJobModelAccessConfigPropertyToHclTerraform, true)(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelAccessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobDataSourcePropertyToTerraform(struct?: AwsTrainingJob.DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_data_source: cdktn.listMapper(awsTrainingJobFileSystemDataSourcePropertyToTerraform, true)(struct!.fileSystemDataSource),
    s3_data_source: cdktn.listMapper(awsTrainingJobS3DataSourcePropertyToTerraform, true)(struct!.s3DataSource),
  }
}


export function awsTrainingJobDataSourcePropertyToHclTerraform(struct?: AwsTrainingJob.DataSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_data_source: {
      value: cdktn.listMapperHcl(awsTrainingJobFileSystemDataSourcePropertyToHclTerraform, true)(struct!.fileSystemDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "FileSystemDataSourcePropertyList",
    },
    s3_data_source: {
      value: cdktn.listMapperHcl(awsTrainingJobS3DataSourcePropertyToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "S3DataSourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobShuffleConfigPropertyToTerraform(struct?: AwsTrainingJob.ShuffleConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed: cdktn.numberToTerraform(struct!.seed),
  }
}


export function awsTrainingJobShuffleConfigPropertyToHclTerraform(struct?: AwsTrainingJob.ShuffleConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed: {
      value: cdktn.numberToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobInputDataConfigPropertyToTerraform(struct?: AwsTrainingJob.InputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    input_mode: cdktn.stringToTerraform(struct!.inputMode),
    record_wrapper_type: cdktn.stringToTerraform(struct!.recordWrapperType),
    data_source: cdktn.listMapper(awsTrainingJobDataSourcePropertyToTerraform, true)(struct!.dataSource),
    shuffle_config: cdktn.listMapper(awsTrainingJobShuffleConfigPropertyToTerraform, true)(struct!.shuffleConfig),
  }
}


export function awsTrainingJobInputDataConfigPropertyToHclTerraform(struct?: AwsTrainingJob.InputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_mode: {
      value: cdktn.stringToHclTerraform(struct!.inputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_wrapper_type: {
      value: cdktn.stringToHclTerraform(struct!.recordWrapperType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktn.listMapperHcl(awsTrainingJobDataSourcePropertyToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "DataSourcePropertyList",
    },
    shuffle_config: {
      value: cdktn.listMapperHcl(awsTrainingJobShuffleConfigPropertyToHclTerraform, true)(struct!.shuffleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ShuffleConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobMlflowConfigPropertyToTerraform(struct?: AwsTrainingJob.MlflowConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mlflow_experiment_name: cdktn.stringToTerraform(struct!.mlflowExperimentName),
    mlflow_resource_arn: cdktn.stringToTerraform(struct!.mlflowResourceArn),
    mlflow_run_name: cdktn.stringToTerraform(struct!.mlflowRunName),
  }
}


export function awsTrainingJobMlflowConfigPropertyToHclTerraform(struct?: AwsTrainingJob.MlflowConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mlflow_experiment_name: {
      value: cdktn.stringToHclTerraform(struct!.mlflowExperimentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mlflow_resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.mlflowResourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mlflow_run_name: {
      value: cdktn.stringToHclTerraform(struct!.mlflowRunName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobModelPackageConfigPropertyToTerraform(struct?: AwsTrainingJob.ModelPackageConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_package_group_arn: cdktn.stringToTerraform(struct!.modelPackageGroupArn),
    source_model_package_arn: cdktn.stringToTerraform(struct!.sourceModelPackageArn),
  }
}


export function awsTrainingJobModelPackageConfigPropertyToHclTerraform(struct?: AwsTrainingJob.ModelPackageConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_package_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.modelPackageGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_model_package_arn: {
      value: cdktn.stringToHclTerraform(struct!.sourceModelPackageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobOutputDataConfigPropertyToTerraform(struct?: AwsTrainingJob.OutputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function awsTrainingJobOutputDataConfigPropertyToHclTerraform(struct?: AwsTrainingJob.OutputDataConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobProfilerConfigPropertyToTerraform(struct?: AwsTrainingJob.ProfilerConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_profiler: cdktn.booleanToTerraform(struct!.disableProfiler),
    profiling_interval_in_milliseconds: cdktn.numberToTerraform(struct!.profilingIntervalInMilliseconds),
    profiling_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.profilingParameters),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function awsTrainingJobProfilerConfigPropertyToHclTerraform(struct?: AwsTrainingJob.ProfilerConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_profiler: {
      value: cdktn.booleanToHclTerraform(struct!.disableProfiler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profiling_interval_in_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.profilingIntervalInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profiling_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.profilingParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobProfilerRuleConfigurationsPropertyToTerraform(struct?: AwsTrainingJob.ProfilerRuleConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    rule_configuration_name: cdktn.stringToTerraform(struct!.ruleConfigurationName),
    rule_evaluator_image: cdktn.stringToTerraform(struct!.ruleEvaluatorImage),
    rule_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.ruleParameters),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function awsTrainingJobProfilerRuleConfigurationsPropertyToHclTerraform(struct?: AwsTrainingJob.ProfilerRuleConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_configuration_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_evaluator_image: {
      value: cdktn.stringToHclTerraform(struct!.ruleEvaluatorImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.ruleParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobRemoteDebugConfigPropertyToTerraform(struct?: AwsTrainingJob.RemoteDebugConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_remote_debug: cdktn.booleanToTerraform(struct!.enableRemoteDebug),
  }
}


export function awsTrainingJobRemoteDebugConfigPropertyToHclTerraform(struct?: AwsTrainingJob.RemoteDebugConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_remote_debug: {
      value: cdktn.booleanToHclTerraform(struct!.enableRemoteDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobInstanceGroupsPropertyToTerraform(struct?: AwsTrainingJob.InstanceGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_group_name: cdktn.stringToTerraform(struct!.instanceGroupName),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
  }
}


export function awsTrainingJobInstanceGroupsPropertyToHclTerraform(struct?: AwsTrainingJob.InstanceGroupsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_group_name: {
      value: cdktn.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobPlacementSpecificationsPropertyToTerraform(struct?: AwsTrainingJob.PlacementSpecificationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    ultra_server_id: cdktn.stringToTerraform(struct!.ultraServerId),
  }
}


export function awsTrainingJobPlacementSpecificationsPropertyToHclTerraform(struct?: AwsTrainingJob.PlacementSpecificationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ultra_server_id: {
      value: cdktn.stringToHclTerraform(struct!.ultraServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobInstancePlacementConfigPropertyToTerraform(struct?: AwsTrainingJob.InstancePlacementConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_multiple_jobs: cdktn.booleanToTerraform(struct!.enableMultipleJobs),
    placement_specifications: cdktn.listMapper(awsTrainingJobPlacementSpecificationsPropertyToTerraform, true)(struct!.placementSpecifications),
  }
}


export function awsTrainingJobInstancePlacementConfigPropertyToHclTerraform(struct?: AwsTrainingJob.InstancePlacementConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_multiple_jobs: {
      value: cdktn.booleanToHclTerraform(struct!.enableMultipleJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    placement_specifications: {
      value: cdktn.listMapperHcl(awsTrainingJobPlacementSpecificationsPropertyToHclTerraform, true)(struct!.placementSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "PlacementSpecificationsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobResourceConfigPropertyToTerraform(struct?: AwsTrainingJob.ResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    keep_alive_period_in_seconds: cdktn.numberToTerraform(struct!.keepAlivePeriodInSeconds),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    instance_groups: cdktn.listMapper(awsTrainingJobInstanceGroupsPropertyToTerraform, true)(struct!.instanceGroups),
    instance_placement_config: cdktn.listMapper(awsTrainingJobInstancePlacementConfigPropertyToTerraform, true)(struct!.instancePlacementConfig),
  }
}


export function awsTrainingJobResourceConfigPropertyToHclTerraform(struct?: AwsTrainingJob.ResourceConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_period_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.keepAlivePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_groups: {
      value: cdktn.listMapperHcl(awsTrainingJobInstanceGroupsPropertyToHclTerraform, true)(struct!.instanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceGroupsPropertyList",
    },
    instance_placement_config: {
      value: cdktn.listMapperHcl(awsTrainingJobInstancePlacementConfigPropertyToHclTerraform, true)(struct!.instancePlacementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "InstancePlacementConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobRetryStrategyPropertyToTerraform(struct?: AwsTrainingJob.RetryStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function awsTrainingJobRetryStrategyPropertyToHclTerraform(struct?: AwsTrainingJob.RetryStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsTrainingJobServerlessJobConfigPropertyToTerraform(struct?: AwsTrainingJob.ServerlessJobConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
    base_model_arn: cdktn.stringToTerraform(struct!.baseModelArn),
    customization_technique: cdktn.stringToTerraform(struct!.customizationTechnique),
    evaluation_type: cdktn.stringToTerraform(struct!.evaluationType),
    evaluator_arn: cdktn.stringToTerraform(struct!.evaluatorArn),
    job_type: cdktn.stringToTerraform(struct!.jobType),
    peft: cdktn.stringToTerraform(struct!.peft),
  }
}


export function awsTrainingJobServerlessJobConfigPropertyToHclTerraform(struct?: AwsTrainingJob.ServerlessJobConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    base_model_arn: {
      value: cdktn.stringToHclTerraform(struct!.baseModelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customization_technique: {
      value: cdktn.stringToHclTerraform(struct!.customizationTechnique),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_type: {
      value: cdktn.stringToHclTerraform(struct!.evaluationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_arn: {
      value: cdktn.stringToHclTerraform(struct!.evaluatorArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_type: {
      value: cdktn.stringToHclTerraform(struct!.jobType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peft: {
      value: cdktn.stringToHclTerraform(struct!.peft),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobSessionChainingConfigPropertyToTerraform(struct?: AwsTrainingJob.SessionChainingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_session_tag_chaining: cdktn.booleanToTerraform(struct!.enableSessionTagChaining),
  }
}


export function awsTrainingJobSessionChainingConfigPropertyToHclTerraform(struct?: AwsTrainingJob.SessionChainingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_session_tag_chaining: {
      value: cdktn.booleanToHclTerraform(struct!.enableSessionTagChaining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobStoppingConditionPropertyToTerraform(struct?: AwsTrainingJob.StoppingConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_pending_time_in_seconds: cdktn.numberToTerraform(struct!.maxPendingTimeInSeconds),
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
    max_wait_time_in_seconds: cdktn.numberToTerraform(struct!.maxWaitTimeInSeconds),
  }
}


export function awsTrainingJobStoppingConditionPropertyToHclTerraform(struct?: AwsTrainingJob.StoppingConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_pending_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxPendingTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_runtime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxWaitTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobTensorBoardOutputConfigPropertyToTerraform(struct?: AwsTrainingJob.TensorBoardOutputConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function awsTrainingJobTensorBoardOutputConfigPropertyToHclTerraform(struct?: AwsTrainingJob.TensorBoardOutputConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsTrainingJobTimeoutsPropertyToTerraform(struct?: AwsTrainingJob.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsTrainingJobTimeoutsPropertyToHclTerraform(struct?: AwsTrainingJob.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsTrainingJobVpcConfigPropertyToTerraform(struct?: AwsTrainingJob.VpcConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function awsTrainingJobVpcConfigPropertyToHclTerraform(struct?: AwsTrainingJob.VpcConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsTrainingJob {
export interface MetricDefinitionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#name AwsTrainingJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#regex AwsTrainingJob#regex}
  */
  readonly regex: string;
}
export class MetricDefinitionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MetricDefinitionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDefinitionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
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

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class MetricDefinitionsPropertyList extends cdktn.ComplexList {
  public internalValue? : MetricDefinitionsProperty[] | cdktn.IResolvable

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
  public get(index: number): MetricDefinitionsPropertyOutputReference {
    return new MetricDefinitionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingRepositoryAuthConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#training_repository_credentials_provider_arn AwsTrainingJob#training_repository_credentials_provider_arn}
  */
  readonly trainingRepositoryCredentialsProviderArn?: string;
}
export class TrainingRepositoryAuthConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingRepositoryAuthConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trainingRepositoryCredentialsProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingRepositoryCredentialsProviderArn = this._trainingRepositoryCredentialsProviderArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingRepositoryAuthConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trainingRepositoryCredentialsProviderArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trainingRepositoryCredentialsProviderArn = value.trainingRepositoryCredentialsProviderArn;
    }
  }

  // training_repository_credentials_provider_arn - computed: false, optional: true, required: false
  private _trainingRepositoryCredentialsProviderArn?: string; 
  public get trainingRepositoryCredentialsProviderArn() {
    return this.getStringAttribute('training_repository_credentials_provider_arn');
  }
  public set trainingRepositoryCredentialsProviderArn(value: string) {
    this._trainingRepositoryCredentialsProviderArn = value;
  }
  public resetTrainingRepositoryCredentialsProviderArn() {
    this._trainingRepositoryCredentialsProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingRepositoryCredentialsProviderArnInput() {
    return this._trainingRepositoryCredentialsProviderArn;
  }
}

export class TrainingRepositoryAuthConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingRepositoryAuthConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingRepositoryAuthConfigPropertyOutputReference {
    return new TrainingRepositoryAuthConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrainingImageConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#training_repository_access_mode AwsTrainingJob#training_repository_access_mode}
  */
  readonly trainingRepositoryAccessMode?: string;
  /**
  * training_repository_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#training_repository_auth_config AwsTrainingJob#training_repository_auth_config}
  */
  readonly trainingRepositoryAuthConfig?: TrainingRepositoryAuthConfigProperty[] | cdktn.IResolvable;
}
export class TrainingImageConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrainingImageConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trainingRepositoryAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingRepositoryAccessMode = this._trainingRepositoryAccessMode;
    }
    if (this._trainingRepositoryAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingRepositoryAuthConfig = this._trainingRepositoryAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrainingImageConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trainingRepositoryAccessMode = undefined;
      this._trainingRepositoryAuthConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trainingRepositoryAccessMode = value.trainingRepositoryAccessMode;
      this._trainingRepositoryAuthConfig.internalValue = value.trainingRepositoryAuthConfig;
    }
  }

  // training_repository_access_mode - computed: false, optional: true, required: false
  private _trainingRepositoryAccessMode?: string; 
  public get trainingRepositoryAccessMode() {
    return this.getStringAttribute('training_repository_access_mode');
  }
  public set trainingRepositoryAccessMode(value: string) {
    this._trainingRepositoryAccessMode = value;
  }
  public resetTrainingRepositoryAccessMode() {
    this._trainingRepositoryAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingRepositoryAccessModeInput() {
    return this._trainingRepositoryAccessMode;
  }

  // training_repository_auth_config - computed: false, optional: true, required: false
  private _trainingRepositoryAuthConfig = new TrainingRepositoryAuthConfigPropertyList(this, "training_repository_auth_config", false);
  public get trainingRepositoryAuthConfig() {
    return this._trainingRepositoryAuthConfig;
  }
  public putTrainingRepositoryAuthConfig(value: TrainingRepositoryAuthConfigProperty[] | cdktn.IResolvable) {
    this._trainingRepositoryAuthConfig.internalValue = value;
  }
  public resetTrainingRepositoryAuthConfig() {
    this._trainingRepositoryAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingRepositoryAuthConfigInput() {
    return this._trainingRepositoryAuthConfig.internalValue;
  }
}

export class TrainingImageConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TrainingImageConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TrainingImageConfigPropertyOutputReference {
    return new TrainingImageConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlgorithmSpecificationProperty {
  /**
  * Name or ARN of a SageMaker algorithm resource. Exactly one of `algorithm_name` or `training_image` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#algorithm_name AwsTrainingJob#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#container_arguments AwsTrainingJob#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#container_entrypoint AwsTrainingJob#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * Whether SageMaker AI should publish time-series metrics. SageMaker enables this automatically for built-in algorithms, supported prebuilt images, and jobs with explicit `metric_definitions`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#enable_sagemaker_metrics_time_series AwsTrainingJob#enable_sagemaker_metrics_time_series}
  */
  readonly enableSagemakerMetricsTimeSeries?: boolean | cdktn.IResolvable;
  /**
  * Registry path of the training image. Exactly one of `algorithm_name` or `training_image` must be set. Use `metric_definitions` only when you need to extract custom metrics from your own training container logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#training_image AwsTrainingJob#training_image}
  */
  readonly trainingImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#training_input_mode AwsTrainingJob#training_input_mode}
  */
  readonly trainingInputMode?: string;
  /**
  * metric_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#metric_definitions AwsTrainingJob#metric_definitions}
  */
  readonly metricDefinitions?: MetricDefinitionsProperty[] | cdktn.IResolvable;
  /**
  * training_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#training_image_config AwsTrainingJob#training_image_config}
  */
  readonly trainingImageConfig?: TrainingImageConfigProperty[] | cdktn.IResolvable;
}
export class AlgorithmSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlgorithmSpecificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._enableSagemakerMetricsTimeSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSagemakerMetricsTimeSeries = this._enableSagemakerMetricsTimeSeries;
    }
    if (this._trainingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImage = this._trainingImage;
    }
    if (this._trainingInputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingInputMode = this._trainingInputMode;
    }
    if (this._metricDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
    }
    if (this._trainingImageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImageConfig = this._trainingImageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlgorithmSpecificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._enableSagemakerMetricsTimeSeries = undefined;
      this._trainingImage = undefined;
      this._trainingInputMode = undefined;
      this._metricDefinitions.internalValue = undefined;
      this._trainingImageConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmName = value.algorithmName;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._enableSagemakerMetricsTimeSeries = value.enableSagemakerMetricsTimeSeries;
      this._trainingImage = value.trainingImage;
      this._trainingInputMode = value.trainingInputMode;
      this._metricDefinitions.internalValue = value.metricDefinitions;
      this._trainingImageConfig.internalValue = value.trainingImageConfig;
    }
  }

  // algorithm_name - computed: false, optional: true, required: false
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  public resetAlgorithmName() {
    this._algorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // container_arguments - computed: false, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: false, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // enable_sagemaker_metrics_time_series - computed: true, optional: true, required: false
  private _enableSagemakerMetricsTimeSeries?: boolean | cdktn.IResolvable; 
  public get enableSagemakerMetricsTimeSeries() {
    return this.getBooleanAttribute('enable_sagemaker_metrics_time_series');
  }
  public set enableSagemakerMetricsTimeSeries(value: boolean | cdktn.IResolvable) {
    this._enableSagemakerMetricsTimeSeries = value;
  }
  public resetEnableSagemakerMetricsTimeSeries() {
    this._enableSagemakerMetricsTimeSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSagemakerMetricsTimeSeriesInput() {
    return this._enableSagemakerMetricsTimeSeries;
  }

  // training_image - computed: false, optional: true, required: false
  private _trainingImage?: string; 
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }
  public set trainingImage(value: string) {
    this._trainingImage = value;
  }
  public resetTrainingImage() {
    this._trainingImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageInput() {
    return this._trainingImage;
  }

  // training_input_mode - computed: false, optional: true, required: false
  private _trainingInputMode?: string; 
  public get trainingInputMode() {
    return this.getStringAttribute('training_input_mode');
  }
  public set trainingInputMode(value: string) {
    this._trainingInputMode = value;
  }
  public resetTrainingInputMode() {
    this._trainingInputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingInputModeInput() {
    return this._trainingInputMode;
  }

  // metric_definitions - computed: false, optional: true, required: false
  private _metricDefinitions = new MetricDefinitionsPropertyList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: MetricDefinitionsProperty[] | cdktn.IResolvable) {
    this._metricDefinitions.internalValue = value;
  }
  public resetMetricDefinitions() {
    this._metricDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionsInput() {
    return this._metricDefinitions.internalValue;
  }

  // training_image_config - computed: false, optional: true, required: false
  private _trainingImageConfig = new TrainingImageConfigPropertyList(this, "training_image_config", false);
  public get trainingImageConfig() {
    return this._trainingImageConfig;
  }
  public putTrainingImageConfig(value: TrainingImageConfigProperty[] | cdktn.IResolvable) {
    this._trainingImageConfig.internalValue = value;
  }
  public resetTrainingImageConfig() {
    this._trainingImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageConfigInput() {
    return this._trainingImageConfig.internalValue;
  }
}

export class AlgorithmSpecificationPropertyList extends cdktn.ComplexList {
  public internalValue? : AlgorithmSpecificationProperty[] | cdktn.IResolvable

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
  public get(index: number): AlgorithmSpecificationPropertyOutputReference {
    return new AlgorithmSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckpointConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#local_path AwsTrainingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_uri AwsTrainingJob#s3_uri}
  */
  readonly s3Uri: string;
}
export class CheckpointConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CheckpointConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckpointConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class CheckpointConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CheckpointConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CheckpointConfigPropertyOutputReference {
    return new CheckpointConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectionConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#collection_name AwsTrainingJob#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#collection_parameters AwsTrainingJob#collection_parameters}
  */
  readonly collectionParameters?: { [key: string]: string };
}
export class CollectionConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CollectionConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._collectionParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionParameters = this._collectionParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectionConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionName = undefined;
      this._collectionParameters = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionName = value.collectionName;
      this._collectionParameters = value.collectionParameters;
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

  // collection_parameters - computed: false, optional: true, required: false
  private _collectionParameters?: { [key: string]: string }; 
  public get collectionParameters() {
    return this.getStringMapAttribute('collection_parameters');
  }
  public set collectionParameters(value: { [key: string]: string }) {
    this._collectionParameters = value;
  }
  public resetCollectionParameters() {
    this._collectionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionParametersInput() {
    return this._collectionParameters;
  }
}

export class CollectionConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : CollectionConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): CollectionConfigurationsPropertyOutputReference {
    return new CollectionConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DebugHookConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#hook_parameters AwsTrainingJob#hook_parameters}
  */
  readonly hookParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#local_path AwsTrainingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_output_path AwsTrainingJob#s3_output_path}
  */
  readonly s3OutputPath: string;
  /**
  * collection_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#collection_configurations AwsTrainingJob#collection_configurations}
  */
  readonly collectionConfigurations?: CollectionConfigurationsProperty[] | cdktn.IResolvable;
}
export class DebugHookConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DebugHookConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hookParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.hookParameters = this._hookParameters;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._collectionConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionConfigurations = this._collectionConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugHookConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hookParameters = undefined;
      this._localPath = undefined;
      this._s3OutputPath = undefined;
      this._collectionConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hookParameters = value.hookParameters;
      this._localPath = value.localPath;
      this._s3OutputPath = value.s3OutputPath;
      this._collectionConfigurations.internalValue = value.collectionConfigurations;
    }
  }

  // hook_parameters - computed: false, optional: true, required: false
  private _hookParameters?: { [key: string]: string }; 
  public get hookParameters() {
    return this.getStringMapAttribute('hook_parameters');
  }
  public set hookParameters(value: { [key: string]: string }) {
    this._hookParameters = value;
  }
  public resetHookParameters() {
    this._hookParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookParametersInput() {
    return this._hookParameters;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }

  // collection_configurations - computed: false, optional: true, required: false
  private _collectionConfigurations = new CollectionConfigurationsPropertyList(this, "collection_configurations", false);
  public get collectionConfigurations() {
    return this._collectionConfigurations;
  }
  public putCollectionConfigurations(value: CollectionConfigurationsProperty[] | cdktn.IResolvable) {
    this._collectionConfigurations.internalValue = value;
  }
  public resetCollectionConfigurations() {
    this._collectionConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionConfigurationsInput() {
    return this._collectionConfigurations.internalValue;
  }
}

export class DebugHookConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : DebugHookConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): DebugHookConfigPropertyOutputReference {
    return new DebugHookConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DebugRuleConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_type AwsTrainingJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#local_path AwsTrainingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#rule_configuration_name AwsTrainingJob#rule_configuration_name}
  */
  readonly ruleConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#rule_evaluator_image AwsTrainingJob#rule_evaluator_image}
  */
  readonly ruleEvaluatorImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#rule_parameters AwsTrainingJob#rule_parameters}
  */
  readonly ruleParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_output_path AwsTrainingJob#s3_output_path}
  */
  readonly s3OutputPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#volume_size_in_gb AwsTrainingJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}
export class DebugRuleConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DebugRuleConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._ruleConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleConfigurationName = this._ruleConfigurationName;
    }
    if (this._ruleEvaluatorImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleEvaluatorImage = this._ruleEvaluatorImage;
    }
    if (this._ruleParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleParameters = this._ruleParameters;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugRuleConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._localPath = undefined;
      this._ruleConfigurationName = undefined;
      this._ruleEvaluatorImage = undefined;
      this._ruleParameters = undefined;
      this._s3OutputPath = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._localPath = value.localPath;
      this._ruleConfigurationName = value.ruleConfigurationName;
      this._ruleEvaluatorImage = value.ruleEvaluatorImage;
      this._ruleParameters = value.ruleParameters;
      this._s3OutputPath = value.s3OutputPath;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // rule_configuration_name - computed: false, optional: false, required: true
  private _ruleConfigurationName?: string; 
  public get ruleConfigurationName() {
    return this.getStringAttribute('rule_configuration_name');
  }
  public set ruleConfigurationName(value: string) {
    this._ruleConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConfigurationNameInput() {
    return this._ruleConfigurationName;
  }

  // rule_evaluator_image - computed: false, optional: false, required: true
  private _ruleEvaluatorImage?: string; 
  public get ruleEvaluatorImage() {
    return this.getStringAttribute('rule_evaluator_image');
  }
  public set ruleEvaluatorImage(value: string) {
    this._ruleEvaluatorImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEvaluatorImageInput() {
    return this._ruleEvaluatorImage;
  }

  // rule_parameters - computed: false, optional: true, required: false
  private _ruleParameters?: { [key: string]: string }; 
  public get ruleParameters() {
    return this.getStringMapAttribute('rule_parameters');
  }
  public set ruleParameters(value: { [key: string]: string }) {
    this._ruleParameters = value;
  }
  public resetRuleParameters() {
    this._ruleParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleParametersInput() {
    return this._ruleParameters;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }

  // volume_size_in_gb - computed: true, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}

export class DebugRuleConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : DebugRuleConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): DebugRuleConfigurationsPropertyOutputReference {
    return new DebugRuleConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExperimentConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#experiment_name AwsTrainingJob#experiment_name}
  */
  readonly experimentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#run_name AwsTrainingJob#run_name}
  */
  readonly runName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#trial_component_display_name AwsTrainingJob#trial_component_display_name}
  */
  readonly trialComponentDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#trial_name AwsTrainingJob#trial_name}
  */
  readonly trialName?: string;
}
export class ExperimentConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExperimentConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._experimentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentName = this._experimentName;
    }
    if (this._runName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runName = this._runName;
    }
    if (this._trialComponentDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trialComponentDisplayName = this._trialComponentDisplayName;
    }
    if (this._trialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trialName = this._trialName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExperimentConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._experimentName = undefined;
      this._runName = undefined;
      this._trialComponentDisplayName = undefined;
      this._trialName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._experimentName = value.experimentName;
      this._runName = value.runName;
      this._trialComponentDisplayName = value.trialComponentDisplayName;
      this._trialName = value.trialName;
    }
  }

  // experiment_name - computed: false, optional: true, required: false
  private _experimentName?: string; 
  public get experimentName() {
    return this.getStringAttribute('experiment_name');
  }
  public set experimentName(value: string) {
    this._experimentName = value;
  }
  public resetExperimentName() {
    this._experimentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentNameInput() {
    return this._experimentName;
  }

  // run_name - computed: false, optional: true, required: false
  private _runName?: string; 
  public get runName() {
    return this.getStringAttribute('run_name');
  }
  public set runName(value: string) {
    this._runName = value;
  }
  public resetRunName() {
    this._runName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runNameInput() {
    return this._runName;
  }

  // trial_component_display_name - computed: false, optional: true, required: false
  private _trialComponentDisplayName?: string; 
  public get trialComponentDisplayName() {
    return this.getStringAttribute('trial_component_display_name');
  }
  public set trialComponentDisplayName(value: string) {
    this._trialComponentDisplayName = value;
  }
  public resetTrialComponentDisplayName() {
    this._trialComponentDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialComponentDisplayNameInput() {
    return this._trialComponentDisplayName;
  }

  // trial_name - computed: false, optional: true, required: false
  private _trialName?: string; 
  public get trialName() {
    return this.getStringAttribute('trial_name');
  }
  public set trialName(value: string) {
    this._trialName = value;
  }
  public resetTrialName() {
    this._trialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialNameInput() {
    return this._trialName;
  }
}

export class ExperimentConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ExperimentConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ExperimentConfigPropertyOutputReference {
    return new ExperimentConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfraCheckConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#enable_infra_check AwsTrainingJob#enable_infra_check}
  */
  readonly enableInfraCheck?: boolean | cdktn.IResolvable;
}
export class InfraCheckConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InfraCheckConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInfraCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInfraCheck = this._enableInfraCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfraCheckConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableInfraCheck = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableInfraCheck = value.enableInfraCheck;
    }
  }

  // enable_infra_check - computed: false, optional: true, required: false
  private _enableInfraCheck?: boolean | cdktn.IResolvable; 
  public get enableInfraCheck() {
    return this.getBooleanAttribute('enable_infra_check');
  }
  public set enableInfraCheck(value: boolean | cdktn.IResolvable) {
    this._enableInfraCheck = value;
  }
  public resetEnableInfraCheck() {
    this._enableInfraCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInfraCheckInput() {
    return this._enableInfraCheck;
  }
}

export class InfraCheckConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : InfraCheckConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): InfraCheckConfigPropertyOutputReference {
    return new InfraCheckConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileSystemDataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#directory_path AwsTrainingJob#directory_path}
  */
  readonly directoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#file_system_access_mode AwsTrainingJob#file_system_access_mode}
  */
  readonly fileSystemAccessMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#file_system_id AwsTrainingJob#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#file_system_type AwsTrainingJob#file_system_type}
  */
  readonly fileSystemType: string;
}
export class FileSystemDataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FileSystemDataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryPath = this._directoryPath;
    }
    if (this._fileSystemAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAccessMode = this._fileSystemAccessMode;
    }
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileSystemDataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryPath = undefined;
      this._fileSystemAccessMode = undefined;
      this._fileSystemId = undefined;
      this._fileSystemType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryPath = value.directoryPath;
      this._fileSystemAccessMode = value.fileSystemAccessMode;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemType = value.fileSystemType;
    }
  }

  // directory_path - computed: false, optional: false, required: true
  private _directoryPath?: string; 
  public get directoryPath() {
    return this.getStringAttribute('directory_path');
  }
  public set directoryPath(value: string) {
    this._directoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPathInput() {
    return this._directoryPath;
  }

  // file_system_access_mode - computed: false, optional: false, required: true
  private _fileSystemAccessMode?: string; 
  public get fileSystemAccessMode() {
    return this.getStringAttribute('file_system_access_mode');
  }
  public set fileSystemAccessMode(value: string) {
    this._fileSystemAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessModeInput() {
    return this._fileSystemAccessMode;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_type - computed: false, optional: false, required: true
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }
}

export class FileSystemDataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : FileSystemDataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): FileSystemDataSourcePropertyOutputReference {
    return new FileSystemDataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HubAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#hub_content_arn AwsTrainingJob#hub_content_arn}
  */
  readonly hubContentArn: string;
}
export class HubAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HubAccessConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubContentArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubContentArn = this._hubContentArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HubAccessConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubContentArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubContentArn = value.hubContentArn;
    }
  }

  // hub_content_arn - computed: false, optional: false, required: true
  private _hubContentArn?: string; 
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }
  public set hubContentArn(value: string) {
    this._hubContentArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentArnInput() {
    return this._hubContentArn;
  }
}

export class HubAccessConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : HubAccessConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): HubAccessConfigPropertyOutputReference {
    return new HubAccessConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelAccessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#accept_eula AwsTrainingJob#accept_eula}
  */
  readonly acceptEula: boolean | cdktn.IResolvable;
}
export class ModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ModelAccessConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelAccessConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}

export class ModelAccessConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ModelAccessConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ModelAccessConfigPropertyOutputReference {
    return new ModelAccessConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3DataSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#attribute_names AwsTrainingJob#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_group_names AwsTrainingJob#instance_group_names}
  */
  readonly instanceGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_data_distribution_type AwsTrainingJob#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_data_type AwsTrainingJob#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_uri AwsTrainingJob#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * hub_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#hub_access_config AwsTrainingJob#hub_access_config}
  */
  readonly hubAccessConfig?: HubAccessConfigProperty[] | cdktn.IResolvable;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#model_access_config AwsTrainingJob#model_access_config}
  */
  readonly modelAccessConfig?: ModelAccessConfigProperty[] | cdktn.IResolvable;
}
export class S3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3DataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._instanceGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupNames = this._instanceGroupNames;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._hubAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubAccessConfig = this._hubAccessConfig?.internalValue;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3DataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNames = undefined;
      this._instanceGroupNames = undefined;
      this._s3DataDistributionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._hubAccessConfig.internalValue = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNames = value.attributeNames;
      this._instanceGroupNames = value.instanceGroupNames;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._hubAccessConfig.internalValue = value.hubAccessConfig;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // attribute_names - computed: false, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // instance_group_names - computed: false, optional: true, required: false
  private _instanceGroupNames?: string[]; 
  public get instanceGroupNames() {
    return this.getListAttribute('instance_group_names');
  }
  public set instanceGroupNames(value: string[]) {
    this._instanceGroupNames = value;
  }
  public resetInstanceGroupNames() {
    this._instanceGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNamesInput() {
    return this._instanceGroupNames;
  }

  // s3_data_distribution_type - computed: false, optional: true, required: false
  private _s3DataDistributionType?: string; 
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }
  public set s3DataDistributionType(value: string) {
    this._s3DataDistributionType = value;
  }
  public resetS3DataDistributionType() {
    this._s3DataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDistributionTypeInput() {
    return this._s3DataDistributionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // hub_access_config - computed: false, optional: true, required: false
  private _hubAccessConfig = new HubAccessConfigPropertyList(this, "hub_access_config", false);
  public get hubAccessConfig() {
    return this._hubAccessConfig;
  }
  public putHubAccessConfig(value: HubAccessConfigProperty[] | cdktn.IResolvable) {
    this._hubAccessConfig.internalValue = value;
  }
  public resetHubAccessConfig() {
    this._hubAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubAccessConfigInput() {
    return this._hubAccessConfig.internalValue;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new ModelAccessConfigPropertyList(this, "model_access_config", false);
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: ModelAccessConfigProperty[] | cdktn.IResolvable) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class S3DataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : S3DataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): S3DataSourcePropertyOutputReference {
    return new S3DataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSourceProperty {
  /**
  * file_system_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#file_system_data_source AwsTrainingJob#file_system_data_source}
  */
  readonly fileSystemDataSource?: FileSystemDataSourceProperty[] | cdktn.IResolvable;
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_data_source AwsTrainingJob#s3_data_source}
  */
  readonly s3DataSource?: S3DataSourceProperty[] | cdktn.IResolvable;
}
export class DataSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemDataSource = this._fileSystemDataSource?.internalValue;
    }
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = value.fileSystemDataSource;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // file_system_data_source - computed: false, optional: true, required: false
  private _fileSystemDataSource = new FileSystemDataSourcePropertyList(this, "file_system_data_source", false);
  public get fileSystemDataSource() {
    return this._fileSystemDataSource;
  }
  public putFileSystemDataSource(value: FileSystemDataSourceProperty[] | cdktn.IResolvable) {
    this._fileSystemDataSource.internalValue = value;
  }
  public resetFileSystemDataSource() {
    this._fileSystemDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemDataSourceInput() {
    return this._fileSystemDataSource.internalValue;
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new S3DataSourcePropertyList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: S3DataSourceProperty[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}

export class DataSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : DataSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): DataSourcePropertyOutputReference {
    return new DataSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ShuffleConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#seed AwsTrainingJob#seed}
  */
  readonly seed?: number;
}
export class ShuffleConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ShuffleConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShuffleConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: true, required: false
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}

export class ShuffleConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ShuffleConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ShuffleConfigPropertyOutputReference {
    return new ShuffleConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InputDataConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#channel_name AwsTrainingJob#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#compression_type AwsTrainingJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#content_type AwsTrainingJob#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#input_mode AwsTrainingJob#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#record_wrapper_type AwsTrainingJob#record_wrapper_type}
  */
  readonly recordWrapperType?: string;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#data_source AwsTrainingJob#data_source}
  */
  readonly dataSource?: DataSourceProperty[] | cdktn.IResolvable;
  /**
  * shuffle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#shuffle_config AwsTrainingJob#shuffle_config}
  */
  readonly shuffleConfig?: ShuffleConfigProperty[] | cdktn.IResolvable;
}
export class InputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InputDataConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._inputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputMode = this._inputMode;
    }
    if (this._recordWrapperType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordWrapperType = this._recordWrapperType;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._shuffleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shuffleConfig = this._shuffleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputDataConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._inputMode = undefined;
      this._recordWrapperType = undefined;
      this._dataSource.internalValue = undefined;
      this._shuffleConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._inputMode = value.inputMode;
      this._recordWrapperType = value.recordWrapperType;
      this._dataSource.internalValue = value.dataSource;
      this._shuffleConfig.internalValue = value.shuffleConfig;
    }
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

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // input_mode - computed: true, optional: true, required: false
  private _inputMode?: string; 
  public get inputMode() {
    return this.getStringAttribute('input_mode');
  }
  public set inputMode(value: string) {
    this._inputMode = value;
  }
  public resetInputMode() {
    this._inputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModeInput() {
    return this._inputMode;
  }

  // record_wrapper_type - computed: true, optional: true, required: false
  private _recordWrapperType?: string; 
  public get recordWrapperType() {
    return this.getStringAttribute('record_wrapper_type');
  }
  public set recordWrapperType(value: string) {
    this._recordWrapperType = value;
  }
  public resetRecordWrapperType() {
    this._recordWrapperType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordWrapperTypeInput() {
    return this._recordWrapperType;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataSourcePropertyList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataSourceProperty[] | cdktn.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // shuffle_config - computed: false, optional: true, required: false
  private _shuffleConfig = new ShuffleConfigPropertyList(this, "shuffle_config", false);
  public get shuffleConfig() {
    return this._shuffleConfig;
  }
  public putShuffleConfig(value: ShuffleConfigProperty[] | cdktn.IResolvable) {
    this._shuffleConfig.internalValue = value;
  }
  public resetShuffleConfig() {
    this._shuffleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shuffleConfigInput() {
    return this._shuffleConfig.internalValue;
  }
}

export class InputDataConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : InputDataConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): InputDataConfigPropertyOutputReference {
    return new InputDataConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MlflowConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#mlflow_experiment_name AwsTrainingJob#mlflow_experiment_name}
  */
  readonly mlflowExperimentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#mlflow_resource_arn AwsTrainingJob#mlflow_resource_arn}
  */
  readonly mlflowResourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#mlflow_run_name AwsTrainingJob#mlflow_run_name}
  */
  readonly mlflowRunName?: string;
}
export class MlflowConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MlflowConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mlflowExperimentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlflowExperimentName = this._mlflowExperimentName;
    }
    if (this._mlflowResourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlflowResourceArn = this._mlflowResourceArn;
    }
    if (this._mlflowRunName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlflowRunName = this._mlflowRunName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlflowConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mlflowExperimentName = undefined;
      this._mlflowResourceArn = undefined;
      this._mlflowRunName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mlflowExperimentName = value.mlflowExperimentName;
      this._mlflowResourceArn = value.mlflowResourceArn;
      this._mlflowRunName = value.mlflowRunName;
    }
  }

  // mlflow_experiment_name - computed: false, optional: true, required: false
  private _mlflowExperimentName?: string; 
  public get mlflowExperimentName() {
    return this.getStringAttribute('mlflow_experiment_name');
  }
  public set mlflowExperimentName(value: string) {
    this._mlflowExperimentName = value;
  }
  public resetMlflowExperimentName() {
    this._mlflowExperimentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowExperimentNameInput() {
    return this._mlflowExperimentName;
  }

  // mlflow_resource_arn - computed: false, optional: false, required: true
  private _mlflowResourceArn?: string; 
  public get mlflowResourceArn() {
    return this.getStringAttribute('mlflow_resource_arn');
  }
  public set mlflowResourceArn(value: string) {
    this._mlflowResourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowResourceArnInput() {
    return this._mlflowResourceArn;
  }

  // mlflow_run_name - computed: false, optional: true, required: false
  private _mlflowRunName?: string; 
  public get mlflowRunName() {
    return this.getStringAttribute('mlflow_run_name');
  }
  public set mlflowRunName(value: string) {
    this._mlflowRunName = value;
  }
  public resetMlflowRunName() {
    this._mlflowRunName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowRunNameInput() {
    return this._mlflowRunName;
  }
}

export class MlflowConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : MlflowConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): MlflowConfigPropertyOutputReference {
    return new MlflowConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelPackageConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#model_package_group_arn AwsTrainingJob#model_package_group_arn}
  */
  readonly modelPackageGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#source_model_package_arn AwsTrainingJob#source_model_package_arn}
  */
  readonly sourceModelPackageArn?: string;
}
export class ModelPackageConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ModelPackageConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelPackageGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageGroupArn = this._modelPackageGroupArn;
    }
    if (this._sourceModelPackageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceModelPackageArn = this._sourceModelPackageArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelPackageConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelPackageGroupArn = undefined;
      this._sourceModelPackageArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelPackageGroupArn = value.modelPackageGroupArn;
      this._sourceModelPackageArn = value.sourceModelPackageArn;
    }
  }

  // model_package_group_arn - computed: false, optional: false, required: true
  private _modelPackageGroupArn?: string; 
  public get modelPackageGroupArn() {
    return this.getStringAttribute('model_package_group_arn');
  }
  public set modelPackageGroupArn(value: string) {
    this._modelPackageGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupArnInput() {
    return this._modelPackageGroupArn;
  }

  // source_model_package_arn - computed: false, optional: true, required: false
  private _sourceModelPackageArn?: string; 
  public get sourceModelPackageArn() {
    return this.getStringAttribute('source_model_package_arn');
  }
  public set sourceModelPackageArn(value: string) {
    this._sourceModelPackageArn = value;
  }
  public resetSourceModelPackageArn() {
    this._sourceModelPackageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceModelPackageArnInput() {
    return this._sourceModelPackageArn;
  }
}

export class ModelPackageConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ModelPackageConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ModelPackageConfigPropertyOutputReference {
    return new ModelPackageConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutputDataConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#compression_type AwsTrainingJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#kms_key_id AwsTrainingJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_output_path AwsTrainingJob#s3_output_path}
  */
  readonly s3OutputPath: string;
}
export class OutputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutputDataConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputDataConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // kms_key_id - computed: true, optional: true, required: false
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

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}

export class OutputDataConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : OutputDataConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): OutputDataConfigPropertyOutputReference {
    return new OutputDataConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfilerConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#disable_profiler AwsTrainingJob#disable_profiler}
  */
  readonly disableProfiler?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#profiling_interval_in_milliseconds AwsTrainingJob#profiling_interval_in_milliseconds}
  */
  readonly profilingIntervalInMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#profiling_parameters AwsTrainingJob#profiling_parameters}
  */
  readonly profilingParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_output_path AwsTrainingJob#s3_output_path}
  */
  readonly s3OutputPath?: string;
}
export class ProfilerConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProfilerConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableProfiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProfiler = this._disableProfiler;
    }
    if (this._profilingIntervalInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingIntervalInMilliseconds = this._profilingIntervalInMilliseconds;
    }
    if (this._profilingParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingParameters = this._profilingParameters;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfilerConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableProfiler = undefined;
      this._profilingIntervalInMilliseconds = undefined;
      this._profilingParameters = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableProfiler = value.disableProfiler;
      this._profilingIntervalInMilliseconds = value.profilingIntervalInMilliseconds;
      this._profilingParameters = value.profilingParameters;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // disable_profiler - computed: false, optional: true, required: false
  private _disableProfiler?: boolean | cdktn.IResolvable; 
  public get disableProfiler() {
    return this.getBooleanAttribute('disable_profiler');
  }
  public set disableProfiler(value: boolean | cdktn.IResolvable) {
    this._disableProfiler = value;
  }
  public resetDisableProfiler() {
    this._disableProfiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProfilerInput() {
    return this._disableProfiler;
  }

  // profiling_interval_in_milliseconds - computed: false, optional: true, required: false
  private _profilingIntervalInMilliseconds?: number; 
  public get profilingIntervalInMilliseconds() {
    return this.getNumberAttribute('profiling_interval_in_milliseconds');
  }
  public set profilingIntervalInMilliseconds(value: number) {
    this._profilingIntervalInMilliseconds = value;
  }
  public resetProfilingIntervalInMilliseconds() {
    this._profilingIntervalInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingIntervalInMillisecondsInput() {
    return this._profilingIntervalInMilliseconds;
  }

  // profiling_parameters - computed: false, optional: true, required: false
  private _profilingParameters?: { [key: string]: string }; 
  public get profilingParameters() {
    return this.getStringMapAttribute('profiling_parameters');
  }
  public set profilingParameters(value: { [key: string]: string }) {
    this._profilingParameters = value;
  }
  public resetProfilingParameters() {
    this._profilingParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingParametersInput() {
    return this._profilingParameters;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}

export class ProfilerConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ProfilerConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ProfilerConfigPropertyOutputReference {
    return new ProfilerConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfilerRuleConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_type AwsTrainingJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#local_path AwsTrainingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#rule_configuration_name AwsTrainingJob#rule_configuration_name}
  */
  readonly ruleConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#rule_evaluator_image AwsTrainingJob#rule_evaluator_image}
  */
  readonly ruleEvaluatorImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#rule_parameters AwsTrainingJob#rule_parameters}
  */
  readonly ruleParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_output_path AwsTrainingJob#s3_output_path}
  */
  readonly s3OutputPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#volume_size_in_gb AwsTrainingJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}
export class ProfilerRuleConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProfilerRuleConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._ruleConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleConfigurationName = this._ruleConfigurationName;
    }
    if (this._ruleEvaluatorImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleEvaluatorImage = this._ruleEvaluatorImage;
    }
    if (this._ruleParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleParameters = this._ruleParameters;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfilerRuleConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._localPath = undefined;
      this._ruleConfigurationName = undefined;
      this._ruleEvaluatorImage = undefined;
      this._ruleParameters = undefined;
      this._s3OutputPath = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._localPath = value.localPath;
      this._ruleConfigurationName = value.ruleConfigurationName;
      this._ruleEvaluatorImage = value.ruleEvaluatorImage;
      this._ruleParameters = value.ruleParameters;
      this._s3OutputPath = value.s3OutputPath;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // rule_configuration_name - computed: false, optional: false, required: true
  private _ruleConfigurationName?: string; 
  public get ruleConfigurationName() {
    return this.getStringAttribute('rule_configuration_name');
  }
  public set ruleConfigurationName(value: string) {
    this._ruleConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConfigurationNameInput() {
    return this._ruleConfigurationName;
  }

  // rule_evaluator_image - computed: false, optional: false, required: true
  private _ruleEvaluatorImage?: string; 
  public get ruleEvaluatorImage() {
    return this.getStringAttribute('rule_evaluator_image');
  }
  public set ruleEvaluatorImage(value: string) {
    this._ruleEvaluatorImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEvaluatorImageInput() {
    return this._ruleEvaluatorImage;
  }

  // rule_parameters - computed: false, optional: true, required: false
  private _ruleParameters?: { [key: string]: string }; 
  public get ruleParameters() {
    return this.getStringMapAttribute('rule_parameters');
  }
  public set ruleParameters(value: { [key: string]: string }) {
    this._ruleParameters = value;
  }
  public resetRuleParameters() {
    this._ruleParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleParametersInput() {
    return this._ruleParameters;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }

  // volume_size_in_gb - computed: true, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}

export class ProfilerRuleConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : ProfilerRuleConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): ProfilerRuleConfigurationsPropertyOutputReference {
    return new ProfilerRuleConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RemoteDebugConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#enable_remote_debug AwsTrainingJob#enable_remote_debug}
  */
  readonly enableRemoteDebug?: boolean | cdktn.IResolvable;
}
export class RemoteDebugConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RemoteDebugConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableRemoteDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRemoteDebug = this._enableRemoteDebug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RemoteDebugConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableRemoteDebug = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableRemoteDebug = value.enableRemoteDebug;
    }
  }

  // enable_remote_debug - computed: false, optional: true, required: false
  private _enableRemoteDebug?: boolean | cdktn.IResolvable; 
  public get enableRemoteDebug() {
    return this.getBooleanAttribute('enable_remote_debug');
  }
  public set enableRemoteDebug(value: boolean | cdktn.IResolvable) {
    this._enableRemoteDebug = value;
  }
  public resetEnableRemoteDebug() {
    this._enableRemoteDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteDebugInput() {
    return this._enableRemoteDebug;
  }
}

export class RemoteDebugConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : RemoteDebugConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): RemoteDebugConfigPropertyOutputReference {
    return new RemoteDebugConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceGroupsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_count AwsTrainingJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_group_name AwsTrainingJob#instance_group_name}
  */
  readonly instanceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_type AwsTrainingJob#instance_type}
  */
  readonly instanceType?: string;
}
export class InstanceGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InstanceGroupsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceGroupsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceGroupName = undefined;
      this._instanceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceGroupName = value.instanceGroupName;
      this._instanceType = value.instanceType;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_group_name - computed: false, optional: true, required: false
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  public resetInstanceGroupName() {
    this._instanceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class InstanceGroupsPropertyList extends cdktn.ComplexList {
  public internalValue? : InstanceGroupsProperty[] | cdktn.IResolvable

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
  public get(index: number): InstanceGroupsPropertyOutputReference {
    return new InstanceGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlacementSpecificationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_count AwsTrainingJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#ultra_server_id AwsTrainingJob#ultra_server_id}
  */
  readonly ultraServerId?: string;
}
export class PlacementSpecificationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PlacementSpecificationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._ultraServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraServerId = this._ultraServerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlacementSpecificationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._ultraServerId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._ultraServerId = value.ultraServerId;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // ultra_server_id - computed: false, optional: true, required: false
  private _ultraServerId?: string; 
  public get ultraServerId() {
    return this.getStringAttribute('ultra_server_id');
  }
  public set ultraServerId(value: string) {
    this._ultraServerId = value;
  }
  public resetUltraServerId() {
    this._ultraServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraServerIdInput() {
    return this._ultraServerId;
  }
}

export class PlacementSpecificationsPropertyList extends cdktn.ComplexList {
  public internalValue? : PlacementSpecificationsProperty[] | cdktn.IResolvable

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
  public get(index: number): PlacementSpecificationsPropertyOutputReference {
    return new PlacementSpecificationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstancePlacementConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#enable_multiple_jobs AwsTrainingJob#enable_multiple_jobs}
  */
  readonly enableMultipleJobs?: boolean | cdktn.IResolvable;
  /**
  * placement_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#placement_specifications AwsTrainingJob#placement_specifications}
  */
  readonly placementSpecifications?: PlacementSpecificationsProperty[] | cdktn.IResolvable;
}
export class InstancePlacementConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InstancePlacementConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMultipleJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultipleJobs = this._enableMultipleJobs;
    }
    if (this._placementSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementSpecifications = this._placementSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePlacementConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = undefined;
      this._placementSpecifications.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = value.enableMultipleJobs;
      this._placementSpecifications.internalValue = value.placementSpecifications;
    }
  }

  // enable_multiple_jobs - computed: false, optional: true, required: false
  private _enableMultipleJobs?: boolean | cdktn.IResolvable; 
  public get enableMultipleJobs() {
    return this.getBooleanAttribute('enable_multiple_jobs');
  }
  public set enableMultipleJobs(value: boolean | cdktn.IResolvable) {
    this._enableMultipleJobs = value;
  }
  public resetEnableMultipleJobs() {
    this._enableMultipleJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleJobsInput() {
    return this._enableMultipleJobs;
  }

  // placement_specifications - computed: false, optional: true, required: false
  private _placementSpecifications = new PlacementSpecificationsPropertyList(this, "placement_specifications", false);
  public get placementSpecifications() {
    return this._placementSpecifications;
  }
  public putPlacementSpecifications(value: PlacementSpecificationsProperty[] | cdktn.IResolvable) {
    this._placementSpecifications.internalValue = value;
  }
  public resetPlacementSpecifications() {
    this._placementSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementSpecificationsInput() {
    return this._placementSpecifications.internalValue;
  }
}

export class InstancePlacementConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : InstancePlacementConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): InstancePlacementConfigPropertyOutputReference {
    return new InstancePlacementConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_count AwsTrainingJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_type AwsTrainingJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#keep_alive_period_in_seconds AwsTrainingJob#keep_alive_period_in_seconds}
  */
  readonly keepAlivePeriodInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#training_plan_arn AwsTrainingJob#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#volume_kms_key_id AwsTrainingJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#volume_size_in_gb AwsTrainingJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_groups AwsTrainingJob#instance_groups}
  */
  readonly instanceGroups?: InstanceGroupsProperty[] | cdktn.IResolvable;
  /**
  * instance_placement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#instance_placement_config AwsTrainingJob#instance_placement_config}
  */
  readonly instancePlacementConfig?: InstancePlacementConfigProperty[] | cdktn.IResolvable;
}
export class ResourceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._keepAlivePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlivePeriodInSeconds = this._keepAlivePeriodInSeconds;
    }
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._instanceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroups = this._instanceGroups?.internalValue;
    }
    if (this._instancePlacementConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePlacementConfig = this._instancePlacementConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._keepAlivePeriodInSeconds = undefined;
      this._trainingPlanArn = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
      this._instanceGroups.internalValue = undefined;
      this._instancePlacementConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._keepAlivePeriodInSeconds = value.keepAlivePeriodInSeconds;
      this._trainingPlanArn = value.trainingPlanArn;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._instanceGroups.internalValue = value.instanceGroups;
      this._instancePlacementConfig.internalValue = value.instancePlacementConfig;
    }
  }

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // keep_alive_period_in_seconds - computed: true, optional: true, required: false
  private _keepAlivePeriodInSeconds?: number; 
  public get keepAlivePeriodInSeconds() {
    return this.getNumberAttribute('keep_alive_period_in_seconds');
  }
  public set keepAlivePeriodInSeconds(value: number) {
    this._keepAlivePeriodInSeconds = value;
  }
  public resetKeepAlivePeriodInSeconds() {
    this._keepAlivePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAlivePeriodInSecondsInput() {
    return this._keepAlivePeriodInSeconds;
  }

  // training_plan_arn - computed: false, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_size_in_gb - computed: true, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // instance_groups - computed: false, optional: true, required: false
  private _instanceGroups = new InstanceGroupsPropertyList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }
  public putInstanceGroups(value: InstanceGroupsProperty[] | cdktn.IResolvable) {
    this._instanceGroups.internalValue = value;
  }
  public resetInstanceGroups() {
    this._instanceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupsInput() {
    return this._instanceGroups.internalValue;
  }

  // instance_placement_config - computed: false, optional: true, required: false
  private _instancePlacementConfig = new InstancePlacementConfigPropertyList(this, "instance_placement_config", false);
  public get instancePlacementConfig() {
    return this._instancePlacementConfig;
  }
  public putInstancePlacementConfig(value: InstancePlacementConfigProperty[] | cdktn.IResolvable) {
    this._instancePlacementConfig.internalValue = value;
  }
  public resetInstancePlacementConfig() {
    this._instancePlacementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePlacementConfigInput() {
    return this._instancePlacementConfig.internalValue;
  }
}

export class ResourceConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ResourceConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ResourceConfigPropertyOutputReference {
    return new ResourceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RetryStrategyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#maximum_retry_attempts AwsTrainingJob#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts: number;
}
export class RetryStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RetryStrategyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetryStrategyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_retry_attempts - computed: false, optional: false, required: true
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}

export class RetryStrategyPropertyList extends cdktn.ComplexList {
  public internalValue? : RetryStrategyProperty[] | cdktn.IResolvable

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
  public get(index: number): RetryStrategyPropertyOutputReference {
    return new RetryStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerlessJobConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#accept_eula AwsTrainingJob#accept_eula}
  */
  readonly acceptEula?: boolean | cdktn.IResolvable;
  /**
  * Base model ARN in SageMaker Public Hub. SageMaker always selects the latest version of the provided model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#base_model_arn AwsTrainingJob#base_model_arn}
  */
  readonly baseModelArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#customization_technique AwsTrainingJob#customization_technique}
  */
  readonly customizationTechnique?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#evaluation_type AwsTrainingJob#evaluation_type}
  */
  readonly evaluationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#evaluator_arn AwsTrainingJob#evaluator_arn}
  */
  readonly evaluatorArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#job_type AwsTrainingJob#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#peft AwsTrainingJob#peft}
  */
  readonly peft?: string;
}
export class ServerlessJobConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServerlessJobConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    if (this._baseModelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseModelArn = this._baseModelArn;
    }
    if (this._customizationTechnique !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationTechnique = this._customizationTechnique;
    }
    if (this._evaluationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationType = this._evaluationType;
    }
    if (this._evaluatorArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorArn = this._evaluatorArn;
    }
    if (this._jobType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobType = this._jobType;
    }
    if (this._peft !== undefined) {
      hasAnyValues = true;
      internalValueResult.peft = this._peft;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessJobConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
      this._baseModelArn = undefined;
      this._customizationTechnique = undefined;
      this._evaluationType = undefined;
      this._evaluatorArn = undefined;
      this._jobType = undefined;
      this._peft = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
      this._baseModelArn = value.baseModelArn;
      this._customizationTechnique = value.customizationTechnique;
      this._evaluationType = value.evaluationType;
      this._evaluatorArn = value.evaluatorArn;
      this._jobType = value.jobType;
      this._peft = value.peft;
    }
  }

  // accept_eula - computed: false, optional: true, required: false
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }

  // base_model_arn - computed: false, optional: false, required: true
  private _baseModelArn?: string; 
  public get baseModelArn() {
    return this.getStringAttribute('base_model_arn');
  }
  public set baseModelArn(value: string) {
    this._baseModelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseModelArnInput() {
    return this._baseModelArn;
  }

  // customization_technique - computed: false, optional: true, required: false
  private _customizationTechnique?: string; 
  public get customizationTechnique() {
    return this.getStringAttribute('customization_technique');
  }
  public set customizationTechnique(value: string) {
    this._customizationTechnique = value;
  }
  public resetCustomizationTechnique() {
    this._customizationTechnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationTechniqueInput() {
    return this._customizationTechnique;
  }

  // evaluation_type - computed: false, optional: true, required: false
  private _evaluationType?: string; 
  public get evaluationType() {
    return this.getStringAttribute('evaluation_type');
  }
  public set evaluationType(value: string) {
    this._evaluationType = value;
  }
  public resetEvaluationType() {
    this._evaluationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationTypeInput() {
    return this._evaluationType;
  }

  // evaluator_arn - computed: false, optional: true, required: false
  private _evaluatorArn?: string; 
  public get evaluatorArn() {
    return this.getStringAttribute('evaluator_arn');
  }
  public set evaluatorArn(value: string) {
    this._evaluatorArn = value;
  }
  public resetEvaluatorArn() {
    this._evaluatorArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorArnInput() {
    return this._evaluatorArn;
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // peft - computed: false, optional: true, required: false
  private _peft?: string; 
  public get peft() {
    return this.getStringAttribute('peft');
  }
  public set peft(value: string) {
    this._peft = value;
  }
  public resetPeft() {
    this._peft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peftInput() {
    return this._peft;
  }
}

export class ServerlessJobConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : ServerlessJobConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): ServerlessJobConfigPropertyOutputReference {
    return new ServerlessJobConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SessionChainingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#enable_session_tag_chaining AwsTrainingJob#enable_session_tag_chaining}
  */
  readonly enableSessionTagChaining?: boolean | cdktn.IResolvable;
}
export class SessionChainingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SessionChainingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSessionTagChaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSessionTagChaining = this._enableSessionTagChaining;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionChainingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSessionTagChaining = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSessionTagChaining = value.enableSessionTagChaining;
    }
  }

  // enable_session_tag_chaining - computed: false, optional: true, required: false
  private _enableSessionTagChaining?: boolean | cdktn.IResolvable; 
  public get enableSessionTagChaining() {
    return this.getBooleanAttribute('enable_session_tag_chaining');
  }
  public set enableSessionTagChaining(value: boolean | cdktn.IResolvable) {
    this._enableSessionTagChaining = value;
  }
  public resetEnableSessionTagChaining() {
    this._enableSessionTagChaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionTagChainingInput() {
    return this._enableSessionTagChaining;
  }
}

export class SessionChainingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : SessionChainingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): SessionChainingConfigPropertyOutputReference {
    return new SessionChainingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StoppingConditionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#max_pending_time_in_seconds AwsTrainingJob#max_pending_time_in_seconds}
  */
  readonly maxPendingTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#max_runtime_in_seconds AwsTrainingJob#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#max_wait_time_in_seconds AwsTrainingJob#max_wait_time_in_seconds}
  */
  readonly maxWaitTimeInSeconds?: number;
}
export class StoppingConditionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StoppingConditionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPendingTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingTimeInSeconds = this._maxPendingTimeInSeconds;
    }
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    if (this._maxWaitTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTimeInSeconds = this._maxWaitTimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoppingConditionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = undefined;
      this._maxRuntimeInSeconds = undefined;
      this._maxWaitTimeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = value.maxPendingTimeInSeconds;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
      this._maxWaitTimeInSeconds = value.maxWaitTimeInSeconds;
    }
  }

  // max_pending_time_in_seconds - computed: true, optional: true, required: false
  private _maxPendingTimeInSeconds?: number; 
  public get maxPendingTimeInSeconds() {
    return this.getNumberAttribute('max_pending_time_in_seconds');
  }
  public set maxPendingTimeInSeconds(value: number) {
    this._maxPendingTimeInSeconds = value;
  }
  public resetMaxPendingTimeInSeconds() {
    this._maxPendingTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingTimeInSecondsInput() {
    return this._maxPendingTimeInSeconds;
  }

  // max_runtime_in_seconds - computed: true, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }

  // max_wait_time_in_seconds - computed: true, optional: true, required: false
  private _maxWaitTimeInSeconds?: number; 
  public get maxWaitTimeInSeconds() {
    return this.getNumberAttribute('max_wait_time_in_seconds');
  }
  public set maxWaitTimeInSeconds(value: number) {
    this._maxWaitTimeInSeconds = value;
  }
  public resetMaxWaitTimeInSeconds() {
    this._maxWaitTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInSecondsInput() {
    return this._maxWaitTimeInSeconds;
  }
}

export class StoppingConditionPropertyList extends cdktn.ComplexList {
  public internalValue? : StoppingConditionProperty[] | cdktn.IResolvable

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
  public get(index: number): StoppingConditionPropertyOutputReference {
    return new StoppingConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TensorBoardOutputConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#local_path AwsTrainingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#s3_output_path AwsTrainingJob#s3_output_path}
  */
  readonly s3OutputPath: string;
}
export class TensorBoardOutputConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TensorBoardOutputConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TensorBoardOutputConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}

export class TensorBoardOutputConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TensorBoardOutputConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TensorBoardOutputConfigPropertyOutputReference {
    return new TensorBoardOutputConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#create AwsTrainingJob#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#delete AwsTrainingJob#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#update AwsTrainingJob#update}
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
export interface VpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#security_group_ids AwsTrainingJob#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_training_job#subnets AwsTrainingJob#subnets}
  */
  readonly subnets: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class VpcConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : VpcConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): VpcConfigPropertyOutputReference {
    return new VpcConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
