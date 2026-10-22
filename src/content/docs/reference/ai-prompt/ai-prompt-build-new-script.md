# next round of changes

## name change

- change name of script from "convert-doc" to "prep-doc"

## function and argument/option definitions

- functions: 
	+ convert (from one format to another, files remain in same folder, defaults to ./ folder)
		- inputs: --input [folder/file] --output [folder/file] --format [format]
		- verifies input file format for each file
		- injects mdx frontmatter fields if missing (unless --no-mdx)
		- leaves file alone if not .md or .mdx, displays "[folder/file] is invalid format: [format]" to console, continues if more files
		- displays "converted [folder/file - or list below] from [input-format] to [output-format] format" to console
	+ create (.mdx file, from provided frontmatter text, moves to project folder)
		- inputs: --repo [repository] --category [category] --subcat [subcategory] --tags "tag1 tag2 tag3"
		- displays "created file [folder/file - or list below]" to console
	+ move (to project folder)
		- inputs: --input [folder/file] --output [file] --repo [repository] --cat [category] --sub [subcategory] --tags "tag1 tag2 tag3"
		- verifies input file format for each file
		- injects mdx frontmatter fields if missing (unless --no-mdx)
		- leaves file alone if not .md or .mdx, displays "[folder/file] is invalid format: [format]" to console, continues if more files
		- displays "moved [folder/file - or list below] to [output-folder]" to console
	+ option definitions
		- --input or -i
			+ required for convert and move functions
			+ accepts file(s) or folder(s)
			+ allows multiple file and folder entries
		- --output or -o
			+ used only for convert function
			+ defaults to ./ (current folder)
			+ output only accepts one folder
			+ creates folder if it does not exist (prompt first)
		- --format or -f 
			+ used only for convert function
			+ defaults to .mdx if not provided
			+ acceptable formats using libreoffice-cli or pandoc   <-- add acceptable input/output formats to usage function
		- --cat or -c = category
			+ required for create and move functions
			+ defaults to guides (-r public)
			+ defaults to llc (-r admin)
			+ allows only one category
			+ creates folder if does not exist (prompt first)
		- --sub or -s = sub-category
			+ optional
			+ allows only one sub-category
			+ creates folder if does not exist (prompt first)
		- --repo or -r = repository folder
			+ allows only one repository
			+ defaults to admin
			+ accepts these repos:
				+ admin = (~/git/www-alittlealoha-pro/packages/admin/src/content/docs/[category]/[subcategory])
				+ public = (~/git/www-alittlealoha-pro/packages/public/src/content/docs/[category]/[subcategory])
		- --no-mdx or -n
			+ used to avoid injecting frontmatter fields
			+ for move function only
		- --tags or -t = array of tags
			+ used for create or move functions
			+ optional
			+ accepts up to five
			+ must have quotes around the array

## additional logic changes

- verify libreoffice and pandoc commands in PATH, error with instructions on how, exit

## original script logic

#!/usr/bin/env node

/**
 * convert-doc.js
 * Convert documents between formats with optional MDX frontmatter injection.
 *
 * Prerequisites:
 *   - pandoc      (primary converter — handles ODF, TXT, DOCX, HTML → MD/MDX/TXT/HTML/PDF)
 *   - LibreOffice (fallback — `soffice` must be in PATH; used when pandoc can't target the format)
 *
 * Install deps: npm install
 * Usage:        node convert-doc.js --help
 */

import { program } from 'commander';
import { promises as fs, existsSync, statSync } from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { createInterface } from 'readline';
import { glob } from 'glob';

// ─── Constants ───────────────────────────────────────────────────────────────

const SUPPORTED_OUTPUT = ['md', 'mdx', 'txt', 'pdf', 'html', 'docx', 'odt', 'rst', 'epub'];

const PANDOC_OUT_MAP = {
  md:   'commonmark',
  mdx:  'commonmark',
  txt:  'plain',
  html: 'html5',
  pdf:  'pdf',
  rst:  'rst',
  docx: 'docx',
  epub: 'epub',
};

// Formats LibreOffice can target (fallback when pandoc unavailable/unsuitable)
const LO_OUT_FORMATS = new Set(['pdf', 'html', 'docx', 'odt', 'txt', 'epub']);

// Known input extension groups
const INPUT_EXT_MAP = {
  odf:  ['.odt', '.ods', '.odp', '.odg', '.odf'],
  txt:  ['.txt'],
  md:   ['.md', '.mdx'],
  docx: ['.docx'],
  rtf:  ['.rtf'],
  html: ['.html', '.htm'],
  rst:  ['.rst'],
};

// Default extensions to scan when crawling a folder (no --input-format given)
const DEFAULT_SCAN_EXTS = ['.odt', '.odf', '.txt'];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleCase(str) {
  return str.replace(/[-_]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

async function ask(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(question, ans => { rl.close(); resolve(ans.trim()); }));
}

function commandExists(cmd) {
  try { execSync(`which ${cmd}`, { stdio: 'ignore' }); return true; }
  catch { return false; }
}

function detectInputFormat(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  for (const [fmt, exts] of Object.entries(INPUT_EXT_MAP)) {
    if (exts.includes(ext)) return fmt;
  }
  return null;
}

function hasFrontmatter(content) {
  return /^---\r?\n/.test(content.trimStart());
}

function buildFrontmatter(title, tags = []) {
  const date = new Date().toISOString().split('T')[0];
  const tagsStr = tags.map(t => `"${t}"`).join(', ');
  return [
    '---',
    `title: "${title}"`,
    `description: "Draft for ${title}"`,
    `publishDate: "${date}"`,
    `author: "Kent Schaeffer"`,
    `draft: true`,
    `tags: [${tagsStr}]`,
    '---',
    '',
    '',
  ].join('\n');
}

// ─── File Collection ──────────────────────────────────────────────────────────

async function collectFiles(inputs, inputFormat) {
  const scanExts = inputFormat
    ? (INPUT_EXT_MAP[inputFormat.toLowerCase()] ?? [])
    : DEFAULT_SCAN_EXTS;

  const files = [];

  for (const raw of inputs) {
    const input = path.resolve(raw);

    if (!existsSync(input)) {
      console.error(`❌  Not found: ${input}`);
      continue;
    }

    const stat = statSync(input);

    if (stat.isDirectory()) {
      for (const ext of scanExts) {
        const matches = await glob(`**/*${ext}`, { cwd: input, absolute: true, nodir: true });
        files.push(...matches);
      }
    } else {
      files.push(input);
    }
  }

  // Dedupe and sort
  return [...new Set(files)].sort();
}

// ─── Conversion ───────────────────────────────────────────────────────────────

function pandocConvert(inputFile, outputFile, outputFmt) {
  const ext    = path.extname(inputFile).toLowerCase();
  const toPandoc = PANDOC_OUT_MAP[outputFmt] ?? outputFmt;

  // Explicit input format hints (pandoc is finicky about ODF)
  const fromMap = {
    '.odt': 'odt', '.odf': 'odt',
    '.docx': 'docx',
    '.rtf': 'rtf',
    '.html': 'html', '.htm': 'html',
    '.rst': 'rst',
    '.md': 'commonmark', '.mdx': 'commonmark',
    '.txt': 'plain',
  };
  const fromFlag = fromMap[ext] ? `-f ${fromMap[ext]}` : '';

  const pdfEngineFlag = outputFmt === 'pdf' ? '--pdf-engine=xelatex' : '';

  const cmd = [
    'pandoc',
    fromFlag,
    `"${inputFile}"`,
    `-t ${toPandoc}`,
    pdfEngineFlag,
    `-o "${outputFile}"`,
  ].filter(Boolean).join(' ');

  execSync(cmd, { stdio: 'pipe' });
}

function loConvert(inputFile, outDir, outputFmt) {
  execSync(
    `soffice --headless --convert-to ${outputFmt} --outdir "${outDir}" "${inputFile}"`,
    { stdio: 'pipe' }
  );
}

// ─── Single-file Pipeline ─────────────────────────────────────────────────────

async function processFile(inputFile, opts) {
  const {
    outputFormat, outputDir,
    inputFormat,  injectMdx,
    category,     tags,
    repoRoot,
  } = opts;

  // 1. Validate input exists (extra guard after collection)
  if (!existsSync(inputFile)) {
    console.error(`❌  File not found: ${inputFile}`);
    return false;
  }

  // 2. Input format check / warning
  const detectedFmt = detectInputFormat(inputFile);
  if (inputFormat) {
    const expectedExts = INPUT_EXT_MAP[inputFormat.toLowerCase()] ?? [];
    const actualExt    = path.extname(inputFile).toLowerCase();
    if (!expectedExts.includes(actualExt)) {
      console.warn(`⚠️   ${path.basename(inputFile)}: extension '${actualExt}' ≠ --input-format '${inputFormat}'`);
    }
  }
  if (!detectedFmt) {
    console.warn(`⚠️   ${path.basename(inputFile)}: unrecognised type — attempting anyway`);
  }

  // 3. Resolve target directory
  const baseName = path.basename(inputFile, path.extname(inputFile));
  const slug     = slugify(baseName);
  const outExt   = outputFormat === 'mdx' ? '.mdx' : `.${outputFormat}`;

  let targetDir = outputDir;

  if (category) {
    const catSlug = slugify(category);
    targetDir = repoRoot
      ? path.join(repoRoot, 'packages/docs/src/content/docs', catSlug)
      : path.join(outputDir, catSlug);

    if (!existsSync(targetDir)) {
      console.warn(`⚠️   Category folder '${catSlug}' does not exist.`);
      const ans = await ask(`   Create it? (y/n): `);
      if (!/^y/i.test(ans)) { console.log('   Skipped.'); return false; }
      await fs.mkdir(targetDir, { recursive: true });
      console.log(`✅  Created: ${targetDir}`);
    }
  }

  await fs.mkdir(targetDir, { recursive: true });
  const outputFile = path.join(targetDir, `${slug}${outExt}`);

  // 4. Conflict check
  if (existsSync(outputFile)) {
    const ans = await ask(`⚠️   '${path.relative(process.cwd(), outputFile)}' exists. Overwrite? (y/n): `);
    if (!/^y/i.test(ans)) { console.log('   Skipped.'); return false; }
  }

  // 5. Convert
  const hasPandoc = commandExists('pandoc');
  const hasLO     = commandExists('soffice');

  try {
    if (hasPandoc && PANDOC_OUT_MAP[outputFormat]) {
      pandocConvert(inputFile, outputFile, outputFormat);
    } else if (hasLO && LO_OUT_FORMATS.has(outputFormat)) {
      loConvert(inputFile, targetDir, outputFormat);
      // LibreOffice names output after the source basename — rename if needed
      const loFile = path.join(targetDir, `${baseName}.${outputFormat}`);
      if (loFile !== outputFile && existsSync(loFile)) {
        await fs.rename(loFile, outputFile);
      }
    } else {
      const missing = !hasPandoc ? 'pandoc' : 'soffice (LibreOffice)';
      throw new Error(`No converter available. Install ${missing}.`);
    }

    // 6. Verify output written
    if (!existsSync(outputFile)) throw new Error('Output file was not created.');

    console.log(`✅  ${path.basename(inputFile)} → ${path.relative(process.cwd(), outputFile)}`);

  } catch (err) {
    console.error(`❌  Conversion failed [${path.basename(inputFile)}]: ${err.message}`);
    return false;
  }

  // 7. Frontmatter injection (MDX, MD+inject, or category/tags mode)
  const needsFrontmatter =
    outputFormat === 'mdx' ||
    (outputFormat === 'md' && injectMdx) ||
    (category !== undefined) ||
    (tags && tags.length > 0);

  if (needsFrontmatter && ['md', 'mdx', 'txt'].includes(outputFormat)) {
    try {
      let content = await fs.readFile(outputFile, 'utf8');

      if (hasFrontmatter(content)) {
        console.log(`ℹ️   Frontmatter already present — skipping injection`);
      } else {
        const title = titleCase(baseName);
        const fm    = buildFrontmatter(title, tags ?? []);
        await fs.writeFile(outputFile, fm + content, 'utf8');
        console.log(`✅  Frontmatter injected`);
      }
    } catch (err) {
      console.error(`❌  Frontmatter injection failed: ${err.message}`);
      return false;
    }
  }

  return true;
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

program
  .name('convert-doc')
  .description('Convert documents to MD/MDX and other formats, with frontmatter & category support')
  .version('1.0.0')
  .argument('<inputs...>', 'One or more files and/or folders')
  .option(
    '-f, --format <fmt>',
    `Output format [${SUPPORTED_OUTPUT.join('|')}]`,
    'mdx'
  )
  .option(
    '-o, --out <dir>',
    'Output directory (default: ./)',
    './'
  )
  .option(
    '-i, --input-format <fmt>',
    'Expected input format hint [odf|txt|md|docx|rtf|html|rst] (default: odf). Warns on mismatch.'
  )
  .option(
    '--no-mdx',
    'When --format md, skip frontmatter injection (default: inject)'
  )
  .option(
    '-c, --category <name>',
    'Doc category — files go to [out]/[category]/ (or repo path when --repo is set)'
  )
  .option(
    '-t, --tags <tags>',
    'Space-separated tags added to frontmatter, e.g. "api networking dns"'
  )
  .option(
    '-r, --repo <path>',
    'Root of www-alittlealoha-pro repo; resolves category to packages/docs/src/content/docs/[category]'
  )
  .addHelpText('after', `
Examples:
  # Single file → MDX (default)
  convert-doc report.odt

  # Folder of ODTs → Markdown, flat output
  convert-doc ./drafts/ -f md -o ./output/

  # Multiple sources, HTML output
  convert-doc file1.odt file2.txt ./more-docs/ -f html -o ./site/

  # MDX with category + tags (flat out)
  convert-doc notes.txt -f mdx -c guides -t "api rest"

  # Full repo integration
  convert-doc notes.odt -f mdx -c networking -t "ddns vpn" -r ~/projects/www-alittlealoha-pro

  # MD without frontmatter injection
  convert-doc doc.odt -f md --no-mdx -o ./plain/
`)
  .action(async (inputs, opts) => {
    const outputFormat = opts.format.toLowerCase();

    // Validate format flag
    if (!SUPPORTED_OUTPUT.includes(outputFormat)) {
      console.error(`❌  Unknown output format: '${outputFormat}'`);
      console.error(`   Supported: ${SUPPORTED_OUTPUT.join(', ')}`);
      process.exit(1);
    }

    // Parse tags
    const tags = opts.tags ? opts.tags.split(/\s+/).filter(Boolean) : [];

    // --no-mdx sets opts.mdx = false
    const injectMdx = opts.mdx !== false;

    // Collect all target files
    const files = await collectFiles(inputs, opts.inputFormat);

    if (files.length === 0) {
      console.error('❌  No matching files found.');
      process.exit(1);
    }

    console.log(`\n📄  ${files.length} file(s) → ${outputFormat.toUpperCase()}\n`);

    const convOpts = {
      outputFormat,
      outputDir: path.resolve(opts.out),
      inputFormat:  opts.inputFormat ?? null,
      injectMdx:    outputFormat === 'md' ? injectMdx : false,
      category:     opts.category ?? null,
      tags,
      repoRoot:     opts.repo ? path.resolve(opts.repo) : null,
    };

    let ok = 0, fail = 0;
    for (const file of files) {
      const success = await processFile(file, convOpts);
      success ? ok++ : fail++;
    }

    console.log(`\n📊  Done — ${ok} succeeded, ${fail} failed`);
    if (fail > 0) process.exit(1);
  });

program.parse();
