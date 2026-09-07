// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#connector_configuration AwsConnector#connector_configuration}
  */
  readonly connectorConfiguration: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#description AwsConnector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#id AwsConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#kafkaconnect_version AwsConnector#kafkaconnect_version}
  */
  readonly kafkaconnectVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#name AwsConnector#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#region AwsConnector#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#service_execution_role_arn AwsConnector#service_execution_role_arn}
  */
  readonly serviceExecutionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#tags AwsConnector#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#tags_all AwsConnector#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#capacity AwsConnector#capacity}
  */
  readonly capacity: AwsConnector.CapacityProperty;
  /**
  * kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#kafka_cluster AwsConnector#kafka_cluster}
  */
  readonly kafkaCluster: AwsConnector.KafkaClusterProperty;
  /**
  * kafka_cluster_client_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#kafka_cluster_client_authentication AwsConnector#kafka_cluster_client_authentication}
  */
  readonly kafkaClusterClientAuthentication: AwsConnector.KafkaClusterClientAuthenticationProperty;
  /**
  * kafka_cluster_encryption_in_transit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#kafka_cluster_encryption_in_transit AwsConnector#kafka_cluster_encryption_in_transit}
  */
  readonly kafkaClusterEncryptionInTransit: AwsConnector.KafkaClusterEncryptionInTransitProperty;
  /**
  * log_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#log_delivery AwsConnector#log_delivery}
  */
  readonly logDelivery?: AwsConnector.LogDeliveryProperty;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#plugin AwsConnector#plugin}
  */
  readonly plugin: AwsConnector.PluginProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#timeouts AwsConnector#timeouts}
  */
  readonly timeouts?: AwsConnector.TimeoutsProperty;
  /**
  * worker_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#worker_configuration AwsConnector#worker_configuration}
  */
  readonly workerConfiguration?: AwsConnector.WorkerConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector aws_mskconnect_connector}
*/
export class AwsConnector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mskconnect_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsConnector to import
  * @param importFromId The id of the existing AwsConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_mskconnect_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector aws_mskconnect_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: AwsConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mskconnect_connector',
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
    this._connectorConfiguration = config.connectorConfiguration;
    this._description = config.description;
    this._id = config.id;
    this._kafkaconnectVersion = config.kafkaconnectVersion;
    this._name = config.name;
    this._region = config.region;
    this._serviceExecutionRoleArn = config.serviceExecutionRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._capacity.internalValue = config.capacity;
    this._kafkaCluster.internalValue = config.kafkaCluster;
    this._kafkaClusterClientAuthentication.internalValue = config.kafkaClusterClientAuthentication;
    this._kafkaClusterEncryptionInTransit.internalValue = config.kafkaClusterEncryptionInTransit;
    this._logDelivery.internalValue = config.logDelivery;
    this._plugin.internalValue = config.plugin;
    this._timeouts.internalValue = config.timeouts;
    this._workerConfiguration.internalValue = config.workerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connector_configuration - computed: false, optional: false, required: true
  private _connectorConfiguration?: { [key: string]: string }; 
  public get connectorConfiguration() {
    return this.getStringMapAttribute('connector_configuration');
  }
  public set connectorConfiguration(value: { [key: string]: string }) {
    this._connectorConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorConfigurationInput() {
    return this._connectorConfiguration;
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

  // kafkaconnect_version - computed: false, optional: false, required: true
  private _kafkaconnectVersion?: string; 
  public get kafkaconnectVersion() {
    return this.getStringAttribute('kafkaconnect_version');
  }
  public set kafkaconnectVersion(value: string) {
    this._kafkaconnectVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaconnectVersionInput() {
    return this._kafkaconnectVersion;
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

  // service_execution_role_arn - computed: false, optional: false, required: true
  private _serviceExecutionRoleArn?: string; 
  public get serviceExecutionRoleArn() {
    return this.getStringAttribute('service_execution_role_arn');
  }
  public set serviceExecutionRoleArn(value: string) {
    this._serviceExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExecutionRoleArnInput() {
    return this._serviceExecutionRoleArn;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity = new AwsConnector.CapacityPropertyOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: AwsConnector.CapacityProperty) {
    this._capacity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // kafka_cluster - computed: false, optional: false, required: true
  private _kafkaCluster = new AwsConnector.KafkaClusterPropertyOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: AwsConnector.KafkaClusterProperty) {
    this._kafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster.internalValue;
  }

  // kafka_cluster_client_authentication - computed: false, optional: false, required: true
  private _kafkaClusterClientAuthentication = new AwsConnector.KafkaClusterClientAuthenticationPropertyOutputReference(this, "kafka_cluster_client_authentication");
  public get kafkaClusterClientAuthentication() {
    return this._kafkaClusterClientAuthentication;
  }
  public putKafkaClusterClientAuthentication(value: AwsConnector.KafkaClusterClientAuthenticationProperty) {
    this._kafkaClusterClientAuthentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterClientAuthenticationInput() {
    return this._kafkaClusterClientAuthentication.internalValue;
  }

  // kafka_cluster_encryption_in_transit - computed: false, optional: false, required: true
  private _kafkaClusterEncryptionInTransit = new AwsConnector.KafkaClusterEncryptionInTransitPropertyOutputReference(this, "kafka_cluster_encryption_in_transit");
  public get kafkaClusterEncryptionInTransit() {
    return this._kafkaClusterEncryptionInTransit;
  }
  public putKafkaClusterEncryptionInTransit(value: AwsConnector.KafkaClusterEncryptionInTransitProperty) {
    this._kafkaClusterEncryptionInTransit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterEncryptionInTransitInput() {
    return this._kafkaClusterEncryptionInTransit.internalValue;
  }

  // log_delivery - computed: false, optional: true, required: false
  private _logDelivery = new AwsConnector.LogDeliveryPropertyOutputReference(this, "log_delivery");
  public get logDelivery() {
    return this._logDelivery;
  }
  public putLogDelivery(value: AwsConnector.LogDeliveryProperty) {
    this._logDelivery.internalValue = value;
  }
  public resetLogDelivery() {
    this._logDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryInput() {
    return this._logDelivery.internalValue;
  }

  // plugin - computed: false, optional: false, required: true
  private _plugin = new AwsConnector.PluginPropertyList(this, "plugin", true);
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: AwsConnector.PluginProperty[] | cdktn.IResolvable) {
    this._plugin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsConnector.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsConnector.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // worker_configuration - computed: false, optional: true, required: false
  private _workerConfiguration = new AwsConnector.WorkerConfigurationPropertyOutputReference(this, "worker_configuration");
  public get workerConfiguration() {
    return this._workerConfiguration;
  }
  public putWorkerConfiguration(value: AwsConnector.WorkerConfigurationProperty) {
    this._workerConfiguration.internalValue = value;
  }
  public resetWorkerConfiguration() {
    this._workerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigurationInput() {
    return this._workerConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connector_configuration: cdktn.hashMapper(cdktn.stringToTerraform)(this._connectorConfiguration),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      kafkaconnect_version: cdktn.stringToTerraform(this._kafkaconnectVersion),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      service_execution_role_arn: cdktn.stringToTerraform(this._serviceExecutionRoleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      capacity: awsConnectorCapacityPropertyToTerraform(this._capacity.internalValue),
      kafka_cluster: awsConnectorKafkaClusterPropertyToTerraform(this._kafkaCluster.internalValue),
      kafka_cluster_client_authentication: awsConnectorKafkaClusterClientAuthenticationPropertyToTerraform(this._kafkaClusterClientAuthentication.internalValue),
      kafka_cluster_encryption_in_transit: awsConnectorKafkaClusterEncryptionInTransitPropertyToTerraform(this._kafkaClusterEncryptionInTransit.internalValue),
      log_delivery: awsConnectorLogDeliveryPropertyToTerraform(this._logDelivery.internalValue),
      plugin: cdktn.listMapper(awsConnectorPluginPropertyToTerraform, true)(this._plugin.internalValue),
      timeouts: awsConnectorTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      worker_configuration: awsConnectorWorkerConfigurationPropertyToTerraform(this._workerConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_configuration: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._connectorConfiguration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
      kafkaconnect_version: {
        value: cdktn.stringToHclTerraform(this._kafkaconnectVersion),
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
      service_execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._serviceExecutionRoleArn),
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
      capacity: {
        value: awsConnectorCapacityPropertyToHclTerraform(this._capacity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnector.CapacityPropertyList",
      },
      kafka_cluster: {
        value: awsConnectorKafkaClusterPropertyToHclTerraform(this._kafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnector.KafkaClusterPropertyList",
      },
      kafka_cluster_client_authentication: {
        value: awsConnectorKafkaClusterClientAuthenticationPropertyToHclTerraform(this._kafkaClusterClientAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnector.KafkaClusterClientAuthenticationPropertyList",
      },
      kafka_cluster_encryption_in_transit: {
        value: awsConnectorKafkaClusterEncryptionInTransitPropertyToHclTerraform(this._kafkaClusterEncryptionInTransit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnector.KafkaClusterEncryptionInTransitPropertyList",
      },
      log_delivery: {
        value: awsConnectorLogDeliveryPropertyToHclTerraform(this._logDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnector.LogDeliveryPropertyList",
      },
      plugin: {
        value: cdktn.listMapperHcl(awsConnectorPluginPropertyToHclTerraform, true)(this._plugin.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsConnector.PluginPropertyList",
      },
      timeouts: {
        value: awsConnectorTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsConnector.TimeoutsProperty",
      },
      worker_configuration: {
        value: awsConnectorWorkerConfigurationPropertyToHclTerraform(this._workerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnector.WorkerConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsConnectorScaleInPolicyPropertyToTerraform(struct?: AwsConnector.ScaleInPolicyPropertyOutputReference | AwsConnector.ScaleInPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu_utilization_percentage: cdktn.numberToTerraform(struct!.cpuUtilizationPercentage),
  }
}


export function awsConnectorScaleInPolicyPropertyToHclTerraform(struct?: AwsConnector.ScaleInPolicyPropertyOutputReference | AwsConnector.ScaleInPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu_utilization_percentage: {
      value: cdktn.numberToHclTerraform(struct!.cpuUtilizationPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorScaleOutPolicyPropertyToTerraform(struct?: AwsConnector.ScaleOutPolicyPropertyOutputReference | AwsConnector.ScaleOutPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu_utilization_percentage: cdktn.numberToTerraform(struct!.cpuUtilizationPercentage),
  }
}


export function awsConnectorScaleOutPolicyPropertyToHclTerraform(struct?: AwsConnector.ScaleOutPolicyPropertyOutputReference | AwsConnector.ScaleOutPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu_utilization_percentage: {
      value: cdktn.numberToHclTerraform(struct!.cpuUtilizationPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorAutoscalingPropertyToTerraform(struct?: AwsConnector.AutoscalingPropertyOutputReference | AwsConnector.AutoscalingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_worker_count: cdktn.numberToTerraform(struct!.maxWorkerCount),
    mcu_count: cdktn.numberToTerraform(struct!.mcuCount),
    min_worker_count: cdktn.numberToTerraform(struct!.minWorkerCount),
    scale_in_policy: awsConnectorScaleInPolicyPropertyToTerraform(struct!.scaleInPolicy),
    scale_out_policy: awsConnectorScaleOutPolicyPropertyToTerraform(struct!.scaleOutPolicy),
  }
}


export function awsConnectorAutoscalingPropertyToHclTerraform(struct?: AwsConnector.AutoscalingPropertyOutputReference | AwsConnector.AutoscalingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_worker_count: {
      value: cdktn.numberToHclTerraform(struct!.maxWorkerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcu_count: {
      value: cdktn.numberToHclTerraform(struct!.mcuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_worker_count: {
      value: cdktn.numberToHclTerraform(struct!.minWorkerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_in_policy: {
      value: awsConnectorScaleInPolicyPropertyToHclTerraform(struct!.scaleInPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleInPolicyPropertyList",
    },
    scale_out_policy: {
      value: awsConnectorScaleOutPolicyPropertyToHclTerraform(struct!.scaleOutPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleOutPolicyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorProvisionedCapacityPropertyToTerraform(struct?: AwsConnector.ProvisionedCapacityPropertyOutputReference | AwsConnector.ProvisionedCapacityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mcu_count: cdktn.numberToTerraform(struct!.mcuCount),
    worker_count: cdktn.numberToTerraform(struct!.workerCount),
  }
}


export function awsConnectorProvisionedCapacityPropertyToHclTerraform(struct?: AwsConnector.ProvisionedCapacityPropertyOutputReference | AwsConnector.ProvisionedCapacityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mcu_count: {
      value: cdktn.numberToHclTerraform(struct!.mcuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    worker_count: {
      value: cdktn.numberToHclTerraform(struct!.workerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorCapacityPropertyToTerraform(struct?: AwsConnector.CapacityPropertyOutputReference | AwsConnector.CapacityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    autoscaling: awsConnectorAutoscalingPropertyToTerraform(struct!.autoscaling),
    provisioned_capacity: awsConnectorProvisionedCapacityPropertyToTerraform(struct!.provisionedCapacity),
  }
}


export function awsConnectorCapacityPropertyToHclTerraform(struct?: AwsConnector.CapacityPropertyOutputReference | AwsConnector.CapacityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    autoscaling: {
      value: awsConnectorAutoscalingPropertyToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingPropertyList",
    },
    provisioned_capacity: {
      value: awsConnectorProvisionedCapacityPropertyToHclTerraform(struct!.provisionedCapacity),
      isBlock: true,
      type: "list",
      storageClassType: "ProvisionedCapacityPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorVpcPropertyToTerraform(struct?: AwsConnector.VpcPropertyOutputReference | AwsConnector.VpcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function awsConnectorVpcPropertyToHclTerraform(struct?: AwsConnector.VpcPropertyOutputReference | AwsConnector.VpcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsConnectorApacheKafkaClusterPropertyToTerraform(struct?: AwsConnector.ApacheKafkaClusterPropertyOutputReference | AwsConnector.ApacheKafkaClusterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bootstrap_servers: cdktn.stringToTerraform(struct!.bootstrapServers),
    vpc: awsConnectorVpcPropertyToTerraform(struct!.vpc),
  }
}


export function awsConnectorApacheKafkaClusterPropertyToHclTerraform(struct?: AwsConnector.ApacheKafkaClusterPropertyOutputReference | AwsConnector.ApacheKafkaClusterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bootstrap_servers: {
      value: cdktn.stringToHclTerraform(struct!.bootstrapServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: awsConnectorVpcPropertyToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "list",
      storageClassType: "VpcPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorKafkaClusterPropertyToTerraform(struct?: AwsConnector.KafkaClusterPropertyOutputReference | AwsConnector.KafkaClusterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apache_kafka_cluster: awsConnectorApacheKafkaClusterPropertyToTerraform(struct!.apacheKafkaCluster),
  }
}


export function awsConnectorKafkaClusterPropertyToHclTerraform(struct?: AwsConnector.KafkaClusterPropertyOutputReference | AwsConnector.KafkaClusterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apache_kafka_cluster: {
      value: awsConnectorApacheKafkaClusterPropertyToHclTerraform(struct!.apacheKafkaCluster),
      isBlock: true,
      type: "list",
      storageClassType: "ApacheKafkaClusterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorKafkaClusterClientAuthenticationPropertyToTerraform(struct?: AwsConnector.KafkaClusterClientAuthenticationPropertyOutputReference | AwsConnector.KafkaClusterClientAuthenticationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
  }
}


export function awsConnectorKafkaClusterClientAuthenticationPropertyToHclTerraform(struct?: AwsConnector.KafkaClusterClientAuthenticationPropertyOutputReference | AwsConnector.KafkaClusterClientAuthenticationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorKafkaClusterEncryptionInTransitPropertyToTerraform(struct?: AwsConnector.KafkaClusterEncryptionInTransitPropertyOutputReference | AwsConnector.KafkaClusterEncryptionInTransitProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
  }
}


export function awsConnectorKafkaClusterEncryptionInTransitPropertyToHclTerraform(struct?: AwsConnector.KafkaClusterEncryptionInTransitPropertyOutputReference | AwsConnector.KafkaClusterEncryptionInTransitProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorCloudwatchLogsPropertyToTerraform(struct?: AwsConnector.CloudwatchLogsPropertyOutputReference | AwsConnector.CloudwatchLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group: cdktn.stringToTerraform(struct!.logGroup),
  }
}


export function awsConnectorCloudwatchLogsPropertyToHclTerraform(struct?: AwsConnector.CloudwatchLogsPropertyOutputReference | AwsConnector.CloudwatchLogsProperty): any {
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
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorFirehosePropertyToTerraform(struct?: AwsConnector.FirehosePropertyOutputReference | AwsConnector.FirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsConnectorFirehosePropertyToHclTerraform(struct?: AwsConnector.FirehosePropertyOutputReference | AwsConnector.FirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorS3PropertyToTerraform(struct?: AwsConnector.S3PropertyOutputReference | AwsConnector.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function awsConnectorS3PropertyToHclTerraform(struct?: AwsConnector.S3PropertyOutputReference | AwsConnector.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorWorkerLogDeliveryPropertyToTerraform(struct?: AwsConnector.WorkerLogDeliveryPropertyOutputReference | AwsConnector.WorkerLogDeliveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs: awsConnectorCloudwatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
    firehose: awsConnectorFirehosePropertyToTerraform(struct!.firehose),
    s3: awsConnectorS3PropertyToTerraform(struct!.s3),
  }
}


export function awsConnectorWorkerLogDeliveryPropertyToHclTerraform(struct?: AwsConnector.WorkerLogDeliveryPropertyOutputReference | AwsConnector.WorkerLogDeliveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs: {
      value: awsConnectorCloudwatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogsPropertyList",
    },
    firehose: {
      value: awsConnectorFirehosePropertyToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "list",
      storageClassType: "FirehosePropertyList",
    },
    s3: {
      value: awsConnectorS3PropertyToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "S3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorLogDeliveryPropertyToTerraform(struct?: AwsConnector.LogDeliveryPropertyOutputReference | AwsConnector.LogDeliveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    worker_log_delivery: awsConnectorWorkerLogDeliveryPropertyToTerraform(struct!.workerLogDelivery),
  }
}


export function awsConnectorLogDeliveryPropertyToHclTerraform(struct?: AwsConnector.LogDeliveryPropertyOutputReference | AwsConnector.LogDeliveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    worker_log_delivery: {
      value: awsConnectorWorkerLogDeliveryPropertyToHclTerraform(struct!.workerLogDelivery),
      isBlock: true,
      type: "list",
      storageClassType: "WorkerLogDeliveryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorCustomPluginPropertyToTerraform(struct?: AwsConnector.CustomPluginPropertyOutputReference | AwsConnector.CustomPluginProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    revision: cdktn.numberToTerraform(struct!.revision),
  }
}


export function awsConnectorCustomPluginPropertyToHclTerraform(struct?: AwsConnector.CustomPluginPropertyOutputReference | AwsConnector.CustomPluginProperty): any {
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
    revision: {
      value: cdktn.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorPluginPropertyToTerraform(struct?: AwsConnector.PluginProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_plugin: awsConnectorCustomPluginPropertyToTerraform(struct!.customPlugin),
  }
}


export function awsConnectorPluginPropertyToHclTerraform(struct?: AwsConnector.PluginProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_plugin: {
      value: awsConnectorCustomPluginPropertyToHclTerraform(struct!.customPlugin),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPluginPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectorTimeoutsPropertyToTerraform(struct?: AwsConnector.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsConnectorTimeoutsPropertyToHclTerraform(struct?: AwsConnector.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsConnectorWorkerConfigurationPropertyToTerraform(struct?: AwsConnector.WorkerConfigurationPropertyOutputReference | AwsConnector.WorkerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    revision: cdktn.numberToTerraform(struct!.revision),
  }
}


export function awsConnectorWorkerConfigurationPropertyToHclTerraform(struct?: AwsConnector.WorkerConfigurationPropertyOutputReference | AwsConnector.WorkerConfigurationProperty): any {
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
    revision: {
      value: cdktn.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsConnector {
export interface ScaleInPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#cpu_utilization_percentage AwsConnector#cpu_utilization_percentage}
  */
  readonly cpuUtilizationPercentage?: number;
}
export class ScaleInPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleInPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUtilizationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilizationPercentage = this._cpuUtilizationPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleInPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUtilizationPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUtilizationPercentage = value.cpuUtilizationPercentage;
    }
  }

  // cpu_utilization_percentage - computed: true, optional: true, required: false
  private _cpuUtilizationPercentage?: number; 
  public get cpuUtilizationPercentage() {
    return this.getNumberAttribute('cpu_utilization_percentage');
  }
  public set cpuUtilizationPercentage(value: number) {
    this._cpuUtilizationPercentage = value;
  }
  public resetCpuUtilizationPercentage() {
    this._cpuUtilizationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationPercentageInput() {
    return this._cpuUtilizationPercentage;
  }
}
export interface ScaleOutPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#cpu_utilization_percentage AwsConnector#cpu_utilization_percentage}
  */
  readonly cpuUtilizationPercentage?: number;
}
export class ScaleOutPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleOutPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUtilizationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilizationPercentage = this._cpuUtilizationPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleOutPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUtilizationPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUtilizationPercentage = value.cpuUtilizationPercentage;
    }
  }

  // cpu_utilization_percentage - computed: true, optional: true, required: false
  private _cpuUtilizationPercentage?: number; 
  public get cpuUtilizationPercentage() {
    return this.getNumberAttribute('cpu_utilization_percentage');
  }
  public set cpuUtilizationPercentage(value: number) {
    this._cpuUtilizationPercentage = value;
  }
  public resetCpuUtilizationPercentage() {
    this._cpuUtilizationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationPercentageInput() {
    return this._cpuUtilizationPercentage;
  }
}
export interface AutoscalingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#max_worker_count AwsConnector#max_worker_count}
  */
  readonly maxWorkerCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#mcu_count AwsConnector#mcu_count}
  */
  readonly mcuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#min_worker_count AwsConnector#min_worker_count}
  */
  readonly minWorkerCount: number;
  /**
  * scale_in_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#scale_in_policy AwsConnector#scale_in_policy}
  */
  readonly scaleInPolicy?: ScaleInPolicyProperty;
  /**
  * scale_out_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#scale_out_policy AwsConnector#scale_out_policy}
  */
  readonly scaleOutPolicy?: ScaleOutPolicyProperty;
}
export class AutoscalingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkerCount = this._maxWorkerCount;
    }
    if (this._mcuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcuCount = this._mcuCount;
    }
    if (this._minWorkerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkerCount = this._minWorkerCount;
    }
    if (this._scaleInPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInPolicy = this._scaleInPolicy?.internalValue;
    }
    if (this._scaleOutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutPolicy = this._scaleOutPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkerCount = undefined;
      this._mcuCount = undefined;
      this._minWorkerCount = undefined;
      this._scaleInPolicy.internalValue = undefined;
      this._scaleOutPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkerCount = value.maxWorkerCount;
      this._mcuCount = value.mcuCount;
      this._minWorkerCount = value.minWorkerCount;
      this._scaleInPolicy.internalValue = value.scaleInPolicy;
      this._scaleOutPolicy.internalValue = value.scaleOutPolicy;
    }
  }

  // max_worker_count - computed: false, optional: false, required: true
  private _maxWorkerCount?: number; 
  public get maxWorkerCount() {
    return this.getNumberAttribute('max_worker_count');
  }
  public set maxWorkerCount(value: number) {
    this._maxWorkerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerCountInput() {
    return this._maxWorkerCount;
  }

  // mcu_count - computed: false, optional: true, required: false
  private _mcuCount?: number; 
  public get mcuCount() {
    return this.getNumberAttribute('mcu_count');
  }
  public set mcuCount(value: number) {
    this._mcuCount = value;
  }
  public resetMcuCount() {
    this._mcuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcuCountInput() {
    return this._mcuCount;
  }

  // min_worker_count - computed: false, optional: false, required: true
  private _minWorkerCount?: number; 
  public get minWorkerCount() {
    return this.getNumberAttribute('min_worker_count');
  }
  public set minWorkerCount(value: number) {
    this._minWorkerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkerCountInput() {
    return this._minWorkerCount;
  }

  // scale_in_policy - computed: false, optional: true, required: false
  private _scaleInPolicy = new ScaleInPolicyPropertyOutputReference(this, "scale_in_policy");
  public get scaleInPolicy() {
    return this._scaleInPolicy;
  }
  public putScaleInPolicy(value: ScaleInPolicyProperty) {
    this._scaleInPolicy.internalValue = value;
  }
  public resetScaleInPolicy() {
    this._scaleInPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInPolicyInput() {
    return this._scaleInPolicy.internalValue;
  }

  // scale_out_policy - computed: false, optional: true, required: false
  private _scaleOutPolicy = new ScaleOutPolicyPropertyOutputReference(this, "scale_out_policy");
  public get scaleOutPolicy() {
    return this._scaleOutPolicy;
  }
  public putScaleOutPolicy(value: ScaleOutPolicyProperty) {
    this._scaleOutPolicy.internalValue = value;
  }
  public resetScaleOutPolicy() {
    this._scaleOutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutPolicyInput() {
    return this._scaleOutPolicy.internalValue;
  }
}
export interface ProvisionedCapacityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#mcu_count AwsConnector#mcu_count}
  */
  readonly mcuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#worker_count AwsConnector#worker_count}
  */
  readonly workerCount: number;
}
export class ProvisionedCapacityPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProvisionedCapacityProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mcuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcuCount = this._mcuCount;
    }
    if (this._workerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerCount = this._workerCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProvisionedCapacityProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mcuCount = undefined;
      this._workerCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mcuCount = value.mcuCount;
      this._workerCount = value.workerCount;
    }
  }

  // mcu_count - computed: false, optional: true, required: false
  private _mcuCount?: number; 
  public get mcuCount() {
    return this.getNumberAttribute('mcu_count');
  }
  public set mcuCount(value: number) {
    this._mcuCount = value;
  }
  public resetMcuCount() {
    this._mcuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcuCountInput() {
    return this._mcuCount;
  }

  // worker_count - computed: false, optional: false, required: true
  private _workerCount?: number; 
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
  public set workerCount(value: number) {
    this._workerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerCountInput() {
    return this._workerCount;
  }
}
export interface CapacityProperty {
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#autoscaling AwsConnector#autoscaling}
  */
  readonly autoscaling?: AutoscalingProperty;
  /**
  * provisioned_capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#provisioned_capacity AwsConnector#provisioned_capacity}
  */
  readonly provisionedCapacity?: ProvisionedCapacityProperty;
}
export class CapacityPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacityProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._provisionedCapacity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedCapacity = this._provisionedCapacity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscaling.internalValue = undefined;
      this._provisionedCapacity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscaling.internalValue = value.autoscaling;
      this._provisionedCapacity.internalValue = value.provisionedCapacity;
    }
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new AutoscalingPropertyOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: AutoscalingProperty) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // provisioned_capacity - computed: false, optional: true, required: false
  private _provisionedCapacity = new ProvisionedCapacityPropertyOutputReference(this, "provisioned_capacity");
  public get provisionedCapacity() {
    return this._provisionedCapacity;
  }
  public putProvisionedCapacity(value: ProvisionedCapacityProperty) {
    this._provisionedCapacity.internalValue = value;
  }
  public resetProvisionedCapacity() {
    this._provisionedCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedCapacityInput() {
    return this._provisionedCapacity.internalValue;
  }
}
export interface VpcProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#security_groups AwsConnector#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#subnets AwsConnector#subnets}
  */
  readonly subnets: string[];
}
export class VpcPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: VpcProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
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
export interface ApacheKafkaClusterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#bootstrap_servers AwsConnector#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#vpc AwsConnector#vpc}
  */
  readonly vpc: VpcProperty;
}
export class ApacheKafkaClusterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApacheKafkaClusterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApacheKafkaClusterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootstrapServers = undefined;
      this._vpc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootstrapServers = value.bootstrapServers;
      this._vpc.internalValue = value.vpc;
    }
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc = new VpcPropertyOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: VpcProperty) {
    this._vpc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}
export interface KafkaClusterProperty {
  /**
  * apache_kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#apache_kafka_cluster AwsConnector#apache_kafka_cluster}
  */
  readonly apacheKafkaCluster: ApacheKafkaClusterProperty;
}
export class KafkaClusterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaClusterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apacheKafkaCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apacheKafkaCluster = this._apacheKafkaCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apacheKafkaCluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apacheKafkaCluster.internalValue = value.apacheKafkaCluster;
    }
  }

  // apache_kafka_cluster - computed: false, optional: false, required: true
  private _apacheKafkaCluster = new ApacheKafkaClusterPropertyOutputReference(this, "apache_kafka_cluster");
  public get apacheKafkaCluster() {
    return this._apacheKafkaCluster;
  }
  public putApacheKafkaCluster(value: ApacheKafkaClusterProperty) {
    this._apacheKafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apacheKafkaClusterInput() {
    return this._apacheKafkaCluster.internalValue;
  }
}
export interface KafkaClusterClientAuthenticationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#authentication_type AwsConnector#authentication_type}
  */
  readonly authenticationType?: string;
}
export class KafkaClusterClientAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaClusterClientAuthenticationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterClientAuthenticationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }
}
export interface KafkaClusterEncryptionInTransitProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#encryption_type AwsConnector#encryption_type}
  */
  readonly encryptionType?: string;
}
export class KafkaClusterEncryptionInTransitPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaClusterEncryptionInTransitProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterEncryptionInTransitProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionType = value.encryptionType;
    }
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }
}
export interface CloudwatchLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#enabled AwsConnector#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#log_group AwsConnector#log_group}
  */
  readonly logGroup?: string;
}
export class CloudwatchLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
    }
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

  // log_group - computed: false, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}
export interface FirehoseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#delivery_stream AwsConnector#delivery_stream}
  */
  readonly deliveryStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#enabled AwsConnector#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}
export class FirehosePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirehoseProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirehoseProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryStream = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryStream = value.deliveryStream;
      this._enabled = value.enabled;
    }
  }

  // delivery_stream - computed: false, optional: true, required: false
  private _deliveryStream?: string; 
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
  public set deliveryStream(value: string) {
    this._deliveryStream = value;
  }
  public resetDeliveryStream() {
    this._deliveryStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamInput() {
    return this._deliveryStream;
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
}
export interface S3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#bucket AwsConnector#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#enabled AwsConnector#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#prefix AwsConnector#prefix}
  */
  readonly prefix?: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._enabled = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._enabled = value.enabled;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface WorkerLogDeliveryProperty {
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#cloudwatch_logs AwsConnector#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: CloudwatchLogsProperty;
  /**
  * firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#firehose AwsConnector#firehose}
  */
  readonly firehose?: FirehoseProperty;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#s3 AwsConnector#s3}
  */
  readonly s3?: S3Property;
}
export class WorkerLogDeliveryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkerLogDeliveryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerLogDeliveryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogs.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._firehose.internalValue = value.firehose;
      this._s3.internalValue = value.s3;
    }
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new CloudwatchLogsPropertyOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: CloudwatchLogsProperty) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new FirehosePropertyOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: FirehoseProperty) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new S3PropertyOutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: S3Property) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface LogDeliveryProperty {
  /**
  * worker_log_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#worker_log_delivery AwsConnector#worker_log_delivery}
  */
  readonly workerLogDelivery: WorkerLogDeliveryProperty;
}
export class LogDeliveryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogDeliveryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerLogDelivery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerLogDelivery = this._workerLogDelivery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogDeliveryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workerLogDelivery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workerLogDelivery.internalValue = value.workerLogDelivery;
    }
  }

  // worker_log_delivery - computed: false, optional: false, required: true
  private _workerLogDelivery = new WorkerLogDeliveryPropertyOutputReference(this, "worker_log_delivery");
  public get workerLogDelivery() {
    return this._workerLogDelivery;
  }
  public putWorkerLogDelivery(value: WorkerLogDeliveryProperty) {
    this._workerLogDelivery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerLogDeliveryInput() {
    return this._workerLogDelivery.internalValue;
  }
}
export interface CustomPluginProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#arn AwsConnector#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#revision AwsConnector#revision}
  */
  readonly revision: number;
}
export class CustomPluginPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPluginProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPluginProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._revision = value.revision;
    }
  }

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

  // revision - computed: false, optional: false, required: true
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface PluginProperty {
  /**
  * custom_plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#custom_plugin AwsConnector#custom_plugin}
  */
  readonly customPlugin: CustomPluginProperty;
}
export class PluginPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PluginProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPlugin = this._customPlugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PluginProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPlugin.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPlugin.internalValue = value.customPlugin;
    }
  }

  // custom_plugin - computed: false, optional: false, required: true
  private _customPlugin = new CustomPluginPropertyOutputReference(this, "custom_plugin");
  public get customPlugin() {
    return this._customPlugin;
  }
  public putCustomPlugin(value: CustomPluginProperty) {
    this._customPlugin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customPluginInput() {
    return this._customPlugin.internalValue;
  }
}

export class PluginPropertyList extends cdktn.ComplexList {
  public internalValue? : PluginProperty[] | cdktn.IResolvable

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
  public get(index: number): PluginPropertyOutputReference {
    return new PluginPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#create AwsConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#delete AwsConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#update AwsConnector#update}
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
export interface WorkerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#arn AwsConnector#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mskconnect_connector#revision AwsConnector#revision}
  */
  readonly revision: number;
}
export class WorkerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkerConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._revision = value.revision;
    }
  }

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

  // revision - computed: false, optional: false, required: true
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
}
