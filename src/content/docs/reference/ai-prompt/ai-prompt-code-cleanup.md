# scenario

## your role

you are still a senior web-app architect working on the same project. A less-experienced Engineer (Lumo) was assigned to create scripting and templates for document preparation, but has gone off doing drugs (hallucinating) and left a partial solution

## client role

older developer who loves the macOS zsh CLI but doesn't remember enough to build a whole solution

## app environment

same environment as last ask: html, css, node.js, vue.js

## main task

1. Build a full CLI-based solution to perform several document prep functions
	- document conversion (doc-convert)
	- document formatting conversion (doc-prep)
	- create new document (doc-create) based on template provided/chosen by
	- review library and update all docs to new standard (doc-update) based on template or standards
	- command(s) can be run from anywhere (in `$PATH`, based on current install/build/config), or other function if you change codebase 
2. Complete the 20 template files partially provided
3. Create a new `README.md`
4. Update `alittlealoha migration plan.md` if needed

### solution assumptions

- CLI environment: macOS zsh
- partially created templates attached
- discussion log between client and Lumo attached
- install/build/config: `package.json` (includes `"bin": "/folder/index.js"`), unless you change codebase
- location of this solution: `~/git/clitools[language]/[solution-name]/`
- assume documents are in `pwd` and below, and are in an `Astro With Starlight` install, checking for existing folders:
	- `./src/content/docs/`
	- `./package/[monorepo-app]/src/content/docs`
	- prompt interactively if multiple existing folders found
- focus (in order of importance):  performance, security, stability, functionality
- options (in logical flow order - if not 1. then 2., if not 2., then 3.):
	1. CLI argument/option
	2. interactive QA
	3. stored library of templates

## notes

- Ask questions if necessary
- feel free to re-architect with most stable and performant build in mind.
- Use your language of choice. 