// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsApprunnerServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#auto_scaling_configuration_arn AwsApprunnerService#auto_scaling_configuration_arn}
  */
  readonly autoScalingConfigurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#id AwsApprunnerService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#region AwsApprunnerService#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#service_name AwsApprunnerService#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#tags AwsApprunnerService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#tags_all AwsApprunnerService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#encryption_configuration AwsApprunnerService#encryption_configuration}
  */
  readonly encryptionConfiguration?: AwsApprunnerService.EncryptionConfigurationProperty;
  /**
  * health_check_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#health_check_configuration AwsApprunnerService#health_check_configuration}
  */
  readonly healthCheckConfiguration?: AwsApprunnerService.HealthCheckConfigurationProperty;
  /**
  * instance_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#instance_configuration AwsApprunnerService#instance_configuration}
  */
  readonly instanceConfiguration?: AwsApprunnerService.InstanceConfigurationProperty;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#network_configuration AwsApprunnerService#network_configuration}
  */
  readonly networkConfiguration?: AwsApprunnerService.NetworkConfigurationProperty;
  /**
  * observability_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#observability_configuration AwsApprunnerService#observability_configuration}
  */
  readonly observabilityConfiguration?: AwsApprunnerService.ObservabilityConfigurationProperty;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#source_configuration AwsApprunnerService#source_configuration}
  */
  readonly sourceConfiguration: AwsApprunnerService.SourceConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service aws_apprunner_service}
*/
export class AwsApprunnerService extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apprunner_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsApprunnerService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsApprunnerService to import
  * @param importFromId The id of the existing AwsApprunnerService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsApprunnerService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_apprunner_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service aws_apprunner_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsApprunnerServiceConfig
  */
  public constructor(scope: Construct, id: string, config: AwsApprunnerServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apprunner_service',
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
    this._autoScalingConfigurationArn = config.autoScalingConfigurationArn;
    this._id = config.id;
    this._region = config.region;
    this._serviceName = config.serviceName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._healthCheckConfiguration.internalValue = config.healthCheckConfiguration;
    this._instanceConfiguration.internalValue = config.instanceConfiguration;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._observabilityConfiguration.internalValue = config.observabilityConfiguration;
    this._sourceConfiguration.internalValue = config.sourceConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_scaling_configuration_arn - computed: true, optional: true, required: false
  private _autoScalingConfigurationArn?: string; 
  public get autoScalingConfigurationArn() {
    return this.getStringAttribute('auto_scaling_configuration_arn');
  }
  public set autoScalingConfigurationArn(value: string) {
    this._autoScalingConfigurationArn = value;
  }
  public resetAutoScalingConfigurationArn() {
    this._autoScalingConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigurationArnInput() {
    return this._autoScalingConfigurationArn;
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

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new AwsApprunnerService.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AwsApprunnerService.EncryptionConfigurationProperty) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // health_check_configuration - computed: false, optional: true, required: false
  private _healthCheckConfiguration = new AwsApprunnerService.HealthCheckConfigurationPropertyOutputReference(this, "health_check_configuration");
  public get healthCheckConfiguration() {
    return this._healthCheckConfiguration;
  }
  public putHealthCheckConfiguration(value: AwsApprunnerService.HealthCheckConfigurationProperty) {
    this._healthCheckConfiguration.internalValue = value;
  }
  public resetHealthCheckConfiguration() {
    this._healthCheckConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigurationInput() {
    return this._healthCheckConfiguration.internalValue;
  }

  // instance_configuration - computed: false, optional: true, required: false
  private _instanceConfiguration = new AwsApprunnerService.InstanceConfigurationPropertyOutputReference(this, "instance_configuration");
  public get instanceConfiguration() {
    return this._instanceConfiguration;
  }
  public putInstanceConfiguration(value: AwsApprunnerService.InstanceConfigurationProperty) {
    this._instanceConfiguration.internalValue = value;
  }
  public resetInstanceConfiguration() {
    this._instanceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationInput() {
    return this._instanceConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new AwsApprunnerService.NetworkConfigurationPropertyOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: AwsApprunnerService.NetworkConfigurationProperty) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // observability_configuration - computed: false, optional: true, required: false
  private _observabilityConfiguration = new AwsApprunnerService.ObservabilityConfigurationPropertyOutputReference(this, "observability_configuration");
  public get observabilityConfiguration() {
    return this._observabilityConfiguration;
  }
  public putObservabilityConfiguration(value: AwsApprunnerService.ObservabilityConfigurationProperty) {
    this._observabilityConfiguration.internalValue = value;
  }
  public resetObservabilityConfiguration() {
    this._observabilityConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityConfigurationInput() {
    return this._observabilityConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: false, required: true
  private _sourceConfiguration = new AwsApprunnerService.SourceConfigurationPropertyOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: AwsApprunnerService.SourceConfigurationProperty) {
    this._sourceConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_configuration_arn: cdktn.stringToTerraform(this._autoScalingConfigurationArn),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      service_name: cdktn.stringToTerraform(this._serviceName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      encryption_configuration: awsApprunnerServiceEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
      health_check_configuration: awsApprunnerServiceHealthCheckConfigurationPropertyToTerraform(this._healthCheckConfiguration.internalValue),
      instance_configuration: awsApprunnerServiceInstanceConfigurationPropertyToTerraform(this._instanceConfiguration.internalValue),
      network_configuration: awsApprunnerServiceNetworkConfigurationPropertyToTerraform(this._networkConfiguration.internalValue),
      observability_configuration: awsApprunnerServiceObservabilityConfigurationPropertyToTerraform(this._observabilityConfiguration.internalValue),
      source_configuration: awsApprunnerServiceSourceConfigurationPropertyToTerraform(this._sourceConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_configuration_arn: {
        value: cdktn.stringToHclTerraform(this._autoScalingConfigurationArn),
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
      service_name: {
        value: cdktn.stringToHclTerraform(this._serviceName),
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
      encryption_configuration: {
        value: awsApprunnerServiceEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApprunnerService.EncryptionConfigurationPropertyList",
      },
      health_check_configuration: {
        value: awsApprunnerServiceHealthCheckConfigurationPropertyToHclTerraform(this._healthCheckConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApprunnerService.HealthCheckConfigurationPropertyList",
      },
      instance_configuration: {
        value: awsApprunnerServiceInstanceConfigurationPropertyToHclTerraform(this._instanceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApprunnerService.InstanceConfigurationPropertyList",
      },
      network_configuration: {
        value: awsApprunnerServiceNetworkConfigurationPropertyToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApprunnerService.NetworkConfigurationPropertyList",
      },
      observability_configuration: {
        value: awsApprunnerServiceObservabilityConfigurationPropertyToHclTerraform(this._observabilityConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApprunnerService.ObservabilityConfigurationPropertyList",
      },
      source_configuration: {
        value: awsApprunnerServiceSourceConfigurationPropertyToHclTerraform(this._sourceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApprunnerService.SourceConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsApprunnerServiceEncryptionConfigurationPropertyToTerraform(struct?: AwsApprunnerService.EncryptionConfigurationPropertyOutputReference | AwsApprunnerService.EncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function awsApprunnerServiceEncryptionConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.EncryptionConfigurationPropertyOutputReference | AwsApprunnerService.EncryptionConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceHealthCheckConfigurationPropertyToTerraform(struct?: AwsApprunnerService.HealthCheckConfigurationPropertyOutputReference | AwsApprunnerService.HealthCheckConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    healthy_threshold: cdktn.numberToTerraform(struct!.healthyThreshold),
    interval: cdktn.numberToTerraform(struct!.interval),
    path: cdktn.stringToTerraform(struct!.path),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    timeout: cdktn.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktn.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function awsApprunnerServiceHealthCheckConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.HealthCheckConfigurationPropertyOutputReference | AwsApprunnerService.HealthCheckConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    healthy_threshold: {
      value: cdktn.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktn.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceInstanceConfigurationPropertyToTerraform(struct?: AwsApprunnerService.InstanceConfigurationPropertyOutputReference | AwsApprunnerService.InstanceConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu: cdktn.stringToTerraform(struct!.cpu),
    instance_role_arn: cdktn.stringToTerraform(struct!.instanceRoleArn),
    memory: cdktn.stringToTerraform(struct!.memory),
  }
}


export function awsApprunnerServiceInstanceConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.InstanceConfigurationPropertyOutputReference | AwsApprunnerService.InstanceConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu: {
      value: cdktn.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.instanceRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktn.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceEgressConfigurationPropertyToTerraform(struct?: AwsApprunnerService.EgressConfigurationPropertyOutputReference | AwsApprunnerService.EgressConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    egress_type: cdktn.stringToTerraform(struct!.egressType),
    vpc_connector_arn: cdktn.stringToTerraform(struct!.vpcConnectorArn),
  }
}


export function awsApprunnerServiceEgressConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.EgressConfigurationPropertyOutputReference | AwsApprunnerService.EgressConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    egress_type: {
      value: cdktn.stringToHclTerraform(struct!.egressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_connector_arn: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnectorArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceIngressConfigurationPropertyToTerraform(struct?: AwsApprunnerService.IngressConfigurationPropertyOutputReference | AwsApprunnerService.IngressConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_publicly_accessible: cdktn.booleanToTerraform(struct!.isPubliclyAccessible),
  }
}


export function awsApprunnerServiceIngressConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.IngressConfigurationPropertyOutputReference | AwsApprunnerService.IngressConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_publicly_accessible: {
      value: cdktn.booleanToHclTerraform(struct!.isPubliclyAccessible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceNetworkConfigurationPropertyToTerraform(struct?: AwsApprunnerService.NetworkConfigurationPropertyOutputReference | AwsApprunnerService.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    egress_configuration: awsApprunnerServiceEgressConfigurationPropertyToTerraform(struct!.egressConfiguration),
    ingress_configuration: awsApprunnerServiceIngressConfigurationPropertyToTerraform(struct!.ingressConfiguration),
  }
}


export function awsApprunnerServiceNetworkConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.NetworkConfigurationPropertyOutputReference | AwsApprunnerService.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_configuration: {
      value: awsApprunnerServiceEgressConfigurationPropertyToHclTerraform(struct!.egressConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EgressConfigurationPropertyList",
    },
    ingress_configuration: {
      value: awsApprunnerServiceIngressConfigurationPropertyToHclTerraform(struct!.ingressConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "IngressConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceObservabilityConfigurationPropertyToTerraform(struct?: AwsApprunnerService.ObservabilityConfigurationPropertyOutputReference | AwsApprunnerService.ObservabilityConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    observability_configuration_arn: cdktn.stringToTerraform(struct!.observabilityConfigurationArn),
    observability_enabled: cdktn.booleanToTerraform(struct!.observabilityEnabled),
  }
}


export function awsApprunnerServiceObservabilityConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.ObservabilityConfigurationPropertyOutputReference | AwsApprunnerService.ObservabilityConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    observability_configuration_arn: {
      value: cdktn.stringToHclTerraform(struct!.observabilityConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    observability_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.observabilityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceAuthenticationConfigurationPropertyToTerraform(struct?: AwsApprunnerService.AuthenticationConfigurationPropertyOutputReference | AwsApprunnerService.AuthenticationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_role_arn: cdktn.stringToTerraform(struct!.accessRoleArn),
    connection_arn: cdktn.stringToTerraform(struct!.connectionArn),
  }
}


export function awsApprunnerServiceAuthenticationConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.AuthenticationConfigurationPropertyOutputReference | AwsApprunnerService.AuthenticationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.accessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_arn: {
      value: cdktn.stringToHclTerraform(struct!.connectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceCodeConfigurationValuesPropertyToTerraform(struct?: AwsApprunnerService.CodeConfigurationValuesPropertyOutputReference | AwsApprunnerService.CodeConfigurationValuesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    build_command: cdktn.stringToTerraform(struct!.buildCommand),
    port: cdktn.stringToTerraform(struct!.port),
    runtime: cdktn.stringToTerraform(struct!.runtime),
    runtime_environment_secrets: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.runtimeEnvironmentSecrets),
    runtime_environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.runtimeEnvironmentVariables),
    start_command: cdktn.stringToTerraform(struct!.startCommand),
  }
}


export function awsApprunnerServiceCodeConfigurationValuesPropertyToHclTerraform(struct?: AwsApprunnerService.CodeConfigurationValuesPropertyOutputReference | AwsApprunnerService.CodeConfigurationValuesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    build_command: {
      value: cdktn.stringToHclTerraform(struct!.buildCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime: {
      value: cdktn.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_environment_secrets: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.runtimeEnvironmentSecrets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    runtime_environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.runtimeEnvironmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    start_command: {
      value: cdktn.stringToHclTerraform(struct!.startCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceCodeConfigurationPropertyToTerraform(struct?: AwsApprunnerService.CodeConfigurationPropertyOutputReference | AwsApprunnerService.CodeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_source: cdktn.stringToTerraform(struct!.configurationSource),
    code_configuration_values: awsApprunnerServiceCodeConfigurationValuesPropertyToTerraform(struct!.codeConfigurationValues),
  }
}


export function awsApprunnerServiceCodeConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.CodeConfigurationPropertyOutputReference | AwsApprunnerService.CodeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_source: {
      value: cdktn.stringToHclTerraform(struct!.configurationSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_configuration_values: {
      value: awsApprunnerServiceCodeConfigurationValuesPropertyToHclTerraform(struct!.codeConfigurationValues),
      isBlock: true,
      type: "list",
      storageClassType: "CodeConfigurationValuesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceSourceCodeVersionPropertyToTerraform(struct?: AwsApprunnerService.SourceCodeVersionPropertyOutputReference | AwsApprunnerService.SourceCodeVersionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsApprunnerServiceSourceCodeVersionPropertyToHclTerraform(struct?: AwsApprunnerService.SourceCodeVersionPropertyOutputReference | AwsApprunnerService.SourceCodeVersionProperty): any {
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


export function awsApprunnerServiceCodeRepositoryPropertyToTerraform(struct?: AwsApprunnerService.CodeRepositoryPropertyOutputReference | AwsApprunnerService.CodeRepositoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
    source_directory: cdktn.stringToTerraform(struct!.sourceDirectory),
    code_configuration: awsApprunnerServiceCodeConfigurationPropertyToTerraform(struct!.codeConfiguration),
    source_code_version: awsApprunnerServiceSourceCodeVersionPropertyToTerraform(struct!.sourceCodeVersion),
  }
}


export function awsApprunnerServiceCodeRepositoryPropertyToHclTerraform(struct?: AwsApprunnerService.CodeRepositoryPropertyOutputReference | AwsApprunnerService.CodeRepositoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_url: {
      value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_directory: {
      value: cdktn.stringToHclTerraform(struct!.sourceDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_configuration: {
      value: awsApprunnerServiceCodeConfigurationPropertyToHclTerraform(struct!.codeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CodeConfigurationPropertyList",
    },
    source_code_version: {
      value: awsApprunnerServiceSourceCodeVersionPropertyToHclTerraform(struct!.sourceCodeVersion),
      isBlock: true,
      type: "list",
      storageClassType: "SourceCodeVersionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceImageConfigurationPropertyToTerraform(struct?: AwsApprunnerService.ImageConfigurationPropertyOutputReference | AwsApprunnerService.ImageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.stringToTerraform(struct!.port),
    runtime_environment_secrets: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.runtimeEnvironmentSecrets),
    runtime_environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.runtimeEnvironmentVariables),
    start_command: cdktn.stringToTerraform(struct!.startCommand),
  }
}


export function awsApprunnerServiceImageConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.ImageConfigurationPropertyOutputReference | AwsApprunnerService.ImageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_environment_secrets: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.runtimeEnvironmentSecrets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    runtime_environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.runtimeEnvironmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    start_command: {
      value: cdktn.stringToHclTerraform(struct!.startCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceImageRepositoryPropertyToTerraform(struct?: AwsApprunnerService.ImageRepositoryPropertyOutputReference | AwsApprunnerService.ImageRepositoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_identifier: cdktn.stringToTerraform(struct!.imageIdentifier),
    image_repository_type: cdktn.stringToTerraform(struct!.imageRepositoryType),
    image_configuration: awsApprunnerServiceImageConfigurationPropertyToTerraform(struct!.imageConfiguration),
  }
}


export function awsApprunnerServiceImageRepositoryPropertyToHclTerraform(struct?: AwsApprunnerService.ImageRepositoryPropertyOutputReference | AwsApprunnerService.ImageRepositoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_identifier: {
      value: cdktn.stringToHclTerraform(struct!.imageIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_repository_type: {
      value: cdktn.stringToHclTerraform(struct!.imageRepositoryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_configuration: {
      value: awsApprunnerServiceImageConfigurationPropertyToHclTerraform(struct!.imageConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ImageConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApprunnerServiceSourceConfigurationPropertyToTerraform(struct?: AwsApprunnerService.SourceConfigurationPropertyOutputReference | AwsApprunnerService.SourceConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_deployments_enabled: cdktn.booleanToTerraform(struct!.autoDeploymentsEnabled),
    authentication_configuration: awsApprunnerServiceAuthenticationConfigurationPropertyToTerraform(struct!.authenticationConfiguration),
    code_repository: awsApprunnerServiceCodeRepositoryPropertyToTerraform(struct!.codeRepository),
    image_repository: awsApprunnerServiceImageRepositoryPropertyToTerraform(struct!.imageRepository),
  }
}


export function awsApprunnerServiceSourceConfigurationPropertyToHclTerraform(struct?: AwsApprunnerService.SourceConfigurationPropertyOutputReference | AwsApprunnerService.SourceConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_deployments_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoDeploymentsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication_configuration: {
      value: awsApprunnerServiceAuthenticationConfigurationPropertyToHclTerraform(struct!.authenticationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AuthenticationConfigurationPropertyList",
    },
    code_repository: {
      value: awsApprunnerServiceCodeRepositoryPropertyToHclTerraform(struct!.codeRepository),
      isBlock: true,
      type: "list",
      storageClassType: "CodeRepositoryPropertyList",
    },
    image_repository: {
      value: awsApprunnerServiceImageRepositoryPropertyToHclTerraform(struct!.imageRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ImageRepositoryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsApprunnerService {
export interface EncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#kms_key AwsApprunnerService#kms_key}
  */
  readonly kmsKey: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: false, required: true
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface HealthCheckConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#healthy_threshold AwsApprunnerService#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#interval AwsApprunnerService#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#path AwsApprunnerService#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#protocol AwsApprunnerService#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#timeout AwsApprunnerService#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#unhealthy_threshold AwsApprunnerService#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}
export class HealthCheckConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthCheckConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthCheckConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._protocol = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._path = value.path;
      this._protocol = value.protocol;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface InstanceConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#cpu AwsApprunnerService#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#instance_role_arn AwsApprunnerService#instance_role_arn}
  */
  readonly instanceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#memory AwsApprunnerService#memory}
  */
  readonly memory?: string;
}
export class InstanceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._instanceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRoleArn = this._instanceRoleArn;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._instanceRoleArn = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._instanceRoleArn = value.instanceRoleArn;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // instance_role_arn - computed: false, optional: true, required: false
  private _instanceRoleArn?: string; 
  public get instanceRoleArn() {
    return this.getStringAttribute('instance_role_arn');
  }
  public set instanceRoleArn(value: string) {
    this._instanceRoleArn = value;
  }
  public resetInstanceRoleArn() {
    this._instanceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleArnInput() {
    return this._instanceRoleArn;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface EgressConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#egress_type AwsApprunnerService#egress_type}
  */
  readonly egressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#vpc_connector_arn AwsApprunnerService#vpc_connector_arn}
  */
  readonly vpcConnectorArn?: string;
}
export class EgressConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EgressConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressType = this._egressType;
    }
    if (this._vpcConnectorArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectorArn = this._vpcConnectorArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EgressConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egressType = undefined;
      this._vpcConnectorArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egressType = value.egressType;
      this._vpcConnectorArn = value.vpcConnectorArn;
    }
  }

  // egress_type - computed: true, optional: true, required: false
  private _egressType?: string; 
  public get egressType() {
    return this.getStringAttribute('egress_type');
  }
  public set egressType(value: string) {
    this._egressType = value;
  }
  public resetEgressType() {
    this._egressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressTypeInput() {
    return this._egressType;
  }

  // vpc_connector_arn - computed: false, optional: true, required: false
  private _vpcConnectorArn?: string; 
  public get vpcConnectorArn() {
    return this.getStringAttribute('vpc_connector_arn');
  }
  public set vpcConnectorArn(value: string) {
    this._vpcConnectorArn = value;
  }
  public resetVpcConnectorArn() {
    this._vpcConnectorArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorArnInput() {
    return this._vpcConnectorArn;
  }
}
export interface IngressConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#is_publicly_accessible AwsApprunnerService#is_publicly_accessible}
  */
  readonly isPubliclyAccessible?: boolean | cdktn.IResolvable;
}
export class IngressConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IngressConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPubliclyAccessible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPubliclyAccessible = this._isPubliclyAccessible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IngressConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPubliclyAccessible = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPubliclyAccessible = value.isPubliclyAccessible;
    }
  }

  // is_publicly_accessible - computed: false, optional: true, required: false
  private _isPubliclyAccessible?: boolean | cdktn.IResolvable; 
  public get isPubliclyAccessible() {
    return this.getBooleanAttribute('is_publicly_accessible');
  }
  public set isPubliclyAccessible(value: boolean | cdktn.IResolvable) {
    this._isPubliclyAccessible = value;
  }
  public resetIsPubliclyAccessible() {
    this._isPubliclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPubliclyAccessibleInput() {
    return this._isPubliclyAccessible;
  }
}
export interface NetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#ip_address_type AwsApprunnerService#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * egress_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#egress_configuration AwsApprunnerService#egress_configuration}
  */
  readonly egressConfiguration?: EgressConfigurationProperty;
  /**
  * ingress_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#ingress_configuration AwsApprunnerService#ingress_configuration}
  */
  readonly ingressConfiguration?: IngressConfigurationProperty;
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
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._egressConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressConfiguration = this._egressConfiguration?.internalValue;
    }
    if (this._ingressConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressConfiguration = this._ingressConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddressType = undefined;
      this._egressConfiguration.internalValue = undefined;
      this._ingressConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddressType = value.ipAddressType;
      this._egressConfiguration.internalValue = value.egressConfiguration;
      this._ingressConfiguration.internalValue = value.ingressConfiguration;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // egress_configuration - computed: false, optional: true, required: false
  private _egressConfiguration = new EgressConfigurationPropertyOutputReference(this, "egress_configuration");
  public get egressConfiguration() {
    return this._egressConfiguration;
  }
  public putEgressConfiguration(value: EgressConfigurationProperty) {
    this._egressConfiguration.internalValue = value;
  }
  public resetEgressConfiguration() {
    this._egressConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressConfigurationInput() {
    return this._egressConfiguration.internalValue;
  }

  // ingress_configuration - computed: false, optional: true, required: false
  private _ingressConfiguration = new IngressConfigurationPropertyOutputReference(this, "ingress_configuration");
  public get ingressConfiguration() {
    return this._ingressConfiguration;
  }
  public putIngressConfiguration(value: IngressConfigurationProperty) {
    this._ingressConfiguration.internalValue = value;
  }
  public resetIngressConfiguration() {
    this._ingressConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressConfigurationInput() {
    return this._ingressConfiguration.internalValue;
  }
}
export interface ObservabilityConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#observability_configuration_arn AwsApprunnerService#observability_configuration_arn}
  */
  readonly observabilityConfigurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#observability_enabled AwsApprunnerService#observability_enabled}
  */
  readonly observabilityEnabled: boolean | cdktn.IResolvable;
}
export class ObservabilityConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObservabilityConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observabilityConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.observabilityConfigurationArn = this._observabilityConfigurationArn;
    }
    if (this._observabilityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.observabilityEnabled = this._observabilityEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observabilityConfigurationArn = undefined;
      this._observabilityEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observabilityConfigurationArn = value.observabilityConfigurationArn;
      this._observabilityEnabled = value.observabilityEnabled;
    }
  }

  // observability_configuration_arn - computed: false, optional: true, required: false
  private _observabilityConfigurationArn?: string; 
  public get observabilityConfigurationArn() {
    return this.getStringAttribute('observability_configuration_arn');
  }
  public set observabilityConfigurationArn(value: string) {
    this._observabilityConfigurationArn = value;
  }
  public resetObservabilityConfigurationArn() {
    this._observabilityConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityConfigurationArnInput() {
    return this._observabilityConfigurationArn;
  }

  // observability_enabled - computed: false, optional: false, required: true
  private _observabilityEnabled?: boolean | cdktn.IResolvable; 
  public get observabilityEnabled() {
    return this.getBooleanAttribute('observability_enabled');
  }
  public set observabilityEnabled(value: boolean | cdktn.IResolvable) {
    this._observabilityEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityEnabledInput() {
    return this._observabilityEnabled;
  }
}
export interface AuthenticationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#access_role_arn AwsApprunnerService#access_role_arn}
  */
  readonly accessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#connection_arn AwsApprunnerService#connection_arn}
  */
  readonly connectionArn?: string;
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
    if (this._accessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRoleArn = this._accessRoleArn;
    }
    if (this._connectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionArn = this._connectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessRoleArn = undefined;
      this._connectionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessRoleArn = value.accessRoleArn;
      this._connectionArn = value.connectionArn;
    }
  }

  // access_role_arn - computed: false, optional: true, required: false
  private _accessRoleArn?: string; 
  public get accessRoleArn() {
    return this.getStringAttribute('access_role_arn');
  }
  public set accessRoleArn(value: string) {
    this._accessRoleArn = value;
  }
  public resetAccessRoleArn() {
    this._accessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRoleArnInput() {
    return this._accessRoleArn;
  }

  // connection_arn - computed: false, optional: true, required: false
  private _connectionArn?: string; 
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }
  public set connectionArn(value: string) {
    this._connectionArn = value;
  }
  public resetConnectionArn() {
    this._connectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionArnInput() {
    return this._connectionArn;
  }
}
export interface CodeConfigurationValuesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#build_command AwsApprunnerService#build_command}
  */
  readonly buildCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#port AwsApprunnerService#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#runtime AwsApprunnerService#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#runtime_environment_secrets AwsApprunnerService#runtime_environment_secrets}
  */
  readonly runtimeEnvironmentSecrets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#runtime_environment_variables AwsApprunnerService#runtime_environment_variables}
  */
  readonly runtimeEnvironmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#start_command AwsApprunnerService#start_command}
  */
  readonly startCommand?: string;
}
export class CodeConfigurationValuesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeConfigurationValuesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCommand = this._buildCommand;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    if (this._runtimeEnvironmentSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironmentSecrets = this._runtimeEnvironmentSecrets;
    }
    if (this._runtimeEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironmentVariables = this._runtimeEnvironmentVariables;
    }
    if (this._startCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.startCommand = this._startCommand;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeConfigurationValuesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildCommand = undefined;
      this._port = undefined;
      this._runtime = undefined;
      this._runtimeEnvironmentSecrets = undefined;
      this._runtimeEnvironmentVariables = undefined;
      this._startCommand = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildCommand = value.buildCommand;
      this._port = value.port;
      this._runtime = value.runtime;
      this._runtimeEnvironmentSecrets = value.runtimeEnvironmentSecrets;
      this._runtimeEnvironmentVariables = value.runtimeEnvironmentVariables;
      this._startCommand = value.startCommand;
    }
  }

  // build_command - computed: false, optional: true, required: false
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  public resetBuildCommand() {
    this._buildCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // runtime_environment_secrets - computed: false, optional: true, required: false
  private _runtimeEnvironmentSecrets?: { [key: string]: string }; 
  public get runtimeEnvironmentSecrets() {
    return this.getStringMapAttribute('runtime_environment_secrets');
  }
  public set runtimeEnvironmentSecrets(value: { [key: string]: string }) {
    this._runtimeEnvironmentSecrets = value;
  }
  public resetRuntimeEnvironmentSecrets() {
    this._runtimeEnvironmentSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentSecretsInput() {
    return this._runtimeEnvironmentSecrets;
  }

  // runtime_environment_variables - computed: false, optional: true, required: false
  private _runtimeEnvironmentVariables?: { [key: string]: string }; 
  public get runtimeEnvironmentVariables() {
    return this.getStringMapAttribute('runtime_environment_variables');
  }
  public set runtimeEnvironmentVariables(value: { [key: string]: string }) {
    this._runtimeEnvironmentVariables = value;
  }
  public resetRuntimeEnvironmentVariables() {
    this._runtimeEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentVariablesInput() {
    return this._runtimeEnvironmentVariables;
  }

  // start_command - computed: false, optional: true, required: false
  private _startCommand?: string; 
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }
  public set startCommand(value: string) {
    this._startCommand = value;
  }
  public resetStartCommand() {
    this._startCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startCommandInput() {
    return this._startCommand;
  }
}
export interface CodeConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#configuration_source AwsApprunnerService#configuration_source}
  */
  readonly configurationSource: string;
  /**
  * code_configuration_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#code_configuration_values AwsApprunnerService#code_configuration_values}
  */
  readonly codeConfigurationValues?: CodeConfigurationValuesProperty;
}
export class CodeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationSource = this._configurationSource;
    }
    if (this._codeConfigurationValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeConfigurationValues = this._codeConfigurationValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationSource = undefined;
      this._codeConfigurationValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationSource = value.configurationSource;
      this._codeConfigurationValues.internalValue = value.codeConfigurationValues;
    }
  }

  // configuration_source - computed: false, optional: false, required: true
  private _configurationSource?: string; 
  public get configurationSource() {
    return this.getStringAttribute('configuration_source');
  }
  public set configurationSource(value: string) {
    this._configurationSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSourceInput() {
    return this._configurationSource;
  }

  // code_configuration_values - computed: false, optional: true, required: false
  private _codeConfigurationValues = new CodeConfigurationValuesPropertyOutputReference(this, "code_configuration_values");
  public get codeConfigurationValues() {
    return this._codeConfigurationValues;
  }
  public putCodeConfigurationValues(value: CodeConfigurationValuesProperty) {
    this._codeConfigurationValues.internalValue = value;
  }
  public resetCodeConfigurationValues() {
    this._codeConfigurationValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeConfigurationValuesInput() {
    return this._codeConfigurationValues.internalValue;
  }
}
export interface SourceCodeVersionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#type AwsApprunnerService#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#value AwsApprunnerService#value}
  */
  readonly value: string;
}
export class SourceCodeVersionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceCodeVersionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceCodeVersionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
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
export interface CodeRepositoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#repository_url AwsApprunnerService#repository_url}
  */
  readonly repositoryUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#source_directory AwsApprunnerService#source_directory}
  */
  readonly sourceDirectory?: string;
  /**
  * code_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#code_configuration AwsApprunnerService#code_configuration}
  */
  readonly codeConfiguration?: CodeConfigurationProperty;
  /**
  * source_code_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#source_code_version AwsApprunnerService#source_code_version}
  */
  readonly sourceCodeVersion: SourceCodeVersionProperty;
}
export class CodeRepositoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeRepositoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    if (this._sourceDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDirectory = this._sourceDirectory;
    }
    if (this._codeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeConfiguration = this._codeConfiguration?.internalValue;
    }
    if (this._sourceCodeVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodeVersion = this._sourceCodeVersion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeRepositoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryUrl = undefined;
      this._sourceDirectory = undefined;
      this._codeConfiguration.internalValue = undefined;
      this._sourceCodeVersion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryUrl = value.repositoryUrl;
      this._sourceDirectory = value.sourceDirectory;
      this._codeConfiguration.internalValue = value.codeConfiguration;
      this._sourceCodeVersion.internalValue = value.sourceCodeVersion;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // source_directory - computed: true, optional: true, required: false
  private _sourceDirectory?: string; 
  public get sourceDirectory() {
    return this.getStringAttribute('source_directory');
  }
  public set sourceDirectory(value: string) {
    this._sourceDirectory = value;
  }
  public resetSourceDirectory() {
    this._sourceDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDirectoryInput() {
    return this._sourceDirectory;
  }

  // code_configuration - computed: false, optional: true, required: false
  private _codeConfiguration = new CodeConfigurationPropertyOutputReference(this, "code_configuration");
  public get codeConfiguration() {
    return this._codeConfiguration;
  }
  public putCodeConfiguration(value: CodeConfigurationProperty) {
    this._codeConfiguration.internalValue = value;
  }
  public resetCodeConfiguration() {
    this._codeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeConfigurationInput() {
    return this._codeConfiguration.internalValue;
  }

  // source_code_version - computed: false, optional: false, required: true
  private _sourceCodeVersion = new SourceCodeVersionPropertyOutputReference(this, "source_code_version");
  public get sourceCodeVersion() {
    return this._sourceCodeVersion;
  }
  public putSourceCodeVersion(value: SourceCodeVersionProperty) {
    this._sourceCodeVersion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeVersionInput() {
    return this._sourceCodeVersion.internalValue;
  }
}
export interface ImageConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#port AwsApprunnerService#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#runtime_environment_secrets AwsApprunnerService#runtime_environment_secrets}
  */
  readonly runtimeEnvironmentSecrets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#runtime_environment_variables AwsApprunnerService#runtime_environment_variables}
  */
  readonly runtimeEnvironmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#start_command AwsApprunnerService#start_command}
  */
  readonly startCommand?: string;
}
export class ImageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImageConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._runtimeEnvironmentSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironmentSecrets = this._runtimeEnvironmentSecrets;
    }
    if (this._runtimeEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironmentVariables = this._runtimeEnvironmentVariables;
    }
    if (this._startCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.startCommand = this._startCommand;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._runtimeEnvironmentSecrets = undefined;
      this._runtimeEnvironmentVariables = undefined;
      this._startCommand = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._runtimeEnvironmentSecrets = value.runtimeEnvironmentSecrets;
      this._runtimeEnvironmentVariables = value.runtimeEnvironmentVariables;
      this._startCommand = value.startCommand;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // runtime_environment_secrets - computed: false, optional: true, required: false
  private _runtimeEnvironmentSecrets?: { [key: string]: string }; 
  public get runtimeEnvironmentSecrets() {
    return this.getStringMapAttribute('runtime_environment_secrets');
  }
  public set runtimeEnvironmentSecrets(value: { [key: string]: string }) {
    this._runtimeEnvironmentSecrets = value;
  }
  public resetRuntimeEnvironmentSecrets() {
    this._runtimeEnvironmentSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentSecretsInput() {
    return this._runtimeEnvironmentSecrets;
  }

  // runtime_environment_variables - computed: false, optional: true, required: false
  private _runtimeEnvironmentVariables?: { [key: string]: string }; 
  public get runtimeEnvironmentVariables() {
    return this.getStringMapAttribute('runtime_environment_variables');
  }
  public set runtimeEnvironmentVariables(value: { [key: string]: string }) {
    this._runtimeEnvironmentVariables = value;
  }
  public resetRuntimeEnvironmentVariables() {
    this._runtimeEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentVariablesInput() {
    return this._runtimeEnvironmentVariables;
  }

  // start_command - computed: false, optional: true, required: false
  private _startCommand?: string; 
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }
  public set startCommand(value: string) {
    this._startCommand = value;
  }
  public resetStartCommand() {
    this._startCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startCommandInput() {
    return this._startCommand;
  }
}
export interface ImageRepositoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#image_identifier AwsApprunnerService#image_identifier}
  */
  readonly imageIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#image_repository_type AwsApprunnerService#image_repository_type}
  */
  readonly imageRepositoryType: string;
  /**
  * image_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#image_configuration AwsApprunnerService#image_configuration}
  */
  readonly imageConfiguration?: ImageConfigurationProperty;
}
export class ImageRepositoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImageRepositoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageIdentifier = this._imageIdentifier;
    }
    if (this._imageRepositoryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepositoryType = this._imageRepositoryType;
    }
    if (this._imageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConfiguration = this._imageConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageRepositoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageIdentifier = undefined;
      this._imageRepositoryType = undefined;
      this._imageConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageIdentifier = value.imageIdentifier;
      this._imageRepositoryType = value.imageRepositoryType;
      this._imageConfiguration.internalValue = value.imageConfiguration;
    }
  }

  // image_identifier - computed: false, optional: false, required: true
  private _imageIdentifier?: string; 
  public get imageIdentifier() {
    return this.getStringAttribute('image_identifier');
  }
  public set imageIdentifier(value: string) {
    this._imageIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdentifierInput() {
    return this._imageIdentifier;
  }

  // image_repository_type - computed: false, optional: false, required: true
  private _imageRepositoryType?: string; 
  public get imageRepositoryType() {
    return this.getStringAttribute('image_repository_type');
  }
  public set imageRepositoryType(value: string) {
    this._imageRepositoryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepositoryTypeInput() {
    return this._imageRepositoryType;
  }

  // image_configuration - computed: false, optional: true, required: false
  private _imageConfiguration = new ImageConfigurationPropertyOutputReference(this, "image_configuration");
  public get imageConfiguration() {
    return this._imageConfiguration;
  }
  public putImageConfiguration(value: ImageConfigurationProperty) {
    this._imageConfiguration.internalValue = value;
  }
  public resetImageConfiguration() {
    this._imageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigurationInput() {
    return this._imageConfiguration.internalValue;
  }
}
export interface SourceConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#auto_deployments_enabled AwsApprunnerService#auto_deployments_enabled}
  */
  readonly autoDeploymentsEnabled?: boolean | cdktn.IResolvable;
  /**
  * authentication_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#authentication_configuration AwsApprunnerService#authentication_configuration}
  */
  readonly authenticationConfiguration?: AuthenticationConfigurationProperty;
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#code_repository AwsApprunnerService#code_repository}
  */
  readonly codeRepository?: CodeRepositoryProperty;
  /**
  * image_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_service#image_repository AwsApprunnerService#image_repository}
  */
  readonly imageRepository?: ImageRepositoryProperty;
}
export class SourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeploymentsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeploymentsEnabled = this._autoDeploymentsEnabled;
    }
    if (this._authenticationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._imageRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepository = this._imageRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDeploymentsEnabled = undefined;
      this._authenticationConfiguration.internalValue = undefined;
      this._codeRepository.internalValue = undefined;
      this._imageRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDeploymentsEnabled = value.autoDeploymentsEnabled;
      this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
      this._codeRepository.internalValue = value.codeRepository;
      this._imageRepository.internalValue = value.imageRepository;
    }
  }

  // auto_deployments_enabled - computed: false, optional: true, required: false
  private _autoDeploymentsEnabled?: boolean | cdktn.IResolvable; 
  public get autoDeploymentsEnabled() {
    return this.getBooleanAttribute('auto_deployments_enabled');
  }
  public set autoDeploymentsEnabled(value: boolean | cdktn.IResolvable) {
    this._autoDeploymentsEnabled = value;
  }
  public resetAutoDeploymentsEnabled() {
    this._autoDeploymentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeploymentsEnabledInput() {
    return this._autoDeploymentsEnabled;
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration = new AuthenticationConfigurationPropertyOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public putAuthenticationConfiguration(value: AuthenticationConfigurationProperty) {
    this._authenticationConfiguration.internalValue = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration.internalValue;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new CodeRepositoryPropertyOutputReference(this, "code_repository");
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: CodeRepositoryProperty) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // image_repository - computed: false, optional: true, required: false
  private _imageRepository = new ImageRepositoryPropertyOutputReference(this, "image_repository");
  public get imageRepository() {
    return this._imageRepository;
  }
  public putImageRepository(value: ImageRepositoryProperty) {
    this._imageRepository.internalValue = value;
  }
  public resetImageRepository() {
    this._imageRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepositoryInput() {
    return this._imageRepository.internalValue;
  }
}
}
