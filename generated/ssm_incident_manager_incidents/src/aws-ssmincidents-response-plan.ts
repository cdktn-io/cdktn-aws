// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsResponsePlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#chat_channel AwsResponsePlan#chat_channel}
  */
  readonly chatChannel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#display_name AwsResponsePlan#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#engagements AwsResponsePlan#engagements}
  */
  readonly engagements?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#id AwsResponsePlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#name AwsResponsePlan#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#region AwsResponsePlan#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#tags AwsResponsePlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#tags_all AwsResponsePlan#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#action AwsResponsePlan#action}
  */
  readonly action?: AwsResponsePlan.ActionProperty;
  /**
  * incident_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#incident_template AwsResponsePlan#incident_template}
  */
  readonly incidentTemplate: AwsResponsePlan.IncidentTemplateProperty;
  /**
  * integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#integration AwsResponsePlan#integration}
  */
  readonly integration?: AwsResponsePlan.IntegrationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan aws_ssmincidents_response_plan}
*/
export class AwsResponsePlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssmincidents_response_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsResponsePlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsResponsePlan to import
  * @param importFromId The id of the existing AwsResponsePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsResponsePlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssmincidents_response_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan aws_ssmincidents_response_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsResponsePlanConfig
  */
  public constructor(scope: Construct, id: string, config: AwsResponsePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssmincidents_response_plan',
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
    this._chatChannel = config.chatChannel;
    this._displayName = config.displayName;
    this._engagements = config.engagements;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._action.internalValue = config.action;
    this._incidentTemplate.internalValue = config.incidentTemplate;
    this._integration.internalValue = config.integration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chat_channel - computed: false, optional: true, required: false
  private _chatChannel?: string[]; 
  public get chatChannel() {
    return cdktn.Fn.tolist(this.getListAttribute('chat_channel'));
  }
  public set chatChannel(value: string[]) {
    this._chatChannel = value;
  }
  public resetChatChannel() {
    this._chatChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatChannelInput() {
    return this._chatChannel;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // engagements - computed: false, optional: true, required: false
  private _engagements?: string[]; 
  public get engagements() {
    return cdktn.Fn.tolist(this.getListAttribute('engagements'));
  }
  public set engagements(value: string[]) {
    this._engagements = value;
  }
  public resetEngagements() {
    this._engagements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagementsInput() {
    return this._engagements;
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

  // action - computed: false, optional: true, required: false
  private _action = new AwsResponsePlan.ActionPropertyOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AwsResponsePlan.ActionProperty) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // incident_template - computed: false, optional: false, required: true
  private _incidentTemplate = new AwsResponsePlan.IncidentTemplatePropertyOutputReference(this, "incident_template");
  public get incidentTemplate() {
    return this._incidentTemplate;
  }
  public putIncidentTemplate(value: AwsResponsePlan.IncidentTemplateProperty) {
    this._incidentTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTemplateInput() {
    return this._incidentTemplate.internalValue;
  }

  // integration - computed: false, optional: true, required: false
  private _integration = new AwsResponsePlan.IntegrationPropertyOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: AwsResponsePlan.IntegrationProperty) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chat_channel: cdktn.listMapper(cdktn.stringToTerraform, false)(this._chatChannel),
      display_name: cdktn.stringToTerraform(this._displayName),
      engagements: cdktn.listMapper(cdktn.stringToTerraform, false)(this._engagements),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      action: awsResponsePlanActionPropertyToTerraform(this._action.internalValue),
      incident_template: awsResponsePlanIncidentTemplatePropertyToTerraform(this._incidentTemplate.internalValue),
      integration: awsResponsePlanIntegrationPropertyToTerraform(this._integration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chat_channel: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._chatChannel),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engagements: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._engagements),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      action: {
        value: awsResponsePlanActionPropertyToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResponsePlan.ActionPropertyList",
      },
      incident_template: {
        value: awsResponsePlanIncidentTemplatePropertyToHclTerraform(this._incidentTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResponsePlan.IncidentTemplatePropertyList",
      },
      integration: {
        value: awsResponsePlanIntegrationPropertyToHclTerraform(this._integration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResponsePlan.IntegrationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsResponsePlanParameterPropertyToTerraform(struct?: AwsResponsePlan.ParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsResponsePlanParameterPropertyToHclTerraform(struct?: AwsResponsePlan.ParameterProperty | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResponsePlanSsmAutomationPropertyToTerraform(struct?: AwsResponsePlan.SsmAutomationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_name: cdktn.stringToTerraform(struct!.documentName),
    document_version: cdktn.stringToTerraform(struct!.documentVersion),
    dynamic_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dynamicParameters),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    target_account: cdktn.stringToTerraform(struct!.targetAccount),
    parameter: cdktn.listMapper(awsResponsePlanParameterPropertyToTerraform, true)(struct!.parameter),
  }
}


export function awsResponsePlanSsmAutomationPropertyToHclTerraform(struct?: AwsResponsePlan.SsmAutomationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_name: {
      value: cdktn.stringToHclTerraform(struct!.documentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_version: {
      value: cdktn.stringToHclTerraform(struct!.documentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dynamicParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_account: {
      value: cdktn.stringToHclTerraform(struct!.targetAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter: {
      value: cdktn.listMapperHcl(awsResponsePlanParameterPropertyToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ParameterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResponsePlanActionPropertyToTerraform(struct?: AwsResponsePlan.ActionPropertyOutputReference | AwsResponsePlan.ActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ssm_automation: cdktn.listMapper(awsResponsePlanSsmAutomationPropertyToTerraform, true)(struct!.ssmAutomation),
  }
}


export function awsResponsePlanActionPropertyToHclTerraform(struct?: AwsResponsePlan.ActionPropertyOutputReference | AwsResponsePlan.ActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ssm_automation: {
      value: cdktn.listMapperHcl(awsResponsePlanSsmAutomationPropertyToHclTerraform, true)(struct!.ssmAutomation),
      isBlock: true,
      type: "list",
      storageClassType: "SsmAutomationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResponsePlanNotificationTargetPropertyToTerraform(struct?: AwsResponsePlan.NotificationTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sns_topic_arn: cdktn.stringToTerraform(struct!.snsTopicArn),
  }
}


export function awsResponsePlanNotificationTargetPropertyToHclTerraform(struct?: AwsResponsePlan.NotificationTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sns_topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResponsePlanIncidentTemplatePropertyToTerraform(struct?: AwsResponsePlan.IncidentTemplatePropertyOutputReference | AwsResponsePlan.IncidentTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dedupe_string: cdktn.stringToTerraform(struct!.dedupeString),
    impact: cdktn.numberToTerraform(struct!.impact),
    incident_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.incidentTags),
    summary: cdktn.stringToTerraform(struct!.summary),
    title: cdktn.stringToTerraform(struct!.title),
    notification_target: cdktn.listMapper(awsResponsePlanNotificationTargetPropertyToTerraform, true)(struct!.notificationTarget),
  }
}


export function awsResponsePlanIncidentTemplatePropertyToHclTerraform(struct?: AwsResponsePlan.IncidentTemplatePropertyOutputReference | AwsResponsePlan.IncidentTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dedupe_string: {
      value: cdktn.stringToHclTerraform(struct!.dedupeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    impact: {
      value: cdktn.numberToHclTerraform(struct!.impact),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incident_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.incidentTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    summary: {
      value: cdktn.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_target: {
      value: cdktn.listMapperHcl(awsResponsePlanNotificationTargetPropertyToHclTerraform, true)(struct!.notificationTarget),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationTargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResponsePlanPagerdutyPropertyToTerraform(struct?: AwsResponsePlan.PagerdutyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    service_id: cdktn.stringToTerraform(struct!.serviceId),
  }
}


export function awsResponsePlanPagerdutyPropertyToHclTerraform(struct?: AwsResponsePlan.PagerdutyProperty | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktn.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResponsePlanIntegrationPropertyToTerraform(struct?: AwsResponsePlan.IntegrationPropertyOutputReference | AwsResponsePlan.IntegrationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pagerduty: cdktn.listMapper(awsResponsePlanPagerdutyPropertyToTerraform, true)(struct!.pagerduty),
  }
}


export function awsResponsePlanIntegrationPropertyToHclTerraform(struct?: AwsResponsePlan.IntegrationPropertyOutputReference | AwsResponsePlan.IntegrationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pagerduty: {
      value: cdktn.listMapperHcl(awsResponsePlanPagerdutyPropertyToHclTerraform, true)(struct!.pagerduty),
      isBlock: true,
      type: "list",
      storageClassType: "PagerdutyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsResponsePlan {
export interface ParameterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#name AwsResponsePlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#values AwsResponsePlan#values}
  */
  readonly values: string[];
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParameterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
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
export interface SsmAutomationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#document_name AwsResponsePlan#document_name}
  */
  readonly documentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#document_version AwsResponsePlan#document_version}
  */
  readonly documentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#dynamic_parameters AwsResponsePlan#dynamic_parameters}
  */
  readonly dynamicParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#role_arn AwsResponsePlan#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#target_account AwsResponsePlan#target_account}
  */
  readonly targetAccount?: string;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#parameter AwsResponsePlan#parameter}
  */
  readonly parameter?: ParameterProperty[] | cdktn.IResolvable;
}
export class SsmAutomationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmAutomationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentName = this._documentName;
    }
    if (this._documentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentVersion = this._documentVersion;
    }
    if (this._dynamicParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicParameters = this._dynamicParameters;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAccount = this._targetAccount;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmAutomationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentName = undefined;
      this._documentVersion = undefined;
      this._dynamicParameters = undefined;
      this._roleArn = undefined;
      this._targetAccount = undefined;
      this._parameter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentName = value.documentName;
      this._documentVersion = value.documentVersion;
      this._dynamicParameters = value.dynamicParameters;
      this._roleArn = value.roleArn;
      this._targetAccount = value.targetAccount;
      this._parameter.internalValue = value.parameter;
    }
  }

  // document_name - computed: false, optional: false, required: true
  private _documentName?: string; 
  public get documentName() {
    return this.getStringAttribute('document_name');
  }
  public set documentName(value: string) {
    this._documentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentNameInput() {
    return this._documentName;
  }

  // document_version - computed: false, optional: true, required: false
  private _documentVersion?: string; 
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion;
  }

  // dynamic_parameters - computed: false, optional: true, required: false
  private _dynamicParameters?: { [key: string]: string }; 
  public get dynamicParameters() {
    return this.getStringMapAttribute('dynamic_parameters');
  }
  public set dynamicParameters(value: { [key: string]: string }) {
    this._dynamicParameters = value;
  }
  public resetDynamicParameters() {
    this._dynamicParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParametersInput() {
    return this._dynamicParameters;
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

  // target_account - computed: false, optional: true, required: false
  private _targetAccount?: string; 
  public get targetAccount() {
    return this.getStringAttribute('target_account');
  }
  public set targetAccount(value: string) {
    this._targetAccount = value;
  }
  public resetTargetAccount() {
    this._targetAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountInput() {
    return this._targetAccount;
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

export class SsmAutomationPropertyList extends cdktn.ComplexList {
  public internalValue? : SsmAutomationProperty[] | cdktn.IResolvable

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
  public get(index: number): SsmAutomationPropertyOutputReference {
    return new SsmAutomationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionProperty {
  /**
  * ssm_automation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#ssm_automation AwsResponsePlan#ssm_automation}
  */
  readonly ssmAutomation?: SsmAutomationProperty[] | cdktn.IResolvable;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssmAutomation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmAutomation = this._ssmAutomation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ssmAutomation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ssmAutomation.internalValue = value.ssmAutomation;
    }
  }

  // ssm_automation - computed: false, optional: true, required: false
  private _ssmAutomation = new SsmAutomationPropertyList(this, "ssm_automation", false);
  public get ssmAutomation() {
    return this._ssmAutomation;
  }
  public putSsmAutomation(value: SsmAutomationProperty[] | cdktn.IResolvable) {
    this._ssmAutomation.internalValue = value;
  }
  public resetSsmAutomation() {
    this._ssmAutomation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmAutomationInput() {
    return this._ssmAutomation.internalValue;
  }
}
export interface NotificationTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#sns_topic_arn AwsResponsePlan#sns_topic_arn}
  */
  readonly snsTopicArn: string;
}
export class NotificationTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NotificationTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snsTopicArn = value.snsTopicArn;
    }
  }

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class NotificationTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : NotificationTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): NotificationTargetPropertyOutputReference {
    return new NotificationTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IncidentTemplateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#dedupe_string AwsResponsePlan#dedupe_string}
  */
  readonly dedupeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#impact AwsResponsePlan#impact}
  */
  readonly impact: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#incident_tags AwsResponsePlan#incident_tags}
  */
  readonly incidentTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#summary AwsResponsePlan#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#title AwsResponsePlan#title}
  */
  readonly title: string;
  /**
  * notification_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#notification_target AwsResponsePlan#notification_target}
  */
  readonly notificationTarget?: NotificationTargetProperty[] | cdktn.IResolvable;
}
export class IncidentTemplatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IncidentTemplateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedupeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupeString = this._dedupeString;
    }
    if (this._impact !== undefined) {
      hasAnyValues = true;
      internalValueResult.impact = this._impact;
    }
    if (this._incidentTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentTags = this._incidentTags;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._notificationTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTarget = this._notificationTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncidentTemplateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dedupeString = undefined;
      this._impact = undefined;
      this._incidentTags = undefined;
      this._summary = undefined;
      this._title = undefined;
      this._notificationTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dedupeString = value.dedupeString;
      this._impact = value.impact;
      this._incidentTags = value.incidentTags;
      this._summary = value.summary;
      this._title = value.title;
      this._notificationTarget.internalValue = value.notificationTarget;
    }
  }

  // dedupe_string - computed: false, optional: true, required: false
  private _dedupeString?: string; 
  public get dedupeString() {
    return this.getStringAttribute('dedupe_string');
  }
  public set dedupeString(value: string) {
    this._dedupeString = value;
  }
  public resetDedupeString() {
    this._dedupeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeStringInput() {
    return this._dedupeString;
  }

  // impact - computed: false, optional: false, required: true
  private _impact?: number; 
  public get impact() {
    return this.getNumberAttribute('impact');
  }
  public set impact(value: number) {
    this._impact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get impactInput() {
    return this._impact;
  }

  // incident_tags - computed: false, optional: true, required: false
  private _incidentTags?: { [key: string]: string }; 
  public get incidentTags() {
    return this.getStringMapAttribute('incident_tags');
  }
  public set incidentTags(value: { [key: string]: string }) {
    this._incidentTags = value;
  }
  public resetIncidentTags() {
    this._incidentTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTagsInput() {
    return this._incidentTags;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // notification_target - computed: false, optional: true, required: false
  private _notificationTarget = new NotificationTargetPropertyList(this, "notification_target", true);
  public get notificationTarget() {
    return this._notificationTarget;
  }
  public putNotificationTarget(value: NotificationTargetProperty[] | cdktn.IResolvable) {
    this._notificationTarget.internalValue = value;
  }
  public resetNotificationTarget() {
    this._notificationTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetInput() {
    return this._notificationTarget.internalValue;
  }
}
export interface PagerdutyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#name AwsResponsePlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#secret_id AwsResponsePlan#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#service_id AwsResponsePlan#service_id}
  */
  readonly serviceId: string;
}
export class PagerdutyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PagerdutyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagerdutyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretId = undefined;
      this._serviceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretId = value.secretId;
      this._serviceId = value.serviceId;
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

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }
}

export class PagerdutyPropertyList extends cdktn.ComplexList {
  public internalValue? : PagerdutyProperty[] | cdktn.IResolvable

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
  public get(index: number): PagerdutyPropertyOutputReference {
    return new PagerdutyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationProperty {
  /**
  * pagerduty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ssmincidents_response_plan#pagerduty AwsResponsePlan#pagerduty}
  */
  readonly pagerduty?: PagerdutyProperty[] | cdktn.IResolvable;
}
export class IntegrationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pagerduty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerduty = this._pagerduty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pagerduty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pagerduty.internalValue = value.pagerduty;
    }
  }

  // pagerduty - computed: false, optional: true, required: false
  private _pagerduty = new PagerdutyPropertyList(this, "pagerduty", false);
  public get pagerduty() {
    return this._pagerduty;
  }
  public putPagerduty(value: PagerdutyProperty[] | cdktn.IResolvable) {
    this._pagerduty.internalValue = value;
  }
  public resetPagerduty() {
    this._pagerduty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyInput() {
    return this._pagerduty.internalValue;
  }
}
}
