---
title: Configuration
description: Complete configuration reference for all Barta drivers.
---

Barta's configuration file (`config/barta.php`) contains settings for all SMS gateways. You can also configure Barta using environment variables. The environment variables will override the configuration file settings.

## Default Driver

```dotenv
BARTA_DRIVER=log
```

## Gateway Configurations

### SSL Wireless

```dotenv
BARTA_SSL_TOKEN=your-api-token
BARTA_SSL_SENDER_ID=your-sender-id
BARTA_SSL_CSMS_ID=optional-csms-id
```

### eSMS

```dotenv
BARTA_ESMS_TOKEN=your-api-token
BARTA_ESMS_SENDER_ID=your-sender-id
```

### MimSMS

```dotenv
BARTA_MIMSMS_USERNAME=your-username
BARTA_MIMSMS_API_KEY=your-api-key
BARTA_MIMSMS_SENDER_ID=your-sender-id
```

### Infobip

```dotenv
BARTA_INFOBIP_BASE_URL=https://api.infobip.com
BARTA_INFOBIP_USERNAME=your-username
BARTA_INFOBIP_PASSWORD=your-password
BARTA_INFOBIP_SENDER_ID=your-sender-id
```

### Grameenphone

```dotenv
BARTA_GP_USERNAME=your-username
BARTA_GP_PASSWORD=your-password
BARTA_GP_CLI=2222
BARTA_GP_MESSAGE_TYPE=1
```

### Banglalink

```dotenv
BARTA_BL_USER_ID=your-user-id
BARTA_BL_PASSWORD=your-password
BARTA_BL_SENDER_ID=your-sender-id
```

### Robi

```dotenv
BARTA_ROBI_USERNAME=your-username
BARTA_ROBI_PASSWORD=your-password
```

### ADN SMS

```dotenv
BARTA_ADNSMS_API_KEY=your-api-key
BARTA_ADNSMS_API_SECRET=your-api-secret
BARTA_ADNSMS_SENDER_ID=your-sender-id
```

### Other Gateways

See the [Gateways](/gateways/others/) section for Alpha SMS, GreenWeb, BulkSMS BD, ElitBuzz, and SMS NOC configuration.

## HTTP Settings

Barta uses HTTP requests to communicate with SMS gateways. You can configure the HTTP settings in the configuration file or using environment variables.

```dotenv
BARTA_REQUEST_TIMEOUT=10
BARTA_REQUEST_RETRY=3
BARTA_REQUEST_RETRY_DELAY=300
```

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `timeout` | 10 | Request timeout (seconds) |
| `retry` | 3 | Retry attempts |
| `retry_delay` | 300 | Retry delay (ms) |
