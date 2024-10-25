#!/bin/bash
curl -X POST $VAULT_ADDR/v1/ssh/creds/stage   -H 'accept: */*'   -H 'Content-Type: application/json'   -H "X-Vault-Token: $VAULT_TOKEN"   -d '{ "ip": "'"$1"'" }'  -s  | jq .data.key -r
