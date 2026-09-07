// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsPhoneNumberConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled AwsPhoneNumber#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#force_disassociate AwsPhoneNumber#force_disassociate}
  */
  readonly forceDisassociate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code AwsPhoneNumber#iso_country_code}
  */
  readonly isoCountryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type AwsPhoneNumber#message_type}
  */
  readonly messageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities AwsPhoneNumber#number_capabilities}
  */
  readonly numberCapabilities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type AwsPhoneNumber#number_type}
  */
  readonly numberType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name AwsPhoneNumber#opt_out_list_name}
  */
  readonly optOutListName?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#region AwsPhoneNumber#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id AwsPhoneNumber#registration_id}
  */
  readonly registrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled AwsPhoneNumber#self_managed_opt_outs_enabled}
  */
  readonly selfManagedOptOutsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#tags AwsPhoneNumber#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn AwsPhoneNumber#two_way_channel_arn}
  */
  readonly twoWayChannelArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled AwsPhoneNumber#two_way_channel_enabled}
  */
  readonly twoWayChannelEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_role AwsPhoneNumber#two_way_channel_role}
  */
  readonly twoWayChannelRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#wait_for_active AwsPhoneNumber#wait_for_active}
  */
  readonly waitForActive?: boolean | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#timeouts AwsPhoneNumber#timeouts}
  */
  readonly timeouts?: AwsPhoneNumber.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number aws_pinpointsmsvoicev2_phone_number}
*/
export class AwsPhoneNumber extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpointsmsvoicev2_phone_number";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsPhoneNumber resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsPhoneNumber to import
  * @param importFromId The id of the existing AwsPhoneNumber that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsPhoneNumber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpointsmsvoicev2_phone_number", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number aws_pinpointsmsvoicev2_phone_number} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsPhoneNumberConfig
  */
  public constructor(scope: Construct, id: string, config: AwsPhoneNumberConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpointsmsvoicev2_phone_number',
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
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._forceDisassociate = config.forceDisassociate;
    this._isoCountryCode = config.isoCountryCode;
    this._messageType = config.messageType;
    this._numberCapabilities = config.numberCapabilities;
    this._numberType = config.numberType;
    this._optOutListName = config.optOutListName;
    this._region = config.region;
    this._registrationId = config.registrationId;
    this._selfManagedOptOutsEnabled = config.selfManagedOptOutsEnabled;
    this._tags = config.tags;
    this._twoWayChannelArn = config.twoWayChannelArn;
    this._twoWayChannelEnabled = config.twoWayChannelEnabled;
    this._twoWayChannelRole = config.twoWayChannelRole;
    this._waitForActive = config.waitForActive;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protection_enabled - computed: true, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktn.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktn.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // force_disassociate - computed: false, optional: true, required: false
  private _forceDisassociate?: boolean | cdktn.IResolvable; 
  public get forceDisassociate() {
    return this.getBooleanAttribute('force_disassociate');
  }
  public set forceDisassociate(value: boolean | cdktn.IResolvable) {
    this._forceDisassociate = value;
  }
  public resetForceDisassociate() {
    this._forceDisassociate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDisassociateInput() {
    return this._forceDisassociate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iso_country_code - computed: false, optional: false, required: true
  private _isoCountryCode?: string; 
  public get isoCountryCode() {
    return this.getStringAttribute('iso_country_code');
  }
  public set isoCountryCode(value: string) {
    this._isoCountryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isoCountryCodeInput() {
    return this._isoCountryCode;
  }

  // message_type - computed: false, optional: false, required: true
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // monthly_leasing_price - computed: true, optional: false, required: false
  public get monthlyLeasingPrice() {
    return this.getStringAttribute('monthly_leasing_price');
  }

  // number_capabilities - computed: false, optional: false, required: true
  private _numberCapabilities?: string[]; 
  public get numberCapabilities() {
    return cdktn.Fn.tolist(this.getListAttribute('number_capabilities'));
  }
  public set numberCapabilities(value: string[]) {
    this._numberCapabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberCapabilitiesInput() {
    return this._numberCapabilities;
  }

  // number_type - computed: false, optional: false, required: true
  private _numberType?: string; 
  public get numberType() {
    return this.getStringAttribute('number_type');
  }
  public set numberType(value: string) {
    this._numberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberTypeInput() {
    return this._numberType;
  }

  // opt_out_list_name - computed: true, optional: true, required: false
  private _optOutListName?: string; 
  public get optOutListName() {
    return this.getStringAttribute('opt_out_list_name');
  }
  public set optOutListName(value: string) {
    this._optOutListName = value;
  }
  public resetOptOutListName() {
    this._optOutListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optOutListNameInput() {
    return this._optOutListName;
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
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

  // registration_id - computed: false, optional: true, required: false
  private _registrationId?: string; 
  public get registrationId() {
    return this.getStringAttribute('registration_id');
  }
  public set registrationId(value: string) {
    this._registrationId = value;
  }
  public resetRegistrationId() {
    this._registrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationIdInput() {
    return this._registrationId;
  }

  // self_managed_opt_outs_enabled - computed: true, optional: true, required: false
  private _selfManagedOptOutsEnabled?: boolean | cdktn.IResolvable; 
  public get selfManagedOptOutsEnabled() {
    return this.getBooleanAttribute('self_managed_opt_outs_enabled');
  }
  public set selfManagedOptOutsEnabled(value: boolean | cdktn.IResolvable) {
    this._selfManagedOptOutsEnabled = value;
  }
  public resetSelfManagedOptOutsEnabled() {
    this._selfManagedOptOutsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedOptOutsEnabledInput() {
    return this._selfManagedOptOutsEnabled;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // two_way_channel_arn - computed: true, optional: true, required: false
  private _twoWayChannelArn?: string; 
  public get twoWayChannelArn() {
    return this.getStringAttribute('two_way_channel_arn');
  }
  public set twoWayChannelArn(value: string) {
    this._twoWayChannelArn = value;
  }
  public resetTwoWayChannelArn() {
    this._twoWayChannelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoWayChannelArnInput() {
    return this._twoWayChannelArn;
  }

  // two_way_channel_enabled - computed: true, optional: true, required: false
  private _twoWayChannelEnabled?: boolean | cdktn.IResolvable; 
  public get twoWayChannelEnabled() {
    return this.getBooleanAttribute('two_way_channel_enabled');
  }
  public set twoWayChannelEnabled(value: boolean | cdktn.IResolvable) {
    this._twoWayChannelEnabled = value;
  }
  public resetTwoWayChannelEnabled() {
    this._twoWayChannelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoWayChannelEnabledInput() {
    return this._twoWayChannelEnabled;
  }

  // two_way_channel_role - computed: true, optional: true, required: false
  private _twoWayChannelRole?: string; 
  public get twoWayChannelRole() {
    return this.getStringAttribute('two_way_channel_role');
  }
  public set twoWayChannelRole(value: string) {
    this._twoWayChannelRole = value;
  }
  public resetTwoWayChannelRole() {
    this._twoWayChannelRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoWayChannelRoleInput() {
    return this._twoWayChannelRole;
  }

  // wait_for_active - computed: true, optional: true, required: false
  private _waitForActive?: boolean | cdktn.IResolvable; 
  public get waitForActive() {
    return this.getBooleanAttribute('wait_for_active');
  }
  public set waitForActive(value: boolean | cdktn.IResolvable) {
    this._waitForActive = value;
  }
  public resetWaitForActive() {
    this._waitForActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForActiveInput() {
    return this._waitForActive;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsPhoneNumber.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsPhoneNumber.TimeoutsProperty) {
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
      deletion_protection_enabled: cdktn.booleanToTerraform(this._deletionProtectionEnabled),
      force_disassociate: cdktn.booleanToTerraform(this._forceDisassociate),
      iso_country_code: cdktn.stringToTerraform(this._isoCountryCode),
      message_type: cdktn.stringToTerraform(this._messageType),
      number_capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._numberCapabilities),
      number_type: cdktn.stringToTerraform(this._numberType),
      opt_out_list_name: cdktn.stringToTerraform(this._optOutListName),
      region: cdktn.stringToTerraform(this._region),
      registration_id: cdktn.stringToTerraform(this._registrationId),
      self_managed_opt_outs_enabled: cdktn.booleanToTerraform(this._selfManagedOptOutsEnabled),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      two_way_channel_arn: cdktn.stringToTerraform(this._twoWayChannelArn),
      two_way_channel_enabled: cdktn.booleanToTerraform(this._twoWayChannelEnabled),
      two_way_channel_role: cdktn.stringToTerraform(this._twoWayChannelRole),
      wait_for_active: cdktn.booleanToTerraform(this._waitForActive),
      timeouts: awsPhoneNumberTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection_enabled: {
        value: cdktn.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_disassociate: {
        value: cdktn.booleanToHclTerraform(this._forceDisassociate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iso_country_code: {
        value: cdktn.stringToHclTerraform(this._isoCountryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_type: {
        value: cdktn.stringToHclTerraform(this._messageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_capabilities: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._numberCapabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      number_type: {
        value: cdktn.stringToHclTerraform(this._numberType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_out_list_name: {
        value: cdktn.stringToHclTerraform(this._optOutListName),
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
      registration_id: {
        value: cdktn.stringToHclTerraform(this._registrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_managed_opt_outs_enabled: {
        value: cdktn.booleanToHclTerraform(this._selfManagedOptOutsEnabled),
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
      two_way_channel_arn: {
        value: cdktn.stringToHclTerraform(this._twoWayChannelArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_way_channel_enabled: {
        value: cdktn.booleanToHclTerraform(this._twoWayChannelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      two_way_channel_role: {
        value: cdktn.stringToHclTerraform(this._twoWayChannelRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_active: {
        value: cdktn.booleanToHclTerraform(this._waitForActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: awsPhoneNumberTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsPhoneNumber.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsPhoneNumberTimeoutsPropertyToTerraform(struct?: AwsPhoneNumber.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsPhoneNumberTimeoutsPropertyToHclTerraform(struct?: AwsPhoneNumber.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsPhoneNumber {
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#create AwsPhoneNumber#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#delete AwsPhoneNumber#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/pinpointsmsvoicev2_phone_number#update AwsPhoneNumber#update}
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
