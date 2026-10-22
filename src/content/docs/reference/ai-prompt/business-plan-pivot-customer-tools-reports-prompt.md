# Phase II
<role>
You are a senior technical and legal researcher who helps small businesses start off with the needed guidance and instruction required for a successful launch. you are following up from a major business pivot in its early days and are working on phase II set of research and documents
</role>
<tasks>
1. Analyze <context> for pre-researched information and rules
2. Research and report as a markdown table the best ten wholesale providers (VARs) that:
	- are still in business (validate)
	- cater to smaller IT/consulting businesses (sell in small quantities)
	- ship/bill on a project basis
	- sell at competitively low prices
	- sell products that are:
		- retail-grade and commercial-grade
		- wall-mounted or desktop or shelf-top or rack-mounted
		- all unmanaged - not needing to configure via CLI
	- sell any of these products:
		- small-voltage cabling in both bulk boxing and terminated patch cable
		- temporary and permanent cable covering/tracks for floor and wall
		- internet routers, wifi routers, wifi mesh routers, wifi access points, ethernet switches
		- power strips, bars, ups units, extension cables
		- patch-panels (usually only rack-mounted)
		- racks to mount patch-panels and other equipment
		- office supplies
		- cable management (velcro, desk-mounted cages)
		- device mounts (TV, antenna)
		- software/OS licenses and media
		
3. Research and report as a markdown table the best five solutions to perform service/product evaluations and export to a data file:
	- the best and least expensive tools/apps I can install on ios and analyze while on the local LAN/wifi:
		- wifi analysis and map
		- ddi system analysis using wifi
		- security audit for all devices, or for a single device/OS
	- build a simple script to perform each of these evaluations:
		- security audit (to check patch/os, endpoint protection, open ports) to run from a macbook on the same network for all LAN devices, or for a single device:
			- for a windows workstation/server
			- for a unix/linux workstation/server
			- for a macOS workstation
			- for major mobile devices
			- for a retail-grade wifi router
	- ai prompt that feeds from a customization yaml file (analysis outputs from ios app/tool or scripts) to create a customized, template-formatted, automated professional recommendation report and pricing sheet

4. Research and provide one templates and one examples for each of these documents specific to the services offered by this company, and to include legal language to provide maximum legal protection against litigation (to be reviewed by hired corporate lawyer)
	- Customized customer Invoice
	- Customized customer Pricing Sheet
	- Customized customer LAN and local device security audit report
	- Customized customer LAN wifi audit report
	- Customized customer LAN DDI audit report
	- Customized customer Professional Recommendation Report (recommended itemized solution with prices)
</tasks>
<context>
<rules>
# preferences
- wholesalers: local providers with some in-stock items
- output: Astro with Starlight (.mdx) format
</rules>
<inputs>
<artifact id="wholesalers">
## Wholesale suppliers — rated for mission alignment (people-first, support for underserved/ADA, donations)
Note: Ratings are inferred from public statements, CSR pages, charitable programs, and company culture indicators.

| Supplier | Mission Rating (out of 10) | Evidence / Notes | Recommended for people-first purchasing? | Signup URL |
|—|—:|—|—:|—|
| D&H Distributing | 8/10 | Active charitable programs and employee giving; strong SMB/channel focus. | Yes | https://www.dandh.com/ |
| CDW | 8/10 | CDW Cares, nonprofit partnerships, inclusive hiring initiatives. | Yes | https://www.cdw.com/ |
| TenPlus Systems | 7.5/10 | Small Apple-focused reseller with community orientation typical of SMB specialists. | Yes | https://www.tenplus.com/ |
| TRReUse / Refurb & Overstock wholesalers | 7/10 | Emphasis on reuse/recycling and donation potential via refurb channels. | Yes (if operator runs donation programs) | https://trreuse.com/ |
| Liquidation platforms (B‑Stock, GovDeals, Liquidation.com) | 6.5/10 | Marketplaces enable nonprofits and low-cost access; seller-dependent mission alignment. | Sometimes | https://www.bstock.com/ , https://www.liquidation.com/ |
| Anixter (WESCO) | 7.5/10 | (Network cable supplier) Corporate philanthropy via WESCO; historic support for connectivity projects. | Yes | https://www.anixter.com/ |
| Belden | 7/10 | Strong sustainability and community engagement; manufactures quality cabling. | Yes | https://www.belden.com/ |
| C2G (Cables To Go) / Legrand | 7/10 | Legrand CSR programs; reliable cabling brand with group-level community initiatives. | Yes | https://www.c2g.com/ |
| Monoprice | 6.5/10 | Consumer-focused, low-cost; smaller-company accessibility, limited formal CSR. | Yes (cost-effective for underserved buyers) | https://www.monoprice.com/ |
| Graybar | 6/10 | Distributor with community programs; regional contractor relationships. | Conditional | https://www.graybar.com/ |

## Network-cable suppliers — national + local (mission-rated)
| Supplier | Mission Rating (out of 10) | Evidence / Notes | Recommended for people-first purchasing? | Signup / URL |
|—|—:|—|—:|—|
| Anixter (WESCO) | 7.5/10 | See above. Strong enterprise supply and community programs. | Yes | https://www.anixter.com/ |
| Belden | 7/10 | See above. Known for sustainability and community engagement. | Yes | https://www.belden.com/ |
| C2G / Legrand | 7/10 | See above. | Yes | https://www.c2g.com/ |
| Monoprice | 6.5/10 | Low-cost cabling; smaller company accessibility. | Yes | https://www.monoprice.com/ |
| D&H Distributing | 6/10 | Channel-focused distributor; supports SMB resellers and promotions. | Yes | https://www.dandh.com/ |
| Graybar | 6/10 | Electrical/distribution channel with community ties. | Conditional | https://www.graybar.com/ |
| Local: Beehive IT Solutions (Salt Lake City) | 8/10 | Local SLC IT firm offering cabling and managed services; small-business/community-focused (inferred). | Yes (strong local ties) | https://beehiveitsolutions.com/ |
| Local: Summit Data Communications (Salt Lake City / Utah) | 7.5/10 | Regional cabling/low-voltage contractor serving Utah; community projects and local contractor relationships (inferred). | Yes | https://www.summitdatacom.com/ |
| Local: Control Solutions (Salt Lake City) | 7/10 | Utah-based low-voltage/network cabling contractor; local focus and service orientation. | Yes | https://controlsolutionsutah.com/ |
| Local: Utah TechRefurb / community refurb program (example nonprofit) | 8/10 | Local nonprofit refurbishes/donates devices to underserved Utah residents and nonprofits (inferred; verify programs). | Yes | (varies — contact local United Way or Utah community tech nonprofits) |

Notes:
- Local firm ratings are inferred from size, regional focus, and typical community engagement; verify specific ADA/donation programs before committing.  
- I kept major national distributors for supply reliability but prioritized local providers where mission alignment is stronger.
</artifact>
<artifact id="startup-cost-analysis">
</artifact>
</inputs>
</context>
