// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfGlossaryTermConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#domain_identifier TfGlossaryTerm#domain_identifier}
  */
  readonly domainIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#glossary_identifier TfGlossaryTerm#glossary_identifier}
  */
  readonly glossaryIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#long_description TfGlossaryTerm#long_description}
  */
  readonly longDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#name TfGlossaryTerm#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#region TfGlossaryTerm#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#short_description TfGlossaryTerm#short_description}
  */
  readonly shortDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#status TfGlossaryTerm#status}
  */
  readonly status?: string;
  /**
  * term_relations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#term_relations TfGlossaryTerm#term_relations}
  */
  readonly termRelations?: TfGlossaryTerm.TermRelationsProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#timeouts TfGlossaryTerm#timeouts}
  */
  readonly timeouts?: TfGlossaryTerm.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term aws_datazone_glossary_term}
*/
export class TfGlossaryTerm extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datazone_glossary_term";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfGlossaryTerm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfGlossaryTerm to import
  * @param importFromId The id of the existing TfGlossaryTerm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfGlossaryTerm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_datazone_glossary_term", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term aws_datazone_glossary_term} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfGlossaryTermConfig
  */
  public constructor(scope: Construct, id: string, config: TfGlossaryTermConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datazone_glossary_term',
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
    this._domainIdentifier = config.domainIdentifier;
    this._glossaryIdentifier = config.glossaryIdentifier;
    this._longDescription = config.longDescription;
    this._name = config.name;
    this._region = config.region;
    this._shortDescription = config.shortDescription;
    this._status = config.status;
    this._termRelations.internalValue = config.termRelations;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // domain_identifier - computed: false, optional: true, required: false
  private _domainIdentifier?: string; 
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }
  public set domainIdentifier(value: string) {
    this._domainIdentifier = value;
  }
  public resetDomainIdentifier() {
    this._domainIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdentifierInput() {
    return this._domainIdentifier;
  }

  // glossary_identifier - computed: false, optional: false, required: true
  private _glossaryIdentifier?: string; 
  public get glossaryIdentifier() {
    return this.getStringAttribute('glossary_identifier');
  }
  public set glossaryIdentifier(value: string) {
    this._glossaryIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get glossaryIdentifierInput() {
    return this._glossaryIdentifier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // long_description - computed: false, optional: true, required: false
  private _longDescription?: string; 
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }
  public set longDescription(value: string) {
    this._longDescription = value;
  }
  public resetLongDescription() {
    this._longDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDescriptionInput() {
    return this._longDescription;
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

  // short_description - computed: false, optional: true, required: false
  private _shortDescription?: string; 
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }
  public set shortDescription(value: string) {
    this._shortDescription = value;
  }
  public resetShortDescription() {
    this._shortDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortDescriptionInput() {
    return this._shortDescription;
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

  // term_relations - computed: false, optional: true, required: false
  private _termRelations = new TfGlossaryTerm.TermRelationsPropertyList(this, "term_relations", false);
  public get termRelations() {
    return this._termRelations;
  }
  public putTermRelations(value: TfGlossaryTerm.TermRelationsProperty[] | cdktn.IResolvable) {
    this._termRelations.internalValue = value;
  }
  public resetTermRelations() {
    this._termRelations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termRelationsInput() {
    return this._termRelations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfGlossaryTerm.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfGlossaryTerm.TimeoutsProperty) {
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
      domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
      glossary_identifier: cdktn.stringToTerraform(this._glossaryIdentifier),
      long_description: cdktn.stringToTerraform(this._longDescription),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      short_description: cdktn.stringToTerraform(this._shortDescription),
      status: cdktn.stringToTerraform(this._status),
      term_relations: cdktn.listMapper(tfGlossaryTermTermRelationsPropertyToTerraform, true)(this._termRelations.internalValue),
      timeouts: tfGlossaryTermTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_identifier: {
        value: cdktn.stringToHclTerraform(this._domainIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glossary_identifier: {
        value: cdktn.stringToHclTerraform(this._glossaryIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_description: {
        value: cdktn.stringToHclTerraform(this._longDescription),
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
      short_description: {
        value: cdktn.stringToHclTerraform(this._shortDescription),
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
      term_relations: {
        value: cdktn.listMapperHcl(tfGlossaryTermTermRelationsPropertyToHclTerraform, true)(this._termRelations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfGlossaryTerm.TermRelationsPropertyList",
      },
      timeouts: {
        value: tfGlossaryTermTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfGlossaryTerm.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfGlossaryTermTermRelationsPropertyToTerraform(struct?: TfGlossaryTerm.TermRelationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    classifies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.classifies),
    is_a: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.isA),
  }
}


export function tfGlossaryTermTermRelationsPropertyToHclTerraform(struct?: TfGlossaryTerm.TermRelationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    classifies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.classifies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    is_a: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.isA),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGlossaryTermTimeoutsPropertyToTerraform(struct?: TfGlossaryTerm.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function tfGlossaryTermTimeoutsPropertyToHclTerraform(struct?: TfGlossaryTerm.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfGlossaryTerm {
export interface TermRelationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#classifies TfGlossaryTerm#classifies}
  */
  readonly classifies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#is_a TfGlossaryTerm#is_a}
  */
  readonly isA?: string[];
}
export class TermRelationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TermRelationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classifies !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifies = this._classifies;
    }
    if (this._isA !== undefined) {
      hasAnyValues = true;
      internalValueResult.isA = this._isA;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TermRelationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classifies = undefined;
      this._isA = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classifies = value.classifies;
      this._isA = value.isA;
    }
  }

  // classifies - computed: false, optional: true, required: false
  private _classifies?: string[]; 
  public get classifies() {
    return cdktn.Fn.tolist(this.getListAttribute('classifies'));
  }
  public set classifies(value: string[]) {
    this._classifies = value;
  }
  public resetClassifies() {
    this._classifies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifiesInput() {
    return this._classifies;
  }

  // is_a - computed: false, optional: true, required: false
  private _isA?: string[]; 
  public get isA() {
    return cdktn.Fn.tolist(this.getListAttribute('is_a'));
  }
  public set isA(value: string[]) {
    this._isA = value;
  }
  public resetIsA() {
    this._isA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAInput() {
    return this._isA;
  }
}

export class TermRelationsPropertyList extends cdktn.ComplexList {
  public internalValue? : TermRelationsProperty[] | cdktn.IResolvable

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
  public get(index: number): TermRelationsPropertyOutputReference {
    return new TermRelationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datazone_glossary_term#create TfGlossaryTerm#create}
  */
  readonly create?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}
}
