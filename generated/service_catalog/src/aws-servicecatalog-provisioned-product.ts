// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsServicecatalogProvisionedProductConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#accept_language AwsServicecatalogProvisionedProduct#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#id AwsServicecatalogProvisionedProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#ignore_errors AwsServicecatalogProvisionedProduct#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#name AwsServicecatalogProvisionedProduct#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#notification_arns AwsServicecatalogProvisionedProduct#notification_arns}
  */
  readonly notificationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#path_id AwsServicecatalogProvisionedProduct#path_id}
  */
  readonly pathId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#path_name AwsServicecatalogProvisionedProduct#path_name}
  */
  readonly pathName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#product_id AwsServicecatalogProvisionedProduct#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#product_name AwsServicecatalogProvisionedProduct#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#provisioning_artifact_id AwsServicecatalogProvisionedProduct#provisioning_artifact_id}
  */
  readonly provisioningArtifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#provisioning_artifact_name AwsServicecatalogProvisionedProduct#provisioning_artifact_name}
  */
  readonly provisioningArtifactName?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#region AwsServicecatalogProvisionedProduct#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#retain_physical_resources AwsServicecatalogProvisionedProduct#retain_physical_resources}
  */
  readonly retainPhysicalResources?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#tags AwsServicecatalogProvisionedProduct#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#tags_all AwsServicecatalogProvisionedProduct#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * provisioning_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#provisioning_parameters AwsServicecatalogProvisionedProduct#provisioning_parameters}
  */
  readonly provisioningParameters?: AwsServicecatalogProvisionedProduct.ProvisioningParametersProperty[] | cdktn.IResolvable;
  /**
  * stack_set_provisioning_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#stack_set_provisioning_preferences AwsServicecatalogProvisionedProduct#stack_set_provisioning_preferences}
  */
  readonly stackSetProvisioningPreferences?: AwsServicecatalogProvisionedProduct.StackSetProvisioningPreferencesProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#timeouts AwsServicecatalogProvisionedProduct#timeouts}
  */
  readonly timeouts?: AwsServicecatalogProvisionedProduct.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product aws_servicecatalog_provisioned_product}
*/
export class AwsServicecatalogProvisionedProduct extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_servicecatalog_provisioned_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsServicecatalogProvisionedProduct resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsServicecatalogProvisionedProduct to import
  * @param importFromId The id of the existing AwsServicecatalogProvisionedProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsServicecatalogProvisionedProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_servicecatalog_provisioned_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product aws_servicecatalog_provisioned_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsServicecatalogProvisionedProductConfig
  */
  public constructor(scope: Construct, id: string, config: AwsServicecatalogProvisionedProductConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_provisioned_product',
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
    this._acceptLanguage = config.acceptLanguage;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._name = config.name;
    this._notificationArns = config.notificationArns;
    this._pathId = config.pathId;
    this._pathName = config.pathName;
    this._productId = config.productId;
    this._productName = config.productName;
    this._provisioningArtifactId = config.provisioningArtifactId;
    this._provisioningArtifactName = config.provisioningArtifactName;
    this._region = config.region;
    this._retainPhysicalResources = config.retainPhysicalResources;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._provisioningParameters.internalValue = config.provisioningParameters;
    this._stackSetProvisioningPreferences.internalValue = config.stackSetProvisioningPreferences;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string; 
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_dashboard_names - computed: true, optional: false, required: false
  public get cloudwatchDashboardNames() {
    return cdktn.Fn.tolist(this.getListAttribute('cloudwatch_dashboard_names'));
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktn.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktn.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // last_provisioning_record_id - computed: true, optional: false, required: false
  public get lastProvisioningRecordId() {
    return this.getStringAttribute('last_provisioning_record_id');
  }

  // last_record_id - computed: true, optional: false, required: false
  public get lastRecordId() {
    return this.getStringAttribute('last_record_id');
  }

  // last_successful_provisioning_record_id - computed: true, optional: false, required: false
  public get lastSuccessfulProvisioningRecordId() {
    return this.getStringAttribute('last_successful_provisioning_record_id');
  }

  // launch_role_arn - computed: true, optional: false, required: false
  public get launchRoleArn() {
    return this.getStringAttribute('launch_role_arn');
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

  // notification_arns - computed: false, optional: true, required: false
  private _notificationArns?: string[]; 
  public get notificationArns() {
    return this.getListAttribute('notification_arns');
  }
  public set notificationArns(value: string[]) {
    this._notificationArns = value;
  }
  public resetNotificationArns() {
    this._notificationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnsInput() {
    return this._notificationArns;
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new AwsServicecatalogProvisionedProduct.OutputsPropertyList(this, "outputs", true);
  public get outputs() {
    return this._outputs;
  }

  // path_id - computed: true, optional: true, required: false
  private _pathId?: string; 
  public get pathId() {
    return this.getStringAttribute('path_id');
  }
  public set pathId(value: string) {
    this._pathId = value;
  }
  public resetPathId() {
    this._pathId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathIdInput() {
    return this._pathId;
  }

  // path_name - computed: false, optional: true, required: false
  private _pathName?: string; 
  public get pathName() {
    return this.getStringAttribute('path_name');
  }
  public set pathName(value: string) {
    this._pathName = value;
  }
  public resetPathName() {
    this._pathName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathNameInput() {
    return this._pathName;
  }

  // product_id - computed: true, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // provisioning_artifact_id - computed: true, optional: true, required: false
  private _provisioningArtifactId?: string; 
  public get provisioningArtifactId() {
    return this.getStringAttribute('provisioning_artifact_id');
  }
  public set provisioningArtifactId(value: string) {
    this._provisioningArtifactId = value;
  }
  public resetProvisioningArtifactId() {
    this._provisioningArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactIdInput() {
    return this._provisioningArtifactId;
  }

  // provisioning_artifact_name - computed: false, optional: true, required: false
  private _provisioningArtifactName?: string; 
  public get provisioningArtifactName() {
    return this.getStringAttribute('provisioning_artifact_name');
  }
  public set provisioningArtifactName(value: string) {
    this._provisioningArtifactName = value;
  }
  public resetProvisioningArtifactName() {
    this._provisioningArtifactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactNameInput() {
    return this._provisioningArtifactName;
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

  // retain_physical_resources - computed: false, optional: true, required: false
  private _retainPhysicalResources?: boolean | cdktn.IResolvable; 
  public get retainPhysicalResources() {
    return this.getBooleanAttribute('retain_physical_resources');
  }
  public set retainPhysicalResources(value: boolean | cdktn.IResolvable) {
    this._retainPhysicalResources = value;
  }
  public resetRetainPhysicalResources() {
    this._retainPhysicalResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPhysicalResourcesInput() {
    return this._retainPhysicalResources;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // provisioning_parameters - computed: false, optional: true, required: false
  private _provisioningParameters = new AwsServicecatalogProvisionedProduct.ProvisioningParametersPropertyList(this, "provisioning_parameters", false);
  public get provisioningParameters() {
    return this._provisioningParameters;
  }
  public putProvisioningParameters(value: AwsServicecatalogProvisionedProduct.ProvisioningParametersProperty[] | cdktn.IResolvable) {
    this._provisioningParameters.internalValue = value;
  }
  public resetProvisioningParameters() {
    this._provisioningParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningParametersInput() {
    return this._provisioningParameters.internalValue;
  }

  // stack_set_provisioning_preferences - computed: false, optional: true, required: false
  private _stackSetProvisioningPreferences = new AwsServicecatalogProvisionedProduct.StackSetProvisioningPreferencesPropertyOutputReference(this, "stack_set_provisioning_preferences");
  public get stackSetProvisioningPreferences() {
    return this._stackSetProvisioningPreferences;
  }
  public putStackSetProvisioningPreferences(value: AwsServicecatalogProvisionedProduct.StackSetProvisioningPreferencesProperty) {
    this._stackSetProvisioningPreferences.internalValue = value;
  }
  public resetStackSetProvisioningPreferences() {
    this._stackSetProvisioningPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetProvisioningPreferencesInput() {
    return this._stackSetProvisioningPreferences.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsServicecatalogProvisionedProduct.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsServicecatalogProvisionedProduct.TimeoutsProperty) {
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
      accept_language: cdktn.stringToTerraform(this._acceptLanguage),
      id: cdktn.stringToTerraform(this._id),
      ignore_errors: cdktn.booleanToTerraform(this._ignoreErrors),
      name: cdktn.stringToTerraform(this._name),
      notification_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notificationArns),
      path_id: cdktn.stringToTerraform(this._pathId),
      path_name: cdktn.stringToTerraform(this._pathName),
      product_id: cdktn.stringToTerraform(this._productId),
      product_name: cdktn.stringToTerraform(this._productName),
      provisioning_artifact_id: cdktn.stringToTerraform(this._provisioningArtifactId),
      provisioning_artifact_name: cdktn.stringToTerraform(this._provisioningArtifactName),
      region: cdktn.stringToTerraform(this._region),
      retain_physical_resources: cdktn.booleanToTerraform(this._retainPhysicalResources),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      provisioning_parameters: cdktn.listMapper(awsServicecatalogProvisionedProductProvisioningParametersPropertyToTerraform, true)(this._provisioningParameters.internalValue),
      stack_set_provisioning_preferences: awsServicecatalogProvisionedProductStackSetProvisioningPreferencesPropertyToTerraform(this._stackSetProvisioningPreferences.internalValue),
      timeouts: awsServicecatalogProvisionedProductTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_language: {
        value: cdktn.stringToHclTerraform(this._acceptLanguage),
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
      ignore_errors: {
        value: cdktn.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notificationArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      path_id: {
        value: cdktn.stringToHclTerraform(this._pathId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_name: {
        value: cdktn.stringToHclTerraform(this._pathName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktn.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktn.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_artifact_id: {
        value: cdktn.stringToHclTerraform(this._provisioningArtifactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_artifact_name: {
        value: cdktn.stringToHclTerraform(this._provisioningArtifactName),
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
      retain_physical_resources: {
        value: cdktn.booleanToHclTerraform(this._retainPhysicalResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      provisioning_parameters: {
        value: cdktn.listMapperHcl(awsServicecatalogProvisionedProductProvisioningParametersPropertyToHclTerraform, true)(this._provisioningParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsServicecatalogProvisionedProduct.ProvisioningParametersPropertyList",
      },
      stack_set_provisioning_preferences: {
        value: awsServicecatalogProvisionedProductStackSetProvisioningPreferencesPropertyToHclTerraform(this._stackSetProvisioningPreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsServicecatalogProvisionedProduct.StackSetProvisioningPreferencesPropertyList",
      },
      timeouts: {
        value: awsServicecatalogProvisionedProductTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsServicecatalogProvisionedProduct.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsServicecatalogProvisionedProductOutputsPropertyToTerraform(struct?: AwsServicecatalogProvisionedProduct.OutputsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsServicecatalogProvisionedProductOutputsPropertyToHclTerraform(struct?: AwsServicecatalogProvisionedProduct.OutputsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsServicecatalogProvisionedProductProvisioningParametersPropertyToTerraform(struct?: AwsServicecatalogProvisionedProduct.ProvisioningParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    use_previous_value: cdktn.booleanToTerraform(struct!.usePreviousValue),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsServicecatalogProvisionedProductProvisioningParametersPropertyToHclTerraform(struct?: AwsServicecatalogProvisionedProduct.ProvisioningParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_previous_value: {
      value: cdktn.booleanToHclTerraform(struct!.usePreviousValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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


export function awsServicecatalogProvisionedProductStackSetProvisioningPreferencesPropertyToTerraform(struct?: AwsServicecatalogProvisionedProduct.StackSetProvisioningPreferencesPropertyOutputReference | AwsServicecatalogProvisionedProduct.StackSetProvisioningPreferencesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accounts),
    failure_tolerance_count: cdktn.numberToTerraform(struct!.failureToleranceCount),
    failure_tolerance_percentage: cdktn.numberToTerraform(struct!.failureTolerancePercentage),
    max_concurrency_count: cdktn.numberToTerraform(struct!.maxConcurrencyCount),
    max_concurrency_percentage: cdktn.numberToTerraform(struct!.maxConcurrencyPercentage),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
  }
}


export function awsServicecatalogProvisionedProductStackSetProvisioningPreferencesPropertyToHclTerraform(struct?: AwsServicecatalogProvisionedProduct.StackSetProvisioningPreferencesPropertyOutputReference | AwsServicecatalogProvisionedProduct.StackSetProvisioningPreferencesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failure_tolerance_count: {
      value: cdktn.numberToHclTerraform(struct!.failureToleranceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_tolerance_percentage: {
      value: cdktn.numberToHclTerraform(struct!.failureTolerancePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrency_count: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrencyCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrency_percentage: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrencyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsServicecatalogProvisionedProductTimeoutsPropertyToTerraform(struct?: AwsServicecatalogProvisionedProduct.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsServicecatalogProvisionedProductTimeoutsPropertyToHclTerraform(struct?: AwsServicecatalogProvisionedProduct.TimeoutsProperty | cdktn.IResolvable): any {
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
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
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


export namespace AwsServicecatalogProvisionedProduct {
export interface OutputsProperty {
}
export class OutputsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OutputsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OutputsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): OutputsPropertyOutputReference {
    return new OutputsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProvisioningParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#key AwsServicecatalogProvisionedProduct#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#use_previous_value AwsServicecatalogProvisionedProduct#use_previous_value}
  */
  readonly usePreviousValue?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#value AwsServicecatalogProvisionedProduct#value}
  */
  readonly value?: string;
}
export class ProvisioningParametersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ProvisioningParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._usePreviousValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreviousValue = this._usePreviousValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProvisioningParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._usePreviousValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._usePreviousValue = value.usePreviousValue;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // use_previous_value - computed: false, optional: true, required: false
  private _usePreviousValue?: boolean | cdktn.IResolvable; 
  public get usePreviousValue() {
    return this.getBooleanAttribute('use_previous_value');
  }
  public set usePreviousValue(value: boolean | cdktn.IResolvable) {
    this._usePreviousValue = value;
  }
  public resetUsePreviousValue() {
    this._usePreviousValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreviousValueInput() {
    return this._usePreviousValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProvisioningParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : ProvisioningParametersProperty[] | cdktn.IResolvable

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
  public get(index: number): ProvisioningParametersPropertyOutputReference {
    return new ProvisioningParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackSetProvisioningPreferencesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#accounts AwsServicecatalogProvisionedProduct#accounts}
  */
  readonly accounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#failure_tolerance_count AwsServicecatalogProvisionedProduct#failure_tolerance_count}
  */
  readonly failureToleranceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#failure_tolerance_percentage AwsServicecatalogProvisionedProduct#failure_tolerance_percentage}
  */
  readonly failureTolerancePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#max_concurrency_count AwsServicecatalogProvisionedProduct#max_concurrency_count}
  */
  readonly maxConcurrencyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#max_concurrency_percentage AwsServicecatalogProvisionedProduct#max_concurrency_percentage}
  */
  readonly maxConcurrencyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#regions AwsServicecatalogProvisionedProduct#regions}
  */
  readonly regions?: string[];
}
export class StackSetProvisioningPreferencesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackSetProvisioningPreferencesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._failureToleranceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureToleranceCount = this._failureToleranceCount;
    }
    if (this._failureTolerancePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureTolerancePercentage = this._failureTolerancePercentage;
    }
    if (this._maxConcurrencyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrencyCount = this._maxConcurrencyCount;
    }
    if (this._maxConcurrencyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrencyPercentage = this._maxConcurrencyPercentage;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackSetProvisioningPreferencesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accounts = undefined;
      this._failureToleranceCount = undefined;
      this._failureTolerancePercentage = undefined;
      this._maxConcurrencyCount = undefined;
      this._maxConcurrencyPercentage = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accounts = value.accounts;
      this._failureToleranceCount = value.failureToleranceCount;
      this._failureTolerancePercentage = value.failureTolerancePercentage;
      this._maxConcurrencyCount = value.maxConcurrencyCount;
      this._maxConcurrencyPercentage = value.maxConcurrencyPercentage;
      this._regions = value.regions;
    }
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return this.getListAttribute('accounts');
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  public resetAccounts() {
    this._accounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
  }

  // failure_tolerance_count - computed: false, optional: true, required: false
  private _failureToleranceCount?: number; 
  public get failureToleranceCount() {
    return this.getNumberAttribute('failure_tolerance_count');
  }
  public set failureToleranceCount(value: number) {
    this._failureToleranceCount = value;
  }
  public resetFailureToleranceCount() {
    this._failureToleranceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureToleranceCountInput() {
    return this._failureToleranceCount;
  }

  // failure_tolerance_percentage - computed: false, optional: true, required: false
  private _failureTolerancePercentage?: number; 
  public get failureTolerancePercentage() {
    return this.getNumberAttribute('failure_tolerance_percentage');
  }
  public set failureTolerancePercentage(value: number) {
    this._failureTolerancePercentage = value;
  }
  public resetFailureTolerancePercentage() {
    this._failureTolerancePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureTolerancePercentageInput() {
    return this._failureTolerancePercentage;
  }

  // max_concurrency_count - computed: false, optional: true, required: false
  private _maxConcurrencyCount?: number; 
  public get maxConcurrencyCount() {
    return this.getNumberAttribute('max_concurrency_count');
  }
  public set maxConcurrencyCount(value: number) {
    this._maxConcurrencyCount = value;
  }
  public resetMaxConcurrencyCount() {
    this._maxConcurrencyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyCountInput() {
    return this._maxConcurrencyCount;
  }

  // max_concurrency_percentage - computed: false, optional: true, required: false
  private _maxConcurrencyPercentage?: number; 
  public get maxConcurrencyPercentage() {
    return this.getNumberAttribute('max_concurrency_percentage');
  }
  public set maxConcurrencyPercentage(value: number) {
    this._maxConcurrencyPercentage = value;
  }
  public resetMaxConcurrencyPercentage() {
    this._maxConcurrencyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyPercentageInput() {
    return this._maxConcurrencyPercentage;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#create AwsServicecatalogProvisionedProduct#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#delete AwsServicecatalogProvisionedProduct#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#read AwsServicecatalogProvisionedProduct#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_provisioned_product#update AwsServicecatalogProvisionedProduct#update}
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
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
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
