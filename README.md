# A Little Aloha LLC Public Documentation Repository

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## Quick Start

### Clone Existing Repository

```bash
# Clone repository
git clone https://github.com/alittlealohallc/app-aloha-doc-pub.git
cd app-aloha-doc-pub

# Install dependencies
npm ci

# Start local development server
npm run dev

```

### Create New Starlight Project

```bash
npm create astro@latest -- --template starlight
```

---

## Development

```bash
# Start development server
npm run dev

# Preview production build locally
npm run build
npm run preview

# Run linter
npm run lint

# Run TypeScript/Astro type checking
npm run check
```

---

## Deployment

### Via GitHub Actions (Recommended)

Push to main branch triggers automatic deployment:

```bash
git add .
git commit -m "Update documentation"
git push origin main
Deployment status visible in Actions tab of GitHub repository.
```

### Via CLI (Manual)

Requires Wrangler CLI authenticated:

```bash
# Authenticate first time
wrangler login

# Deploy manually
npm run deploy
```

### Via Cloudflare Dashboard

1. Navigate to **[Cloudflare Pages](https://pages.cloudflare.com/)**
2. Select project: `app-aloha-doc-pub`
3. Trigger new deployment manually

---

## Environment Variables

Required for production builds:

| Variable | Description | Example |  
|-----|-------|-------|  
| `SITE_URL` | Production site URL | `https://pub.alittlealoha.pro` | 
| `ASTRO_PUBLIC_SITE_URL` | Public-facing URL | `https://pub.alittlealoha.pro` |  

Set in GitHub Actions repository secrets or `.env.production` locally.

### Security Notes

No authentication required. Content is intentionally public.

### Troubleshooting

#### Build Fails in GitHub Actions

Check Node.js version alignment:

```bash
node --version  # Should be 24.x.x
```

#### Local Preview Different from Production

Ensure environment variables are set:

```bash
export SITE_URL=https://llc.alittlealoha.pro
npm run preview
```

#### Wrangler Authentication Errors

Re-authenticate and verify permissions:

```bash
wrangler logout
wrangler login
# Ensure token has Pages:Edit and Account:Read scopes
```

### Maintenance

#### Updating Dependencies

```bash
npm update
npm audit fix
git commit -m "Update dependencies"
```

#### Clearing Build Cache

```bash
npm run clean
npm ci
npm run build
```

### License

See [LICENSE](LICENSE) file for details.

_Simple solutions to complex technical problems. Delivered With A Little Aloha._

---
