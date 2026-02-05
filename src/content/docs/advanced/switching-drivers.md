---
title: Switching Drivers
description: Use different SMS gateways at runtime.
---

Use different gateways for different purposes.

## Runtime Selection

```php
Barta::driver('ssl')->to('01712345678')->message('Via SSL')->send();
Barta::driver('esms')->to('01712345678')->message('Via eSMS')->send();
```

## Multi-Gateway Architecture

```php
class SmsService
{
    public function sendOtp(string $phone, string $otp): void
    {
        Barta::driver('ssl')
            ->to($phone)
            ->message("Your OTP is {$otp}")
            ->send();
    }

    public function sendPromotion(array $phones, string $message): void
    {
        Barta::driver('bulksms')
            ->to($phones)
            ->message($message)
            ->queue();
    }
}
```

## Fallback Strategy

```php
function sendWithFallback(string $phone, string $message): bool
{
    foreach (['ssl', 'esms', 'mimsms'] as $driver) {
        try {
            $response = Barta::driver($driver)
                ->to($phone)->message($message)->send();
            if ($response->success) return true;
        } catch (BartaException $e) {
            continue;
        }
    }
    return false;
}
```
