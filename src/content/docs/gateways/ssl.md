---
title: SSL Wireless
description: SSL Wireless gateway integration.
---

Integration with [SSL Wireless](https://sslwireless.com).

## Configuration

```dotenv
BARTA_SSL_TOKEN=your-api-token
BARTA_SSL_SENDER_ID=your-sender-id
BARTA_SSL_CSMS_ID=optional-csms-id
```

## Usage

```php
Barta::driver('ssl')
    ->to('01712345678')
    ->message('Hello from SSL!')
    ->send();
```

## Bulk SMS

SSL Wireless uses a different endpoint for bulk. Barta handles this automatically:

```php
Barta::driver('ssl')
    ->to(['01712345678', '01812345678'])
    ->message('Bulk message')
    ->send();
```
