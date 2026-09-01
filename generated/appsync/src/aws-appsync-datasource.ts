// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAppsyncDatasourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#api_id AwsAppsyncDatasource#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#description AwsAppsyncDatasource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#id AwsAppsyncDatasource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#name AwsAppsyncDatasource#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#region AwsAppsyncDatasource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#service_role_arn AwsAppsyncDatasource#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#type AwsAppsyncDatasource#type}
  */
  readonly type: string;
  /**
  * dynamodb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#dynamodb_config AwsAppsyncDatasource#dynamodb_config}
  */
  readonly dynamodbConfig?: AwsAppsyncDatasource.DynamodbConfigProperty;
  /**
  * elasticsearch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#elasticsearch_config AwsAppsyncDatasource#elasticsearch_config}
  */
  readonly elasticsearchConfig?: AwsAppsyncDatasource.ElasticsearchConfigProperty;
  /**
  * event_bridge_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#event_bridge_config AwsAppsyncDatasource#event_bridge_config}
  */
  readonly eventBridgeConfig?: AwsAppsyncDatasource.EventBridgeConfigProperty;
  /**
  * http_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#http_config AwsAppsyncDatasource#http_config}
  */
  readonly httpConfig?: AwsAppsyncDatasource.HttpConfigProperty;
  /**
  * lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#lambda_config AwsAppsyncDatasource#lambda_config}
  */
  readonly lambdaConfig?: AwsAppsyncDatasource.LambdaConfigProperty;
  /**
  * opensearchservice_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#opensearchservice_config AwsAppsyncDatasource#opensearchservice_config}
  */
  readonly opensearchserviceConfig?: AwsAppsyncDatasource.OpensearchserviceConfigProperty;
  /**
  * relational_database_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#relational_database_config AwsAppsyncDatasource#relational_database_config}
  */
  readonly relationalDatabaseConfig?: AwsAppsyncDatasource.RelationalDatabaseConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource aws_appsync_datasource}
*/
export class AwsAppsyncDatasource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAppsyncDatasource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAppsyncDatasource to import
  * @param importFromId The id of the existing AwsAppsyncDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAppsyncDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource aws_appsync_datasource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAppsyncDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAppsyncDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_datasource',
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
    this._apiId = config.apiId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._serviceRoleArn = config.serviceRoleArn;
    this._type = config.type;
    this._dynamodbConfig.internalValue = config.dynamodbConfig;
    this._elasticsearchConfig.internalValue = config.elasticsearchConfig;
    this._eventBridgeConfig.internalValue = config.eventBridgeConfig;
    this._httpConfig.internalValue = config.httpConfig;
    this._lambdaConfig.internalValue = config.lambdaConfig;
    this._opensearchserviceConfig.internalValue = config.opensearchserviceConfig;
    this._relationalDatabaseConfig.internalValue = config.relationalDatabaseConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

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

  // service_role_arn - computed: false, optional: true, required: false
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
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

  // dynamodb_config - computed: false, optional: true, required: false
  private _dynamodbConfig = new AwsAppsyncDatasource.DynamodbConfigPropertyOutputReference(this, "dynamodb_config");
  public get dynamodbConfig() {
    return this._dynamodbConfig;
  }
  public putDynamodbConfig(value: AwsAppsyncDatasource.DynamodbConfigProperty) {
    this._dynamodbConfig.internalValue = value;
  }
  public resetDynamodbConfig() {
    this._dynamodbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbConfigInput() {
    return this._dynamodbConfig.internalValue;
  }

  // elasticsearch_config - computed: false, optional: true, required: false
  private _elasticsearchConfig = new AwsAppsyncDatasource.ElasticsearchConfigPropertyOutputReference(this, "elasticsearch_config");
  public get elasticsearchConfig() {
    return this._elasticsearchConfig;
  }
  public putElasticsearchConfig(value: AwsAppsyncDatasource.ElasticsearchConfigProperty) {
    this._elasticsearchConfig.internalValue = value;
  }
  public resetElasticsearchConfig() {
    this._elasticsearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConfigInput() {
    return this._elasticsearchConfig.internalValue;
  }

  // event_bridge_config - computed: false, optional: true, required: false
  private _eventBridgeConfig = new AwsAppsyncDatasource.EventBridgeConfigPropertyOutputReference(this, "event_bridge_config");
  public get eventBridgeConfig() {
    return this._eventBridgeConfig;
  }
  public putEventBridgeConfig(value: AwsAppsyncDatasource.EventBridgeConfigProperty) {
    this._eventBridgeConfig.internalValue = value;
  }
  public resetEventBridgeConfig() {
    this._eventBridgeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeConfigInput() {
    return this._eventBridgeConfig.internalValue;
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig = new AwsAppsyncDatasource.HttpConfigPropertyOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: AwsAppsyncDatasource.HttpConfigProperty) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig = new AwsAppsyncDatasource.LambdaConfigPropertyOutputReference(this, "lambda_config");
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: AwsAppsyncDatasource.LambdaConfigProperty) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }

  // opensearchservice_config - computed: false, optional: true, required: false
  private _opensearchserviceConfig = new AwsAppsyncDatasource.OpensearchserviceConfigPropertyOutputReference(this, "opensearchservice_config");
  public get opensearchserviceConfig() {
    return this._opensearchserviceConfig;
  }
  public putOpensearchserviceConfig(value: AwsAppsyncDatasource.OpensearchserviceConfigProperty) {
    this._opensearchserviceConfig.internalValue = value;
  }
  public resetOpensearchserviceConfig() {
    this._opensearchserviceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchserviceConfigInput() {
    return this._opensearchserviceConfig.internalValue;
  }

  // relational_database_config - computed: false, optional: true, required: false
  private _relationalDatabaseConfig = new AwsAppsyncDatasource.RelationalDatabaseConfigPropertyOutputReference(this, "relational_database_config");
  public get relationalDatabaseConfig() {
    return this._relationalDatabaseConfig;
  }
  public putRelationalDatabaseConfig(value: AwsAppsyncDatasource.RelationalDatabaseConfigProperty) {
    this._relationalDatabaseConfig.internalValue = value;
  }
  public resetRelationalDatabaseConfig() {
    this._relationalDatabaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationalDatabaseConfigInput() {
    return this._relationalDatabaseConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktn.stringToTerraform(this._apiId),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      service_role_arn: cdktn.stringToTerraform(this._serviceRoleArn),
      type: cdktn.stringToTerraform(this._type),
      dynamodb_config: awsAppsyncDatasourceDynamodbConfigPropertyToTerraform(this._dynamodbConfig.internalValue),
      elasticsearch_config: awsAppsyncDatasourceElasticsearchConfigPropertyToTerraform(this._elasticsearchConfig.internalValue),
      event_bridge_config: awsAppsyncDatasourceEventBridgeConfigPropertyToTerraform(this._eventBridgeConfig.internalValue),
      http_config: awsAppsyncDatasourceHttpConfigPropertyToTerraform(this._httpConfig.internalValue),
      lambda_config: awsAppsyncDatasourceLambdaConfigPropertyToTerraform(this._lambdaConfig.internalValue),
      opensearchservice_config: awsAppsyncDatasourceOpensearchserviceConfigPropertyToTerraform(this._opensearchserviceConfig.internalValue),
      relational_database_config: awsAppsyncDatasourceRelationalDatabaseConfigPropertyToTerraform(this._relationalDatabaseConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktn.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      service_role_arn: {
        value: cdktn.stringToHclTerraform(this._serviceRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamodb_config: {
        value: awsAppsyncDatasourceDynamodbConfigPropertyToHclTerraform(this._dynamodbConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncDatasource.DynamodbConfigPropertyList",
      },
      elasticsearch_config: {
        value: awsAppsyncDatasourceElasticsearchConfigPropertyToHclTerraform(this._elasticsearchConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncDatasource.ElasticsearchConfigPropertyList",
      },
      event_bridge_config: {
        value: awsAppsyncDatasourceEventBridgeConfigPropertyToHclTerraform(this._eventBridgeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncDatasource.EventBridgeConfigPropertyList",
      },
      http_config: {
        value: awsAppsyncDatasourceHttpConfigPropertyToHclTerraform(this._httpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncDatasource.HttpConfigPropertyList",
      },
      lambda_config: {
        value: awsAppsyncDatasourceLambdaConfigPropertyToHclTerraform(this._lambdaConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncDatasource.LambdaConfigPropertyList",
      },
      opensearchservice_config: {
        value: awsAppsyncDatasourceOpensearchserviceConfigPropertyToHclTerraform(this._opensearchserviceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncDatasource.OpensearchserviceConfigPropertyList",
      },
      relational_database_config: {
        value: awsAppsyncDatasourceRelationalDatabaseConfigPropertyToHclTerraform(this._relationalDatabaseConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncDatasource.RelationalDatabaseConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsAppsyncDatasourceDeltaSyncConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.DeltaSyncConfigPropertyOutputReference | AwsAppsyncDatasource.DeltaSyncConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_table_ttl: cdktn.numberToTerraform(struct!.baseTableTtl),
    delta_sync_table_name: cdktn.stringToTerraform(struct!.deltaSyncTableName),
    delta_sync_table_ttl: cdktn.numberToTerraform(struct!.deltaSyncTableTtl),
  }
}


export function awsAppsyncDatasourceDeltaSyncConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.DeltaSyncConfigPropertyOutputReference | AwsAppsyncDatasource.DeltaSyncConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_table_ttl: {
      value: cdktn.numberToHclTerraform(struct!.baseTableTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delta_sync_table_name: {
      value: cdktn.stringToHclTerraform(struct!.deltaSyncTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delta_sync_table_ttl: {
      value: cdktn.numberToHclTerraform(struct!.deltaSyncTableTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppsyncDatasourceDynamodbConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.DynamodbConfigPropertyOutputReference | AwsAppsyncDatasource.DynamodbConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    use_caller_credentials: cdktn.booleanToTerraform(struct!.useCallerCredentials),
    versioned: cdktn.booleanToTerraform(struct!.versioned),
    delta_sync_config: awsAppsyncDatasourceDeltaSyncConfigPropertyToTerraform(struct!.deltaSyncConfig),
  }
}


export function awsAppsyncDatasourceDynamodbConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.DynamodbConfigPropertyOutputReference | AwsAppsyncDatasource.DynamodbConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
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
    use_caller_credentials: {
      value: cdktn.booleanToHclTerraform(struct!.useCallerCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    versioned: {
      value: cdktn.booleanToHclTerraform(struct!.versioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delta_sync_config: {
      value: awsAppsyncDatasourceDeltaSyncConfigPropertyToHclTerraform(struct!.deltaSyncConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeltaSyncConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppsyncDatasourceElasticsearchConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.ElasticsearchConfigPropertyOutputReference | AwsAppsyncDatasource.ElasticsearchConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsAppsyncDatasourceElasticsearchConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.ElasticsearchConfigPropertyOutputReference | AwsAppsyncDatasource.ElasticsearchConfigProperty): any {
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
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppsyncDatasourceEventBridgeConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.EventBridgeConfigPropertyOutputReference | AwsAppsyncDatasource.EventBridgeConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_bus_arn: cdktn.stringToTerraform(struct!.eventBusArn),
  }
}


export function awsAppsyncDatasourceEventBridgeConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.EventBridgeConfigPropertyOutputReference | AwsAppsyncDatasource.EventBridgeConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_bus_arn: {
      value: cdktn.stringToHclTerraform(struct!.eventBusArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppsyncDatasourceAwsIamConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.AwsIamConfigPropertyOutputReference | AwsAppsyncDatasource.AwsIamConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    signing_region: cdktn.stringToTerraform(struct!.signingRegion),
    signing_service_name: cdktn.stringToTerraform(struct!.signingServiceName),
  }
}


export function awsAppsyncDatasourceAwsIamConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.AwsIamConfigPropertyOutputReference | AwsAppsyncDatasource.AwsIamConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    signing_region: {
      value: cdktn.stringToHclTerraform(struct!.signingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_service_name: {
      value: cdktn.stringToHclTerraform(struct!.signingServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppsyncDatasourceAuthorizationConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.AuthorizationConfigPropertyOutputReference | AwsAppsyncDatasource.AuthorizationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_type: cdktn.stringToTerraform(struct!.authorizationType),
    aws_iam_config: awsAppsyncDatasourceAwsIamConfigPropertyToTerraform(struct!.awsIamConfig),
  }
}


export function awsAppsyncDatasourceAuthorizationConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.AuthorizationConfigPropertyOutputReference | AwsAppsyncDatasource.AuthorizationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_type: {
      value: cdktn.stringToHclTerraform(struct!.authorizationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_iam_config: {
      value: awsAppsyncDatasourceAwsIamConfigPropertyToHclTerraform(struct!.awsIamConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AwsIamConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppsyncDatasourceHttpConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.HttpConfigPropertyOutputReference | AwsAppsyncDatasource.HttpConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    authorization_config: awsAppsyncDatasourceAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
  }
}


export function awsAppsyncDatasourceHttpConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.HttpConfigPropertyOutputReference | AwsAppsyncDatasource.HttpConfigProperty): any {
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
    authorization_config: {
      value: awsAppsyncDatasourceAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AuthorizationConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppsyncDatasourceLambdaConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.LambdaConfigPropertyOutputReference | AwsAppsyncDatasource.LambdaConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function awsAppsyncDatasourceLambdaConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.LambdaConfigPropertyOutputReference | AwsAppsyncDatasource.LambdaConfigProperty): any {
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


export function awsAppsyncDatasourceOpensearchserviceConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.OpensearchserviceConfigPropertyOutputReference | AwsAppsyncDatasource.OpensearchserviceConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsAppsyncDatasourceOpensearchserviceConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.OpensearchserviceConfigPropertyOutputReference | AwsAppsyncDatasource.OpensearchserviceConfigProperty): any {
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
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppsyncDatasourceHttpEndpointConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.HttpEndpointConfigPropertyOutputReference | AwsAppsyncDatasource.HttpEndpointConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_secret_store_arn: cdktn.stringToTerraform(struct!.awsSecretStoreArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    db_cluster_identifier: cdktn.stringToTerraform(struct!.dbClusterIdentifier),
    region: cdktn.stringToTerraform(struct!.region),
    schema: cdktn.stringToTerraform(struct!.schema),
  }
}


export function awsAppsyncDatasourceHttpEndpointConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.HttpEndpointConfigPropertyOutputReference | AwsAppsyncDatasource.HttpEndpointConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_secret_store_arn: {
      value: cdktn.stringToHclTerraform(struct!.awsSecretStoreArn),
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
    db_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.dbClusterIdentifier),
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
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAppsyncDatasourceRelationalDatabaseConfigPropertyToTerraform(struct?: AwsAppsyncDatasource.RelationalDatabaseConfigPropertyOutputReference | AwsAppsyncDatasource.RelationalDatabaseConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_type: cdktn.stringToTerraform(struct!.sourceType),
    http_endpoint_config: awsAppsyncDatasourceHttpEndpointConfigPropertyToTerraform(struct!.httpEndpointConfig),
  }
}


export function awsAppsyncDatasourceRelationalDatabaseConfigPropertyToHclTerraform(struct?: AwsAppsyncDatasource.RelationalDatabaseConfigPropertyOutputReference | AwsAppsyncDatasource.RelationalDatabaseConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_endpoint_config: {
      value: awsAppsyncDatasourceHttpEndpointConfigPropertyToHclTerraform(struct!.httpEndpointConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpEndpointConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAppsyncDatasource {
export interface DeltaSyncConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#base_table_ttl AwsAppsyncDatasource#base_table_ttl}
  */
  readonly baseTableTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#delta_sync_table_name AwsAppsyncDatasource#delta_sync_table_name}
  */
  readonly deltaSyncTableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#delta_sync_table_ttl AwsAppsyncDatasource#delta_sync_table_ttl}
  */
  readonly deltaSyncTableTtl?: number;
}
export class DeltaSyncConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeltaSyncConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseTableTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseTableTtl = this._baseTableTtl;
    }
    if (this._deltaSyncTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaSyncTableName = this._deltaSyncTableName;
    }
    if (this._deltaSyncTableTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaSyncTableTtl = this._deltaSyncTableTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeltaSyncConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseTableTtl = undefined;
      this._deltaSyncTableName = undefined;
      this._deltaSyncTableTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseTableTtl = value.baseTableTtl;
      this._deltaSyncTableName = value.deltaSyncTableName;
      this._deltaSyncTableTtl = value.deltaSyncTableTtl;
    }
  }

  // base_table_ttl - computed: false, optional: true, required: false
  private _baseTableTtl?: number; 
  public get baseTableTtl() {
    return this.getNumberAttribute('base_table_ttl');
  }
  public set baseTableTtl(value: number) {
    this._baseTableTtl = value;
  }
  public resetBaseTableTtl() {
    this._baseTableTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseTableTtlInput() {
    return this._baseTableTtl;
  }

  // delta_sync_table_name - computed: false, optional: false, required: true
  private _deltaSyncTableName?: string; 
  public get deltaSyncTableName() {
    return this.getStringAttribute('delta_sync_table_name');
  }
  public set deltaSyncTableName(value: string) {
    this._deltaSyncTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSyncTableNameInput() {
    return this._deltaSyncTableName;
  }

  // delta_sync_table_ttl - computed: false, optional: true, required: false
  private _deltaSyncTableTtl?: number; 
  public get deltaSyncTableTtl() {
    return this.getNumberAttribute('delta_sync_table_ttl');
  }
  public set deltaSyncTableTtl(value: number) {
    this._deltaSyncTableTtl = value;
  }
  public resetDeltaSyncTableTtl() {
    this._deltaSyncTableTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSyncTableTtlInput() {
    return this._deltaSyncTableTtl;
  }
}
export interface DynamodbConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#region AwsAppsyncDatasource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#table_name AwsAppsyncDatasource#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#use_caller_credentials AwsAppsyncDatasource#use_caller_credentials}
  */
  readonly useCallerCredentials?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#versioned AwsAppsyncDatasource#versioned}
  */
  readonly versioned?: boolean | cdktn.IResolvable;
  /**
  * delta_sync_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#delta_sync_config AwsAppsyncDatasource#delta_sync_config}
  */
  readonly deltaSyncConfig?: DeltaSyncConfigProperty;
}
export class DynamodbConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynamodbConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._useCallerCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCallerCredentials = this._useCallerCredentials;
    }
    if (this._versioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.versioned = this._versioned;
    }
    if (this._deltaSyncConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaSyncConfig = this._deltaSyncConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._tableName = undefined;
      this._useCallerCredentials = undefined;
      this._versioned = undefined;
      this._deltaSyncConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._tableName = value.tableName;
      this._useCallerCredentials = value.useCallerCredentials;
      this._versioned = value.versioned;
      this._deltaSyncConfig.internalValue = value.deltaSyncConfig;
    }
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

  // use_caller_credentials - computed: false, optional: true, required: false
  private _useCallerCredentials?: boolean | cdktn.IResolvable; 
  public get useCallerCredentials() {
    return this.getBooleanAttribute('use_caller_credentials');
  }
  public set useCallerCredentials(value: boolean | cdktn.IResolvable) {
    this._useCallerCredentials = value;
  }
  public resetUseCallerCredentials() {
    this._useCallerCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCallerCredentialsInput() {
    return this._useCallerCredentials;
  }

  // versioned - computed: false, optional: true, required: false
  private _versioned?: boolean | cdktn.IResolvable; 
  public get versioned() {
    return this.getBooleanAttribute('versioned');
  }
  public set versioned(value: boolean | cdktn.IResolvable) {
    this._versioned = value;
  }
  public resetVersioned() {
    this._versioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionedInput() {
    return this._versioned;
  }

  // delta_sync_config - computed: false, optional: true, required: false
  private _deltaSyncConfig = new DeltaSyncConfigPropertyOutputReference(this, "delta_sync_config");
  public get deltaSyncConfig() {
    return this._deltaSyncConfig;
  }
  public putDeltaSyncConfig(value: DeltaSyncConfigProperty) {
    this._deltaSyncConfig.internalValue = value;
  }
  public resetDeltaSyncConfig() {
    this._deltaSyncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSyncConfigInput() {
    return this._deltaSyncConfig.internalValue;
  }
}
export interface ElasticsearchConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#endpoint AwsAppsyncDatasource#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#region AwsAppsyncDatasource#region}
  */
  readonly region?: string;
}
export class ElasticsearchConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._region = value.region;
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
}
export interface EventBridgeConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#event_bus_arn AwsAppsyncDatasource#event_bus_arn}
  */
  readonly eventBusArn: string;
}
export class EventBridgeConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventBridgeConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventBusArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBusArn = this._eventBusArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBridgeConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventBusArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventBusArn = value.eventBusArn;
    }
  }

  // event_bus_arn - computed: false, optional: false, required: true
  private _eventBusArn?: string; 
  public get eventBusArn() {
    return this.getStringAttribute('event_bus_arn');
  }
  public set eventBusArn(value: string) {
    this._eventBusArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusArnInput() {
    return this._eventBusArn;
  }
}
export interface AwsIamConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#signing_region AwsAppsyncDatasource#signing_region}
  */
  readonly signingRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#signing_service_name AwsAppsyncDatasource#signing_service_name}
  */
  readonly signingServiceName?: string;
}
export class AwsIamConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsIamConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRegion = this._signingRegion;
    }
    if (this._signingServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingServiceName = this._signingServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsIamConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signingRegion = undefined;
      this._signingServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signingRegion = value.signingRegion;
      this._signingServiceName = value.signingServiceName;
    }
  }

  // signing_region - computed: false, optional: true, required: false
  private _signingRegion?: string; 
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
  public set signingRegion(value: string) {
    this._signingRegion = value;
  }
  public resetSigningRegion() {
    this._signingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRegionInput() {
    return this._signingRegion;
  }

  // signing_service_name - computed: false, optional: true, required: false
  private _signingServiceName?: string; 
  public get signingServiceName() {
    return this.getStringAttribute('signing_service_name');
  }
  public set signingServiceName(value: string) {
    this._signingServiceName = value;
  }
  public resetSigningServiceName() {
    this._signingServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingServiceNameInput() {
    return this._signingServiceName;
  }
}
export interface AuthorizationConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#authorization_type AwsAppsyncDatasource#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * aws_iam_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#aws_iam_config AwsAppsyncDatasource#aws_iam_config}
  */
  readonly awsIamConfig?: AwsIamConfigProperty;
}
export class AuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthorizationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationType = this._authorizationType;
    }
    if (this._awsIamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamConfig = this._awsIamConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationType = undefined;
      this._awsIamConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationType = value.authorizationType;
      this._awsIamConfig.internalValue = value.awsIamConfig;
    }
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // aws_iam_config - computed: false, optional: true, required: false
  private _awsIamConfig = new AwsIamConfigPropertyOutputReference(this, "aws_iam_config");
  public get awsIamConfig() {
    return this._awsIamConfig;
  }
  public putAwsIamConfig(value: AwsIamConfigProperty) {
    this._awsIamConfig.internalValue = value;
  }
  public resetAwsIamConfig() {
    this._awsIamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamConfigInput() {
    return this._awsIamConfig.internalValue;
  }
}
export interface HttpConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#endpoint AwsAppsyncDatasource#endpoint}
  */
  readonly endpoint: string;
  /**
  * authorization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#authorization_config AwsAppsyncDatasource#authorization_config}
  */
  readonly authorizationConfig?: AuthorizationConfigProperty;
}
export class HttpConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._authorizationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._authorizationConfig.internalValue = value.authorizationConfig;
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

  // authorization_config - computed: false, optional: true, required: false
  private _authorizationConfig = new AuthorizationConfigPropertyOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: AuthorizationConfigProperty) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
  }
}
export interface LambdaConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#function_arn AwsAppsyncDatasource#function_arn}
  */
  readonly functionArn: string;
}
export class LambdaConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaConfigProperty | undefined) {
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
export interface OpensearchserviceConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#endpoint AwsAppsyncDatasource#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#region AwsAppsyncDatasource#region}
  */
  readonly region?: string;
}
export class OpensearchserviceConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchserviceConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._region = value.region;
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
}
export interface HttpEndpointConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#aws_secret_store_arn AwsAppsyncDatasource#aws_secret_store_arn}
  */
  readonly awsSecretStoreArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#database_name AwsAppsyncDatasource#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#db_cluster_identifier AwsAppsyncDatasource#db_cluster_identifier}
  */
  readonly dbClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#region AwsAppsyncDatasource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#schema AwsAppsyncDatasource#schema}
  */
  readonly schema?: string;
}
export class HttpEndpointConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpEndpointConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsSecretStoreArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretStoreArn = this._awsSecretStoreArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dbClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterIdentifier = this._dbClusterIdentifier;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpEndpointConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsSecretStoreArn = undefined;
      this._databaseName = undefined;
      this._dbClusterIdentifier = undefined;
      this._region = undefined;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsSecretStoreArn = value.awsSecretStoreArn;
      this._databaseName = value.databaseName;
      this._dbClusterIdentifier = value.dbClusterIdentifier;
      this._region = value.region;
      this._schema = value.schema;
    }
  }

  // aws_secret_store_arn - computed: false, optional: false, required: true
  private _awsSecretStoreArn?: string; 
  public get awsSecretStoreArn() {
    return this.getStringAttribute('aws_secret_store_arn');
  }
  public set awsSecretStoreArn(value: string) {
    this._awsSecretStoreArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretStoreArnInput() {
    return this._awsSecretStoreArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // db_cluster_identifier - computed: false, optional: false, required: true
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
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

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}
export interface RelationalDatabaseConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#source_type AwsAppsyncDatasource#source_type}
  */
  readonly sourceType?: string;
  /**
  * http_endpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_datasource#http_endpoint_config AwsAppsyncDatasource#http_endpoint_config}
  */
  readonly httpEndpointConfig?: HttpEndpointConfigProperty;
}
export class RelationalDatabaseConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RelationalDatabaseConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._httpEndpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpointConfig = this._httpEndpointConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelationalDatabaseConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceType = undefined;
      this._httpEndpointConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceType = value.sourceType;
      this._httpEndpointConfig.internalValue = value.httpEndpointConfig;
    }
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // http_endpoint_config - computed: false, optional: true, required: false
  private _httpEndpointConfig = new HttpEndpointConfigPropertyOutputReference(this, "http_endpoint_config");
  public get httpEndpointConfig() {
    return this._httpEndpointConfig;
  }
  public putHttpEndpointConfig(value: HttpEndpointConfigProperty) {
    this._httpEndpointConfig.internalValue = value;
  }
  public resetHttpEndpointConfig() {
    this._httpEndpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointConfigInput() {
    return this._httpEndpointConfig.internalValue;
  }
}
}
