---
title: Error Handling
description: Handle exceptions gracefully.
---

All Barta errors throw `BartaException`.

## Basic Error Handling

```php
use Larament\Barta\Exceptions\BartaException;

try {
    Barta::to('01712345678')
        ->message('Hello!')
        ->send();
} catch (BartaException $e) {
    logger()->error('SMS failed: ' . $e->getMessage());
}
```

## Exception Types

| Exception | Cause |
| --------- | ----- |
| `invalidNumber()` | Invalid phone format |
| `missingRecipient()` | No `->to()` called |
| `missingMessage()` | No `->message()` called |
| Config errors | Missing credentials |
| Gateway errors | API returned error |

## Fallback Example

```php
function sendWithFallback($phone, $msg): bool
{
    foreach (['ssl', 'esms'] as $driver) {
        try {
            $r = Barta::driver($driver)->to($phone)->message($msg)->send();
            if ($r->success) return true;
        } catch (BartaException $e) {
            continue;
        }
    }
    return false;
}
```
