# BCP Validate Branch Action

Validate braches for PR to develop and tags for production deploy

## Inputs

### `environment`

**Required** Enviroment where will be deploy. Accepts PROD or CERT.

### `rc`

Release candidate branch name. Is **required** if `environment` input is PROD.

## Example usage

```yaml
uses: actions/bcp-validate-branch-action@v0.0.1
with:
  environment: 'PROD'
  rc: 'RC-CERT_0.0.1_20240810-072706' # Required only for environment PROD
```
