---
title: Introduction
description: Overview of the Barta Laravel package for Bangladeshi SMS gateways.
---

**Barta** (বার্তা) is a clean, expressive Laravel package for integrating Bangladeshi SMS gateways. It provides a unified interface for sending SMS through 14+ providers.

## Key Features

- **Multiple Gateways** — SSL Wireless, eSMS, Infobip, Grameenphone, and more
- **Fluent API** — Clean, chainable methods for sending SMS
- **Bulk SMS** — Send to multiple recipients in a single call
- **Queue Support** — Dispatch SMS to background jobs
- **Laravel Notifications** — Native `barta` channel integration
- **Phone Formatting** — Automatic BD phone number normalization
- **Extensible** — Create custom drivers easily

## Supported Gateways

| Gateway | Driver | Best For |
| ------- | ------ | -------- |
| Log | `log` | Development |
| SSL Wireless | `ssl` | Enterprise |
| eSMS | `esms` | General use |
| MimSMS | `mimsms` | General use |
| Infobip | `infobip` | International |
| Grameenphone | `grameenphone` | Carrier direct |
| Banglalink | `banglalink` | Carrier direct |
| Robi | `robi` | Carrier direct |
| ADN SMS | `adnsms` | General use |
| Alpha SMS | `alphasms` | General use |
| GreenWeb | `greenweb` | Budget |
| BulkSMS BD | `bulksms` | Bulk campaigns |
| ElitBuzz | `elitbuzz` | General use |
| SMS NOC | `smsnoc` | General use |

## Requirements

- **PHP** 8.2 or higher
- **Laravel** 11.x or 12.x
