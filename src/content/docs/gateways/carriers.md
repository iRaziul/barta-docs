---
title: Carrier Direct
description: Grameenphone, Banglalink, and Robi integration.
---

Direct integration with Bangladeshi mobile carriers.

## Grameenphone

```dotenv
BARTA_GP_USERNAME=your-username
BARTA_GP_PASSWORD=your-password
BARTA_GP_CLI=2222
```

```php
Barta::driver('grameenphone')->to('01712345678')->message('Hello!')->send();
```

## Banglalink

```dotenv
BARTA_BL_USER_ID=your-user-id
BARTA_BL_PASSWORD=your-password
BARTA_BL_SENDER_ID=your-sender-id
```

```php
Barta::driver('banglalink')->to('01712345678')->message('Hello!')->send();
```

## Robi

```dotenv
BARTA_ROBI_USERNAME=your-username
BARTA_ROBI_PASSWORD=your-password
```

```php
Barta::driver('robi')->to('01712345678')->message('Hello!')->send();
```
