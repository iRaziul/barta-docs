---
title: Installation
description: Get Barta up and running in your Laravel application.
---

Get Barta up and running in your Laravel application in just a few minutes.

## Requirements

- **PHP** 8.2 or higher
- **Laravel** 11.x or 12.x
- **Composer** for package management

## Step 1: Install via Composer

```bash
composer require larament/barta
```

## Step 2: Run the Install Command

```bash
php artisan barta:install
```

This publishes the `config/barta.php` configuration file.

## Step 3: Configure Your Gateway

Add your SMS gateway credentials to `.env`:

```dotenv
BARTA_DRIVER=ssl

BARTA_SSL_TOKEN=your-api-token
BARTA_SSL_SENDER_ID=your-sender-id
```

## Step 4: Verify Installation

```php
use Larament\Barta\Facades\Barta;

// Use 'log' driver to test without sending real SMS
Barta::driver('log')
    ->to('01712345678')
    ->message('Hello from Barta!')
    ->send();
```

Check `storage/logs/laravel.log` to verify the message was logged.

:::tip
Use the `log` driver during development to avoid sending real SMS.
:::
