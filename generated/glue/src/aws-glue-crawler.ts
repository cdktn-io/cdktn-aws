// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsGlueCrawlerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#classifiers AwsGlueCrawler#classifiers}
  */
  readonly classifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#configuration AwsGlueCrawler#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#database_name AwsGlueCrawler#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#description AwsGlueCrawler#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#id AwsGlueCrawler#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#name AwsGlueCrawler#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#region AwsGlueCrawler#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#role AwsGlueCrawler#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#schedule AwsGlueCrawler#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#security_configuration AwsGlueCrawler#security_configuration}
  */
  readonly securityConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#table_prefix AwsGlueCrawler#table_prefix}
  */
  readonly tablePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#tags AwsGlueCrawler#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#tags_all AwsGlueCrawler#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * catalog_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#catalog_target AwsGlueCrawler#catalog_target}
  */
  readonly catalogTarget?: AwsGlueCrawler.CatalogTargetProperty[] | cdktn.IResolvable;
  /**
  * delta_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#delta_target AwsGlueCrawler#delta_target}
  */
  readonly deltaTarget?: AwsGlueCrawler.DeltaTargetProperty[] | cdktn.IResolvable;
  /**
  * dynamodb_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#dynamodb_target AwsGlueCrawler#dynamodb_target}
  */
  readonly dynamodbTarget?: AwsGlueCrawler.DynamodbTargetProperty[] | cdktn.IResolvable;
  /**
  * hudi_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#hudi_target AwsGlueCrawler#hudi_target}
  */
  readonly hudiTarget?: AwsGlueCrawler.HudiTargetProperty[] | cdktn.IResolvable;
  /**
  * iceberg_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#iceberg_target AwsGlueCrawler#iceberg_target}
  */
  readonly icebergTarget?: AwsGlueCrawler.IcebergTargetProperty[] | cdktn.IResolvable;
  /**
  * jdbc_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#jdbc_target AwsGlueCrawler#jdbc_target}
  */
  readonly jdbcTarget?: AwsGlueCrawler.JdbcTargetProperty[] | cdktn.IResolvable;
  /**
  * lake_formation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#lake_formation_configuration AwsGlueCrawler#lake_formation_configuration}
  */
  readonly lakeFormationConfiguration?: AwsGlueCrawler.LakeFormationConfigurationProperty;
  /**
  * lineage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#lineage_configuration AwsGlueCrawler#lineage_configuration}
  */
  readonly lineageConfiguration?: AwsGlueCrawler.LineageConfigurationProperty;
  /**
  * mongodb_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#mongodb_target AwsGlueCrawler#mongodb_target}
  */
  readonly mongodbTarget?: AwsGlueCrawler.MongodbTargetProperty[] | cdktn.IResolvable;
  /**
  * recrawl_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#recrawl_policy AwsGlueCrawler#recrawl_policy}
  */
  readonly recrawlPolicy?: AwsGlueCrawler.RecrawlPolicyProperty;
  /**
  * s3_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#s3_target AwsGlueCrawler#s3_target}
  */
  readonly s3Target?: AwsGlueCrawler.S3TargetProperty[] | cdktn.IResolvable;
  /**
  * schema_change_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#schema_change_policy AwsGlueCrawler#schema_change_policy}
  */
  readonly schemaChangePolicy?: AwsGlueCrawler.SchemaChangePolicyProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler aws_glue_crawler}
*/
export class AwsGlueCrawler extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_crawler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsGlueCrawler resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsGlueCrawler to import
  * @param importFromId The id of the existing AwsGlueCrawler that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsGlueCrawler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_crawler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler aws_glue_crawler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsGlueCrawlerConfig
  */
  public constructor(scope: Construct, id: string, config: AwsGlueCrawlerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_crawler',
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
    this._classifiers = config.classifiers;
    this._configuration = config.configuration;
    this._databaseName = config.databaseName;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._role = config.role;
    this._schedule = config.schedule;
    this._securityConfiguration = config.securityConfiguration;
    this._tablePrefix = config.tablePrefix;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._catalogTarget.internalValue = config.catalogTarget;
    this._deltaTarget.internalValue = config.deltaTarget;
    this._dynamodbTarget.internalValue = config.dynamodbTarget;
    this._hudiTarget.internalValue = config.hudiTarget;
    this._icebergTarget.internalValue = config.icebergTarget;
    this._jdbcTarget.internalValue = config.jdbcTarget;
    this._lakeFormationConfiguration.internalValue = config.lakeFormationConfiguration;
    this._lineageConfiguration.internalValue = config.lineageConfiguration;
    this._mongodbTarget.internalValue = config.mongodbTarget;
    this._recrawlPolicy.internalValue = config.recrawlPolicy;
    this._s3Target.internalValue = config.s3Target;
    this._schemaChangePolicy.internalValue = config.schemaChangePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // classifiers - computed: false, optional: true, required: false
  private _classifiers?: string[]; 
  public get classifiers() {
    return this.getListAttribute('classifiers');
  }
  public set classifiers(value: string[]) {
    this._classifiers = value;
  }
  public resetClassifiers() {
    this._classifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifiersInput() {
    return this._classifiers;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string; 
  public get securityConfiguration() {
    return this.getStringAttribute('security_configuration');
  }
  public set securityConfiguration(value: string) {
    this._securityConfiguration = value;
  }
  public resetSecurityConfiguration() {
    this._securityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigurationInput() {
    return this._securityConfiguration;
  }

  // table_prefix - computed: false, optional: true, required: false
  private _tablePrefix?: string; 
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string) {
    this._tablePrefix = value;
  }
  public resetTablePrefix() {
    this._tablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrefixInput() {
    return this._tablePrefix;
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

  // catalog_target - computed: false, optional: true, required: false
  private _catalogTarget = new AwsGlueCrawler.CatalogTargetPropertyList(this, "catalog_target", false);
  public get catalogTarget() {
    return this._catalogTarget;
  }
  public putCatalogTarget(value: AwsGlueCrawler.CatalogTargetProperty[] | cdktn.IResolvable) {
    this._catalogTarget.internalValue = value;
  }
  public resetCatalogTarget() {
    this._catalogTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTargetInput() {
    return this._catalogTarget.internalValue;
  }

  // delta_target - computed: false, optional: true, required: false
  private _deltaTarget = new AwsGlueCrawler.DeltaTargetPropertyList(this, "delta_target", false);
  public get deltaTarget() {
    return this._deltaTarget;
  }
  public putDeltaTarget(value: AwsGlueCrawler.DeltaTargetProperty[] | cdktn.IResolvable) {
    this._deltaTarget.internalValue = value;
  }
  public resetDeltaTarget() {
    this._deltaTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTargetInput() {
    return this._deltaTarget.internalValue;
  }

  // dynamodb_target - computed: false, optional: true, required: false
  private _dynamodbTarget = new AwsGlueCrawler.DynamodbTargetPropertyList(this, "dynamodb_target", false);
  public get dynamodbTarget() {
    return this._dynamodbTarget;
  }
  public putDynamodbTarget(value: AwsGlueCrawler.DynamodbTargetProperty[] | cdktn.IResolvable) {
    this._dynamodbTarget.internalValue = value;
  }
  public resetDynamodbTarget() {
    this._dynamodbTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbTargetInput() {
    return this._dynamodbTarget.internalValue;
  }

  // hudi_target - computed: false, optional: true, required: false
  private _hudiTarget = new AwsGlueCrawler.HudiTargetPropertyList(this, "hudi_target", false);
  public get hudiTarget() {
    return this._hudiTarget;
  }
  public putHudiTarget(value: AwsGlueCrawler.HudiTargetProperty[] | cdktn.IResolvable) {
    this._hudiTarget.internalValue = value;
  }
  public resetHudiTarget() {
    this._hudiTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hudiTargetInput() {
    return this._hudiTarget.internalValue;
  }

  // iceberg_target - computed: false, optional: true, required: false
  private _icebergTarget = new AwsGlueCrawler.IcebergTargetPropertyList(this, "iceberg_target", false);
  public get icebergTarget() {
    return this._icebergTarget;
  }
  public putIcebergTarget(value: AwsGlueCrawler.IcebergTargetProperty[] | cdktn.IResolvable) {
    this._icebergTarget.internalValue = value;
  }
  public resetIcebergTarget() {
    this._icebergTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergTargetInput() {
    return this._icebergTarget.internalValue;
  }

  // jdbc_target - computed: false, optional: true, required: false
  private _jdbcTarget = new AwsGlueCrawler.JdbcTargetPropertyList(this, "jdbc_target", false);
  public get jdbcTarget() {
    return this._jdbcTarget;
  }
  public putJdbcTarget(value: AwsGlueCrawler.JdbcTargetProperty[] | cdktn.IResolvable) {
    this._jdbcTarget.internalValue = value;
  }
  public resetJdbcTarget() {
    this._jdbcTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcTargetInput() {
    return this._jdbcTarget.internalValue;
  }

  // lake_formation_configuration - computed: false, optional: true, required: false
  private _lakeFormationConfiguration = new AwsGlueCrawler.LakeFormationConfigurationPropertyOutputReference(this, "lake_formation_configuration");
  public get lakeFormationConfiguration() {
    return this._lakeFormationConfiguration;
  }
  public putLakeFormationConfiguration(value: AwsGlueCrawler.LakeFormationConfigurationProperty) {
    this._lakeFormationConfiguration.internalValue = value;
  }
  public resetLakeFormationConfiguration() {
    this._lakeFormationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeFormationConfigurationInput() {
    return this._lakeFormationConfiguration.internalValue;
  }

  // lineage_configuration - computed: false, optional: true, required: false
  private _lineageConfiguration = new AwsGlueCrawler.LineageConfigurationPropertyOutputReference(this, "lineage_configuration");
  public get lineageConfiguration() {
    return this._lineageConfiguration;
  }
  public putLineageConfiguration(value: AwsGlueCrawler.LineageConfigurationProperty) {
    this._lineageConfiguration.internalValue = value;
  }
  public resetLineageConfiguration() {
    this._lineageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineageConfigurationInput() {
    return this._lineageConfiguration.internalValue;
  }

  // mongodb_target - computed: false, optional: true, required: false
  private _mongodbTarget = new AwsGlueCrawler.MongodbTargetPropertyList(this, "mongodb_target", false);
  public get mongodbTarget() {
    return this._mongodbTarget;
  }
  public putMongodbTarget(value: AwsGlueCrawler.MongodbTargetProperty[] | cdktn.IResolvable) {
    this._mongodbTarget.internalValue = value;
  }
  public resetMongodbTarget() {
    this._mongodbTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbTargetInput() {
    return this._mongodbTarget.internalValue;
  }

  // recrawl_policy - computed: false, optional: true, required: false
  private _recrawlPolicy = new AwsGlueCrawler.RecrawlPolicyPropertyOutputReference(this, "recrawl_policy");
  public get recrawlPolicy() {
    return this._recrawlPolicy;
  }
  public putRecrawlPolicy(value: AwsGlueCrawler.RecrawlPolicyProperty) {
    this._recrawlPolicy.internalValue = value;
  }
  public resetRecrawlPolicy() {
    this._recrawlPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recrawlPolicyInput() {
    return this._recrawlPolicy.internalValue;
  }

  // s3_target - computed: false, optional: true, required: false
  private _s3Target = new AwsGlueCrawler.S3TargetPropertyList(this, "s3_target", false);
  public get s3Target() {
    return this._s3Target;
  }
  public putS3Target(value: AwsGlueCrawler.S3TargetProperty[] | cdktn.IResolvable) {
    this._s3Target.internalValue = value;
  }
  public resetS3Target() {
    this._s3Target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3TargetInput() {
    return this._s3Target.internalValue;
  }

  // schema_change_policy - computed: false, optional: true, required: false
  private _schemaChangePolicy = new AwsGlueCrawler.SchemaChangePolicyPropertyOutputReference(this, "schema_change_policy");
  public get schemaChangePolicy() {
    return this._schemaChangePolicy;
  }
  public putSchemaChangePolicy(value: AwsGlueCrawler.SchemaChangePolicyProperty) {
    this._schemaChangePolicy.internalValue = value;
  }
  public resetSchemaChangePolicy() {
    this._schemaChangePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaChangePolicyInput() {
    return this._schemaChangePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      classifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._classifiers),
      configuration: cdktn.stringToTerraform(this._configuration),
      database_name: cdktn.stringToTerraform(this._databaseName),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role: cdktn.stringToTerraform(this._role),
      schedule: cdktn.stringToTerraform(this._schedule),
      security_configuration: cdktn.stringToTerraform(this._securityConfiguration),
      table_prefix: cdktn.stringToTerraform(this._tablePrefix),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      catalog_target: cdktn.listMapper(awsGlueCrawlerCatalogTargetPropertyToTerraform, true)(this._catalogTarget.internalValue),
      delta_target: cdktn.listMapper(awsGlueCrawlerDeltaTargetPropertyToTerraform, true)(this._deltaTarget.internalValue),
      dynamodb_target: cdktn.listMapper(awsGlueCrawlerDynamodbTargetPropertyToTerraform, true)(this._dynamodbTarget.internalValue),
      hudi_target: cdktn.listMapper(awsGlueCrawlerHudiTargetPropertyToTerraform, true)(this._hudiTarget.internalValue),
      iceberg_target: cdktn.listMapper(awsGlueCrawlerIcebergTargetPropertyToTerraform, true)(this._icebergTarget.internalValue),
      jdbc_target: cdktn.listMapper(awsGlueCrawlerJdbcTargetPropertyToTerraform, true)(this._jdbcTarget.internalValue),
      lake_formation_configuration: awsGlueCrawlerLakeFormationConfigurationPropertyToTerraform(this._lakeFormationConfiguration.internalValue),
      lineage_configuration: awsGlueCrawlerLineageConfigurationPropertyToTerraform(this._lineageConfiguration.internalValue),
      mongodb_target: cdktn.listMapper(awsGlueCrawlerMongodbTargetPropertyToTerraform, true)(this._mongodbTarget.internalValue),
      recrawl_policy: awsGlueCrawlerRecrawlPolicyPropertyToTerraform(this._recrawlPolicy.internalValue),
      s3_target: cdktn.listMapper(awsGlueCrawlerS3TargetPropertyToTerraform, true)(this._s3Target.internalValue),
      schema_change_policy: awsGlueCrawlerSchemaChangePolicyPropertyToTerraform(this._schemaChangePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      classifiers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._classifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      configuration: {
        value: cdktn.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktn.stringToHclTerraform(this._databaseName),
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
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktn.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_configuration: {
        value: cdktn.stringToHclTerraform(this._securityConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_prefix: {
        value: cdktn.stringToHclTerraform(this._tablePrefix),
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
      catalog_target: {
        value: cdktn.listMapperHcl(awsGlueCrawlerCatalogTargetPropertyToHclTerraform, true)(this._catalogTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.CatalogTargetPropertyList",
      },
      delta_target: {
        value: cdktn.listMapperHcl(awsGlueCrawlerDeltaTargetPropertyToHclTerraform, true)(this._deltaTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.DeltaTargetPropertyList",
      },
      dynamodb_target: {
        value: cdktn.listMapperHcl(awsGlueCrawlerDynamodbTargetPropertyToHclTerraform, true)(this._dynamodbTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.DynamodbTargetPropertyList",
      },
      hudi_target: {
        value: cdktn.listMapperHcl(awsGlueCrawlerHudiTargetPropertyToHclTerraform, true)(this._hudiTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.HudiTargetPropertyList",
      },
      iceberg_target: {
        value: cdktn.listMapperHcl(awsGlueCrawlerIcebergTargetPropertyToHclTerraform, true)(this._icebergTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.IcebergTargetPropertyList",
      },
      jdbc_target: {
        value: cdktn.listMapperHcl(awsGlueCrawlerJdbcTargetPropertyToHclTerraform, true)(this._jdbcTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.JdbcTargetPropertyList",
      },
      lake_formation_configuration: {
        value: awsGlueCrawlerLakeFormationConfigurationPropertyToHclTerraform(this._lakeFormationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.LakeFormationConfigurationPropertyList",
      },
      lineage_configuration: {
        value: awsGlueCrawlerLineageConfigurationPropertyToHclTerraform(this._lineageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.LineageConfigurationPropertyList",
      },
      mongodb_target: {
        value: cdktn.listMapperHcl(awsGlueCrawlerMongodbTargetPropertyToHclTerraform, true)(this._mongodbTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.MongodbTargetPropertyList",
      },
      recrawl_policy: {
        value: awsGlueCrawlerRecrawlPolicyPropertyToHclTerraform(this._recrawlPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.RecrawlPolicyPropertyList",
      },
      s3_target: {
        value: cdktn.listMapperHcl(awsGlueCrawlerS3TargetPropertyToHclTerraform, true)(this._s3Target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.S3TargetPropertyList",
      },
      schema_change_policy: {
        value: awsGlueCrawlerSchemaChangePolicyPropertyToHclTerraform(this._schemaChangePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsGlueCrawler.SchemaChangePolicyPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsGlueCrawlerCatalogTargetPropertyToTerraform(struct?: AwsGlueCrawler.CatalogTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    dlq_event_queue_arn: cdktn.stringToTerraform(struct!.dlqEventQueueArn),
    event_queue_arn: cdktn.stringToTerraform(struct!.eventQueueArn),
    tables: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tables),
  }
}


export function awsGlueCrawlerCatalogTargetPropertyToHclTerraform(struct?: AwsGlueCrawler.CatalogTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
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
    dlq_event_queue_arn: {
      value: cdktn.stringToHclTerraform(struct!.dlqEventQueueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_queue_arn: {
      value: cdktn.stringToHclTerraform(struct!.eventQueueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerDeltaTargetPropertyToTerraform(struct?: AwsGlueCrawler.DeltaTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    create_native_delta_table: cdktn.booleanToTerraform(struct!.createNativeDeltaTable),
    delta_tables: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.deltaTables),
    write_manifest: cdktn.booleanToTerraform(struct!.writeManifest),
  }
}


export function awsGlueCrawlerDeltaTargetPropertyToHclTerraform(struct?: AwsGlueCrawler.DeltaTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_native_delta_table: {
      value: cdktn.booleanToHclTerraform(struct!.createNativeDeltaTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delta_tables: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.deltaTables),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    write_manifest: {
      value: cdktn.booleanToHclTerraform(struct!.writeManifest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerDynamodbTargetPropertyToTerraform(struct?: AwsGlueCrawler.DynamodbTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    scan_all: cdktn.booleanToTerraform(struct!.scanAll),
    scan_rate: cdktn.numberToTerraform(struct!.scanRate),
  }
}


export function awsGlueCrawlerDynamodbTargetPropertyToHclTerraform(struct?: AwsGlueCrawler.DynamodbTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_all: {
      value: cdktn.booleanToHclTerraform(struct!.scanAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scan_rate: {
      value: cdktn.numberToHclTerraform(struct!.scanRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerHudiTargetPropertyToTerraform(struct?: AwsGlueCrawler.HudiTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
    maximum_traversal_depth: cdktn.numberToTerraform(struct!.maximumTraversalDepth),
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
  }
}


export function awsGlueCrawlerHudiTargetPropertyToHclTerraform(struct?: AwsGlueCrawler.HudiTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_traversal_depth: {
      value: cdktn.numberToHclTerraform(struct!.maximumTraversalDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerIcebergTargetPropertyToTerraform(struct?: AwsGlueCrawler.IcebergTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
    maximum_traversal_depth: cdktn.numberToTerraform(struct!.maximumTraversalDepth),
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
  }
}


export function awsGlueCrawlerIcebergTargetPropertyToHclTerraform(struct?: AwsGlueCrawler.IcebergTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_traversal_depth: {
      value: cdktn.numberToHclTerraform(struct!.maximumTraversalDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerJdbcTargetPropertyToTerraform(struct?: AwsGlueCrawler.JdbcTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    enable_additional_metadata: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enableAdditionalMetadata),
    exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsGlueCrawlerJdbcTargetPropertyToHclTerraform(struct?: AwsGlueCrawler.JdbcTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_additional_metadata: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enableAdditionalMetadata),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclusions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerLakeFormationConfigurationPropertyToTerraform(struct?: AwsGlueCrawler.LakeFormationConfigurationPropertyOutputReference | AwsGlueCrawler.LakeFormationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    use_lake_formation_credentials: cdktn.booleanToTerraform(struct!.useLakeFormationCredentials),
  }
}


export function awsGlueCrawlerLakeFormationConfigurationPropertyToHclTerraform(struct?: AwsGlueCrawler.LakeFormationConfigurationPropertyOutputReference | AwsGlueCrawler.LakeFormationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_lake_formation_credentials: {
      value: cdktn.booleanToHclTerraform(struct!.useLakeFormationCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerLineageConfigurationPropertyToTerraform(struct?: AwsGlueCrawler.LineageConfigurationPropertyOutputReference | AwsGlueCrawler.LineageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_lineage_settings: cdktn.stringToTerraform(struct!.crawlerLineageSettings),
  }
}


export function awsGlueCrawlerLineageConfigurationPropertyToHclTerraform(struct?: AwsGlueCrawler.LineageConfigurationPropertyOutputReference | AwsGlueCrawler.LineageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_lineage_settings: {
      value: cdktn.stringToHclTerraform(struct!.crawlerLineageSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerMongodbTargetPropertyToTerraform(struct?: AwsGlueCrawler.MongodbTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    path: cdktn.stringToTerraform(struct!.path),
    scan_all: cdktn.booleanToTerraform(struct!.scanAll),
  }
}


export function awsGlueCrawlerMongodbTargetPropertyToHclTerraform(struct?: AwsGlueCrawler.MongodbTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_all: {
      value: cdktn.booleanToHclTerraform(struct!.scanAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerRecrawlPolicyPropertyToTerraform(struct?: AwsGlueCrawler.RecrawlPolicyPropertyOutputReference | AwsGlueCrawler.RecrawlPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recrawl_behavior: cdktn.stringToTerraform(struct!.recrawlBehavior),
  }
}


export function awsGlueCrawlerRecrawlPolicyPropertyToHclTerraform(struct?: AwsGlueCrawler.RecrawlPolicyPropertyOutputReference | AwsGlueCrawler.RecrawlPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    recrawl_behavior: {
      value: cdktn.stringToHclTerraform(struct!.recrawlBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerS3TargetPropertyToTerraform(struct?: AwsGlueCrawler.S3TargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    dlq_event_queue_arn: cdktn.stringToTerraform(struct!.dlqEventQueueArn),
    event_queue_arn: cdktn.stringToTerraform(struct!.eventQueueArn),
    exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
    path: cdktn.stringToTerraform(struct!.path),
    sample_size: cdktn.numberToTerraform(struct!.sampleSize),
  }
}


export function awsGlueCrawlerS3TargetPropertyToHclTerraform(struct?: AwsGlueCrawler.S3TargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlq_event_queue_arn: {
      value: cdktn.stringToHclTerraform(struct!.dlqEventQueueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_queue_arn: {
      value: cdktn.stringToHclTerraform(struct!.eventQueueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_size: {
      value: cdktn.numberToHclTerraform(struct!.sampleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsGlueCrawlerSchemaChangePolicyPropertyToTerraform(struct?: AwsGlueCrawler.SchemaChangePolicyPropertyOutputReference | AwsGlueCrawler.SchemaChangePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_behavior: cdktn.stringToTerraform(struct!.deleteBehavior),
    update_behavior: cdktn.stringToTerraform(struct!.updateBehavior),
  }
}


export function awsGlueCrawlerSchemaChangePolicyPropertyToHclTerraform(struct?: AwsGlueCrawler.SchemaChangePolicyPropertyOutputReference | AwsGlueCrawler.SchemaChangePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_behavior: {
      value: cdktn.stringToHclTerraform(struct!.deleteBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_behavior: {
      value: cdktn.stringToHclTerraform(struct!.updateBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsGlueCrawler {
export interface CatalogTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#connection_name AwsGlueCrawler#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#database_name AwsGlueCrawler#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#dlq_event_queue_arn AwsGlueCrawler#dlq_event_queue_arn}
  */
  readonly dlqEventQueueArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#event_queue_arn AwsGlueCrawler#event_queue_arn}
  */
  readonly eventQueueArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#tables AwsGlueCrawler#tables}
  */
  readonly tables: string[];
}
export class CatalogTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dlqEventQueueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlqEventQueueArn = this._dlqEventQueueArn;
    }
    if (this._eventQueueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventQueueArn = this._eventQueueArn;
    }
    if (this._tables !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._databaseName = undefined;
      this._dlqEventQueueArn = undefined;
      this._eventQueueArn = undefined;
      this._tables = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._databaseName = value.databaseName;
      this._dlqEventQueueArn = value.dlqEventQueueArn;
      this._eventQueueArn = value.eventQueueArn;
      this._tables = value.tables;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
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

  // dlq_event_queue_arn - computed: false, optional: true, required: false
  private _dlqEventQueueArn?: string; 
  public get dlqEventQueueArn() {
    return this.getStringAttribute('dlq_event_queue_arn');
  }
  public set dlqEventQueueArn(value: string) {
    this._dlqEventQueueArn = value;
  }
  public resetDlqEventQueueArn() {
    this._dlqEventQueueArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlqEventQueueArnInput() {
    return this._dlqEventQueueArn;
  }

  // event_queue_arn - computed: false, optional: true, required: false
  private _eventQueueArn?: string; 
  public get eventQueueArn() {
    return this.getStringAttribute('event_queue_arn');
  }
  public set eventQueueArn(value: string) {
    this._eventQueueArn = value;
  }
  public resetEventQueueArn() {
    this._eventQueueArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQueueArnInput() {
    return this._eventQueueArn;
  }

  // tables - computed: false, optional: false, required: true
  private _tables?: string[]; 
  public get tables() {
    return this.getListAttribute('tables');
  }
  public set tables(value: string[]) {
    this._tables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables;
  }
}

export class CatalogTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : CatalogTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): CatalogTargetPropertyOutputReference {
    return new CatalogTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeltaTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#connection_name AwsGlueCrawler#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#create_native_delta_table AwsGlueCrawler#create_native_delta_table}
  */
  readonly createNativeDeltaTable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#delta_tables AwsGlueCrawler#delta_tables}
  */
  readonly deltaTables: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#write_manifest AwsGlueCrawler#write_manifest}
  */
  readonly writeManifest: boolean | cdktn.IResolvable;
}
export class DeltaTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DeltaTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._createNativeDeltaTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNativeDeltaTable = this._createNativeDeltaTable;
    }
    if (this._deltaTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTables = this._deltaTables;
    }
    if (this._writeManifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeManifest = this._writeManifest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeltaTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._createNativeDeltaTable = undefined;
      this._deltaTables = undefined;
      this._writeManifest = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._createNativeDeltaTable = value.createNativeDeltaTable;
      this._deltaTables = value.deltaTables;
      this._writeManifest = value.writeManifest;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // create_native_delta_table - computed: false, optional: true, required: false
  private _createNativeDeltaTable?: boolean | cdktn.IResolvable; 
  public get createNativeDeltaTable() {
    return this.getBooleanAttribute('create_native_delta_table');
  }
  public set createNativeDeltaTable(value: boolean | cdktn.IResolvable) {
    this._createNativeDeltaTable = value;
  }
  public resetCreateNativeDeltaTable() {
    this._createNativeDeltaTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNativeDeltaTableInput() {
    return this._createNativeDeltaTable;
  }

  // delta_tables - computed: false, optional: false, required: true
  private _deltaTables?: string[]; 
  public get deltaTables() {
    return cdktn.Fn.tolist(this.getListAttribute('delta_tables'));
  }
  public set deltaTables(value: string[]) {
    this._deltaTables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTablesInput() {
    return this._deltaTables;
  }

  // write_manifest - computed: false, optional: false, required: true
  private _writeManifest?: boolean | cdktn.IResolvable; 
  public get writeManifest() {
    return this.getBooleanAttribute('write_manifest');
  }
  public set writeManifest(value: boolean | cdktn.IResolvable) {
    this._writeManifest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeManifestInput() {
    return this._writeManifest;
  }
}

export class DeltaTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : DeltaTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): DeltaTargetPropertyOutputReference {
    return new DeltaTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#path AwsGlueCrawler#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#scan_all AwsGlueCrawler#scan_all}
  */
  readonly scanAll?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#scan_rate AwsGlueCrawler#scan_rate}
  */
  readonly scanRate?: number;
}
export class DynamodbTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._scanAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanAll = this._scanAll;
    }
    if (this._scanRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanRate = this._scanRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._scanAll = undefined;
      this._scanRate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._scanAll = value.scanAll;
      this._scanRate = value.scanRate;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // scan_all - computed: false, optional: true, required: false
  private _scanAll?: boolean | cdktn.IResolvable; 
  public get scanAll() {
    return this.getBooleanAttribute('scan_all');
  }
  public set scanAll(value: boolean | cdktn.IResolvable) {
    this._scanAll = value;
  }
  public resetScanAll() {
    this._scanAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAllInput() {
    return this._scanAll;
  }

  // scan_rate - computed: false, optional: true, required: false
  private _scanRate?: number; 
  public get scanRate() {
    return this.getNumberAttribute('scan_rate');
  }
  public set scanRate(value: number) {
    this._scanRate = value;
  }
  public resetScanRate() {
    this._scanRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanRateInput() {
    return this._scanRate;
  }
}

export class DynamodbTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : DynamodbTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): DynamodbTargetPropertyOutputReference {
    return new DynamodbTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HudiTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#connection_name AwsGlueCrawler#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#exclusions AwsGlueCrawler#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#maximum_traversal_depth AwsGlueCrawler#maximum_traversal_depth}
  */
  readonly maximumTraversalDepth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#paths AwsGlueCrawler#paths}
  */
  readonly paths: string[];
}
export class HudiTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HudiTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._maximumTraversalDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTraversalDepth = this._maximumTraversalDepth;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HudiTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._exclusions = undefined;
      this._maximumTraversalDepth = undefined;
      this._paths = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._exclusions = value.exclusions;
      this._maximumTraversalDepth = value.maximumTraversalDepth;
      this._paths = value.paths;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // maximum_traversal_depth - computed: false, optional: false, required: true
  private _maximumTraversalDepth?: number; 
  public get maximumTraversalDepth() {
    return this.getNumberAttribute('maximum_traversal_depth');
  }
  public set maximumTraversalDepth(value: number) {
    this._maximumTraversalDepth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTraversalDepthInput() {
    return this._maximumTraversalDepth;
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktn.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}

export class HudiTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : HudiTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): HudiTargetPropertyOutputReference {
    return new HudiTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#connection_name AwsGlueCrawler#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#exclusions AwsGlueCrawler#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#maximum_traversal_depth AwsGlueCrawler#maximum_traversal_depth}
  */
  readonly maximumTraversalDepth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#paths AwsGlueCrawler#paths}
  */
  readonly paths: string[];
}
export class IcebergTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._maximumTraversalDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTraversalDepth = this._maximumTraversalDepth;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._exclusions = undefined;
      this._maximumTraversalDepth = undefined;
      this._paths = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._exclusions = value.exclusions;
      this._maximumTraversalDepth = value.maximumTraversalDepth;
      this._paths = value.paths;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // maximum_traversal_depth - computed: false, optional: false, required: true
  private _maximumTraversalDepth?: number; 
  public get maximumTraversalDepth() {
    return this.getNumberAttribute('maximum_traversal_depth');
  }
  public set maximumTraversalDepth(value: number) {
    this._maximumTraversalDepth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTraversalDepthInput() {
    return this._maximumTraversalDepth;
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktn.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}

export class IcebergTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : IcebergTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): IcebergTargetPropertyOutputReference {
    return new IcebergTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JdbcTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#connection_name AwsGlueCrawler#connection_name}
  */
  readonly connectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#enable_additional_metadata AwsGlueCrawler#enable_additional_metadata}
  */
  readonly enableAdditionalMetadata?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#exclusions AwsGlueCrawler#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#path AwsGlueCrawler#path}
  */
  readonly path: string;
}
export class JdbcTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JdbcTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._enableAdditionalMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAdditionalMetadata = this._enableAdditionalMetadata;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JdbcTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._enableAdditionalMetadata = undefined;
      this._exclusions = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._enableAdditionalMetadata = value.enableAdditionalMetadata;
      this._exclusions = value.exclusions;
      this._path = value.path;
    }
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // enable_additional_metadata - computed: false, optional: true, required: false
  private _enableAdditionalMetadata?: string[]; 
  public get enableAdditionalMetadata() {
    return this.getListAttribute('enable_additional_metadata');
  }
  public set enableAdditionalMetadata(value: string[]) {
    this._enableAdditionalMetadata = value;
  }
  public resetEnableAdditionalMetadata() {
    this._enableAdditionalMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdditionalMetadataInput() {
    return this._enableAdditionalMetadata;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class JdbcTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : JdbcTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): JdbcTargetPropertyOutputReference {
    return new JdbcTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeFormationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#account_id AwsGlueCrawler#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#use_lake_formation_credentials AwsGlueCrawler#use_lake_formation_credentials}
  */
  readonly useLakeFormationCredentials?: boolean | cdktn.IResolvable;
}
export class LakeFormationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakeFormationConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._useLakeFormationCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLakeFormationCredentials = this._useLakeFormationCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeFormationConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._useLakeFormationCredentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._useLakeFormationCredentials = value.useLakeFormationCredentials;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // use_lake_formation_credentials - computed: false, optional: true, required: false
  private _useLakeFormationCredentials?: boolean | cdktn.IResolvable; 
  public get useLakeFormationCredentials() {
    return this.getBooleanAttribute('use_lake_formation_credentials');
  }
  public set useLakeFormationCredentials(value: boolean | cdktn.IResolvable) {
    this._useLakeFormationCredentials = value;
  }
  public resetUseLakeFormationCredentials() {
    this._useLakeFormationCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLakeFormationCredentialsInput() {
    return this._useLakeFormationCredentials;
  }
}
export interface LineageConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#crawler_lineage_settings AwsGlueCrawler#crawler_lineage_settings}
  */
  readonly crawlerLineageSettings?: string;
}
export class LineageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LineageConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerLineageSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerLineageSettings = this._crawlerLineageSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LineageConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crawlerLineageSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crawlerLineageSettings = value.crawlerLineageSettings;
    }
  }

  // crawler_lineage_settings - computed: false, optional: true, required: false
  private _crawlerLineageSettings?: string; 
  public get crawlerLineageSettings() {
    return this.getStringAttribute('crawler_lineage_settings');
  }
  public set crawlerLineageSettings(value: string) {
    this._crawlerLineageSettings = value;
  }
  public resetCrawlerLineageSettings() {
    this._crawlerLineageSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerLineageSettingsInput() {
    return this._crawlerLineageSettings;
  }
}
export interface MongodbTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#connection_name AwsGlueCrawler#connection_name}
  */
  readonly connectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#path AwsGlueCrawler#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#scan_all AwsGlueCrawler#scan_all}
  */
  readonly scanAll?: boolean | cdktn.IResolvable;
}
export class MongodbTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MongodbTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._scanAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanAll = this._scanAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._path = undefined;
      this._scanAll = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._path = value.path;
      this._scanAll = value.scanAll;
    }
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // scan_all - computed: false, optional: true, required: false
  private _scanAll?: boolean | cdktn.IResolvable; 
  public get scanAll() {
    return this.getBooleanAttribute('scan_all');
  }
  public set scanAll(value: boolean | cdktn.IResolvable) {
    this._scanAll = value;
  }
  public resetScanAll() {
    this._scanAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAllInput() {
    return this._scanAll;
  }
}

export class MongodbTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : MongodbTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): MongodbTargetPropertyOutputReference {
    return new MongodbTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecrawlPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#recrawl_behavior AwsGlueCrawler#recrawl_behavior}
  */
  readonly recrawlBehavior?: string;
}
export class RecrawlPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecrawlPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recrawlBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.recrawlBehavior = this._recrawlBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecrawlPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recrawlBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recrawlBehavior = value.recrawlBehavior;
    }
  }

  // recrawl_behavior - computed: false, optional: true, required: false
  private _recrawlBehavior?: string; 
  public get recrawlBehavior() {
    return this.getStringAttribute('recrawl_behavior');
  }
  public set recrawlBehavior(value: string) {
    this._recrawlBehavior = value;
  }
  public resetRecrawlBehavior() {
    this._recrawlBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recrawlBehaviorInput() {
    return this._recrawlBehavior;
  }
}
export interface S3TargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#connection_name AwsGlueCrawler#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#dlq_event_queue_arn AwsGlueCrawler#dlq_event_queue_arn}
  */
  readonly dlqEventQueueArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#event_queue_arn AwsGlueCrawler#event_queue_arn}
  */
  readonly eventQueueArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#exclusions AwsGlueCrawler#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#path AwsGlueCrawler#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#sample_size AwsGlueCrawler#sample_size}
  */
  readonly sampleSize?: number;
}
export class S3TargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._dlqEventQueueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlqEventQueueArn = this._dlqEventQueueArn;
    }
    if (this._eventQueueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventQueueArn = this._eventQueueArn;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sampleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSize = this._sampleSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._dlqEventQueueArn = undefined;
      this._eventQueueArn = undefined;
      this._exclusions = undefined;
      this._path = undefined;
      this._sampleSize = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._dlqEventQueueArn = value.dlqEventQueueArn;
      this._eventQueueArn = value.eventQueueArn;
      this._exclusions = value.exclusions;
      this._path = value.path;
      this._sampleSize = value.sampleSize;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // dlq_event_queue_arn - computed: false, optional: true, required: false
  private _dlqEventQueueArn?: string; 
  public get dlqEventQueueArn() {
    return this.getStringAttribute('dlq_event_queue_arn');
  }
  public set dlqEventQueueArn(value: string) {
    this._dlqEventQueueArn = value;
  }
  public resetDlqEventQueueArn() {
    this._dlqEventQueueArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlqEventQueueArnInput() {
    return this._dlqEventQueueArn;
  }

  // event_queue_arn - computed: false, optional: true, required: false
  private _eventQueueArn?: string; 
  public get eventQueueArn() {
    return this.getStringAttribute('event_queue_arn');
  }
  public set eventQueueArn(value: string) {
    this._eventQueueArn = value;
  }
  public resetEventQueueArn() {
    this._eventQueueArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQueueArnInput() {
    return this._eventQueueArn;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // sample_size - computed: false, optional: true, required: false
  private _sampleSize?: number; 
  public get sampleSize() {
    return this.getNumberAttribute('sample_size');
  }
  public set sampleSize(value: number) {
    this._sampleSize = value;
  }
  public resetSampleSize() {
    this._sampleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSizeInput() {
    return this._sampleSize;
  }
}

export class S3TargetPropertyList extends cdktn.ComplexList {
  public internalValue? : S3TargetProperty[] | cdktn.IResolvable

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
  public get(index: number): S3TargetPropertyOutputReference {
    return new S3TargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchemaChangePolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#delete_behavior AwsGlueCrawler#delete_behavior}
  */
  readonly deleteBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_crawler#update_behavior AwsGlueCrawler#update_behavior}
  */
  readonly updateBehavior?: string;
}
export class SchemaChangePolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaChangePolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBehavior = this._deleteBehavior;
    }
    if (this._updateBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateBehavior = this._updateBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaChangePolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteBehavior = undefined;
      this._updateBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteBehavior = value.deleteBehavior;
      this._updateBehavior = value.updateBehavior;
    }
  }

  // delete_behavior - computed: false, optional: true, required: false
  private _deleteBehavior?: string; 
  public get deleteBehavior() {
    return this.getStringAttribute('delete_behavior');
  }
  public set deleteBehavior(value: string) {
    this._deleteBehavior = value;
  }
  public resetDeleteBehavior() {
    this._deleteBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBehaviorInput() {
    return this._deleteBehavior;
  }

  // update_behavior - computed: false, optional: true, required: false
  private _updateBehavior?: string; 
  public get updateBehavior() {
    return this.getStringAttribute('update_behavior');
  }
  public set updateBehavior(value: string) {
    this._updateBehavior = value;
  }
  public resetUpdateBehavior() {
    this._updateBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateBehaviorInput() {
    return this._updateBehavior;
  }
}
}
