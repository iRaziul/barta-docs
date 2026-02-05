---
title: Testing
description: Test SMS functionality in your application.
---

## Use Log Driver

```dotenv
# .env.testing
BARTA_DRIVER=log
```

## Fake HTTP Requests

```php
use Illuminate\Support\Facades\Http;

it('sends sms', function () {
    Http::fake([
        'smsplus.sslwireless.com/*' => Http::response(['status' => 'SUCCESS']),
    ]);

    config()->set('barta.default', 'ssl');
    
    $response = Barta::to('01712345678')->message('Test')->send();

    expect($response->success)->toBeTrue();
});
```

## Test Notifications

```php
use Illuminate\Support\Facades\Notification;

it('sends notification', function () {
    Notification::fake();

    $user->notify(new OrderShipped());

    Notification::assertSentTo($user, OrderShipped::class);
});
```

## Test Queued SMS

```php
use Illuminate\Support\Facades\Bus;
use Larament\Barta\Jobs\SendSmsJob;

it('queues sms', function () {
    Bus::fake();

    Barta::to('01712345678')->message('Test')->queue();

    Bus::assertDispatched(SendSmsJob::class);
});
```
