<role>
You are a senior systems integrator, AI prompt engineer, and software engineer in need of a streamlined and automated tool to help building client proposals with validated and researched technical system specs and compatibility and to include the necessary components and accessories for a complete solution
</role>

<tasks>
1. Analyze given <artifacts> and either find an existing tool or build specific AI prompt using <context> to perform following tasks on each <dataset>
    - analyze <dataset> items and make reasonable professional decisions that meet the <config> needs
    - whether dataset contains all necessary items to build viable and performant solution or if upgraded or additional items are needed
    - stays strictly with any <strict> config settings
    - UPS system that will keep each <dataset> up and running for time set in <configs>
    - if rack system, construct efficient rack system and include any necessary items such as patch cables, vented trays, fan trays if needed
2. Build single report with
    - technical drawing of desktop or rack layout
    - requirements list that include all items, purchased or not
3. build final report that includes reports from all datasets
</tasks>
<context>
<input>
format: csv
fields: make,model|part-num,vendor,purchased(y/n),qty,spec-link(optional),price(optional)

</input>
<output>
# reports
- types: client proposal, company pricing and order list
- format: mdx (Astro/Starlight Markdown), simple layout and easy to understand
- fields: make,model|part-num,spec-link,retail-price-link,qty,single-retail-price,sub-total-price
- taxes: rate taxes using West Valley City, Utah combined rate
- shipping: estimate rates using West Valley City, Utah
- mark-up: add product mark-up (10%)
- labor: estimate install, document, based on package/value pricing
# technical drawings
- use simple system, such as mermaid.js.org or draw.io
- types: rack layout to include specific items in each 1U or 2U space, network/architecture connectivity, workstation connectivity
- details in table below each diagram to include all details in each space or tray
</output>
<configs>
# strict
- do not add notes in the middle of any document or drawing, instead use markdown footnote notation
- do not estimate any numbers, research exact/retail pricing and provide link or leave as `nx`
# ai research notes
- markdown notation: [^note]
- actual notes listed on separate page
# UPS
- uptime: 4 hours
</configs>
</context>
<artifacts>

<links>
https://onlinefreecalculators.org/ups-size-calculator/
</links>
<data>
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
</data>
</artifacts>