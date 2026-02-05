---
title: MimSMS
description: MimSMS gateway integration.
---

Integration with [MimSMS](https://mimsms.com).

## Configuration

```dotenv
BARTA_MIMSMS_USERNAME=your-username
BARTA_MIMSMS_API_KEY=your-api-key
BARTA_MIMSMS_SENDER_ID=your-sender-id
```

## Usage

```php
Barta::driver('mimsms')
    ->to('01712345678')
    ->message('Hello from MimSMS!')
    ->send();
```
