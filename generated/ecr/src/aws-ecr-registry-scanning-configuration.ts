// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsRegistryScanningConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration#id AwsRegistryScanningConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration#region AwsRegistryScanningConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration#scan_type AwsRegistryScanningConfiguration#scan_type}
  */
  readonly scanType: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration#rule AwsRegistryScanningConfiguration#rule}
  */
  readonly rule?: AwsRegistryScanningConfiguration.RuleProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration aws_ecr_registry_scanning_configuration}
*/
export class AwsRegistryScanningConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecr_registry_scanning_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsRegistryScanningConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsRegistryScanningConfiguration to import
  * @param importFromId The id of the existing AwsRegistryScanningConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsRegistryScanningConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecr_registry_scanning_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration aws_ecr_registry_scanning_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsRegistryScanningConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsRegistryScanningConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_registry_scanning_configuration',
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
    this._region = config.region;
    this._scanType = config.scanType;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // scan_type - computed: false, optional: false, required: true
  private _scanType?: string; 
  public get scanType() {
    return this.getStringAttribute('scan_type');
  }
  public set scanType(value: string) {
    this._scanType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanTypeInput() {
    return this._scanType;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new AwsRegistryScanningConfiguration.RulePropertyList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: AwsRegistryScanningConfiguration.RuleProperty[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      scan_type: cdktn.stringToTerraform(this._scanType),
      rule: cdktn.listMapper(awsRegistryScanningConfigurationRulePropertyToTerraform, true)(this._rule.internalValue),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_type: {
        value: cdktn.stringToHclTerraform(this._scanType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktn.listMapperHcl(awsRegistryScanningConfigurationRulePropertyToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsRegistryScanningConfiguration.RulePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsRegistryScanningConfigurationRepositoryFilterPropertyToTerraform(struct?: AwsRegistryScanningConfiguration.RepositoryFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.stringToTerraform(struct!.filter),
    filter_type: cdktn.stringToTerraform(struct!.filterType),
  }
}


export function awsRegistryScanningConfigurationRepositoryFilterPropertyToHclTerraform(struct?: AwsRegistryScanningConfiguration.RepositoryFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_type: {
      value: cdktn.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRegistryScanningConfigurationRulePropertyToTerraform(struct?: AwsRegistryScanningConfiguration.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scan_frequency: cdktn.stringToTerraform(struct!.scanFrequency),
    repository_filter: cdktn.listMapper(awsRegistryScanningConfigurationRepositoryFilterPropertyToTerraform, true)(struct!.repositoryFilter),
  }
}


export function awsRegistryScanningConfigurationRulePropertyToHclTerraform(struct?: AwsRegistryScanningConfiguration.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scan_frequency: {
      value: cdktn.stringToHclTerraform(struct!.scanFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_filter: {
      value: cdktn.listMapperHcl(awsRegistryScanningConfigurationRepositoryFilterPropertyToHclTerraform, true)(struct!.repositoryFilter),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryFilterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsRegistryScanningConfiguration {
export interface RepositoryFilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration#filter AwsRegistryScanningConfiguration#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration#filter_type AwsRegistryScanningConfiguration#filter_type}
  */
  readonly filterType: string;
}
export class RepositoryFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RepositoryFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._filterType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._filterType = value.filterType;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }
}

export class RepositoryFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : RepositoryFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): RepositoryFilterPropertyOutputReference {
    return new RepositoryFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration#scan_frequency AwsRegistryScanningConfiguration#scan_frequency}
  */
  readonly scanFrequency: string;
  /**
  * repository_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecr_registry_scanning_configuration#repository_filter AwsRegistryScanningConfiguration#repository_filter}
  */
  readonly repositoryFilter: RepositoryFilterProperty[] | cdktn.IResolvable;
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
    if (this._scanFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanFrequency = this._scanFrequency;
    }
    if (this._repositoryFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryFilter = this._repositoryFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scanFrequency = undefined;
      this._repositoryFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scanFrequency = value.scanFrequency;
      this._repositoryFilter.internalValue = value.repositoryFilter;
    }
  }

  // scan_frequency - computed: false, optional: false, required: true
  private _scanFrequency?: string; 
  public get scanFrequency() {
    return this.getStringAttribute('scan_frequency');
  }
  public set scanFrequency(value: string) {
    this._scanFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanFrequencyInput() {
    return this._scanFrequency;
  }

  // repository_filter - computed: false, optional: false, required: true
  private _repositoryFilter = new RepositoryFilterPropertyList(this, "repository_filter", true);
  public get repositoryFilter() {
    return this._repositoryFilter;
  }
  public putRepositoryFilter(value: RepositoryFilterProperty[] | cdktn.IResolvable) {
    this._repositoryFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryFilterInput() {
    return this._repositoryFilter.internalValue;
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
}
