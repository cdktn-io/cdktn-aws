// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfDeliveryStreamConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#arn TfDeliveryStream#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#destination TfDeliveryStream#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#destination_id TfDeliveryStream#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#id TfDeliveryStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#name TfDeliveryStream#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#region TfDeliveryStream#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#tags TfDeliveryStream#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#tags_all TfDeliveryStream#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#version_id TfDeliveryStream#version_id}
  */
  readonly versionId?: string;
  /**
  * elasticsearch_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#elasticsearch_configuration TfDeliveryStream#elasticsearch_configuration}
  */
  readonly elasticsearchConfiguration?: TfDeliveryStream.ElasticsearchConfigurationProperty;
  /**
  * extended_s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#extended_s3_configuration TfDeliveryStream#extended_s3_configuration}
  */
  readonly extendedS3Configuration?: TfDeliveryStream.ExtendedS3ConfigurationProperty;
  /**
  * http_endpoint_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#http_endpoint_configuration TfDeliveryStream#http_endpoint_configuration}
  */
  readonly httpEndpointConfiguration?: TfDeliveryStream.HttpEndpointConfigurationProperty;
  /**
  * iceberg_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#iceberg_configuration TfDeliveryStream#iceberg_configuration}
  */
  readonly icebergConfiguration?: TfDeliveryStream.IcebergConfigurationProperty;
  /**
  * kinesis_source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kinesis_source_configuration TfDeliveryStream#kinesis_source_configuration}
  */
  readonly kinesisSourceConfiguration?: TfDeliveryStream.KinesisSourceConfigurationProperty;
  /**
  * msk_source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#msk_source_configuration TfDeliveryStream#msk_source_configuration}
  */
  readonly mskSourceConfiguration?: TfDeliveryStream.MskSourceConfigurationProperty;
  /**
  * opensearch_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#opensearch_configuration TfDeliveryStream#opensearch_configuration}
  */
  readonly opensearchConfiguration?: TfDeliveryStream.OpensearchConfigurationProperty;
  /**
  * opensearchserverless_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#opensearchserverless_configuration TfDeliveryStream#opensearchserverless_configuration}
  */
  readonly opensearchserverlessConfiguration?: TfDeliveryStream.OpensearchserverlessConfigurationProperty;
  /**
  * redshift_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#redshift_configuration TfDeliveryStream#redshift_configuration}
  */
  readonly redshiftConfiguration?: TfDeliveryStream.RedshiftConfigurationProperty;
  /**
  * server_side_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#server_side_encryption TfDeliveryStream#server_side_encryption}
  */
  readonly serverSideEncryption?: TfDeliveryStream.ServerSideEncryptionProperty;
  /**
  * snowflake_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_configuration TfDeliveryStream#snowflake_configuration}
  */
  readonly snowflakeConfiguration?: TfDeliveryStream.SnowflakeConfigurationProperty;
  /**
  * splunk_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#splunk_configuration TfDeliveryStream#splunk_configuration}
  */
  readonly splunkConfiguration?: TfDeliveryStream.SplunkConfigurationProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#timeouts TfDeliveryStream#timeouts}
  */
  readonly timeouts?: TfDeliveryStream.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream aws_kinesis_firehose_delivery_stream}
*/
export class TfDeliveryStream extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kinesis_firehose_delivery_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfDeliveryStream resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfDeliveryStream to import
  * @param importFromId The id of the existing TfDeliveryStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfDeliveryStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_kinesis_firehose_delivery_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream aws_kinesis_firehose_delivery_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfDeliveryStreamConfig
  */
  public constructor(scope: Construct, id: string, config: TfDeliveryStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_firehose_delivery_stream',
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
    this._destination = config.destination;
    this._destinationId = config.destinationId;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._versionId = config.versionId;
    this._elasticsearchConfiguration.internalValue = config.elasticsearchConfiguration;
    this._extendedS3Configuration.internalValue = config.extendedS3Configuration;
    this._httpEndpointConfiguration.internalValue = config.httpEndpointConfiguration;
    this._icebergConfiguration.internalValue = config.icebergConfiguration;
    this._kinesisSourceConfiguration.internalValue = config.kinesisSourceConfiguration;
    this._mskSourceConfiguration.internalValue = config.mskSourceConfiguration;
    this._opensearchConfiguration.internalValue = config.opensearchConfiguration;
    this._opensearchserverlessConfiguration.internalValue = config.opensearchserverlessConfiguration;
    this._redshiftConfiguration.internalValue = config.redshiftConfiguration;
    this._serverSideEncryption.internalValue = config.serverSideEncryption;
    this._snowflakeConfiguration.internalValue = config.snowflakeConfiguration;
    this._splunkConfiguration.internalValue = config.splunkConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
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

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_id - computed: true, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
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

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // elasticsearch_configuration - computed: false, optional: true, required: false
  private _elasticsearchConfiguration = new TfDeliveryStream.ElasticsearchConfigurationPropertyOutputReference(this, "elasticsearch_configuration");
  public get elasticsearchConfiguration() {
    return this._elasticsearchConfiguration;
  }
  public putElasticsearchConfiguration(value: TfDeliveryStream.ElasticsearchConfigurationProperty) {
    this._elasticsearchConfiguration.internalValue = value;
  }
  public resetElasticsearchConfiguration() {
    this._elasticsearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConfigurationInput() {
    return this._elasticsearchConfiguration.internalValue;
  }

  // extended_s3_configuration - computed: false, optional: true, required: false
  private _extendedS3Configuration = new TfDeliveryStream.ExtendedS3ConfigurationPropertyOutputReference(this, "extended_s3_configuration");
  public get extendedS3Configuration() {
    return this._extendedS3Configuration;
  }
  public putExtendedS3Configuration(value: TfDeliveryStream.ExtendedS3ConfigurationProperty) {
    this._extendedS3Configuration.internalValue = value;
  }
  public resetExtendedS3Configuration() {
    this._extendedS3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedS3ConfigurationInput() {
    return this._extendedS3Configuration.internalValue;
  }

  // http_endpoint_configuration - computed: false, optional: true, required: false
  private _httpEndpointConfiguration = new TfDeliveryStream.HttpEndpointConfigurationPropertyOutputReference(this, "http_endpoint_configuration");
  public get httpEndpointConfiguration() {
    return this._httpEndpointConfiguration;
  }
  public putHttpEndpointConfiguration(value: TfDeliveryStream.HttpEndpointConfigurationProperty) {
    this._httpEndpointConfiguration.internalValue = value;
  }
  public resetHttpEndpointConfiguration() {
    this._httpEndpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointConfigurationInput() {
    return this._httpEndpointConfiguration.internalValue;
  }

  // iceberg_configuration - computed: false, optional: true, required: false
  private _icebergConfiguration = new TfDeliveryStream.IcebergConfigurationPropertyOutputReference(this, "iceberg_configuration");
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
  public putIcebergConfiguration(value: TfDeliveryStream.IcebergConfigurationProperty) {
    this._icebergConfiguration.internalValue = value;
  }
  public resetIcebergConfiguration() {
    this._icebergConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConfigurationInput() {
    return this._icebergConfiguration.internalValue;
  }

  // kinesis_source_configuration - computed: false, optional: true, required: false
  private _kinesisSourceConfiguration = new TfDeliveryStream.KinesisSourceConfigurationPropertyOutputReference(this, "kinesis_source_configuration");
  public get kinesisSourceConfiguration() {
    return this._kinesisSourceConfiguration;
  }
  public putKinesisSourceConfiguration(value: TfDeliveryStream.KinesisSourceConfigurationProperty) {
    this._kinesisSourceConfiguration.internalValue = value;
  }
  public resetKinesisSourceConfiguration() {
    this._kinesisSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisSourceConfigurationInput() {
    return this._kinesisSourceConfiguration.internalValue;
  }

  // msk_source_configuration - computed: false, optional: true, required: false
  private _mskSourceConfiguration = new TfDeliveryStream.MskSourceConfigurationPropertyOutputReference(this, "msk_source_configuration");
  public get mskSourceConfiguration() {
    return this._mskSourceConfiguration;
  }
  public putMskSourceConfiguration(value: TfDeliveryStream.MskSourceConfigurationProperty) {
    this._mskSourceConfiguration.internalValue = value;
  }
  public resetMskSourceConfiguration() {
    this._mskSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mskSourceConfigurationInput() {
    return this._mskSourceConfiguration.internalValue;
  }

  // opensearch_configuration - computed: false, optional: true, required: false
  private _opensearchConfiguration = new TfDeliveryStream.OpensearchConfigurationPropertyOutputReference(this, "opensearch_configuration");
  public get opensearchConfiguration() {
    return this._opensearchConfiguration;
  }
  public putOpensearchConfiguration(value: TfDeliveryStream.OpensearchConfigurationProperty) {
    this._opensearchConfiguration.internalValue = value;
  }
  public resetOpensearchConfiguration() {
    this._opensearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchConfigurationInput() {
    return this._opensearchConfiguration.internalValue;
  }

  // opensearchserverless_configuration - computed: false, optional: true, required: false
  private _opensearchserverlessConfiguration = new TfDeliveryStream.OpensearchserverlessConfigurationPropertyOutputReference(this, "opensearchserverless_configuration");
  public get opensearchserverlessConfiguration() {
    return this._opensearchserverlessConfiguration;
  }
  public putOpensearchserverlessConfiguration(value: TfDeliveryStream.OpensearchserverlessConfigurationProperty) {
    this._opensearchserverlessConfiguration.internalValue = value;
  }
  public resetOpensearchserverlessConfiguration() {
    this._opensearchserverlessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchserverlessConfigurationInput() {
    return this._opensearchserverlessConfiguration.internalValue;
  }

  // redshift_configuration - computed: false, optional: true, required: false
  private _redshiftConfiguration = new TfDeliveryStream.RedshiftConfigurationPropertyOutputReference(this, "redshift_configuration");
  public get redshiftConfiguration() {
    return this._redshiftConfiguration;
  }
  public putRedshiftConfiguration(value: TfDeliveryStream.RedshiftConfigurationProperty) {
    this._redshiftConfiguration.internalValue = value;
  }
  public resetRedshiftConfiguration() {
    this._redshiftConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftConfigurationInput() {
    return this._redshiftConfiguration.internalValue;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption = new TfDeliveryStream.ServerSideEncryptionPropertyOutputReference(this, "server_side_encryption");
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public putServerSideEncryption(value: TfDeliveryStream.ServerSideEncryptionProperty) {
    this._serverSideEncryption.internalValue = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption.internalValue;
  }

  // snowflake_configuration - computed: false, optional: true, required: false
  private _snowflakeConfiguration = new TfDeliveryStream.SnowflakeConfigurationPropertyOutputReference(this, "snowflake_configuration");
  public get snowflakeConfiguration() {
    return this._snowflakeConfiguration;
  }
  public putSnowflakeConfiguration(value: TfDeliveryStream.SnowflakeConfigurationProperty) {
    this._snowflakeConfiguration.internalValue = value;
  }
  public resetSnowflakeConfiguration() {
    this._snowflakeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeConfigurationInput() {
    return this._snowflakeConfiguration.internalValue;
  }

  // splunk_configuration - computed: false, optional: true, required: false
  private _splunkConfiguration = new TfDeliveryStream.SplunkConfigurationPropertyOutputReference(this, "splunk_configuration");
  public get splunkConfiguration() {
    return this._splunkConfiguration;
  }
  public putSplunkConfiguration(value: TfDeliveryStream.SplunkConfigurationProperty) {
    this._splunkConfiguration.internalValue = value;
  }
  public resetSplunkConfiguration() {
    this._splunkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkConfigurationInput() {
    return this._splunkConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfDeliveryStream.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfDeliveryStream.TimeoutsProperty) {
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
      arn: cdktn.stringToTerraform(this._arn),
      destination: cdktn.stringToTerraform(this._destination),
      destination_id: cdktn.stringToTerraform(this._destinationId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      version_id: cdktn.stringToTerraform(this._versionId),
      elasticsearch_configuration: tfDeliveryStreamElasticsearchConfigurationPropertyToTerraform(this._elasticsearchConfiguration.internalValue),
      extended_s3_configuration: tfDeliveryStreamExtendedS3ConfigurationPropertyToTerraform(this._extendedS3Configuration.internalValue),
      http_endpoint_configuration: tfDeliveryStreamHttpEndpointConfigurationPropertyToTerraform(this._httpEndpointConfiguration.internalValue),
      iceberg_configuration: tfDeliveryStreamIcebergConfigurationPropertyToTerraform(this._icebergConfiguration.internalValue),
      kinesis_source_configuration: tfDeliveryStreamKinesisSourceConfigurationPropertyToTerraform(this._kinesisSourceConfiguration.internalValue),
      msk_source_configuration: tfDeliveryStreamMskSourceConfigurationPropertyToTerraform(this._mskSourceConfiguration.internalValue),
      opensearch_configuration: tfDeliveryStreamOpensearchConfigurationPropertyToTerraform(this._opensearchConfiguration.internalValue),
      opensearchserverless_configuration: tfDeliveryStreamOpensearchserverlessConfigurationPropertyToTerraform(this._opensearchserverlessConfiguration.internalValue),
      redshift_configuration: tfDeliveryStreamRedshiftConfigurationPropertyToTerraform(this._redshiftConfiguration.internalValue),
      server_side_encryption: tfDeliveryStreamServerSideEncryptionPropertyToTerraform(this._serverSideEncryption.internalValue),
      snowflake_configuration: tfDeliveryStreamSnowflakeConfigurationPropertyToTerraform(this._snowflakeConfiguration.internalValue),
      splunk_configuration: tfDeliveryStreamSplunkConfigurationPropertyToTerraform(this._splunkConfiguration.internalValue),
      timeouts: tfDeliveryStreamTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      destination: {
        value: cdktn.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_id: {
        value: cdktn.stringToHclTerraform(this._destinationId),
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
      version_id: {
        value: cdktn.stringToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_configuration: {
        value: tfDeliveryStreamElasticsearchConfigurationPropertyToHclTerraform(this._elasticsearchConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.ElasticsearchConfigurationPropertyList",
      },
      extended_s3_configuration: {
        value: tfDeliveryStreamExtendedS3ConfigurationPropertyToHclTerraform(this._extendedS3Configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.ExtendedS3ConfigurationPropertyList",
      },
      http_endpoint_configuration: {
        value: tfDeliveryStreamHttpEndpointConfigurationPropertyToHclTerraform(this._httpEndpointConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.HttpEndpointConfigurationPropertyList",
      },
      iceberg_configuration: {
        value: tfDeliveryStreamIcebergConfigurationPropertyToHclTerraform(this._icebergConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.IcebergConfigurationPropertyList",
      },
      kinesis_source_configuration: {
        value: tfDeliveryStreamKinesisSourceConfigurationPropertyToHclTerraform(this._kinesisSourceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.KinesisSourceConfigurationPropertyList",
      },
      msk_source_configuration: {
        value: tfDeliveryStreamMskSourceConfigurationPropertyToHclTerraform(this._mskSourceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.MskSourceConfigurationPropertyList",
      },
      opensearch_configuration: {
        value: tfDeliveryStreamOpensearchConfigurationPropertyToHclTerraform(this._opensearchConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.OpensearchConfigurationPropertyList",
      },
      opensearchserverless_configuration: {
        value: tfDeliveryStreamOpensearchserverlessConfigurationPropertyToHclTerraform(this._opensearchserverlessConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.OpensearchserverlessConfigurationPropertyList",
      },
      redshift_configuration: {
        value: tfDeliveryStreamRedshiftConfigurationPropertyToHclTerraform(this._redshiftConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.RedshiftConfigurationPropertyList",
      },
      server_side_encryption: {
        value: tfDeliveryStreamServerSideEncryptionPropertyToHclTerraform(this._serverSideEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.ServerSideEncryptionPropertyList",
      },
      snowflake_configuration: {
        value: tfDeliveryStreamSnowflakeConfigurationPropertyToHclTerraform(this._snowflakeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.SnowflakeConfigurationPropertyList",
      },
      splunk_configuration: {
        value: tfDeliveryStreamSplunkConfigurationPropertyToHclTerraform(this._splunkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDeliveryStream.SplunkConfigurationPropertyList",
      },
      timeouts: {
        value: tfDeliveryStreamTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfDeliveryStream.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsPropertyToTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform, true)(struct!.parameters),
  }
}


export function tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.listMapperHcl(tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "ElasticsearchConfigurationProcessingConfigurationProcessorsParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationPropertyToTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    processors: cdktn.listMapper(tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsPropertyToTerraform, true)(struct!.processors),
  }
}


export function tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationProcessingConfigurationProperty): any {
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
    processors: {
      value: cdktn.listMapperHcl(tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchConfigurationProcessingConfigurationProcessorsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamElasticsearchConfigurationS3ConfigurationPropertyToTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: tfDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function tfDeliveryStreamElasticsearchConfigurationS3ConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamElasticsearchConfigurationVpcConfigPropertyToTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationVpcConfigPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationVpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function tfDeliveryStreamElasticsearchConfigurationVpcConfigPropertyToHclTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationVpcConfigPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationVpcConfigProperty): any {
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


export function tfDeliveryStreamElasticsearchConfigurationPropertyToTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    cluster_endpoint: cdktn.stringToTerraform(struct!.clusterEndpoint),
    domain_arn: cdktn.stringToTerraform(struct!.domainArn),
    index_name: cdktn.stringToTerraform(struct!.indexName),
    index_rotation_period: cdktn.stringToTerraform(struct!.indexRotationPeriod),
    retry_duration: cdktn.numberToTerraform(struct!.retryDuration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktn.stringToTerraform(struct!.s3BackupMode),
    type_name: cdktn.stringToTerraform(struct!.typeName),
    cloudwatch_logging_options: tfDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationPropertyToTerraform(struct!.processingConfiguration),
    s3_configuration: tfDeliveryStreamElasticsearchConfigurationS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    vpc_config: tfDeliveryStreamElasticsearchConfigurationVpcConfigPropertyToTerraform(struct!.vpcConfig),
  }
}


export function tfDeliveryStreamElasticsearchConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.ElasticsearchConfigurationPropertyOutputReference | TfDeliveryStream.ElasticsearchConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.clusterEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_arn: {
      value: cdktn.stringToHclTerraform(struct!.domainArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_rotation_period: {
      value: cdktn.stringToHclTerraform(struct!.indexRotationPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktn.numberToHclTerraform(struct!.retryDuration),
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
    s3_backup_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktn.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: tfDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchConfigurationCloudwatchLoggingOptionsPropertyList",
    },
    processing_configuration: {
      value: tfDeliveryStreamElasticsearchConfigurationProcessingConfigurationPropertyToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchConfigurationProcessingConfigurationPropertyList",
    },
    s3_configuration: {
      value: tfDeliveryStreamElasticsearchConfigurationS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchConfigurationS3ConfigurationPropertyList",
    },
    vpc_config: {
      value: tfDeliveryStreamElasticsearchConfigurationVpcConfigPropertyToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchConfigurationVpcConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.ExtendedS3ConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.ExtendedS3ConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamHiveJsonSerDePropertyToTerraform(struct?: TfDeliveryStream.HiveJsonSerDePropertyOutputReference | TfDeliveryStream.HiveJsonSerDeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timestamp_formats: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.timestampFormats),
  }
}


export function tfDeliveryStreamHiveJsonSerDePropertyToHclTerraform(struct?: TfDeliveryStream.HiveJsonSerDePropertyOutputReference | TfDeliveryStream.HiveJsonSerDeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timestamp_formats: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.timestampFormats),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpenXJsonSerDePropertyToTerraform(struct?: TfDeliveryStream.OpenXJsonSerDePropertyOutputReference | TfDeliveryStream.OpenXJsonSerDeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    case_insensitive: cdktn.booleanToTerraform(struct!.caseInsensitive),
    column_to_json_key_mappings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.columnToJsonKeyMappings),
    convert_dots_in_json_keys_to_underscores: cdktn.booleanToTerraform(struct!.convertDotsInJsonKeysToUnderscores),
  }
}


export function tfDeliveryStreamOpenXJsonSerDePropertyToHclTerraform(struct?: TfDeliveryStream.OpenXJsonSerDePropertyOutputReference | TfDeliveryStream.OpenXJsonSerDeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    case_insensitive: {
      value: cdktn.booleanToHclTerraform(struct!.caseInsensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    column_to_json_key_mappings: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.columnToJsonKeyMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    convert_dots_in_json_keys_to_underscores: {
      value: cdktn.booleanToHclTerraform(struct!.convertDotsInJsonKeysToUnderscores),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamDeserializerPropertyToTerraform(struct?: TfDeliveryStream.DeserializerPropertyOutputReference | TfDeliveryStream.DeserializerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hive_json_ser_de: tfDeliveryStreamHiveJsonSerDePropertyToTerraform(struct!.hiveJsonSerDe),
    open_x_json_ser_de: tfDeliveryStreamOpenXJsonSerDePropertyToTerraform(struct!.openXJsonSerDe),
  }
}


export function tfDeliveryStreamDeserializerPropertyToHclTerraform(struct?: TfDeliveryStream.DeserializerPropertyOutputReference | TfDeliveryStream.DeserializerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hive_json_ser_de: {
      value: tfDeliveryStreamHiveJsonSerDePropertyToHclTerraform(struct!.hiveJsonSerDe),
      isBlock: true,
      type: "list",
      storageClassType: "HiveJsonSerDePropertyList",
    },
    open_x_json_ser_de: {
      value: tfDeliveryStreamOpenXJsonSerDePropertyToHclTerraform(struct!.openXJsonSerDe),
      isBlock: true,
      type: "list",
      storageClassType: "OpenXJsonSerDePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamInputFormatConfigurationPropertyToTerraform(struct?: TfDeliveryStream.InputFormatConfigurationPropertyOutputReference | TfDeliveryStream.InputFormatConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deserializer: tfDeliveryStreamDeserializerPropertyToTerraform(struct!.deserializer),
  }
}


export function tfDeliveryStreamInputFormatConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.InputFormatConfigurationPropertyOutputReference | TfDeliveryStream.InputFormatConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deserializer: {
      value: tfDeliveryStreamDeserializerPropertyToHclTerraform(struct!.deserializer),
      isBlock: true,
      type: "list",
      storageClassType: "DeserializerPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOrcSerDePropertyToTerraform(struct?: TfDeliveryStream.OrcSerDePropertyOutputReference | TfDeliveryStream.OrcSerDeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    block_size_bytes: cdktn.numberToTerraform(struct!.blockSizeBytes),
    bloom_filter_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bloomFilterColumns),
    bloom_filter_false_positive_probability: cdktn.numberToTerraform(struct!.bloomFilterFalsePositiveProbability),
    compression: cdktn.stringToTerraform(struct!.compression),
    dictionary_key_threshold: cdktn.numberToTerraform(struct!.dictionaryKeyThreshold),
    enable_padding: cdktn.booleanToTerraform(struct!.enablePadding),
    format_version: cdktn.stringToTerraform(struct!.formatVersion),
    padding_tolerance: cdktn.numberToTerraform(struct!.paddingTolerance),
    row_index_stride: cdktn.numberToTerraform(struct!.rowIndexStride),
    stripe_size_bytes: cdktn.numberToTerraform(struct!.stripeSizeBytes),
  }
}


export function tfDeliveryStreamOrcSerDePropertyToHclTerraform(struct?: TfDeliveryStream.OrcSerDePropertyOutputReference | TfDeliveryStream.OrcSerDeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    block_size_bytes: {
      value: cdktn.numberToHclTerraform(struct!.blockSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bloom_filter_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.bloomFilterColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bloom_filter_false_positive_probability: {
      value: cdktn.numberToHclTerraform(struct!.bloomFilterFalsePositiveProbability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary_key_threshold: {
      value: cdktn.numberToHclTerraform(struct!.dictionaryKeyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_padding: {
      value: cdktn.booleanToHclTerraform(struct!.enablePadding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format_version: {
      value: cdktn.stringToHclTerraform(struct!.formatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding_tolerance: {
      value: cdktn.numberToHclTerraform(struct!.paddingTolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    row_index_stride: {
      value: cdktn.numberToHclTerraform(struct!.rowIndexStride),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stripe_size_bytes: {
      value: cdktn.numberToHclTerraform(struct!.stripeSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamParquetSerDePropertyToTerraform(struct?: TfDeliveryStream.ParquetSerDePropertyOutputReference | TfDeliveryStream.ParquetSerDeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    block_size_bytes: cdktn.numberToTerraform(struct!.blockSizeBytes),
    compression: cdktn.stringToTerraform(struct!.compression),
    enable_dictionary_compression: cdktn.booleanToTerraform(struct!.enableDictionaryCompression),
    max_padding_bytes: cdktn.numberToTerraform(struct!.maxPaddingBytes),
    page_size_bytes: cdktn.numberToTerraform(struct!.pageSizeBytes),
    writer_version: cdktn.stringToTerraform(struct!.writerVersion),
  }
}


export function tfDeliveryStreamParquetSerDePropertyToHclTerraform(struct?: TfDeliveryStream.ParquetSerDePropertyOutputReference | TfDeliveryStream.ParquetSerDeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    block_size_bytes: {
      value: cdktn.numberToHclTerraform(struct!.blockSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dictionary_compression: {
      value: cdktn.booleanToHclTerraform(struct!.enableDictionaryCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_padding_bytes: {
      value: cdktn.numberToHclTerraform(struct!.maxPaddingBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_size_bytes: {
      value: cdktn.numberToHclTerraform(struct!.pageSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writer_version: {
      value: cdktn.stringToHclTerraform(struct!.writerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSerializerPropertyToTerraform(struct?: TfDeliveryStream.SerializerPropertyOutputReference | TfDeliveryStream.SerializerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    orc_ser_de: tfDeliveryStreamOrcSerDePropertyToTerraform(struct!.orcSerDe),
    parquet_ser_de: tfDeliveryStreamParquetSerDePropertyToTerraform(struct!.parquetSerDe),
  }
}


export function tfDeliveryStreamSerializerPropertyToHclTerraform(struct?: TfDeliveryStream.SerializerPropertyOutputReference | TfDeliveryStream.SerializerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    orc_ser_de: {
      value: tfDeliveryStreamOrcSerDePropertyToHclTerraform(struct!.orcSerDe),
      isBlock: true,
      type: "list",
      storageClassType: "OrcSerDePropertyList",
    },
    parquet_ser_de: {
      value: tfDeliveryStreamParquetSerDePropertyToHclTerraform(struct!.parquetSerDe),
      isBlock: true,
      type: "list",
      storageClassType: "ParquetSerDePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOutputFormatConfigurationPropertyToTerraform(struct?: TfDeliveryStream.OutputFormatConfigurationPropertyOutputReference | TfDeliveryStream.OutputFormatConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    serializer: tfDeliveryStreamSerializerPropertyToTerraform(struct!.serializer),
  }
}


export function tfDeliveryStreamOutputFormatConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.OutputFormatConfigurationPropertyOutputReference | TfDeliveryStream.OutputFormatConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    serializer: {
      value: tfDeliveryStreamSerializerPropertyToHclTerraform(struct!.serializer),
      isBlock: true,
      type: "list",
      storageClassType: "SerializerPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSchemaConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SchemaConfigurationPropertyOutputReference | TfDeliveryStream.SchemaConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    version_id: cdktn.stringToTerraform(struct!.versionId),
  }
}


export function tfDeliveryStreamSchemaConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SchemaConfigurationPropertyOutputReference | TfDeliveryStream.SchemaConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
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
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
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
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamDataFormatConversionConfigurationPropertyToTerraform(struct?: TfDeliveryStream.DataFormatConversionConfigurationPropertyOutputReference | TfDeliveryStream.DataFormatConversionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    input_format_configuration: tfDeliveryStreamInputFormatConfigurationPropertyToTerraform(struct!.inputFormatConfiguration),
    output_format_configuration: tfDeliveryStreamOutputFormatConfigurationPropertyToTerraform(struct!.outputFormatConfiguration),
    schema_configuration: tfDeliveryStreamSchemaConfigurationPropertyToTerraform(struct!.schemaConfiguration),
  }
}


export function tfDeliveryStreamDataFormatConversionConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.DataFormatConversionConfigurationPropertyOutputReference | TfDeliveryStream.DataFormatConversionConfigurationProperty): any {
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
    input_format_configuration: {
      value: tfDeliveryStreamInputFormatConfigurationPropertyToHclTerraform(struct!.inputFormatConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "InputFormatConfigurationPropertyList",
    },
    output_format_configuration: {
      value: tfDeliveryStreamOutputFormatConfigurationPropertyToHclTerraform(struct!.outputFormatConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OutputFormatConfigurationPropertyList",
    },
    schema_configuration: {
      value: tfDeliveryStreamSchemaConfigurationPropertyToHclTerraform(struct!.schemaConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamDynamicPartitioningConfigurationPropertyToTerraform(struct?: TfDeliveryStream.DynamicPartitioningConfigurationPropertyOutputReference | TfDeliveryStream.DynamicPartitioningConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    retry_duration: cdktn.numberToTerraform(struct!.retryDuration),
  }
}


export function tfDeliveryStreamDynamicPartitioningConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.DynamicPartitioningConfigurationPropertyOutputReference | TfDeliveryStream.DynamicPartitioningConfigurationProperty): any {
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
    retry_duration: {
      value: cdktn.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsPropertyToTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform, true)(struct!.parameters),
  }
}


export function tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.listMapperHcl(tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationPropertyToTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.ExtendedS3ConfigurationProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    processors: cdktn.listMapper(tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsPropertyToTerraform, true)(struct!.processors),
  }
}


export function tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.ExtendedS3ConfigurationProcessingConfigurationProperty): any {
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
    processors: {
      value: cdktn.listMapperHcl(tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendedS3ConfigurationProcessingConfigurationProcessorsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationPropertyToTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationS3BackupConfigurationPropertyOutputReference | TfDeliveryStream.ExtendedS3ConfigurationS3BackupConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: tfDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function tfDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationS3BackupConfigurationPropertyOutputReference | TfDeliveryStream.ExtendedS3ConfigurationS3BackupConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamExtendedS3ConfigurationPropertyToTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationPropertyOutputReference | TfDeliveryStream.ExtendedS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    custom_time_zone: cdktn.stringToTerraform(struct!.customTimeZone),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    file_extension: cdktn.stringToTerraform(struct!.fileExtension),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktn.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: tfDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
    data_format_conversion_configuration: tfDeliveryStreamDataFormatConversionConfigurationPropertyToTerraform(struct!.dataFormatConversionConfiguration),
    dynamic_partitioning_configuration: tfDeliveryStreamDynamicPartitioningConfigurationPropertyToTerraform(struct!.dynamicPartitioningConfiguration),
    processing_configuration: tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationPropertyToTerraform(struct!.processingConfiguration),
    s3_backup_configuration: tfDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationPropertyToTerraform(struct!.s3BackupConfiguration),
  }
}


export function tfDeliveryStreamExtendedS3ConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.ExtendedS3ConfigurationPropertyOutputReference | TfDeliveryStream.ExtendedS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_time_zone: {
      value: cdktn.stringToHclTerraform(struct!.customTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_extension: {
      value: cdktn.stringToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    s3_backup_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: tfDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendedS3ConfigurationCloudwatchLoggingOptionsPropertyList",
    },
    data_format_conversion_configuration: {
      value: tfDeliveryStreamDataFormatConversionConfigurationPropertyToHclTerraform(struct!.dataFormatConversionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataFormatConversionConfigurationPropertyList",
    },
    dynamic_partitioning_configuration: {
      value: tfDeliveryStreamDynamicPartitioningConfigurationPropertyToHclTerraform(struct!.dynamicPartitioningConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DynamicPartitioningConfigurationPropertyList",
    },
    processing_configuration: {
      value: tfDeliveryStreamExtendedS3ConfigurationProcessingConfigurationPropertyToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendedS3ConfigurationProcessingConfigurationPropertyList",
    },
    s3_backup_configuration: {
      value: tfDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationPropertyToHclTerraform(struct!.s3BackupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendedS3ConfigurationS3BackupConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsPropertyToTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform, true)(struct!.parameters),
  }
}


export function tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.listMapperHcl(tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "HttpEndpointConfigurationProcessingConfigurationProcessorsParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationPropertyToTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    processors: cdktn.listMapper(tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsPropertyToTerraform, true)(struct!.processors),
  }
}


export function tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationProcessingConfigurationProperty): any {
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
    processors: {
      value: cdktn.listMapperHcl(tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "HttpEndpointConfigurationProcessingConfigurationProcessorsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamCommonAttributesPropertyToTerraform(struct?: TfDeliveryStream.CommonAttributesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfDeliveryStreamCommonAttributesPropertyToHclTerraform(struct?: TfDeliveryStream.CommonAttributesProperty | cdktn.IResolvable): any {
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


export function tfDeliveryStreamRequestConfigurationPropertyToTerraform(struct?: TfDeliveryStream.RequestConfigurationPropertyOutputReference | TfDeliveryStream.RequestConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_encoding: cdktn.stringToTerraform(struct!.contentEncoding),
    common_attributes: cdktn.listMapper(tfDeliveryStreamCommonAttributesPropertyToTerraform, true)(struct!.commonAttributes),
  }
}


export function tfDeliveryStreamRequestConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.RequestConfigurationPropertyOutputReference | TfDeliveryStream.RequestConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_encoding: {
      value: cdktn.stringToHclTerraform(struct!.contentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_attributes: {
      value: cdktn.listMapperHcl(tfDeliveryStreamCommonAttributesPropertyToHclTerraform, true)(struct!.commonAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "CommonAttributesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamHttpEndpointConfigurationS3ConfigurationPropertyToTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: tfDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function tfDeliveryStreamHttpEndpointConfigurationS3ConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationPropertyToTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationSecretsManagerConfigurationPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationSecretsManagerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function tfDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationSecretsManagerConfigurationPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationSecretsManagerConfigurationProperty): any {
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
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamHttpEndpointConfigurationPropertyToTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key: cdktn.stringToTerraform(struct!.accessKey),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    name: cdktn.stringToTerraform(struct!.name),
    retry_duration: cdktn.numberToTerraform(struct!.retryDuration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktn.stringToTerraform(struct!.s3BackupMode),
    url: cdktn.stringToTerraform(struct!.url),
    cloudwatch_logging_options: tfDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationPropertyToTerraform(struct!.processingConfiguration),
    request_configuration: tfDeliveryStreamRequestConfigurationPropertyToTerraform(struct!.requestConfiguration),
    s3_configuration: tfDeliveryStreamHttpEndpointConfigurationS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    secrets_manager_configuration: tfDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationPropertyToTerraform(struct!.secretsManagerConfiguration),
  }
}


export function tfDeliveryStreamHttpEndpointConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.HttpEndpointConfigurationPropertyOutputReference | TfDeliveryStream.HttpEndpointConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key: {
      value: cdktn.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktn.numberToHclTerraform(struct!.retryDuration),
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
    s3_backup_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3BackupMode),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpEndpointConfigurationCloudwatchLoggingOptionsPropertyList",
    },
    processing_configuration: {
      value: tfDeliveryStreamHttpEndpointConfigurationProcessingConfigurationPropertyToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "HttpEndpointConfigurationProcessingConfigurationPropertyList",
    },
    request_configuration: {
      value: tfDeliveryStreamRequestConfigurationPropertyToHclTerraform(struct!.requestConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RequestConfigurationPropertyList",
    },
    s3_configuration: {
      value: tfDeliveryStreamHttpEndpointConfigurationS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "HttpEndpointConfigurationS3ConfigurationPropertyList",
    },
    secrets_manager_configuration: {
      value: tfDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationPropertyToHclTerraform(struct!.secretsManagerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "HttpEndpointConfigurationSecretsManagerConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.IcebergConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.IcebergConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.IcebergConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.IcebergConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamDestinationTableConfigurationPropertyToTerraform(struct?: TfDeliveryStream.DestinationTableConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    s3_error_output_prefix: cdktn.stringToTerraform(struct!.s3ErrorOutputPrefix),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    unique_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.uniqueKeys),
  }
}


export function tfDeliveryStreamDestinationTableConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.DestinationTableConfigurationProperty | cdktn.IResolvable): any {
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
    s3_error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3ErrorOutputPrefix),
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
    unique_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.uniqueKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform(struct?: TfDeliveryStream.IcebergConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function tfDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform(struct?: TfDeliveryStream.IcebergConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsPropertyToTerraform(struct?: TfDeliveryStream.IcebergConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(tfDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform, true)(struct!.parameters),
  }
}


export function tfDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform(struct?: TfDeliveryStream.IcebergConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.listMapperHcl(tfDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "IcebergConfigurationProcessingConfigurationProcessorsParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamIcebergConfigurationProcessingConfigurationPropertyToTerraform(struct?: TfDeliveryStream.IcebergConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.IcebergConfigurationProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    processors: cdktn.listMapper(tfDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsPropertyToTerraform, true)(struct!.processors),
  }
}


export function tfDeliveryStreamIcebergConfigurationProcessingConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.IcebergConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.IcebergConfigurationProcessingConfigurationProperty): any {
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
    processors: {
      value: cdktn.listMapperHcl(tfDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergConfigurationProcessingConfigurationProcessorsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamIcebergConfigurationS3ConfigurationPropertyToTerraform(struct?: TfDeliveryStream.IcebergConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.IcebergConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: tfDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function tfDeliveryStreamIcebergConfigurationS3ConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.IcebergConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.IcebergConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamIcebergConfigurationPropertyToTerraform(struct?: TfDeliveryStream.IcebergConfigurationPropertyOutputReference | TfDeliveryStream.IcebergConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_only: cdktn.booleanToTerraform(struct!.appendOnly),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    catalog_arn: cdktn.stringToTerraform(struct!.catalogArn),
    retry_duration: cdktn.numberToTerraform(struct!.retryDuration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktn.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: tfDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
    destination_table_configuration: cdktn.listMapper(tfDeliveryStreamDestinationTableConfigurationPropertyToTerraform, true)(struct!.destinationTableConfiguration),
    processing_configuration: tfDeliveryStreamIcebergConfigurationProcessingConfigurationPropertyToTerraform(struct!.processingConfiguration),
    s3_configuration: tfDeliveryStreamIcebergConfigurationS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
  }
}


export function tfDeliveryStreamIcebergConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.IcebergConfigurationPropertyOutputReference | TfDeliveryStream.IcebergConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_only: {
      value: cdktn.booleanToHclTerraform(struct!.appendOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    catalog_arn: {
      value: cdktn.stringToHclTerraform(struct!.catalogArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktn.numberToHclTerraform(struct!.retryDuration),
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
    s3_backup_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: tfDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergConfigurationCloudwatchLoggingOptionsPropertyList",
    },
    destination_table_configuration: {
      value: cdktn.listMapperHcl(tfDeliveryStreamDestinationTableConfigurationPropertyToHclTerraform, true)(struct!.destinationTableConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationTableConfigurationPropertyList",
    },
    processing_configuration: {
      value: tfDeliveryStreamIcebergConfigurationProcessingConfigurationPropertyToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergConfigurationProcessingConfigurationPropertyList",
    },
    s3_configuration: {
      value: tfDeliveryStreamIcebergConfigurationS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergConfigurationS3ConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamKinesisSourceConfigurationPropertyToTerraform(struct?: TfDeliveryStream.KinesisSourceConfigurationPropertyOutputReference | TfDeliveryStream.KinesisSourceConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kinesis_stream_arn: cdktn.stringToTerraform(struct!.kinesisStreamArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function tfDeliveryStreamKinesisSourceConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.KinesisSourceConfigurationPropertyOutputReference | TfDeliveryStream.KinesisSourceConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kinesis_stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.kinesisStreamArn),
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


export function tfDeliveryStreamAuthenticationConfigurationPropertyToTerraform(struct?: TfDeliveryStream.AuthenticationConfigurationPropertyOutputReference | TfDeliveryStream.AuthenticationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connectivity: cdktn.stringToTerraform(struct!.connectivity),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function tfDeliveryStreamAuthenticationConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.AuthenticationConfigurationPropertyOutputReference | TfDeliveryStream.AuthenticationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connectivity: {
      value: cdktn.stringToHclTerraform(struct!.connectivity),
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


export function tfDeliveryStreamMskSourceConfigurationPropertyToTerraform(struct?: TfDeliveryStream.MskSourceConfigurationPropertyOutputReference | TfDeliveryStream.MskSourceConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    msk_cluster_arn: cdktn.stringToTerraform(struct!.mskClusterArn),
    read_from_timestamp: cdktn.stringToTerraform(struct!.readFromTimestamp),
    topic_name: cdktn.stringToTerraform(struct!.topicName),
    authentication_configuration: tfDeliveryStreamAuthenticationConfigurationPropertyToTerraform(struct!.authenticationConfiguration),
  }
}


export function tfDeliveryStreamMskSourceConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.MskSourceConfigurationPropertyOutputReference | TfDeliveryStream.MskSourceConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    msk_cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.mskClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_from_timestamp: {
      value: cdktn.stringToHclTerraform(struct!.readFromTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktn.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_configuration: {
      value: tfDeliveryStreamAuthenticationConfigurationPropertyToHclTerraform(struct!.authenticationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AuthenticationConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.OpensearchConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamDocumentIdOptionsPropertyToTerraform(struct?: TfDeliveryStream.DocumentIdOptionsPropertyOutputReference | TfDeliveryStream.DocumentIdOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_document_id_format: cdktn.stringToTerraform(struct!.defaultDocumentIdFormat),
  }
}


export function tfDeliveryStreamDocumentIdOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.DocumentIdOptionsPropertyOutputReference | TfDeliveryStream.DocumentIdOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_document_id_format: {
      value: cdktn.stringToHclTerraform(struct!.defaultDocumentIdFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform(struct?: TfDeliveryStream.OpensearchConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function tfDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsPropertyToTerraform(struct?: TfDeliveryStream.OpensearchConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(tfDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform, true)(struct!.parameters),
  }
}


export function tfDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.listMapperHcl(tfDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "OpensearchConfigurationProcessingConfigurationProcessorsParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchConfigurationProcessingConfigurationPropertyToTerraform(struct?: TfDeliveryStream.OpensearchConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    processors: cdktn.listMapper(tfDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsPropertyToTerraform, true)(struct!.processors),
  }
}


export function tfDeliveryStreamOpensearchConfigurationProcessingConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationProcessingConfigurationProperty): any {
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
    processors: {
      value: cdktn.listMapperHcl(tfDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchConfigurationProcessingConfigurationProcessorsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchConfigurationS3ConfigurationPropertyToTerraform(struct?: TfDeliveryStream.OpensearchConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: tfDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function tfDeliveryStreamOpensearchConfigurationS3ConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchConfigurationVpcConfigPropertyToTerraform(struct?: TfDeliveryStream.OpensearchConfigurationVpcConfigPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationVpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function tfDeliveryStreamOpensearchConfigurationVpcConfigPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchConfigurationVpcConfigPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationVpcConfigProperty): any {
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


export function tfDeliveryStreamOpensearchConfigurationPropertyToTerraform(struct?: TfDeliveryStream.OpensearchConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    cluster_endpoint: cdktn.stringToTerraform(struct!.clusterEndpoint),
    domain_arn: cdktn.stringToTerraform(struct!.domainArn),
    index_name: cdktn.stringToTerraform(struct!.indexName),
    index_rotation_period: cdktn.stringToTerraform(struct!.indexRotationPeriod),
    retry_duration: cdktn.numberToTerraform(struct!.retryDuration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktn.stringToTerraform(struct!.s3BackupMode),
    type_name: cdktn.stringToTerraform(struct!.typeName),
    cloudwatch_logging_options: tfDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
    document_id_options: tfDeliveryStreamDocumentIdOptionsPropertyToTerraform(struct!.documentIdOptions),
    processing_configuration: tfDeliveryStreamOpensearchConfigurationProcessingConfigurationPropertyToTerraform(struct!.processingConfiguration),
    s3_configuration: tfDeliveryStreamOpensearchConfigurationS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    vpc_config: tfDeliveryStreamOpensearchConfigurationVpcConfigPropertyToTerraform(struct!.vpcConfig),
  }
}


export function tfDeliveryStreamOpensearchConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.clusterEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_arn: {
      value: cdktn.stringToHclTerraform(struct!.domainArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_rotation_period: {
      value: cdktn.stringToHclTerraform(struct!.indexRotationPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktn.numberToHclTerraform(struct!.retryDuration),
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
    s3_backup_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktn.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: tfDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchConfigurationCloudwatchLoggingOptionsPropertyList",
    },
    document_id_options: {
      value: tfDeliveryStreamDocumentIdOptionsPropertyToHclTerraform(struct!.documentIdOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentIdOptionsPropertyList",
    },
    processing_configuration: {
      value: tfDeliveryStreamOpensearchConfigurationProcessingConfigurationPropertyToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchConfigurationProcessingConfigurationPropertyList",
    },
    s3_configuration: {
      value: tfDeliveryStreamOpensearchConfigurationS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchConfigurationS3ConfigurationPropertyList",
    },
    vpc_config: {
      value: tfDeliveryStreamOpensearchConfigurationVpcConfigPropertyToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchConfigurationVpcConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsPropertyToTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform, true)(struct!.parameters),
  }
}


export function tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.listMapperHcl(tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationPropertyToTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    processors: cdktn.listMapper(tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsPropertyToTerraform, true)(struct!.processors),
  }
}


export function tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationProcessingConfigurationProperty): any {
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
    processors: {
      value: cdktn.listMapperHcl(tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchserverlessConfigurationProcessingConfigurationProcessorsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationPropertyToTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: tfDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function tfDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamOpensearchserverlessConfigurationVpcConfigPropertyToTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationVpcConfigPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationVpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function tfDeliveryStreamOpensearchserverlessConfigurationVpcConfigPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationVpcConfigPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationVpcConfigProperty): any {
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


export function tfDeliveryStreamOpensearchserverlessConfigurationPropertyToTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    collection_endpoint: cdktn.stringToTerraform(struct!.collectionEndpoint),
    index_name: cdktn.stringToTerraform(struct!.indexName),
    retry_duration: cdktn.numberToTerraform(struct!.retryDuration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktn.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: tfDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationPropertyToTerraform(struct!.processingConfiguration),
    s3_configuration: tfDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    vpc_config: tfDeliveryStreamOpensearchserverlessConfigurationVpcConfigPropertyToTerraform(struct!.vpcConfig),
  }
}


export function tfDeliveryStreamOpensearchserverlessConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.OpensearchserverlessConfigurationPropertyOutputReference | TfDeliveryStream.OpensearchserverlessConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collection_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.collectionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktn.numberToHclTerraform(struct!.retryDuration),
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
    s3_backup_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: tfDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchserverlessConfigurationCloudwatchLoggingOptionsPropertyList",
    },
    processing_configuration: {
      value: tfDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationPropertyToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchserverlessConfigurationProcessingConfigurationPropertyList",
    },
    s3_configuration: {
      value: tfDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchserverlessConfigurationS3ConfigurationPropertyList",
    },
    vpc_config: {
      value: tfDeliveryStreamOpensearchserverlessConfigurationVpcConfigPropertyToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchserverlessConfigurationVpcConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.RedshiftConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.RedshiftConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform(struct?: TfDeliveryStream.RedshiftConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function tfDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform(struct?: TfDeliveryStream.RedshiftConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsPropertyToTerraform(struct?: TfDeliveryStream.RedshiftConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(tfDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform, true)(struct!.parameters),
  }
}


export function tfDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform(struct?: TfDeliveryStream.RedshiftConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.listMapperHcl(tfDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "RedshiftConfigurationProcessingConfigurationProcessorsParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamRedshiftConfigurationProcessingConfigurationPropertyToTerraform(struct?: TfDeliveryStream.RedshiftConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    processors: cdktn.listMapper(tfDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsPropertyToTerraform, true)(struct!.processors),
  }
}


export function tfDeliveryStreamRedshiftConfigurationProcessingConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.RedshiftConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationProcessingConfigurationProperty): any {
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
    processors: {
      value: cdktn.listMapperHcl(tfDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftConfigurationProcessingConfigurationProcessorsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamRedshiftConfigurationS3BackupConfigurationPropertyToTerraform(struct?: TfDeliveryStream.RedshiftConfigurationS3BackupConfigurationPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationS3BackupConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: tfDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function tfDeliveryStreamRedshiftConfigurationS3BackupConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.RedshiftConfigurationS3BackupConfigurationPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationS3BackupConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamRedshiftConfigurationS3ConfigurationPropertyToTerraform(struct?: TfDeliveryStream.RedshiftConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: tfDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function tfDeliveryStreamRedshiftConfigurationS3ConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.RedshiftConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationPropertyToTerraform(struct?: TfDeliveryStream.RedshiftConfigurationSecretsManagerConfigurationPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationSecretsManagerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function tfDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.RedshiftConfigurationSecretsManagerConfigurationPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationSecretsManagerConfigurationProperty): any {
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
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamRedshiftConfigurationPropertyToTerraform(struct?: TfDeliveryStream.RedshiftConfigurationPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_jdbcurl: cdktn.stringToTerraform(struct!.clusterJdbcurl),
    copy_options: cdktn.stringToTerraform(struct!.copyOptions),
    data_table_columns: cdktn.stringToTerraform(struct!.dataTableColumns),
    data_table_name: cdktn.stringToTerraform(struct!.dataTableName),
    password: cdktn.stringToTerraform(struct!.password),
    retry_duration: cdktn.numberToTerraform(struct!.retryDuration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktn.stringToTerraform(struct!.s3BackupMode),
    username: cdktn.stringToTerraform(struct!.username),
    cloudwatch_logging_options: tfDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: tfDeliveryStreamRedshiftConfigurationProcessingConfigurationPropertyToTerraform(struct!.processingConfiguration),
    s3_backup_configuration: tfDeliveryStreamRedshiftConfigurationS3BackupConfigurationPropertyToTerraform(struct!.s3BackupConfiguration),
    s3_configuration: tfDeliveryStreamRedshiftConfigurationS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    secrets_manager_configuration: tfDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationPropertyToTerraform(struct!.secretsManagerConfiguration),
  }
}


export function tfDeliveryStreamRedshiftConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.RedshiftConfigurationPropertyOutputReference | TfDeliveryStream.RedshiftConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_jdbcurl: {
      value: cdktn.stringToHclTerraform(struct!.clusterJdbcurl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_options: {
      value: cdktn.stringToHclTerraform(struct!.copyOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_table_columns: {
      value: cdktn.stringToHclTerraform(struct!.dataTableColumns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_table_name: {
      value: cdktn.stringToHclTerraform(struct!.dataTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktn.numberToHclTerraform(struct!.retryDuration),
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
    s3_backup_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: tfDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftConfigurationCloudwatchLoggingOptionsPropertyList",
    },
    processing_configuration: {
      value: tfDeliveryStreamRedshiftConfigurationProcessingConfigurationPropertyToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftConfigurationProcessingConfigurationPropertyList",
    },
    s3_backup_configuration: {
      value: tfDeliveryStreamRedshiftConfigurationS3BackupConfigurationPropertyToHclTerraform(struct!.s3BackupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftConfigurationS3BackupConfigurationPropertyList",
    },
    s3_configuration: {
      value: tfDeliveryStreamRedshiftConfigurationS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftConfigurationS3ConfigurationPropertyList",
    },
    secrets_manager_configuration: {
      value: tfDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationPropertyToHclTerraform(struct!.secretsManagerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftConfigurationSecretsManagerConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamServerSideEncryptionPropertyToTerraform(struct?: TfDeliveryStream.ServerSideEncryptionPropertyOutputReference | TfDeliveryStream.ServerSideEncryptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    key_arn: cdktn.stringToTerraform(struct!.keyArn),
    key_type: cdktn.stringToTerraform(struct!.keyType),
  }
}


export function tfDeliveryStreamServerSideEncryptionPropertyToHclTerraform(struct?: TfDeliveryStream.ServerSideEncryptionPropertyOutputReference | TfDeliveryStream.ServerSideEncryptionProperty): any {
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
    key_arn: {
      value: cdktn.stringToHclTerraform(struct!.keyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktn.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsPropertyToTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform, true)(struct!.parameters),
  }
}


export function tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.listMapperHcl(tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "SnowflakeConfigurationProcessingConfigurationProcessorsParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    processors: cdktn.listMapper(tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsPropertyToTerraform, true)(struct!.processors),
  }
}


export function tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationProcessingConfigurationProperty): any {
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
    processors: {
      value: cdktn.listMapperHcl(tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "SnowflakeConfigurationProcessingConfigurationProcessorsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSnowflakeConfigurationS3ConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: tfDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function tfDeliveryStreamSnowflakeConfigurationS3ConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationSecretsManagerConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationSecretsManagerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function tfDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationSecretsManagerConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationSecretsManagerConfigurationProperty): any {
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
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSnowflakeRoleConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SnowflakeRoleConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeRoleConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    snowflake_role: cdktn.stringToTerraform(struct!.snowflakeRole),
  }
}


export function tfDeliveryStreamSnowflakeRoleConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SnowflakeRoleConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeRoleConfigurationProperty): any {
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
    snowflake_role: {
      value: cdktn.stringToHclTerraform(struct!.snowflakeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSnowflakeVpcConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SnowflakeVpcConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeVpcConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_link_vpce_id: cdktn.stringToTerraform(struct!.privateLinkVpceId),
  }
}


export function tfDeliveryStreamSnowflakeVpcConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SnowflakeVpcConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeVpcConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_link_vpce_id: {
      value: cdktn.stringToHclTerraform(struct!.privateLinkVpceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSnowflakeConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_url: cdktn.stringToTerraform(struct!.accountUrl),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    content_column_name: cdktn.stringToTerraform(struct!.contentColumnName),
    data_loading_option: cdktn.stringToTerraform(struct!.dataLoadingOption),
    database: cdktn.stringToTerraform(struct!.database),
    key_passphrase: cdktn.stringToTerraform(struct!.keyPassphrase),
    metadata_column_name: cdktn.stringToTerraform(struct!.metadataColumnName),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
    retry_duration: cdktn.numberToTerraform(struct!.retryDuration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktn.stringToTerraform(struct!.s3BackupMode),
    schema: cdktn.stringToTerraform(struct!.schema),
    table: cdktn.stringToTerraform(struct!.table),
    user: cdktn.stringToTerraform(struct!.user),
    cloudwatch_logging_options: tfDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationPropertyToTerraform(struct!.processingConfiguration),
    s3_configuration: tfDeliveryStreamSnowflakeConfigurationS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    secrets_manager_configuration: tfDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationPropertyToTerraform(struct!.secretsManagerConfiguration),
    snowflake_role_configuration: tfDeliveryStreamSnowflakeRoleConfigurationPropertyToTerraform(struct!.snowflakeRoleConfiguration),
    snowflake_vpc_configuration: tfDeliveryStreamSnowflakeVpcConfigurationPropertyToTerraform(struct!.snowflakeVpcConfiguration),
  }
}


export function tfDeliveryStreamSnowflakeConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SnowflakeConfigurationPropertyOutputReference | TfDeliveryStream.SnowflakeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_url: {
      value: cdktn.stringToHclTerraform(struct!.accountUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_column_name: {
      value: cdktn.stringToHclTerraform(struct!.contentColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_loading_option: {
      value: cdktn.stringToHclTerraform(struct!.dataLoadingOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_passphrase: {
      value: cdktn.stringToHclTerraform(struct!.keyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_column_name: {
      value: cdktn.stringToHclTerraform(struct!.metadataColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktn.numberToHclTerraform(struct!.retryDuration),
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
    s3_backup_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: tfDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SnowflakeConfigurationCloudwatchLoggingOptionsPropertyList",
    },
    processing_configuration: {
      value: tfDeliveryStreamSnowflakeConfigurationProcessingConfigurationPropertyToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SnowflakeConfigurationProcessingConfigurationPropertyList",
    },
    s3_configuration: {
      value: tfDeliveryStreamSnowflakeConfigurationS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "SnowflakeConfigurationS3ConfigurationPropertyList",
    },
    secrets_manager_configuration: {
      value: tfDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationPropertyToHclTerraform(struct!.secretsManagerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SnowflakeConfigurationSecretsManagerConfigurationPropertyList",
    },
    snowflake_role_configuration: {
      value: tfDeliveryStreamSnowflakeRoleConfigurationPropertyToHclTerraform(struct!.snowflakeRoleConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SnowflakeRoleConfigurationPropertyList",
    },
    snowflake_vpc_configuration: {
      value: tfDeliveryStreamSnowflakeVpcConfigurationPropertyToHclTerraform(struct!.snowflakeVpcConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SnowflakeVpcConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.SplunkConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.SplunkConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.SplunkConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.SplunkConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform(struct?: TfDeliveryStream.SplunkConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function tfDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform(struct?: TfDeliveryStream.SplunkConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsPropertyToTerraform(struct?: TfDeliveryStream.SplunkConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    parameters: cdktn.listMapper(tfDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersPropertyToTerraform, true)(struct!.parameters),
  }
}


export function tfDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform(struct?: TfDeliveryStream.SplunkConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.listMapperHcl(tfDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersPropertyToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "SplunkConfigurationProcessingConfigurationProcessorsParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSplunkConfigurationProcessingConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SplunkConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.SplunkConfigurationProcessingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    processors: cdktn.listMapper(tfDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsPropertyToTerraform, true)(struct!.processors),
  }
}


export function tfDeliveryStreamSplunkConfigurationProcessingConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SplunkConfigurationProcessingConfigurationPropertyOutputReference | TfDeliveryStream.SplunkConfigurationProcessingConfigurationProperty): any {
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
    processors: {
      value: cdktn.listMapperHcl(tfDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsPropertyToHclTerraform, true)(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "SplunkConfigurationProcessingConfigurationProcessorsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct?: TfDeliveryStream.SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
  }
}


export function tfDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct?: TfDeliveryStream.SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference | TfDeliveryStream.SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty): any {
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
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSplunkConfigurationS3ConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SplunkConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.SplunkConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: tfDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
  }
}


export function tfDeliveryStreamSplunkConfigurationS3ConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SplunkConfigurationS3ConfigurationPropertyOutputReference | TfDeliveryStream.SplunkConfigurationS3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_format: {
      value: cdktn.stringToHclTerraform(struct!.compressionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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
    cloudwatch_logging_options: {
      value: tfDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSplunkConfigurationSecretsManagerConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SplunkConfigurationSecretsManagerConfigurationPropertyOutputReference | TfDeliveryStream.SplunkConfigurationSecretsManagerConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function tfDeliveryStreamSplunkConfigurationSecretsManagerConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SplunkConfigurationSecretsManagerConfigurationPropertyOutputReference | TfDeliveryStream.SplunkConfigurationSecretsManagerConfigurationProperty): any {
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
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamSplunkConfigurationPropertyToTerraform(struct?: TfDeliveryStream.SplunkConfigurationPropertyOutputReference | TfDeliveryStream.SplunkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buffering_interval: cdktn.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktn.numberToTerraform(struct!.bufferingSize),
    hec_acknowledgment_timeout: cdktn.numberToTerraform(struct!.hecAcknowledgmentTimeout),
    hec_endpoint: cdktn.stringToTerraform(struct!.hecEndpoint),
    hec_endpoint_type: cdktn.stringToTerraform(struct!.hecEndpointType),
    hec_token: cdktn.stringToTerraform(struct!.hecToken),
    retry_duration: cdktn.numberToTerraform(struct!.retryDuration),
    s3_backup_mode: cdktn.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: tfDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsPropertyToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: tfDeliveryStreamSplunkConfigurationProcessingConfigurationPropertyToTerraform(struct!.processingConfiguration),
    s3_configuration: tfDeliveryStreamSplunkConfigurationS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    secrets_manager_configuration: tfDeliveryStreamSplunkConfigurationSecretsManagerConfigurationPropertyToTerraform(struct!.secretsManagerConfiguration),
  }
}


export function tfDeliveryStreamSplunkConfigurationPropertyToHclTerraform(struct?: TfDeliveryStream.SplunkConfigurationPropertyOutputReference | TfDeliveryStream.SplunkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buffering_interval: {
      value: cdktn.numberToHclTerraform(struct!.bufferingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffering_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hec_acknowledgment_timeout: {
      value: cdktn.numberToHclTerraform(struct!.hecAcknowledgmentTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hec_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.hecEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hec_endpoint_type: {
      value: cdktn.stringToHclTerraform(struct!.hecEndpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hec_token: {
      value: cdktn.stringToHclTerraform(struct!.hecToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_duration: {
      value: cdktn.numberToHclTerraform(struct!.retryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_backup_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3BackupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logging_options: {
      value: tfDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsPropertyToHclTerraform(struct!.cloudwatchLoggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SplunkConfigurationCloudwatchLoggingOptionsPropertyList",
    },
    processing_configuration: {
      value: tfDeliveryStreamSplunkConfigurationProcessingConfigurationPropertyToHclTerraform(struct!.processingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SplunkConfigurationProcessingConfigurationPropertyList",
    },
    s3_configuration: {
      value: tfDeliveryStreamSplunkConfigurationS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "SplunkConfigurationS3ConfigurationPropertyList",
    },
    secrets_manager_configuration: {
      value: tfDeliveryStreamSplunkConfigurationSecretsManagerConfigurationPropertyToHclTerraform(struct!.secretsManagerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SplunkConfigurationSecretsManagerConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfDeliveryStreamTimeoutsPropertyToTerraform(struct?: TfDeliveryStream.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfDeliveryStreamTimeoutsPropertyToHclTerraform(struct?: TfDeliveryStream.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfDeliveryStream {
export interface ElasticsearchConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class ElasticsearchConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface ElasticsearchConfigurationProcessingConfigurationProcessorsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name TfDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value TfDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}
export class ElasticsearchConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElasticsearchConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class ElasticsearchConfigurationProcessingConfigurationProcessorsParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : ElasticsearchConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): ElasticsearchConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference {
    return new ElasticsearchConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchConfigurationProcessingConfigurationProcessorsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type TfDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameters TfDeliveryStream#parameters}
  */
  readonly parameters?: ElasticsearchConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable;
}
export class ElasticsearchConfigurationProcessingConfigurationProcessorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElasticsearchConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ElasticsearchConfigurationProcessingConfigurationProcessorsParametersPropertyList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ElasticsearchConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class ElasticsearchConfigurationProcessingConfigurationProcessorsPropertyList extends cdktn.ComplexList {
  public internalValue? : ElasticsearchConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable

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
  public get(index: number): ElasticsearchConfigurationProcessingConfigurationProcessorsPropertyOutputReference {
    return new ElasticsearchConfigurationProcessingConfigurationProcessorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchConfigurationProcessingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processors TfDeliveryStream#processors}
  */
  readonly processors?: ElasticsearchConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable;
}
export class ElasticsearchConfigurationProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchConfigurationProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchConfigurationProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
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

  // processors - computed: false, optional: true, required: false
  private _processors = new ElasticsearchConfigurationProcessingConfigurationProcessorsPropertyList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: ElasticsearchConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface ElasticsearchConfigurationS3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty;
}
export class ElasticsearchConfigurationS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchConfigurationS3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchConfigurationS3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: ElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface ElasticsearchConfigurationVpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids TfDeliveryStream#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids TfDeliveryStream#subnet_ids}
  */
  readonly subnetIds: string[];
}
export class ElasticsearchConfigurationVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchConfigurationVpcConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
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

  public set internalValue(value: ElasticsearchConfigurationVpcConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
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

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
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
export interface ElasticsearchConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cluster_endpoint TfDeliveryStream#cluster_endpoint}
  */
  readonly clusterEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#domain_arn TfDeliveryStream#domain_arn}
  */
  readonly domainArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#index_name TfDeliveryStream#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#index_rotation_period TfDeliveryStream#index_rotation_period}
  */
  readonly indexRotationPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration TfDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode TfDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type_name TfDeliveryStream#type_name}
  */
  readonly typeName?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: ElasticsearchConfigurationCloudwatchLoggingOptionsProperty;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration TfDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: ElasticsearchConfigurationProcessingConfigurationProperty;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration TfDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: ElasticsearchConfigurationS3ConfigurationProperty;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#vpc_config TfDeliveryStream#vpc_config}
  */
  readonly vpcConfig?: ElasticsearchConfigurationVpcConfigProperty;
}
export class ElasticsearchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._clusterEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterEndpoint = this._clusterEndpoint;
    }
    if (this._domainArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainArn = this._domainArn;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._indexRotationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRotationPeriod = this._indexRotationPeriod;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._clusterEndpoint = undefined;
      this._domainArn = undefined;
      this._indexName = undefined;
      this._indexRotationPeriod = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._typeName = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._clusterEndpoint = value.clusterEndpoint;
      this._domainArn = value.domainArn;
      this._indexName = value.indexName;
      this._indexRotationPeriod = value.indexRotationPeriod;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._typeName = value.typeName;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // cluster_endpoint - computed: false, optional: true, required: false
  private _clusterEndpoint?: string; 
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }
  public set clusterEndpoint(value: string) {
    this._clusterEndpoint = value;
  }
  public resetClusterEndpoint() {
    this._clusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointInput() {
    return this._clusterEndpoint;
  }

  // domain_arn - computed: false, optional: true, required: false
  private _domainArn?: string; 
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }
  public set domainArn(value: string) {
    this._domainArn = value;
  }
  public resetDomainArn() {
    this._domainArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainArnInput() {
    return this._domainArn;
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // index_rotation_period - computed: false, optional: true, required: false
  private _indexRotationPeriod?: string; 
  public get indexRotationPeriod() {
    return this.getStringAttribute('index_rotation_period');
  }
  public set indexRotationPeriod(value: string) {
    this._indexRotationPeriod = value;
  }
  public resetIndexRotationPeriod() {
    this._indexRotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRotationPeriodInput() {
    return this._indexRotationPeriod;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new ElasticsearchConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: ElasticsearchConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new ElasticsearchConfigurationProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: ElasticsearchConfigurationProcessingConfigurationProperty) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new ElasticsearchConfigurationS3ConfigurationPropertyOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: ElasticsearchConfigurationS3ConfigurationProperty) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new ElasticsearchConfigurationVpcConfigPropertyOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: ElasticsearchConfigurationVpcConfigProperty) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface ExtendedS3ConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class ExtendedS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendedS3ConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendedS3ConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface HiveJsonSerDeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#timestamp_formats TfDeliveryStream#timestamp_formats}
  */
  readonly timestampFormats?: string[];
}
export class HiveJsonSerDePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HiveJsonSerDeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestampFormats !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormats = this._timestampFormats;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HiveJsonSerDeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timestampFormats = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timestampFormats = value.timestampFormats;
    }
  }

  // timestamp_formats - computed: false, optional: true, required: false
  private _timestampFormats?: string[]; 
  public get timestampFormats() {
    return this.getListAttribute('timestamp_formats');
  }
  public set timestampFormats(value: string[]) {
    this._timestampFormats = value;
  }
  public resetTimestampFormats() {
    this._timestampFormats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatsInput() {
    return this._timestampFormats;
  }
}
export interface OpenXJsonSerDeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#case_insensitive TfDeliveryStream#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#column_to_json_key_mappings TfDeliveryStream#column_to_json_key_mappings}
  */
  readonly columnToJsonKeyMappings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#convert_dots_in_json_keys_to_underscores TfDeliveryStream#convert_dots_in_json_keys_to_underscores}
  */
  readonly convertDotsInJsonKeysToUnderscores?: boolean | cdktn.IResolvable;
}
export class OpenXJsonSerDePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenXJsonSerDeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseInsensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitive = this._caseInsensitive;
    }
    if (this._columnToJsonKeyMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnToJsonKeyMappings = this._columnToJsonKeyMappings;
    }
    if (this._convertDotsInJsonKeysToUnderscores !== undefined) {
      hasAnyValues = true;
      internalValueResult.convertDotsInJsonKeysToUnderscores = this._convertDotsInJsonKeysToUnderscores;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenXJsonSerDeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseInsensitive = undefined;
      this._columnToJsonKeyMappings = undefined;
      this._convertDotsInJsonKeysToUnderscores = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseInsensitive = value.caseInsensitive;
      this._columnToJsonKeyMappings = value.columnToJsonKeyMappings;
      this._convertDotsInJsonKeysToUnderscores = value.convertDotsInJsonKeysToUnderscores;
    }
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: boolean | cdktn.IResolvable; 
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }
  public set caseInsensitive(value: boolean | cdktn.IResolvable) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
  }

  // column_to_json_key_mappings - computed: false, optional: true, required: false
  private _columnToJsonKeyMappings?: { [key: string]: string }; 
  public get columnToJsonKeyMappings() {
    return this.getStringMapAttribute('column_to_json_key_mappings');
  }
  public set columnToJsonKeyMappings(value: { [key: string]: string }) {
    this._columnToJsonKeyMappings = value;
  }
  public resetColumnToJsonKeyMappings() {
    this._columnToJsonKeyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnToJsonKeyMappingsInput() {
    return this._columnToJsonKeyMappings;
  }

  // convert_dots_in_json_keys_to_underscores - computed: false, optional: true, required: false
  private _convertDotsInJsonKeysToUnderscores?: boolean | cdktn.IResolvable; 
  public get convertDotsInJsonKeysToUnderscores() {
    return this.getBooleanAttribute('convert_dots_in_json_keys_to_underscores');
  }
  public set convertDotsInJsonKeysToUnderscores(value: boolean | cdktn.IResolvable) {
    this._convertDotsInJsonKeysToUnderscores = value;
  }
  public resetConvertDotsInJsonKeysToUnderscores() {
    this._convertDotsInJsonKeysToUnderscores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertDotsInJsonKeysToUnderscoresInput() {
    return this._convertDotsInJsonKeysToUnderscores;
  }
}
export interface DeserializerProperty {
  /**
  * hive_json_ser_de block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#hive_json_ser_de TfDeliveryStream#hive_json_ser_de}
  */
  readonly hiveJsonSerDe?: HiveJsonSerDeProperty;
  /**
  * open_x_json_ser_de block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#open_x_json_ser_de TfDeliveryStream#open_x_json_ser_de}
  */
  readonly openXJsonSerDe?: OpenXJsonSerDeProperty;
}
export class DeserializerPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeserializerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hiveJsonSerDe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiveJsonSerDe = this._hiveJsonSerDe?.internalValue;
    }
    if (this._openXJsonSerDe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openXJsonSerDe = this._openXJsonSerDe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeserializerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hiveJsonSerDe.internalValue = undefined;
      this._openXJsonSerDe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hiveJsonSerDe.internalValue = value.hiveJsonSerDe;
      this._openXJsonSerDe.internalValue = value.openXJsonSerDe;
    }
  }

  // hive_json_ser_de - computed: false, optional: true, required: false
  private _hiveJsonSerDe = new HiveJsonSerDePropertyOutputReference(this, "hive_json_ser_de");
  public get hiveJsonSerDe() {
    return this._hiveJsonSerDe;
  }
  public putHiveJsonSerDe(value: HiveJsonSerDeProperty) {
    this._hiveJsonSerDe.internalValue = value;
  }
  public resetHiveJsonSerDe() {
    this._hiveJsonSerDe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveJsonSerDeInput() {
    return this._hiveJsonSerDe.internalValue;
  }

  // open_x_json_ser_de - computed: false, optional: true, required: false
  private _openXJsonSerDe = new OpenXJsonSerDePropertyOutputReference(this, "open_x_json_ser_de");
  public get openXJsonSerDe() {
    return this._openXJsonSerDe;
  }
  public putOpenXJsonSerDe(value: OpenXJsonSerDeProperty) {
    this._openXJsonSerDe.internalValue = value;
  }
  public resetOpenXJsonSerDe() {
    this._openXJsonSerDe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openXJsonSerDeInput() {
    return this._openXJsonSerDe.internalValue;
  }
}
export interface InputFormatConfigurationProperty {
  /**
  * deserializer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#deserializer TfDeliveryStream#deserializer}
  */
  readonly deserializer: DeserializerProperty;
}
export class InputFormatConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputFormatConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deserializer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deserializer = this._deserializer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputFormatConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deserializer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deserializer.internalValue = value.deserializer;
    }
  }

  // deserializer - computed: false, optional: false, required: true
  private _deserializer = new DeserializerPropertyOutputReference(this, "deserializer");
  public get deserializer() {
    return this._deserializer;
  }
  public putDeserializer(value: DeserializerProperty) {
    this._deserializer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deserializerInput() {
    return this._deserializer.internalValue;
  }
}
export interface OrcSerDeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#block_size_bytes TfDeliveryStream#block_size_bytes}
  */
  readonly blockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bloom_filter_columns TfDeliveryStream#bloom_filter_columns}
  */
  readonly bloomFilterColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bloom_filter_false_positive_probability TfDeliveryStream#bloom_filter_false_positive_probability}
  */
  readonly bloomFilterFalsePositiveProbability?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression TfDeliveryStream#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#dictionary_key_threshold TfDeliveryStream#dictionary_key_threshold}
  */
  readonly dictionaryKeyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enable_padding TfDeliveryStream#enable_padding}
  */
  readonly enablePadding?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#format_version TfDeliveryStream#format_version}
  */
  readonly formatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#padding_tolerance TfDeliveryStream#padding_tolerance}
  */
  readonly paddingTolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#row_index_stride TfDeliveryStream#row_index_stride}
  */
  readonly rowIndexStride?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#stripe_size_bytes TfDeliveryStream#stripe_size_bytes}
  */
  readonly stripeSizeBytes?: number;
}
export class OrcSerDePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrcSerDeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSizeBytes = this._blockSizeBytes;
    }
    if (this._bloomFilterColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.bloomFilterColumns = this._bloomFilterColumns;
    }
    if (this._bloomFilterFalsePositiveProbability !== undefined) {
      hasAnyValues = true;
      internalValueResult.bloomFilterFalsePositiveProbability = this._bloomFilterFalsePositiveProbability;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._dictionaryKeyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryKeyThreshold = this._dictionaryKeyThreshold;
    }
    if (this._enablePadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePadding = this._enablePadding;
    }
    if (this._formatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatVersion = this._formatVersion;
    }
    if (this._paddingTolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.paddingTolerance = this._paddingTolerance;
    }
    if (this._rowIndexStride !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowIndexStride = this._rowIndexStride;
    }
    if (this._stripeSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripeSizeBytes = this._stripeSizeBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrcSerDeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockSizeBytes = undefined;
      this._bloomFilterColumns = undefined;
      this._bloomFilterFalsePositiveProbability = undefined;
      this._compression = undefined;
      this._dictionaryKeyThreshold = undefined;
      this._enablePadding = undefined;
      this._formatVersion = undefined;
      this._paddingTolerance = undefined;
      this._rowIndexStride = undefined;
      this._stripeSizeBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockSizeBytes = value.blockSizeBytes;
      this._bloomFilterColumns = value.bloomFilterColumns;
      this._bloomFilterFalsePositiveProbability = value.bloomFilterFalsePositiveProbability;
      this._compression = value.compression;
      this._dictionaryKeyThreshold = value.dictionaryKeyThreshold;
      this._enablePadding = value.enablePadding;
      this._formatVersion = value.formatVersion;
      this._paddingTolerance = value.paddingTolerance;
      this._rowIndexStride = value.rowIndexStride;
      this._stripeSizeBytes = value.stripeSizeBytes;
    }
  }

  // block_size_bytes - computed: false, optional: true, required: false
  private _blockSizeBytes?: number; 
  public get blockSizeBytes() {
    return this.getNumberAttribute('block_size_bytes');
  }
  public set blockSizeBytes(value: number) {
    this._blockSizeBytes = value;
  }
  public resetBlockSizeBytes() {
    this._blockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeBytesInput() {
    return this._blockSizeBytes;
  }

  // bloom_filter_columns - computed: false, optional: true, required: false
  private _bloomFilterColumns?: string[]; 
  public get bloomFilterColumns() {
    return this.getListAttribute('bloom_filter_columns');
  }
  public set bloomFilterColumns(value: string[]) {
    this._bloomFilterColumns = value;
  }
  public resetBloomFilterColumns() {
    this._bloomFilterColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bloomFilterColumnsInput() {
    return this._bloomFilterColumns;
  }

  // bloom_filter_false_positive_probability - computed: false, optional: true, required: false
  private _bloomFilterFalsePositiveProbability?: number; 
  public get bloomFilterFalsePositiveProbability() {
    return this.getNumberAttribute('bloom_filter_false_positive_probability');
  }
  public set bloomFilterFalsePositiveProbability(value: number) {
    this._bloomFilterFalsePositiveProbability = value;
  }
  public resetBloomFilterFalsePositiveProbability() {
    this._bloomFilterFalsePositiveProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bloomFilterFalsePositiveProbabilityInput() {
    return this._bloomFilterFalsePositiveProbability;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // dictionary_key_threshold - computed: false, optional: true, required: false
  private _dictionaryKeyThreshold?: number; 
  public get dictionaryKeyThreshold() {
    return this.getNumberAttribute('dictionary_key_threshold');
  }
  public set dictionaryKeyThreshold(value: number) {
    this._dictionaryKeyThreshold = value;
  }
  public resetDictionaryKeyThreshold() {
    this._dictionaryKeyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryKeyThresholdInput() {
    return this._dictionaryKeyThreshold;
  }

  // enable_padding - computed: false, optional: true, required: false
  private _enablePadding?: boolean | cdktn.IResolvable; 
  public get enablePadding() {
    return this.getBooleanAttribute('enable_padding');
  }
  public set enablePadding(value: boolean | cdktn.IResolvable) {
    this._enablePadding = value;
  }
  public resetEnablePadding() {
    this._enablePadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePaddingInput() {
    return this._enablePadding;
  }

  // format_version - computed: false, optional: true, required: false
  private _formatVersion?: string; 
  public get formatVersion() {
    return this.getStringAttribute('format_version');
  }
  public set formatVersion(value: string) {
    this._formatVersion = value;
  }
  public resetFormatVersion() {
    this._formatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatVersionInput() {
    return this._formatVersion;
  }

  // padding_tolerance - computed: false, optional: true, required: false
  private _paddingTolerance?: number; 
  public get paddingTolerance() {
    return this.getNumberAttribute('padding_tolerance');
  }
  public set paddingTolerance(value: number) {
    this._paddingTolerance = value;
  }
  public resetPaddingTolerance() {
    this._paddingTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingToleranceInput() {
    return this._paddingTolerance;
  }

  // row_index_stride - computed: false, optional: true, required: false
  private _rowIndexStride?: number; 
  public get rowIndexStride() {
    return this.getNumberAttribute('row_index_stride');
  }
  public set rowIndexStride(value: number) {
    this._rowIndexStride = value;
  }
  public resetRowIndexStride() {
    this._rowIndexStride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowIndexStrideInput() {
    return this._rowIndexStride;
  }

  // stripe_size_bytes - computed: false, optional: true, required: false
  private _stripeSizeBytes?: number; 
  public get stripeSizeBytes() {
    return this.getNumberAttribute('stripe_size_bytes');
  }
  public set stripeSizeBytes(value: number) {
    this._stripeSizeBytes = value;
  }
  public resetStripeSizeBytes() {
    this._stripeSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripeSizeBytesInput() {
    return this._stripeSizeBytes;
  }
}
export interface ParquetSerDeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#block_size_bytes TfDeliveryStream#block_size_bytes}
  */
  readonly blockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression TfDeliveryStream#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enable_dictionary_compression TfDeliveryStream#enable_dictionary_compression}
  */
  readonly enableDictionaryCompression?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#max_padding_bytes TfDeliveryStream#max_padding_bytes}
  */
  readonly maxPaddingBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#page_size_bytes TfDeliveryStream#page_size_bytes}
  */
  readonly pageSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#writer_version TfDeliveryStream#writer_version}
  */
  readonly writerVersion?: string;
}
export class ParquetSerDePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ParquetSerDeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSizeBytes = this._blockSizeBytes;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._enableDictionaryCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDictionaryCompression = this._enableDictionaryCompression;
    }
    if (this._maxPaddingBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPaddingBytes = this._maxPaddingBytes;
    }
    if (this._pageSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSizeBytes = this._pageSizeBytes;
    }
    if (this._writerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.writerVersion = this._writerVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParquetSerDeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockSizeBytes = undefined;
      this._compression = undefined;
      this._enableDictionaryCompression = undefined;
      this._maxPaddingBytes = undefined;
      this._pageSizeBytes = undefined;
      this._writerVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockSizeBytes = value.blockSizeBytes;
      this._compression = value.compression;
      this._enableDictionaryCompression = value.enableDictionaryCompression;
      this._maxPaddingBytes = value.maxPaddingBytes;
      this._pageSizeBytes = value.pageSizeBytes;
      this._writerVersion = value.writerVersion;
    }
  }

  // block_size_bytes - computed: false, optional: true, required: false
  private _blockSizeBytes?: number; 
  public get blockSizeBytes() {
    return this.getNumberAttribute('block_size_bytes');
  }
  public set blockSizeBytes(value: number) {
    this._blockSizeBytes = value;
  }
  public resetBlockSizeBytes() {
    this._blockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeBytesInput() {
    return this._blockSizeBytes;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // enable_dictionary_compression - computed: false, optional: true, required: false
  private _enableDictionaryCompression?: boolean | cdktn.IResolvable; 
  public get enableDictionaryCompression() {
    return this.getBooleanAttribute('enable_dictionary_compression');
  }
  public set enableDictionaryCompression(value: boolean | cdktn.IResolvable) {
    this._enableDictionaryCompression = value;
  }
  public resetEnableDictionaryCompression() {
    this._enableDictionaryCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDictionaryCompressionInput() {
    return this._enableDictionaryCompression;
  }

  // max_padding_bytes - computed: false, optional: true, required: false
  private _maxPaddingBytes?: number; 
  public get maxPaddingBytes() {
    return this.getNumberAttribute('max_padding_bytes');
  }
  public set maxPaddingBytes(value: number) {
    this._maxPaddingBytes = value;
  }
  public resetMaxPaddingBytes() {
    this._maxPaddingBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPaddingBytesInput() {
    return this._maxPaddingBytes;
  }

  // page_size_bytes - computed: false, optional: true, required: false
  private _pageSizeBytes?: number; 
  public get pageSizeBytes() {
    return this.getNumberAttribute('page_size_bytes');
  }
  public set pageSizeBytes(value: number) {
    this._pageSizeBytes = value;
  }
  public resetPageSizeBytes() {
    this._pageSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeBytesInput() {
    return this._pageSizeBytes;
  }

  // writer_version - computed: false, optional: true, required: false
  private _writerVersion?: string; 
  public get writerVersion() {
    return this.getStringAttribute('writer_version');
  }
  public set writerVersion(value: string) {
    this._writerVersion = value;
  }
  public resetWriterVersion() {
    this._writerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writerVersionInput() {
    return this._writerVersion;
  }
}
export interface SerializerProperty {
  /**
  * orc_ser_de block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#orc_ser_de TfDeliveryStream#orc_ser_de}
  */
  readonly orcSerDe?: OrcSerDeProperty;
  /**
  * parquet_ser_de block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parquet_ser_de TfDeliveryStream#parquet_ser_de}
  */
  readonly parquetSerDe?: ParquetSerDeProperty;
}
export class SerializerPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SerializerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orcSerDe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orcSerDe = this._orcSerDe?.internalValue;
    }
    if (this._parquetSerDe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetSerDe = this._parquetSerDe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SerializerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._orcSerDe.internalValue = undefined;
      this._parquetSerDe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._orcSerDe.internalValue = value.orcSerDe;
      this._parquetSerDe.internalValue = value.parquetSerDe;
    }
  }

  // orc_ser_de - computed: false, optional: true, required: false
  private _orcSerDe = new OrcSerDePropertyOutputReference(this, "orc_ser_de");
  public get orcSerDe() {
    return this._orcSerDe;
  }
  public putOrcSerDe(value: OrcSerDeProperty) {
    this._orcSerDe.internalValue = value;
  }
  public resetOrcSerDe() {
    this._orcSerDe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orcSerDeInput() {
    return this._orcSerDe.internalValue;
  }

  // parquet_ser_de - computed: false, optional: true, required: false
  private _parquetSerDe = new ParquetSerDePropertyOutputReference(this, "parquet_ser_de");
  public get parquetSerDe() {
    return this._parquetSerDe;
  }
  public putParquetSerDe(value: ParquetSerDeProperty) {
    this._parquetSerDe.internalValue = value;
  }
  public resetParquetSerDe() {
    this._parquetSerDe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetSerDeInput() {
    return this._parquetSerDe.internalValue;
  }
}
export interface OutputFormatConfigurationProperty {
  /**
  * serializer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#serializer TfDeliveryStream#serializer}
  */
  readonly serializer: SerializerProperty;
}
export class OutputFormatConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutputFormatConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serializer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializer = this._serializer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputFormatConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serializer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serializer.internalValue = value.serializer;
    }
  }

  // serializer - computed: false, optional: false, required: true
  private _serializer = new SerializerPropertyOutputReference(this, "serializer");
  public get serializer() {
    return this._serializer;
  }
  public putSerializer(value: SerializerProperty) {
    this._serializer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerInput() {
    return this._serializer.internalValue;
  }
}
export interface SchemaConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#catalog_id TfDeliveryStream#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#database_name TfDeliveryStream#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#region TfDeliveryStream#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#table_name TfDeliveryStream#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#version_id TfDeliveryStream#version_id}
  */
  readonly versionId?: string;
}
export class SchemaConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._databaseName = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
      this._versionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._databaseName = value.databaseName;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
      this._versionId = value.versionId;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
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

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }
}
export interface DataFormatConversionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * input_format_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#input_format_configuration TfDeliveryStream#input_format_configuration}
  */
  readonly inputFormatConfiguration: InputFormatConfigurationProperty;
  /**
  * output_format_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#output_format_configuration TfDeliveryStream#output_format_configuration}
  */
  readonly outputFormatConfiguration: OutputFormatConfigurationProperty;
  /**
  * schema_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#schema_configuration TfDeliveryStream#schema_configuration}
  */
  readonly schemaConfiguration: SchemaConfigurationProperty;
}
export class DataFormatConversionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFormatConversionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._inputFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatConfiguration = this._inputFormatConfiguration?.internalValue;
    }
    if (this._outputFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormatConfiguration = this._outputFormatConfiguration?.internalValue;
    }
    if (this._schemaConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaConfiguration = this._schemaConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFormatConversionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._inputFormatConfiguration.internalValue = undefined;
      this._outputFormatConfiguration.internalValue = undefined;
      this._schemaConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._inputFormatConfiguration.internalValue = value.inputFormatConfiguration;
      this._outputFormatConfiguration.internalValue = value.outputFormatConfiguration;
      this._schemaConfiguration.internalValue = value.schemaConfiguration;
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

  // input_format_configuration - computed: false, optional: false, required: true
  private _inputFormatConfiguration = new InputFormatConfigurationPropertyOutputReference(this, "input_format_configuration");
  public get inputFormatConfiguration() {
    return this._inputFormatConfiguration;
  }
  public putInputFormatConfiguration(value: InputFormatConfigurationProperty) {
    this._inputFormatConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatConfigurationInput() {
    return this._inputFormatConfiguration.internalValue;
  }

  // output_format_configuration - computed: false, optional: false, required: true
  private _outputFormatConfiguration = new OutputFormatConfigurationPropertyOutputReference(this, "output_format_configuration");
  public get outputFormatConfiguration() {
    return this._outputFormatConfiguration;
  }
  public putOutputFormatConfiguration(value: OutputFormatConfigurationProperty) {
    this._outputFormatConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatConfigurationInput() {
    return this._outputFormatConfiguration.internalValue;
  }

  // schema_configuration - computed: false, optional: false, required: true
  private _schemaConfiguration = new SchemaConfigurationPropertyOutputReference(this, "schema_configuration");
  public get schemaConfiguration() {
    return this._schemaConfiguration;
  }
  public putSchemaConfiguration(value: SchemaConfigurationProperty) {
    this._schemaConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConfigurationInput() {
    return this._schemaConfiguration.internalValue;
  }
}
export interface DynamicPartitioningConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration TfDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
}
export class DynamicPartitioningConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynamicPartitioningConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicPartitioningConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retryDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retryDuration = value.retryDuration;
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

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
  }
}
export interface ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name TfDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value TfDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}
export class ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference {
    return new ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtendedS3ConfigurationProcessingConfigurationProcessorsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type TfDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameters TfDeliveryStream#parameters}
  */
  readonly parameters?: ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable;
}
export class ExtendedS3ConfigurationProcessingConfigurationProcessorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExtendedS3ConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendedS3ConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersPropertyList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ExtendedS3ConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class ExtendedS3ConfigurationProcessingConfigurationProcessorsPropertyList extends cdktn.ComplexList {
  public internalValue? : ExtendedS3ConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable

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
  public get(index: number): ExtendedS3ConfigurationProcessingConfigurationProcessorsPropertyOutputReference {
    return new ExtendedS3ConfigurationProcessingConfigurationProcessorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtendedS3ConfigurationProcessingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processors TfDeliveryStream#processors}
  */
  readonly processors?: ExtendedS3ConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable;
}
export class ExtendedS3ConfigurationProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendedS3ConfigurationProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendedS3ConfigurationProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
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

  // processors - computed: false, optional: true, required: false
  private _processors = new ExtendedS3ConfigurationProcessingConfigurationProcessorsPropertyList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: ExtendedS3ConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface ExtendedS3ConfigurationS3BackupConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty;
}
export class ExtendedS3ConfigurationS3BackupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendedS3ConfigurationS3BackupConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendedS3ConfigurationS3BackupConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: ExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface ExtendedS3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#custom_time_zone TfDeliveryStream#custom_time_zone}
  */
  readonly customTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#file_extension TfDeliveryStream#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode TfDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: ExtendedS3ConfigurationCloudwatchLoggingOptionsProperty;
  /**
  * data_format_conversion_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#data_format_conversion_configuration TfDeliveryStream#data_format_conversion_configuration}
  */
  readonly dataFormatConversionConfiguration?: DataFormatConversionConfigurationProperty;
  /**
  * dynamic_partitioning_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#dynamic_partitioning_configuration TfDeliveryStream#dynamic_partitioning_configuration}
  */
  readonly dynamicPartitioningConfiguration?: DynamicPartitioningConfigurationProperty;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration TfDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: ExtendedS3ConfigurationProcessingConfigurationProperty;
  /**
  * s3_backup_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_configuration TfDeliveryStream#s3_backup_configuration}
  */
  readonly s3BackupConfiguration?: ExtendedS3ConfigurationS3BackupConfigurationProperty;
}
export class ExtendedS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendedS3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._customTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTimeZone = this._customTimeZone;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._dataFormatConversionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormatConversionConfiguration = this._dataFormatConversionConfiguration?.internalValue;
    }
    if (this._dynamicPartitioningConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicPartitioningConfiguration = this._dynamicPartitioningConfiguration?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3BackupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupConfiguration = this._s3BackupConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendedS3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._customTimeZone = undefined;
      this._errorOutputPrefix = undefined;
      this._fileExtension = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._dataFormatConversionConfiguration.internalValue = undefined;
      this._dynamicPartitioningConfiguration.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3BackupConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._customTimeZone = value.customTimeZone;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._fileExtension = value.fileExtension;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._dataFormatConversionConfiguration.internalValue = value.dataFormatConversionConfiguration;
      this._dynamicPartitioningConfiguration.internalValue = value.dynamicPartitioningConfiguration;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3BackupConfiguration.internalValue = value.s3BackupConfiguration;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // custom_time_zone - computed: false, optional: true, required: false
  private _customTimeZone?: string; 
  public get customTimeZone() {
    return this.getStringAttribute('custom_time_zone');
  }
  public set customTimeZone(value: string) {
    this._customTimeZone = value;
  }
  public resetCustomTimeZone() {
    this._customTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimeZoneInput() {
    return this._customTimeZone;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: string; 
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }
  public set fileExtension(value: string) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
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

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new ExtendedS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: ExtendedS3ConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // data_format_conversion_configuration - computed: false, optional: true, required: false
  private _dataFormatConversionConfiguration = new DataFormatConversionConfigurationPropertyOutputReference(this, "data_format_conversion_configuration");
  public get dataFormatConversionConfiguration() {
    return this._dataFormatConversionConfiguration;
  }
  public putDataFormatConversionConfiguration(value: DataFormatConversionConfigurationProperty) {
    this._dataFormatConversionConfiguration.internalValue = value;
  }
  public resetDataFormatConversionConfiguration() {
    this._dataFormatConversionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatConversionConfigurationInput() {
    return this._dataFormatConversionConfiguration.internalValue;
  }

  // dynamic_partitioning_configuration - computed: false, optional: true, required: false
  private _dynamicPartitioningConfiguration = new DynamicPartitioningConfigurationPropertyOutputReference(this, "dynamic_partitioning_configuration");
  public get dynamicPartitioningConfiguration() {
    return this._dynamicPartitioningConfiguration;
  }
  public putDynamicPartitioningConfiguration(value: DynamicPartitioningConfigurationProperty) {
    this._dynamicPartitioningConfiguration.internalValue = value;
  }
  public resetDynamicPartitioningConfiguration() {
    this._dynamicPartitioningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPartitioningConfigurationInput() {
    return this._dynamicPartitioningConfiguration.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new ExtendedS3ConfigurationProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: ExtendedS3ConfigurationProcessingConfigurationProperty) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_backup_configuration - computed: false, optional: true, required: false
  private _s3BackupConfiguration = new ExtendedS3ConfigurationS3BackupConfigurationPropertyOutputReference(this, "s3_backup_configuration");
  public get s3BackupConfiguration() {
    return this._s3BackupConfiguration;
  }
  public putS3BackupConfiguration(value: ExtendedS3ConfigurationS3BackupConfigurationProperty) {
    this._s3BackupConfiguration.internalValue = value;
  }
  public resetS3BackupConfiguration() {
    this._s3BackupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupConfigurationInput() {
    return this._s3BackupConfiguration.internalValue;
  }
}
export interface HttpEndpointConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class HttpEndpointConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpEndpointConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpEndpointConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface HttpEndpointConfigurationProcessingConfigurationProcessorsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name TfDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value TfDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}
export class HttpEndpointConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HttpEndpointConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpEndpointConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class HttpEndpointConfigurationProcessingConfigurationProcessorsParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : HttpEndpointConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): HttpEndpointConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference {
    return new HttpEndpointConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpEndpointConfigurationProcessingConfigurationProcessorsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type TfDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameters TfDeliveryStream#parameters}
  */
  readonly parameters?: HttpEndpointConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable;
}
export class HttpEndpointConfigurationProcessingConfigurationProcessorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HttpEndpointConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpEndpointConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new HttpEndpointConfigurationProcessingConfigurationProcessorsParametersPropertyList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: HttpEndpointConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class HttpEndpointConfigurationProcessingConfigurationProcessorsPropertyList extends cdktn.ComplexList {
  public internalValue? : HttpEndpointConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable

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
  public get(index: number): HttpEndpointConfigurationProcessingConfigurationProcessorsPropertyOutputReference {
    return new HttpEndpointConfigurationProcessingConfigurationProcessorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpEndpointConfigurationProcessingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processors TfDeliveryStream#processors}
  */
  readonly processors?: HttpEndpointConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable;
}
export class HttpEndpointConfigurationProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpEndpointConfigurationProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpEndpointConfigurationProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
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

  // processors - computed: false, optional: true, required: false
  private _processors = new HttpEndpointConfigurationProcessingConfigurationProcessorsPropertyList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: HttpEndpointConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface CommonAttributesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#name TfDeliveryStream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#value TfDeliveryStream#value}
  */
  readonly value: string;
}
export class CommonAttributesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CommonAttributesProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CommonAttributesProperty | cdktn.IResolvable | undefined) {
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

export class CommonAttributesPropertyList extends cdktn.ComplexList {
  public internalValue? : CommonAttributesProperty[] | cdktn.IResolvable

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
  public get(index: number): CommonAttributesPropertyOutputReference {
    return new CommonAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RequestConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#content_encoding TfDeliveryStream#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * common_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#common_attributes TfDeliveryStream#common_attributes}
  */
  readonly commonAttributes?: CommonAttributesProperty[] | cdktn.IResolvable;
}
export class RequestConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentEncoding = this._contentEncoding;
    }
    if (this._commonAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAttributes = this._commonAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentEncoding = undefined;
      this._commonAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentEncoding = value.contentEncoding;
      this._commonAttributes.internalValue = value.commonAttributes;
    }
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // common_attributes - computed: false, optional: true, required: false
  private _commonAttributes = new CommonAttributesPropertyList(this, "common_attributes", false);
  public get commonAttributes() {
    return this._commonAttributes;
  }
  public putCommonAttributes(value: CommonAttributesProperty[] | cdktn.IResolvable) {
    this._commonAttributes.internalValue = value;
  }
  public resetCommonAttributes() {
    this._commonAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAttributesInput() {
    return this._commonAttributes.internalValue;
  }
}
export interface HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface HttpEndpointConfigurationS3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty;
}
export class HttpEndpointConfigurationS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpEndpointConfigurationS3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpEndpointConfigurationS3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: HttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface HttpEndpointConfigurationSecretsManagerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn TfDeliveryStream#secret_arn}
  */
  readonly secretArn?: string;
}
export class HttpEndpointConfigurationSecretsManagerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpEndpointConfigurationSecretsManagerConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpEndpointConfigurationSecretsManagerConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
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

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface HttpEndpointConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#access_key TfDeliveryStream#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#name TfDeliveryStream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration TfDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode TfDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#url TfDeliveryStream#url}
  */
  readonly url: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: HttpEndpointConfigurationCloudwatchLoggingOptionsProperty;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration TfDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: HttpEndpointConfigurationProcessingConfigurationProperty;
  /**
  * request_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#request_configuration TfDeliveryStream#request_configuration}
  */
  readonly requestConfiguration?: RequestConfigurationProperty;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration TfDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: HttpEndpointConfigurationS3ConfigurationProperty;
  /**
  * secrets_manager_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration TfDeliveryStream#secrets_manager_configuration}
  */
  readonly secretsManagerConfiguration?: HttpEndpointConfigurationSecretsManagerConfigurationProperty;
}
export class HttpEndpointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpEndpointConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._requestConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestConfiguration = this._requestConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._secretsManagerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerConfiguration = this._secretsManagerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpEndpointConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._name = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._url = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._requestConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._secretsManagerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._name = value.name;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._url = value.url;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._requestConfiguration.internalValue = value.requestConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._secretsManagerConfiguration.internalValue = value.secretsManagerConfiguration;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new HttpEndpointConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: HttpEndpointConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new HttpEndpointConfigurationProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: HttpEndpointConfigurationProcessingConfigurationProperty) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // request_configuration - computed: false, optional: true, required: false
  private _requestConfiguration = new RequestConfigurationPropertyOutputReference(this, "request_configuration");
  public get requestConfiguration() {
    return this._requestConfiguration;
  }
  public putRequestConfiguration(value: RequestConfigurationProperty) {
    this._requestConfiguration.internalValue = value;
  }
  public resetRequestConfiguration() {
    this._requestConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigurationInput() {
    return this._requestConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new HttpEndpointConfigurationS3ConfigurationPropertyOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: HttpEndpointConfigurationS3ConfigurationProperty) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // secrets_manager_configuration - computed: false, optional: true, required: false
  private _secretsManagerConfiguration = new HttpEndpointConfigurationSecretsManagerConfigurationPropertyOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
  public putSecretsManagerConfiguration(value: HttpEndpointConfigurationSecretsManagerConfigurationProperty) {
    this._secretsManagerConfiguration.internalValue = value;
  }
  public resetSecretsManagerConfiguration() {
    this._secretsManagerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerConfigurationInput() {
    return this._secretsManagerConfiguration.internalValue;
  }
}
export interface IcebergConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class IcebergConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface DestinationTableConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#database_name TfDeliveryStream#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_error_output_prefix TfDeliveryStream#s3_error_output_prefix}
  */
  readonly s3ErrorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#table_name TfDeliveryStream#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#unique_keys TfDeliveryStream#unique_keys}
  */
  readonly uniqueKeys?: string[];
}
export class DestinationTableConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DestinationTableConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._s3ErrorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ErrorOutputPrefix = this._s3ErrorOutputPrefix;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._uniqueKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueKeys = this._uniqueKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTableConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._s3ErrorOutputPrefix = undefined;
      this._tableName = undefined;
      this._uniqueKeys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._s3ErrorOutputPrefix = value.s3ErrorOutputPrefix;
      this._tableName = value.tableName;
      this._uniqueKeys = value.uniqueKeys;
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

  // s3_error_output_prefix - computed: false, optional: true, required: false
  private _s3ErrorOutputPrefix?: string; 
  public get s3ErrorOutputPrefix() {
    return this.getStringAttribute('s3_error_output_prefix');
  }
  public set s3ErrorOutputPrefix(value: string) {
    this._s3ErrorOutputPrefix = value;
  }
  public resetS3ErrorOutputPrefix() {
    this._s3ErrorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ErrorOutputPrefixInput() {
    return this._s3ErrorOutputPrefix;
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

  // unique_keys - computed: false, optional: true, required: false
  private _uniqueKeys?: string[]; 
  public get uniqueKeys() {
    return this.getListAttribute('unique_keys');
  }
  public set uniqueKeys(value: string[]) {
    this._uniqueKeys = value;
  }
  public resetUniqueKeys() {
    this._uniqueKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeysInput() {
    return this._uniqueKeys;
  }
}

export class DestinationTableConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : DestinationTableConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): DestinationTableConfigurationPropertyOutputReference {
    return new DestinationTableConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergConfigurationProcessingConfigurationProcessorsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name TfDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value TfDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}
export class IcebergConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class IcebergConfigurationProcessingConfigurationProcessorsParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : IcebergConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): IcebergConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference {
    return new IcebergConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergConfigurationProcessingConfigurationProcessorsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type TfDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameters TfDeliveryStream#parameters}
  */
  readonly parameters?: IcebergConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable;
}
export class IcebergConfigurationProcessingConfigurationProcessorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new IcebergConfigurationProcessingConfigurationProcessorsParametersPropertyList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: IcebergConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class IcebergConfigurationProcessingConfigurationProcessorsPropertyList extends cdktn.ComplexList {
  public internalValue? : IcebergConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable

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
  public get(index: number): IcebergConfigurationProcessingConfigurationProcessorsPropertyOutputReference {
    return new IcebergConfigurationProcessingConfigurationProcessorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergConfigurationProcessingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processors TfDeliveryStream#processors}
  */
  readonly processors?: IcebergConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable;
}
export class IcebergConfigurationProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergConfigurationProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergConfigurationProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
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

  // processors - computed: false, optional: true, required: false
  private _processors = new IcebergConfigurationProcessingConfigurationProcessorsPropertyList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: IcebergConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface IcebergConfigurationS3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty;
}
export class IcebergConfigurationS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergConfigurationS3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergConfigurationS3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: IcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface IcebergConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#append_only TfDeliveryStream#append_only}
  */
  readonly appendOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#catalog_arn TfDeliveryStream#catalog_arn}
  */
  readonly catalogArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration TfDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode TfDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: IcebergConfigurationCloudwatchLoggingOptionsProperty;
  /**
  * destination_table_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#destination_table_configuration TfDeliveryStream#destination_table_configuration}
  */
  readonly destinationTableConfiguration?: DestinationTableConfigurationProperty[] | cdktn.IResolvable;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration TfDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: IcebergConfigurationProcessingConfigurationProperty;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration TfDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: IcebergConfigurationS3ConfigurationProperty;
}
export class IcebergConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendOnly = this._appendOnly;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._catalogArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogArn = this._catalogArn;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._destinationTableConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTableConfiguration = this._destinationTableConfiguration?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appendOnly = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._catalogArn = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._destinationTableConfiguration.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appendOnly = value.appendOnly;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._catalogArn = value.catalogArn;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._destinationTableConfiguration.internalValue = value.destinationTableConfiguration;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // append_only - computed: true, optional: true, required: false
  private _appendOnly?: boolean | cdktn.IResolvable; 
  public get appendOnly() {
    return this.getBooleanAttribute('append_only');
  }
  public set appendOnly(value: boolean | cdktn.IResolvable) {
    this._appendOnly = value;
  }
  public resetAppendOnly() {
    this._appendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendOnlyInput() {
    return this._appendOnly;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // catalog_arn - computed: false, optional: false, required: true
  private _catalogArn?: string; 
  public get catalogArn() {
    return this.getStringAttribute('catalog_arn');
  }
  public set catalogArn(value: string) {
    this._catalogArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogArnInput() {
    return this._catalogArn;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new IcebergConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: IcebergConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // destination_table_configuration - computed: false, optional: true, required: false
  private _destinationTableConfiguration = new DestinationTableConfigurationPropertyList(this, "destination_table_configuration", false);
  public get destinationTableConfiguration() {
    return this._destinationTableConfiguration;
  }
  public putDestinationTableConfiguration(value: DestinationTableConfigurationProperty[] | cdktn.IResolvable) {
    this._destinationTableConfiguration.internalValue = value;
  }
  public resetDestinationTableConfiguration() {
    this._destinationTableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableConfigurationInput() {
    return this._destinationTableConfiguration.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new IcebergConfigurationProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: IcebergConfigurationProcessingConfigurationProperty) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new IcebergConfigurationS3ConfigurationPropertyOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: IcebergConfigurationS3ConfigurationProperty) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}
export interface KinesisSourceConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kinesis_stream_arn TfDeliveryStream#kinesis_stream_arn}
  */
  readonly kinesisStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}
export class KinesisSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisSourceConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinesisStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamArn = this._kinesisStreamArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisSourceConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kinesisStreamArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kinesisStreamArn = value.kinesisStreamArn;
      this._roleArn = value.roleArn;
    }
  }

  // kinesis_stream_arn - computed: false, optional: false, required: true
  private _kinesisStreamArn?: string; 
  public get kinesisStreamArn() {
    return this.getStringAttribute('kinesis_stream_arn');
  }
  public set kinesisStreamArn(value: string) {
    this._kinesisStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamArnInput() {
    return this._kinesisStreamArn;
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
export interface AuthenticationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#connectivity TfDeliveryStream#connectivity}
  */
  readonly connectivity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}
export class AuthenticationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivity = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivity = value.connectivity;
      this._roleArn = value.roleArn;
    }
  }

  // connectivity - computed: false, optional: false, required: true
  private _connectivity?: string; 
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }
  public set connectivity(value: string) {
    this._connectivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity;
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
export interface MskSourceConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#msk_cluster_arn TfDeliveryStream#msk_cluster_arn}
  */
  readonly mskClusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#read_from_timestamp TfDeliveryStream#read_from_timestamp}
  */
  readonly readFromTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#topic_name TfDeliveryStream#topic_name}
  */
  readonly topicName: string;
  /**
  * authentication_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#authentication_configuration TfDeliveryStream#authentication_configuration}
  */
  readonly authenticationConfiguration: AuthenticationConfigurationProperty;
}
export class MskSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskSourceConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mskClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mskClusterArn = this._mskClusterArn;
    }
    if (this._readFromTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.readFromTimestamp = this._readFromTimestamp;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._authenticationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskSourceConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mskClusterArn = undefined;
      this._readFromTimestamp = undefined;
      this._topicName = undefined;
      this._authenticationConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mskClusterArn = value.mskClusterArn;
      this._readFromTimestamp = value.readFromTimestamp;
      this._topicName = value.topicName;
      this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
    }
  }

  // msk_cluster_arn - computed: false, optional: false, required: true
  private _mskClusterArn?: string; 
  public get mskClusterArn() {
    return this.getStringAttribute('msk_cluster_arn');
  }
  public set mskClusterArn(value: string) {
    this._mskClusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mskClusterArnInput() {
    return this._mskClusterArn;
  }

  // read_from_timestamp - computed: false, optional: true, required: false
  private _readFromTimestamp?: string; 
  public get readFromTimestamp() {
    return this.getStringAttribute('read_from_timestamp');
  }
  public set readFromTimestamp(value: string) {
    this._readFromTimestamp = value;
  }
  public resetReadFromTimestamp() {
    this._readFromTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readFromTimestampInput() {
    return this._readFromTimestamp;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // authentication_configuration - computed: false, optional: false, required: true
  private _authenticationConfiguration = new AuthenticationConfigurationPropertyOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public putAuthenticationConfiguration(value: AuthenticationConfigurationProperty) {
    this._authenticationConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration.internalValue;
  }
}
export interface OpensearchConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class OpensearchConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface DocumentIdOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#default_document_id_format TfDeliveryStream#default_document_id_format}
  */
  readonly defaultDocumentIdFormat: string;
}
export class DocumentIdOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentIdOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDocumentIdFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDocumentIdFormat = this._defaultDocumentIdFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentIdOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultDocumentIdFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultDocumentIdFormat = value.defaultDocumentIdFormat;
    }
  }

  // default_document_id_format - computed: false, optional: false, required: true
  private _defaultDocumentIdFormat?: string; 
  public get defaultDocumentIdFormat() {
    return this.getStringAttribute('default_document_id_format');
  }
  public set defaultDocumentIdFormat(value: string) {
    this._defaultDocumentIdFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDocumentIdFormatInput() {
    return this._defaultDocumentIdFormat;
  }
}
export interface OpensearchConfigurationProcessingConfigurationProcessorsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name TfDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value TfDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}
export class OpensearchConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class OpensearchConfigurationProcessingConfigurationProcessorsParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : OpensearchConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): OpensearchConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference {
    return new OpensearchConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchConfigurationProcessingConfigurationProcessorsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type TfDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameters TfDeliveryStream#parameters}
  */
  readonly parameters?: OpensearchConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable;
}
export class OpensearchConfigurationProcessingConfigurationProcessorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new OpensearchConfigurationProcessingConfigurationProcessorsParametersPropertyList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: OpensearchConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class OpensearchConfigurationProcessingConfigurationProcessorsPropertyList extends cdktn.ComplexList {
  public internalValue? : OpensearchConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable

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
  public get(index: number): OpensearchConfigurationProcessingConfigurationProcessorsPropertyOutputReference {
    return new OpensearchConfigurationProcessingConfigurationProcessorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchConfigurationProcessingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processors TfDeliveryStream#processors}
  */
  readonly processors?: OpensearchConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable;
}
export class OpensearchConfigurationProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchConfigurationProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchConfigurationProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
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

  // processors - computed: false, optional: true, required: false
  private _processors = new OpensearchConfigurationProcessingConfigurationProcessorsPropertyList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpensearchConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface OpensearchConfigurationS3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty;
}
export class OpensearchConfigurationS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchConfigurationS3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchConfigurationS3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: OpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface OpensearchConfigurationVpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids TfDeliveryStream#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids TfDeliveryStream#subnet_ids}
  */
  readonly subnetIds: string[];
}
export class OpensearchConfigurationVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchConfigurationVpcConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
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

  public set internalValue(value: OpensearchConfigurationVpcConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
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

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
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
export interface OpensearchConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cluster_endpoint TfDeliveryStream#cluster_endpoint}
  */
  readonly clusterEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#domain_arn TfDeliveryStream#domain_arn}
  */
  readonly domainArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#index_name TfDeliveryStream#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#index_rotation_period TfDeliveryStream#index_rotation_period}
  */
  readonly indexRotationPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration TfDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode TfDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type_name TfDeliveryStream#type_name}
  */
  readonly typeName?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: OpensearchConfigurationCloudwatchLoggingOptionsProperty;
  /**
  * document_id_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#document_id_options TfDeliveryStream#document_id_options}
  */
  readonly documentIdOptions?: DocumentIdOptionsProperty;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration TfDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: OpensearchConfigurationProcessingConfigurationProperty;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration TfDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: OpensearchConfigurationS3ConfigurationProperty;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#vpc_config TfDeliveryStream#vpc_config}
  */
  readonly vpcConfig?: OpensearchConfigurationVpcConfigProperty;
}
export class OpensearchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._clusterEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterEndpoint = this._clusterEndpoint;
    }
    if (this._domainArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainArn = this._domainArn;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._indexRotationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRotationPeriod = this._indexRotationPeriod;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._documentIdOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentIdOptions = this._documentIdOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._clusterEndpoint = undefined;
      this._domainArn = undefined;
      this._indexName = undefined;
      this._indexRotationPeriod = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._typeName = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._documentIdOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._clusterEndpoint = value.clusterEndpoint;
      this._domainArn = value.domainArn;
      this._indexName = value.indexName;
      this._indexRotationPeriod = value.indexRotationPeriod;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._typeName = value.typeName;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._documentIdOptions.internalValue = value.documentIdOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // cluster_endpoint - computed: false, optional: true, required: false
  private _clusterEndpoint?: string; 
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }
  public set clusterEndpoint(value: string) {
    this._clusterEndpoint = value;
  }
  public resetClusterEndpoint() {
    this._clusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointInput() {
    return this._clusterEndpoint;
  }

  // domain_arn - computed: false, optional: true, required: false
  private _domainArn?: string; 
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }
  public set domainArn(value: string) {
    this._domainArn = value;
  }
  public resetDomainArn() {
    this._domainArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainArnInput() {
    return this._domainArn;
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // index_rotation_period - computed: false, optional: true, required: false
  private _indexRotationPeriod?: string; 
  public get indexRotationPeriod() {
    return this.getStringAttribute('index_rotation_period');
  }
  public set indexRotationPeriod(value: string) {
    this._indexRotationPeriod = value;
  }
  public resetIndexRotationPeriod() {
    this._indexRotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRotationPeriodInput() {
    return this._indexRotationPeriod;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new OpensearchConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: OpensearchConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // document_id_options - computed: false, optional: true, required: false
  private _documentIdOptions = new DocumentIdOptionsPropertyOutputReference(this, "document_id_options");
  public get documentIdOptions() {
    return this._documentIdOptions;
  }
  public putDocumentIdOptions(value: DocumentIdOptionsProperty) {
    this._documentIdOptions.internalValue = value;
  }
  public resetDocumentIdOptions() {
    this._documentIdOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentIdOptionsInput() {
    return this._documentIdOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new OpensearchConfigurationProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: OpensearchConfigurationProcessingConfigurationProperty) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new OpensearchConfigurationS3ConfigurationPropertyOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: OpensearchConfigurationS3ConfigurationProperty) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new OpensearchConfigurationVpcConfigPropertyOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: OpensearchConfigurationVpcConfigProperty) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface OpensearchserverlessConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class OpensearchserverlessConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchserverlessConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserverlessConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name TfDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value TfDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}
export class OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference {
    return new OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchserverlessConfigurationProcessingConfigurationProcessorsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type TfDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameters TfDeliveryStream#parameters}
  */
  readonly parameters?: OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable;
}
export class OpensearchserverlessConfigurationProcessingConfigurationProcessorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchserverlessConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserverlessConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersPropertyList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: OpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class OpensearchserverlessConfigurationProcessingConfigurationProcessorsPropertyList extends cdktn.ComplexList {
  public internalValue? : OpensearchserverlessConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable

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
  public get(index: number): OpensearchserverlessConfigurationProcessingConfigurationProcessorsPropertyOutputReference {
    return new OpensearchserverlessConfigurationProcessingConfigurationProcessorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchserverlessConfigurationProcessingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processors TfDeliveryStream#processors}
  */
  readonly processors?: OpensearchserverlessConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable;
}
export class OpensearchserverlessConfigurationProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchserverlessConfigurationProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserverlessConfigurationProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
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

  // processors - computed: false, optional: true, required: false
  private _processors = new OpensearchserverlessConfigurationProcessingConfigurationProcessorsPropertyList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpensearchserverlessConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface OpensearchserverlessConfigurationS3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty;
}
export class OpensearchserverlessConfigurationS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchserverlessConfigurationS3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserverlessConfigurationS3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: OpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface OpensearchserverlessConfigurationVpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids TfDeliveryStream#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids TfDeliveryStream#subnet_ids}
  */
  readonly subnetIds: string[];
}
export class OpensearchserverlessConfigurationVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchserverlessConfigurationVpcConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
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

  public set internalValue(value: OpensearchserverlessConfigurationVpcConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
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

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
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
export interface OpensearchserverlessConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#collection_endpoint TfDeliveryStream#collection_endpoint}
  */
  readonly collectionEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#index_name TfDeliveryStream#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration TfDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode TfDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: OpensearchserverlessConfigurationCloudwatchLoggingOptionsProperty;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration TfDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: OpensearchserverlessConfigurationProcessingConfigurationProperty;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration TfDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: OpensearchserverlessConfigurationS3ConfigurationProperty;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#vpc_config TfDeliveryStream#vpc_config}
  */
  readonly vpcConfig?: OpensearchserverlessConfigurationVpcConfigProperty;
}
export class OpensearchserverlessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchserverlessConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._collectionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionEndpoint = this._collectionEndpoint;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserverlessConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._collectionEndpoint = undefined;
      this._indexName = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._collectionEndpoint = value.collectionEndpoint;
      this._indexName = value.indexName;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // collection_endpoint - computed: false, optional: false, required: true
  private _collectionEndpoint?: string; 
  public get collectionEndpoint() {
    return this.getStringAttribute('collection_endpoint');
  }
  public set collectionEndpoint(value: string) {
    this._collectionEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionEndpointInput() {
    return this._collectionEndpoint;
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new OpensearchserverlessConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: OpensearchserverlessConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new OpensearchserverlessConfigurationProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: OpensearchserverlessConfigurationProcessingConfigurationProperty) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new OpensearchserverlessConfigurationS3ConfigurationPropertyOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: OpensearchserverlessConfigurationS3ConfigurationProperty) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new OpensearchserverlessConfigurationVpcConfigPropertyOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: OpensearchserverlessConfigurationVpcConfigProperty) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface RedshiftConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class RedshiftConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface RedshiftConfigurationProcessingConfigurationProcessorsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name TfDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value TfDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}
export class RedshiftConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RedshiftConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class RedshiftConfigurationProcessingConfigurationProcessorsParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : RedshiftConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): RedshiftConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference {
    return new RedshiftConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftConfigurationProcessingConfigurationProcessorsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type TfDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameters TfDeliveryStream#parameters}
  */
  readonly parameters?: RedshiftConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable;
}
export class RedshiftConfigurationProcessingConfigurationProcessorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RedshiftConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new RedshiftConfigurationProcessingConfigurationProcessorsParametersPropertyList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: RedshiftConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class RedshiftConfigurationProcessingConfigurationProcessorsPropertyList extends cdktn.ComplexList {
  public internalValue? : RedshiftConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable

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
  public get(index: number): RedshiftConfigurationProcessingConfigurationProcessorsPropertyOutputReference {
    return new RedshiftConfigurationProcessingConfigurationProcessorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftConfigurationProcessingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processors TfDeliveryStream#processors}
  */
  readonly processors?: RedshiftConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable;
}
export class RedshiftConfigurationProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftConfigurationProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftConfigurationProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
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

  // processors - computed: false, optional: true, required: false
  private _processors = new RedshiftConfigurationProcessingConfigurationProcessorsPropertyList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: RedshiftConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface RedshiftConfigurationS3BackupConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty;
}
export class RedshiftConfigurationS3BackupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftConfigurationS3BackupConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftConfigurationS3BackupConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: RedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface RedshiftConfigurationS3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty;
}
export class RedshiftConfigurationS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftConfigurationS3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftConfigurationS3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: RedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface RedshiftConfigurationSecretsManagerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn TfDeliveryStream#secret_arn}
  */
  readonly secretArn?: string;
}
export class RedshiftConfigurationSecretsManagerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftConfigurationSecretsManagerConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftConfigurationSecretsManagerConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
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

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface RedshiftConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cluster_jdbcurl TfDeliveryStream#cluster_jdbcurl}
  */
  readonly clusterJdbcurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#copy_options TfDeliveryStream#copy_options}
  */
  readonly copyOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#data_table_columns TfDeliveryStream#data_table_columns}
  */
  readonly dataTableColumns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#data_table_name TfDeliveryStream#data_table_name}
  */
  readonly dataTableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#password TfDeliveryStream#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration TfDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode TfDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#username TfDeliveryStream#username}
  */
  readonly username?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: RedshiftConfigurationCloudwatchLoggingOptionsProperty;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration TfDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: RedshiftConfigurationProcessingConfigurationProperty;
  /**
  * s3_backup_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_configuration TfDeliveryStream#s3_backup_configuration}
  */
  readonly s3BackupConfiguration?: RedshiftConfigurationS3BackupConfigurationProperty;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration TfDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: RedshiftConfigurationS3ConfigurationProperty;
  /**
  * secrets_manager_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration TfDeliveryStream#secrets_manager_configuration}
  */
  readonly secretsManagerConfiguration?: RedshiftConfigurationSecretsManagerConfigurationProperty;
}
export class RedshiftConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedshiftConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterJdbcurl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterJdbcurl = this._clusterJdbcurl;
    }
    if (this._copyOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyOptions = this._copyOptions;
    }
    if (this._dataTableColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTableColumns = this._dataTableColumns;
    }
    if (this._dataTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTableName = this._dataTableName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3BackupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupConfiguration = this._s3BackupConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._secretsManagerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerConfiguration = this._secretsManagerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterJdbcurl = undefined;
      this._copyOptions = undefined;
      this._dataTableColumns = undefined;
      this._dataTableName = undefined;
      this._password = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._username = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3BackupConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._secretsManagerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterJdbcurl = value.clusterJdbcurl;
      this._copyOptions = value.copyOptions;
      this._dataTableColumns = value.dataTableColumns;
      this._dataTableName = value.dataTableName;
      this._password = value.password;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._username = value.username;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3BackupConfiguration.internalValue = value.s3BackupConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._secretsManagerConfiguration.internalValue = value.secretsManagerConfiguration;
    }
  }

  // cluster_jdbcurl - computed: false, optional: false, required: true
  private _clusterJdbcurl?: string; 
  public get clusterJdbcurl() {
    return this.getStringAttribute('cluster_jdbcurl');
  }
  public set clusterJdbcurl(value: string) {
    this._clusterJdbcurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterJdbcurlInput() {
    return this._clusterJdbcurl;
  }

  // copy_options - computed: false, optional: true, required: false
  private _copyOptions?: string; 
  public get copyOptions() {
    return this.getStringAttribute('copy_options');
  }
  public set copyOptions(value: string) {
    this._copyOptions = value;
  }
  public resetCopyOptions() {
    this._copyOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyOptionsInput() {
    return this._copyOptions;
  }

  // data_table_columns - computed: false, optional: true, required: false
  private _dataTableColumns?: string; 
  public get dataTableColumns() {
    return this.getStringAttribute('data_table_columns');
  }
  public set dataTableColumns(value: string) {
    this._dataTableColumns = value;
  }
  public resetDataTableColumns() {
    this._dataTableColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTableColumnsInput() {
    return this._dataTableColumns;
  }

  // data_table_name - computed: false, optional: false, required: true
  private _dataTableName?: string; 
  public get dataTableName() {
    return this.getStringAttribute('data_table_name');
  }
  public set dataTableName(value: string) {
    this._dataTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTableNameInput() {
    return this._dataTableName;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new RedshiftConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: RedshiftConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new RedshiftConfigurationProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: RedshiftConfigurationProcessingConfigurationProperty) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_backup_configuration - computed: false, optional: true, required: false
  private _s3BackupConfiguration = new RedshiftConfigurationS3BackupConfigurationPropertyOutputReference(this, "s3_backup_configuration");
  public get s3BackupConfiguration() {
    return this._s3BackupConfiguration;
  }
  public putS3BackupConfiguration(value: RedshiftConfigurationS3BackupConfigurationProperty) {
    this._s3BackupConfiguration.internalValue = value;
  }
  public resetS3BackupConfiguration() {
    this._s3BackupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupConfigurationInput() {
    return this._s3BackupConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new RedshiftConfigurationS3ConfigurationPropertyOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: RedshiftConfigurationS3ConfigurationProperty) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // secrets_manager_configuration - computed: false, optional: true, required: false
  private _secretsManagerConfiguration = new RedshiftConfigurationSecretsManagerConfigurationPropertyOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
  public putSecretsManagerConfiguration(value: RedshiftConfigurationSecretsManagerConfigurationProperty) {
    this._secretsManagerConfiguration.internalValue = value;
  }
  public resetSecretsManagerConfiguration() {
    this._secretsManagerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerConfigurationInput() {
    return this._secretsManagerConfiguration.internalValue;
  }
}
export interface ServerSideEncryptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#key_arn TfDeliveryStream#key_arn}
  */
  readonly keyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#key_type TfDeliveryStream#key_type}
  */
  readonly keyType?: string;
}
export class ServerSideEncryptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerSideEncryptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._keyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyArn = this._keyArn;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSideEncryptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._keyArn = undefined;
      this._keyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._keyArn = value.keyArn;
      this._keyType = value.keyType;
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

  // key_arn - computed: false, optional: true, required: false
  private _keyArn?: string; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  public resetKeyArn() {
    this._keyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}
export interface SnowflakeConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class SnowflakeConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnowflakeConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface SnowflakeConfigurationProcessingConfigurationProcessorsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name TfDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value TfDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}
export class SnowflakeConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SnowflakeConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class SnowflakeConfigurationProcessingConfigurationProcessorsParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : SnowflakeConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): SnowflakeConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference {
    return new SnowflakeConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnowflakeConfigurationProcessingConfigurationProcessorsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type TfDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameters TfDeliveryStream#parameters}
  */
  readonly parameters?: SnowflakeConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable;
}
export class SnowflakeConfigurationProcessingConfigurationProcessorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SnowflakeConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SnowflakeConfigurationProcessingConfigurationProcessorsParametersPropertyList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SnowflakeConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class SnowflakeConfigurationProcessingConfigurationProcessorsPropertyList extends cdktn.ComplexList {
  public internalValue? : SnowflakeConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable

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
  public get(index: number): SnowflakeConfigurationProcessingConfigurationProcessorsPropertyOutputReference {
    return new SnowflakeConfigurationProcessingConfigurationProcessorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnowflakeConfigurationProcessingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processors TfDeliveryStream#processors}
  */
  readonly processors?: SnowflakeConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable;
}
export class SnowflakeConfigurationProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnowflakeConfigurationProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeConfigurationProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
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

  // processors - computed: false, optional: true, required: false
  private _processors = new SnowflakeConfigurationProcessingConfigurationProcessorsPropertyList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: SnowflakeConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface SnowflakeConfigurationS3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty;
}
export class SnowflakeConfigurationS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnowflakeConfigurationS3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeConfigurationS3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: SnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface SnowflakeConfigurationSecretsManagerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn TfDeliveryStream#secret_arn}
  */
  readonly secretArn?: string;
}
export class SnowflakeConfigurationSecretsManagerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnowflakeConfigurationSecretsManagerConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeConfigurationSecretsManagerConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
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

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface SnowflakeRoleConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_role TfDeliveryStream#snowflake_role}
  */
  readonly snowflakeRole?: string;
}
export class SnowflakeRoleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnowflakeRoleConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._snowflakeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeRole = this._snowflakeRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeRoleConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._snowflakeRole = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._snowflakeRole = value.snowflakeRole;
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

  // snowflake_role - computed: false, optional: true, required: false
  private _snowflakeRole?: string; 
  public get snowflakeRole() {
    return this.getStringAttribute('snowflake_role');
  }
  public set snowflakeRole(value: string) {
    this._snowflakeRole = value;
  }
  public resetSnowflakeRole() {
    this._snowflakeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeRoleInput() {
    return this._snowflakeRole;
  }
}
export interface SnowflakeVpcConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#private_link_vpce_id TfDeliveryStream#private_link_vpce_id}
  */
  readonly privateLinkVpceId: string;
}
export class SnowflakeVpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnowflakeVpcConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateLinkVpceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkVpceId = this._privateLinkVpceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeVpcConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateLinkVpceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateLinkVpceId = value.privateLinkVpceId;
    }
  }

  // private_link_vpce_id - computed: false, optional: false, required: true
  private _privateLinkVpceId?: string; 
  public get privateLinkVpceId() {
    return this.getStringAttribute('private_link_vpce_id');
  }
  public set privateLinkVpceId(value: string) {
    this._privateLinkVpceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkVpceIdInput() {
    return this._privateLinkVpceId;
  }
}
export interface SnowflakeConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#account_url TfDeliveryStream#account_url}
  */
  readonly accountUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#content_column_name TfDeliveryStream#content_column_name}
  */
  readonly contentColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#data_loading_option TfDeliveryStream#data_loading_option}
  */
  readonly dataLoadingOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#database TfDeliveryStream#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#key_passphrase TfDeliveryStream#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#metadata_column_name TfDeliveryStream#metadata_column_name}
  */
  readonly metadataColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#private_key TfDeliveryStream#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration TfDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode TfDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#schema TfDeliveryStream#schema}
  */
  readonly schema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#table TfDeliveryStream#table}
  */
  readonly table: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#user TfDeliveryStream#user}
  */
  readonly user?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: SnowflakeConfigurationCloudwatchLoggingOptionsProperty;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration TfDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: SnowflakeConfigurationProcessingConfigurationProperty;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration TfDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: SnowflakeConfigurationS3ConfigurationProperty;
  /**
  * secrets_manager_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration TfDeliveryStream#secrets_manager_configuration}
  */
  readonly secretsManagerConfiguration?: SnowflakeConfigurationSecretsManagerConfigurationProperty;
  /**
  * snowflake_role_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_role_configuration TfDeliveryStream#snowflake_role_configuration}
  */
  readonly snowflakeRoleConfiguration?: SnowflakeRoleConfigurationProperty;
  /**
  * snowflake_vpc_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_vpc_configuration TfDeliveryStream#snowflake_vpc_configuration}
  */
  readonly snowflakeVpcConfiguration?: SnowflakeVpcConfigurationProperty;
}
export class SnowflakeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnowflakeConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUrl = this._accountUrl;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._contentColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentColumnName = this._contentColumnName;
    }
    if (this._dataLoadingOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLoadingOption = this._dataLoadingOption;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._keyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassphrase = this._keyPassphrase;
    }
    if (this._metadataColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataColumnName = this._metadataColumnName;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._secretsManagerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerConfiguration = this._secretsManagerConfiguration?.internalValue;
    }
    if (this._snowflakeRoleConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeRoleConfiguration = this._snowflakeRoleConfiguration?.internalValue;
    }
    if (this._snowflakeVpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeVpcConfiguration = this._snowflakeVpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountUrl = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._contentColumnName = undefined;
      this._dataLoadingOption = undefined;
      this._database = undefined;
      this._keyPassphrase = undefined;
      this._metadataColumnName = undefined;
      this._privateKey = undefined;
      this._retryDuration = undefined;
      this._roleArn = undefined;
      this._s3BackupMode = undefined;
      this._schema = undefined;
      this._table = undefined;
      this._user = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._secretsManagerConfiguration.internalValue = undefined;
      this._snowflakeRoleConfiguration.internalValue = undefined;
      this._snowflakeVpcConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountUrl = value.accountUrl;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._contentColumnName = value.contentColumnName;
      this._dataLoadingOption = value.dataLoadingOption;
      this._database = value.database;
      this._keyPassphrase = value.keyPassphrase;
      this._metadataColumnName = value.metadataColumnName;
      this._privateKey = value.privateKey;
      this._retryDuration = value.retryDuration;
      this._roleArn = value.roleArn;
      this._s3BackupMode = value.s3BackupMode;
      this._schema = value.schema;
      this._table = value.table;
      this._user = value.user;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._secretsManagerConfiguration.internalValue = value.secretsManagerConfiguration;
      this._snowflakeRoleConfiguration.internalValue = value.snowflakeRoleConfiguration;
      this._snowflakeVpcConfiguration.internalValue = value.snowflakeVpcConfiguration;
    }
  }

  // account_url - computed: false, optional: false, required: true
  private _accountUrl?: string; 
  public get accountUrl() {
    return this.getStringAttribute('account_url');
  }
  public set accountUrl(value: string) {
    this._accountUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUrlInput() {
    return this._accountUrl;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // content_column_name - computed: false, optional: true, required: false
  private _contentColumnName?: string; 
  public get contentColumnName() {
    return this.getStringAttribute('content_column_name');
  }
  public set contentColumnName(value: string) {
    this._contentColumnName = value;
  }
  public resetContentColumnName() {
    this._contentColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentColumnNameInput() {
    return this._contentColumnName;
  }

  // data_loading_option - computed: false, optional: true, required: false
  private _dataLoadingOption?: string; 
  public get dataLoadingOption() {
    return this.getStringAttribute('data_loading_option');
  }
  public set dataLoadingOption(value: string) {
    this._dataLoadingOption = value;
  }
  public resetDataLoadingOption() {
    this._dataLoadingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLoadingOptionInput() {
    return this._dataLoadingOption;
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

  // key_passphrase - computed: false, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
  }

  // metadata_column_name - computed: false, optional: true, required: false
  private _metadataColumnName?: string; 
  public get metadataColumnName() {
    return this.getStringAttribute('metadata_column_name');
  }
  public set metadataColumnName(value: string) {
    this._metadataColumnName = value;
  }
  public resetMetadataColumnName() {
    this._metadataColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataColumnNameInput() {
    return this._metadataColumnName;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
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

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new SnowflakeConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: SnowflakeConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new SnowflakeConfigurationProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: SnowflakeConfigurationProcessingConfigurationProperty) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new SnowflakeConfigurationS3ConfigurationPropertyOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: SnowflakeConfigurationS3ConfigurationProperty) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // secrets_manager_configuration - computed: false, optional: true, required: false
  private _secretsManagerConfiguration = new SnowflakeConfigurationSecretsManagerConfigurationPropertyOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
  public putSecretsManagerConfiguration(value: SnowflakeConfigurationSecretsManagerConfigurationProperty) {
    this._secretsManagerConfiguration.internalValue = value;
  }
  public resetSecretsManagerConfiguration() {
    this._secretsManagerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerConfigurationInput() {
    return this._secretsManagerConfiguration.internalValue;
  }

  // snowflake_role_configuration - computed: false, optional: true, required: false
  private _snowflakeRoleConfiguration = new SnowflakeRoleConfigurationPropertyOutputReference(this, "snowflake_role_configuration");
  public get snowflakeRoleConfiguration() {
    return this._snowflakeRoleConfiguration;
  }
  public putSnowflakeRoleConfiguration(value: SnowflakeRoleConfigurationProperty) {
    this._snowflakeRoleConfiguration.internalValue = value;
  }
  public resetSnowflakeRoleConfiguration() {
    this._snowflakeRoleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeRoleConfigurationInput() {
    return this._snowflakeRoleConfiguration.internalValue;
  }

  // snowflake_vpc_configuration - computed: false, optional: true, required: false
  private _snowflakeVpcConfiguration = new SnowflakeVpcConfigurationPropertyOutputReference(this, "snowflake_vpc_configuration");
  public get snowflakeVpcConfiguration() {
    return this._snowflakeVpcConfiguration;
  }
  public putSnowflakeVpcConfiguration(value: SnowflakeVpcConfigurationProperty) {
    this._snowflakeVpcConfiguration.internalValue = value;
  }
  public resetSnowflakeVpcConfiguration() {
    this._snowflakeVpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeVpcConfigurationInput() {
    return this._snowflakeVpcConfiguration.internalValue;
  }
}
export interface SplunkConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class SplunkConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SplunkConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SplunkConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface SplunkConfigurationProcessingConfigurationProcessorsParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name TfDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value TfDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}
export class SplunkConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SplunkConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SplunkConfigurationProcessingConfigurationProcessorsParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class SplunkConfigurationProcessingConfigurationProcessorsParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : SplunkConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): SplunkConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference {
    return new SplunkConfigurationProcessingConfigurationProcessorsParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SplunkConfigurationProcessingConfigurationProcessorsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#type TfDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#parameters TfDeliveryStream#parameters}
  */
  readonly parameters?: SplunkConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable;
}
export class SplunkConfigurationProcessingConfigurationProcessorsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SplunkConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SplunkConfigurationProcessingConfigurationProcessorsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SplunkConfigurationProcessingConfigurationProcessorsParametersPropertyList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SplunkConfigurationProcessingConfigurationProcessorsParametersProperty[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class SplunkConfigurationProcessingConfigurationProcessorsPropertyList extends cdktn.ComplexList {
  public internalValue? : SplunkConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable

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
  public get(index: number): SplunkConfigurationProcessingConfigurationProcessorsPropertyOutputReference {
    return new SplunkConfigurationProcessingConfigurationProcessorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SplunkConfigurationProcessingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processors TfDeliveryStream#processors}
  */
  readonly processors?: SplunkConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable;
}
export class SplunkConfigurationProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SplunkConfigurationProcessingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SplunkConfigurationProcessingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._processors.internalValue = value.processors;
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

  // processors - computed: false, optional: true, required: false
  private _processors = new SplunkConfigurationProcessingConfigurationProcessorsPropertyList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: SplunkConfigurationProcessingConfigurationProcessorsProperty[] | cdktn.IResolvable) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name TfDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name TfDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}
export class SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }
}
export interface SplunkConfigurationS3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn TfDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#compression_format TfDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix TfDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn TfDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#prefix TfDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty;
}
export class SplunkConfigurationS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SplunkConfigurationS3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._compressionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFormat = this._compressionFormat;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SplunkConfigurationS3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._compressionFormat = undefined;
      this._errorOutputPrefix = undefined;
      this._kmsKeyArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._compressionFormat = value.compressionFormat;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._kmsKeyArn = value.kmsKeyArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: SplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }
}
export interface SplunkConfigurationSecretsManagerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#enabled TfDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#role_arn TfDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn TfDeliveryStream#secret_arn}
  */
  readonly secretArn?: string;
}
export class SplunkConfigurationSecretsManagerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SplunkConfigurationSecretsManagerConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SplunkConfigurationSecretsManagerConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
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

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface SplunkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval TfDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size TfDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#hec_acknowledgment_timeout TfDeliveryStream#hec_acknowledgment_timeout}
  */
  readonly hecAcknowledgmentTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#hec_endpoint TfDeliveryStream#hec_endpoint}
  */
  readonly hecEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#hec_endpoint_type TfDeliveryStream#hec_endpoint_type}
  */
  readonly hecEndpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#hec_token TfDeliveryStream#hec_token}
  */
  readonly hecToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration TfDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode TfDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options TfDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: SplunkConfigurationCloudwatchLoggingOptionsProperty;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration TfDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: SplunkConfigurationProcessingConfigurationProperty;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration TfDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: SplunkConfigurationS3ConfigurationProperty;
  /**
  * secrets_manager_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration TfDeliveryStream#secrets_manager_configuration}
  */
  readonly secretsManagerConfiguration?: SplunkConfigurationSecretsManagerConfigurationProperty;
}
export class SplunkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SplunkConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingInterval = this._bufferingInterval;
    }
    if (this._bufferingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferingSize = this._bufferingSize;
    }
    if (this._hecAcknowledgmentTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecAcknowledgmentTimeout = this._hecAcknowledgmentTimeout;
    }
    if (this._hecEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecEndpoint = this._hecEndpoint;
    }
    if (this._hecEndpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecEndpointType = this._hecEndpointType;
    }
    if (this._hecToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecToken = this._hecToken;
    }
    if (this._retryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDuration = this._retryDuration;
    }
    if (this._s3BackupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupMode = this._s3BackupMode;
    }
    if (this._cloudwatchLoggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._secretsManagerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerConfiguration = this._secretsManagerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SplunkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferingInterval = undefined;
      this._bufferingSize = undefined;
      this._hecAcknowledgmentTimeout = undefined;
      this._hecEndpoint = undefined;
      this._hecEndpointType = undefined;
      this._hecToken = undefined;
      this._retryDuration = undefined;
      this._s3BackupMode = undefined;
      this._cloudwatchLoggingOptions.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._secretsManagerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferingInterval = value.bufferingInterval;
      this._bufferingSize = value.bufferingSize;
      this._hecAcknowledgmentTimeout = value.hecAcknowledgmentTimeout;
      this._hecEndpoint = value.hecEndpoint;
      this._hecEndpointType = value.hecEndpointType;
      this._hecToken = value.hecToken;
      this._retryDuration = value.retryDuration;
      this._s3BackupMode = value.s3BackupMode;
      this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._secretsManagerConfiguration.internalValue = value.secretsManagerConfiguration;
    }
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval;
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize;
  }

  // hec_acknowledgment_timeout - computed: false, optional: true, required: false
  private _hecAcknowledgmentTimeout?: number; 
  public get hecAcknowledgmentTimeout() {
    return this.getNumberAttribute('hec_acknowledgment_timeout');
  }
  public set hecAcknowledgmentTimeout(value: number) {
    this._hecAcknowledgmentTimeout = value;
  }
  public resetHecAcknowledgmentTimeout() {
    this._hecAcknowledgmentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecAcknowledgmentTimeoutInput() {
    return this._hecAcknowledgmentTimeout;
  }

  // hec_endpoint - computed: false, optional: false, required: true
  private _hecEndpoint?: string; 
  public get hecEndpoint() {
    return this.getStringAttribute('hec_endpoint');
  }
  public set hecEndpoint(value: string) {
    this._hecEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hecEndpointInput() {
    return this._hecEndpoint;
  }

  // hec_endpoint_type - computed: false, optional: true, required: false
  private _hecEndpointType?: string; 
  public get hecEndpointType() {
    return this.getStringAttribute('hec_endpoint_type');
  }
  public set hecEndpointType(value: string) {
    this._hecEndpointType = value;
  }
  public resetHecEndpointType() {
    this._hecEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecEndpointTypeInput() {
    return this._hecEndpointType;
  }

  // hec_token - computed: false, optional: true, required: false
  private _hecToken?: string; 
  public get hecToken() {
    return this.getStringAttribute('hec_token');
  }
  public set hecToken(value: string) {
    this._hecToken = value;
  }
  public resetHecToken() {
    this._hecToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecTokenInput() {
    return this._hecToken;
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration;
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode;
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new SplunkConfigurationCloudwatchLoggingOptionsPropertyOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: SplunkConfigurationCloudwatchLoggingOptionsProperty) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new SplunkConfigurationProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: SplunkConfigurationProcessingConfigurationProperty) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new SplunkConfigurationS3ConfigurationPropertyOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: SplunkConfigurationS3ConfigurationProperty) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // secrets_manager_configuration - computed: false, optional: true, required: false
  private _secretsManagerConfiguration = new SplunkConfigurationSecretsManagerConfigurationPropertyOutputReference(this, "secrets_manager_configuration");
  public get secretsManagerConfiguration() {
    return this._secretsManagerConfiguration;
  }
  public putSecretsManagerConfiguration(value: SplunkConfigurationSecretsManagerConfigurationProperty) {
    this._secretsManagerConfiguration.internalValue = value;
  }
  public resetSecretsManagerConfiguration() {
    this._secretsManagerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerConfigurationInput() {
    return this._secretsManagerConfiguration.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#create TfDeliveryStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#delete TfDeliveryStream#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_firehose_delivery_stream#update TfDeliveryStream#update}
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
