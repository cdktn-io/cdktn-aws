// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAccessanalyzerAnalyzerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#analyzer_name AwsAccessanalyzerAnalyzer#analyzer_name}
  */
  readonly analyzerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#id AwsAccessanalyzerAnalyzer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#region AwsAccessanalyzerAnalyzer#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#tags AwsAccessanalyzerAnalyzer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#tags_all AwsAccessanalyzerAnalyzer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#type AwsAccessanalyzerAnalyzer#type}
  */
  readonly type?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#configuration AwsAccessanalyzerAnalyzer#configuration}
  */
  readonly configuration?: AwsAccessanalyzerAnalyzer.ConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer aws_accessanalyzer_analyzer}
*/
export class AwsAccessanalyzerAnalyzer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_accessanalyzer_analyzer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAccessanalyzerAnalyzer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAccessanalyzerAnalyzer to import
  * @param importFromId The id of the existing AwsAccessanalyzerAnalyzer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAccessanalyzerAnalyzer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_accessanalyzer_analyzer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer aws_accessanalyzer_analyzer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAccessanalyzerAnalyzerConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAccessanalyzerAnalyzerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_accessanalyzer_analyzer',
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
    this._analyzerName = config.analyzerName;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyzer_name - computed: false, optional: false, required: true
  private _analyzerName?: string; 
  public get analyzerName() {
    return this.getStringAttribute('analyzer_name');
  }
  public set analyzerName(value: string) {
    this._analyzerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerNameInput() {
    return this._analyzerName;
  }

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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AwsAccessanalyzerAnalyzer.ConfigurationPropertyOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AwsAccessanalyzerAnalyzer.ConfigurationProperty) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analyzer_name: cdktn.stringToTerraform(this._analyzerName),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      type: cdktn.stringToTerraform(this._type),
      configuration: awsAccessanalyzerAnalyzerConfigurationPropertyToTerraform(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analyzer_name: {
        value: cdktn.stringToHclTerraform(this._analyzerName),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: awsAccessanalyzerAnalyzerConfigurationPropertyToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAccessanalyzerAnalyzer.ConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsAccessanalyzerAnalyzerInclusionPropertyToTerraform(struct?: AwsAccessanalyzerAnalyzer.InclusionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
    resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceArns),
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function awsAccessanalyzerAnalyzerInclusionPropertyToHclTerraform(struct?: AwsAccessanalyzerAnalyzer.InclusionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAccessanalyzerAnalyzerConfigurationInternalAccessAnalysisRulePropertyToTerraform(struct?: AwsAccessanalyzerAnalyzer.ConfigurationInternalAccessAnalysisRulePropertyOutputReference | AwsAccessanalyzerAnalyzer.ConfigurationInternalAccessAnalysisRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inclusion: cdktn.listMapper(awsAccessanalyzerAnalyzerInclusionPropertyToTerraform, true)(struct!.inclusion),
  }
}


export function awsAccessanalyzerAnalyzerConfigurationInternalAccessAnalysisRulePropertyToHclTerraform(struct?: AwsAccessanalyzerAnalyzer.ConfigurationInternalAccessAnalysisRulePropertyOutputReference | AwsAccessanalyzerAnalyzer.ConfigurationInternalAccessAnalysisRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inclusion: {
      value: cdktn.listMapperHcl(awsAccessanalyzerAnalyzerInclusionPropertyToHclTerraform, true)(struct!.inclusion),
      isBlock: true,
      type: "list",
      storageClassType: "InclusionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAccessanalyzerAnalyzerInternalAccessPropertyToTerraform(struct?: AwsAccessanalyzerAnalyzer.InternalAccessPropertyOutputReference | AwsAccessanalyzerAnalyzer.InternalAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis_rule: awsAccessanalyzerAnalyzerConfigurationInternalAccessAnalysisRulePropertyToTerraform(struct!.analysisRule),
  }
}


export function awsAccessanalyzerAnalyzerInternalAccessPropertyToHclTerraform(struct?: AwsAccessanalyzerAnalyzer.InternalAccessPropertyOutputReference | AwsAccessanalyzerAnalyzer.InternalAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis_rule: {
      value: awsAccessanalyzerAnalyzerConfigurationInternalAccessAnalysisRulePropertyToHclTerraform(struct!.analysisRule),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationInternalAccessAnalysisRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAccessanalyzerAnalyzerExclusionPropertyToTerraform(struct?: AwsAccessanalyzerAnalyzer.ExclusionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
    resource_tags: cdktn.listMapper(cdktn.hashMapper(cdktn.stringToTerraform), false)(struct!.resourceTags),
  }
}


export function awsAccessanalyzerAnalyzerExclusionPropertyToHclTerraform(struct?: AwsAccessanalyzerAnalyzer.ExclusionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(cdktn.hashMapperHcl(cdktn.stringToHclTerraform), false)(struct!.resourceTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRulePropertyToTerraform(struct?: AwsAccessanalyzerAnalyzer.ConfigurationUnusedAccessAnalysisRulePropertyOutputReference | AwsAccessanalyzerAnalyzer.ConfigurationUnusedAccessAnalysisRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion: cdktn.listMapper(awsAccessanalyzerAnalyzerExclusionPropertyToTerraform, true)(struct!.exclusion),
  }
}


export function awsAccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRulePropertyToHclTerraform(struct?: AwsAccessanalyzerAnalyzer.ConfigurationUnusedAccessAnalysisRulePropertyOutputReference | AwsAccessanalyzerAnalyzer.ConfigurationUnusedAccessAnalysisRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion: {
      value: cdktn.listMapperHcl(awsAccessanalyzerAnalyzerExclusionPropertyToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "ExclusionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAccessanalyzerAnalyzerUnusedAccessPropertyToTerraform(struct?: AwsAccessanalyzerAnalyzer.UnusedAccessPropertyOutputReference | AwsAccessanalyzerAnalyzer.UnusedAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unused_access_age: cdktn.numberToTerraform(struct!.unusedAccessAge),
    analysis_rule: awsAccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRulePropertyToTerraform(struct!.analysisRule),
  }
}


export function awsAccessanalyzerAnalyzerUnusedAccessPropertyToHclTerraform(struct?: AwsAccessanalyzerAnalyzer.UnusedAccessPropertyOutputReference | AwsAccessanalyzerAnalyzer.UnusedAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unused_access_age: {
      value: cdktn.numberToHclTerraform(struct!.unusedAccessAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    analysis_rule: {
      value: awsAccessanalyzerAnalyzerConfigurationUnusedAccessAnalysisRulePropertyToHclTerraform(struct!.analysisRule),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationUnusedAccessAnalysisRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAccessanalyzerAnalyzerConfigurationPropertyToTerraform(struct?: AwsAccessanalyzerAnalyzer.ConfigurationPropertyOutputReference | AwsAccessanalyzerAnalyzer.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    internal_access: awsAccessanalyzerAnalyzerInternalAccessPropertyToTerraform(struct!.internalAccess),
    unused_access: awsAccessanalyzerAnalyzerUnusedAccessPropertyToTerraform(struct!.unusedAccess),
  }
}


export function awsAccessanalyzerAnalyzerConfigurationPropertyToHclTerraform(struct?: AwsAccessanalyzerAnalyzer.ConfigurationPropertyOutputReference | AwsAccessanalyzerAnalyzer.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    internal_access: {
      value: awsAccessanalyzerAnalyzerInternalAccessPropertyToHclTerraform(struct!.internalAccess),
      isBlock: true,
      type: "list",
      storageClassType: "InternalAccessPropertyList",
    },
    unused_access: {
      value: awsAccessanalyzerAnalyzerUnusedAccessPropertyToHclTerraform(struct!.unusedAccess),
      isBlock: true,
      type: "list",
      storageClassType: "UnusedAccessPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAccessanalyzerAnalyzer {
export interface InclusionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#account_ids AwsAccessanalyzerAnalyzer#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#resource_arns AwsAccessanalyzerAnalyzer#resource_arns}
  */
  readonly resourceArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#resource_types AwsAccessanalyzerAnalyzer#resource_types}
  */
  readonly resourceTypes?: string[];
}
export class InclusionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InclusionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._resourceArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArns = this._resourceArns;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InclusionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIds = undefined;
      this._resourceArns = undefined;
      this._resourceTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIds = value.accountIds;
      this._resourceArns = value.resourceArns;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // resource_arns - computed: false, optional: true, required: false
  private _resourceArns?: string[]; 
  public get resourceArns() {
    return this.getListAttribute('resource_arns');
  }
  public set resourceArns(value: string[]) {
    this._resourceArns = value;
  }
  public resetResourceArns() {
    this._resourceArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnsInput() {
    return this._resourceArns;
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}

export class InclusionPropertyList extends cdktn.ComplexList {
  public internalValue? : InclusionProperty[] | cdktn.IResolvable

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
  public get(index: number): InclusionPropertyOutputReference {
    return new InclusionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationInternalAccessAnalysisRuleProperty {
  /**
  * inclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#inclusion AwsAccessanalyzerAnalyzer#inclusion}
  */
  readonly inclusion?: InclusionProperty[] | cdktn.IResolvable;
}
export class ConfigurationInternalAccessAnalysisRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationInternalAccessAnalysisRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusion = this._inclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationInternalAccessAnalysisRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inclusion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inclusion.internalValue = value.inclusion;
    }
  }

  // inclusion - computed: false, optional: true, required: false
  private _inclusion = new InclusionPropertyList(this, "inclusion", false);
  public get inclusion() {
    return this._inclusion;
  }
  public putInclusion(value: InclusionProperty[] | cdktn.IResolvable) {
    this._inclusion.internalValue = value;
  }
  public resetInclusion() {
    this._inclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionInput() {
    return this._inclusion.internalValue;
  }
}
export interface InternalAccessProperty {
  /**
  * analysis_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#analysis_rule AwsAccessanalyzerAnalyzer#analysis_rule}
  */
  readonly analysisRule?: ConfigurationInternalAccessAnalysisRuleProperty;
}
export class InternalAccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InternalAccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysisRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisRule = this._analysisRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternalAccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._analysisRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analysisRule.internalValue = value.analysisRule;
    }
  }

  // analysis_rule - computed: false, optional: true, required: false
  private _analysisRule = new ConfigurationInternalAccessAnalysisRulePropertyOutputReference(this, "analysis_rule");
  public get analysisRule() {
    return this._analysisRule;
  }
  public putAnalysisRule(value: ConfigurationInternalAccessAnalysisRuleProperty) {
    this._analysisRule.internalValue = value;
  }
  public resetAnalysisRule() {
    this._analysisRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisRuleInput() {
    return this._analysisRule.internalValue;
  }
}
export interface ExclusionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#account_ids AwsAccessanalyzerAnalyzer#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#resource_tags AwsAccessanalyzerAnalyzer#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string }[] | cdktn.IResolvable;
}
export class ExclusionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExclusionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._resourceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExclusionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIds = undefined;
      this._resourceTags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIds = value.accountIds;
      this._resourceTags = value.resourceTags;
    }
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }[] | cdktn.IResolvable; 
  public get resourceTags() {
    return this.interpolationForAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }[] | cdktn.IResolvable) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }
}

export class ExclusionPropertyList extends cdktn.ComplexList {
  public internalValue? : ExclusionProperty[] | cdktn.IResolvable

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
  public get(index: number): ExclusionPropertyOutputReference {
    return new ExclusionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationUnusedAccessAnalysisRuleProperty {
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#exclusion AwsAccessanalyzerAnalyzer#exclusion}
  */
  readonly exclusion?: ExclusionProperty[] | cdktn.IResolvable;
}
export class ConfigurationUnusedAccessAnalysisRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationUnusedAccessAnalysisRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationUnusedAccessAnalysisRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusion.internalValue = value.exclusion;
    }
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new ExclusionPropertyList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: ExclusionProperty[] | cdktn.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }
}
export interface UnusedAccessProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#unused_access_age AwsAccessanalyzerAnalyzer#unused_access_age}
  */
  readonly unusedAccessAge?: number;
  /**
  * analysis_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#analysis_rule AwsAccessanalyzerAnalyzer#analysis_rule}
  */
  readonly analysisRule?: ConfigurationUnusedAccessAnalysisRuleProperty;
}
export class UnusedAccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnusedAccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unusedAccessAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.unusedAccessAge = this._unusedAccessAge;
    }
    if (this._analysisRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisRule = this._analysisRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnusedAccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unusedAccessAge = undefined;
      this._analysisRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unusedAccessAge = value.unusedAccessAge;
      this._analysisRule.internalValue = value.analysisRule;
    }
  }

  // unused_access_age - computed: false, optional: true, required: false
  private _unusedAccessAge?: number; 
  public get unusedAccessAge() {
    return this.getNumberAttribute('unused_access_age');
  }
  public set unusedAccessAge(value: number) {
    this._unusedAccessAge = value;
  }
  public resetUnusedAccessAge() {
    this._unusedAccessAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedAccessAgeInput() {
    return this._unusedAccessAge;
  }

  // analysis_rule - computed: false, optional: true, required: false
  private _analysisRule = new ConfigurationUnusedAccessAnalysisRulePropertyOutputReference(this, "analysis_rule");
  public get analysisRule() {
    return this._analysisRule;
  }
  public putAnalysisRule(value: ConfigurationUnusedAccessAnalysisRuleProperty) {
    this._analysisRule.internalValue = value;
  }
  public resetAnalysisRule() {
    this._analysisRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisRuleInput() {
    return this._analysisRule.internalValue;
  }
}
export interface ConfigurationProperty {
  /**
  * internal_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#internal_access AwsAccessanalyzerAnalyzer#internal_access}
  */
  readonly internalAccess?: InternalAccessProperty;
  /**
  * unused_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/accessanalyzer_analyzer#unused_access AwsAccessanalyzerAnalyzer#unused_access}
  */
  readonly unusedAccess?: UnusedAccessProperty;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAccess = this._internalAccess?.internalValue;
    }
    if (this._unusedAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unusedAccess = this._unusedAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalAccess.internalValue = undefined;
      this._unusedAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalAccess.internalValue = value.internalAccess;
      this._unusedAccess.internalValue = value.unusedAccess;
    }
  }

  // internal_access - computed: false, optional: true, required: false
  private _internalAccess = new InternalAccessPropertyOutputReference(this, "internal_access");
  public get internalAccess() {
    return this._internalAccess;
  }
  public putInternalAccess(value: InternalAccessProperty) {
    this._internalAccess.internalValue = value;
  }
  public resetInternalAccess() {
    this._internalAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAccessInput() {
    return this._internalAccess.internalValue;
  }

  // unused_access - computed: false, optional: true, required: false
  private _unusedAccess = new UnusedAccessPropertyOutputReference(this, "unused_access");
  public get unusedAccess() {
    return this._unusedAccess;
  }
  public putUnusedAccess(value: UnusedAccessProperty) {
    this._unusedAccess.internalValue = value;
  }
  public resetUnusedAccess() {
    this._unusedAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedAccessInput() {
    return this._unusedAccess.internalValue;
  }
}
}
