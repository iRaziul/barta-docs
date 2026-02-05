---
title: eSMS
description: eSMS gateway integration.
---

Integration with [eSMS](https://esms.com.bd).

## Configuration

```dotenv
BARTA_ESMS_TOKEN=your-api-token
BARTA_ESMS_SENDER_ID=your-sender-id
```

## Usage

```php
Barta::driver('esms')
    ->to('01712345678')
    ->message('Hello from eSMS!')
    ->send();
```

## API Details

- **Base URL**: `https://login.esms.com.bd/api/v3`
- **Auth**: Bearer token
