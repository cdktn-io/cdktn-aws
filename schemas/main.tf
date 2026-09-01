# Pins the provider version that groups.json is mined against. Regenerate the
# (gitignored, ~34 MB) dump the tools read with:
#
#   cd schemas && terraform init && terraform providers schema -json > schema.json
#
# Keep the version here, schemas/PROVIDER_VERSION and mine-config.json's
# pinnedProviderVersion / providerTag in lockstep.
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.62.0"
    }
  }
}
