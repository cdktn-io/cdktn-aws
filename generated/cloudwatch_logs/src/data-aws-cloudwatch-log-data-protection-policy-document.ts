// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface DataTfDataProtectionPolicyDocumentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#description DataTfDataProtectionPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#id DataTfDataProtectionPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#name DataTfDataProtectionPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#version DataTfDataProtectionPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#configuration DataTfDataProtectionPolicyDocument#configuration}
  */
  readonly configuration?: DataTfDataProtectionPolicyDocument.ConfigurationProperty;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#statement DataTfDataProtectionPolicyDocument#statement}
  */
  readonly statement: DataTfDataProtectionPolicyDocument.StatementProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document aws_cloudwatch_log_data_protection_policy_document}
*/
export class DataTfDataProtectionPolicyDocument extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_log_data_protection_policy_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataTfDataProtectionPolicyDocument resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfDataProtectionPolicyDocument to import
  * @param importFromId The id of the existing DataTfDataProtectionPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfDataProtectionPolicyDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_log_data_protection_policy_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document aws_cloudwatch_log_data_protection_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfDataProtectionPolicyDocumentConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfDataProtectionPolicyDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_data_protection_policy_document',
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
    this._version = config.version;
    this._configuration.internalValue = config.configuration;
    this._statement.internalValue = config.statement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataTfDataProtectionPolicyDocument.ConfigurationPropertyOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataTfDataProtectionPolicyDocument.ConfigurationProperty) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // statement - computed: false, optional: false, required: true
  private _statement = new DataTfDataProtectionPolicyDocument.StatementPropertyList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: DataTfDataProtectionPolicyDocument.StatementProperty[] | cdktn.IResolvable) {
    this._statement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      version: cdktn.stringToTerraform(this._version),
      configuration: dataTfDataProtectionPolicyDocumentConfigurationPropertyToTerraform(this._configuration.internalValue),
      statement: cdktn.listMapper(dataTfDataProtectionPolicyDocumentStatementPropertyToTerraform, true)(this._statement.internalValue),
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
      version: {
        value: cdktn.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: dataTfDataProtectionPolicyDocumentConfigurationPropertyToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfDataProtectionPolicyDocument.ConfigurationPropertyList",
      },
      statement: {
        value: cdktn.listMapperHcl(dataTfDataProtectionPolicyDocumentStatementPropertyToHclTerraform, true)(this._statement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTfDataProtectionPolicyDocument.StatementPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function dataTfDataProtectionPolicyDocumentCustomDataIdentifierPropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.CustomDataIdentifierProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function dataTfDataProtectionPolicyDocumentCustomDataIdentifierPropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.CustomDataIdentifierProperty | cdktn.IResolvable): any {
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
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfDataProtectionPolicyDocumentConfigurationPropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.ConfigurationPropertyOutputReference | DataTfDataProtectionPolicyDocument.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_data_identifier: cdktn.listMapper(dataTfDataProtectionPolicyDocumentCustomDataIdentifierPropertyToTerraform, true)(struct!.customDataIdentifier),
  }
}


export function dataTfDataProtectionPolicyDocumentConfigurationPropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.ConfigurationPropertyOutputReference | DataTfDataProtectionPolicyDocument.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_data_identifier: {
      value: cdktn.listMapperHcl(dataTfDataProtectionPolicyDocumentCustomDataIdentifierPropertyToHclTerraform, true)(struct!.customDataIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDataIdentifierPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfDataProtectionPolicyDocumentCloudwatchLogsPropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.CloudwatchLogsPropertyOutputReference | DataTfDataProtectionPolicyDocument.CloudwatchLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group: cdktn.stringToTerraform(struct!.logGroup),
  }
}


export function dataTfDataProtectionPolicyDocumentCloudwatchLogsPropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.CloudwatchLogsPropertyOutputReference | DataTfDataProtectionPolicyDocument.CloudwatchLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfDataProtectionPolicyDocumentFirehosePropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.FirehosePropertyOutputReference | DataTfDataProtectionPolicyDocument.FirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
  }
}


export function dataTfDataProtectionPolicyDocumentFirehosePropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.FirehosePropertyOutputReference | DataTfDataProtectionPolicyDocument.FirehoseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfDataProtectionPolicyDocumentS3PropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.S3PropertyOutputReference | DataTfDataProtectionPolicyDocument.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
  }
}


export function dataTfDataProtectionPolicyDocumentS3PropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.S3PropertyOutputReference | DataTfDataProtectionPolicyDocument.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfDataProtectionPolicyDocumentFindingsDestinationPropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.FindingsDestinationPropertyOutputReference | DataTfDataProtectionPolicyDocument.FindingsDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs: dataTfDataProtectionPolicyDocumentCloudwatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
    firehose: dataTfDataProtectionPolicyDocumentFirehosePropertyToTerraform(struct!.firehose),
    s3: dataTfDataProtectionPolicyDocumentS3PropertyToTerraform(struct!.s3),
  }
}


export function dataTfDataProtectionPolicyDocumentFindingsDestinationPropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.FindingsDestinationPropertyOutputReference | DataTfDataProtectionPolicyDocument.FindingsDestinationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs: {
      value: dataTfDataProtectionPolicyDocumentCloudwatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogsPropertyList",
    },
    firehose: {
      value: dataTfDataProtectionPolicyDocumentFirehosePropertyToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "list",
      storageClassType: "FirehosePropertyList",
    },
    s3: {
      value: dataTfDataProtectionPolicyDocumentS3PropertyToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "S3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfDataProtectionPolicyDocumentAuditPropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.AuditPropertyOutputReference | DataTfDataProtectionPolicyDocument.AuditProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    findings_destination: dataTfDataProtectionPolicyDocumentFindingsDestinationPropertyToTerraform(struct!.findingsDestination),
  }
}


export function dataTfDataProtectionPolicyDocumentAuditPropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.AuditPropertyOutputReference | DataTfDataProtectionPolicyDocument.AuditProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    findings_destination: {
      value: dataTfDataProtectionPolicyDocumentFindingsDestinationPropertyToHclTerraform(struct!.findingsDestination),
      isBlock: true,
      type: "list",
      storageClassType: "FindingsDestinationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfDataProtectionPolicyDocumentMaskConfigPropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.MaskConfigPropertyOutputReference | DataTfDataProtectionPolicyDocument.MaskConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataTfDataProtectionPolicyDocumentMaskConfigPropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.MaskConfigPropertyOutputReference | DataTfDataProtectionPolicyDocument.MaskConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function dataTfDataProtectionPolicyDocumentDeidentifyPropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.DeidentifyPropertyOutputReference | DataTfDataProtectionPolicyDocument.DeidentifyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mask_config: dataTfDataProtectionPolicyDocumentMaskConfigPropertyToTerraform(struct!.maskConfig),
  }
}


export function dataTfDataProtectionPolicyDocumentDeidentifyPropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.DeidentifyPropertyOutputReference | DataTfDataProtectionPolicyDocument.DeidentifyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mask_config: {
      value: dataTfDataProtectionPolicyDocumentMaskConfigPropertyToHclTerraform(struct!.maskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MaskConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfDataProtectionPolicyDocumentOperationPropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.OperationPropertyOutputReference | DataTfDataProtectionPolicyDocument.OperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audit: dataTfDataProtectionPolicyDocumentAuditPropertyToTerraform(struct!.audit),
    deidentify: dataTfDataProtectionPolicyDocumentDeidentifyPropertyToTerraform(struct!.deidentify),
  }
}


export function dataTfDataProtectionPolicyDocumentOperationPropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.OperationPropertyOutputReference | DataTfDataProtectionPolicyDocument.OperationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audit: {
      value: dataTfDataProtectionPolicyDocumentAuditPropertyToHclTerraform(struct!.audit),
      isBlock: true,
      type: "list",
      storageClassType: "AuditPropertyList",
    },
    deidentify: {
      value: dataTfDataProtectionPolicyDocumentDeidentifyPropertyToHclTerraform(struct!.deidentify),
      isBlock: true,
      type: "list",
      storageClassType: "DeidentifyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function dataTfDataProtectionPolicyDocumentStatementPropertyToTerraform(struct?: DataTfDataProtectionPolicyDocument.StatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dataIdentifiers),
    sid: cdktn.stringToTerraform(struct!.sid),
    operation: dataTfDataProtectionPolicyDocumentOperationPropertyToTerraform(struct!.operation),
  }
}


export function dataTfDataProtectionPolicyDocumentStatementPropertyToHclTerraform(struct?: DataTfDataProtectionPolicyDocument.StatementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dataIdentifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sid: {
      value: cdktn.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: dataTfDataProtectionPolicyDocumentOperationPropertyToHclTerraform(struct!.operation),
      isBlock: true,
      type: "list",
      storageClassType: "OperationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace DataTfDataProtectionPolicyDocument {
export interface CustomDataIdentifierProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#name DataTfDataProtectionPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#regex DataTfDataProtectionPolicyDocument#regex}
  */
  readonly regex: string;
}
export class CustomDataIdentifierPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomDataIdentifierProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDataIdentifierProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
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

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class CustomDataIdentifierPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomDataIdentifierProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomDataIdentifierPropertyOutputReference {
    return new CustomDataIdentifierPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationProperty {
  /**
  * custom_data_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#custom_data_identifier DataTfDataProtectionPolicyDocument#custom_data_identifier}
  */
  readonly customDataIdentifier?: CustomDataIdentifierProperty[] | cdktn.IResolvable;
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
    if (this._customDataIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDataIdentifier = this._customDataIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customDataIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customDataIdentifier.internalValue = value.customDataIdentifier;
    }
  }

  // custom_data_identifier - computed: false, optional: true, required: false
  private _customDataIdentifier = new CustomDataIdentifierPropertyList(this, "custom_data_identifier", false);
  public get customDataIdentifier() {
    return this._customDataIdentifier;
  }
  public putCustomDataIdentifier(value: CustomDataIdentifierProperty[] | cdktn.IResolvable) {
    this._customDataIdentifier.internalValue = value;
  }
  public resetCustomDataIdentifier() {
    this._customDataIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataIdentifierInput() {
    return this._customDataIdentifier.internalValue;
  }
}
export interface CloudwatchLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#log_group DataTfDataProtectionPolicyDocument#log_group}
  */
  readonly logGroup: string;
}
export class CloudwatchLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroup = value.logGroup;
    }
  }

  // log_group - computed: false, optional: false, required: true
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}
export interface FirehoseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#delivery_stream DataTfDataProtectionPolicyDocument#delivery_stream}
  */
  readonly deliveryStream: string;
}
export class FirehosePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirehoseProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirehoseProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryStream = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryStream = value.deliveryStream;
    }
  }

  // delivery_stream - computed: false, optional: false, required: true
  private _deliveryStream?: string; 
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
  public set deliveryStream(value: string) {
    this._deliveryStream = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamInput() {
    return this._deliveryStream;
  }
}
export interface S3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#bucket DataTfDataProtectionPolicyDocument#bucket}
  */
  readonly bucket: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }
}
export interface FindingsDestinationProperty {
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#cloudwatch_logs DataTfDataProtectionPolicyDocument#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: CloudwatchLogsProperty;
  /**
  * firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#firehose DataTfDataProtectionPolicyDocument#firehose}
  */
  readonly firehose?: FirehoseProperty;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#s3 DataTfDataProtectionPolicyDocument#s3}
  */
  readonly s3?: S3Property;
}
export class FindingsDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FindingsDestinationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindingsDestinationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogs.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._firehose.internalValue = value.firehose;
      this._s3.internalValue = value.s3;
    }
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new CloudwatchLogsPropertyOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: CloudwatchLogsProperty) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new FirehosePropertyOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: FirehoseProperty) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new S3PropertyOutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: S3Property) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface AuditProperty {
  /**
  * findings_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#findings_destination DataTfDataProtectionPolicyDocument#findings_destination}
  */
  readonly findingsDestination: FindingsDestinationProperty;
}
export class AuditPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._findingsDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingsDestination = this._findingsDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._findingsDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._findingsDestination.internalValue = value.findingsDestination;
    }
  }

  // findings_destination - computed: false, optional: false, required: true
  private _findingsDestination = new FindingsDestinationPropertyOutputReference(this, "findings_destination");
  public get findingsDestination() {
    return this._findingsDestination;
  }
  public putFindingsDestination(value: FindingsDestinationProperty) {
    this._findingsDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findingsDestinationInput() {
    return this._findingsDestination.internalValue;
  }
}
export interface MaskConfigProperty {
}
export class MaskConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaskConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaskConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DeidentifyProperty {
  /**
  * mask_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#mask_config DataTfDataProtectionPolicyDocument#mask_config}
  */
  readonly maskConfig: MaskConfigProperty;
}
export class DeidentifyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeidentifyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskConfig = this._maskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeidentifyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maskConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maskConfig.internalValue = value.maskConfig;
    }
  }

  // mask_config - computed: false, optional: false, required: true
  private _maskConfig = new MaskConfigPropertyOutputReference(this, "mask_config");
  public get maskConfig() {
    return this._maskConfig;
  }
  public putMaskConfig(value: MaskConfigProperty) {
    this._maskConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskConfigInput() {
    return this._maskConfig.internalValue;
  }
}
export interface OperationProperty {
  /**
  * audit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#audit DataTfDataProtectionPolicyDocument#audit}
  */
  readonly audit?: AuditProperty;
  /**
  * deidentify block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#deidentify DataTfDataProtectionPolicyDocument#deidentify}
  */
  readonly deidentify?: DeidentifyProperty;
}
export class OperationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OperationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit?.internalValue;
    }
    if (this._deidentify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deidentify = this._deidentify?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OperationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit.internalValue = undefined;
      this._deidentify.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit.internalValue = value.audit;
      this._deidentify.internalValue = value.deidentify;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit = new AuditPropertyOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }
  public putAudit(value: AuditProperty) {
    this._audit.internalValue = value;
  }
  public resetAudit() {
    this._audit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit.internalValue;
  }

  // deidentify - computed: false, optional: true, required: false
  private _deidentify = new DeidentifyPropertyOutputReference(this, "deidentify");
  public get deidentify() {
    return this._deidentify;
  }
  public putDeidentify(value: DeidentifyProperty) {
    this._deidentify.internalValue = value;
  }
  public resetDeidentify() {
    this._deidentify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deidentifyInput() {
    return this._deidentify.internalValue;
  }
}
export interface StatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#data_identifiers DataTfDataProtectionPolicyDocument#data_identifiers}
  */
  readonly dataIdentifiers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#sid DataTfDataProtectionPolicyDocument#sid}
  */
  readonly sid?: string;
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#operation DataTfDataProtectionPolicyDocument#operation}
  */
  readonly operation: OperationProperty;
}
export class StatementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StatementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataIdentifiers = this._dataIdentifiers;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataIdentifiers = undefined;
      this._sid = undefined;
      this._operation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataIdentifiers = value.dataIdentifiers;
      this._sid = value.sid;
      this._operation.internalValue = value.operation;
    }
  }

  // data_identifiers - computed: false, optional: false, required: true
  private _dataIdentifiers?: string[]; 
  public get dataIdentifiers() {
    return cdktn.Fn.tolist(this.getListAttribute('data_identifiers'));
  }
  public set dataIdentifiers(value: string[]) {
    this._dataIdentifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIdentifiersInput() {
    return this._dataIdentifiers;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // operation - computed: false, optional: false, required: true
  private _operation = new OperationPropertyOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: OperationProperty) {
    this._operation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }
}

export class StatementPropertyList extends cdktn.ComplexList {
  public internalValue? : StatementProperty[] | cdktn.IResolvable

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
  public get(index: number): StatementPropertyOutputReference {
    return new StatementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
