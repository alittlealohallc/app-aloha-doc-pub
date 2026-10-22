<role>
You are a senior systems integrator, AI prompt engineer, and software engineer wanting to consolidate a more efficient and automated pipeline in the form of either (1) web-app form(s) and backend processing app, or (2) node.js script(s) and backend processing code. Either solution will take csv input (or web-form) and build client proposals for a complete solution to exceed customer expectations, and internal reports that make human steps much quicker and easier
</role>

<tasks>
<summary>
Use code and data from <artifacts> previously created to build a complete solution that includes:
    - builds 5-levels of <standards> (starter/budget,performance/single-user,small-business/soho,enterprise/best-support) clients and this company can use as pre-researched and highly recommended <packages> for sale/install
    - build a print-worthy customer proposal with details from <proposal>
    - imports data either from: (1) a single `<import.csv>` file (web-app or script), or (2) from web-form(s), then analyzes data from import to create several export files for further human actions. 
Refer to <presets> for preferences and settings to follow with higher priority than internal AI thought processes - and obtain answers before building any code.
</summary>
<task id="import-and-parse">
perform each <func> on all import data from `<import.csv>` and/or web form(s)
<funcs>
<func id="screen">
validate import data from `<import.csv>` and/or web form for:
1. readable file/data: not empty dataset, required fields provided
2. valid package/header/data entries: each field meets and makes sense for <fields>, i.e., "Dell" for "make"3. valid links (if provided)
</func>
<func id="parse">
1. scan <import> for:
    - action code <keyword>s that affect all import data
    - action code <keyword>s that affect each <package> or <dataset>
2. validate all <keywords>, <packages>, <datasets> for logical sense:
    - <keyword> and <packages> are compatible and possible
    - different <keywords> for <import> and <package> are allowed, but conflicting <keywords> in the same <package> or <dataset> is not
3. add to logic for <keyword>s validated in <import> to <dataset> analysis <task>
</func>
</funcs>
</task>
<task id="analysis">
perform each <func> on each <package> or <dataset>:
<funcs>
<func id="standard-or-custom">
analyze all <dataset> items and compare against <standards> and make professional decisions on: 
    - does one <standards> exactly meet needs of this <dataset>, 
    - or does one <standard> meet some needs and can be met with some additional custom accessories,
    - or does it require a custom solution (major parts missing in any <standard> or set type: custom)?
</func>
<func id="completeness">
analyze <dataset> for completeness to build a working and performant solution or if items need to be replaced or additional items are needed using <strict> as strict requirements to be met, <focus> as secondary or lower priorities, and <exclude> for items to remove and exclude from being added for the solution to this <dataset>
</func>
<func id="rack-system">
if <dataset> is rack system, construct efficient rack system (use dimensions provided in <configs> or <dataset> - or prompt user) and complete build to include (if not in same dataset) <standard> or <custom>
default: use <standard> rack-system if available for this type of client, or default to: wall-mounted rack at 12U high,19” wide, 18” deep) and include any necessary items (if not already in same dataset) such as patch cables, cable management, vented trays, fan trays if needed - unless otherwise noted in <exclude>
</func>
<func id="workstation-system">
if <dataset> is workstation or desktop or laptop, complete build to include  (if not in same dataset) 34” or bigger curved monitor, keyboard and mouse, connecting cables, cable management Unless noted in <exclude>
</func>
<func id="ups-system">
2. parse <dataset> for a UPS system listed in needs
2. calculate needs for a UPS system for each <dataset> that will keep each <dataset> up and running for time set in <configs>. Unless noted in <exclude>
</func>
</funcs>
</task>
</tasks>
 




 <func>
 </func>
 <func>
 </func>
 </funcs>

    - 
    - 
- 
- 
- If viable products cannot be found using internet search, provide an open slot on outputs, and specific data needed for system integrator to research and add product to csv import file and re-run  
1. Build technical layout drawing of each <dataset> and a single network connectivity and architecture diagram to include major items, purchased or not, and open slots
2. Build shopping list that include all items, purchased or not, and includes fields: make, model, vendoqqprice, qty, dataset
3. build final report that includes reports from all datasets

<context>
 <presets>
- use <artifacts> for example `<import.csv>` data with each <dataset> analyzed as a 'package'
- automation solution must be software solution, either (1) node.js CLI script saved in private github repository, or (2) node.js web-app with db backend and hosted on cloudflare
- have all questions answered and clarifications obtained before building any code
- import requirements:
    - headers for manual web-app form and `<import.csv>` ('r' = required): make(r),model-part-num(r),vendor(r),purchased(y/n),spec-link(r),retail-price-link,qty,single-retail-price(r),labor-hours
    - web form (if web-app):
        - fields: Project Title, Customer (optional), Location (optional)
        - Pricing Model: Cost (cost of equipment only, no labor), SOHO (low-mark-up), Enterprise (mid-mark-up)
        - Package Section (allow multiple with `+` at start of row, `Add` button at end of row adds to proposal preview):
            - Standard or manual (radio button)
                - standard (hide this option for manual): pre-researched and priced compute package (pull-down options, i.e., Mac Workstation, Windows Workstation, Server Rack, Network Rack) -> `Add` button adds items to proposal preview
                - manual (show for both manual and standard): manual fields (allow multiple rows with `+` at start of row) with `Add` button at end of row adds to proposal preview
    - open `<import.csv>` (web-app or CLI):
        - manual package data rows must be in this format:
            1. package row (package:package_name,type:package_type)
            2. header row (header columns must match data columns, not necessary to be in order as noted above)
            3. data rows (data must match header columns, not necessary to be in order as noted above)
        - standard package rows must be in this form (may include manual data):
            1. package row (package:package_name,type:package_type,name:standard_name)
            2. header row (header columns must match data columns, not necessary to be in order as noted above)
            3. data rows (data must match header columns, not necessary to be in order as noted above)
</presets>
<input>
format: csv
fields: make,model|part-num,vendor,purchased(y/n),qty,spec-link(optional),price(optional)
</input>
<output>
# data export
# reports
- types: client-ready proposal, company pricing and shopping list
- format: mdx (Astro/Starlight Markdown), simple table invoice layout and easy to understand
- fields: make,model-part-num,spec-link,retail-price-link,qty,single-retail-price,sub-total-price
- taxes: rate taxes using West Valley City, Utah combined rate (7.25%)
- shipping: estimate rates using West Valley City, Utah 84120
- mark-up: add product industry standard integrator/consultant mark-up in the small-business or soho market
- labor: estimate labor pricing to install, document, based on package/value pricing
# technical drawings
- use simple svg system for each
- 1. rack layout for rack <dataset> after determining where each piece of equipment can be placed for best cable efficiency and airflow, including non-mountable items that will need ventilated shelves to include all items in each space with Make, Model as label
- 2. network/architecture connectivity to include workstations and all major items from all datasets
- 3. table to include major details of each component from all diagrams. Details to include: make,model,network segment, (office/guest/iot vlan, DMZ-between router and isp modem, and internet-cloud icon) mbps/gbps, cpu/ram/hd (workstation), network port count, primary function
</output>
<configs>
# strict
- do not add notes in the middle of any document or drawing, instead use markdown footnote notation 
- do not estimate any numbers, research exact/retail pricing and provide link or leave as `nx`
# ai research notes
- markdown footnote notation: [^note]
- actual notes later in document or separate page
# UPS
- choose desktop UPS for workstation/laptop <dataset>
- choose rackmount UPS for rack <dataset> 
- uptime: 4 hours per <dataset>
# Action Words
Each action word can be used for entire import or for one package. These are to be read as <config># strict
## Required
`package`: keyword in import file to indicate start of package
`only`|`exclusive`: keyword to indicate only items listed, exclude anything else
`standard`|`soho`|`enterprise`|`budget`: keyword to indicate pricing (import file) and/or standard package: add checkboxes in web-form
## Optional
### keyword
`exclude`: items to exclude from package or file solution. don't add or research these items
### Usage
1. <import> file: keyword be listed as package or file header: `file:exclude:keyboard,mouse`, `package:exclude:cables,monitor`
2. web-form: `exclude` checkbox for solution and package and `exclude items` text field for items to exclude (csv format) <or> checkboxes for items to exclude
### examples
[`UPS`, `keyboard`, `mouse`, `patch cables`, `wifi`, `router`]
</configs>
</context>
<artifacts>
<dataset id="rack">
Netgear,GS324,BHP,y,1,[GS324](https://www.bhphotovideo.com/c/product/1629145-REG/netgear_gs324_200nas_soho_24_port_gigabit_ethernet.html),
Ubiquiti,UAP-AC-Lite,Ubiquiti,y,2,[UAP-AC-Lite](https://www.bhphotovideo.com/c/product/1184038-REG/ubiquiti_networks_uap_ac_lite_unifi_ap_ac.html),
Firewalla,Gold SE,Firewalla,n,1,[Gold SE](https://firewalla.com/products/firewalla-gold-se-firewall),$499.00
Firewalla,Rackmount,Firewalla,n,1,[Rackmount](https://firewalla.com/products/firewalla-gold-rack-mount),$129.00
Ubiquiti,UACC-KEYSTONE-COUPLER-C6A,BHP,n,1,[UACC-KEYSTONE-COUPLER-C6A](https://www.bhphotovideo.com/c/product/1937496-REG/ubiquiti_uacc_keystone_coupler_c6a_cat_6a_keystone_coupler.html),$39.00
Firewalla,Extended Warranty,Firewalla,n,1,[Extended Warranty](https://firewalla.com/products/firewalla-extended-warranty?variant=46860453216500),$89.00
Firewalla,Access Point 7 Ceiling,Firewalla,n,3,[Access Point 7 Ceiling](https://firewalla.com/collections/firewalla-ap7/products/firewalla-ap7-ceiling)$369.00
Ubiquiti,USW-Flex-2.5G-8-PoE,BHP,n,1,[USW-Flex-2.5G-8-PoE](https://www.bhphotovideo.com/c/product/1875502-REG/ubiquiti_networks_usw_flex_2_5g_8_poe_flex_2_5g_poe_8_port.html),$119.00
Auray,RS-V-1U,BHP,n,2,[RS-V-1U](https://www.bhphotovideo.com/c/product/1261093-REG/auray_rs_v_1u_one_space_vented_rack.html),$19.99
Tripp Lite,RS1215-RA,BHP,n,1,[RS1215-RA](https://www.bhphotovideo.com/c/product/865803-REG/tripp_lite_rs1215_ra_1u_rack_mount_power.html),$93.19
Monoprice,43544,Monoprice,n,1,[43544](https://www.monoprice.com/product?p_id=43544),$18.99
Monoprice,6542,Monoprice,n,25,[6542](https://www.monoprice.com/product?p_id=6542),$1.69
Simply45,S45-2724S,BHP,n,2,[S45-2724S](https://www.bhphotovideo.com/c/product/1729487-REG/simply45_s45_2724s_24_port_loaded_cat6_6a.html),$158.50
Monoprice,27397,Monoprice,n,20,[27397](https://www.monoprice.com/product?p_id=27397),$3.09
Monoprice,27431,Monoprice,n,10,[27431](https://www.monoprice.com/product?p_id=27431),$4.39
Monoprice,27492,Monoprice,n,10,[27492](https://www.monoprice.com/product?p_id=27492),$5.99
StarTech,CMHOOK1UN,BHP,n,8,[CMHOOK1UN](https://www.bhphotovideo.com/c/product/1180761-REG/startech_cmhook1un_vertical_server_rack_cable.html),$9.99
Generic,9SIC6X1KZV5567,NewEgg,n,1,[9SIC6X1KZV5567](https://www.newegg.com/apc-ds-sfp-fc8g-sw-rackmount/p/1WK-00U7-000W3),$33.99,1,$33.99, 
Monoprice,21887,Monoprice,n,1,[21887](https://www.monoprice.com/product?p_id=21887),$15.00
Channel Master,CM-3428,Channel Master,n,1,[CM-3428](https://www.channelmaster.com/products/tv-antenna-booster-8),$89.00
Channel Master,CM-3701,Channel Master,n,12,[CM-3701](https://www.channelmaster.com/products/3-foot-coaxial-cable-black-cm-3701),$3.00
Channel Master,CM-7100,Channel Master,n,6,[CM-7100](https://www.channelmaster.com/products/professional-grade-antenna-port-terminator-cm-7100?_pos=1&_sid=0bb9fa5b8&_ss=r),$15.00
Channel Master,CM-7779HD,Channel Master,n,1,[CM-7779HD](https://www.channelmaster.com/products/tv-antenna-preamp-1),$79.00
</dataset>
<dataset id="station1">
Apple,MacBook Air 15" (M5),Apple,n,1,[MacBook Air 15" (M5)](https://www.apple.com/shop/buy-mac/macbook-air/15-inch-midnight-m5-chip-10-core-cpu-10-core-gpu-32gb-memory-1tb-storage?option.keyboard=065-CKQP&option.inputs=065-CKP1&option.thunderbolt=065-CKP0&option.retina_display=065-CKP2&option.power_adapter=065-CLKK&option.mouse_and_track_pad=065-CKNY&option.memory=065-CKN1&option.countrykit=065-CKQW&option.storage=065-CKN3&option.processor=065-CKMX),$1,899.00, 
Apple,Mac mini (M4 Pro),Apple,n,1,[Mac mini (M4 Pro)](https://www.apple.com/shop/buy-mac/mac-mini/m4-pro-chip-14-core-cpu-20-core-gpu-48gb-memory-2tb-storage?option.ethernet_adapter=065-CGYX&option.thunderbolt=065-CK4M&option.memory=065-CGYL&option.storage=065-CK0V&option.countrykit=065-CJXQ&option.processor=065-CGYF),$2,599.00
Apple,Apple Care One,Apple,n,1,[Apple Care+ for up to 3 devices](https://www.apple.com/applecare/),$359.88/yr
LG,35WN65C-B,Costco,y,1,[35" Curved UltraWide WQHD Monitor](https://www.lg.com/us/support/product/lg-35WN65C-B.AUS?tab=1),
</dataset>
<dataset id="station2">
Apple,14" MacBook Pro (M4),Apple,y,1,[14" MacBook Pro (M4)](https://support.apple.com/en-us/121552),
Apple,14" MacBook Pro (M1),Apple,y,1,[14" MacBook Pro (M1)](https://support.apple.com/en-us/111893),
LG,34WR50QC-B,Costco,y,1,[34" Curved UltraWide WQHD Monitor](https://www.lg.com/us/support/product/lg-34WR50QC-B.AUM?tab=1),
</dataset>
<dataset id="standard-packages-with-pricing">
```json
{
  "meta": {
    "client": "ne0crank",
    "prepared_by": "ducky",
    "date": "2026-07-07",
    "currency": "USD",
    "purpose": "tiered computing packages with vendor validation links",
    "pricing_note": "Retail prices are current as surfaced in the cited sources; validate before quoting."
  },
  "tier_summary": {
    "budget": "lowest cost / acceptable durability",
    "standard": "power-user / best price-performance",
    "soho": "solo enterprise tech user / portable premium",
    "enterprise": "best support / high uptime / heavy-use"
  },
  "previous_sku_collation": [
    { "system": "laptop", "tier": "soho", "sku": "LAP-SOH-001", "base_ref": "Apple MacBook Air 15 in (M5), 24GB, 512GB", "base_price": 1899.0 },
    { "system": "workstation", "tier": "soho", "sku": "WS-SOH-001", "base_ref": "Apple Mac mini (M4 Pro), 48GB, 2TB", "base_price": 2599.0 },
    { "system": "rack", "tier": "soho", "sku": "RCK-SOH-001", "base_ref": "Netgear GS324 + Firewalla Gold SE + rackmount + APs", "base_price": null }
  ],
  "options_by_tier": [
    {
      "tier": "budget",
      "options": [
        {
          "platform": "windows_laptop_workstation",
          "sku": "WIN-BUD-001",
          "model": "Dell Latitude 5430 refurbished",
          "why_fit": "Strong value, stable thermals, enterprise-class platform.",
          "retail_price": 299,
          "price_validation_link": "https://discountcomputerdepot.com/thinkpad-elitebook-latitude",
          "support_signal": "business-class refurb"
        },
        {
          "platform": "ipad_chromebook_tablet",
          "sku": "TAB-BUD-001",
          "model": "Asus Chromebook CX15",
          "why_fit": "Extremely low entry price, simple daily use, good enough for light browsing and docs.",
          "retail_price": 133,
          "price_validation_link": "https://www.pcworld.com/article/608636/best-chromebooks.html",
          "support_signal": "budget daily driver"
        },
        {
          "platform": "apple_laptop_workstation",
          "sku": "APL-BUD-001",
          "model": "MacBook Neo (entry Mac)",
          "why_fit": "Lowest-cost Apple laptop path for users needing macOS basics.",
          "retail_price": null,
          "price_validation_link": "https://www.apple.com/mac/compare/",
          "support_signal": "Apple current lineup reference"
        }
      ]
    },
    {
      "tier": "standard",
      "options": [
        {
          "platform": "windows_laptop_workstation",
          "sku": "WIN-STD-001",
          "model": "Lenovo ThinkPad T14 Gen 2/3 refurbished",
          "why_fit": "Best durability reputation and strong serviceability.",
          "retail_price": 349,
          "price_validation_link": "https://discountcomputerdepot.com/thinkpad-elitebook-latitude",
          "support_signal": "MIL-SPEC class refurb"
        },
        {
          "platform": "ipad_chromebook_tablet",
          "sku": "TAB-STD-001",
          "model": "Acer Chromebook Plus 514",
          "why_fit": "Best balanced Chromebook; better screen, ports, and value than ultra-budget models.",
          "retail_price": 350,
          "price_validation_link": "https://www.engadget.com/computing/laptops/best-chromebooks-160054646.html",
          "support_signal": "8-hour tested battery, secure auto-updates"
        },
        {
          "platform": "apple_laptop_workstation",
          "sku": "APL-STD-001",
          "model": "MacBook Air 13 in (M5)",
          "why_fit": "Best everyday Mac choice; light, efficient, stable.",
          "retail_price": 1299,
          "price_validation_link": "https://www.macworld.com/article/667144/best-macbook-air-vs-pro-neo-compared.html",
          "support_signal": "best for most Mac users"
        }
      ]
    },
    {
      "tier": "soho",
      "options": [
        {
          "platform": "windows_laptop_workstation",
          "sku": "WIN-SOH-001",
          "model": "HP EliteBook 840 G9 refurbished",
          "why_fit": "Security-focused, battery-friendly, ideal for a solo technical operator.",
          "retail_price": 329,
          "price_validation_link": "https://discountcomputerdepot.com/thinkpad-elitebook-latitude",
          "support_signal": "battery + security focus"
        },
        {
          "platform": "ipad_chromebook_tablet",
          "sku": "TAB-SOH-001",
          "model": "Lenovo Chromebook Plus 14",
          "why_fit": "Premium Chromebook option with OLED, strong battery, and light chassis.",
          "retail_price": null,
          "price_validation_link": "https://www.pcworld.com/article/608636/best-chromebooks.html",
          "support_signal": "high-end Chromebook"
        },
        {
          "platform": "apple_laptop_workstation",
          "sku": "APL-SOH-001",
          "model": "MacBook Air 15 in (M5)",
          "why_fit": "Best SOHO Apple laptop for portability + screen size.",
          "retail_price": 1499,
          "price_validation_link": "https://www.macworld.com/article/667144/best-macbook-air-vs-pro-neo-compared.html",
          "support_signal": "strong portability/value balance"
        }
      ]
    },
    {
      "tier": "enterprise",
      "options": [
        {
          "platform": "windows_laptop_workstation",
          "sku": "WIN-ENT-001",
          "model": "Dell Latitude 7430/7000-series class refurb",
          "why_fit": "Best mix of fleet stability, volume procurement value, and supportability.",
          "retail_price": 299,
          "price_validation_link": "https://discountcomputerdepot.com/thinkpad-elitebook-latitude",
          "support_signal": "volume-friendly enterprise class"
        },
        {
          "platform": "ipad_chromebook_tablet",
          "sku": "TAB-ENT-001",
          "model": "Apple iPad Pro M5",
          "why_fit": "Highest-end tablet for mobile execs, field work, and note-heavy workflows.",
          "retail_price": null,
          "price_validation_link": "https://www.businessinsider.com/guides/tech/best-apple-ipads",
          "support_signal": "best tablet for professionals"
        },
        {
          "platform": "apple_laptop_workstation",
          "sku": "APL-ENT-001",
          "model": "MacBook Pro 14 in (M5 Pro)",
          "why_fit": "Best support/power-user Apple laptop; sustained performance and more ports.",
          "retail_price": 2499,
          "price_validation_link": "https://www.macworld.com/article/667144/best-macbook-air-vs-pro-neo-compared.html",
          "support_signal": "pro workload / sustained performance"
        }
      ]
    }
  ],
  "recommended_accessories": [
    {
      "sku": "ACC-WIN-001",
      "category": "windows_bundle",
      "items": ["keyboard", "mouse", "USB-C dock", "HDMI/DP cable", "monitor arm"],
      "target_tiers": ["budget", "standard", "soho", "enterprise"]
    },
    {
      "sku": "ACC-TAB-001",
      "category": "tablet_bundle",
      "items": ["keyboard case", "stylus", "protective sleeve", "USB-C charger", "screen protector"],
      "target_tiers": ["budget", "standard", "soho", "enterprise"]
    },
    {
      "sku": "ACC-APL-001",
      "category": "apple_bundle",
      "items": ["USB-C charger", "travel sleeve", "dock/hub", "wireless mouse", "external keyboard"],
      "target_tiers": ["budget", "standard", "soho", "enterprise"]
    }
  ],
  "vendor_validation_links": {
    "windows": [
      "https://discountcomputerdepot.com/thinkpad-elitebook-latitude",
      "https://www.newegg.com/insider/best-ultrabooks-and-thin-laptops-for-business-in-2026/"
    ],
    "chromebook_tablet": [
      "https://www.engadget.com/computing/laptops/best-chromebooks-160054646.html",
      "https://www.pcworld.com/article/608636/best-chromebooks.html",
      "https://www.businessinsider.com/guides/tech/best-apple-ipads"
    ],
    "apple": [
      "https://www.apple.com/mac/compare/",
      "https://www.macworld.com/article/667144/best-macbook-air-vs-pro-neo-compared.html",
      "https://support.apple.com/en-us/126318"
    ]
  },
  "measurement_tip": {
    "kpi": "track quote close rate, gross margin per bundle, and accessory attach rate by tier"
  },
  "creative_angle": "sell the same hardware under persona labels: starter, productive, solo-pro, executive-grade"
}
```
</dataset>
<dataset id="build-rack-proposal.js">
```node
// build-rack-proposal.js
// Usage:
//   node build-rack-proposal.js --csv ./rack.csv --out ./out --rackName "12U Wall Rack" --taxRate 0.0725 --markup 0.15
//
// Inputs:
//   CSV columns (per your format):
//     make,model|part-num,vendor,purchased(y/n),qty,spec-link(optional),price(optional)
//
// Outputs:
//   - out/rack.json
//   - out/grocery-list.md
//   - out/customer-proposal.md
//
// IMPORTANT: This script enforces your “no estimates / research exact retail prices + links” policy
// by leaving price/subtotals as `nx` unless the CSV includes a `price`.
// For “inline queries” for missing equipment (e.g., PoE switch for PoE APs),
// this script validates compatibility locally using rules, then emits a “needsLookup” list
// that you can wire to real web/price lookup later.

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const args = parseArgs(process.argv.slice(2));

const TAX_RATE = args.taxRate ?? 0.0725; // West Valley City combined rate (you requested)
const MARKUP = args.markup ?? 0.15;     // 15% markup on products (you requested)

const csvPath = args.csv;
const outDir = args.out;

await fs.mkdir(outDir, { recursive: true });

const raw = await fs.readFile(csvPath, "utf8");
const rows = parseCSV(raw);

// ---------- Helpers ----------
function norm(s) {
  return (s ?? "").toString().trim();
}
function keyFor(line) {
  // normalize to reduce duplicates
  const m = norm(line.make);
  const mm = norm(line.modelPart);
  return `${m}::${mm}`;
}
function parsePrice(p) {
  if (p == null) return null;
  const t = String(p).replace(/[$,\s]/g, "");
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}
function boolY(v) {
  const t = norm(v).toLowerCase();
  return t === "y" || t === "yes" || t === "true";
}
function isPoEDevice(line) {
  const s = `${line.make} ${line.model} ${line.modelPart}`.toLowerCase();
  // simple heuristic: "poe" in name/spec
  return s.includes("poe") || s.includes("power over ethernet");
}
function isPoEAP(line) {
  const s = `${line.make} ${line.model} ${line.modelPart}`.toLowerCase();
  return s.includes("uap") || s.includes("access point") || s.includes("ap") || s.includes("wifi");
}
function isAP(line) {
  const s = `${line.make} ${line.model} ${line.modelPart}`.toLowerCase();
  return s.includes("uap") || s.includes("access point") || s.includes("ap") || s.includes("wifi");
}
function isRackmountDevice(line) {
  // heuristic: names with "rackmount", "rs1215", "switch", "firewall", "ups" -> rack-friendly
  const s = `${line.make} ${line.model} ${line.modelPart}`.toLowerCase();
  if (s.includes("rackmount")) return true;
  if (s.includes("switch")) return true;
  if (s.includes("firewalla")) return true;
  if (s.includes("ups") && s.includes("rack")) return true;
  if (s.includes("power") && s.includes("rs")) return true;
  if (s.includes("tripp lite")) return true;
  // APs are typically not rackmount, even if mounted on ceilings (handle as non-mount shelf/wall/cable staging)
  return false;
}
function inferDeviceType(line) {
  const m = `${line.make} ${line.model} ${line.modelPart}`.toLowerCase();
  if (m.includes("ups")) return "power";
  if (m.includes("switch")) return "switch";
  if (m.includes("firewalla")) return m.includes("rack") ? "gateway" : "gateway";
  if (m.includes("uap") || m.includes("access point") || m.includes("ap") || m.includes("wifi")) return "ap";
  if (m.includes("keystone")) return "access";
  if (m.includes("patch") || m.includes("coupler")) return "access";
  if (m.includes("rackmount") || m.includes("rs-v") || m.includes("tray") || m.includes("fan")) return "tray";
  if (m.includes("coax") || m.includes("antenna") || m.includes("terminator") || m.includes("preamp")) return "coax";
  return "misc";
}

// ---------- Compatibility evaluation + “inline query” placeholders ----------
function evaluateCompleteness(equipment) {
  // Rules you likely need:
  // - Any PoE AP requires a PoE-capable switch (or PoE injector) on the LAN side.
  // - Any “PoE APs” -> ensure at least one device that can supply PoE.
  const aps = equipment.filter((e) => isAP(e));
  const poeAps = aps.filter((ap) => {
    // In your dataset, UAP-AC-Lite is PoE-powered; treat "uap" as PoE powered.
    const s = `${ap.make} ${ap.model} ${ap.modelPart}`.toLowerCase();
    return s.includes("uap") || isPoEDevice(ap);
  });

  const poeSwitches = equipment.filter((e) => {
    const s = `${e.make} ${e.model} ${e.modelPart}`.toLowerCase();
    return s.includes("poe") && s.includes("switch");
  });

  const nonPoESwitches = equipment.filter((e) => {
    const s = `${e.make} ${e.model} ${e.modelPart}`.toLowerCase();
    return s.includes("switch") && !s.includes("poe");
  });

  const issues = [];
  const needsLookup = [];

  // PoE coverage check
  if (poeAps.length > 0 && poeSwitches.length === 0) {
    issues.push({
      type: "MissingPoE",
      message: "PoE-powered APs detected but no PoE switch / injector found in CSV.",
      evidence: poeAps.map((x) => `${x.make} ${x.modelPart}`).slice(0, 10),
    });
    needsLookup.push({
      query: "Add PoE switch or PoE injector sized for detected PoE AP count.",
      suggested: {
        switchMake: "Ubiquiti",
        switchHint: "USW-Flex-2.5G-8-PoE (or equivalent)",
      },
    });
  }

  // Rackmount sanity checks (best-effort)
  const rackDevises = equipment.filter(isRackmountDevice);
  if (equipment.length > 0 && rackDevises.length === 0) {
    needsLookup.push({ query: "No rackmount devices detected; verify items intended for rack are included." });
  }

  // Return a deterministic validation object for templating
  return {
    apsCount: poeAps.length,
    poeSwitchCount: poeSwitches.length,
    nonPoESwitchCount: nonPoESwitches.length,
    issues,
    needsLookup,
  };
}

// ---------- Placement algorithm (rack units + airflow + cable efficiency) ----------
function placeInRack(equipment, rackConfig) {
  // Simple, deterministic “good practice” placement:
  // - Place power/PDU + UPS at bottom (or top) for safety.
  // - Place gateway/firewall mid.
  // - Place switches above/below gateway to reduce cable runs.
  // - Keep ventilation trays/fan space between hot and cable-heavy sections.
  // - Non-mountable AP/coax devices -> ventilated shelf / side staging (tracked separately).
  const items = [];
  const connections = [];

  const byType = groupBy(equipment, (e) => inferDeviceType(e));

  const ups = (byType.power ?? []).filter((e) => `${e.modelPart}`.toLowerCase().includes("rack"));
  const pdus = byType.pdu ?? [];
  const trays = (byType.tray ?? []).length ? byType.tray : [];
  const switches = byType.switch ?? [];
  const gateways = byType.gateway ?? [];
  const aps = (byType.ap ?? []).concat(byType.misc ?? []).filter((e) => isAP(e));
  const coax = byType.coax ?? [];

  // fallback: if no explicitly tray items exist, generate standard tray slots (virtual)
  const virtualTraysNeeded = rackConfig.units >= 8 ? 2 : 1;

  // Allocate rack U slots sequentially with roles
  let u = 1;

  function takeU(label, type, color, notes) {
    const slot = { u, label, type, color, notes: notes ?? "" };
    items.push(slot);
    u += 1;
    return slot;
  }

  // U1 tray/cable mgmt
  takeU("Vented Tray / Cable Management", "tray", "#e6ffe6", "Keep slack here; separate power vs data cable bundles");

  // UPS slot if present, else virtual
  if (ups.length > 0) {
    // place first UPS
    const x = ups[0];
    takeU(x.label ?? `${x.make} ${x.modelPart}`, "power", "#ffe6a7", "Rack UPS (4-hour target for rack gear)[^ups4]");
  } else {
    takeU("Rackmount UPS (lookup required)", "power", "#ffe6a7", "Add exact model + verified 4-hour runtime[/^note4][^ups4]");
  }

  // PDU slot if present
  const pduItem = (byType.access ?? []).find((e) => false) ?? null;
  if ((byType.tray ?? []).length || virtualTraysNeeded) {
    // keep airflow split
    takeU("Ventilation Tray / Fan Space", "tray", "#e6ffe6", "Airflow separation between hot switch/gateway and patching");
  } else {
    takeU("Ventilation Tray / Fan Space", "tray", "#e6ffe6", "Airflow separation");
  }

  // Switch (PoE switch preferred near APs)
  const poeSwitch = switches.find((s) => isPoEDevice(s)) ?? switches[0] ?? null;
  if (poeSwitch) {
    takeU(`${poeSwitch.make} ${poeSwitch.modelPart}`, "switch", "#d1ecff", "Primary LAN PoE powering for APs if PoE-capable");
  } else {
    takeU("PoE Switch / Injector (lookup required)", "switch", "#d1ecff", "Required for PoE APs; add exact model + retail pricing");
  }

  // Gateway/firewall mid
  const fw = gateways[0] ?? null;
  if (fw) takeU(`${fw.make} ${fw.modelPart}`, "gateway", "#e9d5ff", "Routing / security gateway");
  else takeU("Security Gateway (lookup required)", "gateway", "#e9d5ff", "Add exact model + retail pricing");

  // Remaining switch (non-PoE) if any
  const otherSwitch = switches.find((s) => s !== poeSwitch) ?? switches[1] ?? null;
  if (otherSwitch) takeU(`${otherSwitch.make} ${otherSwitch.modelPart}`, "switch", "#d1ecff", "Secondary switching / segmentation (if used)");

  // Access/coupler/patch area + spare/labeling
  takeU("Keystone / Patch / Cable Couplers", "access", "#fff3d6", "Short horizontal patch runs; label every end");
  takeU("Coax / Antenna Staging (if used)", "coax", "#fff3d6", "Non-mountable coax gear uses ventilated shelf/side mount[^shelf]");
  // Fill remaining U with spare/vented shelves suggestion
  while (u <= rackConfig.units) {
    takeU(`Spare / Ventilation Slot ${u}`, "spare", "#f2f2f2", "Keep airflow and leave room for future modules");
  }

  // Connections (best-effort labels for templating)
  connections.push({ from: "WAN", to: "Gateway", label: "WAN Ethernet", speed: "1G" });
  connections.push({ from: "Gateway", to: "PoE Switch", label: "LAN uplink", speed: "2.5G" });
  connections.push({ from: "PoE Switch", to: "APs", label: "PoE + Ethernet", speed: "1G" });
  // Non-PoE switch connection if present
  if (otherSwitch) connections.push({ from: "PoE Switch", to: "Other Switch", label: "Ethernet handoff", speed: "1G" });

  // Nodes
  const nodes = {
    WAN: { label: "Internet / ISP / Modem", icon: "cloud", color: "#ffe0e0" },
    Gateway: { label: "Firewalla / Security Gateway", icon: "shield", color: "#e9d5ff" },
    "PoE Switch": { label: "USW-Flex / PoE Switch", icon: "switch", color: "#d1ecff" },
    APs: { label: `APs (UAP-AC-Lite + Ceiling APs)`, icon: "wifi", color: "#e0f7ff" },
  };
  if (otherSwitch) nodes["Other Switch"] = { label: `Switch: ${otherSwitch.make} ${otherSwitch.modelPart}`, icon: "switch", color: "#d1ecff" };
  if (coax.length > 0) nodes["Coax Staging"] = { label: `Coax gear (${coax.length} items)`, icon: "antenna", color: "#f7e0ff" };

  return { items, connections, nodes };
}

function buildGroceryList(equipment, validated, taxRate, markup) {
  // “Complete grocery list” means:
  // - all CSV items with qty
  // - plus standard cabling/accessories required by compatibility/placement
  // Since you said “do not estimate any numbers” and “provide links or nx”:
  //   we will NOT guess missing cable quantities—only include generic required accessories as `nx qty` unless CSV provides qty.
  const lines = [];

  lines.push(`# Grocery List — ${args.rackName ?? "12U Wall Rack"}`);
  lines.push(`- Tax rate (West Valley City, UT): ${(taxRate * 100).toFixed(2)}%`);
  lines.push(`- Product markup: ${(markup * 100).toFixed(0)}%`);

  lines.push(`\n## Items from CSV`);
  for (const e of equipment) {
    const price = parsePrice(e.price);
    lines.push(
      `- ${e.qty}x ${e.make} ${e.modelPart} (${e.vendor ?? "nx"})` +
      ` | link: ${e.specLink ? e.specLink : "nx"}` +
      ` | unitPrice: ${price != null ? price : "nx"}`
    );
  }

  lines.push(`\n## Required Add-ons (derived from compatibility / deployment)`);
  if (validated.needsLookup.length) {
    for (const n of validated.needsLookup) {
      lines.push(`- Lookup required: ${n.query} | suggested: ${JSON.stringify(n.suggested)}`);
    }
  }

  // Standard always-on accessories (WITHOUT quantities unless present in CSV)
  lines.push(`- Patch cable kits (exact length/qty lookup from rack/workstation topology): unitPrice/link: nx`);
  lines.push(`- Blank keystone plates + keystone couplers (qty: nx unless provided): unitPrice/link: nx`);
  lines.push(`- Velcro cable straps / ties (qty: nx unless provided): unitPrice/link: nx`);
  lines.push(`- Rack labels / labeling tape (qty: nx unless provided): unitPrice/link: nx`);
  lines.push(`- Ventilated shelf / fan tray for non-mountables (qty: nx unless provided): unitPrice/link: nx`);

  if (validated.issues.length) {
    lines.push(`\n## Validation Issues`);
    for (const it of validated.issues) lines.push(`- ${it.type}: ${it.message}`);
  }

  return lines.join("\n");
}

function buildCustomerProposal(equipment, rackPlacement, validated, taxRate, markup) {
  // “Customer-ready proposal document with … package pricing”
  // We will not compute totals unless we have numeric prices for all lines.
  // Any missing prices -> `nx`.
  const lines = [];
  lines.push(`# Customer Proposal — Pilot Template`);
  lines.push(`Business: ${args.business ?? "A Little Aloha LLC"}`);
  lines.push(`Location: West Valley City, Utah`);
  lines.push(`Tax rate: ${(taxRate * 100).toFixed(2)}%`);
  lines.push(`Product markup: ${(markup * 100).toFixed(0)}%`);
  lines.push(``);

  lines.push(`## Package: 12U Wall Rack + Networking + UPS (4-hour target per dataset)`);
  lines.push(``);
  lines.push(`### Rack layout placement (U-by-U)`);
  lines.push(`| U | Label | Type | Notes |`);
  lines.push(`|---:|---|---|---|`);
  for (const it of rackPlacement.items) {
    lines.push(`| ${it.u} | ${escapeMD(it.label)} | ${it.type} | ${escapeMD(it.notes ?? "")} |`);
  }

  lines.push(`\n### Network connectivity (logical)`);
  lines.push(`| From | To | Label | Speed |`);
  lines.push(`|---|---|---|---|`);
  for (const c of rackPlacement.connections) {
    lines.push(`| ${escapeMD(c.from)} | ${escapeMD(c.to)} | ${escapeMD(c.label)} | ${escapeMD(c.speed ?? "nx")} |`);
  }

  lines.push(`\n### Validation`);
  if (validated.issues.length === 0) lines.push(`- No compatibility gaps detected (based on current CSV).`);
  else {
    for (const it of validated.issues) {
      lines.push(`- ${it.message}`);
    }
    lines.push(`- Items requiring pricing/spec lookup will be included as ` + "`nx`" + ` until sourced.`);
  }

  // Package pricing lines
  lines.push(`\n### Package Pricing (product markup + taxes)`);
  lines.push(`- Product lines with missing unitPrice are priced as \`nx\`.`);
  lines.push(``);

  const priced = equipment
    .map((e) => {
      const price = parsePrice(e.price);
      const unitWithMarkup = price != null ? price * (1 + markup) : null;
      const sub = unitWithMarkup != null ? unitWithMarkup * e.qty : null;
      return { e, price, unitWithMarkup, sub };
    });

  lines.push(`| Item | Qty | UnitPrice (vendor) | UnitPrice (with ${Math.round(markup * 100)}% markup) | Subtotal |`);
  lines.push(`|---|---:|---|---|---|`);
  for (const p of priced) {
    const item = `${p.e.make} ${p.e.modelPart}`;
    lines.push(
      `| ${escapeMD(item)} | ${p.e.qty} | ${p.price ?? "nx"} | ${p.unitWithMarkup != null ? p.unitWithMarkup.toFixed(2) : "nx"} | ${
        p.sub != null ? p.sub.toFixed(2) : "nx"
      } |`
    );
  }

  lines.push(`\n- Estimated shipping: \`nx\` (requires carrier quote).`);
  lines.push(`- Labor/install/documentation: \`nx\` (requires your chosen pricing method).`);

  // Taxes only if subtotal computable
  const allHavePrice = priced.every((p) => p.sub != null);
  if (allHavePrice) {
    const hardwareSubtotal = priced.reduce((acc, p) => acc + p.sub, 0);
    const taxes = hardwareSubtotal * taxRate;
    lines.push(`- Hardware subtotal (with markup): ${hardwareSubtotal.toFixed(2)}`);
    lines.push(`- Taxes (${(taxRate * 100).toFixed(2)}%): ${taxes.toFixed(2)}`);
    lines.push(`- Total (hardware + taxes): ${(hardwareSubtotal + taxes).toFixed(2)}`);
  } else {
    lines.push(`- Taxes: \`nx\` (missing unit prices prevent exact calculation).`);
  }

  return lines.join("\n");
}

// ---------- Main ----------
const rackConfig = {
  name: args.rackName ?? "12U Wall Rack",
  units: args.units ?? 12,
  widthIn: args.widthIn ?? 19,
  orientation: "front",
};

const validated = evaluateCompleteness(rows);

const placement = placeInRack(rows, rackConfig);

const rackJson = {
  rack: rackConfig,
  items: placement.items,
  connections: placement.connections,
  nodes: placement.nodes,
  legend: {
    speed: [
      { label: "1 Gbps", color: "#d11" },
      { label: "2.5+ Gbps", color: "#1677ff" },
    ],
  },
  validation: {
    completeness: {
      apsCount: validated.apsCount,
      poeSwitchCount: validated.poeSwitchCount,
      nonPoEswitchCount: validated.nonPoEswitchCount ?? validated.nonPoESwitchCount ?? 0,
    },
    issues: validated.issues,
    needsLookup: validated.needsLookup,
  },
  notes: {
    // keep it structured; footnote references can be used later in diagram templates
    footnotes: {
      ups4: "Rack UPS intended for 4-hour runtime target; exact model must be sourced with validated runtime under expected load.",
      shelf: "Non-mountable equipment (AP/coax/staging) requires ventilated shelf or appropriate side staging inside/near the rack environment.",
    },
  },
};

await fs.writeFile(path.join(outDir, "rack.json"), JSON.stringify(rackJson, null, 2), "utf8");

const grocery = buildGroceryList(rows, validated, TAX_RATE, MARKUP);
await fs.writeFile(path.join(outDir, "grocery-list.md"), grocery, "utf8");

const proposal = buildCustomerProposal(rows, placement, validated, TAX_RATE, MARKUP);
await fs.writeFile(path.join(outDir, "customer-proposal.md"), proposal, "utf8");

console.log("Done.");
console.log("- rack.json");
console.log("- grocery-list.md");
console.log("- customer-proposal.md");

// ---------- CSV parsing ----------
function parseCSV(text) {
  // Minimal CSV parser for comma-separated with no quoted commas.
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const header = lines.shift().split(",").map((h) => h.trim());

  const idx = (name) => header.indexOf(name);

  const out = [];
  for (const line of lines) {
    const cols = splitCSVLine(line);
    const get = (name) => cols[idx(name)] ?? "";

    const make = get("make");
    const modelPart = get("model|part-num"); // exact header name from your spec
    const vendor = get("vendor");
    const purchased = get("purchased(y/n)");
    const qty = Number(get("qty") || 0);
    const specLink = get("spec-link(optional)");
    const price = get("price(optional)");

    out.push({
      make: norm(make),
      modelPart: norm(modelPart),
      vendor: norm(vendor),
      purchased: boolY(purchased) ? "y" : "n",
      qty: Number.isFinite(qty) && qty > 0 ? qty : 1,
      specLink: norm(specLink) || null,
      price: norm(price) || null,
      // additional helpers
      model: norm(modelPart).split(" - ")[0] || norm(modelPart),
      label: `${norm(make)} ${norm(modelPart)}`,
    });
  }
  return out;
}

function splitCSVLine(line) {
  // Handles simple quoted values
  const result = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"' && line[i - 1] !== '\\') {
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === "," && !inQuotes) {
      result.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  result.push(cur);
  return result.map((s) => s.trim());
}

function groupBy(arr, fn) {
  const m = new Map();
  for (const x of arr) {
    const k = fn(x);
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(x);
  }
  return Object.fromEntries(m.entries());
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const k = a.slice(2);
    const v = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : true;
    out[k] = v;
    if (v !== true) i++;
  }
  // coerce numeric
  if (out.units != null) out.units = Number(out.units);
  if (out.widthIn != null) out.widthIn = Number(out.widthIn);
  if (out.taxRate != null) out.taxRate = Number(out.taxRate);
  if (out.markup != null) out.markup = Number(out.markup);
  return out;
}

function escapeMD(s) {
  return (s ?? "").toString().replace(/\|/g, "\\|").replace(/\n/g, " ");
}
```
</dataset>
</artifacts>