// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsImagebuilderImagePipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#container_recipe_arn AwsImagebuilderImagePipeline#container_recipe_arn}
  */
  readonly containerRecipeArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#description AwsImagebuilderImagePipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn AwsImagebuilderImagePipeline#distribution_configuration_arn}
  */
  readonly distributionConfigurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled AwsImagebuilderImagePipeline#enhanced_image_metadata_enabled}
  */
  readonly enhancedImageMetadataEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#execution_role AwsImagebuilderImagePipeline#execution_role}
  */
  readonly executionRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#id AwsImagebuilderImagePipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#image_recipe_arn AwsImagebuilderImagePipeline#image_recipe_arn}
  */
  readonly imageRecipeArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn AwsImagebuilderImagePipeline#infrastructure_configuration_arn}
  */
  readonly infrastructureConfigurationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#name AwsImagebuilderImagePipeline#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#region AwsImagebuilderImagePipeline#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#status AwsImagebuilderImagePipeline#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#tags AwsImagebuilderImagePipeline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#tags_all AwsImagebuilderImagePipeline#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * image_scanning_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#image_scanning_configuration AwsImagebuilderImagePipeline#image_scanning_configuration}
  */
  readonly imageScanningConfiguration?: AwsImagebuilderImagePipeline.ImageScanningConfigurationProperty;
  /**
  * image_tests_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#image_tests_configuration AwsImagebuilderImagePipeline#image_tests_configuration}
  */
  readonly imageTestsConfiguration?: AwsImagebuilderImagePipeline.ImageTestsConfigurationProperty;
  /**
  * logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#logging_configuration AwsImagebuilderImagePipeline#logging_configuration}
  */
  readonly loggingConfiguration?: AwsImagebuilderImagePipeline.LoggingConfigurationProperty;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#schedule AwsImagebuilderImagePipeline#schedule}
  */
  readonly schedule?: AwsImagebuilderImagePipeline.ScheduleProperty;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#workflow AwsImagebuilderImagePipeline#workflow}
  */
  readonly workflow?: AwsImagebuilderImagePipeline.WorkflowProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline aws_imagebuilder_image_pipeline}
*/
export class AwsImagebuilderImagePipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_imagebuilder_image_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsImagebuilderImagePipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsImagebuilderImagePipeline to import
  * @param importFromId The id of the existing AwsImagebuilderImagePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsImagebuilderImagePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_imagebuilder_image_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline aws_imagebuilder_image_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsImagebuilderImagePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: AwsImagebuilderImagePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_image_pipeline',
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
    this._containerRecipeArn = config.containerRecipeArn;
    this._description = config.description;
    this._distributionConfigurationArn = config.distributionConfigurationArn;
    this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
    this._executionRole = config.executionRole;
    this._id = config.id;
    this._imageRecipeArn = config.imageRecipeArn;
    this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._imageScanningConfiguration.internalValue = config.imageScanningConfiguration;
    this._imageTestsConfiguration.internalValue = config.imageTestsConfiguration;
    this._loggingConfiguration.internalValue = config.loggingConfiguration;
    this._schedule.internalValue = config.schedule;
    this._workflow.internalValue = config.workflow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_recipe_arn - computed: false, optional: true, required: false
  private _containerRecipeArn?: string; 
  public get containerRecipeArn() {
    return this.getStringAttribute('container_recipe_arn');
  }
  public set containerRecipeArn(value: string) {
    this._containerRecipeArn = value;
  }
  public resetContainerRecipeArn() {
    this._containerRecipeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRecipeArnInput() {
    return this._containerRecipeArn;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_last_run - computed: true, optional: false, required: false
  public get dateLastRun() {
    return this.getStringAttribute('date_last_run');
  }

  // date_next_run - computed: true, optional: false, required: false
  public get dateNextRun() {
    return this.getStringAttribute('date_next_run');
  }

  // date_updated - computed: true, optional: false, required: false
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
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

  // distribution_configuration_arn - computed: false, optional: true, required: false
  private _distributionConfigurationArn?: string; 
  public get distributionConfigurationArn() {
    return this.getStringAttribute('distribution_configuration_arn');
  }
  public set distributionConfigurationArn(value: string) {
    this._distributionConfigurationArn = value;
  }
  public resetDistributionConfigurationArn() {
    this._distributionConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionConfigurationArnInput() {
    return this._distributionConfigurationArn;
  }

  // enhanced_image_metadata_enabled - computed: false, optional: true, required: false
  private _enhancedImageMetadataEnabled?: boolean | cdktn.IResolvable; 
  public get enhancedImageMetadataEnabled() {
    return this.getBooleanAttribute('enhanced_image_metadata_enabled');
  }
  public set enhancedImageMetadataEnabled(value: boolean | cdktn.IResolvable) {
    this._enhancedImageMetadataEnabled = value;
  }
  public resetEnhancedImageMetadataEnabled() {
    this._enhancedImageMetadataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedImageMetadataEnabledInput() {
    return this._enhancedImageMetadataEnabled;
  }

  // execution_role - computed: false, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
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

  // image_recipe_arn - computed: false, optional: true, required: false
  private _imageRecipeArn?: string; 
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }
  public set imageRecipeArn(value: string) {
    this._imageRecipeArn = value;
  }
  public resetImageRecipeArn() {
    this._imageRecipeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRecipeArnInput() {
    return this._imageRecipeArn;
  }

  // infrastructure_configuration_arn - computed: false, optional: false, required: true
  private _infrastructureConfigurationArn?: string; 
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }
  public set infrastructureConfigurationArn(value: string) {
    this._infrastructureConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigurationArnInput() {
    return this._infrastructureConfigurationArn;
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

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
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

  // image_scanning_configuration - computed: false, optional: true, required: false
  private _imageScanningConfiguration = new AwsImagebuilderImagePipeline.ImageScanningConfigurationPropertyOutputReference(this, "image_scanning_configuration");
  public get imageScanningConfiguration() {
    return this._imageScanningConfiguration;
  }
  public putImageScanningConfiguration(value: AwsImagebuilderImagePipeline.ImageScanningConfigurationProperty) {
    this._imageScanningConfiguration.internalValue = value;
  }
  public resetImageScanningConfiguration() {
    this._imageScanningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningConfigurationInput() {
    return this._imageScanningConfiguration.internalValue;
  }

  // image_tests_configuration - computed: false, optional: true, required: false
  private _imageTestsConfiguration = new AwsImagebuilderImagePipeline.ImageTestsConfigurationPropertyOutputReference(this, "image_tests_configuration");
  public get imageTestsConfiguration() {
    return this._imageTestsConfiguration;
  }
  public putImageTestsConfiguration(value: AwsImagebuilderImagePipeline.ImageTestsConfigurationProperty) {
    this._imageTestsConfiguration.internalValue = value;
  }
  public resetImageTestsConfiguration() {
    this._imageTestsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTestsConfigurationInput() {
    return this._imageTestsConfiguration.internalValue;
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration = new AwsImagebuilderImagePipeline.LoggingConfigurationPropertyOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: AwsImagebuilderImagePipeline.LoggingConfigurationProperty) {
    this._loggingConfiguration.internalValue = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new AwsImagebuilderImagePipeline.SchedulePropertyOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AwsImagebuilderImagePipeline.ScheduleProperty) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new AwsImagebuilderImagePipeline.WorkflowPropertyList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: AwsImagebuilderImagePipeline.WorkflowProperty[] | cdktn.IResolvable) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_recipe_arn: cdktn.stringToTerraform(this._containerRecipeArn),
      description: cdktn.stringToTerraform(this._description),
      distribution_configuration_arn: cdktn.stringToTerraform(this._distributionConfigurationArn),
      enhanced_image_metadata_enabled: cdktn.booleanToTerraform(this._enhancedImageMetadataEnabled),
      execution_role: cdktn.stringToTerraform(this._executionRole),
      id: cdktn.stringToTerraform(this._id),
      image_recipe_arn: cdktn.stringToTerraform(this._imageRecipeArn),
      infrastructure_configuration_arn: cdktn.stringToTerraform(this._infrastructureConfigurationArn),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      image_scanning_configuration: awsImagebuilderImagePipelineImageScanningConfigurationPropertyToTerraform(this._imageScanningConfiguration.internalValue),
      image_tests_configuration: awsImagebuilderImagePipelineImageTestsConfigurationPropertyToTerraform(this._imageTestsConfiguration.internalValue),
      logging_configuration: awsImagebuilderImagePipelineLoggingConfigurationPropertyToTerraform(this._loggingConfiguration.internalValue),
      schedule: awsImagebuilderImagePipelineSchedulePropertyToTerraform(this._schedule.internalValue),
      workflow: cdktn.listMapper(awsImagebuilderImagePipelineWorkflowPropertyToTerraform, true)(this._workflow.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_recipe_arn: {
        value: cdktn.stringToHclTerraform(this._containerRecipeArn),
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
      distribution_configuration_arn: {
        value: cdktn.stringToHclTerraform(this._distributionConfigurationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_image_metadata_enabled: {
        value: cdktn.booleanToHclTerraform(this._enhancedImageMetadataEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_role: {
        value: cdktn.stringToHclTerraform(this._executionRole),
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
      image_recipe_arn: {
        value: cdktn.stringToHclTerraform(this._imageRecipeArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrastructure_configuration_arn: {
        value: cdktn.stringToHclTerraform(this._infrastructureConfigurationArn),
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
      image_scanning_configuration: {
        value: awsImagebuilderImagePipelineImageScanningConfigurationPropertyToHclTerraform(this._imageScanningConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsImagebuilderImagePipeline.ImageScanningConfigurationPropertyList",
      },
      image_tests_configuration: {
        value: awsImagebuilderImagePipelineImageTestsConfigurationPropertyToHclTerraform(this._imageTestsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsImagebuilderImagePipeline.ImageTestsConfigurationPropertyList",
      },
      logging_configuration: {
        value: awsImagebuilderImagePipelineLoggingConfigurationPropertyToHclTerraform(this._loggingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsImagebuilderImagePipeline.LoggingConfigurationPropertyList",
      },
      schedule: {
        value: awsImagebuilderImagePipelineSchedulePropertyToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsImagebuilderImagePipeline.SchedulePropertyList",
      },
      workflow: {
        value: cdktn.listMapperHcl(awsImagebuilderImagePipelineWorkflowPropertyToHclTerraform, true)(this._workflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsImagebuilderImagePipeline.WorkflowPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsImagebuilderImagePipelineEcrConfigurationPropertyToTerraform(struct?: AwsImagebuilderImagePipeline.EcrConfigurationPropertyOutputReference | AwsImagebuilderImagePipeline.EcrConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerTags),
    repository_name: cdktn.stringToTerraform(struct!.repositoryName),
  }
}


export function awsImagebuilderImagePipelineEcrConfigurationPropertyToHclTerraform(struct?: AwsImagebuilderImagePipeline.EcrConfigurationPropertyOutputReference | AwsImagebuilderImagePipeline.EcrConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repository_name: {
      value: cdktn.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsImagebuilderImagePipelineImageScanningConfigurationPropertyToTerraform(struct?: AwsImagebuilderImagePipeline.ImageScanningConfigurationPropertyOutputReference | AwsImagebuilderImagePipeline.ImageScanningConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_scanning_enabled: cdktn.booleanToTerraform(struct!.imageScanningEnabled),
    ecr_configuration: awsImagebuilderImagePipelineEcrConfigurationPropertyToTerraform(struct!.ecrConfiguration),
  }
}


export function awsImagebuilderImagePipelineImageScanningConfigurationPropertyToHclTerraform(struct?: AwsImagebuilderImagePipeline.ImageScanningConfigurationPropertyOutputReference | AwsImagebuilderImagePipeline.ImageScanningConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_scanning_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.imageScanningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ecr_configuration: {
      value: awsImagebuilderImagePipelineEcrConfigurationPropertyToHclTerraform(struct!.ecrConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcrConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsImagebuilderImagePipelineImageTestsConfigurationPropertyToTerraform(struct?: AwsImagebuilderImagePipeline.ImageTestsConfigurationPropertyOutputReference | AwsImagebuilderImagePipeline.ImageTestsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_tests_enabled: cdktn.booleanToTerraform(struct!.imageTestsEnabled),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function awsImagebuilderImagePipelineImageTestsConfigurationPropertyToHclTerraform(struct?: AwsImagebuilderImagePipeline.ImageTestsConfigurationPropertyOutputReference | AwsImagebuilderImagePipeline.ImageTestsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_tests_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.imageTestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsImagebuilderImagePipelineLoggingConfigurationPropertyToTerraform(struct?: AwsImagebuilderImagePipeline.LoggingConfigurationPropertyOutputReference | AwsImagebuilderImagePipeline.LoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_log_group_name: cdktn.stringToTerraform(struct!.imageLogGroupName),
    pipeline_log_group_name: cdktn.stringToTerraform(struct!.pipelineLogGroupName),
  }
}


export function awsImagebuilderImagePipelineLoggingConfigurationPropertyToHclTerraform(struct?: AwsImagebuilderImagePipeline.LoggingConfigurationPropertyOutputReference | AwsImagebuilderImagePipeline.LoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.imageLogGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.pipelineLogGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsImagebuilderImagePipelineSchedulePropertyToTerraform(struct?: AwsImagebuilderImagePipeline.SchedulePropertyOutputReference | AwsImagebuilderImagePipeline.ScheduleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pipeline_execution_start_condition: cdktn.stringToTerraform(struct!.pipelineExecutionStartCondition),
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    timezone: cdktn.stringToTerraform(struct!.timezone),
  }
}


export function awsImagebuilderImagePipelineSchedulePropertyToHclTerraform(struct?: AwsImagebuilderImagePipeline.SchedulePropertyOutputReference | AwsImagebuilderImagePipeline.ScheduleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pipeline_execution_start_condition: {
      value: cdktn.stringToHclTerraform(struct!.pipelineExecutionStartCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsImagebuilderImagePipelineParameterPropertyToTerraform(struct?: AwsImagebuilderImagePipeline.ParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsImagebuilderImagePipelineParameterPropertyToHclTerraform(struct?: AwsImagebuilderImagePipeline.ParameterProperty | cdktn.IResolvable): any {
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


export function awsImagebuilderImagePipelineWorkflowPropertyToTerraform(struct?: AwsImagebuilderImagePipeline.WorkflowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_failure: cdktn.stringToTerraform(struct!.onFailure),
    parallel_group: cdktn.stringToTerraform(struct!.parallelGroup),
    workflow_arn: cdktn.stringToTerraform(struct!.workflowArn),
    parameter: cdktn.listMapper(awsImagebuilderImagePipelineParameterPropertyToTerraform, true)(struct!.parameter),
  }
}


export function awsImagebuilderImagePipelineWorkflowPropertyToHclTerraform(struct?: AwsImagebuilderImagePipeline.WorkflowProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_failure: {
      value: cdktn.stringToHclTerraform(struct!.onFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallel_group: {
      value: cdktn.stringToHclTerraform(struct!.parallelGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_arn: {
      value: cdktn.stringToHclTerraform(struct!.workflowArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter: {
      value: cdktn.listMapperHcl(awsImagebuilderImagePipelineParameterPropertyToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ParameterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsImagebuilderImagePipeline {
export interface EcrConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#container_tags AwsImagebuilderImagePipeline#container_tags}
  */
  readonly containerTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#repository_name AwsImagebuilderImagePipeline#repository_name}
  */
  readonly repositoryName?: string;
}
export class EcrConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcrConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerTags = this._containerTags;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerTags = undefined;
      this._repositoryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerTags = value.containerTags;
      this._repositoryName = value.repositoryName;
    }
  }

  // container_tags - computed: false, optional: true, required: false
  private _containerTags?: string[]; 
  public get containerTags() {
    return cdktn.Fn.tolist(this.getListAttribute('container_tags'));
  }
  public set containerTags(value: string[]) {
    this._containerTags = value;
  }
  public resetContainerTags() {
    this._containerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTagsInput() {
    return this._containerTags;
  }

  // repository_name - computed: false, optional: true, required: false
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  public resetRepositoryName() {
    this._repositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }
}
export interface ImageScanningConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled AwsImagebuilderImagePipeline#image_scanning_enabled}
  */
  readonly imageScanningEnabled?: boolean | cdktn.IResolvable;
  /**
  * ecr_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#ecr_configuration AwsImagebuilderImagePipeline#ecr_configuration}
  */
  readonly ecrConfiguration?: EcrConfigurationProperty;
}
export class ImageScanningConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImageScanningConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageScanningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageScanningEnabled = this._imageScanningEnabled;
    }
    if (this._ecrConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrConfiguration = this._ecrConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageScanningConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageScanningEnabled = undefined;
      this._ecrConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageScanningEnabled = value.imageScanningEnabled;
      this._ecrConfiguration.internalValue = value.ecrConfiguration;
    }
  }

  // image_scanning_enabled - computed: false, optional: true, required: false
  private _imageScanningEnabled?: boolean | cdktn.IResolvable; 
  public get imageScanningEnabled() {
    return this.getBooleanAttribute('image_scanning_enabled');
  }
  public set imageScanningEnabled(value: boolean | cdktn.IResolvable) {
    this._imageScanningEnabled = value;
  }
  public resetImageScanningEnabled() {
    this._imageScanningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningEnabledInput() {
    return this._imageScanningEnabled;
  }

  // ecr_configuration - computed: false, optional: true, required: false
  private _ecrConfiguration = new EcrConfigurationPropertyOutputReference(this, "ecr_configuration");
  public get ecrConfiguration() {
    return this._ecrConfiguration;
  }
  public putEcrConfiguration(value: EcrConfigurationProperty) {
    this._ecrConfiguration.internalValue = value;
  }
  public resetEcrConfiguration() {
    this._ecrConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrConfigurationInput() {
    return this._ecrConfiguration.internalValue;
  }
}
export interface ImageTestsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#image_tests_enabled AwsImagebuilderImagePipeline#image_tests_enabled}
  */
  readonly imageTestsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#timeout_minutes AwsImagebuilderImagePipeline#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}
export class ImageTestsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImageTestsConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageTestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTestsEnabled = this._imageTestsEnabled;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageTestsConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageTestsEnabled = undefined;
      this._timeoutMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageTestsEnabled = value.imageTestsEnabled;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // image_tests_enabled - computed: false, optional: true, required: false
  private _imageTestsEnabled?: boolean | cdktn.IResolvable; 
  public get imageTestsEnabled() {
    return this.getBooleanAttribute('image_tests_enabled');
  }
  public set imageTestsEnabled(value: boolean | cdktn.IResolvable) {
    this._imageTestsEnabled = value;
  }
  public resetImageTestsEnabled() {
    this._imageTestsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTestsEnabledInput() {
    return this._imageTestsEnabled;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}
export interface LoggingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#image_log_group_name AwsImagebuilderImagePipeline#image_log_group_name}
  */
  readonly imageLogGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#pipeline_log_group_name AwsImagebuilderImagePipeline#pipeline_log_group_name}
  */
  readonly pipelineLogGroupName?: string;
}
export class LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageLogGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLogGroupName = this._imageLogGroupName;
    }
    if (this._pipelineLogGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineLogGroupName = this._pipelineLogGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageLogGroupName = undefined;
      this._pipelineLogGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageLogGroupName = value.imageLogGroupName;
      this._pipelineLogGroupName = value.pipelineLogGroupName;
    }
  }

  // image_log_group_name - computed: false, optional: true, required: false
  private _imageLogGroupName?: string; 
  public get imageLogGroupName() {
    return this.getStringAttribute('image_log_group_name');
  }
  public set imageLogGroupName(value: string) {
    this._imageLogGroupName = value;
  }
  public resetImageLogGroupName() {
    this._imageLogGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLogGroupNameInput() {
    return this._imageLogGroupName;
  }

  // pipeline_log_group_name - computed: false, optional: true, required: false
  private _pipelineLogGroupName?: string; 
  public get pipelineLogGroupName() {
    return this.getStringAttribute('pipeline_log_group_name');
  }
  public set pipelineLogGroupName(value: string) {
    this._pipelineLogGroupName = value;
  }
  public resetPipelineLogGroupName() {
    this._pipelineLogGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineLogGroupNameInput() {
    return this._pipelineLogGroupName;
  }
}
export interface ScheduleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition AwsImagebuilderImagePipeline#pipeline_execution_start_condition}
  */
  readonly pipelineExecutionStartCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#schedule_expression AwsImagebuilderImagePipeline#schedule_expression}
  */
  readonly scheduleExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#timezone AwsImagebuilderImagePipeline#timezone}
  */
  readonly timezone?: string;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScheduleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineExecutionStartCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineExecutionStartCondition = this._pipelineExecutionStartCondition;
    }
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pipelineExecutionStartCondition = undefined;
      this._scheduleExpression = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pipelineExecutionStartCondition = value.pipelineExecutionStartCondition;
      this._scheduleExpression = value.scheduleExpression;
      this._timezone = value.timezone;
    }
  }

  // pipeline_execution_start_condition - computed: false, optional: true, required: false
  private _pipelineExecutionStartCondition?: string; 
  public get pipelineExecutionStartCondition() {
    return this.getStringAttribute('pipeline_execution_start_condition');
  }
  public set pipelineExecutionStartCondition(value: string) {
    this._pipelineExecutionStartCondition = value;
  }
  public resetPipelineExecutionStartCondition() {
    this._pipelineExecutionStartCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineExecutionStartConditionInput() {
    return this._pipelineExecutionStartCondition;
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface ParameterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#name AwsImagebuilderImagePipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#value AwsImagebuilderImagePipeline#value}
  */
  readonly value: string;
}
export class ParameterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParameterProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ParameterProperty | cdktn.IResolvable | undefined) {
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

export class ParameterPropertyList extends cdktn.ComplexList {
  public internalValue? : ParameterProperty[] | cdktn.IResolvable

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
  public get(index: number): ParameterPropertyOutputReference {
    return new ParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#on_failure AwsImagebuilderImagePipeline#on_failure}
  */
  readonly onFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#parallel_group AwsImagebuilderImagePipeline#parallel_group}
  */
  readonly parallelGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#workflow_arn AwsImagebuilderImagePipeline#workflow_arn}
  */
  readonly workflowArn: string;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/imagebuilder_image_pipeline#parameter AwsImagebuilderImagePipeline#parameter}
  */
  readonly parameter?: ParameterProperty[] | cdktn.IResolvable;
}
export class WorkflowPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkflowProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
    }
    if (this._parallelGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelGroup = this._parallelGroup;
    }
    if (this._workflowArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowArn = this._workflowArn;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onFailure = undefined;
      this._parallelGroup = undefined;
      this._workflowArn = undefined;
      this._parameter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onFailure = value.onFailure;
      this._parallelGroup = value.parallelGroup;
      this._workflowArn = value.workflowArn;
      this._parameter.internalValue = value.parameter;
    }
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string; 
  public get onFailure() {
    return this.getStringAttribute('on_failure');
  }
  public set onFailure(value: string) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // parallel_group - computed: false, optional: true, required: false
  private _parallelGroup?: string; 
  public get parallelGroup() {
    return this.getStringAttribute('parallel_group');
  }
  public set parallelGroup(value: string) {
    this._parallelGroup = value;
  }
  public resetParallelGroup() {
    this._parallelGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelGroupInput() {
    return this._parallelGroup;
  }

  // workflow_arn - computed: false, optional: false, required: true
  private _workflowArn?: string; 
  public get workflowArn() {
    return this.getStringAttribute('workflow_arn');
  }
  public set workflowArn(value: string) {
    this._workflowArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowArnInput() {
    return this._workflowArn;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ParameterPropertyList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ParameterProperty[] | cdktn.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}

export class WorkflowPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkflowProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkflowPropertyOutputReference {
    return new WorkflowPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
