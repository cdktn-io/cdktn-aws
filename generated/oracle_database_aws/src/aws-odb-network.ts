// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfNetworkConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the Availability Zone (AZ) where the odb network is located. Changing this will force terraform to create new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#availability_zone TfNetwork#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The AZ ID of the AZ where the ODB network is located. Changing this will force terraform to create new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#availability_zone_id TfNetwork#availability_zone_id}
  */
  readonly availabilityZoneId: string;
  /**
  * The CIDR range of the backup subnet for the ODB network. Changing this will force terraform to create new resource.
  * 	Constraints:
  * 	   - Must not overlap with the CIDR range of the client subnet.
  * 	   - Must not overlap with the CIDR ranges of the VPCs that are connected to the
  * 	   ODB network.
  * 	   - Must not use the following CIDR ranges that are reserved by OCI:
  * 	   - 100.106.0.0/16 and 100.107.0.0/16
  * 	   - 169.254.0.0/16
  * 	   - 224.0.0.0 - 239.255.255.255
  * 	   - 240.0.0.0 - 255.255.255.255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#backup_subnet_cidr TfNetwork#backup_subnet_cidr}
  */
  readonly backupSubnetCidr: string;
  /**
  * The CIDR notation for the network resource. Changing this will force terraform to create new resource.
  *  Constraints:
  *   	 - Must not overlap with the CIDR range of the backup subnet.
  *    	- Must not overlap with the CIDR ranges of the VPCs that are connected to the
  *    ODB network.
  *   	- Must not use the following CIDR ranges that are reserved by OCI:
  *   	 - 100.106.0.0/16 and 100.107.0.0/16
  *   	 - 169.254.0.0/16
  *    	- 224.0.0.0 - 239.255.255.255
  *    	- 240.0.0.0 - 255.255.255.255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#client_subnet_cidr TfNetwork#client_subnet_cidr}
  */
  readonly clientSubnetCidr: string;
  /**
  * The list of regions enabled for cross-region restore in the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#cross_region_s3_restore_sources_access TfNetwork#cross_region_s3_restore_sources_access}
  */
  readonly crossRegionS3RestoreSourcesAccess?: string[];
  /**
  * The name of the custom domain that the network is located. custom_domain_name and default_dns_prefix both can't be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#custom_domain_name TfNetwork#custom_domain_name}
  */
  readonly customDomainName?: string;
  /**
  * The default DNS prefix for the network resource. Changing this will force terraform to create new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#default_dns_prefix TfNetwork#default_dns_prefix}
  */
  readonly defaultDnsPrefix?: string;
  /**
  * If set to true deletes associated OCI resources. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#delete_associated_resources TfNetwork#delete_associated_resources}
  */
  readonly deleteAssociatedResources?: boolean | cdktn.IResolvable;
  /**
  * The user-friendly name for the odb network. Changing this will force terraform to create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#display_name TfNetwork#display_name}
  */
  readonly displayName: string;
  /**
  * Specifies the configuration for Amazon KMS access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#kms_access TfNetwork#kms_access}
  */
  readonly kmsAccess?: string;
  /**
  * Specifies the endpoint policy for Amazon KMS access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#kms_policy_document TfNetwork#kms_policy_document}
  */
  readonly kmsPolicyDocument?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#region TfNetwork#region}
  */
  readonly region?: string;
  /**
  * Specifies the configuration for Amazon S3 access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#s3_access TfNetwork#s3_access}
  */
  readonly s3Access: string;
  /**
  * Specifies the endpoint policy for Amazon S3 access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#s3_policy_document TfNetwork#s3_policy_document}
  */
  readonly s3PolicyDocument?: string;
  /**
  * Specifies the configuration for Amazon STS access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#sts_access TfNetwork#sts_access}
  */
  readonly stsAccess?: string;
  /**
  * Specifies the endpoint policy for Amazon STS access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#sts_policy_document TfNetwork#sts_policy_document}
  */
  readonly stsPolicyDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#tags TfNetwork#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Specifies the configuration for Zero-ETL access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#zero_etl_access TfNetwork#zero_etl_access}
  */
  readonly zeroEtlAccess: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#timeouts TfNetwork#timeouts}
  */
  readonly timeouts?: TfNetwork.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network aws_odb_network}
*/
export class TfNetwork extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_odb_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfNetwork resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfNetwork to import
  * @param importFromId The id of the existing TfNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_odb_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network aws_odb_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: TfNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_odb_network',
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
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneId = config.availabilityZoneId;
    this._backupSubnetCidr = config.backupSubnetCidr;
    this._clientSubnetCidr = config.clientSubnetCidr;
    this._crossRegionS3RestoreSourcesAccess = config.crossRegionS3RestoreSourcesAccess;
    this._customDomainName = config.customDomainName;
    this._defaultDnsPrefix = config.defaultDnsPrefix;
    this._deleteAssociatedResources = config.deleteAssociatedResources;
    this._displayName = config.displayName;
    this._kmsAccess = config.kmsAccess;
    this._kmsPolicyDocument = config.kmsPolicyDocument;
    this._region = config.region;
    this._s3Access = config.s3Access;
    this._s3PolicyDocument = config.s3PolicyDocument;
    this._stsAccess = config.stsAccess;
    this._stsPolicyDocument = config.stsPolicyDocument;
    this._tags = config.tags;
    this._zeroEtlAccess = config.zeroEtlAccess;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // availability_zone_id - computed: false, optional: false, required: true
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // backup_subnet_cidr - computed: false, optional: false, required: true
  private _backupSubnetCidr?: string; 
  public get backupSubnetCidr() {
    return this.getStringAttribute('backup_subnet_cidr');
  }
  public set backupSubnetCidr(value: string) {
    this._backupSubnetCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSubnetCidrInput() {
    return this._backupSubnetCidr;
  }

  // client_subnet_cidr - computed: false, optional: false, required: true
  private _clientSubnetCidr?: string; 
  public get clientSubnetCidr() {
    return this.getStringAttribute('client_subnet_cidr');
  }
  public set clientSubnetCidr(value: string) {
    this._clientSubnetCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetCidrInput() {
    return this._clientSubnetCidr;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cross_region_s3_restore_sources_access - computed: true, optional: true, required: false
  private _crossRegionS3RestoreSourcesAccess?: string[]; 
  public get crossRegionS3RestoreSourcesAccess() {
    return cdktn.Fn.tolist(this.getListAttribute('cross_region_s3_restore_sources_access'));
  }
  public set crossRegionS3RestoreSourcesAccess(value: string[]) {
    this._crossRegionS3RestoreSourcesAccess = value;
  }
  public resetCrossRegionS3RestoreSourcesAccess() {
    this._crossRegionS3RestoreSourcesAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionS3RestoreSourcesAccessInput() {
    return this._crossRegionS3RestoreSourcesAccess;
  }

  // custom_domain_name - computed: false, optional: true, required: false
  private _customDomainName?: string; 
  public get customDomainName() {
    return this.getStringAttribute('custom_domain_name');
  }
  public set customDomainName(value: string) {
    this._customDomainName = value;
  }
  public resetCustomDomainName() {
    this._customDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainNameInput() {
    return this._customDomainName;
  }

  // default_dns_prefix - computed: false, optional: true, required: false
  private _defaultDnsPrefix?: string; 
  public get defaultDnsPrefix() {
    return this.getStringAttribute('default_dns_prefix');
  }
  public set defaultDnsPrefix(value: string) {
    this._defaultDnsPrefix = value;
  }
  public resetDefaultDnsPrefix() {
    this._defaultDnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDnsPrefixInput() {
    return this._defaultDnsPrefix;
  }

  // delete_associated_resources - computed: true, optional: true, required: false
  private _deleteAssociatedResources?: boolean | cdktn.IResolvable; 
  public get deleteAssociatedResources() {
    return this.getBooleanAttribute('delete_associated_resources');
  }
  public set deleteAssociatedResources(value: boolean | cdktn.IResolvable) {
    this._deleteAssociatedResources = value;
  }
  public resetDeleteAssociatedResources() {
    this._deleteAssociatedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAssociatedResourcesInput() {
    return this._deleteAssociatedResources;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ec2_placement_group_ids - computed: true, optional: false, required: false
  public get ec2PlacementGroupIds() {
    return this.getListAttribute('ec2_placement_group_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_access - computed: true, optional: true, required: false
  private _kmsAccess?: string; 
  public get kmsAccess() {
    return this.getStringAttribute('kms_access');
  }
  public set kmsAccess(value: string) {
    this._kmsAccess = value;
  }
  public resetKmsAccess() {
    this._kmsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsAccessInput() {
    return this._kmsAccess;
  }

  // kms_policy_document - computed: false, optional: true, required: false
  private _kmsPolicyDocument?: string; 
  public get kmsPolicyDocument() {
    return this.getStringAttribute('kms_policy_document');
  }
  public set kmsPolicyDocument(value: string) {
    this._kmsPolicyDocument = value;
  }
  public resetKmsPolicyDocument() {
    this._kmsPolicyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsPolicyDocumentInput() {
    return this._kmsPolicyDocument;
  }

  // managed_services - computed: true, optional: false, required: false
  private _managedServices = new TfNetwork.ManagedServicesPropertyList(this, "managed_services", false);
  public get managedServices() {
    return this._managedServices;
  }

  // oci_dns_forwarding_configs - computed: true, optional: false, required: false
  private _ociDnsForwardingConfigs = new TfNetwork.OciDnsForwardingConfigsPropertyList(this, "oci_dns_forwarding_configs", false);
  public get ociDnsForwardingConfigs() {
    return this._ociDnsForwardingConfigs;
  }

  // oci_network_anchor_id - computed: true, optional: false, required: false
  public get ociNetworkAnchorId() {
    return this.getStringAttribute('oci_network_anchor_id');
  }

  // oci_network_anchor_url - computed: true, optional: false, required: false
  public get ociNetworkAnchorUrl() {
    return this.getStringAttribute('oci_network_anchor_url');
  }

  // oci_resource_anchor_name - computed: true, optional: false, required: false
  public get ociResourceAnchorName() {
    return this.getStringAttribute('oci_resource_anchor_name');
  }

  // oci_vcn_id - computed: true, optional: false, required: false
  public get ociVcnId() {
    return this.getStringAttribute('oci_vcn_id');
  }

  // oci_vcn_url - computed: true, optional: false, required: false
  public get ociVcnUrl() {
    return this.getStringAttribute('oci_vcn_url');
  }

  // peered_cidrs - computed: true, optional: false, required: false
  public get peeredCidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('peered_cidrs'));
  }

  // percent_progress - computed: true, optional: false, required: false
  public get percentProgress() {
    return this.getNumberAttribute('percent_progress');
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

  // s3_access - computed: false, optional: false, required: true
  private _s3Access?: string; 
  public get s3Access() {
    return this.getStringAttribute('s3_access');
  }
  public set s3Access(value: string) {
    this._s3Access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessInput() {
    return this._s3Access;
  }

  // s3_policy_document - computed: false, optional: true, required: false
  private _s3PolicyDocument?: string; 
  public get s3PolicyDocument() {
    return this.getStringAttribute('s3_policy_document');
  }
  public set s3PolicyDocument(value: string) {
    this._s3PolicyDocument = value;
  }
  public resetS3PolicyDocument() {
    this._s3PolicyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PolicyDocumentInput() {
    return this._s3PolicyDocument;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // sts_access - computed: true, optional: true, required: false
  private _stsAccess?: string; 
  public get stsAccess() {
    return this.getStringAttribute('sts_access');
  }
  public set stsAccess(value: string) {
    this._stsAccess = value;
  }
  public resetStsAccess() {
    this._stsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsAccessInput() {
    return this._stsAccess;
  }

  // sts_policy_document - computed: false, optional: true, required: false
  private _stsPolicyDocument?: string; 
  public get stsPolicyDocument() {
    return this.getStringAttribute('sts_policy_document');
  }
  public set stsPolicyDocument(value: string) {
    this._stsPolicyDocument = value;
  }
  public resetStsPolicyDocument() {
    this._stsPolicyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsPolicyDocumentInput() {
    return this._stsPolicyDocument;
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

  // zero_etl_access - computed: false, optional: false, required: true
  private _zeroEtlAccess?: string; 
  public get zeroEtlAccess() {
    return this.getStringAttribute('zero_etl_access');
  }
  public set zeroEtlAccess(value: string) {
    this._zeroEtlAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroEtlAccessInput() {
    return this._zeroEtlAccess;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfNetwork.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfNetwork.TimeoutsProperty) {
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
      availability_zone: cdktn.stringToTerraform(this._availabilityZone),
      availability_zone_id: cdktn.stringToTerraform(this._availabilityZoneId),
      backup_subnet_cidr: cdktn.stringToTerraform(this._backupSubnetCidr),
      client_subnet_cidr: cdktn.stringToTerraform(this._clientSubnetCidr),
      cross_region_s3_restore_sources_access: cdktn.listMapper(cdktn.stringToTerraform, false)(this._crossRegionS3RestoreSourcesAccess),
      custom_domain_name: cdktn.stringToTerraform(this._customDomainName),
      default_dns_prefix: cdktn.stringToTerraform(this._defaultDnsPrefix),
      delete_associated_resources: cdktn.booleanToTerraform(this._deleteAssociatedResources),
      display_name: cdktn.stringToTerraform(this._displayName),
      kms_access: cdktn.stringToTerraform(this._kmsAccess),
      kms_policy_document: cdktn.stringToTerraform(this._kmsPolicyDocument),
      region: cdktn.stringToTerraform(this._region),
      s3_access: cdktn.stringToTerraform(this._s3Access),
      s3_policy_document: cdktn.stringToTerraform(this._s3PolicyDocument),
      sts_access: cdktn.stringToTerraform(this._stsAccess),
      sts_policy_document: cdktn.stringToTerraform(this._stsPolicyDocument),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      zero_etl_access: cdktn.stringToTerraform(this._zeroEtlAccess),
      timeouts: tfNetworkTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktn.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone_id: {
        value: cdktn.stringToHclTerraform(this._availabilityZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_subnet_cidr: {
        value: cdktn.stringToHclTerraform(this._backupSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_subnet_cidr: {
        value: cdktn.stringToHclTerraform(this._clientSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_region_s3_restore_sources_access: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._crossRegionS3RestoreSourcesAccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_domain_name: {
        value: cdktn.stringToHclTerraform(this._customDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_dns_prefix: {
        value: cdktn.stringToHclTerraform(this._defaultDnsPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_associated_resources: {
        value: cdktn.booleanToHclTerraform(this._deleteAssociatedResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_access: {
        value: cdktn.stringToHclTerraform(this._kmsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_policy_document: {
        value: cdktn.stringToHclTerraform(this._kmsPolicyDocument),
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
      s3_access: {
        value: cdktn.stringToHclTerraform(this._s3Access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_policy_document: {
        value: cdktn.stringToHclTerraform(this._s3PolicyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_access: {
        value: cdktn.stringToHclTerraform(this._stsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_policy_document: {
        value: cdktn.stringToHclTerraform(this._stsPolicyDocument),
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
      zero_etl_access: {
        value: cdktn.stringToHclTerraform(this._zeroEtlAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: tfNetworkTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfNetwork.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfNetworkCrossRegionS3RestoreSourcesAccessPropertyToTerraform(struct?: TfNetwork.CrossRegionS3RestoreSourcesAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfNetworkCrossRegionS3RestoreSourcesAccessPropertyToHclTerraform(struct?: TfNetwork.CrossRegionS3RestoreSourcesAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfNetworkKmsAccessPropertyToTerraform(struct?: TfNetwork.KmsAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfNetworkKmsAccessPropertyToHclTerraform(struct?: TfNetwork.KmsAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfNetworkManagedS3BackupAccessPropertyToTerraform(struct?: TfNetwork.ManagedS3BackupAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfNetworkManagedS3BackupAccessPropertyToHclTerraform(struct?: TfNetwork.ManagedS3BackupAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfNetworkS3AccessPropertyToTerraform(struct?: TfNetwork.S3AccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfNetworkS3AccessPropertyToHclTerraform(struct?: TfNetwork.S3AccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfNetworkServiceNetworkEndpointPropertyToTerraform(struct?: TfNetwork.ServiceNetworkEndpointProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfNetworkServiceNetworkEndpointPropertyToHclTerraform(struct?: TfNetwork.ServiceNetworkEndpointProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfNetworkStsAccessPropertyToTerraform(struct?: TfNetwork.StsAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfNetworkStsAccessPropertyToHclTerraform(struct?: TfNetwork.StsAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfNetworkZeroEtlAccessPropertyToTerraform(struct?: TfNetwork.ZeroEtlAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfNetworkZeroEtlAccessPropertyToHclTerraform(struct?: TfNetwork.ZeroEtlAccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfNetworkManagedServicesPropertyToTerraform(struct?: TfNetwork.ManagedServicesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfNetworkManagedServicesPropertyToHclTerraform(struct?: TfNetwork.ManagedServicesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfNetworkOciDnsForwardingConfigsPropertyToTerraform(struct?: TfNetwork.OciDnsForwardingConfigsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfNetworkOciDnsForwardingConfigsPropertyToHclTerraform(struct?: TfNetwork.OciDnsForwardingConfigsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfNetworkTimeoutsPropertyToTerraform(struct?: TfNetwork.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfNetworkTimeoutsPropertyToHclTerraform(struct?: TfNetwork.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfNetwork {
export interface CrossRegionS3RestoreSourcesAccessProperty {
}
export class CrossRegionS3RestoreSourcesAccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CrossRegionS3RestoreSourcesAccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrossRegionS3RestoreSourcesAccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class CrossRegionS3RestoreSourcesAccessPropertyList extends cdktn.ComplexList {

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
  public get(index: number): CrossRegionS3RestoreSourcesAccessPropertyOutputReference {
    return new CrossRegionS3RestoreSourcesAccessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsAccessProperty {
}
export class KmsAccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KmsAccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsAccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }

  // kms_policy_document - computed: true, optional: false, required: false
  public get kmsPolicyDocument() {
    return this.getStringAttribute('kms_policy_document');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class KmsAccessPropertyList extends cdktn.ComplexList {

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
  public get(index: number): KmsAccessPropertyOutputReference {
    return new KmsAccessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedS3BackupAccessProperty {
}
export class ManagedS3BackupAccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedS3BackupAccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedS3BackupAccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class ManagedS3BackupAccessPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ManagedS3BackupAccessPropertyOutputReference {
    return new ManagedS3BackupAccessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3AccessProperty {
}
export class S3AccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3AccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3AccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }

  // s3_policy_document - computed: true, optional: false, required: false
  public get s3PolicyDocument() {
    return this.getStringAttribute('s3_policy_document');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class S3AccessPropertyList extends cdktn.ComplexList {

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
  public get(index: number): S3AccessPropertyOutputReference {
    return new S3AccessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNetworkEndpointProperty {
}
export class ServiceNetworkEndpointPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServiceNetworkEndpointProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNetworkEndpointProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // vpc_endpoint_type - computed: true, optional: false, required: false
  public get vpcEndpointType() {
    return this.getStringAttribute('vpc_endpoint_type');
  }
}

export class ServiceNetworkEndpointPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ServiceNetworkEndpointPropertyOutputReference {
    return new ServiceNetworkEndpointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StsAccessProperty {
}
export class StsAccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StsAccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StsAccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sts_policy_document - computed: true, optional: false, required: false
  public get stsPolicyDocument() {
    return this.getStringAttribute('sts_policy_document');
  }
}

export class StsAccessPropertyList extends cdktn.ComplexList {

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
  public get(index: number): StsAccessPropertyOutputReference {
    return new StsAccessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroEtlAccessProperty {
}
export class ZeroEtlAccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroEtlAccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroEtlAccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class ZeroEtlAccessPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ZeroEtlAccessPropertyOutputReference {
    return new ZeroEtlAccessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedServicesProperty {
}
export class ManagedServicesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedServicesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedServicesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cross_region_s3_restore_sources_access - computed: true, optional: false, required: false
  private _crossRegionS3RestoreSourcesAccess = new CrossRegionS3RestoreSourcesAccessPropertyList(this, "cross_region_s3_restore_sources_access", false);
  public get crossRegionS3RestoreSourcesAccess() {
    return this._crossRegionS3RestoreSourcesAccess;
  }

  // kms_access - computed: true, optional: false, required: false
  private _kmsAccess = new KmsAccessPropertyList(this, "kms_access", false);
  public get kmsAccess() {
    return this._kmsAccess;
  }

  // managed_s3_backup_access - computed: true, optional: false, required: false
  private _managedS3BackupAccess = new ManagedS3BackupAccessPropertyList(this, "managed_s3_backup_access", false);
  public get managedS3BackupAccess() {
    return this._managedS3BackupAccess;
  }

  // managed_service_ipv4_cidrs - computed: true, optional: false, required: false
  public get managedServiceIpv4Cidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('managed_service_ipv4_cidrs'));
  }

  // resource_gateway_arn - computed: true, optional: false, required: false
  public get resourceGatewayArn() {
    return this.getStringAttribute('resource_gateway_arn');
  }

  // s3_access - computed: true, optional: false, required: false
  private _s3Access = new S3AccessPropertyList(this, "s3_access", false);
  public get s3Access() {
    return this._s3Access;
  }

  // service_network_arn - computed: true, optional: false, required: false
  public get serviceNetworkArn() {
    return this.getStringAttribute('service_network_arn');
  }

  // service_network_endpoint - computed: true, optional: false, required: false
  private _serviceNetworkEndpoint = new ServiceNetworkEndpointPropertyList(this, "service_network_endpoint", false);
  public get serviceNetworkEndpoint() {
    return this._serviceNetworkEndpoint;
  }

  // sts_access - computed: true, optional: false, required: false
  private _stsAccess = new StsAccessPropertyList(this, "sts_access", false);
  public get stsAccess() {
    return this._stsAccess;
  }

  // zero_etl_access - computed: true, optional: false, required: false
  private _zeroEtlAccess = new ZeroEtlAccessPropertyList(this, "zero_etl_access", false);
  public get zeroEtlAccess() {
    return this._zeroEtlAccess;
  }
}

export class ManagedServicesPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ManagedServicesPropertyOutputReference {
    return new ManagedServicesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OciDnsForwardingConfigsProperty {
}
export class OciDnsForwardingConfigsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OciDnsForwardingConfigsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OciDnsForwardingConfigsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // oci_dns_listener_ip - computed: true, optional: false, required: false
  public get ociDnsListenerIp() {
    return this.getStringAttribute('oci_dns_listener_ip');
  }
}

export class OciDnsForwardingConfigsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): OciDnsForwardingConfigsPropertyOutputReference {
    return new OciDnsForwardingConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#create TfNetwork#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#delete TfNetwork#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/odb_network#update TfNetwork#update}
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
