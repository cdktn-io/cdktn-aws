// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsDelegationSignerRecordConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record#domain_name AwsDelegationSignerRecord#domain_name}
  */
  readonly domainName: string;
  /**
  * signing_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record#signing_attributes AwsDelegationSignerRecord#signing_attributes}
  */
  readonly signingAttributes?: AwsDelegationSignerRecord.SigningAttributesProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record#timeouts AwsDelegationSignerRecord#timeouts}
  */
  readonly timeouts?: AwsDelegationSignerRecord.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record aws_route53domains_delegation_signer_record}
*/
export class AwsDelegationSignerRecord extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53domains_delegation_signer_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsDelegationSignerRecord resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsDelegationSignerRecord to import
  * @param importFromId The id of the existing AwsDelegationSignerRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsDelegationSignerRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53domains_delegation_signer_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record aws_route53domains_delegation_signer_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsDelegationSignerRecordConfig
  */
  public constructor(scope: Construct, id: string, config: AwsDelegationSignerRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53domains_delegation_signer_record',
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
    this._domainName = config.domainName;
    this._signingAttributes.internalValue = config.signingAttributes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dnssec_key_id - computed: true, optional: false, required: false
  public get dnssecKeyId() {
    return this.getStringAttribute('dnssec_key_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // signing_attributes - computed: false, optional: true, required: false
  private _signingAttributes = new AwsDelegationSignerRecord.SigningAttributesPropertyList(this, "signing_attributes", false);
  public get signingAttributes() {
    return this._signingAttributes;
  }
  public putSigningAttributes(value: AwsDelegationSignerRecord.SigningAttributesProperty[] | cdktn.IResolvable) {
    this._signingAttributes.internalValue = value;
  }
  public resetSigningAttributes() {
    this._signingAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAttributesInput() {
    return this._signingAttributes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsDelegationSignerRecord.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsDelegationSignerRecord.TimeoutsProperty) {
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
      domain_name: cdktn.stringToTerraform(this._domainName),
      signing_attributes: cdktn.listMapper(awsDelegationSignerRecordSigningAttributesPropertyToTerraform, true)(this._signingAttributes.internalValue),
      timeouts: awsDelegationSignerRecordTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_attributes: {
        value: cdktn.listMapperHcl(awsDelegationSignerRecordSigningAttributesPropertyToHclTerraform, true)(this._signingAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDelegationSignerRecord.SigningAttributesPropertyList",
      },
      timeouts: {
        value: awsDelegationSignerRecordTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsDelegationSignerRecord.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsDelegationSignerRecordSigningAttributesPropertyToTerraform(struct?: AwsDelegationSignerRecord.SigningAttributesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm: cdktn.numberToTerraform(struct!.algorithm),
    flags: cdktn.numberToTerraform(struct!.flags),
    public_key: cdktn.stringToTerraform(struct!.publicKey),
  }
}


export function awsDelegationSignerRecordSigningAttributesPropertyToHclTerraform(struct?: AwsDelegationSignerRecord.SigningAttributesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm: {
      value: cdktn.numberToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flags: {
      value: cdktn.numberToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key: {
      value: cdktn.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDelegationSignerRecordTimeoutsPropertyToTerraform(struct?: AwsDelegationSignerRecord.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function awsDelegationSignerRecordTimeoutsPropertyToHclTerraform(struct?: AwsDelegationSignerRecord.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsDelegationSignerRecord {
export interface SigningAttributesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record#algorithm AwsDelegationSignerRecord#algorithm}
  */
  readonly algorithm: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record#flags AwsDelegationSignerRecord#flags}
  */
  readonly flags: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record#public_key AwsDelegationSignerRecord#public_key}
  */
  readonly publicKey: string;
}
export class SigningAttributesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SigningAttributesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SigningAttributesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._flags = undefined;
      this._publicKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._flags = value.flags;
      this._publicKey = value.publicKey;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: number; 
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }
  public set algorithm(value: number) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // flags - computed: false, optional: false, required: true
  private _flags?: number; 
  public get flags() {
    return this.getNumberAttribute('flags');
  }
  public set flags(value: number) {
    this._flags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}

export class SigningAttributesPropertyList extends cdktn.ComplexList {
  public internalValue? : SigningAttributesProperty[] | cdktn.IResolvable

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
  public get(index: number): SigningAttributesPropertyOutputReference {
    return new SigningAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record#create AwsDelegationSignerRecord#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_delegation_signer_record#delete AwsDelegationSignerRecord#delete}
  */
  readonly delete?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
}
