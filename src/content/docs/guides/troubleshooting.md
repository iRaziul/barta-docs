---
title: Troubleshooting
description: Common issues and solutions.
---

## Configuration Issues

### "Please set api_token for X"

1. Check `.env` has correct variables
2. Run `php artisan config:clear`
3. Verify variable names

## Phone Number Issues

### "Invalid Bangladeshi mobile number"

Valid formats:
- `01712345678`
- `+8801712345678`
- `8801712345678`

## Gateway Issues

### Authentication Errors
- Verify API tokens/keys
- Check credentials haven't expired
- Ensure account is active

### Timeout Errors

```dotenv
BARTA_REQUEST_TIMEOUT=30
```

## Queue Issues

### SMS Not Sending

1. Run `php artisan queue:work`
2. Check failed_jobs table

```bash
php artisan queue:failed
php artisan queue:retry {id}
```
