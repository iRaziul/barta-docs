---
title: Custom Drivers
description: Create drivers for any SMS gateway.
---

Extend Barta to support any SMS gateway.

## Step 1: Create the Driver

```php
namespace App\Sms\Drivers;

use Illuminate\Support\Facades\Http;
use Larament\Barta\Drivers\AbstractDriver;
use Larament\Barta\Data\ResponseData;
use Larament\Barta\Exceptions\BartaException;

final class CustomDriver extends AbstractDriver
{
    protected function sendSms(): ResponseData
    {
        $response = Http::withToken($this->config['api_token'])
            ->timeout($this->timeout)
            ->retry($this->retry, $this->retryDelay)
            ->post('https://api.custom.com/sms', [
                'to' => implode(',', $this->recipients),
                'message' => $this->message,
            ])->json();

        if ($response['status'] !== 'success') {
            throw new BartaException($response['error']);
        }

        return new ResponseData(success: true, data: $response);
    }

    protected function validateConfig(): void
    {
        if (empty($this->config['api_token'])) {
            throw new BartaException('api_token required');
        }
    }
}
```

## Step 2: Register the Driver

```php
// AppServiceProvider
use Larament\Barta\Facades\Barta;

public function boot(): void
{
    Barta::extend('custom', fn($app) => 
        new CustomDriver(config('barta.drivers.custom'))
    );
}
```

## Step 3: Add Configuration

```php
// config/barta.php
'custom' => [
    'api_token' => env('BARTA_CUSTOM_TOKEN'),
],
```

## Step 4: Use It

```php
Barta::driver('custom')
    ->to('01712345678')
    ->message('Hello!')
    ->send();
```
