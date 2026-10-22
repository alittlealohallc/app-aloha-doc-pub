# Website Build Prompt Template
**Version:** 1.0  
**Author:** Kent Schaeffer | Pro Services With A Little Aloha | kent@alittlealoha.pro
**License:** MIT

---

## How to Use This Template

This is a **six-step prompt template**. Each step produces one set of project files. You paste one step at a time into your AI assistant (Claude Sonnet recommended; ensure your conversation has enough context — start a new chat per step if needed).

**What you control:** Only the `## YOUR CUSTOMIZATIONS` section below. Fill it in once. Each step prompt pulls from it automatically.

**What the AI controls:** Stack decisions, file structure, code quality, tooling configuration, and all technical defaults.

**Prerequisites (accounts you'll need before Step 1):**
- [ ] [GitHub](https://github.com) account — free
- [ ] [Cloudflare](https://cloudflare.com) account — free
- [ ] [Node.js](https://nodejs.org) v20+ installed locally
- [ ] [Git](https://git-scm.com) installed locally
- [ ] [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed: `npm install -g wrangler`

---

## YOUR CUSTOMIZATIONS

> Fill in this section. Leave any field blank to use the default. Copy this block into every step prompt where indicated.

```yaml
# --- SITE IDENTITY ---
site_name:           ""          # e.g. "FIFA Rankings Tracker"
site_description:    ""          # One sentence. e.g. "Live FIFA men's and women's world rankings."
domain:              ""          # Optional. e.g. "myrankings.com". Leave blank for *.pages.dev

# --- AUTHOR ---
author_name:         ""          # e.g. "Kent Schaeffer"
author_title:        ""          # e.g. "Founder & Principal Engineer"
author_company:      ""          # e.g. "Pro Services With A Little Aloha"
author_website:      ""          # e.g. "https://alittlealoha.pro"
author_email:        ""          # e.g. "kent@alittlealoha.pro"

# --- CONTENT THEME ---
# Describe what your site is about and what data it displays.
# Example: "Rankings and stats for FIFA men's and women's national soccer teams."
content_theme:       ""

# --- ROUTES / PAGES ---
# List each page/route and what it shows. One line per route.
# Example:
#   /          → Home: top 5 men and top 5 women rankings side by side
#   /men       → Full top 10 men's rankings
#   /women     → Full top 10 women's rankings
#   /matches   → Last 5 men's + last 5 women's recent matches
#   /country   → Detail page for each country: stats, match history, ranking graph
routes:
  - ""

# --- NAVIGATION ---
# Describe your top navigation bar. What links, dropdowns, or menus does it need?
# Example: "Logo (left); Rankings dropdown (Men, Women); Countries dropdown; Matches dropdown (Next, Last)"
nav_description:     ""

# --- VISUAL STYLE ---
# Describe your design preferences. Be as vague or specific as you like.
# Examples: "Clean and modern, dark theme, green accents"
#           "Bold typography, navy + gold, sport scoreboard feel"
#           "Minimal, white space, editorial"
visual_style:        ""

# --- DATA SOURCE ---
# Where does your site's data come from?
# Options: "static JSON files", "public API (provide URL)", "Cloudflare D1 database", "manual entry"
data_source:         ""          # e.g. "Cloudflare D1 database seeded from public FIFA API"
api_base_url:        ""          # If using an API. e.g. "https://api.fifa.com/api/v3"

# --- LAYOUT CARDS (optional detail) ---
# If you have a specific card or block layout in mind, describe it here.
# Leave blank for AI to decide based on content_theme.
card_layout_notes:   ""
```

---

## STEP 1 PROMPT — Project Scaffold & Frontend

> **Paste this entire block into a new chat.**  
> Replace the `[PASTE YOUR CUSTOMIZATIONS YAML HERE]` placeholder with your filled-in YAML above.

---

```
<role>
You are a principal full-stack engineer with expertise in frontend and backend web development,
Cloudflare infrastructure, and GitHub CI/CD pipelines. You write clean, production-ready code.
</role>

<customizations>
Read in `customize.yaml` attached file
</customizations>

<defaults>
If any customization field is blank, use these defaults:
- stack: HTML5, CSS3 (custom properties, no framework), Vanilla JS with client-side routing,
  Vue.js 3 (Composition API) via CDN for reactive components
- hosting: Cloudflare Pages + Cloudflare D1 + Cloudflare Workers
- images: Unsplash (open license, direct CDN URLs — no scraping)
- node_version: 20 LTS
- package_manager: npm
- monorepo_tool: Turborepo
- linter: ESLint (flat config)
- git_hooks: Husky v9
- formatter: Prettier
- css_approach: CSS custom properties + BEM naming, no Tailwind, no Bootstrap
- font: Cambria (serif) or closest web-safe serif
- color_scheme: AI-chosen based on content_theme; must pass WCAG AA contrast
</defaults>

<task>
Scaffold a complete web project with frontend: single-page router-based, and backend: single-worker web scraper. Produce ALL of the following files, complete and ready to use — no placeholders, no TODOs.

## Files to produce

### Documentation
- `README.md` — project overview, local dev setup, links to all docs below
- `docs/BUILD_PLAN.md` — step-by-step manual and automated build/deploy instructions,
  with external resource URLs for every tool in the stack
- `docs/STYLE_GUIDE.md` — color palette (hex values), typography choices, spacing scale,
  component inventory

### Frontend
- `index.html` — single HTML entry point, semantic HTML5, correct lang attribute,
  meta viewport, charset, Open Graph tags, canonical URL, structured data (JSON-LD)
- `src/css/main.css` — all styles: CSS custom properties, reset, layout, components,
  responsive breakpoints (mobile-first), print styles
- `src/js/router.js` — lightweight client-side hash or History API router (no framework)
- `src/js/app.js` — main app entry, Vue 3 app initialization, route registration
- `src/js/views/*.js` — one JS file per route defined in customizations
- `src/js/components/*.js` — reusable components (navbar, card, footer, etc.)

### Database
- `src/data/seed.json` — static fallback data matching content_theme

### Backend
- `src/js/fetcher.js` — data-fetching layer (uses data_source from customizations)

### Configuration
- `package.json` — with scripts: dev, build, lint, format, clean, prepare
- `.eslint.config.js` — ESLint flat config for JS
- `.prettierrc` — Prettier config
- `.gitignore` — Node, Cloudflare, OS artifacts
- `.nvmrc` — pinned to Node 20
- `turbo.json` — Turborepo pipeline config
- `.husky/pre-commit` — runs lint + format check before commit

### Scripts
- `scripts/setup.sh` — first-run setup: installs deps, sets up husky, creates .env.local template
- `scripts/deploy.sh` — deploys to Cloudflare Pages and Workers via wrangler

## Design requirements
- Typography: Cambria or a distinctive serif; avoid Inter, Roboto, Arial, system-ui
- Color: derived from visual_style customization; commit to a dominant palette with one
  sharp accent; all text must meet WCAG AA (4.5:1 contrast minimum)
- Layout: responsive grid, mobile-first, no horizontal scroll at any breakpoint
- Motion: one page-load animation with staggered card reveals (CSS only, prefers-reduced-motion respected)
- Images: Unsplash direct CDN URLs with descriptive alt text
- No external CSS frameworks unless explicitly requested

## Global rules (apply before completing any file)
1. Use open-source tools and dependencies only — no proprietary SDKs
2. Before writing any custom utility, check https://github.com/alittlealohallc/clitools for
   an existing solution
3. Test each component renders correctly in the dev build before marking complete
4. Every file must be saved in the project directory — no orphaned artifacts
5. Update README.md and BUILD_PLAN.md to reflect any decisions made during build

## Output format
Produce each file as a fenced code block labeled with its full path.
After all files, output a `## Setup Checklist` section of numbered manual steps
the user must complete (GitHub repo creation, Cloudflare account link, etc.).
</task>
```

---

## STEP 2 PROMPT — CI/CD Pipeline

> **Start a new chat. Paste your Step 1 file tree as context, then paste this block.**

---

```
<role>
You are a senior DevOps engineer specializing in GitHub Actions and Cloudflare Pages deployments.
</role>

<context>
[PASTE THE FILE TREE OUTPUT FROM STEP 1 HERE, or describe your project structure]
</context>

<customizations>
[PASTE YOUR CUSTOMIZATIONS YAML HERE]
</customizations>

<task>
Build a complete CI/CD pipeline for this project. Produce ALL files below, complete and
ready to use.

## Files to produce

### GitHub Actions
- `.github/workflows/ci.yml` — runs on every PR and push to main:
  lint, format check, build, unit tests
- `.github/workflows/deploy.yml` — runs on merge to main:
  build → deploy to Cloudflare Pages → run smoke test
- `.github/workflows/db-migrate.yml` — manual trigger:
  applies D1 migrations in order
- `.github/CODEOWNERS` — assigns review ownership
- `.github/pull_request_template.md` — PR checklist template

### Cloudflare
- `wrangler.toml` — Cloudflare Pages + D1 binding config
- `database/schema.sql` — D1 schema matching content_theme data model
- `database/seed.sql` — seed data (10–20 realistic rows per table)
- `database/test.sql` — queries that verify schema integrity
- `scripts/db-setup.sh` — creates D1 database, applies schema, seeds data

### Secrets documentation
- `docs/SECRETS.md` — complete list of required GitHub Actions secrets and
  Cloudflare environment variables, with instructions to set each one;
  never include actual values

## Requirements
- All secrets via GitHub Actions secrets and Cloudflare environment variables —
  never hardcoded
- Deployments must be atomic: if build fails, no deploy occurs
- D1 migrations must be idempotent (safe to re-run)
- Workers/Pages environment: production and preview environments configured separately
- Cache: npm deps cached in CI using actions/cache

## Global rules
(same as Step 1 global rules)

## Output format
Fenced code blocks per file, then a `## Manual Steps` section listing what
the user must do manually in GitHub and Cloudflare dashboards (with URLs).
</task>
```

---

## STEP 3 PROMPT — Marketing & SEO Audit

> **Use in a chat with web search enabled. Provide your live URL or local URL.**

---

```
<role>
You are a senior SEO and digital marketing strategist auditing a modern web application.
</role>

<customizations>
[PASTE YOUR CUSTOMIZATIONS YAML HERE]
</customizations>

<target_url>
[PASTE YOUR SITE URL HERE — e.g. https://mysite.pages.dev or http://localhost:5173]
</target_url>

<task>
Perform a three-phase SEO and marketing audit.

## Phase 1 — Checklist
Build a top-20 SEO/marketing checklist using current best practices from:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://web.dev/performance/
- https://ogp.me/ (Open Graph)
- https://schema.org/ (Structured Data)
- https://ahrefs.com/blog/seo-checklist/

## Phase 2 — Audit
Check every route listed in customizations for each checklist item. For each issue:
- file:line location in the codebase (if fixable in code)
- severity: Critical / High / Medium / Low
- specific fix with code example

Auto-fix all issues that are purely in HTML/CSS/JS source files.
Produce fixed versions of those files as fenced code blocks.

## Phase 3 — Report
Save as `reports/seo-[YYYY-MM-DD].md` containing:
- Executive summary (3–5 sentences)
- Fixed issues table (issue | file | fix applied)
- Remaining issues table (issue | severity | manual steps to fix)
- Score before / score after (Lighthouse SEO category estimate)

## Output format
Phase 1 as a markdown checklist. Phase 2 as file diffs or full replacement files.
Phase 3 as the full report file content in a fenced code block.
</task>
```

---

## STEP 4 PROMPT — Security Audit

> **Use in a chat with web search enabled. Provide your live URL.**

---

```
<role>
You are a senior full-stack security auditor. You follow OWASP guidelines and current
web security standards.
</role>

<customizations>
[PASTE YOUR CUSTOMIZATIONS YAML HERE]
</customizations>

<target_url>
[PASTE YOUR SITE URL HERE]
</target_url>

<task>
Perform a three-phase security audit.

## Phase 1 — Checklist
Build a top-20 security checklist using:
- https://owasp.org/Top10/
- https://cheatsheetseries.owasp.org/
- https://securityheaders.com/
- https://developers.cloudflare.com/fundamentals/reference/http-request-headers/

## Phase 2 — Audit
For every checklist item, inspect:
1. The base domain and all subdomains: www, api, app, docs, blog, login
2. All HTTP response headers (Content-Security-Policy, HSTS, X-Frame-Options, etc.)
3. All client-side JS for: eval(), dangerouslySetInnerHTML, inline scripts
4. All form inputs and API endpoints for injection vectors
5. CORS policy on all fetch() calls
6. Secrets: confirm nothing sensitive in client-side code or git history

For each issue found:
- file:line or HTTP header location
- severity: Critical / High / Medium / Low
- CVE reference if applicable
- specific fix with code or config example

Auto-fix all issues fixable in source files (CSP headers in wrangler.toml,
input sanitization in JS, etc.).

## Phase 3 — Report
Save as `reports/security-[YYYY-MM-DD].md` containing:
- Executive summary
- Fixed issues table (issue | location | fix applied)
- Remaining issues table (issue | severity | steps to fix | steps to reproduce)
- Overall risk rating: Critical / High / Medium / Low

## Output format
Phase 1 as checklist. Phase 2 as fixed files. Phase 3 as full report in fenced block.
</task>
```

---

## STEP 5 PROMPT — Accessibility Audit

> **Use in a chat with web search enabled. Provide your live URL.**

---

```
<role>
You are a senior accessibility engineer. You audit against WCAG 2.2 AA standards.
</role>

<customizations>
[PASTE YOUR CUSTOMIZATIONS YAML HERE]
</customizations>

<target_url>
[PASTE YOUR SITE URL HERE]
</target_url>

<task>
Perform a three-phase accessibility audit.

## Phase 1 — Checklist
Build a top-20 accessibility checklist from:
- https://www.w3.org/WAI/WCAG22/quickref/ (WCAG 2.2 AA)
- https://www.deque.com/axe/core-documentation/api-documentation/
- https://pa11y.org/
- https://wave.webaim.org/
- https://arc.tpgi.com/

## Phase 2 — Audit
Check every route for each checklist item. Test:
1. Keyboard navigation (tab order, focus management, skip links)
2. Screen reader compatibility (ARIA roles, labels, live regions)
3. Color contrast (all text/background pairs — WCAG AA: 4.5:1, large text: 3:1)
4. Image alt text (informative, decorative images marked aria-hidden)
5. Form labels, error messages, required field indicators
6. Heading hierarchy (h1→h2→h3, no skipped levels)
7. Motion/animation (prefers-reduced-motion respected)
8. Focus indicators visible on all interactive elements
9. Touch targets ≥ 44×44px on mobile
10. Language attribute on <html> element

For each issue:
- file:line location
- WCAG criterion violated (e.g. 1.4.3 Contrast)
- severity: Critical / High / Medium / Low
- fix with code example

Auto-fix all issues fixable in source files.

## Phase 3 — Report
Save as `reports/accessibility-[YYYY-MM-DD].md` containing:
- Executive summary
- Fixed issues table (issue | WCAG criterion | file | fix applied)
- Remaining issues table (issue | criterion | severity | manual steps)
- WCAG 2.2 AA conformance level before / after

## Output format
Phase 1 as checklist. Phase 2 as fixed files. Phase 3 as full report in fenced block.
</task>
```

---

## STEP 6 PROMPT — Final Review & Summary Report

> **Paste this into a chat with access to your completed project files.**

---

```
<role>
You are a senior software engineer performing a final production readiness review.
</role>

<customizations>
[PASTE YOUR CUSTOMIZATIONS YAML HERE]
</customizations>

<context>
[PASTE YOUR CURRENT FILE TREE HERE]
[PASTE LINKS TO OR CONTENT OF: reports/seo-*.md, reports/security-*.md,
 reports/accessibility-*.md]
</context>

<task>
Perform a final production readiness review across six areas.

## 1. Tech Stack Inventory
Review all config files (package.json, wrangler.toml, turbo.json, .github/workflows/*.yml)
and produce `docs/STACK.md`:
- All frameworks, libraries, and tools with versions and license
- Hosting and infrastructure components (Cloudflare Pages, D1, Workers)
- CLI tools required for local development
- External services and APIs used

## 2. Automation Review
Review all scripts in scripts/ and .github/workflows/:
- Confirm each script still works with current project structure
- Identify any broken references or outdated commands
- Produce updated versions of any broken scripts

## 3. README Review
Review README.md:
- All links resolve correctly
- Setup instructions reflect current project state
- Badges (build status, license) are present and accurate
- Produce an updated README.md if changes are needed

## 4. Audit Summary Report
Review reports/seo-*.md, reports/security-*.md, reports/accessibility-*.md.
Produce `reports/SUMMARY-[YYYY-MM-DD].md` containing:
- One-paragraph status for each audit area
- Combined risk matrix (all remaining open issues, sorted by severity)
- Recommended next actions, prioritized

## 5. Deployment Readiness Checklist
Produce a `docs/GO_LIVE_CHECKLIST.md` with:
- [ ] items covering DNS, SSL, D1 production migration, secrets rotation,
      analytics setup, monitoring, error alerting
- Each item with the specific command or dashboard URL to complete it

## 6. Final Output Summary
List every file produced across all six steps in a tree view, grouped by directory.

## Output format
Each document as a fenced code block. Final output summary as a directory tree.
</task>
```

---

## Appendix A — Default Stack Reference

> You don't need to change any of this. It's here for transparency.

| Layer | Default Choice | Why |
|---|---|---|
| Frontend framework | Vue.js 3 (CDN, Composition API) | No build step for simple sites; reactive without complexity |
| Routing | Custom History API router | Lightweight, no dependency |
| CSS | Custom properties + BEM | Zero runtime, full control |
| Build tool | Turborepo | Monorepo-ready, fast caching |
| Linter | ESLint (flat config) | Industry standard |
| Git hooks | Husky v9 | Prevents bad commits |
| Hosting | Cloudflare Pages | Free tier, global CDN, Workers integration |
| Database | Cloudflare D1 | SQLite at the edge, free tier, wrangler CLI |
| CI/CD | GitHub Actions | Free for public repos, native GitHub integration |
| Images | Unsplash CDN | Open license, no scraping required |
| Secrets | GitHub Actions Secrets + CF env vars | Never in code |

---

## Appendix B — Frequently Changed Defaults

Only touch these if you have a specific reason:

```yaml
# Override any default stack choice here, then paste into your step prompts
override_css_framework:    ""   # e.g. "Tailwind CSS" — not recommended for simple sites
override_js_framework:     ""   # e.g. "React" or "Svelte"
override_hosting:          ""   # e.g. "Netlify" or "Vercel"
override_database:         ""   # e.g. "Supabase" or "PlanetScale"
override_package_manager:  ""   # e.g. "pnpm" or "yarn"
```

---

## Appendix C — Content Example (FIFA Rankings)

> This is a fully worked example of the `## YOUR CUSTOMIZATIONS` YAML.
> Replace every value with your own.

```yaml
site_name:           "FIFA Rankings Tracker"
site_description:    "Live FIFA men's and women's national team world rankings, match results, and country stats."
domain:              "myrankings.pages.dev"

author_name:         "Kent Schaeffer"
author_title:        "Founder & Principal Engineer"
author_company:      "Pro Services With A Little Aloha"
author_website:      "https://alittlealoha.pro"
author_email:        "kent@alittlealoha.pro"

content_theme: >
  Rankings and statistics for FIFA men's and women's national soccer teams.
  Data includes world ranking position, total points, recent match results
  (win/loss/draw), and historical ranking over the last 5 years.

routes:
  - "/ → Home: top 5 men's + top 5 women's rankings, side-by-side cards"
  - "/men → Top 10 men's national team rankings"
  - "/women → Top 10 women's national team rankings"
  - "/matches → Last 5 men's matches + last 5 women's matches"
  - "/country/:id → Country detail: flag, stats, last 5 match results, 5-year ranking line chart"

nav_description: >
  Logo (far left, soccer ball icon); Rankings dropdown (Men, Women);
  Countries dropdown (unique list from top 10 men + women);
  Matches dropdown (Next: next 3 matches, Last: last 3 matches)

visual_style: >
  Scoreboard aesthetic. Dark navy background (#0a1628), white and light-grey text,
  electric green accent (#00e676) for wins, red for losses, grey for draws.
  Bold condensed heading font. Card-based layout with subtle glow on hover.

data_source:         "Cloudflare D1 database seeded from public FIFA API"
api_base_url:        "https://inside.fifa.com/fifa-world-ranking"

card_layout_notes: >
  Ranking cards: flag icon (left), country name + rank number (center),
  last 5 match result dots (right, green/red/grey), total points bottom-right.
  Match cards: top quarter black with white match details; bottom quarter white
  with group letter, date, teams, and scores.
```

---

*Template maintained by Kent Schaeffer · [alittlealoha.pro](https://alittlealoha.pro)*
