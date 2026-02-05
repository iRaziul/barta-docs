---
title: Gateway Overview
description: All supported SMS gateways.
---

Barta supports 14 SMS gateways out of the box.

## Gateway Comparison

| Gateway | Driver | Auth Type | Best For |
| ------- | ------ | --------- | -------- |
| Log | `log` | None | Development |
| SSL Wireless | `ssl` | API Token | Enterprise |
| eSMS | `esms` | Bearer Token | General use |
| MimSMS | `mimsms` | API Key | General use |
| Infobip | `infobip` | Basic Auth | International |
| Grameenphone | `grameenphone` | Password | Carrier direct |
| Banglalink | `banglalink` | Password | Carrier direct |
| Robi | `robi` | Password | Carrier direct |
| ADN SMS | `adnsms` | API Key/Secret | General use |
| Alpha SMS | `alphasms` | API Key | General use |
| GreenWeb | `greenweb` | Token | Budget |
| BulkSMS BD | `bulksms` | API Key | Bulk campaigns |
| ElitBuzz | `elitbuzz` | API Key | General use |
| SMS NOC | `smsnoc` | Token | General use |

## Choosing a Gateway

### For Development
Use **Log** driver - no credentials needed.

### For Production
- **Enterprise**: SSL Wireless, Infobip
- **Carrier Direct**: Grameenphone, Banglalink, Robi
- **General**: eSMS, MimSMS, ADN SMS
- **Budget/Bulk**: GreenWeb, BulkSMS BD
