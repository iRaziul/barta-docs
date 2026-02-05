---
title: API Reference
description: Complete API reference.
---

## Barta Facade

| Method | Returns | Description |
| ------ | ------- | ----------- |
| `driver(?string)` | `AbstractDriver` | Get driver |
| `to(string\|array)` | `self` | Set recipient(s) |
| `message(string)` | `self` | Set content |
| `send()` | `ResponseData` | Send now |
| `queue(?string, ?string)` | `PendingDispatch` | Queue |
| `extend(string, Closure)` | `void` | Register driver |

## ResponseData

| Property | Type | Description |
| -------- | ---- | ----------- |
| `$success` | `bool` | Succeeded |
| `$data` | `array` | API response |
| `$errors` | `array` | Errors |

| Method | Returns |
| ------ | ------- |
| `toArray()` | `array` |

## BartaException

| Method | Description |
| ------ | ----------- |
| `invalidNumber(string)` | Invalid phone |
| `missingRecipient()` | No recipient |
| `missingMessage()` | No message |

## Util

| Method | Returns |
| ------ | ------- |
| `formatPhoneNumber(string)` | `string` |
