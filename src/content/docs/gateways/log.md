---
title: Log Driver
description: Development driver for testing.
---

Development driver that logs SMS instead of sending.

## Configuration

No configuration required!

```dotenv
BARTA_DRIVER=log
```

## Usage

```php
Barta::driver('log')
    ->to('01712345678')
    ->message('Test message')
    ->send();
```

## Log Output

Check `storage/logs/laravel.log`:

```
[2024-01-15 10:30:45] local.INFO: [BARTA] Message sent {"recipients":["8801712345678"],"message":"Test message"}
```
