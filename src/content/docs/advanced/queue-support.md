---
title: Queue Support
description: Dispatch SMS to background jobs.
---

Dispatch SMS messages to background jobs for better performance.

## Basic Queuing

```php
Barta::to('01712345678')
    ->message('This will be queued')
    ->queue();
```

## Specifying Queue

```php
// Specific queue
Barta::to('01712345678')
    ->message('Priority message')
    ->queue('sms');

// Specific connection and queue
Barta::to('01712345678')
    ->message('Redis queue')
    ->queue('sms', 'redis');
```

## Queued Bulk SMS

```php
Barta::to(['01712345678', '01812345678'])
    ->message('Queued bulk message')
    ->queue();
```

## Queue Worker

Make sure your queue worker is running:

```bash
php artisan queue:work
```
