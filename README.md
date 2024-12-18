# WaWa X TCRSS

TCRSS (Nuxt)

## Framework & Tools Used

- Vue 3
- Nuxt 3
- TypeScript
- Tailwind
- Nuxt UI

# Development

### API Document

Please visit https://api.tcrss.test/docs/index.html for API document.

### Requirement

- Node v20
- [api.tcrss repo](https://github.com/WaWaGroup/tcrss-api) สำหรับ Backend API

## Installation

1. Clone project (and initialize git flow if using SourceTree)
2. Create .env file by copy content from .env.example `cp .env.example .env`, Change .env content if needed.
3. run `npm ci` to install npm dependencies
4. Config custom domain (eg: https://app.tcrss.test) by
   running `valet proxy app.tcrss http://localhost:3000 --secure`, or manually edit nginx config file if using
   Laragon
5. Start development server by running `npm run dev`
6. Go to [https://app.tcrss.test](https://app.tcrss.test) to test your local website.
7. Create new feature branch to start working.

### Custom domain (Laragon)

ตั้งค่า Nginx proxy เพื่อ redirect custom domain หา localhost:3000

```
location / {
    proxy_redirect                      off;
    proxy_set_header Host               $host;
    proxy_set_header X-Real-IP          $remote_addr;
    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto  $scheme;
    proxy_read_timeout          1m;
    proxy_connect_timeout       1m;
    proxy_pass                          http://127.0.0.1:3000;
    
    # WebSocket support
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

## Development

Start your app in development mode:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
