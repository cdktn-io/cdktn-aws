// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#access_policies AwsDomain#access_policies}
  */
  readonly accessPolicies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#advanced_options AwsDomain#advanced_options}
  */
  readonly advancedOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#domain_name AwsDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#elasticsearch_version AwsDomain#elasticsearch_version}
  */
  readonly elasticsearchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#id AwsDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#region AwsDomain#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#tags AwsDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#tags_all AwsDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * advanced_security_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#advanced_security_options AwsDomain#advanced_security_options}
  */
  readonly advancedSecurityOptions?: AwsDomain.AdvancedSecurityOptionsProperty;
  /**
  * auto_tune_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#auto_tune_options AwsDomain#auto_tune_options}
  */
  readonly autoTuneOptions?: AwsDomain.AutoTuneOptionsProperty;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#cluster_config AwsDomain#cluster_config}
  */
  readonly clusterConfig?: AwsDomain.ClusterConfigProperty;
  /**
  * cognito_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#cognito_options AwsDomain#cognito_options}
  */
  readonly cognitoOptions?: AwsDomain.CognitoOptionsProperty;
  /**
  * domain_endpoint_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#domain_endpoint_options AwsDomain#domain_endpoint_options}
  */
  readonly domainEndpointOptions?: AwsDomain.DomainEndpointOptionsProperty;
  /**
  * ebs_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#ebs_options AwsDomain#ebs_options}
  */
  readonly ebsOptions?: AwsDomain.EbsOptionsProperty;
  /**
  * encrypt_at_rest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#encrypt_at_rest AwsDomain#encrypt_at_rest}
  */
  readonly encryptAtRest?: AwsDomain.EncryptAtRestProperty;
  /**
  * log_publishing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#log_publishing_options AwsDomain#log_publishing_options}
  */
  readonly logPublishingOptions?: AwsDomain.LogPublishingOptionsProperty[] | cdktn.IResolvable;
  /**
  * node_to_node_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#node_to_node_encryption AwsDomain#node_to_node_encryption}
  */
  readonly nodeToNodeEncryption?: AwsDomain.NodeToNodeEncryptionProperty;
  /**
  * snapshot_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#snapshot_options AwsDomain#snapshot_options}
  */
  readonly snapshotOptions?: AwsDomain.SnapshotOptionsProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#timeouts AwsDomain#timeouts}
  */
  readonly timeouts?: AwsDomain.TimeoutsProperty;
  /**
  * vpc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#vpc_options AwsDomain#vpc_options}
  */
  readonly vpcOptions?: AwsDomain.VpcOptionsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain aws_elasticsearch_domain}
*/
export class AwsDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticsearch_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsDomain to import
  * @param importFromId The id of the existing AwsDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticsearch_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain aws_elasticsearch_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsDomainConfig
  */
  public constructor(scope: Construct, id: string, config: AwsDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticsearch_domain',
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
    this._accessPolicies = config.accessPolicies;
    this._advancedOptions = config.advancedOptions;
    this._domainName = config.domainName;
    this._elasticsearchVersion = config.elasticsearchVersion;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._advancedSecurityOptions.internalValue = config.advancedSecurityOptions;
    this._autoTuneOptions.internalValue = config.autoTuneOptions;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._cognitoOptions.internalValue = config.cognitoOptions;
    this._domainEndpointOptions.internalValue = config.domainEndpointOptions;
    this._ebsOptions.internalValue = config.ebsOptions;
    this._encryptAtRest.internalValue = config.encryptAtRest;
    this._logPublishingOptions.internalValue = config.logPublishingOptions;
    this._nodeToNodeEncryption.internalValue = config.nodeToNodeEncryption;
    this._snapshotOptions.internalValue = config.snapshotOptions;
    this._timeouts.internalValue = config.timeouts;
    this._vpcOptions.internalValue = config.vpcOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: true, optional: true, required: false
  private _accessPolicies?: string; 
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }
  public set accessPolicies(value: string) {
    this._accessPolicies = value;
  }
  public resetAccessPolicies() {
    this._accessPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies;
  }

  // advanced_options - computed: true, optional: true, required: false
  private _advancedOptions?: { [key: string]: string }; 
  public get advancedOptions() {
    return this.getStringMapAttribute('advanced_options');
  }
  public set advancedOptions(value: { [key: string]: string }) {
    this._advancedOptions = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // elasticsearch_version - computed: false, optional: true, required: false
  private _elasticsearchVersion?: string; 
  public get elasticsearchVersion() {
    return this.getStringAttribute('elasticsearch_version');
  }
  public set elasticsearchVersion(value: string) {
    this._elasticsearchVersion = value;
  }
  public resetElasticsearchVersion() {
    this._elasticsearchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchVersionInput() {
    return this._elasticsearchVersion;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // kibana_endpoint - computed: true, optional: false, required: false
  public get kibanaEndpoint() {
    return this.getStringAttribute('kibana_endpoint');
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

  // advanced_security_options - computed: false, optional: true, required: false
  private _advancedSecurityOptions = new AwsDomain.AdvancedSecurityOptionsPropertyOutputReference(this, "advanced_security_options");
  public get advancedSecurityOptions() {
    return this._advancedSecurityOptions;
  }
  public putAdvancedSecurityOptions(value: AwsDomain.AdvancedSecurityOptionsProperty) {
    this._advancedSecurityOptions.internalValue = value;
  }
  public resetAdvancedSecurityOptions() {
    this._advancedSecurityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityOptionsInput() {
    return this._advancedSecurityOptions.internalValue;
  }

  // auto_tune_options - computed: false, optional: true, required: false
  private _autoTuneOptions = new AwsDomain.AutoTuneOptionsPropertyOutputReference(this, "auto_tune_options");
  public get autoTuneOptions() {
    return this._autoTuneOptions;
  }
  public putAutoTuneOptions(value: AwsDomain.AutoTuneOptionsProperty) {
    this._autoTuneOptions.internalValue = value;
  }
  public resetAutoTuneOptions() {
    this._autoTuneOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTuneOptionsInput() {
    return this._autoTuneOptions.internalValue;
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new AwsDomain.ClusterConfigPropertyOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: AwsDomain.ClusterConfigProperty) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cognito_options - computed: false, optional: true, required: false
  private _cognitoOptions = new AwsDomain.CognitoOptionsPropertyOutputReference(this, "cognito_options");
  public get cognitoOptions() {
    return this._cognitoOptions;
  }
  public putCognitoOptions(value: AwsDomain.CognitoOptionsProperty) {
    this._cognitoOptions.internalValue = value;
  }
  public resetCognitoOptions() {
    this._cognitoOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoOptionsInput() {
    return this._cognitoOptions.internalValue;
  }

  // domain_endpoint_options - computed: false, optional: true, required: false
  private _domainEndpointOptions = new AwsDomain.DomainEndpointOptionsPropertyOutputReference(this, "domain_endpoint_options");
  public get domainEndpointOptions() {
    return this._domainEndpointOptions;
  }
  public putDomainEndpointOptions(value: AwsDomain.DomainEndpointOptionsProperty) {
    this._domainEndpointOptions.internalValue = value;
  }
  public resetDomainEndpointOptions() {
    this._domainEndpointOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEndpointOptionsInput() {
    return this._domainEndpointOptions.internalValue;
  }

  // ebs_options - computed: false, optional: true, required: false
  private _ebsOptions = new AwsDomain.EbsOptionsPropertyOutputReference(this, "ebs_options");
  public get ebsOptions() {
    return this._ebsOptions;
  }
  public putEbsOptions(value: AwsDomain.EbsOptionsProperty) {
    this._ebsOptions.internalValue = value;
  }
  public resetEbsOptions() {
    this._ebsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptionsInput() {
    return this._ebsOptions.internalValue;
  }

  // encrypt_at_rest - computed: false, optional: true, required: false
  private _encryptAtRest = new AwsDomain.EncryptAtRestPropertyOutputReference(this, "encrypt_at_rest");
  public get encryptAtRest() {
    return this._encryptAtRest;
  }
  public putEncryptAtRest(value: AwsDomain.EncryptAtRestProperty) {
    this._encryptAtRest.internalValue = value;
  }
  public resetEncryptAtRest() {
    this._encryptAtRest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAtRestInput() {
    return this._encryptAtRest.internalValue;
  }

  // log_publishing_options - computed: false, optional: true, required: false
  private _logPublishingOptions = new AwsDomain.LogPublishingOptionsPropertyList(this, "log_publishing_options", true);
  public get logPublishingOptions() {
    return this._logPublishingOptions;
  }
  public putLogPublishingOptions(value: AwsDomain.LogPublishingOptionsProperty[] | cdktn.IResolvable) {
    this._logPublishingOptions.internalValue = value;
  }
  public resetLogPublishingOptions() {
    this._logPublishingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublishingOptionsInput() {
    return this._logPublishingOptions.internalValue;
  }

  // node_to_node_encryption - computed: false, optional: true, required: false
  private _nodeToNodeEncryption = new AwsDomain.NodeToNodeEncryptionPropertyOutputReference(this, "node_to_node_encryption");
  public get nodeToNodeEncryption() {
    return this._nodeToNodeEncryption;
  }
  public putNodeToNodeEncryption(value: AwsDomain.NodeToNodeEncryptionProperty) {
    this._nodeToNodeEncryption.internalValue = value;
  }
  public resetNodeToNodeEncryption() {
    this._nodeToNodeEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeToNodeEncryptionInput() {
    return this._nodeToNodeEncryption.internalValue;
  }

  // snapshot_options - computed: false, optional: true, required: false
  private _snapshotOptions = new AwsDomain.SnapshotOptionsPropertyOutputReference(this, "snapshot_options");
  public get snapshotOptions() {
    return this._snapshotOptions;
  }
  public putSnapshotOptions(value: AwsDomain.SnapshotOptionsProperty) {
    this._snapshotOptions.internalValue = value;
  }
  public resetSnapshotOptions() {
    this._snapshotOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotOptionsInput() {
    return this._snapshotOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsDomain.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsDomain.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_options - computed: false, optional: true, required: false
  private _vpcOptions = new AwsDomain.VpcOptionsPropertyOutputReference(this, "vpc_options");
  public get vpcOptions() {
    return this._vpcOptions;
  }
  public putVpcOptions(value: AwsDomain.VpcOptionsProperty) {
    this._vpcOptions.internalValue = value;
  }
  public resetVpcOptions() {
    this._vpcOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOptionsInput() {
    return this._vpcOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policies: cdktn.stringToTerraform(this._accessPolicies),
      advanced_options: cdktn.hashMapper(cdktn.stringToTerraform)(this._advancedOptions),
      domain_name: cdktn.stringToTerraform(this._domainName),
      elasticsearch_version: cdktn.stringToTerraform(this._elasticsearchVersion),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      advanced_security_options: awsDomainAdvancedSecurityOptionsPropertyToTerraform(this._advancedSecurityOptions.internalValue),
      auto_tune_options: awsDomainAutoTuneOptionsPropertyToTerraform(this._autoTuneOptions.internalValue),
      cluster_config: awsDomainClusterConfigPropertyToTerraform(this._clusterConfig.internalValue),
      cognito_options: awsDomainCognitoOptionsPropertyToTerraform(this._cognitoOptions.internalValue),
      domain_endpoint_options: awsDomainDomainEndpointOptionsPropertyToTerraform(this._domainEndpointOptions.internalValue),
      ebs_options: awsDomainEbsOptionsPropertyToTerraform(this._ebsOptions.internalValue),
      encrypt_at_rest: awsDomainEncryptAtRestPropertyToTerraform(this._encryptAtRest.internalValue),
      log_publishing_options: cdktn.listMapper(awsDomainLogPublishingOptionsPropertyToTerraform, true)(this._logPublishingOptions.internalValue),
      node_to_node_encryption: awsDomainNodeToNodeEncryptionPropertyToTerraform(this._nodeToNodeEncryption.internalValue),
      snapshot_options: awsDomainSnapshotOptionsPropertyToTerraform(this._snapshotOptions.internalValue),
      timeouts: awsDomainTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      vpc_options: awsDomainVpcOptionsPropertyToTerraform(this._vpcOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policies: {
        value: cdktn.stringToHclTerraform(this._accessPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_options: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._advancedOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_version: {
        value: cdktn.stringToHclTerraform(this._elasticsearchVersion),
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
      advanced_security_options: {
        value: awsDomainAdvancedSecurityOptionsPropertyToHclTerraform(this._advancedSecurityOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.AdvancedSecurityOptionsPropertyList",
      },
      auto_tune_options: {
        value: awsDomainAutoTuneOptionsPropertyToHclTerraform(this._autoTuneOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.AutoTuneOptionsPropertyList",
      },
      cluster_config: {
        value: awsDomainClusterConfigPropertyToHclTerraform(this._clusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.ClusterConfigPropertyList",
      },
      cognito_options: {
        value: awsDomainCognitoOptionsPropertyToHclTerraform(this._cognitoOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.CognitoOptionsPropertyList",
      },
      domain_endpoint_options: {
        value: awsDomainDomainEndpointOptionsPropertyToHclTerraform(this._domainEndpointOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.DomainEndpointOptionsPropertyList",
      },
      ebs_options: {
        value: awsDomainEbsOptionsPropertyToHclTerraform(this._ebsOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.EbsOptionsPropertyList",
      },
      encrypt_at_rest: {
        value: awsDomainEncryptAtRestPropertyToHclTerraform(this._encryptAtRest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.EncryptAtRestPropertyList",
      },
      log_publishing_options: {
        value: cdktn.listMapperHcl(awsDomainLogPublishingOptionsPropertyToHclTerraform, true)(this._logPublishingOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsDomain.LogPublishingOptionsPropertyList",
      },
      node_to_node_encryption: {
        value: awsDomainNodeToNodeEncryptionPropertyToHclTerraform(this._nodeToNodeEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.NodeToNodeEncryptionPropertyList",
      },
      snapshot_options: {
        value: awsDomainSnapshotOptionsPropertyToHclTerraform(this._snapshotOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.SnapshotOptionsPropertyList",
      },
      timeouts: {
        value: awsDomainTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsDomain.TimeoutsProperty",
      },
      vpc_options: {
        value: awsDomainVpcOptionsPropertyToHclTerraform(this._vpcOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.VpcOptionsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsDomainMasterUserOptionsPropertyToTerraform(struct?: AwsDomain.MasterUserOptionsPropertyOutputReference | AwsDomain.MasterUserOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    master_user_arn: cdktn.stringToTerraform(struct!.masterUserArn),
    master_user_name: cdktn.stringToTerraform(struct!.masterUserName),
    master_user_password: cdktn.stringToTerraform(struct!.masterUserPassword),
  }
}


export function awsDomainMasterUserOptionsPropertyToHclTerraform(struct?: AwsDomain.MasterUserOptionsPropertyOutputReference | AwsDomain.MasterUserOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    master_user_arn: {
      value: cdktn.stringToHclTerraform(struct!.masterUserArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_name: {
      value: cdktn.stringToHclTerraform(struct!.masterUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_password: {
      value: cdktn.stringToHclTerraform(struct!.masterUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainAdvancedSecurityOptionsPropertyToTerraform(struct?: AwsDomain.AdvancedSecurityOptionsPropertyOutputReference | AwsDomain.AdvancedSecurityOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    internal_user_database_enabled: cdktn.booleanToTerraform(struct!.internalUserDatabaseEnabled),
    master_user_options: awsDomainMasterUserOptionsPropertyToTerraform(struct!.masterUserOptions),
  }
}


export function awsDomainAdvancedSecurityOptionsPropertyToHclTerraform(struct?: AwsDomain.AdvancedSecurityOptionsPropertyOutputReference | AwsDomain.AdvancedSecurityOptionsProperty): any {
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
    internal_user_database_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.internalUserDatabaseEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_user_options: {
      value: awsDomainMasterUserOptionsPropertyToHclTerraform(struct!.masterUserOptions),
      isBlock: true,
      type: "list",
      storageClassType: "MasterUserOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDurationPropertyToTerraform(struct?: AwsDomain.DurationPropertyOutputReference | AwsDomain.DurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsDomainDurationPropertyToHclTerraform(struct?: AwsDomain.DurationPropertyOutputReference | AwsDomain.DurationProperty): any {
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
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainMaintenanceSchedulePropertyToTerraform(struct?: AwsDomain.MaintenanceScheduleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cron_expression_for_recurrence: cdktn.stringToTerraform(struct!.cronExpressionForRecurrence),
    start_at: cdktn.stringToTerraform(struct!.startAt),
    duration: awsDomainDurationPropertyToTerraform(struct!.duration),
  }
}


export function awsDomainMaintenanceSchedulePropertyToHclTerraform(struct?: AwsDomain.MaintenanceScheduleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cron_expression_for_recurrence: {
      value: cdktn.stringToHclTerraform(struct!.cronExpressionForRecurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_at: {
      value: cdktn.stringToHclTerraform(struct!.startAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: awsDomainDurationPropertyToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "DurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainAutoTuneOptionsPropertyToTerraform(struct?: AwsDomain.AutoTuneOptionsPropertyOutputReference | AwsDomain.AutoTuneOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    desired_state: cdktn.stringToTerraform(struct!.desiredState),
    rollback_on_disable: cdktn.stringToTerraform(struct!.rollbackOnDisable),
    maintenance_schedule: cdktn.listMapper(awsDomainMaintenanceSchedulePropertyToTerraform, true)(struct!.maintenanceSchedule),
  }
}


export function awsDomainAutoTuneOptionsPropertyToHclTerraform(struct?: AwsDomain.AutoTuneOptionsPropertyOutputReference | AwsDomain.AutoTuneOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    desired_state: {
      value: cdktn.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollback_on_disable: {
      value: cdktn.stringToHclTerraform(struct!.rollbackOnDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_schedule: {
      value: cdktn.listMapperHcl(awsDomainMaintenanceSchedulePropertyToHclTerraform, true)(struct!.maintenanceSchedule),
      isBlock: true,
      type: "set",
      storageClassType: "MaintenanceSchedulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainColdStorageOptionsPropertyToTerraform(struct?: AwsDomain.ColdStorageOptionsPropertyOutputReference | AwsDomain.ColdStorageOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsDomainColdStorageOptionsPropertyToHclTerraform(struct?: AwsDomain.ColdStorageOptionsPropertyOutputReference | AwsDomain.ColdStorageOptionsProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainZoneAwarenessConfigPropertyToTerraform(struct?: AwsDomain.ZoneAwarenessConfigPropertyOutputReference | AwsDomain.ZoneAwarenessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone_count: cdktn.numberToTerraform(struct!.availabilityZoneCount),
  }
}


export function awsDomainZoneAwarenessConfigPropertyToHclTerraform(struct?: AwsDomain.ZoneAwarenessConfigPropertyOutputReference | AwsDomain.ZoneAwarenessConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone_count: {
      value: cdktn.numberToHclTerraform(struct!.availabilityZoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainClusterConfigPropertyToTerraform(struct?: AwsDomain.ClusterConfigPropertyOutputReference | AwsDomain.ClusterConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dedicated_master_count: cdktn.numberToTerraform(struct!.dedicatedMasterCount),
    dedicated_master_enabled: cdktn.booleanToTerraform(struct!.dedicatedMasterEnabled),
    dedicated_master_type: cdktn.stringToTerraform(struct!.dedicatedMasterType),
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    warm_count: cdktn.numberToTerraform(struct!.warmCount),
    warm_enabled: cdktn.booleanToTerraform(struct!.warmEnabled),
    warm_type: cdktn.stringToTerraform(struct!.warmType),
    zone_awareness_enabled: cdktn.booleanToTerraform(struct!.zoneAwarenessEnabled),
    cold_storage_options: awsDomainColdStorageOptionsPropertyToTerraform(struct!.coldStorageOptions),
    zone_awareness_config: awsDomainZoneAwarenessConfigPropertyToTerraform(struct!.zoneAwarenessConfig),
  }
}


export function awsDomainClusterConfigPropertyToHclTerraform(struct?: AwsDomain.ClusterConfigPropertyOutputReference | AwsDomain.ClusterConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dedicated_master_count: {
      value: cdktn.numberToHclTerraform(struct!.dedicatedMasterCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dedicated_master_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.dedicatedMasterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dedicated_master_type: {
      value: cdktn.stringToHclTerraform(struct!.dedicatedMasterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    warm_count: {
      value: cdktn.numberToHclTerraform(struct!.warmCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warm_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.warmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warm_type: {
      value: cdktn.stringToHclTerraform(struct!.warmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_awareness_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.zoneAwarenessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cold_storage_options: {
      value: awsDomainColdStorageOptionsPropertyToHclTerraform(struct!.coldStorageOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ColdStorageOptionsPropertyList",
    },
    zone_awareness_config: {
      value: awsDomainZoneAwarenessConfigPropertyToHclTerraform(struct!.zoneAwarenessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneAwarenessConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainCognitoOptionsPropertyToTerraform(struct?: AwsDomain.CognitoOptionsPropertyOutputReference | AwsDomain.CognitoOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    identity_pool_id: cdktn.stringToTerraform(struct!.identityPoolId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    user_pool_id: cdktn.stringToTerraform(struct!.userPoolId),
  }
}


export function awsDomainCognitoOptionsPropertyToHclTerraform(struct?: AwsDomain.CognitoOptionsPropertyOutputReference | AwsDomain.CognitoOptionsProperty): any {
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
    identity_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.identityPoolId),
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
    user_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.userPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDomainEndpointOptionsPropertyToTerraform(struct?: AwsDomain.DomainEndpointOptionsPropertyOutputReference | AwsDomain.DomainEndpointOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_endpoint: cdktn.stringToTerraform(struct!.customEndpoint),
    custom_endpoint_certificate_arn: cdktn.stringToTerraform(struct!.customEndpointCertificateArn),
    custom_endpoint_enabled: cdktn.booleanToTerraform(struct!.customEndpointEnabled),
    enforce_https: cdktn.booleanToTerraform(struct!.enforceHttps),
    tls_security_policy: cdktn.stringToTerraform(struct!.tlsSecurityPolicy),
  }
}


export function awsDomainDomainEndpointOptionsPropertyToHclTerraform(struct?: AwsDomain.DomainEndpointOptionsPropertyOutputReference | AwsDomain.DomainEndpointOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.customEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_endpoint_certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.customEndpointCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_endpoint_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.customEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_https: {
      value: cdktn.booleanToHclTerraform(struct!.enforceHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_security_policy: {
      value: cdktn.stringToHclTerraform(struct!.tlsSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainEbsOptionsPropertyToTerraform(struct?: AwsDomain.EbsOptionsPropertyOutputReference | AwsDomain.EbsOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ebs_enabled: cdktn.booleanToTerraform(struct!.ebsEnabled),
    iops: cdktn.numberToTerraform(struct!.iops),
    throughput: cdktn.numberToTerraform(struct!.throughput),
    volume_size: cdktn.numberToTerraform(struct!.volumeSize),
    volume_type: cdktn.stringToTerraform(struct!.volumeType),
  }
}


export function awsDomainEbsOptionsPropertyToHclTerraform(struct?: AwsDomain.EbsOptionsPropertyOutputReference | AwsDomain.EbsOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ebs_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.ebsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput: {
      value: cdktn.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktn.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktn.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainEncryptAtRestPropertyToTerraform(struct?: AwsDomain.EncryptAtRestPropertyOutputReference | AwsDomain.EncryptAtRestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function awsDomainEncryptAtRestPropertyToHclTerraform(struct?: AwsDomain.EncryptAtRestPropertyOutputReference | AwsDomain.EncryptAtRestProperty): any {
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
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainLogPublishingOptionsPropertyToTerraform(struct?: AwsDomain.LogPublishingOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_log_group_arn: cdktn.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_type: cdktn.stringToTerraform(struct!.logType),
  }
}


export function awsDomainLogPublishingOptionsPropertyToHclTerraform(struct?: AwsDomain.LogPublishingOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchLogGroupArn),
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
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainNodeToNodeEncryptionPropertyToTerraform(struct?: AwsDomain.NodeToNodeEncryptionPropertyOutputReference | AwsDomain.NodeToNodeEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsDomainNodeToNodeEncryptionPropertyToHclTerraform(struct?: AwsDomain.NodeToNodeEncryptionPropertyOutputReference | AwsDomain.NodeToNodeEncryptionProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainSnapshotOptionsPropertyToTerraform(struct?: AwsDomain.SnapshotOptionsPropertyOutputReference | AwsDomain.SnapshotOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automated_snapshot_start_hour: cdktn.numberToTerraform(struct!.automatedSnapshotStartHour),
  }
}


export function awsDomainSnapshotOptionsPropertyToHclTerraform(struct?: AwsDomain.SnapshotOptionsPropertyOutputReference | AwsDomain.SnapshotOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automated_snapshot_start_hour: {
      value: cdktn.numberToHclTerraform(struct!.automatedSnapshotStartHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainTimeoutsPropertyToTerraform(struct?: AwsDomain.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsDomainTimeoutsPropertyToHclTerraform(struct?: AwsDomain.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsDomainVpcOptionsPropertyToTerraform(struct?: AwsDomain.VpcOptionsPropertyOutputReference | AwsDomain.VpcOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function awsDomainVpcOptionsPropertyToHclTerraform(struct?: AwsDomain.VpcOptionsPropertyOutputReference | AwsDomain.VpcOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsDomain {
export interface MasterUserOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#master_user_arn AwsDomain#master_user_arn}
  */
  readonly masterUserArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#master_user_name AwsDomain#master_user_name}
  */
  readonly masterUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#master_user_password AwsDomain#master_user_password}
  */
  readonly masterUserPassword?: string;
}
export class MasterUserOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MasterUserOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterUserArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserArn = this._masterUserArn;
    }
    if (this._masterUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserName = this._masterUserName;
    }
    if (this._masterUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserPassword = this._masterUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MasterUserOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masterUserArn = undefined;
      this._masterUserName = undefined;
      this._masterUserPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masterUserArn = value.masterUserArn;
      this._masterUserName = value.masterUserName;
      this._masterUserPassword = value.masterUserPassword;
    }
  }

  // master_user_arn - computed: false, optional: true, required: false
  private _masterUserArn?: string; 
  public get masterUserArn() {
    return this.getStringAttribute('master_user_arn');
  }
  public set masterUserArn(value: string) {
    this._masterUserArn = value;
  }
  public resetMasterUserArn() {
    this._masterUserArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserArnInput() {
    return this._masterUserArn;
  }

  // master_user_name - computed: false, optional: true, required: false
  private _masterUserName?: string; 
  public get masterUserName() {
    return this.getStringAttribute('master_user_name');
  }
  public set masterUserName(value: string) {
    this._masterUserName = value;
  }
  public resetMasterUserName() {
    this._masterUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserNameInput() {
    return this._masterUserName;
  }

  // master_user_password - computed: false, optional: true, required: false
  private _masterUserPassword?: string; 
  public get masterUserPassword() {
    return this.getStringAttribute('master_user_password');
  }
  public set masterUserPassword(value: string) {
    this._masterUserPassword = value;
  }
  public resetMasterUserPassword() {
    this._masterUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserPasswordInput() {
    return this._masterUserPassword;
  }
}
export interface AdvancedSecurityOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#enabled AwsDomain#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#internal_user_database_enabled AwsDomain#internal_user_database_enabled}
  */
  readonly internalUserDatabaseEnabled?: boolean | cdktn.IResolvable;
  /**
  * master_user_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#master_user_options AwsDomain#master_user_options}
  */
  readonly masterUserOptions?: MasterUserOptionsProperty;
}
export class AdvancedSecurityOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedSecurityOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._internalUserDatabaseEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalUserDatabaseEnabled = this._internalUserDatabaseEnabled;
    }
    if (this._masterUserOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserOptions = this._masterUserOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedSecurityOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._internalUserDatabaseEnabled = undefined;
      this._masterUserOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._internalUserDatabaseEnabled = value.internalUserDatabaseEnabled;
      this._masterUserOptions.internalValue = value.masterUserOptions;
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

  // internal_user_database_enabled - computed: false, optional: true, required: false
  private _internalUserDatabaseEnabled?: boolean | cdktn.IResolvable; 
  public get internalUserDatabaseEnabled() {
    return this.getBooleanAttribute('internal_user_database_enabled');
  }
  public set internalUserDatabaseEnabled(value: boolean | cdktn.IResolvable) {
    this._internalUserDatabaseEnabled = value;
  }
  public resetInternalUserDatabaseEnabled() {
    this._internalUserDatabaseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUserDatabaseEnabledInput() {
    return this._internalUserDatabaseEnabled;
  }

  // master_user_options - computed: false, optional: true, required: false
  private _masterUserOptions = new MasterUserOptionsPropertyOutputReference(this, "master_user_options");
  public get masterUserOptions() {
    return this._masterUserOptions;
  }
  public putMasterUserOptions(value: MasterUserOptionsProperty) {
    this._masterUserOptions.internalValue = value;
  }
  public resetMasterUserOptions() {
    this._masterUserOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserOptionsInput() {
    return this._masterUserOptions.internalValue;
  }
}
export interface DurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#unit AwsDomain#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#value AwsDomain#value}
  */
  readonly value: number;
}
export class DurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DurationProperty | undefined {
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

  public set internalValue(value: DurationProperty | undefined) {
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
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MaintenanceScheduleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#cron_expression_for_recurrence AwsDomain#cron_expression_for_recurrence}
  */
  readonly cronExpressionForRecurrence: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#start_at AwsDomain#start_at}
  */
  readonly startAt: string;
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#duration AwsDomain#duration}
  */
  readonly duration: DurationProperty;
}
export class MaintenanceSchedulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MaintenanceScheduleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpressionForRecurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpressionForRecurrence = this._cronExpressionForRecurrence;
    }
    if (this._startAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAt = this._startAt;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpressionForRecurrence = undefined;
      this._startAt = undefined;
      this._duration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpressionForRecurrence = value.cronExpressionForRecurrence;
      this._startAt = value.startAt;
      this._duration.internalValue = value.duration;
    }
  }

  // cron_expression_for_recurrence - computed: false, optional: false, required: true
  private _cronExpressionForRecurrence?: string; 
  public get cronExpressionForRecurrence() {
    return this.getStringAttribute('cron_expression_for_recurrence');
  }
  public set cronExpressionForRecurrence(value: string) {
    this._cronExpressionForRecurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionForRecurrenceInput() {
    return this._cronExpressionForRecurrence;
  }

  // start_at - computed: false, optional: false, required: true
  private _startAt?: string; 
  public get startAt() {
    return this.getStringAttribute('start_at');
  }
  public set startAt(value: string) {
    this._startAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtInput() {
    return this._startAt;
  }

  // duration - computed: false, optional: false, required: true
  private _duration = new DurationPropertyOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: DurationProperty) {
    this._duration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }
}

export class MaintenanceSchedulePropertyList extends cdktn.ComplexList {
  public internalValue? : MaintenanceScheduleProperty[] | cdktn.IResolvable

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
  public get(index: number): MaintenanceSchedulePropertyOutputReference {
    return new MaintenanceSchedulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoTuneOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#desired_state AwsDomain#desired_state}
  */
  readonly desiredState: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#rollback_on_disable AwsDomain#rollback_on_disable}
  */
  readonly rollbackOnDisable?: string;
  /**
  * maintenance_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#maintenance_schedule AwsDomain#maintenance_schedule}
  */
  readonly maintenanceSchedule?: MaintenanceScheduleProperty[] | cdktn.IResolvable;
}
export class AutoTuneOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoTuneOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._rollbackOnDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackOnDisable = this._rollbackOnDisable;
    }
    if (this._maintenanceSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceSchedule = this._maintenanceSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoTuneOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredState = undefined;
      this._rollbackOnDisable = undefined;
      this._maintenanceSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredState = value.desiredState;
      this._rollbackOnDisable = value.rollbackOnDisable;
      this._maintenanceSchedule.internalValue = value.maintenanceSchedule;
    }
  }

  // desired_state - computed: false, optional: false, required: true
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // rollback_on_disable - computed: true, optional: true, required: false
  private _rollbackOnDisable?: string; 
  public get rollbackOnDisable() {
    return this.getStringAttribute('rollback_on_disable');
  }
  public set rollbackOnDisable(value: string) {
    this._rollbackOnDisable = value;
  }
  public resetRollbackOnDisable() {
    this._rollbackOnDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackOnDisableInput() {
    return this._rollbackOnDisable;
  }

  // maintenance_schedule - computed: false, optional: true, required: false
  private _maintenanceSchedule = new MaintenanceSchedulePropertyList(this, "maintenance_schedule", true);
  public get maintenanceSchedule() {
    return this._maintenanceSchedule;
  }
  public putMaintenanceSchedule(value: MaintenanceScheduleProperty[] | cdktn.IResolvable) {
    this._maintenanceSchedule.internalValue = value;
  }
  public resetMaintenanceSchedule() {
    this._maintenanceSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceScheduleInput() {
    return this._maintenanceSchedule.internalValue;
  }
}
export interface ColdStorageOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#enabled AwsDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class ColdStorageOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ColdStorageOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ColdStorageOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ZoneAwarenessConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#availability_zone_count AwsDomain#availability_zone_count}
  */
  readonly availabilityZoneCount?: number;
}
export class ZoneAwarenessConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneAwarenessConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneCount = this._availabilityZoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneAwarenessConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZoneCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZoneCount = value.availabilityZoneCount;
    }
  }

  // availability_zone_count - computed: false, optional: true, required: false
  private _availabilityZoneCount?: number; 
  public get availabilityZoneCount() {
    return this.getNumberAttribute('availability_zone_count');
  }
  public set availabilityZoneCount(value: number) {
    this._availabilityZoneCount = value;
  }
  public resetAvailabilityZoneCount() {
    this._availabilityZoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneCountInput() {
    return this._availabilityZoneCount;
  }
}
export interface ClusterConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#dedicated_master_count AwsDomain#dedicated_master_count}
  */
  readonly dedicatedMasterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#dedicated_master_enabled AwsDomain#dedicated_master_enabled}
  */
  readonly dedicatedMasterEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#dedicated_master_type AwsDomain#dedicated_master_type}
  */
  readonly dedicatedMasterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#instance_count AwsDomain#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#warm_count AwsDomain#warm_count}
  */
  readonly warmCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#warm_enabled AwsDomain#warm_enabled}
  */
  readonly warmEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#warm_type AwsDomain#warm_type}
  */
  readonly warmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#zone_awareness_enabled AwsDomain#zone_awareness_enabled}
  */
  readonly zoneAwarenessEnabled?: boolean | cdktn.IResolvable;
  /**
  * cold_storage_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#cold_storage_options AwsDomain#cold_storage_options}
  */
  readonly coldStorageOptions?: ColdStorageOptionsProperty;
  /**
  * zone_awareness_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#zone_awareness_config AwsDomain#zone_awareness_config}
  */
  readonly zoneAwarenessConfig?: ZoneAwarenessConfigProperty;
}
export class ClusterConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicatedMasterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterCount = this._dedicatedMasterCount;
    }
    if (this._dedicatedMasterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterEnabled = this._dedicatedMasterEnabled;
    }
    if (this._dedicatedMasterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterType = this._dedicatedMasterType;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._warmCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmCount = this._warmCount;
    }
    if (this._warmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmEnabled = this._warmEnabled;
    }
    if (this._warmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmType = this._warmType;
    }
    if (this._zoneAwarenessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAwarenessEnabled = this._zoneAwarenessEnabled;
    }
    if (this._coldStorageOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coldStorageOptions = this._coldStorageOptions?.internalValue;
    }
    if (this._zoneAwarenessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAwarenessConfig = this._zoneAwarenessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dedicatedMasterCount = undefined;
      this._dedicatedMasterEnabled = undefined;
      this._dedicatedMasterType = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._warmCount = undefined;
      this._warmEnabled = undefined;
      this._warmType = undefined;
      this._zoneAwarenessEnabled = undefined;
      this._coldStorageOptions.internalValue = undefined;
      this._zoneAwarenessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dedicatedMasterCount = value.dedicatedMasterCount;
      this._dedicatedMasterEnabled = value.dedicatedMasterEnabled;
      this._dedicatedMasterType = value.dedicatedMasterType;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._warmCount = value.warmCount;
      this._warmEnabled = value.warmEnabled;
      this._warmType = value.warmType;
      this._zoneAwarenessEnabled = value.zoneAwarenessEnabled;
      this._coldStorageOptions.internalValue = value.coldStorageOptions;
      this._zoneAwarenessConfig.internalValue = value.zoneAwarenessConfig;
    }
  }

  // dedicated_master_count - computed: false, optional: true, required: false
  private _dedicatedMasterCount?: number; 
  public get dedicatedMasterCount() {
    return this.getNumberAttribute('dedicated_master_count');
  }
  public set dedicatedMasterCount(value: number) {
    this._dedicatedMasterCount = value;
  }
  public resetDedicatedMasterCount() {
    this._dedicatedMasterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterCountInput() {
    return this._dedicatedMasterCount;
  }

  // dedicated_master_enabled - computed: false, optional: true, required: false
  private _dedicatedMasterEnabled?: boolean | cdktn.IResolvable; 
  public get dedicatedMasterEnabled() {
    return this.getBooleanAttribute('dedicated_master_enabled');
  }
  public set dedicatedMasterEnabled(value: boolean | cdktn.IResolvable) {
    this._dedicatedMasterEnabled = value;
  }
  public resetDedicatedMasterEnabled() {
    this._dedicatedMasterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterEnabledInput() {
    return this._dedicatedMasterEnabled;
  }

  // dedicated_master_type - computed: false, optional: true, required: false
  private _dedicatedMasterType?: string; 
  public get dedicatedMasterType() {
    return this.getStringAttribute('dedicated_master_type');
  }
  public set dedicatedMasterType(value: string) {
    this._dedicatedMasterType = value;
  }
  public resetDedicatedMasterType() {
    this._dedicatedMasterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterTypeInput() {
    return this._dedicatedMasterType;
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

  // warm_count - computed: false, optional: true, required: false
  private _warmCount?: number; 
  public get warmCount() {
    return this.getNumberAttribute('warm_count');
  }
  public set warmCount(value: number) {
    this._warmCount = value;
  }
  public resetWarmCount() {
    this._warmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmCountInput() {
    return this._warmCount;
  }

  // warm_enabled - computed: false, optional: true, required: false
  private _warmEnabled?: boolean | cdktn.IResolvable; 
  public get warmEnabled() {
    return this.getBooleanAttribute('warm_enabled');
  }
  public set warmEnabled(value: boolean | cdktn.IResolvable) {
    this._warmEnabled = value;
  }
  public resetWarmEnabled() {
    this._warmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmEnabledInput() {
    return this._warmEnabled;
  }

  // warm_type - computed: false, optional: true, required: false
  private _warmType?: string; 
  public get warmType() {
    return this.getStringAttribute('warm_type');
  }
  public set warmType(value: string) {
    this._warmType = value;
  }
  public resetWarmType() {
    this._warmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmTypeInput() {
    return this._warmType;
  }

  // zone_awareness_enabled - computed: false, optional: true, required: false
  private _zoneAwarenessEnabled?: boolean | cdktn.IResolvable; 
  public get zoneAwarenessEnabled() {
    return this.getBooleanAttribute('zone_awareness_enabled');
  }
  public set zoneAwarenessEnabled(value: boolean | cdktn.IResolvable) {
    this._zoneAwarenessEnabled = value;
  }
  public resetZoneAwarenessEnabled() {
    this._zoneAwarenessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAwarenessEnabledInput() {
    return this._zoneAwarenessEnabled;
  }

  // cold_storage_options - computed: false, optional: true, required: false
  private _coldStorageOptions = new ColdStorageOptionsPropertyOutputReference(this, "cold_storage_options");
  public get coldStorageOptions() {
    return this._coldStorageOptions;
  }
  public putColdStorageOptions(value: ColdStorageOptionsProperty) {
    this._coldStorageOptions.internalValue = value;
  }
  public resetColdStorageOptions() {
    this._coldStorageOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageOptionsInput() {
    return this._coldStorageOptions.internalValue;
  }

  // zone_awareness_config - computed: false, optional: true, required: false
  private _zoneAwarenessConfig = new ZoneAwarenessConfigPropertyOutputReference(this, "zone_awareness_config");
  public get zoneAwarenessConfig() {
    return this._zoneAwarenessConfig;
  }
  public putZoneAwarenessConfig(value: ZoneAwarenessConfigProperty) {
    this._zoneAwarenessConfig.internalValue = value;
  }
  public resetZoneAwarenessConfig() {
    this._zoneAwarenessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAwarenessConfigInput() {
    return this._zoneAwarenessConfig.internalValue;
  }
}
export interface CognitoOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#enabled AwsDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#identity_pool_id AwsDomain#identity_pool_id}
  */
  readonly identityPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#role_arn AwsDomain#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#user_pool_id AwsDomain#user_pool_id}
  */
  readonly userPoolId: string;
}
export class CognitoOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._identityPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityPoolId = this._identityPoolId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._userPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._identityPoolId = undefined;
      this._roleArn = undefined;
      this._userPoolId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._identityPoolId = value.identityPoolId;
      this._roleArn = value.roleArn;
      this._userPoolId = value.userPoolId;
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

  // identity_pool_id - computed: false, optional: false, required: true
  private _identityPoolId?: string; 
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolIdInput() {
    return this._identityPoolId;
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

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }
}
export interface DomainEndpointOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#custom_endpoint AwsDomain#custom_endpoint}
  */
  readonly customEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#custom_endpoint_certificate_arn AwsDomain#custom_endpoint_certificate_arn}
  */
  readonly customEndpointCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#custom_endpoint_enabled AwsDomain#custom_endpoint_enabled}
  */
  readonly customEndpointEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#enforce_https AwsDomain#enforce_https}
  */
  readonly enforceHttps?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#tls_security_policy AwsDomain#tls_security_policy}
  */
  readonly tlsSecurityPolicy?: string;
}
export class DomainEndpointOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainEndpointOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpoint = this._customEndpoint;
    }
    if (this._customEndpointCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpointCertificateArn = this._customEndpointCertificateArn;
    }
    if (this._customEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpointEnabled = this._customEndpointEnabled;
    }
    if (this._enforceHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceHttps = this._enforceHttps;
    }
    if (this._tlsSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecurityPolicy = this._tlsSecurityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainEndpointOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customEndpoint = undefined;
      this._customEndpointCertificateArn = undefined;
      this._customEndpointEnabled = undefined;
      this._enforceHttps = undefined;
      this._tlsSecurityPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customEndpoint = value.customEndpoint;
      this._customEndpointCertificateArn = value.customEndpointCertificateArn;
      this._customEndpointEnabled = value.customEndpointEnabled;
      this._enforceHttps = value.enforceHttps;
      this._tlsSecurityPolicy = value.tlsSecurityPolicy;
    }
  }

  // custom_endpoint - computed: false, optional: true, required: false
  private _customEndpoint?: string; 
  public get customEndpoint() {
    return this.getStringAttribute('custom_endpoint');
  }
  public set customEndpoint(value: string) {
    this._customEndpoint = value;
  }
  public resetCustomEndpoint() {
    this._customEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointInput() {
    return this._customEndpoint;
  }

  // custom_endpoint_certificate_arn - computed: false, optional: true, required: false
  private _customEndpointCertificateArn?: string; 
  public get customEndpointCertificateArn() {
    return this.getStringAttribute('custom_endpoint_certificate_arn');
  }
  public set customEndpointCertificateArn(value: string) {
    this._customEndpointCertificateArn = value;
  }
  public resetCustomEndpointCertificateArn() {
    this._customEndpointCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointCertificateArnInput() {
    return this._customEndpointCertificateArn;
  }

  // custom_endpoint_enabled - computed: false, optional: true, required: false
  private _customEndpointEnabled?: boolean | cdktn.IResolvable; 
  public get customEndpointEnabled() {
    return this.getBooleanAttribute('custom_endpoint_enabled');
  }
  public set customEndpointEnabled(value: boolean | cdktn.IResolvable) {
    this._customEndpointEnabled = value;
  }
  public resetCustomEndpointEnabled() {
    this._customEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointEnabledInput() {
    return this._customEndpointEnabled;
  }

  // enforce_https - computed: false, optional: true, required: false
  private _enforceHttps?: boolean | cdktn.IResolvable; 
  public get enforceHttps() {
    return this.getBooleanAttribute('enforce_https');
  }
  public set enforceHttps(value: boolean | cdktn.IResolvable) {
    this._enforceHttps = value;
  }
  public resetEnforceHttps() {
    this._enforceHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceHttpsInput() {
    return this._enforceHttps;
  }

  // tls_security_policy - computed: true, optional: true, required: false
  private _tlsSecurityPolicy?: string; 
  public get tlsSecurityPolicy() {
    return this.getStringAttribute('tls_security_policy');
  }
  public set tlsSecurityPolicy(value: string) {
    this._tlsSecurityPolicy = value;
  }
  public resetTlsSecurityPolicy() {
    this._tlsSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecurityPolicyInput() {
    return this._tlsSecurityPolicy;
  }
}
export interface EbsOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#ebs_enabled AwsDomain#ebs_enabled}
  */
  readonly ebsEnabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#iops AwsDomain#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#throughput AwsDomain#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#volume_size AwsDomain#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#volume_type AwsDomain#volume_type}
  */
  readonly volumeType?: string;
}
export class EbsOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsEnabled = this._ebsEnabled;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ebsEnabled = undefined;
      this._iops = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ebsEnabled = value.ebsEnabled;
      this._iops = value.iops;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // ebs_enabled - computed: false, optional: false, required: true
  private _ebsEnabled?: boolean | cdktn.IResolvable; 
  public get ebsEnabled() {
    return this.getBooleanAttribute('ebs_enabled');
  }
  public set ebsEnabled(value: boolean | cdktn.IResolvable) {
    this._ebsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEnabledInput() {
    return this._ebsEnabled;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
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

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface EncryptAtRestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#enabled AwsDomain#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#kms_key_id AwsDomain#kms_key_id}
  */
  readonly kmsKeyId?: string;
}
export class EncryptAtRestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptAtRestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptAtRestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._kmsKeyId = value.kmsKeyId;
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
}
export interface LogPublishingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#cloudwatch_log_group_arn AwsDomain#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#enabled AwsDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#log_type AwsDomain#log_type}
  */
  readonly logType: string;
}
export class LogPublishingOptionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogPublishingOptionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogGroupArn = this._cloudwatchLogGroupArn;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogPublishingOptionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogGroupArn = undefined;
      this._enabled = undefined;
      this._logType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogGroupArn = value.cloudwatchLogGroupArn;
      this._enabled = value.enabled;
      this._logType = value.logType;
    }
  }

  // cloudwatch_log_group_arn - computed: false, optional: false, required: true
  private _cloudwatchLogGroupArn?: string; 
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }
  public set cloudwatchLogGroupArn(value: string) {
    this._cloudwatchLogGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupArnInput() {
    return this._cloudwatchLogGroupArn;
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

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class LogPublishingOptionsPropertyList extends cdktn.ComplexList {
  public internalValue? : LogPublishingOptionsProperty[] | cdktn.IResolvable

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
  public get(index: number): LogPublishingOptionsPropertyOutputReference {
    return new LogPublishingOptionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeToNodeEncryptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#enabled AwsDomain#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}
export class NodeToNodeEncryptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeToNodeEncryptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeToNodeEncryptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface SnapshotOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#automated_snapshot_start_hour AwsDomain#automated_snapshot_start_hour}
  */
  readonly automatedSnapshotStartHour: number;
}
export class SnapshotOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnapshotOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatedSnapshotStartHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatedSnapshotStartHour = this._automatedSnapshotStartHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automatedSnapshotStartHour = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automatedSnapshotStartHour = value.automatedSnapshotStartHour;
    }
  }

  // automated_snapshot_start_hour - computed: false, optional: false, required: true
  private _automatedSnapshotStartHour?: number; 
  public get automatedSnapshotStartHour() {
    return this.getNumberAttribute('automated_snapshot_start_hour');
  }
  public set automatedSnapshotStartHour(value: number) {
    this._automatedSnapshotStartHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedSnapshotStartHourInput() {
    return this._automatedSnapshotStartHour;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#create AwsDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#delete AwsDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#update AwsDomain#update}
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
export interface VpcOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#security_group_ids AwsDomain#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/elasticsearch_domain#subnet_ids AwsDomain#subnet_ids}
  */
  readonly subnetIds?: string[];
}
export class VpcOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return cdktn.Fn.tolist(this.getListAttribute('availability_zones'));
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
}
