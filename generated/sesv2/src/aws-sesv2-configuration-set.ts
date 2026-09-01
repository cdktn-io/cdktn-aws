// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSesv2ConfigurationSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#configuration_set_name AwsSesv2ConfigurationSet#configuration_set_name}
  */
  readonly configurationSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#id AwsSesv2ConfigurationSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#region AwsSesv2ConfigurationSet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#tags AwsSesv2ConfigurationSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#tags_all AwsSesv2ConfigurationSet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * delivery_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#delivery_options AwsSesv2ConfigurationSet#delivery_options}
  */
  readonly deliveryOptions?: AwsSesv2ConfigurationSet.DeliveryOptionsProperty;
  /**
  * reputation_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#reputation_options AwsSesv2ConfigurationSet#reputation_options}
  */
  readonly reputationOptions?: AwsSesv2ConfigurationSet.ReputationOptionsProperty;
  /**
  * sending_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#sending_options AwsSesv2ConfigurationSet#sending_options}
  */
  readonly sendingOptions?: AwsSesv2ConfigurationSet.SendingOptionsProperty;
  /**
  * suppression_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#suppression_options AwsSesv2ConfigurationSet#suppression_options}
  */
  readonly suppressionOptions?: AwsSesv2ConfigurationSet.SuppressionOptionsProperty;
  /**
  * tracking_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#tracking_options AwsSesv2ConfigurationSet#tracking_options}
  */
  readonly trackingOptions?: AwsSesv2ConfigurationSet.TrackingOptionsProperty;
  /**
  * vdm_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#vdm_options AwsSesv2ConfigurationSet#vdm_options}
  */
  readonly vdmOptions?: AwsSesv2ConfigurationSet.VdmOptionsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set aws_sesv2_configuration_set}
*/
export class AwsSesv2ConfigurationSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_configuration_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSesv2ConfigurationSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSesv2ConfigurationSet to import
  * @param importFromId The id of the existing AwsSesv2ConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSesv2ConfigurationSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sesv2_configuration_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set aws_sesv2_configuration_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSesv2ConfigurationSetConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSesv2ConfigurationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_configuration_set',
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
    this._configurationSetName = config.configurationSetName;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._deliveryOptions.internalValue = config.deliveryOptions;
    this._reputationOptions.internalValue = config.reputationOptions;
    this._sendingOptions.internalValue = config.sendingOptions;
    this._suppressionOptions.internalValue = config.suppressionOptions;
    this._trackingOptions.internalValue = config.trackingOptions;
    this._vdmOptions.internalValue = config.vdmOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_set_name - computed: false, optional: false, required: true
  private _configurationSetName?: string; 
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetNameInput() {
    return this._configurationSetName;
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

  // delivery_options - computed: false, optional: true, required: false
  private _deliveryOptions = new AwsSesv2ConfigurationSet.DeliveryOptionsPropertyOutputReference(this, "delivery_options");
  public get deliveryOptions() {
    return this._deliveryOptions;
  }
  public putDeliveryOptions(value: AwsSesv2ConfigurationSet.DeliveryOptionsProperty) {
    this._deliveryOptions.internalValue = value;
  }
  public resetDeliveryOptions() {
    this._deliveryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryOptionsInput() {
    return this._deliveryOptions.internalValue;
  }

  // reputation_options - computed: false, optional: true, required: false
  private _reputationOptions = new AwsSesv2ConfigurationSet.ReputationOptionsPropertyOutputReference(this, "reputation_options");
  public get reputationOptions() {
    return this._reputationOptions;
  }
  public putReputationOptions(value: AwsSesv2ConfigurationSet.ReputationOptionsProperty) {
    this._reputationOptions.internalValue = value;
  }
  public resetReputationOptions() {
    this._reputationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationOptionsInput() {
    return this._reputationOptions.internalValue;
  }

  // sending_options - computed: false, optional: true, required: false
  private _sendingOptions = new AwsSesv2ConfigurationSet.SendingOptionsPropertyOutputReference(this, "sending_options");
  public get sendingOptions() {
    return this._sendingOptions;
  }
  public putSendingOptions(value: AwsSesv2ConfigurationSet.SendingOptionsProperty) {
    this._sendingOptions.internalValue = value;
  }
  public resetSendingOptions() {
    this._sendingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingOptionsInput() {
    return this._sendingOptions.internalValue;
  }

  // suppression_options - computed: false, optional: true, required: false
  private _suppressionOptions = new AwsSesv2ConfigurationSet.SuppressionOptionsPropertyOutputReference(this, "suppression_options");
  public get suppressionOptions() {
    return this._suppressionOptions;
  }
  public putSuppressionOptions(value: AwsSesv2ConfigurationSet.SuppressionOptionsProperty) {
    this._suppressionOptions.internalValue = value;
  }
  public resetSuppressionOptions() {
    this._suppressionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionOptionsInput() {
    return this._suppressionOptions.internalValue;
  }

  // tracking_options - computed: false, optional: true, required: false
  private _trackingOptions = new AwsSesv2ConfigurationSet.TrackingOptionsPropertyOutputReference(this, "tracking_options");
  public get trackingOptions() {
    return this._trackingOptions;
  }
  public putTrackingOptions(value: AwsSesv2ConfigurationSet.TrackingOptionsProperty) {
    this._trackingOptions.internalValue = value;
  }
  public resetTrackingOptions() {
    this._trackingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingOptionsInput() {
    return this._trackingOptions.internalValue;
  }

  // vdm_options - computed: false, optional: true, required: false
  private _vdmOptions = new AwsSesv2ConfigurationSet.VdmOptionsPropertyOutputReference(this, "vdm_options");
  public get vdmOptions() {
    return this._vdmOptions;
  }
  public putVdmOptions(value: AwsSesv2ConfigurationSet.VdmOptionsProperty) {
    this._vdmOptions.internalValue = value;
  }
  public resetVdmOptions() {
    this._vdmOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdmOptionsInput() {
    return this._vdmOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_name: cdktn.stringToTerraform(this._configurationSetName),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      delivery_options: awsSesv2ConfigurationSetDeliveryOptionsPropertyToTerraform(this._deliveryOptions.internalValue),
      reputation_options: awsSesv2ConfigurationSetReputationOptionsPropertyToTerraform(this._reputationOptions.internalValue),
      sending_options: awsSesv2ConfigurationSetSendingOptionsPropertyToTerraform(this._sendingOptions.internalValue),
      suppression_options: awsSesv2ConfigurationSetSuppressionOptionsPropertyToTerraform(this._suppressionOptions.internalValue),
      tracking_options: awsSesv2ConfigurationSetTrackingOptionsPropertyToTerraform(this._trackingOptions.internalValue),
      vdm_options: awsSesv2ConfigurationSetVdmOptionsPropertyToTerraform(this._vdmOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_set_name: {
        value: cdktn.stringToHclTerraform(this._configurationSetName),
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
      delivery_options: {
        value: awsSesv2ConfigurationSetDeliveryOptionsPropertyToHclTerraform(this._deliveryOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSesv2ConfigurationSet.DeliveryOptionsPropertyList",
      },
      reputation_options: {
        value: awsSesv2ConfigurationSetReputationOptionsPropertyToHclTerraform(this._reputationOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSesv2ConfigurationSet.ReputationOptionsPropertyList",
      },
      sending_options: {
        value: awsSesv2ConfigurationSetSendingOptionsPropertyToHclTerraform(this._sendingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSesv2ConfigurationSet.SendingOptionsPropertyList",
      },
      suppression_options: {
        value: awsSesv2ConfigurationSetSuppressionOptionsPropertyToHclTerraform(this._suppressionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSesv2ConfigurationSet.SuppressionOptionsPropertyList",
      },
      tracking_options: {
        value: awsSesv2ConfigurationSetTrackingOptionsPropertyToHclTerraform(this._trackingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSesv2ConfigurationSet.TrackingOptionsPropertyList",
      },
      vdm_options: {
        value: awsSesv2ConfigurationSetVdmOptionsPropertyToHclTerraform(this._vdmOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSesv2ConfigurationSet.VdmOptionsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSesv2ConfigurationSetDeliveryOptionsPropertyToTerraform(struct?: AwsSesv2ConfigurationSet.DeliveryOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.DeliveryOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_delivery_seconds: cdktn.numberToTerraform(struct!.maxDeliverySeconds),
    sending_pool_name: cdktn.stringToTerraform(struct!.sendingPoolName),
    tls_policy: cdktn.stringToTerraform(struct!.tlsPolicy),
  }
}


export function awsSesv2ConfigurationSetDeliveryOptionsPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSet.DeliveryOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.DeliveryOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_delivery_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxDeliverySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sending_pool_name: {
      value: cdktn.stringToHclTerraform(struct!.sendingPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_policy: {
      value: cdktn.stringToHclTerraform(struct!.tlsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetReputationOptionsPropertyToTerraform(struct?: AwsSesv2ConfigurationSet.ReputationOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.ReputationOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reputation_metrics_enabled: cdktn.booleanToTerraform(struct!.reputationMetricsEnabled),
  }
}


export function awsSesv2ConfigurationSetReputationOptionsPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSet.ReputationOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.ReputationOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reputation_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.reputationMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetSendingOptionsPropertyToTerraform(struct?: AwsSesv2ConfigurationSet.SendingOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.SendingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sending_enabled: cdktn.booleanToTerraform(struct!.sendingEnabled),
  }
}


export function awsSesv2ConfigurationSetSendingOptionsPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSet.SendingOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.SendingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sending_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.sendingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetSuppressionOptionsPropertyToTerraform(struct?: AwsSesv2ConfigurationSet.SuppressionOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.SuppressionOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    suppressed_reasons: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.suppressedReasons),
  }
}


export function awsSesv2ConfigurationSetSuppressionOptionsPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSet.SuppressionOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.SuppressionOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    suppressed_reasons: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.suppressedReasons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetTrackingOptionsPropertyToTerraform(struct?: AwsSesv2ConfigurationSet.TrackingOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.TrackingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_redirect_domain: cdktn.stringToTerraform(struct!.customRedirectDomain),
    https_policy: cdktn.stringToTerraform(struct!.httpsPolicy),
  }
}


export function awsSesv2ConfigurationSetTrackingOptionsPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSet.TrackingOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.TrackingOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_redirect_domain: {
      value: cdktn.stringToHclTerraform(struct!.customRedirectDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_policy: {
      value: cdktn.stringToHclTerraform(struct!.httpsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetDashboardOptionsPropertyToTerraform(struct?: AwsSesv2ConfigurationSet.DashboardOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.DashboardOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    engagement_metrics: cdktn.stringToTerraform(struct!.engagementMetrics),
  }
}


export function awsSesv2ConfigurationSetDashboardOptionsPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSet.DashboardOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.DashboardOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    engagement_metrics: {
      value: cdktn.stringToHclTerraform(struct!.engagementMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetGuardianOptionsPropertyToTerraform(struct?: AwsSesv2ConfigurationSet.GuardianOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.GuardianOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    optimized_shared_delivery: cdktn.stringToTerraform(struct!.optimizedSharedDelivery),
  }
}


export function awsSesv2ConfigurationSetGuardianOptionsPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSet.GuardianOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.GuardianOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    optimized_shared_delivery: {
      value: cdktn.stringToHclTerraform(struct!.optimizedSharedDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSesv2ConfigurationSetVdmOptionsPropertyToTerraform(struct?: AwsSesv2ConfigurationSet.VdmOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.VdmOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dashboard_options: awsSesv2ConfigurationSetDashboardOptionsPropertyToTerraform(struct!.dashboardOptions),
    guardian_options: awsSesv2ConfigurationSetGuardianOptionsPropertyToTerraform(struct!.guardianOptions),
  }
}


export function awsSesv2ConfigurationSetVdmOptionsPropertyToHclTerraform(struct?: AwsSesv2ConfigurationSet.VdmOptionsPropertyOutputReference | AwsSesv2ConfigurationSet.VdmOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dashboard_options: {
      value: awsSesv2ConfigurationSetDashboardOptionsPropertyToHclTerraform(struct!.dashboardOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardOptionsPropertyList",
    },
    guardian_options: {
      value: awsSesv2ConfigurationSetGuardianOptionsPropertyToHclTerraform(struct!.guardianOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GuardianOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsSesv2ConfigurationSet {
export interface DeliveryOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#max_delivery_seconds AwsSesv2ConfigurationSet#max_delivery_seconds}
  */
  readonly maxDeliverySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#sending_pool_name AwsSesv2ConfigurationSet#sending_pool_name}
  */
  readonly sendingPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#tls_policy AwsSesv2ConfigurationSet#tls_policy}
  */
  readonly tlsPolicy?: string;
}
export class DeliveryOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeliveryOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDeliverySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliverySeconds = this._maxDeliverySeconds;
    }
    if (this._sendingPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingPoolName = this._sendingPoolName;
    }
    if (this._tlsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPolicy = this._tlsPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliveryOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxDeliverySeconds = undefined;
      this._sendingPoolName = undefined;
      this._tlsPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxDeliverySeconds = value.maxDeliverySeconds;
      this._sendingPoolName = value.sendingPoolName;
      this._tlsPolicy = value.tlsPolicy;
    }
  }

  // max_delivery_seconds - computed: false, optional: true, required: false
  private _maxDeliverySeconds?: number; 
  public get maxDeliverySeconds() {
    return this.getNumberAttribute('max_delivery_seconds');
  }
  public set maxDeliverySeconds(value: number) {
    this._maxDeliverySeconds = value;
  }
  public resetMaxDeliverySeconds() {
    this._maxDeliverySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliverySecondsInput() {
    return this._maxDeliverySeconds;
  }

  // sending_pool_name - computed: false, optional: true, required: false
  private _sendingPoolName?: string; 
  public get sendingPoolName() {
    return this.getStringAttribute('sending_pool_name');
  }
  public set sendingPoolName(value: string) {
    this._sendingPoolName = value;
  }
  public resetSendingPoolName() {
    this._sendingPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingPoolNameInput() {
    return this._sendingPoolName;
  }

  // tls_policy - computed: false, optional: true, required: false
  private _tlsPolicy?: string; 
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }
  public set tlsPolicy(value: string) {
    this._tlsPolicy = value;
  }
  public resetTlsPolicy() {
    this._tlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPolicyInput() {
    return this._tlsPolicy;
  }
}
export interface ReputationOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#reputation_metrics_enabled AwsSesv2ConfigurationSet#reputation_metrics_enabled}
  */
  readonly reputationMetricsEnabled?: boolean | cdktn.IResolvable;
}
export class ReputationOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReputationOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reputationMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationMetricsEnabled = this._reputationMetricsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReputationOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reputationMetricsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reputationMetricsEnabled = value.reputationMetricsEnabled;
    }
  }

  // last_fresh_start - computed: true, optional: false, required: false
  public get lastFreshStart() {
    return this.getStringAttribute('last_fresh_start');
  }

  // reputation_metrics_enabled - computed: true, optional: true, required: false
  private _reputationMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get reputationMetricsEnabled() {
    return this.getBooleanAttribute('reputation_metrics_enabled');
  }
  public set reputationMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._reputationMetricsEnabled = value;
  }
  public resetReputationMetricsEnabled() {
    this._reputationMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationMetricsEnabledInput() {
    return this._reputationMetricsEnabled;
  }
}
export interface SendingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#sending_enabled AwsSesv2ConfigurationSet#sending_enabled}
  */
  readonly sendingEnabled?: boolean | cdktn.IResolvable;
}
export class SendingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SendingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingEnabled = this._sendingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SendingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sendingEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sendingEnabled = value.sendingEnabled;
    }
  }

  // sending_enabled - computed: true, optional: true, required: false
  private _sendingEnabled?: boolean | cdktn.IResolvable; 
  public get sendingEnabled() {
    return this.getBooleanAttribute('sending_enabled');
  }
  public set sendingEnabled(value: boolean | cdktn.IResolvable) {
    this._sendingEnabled = value;
  }
  public resetSendingEnabled() {
    this._sendingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingEnabledInput() {
    return this._sendingEnabled;
  }
}
export interface SuppressionOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#suppressed_reasons AwsSesv2ConfigurationSet#suppressed_reasons}
  */
  readonly suppressedReasons?: string[];
}
export class SuppressionOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SuppressionOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suppressedReasons !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressedReasons = this._suppressedReasons;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SuppressionOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._suppressedReasons = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._suppressedReasons = value.suppressedReasons;
    }
  }

  // suppressed_reasons - computed: false, optional: true, required: false
  private _suppressedReasons?: string[]; 
  public get suppressedReasons() {
    return this.getListAttribute('suppressed_reasons');
  }
  public set suppressedReasons(value: string[]) {
    this._suppressedReasons = value;
  }
  public resetSuppressedReasons() {
    this._suppressedReasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedReasonsInput() {
    return this._suppressedReasons;
  }
}
export interface TrackingOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#custom_redirect_domain AwsSesv2ConfigurationSet#custom_redirect_domain}
  */
  readonly customRedirectDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#https_policy AwsSesv2ConfigurationSet#https_policy}
  */
  readonly httpsPolicy?: string;
}
export class TrackingOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrackingOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRedirectDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRedirectDomain = this._customRedirectDomain;
    }
    if (this._httpsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPolicy = this._httpsPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrackingOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRedirectDomain = undefined;
      this._httpsPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRedirectDomain = value.customRedirectDomain;
      this._httpsPolicy = value.httpsPolicy;
    }
  }

  // custom_redirect_domain - computed: false, optional: false, required: true
  private _customRedirectDomain?: string; 
  public get customRedirectDomain() {
    return this.getStringAttribute('custom_redirect_domain');
  }
  public set customRedirectDomain(value: string) {
    this._customRedirectDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customRedirectDomainInput() {
    return this._customRedirectDomain;
  }

  // https_policy - computed: false, optional: true, required: false
  private _httpsPolicy?: string; 
  public get httpsPolicy() {
    return this.getStringAttribute('https_policy');
  }
  public set httpsPolicy(value: string) {
    this._httpsPolicy = value;
  }
  public resetHttpsPolicy() {
    this._httpsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPolicyInput() {
    return this._httpsPolicy;
  }
}
export interface DashboardOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#engagement_metrics AwsSesv2ConfigurationSet#engagement_metrics}
  */
  readonly engagementMetrics?: string;
}
export class DashboardOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engagementMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.engagementMetrics = this._engagementMetrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engagementMetrics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engagementMetrics = value.engagementMetrics;
    }
  }

  // engagement_metrics - computed: false, optional: true, required: false
  private _engagementMetrics?: string; 
  public get engagementMetrics() {
    return this.getStringAttribute('engagement_metrics');
  }
  public set engagementMetrics(value: string) {
    this._engagementMetrics = value;
  }
  public resetEngagementMetrics() {
    this._engagementMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagementMetricsInput() {
    return this._engagementMetrics;
  }
}
export interface GuardianOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#optimized_shared_delivery AwsSesv2ConfigurationSet#optimized_shared_delivery}
  */
  readonly optimizedSharedDelivery?: string;
}
export class GuardianOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuardianOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizedSharedDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizedSharedDelivery = this._optimizedSharedDelivery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardianOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optimizedSharedDelivery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optimizedSharedDelivery = value.optimizedSharedDelivery;
    }
  }

  // optimized_shared_delivery - computed: false, optional: true, required: false
  private _optimizedSharedDelivery?: string; 
  public get optimizedSharedDelivery() {
    return this.getStringAttribute('optimized_shared_delivery');
  }
  public set optimizedSharedDelivery(value: string) {
    this._optimizedSharedDelivery = value;
  }
  public resetOptimizedSharedDelivery() {
    this._optimizedSharedDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedSharedDeliveryInput() {
    return this._optimizedSharedDelivery;
  }
}
export interface VdmOptionsProperty {
  /**
  * dashboard_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#dashboard_options AwsSesv2ConfigurationSet#dashboard_options}
  */
  readonly dashboardOptions?: DashboardOptionsProperty;
  /**
  * guardian_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_configuration_set#guardian_options AwsSesv2ConfigurationSet#guardian_options}
  */
  readonly guardianOptions?: GuardianOptionsProperty;
}
export class VdmOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VdmOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardOptions = this._dashboardOptions?.internalValue;
    }
    if (this._guardianOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardianOptions = this._guardianOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdmOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dashboardOptions.internalValue = undefined;
      this._guardianOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dashboardOptions.internalValue = value.dashboardOptions;
      this._guardianOptions.internalValue = value.guardianOptions;
    }
  }

  // dashboard_options - computed: false, optional: true, required: false
  private _dashboardOptions = new DashboardOptionsPropertyOutputReference(this, "dashboard_options");
  public get dashboardOptions() {
    return this._dashboardOptions;
  }
  public putDashboardOptions(value: DashboardOptionsProperty) {
    this._dashboardOptions.internalValue = value;
  }
  public resetDashboardOptions() {
    this._dashboardOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardOptionsInput() {
    return this._dashboardOptions.internalValue;
  }

  // guardian_options - computed: false, optional: true, required: false
  private _guardianOptions = new GuardianOptionsPropertyOutputReference(this, "guardian_options");
  public get guardianOptions() {
    return this._guardianOptions;
  }
  public putGuardianOptions(value: GuardianOptionsProperty) {
    this._guardianOptions.internalValue = value;
  }
  public resetGuardianOptions() {
    this._guardianOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardianOptionsInput() {
    return this._guardianOptions.internalValue;
  }
}
}
