// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsMonitorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#id AwsMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor AwsMonitor#max_city_networks_to_monitor}
  */
  readonly maxCityNetworksToMonitor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#monitor_name AwsMonitor#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#region AwsMonitor#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#resources AwsMonitor#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#status AwsMonitor#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#tags AwsMonitor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#tags_all AwsMonitor#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor AwsMonitor#traffic_percentage_to_monitor}
  */
  readonly trafficPercentageToMonitor?: number;
  /**
  * health_events_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#health_events_config AwsMonitor#health_events_config}
  */
  readonly healthEventsConfig?: AwsMonitor.HealthEventsConfigProperty;
  /**
  * internet_measurements_log_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery AwsMonitor#internet_measurements_log_delivery}
  */
  readonly internetMeasurementsLogDelivery?: AwsMonitor.InternetMeasurementsLogDeliveryProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor aws_internetmonitor_monitor}
*/
export class AwsMonitor extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_internetmonitor_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsMonitor resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsMonitor to import
  * @param importFromId The id of the existing AwsMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_internetmonitor_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor aws_internetmonitor_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: AwsMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_internetmonitor_monitor',
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
    this._id = config.id;
    this._maxCityNetworksToMonitor = config.maxCityNetworksToMonitor;
    this._monitorName = config.monitorName;
    this._region = config.region;
    this._resources = config.resources;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._trafficPercentageToMonitor = config.trafficPercentageToMonitor;
    this._healthEventsConfig.internalValue = config.healthEventsConfig;
    this._internetMeasurementsLogDelivery.internalValue = config.internetMeasurementsLogDelivery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // max_city_networks_to_monitor - computed: false, optional: true, required: false
  private _maxCityNetworksToMonitor?: number; 
  public get maxCityNetworksToMonitor() {
    return this.getNumberAttribute('max_city_networks_to_monitor');
  }
  public set maxCityNetworksToMonitor(value: number) {
    this._maxCityNetworksToMonitor = value;
  }
  public resetMaxCityNetworksToMonitor() {
    this._maxCityNetworksToMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCityNetworksToMonitorInput() {
    return this._maxCityNetworksToMonitor;
  }

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
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

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktn.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // traffic_percentage_to_monitor - computed: false, optional: true, required: false
  private _trafficPercentageToMonitor?: number; 
  public get trafficPercentageToMonitor() {
    return this.getNumberAttribute('traffic_percentage_to_monitor');
  }
  public set trafficPercentageToMonitor(value: number) {
    this._trafficPercentageToMonitor = value;
  }
  public resetTrafficPercentageToMonitor() {
    this._trafficPercentageToMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPercentageToMonitorInput() {
    return this._trafficPercentageToMonitor;
  }

  // health_events_config - computed: false, optional: true, required: false
  private _healthEventsConfig = new AwsMonitor.HealthEventsConfigPropertyOutputReference(this, "health_events_config");
  public get healthEventsConfig() {
    return this._healthEventsConfig;
  }
  public putHealthEventsConfig(value: AwsMonitor.HealthEventsConfigProperty) {
    this._healthEventsConfig.internalValue = value;
  }
  public resetHealthEventsConfig() {
    this._healthEventsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthEventsConfigInput() {
    return this._healthEventsConfig.internalValue;
  }

  // internet_measurements_log_delivery - computed: false, optional: true, required: false
  private _internetMeasurementsLogDelivery = new AwsMonitor.InternetMeasurementsLogDeliveryPropertyOutputReference(this, "internet_measurements_log_delivery");
  public get internetMeasurementsLogDelivery() {
    return this._internetMeasurementsLogDelivery;
  }
  public putInternetMeasurementsLogDelivery(value: AwsMonitor.InternetMeasurementsLogDeliveryProperty) {
    this._internetMeasurementsLogDelivery.internalValue = value;
  }
  public resetInternetMeasurementsLogDelivery() {
    this._internetMeasurementsLogDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMeasurementsLogDeliveryInput() {
    return this._internetMeasurementsLogDelivery.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      max_city_networks_to_monitor: cdktn.numberToTerraform(this._maxCityNetworksToMonitor),
      monitor_name: cdktn.stringToTerraform(this._monitorName),
      region: cdktn.stringToTerraform(this._region),
      resources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resources),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      traffic_percentage_to_monitor: cdktn.numberToTerraform(this._trafficPercentageToMonitor),
      health_events_config: awsMonitorHealthEventsConfigPropertyToTerraform(this._healthEventsConfig.internalValue),
      internet_measurements_log_delivery: awsMonitorInternetMeasurementsLogDeliveryPropertyToTerraform(this._internetMeasurementsLogDelivery.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_city_networks_to_monitor: {
        value: cdktn.numberToHclTerraform(this._maxCityNetworksToMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_name: {
        value: cdktn.stringToHclTerraform(this._monitorName),
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
      resources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
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
      traffic_percentage_to_monitor: {
        value: cdktn.numberToHclTerraform(this._trafficPercentageToMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_events_config: {
        value: awsMonitorHealthEventsConfigPropertyToHclTerraform(this._healthEventsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMonitor.HealthEventsConfigPropertyList",
      },
      internet_measurements_log_delivery: {
        value: awsMonitorInternetMeasurementsLogDeliveryPropertyToHclTerraform(this._internetMeasurementsLogDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMonitor.InternetMeasurementsLogDeliveryPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsMonitorHealthEventsConfigPropertyToTerraform(struct?: AwsMonitor.HealthEventsConfigPropertyOutputReference | AwsMonitor.HealthEventsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_score_threshold: cdktn.numberToTerraform(struct!.availabilityScoreThreshold),
    performance_score_threshold: cdktn.numberToTerraform(struct!.performanceScoreThreshold),
  }
}


export function awsMonitorHealthEventsConfigPropertyToHclTerraform(struct?: AwsMonitor.HealthEventsConfigPropertyOutputReference | AwsMonitor.HealthEventsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_score_threshold: {
      value: cdktn.numberToHclTerraform(struct!.availabilityScoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_score_threshold: {
      value: cdktn.numberToHclTerraform(struct!.performanceScoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMonitorS3ConfigPropertyToTerraform(struct?: AwsMonitor.S3ConfigPropertyOutputReference | AwsMonitor.S3ConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    log_delivery_status: cdktn.stringToTerraform(struct!.logDeliveryStatus),
  }
}


export function awsMonitorS3ConfigPropertyToHclTerraform(struct?: AwsMonitor.S3ConfigPropertyOutputReference | AwsMonitor.S3ConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_delivery_status: {
      value: cdktn.stringToHclTerraform(struct!.logDeliveryStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMonitorInternetMeasurementsLogDeliveryPropertyToTerraform(struct?: AwsMonitor.InternetMeasurementsLogDeliveryPropertyOutputReference | AwsMonitor.InternetMeasurementsLogDeliveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_config: awsMonitorS3ConfigPropertyToTerraform(struct!.s3Config),
  }
}


export function awsMonitorInternetMeasurementsLogDeliveryPropertyToHclTerraform(struct?: AwsMonitor.InternetMeasurementsLogDeliveryPropertyOutputReference | AwsMonitor.InternetMeasurementsLogDeliveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_config: {
      value: awsMonitorS3ConfigPropertyToHclTerraform(struct!.s3Config),
      isBlock: true,
      type: "list",
      storageClassType: "S3ConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsMonitor {
export interface HealthEventsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#availability_score_threshold AwsMonitor#availability_score_threshold}
  */
  readonly availabilityScoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#performance_score_threshold AwsMonitor#performance_score_threshold}
  */
  readonly performanceScoreThreshold?: number;
}
export class HealthEventsConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthEventsConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityScoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityScoreThreshold = this._availabilityScoreThreshold;
    }
    if (this._performanceScoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceScoreThreshold = this._performanceScoreThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthEventsConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityScoreThreshold = undefined;
      this._performanceScoreThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityScoreThreshold = value.availabilityScoreThreshold;
      this._performanceScoreThreshold = value.performanceScoreThreshold;
    }
  }

  // availability_score_threshold - computed: false, optional: true, required: false
  private _availabilityScoreThreshold?: number; 
  public get availabilityScoreThreshold() {
    return this.getNumberAttribute('availability_score_threshold');
  }
  public set availabilityScoreThreshold(value: number) {
    this._availabilityScoreThreshold = value;
  }
  public resetAvailabilityScoreThreshold() {
    this._availabilityScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityScoreThresholdInput() {
    return this._availabilityScoreThreshold;
  }

  // performance_score_threshold - computed: false, optional: true, required: false
  private _performanceScoreThreshold?: number; 
  public get performanceScoreThreshold() {
    return this.getNumberAttribute('performance_score_threshold');
  }
  public set performanceScoreThreshold(value: number) {
    this._performanceScoreThreshold = value;
  }
  public resetPerformanceScoreThreshold() {
    this._performanceScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceScoreThresholdInput() {
    return this._performanceScoreThreshold;
  }
}
export interface S3ConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#bucket_name AwsMonitor#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#bucket_prefix AwsMonitor#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#log_delivery_status AwsMonitor#log_delivery_status}
  */
  readonly logDeliveryStatus?: string;
}
export class S3ConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._logDeliveryStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDeliveryStatus = this._logDeliveryStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._logDeliveryStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._logDeliveryStatus = value.logDeliveryStatus;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // log_delivery_status - computed: false, optional: true, required: false
  private _logDeliveryStatus?: string; 
  public get logDeliveryStatus() {
    return this.getStringAttribute('log_delivery_status');
  }
  public set logDeliveryStatus(value: string) {
    this._logDeliveryStatus = value;
  }
  public resetLogDeliveryStatus() {
    this._logDeliveryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryStatusInput() {
    return this._logDeliveryStatus;
  }
}
export interface InternetMeasurementsLogDeliveryProperty {
  /**
  * s3_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/internetmonitor_monitor#s3_config AwsMonitor#s3_config}
  */
  readonly s3Config?: S3ConfigProperty;
}
export class InternetMeasurementsLogDeliveryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InternetMeasurementsLogDeliveryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Config = this._s3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetMeasurementsLogDeliveryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Config.internalValue = value.s3Config;
    }
  }

  // s3_config - computed: false, optional: true, required: false
  private _s3Config = new S3ConfigPropertyOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: S3ConfigProperty) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }
}
}
