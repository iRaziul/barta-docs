---
title: Infobip
description: Infobip international gateway.
---

Integration with [Infobip](https://infobip.com).

## Configuration

```dotenv
BARTA_INFOBIP_BASE_URL=https://api.infobip.com
BARTA_INFOBIP_USERNAME=your-username
BARTA_INFOBIP_PASSWORD=your-password
BARTA_INFOBIP_SENDER_ID=your-sender-id
```

## Usage

```php
Barta::driver('infobip')
    ->to('01712345678')
    ->message('Hello from Infobip!')
    ->send();
```

## Response Status

| Status | Meaning |
| ------ | ------- |
| PENDING | Queued |
| SENT | Delivered to network |
| DELIVERED | Confirmed |
| REJECTED | Rejected |
