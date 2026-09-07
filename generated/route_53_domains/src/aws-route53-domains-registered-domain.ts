// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsRegisteredDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#admin_privacy AwsRegisteredDomain#admin_privacy}
  */
  readonly adminPrivacy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#auto_renew AwsRegisteredDomain#auto_renew}
  */
  readonly autoRenew?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#billing_privacy AwsRegisteredDomain#billing_privacy}
  */
  readonly billingPrivacy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#domain_name AwsRegisteredDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#id AwsRegisteredDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#registrant_privacy AwsRegisteredDomain#registrant_privacy}
  */
  readonly registrantPrivacy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#tags AwsRegisteredDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#tags_all AwsRegisteredDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#tech_privacy AwsRegisteredDomain#tech_privacy}
  */
  readonly techPrivacy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#transfer_lock AwsRegisteredDomain#transfer_lock}
  */
  readonly transferLock?: boolean | cdktn.IResolvable;
  /**
  * admin_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#admin_contact AwsRegisteredDomain#admin_contact}
  */
  readonly adminContact?: AwsRegisteredDomain.AdminContactProperty;
  /**
  * billing_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#billing_contact AwsRegisteredDomain#billing_contact}
  */
  readonly billingContact?: AwsRegisteredDomain.BillingContactProperty;
  /**
  * name_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#name_server AwsRegisteredDomain#name_server}
  */
  readonly nameServer?: AwsRegisteredDomain.NameServerProperty[] | cdktn.IResolvable;
  /**
  * registrant_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#registrant_contact AwsRegisteredDomain#registrant_contact}
  */
  readonly registrantContact?: AwsRegisteredDomain.RegistrantContactProperty;
  /**
  * tech_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#tech_contact AwsRegisteredDomain#tech_contact}
  */
  readonly techContact?: AwsRegisteredDomain.TechContactProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#timeouts AwsRegisteredDomain#timeouts}
  */
  readonly timeouts?: AwsRegisteredDomain.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain aws_route53domains_registered_domain}
*/
export class AwsRegisteredDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53domains_registered_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsRegisteredDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsRegisteredDomain to import
  * @param importFromId The id of the existing AwsRegisteredDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsRegisteredDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53domains_registered_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain aws_route53domains_registered_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsRegisteredDomainConfig
  */
  public constructor(scope: Construct, id: string, config: AwsRegisteredDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53domains_registered_domain',
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
    this._adminPrivacy = config.adminPrivacy;
    this._autoRenew = config.autoRenew;
    this._billingPrivacy = config.billingPrivacy;
    this._domainName = config.domainName;
    this._id = config.id;
    this._registrantPrivacy = config.registrantPrivacy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._techPrivacy = config.techPrivacy;
    this._transferLock = config.transferLock;
    this._adminContact.internalValue = config.adminContact;
    this._billingContact.internalValue = config.billingContact;
    this._nameServer.internalValue = config.nameServer;
    this._registrantContact.internalValue = config.registrantContact;
    this._techContact.internalValue = config.techContact;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abuse_contact_email - computed: true, optional: false, required: false
  public get abuseContactEmail() {
    return this.getStringAttribute('abuse_contact_email');
  }

  // abuse_contact_phone - computed: true, optional: false, required: false
  public get abuseContactPhone() {
    return this.getStringAttribute('abuse_contact_phone');
  }

  // admin_privacy - computed: false, optional: true, required: false
  private _adminPrivacy?: boolean | cdktn.IResolvable; 
  public get adminPrivacy() {
    return this.getBooleanAttribute('admin_privacy');
  }
  public set adminPrivacy(value: boolean | cdktn.IResolvable) {
    this._adminPrivacy = value;
  }
  public resetAdminPrivacy() {
    this._adminPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPrivacyInput() {
    return this._adminPrivacy;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktn.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktn.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // billing_privacy - computed: false, optional: true, required: false
  private _billingPrivacy?: boolean | cdktn.IResolvable; 
  public get billingPrivacy() {
    return this.getBooleanAttribute('billing_privacy');
  }
  public set billingPrivacy(value: boolean | cdktn.IResolvable) {
    this._billingPrivacy = value;
  }
  public resetBillingPrivacy() {
    this._billingPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPrivacyInput() {
    return this._billingPrivacy;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
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

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
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

  // registrant_privacy - computed: false, optional: true, required: false
  private _registrantPrivacy?: boolean | cdktn.IResolvable; 
  public get registrantPrivacy() {
    return this.getBooleanAttribute('registrant_privacy');
  }
  public set registrantPrivacy(value: boolean | cdktn.IResolvable) {
    this._registrantPrivacy = value;
  }
  public resetRegistrantPrivacy() {
    this._registrantPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrantPrivacyInput() {
    return this._registrantPrivacy;
  }

  // registrar_name - computed: true, optional: false, required: false
  public get registrarName() {
    return this.getStringAttribute('registrar_name');
  }

  // registrar_url - computed: true, optional: false, required: false
  public get registrarUrl() {
    return this.getStringAttribute('registrar_url');
  }

  // reseller - computed: true, optional: false, required: false
  public get reseller() {
    return this.getStringAttribute('reseller');
  }

  // status_list - computed: true, optional: false, required: false
  public get statusList() {
    return this.getListAttribute('status_list');
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

  // tech_privacy - computed: false, optional: true, required: false
  private _techPrivacy?: boolean | cdktn.IResolvable; 
  public get techPrivacy() {
    return this.getBooleanAttribute('tech_privacy');
  }
  public set techPrivacy(value: boolean | cdktn.IResolvable) {
    this._techPrivacy = value;
  }
  public resetTechPrivacy() {
    this._techPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techPrivacyInput() {
    return this._techPrivacy;
  }

  // transfer_lock - computed: false, optional: true, required: false
  private _transferLock?: boolean | cdktn.IResolvable; 
  public get transferLock() {
    return this.getBooleanAttribute('transfer_lock');
  }
  public set transferLock(value: boolean | cdktn.IResolvable) {
    this._transferLock = value;
  }
  public resetTransferLock() {
    this._transferLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferLockInput() {
    return this._transferLock;
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // whois_server - computed: true, optional: false, required: false
  public get whoisServer() {
    return this.getStringAttribute('whois_server');
  }

  // admin_contact - computed: false, optional: true, required: false
  private _adminContact = new AwsRegisteredDomain.AdminContactPropertyOutputReference(this, "admin_contact");
  public get adminContact() {
    return this._adminContact;
  }
  public putAdminContact(value: AwsRegisteredDomain.AdminContactProperty) {
    this._adminContact.internalValue = value;
  }
  public resetAdminContact() {
    this._adminContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminContactInput() {
    return this._adminContact.internalValue;
  }

  // billing_contact - computed: false, optional: true, required: false
  private _billingContact = new AwsRegisteredDomain.BillingContactPropertyOutputReference(this, "billing_contact");
  public get billingContact() {
    return this._billingContact;
  }
  public putBillingContact(value: AwsRegisteredDomain.BillingContactProperty) {
    this._billingContact.internalValue = value;
  }
  public resetBillingContact() {
    this._billingContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingContactInput() {
    return this._billingContact.internalValue;
  }

  // name_server - computed: false, optional: true, required: false
  private _nameServer = new AwsRegisteredDomain.NameServerPropertyList(this, "name_server", false);
  public get nameServer() {
    return this._nameServer;
  }
  public putNameServer(value: AwsRegisteredDomain.NameServerProperty[] | cdktn.IResolvable) {
    this._nameServer.internalValue = value;
  }
  public resetNameServer() {
    this._nameServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer.internalValue;
  }

  // registrant_contact - computed: false, optional: true, required: false
  private _registrantContact = new AwsRegisteredDomain.RegistrantContactPropertyOutputReference(this, "registrant_contact");
  public get registrantContact() {
    return this._registrantContact;
  }
  public putRegistrantContact(value: AwsRegisteredDomain.RegistrantContactProperty) {
    this._registrantContact.internalValue = value;
  }
  public resetRegistrantContact() {
    this._registrantContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrantContactInput() {
    return this._registrantContact.internalValue;
  }

  // tech_contact - computed: false, optional: true, required: false
  private _techContact = new AwsRegisteredDomain.TechContactPropertyOutputReference(this, "tech_contact");
  public get techContact() {
    return this._techContact;
  }
  public putTechContact(value: AwsRegisteredDomain.TechContactProperty) {
    this._techContact.internalValue = value;
  }
  public resetTechContact() {
    this._techContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techContactInput() {
    return this._techContact.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsRegisteredDomain.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsRegisteredDomain.TimeoutsProperty) {
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
      admin_privacy: cdktn.booleanToTerraform(this._adminPrivacy),
      auto_renew: cdktn.booleanToTerraform(this._autoRenew),
      billing_privacy: cdktn.booleanToTerraform(this._billingPrivacy),
      domain_name: cdktn.stringToTerraform(this._domainName),
      id: cdktn.stringToTerraform(this._id),
      registrant_privacy: cdktn.booleanToTerraform(this._registrantPrivacy),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      tech_privacy: cdktn.booleanToTerraform(this._techPrivacy),
      transfer_lock: cdktn.booleanToTerraform(this._transferLock),
      admin_contact: awsRegisteredDomainAdminContactPropertyToTerraform(this._adminContact.internalValue),
      billing_contact: awsRegisteredDomainBillingContactPropertyToTerraform(this._billingContact.internalValue),
      name_server: cdktn.listMapper(awsRegisteredDomainNameServerPropertyToTerraform, true)(this._nameServer.internalValue),
      registrant_contact: awsRegisteredDomainRegistrantContactPropertyToTerraform(this._registrantContact.internalValue),
      tech_contact: awsRegisteredDomainTechContactPropertyToTerraform(this._techContact.internalValue),
      timeouts: awsRegisteredDomainTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_privacy: {
        value: cdktn.booleanToHclTerraform(this._adminPrivacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew: {
        value: cdktn.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing_privacy: {
        value: cdktn.booleanToHclTerraform(this._billingPrivacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
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
      registrant_privacy: {
        value: cdktn.booleanToHclTerraform(this._registrantPrivacy),
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
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tech_privacy: {
        value: cdktn.booleanToHclTerraform(this._techPrivacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transfer_lock: {
        value: cdktn.booleanToHclTerraform(this._transferLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_contact: {
        value: awsRegisteredDomainAdminContactPropertyToHclTerraform(this._adminContact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRegisteredDomain.AdminContactPropertyList",
      },
      billing_contact: {
        value: awsRegisteredDomainBillingContactPropertyToHclTerraform(this._billingContact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRegisteredDomain.BillingContactPropertyList",
      },
      name_server: {
        value: cdktn.listMapperHcl(awsRegisteredDomainNameServerPropertyToHclTerraform, true)(this._nameServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRegisteredDomain.NameServerPropertyList",
      },
      registrant_contact: {
        value: awsRegisteredDomainRegistrantContactPropertyToHclTerraform(this._registrantContact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRegisteredDomain.RegistrantContactPropertyList",
      },
      tech_contact: {
        value: awsRegisteredDomainTechContactPropertyToHclTerraform(this._techContact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsRegisteredDomain.TechContactPropertyList",
      },
      timeouts: {
        value: awsRegisteredDomainTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsRegisteredDomain.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsRegisteredDomainAdminContactPropertyToTerraform(struct?: AwsRegisteredDomain.AdminContactPropertyOutputReference | AwsRegisteredDomain.AdminContactProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_line_1: cdktn.stringToTerraform(struct!.addressLine1),
    address_line_2: cdktn.stringToTerraform(struct!.addressLine2),
    city: cdktn.stringToTerraform(struct!.city),
    contact_type: cdktn.stringToTerraform(struct!.contactType),
    country_code: cdktn.stringToTerraform(struct!.countryCode),
    email: cdktn.stringToTerraform(struct!.email),
    extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.extraParams),
    fax: cdktn.stringToTerraform(struct!.fax),
    first_name: cdktn.stringToTerraform(struct!.firstName),
    last_name: cdktn.stringToTerraform(struct!.lastName),
    organization_name: cdktn.stringToTerraform(struct!.organizationName),
    phone_number: cdktn.stringToTerraform(struct!.phoneNumber),
    state: cdktn.stringToTerraform(struct!.state),
    zip_code: cdktn.stringToTerraform(struct!.zipCode),
  }
}


export function awsRegisteredDomainAdminContactPropertyToHclTerraform(struct?: AwsRegisteredDomain.AdminContactPropertyOutputReference | AwsRegisteredDomain.AdminContactProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_line_1: {
      value: cdktn.stringToHclTerraform(struct!.addressLine1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_2: {
      value: cdktn.stringToHclTerraform(struct!.addressLine2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktn.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_type: {
      value: cdktn.stringToHclTerraform(struct!.contactType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktn.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.extraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    fax: {
      value: cdktn.stringToHclTerraform(struct!.fax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktn.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktn.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktn.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktn.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_code: {
      value: cdktn.stringToHclTerraform(struct!.zipCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRegisteredDomainBillingContactPropertyToTerraform(struct?: AwsRegisteredDomain.BillingContactPropertyOutputReference | AwsRegisteredDomain.BillingContactProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_line_1: cdktn.stringToTerraform(struct!.addressLine1),
    address_line_2: cdktn.stringToTerraform(struct!.addressLine2),
    city: cdktn.stringToTerraform(struct!.city),
    contact_type: cdktn.stringToTerraform(struct!.contactType),
    country_code: cdktn.stringToTerraform(struct!.countryCode),
    email: cdktn.stringToTerraform(struct!.email),
    extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.extraParams),
    fax: cdktn.stringToTerraform(struct!.fax),
    first_name: cdktn.stringToTerraform(struct!.firstName),
    last_name: cdktn.stringToTerraform(struct!.lastName),
    organization_name: cdktn.stringToTerraform(struct!.organizationName),
    phone_number: cdktn.stringToTerraform(struct!.phoneNumber),
    state: cdktn.stringToTerraform(struct!.state),
    zip_code: cdktn.stringToTerraform(struct!.zipCode),
  }
}


export function awsRegisteredDomainBillingContactPropertyToHclTerraform(struct?: AwsRegisteredDomain.BillingContactPropertyOutputReference | AwsRegisteredDomain.BillingContactProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_line_1: {
      value: cdktn.stringToHclTerraform(struct!.addressLine1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_2: {
      value: cdktn.stringToHclTerraform(struct!.addressLine2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktn.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_type: {
      value: cdktn.stringToHclTerraform(struct!.contactType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktn.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.extraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    fax: {
      value: cdktn.stringToHclTerraform(struct!.fax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktn.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktn.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktn.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktn.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_code: {
      value: cdktn.stringToHclTerraform(struct!.zipCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRegisteredDomainNameServerPropertyToTerraform(struct?: AwsRegisteredDomain.NameServerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    glue_ips: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.glueIps),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsRegisteredDomainNameServerPropertyToHclTerraform(struct?: AwsRegisteredDomain.NameServerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    glue_ips: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.glueIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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


export function awsRegisteredDomainRegistrantContactPropertyToTerraform(struct?: AwsRegisteredDomain.RegistrantContactPropertyOutputReference | AwsRegisteredDomain.RegistrantContactProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_line_1: cdktn.stringToTerraform(struct!.addressLine1),
    address_line_2: cdktn.stringToTerraform(struct!.addressLine2),
    city: cdktn.stringToTerraform(struct!.city),
    contact_type: cdktn.stringToTerraform(struct!.contactType),
    country_code: cdktn.stringToTerraform(struct!.countryCode),
    email: cdktn.stringToTerraform(struct!.email),
    extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.extraParams),
    fax: cdktn.stringToTerraform(struct!.fax),
    first_name: cdktn.stringToTerraform(struct!.firstName),
    last_name: cdktn.stringToTerraform(struct!.lastName),
    organization_name: cdktn.stringToTerraform(struct!.organizationName),
    phone_number: cdktn.stringToTerraform(struct!.phoneNumber),
    state: cdktn.stringToTerraform(struct!.state),
    zip_code: cdktn.stringToTerraform(struct!.zipCode),
  }
}


export function awsRegisteredDomainRegistrantContactPropertyToHclTerraform(struct?: AwsRegisteredDomain.RegistrantContactPropertyOutputReference | AwsRegisteredDomain.RegistrantContactProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_line_1: {
      value: cdktn.stringToHclTerraform(struct!.addressLine1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_2: {
      value: cdktn.stringToHclTerraform(struct!.addressLine2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktn.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_type: {
      value: cdktn.stringToHclTerraform(struct!.contactType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktn.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.extraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    fax: {
      value: cdktn.stringToHclTerraform(struct!.fax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktn.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktn.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktn.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktn.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_code: {
      value: cdktn.stringToHclTerraform(struct!.zipCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRegisteredDomainTechContactPropertyToTerraform(struct?: AwsRegisteredDomain.TechContactPropertyOutputReference | AwsRegisteredDomain.TechContactProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_line_1: cdktn.stringToTerraform(struct!.addressLine1),
    address_line_2: cdktn.stringToTerraform(struct!.addressLine2),
    city: cdktn.stringToTerraform(struct!.city),
    contact_type: cdktn.stringToTerraform(struct!.contactType),
    country_code: cdktn.stringToTerraform(struct!.countryCode),
    email: cdktn.stringToTerraform(struct!.email),
    extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.extraParams),
    fax: cdktn.stringToTerraform(struct!.fax),
    first_name: cdktn.stringToTerraform(struct!.firstName),
    last_name: cdktn.stringToTerraform(struct!.lastName),
    organization_name: cdktn.stringToTerraform(struct!.organizationName),
    phone_number: cdktn.stringToTerraform(struct!.phoneNumber),
    state: cdktn.stringToTerraform(struct!.state),
    zip_code: cdktn.stringToTerraform(struct!.zipCode),
  }
}


export function awsRegisteredDomainTechContactPropertyToHclTerraform(struct?: AwsRegisteredDomain.TechContactPropertyOutputReference | AwsRegisteredDomain.TechContactProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_line_1: {
      value: cdktn.stringToHclTerraform(struct!.addressLine1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_2: {
      value: cdktn.stringToHclTerraform(struct!.addressLine2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktn.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_type: {
      value: cdktn.stringToHclTerraform(struct!.contactType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktn.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.extraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    fax: {
      value: cdktn.stringToHclTerraform(struct!.fax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktn.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktn.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktn.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktn.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_code: {
      value: cdktn.stringToHclTerraform(struct!.zipCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsRegisteredDomainTimeoutsPropertyToTerraform(struct?: AwsRegisteredDomain.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsRegisteredDomainTimeoutsPropertyToHclTerraform(struct?: AwsRegisteredDomain.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsRegisteredDomain {
export interface AdminContactProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#address_line_1 AwsRegisteredDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#address_line_2 AwsRegisteredDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#city AwsRegisteredDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#contact_type AwsRegisteredDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#country_code AwsRegisteredDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#email AwsRegisteredDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#extra_params AwsRegisteredDomain#extra_params}
  */
  readonly extraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#fax AwsRegisteredDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#first_name AwsRegisteredDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#last_name AwsRegisteredDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#organization_name AwsRegisteredDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#phone_number AwsRegisteredDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#state AwsRegisteredDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#zip_code AwsRegisteredDomain#zip_code}
  */
  readonly zipCode?: string;
}
export class AdminContactPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdminContactProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLine1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine1 = this._addressLine1;
    }
    if (this._addressLine2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine2 = this._addressLine2;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._contactType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactType = this._contactType;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._extraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParams = this._extraParams;
    }
    if (this._fax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fax = this._fax;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._zipCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipCode = this._zipCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminContactProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._extraParams = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._extraParams = value.extraParams;
      this._fax = value.fax;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._organizationName = value.organizationName;
      this._phoneNumber = value.phoneNumber;
      this._state = value.state;
      this._zipCode = value.zipCode;
    }
  }

  // address_line_1 - computed: true, optional: true, required: false
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
  }
  public resetAddressLine1() {
    this._addressLine1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine1Input() {
    return this._addressLine1;
  }

  // address_line_2 - computed: true, optional: true, required: false
  private _addressLine2?: string; 
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }
  public set addressLine2(value: string) {
    this._addressLine2 = value;
  }
  public resetAddressLine2() {
    this._addressLine2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine2Input() {
    return this._addressLine2;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // contact_type - computed: true, optional: true, required: false
  private _contactType?: string; 
  public get contactType() {
    return this.getStringAttribute('contact_type');
  }
  public set contactType(value: string) {
    this._contactType = value;
  }
  public resetContactType() {
    this._contactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTypeInput() {
    return this._contactType;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extra_params - computed: true, optional: true, required: false
  private _extraParams?: { [key: string]: string }; 
  public get extraParams() {
    return this.getStringMapAttribute('extra_params');
  }
  public set extraParams(value: { [key: string]: string }) {
    this._extraParams = value;
  }
  public resetExtraParams() {
    this._extraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams;
  }

  // fax - computed: true, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // organization_name - computed: true, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // zip_code - computed: true, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }
}
export interface BillingContactProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#address_line_1 AwsRegisteredDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#address_line_2 AwsRegisteredDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#city AwsRegisteredDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#contact_type AwsRegisteredDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#country_code AwsRegisteredDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#email AwsRegisteredDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#extra_params AwsRegisteredDomain#extra_params}
  */
  readonly extraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#fax AwsRegisteredDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#first_name AwsRegisteredDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#last_name AwsRegisteredDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#organization_name AwsRegisteredDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#phone_number AwsRegisteredDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#state AwsRegisteredDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#zip_code AwsRegisteredDomain#zip_code}
  */
  readonly zipCode?: string;
}
export class BillingContactPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingContactProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLine1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine1 = this._addressLine1;
    }
    if (this._addressLine2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine2 = this._addressLine2;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._contactType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactType = this._contactType;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._extraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParams = this._extraParams;
    }
    if (this._fax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fax = this._fax;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._zipCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipCode = this._zipCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingContactProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._extraParams = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._extraParams = value.extraParams;
      this._fax = value.fax;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._organizationName = value.organizationName;
      this._phoneNumber = value.phoneNumber;
      this._state = value.state;
      this._zipCode = value.zipCode;
    }
  }

  // address_line_1 - computed: true, optional: true, required: false
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
  }
  public resetAddressLine1() {
    this._addressLine1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine1Input() {
    return this._addressLine1;
  }

  // address_line_2 - computed: true, optional: true, required: false
  private _addressLine2?: string; 
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }
  public set addressLine2(value: string) {
    this._addressLine2 = value;
  }
  public resetAddressLine2() {
    this._addressLine2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine2Input() {
    return this._addressLine2;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // contact_type - computed: true, optional: true, required: false
  private _contactType?: string; 
  public get contactType() {
    return this.getStringAttribute('contact_type');
  }
  public set contactType(value: string) {
    this._contactType = value;
  }
  public resetContactType() {
    this._contactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTypeInput() {
    return this._contactType;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extra_params - computed: true, optional: true, required: false
  private _extraParams?: { [key: string]: string }; 
  public get extraParams() {
    return this.getStringMapAttribute('extra_params');
  }
  public set extraParams(value: { [key: string]: string }) {
    this._extraParams = value;
  }
  public resetExtraParams() {
    this._extraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams;
  }

  // fax - computed: true, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // organization_name - computed: true, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // zip_code - computed: true, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }
}
export interface NameServerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#glue_ips AwsRegisteredDomain#glue_ips}
  */
  readonly glueIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#name AwsRegisteredDomain#name}
  */
  readonly name: string;
}
export class NameServerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NameServerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glueIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueIps = this._glueIps;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NameServerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._glueIps = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._glueIps = value.glueIps;
      this._name = value.name;
    }
  }

  // glue_ips - computed: false, optional: true, required: false
  private _glueIps?: string[]; 
  public get glueIps() {
    return cdktn.Fn.tolist(this.getListAttribute('glue_ips'));
  }
  public set glueIps(value: string[]) {
    this._glueIps = value;
  }
  public resetGlueIps() {
    this._glueIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueIpsInput() {
    return this._glueIps;
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

export class NameServerPropertyList extends cdktn.ComplexList {
  public internalValue? : NameServerProperty[] | cdktn.IResolvable

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
  public get(index: number): NameServerPropertyOutputReference {
    return new NameServerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RegistrantContactProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#address_line_1 AwsRegisteredDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#address_line_2 AwsRegisteredDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#city AwsRegisteredDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#contact_type AwsRegisteredDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#country_code AwsRegisteredDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#email AwsRegisteredDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#extra_params AwsRegisteredDomain#extra_params}
  */
  readonly extraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#fax AwsRegisteredDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#first_name AwsRegisteredDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#last_name AwsRegisteredDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#organization_name AwsRegisteredDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#phone_number AwsRegisteredDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#state AwsRegisteredDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#zip_code AwsRegisteredDomain#zip_code}
  */
  readonly zipCode?: string;
}
export class RegistrantContactPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrantContactProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLine1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine1 = this._addressLine1;
    }
    if (this._addressLine2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine2 = this._addressLine2;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._contactType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactType = this._contactType;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._extraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParams = this._extraParams;
    }
    if (this._fax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fax = this._fax;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._zipCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipCode = this._zipCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrantContactProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._extraParams = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._extraParams = value.extraParams;
      this._fax = value.fax;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._organizationName = value.organizationName;
      this._phoneNumber = value.phoneNumber;
      this._state = value.state;
      this._zipCode = value.zipCode;
    }
  }

  // address_line_1 - computed: true, optional: true, required: false
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
  }
  public resetAddressLine1() {
    this._addressLine1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine1Input() {
    return this._addressLine1;
  }

  // address_line_2 - computed: true, optional: true, required: false
  private _addressLine2?: string; 
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }
  public set addressLine2(value: string) {
    this._addressLine2 = value;
  }
  public resetAddressLine2() {
    this._addressLine2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine2Input() {
    return this._addressLine2;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // contact_type - computed: true, optional: true, required: false
  private _contactType?: string; 
  public get contactType() {
    return this.getStringAttribute('contact_type');
  }
  public set contactType(value: string) {
    this._contactType = value;
  }
  public resetContactType() {
    this._contactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTypeInput() {
    return this._contactType;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extra_params - computed: true, optional: true, required: false
  private _extraParams?: { [key: string]: string }; 
  public get extraParams() {
    return this.getStringMapAttribute('extra_params');
  }
  public set extraParams(value: { [key: string]: string }) {
    this._extraParams = value;
  }
  public resetExtraParams() {
    this._extraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams;
  }

  // fax - computed: true, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // organization_name - computed: true, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // zip_code - computed: true, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }
}
export interface TechContactProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#address_line_1 AwsRegisteredDomain#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#address_line_2 AwsRegisteredDomain#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#city AwsRegisteredDomain#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#contact_type AwsRegisteredDomain#contact_type}
  */
  readonly contactType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#country_code AwsRegisteredDomain#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#email AwsRegisteredDomain#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#extra_params AwsRegisteredDomain#extra_params}
  */
  readonly extraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#fax AwsRegisteredDomain#fax}
  */
  readonly fax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#first_name AwsRegisteredDomain#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#last_name AwsRegisteredDomain#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#organization_name AwsRegisteredDomain#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#phone_number AwsRegisteredDomain#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#state AwsRegisteredDomain#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#zip_code AwsRegisteredDomain#zip_code}
  */
  readonly zipCode?: string;
}
export class TechContactPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TechContactProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLine1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine1 = this._addressLine1;
    }
    if (this._addressLine2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine2 = this._addressLine2;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._contactType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactType = this._contactType;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._extraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParams = this._extraParams;
    }
    if (this._fax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fax = this._fax;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._zipCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipCode = this._zipCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechContactProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._city = undefined;
      this._contactType = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._extraParams = undefined;
      this._fax = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._organizationName = undefined;
      this._phoneNumber = undefined;
      this._state = undefined;
      this._zipCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._city = value.city;
      this._contactType = value.contactType;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._extraParams = value.extraParams;
      this._fax = value.fax;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._organizationName = value.organizationName;
      this._phoneNumber = value.phoneNumber;
      this._state = value.state;
      this._zipCode = value.zipCode;
    }
  }

  // address_line_1 - computed: true, optional: true, required: false
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
  }
  public resetAddressLine1() {
    this._addressLine1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine1Input() {
    return this._addressLine1;
  }

  // address_line_2 - computed: true, optional: true, required: false
  private _addressLine2?: string; 
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }
  public set addressLine2(value: string) {
    this._addressLine2 = value;
  }
  public resetAddressLine2() {
    this._addressLine2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine2Input() {
    return this._addressLine2;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // contact_type - computed: true, optional: true, required: false
  private _contactType?: string; 
  public get contactType() {
    return this.getStringAttribute('contact_type');
  }
  public set contactType(value: string) {
    this._contactType = value;
  }
  public resetContactType() {
    this._contactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTypeInput() {
    return this._contactType;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extra_params - computed: true, optional: true, required: false
  private _extraParams?: { [key: string]: string }; 
  public get extraParams() {
    return this.getStringMapAttribute('extra_params');
  }
  public set extraParams(value: { [key: string]: string }) {
    this._extraParams = value;
  }
  public resetExtraParams() {
    this._extraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams;
  }

  // fax - computed: true, optional: true, required: false
  private _fax?: string; 
  public get fax() {
    return this.getStringAttribute('fax');
  }
  public set fax(value: string) {
    this._fax = value;
  }
  public resetFax() {
    this._fax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // organization_name - computed: true, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // zip_code - computed: true, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#create AwsRegisteredDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/route53domains_registered_domain#update AwsRegisteredDomain#update}
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
