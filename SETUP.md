# Cloudflare API Token Setup Guide

## Generating the Token

1. Navigate to https://dash.cloudflare.com/profile/api-tokens
2. Click **Create Token**
3. Choose **Custom Token** (not template)
4. Name: `GitHub Actions Deploy - Docs`
5. Permissions:

```text
Account
 └── Cloudflare Pages
  ├── Edit (✓)
  └── Read (✓)

Account
 └── Account
  └── Read (✓)
```

6. Set **Resource** to include specific account or "All accounts"
7. Set **Token expiry** to "No expiry" (rotate quarterly manually)
8. Copy token immediately — shown only once

## Adding to GitHub Repository Secrets

1. Go to repository → Settings → Secrets and variables → Actions
2. Click **New repository secret**
3. Name: `CLOUDFLARE_API_TOKEN`
4. Value: Paste token from above
5. Click **Add secret**

Repeat for both repositories (`app-aloha-doc-llc` and `app-aloha-doc-pub`).

---

## Pre-Commit Hook for Secret Scanning (Optional)

**File:** `.githooks/pre-commit`

```bash
#!/bin/bash

echo "🔍 Running pre-commit secret scan..."

# Patterns to detect
PATTERNS=(
'api[_-]?key\s*[=:]\s*["\x27][^"\x27]{10,}'
'secret[_-]?key\s*[=:]\s*["\x27][^"\x27]{10,}'
'password\s*[=:]\s*["\x27][^"\x27]{6,}'
'token\s*[=:]\s*["\x27][^"\x27]{10,}'
'AWS_SECRET_ACCESS_KEY'
'PRIVATE_KEY'
)

FOUND_ISSUES=false

for pattern in "${PATTERNS[@]}"; do
if git diff --cached --name-only | xargs grep -i "$pattern" 2>/dev/null; then
 echo "❌ Potential secret detected matching: $pattern"
 FOUND_ISSUES=true
fi
done

if [ "$FOUND_ISSUES" = true ]; then
echo ""
echo "⛔ Commit blocked. Remove sensitive data before committing."
echo "💡 Use environment variables or .env files instead (already in .gitignore)"
exit 1
fi

echo "✅ No secrets detected. Proceeding with commit."
exit 0
Install hook:

chmod +x .githooks/pre-commit
git config core.hookspath .githooks
```

---

## Complete File Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```text
app-aloha-doc-pub/
├── .github/
│   └── workflows/
│       └── deploy-pub-docs.yml
├── .gitignore
├── .githooks/
│   └── pre-commit
├── astro.config.mjs
├── package.json
├── README.md
├── src/
│   ├── content/
│   │   └── docs/
│   └── styles/
│       └── custom.scss
└── public/
    ├── favicon.svg
    └── logo-public.svg
```

---


## Execution Order

Run these commands in sequence to complete setup:

```bash
# Step 1: Generate Cloudflare API Token (do this in browser)
# https://dash.cloudflare.com/profile/api-tokens

# Step 2: Add token to both GitHub repositories
# Settings → Secrets and variables → Actions → New repository secret

# Step 3: Clone and initialize LLC repo
cd ~/projects
git clone https://github.com/alittlealohallc/app-aloha-doc-llc.git
cd app-aloha-doc-llc
npm ci

# Step 4: Clone and initialize public repo
cd ..
git clone https://github.com/alittlealohallc/app-aloha-doc-pub.git
cd app-aloha-doc-pub
npm ci

# Step 5: Create initial content structure
mkdir -p src/content/docs
echo "# Welcome" > src/content/docs/index.md

# Step 6: Test local build
npm run build

# Step 7: Configure DNS in Cloudflare dashboard
# Create CNAME records for llc.alittlealoha.pro and pub.alittlealoha.pro

# Step 8: Push to trigger first deployment
git add .
git commit -m "Initial documentation structure"
git push origin main

# Step 9: Configure Zero Trust Access for LLC only
# https://one.cloudflare.com/access/apps → Add application

# Step 10: Verify both deployments
curl -I https://llc.alittlealoha.pro    # Should show 403 + Access login
curl -I https://pub.alittlealoha.pro   # Should show 200 OK
```

---

_Simple solutions to complex technical problems. Delivered With A Little Aloha._

---
