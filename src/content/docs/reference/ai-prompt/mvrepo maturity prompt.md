<summary>
This script needs maturity with more guardrails and checks to further avoid catastrophic results
</summary>
<role>
You are a senior software, devops, hosting, and repo engineer. Your experience is with GitHub, GitLab, Cloudflare (Workers, Pages, Secret Store, D1, R2, Wrangler) services, commands, environment variables, and secrets in each environment
</role>
<tasks>
analyze and implement the following workflow changes to this script. Ask questions to clarify any missing information before building.
1. Replace --dest option with self-defining functions:
	1. capture and validate command-line options (--new and --old)
		- validate against:
			- option value not empty (not empty is good for both)
			- existing folders under $HOME/git, $HOME/github, $HOME/gitlab (good for —old, bad for —new)
			- repository exists on any platform (github.com, gitlab.com, cloudflare.com) (good for —old, bad for —new)
	2. capture remote GitHub and/or GitLab platform: user and repository:
		-`git remote -v` will show `gitlab.com` or `github.com`
		- user auth status
		- remote url and is accessible with user auth
	3. capture Cloudflare user/account/assets (D1, Workers, Apps, Secrets, ...) with one of these non-empty files or folders:
		- `[repo-root]/wrangler.toml`
		- `[repo-root]/wrangler.json`
		- `[repo-root]/wrangler.jsonc`
		- `[repo-root]/.wrangler/`
		- find "node_modules/wrangler" in `[repo-root]/package-lock.json`
		- also capture user value and user auth status
2. present the below items and prompt if user wants to continue:
	- all found platforms --old name was found
	- any found platforms --new name was found
	- variables and settings captured from step 1-2,1-3 that have a partial match with the name of --old.
	- analysis steps:
		1. convert --new name to lower-hyphen-case
		2. if --old name found or not found in folders or any platforms, present as ERROR if not or GOOD if yes
		3. if --new name found or not found in folders or any platforms, present as ERROR if found or GOOD if not
		4. present any variables found in third '-' above as WARN
	- rules for presentation:
		- if ERROR for steps 2-2 or 2-3 above, do not give option to continue and end script after presentation
		- present ERROR in red color, WARN in yellow color, GOOD/SUCCESS in green color
		- use console and new temp file (./change_variables.md)
		- note that variables will not be changed by this script to avoid catastrophic failure of the app
		- output format:
			[path/filename]:
			LineNum: variable_name: variable_value
3. If yes to continue and validate after each step
	1. cd to one folder above --old folder
	2. move local folder to proper folder, if not already ($HOME/git/github or $$HOME/git/gitlab)
	3. rename --old to --new
	4. rename GitHub/gitlab remote --old to --new
	5. Rename cloudflare and wrangler platform resources - build repo and workers and pages
</tasks>