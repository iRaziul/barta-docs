---
title: Bulk SMS
description: Send SMS to multiple recipients at once.
---

Send SMS messages to multiple recipients in a single API call.

## Sending to Multiple Recipients

```php
use Larament\Barta\Facades\Barta;

Barta::to(['01712345678', '01812345678', '01912345678'])
    ->message('Hello everyone!')
    ->send();
```

## Mixed Number Formats

```php
$recipients = [
    '01712345678',      // With leading zero
    '1812345678',       // Without leading zero
    '+8801912345678',   // With country code
];

Barta::to($recipients)
    ->message('Flash sale starts now!')
    ->send();
```

All numbers are automatically normalized to `8801XXXXXXXXX` format.

## Queuing Large Lists

```php
collect($allPhones)->chunk(100)->each(function ($chunk) {
    Barta::to($chunk->toArray())
        ->message('Your message here')
        ->queue();
});
```
