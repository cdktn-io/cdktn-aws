// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_aws_log_source
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAwsLogSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_aws_log_source#region AwsAwsLogSource#region}
  */
  readonly region?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_aws_log_source#source AwsAwsLogSource#source}
  */
  readonly source?: AwsAwsLogSource.SourceProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_aws_log_source aws_securitylake_aws_log_source}
*/
export class AwsAwsLogSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securitylake_aws_log_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAwsLogSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAwsLogSource to import
  * @param importFromId The id of the existing AwsAwsLogSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_aws_log_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAwsLogSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securitylake_aws_log_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_aws_log_source aws_securitylake_aws_log_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAwsLogSourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsAwsLogSourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_securitylake_aws_log_source',
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
    this._region = config.region;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // source - computed: false, optional: true, required: false
  private _source = new AwsAwsLogSource.SourcePropertyList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: AwsAwsLogSource.SourceProperty[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      source: cdktn.listMapper(awsAwsLogSourceSourcePropertyToTerraform, true)(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktn.listMapperHcl(awsAwsLogSourceSourcePropertyToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAwsLogSource.SourcePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsAwsLogSourceSourcePropertyToTerraform(struct?: AwsAwsLogSource.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accounts),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    source_name: cdktn.stringToTerraform(struct!.sourceName),
    source_version: cdktn.stringToTerraform(struct!.sourceVersion),
  }
}


export function awsAwsLogSourceSourcePropertyToHclTerraform(struct?: AwsAwsLogSource.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_version: {
      value: cdktn.stringToHclTerraform(struct!.sourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAwsLogSource {
export interface SourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_aws_log_source#accounts AwsAwsLogSource#accounts}
  */
  readonly accounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_aws_log_source#regions AwsAwsLogSource#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_aws_log_source#source_name AwsAwsLogSource#source_name}
  */
  readonly sourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securitylake_aws_log_source#source_version AwsAwsLogSource#source_version}
  */
  readonly sourceVersion?: string;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._sourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVersion = this._sourceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accounts = undefined;
      this._regions = undefined;
      this._sourceName = undefined;
      this._sourceVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accounts = value.accounts;
      this._regions = value.regions;
      this._sourceName = value.sourceName;
      this._sourceVersion = value.sourceVersion;
    }
  }

  // accounts - computed: true, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return cdktn.Fn.tolist(this.getListAttribute('accounts'));
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

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_version - computed: true, optional: true, required: false
  private _sourceVersion?: string; 
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string) {
    this._sourceVersion = value;
  }
  public resetSourceVersion() {
    this._sourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionInput() {
    return this._sourceVersion;
  }
}

export class SourcePropertyList extends cdktn.ComplexList {
  public internalValue? : SourceProperty[] | cdktn.IResolvable

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
  public get(index: number): SourcePropertyOutputReference {
    return new SourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
