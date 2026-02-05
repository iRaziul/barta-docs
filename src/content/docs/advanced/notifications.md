---
title: Laravel Notifications
description: Integrate Barta with Laravel's notification system.
---

Barta provides a `barta` notification channel.

## Creating a Notification

```php
use Illuminate\Notifications\Notification;
use Larament\Barta\Notifications\BartaMessage;

class OrderShipped extends Notification
{
    public function via($notifiable): array
    {
        return ['barta'];
    }

    public function toBarta($notifiable): BartaMessage
    {
        return new BartaMessage(
            "Hi {$notifiable->name}, your order shipped!"
        );
    }
}
```

## Routing Notifications

Add to your model:

```php
public function routeNotificationForBarta($notification): string
{
    return $this->phone;
}
```

## Sending

```php
$user->notify(new OrderShipped());
```

## Custom Driver per Notification

```php
public function bartaDriver(): string
{
    return 'mimsms';
}
```
