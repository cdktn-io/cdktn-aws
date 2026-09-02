// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#cluster_name TfCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#enhanced_monitoring TfCluster#enhanced_monitoring}
  */
  readonly enhancedMonitoring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#id TfCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#kafka_version TfCluster#kafka_version}
  */
  readonly kafkaVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#number_of_broker_nodes TfCluster#number_of_broker_nodes}
  */
  readonly numberOfBrokerNodes: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#region TfCluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#storage_mode TfCluster#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#tags TfCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#tags_all TfCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * broker_node_group_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#broker_node_group_info TfCluster#broker_node_group_info}
  */
  readonly brokerNodeGroupInfo: TfCluster.BrokerNodeGroupInfoProperty;
  /**
  * client_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#client_authentication TfCluster#client_authentication}
  */
  readonly clientAuthentication?: TfCluster.ClientAuthenticationProperty;
  /**
  * configuration_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#configuration_info TfCluster#configuration_info}
  */
  readonly configurationInfo?: TfCluster.ConfigurationInfoProperty;
  /**
  * encryption_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#encryption_info TfCluster#encryption_info}
  */
  readonly encryptionInfo?: TfCluster.EncryptionInfoProperty;
  /**
  * logging_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#logging_info TfCluster#logging_info}
  */
  readonly loggingInfo?: TfCluster.LoggingInfoProperty;
  /**
  * open_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#open_monitoring TfCluster#open_monitoring}
  */
  readonly openMonitoring?: TfCluster.OpenMonitoringProperty;
  /**
  * rebalancing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#rebalancing TfCluster#rebalancing}
  */
  readonly rebalancing?: TfCluster.RebalancingProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#timeouts TfCluster#timeouts}
  */
  readonly timeouts?: TfCluster.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster aws_msk_cluster}
*/
export class TfCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_msk_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfCluster to import
  * @param importFromId The id of the existing TfCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_msk_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster aws_msk_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfClusterConfig
  */
  public constructor(scope: Construct, id: string, config: TfClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_cluster',
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
    this._clusterName = config.clusterName;
    this._enhancedMonitoring = config.enhancedMonitoring;
    this._id = config.id;
    this._kafkaVersion = config.kafkaVersion;
    this._numberOfBrokerNodes = config.numberOfBrokerNodes;
    this._region = config.region;
    this._storageMode = config.storageMode;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._brokerNodeGroupInfo.internalValue = config.brokerNodeGroupInfo;
    this._clientAuthentication.internalValue = config.clientAuthentication;
    this._configurationInfo.internalValue = config.configurationInfo;
    this._encryptionInfo.internalValue = config.encryptionInfo;
    this._loggingInfo.internalValue = config.loggingInfo;
    this._openMonitoring.internalValue = config.openMonitoring;
    this._rebalancing.internalValue = config.rebalancing;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bootstrap_brokers - computed: true, optional: false, required: false
  public get bootstrapBrokers() {
    return this.getStringAttribute('bootstrap_brokers');
  }

  // bootstrap_brokers_ipv6 - computed: true, optional: false, required: false
  public get bootstrapBrokersIpv6() {
    return this.getStringAttribute('bootstrap_brokers_ipv6');
  }

  // bootstrap_brokers_public_sasl_iam - computed: true, optional: false, required: false
  public get bootstrapBrokersPublicSaslIam() {
    return this.getStringAttribute('bootstrap_brokers_public_sasl_iam');
  }

  // bootstrap_brokers_public_sasl_scram - computed: true, optional: false, required: false
  public get bootstrapBrokersPublicSaslScram() {
    return this.getStringAttribute('bootstrap_brokers_public_sasl_scram');
  }

  // bootstrap_brokers_public_tls - computed: true, optional: false, required: false
  public get bootstrapBrokersPublicTls() {
    return this.getStringAttribute('bootstrap_brokers_public_tls');
  }

  // bootstrap_brokers_sasl_iam - computed: true, optional: false, required: false
  public get bootstrapBrokersSaslIam() {
    return this.getStringAttribute('bootstrap_brokers_sasl_iam');
  }

  // bootstrap_brokers_sasl_iam_ipv6 - computed: true, optional: false, required: false
  public get bootstrapBrokersSaslIamIpv6() {
    return this.getStringAttribute('bootstrap_brokers_sasl_iam_ipv6');
  }

  // bootstrap_brokers_sasl_scram - computed: true, optional: false, required: false
  public get bootstrapBrokersSaslScram() {
    return this.getStringAttribute('bootstrap_brokers_sasl_scram');
  }

  // bootstrap_brokers_sasl_scram_ipv6 - computed: true, optional: false, required: false
  public get bootstrapBrokersSaslScramIpv6() {
    return this.getStringAttribute('bootstrap_brokers_sasl_scram_ipv6');
  }

  // bootstrap_brokers_tls - computed: true, optional: false, required: false
  public get bootstrapBrokersTls() {
    return this.getStringAttribute('bootstrap_brokers_tls');
  }

  // bootstrap_brokers_tls_ipv6 - computed: true, optional: false, required: false
  public get bootstrapBrokersTlsIpv6() {
    return this.getStringAttribute('bootstrap_brokers_tls_ipv6');
  }

  // bootstrap_brokers_vpc_connectivity_sasl_iam - computed: true, optional: false, required: false
  public get bootstrapBrokersVpcConnectivitySaslIam() {
    return this.getStringAttribute('bootstrap_brokers_vpc_connectivity_sasl_iam');
  }

  // bootstrap_brokers_vpc_connectivity_sasl_scram - computed: true, optional: false, required: false
  public get bootstrapBrokersVpcConnectivitySaslScram() {
    return this.getStringAttribute('bootstrap_brokers_vpc_connectivity_sasl_scram');
  }

  // bootstrap_brokers_vpc_connectivity_tls - computed: true, optional: false, required: false
  public get bootstrapBrokersVpcConnectivityTls() {
    return this.getStringAttribute('bootstrap_brokers_vpc_connectivity_tls');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_uuid - computed: true, optional: false, required: false
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // customer_action_status - computed: true, optional: false, required: false
  public get customerActionStatus() {
    return this.getStringAttribute('customer_action_status');
  }

  // enhanced_monitoring - computed: false, optional: true, required: false
  private _enhancedMonitoring?: string; 
  public get enhancedMonitoring() {
    return this.getStringAttribute('enhanced_monitoring');
  }
  public set enhancedMonitoring(value: string) {
    this._enhancedMonitoring = value;
  }
  public resetEnhancedMonitoring() {
    this._enhancedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitoringInput() {
    return this._enhancedMonitoring;
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

  // kafka_version - computed: false, optional: false, required: true
  private _kafkaVersion?: string; 
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion;
  }

  // number_of_broker_nodes - computed: false, optional: false, required: true
  private _numberOfBrokerNodes?: number; 
  public get numberOfBrokerNodes() {
    return this.getNumberAttribute('number_of_broker_nodes');
  }
  public set numberOfBrokerNodes(value: number) {
    this._numberOfBrokerNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfBrokerNodesInput() {
    return this._numberOfBrokerNodes;
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

  // storage_mode - computed: true, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
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

  // zookeeper_connect_string - computed: true, optional: false, required: false
  public get zookeeperConnectString() {
    return this.getStringAttribute('zookeeper_connect_string');
  }

  // zookeeper_connect_string_tls - computed: true, optional: false, required: false
  public get zookeeperConnectStringTls() {
    return this.getStringAttribute('zookeeper_connect_string_tls');
  }

  // broker_node_group_info - computed: false, optional: false, required: true
  private _brokerNodeGroupInfo = new TfCluster.BrokerNodeGroupInfoPropertyOutputReference(this, "broker_node_group_info");
  public get brokerNodeGroupInfo() {
    return this._brokerNodeGroupInfo;
  }
  public putBrokerNodeGroupInfo(value: TfCluster.BrokerNodeGroupInfoProperty) {
    this._brokerNodeGroupInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNodeGroupInfoInput() {
    return this._brokerNodeGroupInfo.internalValue;
  }

  // client_authentication - computed: false, optional: true, required: false
  private _clientAuthentication = new TfCluster.ClientAuthenticationPropertyOutputReference(this, "client_authentication");
  public get clientAuthentication() {
    return this._clientAuthentication;
  }
  public putClientAuthentication(value: TfCluster.ClientAuthenticationProperty) {
    this._clientAuthentication.internalValue = value;
  }
  public resetClientAuthentication() {
    this._clientAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationInput() {
    return this._clientAuthentication.internalValue;
  }

  // configuration_info - computed: false, optional: true, required: false
  private _configurationInfo = new TfCluster.ConfigurationInfoPropertyOutputReference(this, "configuration_info");
  public get configurationInfo() {
    return this._configurationInfo;
  }
  public putConfigurationInfo(value: TfCluster.ConfigurationInfoProperty) {
    this._configurationInfo.internalValue = value;
  }
  public resetConfigurationInfo() {
    this._configurationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInfoInput() {
    return this._configurationInfo.internalValue;
  }

  // encryption_info - computed: false, optional: true, required: false
  private _encryptionInfo = new TfCluster.EncryptionInfoPropertyOutputReference(this, "encryption_info");
  public get encryptionInfo() {
    return this._encryptionInfo;
  }
  public putEncryptionInfo(value: TfCluster.EncryptionInfoProperty) {
    this._encryptionInfo.internalValue = value;
  }
  public resetEncryptionInfo() {
    this._encryptionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInfoInput() {
    return this._encryptionInfo.internalValue;
  }

  // logging_info - computed: false, optional: true, required: false
  private _loggingInfo = new TfCluster.LoggingInfoPropertyOutputReference(this, "logging_info");
  public get loggingInfo() {
    return this._loggingInfo;
  }
  public putLoggingInfo(value: TfCluster.LoggingInfoProperty) {
    this._loggingInfo.internalValue = value;
  }
  public resetLoggingInfo() {
    this._loggingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInfoInput() {
    return this._loggingInfo.internalValue;
  }

  // open_monitoring - computed: false, optional: true, required: false
  private _openMonitoring = new TfCluster.OpenMonitoringPropertyOutputReference(this, "open_monitoring");
  public get openMonitoring() {
    return this._openMonitoring;
  }
  public putOpenMonitoring(value: TfCluster.OpenMonitoringProperty) {
    this._openMonitoring.internalValue = value;
  }
  public resetOpenMonitoring() {
    this._openMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openMonitoringInput() {
    return this._openMonitoring.internalValue;
  }

  // rebalancing - computed: false, optional: true, required: false
  private _rebalancing = new TfCluster.RebalancingPropertyOutputReference(this, "rebalancing");
  public get rebalancing() {
    return this._rebalancing;
  }
  public putRebalancing(value: TfCluster.RebalancingProperty) {
    this._rebalancing.internalValue = value;
  }
  public resetRebalancing() {
    this._rebalancing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalancingInput() {
    return this._rebalancing.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfCluster.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfCluster.TimeoutsProperty) {
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
      cluster_name: cdktn.stringToTerraform(this._clusterName),
      enhanced_monitoring: cdktn.stringToTerraform(this._enhancedMonitoring),
      id: cdktn.stringToTerraform(this._id),
      kafka_version: cdktn.stringToTerraform(this._kafkaVersion),
      number_of_broker_nodes: cdktn.numberToTerraform(this._numberOfBrokerNodes),
      region: cdktn.stringToTerraform(this._region),
      storage_mode: cdktn.stringToTerraform(this._storageMode),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      broker_node_group_info: tfClusterBrokerNodeGroupInfoPropertyToTerraform(this._brokerNodeGroupInfo.internalValue),
      client_authentication: tfClusterClientAuthenticationPropertyToTerraform(this._clientAuthentication.internalValue),
      configuration_info: tfClusterConfigurationInfoPropertyToTerraform(this._configurationInfo.internalValue),
      encryption_info: tfClusterEncryptionInfoPropertyToTerraform(this._encryptionInfo.internalValue),
      logging_info: tfClusterLoggingInfoPropertyToTerraform(this._loggingInfo.internalValue),
      open_monitoring: tfClusterOpenMonitoringPropertyToTerraform(this._openMonitoring.internalValue),
      rebalancing: tfClusterRebalancingPropertyToTerraform(this._rebalancing.internalValue),
      timeouts: tfClusterTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktn.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_monitoring: {
        value: cdktn.stringToHclTerraform(this._enhancedMonitoring),
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
      kafka_version: {
        value: cdktn.stringToHclTerraform(this._kafkaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_broker_nodes: {
        value: cdktn.numberToHclTerraform(this._numberOfBrokerNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_mode: {
        value: cdktn.stringToHclTerraform(this._storageMode),
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
      broker_node_group_info: {
        value: tfClusterBrokerNodeGroupInfoPropertyToHclTerraform(this._brokerNodeGroupInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfCluster.BrokerNodeGroupInfoPropertyList",
      },
      client_authentication: {
        value: tfClusterClientAuthenticationPropertyToHclTerraform(this._clientAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfCluster.ClientAuthenticationPropertyList",
      },
      configuration_info: {
        value: tfClusterConfigurationInfoPropertyToHclTerraform(this._configurationInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfCluster.ConfigurationInfoPropertyList",
      },
      encryption_info: {
        value: tfClusterEncryptionInfoPropertyToHclTerraform(this._encryptionInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfCluster.EncryptionInfoPropertyList",
      },
      logging_info: {
        value: tfClusterLoggingInfoPropertyToHclTerraform(this._loggingInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfCluster.LoggingInfoPropertyList",
      },
      open_monitoring: {
        value: tfClusterOpenMonitoringPropertyToHclTerraform(this._openMonitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfCluster.OpenMonitoringPropertyList",
      },
      rebalancing: {
        value: tfClusterRebalancingPropertyToHclTerraform(this._rebalancing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfCluster.RebalancingPropertyList",
      },
      timeouts: {
        value: tfClusterTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfCluster.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfClusterPublicAccessPropertyToTerraform(struct?: TfCluster.PublicAccessPropertyOutputReference | TfCluster.PublicAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfClusterPublicAccessPropertyToHclTerraform(struct?: TfCluster.PublicAccessPropertyOutputReference | TfCluster.PublicAccessProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslPropertyToTerraform(struct?: TfCluster.BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslPropertyOutputReference | TfCluster.BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam: cdktn.booleanToTerraform(struct!.iam),
    scram: cdktn.booleanToTerraform(struct!.scram),
  }
}


export function tfClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslPropertyToHclTerraform(struct?: TfCluster.BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslPropertyOutputReference | TfCluster.BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam: {
      value: cdktn.booleanToHclTerraform(struct!.iam),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scram: {
      value: cdktn.booleanToHclTerraform(struct!.scram),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationPropertyToTerraform(struct?: TfCluster.BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationPropertyOutputReference | TfCluster.BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tls: cdktn.booleanToTerraform(struct!.tls),
    sasl: tfClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslPropertyToTerraform(struct!.sasl),
  }
}


export function tfClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationPropertyToHclTerraform(struct?: TfCluster.BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationPropertyOutputReference | TfCluster.BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tls: {
      value: cdktn.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sasl: {
      value: tfClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslPropertyToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "list",
      storageClassType: "BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterVpcConnectivityPropertyToTerraform(struct?: TfCluster.VpcConnectivityPropertyOutputReference | TfCluster.VpcConnectivityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_authentication: tfClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationPropertyToTerraform(struct!.clientAuthentication),
  }
}


export function tfClusterVpcConnectivityPropertyToHclTerraform(struct?: TfCluster.VpcConnectivityPropertyOutputReference | TfCluster.VpcConnectivityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_authentication: {
      value: tfClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationPropertyToHclTerraform(struct!.clientAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterConnectivityInfoPropertyToTerraform(struct?: TfCluster.ConnectivityInfoPropertyOutputReference | TfCluster.ConnectivityInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_type: cdktn.stringToTerraform(struct!.networkType),
    public_access: tfClusterPublicAccessPropertyToTerraform(struct!.publicAccess),
    vpc_connectivity: tfClusterVpcConnectivityPropertyToTerraform(struct!.vpcConnectivity),
  }
}


export function tfClusterConnectivityInfoPropertyToHclTerraform(struct?: TfCluster.ConnectivityInfoPropertyOutputReference | TfCluster.ConnectivityInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_type: {
      value: cdktn.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_access: {
      value: tfClusterPublicAccessPropertyToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "PublicAccessPropertyList",
    },
    vpc_connectivity: {
      value: tfClusterVpcConnectivityPropertyToHclTerraform(struct!.vpcConnectivity),
      isBlock: true,
      type: "list",
      storageClassType: "VpcConnectivityPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterProvisionedThroughputPropertyToTerraform(struct?: TfCluster.ProvisionedThroughputPropertyOutputReference | TfCluster.ProvisionedThroughputProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    volume_throughput: cdktn.numberToTerraform(struct!.volumeThroughput),
  }
}


export function tfClusterProvisionedThroughputPropertyToHclTerraform(struct?: TfCluster.ProvisionedThroughputPropertyOutputReference | TfCluster.ProvisionedThroughputProperty): any {
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
    volume_throughput: {
      value: cdktn.numberToHclTerraform(struct!.volumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterEbsStorageInfoPropertyToTerraform(struct?: TfCluster.EbsStorageInfoPropertyOutputReference | TfCluster.EbsStorageInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    volume_size: cdktn.numberToTerraform(struct!.volumeSize),
    provisioned_throughput: tfClusterProvisionedThroughputPropertyToTerraform(struct!.provisionedThroughput),
  }
}


export function tfClusterEbsStorageInfoPropertyToHclTerraform(struct?: TfCluster.EbsStorageInfoPropertyOutputReference | TfCluster.EbsStorageInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    volume_size: {
      value: cdktn.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_throughput: {
      value: tfClusterProvisionedThroughputPropertyToHclTerraform(struct!.provisionedThroughput),
      isBlock: true,
      type: "list",
      storageClassType: "ProvisionedThroughputPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterStorageInfoPropertyToTerraform(struct?: TfCluster.StorageInfoPropertyOutputReference | TfCluster.StorageInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ebs_storage_info: tfClusterEbsStorageInfoPropertyToTerraform(struct!.ebsStorageInfo),
  }
}


export function tfClusterStorageInfoPropertyToHclTerraform(struct?: TfCluster.StorageInfoPropertyOutputReference | TfCluster.StorageInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ebs_storage_info: {
      value: tfClusterEbsStorageInfoPropertyToHclTerraform(struct!.ebsStorageInfo),
      isBlock: true,
      type: "list",
      storageClassType: "EbsStorageInfoPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterBrokerNodeGroupInfoPropertyToTerraform(struct?: TfCluster.BrokerNodeGroupInfoPropertyOutputReference | TfCluster.BrokerNodeGroupInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    az_distribution: cdktn.stringToTerraform(struct!.azDistribution),
    client_subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.clientSubnets),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    connectivity_info: tfClusterConnectivityInfoPropertyToTerraform(struct!.connectivityInfo),
    storage_info: tfClusterStorageInfoPropertyToTerraform(struct!.storageInfo),
  }
}


export function tfClusterBrokerNodeGroupInfoPropertyToHclTerraform(struct?: TfCluster.BrokerNodeGroupInfoPropertyOutputReference | TfCluster.BrokerNodeGroupInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    az_distribution: {
      value: cdktn.stringToHclTerraform(struct!.azDistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.clientSubnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    connectivity_info: {
      value: tfClusterConnectivityInfoPropertyToHclTerraform(struct!.connectivityInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectivityInfoPropertyList",
    },
    storage_info: {
      value: tfClusterStorageInfoPropertyToHclTerraform(struct!.storageInfo),
      isBlock: true,
      type: "list",
      storageClassType: "StorageInfoPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterClientAuthenticationSaslPropertyToTerraform(struct?: TfCluster.ClientAuthenticationSaslPropertyOutputReference | TfCluster.ClientAuthenticationSaslProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam: cdktn.booleanToTerraform(struct!.iam),
    scram: cdktn.booleanToTerraform(struct!.scram),
  }
}


export function tfClusterClientAuthenticationSaslPropertyToHclTerraform(struct?: TfCluster.ClientAuthenticationSaslPropertyOutputReference | TfCluster.ClientAuthenticationSaslProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam: {
      value: cdktn.booleanToHclTerraform(struct!.iam),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scram: {
      value: cdktn.booleanToHclTerraform(struct!.scram),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterTlsPropertyToTerraform(struct?: TfCluster.TlsPropertyOutputReference | TfCluster.TlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_authority_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.certificateAuthorityArns),
  }
}


export function tfClusterTlsPropertyToHclTerraform(struct?: TfCluster.TlsPropertyOutputReference | TfCluster.TlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_authority_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.certificateAuthorityArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterClientAuthenticationPropertyToTerraform(struct?: TfCluster.ClientAuthenticationPropertyOutputReference | TfCluster.ClientAuthenticationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unauthenticated: cdktn.booleanToTerraform(struct!.unauthenticated),
    sasl: tfClusterClientAuthenticationSaslPropertyToTerraform(struct!.sasl),
    tls: tfClusterTlsPropertyToTerraform(struct!.tls),
  }
}


export function tfClusterClientAuthenticationPropertyToHclTerraform(struct?: TfCluster.ClientAuthenticationPropertyOutputReference | TfCluster.ClientAuthenticationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unauthenticated: {
      value: cdktn.booleanToHclTerraform(struct!.unauthenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sasl: {
      value: tfClusterClientAuthenticationSaslPropertyToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAuthenticationSaslPropertyList",
    },
    tls: {
      value: tfClusterTlsPropertyToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "TlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterConfigurationInfoPropertyToTerraform(struct?: TfCluster.ConfigurationInfoPropertyOutputReference | TfCluster.ConfigurationInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    revision: cdktn.numberToTerraform(struct!.revision),
  }
}


export function tfClusterConfigurationInfoPropertyToHclTerraform(struct?: TfCluster.ConfigurationInfoPropertyOutputReference | TfCluster.ConfigurationInfoProperty): any {
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


export function tfClusterEncryptionInTransitPropertyToTerraform(struct?: TfCluster.EncryptionInTransitPropertyOutputReference | TfCluster.EncryptionInTransitProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_broker: cdktn.stringToTerraform(struct!.clientBroker),
    in_cluster: cdktn.booleanToTerraform(struct!.inCluster),
  }
}


export function tfClusterEncryptionInTransitPropertyToHclTerraform(struct?: TfCluster.EncryptionInTransitPropertyOutputReference | TfCluster.EncryptionInTransitProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_broker: {
      value: cdktn.stringToHclTerraform(struct!.clientBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_cluster: {
      value: cdktn.booleanToHclTerraform(struct!.inCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterEncryptionInfoPropertyToTerraform(struct?: TfCluster.EncryptionInfoPropertyOutputReference | TfCluster.EncryptionInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_at_rest_kms_key_arn: cdktn.stringToTerraform(struct!.encryptionAtRestKmsKeyArn),
    encryption_in_transit: tfClusterEncryptionInTransitPropertyToTerraform(struct!.encryptionInTransit),
  }
}


export function tfClusterEncryptionInfoPropertyToHclTerraform(struct?: TfCluster.EncryptionInfoPropertyOutputReference | TfCluster.EncryptionInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_at_rest_kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.encryptionAtRestKmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_in_transit: {
      value: tfClusterEncryptionInTransitPropertyToHclTerraform(struct!.encryptionInTransit),
      isBlock: true,
      type: "list",
      storageClassType: "EncryptionInTransitPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterCloudwatchLogsPropertyToTerraform(struct?: TfCluster.CloudwatchLogsPropertyOutputReference | TfCluster.CloudwatchLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group: cdktn.stringToTerraform(struct!.logGroup),
  }
}


export function tfClusterCloudwatchLogsPropertyToHclTerraform(struct?: TfCluster.CloudwatchLogsPropertyOutputReference | TfCluster.CloudwatchLogsProperty): any {
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


export function tfClusterFirehosePropertyToTerraform(struct?: TfCluster.FirehosePropertyOutputReference | TfCluster.FirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function tfClusterFirehosePropertyToHclTerraform(struct?: TfCluster.FirehosePropertyOutputReference | TfCluster.FirehoseProperty): any {
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


export function tfClusterS3PropertyToTerraform(struct?: TfCluster.S3PropertyOutputReference | TfCluster.S3Property): any {
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


export function tfClusterS3PropertyToHclTerraform(struct?: TfCluster.S3PropertyOutputReference | TfCluster.S3Property): any {
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


export function tfClusterBrokerLogsPropertyToTerraform(struct?: TfCluster.BrokerLogsPropertyOutputReference | TfCluster.BrokerLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs: tfClusterCloudwatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
    firehose: tfClusterFirehosePropertyToTerraform(struct!.firehose),
    s3: tfClusterS3PropertyToTerraform(struct!.s3),
  }
}


export function tfClusterBrokerLogsPropertyToHclTerraform(struct?: TfCluster.BrokerLogsPropertyOutputReference | TfCluster.BrokerLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs: {
      value: tfClusterCloudwatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogsPropertyList",
    },
    firehose: {
      value: tfClusterFirehosePropertyToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "list",
      storageClassType: "FirehosePropertyList",
    },
    s3: {
      value: tfClusterS3PropertyToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "S3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterLoggingInfoPropertyToTerraform(struct?: TfCluster.LoggingInfoPropertyOutputReference | TfCluster.LoggingInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    broker_logs: tfClusterBrokerLogsPropertyToTerraform(struct!.brokerLogs),
  }
}


export function tfClusterLoggingInfoPropertyToHclTerraform(struct?: TfCluster.LoggingInfoPropertyOutputReference | TfCluster.LoggingInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    broker_logs: {
      value: tfClusterBrokerLogsPropertyToHclTerraform(struct!.brokerLogs),
      isBlock: true,
      type: "list",
      storageClassType: "BrokerLogsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterJmxExporterPropertyToTerraform(struct?: TfCluster.JmxExporterPropertyOutputReference | TfCluster.JmxExporterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled_in_broker: cdktn.booleanToTerraform(struct!.enabledInBroker),
  }
}


export function tfClusterJmxExporterPropertyToHclTerraform(struct?: TfCluster.JmxExporterPropertyOutputReference | TfCluster.JmxExporterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled_in_broker: {
      value: cdktn.booleanToHclTerraform(struct!.enabledInBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterNodeExporterPropertyToTerraform(struct?: TfCluster.NodeExporterPropertyOutputReference | TfCluster.NodeExporterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled_in_broker: cdktn.booleanToTerraform(struct!.enabledInBroker),
  }
}


export function tfClusterNodeExporterPropertyToHclTerraform(struct?: TfCluster.NodeExporterPropertyOutputReference | TfCluster.NodeExporterProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled_in_broker: {
      value: cdktn.booleanToHclTerraform(struct!.enabledInBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterPrometheusPropertyToTerraform(struct?: TfCluster.PrometheusPropertyOutputReference | TfCluster.PrometheusProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    jmx_exporter: tfClusterJmxExporterPropertyToTerraform(struct!.jmxExporter),
    node_exporter: tfClusterNodeExporterPropertyToTerraform(struct!.nodeExporter),
  }
}


export function tfClusterPrometheusPropertyToHclTerraform(struct?: TfCluster.PrometheusPropertyOutputReference | TfCluster.PrometheusProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    jmx_exporter: {
      value: tfClusterJmxExporterPropertyToHclTerraform(struct!.jmxExporter),
      isBlock: true,
      type: "list",
      storageClassType: "JmxExporterPropertyList",
    },
    node_exporter: {
      value: tfClusterNodeExporterPropertyToHclTerraform(struct!.nodeExporter),
      isBlock: true,
      type: "list",
      storageClassType: "NodeExporterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterOpenMonitoringPropertyToTerraform(struct?: TfCluster.OpenMonitoringPropertyOutputReference | TfCluster.OpenMonitoringProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prometheus: tfClusterPrometheusPropertyToTerraform(struct!.prometheus),
  }
}


export function tfClusterOpenMonitoringPropertyToHclTerraform(struct?: TfCluster.OpenMonitoringPropertyOutputReference | TfCluster.OpenMonitoringProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prometheus: {
      value: tfClusterPrometheusPropertyToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "PrometheusPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterRebalancingPropertyToTerraform(struct?: TfCluster.RebalancingPropertyOutputReference | TfCluster.RebalancingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfClusterRebalancingPropertyToHclTerraform(struct?: TfCluster.RebalancingPropertyOutputReference | TfCluster.RebalancingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfClusterTimeoutsPropertyToTerraform(struct?: TfCluster.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfClusterTimeoutsPropertyToHclTerraform(struct?: TfCluster.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfCluster {
export interface PublicAccessProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#type TfCluster#type}
  */
  readonly type?: string;
}
export class PublicAccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PublicAccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PublicAccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: true, required: false
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
}
export interface BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#iam TfCluster#iam}
  */
  readonly iam?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#scram TfCluster#scram}
  */
  readonly scram?: boolean | cdktn.IResolvable;
}
export class BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iam !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam;
    }
    if (this._scram !== undefined) {
      hasAnyValues = true;
      internalValueResult.scram = this._scram;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iam = undefined;
      this._scram = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iam = value.iam;
      this._scram = value.scram;
    }
  }

  // iam - computed: true, optional: true, required: false
  private _iam?: boolean | cdktn.IResolvable; 
  public get iam() {
    return this.getBooleanAttribute('iam');
  }
  public set iam(value: boolean | cdktn.IResolvable) {
    this._iam = value;
  }
  public resetIam() {
    this._iam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam;
  }

  // scram - computed: true, optional: true, required: false
  private _scram?: boolean | cdktn.IResolvable; 
  public get scram() {
    return this.getBooleanAttribute('scram');
  }
  public set scram(value: boolean | cdktn.IResolvable) {
    this._scram = value;
  }
  public resetScram() {
    this._scram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scramInput() {
    return this._scram;
  }
}
export interface BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#tls TfCluster#tls}
  */
  readonly tls?: boolean | cdktn.IResolvable;
  /**
  * sasl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#sasl TfCluster#sasl}
  */
  readonly sasl?: BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslProperty;
}
export class BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls = undefined;
      this._sasl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls = value.tls;
      this._sasl.internalValue = value.sasl;
    }
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: boolean | cdktn.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktn.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslPropertyOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslProperty) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }
}
export interface VpcConnectivityProperty {
  /**
  * client_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#client_authentication TfCluster#client_authentication}
  */
  readonly clientAuthentication?: BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationProperty;
}
export class VpcConnectivityPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConnectivityProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthentication = this._clientAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConnectivityProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAuthentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAuthentication.internalValue = value.clientAuthentication;
    }
  }

  // client_authentication - computed: false, optional: true, required: false
  private _clientAuthentication = new BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationPropertyOutputReference(this, "client_authentication");
  public get clientAuthentication() {
    return this._clientAuthentication;
  }
  public putClientAuthentication(value: BrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationProperty) {
    this._clientAuthentication.internalValue = value;
  }
  public resetClientAuthentication() {
    this._clientAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationInput() {
    return this._clientAuthentication.internalValue;
  }
}
export interface ConnectivityInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#network_type TfCluster#network_type}
  */
  readonly networkType?: string;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#public_access TfCluster#public_access}
  */
  readonly publicAccess?: PublicAccessProperty;
  /**
  * vpc_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#vpc_connectivity TfCluster#vpc_connectivity}
  */
  readonly vpcConnectivity?: VpcConnectivityProperty;
}
export class ConnectivityInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectivityInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    if (this._vpcConnectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectivity = this._vpcConnectivity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectivityInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkType = undefined;
      this._publicAccess.internalValue = undefined;
      this._vpcConnectivity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkType = value.networkType;
      this._publicAccess.internalValue = value.publicAccess;
      this._vpcConnectivity.internalValue = value.vpcConnectivity;
    }
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new PublicAccessPropertyOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: PublicAccessProperty) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }

  // vpc_connectivity - computed: false, optional: true, required: false
  private _vpcConnectivity = new VpcConnectivityPropertyOutputReference(this, "vpc_connectivity");
  public get vpcConnectivity() {
    return this._vpcConnectivity;
  }
  public putVpcConnectivity(value: VpcConnectivityProperty) {
    this._vpcConnectivity.internalValue = value;
  }
  public resetVpcConnectivity() {
    this._vpcConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectivityInput() {
    return this._vpcConnectivity.internalValue;
  }
}
export interface ProvisionedThroughputProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#enabled TfCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#volume_throughput TfCluster#volume_throughput}
  */
  readonly volumeThroughput?: number;
}
export class ProvisionedThroughputPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProvisionedThroughputProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._volumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeThroughput = this._volumeThroughput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProvisionedThroughputProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._volumeThroughput = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._volumeThroughput = value.volumeThroughput;
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

  // volume_throughput - computed: false, optional: true, required: false
  private _volumeThroughput?: number; 
  public get volumeThroughput() {
    return this.getNumberAttribute('volume_throughput');
  }
  public set volumeThroughput(value: number) {
    this._volumeThroughput = value;
  }
  public resetVolumeThroughput() {
    this._volumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeThroughputInput() {
    return this._volumeThroughput;
  }
}
export interface EbsStorageInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#volume_size TfCluster#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * provisioned_throughput block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#provisioned_throughput TfCluster#provisioned_throughput}
  */
  readonly provisionedThroughput?: ProvisionedThroughputProperty;
}
export class EbsStorageInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsStorageInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._provisionedThroughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsStorageInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._volumeSize = undefined;
      this._provisionedThroughput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._volumeSize = value.volumeSize;
      this._provisionedThroughput.internalValue = value.provisionedThroughput;
    }
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // provisioned_throughput - computed: false, optional: true, required: false
  private _provisionedThroughput = new ProvisionedThroughputPropertyOutputReference(this, "provisioned_throughput");
  public get provisionedThroughput() {
    return this._provisionedThroughput;
  }
  public putProvisionedThroughput(value: ProvisionedThroughputProperty) {
    this._provisionedThroughput.internalValue = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput.internalValue;
  }
}
export interface StorageInfoProperty {
  /**
  * ebs_storage_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#ebs_storage_info TfCluster#ebs_storage_info}
  */
  readonly ebsStorageInfo?: EbsStorageInfoProperty;
}
export class StorageInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsStorageInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsStorageInfo = this._ebsStorageInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ebsStorageInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ebsStorageInfo.internalValue = value.ebsStorageInfo;
    }
  }

  // ebs_storage_info - computed: false, optional: true, required: false
  private _ebsStorageInfo = new EbsStorageInfoPropertyOutputReference(this, "ebs_storage_info");
  public get ebsStorageInfo() {
    return this._ebsStorageInfo;
  }
  public putEbsStorageInfo(value: EbsStorageInfoProperty) {
    this._ebsStorageInfo.internalValue = value;
  }
  public resetEbsStorageInfo() {
    this._ebsStorageInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsStorageInfoInput() {
    return this._ebsStorageInfo.internalValue;
  }
}
export interface BrokerNodeGroupInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#az_distribution TfCluster#az_distribution}
  */
  readonly azDistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#client_subnets TfCluster#client_subnets}
  */
  readonly clientSubnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#instance_type TfCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#security_groups TfCluster#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * connectivity_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#connectivity_info TfCluster#connectivity_info}
  */
  readonly connectivityInfo?: ConnectivityInfoProperty;
  /**
  * storage_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#storage_info TfCluster#storage_info}
  */
  readonly storageInfo?: StorageInfoProperty;
}
export class BrokerNodeGroupInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrokerNodeGroupInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.azDistribution = this._azDistribution;
    }
    if (this._clientSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnets = this._clientSubnets;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._connectivityInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityInfo = this._connectivityInfo?.internalValue;
    }
    if (this._storageInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageInfo = this._storageInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrokerNodeGroupInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azDistribution = undefined;
      this._clientSubnets = undefined;
      this._instanceType = undefined;
      this._securityGroups = undefined;
      this._connectivityInfo.internalValue = undefined;
      this._storageInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azDistribution = value.azDistribution;
      this._clientSubnets = value.clientSubnets;
      this._instanceType = value.instanceType;
      this._securityGroups = value.securityGroups;
      this._connectivityInfo.internalValue = value.connectivityInfo;
      this._storageInfo.internalValue = value.storageInfo;
    }
  }

  // az_distribution - computed: false, optional: true, required: false
  private _azDistribution?: string; 
  public get azDistribution() {
    return this.getStringAttribute('az_distribution');
  }
  public set azDistribution(value: string) {
    this._azDistribution = value;
  }
  public resetAzDistribution() {
    this._azDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azDistributionInput() {
    return this._azDistribution;
  }

  // client_subnets - computed: false, optional: false, required: true
  private _clientSubnets?: string[]; 
  public get clientSubnets() {
    return cdktn.Fn.tolist(this.getListAttribute('client_subnets'));
  }
  public set clientSubnets(value: string[]) {
    this._clientSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetsInput() {
    return this._clientSubnets;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // connectivity_info - computed: false, optional: true, required: false
  private _connectivityInfo = new ConnectivityInfoPropertyOutputReference(this, "connectivity_info");
  public get connectivityInfo() {
    return this._connectivityInfo;
  }
  public putConnectivityInfo(value: ConnectivityInfoProperty) {
    this._connectivityInfo.internalValue = value;
  }
  public resetConnectivityInfo() {
    this._connectivityInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInfoInput() {
    return this._connectivityInfo.internalValue;
  }

  // storage_info - computed: false, optional: true, required: false
  private _storageInfo = new StorageInfoPropertyOutputReference(this, "storage_info");
  public get storageInfo() {
    return this._storageInfo;
  }
  public putStorageInfo(value: StorageInfoProperty) {
    this._storageInfo.internalValue = value;
  }
  public resetStorageInfo() {
    this._storageInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInfoInput() {
    return this._storageInfo.internalValue;
  }
}
export interface ClientAuthenticationSaslProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#iam TfCluster#iam}
  */
  readonly iam?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#scram TfCluster#scram}
  */
  readonly scram?: boolean | cdktn.IResolvable;
}
export class ClientAuthenticationSaslPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAuthenticationSaslProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iam !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam;
    }
    if (this._scram !== undefined) {
      hasAnyValues = true;
      internalValueResult.scram = this._scram;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAuthenticationSaslProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iam = undefined;
      this._scram = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iam = value.iam;
      this._scram = value.scram;
    }
  }

  // iam - computed: false, optional: true, required: false
  private _iam?: boolean | cdktn.IResolvable; 
  public get iam() {
    return this.getBooleanAttribute('iam');
  }
  public set iam(value: boolean | cdktn.IResolvable) {
    this._iam = value;
  }
  public resetIam() {
    this._iam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam;
  }

  // scram - computed: false, optional: true, required: false
  private _scram?: boolean | cdktn.IResolvable; 
  public get scram() {
    return this.getBooleanAttribute('scram');
  }
  public set scram(value: boolean | cdktn.IResolvable) {
    this._scram = value;
  }
  public resetScram() {
    this._scram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scramInput() {
    return this._scram;
  }
}
export interface TlsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#certificate_authority_arns TfCluster#certificate_authority_arns}
  */
  readonly certificateAuthorityArns?: string[];
}
export class TlsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TlsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArns = this._certificateAuthorityArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateAuthorityArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateAuthorityArns = value.certificateAuthorityArns;
    }
  }

  // certificate_authority_arns - computed: false, optional: true, required: false
  private _certificateAuthorityArns?: string[]; 
  public get certificateAuthorityArns() {
    return cdktn.Fn.tolist(this.getListAttribute('certificate_authority_arns'));
  }
  public set certificateAuthorityArns(value: string[]) {
    this._certificateAuthorityArns = value;
  }
  public resetCertificateAuthorityArns() {
    this._certificateAuthorityArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnsInput() {
    return this._certificateAuthorityArns;
  }
}
export interface ClientAuthenticationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#unauthenticated TfCluster#unauthenticated}
  */
  readonly unauthenticated?: boolean | cdktn.IResolvable;
  /**
  * sasl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#sasl TfCluster#sasl}
  */
  readonly sasl?: ClientAuthenticationSaslProperty;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#tls TfCluster#tls}
  */
  readonly tls?: TlsProperty;
}
export class ClientAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAuthenticationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unauthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthenticated = this._unauthenticated;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAuthenticationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unauthenticated = undefined;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unauthenticated = value.unauthenticated;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
    }
  }

  // unauthenticated - computed: false, optional: true, required: false
  private _unauthenticated?: boolean | cdktn.IResolvable; 
  public get unauthenticated() {
    return this.getBooleanAttribute('unauthenticated');
  }
  public set unauthenticated(value: boolean | cdktn.IResolvable) {
    this._unauthenticated = value;
  }
  public resetUnauthenticated() {
    this._unauthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedInput() {
    return this._unauthenticated;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new ClientAuthenticationSaslPropertyOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: ClientAuthenticationSaslProperty) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new TlsPropertyOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: TlsProperty) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConfigurationInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#arn TfCluster#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#revision TfCluster#revision}
  */
  readonly revision: number;
}
export class ConfigurationInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationInfoProperty | undefined {
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

  public set internalValue(value: ConfigurationInfoProperty | undefined) {
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
export interface EncryptionInTransitProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#client_broker TfCluster#client_broker}
  */
  readonly clientBroker?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#in_cluster TfCluster#in_cluster}
  */
  readonly inCluster?: boolean | cdktn.IResolvable;
}
export class EncryptionInTransitPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionInTransitProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientBroker = this._clientBroker;
    }
    if (this._inCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.inCluster = this._inCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionInTransitProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientBroker = undefined;
      this._inCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientBroker = value.clientBroker;
      this._inCluster = value.inCluster;
    }
  }

  // client_broker - computed: false, optional: true, required: false
  private _clientBroker?: string; 
  public get clientBroker() {
    return this.getStringAttribute('client_broker');
  }
  public set clientBroker(value: string) {
    this._clientBroker = value;
  }
  public resetClientBroker() {
    this._clientBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBrokerInput() {
    return this._clientBroker;
  }

  // in_cluster - computed: false, optional: true, required: false
  private _inCluster?: boolean | cdktn.IResolvable; 
  public get inCluster() {
    return this.getBooleanAttribute('in_cluster');
  }
  public set inCluster(value: boolean | cdktn.IResolvable) {
    this._inCluster = value;
  }
  public resetInCluster() {
    this._inCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inClusterInput() {
    return this._inCluster;
  }
}
export interface EncryptionInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#encryption_at_rest_kms_key_arn TfCluster#encryption_at_rest_kms_key_arn}
  */
  readonly encryptionAtRestKmsKeyArn?: string;
  /**
  * encryption_in_transit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#encryption_in_transit TfCluster#encryption_in_transit}
  */
  readonly encryptionInTransit?: EncryptionInTransitProperty;
}
export class EncryptionInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionAtRestKmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtRestKmsKeyArn = this._encryptionAtRestKmsKeyArn;
    }
    if (this._encryptionInTransit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionInTransit = this._encryptionInTransit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionAtRestKmsKeyArn = undefined;
      this._encryptionInTransit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionAtRestKmsKeyArn = value.encryptionAtRestKmsKeyArn;
      this._encryptionInTransit.internalValue = value.encryptionInTransit;
    }
  }

  // encryption_at_rest_kms_key_arn - computed: true, optional: true, required: false
  private _encryptionAtRestKmsKeyArn?: string; 
  public get encryptionAtRestKmsKeyArn() {
    return this.getStringAttribute('encryption_at_rest_kms_key_arn');
  }
  public set encryptionAtRestKmsKeyArn(value: string) {
    this._encryptionAtRestKmsKeyArn = value;
  }
  public resetEncryptionAtRestKmsKeyArn() {
    this._encryptionAtRestKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestKmsKeyArnInput() {
    return this._encryptionAtRestKmsKeyArn;
  }

  // encryption_in_transit - computed: false, optional: true, required: false
  private _encryptionInTransit = new EncryptionInTransitPropertyOutputReference(this, "encryption_in_transit");
  public get encryptionInTransit() {
    return this._encryptionInTransit;
  }
  public putEncryptionInTransit(value: EncryptionInTransitProperty) {
    this._encryptionInTransit.internalValue = value;
  }
  public resetEncryptionInTransit() {
    this._encryptionInTransit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitInput() {
    return this._encryptionInTransit.internalValue;
  }
}
export interface CloudwatchLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#enabled TfCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#log_group TfCluster#log_group}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#delivery_stream TfCluster#delivery_stream}
  */
  readonly deliveryStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#enabled TfCluster#enabled}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#bucket TfCluster#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#enabled TfCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#prefix TfCluster#prefix}
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
export interface BrokerLogsProperty {
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#cloudwatch_logs TfCluster#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: CloudwatchLogsProperty;
  /**
  * firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#firehose TfCluster#firehose}
  */
  readonly firehose?: FirehoseProperty;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#s3 TfCluster#s3}
  */
  readonly s3?: S3Property;
}
export class BrokerLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrokerLogsProperty | undefined {
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

  public set internalValue(value: BrokerLogsProperty | undefined) {
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
export interface LoggingInfoProperty {
  /**
  * broker_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#broker_logs TfCluster#broker_logs}
  */
  readonly brokerLogs: BrokerLogsProperty;
}
export class LoggingInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerLogs = this._brokerLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokerLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokerLogs.internalValue = value.brokerLogs;
    }
  }

  // broker_logs - computed: false, optional: false, required: true
  private _brokerLogs = new BrokerLogsPropertyOutputReference(this, "broker_logs");
  public get brokerLogs() {
    return this._brokerLogs;
  }
  public putBrokerLogs(value: BrokerLogsProperty) {
    this._brokerLogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerLogsInput() {
    return this._brokerLogs.internalValue;
  }
}
export interface JmxExporterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#enabled_in_broker TfCluster#enabled_in_broker}
  */
  readonly enabledInBroker: boolean | cdktn.IResolvable;
}
export class JmxExporterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmxExporterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledInBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledInBroker = this._enabledInBroker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmxExporterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledInBroker = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledInBroker = value.enabledInBroker;
    }
  }

  // enabled_in_broker - computed: false, optional: false, required: true
  private _enabledInBroker?: boolean | cdktn.IResolvable; 
  public get enabledInBroker() {
    return this.getBooleanAttribute('enabled_in_broker');
  }
  public set enabledInBroker(value: boolean | cdktn.IResolvable) {
    this._enabledInBroker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInBrokerInput() {
    return this._enabledInBroker;
  }
}
export interface NodeExporterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#enabled_in_broker TfCluster#enabled_in_broker}
  */
  readonly enabledInBroker: boolean | cdktn.IResolvable;
}
export class NodeExporterPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeExporterProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledInBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledInBroker = this._enabledInBroker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeExporterProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledInBroker = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledInBroker = value.enabledInBroker;
    }
  }

  // enabled_in_broker - computed: false, optional: false, required: true
  private _enabledInBroker?: boolean | cdktn.IResolvable; 
  public get enabledInBroker() {
    return this.getBooleanAttribute('enabled_in_broker');
  }
  public set enabledInBroker(value: boolean | cdktn.IResolvable) {
    this._enabledInBroker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInBrokerInput() {
    return this._enabledInBroker;
  }
}
export interface PrometheusProperty {
  /**
  * jmx_exporter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#jmx_exporter TfCluster#jmx_exporter}
  */
  readonly jmxExporter?: JmxExporterProperty;
  /**
  * node_exporter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#node_exporter TfCluster#node_exporter}
  */
  readonly nodeExporter?: NodeExporterProperty;
}
export class PrometheusPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrometheusProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jmxExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxExporter = this._jmxExporter?.internalValue;
    }
    if (this._nodeExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeExporter = this._nodeExporter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jmxExporter.internalValue = undefined;
      this._nodeExporter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jmxExporter.internalValue = value.jmxExporter;
      this._nodeExporter.internalValue = value.nodeExporter;
    }
  }

  // jmx_exporter - computed: false, optional: true, required: false
  private _jmxExporter = new JmxExporterPropertyOutputReference(this, "jmx_exporter");
  public get jmxExporter() {
    return this._jmxExporter;
  }
  public putJmxExporter(value: JmxExporterProperty) {
    this._jmxExporter.internalValue = value;
  }
  public resetJmxExporter() {
    this._jmxExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxExporterInput() {
    return this._jmxExporter.internalValue;
  }

  // node_exporter - computed: false, optional: true, required: false
  private _nodeExporter = new NodeExporterPropertyOutputReference(this, "node_exporter");
  public get nodeExporter() {
    return this._nodeExporter;
  }
  public putNodeExporter(value: NodeExporterProperty) {
    this._nodeExporter.internalValue = value;
  }
  public resetNodeExporter() {
    this._nodeExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeExporterInput() {
    return this._nodeExporter.internalValue;
  }
}
export interface OpenMonitoringProperty {
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#prometheus TfCluster#prometheus}
  */
  readonly prometheus: PrometheusProperty;
}
export class OpenMonitoringPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenMonitoringProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenMonitoringProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prometheus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // prometheus - computed: false, optional: false, required: true
  private _prometheus = new PrometheusPropertyOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: PrometheusProperty) {
    this._prometheus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}
export interface RebalancingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#status TfCluster#status}
  */
  readonly status: string;
}
export class RebalancingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RebalancingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RebalancingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#create TfCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#delete TfCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/msk_cluster#update TfCluster#update}
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
