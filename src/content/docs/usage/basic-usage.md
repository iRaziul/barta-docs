---
title: Basic Usage
description: Learn how to send SMS messages using Barta.
---

Send SMS messages using Barta's clean, expressive API.

## Sending a Simple SMS

```php
use Larament\Barta\Facades\Barta;

Barta::to('01712345678')
    ->message('Your OTP is 1234')
    ->send();
```

## Method Chaining

| Method | Description |
| ------ | ----------- |
| `to(string\|array $numbers)` | Set recipient(s) |
| `message(string $message)` | Set SMS content |
| `send()` | Send immediately |
| `queue()` | Queue for background processing |
| `driver(string $driver)` | Use specific gateway |

## Using a Specific Driver

```php
Barta::driver('esms')
    ->to('01712345678')
    ->message('Hello from eSMS!')
    ->send();
```

## Checking the Response

```php
$response = Barta::to('01712345678')
    ->message('Hello!')
    ->send();

if ($response->success) {
    echo 'Message sent!';
    $data = $response->data; // Raw API response
}

$array = $response->toArray();
// ['success' => true, 'data' => [...], 'errors' => []]
```
