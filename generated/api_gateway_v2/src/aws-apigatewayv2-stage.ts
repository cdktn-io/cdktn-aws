// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsApigatewayv2StageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#api_id AwsApigatewayv2Stage#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#auto_deploy AwsApigatewayv2Stage#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#client_certificate_id AwsApigatewayv2Stage#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#deployment_id AwsApigatewayv2Stage#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#description AwsApigatewayv2Stage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#id AwsApigatewayv2Stage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#name AwsApigatewayv2Stage#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#region AwsApigatewayv2Stage#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#stage_variables AwsApigatewayv2Stage#stage_variables}
  */
  readonly stageVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#tags AwsApigatewayv2Stage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#tags_all AwsApigatewayv2Stage#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * access_log_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#access_log_settings AwsApigatewayv2Stage#access_log_settings}
  */
  readonly accessLogSettings?: AwsApigatewayv2Stage.AccessLogSettingsProperty;
  /**
  * default_route_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#default_route_settings AwsApigatewayv2Stage#default_route_settings}
  */
  readonly defaultRouteSettings?: AwsApigatewayv2Stage.DefaultRouteSettingsProperty;
  /**
  * route_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#route_settings AwsApigatewayv2Stage#route_settings}
  */
  readonly routeSettings?: AwsApigatewayv2Stage.RouteSettingsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage aws_apigatewayv2_stage}
*/
export class AwsApigatewayv2Stage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apigatewayv2_stage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsApigatewayv2Stage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsApigatewayv2Stage to import
  * @param importFromId The id of the existing AwsApigatewayv2Stage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsApigatewayv2Stage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_apigatewayv2_stage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage aws_apigatewayv2_stage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsApigatewayv2StageConfig
  */
  public constructor(scope: Construct, id: string, config: AwsApigatewayv2StageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_stage',
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
    this._autoDeploy = config.autoDeploy;
    this._clientCertificateId = config.clientCertificateId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._stageVariables = config.stageVariables;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessLogSettings.internalValue = config.accessLogSettings;
    this._defaultRouteSettings.internalValue = config.defaultRouteSettings;
    this._routeSettings.internalValue = config.routeSettings;
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

  // auto_deploy - computed: false, optional: true, required: false
  private _autoDeploy?: boolean | cdktn.IResolvable; 
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }
  public set autoDeploy(value: boolean | cdktn.IResolvable) {
    this._autoDeploy = value;
  }
  public resetAutoDeploy() {
    this._autoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployInput() {
    return this._autoDeploy;
  }

  // client_certificate_id - computed: false, optional: true, required: false
  private _clientCertificateId?: string; 
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
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

  // execution_arn - computed: true, optional: false, required: false
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
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

  // invoke_url - computed: true, optional: false, required: false
  public get invokeUrl() {
    return this.getStringAttribute('invoke_url');
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

  // stage_variables - computed: false, optional: true, required: false
  private _stageVariables?: { [key: string]: string }; 
  public get stageVariables() {
    return this.getStringMapAttribute('stage_variables');
  }
  public set stageVariables(value: { [key: string]: string }) {
    this._stageVariables = value;
  }
  public resetStageVariables() {
    this._stageVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageVariablesInput() {
    return this._stageVariables;
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

  // access_log_settings - computed: false, optional: true, required: false
  private _accessLogSettings = new AwsApigatewayv2Stage.AccessLogSettingsPropertyOutputReference(this, "access_log_settings");
  public get accessLogSettings() {
    return this._accessLogSettings;
  }
  public putAccessLogSettings(value: AwsApigatewayv2Stage.AccessLogSettingsProperty) {
    this._accessLogSettings.internalValue = value;
  }
  public resetAccessLogSettings() {
    this._accessLogSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogSettingsInput() {
    return this._accessLogSettings.internalValue;
  }

  // default_route_settings - computed: false, optional: true, required: false
  private _defaultRouteSettings = new AwsApigatewayv2Stage.DefaultRouteSettingsPropertyOutputReference(this, "default_route_settings");
  public get defaultRouteSettings() {
    return this._defaultRouteSettings;
  }
  public putDefaultRouteSettings(value: AwsApigatewayv2Stage.DefaultRouteSettingsProperty) {
    this._defaultRouteSettings.internalValue = value;
  }
  public resetDefaultRouteSettings() {
    this._defaultRouteSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteSettingsInput() {
    return this._defaultRouteSettings.internalValue;
  }

  // route_settings - computed: false, optional: true, required: false
  private _routeSettings = new AwsApigatewayv2Stage.RouteSettingsPropertyList(this, "route_settings", true);
  public get routeSettings() {
    return this._routeSettings;
  }
  public putRouteSettings(value: AwsApigatewayv2Stage.RouteSettingsProperty[] | cdktn.IResolvable) {
    this._routeSettings.internalValue = value;
  }
  public resetRouteSettings() {
    this._routeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSettingsInput() {
    return this._routeSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktn.stringToTerraform(this._apiId),
      auto_deploy: cdktn.booleanToTerraform(this._autoDeploy),
      client_certificate_id: cdktn.stringToTerraform(this._clientCertificateId),
      deployment_id: cdktn.stringToTerraform(this._deploymentId),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      stage_variables: cdktn.hashMapper(cdktn.stringToTerraform)(this._stageVariables),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      access_log_settings: awsApigatewayv2StageAccessLogSettingsPropertyToTerraform(this._accessLogSettings.internalValue),
      default_route_settings: awsApigatewayv2StageDefaultRouteSettingsPropertyToTerraform(this._defaultRouteSettings.internalValue),
      route_settings: cdktn.listMapper(awsApigatewayv2StageRouteSettingsPropertyToTerraform, true)(this._routeSettings.internalValue),
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
      auto_deploy: {
        value: cdktn.booleanToHclTerraform(this._autoDeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_certificate_id: {
        value: cdktn.stringToHclTerraform(this._clientCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_id: {
        value: cdktn.stringToHclTerraform(this._deploymentId),
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
      stage_variables: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._stageVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      access_log_settings: {
        value: awsApigatewayv2StageAccessLogSettingsPropertyToHclTerraform(this._accessLogSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApigatewayv2Stage.AccessLogSettingsPropertyList",
      },
      default_route_settings: {
        value: awsApigatewayv2StageDefaultRouteSettingsPropertyToHclTerraform(this._defaultRouteSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApigatewayv2Stage.DefaultRouteSettingsPropertyList",
      },
      route_settings: {
        value: cdktn.listMapperHcl(awsApigatewayv2StageRouteSettingsPropertyToHclTerraform, true)(this._routeSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsApigatewayv2Stage.RouteSettingsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsApigatewayv2StageAccessLogSettingsPropertyToTerraform(struct?: AwsApigatewayv2Stage.AccessLogSettingsPropertyOutputReference | AwsApigatewayv2Stage.AccessLogSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
    format: cdktn.stringToTerraform(struct!.format),
  }
}


export function awsApigatewayv2StageAccessLogSettingsPropertyToHclTerraform(struct?: AwsApigatewayv2Stage.AccessLogSettingsPropertyOutputReference | AwsApigatewayv2Stage.AccessLogSettingsProperty): any {
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
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApigatewayv2StageDefaultRouteSettingsPropertyToTerraform(struct?: AwsApigatewayv2Stage.DefaultRouteSettingsPropertyOutputReference | AwsApigatewayv2Stage.DefaultRouteSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_trace_enabled: cdktn.booleanToTerraform(struct!.dataTraceEnabled),
    detailed_metrics_enabled: cdktn.booleanToTerraform(struct!.detailedMetricsEnabled),
    logging_level: cdktn.stringToTerraform(struct!.loggingLevel),
    throttling_burst_limit: cdktn.numberToTerraform(struct!.throttlingBurstLimit),
    throttling_rate_limit: cdktn.numberToTerraform(struct!.throttlingRateLimit),
  }
}


export function awsApigatewayv2StageDefaultRouteSettingsPropertyToHclTerraform(struct?: AwsApigatewayv2Stage.DefaultRouteSettingsPropertyOutputReference | AwsApigatewayv2Stage.DefaultRouteSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_trace_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.dataTraceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detailed_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.detailedMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logging_level: {
      value: cdktn.stringToHclTerraform(struct!.loggingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throttling_burst_limit: {
      value: cdktn.numberToHclTerraform(struct!.throttlingBurstLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttling_rate_limit: {
      value: cdktn.numberToHclTerraform(struct!.throttlingRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApigatewayv2StageRouteSettingsPropertyToTerraform(struct?: AwsApigatewayv2Stage.RouteSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_trace_enabled: cdktn.booleanToTerraform(struct!.dataTraceEnabled),
    detailed_metrics_enabled: cdktn.booleanToTerraform(struct!.detailedMetricsEnabled),
    logging_level: cdktn.stringToTerraform(struct!.loggingLevel),
    route_key: cdktn.stringToTerraform(struct!.routeKey),
    throttling_burst_limit: cdktn.numberToTerraform(struct!.throttlingBurstLimit),
    throttling_rate_limit: cdktn.numberToTerraform(struct!.throttlingRateLimit),
  }
}


export function awsApigatewayv2StageRouteSettingsPropertyToHclTerraform(struct?: AwsApigatewayv2Stage.RouteSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_trace_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.dataTraceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detailed_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.detailedMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logging_level: {
      value: cdktn.stringToHclTerraform(struct!.loggingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_key: {
      value: cdktn.stringToHclTerraform(struct!.routeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throttling_burst_limit: {
      value: cdktn.numberToHclTerraform(struct!.throttlingBurstLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttling_rate_limit: {
      value: cdktn.numberToHclTerraform(struct!.throttlingRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsApigatewayv2Stage {
export interface AccessLogSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#destination_arn AwsApigatewayv2Stage#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#format AwsApigatewayv2Stage#format}
  */
  readonly format: string;
}
export class AccessLogSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessLogSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessLogSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationArn = undefined;
      this._format = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationArn = value.destinationArn;
      this._format = value.format;
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

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}
export interface DefaultRouteSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#data_trace_enabled AwsApigatewayv2Stage#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#detailed_metrics_enabled AwsApigatewayv2Stage#detailed_metrics_enabled}
  */
  readonly detailedMetricsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#logging_level AwsApigatewayv2Stage#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#throttling_burst_limit AwsApigatewayv2Stage#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#throttling_rate_limit AwsApigatewayv2Stage#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
}
export class DefaultRouteSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultRouteSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTraceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
    }
    if (this._detailedMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedMetricsEnabled = this._detailedMetricsEnabled;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._throttlingBurstLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
    }
    if (this._throttlingRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultRouteSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataTraceEnabled = undefined;
      this._detailedMetricsEnabled = undefined;
      this._loggingLevel = undefined;
      this._throttlingBurstLimit = undefined;
      this._throttlingRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataTraceEnabled = value.dataTraceEnabled;
      this._detailedMetricsEnabled = value.detailedMetricsEnabled;
      this._loggingLevel = value.loggingLevel;
      this._throttlingBurstLimit = value.throttlingBurstLimit;
      this._throttlingRateLimit = value.throttlingRateLimit;
    }
  }

  // data_trace_enabled - computed: false, optional: true, required: false
  private _dataTraceEnabled?: boolean | cdktn.IResolvable; 
  public get dataTraceEnabled() {
    return this.getBooleanAttribute('data_trace_enabled');
  }
  public set dataTraceEnabled(value: boolean | cdktn.IResolvable) {
    this._dataTraceEnabled = value;
  }
  public resetDataTraceEnabled() {
    this._dataTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTraceEnabledInput() {
    return this._dataTraceEnabled;
  }

  // detailed_metrics_enabled - computed: false, optional: true, required: false
  private _detailedMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get detailedMetricsEnabled() {
    return this.getBooleanAttribute('detailed_metrics_enabled');
  }
  public set detailedMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._detailedMetricsEnabled = value;
  }
  public resetDetailedMetricsEnabled() {
    this._detailedMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedMetricsEnabledInput() {
    return this._detailedMetricsEnabled;
  }

  // logging_level - computed: true, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // throttling_burst_limit - computed: false, optional: true, required: false
  private _throttlingBurstLimit?: number; 
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }
  public set throttlingBurstLimit(value: number) {
    this._throttlingBurstLimit = value;
  }
  public resetThrottlingBurstLimit() {
    this._throttlingBurstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingBurstLimitInput() {
    return this._throttlingBurstLimit;
  }

  // throttling_rate_limit - computed: false, optional: true, required: false
  private _throttlingRateLimit?: number; 
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }
  public set throttlingRateLimit(value: number) {
    this._throttlingRateLimit = value;
  }
  public resetThrottlingRateLimit() {
    this._throttlingRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingRateLimitInput() {
    return this._throttlingRateLimit;
  }
}
export interface RouteSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#data_trace_enabled AwsApigatewayv2Stage#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#detailed_metrics_enabled AwsApigatewayv2Stage#detailed_metrics_enabled}
  */
  readonly detailedMetricsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#logging_level AwsApigatewayv2Stage#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#route_key AwsApigatewayv2Stage#route_key}
  */
  readonly routeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#throttling_burst_limit AwsApigatewayv2Stage#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_stage#throttling_rate_limit AwsApigatewayv2Stage#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
}
export class RouteSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RouteSettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTraceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
    }
    if (this._detailedMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedMetricsEnabled = this._detailedMetricsEnabled;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._routeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeKey = this._routeKey;
    }
    if (this._throttlingBurstLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
    }
    if (this._throttlingRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteSettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataTraceEnabled = undefined;
      this._detailedMetricsEnabled = undefined;
      this._loggingLevel = undefined;
      this._routeKey = undefined;
      this._throttlingBurstLimit = undefined;
      this._throttlingRateLimit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataTraceEnabled = value.dataTraceEnabled;
      this._detailedMetricsEnabled = value.detailedMetricsEnabled;
      this._loggingLevel = value.loggingLevel;
      this._routeKey = value.routeKey;
      this._throttlingBurstLimit = value.throttlingBurstLimit;
      this._throttlingRateLimit = value.throttlingRateLimit;
    }
  }

  // data_trace_enabled - computed: false, optional: true, required: false
  private _dataTraceEnabled?: boolean | cdktn.IResolvable; 
  public get dataTraceEnabled() {
    return this.getBooleanAttribute('data_trace_enabled');
  }
  public set dataTraceEnabled(value: boolean | cdktn.IResolvable) {
    this._dataTraceEnabled = value;
  }
  public resetDataTraceEnabled() {
    this._dataTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTraceEnabledInput() {
    return this._dataTraceEnabled;
  }

  // detailed_metrics_enabled - computed: false, optional: true, required: false
  private _detailedMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get detailedMetricsEnabled() {
    return this.getBooleanAttribute('detailed_metrics_enabled');
  }
  public set detailedMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._detailedMetricsEnabled = value;
  }
  public resetDetailedMetricsEnabled() {
    this._detailedMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedMetricsEnabledInput() {
    return this._detailedMetricsEnabled;
  }

  // logging_level - computed: true, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // route_key - computed: false, optional: false, required: true
  private _routeKey?: string; 
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }
  public set routeKey(value: string) {
    this._routeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeKeyInput() {
    return this._routeKey;
  }

  // throttling_burst_limit - computed: false, optional: true, required: false
  private _throttlingBurstLimit?: number; 
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }
  public set throttlingBurstLimit(value: number) {
    this._throttlingBurstLimit = value;
  }
  public resetThrottlingBurstLimit() {
    this._throttlingBurstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingBurstLimitInput() {
    return this._throttlingBurstLimit;
  }

  // throttling_rate_limit - computed: false, optional: true, required: false
  private _throttlingRateLimit?: number; 
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }
  public set throttlingRateLimit(value: number) {
    this._throttlingRateLimit = value;
  }
  public resetThrottlingRateLimit() {
    this._throttlingRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingRateLimitInput() {
    return this._throttlingRateLimit;
  }
}

export class RouteSettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : RouteSettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): RouteSettingsPropertyOutputReference {
    return new RouteSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
