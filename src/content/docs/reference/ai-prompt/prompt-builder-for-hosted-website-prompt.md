<role>
you are a senior AI prompt engineer and need AI to build a website that is fast, secure, accessible, and has a simple yet elegant design.
</role>
<tasks>
## build one ai prompt for each of the steps below that can accept user-defined customizations (or uses defaults and production-worthy design choices without) for this project
1. build a new, single-page, router-based html/css/js frontend site with:
    - a README.md with links to other documents throughout project
    - build plan (markdown) that includes:
    	- manual steps for all steps in project, 
    	- URL links to external resources for each tool/script/stack used
    - .html, .css, .js files to house web page and routes, style, and javascript functions
    - script files to automate build and deployment of this site and infrastructure/hosting
    - image links from public domains (not scraped without permission)
    - d1 database in cloudflare
    - github and cloudflare secrets for db names, passwords, hashes
2. build ci/cd pipeline using code repo and hosting, with:
    - manual and automated steps for building and deploying
    - create github actions
    - create cloudflare pages (with/without dns domain)
    - create D1 and import .sql schema, seed, test (provide files)
3. enhance marketing/seo with markdown document including instructions to:
	1. perform audit using <footnotes><audit title="marketing"> data below and build report
	2. use tools and/or manually fix audit issues
	3. perform same audit and build report with remaining risks and checklists to fix
4. enhance security with markdown document including instructions to:
	1. perform a security audit using <footnotes><audit title="security"> data below
	2. use tools and/or manually fix audit issues
	3. perform same audit and build report with remaining risks and checklists to fix
5. enhance accessibility with markdown document including instructions to:
	1. perform an accessibility audit using <footnotes><audit title="accessibility"> data below
	2. use tools and/or manually fix audit issues
	3. perform same audit and build report with remaining risks and checklists to fix
6. final reviews and reports
	- all reports in markdown code blocks
	- review config files to build final report of:
		- tech & hosting stacks
		- cli and other tools
	- review automations and cli tools to ensure still functional, update if needed
	- review readme.md and update (if needed)
	- review reports from task step 3-5 and build summary report
## ask questions to keep or replace default data in <default> section below
## ask questions to clarify or resolve any design, architecture, stack choice issues
<criteria>
<includes>
include these rules into each ai prompt <criteria> section to ensure the solution built from the ai prompt includes these requirements
<include title="global rules">
include these as global rules or steps to be completed with each iteration before completing each artifact:
- use open-source tools/code/links where possible and avoid proprietary and predatory resources (unless explicitly requested)
- before building any new tool or script, check [clitools](https://github.com/alittlealohallc/clitools.git) first
- test basic functionality with each new iteration or decision change for every tool/page/script
- all documentation and artifact files are to be saved within the project so that nothing gets lost
- update user documentation with each new change in build/operation process, design, tool, or script
</include>
<include title="sub-steps">
include these sub-steps into each step under <tasks> above
1. test basic style elements for consistency with overall project design
2. test basic functionality before considering any task or step completed
3. review for manual steps and add automation where possible for quicker time to deploy
3. update user documentation with each new iteration
</includes>
<audit title="security">
<role>
You are a senior full-stack security auditor checking for the latest security policy issues on a modern web application.
</role>
<instructions>
<task title="identify risk list">
find top-twenty security checklist items
<sources>
start with these sites for leading issues
- [owasp top 10 2025](https://owasp.org/Top10/2025/)
</sources>
</task>
<task title="identify risk items">
Browse every page and API endpoint base site name I provide you as basename='' in the prompt, looking for CORS issues.
1. Open the <basename> site
2. Test alternate hostname destinations from the base domain name. For example: docs.<basename>, blog.<basename>, www.<basename>, api.<basename>, backend.<basename>, app.<basename>, login.<appname>, frontend.<basename>
3. Use Playwright (via the Docker MCP Toolkit) to browse the site like a real user
4. Document each issue found in a separate markdown file inside `[root]/reports/`, filename starting with `security-<date>-` <date> in format: `YY-MM-DD-HH-MM` with:
   - Array of instances of each item with: folder:file:line where the issue occurs
   - whether fix failed/succeeded
   - Steps to fix (if fix failed)
   - Steps to reproduce
</task>
</instructions>
</audit>
<audit title="accessibility">
<role>
You are a senior full-stack accessibility auditor checking for the latest WCAG policy issues on a modern web application.
</role>
<instructions>
<task title="identify risk list">
find top-ten security checklist items
<sources>
start with these sites for leading issues
- [axe-core](https://www.deque.com/axe/)
- [Pa11y](https://pa11y.org/) 
- [ARC Toolkit](https://arc.tpgi.com/)
- [WAVE](https://wave.webaim.org/)
</sources>
</task>
<task title="identify risk items">
Browse every page and API endpoint base site name I provide you as basename='' in the prompt, looking for WCAG and other accessibility issues.
1. Open the <basename> site
2. Test alternate hostname destinations from the base domain name. For example: docs.<basename>, blog.<basename>, www.<basename>, api.<basename>, backend.<basename>, app.<basename>, login.<appname>, frontend.<basename>
3. Use Playwright (via the Docker MCP Toolkit) to browse the site like a real user
4. Attempt to fix all instances of each item
5. Document each issue found in a separate markdown file inside `[root]/reports/`, filename starting with `access-<date>-` <date> in format: `YY-MM-DD-HH-MM` with:
   - Array of instances of each item with: folder:file:line where the issue occurs
   - whether fix failed/succeeded
   - Steps to fix (if fix failed)
   - Steps to reproduce
</task>
</instructions>
</audit>
</criteria>
<defaults>
images: [Unsplash](unsplash.com)
stack: html, css, nodejs, vuejs
hosting: github, cloudflare (pages, d1)
tools: [husky](https://typicode.github.io/husky/get-started.html), [score-compose](https://docs.score.dev/docs/score-implementation/score-compose/installation/), turbo, eslint, git, github, wrangler
scripts:
	"dev": "npm run dev",
   "build": "turbo run build",
    "lint": "turbo run lint",
    "clean": "rm -rf node_modules packages/*/node_modules",
    "prepare": "husky"
<author>
- Name: Kent Schaeffer
- Title: Founder & Principal Engineer
- Company: Pro Services With A Little Aloha
- Website: https://alittlealoha.pro
- Email: kent@alittlealoha.pro
</author>
<content>
<theme>
ranking and stats of [mens](https://inside.fifa.com/fifa-world-ranking/men) and [womens](https://inside.fifa.com/fifa-world-ranking/women) national teams from [fifa](https://fifa.com)
<routes>
- default: world rankings list of top 5 men and top 5 of women national teams, similar to [FIFA/Coca-Cola World Rankings](https://www.fifa.com/en/world-rankings)
- women: world rankings list of top 10 women national teams
- men: world rankings list of top 10 men national teams
- latest matches: matches list of last 5 men and last 5 of women
- country: data for each country
</routes>
<layouts>
<global>
- top navbar: soccer logo (far left); rankings -> men, women; countries -> (unique list top ten of men + women); match -> next -> next three matches, last -> last three matchs
</global>
<ranking>
- default route: women list on left, men list on right
- each item is card element and shows flag icon, country name, latest 5 match results (red/green/grey icon for result), total points
- each card links to country route, showing more stats and results of last five matches
</ranking>
<match>
- block cards
	- top-1/4: black background, white text of match details
	- bottom-1/4: white background, black text
		- title row: Group L (L = letter of group), date
		- data list: country flag, country name, goals scored (winner on top)
- each card link to country route
</match>
<country>
- women rankings (left side)
	- match results list for last five matches
	- historical ranking line graph for last 5 years
- men rankings (right side)
	- match results list for last five matches
	- historical ranking line graph for last 5 years
</country>
</layouts>
</theme>
</content>
</defaults>
