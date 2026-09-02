// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfWebAclConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#description TfWebAcl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#id TfWebAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name TfWebAcl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name_prefix TfWebAcl#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#region TfWebAcl#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#rule_json TfWebAcl#rule_json}
  */
  readonly ruleJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#scope TfWebAcl#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#tags TfWebAcl#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#tags_all TfWebAcl#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#token_domains TfWebAcl#token_domains}
  */
  readonly tokenDomains?: string[];
  /**
  * association_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#association_config TfWebAcl#association_config}
  */
  readonly associationConfig?: TfWebAcl.AssociationConfigProperty;
  /**
  * captcha_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#captcha_config TfWebAcl#captcha_config}
  */
  readonly captchaConfig?: TfWebAcl.CaptchaConfigProperty;
  /**
  * challenge_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#challenge_config TfWebAcl#challenge_config}
  */
  readonly challengeConfig?: TfWebAcl.ChallengeConfigProperty;
  /**
  * custom_response_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#custom_response_body TfWebAcl#custom_response_body}
  */
  readonly customResponseBody?: TfWebAcl.CustomResponseBodyProperty[] | cdktn.IResolvable;
  /**
  * data_protection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#data_protection_config TfWebAcl#data_protection_config}
  */
  readonly dataProtectionConfig?: TfWebAcl.DataProtectionConfigProperty;
  /**
  * default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#default_action TfWebAcl#default_action}
  */
  readonly defaultAction: TfWebAcl.DefaultActionProperty;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#rule TfWebAcl#rule}
  */
  readonly rule?: TfWebAcl.RuleProperty[] | cdktn.IResolvable;
  /**
  * visibility_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#visibility_config TfWebAcl#visibility_config}
  */
  readonly visibilityConfig: TfWebAcl.VisibilityConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl aws_wafv2_web_acl}
*/
export class TfWebAcl extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafv2_web_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfWebAcl resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfWebAcl to import
  * @param importFromId The id of the existing TfWebAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfWebAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafv2_web_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl aws_wafv2_web_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfWebAclConfig
  */
  public constructor(scope: Construct, id: string, config: TfWebAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl',
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
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._region = config.region;
    this._ruleJson = config.ruleJson;
    this._scope = config.scope;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._tokenDomains = config.tokenDomains;
    this._associationConfig.internalValue = config.associationConfig;
    this._captchaConfig.internalValue = config.captchaConfig;
    this._challengeConfig.internalValue = config.challengeConfig;
    this._customResponseBody.internalValue = config.customResponseBody;
    this._dataProtectionConfig.internalValue = config.dataProtectionConfig;
    this._defaultAction.internalValue = config.defaultAction;
    this._rule.internalValue = config.rule;
    this._visibilityConfig.internalValue = config.visibilityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_integration_url - computed: true, optional: false, required: false
  public get applicationIntegrationUrl() {
    return this.getStringAttribute('application_integration_url');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
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

  // lock_token - computed: true, optional: false, required: false
  public get lockToken() {
    return this.getStringAttribute('lock_token');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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

  // rule_json - computed: false, optional: true, required: false
  private _ruleJson?: string; 
  public get ruleJson() {
    return this.getStringAttribute('rule_json');
  }
  public set ruleJson(value: string) {
    this._ruleJson = value;
  }
  public resetRuleJson() {
    this._ruleJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleJsonInput() {
    return this._ruleJson;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

  // token_domains - computed: false, optional: true, required: false
  private _tokenDomains?: string[]; 
  public get tokenDomains() {
    return cdktn.Fn.tolist(this.getListAttribute('token_domains'));
  }
  public set tokenDomains(value: string[]) {
    this._tokenDomains = value;
  }
  public resetTokenDomains() {
    this._tokenDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenDomainsInput() {
    return this._tokenDomains;
  }

  // association_config - computed: false, optional: true, required: false
  private _associationConfig = new TfWebAcl.AssociationConfigPropertyOutputReference(this, "association_config");
  public get associationConfig() {
    return this._associationConfig;
  }
  public putAssociationConfig(value: TfWebAcl.AssociationConfigProperty) {
    this._associationConfig.internalValue = value;
  }
  public resetAssociationConfig() {
    this._associationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationConfigInput() {
    return this._associationConfig.internalValue;
  }

  // captcha_config - computed: false, optional: true, required: false
  private _captchaConfig = new TfWebAcl.CaptchaConfigPropertyOutputReference(this, "captcha_config");
  public get captchaConfig() {
    return this._captchaConfig;
  }
  public putCaptchaConfig(value: TfWebAcl.CaptchaConfigProperty) {
    this._captchaConfig.internalValue = value;
  }
  public resetCaptchaConfig() {
    this._captchaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaConfigInput() {
    return this._captchaConfig.internalValue;
  }

  // challenge_config - computed: false, optional: true, required: false
  private _challengeConfig = new TfWebAcl.ChallengeConfigPropertyOutputReference(this, "challenge_config");
  public get challengeConfig() {
    return this._challengeConfig;
  }
  public putChallengeConfig(value: TfWebAcl.ChallengeConfigProperty) {
    this._challengeConfig.internalValue = value;
  }
  public resetChallengeConfig() {
    this._challengeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeConfigInput() {
    return this._challengeConfig.internalValue;
  }

  // custom_response_body - computed: false, optional: true, required: false
  private _customResponseBody = new TfWebAcl.CustomResponseBodyPropertyList(this, "custom_response_body", true);
  public get customResponseBody() {
    return this._customResponseBody;
  }
  public putCustomResponseBody(value: TfWebAcl.CustomResponseBodyProperty[] | cdktn.IResolvable) {
    this._customResponseBody.internalValue = value;
  }
  public resetCustomResponseBody() {
    this._customResponseBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyInput() {
    return this._customResponseBody.internalValue;
  }

  // data_protection_config - computed: false, optional: true, required: false
  private _dataProtectionConfig = new TfWebAcl.DataProtectionConfigPropertyOutputReference(this, "data_protection_config");
  public get dataProtectionConfig() {
    return this._dataProtectionConfig;
  }
  public putDataProtectionConfig(value: TfWebAcl.DataProtectionConfigProperty) {
    this._dataProtectionConfig.internalValue = value;
  }
  public resetDataProtectionConfig() {
    this._dataProtectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionConfigInput() {
    return this._dataProtectionConfig.internalValue;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction = new TfWebAcl.DefaultActionPropertyOutputReference(this, "default_action");
  public get defaultAction() {
    return this._defaultAction;
  }
  public putDefaultAction(value: TfWebAcl.DefaultActionProperty) {
    this._defaultAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new TfWebAcl.RulePropertyList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: TfWebAcl.RuleProperty[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // visibility_config - computed: false, optional: false, required: true
  private _visibilityConfig = new TfWebAcl.VisibilityConfigPropertyOutputReference(this, "visibility_config");
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: TfWebAcl.VisibilityConfigProperty) {
    this._visibilityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      name_prefix: cdktn.stringToTerraform(this._namePrefix),
      region: cdktn.stringToTerraform(this._region),
      rule_json: cdktn.stringToTerraform(this._ruleJson),
      scope: cdktn.stringToTerraform(this._scope),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      token_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenDomains),
      association_config: tfWebAclMapperAssociationConfigPropertyToTerraform(this._associationConfig.internalValue),
      captcha_config: tfWebAclMapperCaptchaConfigPropertyToTerraform(this._captchaConfig.internalValue),
      challenge_config: tfWebAclMapperChallengeConfigPropertyToTerraform(this._challengeConfig.internalValue),
      custom_response_body: cdktn.listMapper(tfWebAclMapperCustomResponseBodyPropertyToTerraform, true)(this._customResponseBody.internalValue),
      data_protection_config: tfWebAclMapperDataProtectionConfigPropertyToTerraform(this._dataProtectionConfig.internalValue),
      default_action: tfWebAclMapperDefaultActionPropertyToTerraform(this._defaultAction.internalValue),
      rule: cdktn.listMapper(tfWebAclMapperRulePropertyToTerraform, true)(this._rule.internalValue),
      visibility_config: tfWebAclMapperVisibilityConfigPropertyToTerraform(this._visibilityConfig.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktn.stringToHclTerraform(this._namePrefix),
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
      rule_json: {
        value: cdktn.stringToHclTerraform(this._ruleJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktn.stringToHclTerraform(this._scope),
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
      token_domains: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tokenDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      association_config: {
        value: tfWebAclMapperAssociationConfigPropertyToHclTerraform(this._associationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfWebAcl.AssociationConfigPropertyList",
      },
      captcha_config: {
        value: tfWebAclMapperCaptchaConfigPropertyToHclTerraform(this._captchaConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfWebAcl.CaptchaConfigPropertyList",
      },
      challenge_config: {
        value: tfWebAclMapperChallengeConfigPropertyToHclTerraform(this._challengeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfWebAcl.ChallengeConfigPropertyList",
      },
      custom_response_body: {
        value: cdktn.listMapperHcl(tfWebAclMapperCustomResponseBodyPropertyToHclTerraform, true)(this._customResponseBody.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfWebAcl.CustomResponseBodyPropertyList",
      },
      data_protection_config: {
        value: tfWebAclMapperDataProtectionConfigPropertyToHclTerraform(this._dataProtectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfWebAcl.DataProtectionConfigPropertyList",
      },
      default_action: {
        value: tfWebAclMapperDefaultActionPropertyToHclTerraform(this._defaultAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfWebAcl.DefaultActionPropertyList",
      },
      rule: {
        value: cdktn.listMapperHcl(tfWebAclMapperRulePropertyToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfWebAcl.RulePropertyList",
      },
      visibility_config: {
        value: tfWebAclMapperVisibilityConfigPropertyToHclTerraform(this._visibilityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfWebAcl.VisibilityConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfWebAclMapperApiGatewayPropertyToTerraform(struct?: TfWebAcl.ApiGatewayPropertyOutputReference | TfWebAcl.ApiGatewayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_size_inspection_limit: cdktn.stringToTerraform(struct!.defaultSizeInspectionLimit),
  }
}


export function tfWebAclMapperApiGatewayPropertyToHclTerraform(struct?: TfWebAcl.ApiGatewayPropertyOutputReference | TfWebAcl.ApiGatewayProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_size_inspection_limit: {
      value: cdktn.stringToHclTerraform(struct!.defaultSizeInspectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperAppRunnerServicePropertyToTerraform(struct?: TfWebAcl.AppRunnerServicePropertyOutputReference | TfWebAcl.AppRunnerServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_size_inspection_limit: cdktn.stringToTerraform(struct!.defaultSizeInspectionLimit),
  }
}


export function tfWebAclMapperAppRunnerServicePropertyToHclTerraform(struct?: TfWebAcl.AppRunnerServicePropertyOutputReference | TfWebAcl.AppRunnerServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_size_inspection_limit: {
      value: cdktn.stringToHclTerraform(struct!.defaultSizeInspectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperCloudfrontPropertyToTerraform(struct?: TfWebAcl.CloudfrontPropertyOutputReference | TfWebAcl.CloudfrontProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_size_inspection_limit: cdktn.stringToTerraform(struct!.defaultSizeInspectionLimit),
  }
}


export function tfWebAclMapperCloudfrontPropertyToHclTerraform(struct?: TfWebAcl.CloudfrontPropertyOutputReference | TfWebAcl.CloudfrontProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_size_inspection_limit: {
      value: cdktn.stringToHclTerraform(struct!.defaultSizeInspectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperCognitoUserPoolPropertyToTerraform(struct?: TfWebAcl.CognitoUserPoolPropertyOutputReference | TfWebAcl.CognitoUserPoolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_size_inspection_limit: cdktn.stringToTerraform(struct!.defaultSizeInspectionLimit),
  }
}


export function tfWebAclMapperCognitoUserPoolPropertyToHclTerraform(struct?: TfWebAcl.CognitoUserPoolPropertyOutputReference | TfWebAcl.CognitoUserPoolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_size_inspection_limit: {
      value: cdktn.stringToHclTerraform(struct!.defaultSizeInspectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperVerifiedAccessInstancePropertyToTerraform(struct?: TfWebAcl.VerifiedAccessInstancePropertyOutputReference | TfWebAcl.VerifiedAccessInstanceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_size_inspection_limit: cdktn.stringToTerraform(struct!.defaultSizeInspectionLimit),
  }
}


export function tfWebAclMapperVerifiedAccessInstancePropertyToHclTerraform(struct?: TfWebAcl.VerifiedAccessInstancePropertyOutputReference | TfWebAcl.VerifiedAccessInstanceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_size_inspection_limit: {
      value: cdktn.stringToHclTerraform(struct!.defaultSizeInspectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRequestBodyPropertyToTerraform(struct?: TfWebAcl.RequestBodyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_gateway: tfWebAclMapperApiGatewayPropertyToTerraform(struct!.apiGateway),
    app_runner_service: tfWebAclMapperAppRunnerServicePropertyToTerraform(struct!.appRunnerService),
    cloudfront: tfWebAclMapperCloudfrontPropertyToTerraform(struct!.cloudfront),
    cognito_user_pool: tfWebAclMapperCognitoUserPoolPropertyToTerraform(struct!.cognitoUserPool),
    verified_access_instance: tfWebAclMapperVerifiedAccessInstancePropertyToTerraform(struct!.verifiedAccessInstance),
  }
}


export function tfWebAclMapperRequestBodyPropertyToHclTerraform(struct?: TfWebAcl.RequestBodyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_gateway: {
      value: tfWebAclMapperApiGatewayPropertyToHclTerraform(struct!.apiGateway),
      isBlock: true,
      type: "list",
      storageClassType: "ApiGatewayPropertyList",
    },
    app_runner_service: {
      value: tfWebAclMapperAppRunnerServicePropertyToHclTerraform(struct!.appRunnerService),
      isBlock: true,
      type: "list",
      storageClassType: "AppRunnerServicePropertyList",
    },
    cloudfront: {
      value: tfWebAclMapperCloudfrontPropertyToHclTerraform(struct!.cloudfront),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontPropertyList",
    },
    cognito_user_pool: {
      value: tfWebAclMapperCognitoUserPoolPropertyToHclTerraform(struct!.cognitoUserPool),
      isBlock: true,
      type: "list",
      storageClassType: "CognitoUserPoolPropertyList",
    },
    verified_access_instance: {
      value: tfWebAclMapperVerifiedAccessInstancePropertyToHclTerraform(struct!.verifiedAccessInstance),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedAccessInstancePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperAssociationConfigPropertyToTerraform(struct?: TfWebAcl.AssociationConfigPropertyOutputReference | TfWebAcl.AssociationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    request_body: cdktn.listMapper(tfWebAclMapperRequestBodyPropertyToTerraform, true)(struct!.requestBody),
  }
}


export function tfWebAclMapperAssociationConfigPropertyToHclTerraform(struct?: TfWebAcl.AssociationConfigPropertyOutputReference | TfWebAcl.AssociationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    request_body: {
      value: cdktn.listMapperHcl(tfWebAclMapperRequestBodyPropertyToHclTerraform, true)(struct!.requestBody),
      isBlock: true,
      type: "list",
      storageClassType: "RequestBodyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperCaptchaConfigImmunityTimePropertyPropertyToTerraform(struct?: TfWebAcl.CaptchaConfigImmunityTimePropertyPropertyOutputReference | TfWebAcl.CaptchaConfigImmunityTimePropertyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    immunity_time: cdktn.numberToTerraform(struct!.immunityTime),
  }
}


export function tfWebAclMapperCaptchaConfigImmunityTimePropertyPropertyToHclTerraform(struct?: TfWebAcl.CaptchaConfigImmunityTimePropertyPropertyOutputReference | TfWebAcl.CaptchaConfigImmunityTimePropertyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    immunity_time: {
      value: cdktn.numberToHclTerraform(struct!.immunityTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperCaptchaConfigPropertyToTerraform(struct?: TfWebAcl.CaptchaConfigPropertyOutputReference | TfWebAcl.CaptchaConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    immunity_time_property: tfWebAclMapperCaptchaConfigImmunityTimePropertyPropertyToTerraform(struct!.immunityTimeProperty),
  }
}


export function tfWebAclMapperCaptchaConfigPropertyToHclTerraform(struct?: TfWebAcl.CaptchaConfigPropertyOutputReference | TfWebAcl.CaptchaConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    immunity_time_property: {
      value: tfWebAclMapperCaptchaConfigImmunityTimePropertyPropertyToHclTerraform(struct!.immunityTimeProperty),
      isBlock: true,
      type: "list",
      storageClassType: "CaptchaConfigImmunityTimePropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperChallengeConfigImmunityTimePropertyPropertyToTerraform(struct?: TfWebAcl.ChallengeConfigImmunityTimePropertyPropertyOutputReference | TfWebAcl.ChallengeConfigImmunityTimePropertyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    immunity_time: cdktn.numberToTerraform(struct!.immunityTime),
  }
}


export function tfWebAclMapperChallengeConfigImmunityTimePropertyPropertyToHclTerraform(struct?: TfWebAcl.ChallengeConfigImmunityTimePropertyPropertyOutputReference | TfWebAcl.ChallengeConfigImmunityTimePropertyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    immunity_time: {
      value: cdktn.numberToHclTerraform(struct!.immunityTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperChallengeConfigPropertyToTerraform(struct?: TfWebAcl.ChallengeConfigPropertyOutputReference | TfWebAcl.ChallengeConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    immunity_time_property: tfWebAclMapperChallengeConfigImmunityTimePropertyPropertyToTerraform(struct!.immunityTimeProperty),
  }
}


export function tfWebAclMapperChallengeConfigPropertyToHclTerraform(struct?: TfWebAcl.ChallengeConfigPropertyOutputReference | TfWebAcl.ChallengeConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    immunity_time_property: {
      value: tfWebAclMapperChallengeConfigImmunityTimePropertyPropertyToHclTerraform(struct!.immunityTimeProperty),
      isBlock: true,
      type: "list",
      storageClassType: "ChallengeConfigImmunityTimePropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperCustomResponseBodyPropertyToTerraform(struct?: TfWebAcl.CustomResponseBodyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function tfWebAclMapperCustomResponseBodyPropertyToHclTerraform(struct?: TfWebAcl.CustomResponseBodyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperFieldPropertyToTerraform(struct?: TfWebAcl.FieldPropertyOutputReference | TfWebAcl.FieldProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fieldKeys),
    field_type: cdktn.stringToTerraform(struct!.fieldType),
  }
}


export function tfWebAclMapperFieldPropertyToHclTerraform(struct?: TfWebAcl.FieldPropertyOutputReference | TfWebAcl.FieldProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fieldKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_type: {
      value: cdktn.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperDataProtectionPropertyToTerraform(struct?: TfWebAcl.DataProtectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    exclude_rate_based_details: cdktn.booleanToTerraform(struct!.excludeRateBasedDetails),
    exclude_rule_match_details: cdktn.booleanToTerraform(struct!.excludeRuleMatchDetails),
    field: tfWebAclMapperFieldPropertyToTerraform(struct!.field),
  }
}


export function tfWebAclMapperDataProtectionPropertyToHclTerraform(struct?: TfWebAcl.DataProtectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_rate_based_details: {
      value: cdktn.booleanToHclTerraform(struct!.excludeRateBasedDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_rule_match_details: {
      value: cdktn.booleanToHclTerraform(struct!.excludeRuleMatchDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field: {
      value: tfWebAclMapperFieldPropertyToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "FieldPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperDataProtectionConfigPropertyToTerraform(struct?: TfWebAcl.DataProtectionConfigPropertyOutputReference | TfWebAcl.DataProtectionConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_protection: cdktn.listMapper(tfWebAclMapperDataProtectionPropertyToTerraform, true)(struct!.dataProtection),
  }
}


export function tfWebAclMapperDataProtectionConfigPropertyToHclTerraform(struct?: TfWebAcl.DataProtectionConfigPropertyOutputReference | TfWebAcl.DataProtectionConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_protection: {
      value: cdktn.listMapperHcl(tfWebAclMapperDataProtectionPropertyToHclTerraform, true)(struct!.dataProtection),
      isBlock: true,
      type: "list",
      storageClassType: "DataProtectionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperDefaultActionAllowCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAcl.DefaultActionAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclMapperDefaultActionAllowCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAcl.DefaultActionAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclMapperDefaultActionAllowCustomRequestHandlingPropertyToTerraform(struct?: TfWebAcl.DefaultActionAllowCustomRequestHandlingPropertyOutputReference | TfWebAcl.DefaultActionAllowCustomRequestHandlingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclMapperDefaultActionAllowCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclMapperDefaultActionAllowCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAcl.DefaultActionAllowCustomRequestHandlingPropertyOutputReference | TfWebAcl.DefaultActionAllowCustomRequestHandlingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclMapperDefaultActionAllowCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultActionAllowCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperDefaultActionAllowPropertyToTerraform(struct?: TfWebAcl.DefaultActionAllowPropertyOutputReference | TfWebAcl.DefaultActionAllowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: tfWebAclMapperDefaultActionAllowCustomRequestHandlingPropertyToTerraform(struct!.customRequestHandling),
  }
}


export function tfWebAclMapperDefaultActionAllowPropertyToHclTerraform(struct?: TfWebAcl.DefaultActionAllowPropertyOutputReference | TfWebAcl.DefaultActionAllowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: tfWebAclMapperDefaultActionAllowCustomRequestHandlingPropertyToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultActionAllowCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperDefaultActionBlockCustomResponseResponseHeaderPropertyToTerraform(struct?: TfWebAcl.DefaultActionBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclMapperDefaultActionBlockCustomResponseResponseHeaderPropertyToHclTerraform(struct?: TfWebAcl.DefaultActionBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclMapperDefaultActionBlockCustomResponsePropertyToTerraform(struct?: TfWebAcl.DefaultActionBlockCustomResponsePropertyOutputReference | TfWebAcl.DefaultActionBlockCustomResponseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response_body_key: cdktn.stringToTerraform(struct!.customResponseBodyKey),
    response_code: cdktn.numberToTerraform(struct!.responseCode),
    response_header: cdktn.listMapper(tfWebAclMapperDefaultActionBlockCustomResponseResponseHeaderPropertyToTerraform, true)(struct!.responseHeader),
  }
}


export function tfWebAclMapperDefaultActionBlockCustomResponsePropertyToHclTerraform(struct?: TfWebAcl.DefaultActionBlockCustomResponsePropertyOutputReference | TfWebAcl.DefaultActionBlockCustomResponseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response_body_key: {
      value: cdktn.stringToHclTerraform(struct!.customResponseBodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktn.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_header: {
      value: cdktn.listMapperHcl(tfWebAclMapperDefaultActionBlockCustomResponseResponseHeaderPropertyToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultActionBlockCustomResponseResponseHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperDefaultActionBlockPropertyToTerraform(struct?: TfWebAcl.DefaultActionBlockPropertyOutputReference | TfWebAcl.DefaultActionBlockProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response: tfWebAclMapperDefaultActionBlockCustomResponsePropertyToTerraform(struct!.customResponse),
  }
}


export function tfWebAclMapperDefaultActionBlockPropertyToHclTerraform(struct?: TfWebAcl.DefaultActionBlockPropertyOutputReference | TfWebAcl.DefaultActionBlockProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response: {
      value: tfWebAclMapperDefaultActionBlockCustomResponsePropertyToHclTerraform(struct!.customResponse),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultActionBlockCustomResponsePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperDefaultActionPropertyToTerraform(struct?: TfWebAcl.DefaultActionPropertyOutputReference | TfWebAcl.DefaultActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow: tfWebAclMapperDefaultActionAllowPropertyToTerraform(struct!.allow),
    block: tfWebAclMapperDefaultActionBlockPropertyToTerraform(struct!.block),
  }
}


export function tfWebAclMapperDefaultActionPropertyToHclTerraform(struct?: TfWebAcl.DefaultActionPropertyOutputReference | TfWebAcl.DefaultActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow: {
      value: tfWebAclMapperDefaultActionAllowPropertyToHclTerraform(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultActionAllowPropertyList",
    },
    block: {
      value: tfWebAclMapperDefaultActionBlockPropertyToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultActionBlockPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleActionAllowCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAcl.RuleActionAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclMapperRuleActionAllowCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAcl.RuleActionAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclMapperRuleActionAllowCustomRequestHandlingPropertyToTerraform(struct?: TfWebAcl.RuleActionAllowCustomRequestHandlingPropertyOutputReference | TfWebAcl.RuleActionAllowCustomRequestHandlingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclMapperRuleActionAllowCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclMapperRuleActionAllowCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAcl.RuleActionAllowCustomRequestHandlingPropertyOutputReference | TfWebAcl.RuleActionAllowCustomRequestHandlingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclMapperRuleActionAllowCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "RuleActionAllowCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleActionAllowPropertyToTerraform(struct?: TfWebAcl.RuleActionAllowPropertyOutputReference | TfWebAcl.RuleActionAllowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: tfWebAclMapperRuleActionAllowCustomRequestHandlingPropertyToTerraform(struct!.customRequestHandling),
  }
}


export function tfWebAclMapperRuleActionAllowPropertyToHclTerraform(struct?: TfWebAcl.RuleActionAllowPropertyOutputReference | TfWebAcl.RuleActionAllowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: tfWebAclMapperRuleActionAllowCustomRequestHandlingPropertyToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "RuleActionAllowCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleActionBlockCustomResponseResponseHeaderPropertyToTerraform(struct?: TfWebAcl.RuleActionBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclMapperRuleActionBlockCustomResponseResponseHeaderPropertyToHclTerraform(struct?: TfWebAcl.RuleActionBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclMapperRuleActionBlockCustomResponsePropertyToTerraform(struct?: TfWebAcl.RuleActionBlockCustomResponsePropertyOutputReference | TfWebAcl.RuleActionBlockCustomResponseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response_body_key: cdktn.stringToTerraform(struct!.customResponseBodyKey),
    response_code: cdktn.numberToTerraform(struct!.responseCode),
    response_header: cdktn.listMapper(tfWebAclMapperRuleActionBlockCustomResponseResponseHeaderPropertyToTerraform, true)(struct!.responseHeader),
  }
}


export function tfWebAclMapperRuleActionBlockCustomResponsePropertyToHclTerraform(struct?: TfWebAcl.RuleActionBlockCustomResponsePropertyOutputReference | TfWebAcl.RuleActionBlockCustomResponseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response_body_key: {
      value: cdktn.stringToHclTerraform(struct!.customResponseBodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktn.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_header: {
      value: cdktn.listMapperHcl(tfWebAclMapperRuleActionBlockCustomResponseResponseHeaderPropertyToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "set",
      storageClassType: "RuleActionBlockCustomResponseResponseHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleActionBlockPropertyToTerraform(struct?: TfWebAcl.RuleActionBlockPropertyOutputReference | TfWebAcl.RuleActionBlockProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_response: tfWebAclMapperRuleActionBlockCustomResponsePropertyToTerraform(struct!.customResponse),
  }
}


export function tfWebAclMapperRuleActionBlockPropertyToHclTerraform(struct?: TfWebAcl.RuleActionBlockPropertyOutputReference | TfWebAcl.RuleActionBlockProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_response: {
      value: tfWebAclMapperRuleActionBlockCustomResponsePropertyToHclTerraform(struct!.customResponse),
      isBlock: true,
      type: "list",
      storageClassType: "RuleActionBlockCustomResponsePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleActionCaptchaCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAcl.RuleActionCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclMapperRuleActionCaptchaCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAcl.RuleActionCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclMapperRuleActionCaptchaCustomRequestHandlingPropertyToTerraform(struct?: TfWebAcl.RuleActionCaptchaCustomRequestHandlingPropertyOutputReference | TfWebAcl.RuleActionCaptchaCustomRequestHandlingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclMapperRuleActionCaptchaCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclMapperRuleActionCaptchaCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAcl.RuleActionCaptchaCustomRequestHandlingPropertyOutputReference | TfWebAcl.RuleActionCaptchaCustomRequestHandlingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclMapperRuleActionCaptchaCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "RuleActionCaptchaCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperCaptchaPropertyToTerraform(struct?: TfWebAcl.CaptchaPropertyOutputReference | TfWebAcl.CaptchaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: tfWebAclMapperRuleActionCaptchaCustomRequestHandlingPropertyToTerraform(struct!.customRequestHandling),
  }
}


export function tfWebAclMapperCaptchaPropertyToHclTerraform(struct?: TfWebAcl.CaptchaPropertyOutputReference | TfWebAcl.CaptchaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: tfWebAclMapperRuleActionCaptchaCustomRequestHandlingPropertyToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "RuleActionCaptchaCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleActionChallengeCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAcl.RuleActionChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclMapperRuleActionChallengeCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAcl.RuleActionChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclMapperRuleActionChallengeCustomRequestHandlingPropertyToTerraform(struct?: TfWebAcl.RuleActionChallengeCustomRequestHandlingPropertyOutputReference | TfWebAcl.RuleActionChallengeCustomRequestHandlingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclMapperRuleActionChallengeCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclMapperRuleActionChallengeCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAcl.RuleActionChallengeCustomRequestHandlingPropertyOutputReference | TfWebAcl.RuleActionChallengeCustomRequestHandlingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclMapperRuleActionChallengeCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "RuleActionChallengeCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperChallengePropertyToTerraform(struct?: TfWebAcl.ChallengePropertyOutputReference | TfWebAcl.ChallengeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: tfWebAclMapperRuleActionChallengeCustomRequestHandlingPropertyToTerraform(struct!.customRequestHandling),
  }
}


export function tfWebAclMapperChallengePropertyToHclTerraform(struct?: TfWebAcl.ChallengePropertyOutputReference | TfWebAcl.ChallengeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: tfWebAclMapperRuleActionChallengeCustomRequestHandlingPropertyToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "RuleActionChallengeCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleActionCountCustomRequestHandlingInsertHeaderPropertyToTerraform(struct?: TfWebAcl.RuleActionCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfWebAclMapperRuleActionCountCustomRequestHandlingInsertHeaderPropertyToHclTerraform(struct?: TfWebAcl.RuleActionCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable): any {
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


export function tfWebAclMapperRuleActionCountCustomRequestHandlingPropertyToTerraform(struct?: TfWebAcl.RuleActionCountCustomRequestHandlingPropertyOutputReference | TfWebAcl.RuleActionCountCustomRequestHandlingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insert_header: cdktn.listMapper(tfWebAclMapperRuleActionCountCustomRequestHandlingInsertHeaderPropertyToTerraform, true)(struct!.insertHeader),
  }
}


export function tfWebAclMapperRuleActionCountCustomRequestHandlingPropertyToHclTerraform(struct?: TfWebAcl.RuleActionCountCustomRequestHandlingPropertyOutputReference | TfWebAcl.RuleActionCountCustomRequestHandlingProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insert_header: {
      value: cdktn.listMapperHcl(tfWebAclMapperRuleActionCountCustomRequestHandlingInsertHeaderPropertyToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "RuleActionCountCustomRequestHandlingInsertHeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleActionCountPropertyToTerraform(struct?: TfWebAcl.RuleActionCountPropertyOutputReference | TfWebAcl.RuleActionCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_request_handling: tfWebAclMapperRuleActionCountCustomRequestHandlingPropertyToTerraform(struct!.customRequestHandling),
  }
}


export function tfWebAclMapperRuleActionCountPropertyToHclTerraform(struct?: TfWebAcl.RuleActionCountPropertyOutputReference | TfWebAcl.RuleActionCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_request_handling: {
      value: tfWebAclMapperRuleActionCountCustomRequestHandlingPropertyToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "RuleActionCountCustomRequestHandlingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperActionPropertyToTerraform(struct?: TfWebAcl.ActionPropertyOutputReference | TfWebAcl.ActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow: tfWebAclMapperRuleActionAllowPropertyToTerraform(struct!.allow),
    block: tfWebAclMapperRuleActionBlockPropertyToTerraform(struct!.block),
    captcha: tfWebAclMapperCaptchaPropertyToTerraform(struct!.captcha),
    challenge: tfWebAclMapperChallengePropertyToTerraform(struct!.challenge),
    count: tfWebAclMapperRuleActionCountPropertyToTerraform(struct!.count),
  }
}


export function tfWebAclMapperActionPropertyToHclTerraform(struct?: TfWebAcl.ActionPropertyOutputReference | TfWebAcl.ActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow: {
      value: tfWebAclMapperRuleActionAllowPropertyToHclTerraform(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "RuleActionAllowPropertyList",
    },
    block: {
      value: tfWebAclMapperRuleActionBlockPropertyToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "RuleActionBlockPropertyList",
    },
    captcha: {
      value: tfWebAclMapperCaptchaPropertyToHclTerraform(struct!.captcha),
      isBlock: true,
      type: "list",
      storageClassType: "CaptchaPropertyList",
    },
    challenge: {
      value: tfWebAclMapperChallengePropertyToHclTerraform(struct!.challenge),
      isBlock: true,
      type: "list",
      storageClassType: "ChallengePropertyList",
    },
    count: {
      value: tfWebAclMapperRuleActionCountPropertyToHclTerraform(struct!.count),
      isBlock: true,
      type: "list",
      storageClassType: "RuleActionCountPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleCaptchaConfigImmunityTimePropertyPropertyToTerraform(struct?: TfWebAcl.RuleCaptchaConfigImmunityTimePropertyPropertyOutputReference | TfWebAcl.RuleCaptchaConfigImmunityTimePropertyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    immunity_time: cdktn.numberToTerraform(struct!.immunityTime),
  }
}


export function tfWebAclMapperRuleCaptchaConfigImmunityTimePropertyPropertyToHclTerraform(struct?: TfWebAcl.RuleCaptchaConfigImmunityTimePropertyPropertyOutputReference | TfWebAcl.RuleCaptchaConfigImmunityTimePropertyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    immunity_time: {
      value: cdktn.numberToHclTerraform(struct!.immunityTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleCaptchaConfigPropertyToTerraform(struct?: TfWebAcl.RuleCaptchaConfigPropertyOutputReference | TfWebAcl.RuleCaptchaConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    immunity_time_property: tfWebAclMapperRuleCaptchaConfigImmunityTimePropertyPropertyToTerraform(struct!.immunityTimeProperty),
  }
}


export function tfWebAclMapperRuleCaptchaConfigPropertyToHclTerraform(struct?: TfWebAcl.RuleCaptchaConfigPropertyOutputReference | TfWebAcl.RuleCaptchaConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    immunity_time_property: {
      value: tfWebAclMapperRuleCaptchaConfigImmunityTimePropertyPropertyToHclTerraform(struct!.immunityTimeProperty),
      isBlock: true,
      type: "list",
      storageClassType: "RuleCaptchaConfigImmunityTimePropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleChallengeConfigImmunityTimePropertyPropertyToTerraform(struct?: TfWebAcl.RuleChallengeConfigImmunityTimePropertyPropertyOutputReference | TfWebAcl.RuleChallengeConfigImmunityTimePropertyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    immunity_time: cdktn.numberToTerraform(struct!.immunityTime),
  }
}


export function tfWebAclMapperRuleChallengeConfigImmunityTimePropertyPropertyToHclTerraform(struct?: TfWebAcl.RuleChallengeConfigImmunityTimePropertyPropertyOutputReference | TfWebAcl.RuleChallengeConfigImmunityTimePropertyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    immunity_time: {
      value: cdktn.numberToHclTerraform(struct!.immunityTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleChallengeConfigPropertyToTerraform(struct?: TfWebAcl.RuleChallengeConfigPropertyOutputReference | TfWebAcl.RuleChallengeConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    immunity_time_property: tfWebAclMapperRuleChallengeConfigImmunityTimePropertyPropertyToTerraform(struct!.immunityTimeProperty),
  }
}


export function tfWebAclMapperRuleChallengeConfigPropertyToHclTerraform(struct?: TfWebAcl.RuleChallengeConfigPropertyOutputReference | TfWebAcl.RuleChallengeConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    immunity_time_property: {
      value: tfWebAclMapperRuleChallengeConfigImmunityTimePropertyPropertyToHclTerraform(struct!.immunityTimeProperty),
      isBlock: true,
      type: "list",
      storageClassType: "RuleChallengeConfigImmunityTimePropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleOverrideActionCountPropertyToTerraform(struct?: TfWebAcl.RuleOverrideActionCountPropertyOutputReference | TfWebAcl.RuleOverrideActionCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfWebAclMapperRuleOverrideActionCountPropertyToHclTerraform(struct?: TfWebAcl.RuleOverrideActionCountPropertyOutputReference | TfWebAcl.RuleOverrideActionCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfWebAclMapperNonePropertyToTerraform(struct?: TfWebAcl.NonePropertyOutputReference | TfWebAcl.NoneProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfWebAclMapperNonePropertyToHclTerraform(struct?: TfWebAcl.NonePropertyOutputReference | TfWebAcl.NoneProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfWebAclMapperOverrideActionPropertyToTerraform(struct?: TfWebAcl.OverrideActionPropertyOutputReference | TfWebAcl.OverrideActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: tfWebAclMapperRuleOverrideActionCountPropertyToTerraform(struct!.count),
    none: tfWebAclMapperNonePropertyToTerraform(struct!.none),
  }
}


export function tfWebAclMapperOverrideActionPropertyToHclTerraform(struct?: TfWebAcl.OverrideActionPropertyOutputReference | TfWebAcl.OverrideActionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: tfWebAclMapperRuleOverrideActionCountPropertyToHclTerraform(struct!.count),
      isBlock: true,
      type: "list",
      storageClassType: "RuleOverrideActionCountPropertyList",
    },
    none: {
      value: tfWebAclMapperNonePropertyToHclTerraform(struct!.none),
      isBlock: true,
      type: "list",
      storageClassType: "NonePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleLabelPropertyToTerraform(struct?: TfWebAcl.RuleLabelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function tfWebAclMapperRuleLabelPropertyToHclTerraform(struct?: TfWebAcl.RuleLabelProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRuleVisibilityConfigPropertyToTerraform(struct?: TfWebAcl.RuleVisibilityConfigPropertyOutputReference | TfWebAcl.RuleVisibilityConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_metrics_enabled: cdktn.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktn.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}


export function tfWebAclMapperRuleVisibilityConfigPropertyToHclTerraform(struct?: TfWebAcl.RuleVisibilityConfigPropertyOutputReference | TfWebAcl.RuleVisibilityConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.cloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampled_requests_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.sampledRequestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperRulePropertyToTerraform(struct?: TfWebAcl.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    priority: cdktn.numberToTerraform(struct!.priority),
    action: tfWebAclMapperActionPropertyToTerraform(struct!.action),
    captcha_config: tfWebAclMapperRuleCaptchaConfigPropertyToTerraform(struct!.captchaConfig),
    challenge_config: tfWebAclMapperRuleChallengeConfigPropertyToTerraform(struct!.challengeConfig),
    override_action: tfWebAclMapperOverrideActionPropertyToTerraform(struct!.overrideAction),
    rule_label: cdktn.listMapper(tfWebAclMapperRuleLabelPropertyToTerraform, true)(struct!.ruleLabel),
    statement: cdktn.anyToTerraform(struct!.statement),
    visibility_config: tfWebAclMapperRuleVisibilityConfigPropertyToTerraform(struct!.visibilityConfig),
  }
}


export function tfWebAclMapperRulePropertyToHclTerraform(struct?: TfWebAcl.RuleProperty | cdktn.IResolvable): any {
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
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: tfWebAclMapperActionPropertyToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "ActionPropertyList",
    },
    captcha_config: {
      value: tfWebAclMapperRuleCaptchaConfigPropertyToHclTerraform(struct!.captchaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RuleCaptchaConfigPropertyList",
    },
    challenge_config: {
      value: tfWebAclMapperRuleChallengeConfigPropertyToHclTerraform(struct!.challengeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RuleChallengeConfigPropertyList",
    },
    override_action: {
      value: tfWebAclMapperOverrideActionPropertyToHclTerraform(struct!.overrideAction),
      isBlock: true,
      type: "list",
      storageClassType: "OverrideActionPropertyList",
    },
    rule_label: {
      value: cdktn.listMapperHcl(tfWebAclMapperRuleLabelPropertyToHclTerraform, true)(struct!.ruleLabel),
      isBlock: true,
      type: "set",
      storageClassType: "RuleLabelPropertyList",
    },
    statement: {
      value: cdktn.anyToHclTerraform(struct!.statement),
      isBlock: false,
      type: "simple",
      storageClassType: "any",
    },
    visibility_config: {
      value: tfWebAclMapperRuleVisibilityConfigPropertyToHclTerraform(struct!.visibilityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RuleVisibilityConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfWebAclMapperVisibilityConfigPropertyToTerraform(struct?: TfWebAcl.VisibilityConfigPropertyOutputReference | TfWebAcl.VisibilityConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_metrics_enabled: cdktn.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktn.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}


export function tfWebAclMapperVisibilityConfigPropertyToHclTerraform(struct?: TfWebAcl.VisibilityConfigPropertyOutputReference | TfWebAcl.VisibilityConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.cloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampled_requests_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.sampledRequestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfWebAcl {
export interface ApiGatewayProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#default_size_inspection_limit TfWebAcl#default_size_inspection_limit}
  */
  readonly defaultSizeInspectionLimit: string;
}
export class ApiGatewayPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSizeInspectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSizeInspectionLimit = this._defaultSizeInspectionLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSizeInspectionLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSizeInspectionLimit = value.defaultSizeInspectionLimit;
    }
  }

  // default_size_inspection_limit - computed: false, optional: false, required: true
  private _defaultSizeInspectionLimit?: string; 
  public get defaultSizeInspectionLimit() {
    return this.getStringAttribute('default_size_inspection_limit');
  }
  public set defaultSizeInspectionLimit(value: string) {
    this._defaultSizeInspectionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSizeInspectionLimitInput() {
    return this._defaultSizeInspectionLimit;
  }
}
export interface AppRunnerServiceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#default_size_inspection_limit TfWebAcl#default_size_inspection_limit}
  */
  readonly defaultSizeInspectionLimit: string;
}
export class AppRunnerServicePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppRunnerServiceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSizeInspectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSizeInspectionLimit = this._defaultSizeInspectionLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppRunnerServiceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSizeInspectionLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSizeInspectionLimit = value.defaultSizeInspectionLimit;
    }
  }

  // default_size_inspection_limit - computed: false, optional: false, required: true
  private _defaultSizeInspectionLimit?: string; 
  public get defaultSizeInspectionLimit() {
    return this.getStringAttribute('default_size_inspection_limit');
  }
  public set defaultSizeInspectionLimit(value: string) {
    this._defaultSizeInspectionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSizeInspectionLimitInput() {
    return this._defaultSizeInspectionLimit;
  }
}
export interface CloudfrontProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#default_size_inspection_limit TfWebAcl#default_size_inspection_limit}
  */
  readonly defaultSizeInspectionLimit: string;
}
export class CloudfrontPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSizeInspectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSizeInspectionLimit = this._defaultSizeInspectionLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSizeInspectionLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSizeInspectionLimit = value.defaultSizeInspectionLimit;
    }
  }

  // default_size_inspection_limit - computed: false, optional: false, required: true
  private _defaultSizeInspectionLimit?: string; 
  public get defaultSizeInspectionLimit() {
    return this.getStringAttribute('default_size_inspection_limit');
  }
  public set defaultSizeInspectionLimit(value: string) {
    this._defaultSizeInspectionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSizeInspectionLimitInput() {
    return this._defaultSizeInspectionLimit;
  }
}
export interface CognitoUserPoolProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#default_size_inspection_limit TfWebAcl#default_size_inspection_limit}
  */
  readonly defaultSizeInspectionLimit: string;
}
export class CognitoUserPoolPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoUserPoolProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSizeInspectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSizeInspectionLimit = this._defaultSizeInspectionLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSizeInspectionLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSizeInspectionLimit = value.defaultSizeInspectionLimit;
    }
  }

  // default_size_inspection_limit - computed: false, optional: false, required: true
  private _defaultSizeInspectionLimit?: string; 
  public get defaultSizeInspectionLimit() {
    return this.getStringAttribute('default_size_inspection_limit');
  }
  public set defaultSizeInspectionLimit(value: string) {
    this._defaultSizeInspectionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSizeInspectionLimitInput() {
    return this._defaultSizeInspectionLimit;
  }
}
export interface VerifiedAccessInstanceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#default_size_inspection_limit TfWebAcl#default_size_inspection_limit}
  */
  readonly defaultSizeInspectionLimit: string;
}
export class VerifiedAccessInstancePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedAccessInstanceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSizeInspectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSizeInspectionLimit = this._defaultSizeInspectionLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedAccessInstanceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSizeInspectionLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSizeInspectionLimit = value.defaultSizeInspectionLimit;
    }
  }

  // default_size_inspection_limit - computed: false, optional: false, required: true
  private _defaultSizeInspectionLimit?: string; 
  public get defaultSizeInspectionLimit() {
    return this.getStringAttribute('default_size_inspection_limit');
  }
  public set defaultSizeInspectionLimit(value: string) {
    this._defaultSizeInspectionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSizeInspectionLimitInput() {
    return this._defaultSizeInspectionLimit;
  }
}
export interface RequestBodyProperty {
  /**
  * api_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#api_gateway TfWebAcl#api_gateway}
  */
  readonly apiGateway?: ApiGatewayProperty;
  /**
  * app_runner_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#app_runner_service TfWebAcl#app_runner_service}
  */
  readonly appRunnerService?: AppRunnerServiceProperty;
  /**
  * cloudfront block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#cloudfront TfWebAcl#cloudfront}
  */
  readonly cloudfront?: CloudfrontProperty;
  /**
  * cognito_user_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#cognito_user_pool TfWebAcl#cognito_user_pool}
  */
  readonly cognitoUserPool?: CognitoUserPoolProperty;
  /**
  * verified_access_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#verified_access_instance TfWebAcl#verified_access_instance}
  */
  readonly verifiedAccessInstance?: VerifiedAccessInstanceProperty;
}
export class RequestBodyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RequestBodyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGateway = this._apiGateway?.internalValue;
    }
    if (this._appRunnerService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appRunnerService = this._appRunnerService?.internalValue;
    }
    if (this._cloudfront?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudfront = this._cloudfront?.internalValue;
    }
    if (this._cognitoUserPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cognitoUserPool = this._cognitoUserPool?.internalValue;
    }
    if (this._verifiedAccessInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifiedAccessInstance = this._verifiedAccessInstance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestBodyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGateway.internalValue = undefined;
      this._appRunnerService.internalValue = undefined;
      this._cloudfront.internalValue = undefined;
      this._cognitoUserPool.internalValue = undefined;
      this._verifiedAccessInstance.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGateway.internalValue = value.apiGateway;
      this._appRunnerService.internalValue = value.appRunnerService;
      this._cloudfront.internalValue = value.cloudfront;
      this._cognitoUserPool.internalValue = value.cognitoUserPool;
      this._verifiedAccessInstance.internalValue = value.verifiedAccessInstance;
    }
  }

  // api_gateway - computed: false, optional: true, required: false
  private _apiGateway = new ApiGatewayPropertyOutputReference(this, "api_gateway");
  public get apiGateway() {
    return this._apiGateway;
  }
  public putApiGateway(value: ApiGatewayProperty) {
    this._apiGateway.internalValue = value;
  }
  public resetApiGateway() {
    this._apiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayInput() {
    return this._apiGateway.internalValue;
  }

  // app_runner_service - computed: false, optional: true, required: false
  private _appRunnerService = new AppRunnerServicePropertyOutputReference(this, "app_runner_service");
  public get appRunnerService() {
    return this._appRunnerService;
  }
  public putAppRunnerService(value: AppRunnerServiceProperty) {
    this._appRunnerService.internalValue = value;
  }
  public resetAppRunnerService() {
    this._appRunnerService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRunnerServiceInput() {
    return this._appRunnerService.internalValue;
  }

  // cloudfront - computed: false, optional: true, required: false
  private _cloudfront = new CloudfrontPropertyOutputReference(this, "cloudfront");
  public get cloudfront() {
    return this._cloudfront;
  }
  public putCloudfront(value: CloudfrontProperty) {
    this._cloudfront.internalValue = value;
  }
  public resetCloudfront() {
    this._cloudfront.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfrontInput() {
    return this._cloudfront.internalValue;
  }

  // cognito_user_pool - computed: false, optional: true, required: false
  private _cognitoUserPool = new CognitoUserPoolPropertyOutputReference(this, "cognito_user_pool");
  public get cognitoUserPool() {
    return this._cognitoUserPool;
  }
  public putCognitoUserPool(value: CognitoUserPoolProperty) {
    this._cognitoUserPool.internalValue = value;
  }
  public resetCognitoUserPool() {
    this._cognitoUserPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoUserPoolInput() {
    return this._cognitoUserPool.internalValue;
  }

  // verified_access_instance - computed: false, optional: true, required: false
  private _verifiedAccessInstance = new VerifiedAccessInstancePropertyOutputReference(this, "verified_access_instance");
  public get verifiedAccessInstance() {
    return this._verifiedAccessInstance;
  }
  public putVerifiedAccessInstance(value: VerifiedAccessInstanceProperty) {
    this._verifiedAccessInstance.internalValue = value;
  }
  public resetVerifiedAccessInstance() {
    this._verifiedAccessInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedAccessInstanceInput() {
    return this._verifiedAccessInstance.internalValue;
  }
}

export class RequestBodyPropertyList extends cdktn.ComplexList {
  public internalValue? : RequestBodyProperty[] | cdktn.IResolvable

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
  public get(index: number): RequestBodyPropertyOutputReference {
    return new RequestBodyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssociationConfigProperty {
  /**
  * request_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#request_body TfWebAcl#request_body}
  */
  readonly requestBody?: RequestBodyProperty[] | cdktn.IResolvable;
}
export class AssociationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AssociationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssociationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestBody.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestBody.internalValue = value.requestBody;
    }
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody = new RequestBodyPropertyList(this, "request_body", false);
  public get requestBody() {
    return this._requestBody;
  }
  public putRequestBody(value: RequestBodyProperty[] | cdktn.IResolvable) {
    this._requestBody.internalValue = value;
  }
  public resetRequestBody() {
    this._requestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody.internalValue;
  }
}
export interface CaptchaConfigImmunityTimePropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#immunity_time TfWebAcl#immunity_time}
  */
  readonly immunityTime?: number;
}
export class CaptchaConfigImmunityTimePropertyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CaptchaConfigImmunityTimePropertyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTime = this._immunityTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CaptchaConfigImmunityTimePropertyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTime = value.immunityTime;
    }
  }

  // immunity_time - computed: false, optional: true, required: false
  private _immunityTime?: number; 
  public get immunityTime() {
    return this.getNumberAttribute('immunity_time');
  }
  public set immunityTime(value: number) {
    this._immunityTime = value;
  }
  public resetImmunityTime() {
    this._immunityTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimeInput() {
    return this._immunityTime;
  }
}
export interface CaptchaConfigProperty {
  /**
  * immunity_time_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#immunity_time_property TfWebAcl#immunity_time_property}
  */
  readonly immunityTimeProperty?: CaptchaConfigImmunityTimePropertyProperty;
}
export class CaptchaConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CaptchaConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTimeProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTimeProperty = this._immunityTimeProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CaptchaConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTimeProperty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTimeProperty.internalValue = value.immunityTimeProperty;
    }
  }

  // immunity_time_property - computed: false, optional: true, required: false
  private _immunityTimeProperty = new CaptchaConfigImmunityTimePropertyPropertyOutputReference(this, "immunity_time_property");
  public get immunityTimeProperty() {
    return this._immunityTimeProperty;
  }
  public putImmunityTimeProperty(value: CaptchaConfigImmunityTimePropertyProperty) {
    this._immunityTimeProperty.internalValue = value;
  }
  public resetImmunityTimeProperty() {
    this._immunityTimeProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimePropertyInput() {
    return this._immunityTimeProperty.internalValue;
  }
}
export interface ChallengeConfigImmunityTimePropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#immunity_time TfWebAcl#immunity_time}
  */
  readonly immunityTime?: number;
}
export class ChallengeConfigImmunityTimePropertyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChallengeConfigImmunityTimePropertyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTime = this._immunityTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChallengeConfigImmunityTimePropertyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTime = value.immunityTime;
    }
  }

  // immunity_time - computed: false, optional: true, required: false
  private _immunityTime?: number; 
  public get immunityTime() {
    return this.getNumberAttribute('immunity_time');
  }
  public set immunityTime(value: number) {
    this._immunityTime = value;
  }
  public resetImmunityTime() {
    this._immunityTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimeInput() {
    return this._immunityTime;
  }
}
export interface ChallengeConfigProperty {
  /**
  * immunity_time_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#immunity_time_property TfWebAcl#immunity_time_property}
  */
  readonly immunityTimeProperty?: ChallengeConfigImmunityTimePropertyProperty;
}
export class ChallengeConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChallengeConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTimeProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTimeProperty = this._immunityTimeProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChallengeConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTimeProperty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTimeProperty.internalValue = value.immunityTimeProperty;
    }
  }

  // immunity_time_property - computed: false, optional: true, required: false
  private _immunityTimeProperty = new ChallengeConfigImmunityTimePropertyPropertyOutputReference(this, "immunity_time_property");
  public get immunityTimeProperty() {
    return this._immunityTimeProperty;
  }
  public putImmunityTimeProperty(value: ChallengeConfigImmunityTimePropertyProperty) {
    this._immunityTimeProperty.internalValue = value;
  }
  public resetImmunityTimeProperty() {
    this._immunityTimeProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimePropertyInput() {
    return this._immunityTimeProperty.internalValue;
  }
}
export interface CustomResponseBodyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#content TfWebAcl#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#content_type TfWebAcl#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#key TfWebAcl#key}
  */
  readonly key: string;
}
export class CustomResponseBodyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomResponseBodyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomResponseBodyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._key = value.key;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
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
}

export class CustomResponseBodyPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomResponseBodyProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomResponseBodyPropertyOutputReference {
    return new CustomResponseBodyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FieldProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#field_keys TfWebAcl#field_keys}
  */
  readonly fieldKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#field_type TfWebAcl#field_type}
  */
  readonly fieldType: string;
}
export class FieldPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FieldProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldKeys = this._fieldKeys;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FieldProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldKeys = undefined;
      this._fieldType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldKeys = value.fieldKeys;
      this._fieldType = value.fieldType;
    }
  }

  // field_keys - computed: false, optional: true, required: false
  private _fieldKeys?: string[]; 
  public get fieldKeys() {
    return this.getListAttribute('field_keys');
  }
  public set fieldKeys(value: string[]) {
    this._fieldKeys = value;
  }
  public resetFieldKeys() {
    this._fieldKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldKeysInput() {
    return this._fieldKeys;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }
}
export interface DataProtectionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#action TfWebAcl#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#exclude_rate_based_details TfWebAcl#exclude_rate_based_details}
  */
  readonly excludeRateBasedDetails?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#exclude_rule_match_details TfWebAcl#exclude_rule_match_details}
  */
  readonly excludeRuleMatchDetails?: boolean | cdktn.IResolvable;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#field TfWebAcl#field}
  */
  readonly field: FieldProperty;
}
export class DataProtectionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataProtectionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._excludeRateBasedDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRateBasedDetails = this._excludeRateBasedDetails;
    }
    if (this._excludeRuleMatchDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRuleMatchDetails = this._excludeRuleMatchDetails;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._excludeRateBasedDetails = undefined;
      this._excludeRuleMatchDetails = undefined;
      this._field.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._excludeRateBasedDetails = value.excludeRateBasedDetails;
      this._excludeRuleMatchDetails = value.excludeRuleMatchDetails;
      this._field.internalValue = value.field;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // exclude_rate_based_details - computed: false, optional: true, required: false
  private _excludeRateBasedDetails?: boolean | cdktn.IResolvable; 
  public get excludeRateBasedDetails() {
    return this.getBooleanAttribute('exclude_rate_based_details');
  }
  public set excludeRateBasedDetails(value: boolean | cdktn.IResolvable) {
    this._excludeRateBasedDetails = value;
  }
  public resetExcludeRateBasedDetails() {
    this._excludeRateBasedDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRateBasedDetailsInput() {
    return this._excludeRateBasedDetails;
  }

  // exclude_rule_match_details - computed: false, optional: true, required: false
  private _excludeRuleMatchDetails?: boolean | cdktn.IResolvable; 
  public get excludeRuleMatchDetails() {
    return this.getBooleanAttribute('exclude_rule_match_details');
  }
  public set excludeRuleMatchDetails(value: boolean | cdktn.IResolvable) {
    this._excludeRuleMatchDetails = value;
  }
  public resetExcludeRuleMatchDetails() {
    this._excludeRuleMatchDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRuleMatchDetailsInput() {
    return this._excludeRuleMatchDetails;
  }

  // field - computed: false, optional: false, required: true
  private _field = new FieldPropertyOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: FieldProperty) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}

export class DataProtectionPropertyList extends cdktn.ComplexList {
  public internalValue? : DataProtectionProperty[] | cdktn.IResolvable

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
  public get(index: number): DataProtectionPropertyOutputReference {
    return new DataProtectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProtectionConfigProperty {
  /**
  * data_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#data_protection TfWebAcl#data_protection}
  */
  readonly dataProtection?: DataProtectionProperty[] | cdktn.IResolvable;
}
export class DataProtectionConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataProtectionConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProtection = this._dataProtection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataProtection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataProtection.internalValue = value.dataProtection;
    }
  }

  // data_protection - computed: false, optional: true, required: false
  private _dataProtection = new DataProtectionPropertyList(this, "data_protection", false);
  public get dataProtection() {
    return this._dataProtection;
  }
  public putDataProtection(value: DataProtectionProperty[] | cdktn.IResolvable) {
    this._dataProtection.internalValue = value;
  }
  public resetDataProtection() {
    this._dataProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionInput() {
    return this._dataProtection.internalValue;
  }
}
export interface DefaultActionAllowCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name TfWebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#value TfWebAcl#value}
  */
  readonly value: string;
}
export class DefaultActionAllowCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultActionAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DefaultActionAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
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

export class DefaultActionAllowCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultActionAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultActionAllowCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new DefaultActionAllowCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultActionAllowCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#insert_header TfWebAcl#insert_header}
  */
  readonly insertHeader: DefaultActionAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class DefaultActionAllowCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultActionAllowCustomRequestHandlingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultActionAllowCustomRequestHandlingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new DefaultActionAllowCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: DefaultActionAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface DefaultActionAllowProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#custom_request_handling TfWebAcl#custom_request_handling}
  */
  readonly customRequestHandling?: DefaultActionAllowCustomRequestHandlingProperty;
}
export class DefaultActionAllowPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultActionAllowProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultActionAllowProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new DefaultActionAllowCustomRequestHandlingPropertyOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: DefaultActionAllowCustomRequestHandlingProperty) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface DefaultActionBlockCustomResponseResponseHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name TfWebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#value TfWebAcl#value}
  */
  readonly value: string;
}
export class DefaultActionBlockCustomResponseResponseHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultActionBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DefaultActionBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable | undefined) {
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

export class DefaultActionBlockCustomResponseResponseHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultActionBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultActionBlockCustomResponseResponseHeaderPropertyOutputReference {
    return new DefaultActionBlockCustomResponseResponseHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultActionBlockCustomResponseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#custom_response_body_key TfWebAcl#custom_response_body_key}
  */
  readonly customResponseBodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#response_code TfWebAcl#response_code}
  */
  readonly responseCode: number;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#response_header TfWebAcl#response_header}
  */
  readonly responseHeader?: DefaultActionBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable;
}
export class DefaultActionBlockCustomResponsePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultActionBlockCustomResponseProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponseBodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponseBodyKey = this._customResponseBodyKey;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultActionBlockCustomResponseProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customResponseBodyKey = undefined;
      this._responseCode = undefined;
      this._responseHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customResponseBodyKey = value.customResponseBodyKey;
      this._responseCode = value.responseCode;
      this._responseHeader.internalValue = value.responseHeader;
    }
  }

  // custom_response_body_key - computed: false, optional: true, required: false
  private _customResponseBodyKey?: string; 
  public get customResponseBodyKey() {
    return this.getStringAttribute('custom_response_body_key');
  }
  public set customResponseBodyKey(value: string) {
    this._customResponseBodyKey = value;
  }
  public resetCustomResponseBodyKey() {
    this._customResponseBodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyKeyInput() {
    return this._customResponseBodyKey;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new DefaultActionBlockCustomResponseResponseHeaderPropertyList(this, "response_header", true);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: DefaultActionBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }
}
export interface DefaultActionBlockProperty {
  /**
  * custom_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#custom_response TfWebAcl#custom_response}
  */
  readonly customResponse?: DefaultActionBlockCustomResponseProperty;
}
export class DefaultActionBlockPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultActionBlockProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponse = this._customResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultActionBlockProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customResponse.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customResponse.internalValue = value.customResponse;
    }
  }

  // custom_response - computed: false, optional: true, required: false
  private _customResponse = new DefaultActionBlockCustomResponsePropertyOutputReference(this, "custom_response");
  public get customResponse() {
    return this._customResponse;
  }
  public putCustomResponse(value: DefaultActionBlockCustomResponseProperty) {
    this._customResponse.internalValue = value;
  }
  public resetCustomResponse() {
    this._customResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseInput() {
    return this._customResponse.internalValue;
  }
}
export interface DefaultActionProperty {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#allow TfWebAcl#allow}
  */
  readonly allow?: DefaultActionAllowProperty;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#block TfWebAcl#block}
  */
  readonly block?: DefaultActionBlockProperty;
}
export class DefaultActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DefaultActionAllowPropertyOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DefaultActionAllowProperty) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new DefaultActionBlockPropertyOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: DefaultActionBlockProperty) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }
}
export interface RuleActionAllowCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name TfWebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#value TfWebAcl#value}
  */
  readonly value: string;
}
export class RuleActionAllowCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleActionAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RuleActionAllowCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
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

export class RuleActionAllowCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleActionAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleActionAllowCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new RuleActionAllowCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleActionAllowCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#insert_header TfWebAcl#insert_header}
  */
  readonly insertHeader: RuleActionAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class RuleActionAllowCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleActionAllowCustomRequestHandlingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleActionAllowCustomRequestHandlingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new RuleActionAllowCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: RuleActionAllowCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface RuleActionAllowProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#custom_request_handling TfWebAcl#custom_request_handling}
  */
  readonly customRequestHandling?: RuleActionAllowCustomRequestHandlingProperty;
}
export class RuleActionAllowPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleActionAllowProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleActionAllowProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new RuleActionAllowCustomRequestHandlingPropertyOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: RuleActionAllowCustomRequestHandlingProperty) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface RuleActionBlockCustomResponseResponseHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name TfWebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#value TfWebAcl#value}
  */
  readonly value: string;
}
export class RuleActionBlockCustomResponseResponseHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleActionBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RuleActionBlockCustomResponseResponseHeaderProperty | cdktn.IResolvable | undefined) {
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

export class RuleActionBlockCustomResponseResponseHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleActionBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleActionBlockCustomResponseResponseHeaderPropertyOutputReference {
    return new RuleActionBlockCustomResponseResponseHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleActionBlockCustomResponseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#custom_response_body_key TfWebAcl#custom_response_body_key}
  */
  readonly customResponseBodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#response_code TfWebAcl#response_code}
  */
  readonly responseCode: number;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#response_header TfWebAcl#response_header}
  */
  readonly responseHeader?: RuleActionBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable;
}
export class RuleActionBlockCustomResponsePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleActionBlockCustomResponseProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponseBodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponseBodyKey = this._customResponseBodyKey;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleActionBlockCustomResponseProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customResponseBodyKey = undefined;
      this._responseCode = undefined;
      this._responseHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customResponseBodyKey = value.customResponseBodyKey;
      this._responseCode = value.responseCode;
      this._responseHeader.internalValue = value.responseHeader;
    }
  }

  // custom_response_body_key - computed: false, optional: true, required: false
  private _customResponseBodyKey?: string; 
  public get customResponseBodyKey() {
    return this.getStringAttribute('custom_response_body_key');
  }
  public set customResponseBodyKey(value: string) {
    this._customResponseBodyKey = value;
  }
  public resetCustomResponseBodyKey() {
    this._customResponseBodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyKeyInput() {
    return this._customResponseBodyKey;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new RuleActionBlockCustomResponseResponseHeaderPropertyList(this, "response_header", true);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: RuleActionBlockCustomResponseResponseHeaderProperty[] | cdktn.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }
}
export interface RuleActionBlockProperty {
  /**
  * custom_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#custom_response TfWebAcl#custom_response}
  */
  readonly customResponse?: RuleActionBlockCustomResponseProperty;
}
export class RuleActionBlockPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleActionBlockProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponse = this._customResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleActionBlockProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customResponse.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customResponse.internalValue = value.customResponse;
    }
  }

  // custom_response - computed: false, optional: true, required: false
  private _customResponse = new RuleActionBlockCustomResponsePropertyOutputReference(this, "custom_response");
  public get customResponse() {
    return this._customResponse;
  }
  public putCustomResponse(value: RuleActionBlockCustomResponseProperty) {
    this._customResponse.internalValue = value;
  }
  public resetCustomResponse() {
    this._customResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseInput() {
    return this._customResponse.internalValue;
  }
}
export interface RuleActionCaptchaCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name TfWebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#value TfWebAcl#value}
  */
  readonly value: string;
}
export class RuleActionCaptchaCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleActionCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RuleActionCaptchaCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
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

export class RuleActionCaptchaCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleActionCaptchaCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleActionCaptchaCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new RuleActionCaptchaCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleActionCaptchaCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#insert_header TfWebAcl#insert_header}
  */
  readonly insertHeader: RuleActionCaptchaCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class RuleActionCaptchaCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleActionCaptchaCustomRequestHandlingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleActionCaptchaCustomRequestHandlingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new RuleActionCaptchaCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: RuleActionCaptchaCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface CaptchaProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#custom_request_handling TfWebAcl#custom_request_handling}
  */
  readonly customRequestHandling?: RuleActionCaptchaCustomRequestHandlingProperty;
}
export class CaptchaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CaptchaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CaptchaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new RuleActionCaptchaCustomRequestHandlingPropertyOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: RuleActionCaptchaCustomRequestHandlingProperty) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface RuleActionChallengeCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name TfWebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#value TfWebAcl#value}
  */
  readonly value: string;
}
export class RuleActionChallengeCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleActionChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RuleActionChallengeCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
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

export class RuleActionChallengeCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleActionChallengeCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleActionChallengeCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new RuleActionChallengeCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleActionChallengeCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#insert_header TfWebAcl#insert_header}
  */
  readonly insertHeader: RuleActionChallengeCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class RuleActionChallengeCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleActionChallengeCustomRequestHandlingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleActionChallengeCustomRequestHandlingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new RuleActionChallengeCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: RuleActionChallengeCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface ChallengeProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#custom_request_handling TfWebAcl#custom_request_handling}
  */
  readonly customRequestHandling?: RuleActionChallengeCustomRequestHandlingProperty;
}
export class ChallengePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChallengeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChallengeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new RuleActionChallengeCustomRequestHandlingPropertyOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: RuleActionChallengeCustomRequestHandlingProperty) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface RuleActionCountCustomRequestHandlingInsertHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name TfWebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#value TfWebAcl#value}
  */
  readonly value: string;
}
export class RuleActionCountCustomRequestHandlingInsertHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleActionCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RuleActionCountCustomRequestHandlingInsertHeaderProperty | cdktn.IResolvable | undefined) {
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

export class RuleActionCountCustomRequestHandlingInsertHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleActionCountCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleActionCountCustomRequestHandlingInsertHeaderPropertyOutputReference {
    return new RuleActionCountCustomRequestHandlingInsertHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleActionCountCustomRequestHandlingProperty {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#insert_header TfWebAcl#insert_header}
  */
  readonly insertHeader: RuleActionCountCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable;
}
export class RuleActionCountCustomRequestHandlingPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleActionCountCustomRequestHandlingProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleActionCountCustomRequestHandlingProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new RuleActionCountCustomRequestHandlingInsertHeaderPropertyList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: RuleActionCountCustomRequestHandlingInsertHeaderProperty[] | cdktn.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface RuleActionCountProperty {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#custom_request_handling TfWebAcl#custom_request_handling}
  */
  readonly customRequestHandling?: RuleActionCountCustomRequestHandlingProperty;
}
export class RuleActionCountPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleActionCountProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleActionCountProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new RuleActionCountCustomRequestHandlingPropertyOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: RuleActionCountCustomRequestHandlingProperty) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface ActionProperty {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#allow TfWebAcl#allow}
  */
  readonly allow?: RuleActionAllowProperty;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#block TfWebAcl#block}
  */
  readonly block?: RuleActionBlockProperty;
  /**
  * captcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#captcha TfWebAcl#captcha}
  */
  readonly captcha?: CaptchaProperty;
  /**
  * challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#challenge TfWebAcl#challenge}
  */
  readonly challenge?: ChallengeProperty;
  /**
  * count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#count TfWebAcl#count}
  */
  readonly count?: RuleActionCountProperty;
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
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._captcha?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captcha = this._captcha?.internalValue;
    }
    if (this._challenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challenge = this._challenge?.internalValue;
    }
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
      this._captcha.internalValue = undefined;
      this._challenge.internalValue = undefined;
      this._count.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
      this._captcha.internalValue = value.captcha;
      this._challenge.internalValue = value.challenge;
      this._count.internalValue = value.count;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new RuleActionAllowPropertyOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: RuleActionAllowProperty) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new RuleActionBlockPropertyOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: RuleActionBlockProperty) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha = new CaptchaPropertyOutputReference(this, "captcha");
  public get captcha() {
    return this._captcha;
  }
  public putCaptcha(value: CaptchaProperty) {
    this._captcha.internalValue = value;
  }
  public resetCaptcha() {
    this._captcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha.internalValue;
  }

  // challenge - computed: false, optional: true, required: false
  private _challenge = new ChallengePropertyOutputReference(this, "challenge");
  public get challenge() {
    return this._challenge;
  }
  public putChallenge(value: ChallengeProperty) {
    this._challenge.internalValue = value;
  }
  public resetChallenge() {
    this._challenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge.internalValue;
  }

  // count - computed: false, optional: true, required: false
  private _count = new RuleActionCountPropertyOutputReference(this, "count");
  public get count() {
    return this._count;
  }
  public putCount(value: RuleActionCountProperty) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }
}
export interface RuleCaptchaConfigImmunityTimePropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#immunity_time TfWebAcl#immunity_time}
  */
  readonly immunityTime?: number;
}
export class RuleCaptchaConfigImmunityTimePropertyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleCaptchaConfigImmunityTimePropertyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTime = this._immunityTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleCaptchaConfigImmunityTimePropertyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTime = value.immunityTime;
    }
  }

  // immunity_time - computed: false, optional: true, required: false
  private _immunityTime?: number; 
  public get immunityTime() {
    return this.getNumberAttribute('immunity_time');
  }
  public set immunityTime(value: number) {
    this._immunityTime = value;
  }
  public resetImmunityTime() {
    this._immunityTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimeInput() {
    return this._immunityTime;
  }
}
export interface RuleCaptchaConfigProperty {
  /**
  * immunity_time_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#immunity_time_property TfWebAcl#immunity_time_property}
  */
  readonly immunityTimeProperty?: RuleCaptchaConfigImmunityTimePropertyProperty;
}
export class RuleCaptchaConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleCaptchaConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTimeProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTimeProperty = this._immunityTimeProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleCaptchaConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTimeProperty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTimeProperty.internalValue = value.immunityTimeProperty;
    }
  }

  // immunity_time_property - computed: false, optional: true, required: false
  private _immunityTimeProperty = new RuleCaptchaConfigImmunityTimePropertyPropertyOutputReference(this, "immunity_time_property");
  public get immunityTimeProperty() {
    return this._immunityTimeProperty;
  }
  public putImmunityTimeProperty(value: RuleCaptchaConfigImmunityTimePropertyProperty) {
    this._immunityTimeProperty.internalValue = value;
  }
  public resetImmunityTimeProperty() {
    this._immunityTimeProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimePropertyInput() {
    return this._immunityTimeProperty.internalValue;
  }
}
export interface RuleChallengeConfigImmunityTimePropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#immunity_time TfWebAcl#immunity_time}
  */
  readonly immunityTime?: number;
}
export class RuleChallengeConfigImmunityTimePropertyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleChallengeConfigImmunityTimePropertyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTime = this._immunityTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleChallengeConfigImmunityTimePropertyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTime = value.immunityTime;
    }
  }

  // immunity_time - computed: false, optional: true, required: false
  private _immunityTime?: number; 
  public get immunityTime() {
    return this.getNumberAttribute('immunity_time');
  }
  public set immunityTime(value: number) {
    this._immunityTime = value;
  }
  public resetImmunityTime() {
    this._immunityTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimeInput() {
    return this._immunityTime;
  }
}
export interface RuleChallengeConfigProperty {
  /**
  * immunity_time_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#immunity_time_property TfWebAcl#immunity_time_property}
  */
  readonly immunityTimeProperty?: RuleChallengeConfigImmunityTimePropertyProperty;
}
export class RuleChallengeConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleChallengeConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTimeProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTimeProperty = this._immunityTimeProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleChallengeConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTimeProperty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTimeProperty.internalValue = value.immunityTimeProperty;
    }
  }

  // immunity_time_property - computed: false, optional: true, required: false
  private _immunityTimeProperty = new RuleChallengeConfigImmunityTimePropertyPropertyOutputReference(this, "immunity_time_property");
  public get immunityTimeProperty() {
    return this._immunityTimeProperty;
  }
  public putImmunityTimeProperty(value: RuleChallengeConfigImmunityTimePropertyProperty) {
    this._immunityTimeProperty.internalValue = value;
  }
  public resetImmunityTimeProperty() {
    this._immunityTimeProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimePropertyInput() {
    return this._immunityTimeProperty.internalValue;
  }
}
export interface RuleOverrideActionCountProperty {
}
export class RuleOverrideActionCountPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleOverrideActionCountProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleOverrideActionCountProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NoneProperty {
}
export class NonePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NoneProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NoneProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface OverrideActionProperty {
  /**
  * count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#count TfWebAcl#count}
  */
  readonly count?: RuleOverrideActionCountProperty;
  /**
  * none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#none TfWebAcl#none}
  */
  readonly none?: NoneProperty;
}
export class OverrideActionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverrideActionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverrideActionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count.internalValue = undefined;
      this._none.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count.internalValue = value.count;
      this._none.internalValue = value.none;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count = new RuleOverrideActionCountPropertyOutputReference(this, "count");
  public get count() {
    return this._count;
  }
  public putCount(value: RuleOverrideActionCountProperty) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new NonePropertyOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: NoneProperty) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }
}
export interface RuleLabelProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name TfWebAcl#name}
  */
  readonly name: string;
}
export class RuleLabelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleLabelProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleLabelProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class RuleLabelPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleLabelProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleLabelPropertyOutputReference {
    return new RuleLabelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleVisibilityConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled TfWebAcl#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#metric_name TfWebAcl#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#sampled_requests_enabled TfWebAcl#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktn.IResolvable;
}
export class RuleVisibilityConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleVisibilityConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._sampledRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleVisibilityConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchMetricsEnabled = undefined;
      this._metricName = undefined;
      this._sampledRequestsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
      this._metricName = value.metricName;
      this._sampledRequestsEnabled = value.sampledRequestsEnabled;
    }
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktn.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled');
  }
  public set sampledRequestsEnabled(value: boolean | cdktn.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled;
  }
}
export interface RuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#name TfWebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#priority TfWebAcl#priority}
  */
  readonly priority: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#action TfWebAcl#action}
  */
  readonly action?: ActionProperty;
  /**
  * captcha_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#captcha_config TfWebAcl#captcha_config}
  */
  readonly captchaConfig?: RuleCaptchaConfigProperty;
  /**
  * challenge_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#challenge_config TfWebAcl#challenge_config}
  */
  readonly challengeConfig?: RuleChallengeConfigProperty;
  /**
  * override_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#override_action TfWebAcl#override_action}
  */
  readonly overrideAction?: OverrideActionProperty;
  /**
  * rule_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#rule_label TfWebAcl#rule_label}
  */
  readonly ruleLabel?: RuleLabelProperty[] | cdktn.IResolvable;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#statement TfWebAcl#statement}
  */
  readonly statement?: any;
  /**
  * visibility_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#visibility_config TfWebAcl#visibility_config}
  */
  readonly visibilityConfig: RuleVisibilityConfigProperty;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._captchaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaConfig = this._captchaConfig?.internalValue;
    }
    if (this._challengeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeConfig = this._challengeConfig?.internalValue;
    }
    if (this._overrideAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideAction = this._overrideAction?.internalValue;
    }
    if (this._ruleLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleLabel = this._ruleLabel?.internalValue;
    }
    if (this._statement !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement;
    }
    if (this._visibilityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityConfig = this._visibilityConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._action.internalValue = undefined;
      this._captchaConfig.internalValue = undefined;
      this._challengeConfig.internalValue = undefined;
      this._overrideAction.internalValue = undefined;
      this._ruleLabel.internalValue = undefined;
      this._statement = undefined;
      this._visibilityConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
      this._action.internalValue = value.action;
      this._captchaConfig.internalValue = value.captchaConfig;
      this._challengeConfig.internalValue = value.challengeConfig;
      this._overrideAction.internalValue = value.overrideAction;
      this._ruleLabel.internalValue = value.ruleLabel;
      this._statement = value.statement;
      this._visibilityConfig.internalValue = value.visibilityConfig;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // action - computed: false, optional: true, required: false
  private _action = new ActionPropertyOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ActionProperty) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // captcha_config - computed: false, optional: true, required: false
  private _captchaConfig = new RuleCaptchaConfigPropertyOutputReference(this, "captcha_config");
  public get captchaConfig() {
    return this._captchaConfig;
  }
  public putCaptchaConfig(value: RuleCaptchaConfigProperty) {
    this._captchaConfig.internalValue = value;
  }
  public resetCaptchaConfig() {
    this._captchaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaConfigInput() {
    return this._captchaConfig.internalValue;
  }

  // challenge_config - computed: false, optional: true, required: false
  private _challengeConfig = new RuleChallengeConfigPropertyOutputReference(this, "challenge_config");
  public get challengeConfig() {
    return this._challengeConfig;
  }
  public putChallengeConfig(value: RuleChallengeConfigProperty) {
    this._challengeConfig.internalValue = value;
  }
  public resetChallengeConfig() {
    this._challengeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeConfigInput() {
    return this._challengeConfig.internalValue;
  }

  // override_action - computed: false, optional: true, required: false
  private _overrideAction = new OverrideActionPropertyOutputReference(this, "override_action");
  public get overrideAction() {
    return this._overrideAction;
  }
  public putOverrideAction(value: OverrideActionProperty) {
    this._overrideAction.internalValue = value;
  }
  public resetOverrideAction() {
    this._overrideAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideActionInput() {
    return this._overrideAction.internalValue;
  }

  // rule_label - computed: false, optional: true, required: false
  private _ruleLabel = new RuleLabelPropertyList(this, "rule_label", true);
  public get ruleLabel() {
    return this._ruleLabel;
  }
  public putRuleLabel(value: RuleLabelProperty[] | cdktn.IResolvable) {
    this._ruleLabel.internalValue = value;
  }
  public resetRuleLabel() {
    this._ruleLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleLabelInput() {
    return this._ruleLabel.internalValue;
  }

  // statement - computed: false, optional: true, required: false
  private _statement?: any; 
  public get statement() {
    return this.interpolationForAttribute('statement');
  }
  public set statement(value: any) {
    this._statement = value;
  }
  public resetStatement() {
    this._statement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // visibility_config - computed: false, optional: false, required: true
  private _visibilityConfig = new RuleVisibilityConfigPropertyOutputReference(this, "visibility_config");
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: RuleVisibilityConfigProperty) {
    this._visibilityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }
}

export class RulePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleProperty[] | cdktn.IResolvable

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
  public get(index: number): RulePropertyOutputReference {
    return new RulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled TfWebAcl#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#metric_name TfWebAcl#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafv2_web_acl#sampled_requests_enabled TfWebAcl#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktn.IResolvable;
}
export class VisibilityConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._sampledRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchMetricsEnabled = undefined;
      this._metricName = undefined;
      this._sampledRequestsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
      this._metricName = value.metricName;
      this._sampledRequestsEnabled = value.sampledRequestsEnabled;
    }
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktn.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled');
  }
  public set sampledRequestsEnabled(value: boolean | cdktn.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled;
  }
}
}
