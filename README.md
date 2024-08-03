# MAK APPLICATION

## initialise developement .env files

```sh
ln .env.example .env
```

## Start baas


- Start containers
   ```sh
   docker-compose -p app up -d directus database cache
   ```


- Replace (`DIRECTUS_ADMIN_TOKEN`) or (`DIRECTUS_ADMIN_EMAIL` and `DIRECTUS_ADMIN_PASSWORD`) value on environement variable


- Setup directus with `directus-sync-config`
   ```sh
   pnpm baas:push
   ```
