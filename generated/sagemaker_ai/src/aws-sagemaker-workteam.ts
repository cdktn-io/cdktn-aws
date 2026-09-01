// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSagemakerWorkteamConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#description AwsSagemakerWorkteam#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#id AwsSagemakerWorkteam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#region AwsSagemakerWorkteam#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#tags AwsSagemakerWorkteam#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#tags_all AwsSagemakerWorkteam#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#workforce_name AwsSagemakerWorkteam#workforce_name}
  */
  readonly workforceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#workteam_name AwsSagemakerWorkteam#workteam_name}
  */
  readonly workteamName: string;
  /**
  * member_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#member_definition AwsSagemakerWorkteam#member_definition}
  */
  readonly memberDefinition: AwsSagemakerWorkteam.MemberDefinitionProperty[] | cdktn.IResolvable;
  /**
  * notification_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#notification_configuration AwsSagemakerWorkteam#notification_configuration}
  */
  readonly notificationConfiguration?: AwsSagemakerWorkteam.NotificationConfigurationProperty;
  /**
  * worker_access_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#worker_access_configuration AwsSagemakerWorkteam#worker_access_configuration}
  */
  readonly workerAccessConfiguration?: AwsSagemakerWorkteam.WorkerAccessConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam aws_sagemaker_workteam}
*/
export class AwsSagemakerWorkteam extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_workteam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSagemakerWorkteam resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSagemakerWorkteam to import
  * @param importFromId The id of the existing AwsSagemakerWorkteam that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSagemakerWorkteam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_workteam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam aws_sagemaker_workteam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSagemakerWorkteamConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSagemakerWorkteamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_workteam',
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
    this._description = config.description;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._workforceName = config.workforceName;
    this._workteamName = config.workteamName;
    this._memberDefinition.internalValue = config.memberDefinition;
    this._notificationConfiguration.internalValue = config.notificationConfiguration;
    this._workerAccessConfiguration.internalValue = config.workerAccessConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
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

  // workforce_name - computed: false, optional: true, required: false
  private _workforceName?: string; 
  public get workforceName() {
    return this.getStringAttribute('workforce_name');
  }
  public set workforceName(value: string) {
    this._workforceName = value;
  }
  public resetWorkforceName() {
    this._workforceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceNameInput() {
    return this._workforceName;
  }

  // workteam_name - computed: false, optional: false, required: true
  private _workteamName?: string; 
  public get workteamName() {
    return this.getStringAttribute('workteam_name');
  }
  public set workteamName(value: string) {
    this._workteamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workteamNameInput() {
    return this._workteamName;
  }

  // member_definition - computed: false, optional: false, required: true
  private _memberDefinition = new AwsSagemakerWorkteam.MemberDefinitionPropertyList(this, "member_definition", false);
  public get memberDefinition() {
    return this._memberDefinition;
  }
  public putMemberDefinition(value: AwsSagemakerWorkteam.MemberDefinitionProperty[] | cdktn.IResolvable) {
    this._memberDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberDefinitionInput() {
    return this._memberDefinition.internalValue;
  }

  // notification_configuration - computed: false, optional: true, required: false
  private _notificationConfiguration = new AwsSagemakerWorkteam.NotificationConfigurationPropertyOutputReference(this, "notification_configuration");
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }
  public putNotificationConfiguration(value: AwsSagemakerWorkteam.NotificationConfigurationProperty) {
    this._notificationConfiguration.internalValue = value;
  }
  public resetNotificationConfiguration() {
    this._notificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigurationInput() {
    return this._notificationConfiguration.internalValue;
  }

  // worker_access_configuration - computed: false, optional: true, required: false
  private _workerAccessConfiguration = new AwsSagemakerWorkteam.WorkerAccessConfigurationPropertyOutputReference(this, "worker_access_configuration");
  public get workerAccessConfiguration() {
    return this._workerAccessConfiguration;
  }
  public putWorkerAccessConfiguration(value: AwsSagemakerWorkteam.WorkerAccessConfigurationProperty) {
    this._workerAccessConfiguration.internalValue = value;
  }
  public resetWorkerAccessConfiguration() {
    this._workerAccessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAccessConfigurationInput() {
    return this._workerAccessConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      workforce_name: cdktn.stringToTerraform(this._workforceName),
      workteam_name: cdktn.stringToTerraform(this._workteamName),
      member_definition: cdktn.listMapper(awsSagemakerWorkteamMemberDefinitionPropertyToTerraform, true)(this._memberDefinition.internalValue),
      notification_configuration: awsSagemakerWorkteamNotificationConfigurationPropertyToTerraform(this._notificationConfiguration.internalValue),
      worker_access_configuration: awsSagemakerWorkteamWorkerAccessConfigurationPropertyToTerraform(this._workerAccessConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      workforce_name: {
        value: cdktn.stringToHclTerraform(this._workforceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workteam_name: {
        value: cdktn.stringToHclTerraform(this._workteamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_definition: {
        value: cdktn.listMapperHcl(awsSagemakerWorkteamMemberDefinitionPropertyToHclTerraform, true)(this._memberDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSagemakerWorkteam.MemberDefinitionPropertyList",
      },
      notification_configuration: {
        value: awsSagemakerWorkteamNotificationConfigurationPropertyToHclTerraform(this._notificationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSagemakerWorkteam.NotificationConfigurationPropertyList",
      },
      worker_access_configuration: {
        value: awsSagemakerWorkteamWorkerAccessConfigurationPropertyToHclTerraform(this._workerAccessConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSagemakerWorkteam.WorkerAccessConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSagemakerWorkteamCognitoMemberDefinitionPropertyToTerraform(struct?: AwsSagemakerWorkteam.CognitoMemberDefinitionPropertyOutputReference | AwsSagemakerWorkteam.CognitoMemberDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    user_group: cdktn.stringToTerraform(struct!.userGroup),
    user_pool: cdktn.stringToTerraform(struct!.userPool),
  }
}


export function awsSagemakerWorkteamCognitoMemberDefinitionPropertyToHclTerraform(struct?: AwsSagemakerWorkteam.CognitoMemberDefinitionPropertyOutputReference | AwsSagemakerWorkteam.CognitoMemberDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group: {
      value: cdktn.stringToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool: {
      value: cdktn.stringToHclTerraform(struct!.userPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerWorkteamOidcMemberDefinitionPropertyToTerraform(struct?: AwsSagemakerWorkteam.OidcMemberDefinitionPropertyOutputReference | AwsSagemakerWorkteam.OidcMemberDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groups),
  }
}


export function awsSagemakerWorkteamOidcMemberDefinitionPropertyToHclTerraform(struct?: AwsSagemakerWorkteam.OidcMemberDefinitionPropertyOutputReference | AwsSagemakerWorkteam.OidcMemberDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerWorkteamMemberDefinitionPropertyToTerraform(struct?: AwsSagemakerWorkteam.MemberDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cognito_member_definition: awsSagemakerWorkteamCognitoMemberDefinitionPropertyToTerraform(struct!.cognitoMemberDefinition),
    oidc_member_definition: awsSagemakerWorkteamOidcMemberDefinitionPropertyToTerraform(struct!.oidcMemberDefinition),
  }
}


export function awsSagemakerWorkteamMemberDefinitionPropertyToHclTerraform(struct?: AwsSagemakerWorkteam.MemberDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cognito_member_definition: {
      value: awsSagemakerWorkteamCognitoMemberDefinitionPropertyToHclTerraform(struct!.cognitoMemberDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "CognitoMemberDefinitionPropertyList",
    },
    oidc_member_definition: {
      value: awsSagemakerWorkteamOidcMemberDefinitionPropertyToHclTerraform(struct!.oidcMemberDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "OidcMemberDefinitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerWorkteamNotificationConfigurationPropertyToTerraform(struct?: AwsSagemakerWorkteam.NotificationConfigurationPropertyOutputReference | AwsSagemakerWorkteam.NotificationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    notification_topic_arn: cdktn.stringToTerraform(struct!.notificationTopicArn),
  }
}


export function awsSagemakerWorkteamNotificationConfigurationPropertyToHclTerraform(struct?: AwsSagemakerWorkteam.NotificationConfigurationPropertyOutputReference | AwsSagemakerWorkteam.NotificationConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    notification_topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.notificationTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerWorkteamIamPolicyConstraintsPropertyToTerraform(struct?: AwsSagemakerWorkteam.IamPolicyConstraintsPropertyOutputReference | AwsSagemakerWorkteam.IamPolicyConstraintsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_ip: cdktn.stringToTerraform(struct!.sourceIp),
    vpc_source_ip: cdktn.stringToTerraform(struct!.vpcSourceIp),
  }
}


export function awsSagemakerWorkteamIamPolicyConstraintsPropertyToHclTerraform(struct?: AwsSagemakerWorkteam.IamPolicyConstraintsPropertyOutputReference | AwsSagemakerWorkteam.IamPolicyConstraintsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_ip: {
      value: cdktn.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_source_ip: {
      value: cdktn.stringToHclTerraform(struct!.vpcSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerWorkteamS3PresignPropertyToTerraform(struct?: AwsSagemakerWorkteam.S3PresignPropertyOutputReference | AwsSagemakerWorkteam.S3PresignProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_policy_constraints: awsSagemakerWorkteamIamPolicyConstraintsPropertyToTerraform(struct!.iamPolicyConstraints),
  }
}


export function awsSagemakerWorkteamS3PresignPropertyToHclTerraform(struct?: AwsSagemakerWorkteam.S3PresignPropertyOutputReference | AwsSagemakerWorkteam.S3PresignProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_policy_constraints: {
      value: awsSagemakerWorkteamIamPolicyConstraintsPropertyToHclTerraform(struct!.iamPolicyConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "IamPolicyConstraintsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerWorkteamWorkerAccessConfigurationPropertyToTerraform(struct?: AwsSagemakerWorkteam.WorkerAccessConfigurationPropertyOutputReference | AwsSagemakerWorkteam.WorkerAccessConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_presign: awsSagemakerWorkteamS3PresignPropertyToTerraform(struct!.s3Presign),
  }
}


export function awsSagemakerWorkteamWorkerAccessConfigurationPropertyToHclTerraform(struct?: AwsSagemakerWorkteam.WorkerAccessConfigurationPropertyOutputReference | AwsSagemakerWorkteam.WorkerAccessConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_presign: {
      value: awsSagemakerWorkteamS3PresignPropertyToHclTerraform(struct!.s3Presign),
      isBlock: true,
      type: "list",
      storageClassType: "S3PresignPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsSagemakerWorkteam {
export interface CognitoMemberDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#client_id AwsSagemakerWorkteam#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#user_group AwsSagemakerWorkteam#user_group}
  */
  readonly userGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#user_pool AwsSagemakerWorkteam#user_pool}
  */
  readonly userPool: string;
}
export class CognitoMemberDefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoMemberDefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    if (this._userPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPool = this._userPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoMemberDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._userGroup = undefined;
      this._userPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._userGroup = value.userGroup;
      this._userPool = value.userPool;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // user_group - computed: false, optional: false, required: true
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }

  // user_pool - computed: false, optional: false, required: true
  private _userPool?: string; 
  public get userPool() {
    return this.getStringAttribute('user_pool');
  }
  public set userPool(value: string) {
    this._userPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolInput() {
    return this._userPool;
  }
}
export interface OidcMemberDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#groups AwsSagemakerWorkteam#groups}
  */
  readonly groups: string[];
}
export class OidcMemberDefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OidcMemberDefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OidcMemberDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups = value.groups;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return cdktn.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }
}
export interface MemberDefinitionProperty {
  /**
  * cognito_member_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#cognito_member_definition AwsSagemakerWorkteam#cognito_member_definition}
  */
  readonly cognitoMemberDefinition?: CognitoMemberDefinitionProperty;
  /**
  * oidc_member_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#oidc_member_definition AwsSagemakerWorkteam#oidc_member_definition}
  */
  readonly oidcMemberDefinition?: OidcMemberDefinitionProperty;
}
export class MemberDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MemberDefinitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cognitoMemberDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cognitoMemberDefinition = this._cognitoMemberDefinition?.internalValue;
    }
    if (this._oidcMemberDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcMemberDefinition = this._oidcMemberDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemberDefinitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cognitoMemberDefinition.internalValue = undefined;
      this._oidcMemberDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cognitoMemberDefinition.internalValue = value.cognitoMemberDefinition;
      this._oidcMemberDefinition.internalValue = value.oidcMemberDefinition;
    }
  }

  // cognito_member_definition - computed: false, optional: true, required: false
  private _cognitoMemberDefinition = new CognitoMemberDefinitionPropertyOutputReference(this, "cognito_member_definition");
  public get cognitoMemberDefinition() {
    return this._cognitoMemberDefinition;
  }
  public putCognitoMemberDefinition(value: CognitoMemberDefinitionProperty) {
    this._cognitoMemberDefinition.internalValue = value;
  }
  public resetCognitoMemberDefinition() {
    this._cognitoMemberDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoMemberDefinitionInput() {
    return this._cognitoMemberDefinition.internalValue;
  }

  // oidc_member_definition - computed: false, optional: true, required: false
  private _oidcMemberDefinition = new OidcMemberDefinitionPropertyOutputReference(this, "oidc_member_definition");
  public get oidcMemberDefinition() {
    return this._oidcMemberDefinition;
  }
  public putOidcMemberDefinition(value: OidcMemberDefinitionProperty) {
    this._oidcMemberDefinition.internalValue = value;
  }
  public resetOidcMemberDefinition() {
    this._oidcMemberDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcMemberDefinitionInput() {
    return this._oidcMemberDefinition.internalValue;
  }
}

export class MemberDefinitionPropertyList extends cdktn.ComplexList {
  public internalValue? : MemberDefinitionProperty[] | cdktn.IResolvable

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
  public get(index: number): MemberDefinitionPropertyOutputReference {
    return new MemberDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#notification_topic_arn AwsSagemakerWorkteam#notification_topic_arn}
  */
  readonly notificationTopicArn?: string;
}
export class NotificationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTopicArn = this._notificationTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notificationTopicArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notificationTopicArn = value.notificationTopicArn;
    }
  }

  // notification_topic_arn - computed: false, optional: true, required: false
  private _notificationTopicArn?: string; 
  public get notificationTopicArn() {
    return this.getStringAttribute('notification_topic_arn');
  }
  public set notificationTopicArn(value: string) {
    this._notificationTopicArn = value;
  }
  public resetNotificationTopicArn() {
    this._notificationTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicArnInput() {
    return this._notificationTopicArn;
  }
}
export interface IamPolicyConstraintsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#source_ip AwsSagemakerWorkteam#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#vpc_source_ip AwsSagemakerWorkteam#vpc_source_ip}
  */
  readonly vpcSourceIp?: string;
}
export class IamPolicyConstraintsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamPolicyConstraintsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._vpcSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSourceIp = this._vpcSourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamPolicyConstraintsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceIp = undefined;
      this._vpcSourceIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceIp = value.sourceIp;
      this._vpcSourceIp = value.vpcSourceIp;
    }
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // vpc_source_ip - computed: true, optional: true, required: false
  private _vpcSourceIp?: string; 
  public get vpcSourceIp() {
    return this.getStringAttribute('vpc_source_ip');
  }
  public set vpcSourceIp(value: string) {
    this._vpcSourceIp = value;
  }
  public resetVpcSourceIp() {
    this._vpcSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSourceIpInput() {
    return this._vpcSourceIp;
  }
}
export interface S3PresignProperty {
  /**
  * iam_policy_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#iam_policy_constraints AwsSagemakerWorkteam#iam_policy_constraints}
  */
  readonly iamPolicyConstraints?: IamPolicyConstraintsProperty;
}
export class S3PresignPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3PresignProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamPolicyConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamPolicyConstraints = this._iamPolicyConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3PresignProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamPolicyConstraints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamPolicyConstraints.internalValue = value.iamPolicyConstraints;
    }
  }

  // iam_policy_constraints - computed: false, optional: true, required: false
  private _iamPolicyConstraints = new IamPolicyConstraintsPropertyOutputReference(this, "iam_policy_constraints");
  public get iamPolicyConstraints() {
    return this._iamPolicyConstraints;
  }
  public putIamPolicyConstraints(value: IamPolicyConstraintsProperty) {
    this._iamPolicyConstraints.internalValue = value;
  }
  public resetIamPolicyConstraints() {
    this._iamPolicyConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamPolicyConstraintsInput() {
    return this._iamPolicyConstraints.internalValue;
  }
}
export interface WorkerAccessConfigurationProperty {
  /**
  * s3_presign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_workteam#s3_presign AwsSagemakerWorkteam#s3_presign}
  */
  readonly s3Presign?: S3PresignProperty;
}
export class WorkerAccessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkerAccessConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Presign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Presign = this._s3Presign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerAccessConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Presign.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Presign.internalValue = value.s3Presign;
    }
  }

  // s3_presign - computed: false, optional: true, required: false
  private _s3Presign = new S3PresignPropertyOutputReference(this, "s3_presign");
  public get s3Presign() {
    return this._s3Presign;
  }
  public putS3Presign(value: S3PresignProperty) {
    this._s3Presign.internalValue = value;
  }
  public resetS3Presign() {
    this._s3Presign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PresignInput() {
    return this._s3Presign.internalValue;
  }
}
}
