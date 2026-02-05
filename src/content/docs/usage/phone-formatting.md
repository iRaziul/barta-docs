---
title: Phone Formatting
description: Automatic Bangladeshi phone number normalization.
---

Barta automatically normalizes Bangladeshi phone numbers.

## Automatic Formatting

All numbers are converted to `8801XXXXXXXXX` format:

| Input | Output |
| ----- | ------ |
| `1712345678` | `8801712345678` |
| `01712345678` | `8801712345678` |
| `8801712345678` | `8801712345678` |
| `+8801712345678` | `8801712345678` |

## Valid Number Patterns

```
8801[3-9]XXXXXXXX
```

Valid prefixes: 013, 014, 015, 016, 017, 018, 019

## Invalid Numbers

Invalid numbers throw a `BartaException`:

```php
use Larament\Barta\Exceptions\BartaException;

try {
    Barta::to('123456')->message('Hello')->send();
} catch (BartaException $e) {
    // "Invalid Bangladeshi mobile number: 123456"
}
```

## Using the Utility Directly

```php
use Larament\Barta\Helpers\Util;

$formatted = Util::formatPhoneNumber('01712345678');
// Returns: '8801712345678'
```
