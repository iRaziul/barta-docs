---
title: Response Handling
description: Work with the ResponseData object returned by Barta.
---

Every `send()` call returns a `ResponseData` object.

## ResponseData Properties

```php
readonly class ResponseData
{
    public bool $success;    // Operation succeeded
    public array $data;      // Raw API response
    public array $errors;    // Error messages
}
```

## Usage Example

```php
$response = Barta::to('01712345678')
    ->message('Hello!')
    ->send();

if ($response->success) {
    logger()->info('SMS sent', $response->data);
} else {
    logger()->warning('SMS failed', $response->errors);
}

// Convert to array
$array = $response->toArray();
```
