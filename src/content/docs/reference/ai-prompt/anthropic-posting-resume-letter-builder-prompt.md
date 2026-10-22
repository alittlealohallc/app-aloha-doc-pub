<role>
you are an Anthropic mentor, senior recruiter, architect of AI and ATS systems used at Anthropic who reviews applications for open positions with a strong goal of quickly weeding out weak applications or job seekers. You are aware of AI inherent biases, especially towards dismissing applicants and applications that have been rejected due to the candidate belonging to a minor group (racial, background, already rejected for other positions).[^biases]
</role>
<task>
1. Build a resume that will pass the initial tests to ensure an interview with the hiring manager and/or team mates assigned to interview candidates.
	- Take the full resume from <resume>
	- compare this to the <posting>
	- use same voice as applicant and match as best possible to help the resume pass the AI and ATS scanner systems
2. Build a solid cover letter that tells a compelling story of this applicant's abilities and experiences that will draw in those reviewing this application
</task>
<context>
[^biases]: https://hai.stanford.edu/news/ai-hiring-tools-can-yield-racial-bias-and-systemic-rejection
<guardrails>
- use my voice throughout (professional with witty dry humor where appropriate) using <letters> as examples
- read between the lines on my full resume and find hidden gems that would fit the job description
- use truth over your own fantasy, ask if unsure
- I tend to be more honest than not, which can sometimes be to my own downfall
- I am passionate about helping people and bridging equity gaps (see my volunteer history)
- I belong to the neurodiverse and mental health underrepresented groups - use for your knowledge, keep it subtle in the "Summary" and let the volunteer work (Mental Health First Aid, Refugee Foster Parenting) speak for itself
- I am willing to travel as needed to be successful in this role
- export documents as UTF-16, clear text code blocks, one block per document
</guardrails>
<specific>
# RLHF & Eval Pipelines
## RLHF Related Content
Similar human examples:
- As Founder of Pro Services With A Little Aloha, I perform these
	- provide free consultation and initial training to consultants on how to use new technologies or the benefits of the technologies I use to build solutions to their problems
	- In preparation for several proposals I have submitted to present professional conference talks, I am testing and enhancing myself to build better prompts to build technical solutions using my prompt documents (and skills) and input from the customer to solve their technical problems
- In previous professional roles, I performed these
	- Wells Fargo / Information Security Engineer: 
		- Trained other engineers how to implement changes, requests, etc using my documentation and standards. Then, I adapted and enhanced documentation and training experiences as the environment or needs changed
	- Wells Fargo / DDI Network & Automation Engineer: 
		- Trained analysts on the DDI Object provisioning/support team on basic networking and DDI concepts and technologies, on current industry/enterprise/group policies, on automation/code updates, and how all these things affect the workflow and their daily routines. 
		- Created new documentation during/after major Wells Fargo and Wachovia merger for the converging DDI/Network team, and later adapted documentation and training to meet changing needs, policies, and environments.
	- English Skills Learning Center at LDS Humanitarian Center / Digital Literacy:
		- created new curriculum from scratch to teach emergent-reader refugee and asylum adults how to use modern technologies and tools to communicate with others in a tech-savvy economy here in the US
		- taught and trained 120 students daily in use, care, and basic troubleshooting techniques to adults who know very little English and come from war-torn countries with no written language let alone technology
	
## Eval Pipelines Content
Similar human examples:
- As Founder of Pro Services With A Little Aloha, I perform these
	- I build CI/CD pipelines for clients using Git repositories, GitHub Actions, Cloudflare Workers and Pages
	- I am preparing a professional conference talk on how to build a simple pipeline with AI prompts that build Eval Pipeline tools for each application deployed to include: SEO, Accessibility, Security evaluations after researching current policies, guidelines, technologies
	- Manually build and enhance AI prompts to build my own automation tools to help customers gauge and keep their digital assets safe and visible to meet their marketing and business needs while also keeping security and accessibility top of mind
- In previous professional roles, I performed these
	- Wells Fargo / Information Security Engineer: 
		- built manual FrontEnd (UI) QA checklist for all group-developed and -supported apps for QA evaluations by Engineers in development and deployment phases for each code deployment
		- became the overall infrastructure engineer consultant for the entire group for changes and configurations managed by outside groups and teams by documenting, validating, and testing the request and evaluation of several vital network and hosting technologies (F5 BigIP load-balancing, application/system monitoring) to boost performance and availability for the groups applications (node.js and Mongodb)
		- architected, tested, and documented the monitoring and alerting best-practice standards for monitoring and alerting of applications, services, system components for the entire grouip
	- Wells Fargo / DDI Network Engineer & Automation Engineer & Technical Team Lead: 
		- for a decade, I built and enhanced documentation to ensure leaders, analysts, and other engineers could understand and follow with guidelines to avoid errors and issues in deploying vital infrastructure and DNS record changes. I followed the guidance and leadership of group-level documentation standard owners and later built and enforced the use of my own documentation standards
		- for over seven years, I streamlined, improved accuracy, improved security, decreased errors, and increased automation, and documented all the automation changes for the DDI object / DNS record provisioning pipeline from customer request to customer post-evaluation using only Perl, shell scripting, and Linux platforms interfacing with self-hosted Infoblox network appliances and IPAM system, and MySQL/SQLite databases. Nightly changes ranged from under 1,000 to 10,000 records
	- 
</specific>
</context>
<posting>
Research Operations, External Artifacts
Remote-Friendly, United States
About Anthropic

Anthropic’s mission is to create reliable, interpretable, and steerable AI systems. We want AI to be safe and beneficial for our users and for society as a whole. Our team is a quickly growing group of committed researchers, engineers, policy experts, and business leaders working together to build beneficial AI systems.

About the role

Every time Anthropic releases a model, we publish a system card: a long-form technical document that describes the model's capabilities, safety properties, evaluation results, and the reasoning behind our deployment decisions. System cards are some of the most consequential and widely read documents we produce, and they are one way we hold ourselves publicly accountable for the safety claims we make.

We're hiring a Research Operations Specialist to help own system card production. You'll work embedded with research and safety teams through each launch, coordinating contributions from dozens of researchers, holding the schedule and the open-threads list, and making sure the document ships on time as a single, accurate, internally consistent whole. Along the way you'll do real editorial work: turning results and researcher notes into clear, honest prose and pushing back when an explanation doesn't hold together.

System cards sit within a wider family of external safety artifacts, including risk reports and Responsible Scaling Policy updates. Part of this role is keeping the system card consistent with those documents so that Anthropic's public safety story reads as one coherent account rather than several.

This role sits in Research Operations and works closely with Alignment, Safeguards, Frontier Red Team, and capabilities research. The core of the job is part project management, part translation: keeping a complex, many-author, hard-deadline document on track while making frontier safety research legible to researchers, policymakers, journalists, and the public — without sacrificing precision.

Key responsibilities:

Drive system card production end to end — own the timeline, the contributor list, the open-threads tracker, and the definition of done for each launch
Coordinate dozens of contributors across Alignment, Safeguards, Frontier Red Team, Interpretability, and capabilities; chase drafts, resolve differences of perspective, seek ground truth, and run final document beautification
Edit, and sometimes write, content; work directly with researchers to turn their results, notes, and plots into clear, scientific, non-marketing prose and maintain Anthropic's voice across sections drafted by many different people
Guard accuracy and consistency; catch terminology drift, claims that subtly contradict each other, and discrepancies between internal communications and system card drafts
Keep the system card aligned with related artifacts; track what's being said in risk reports, RSP disclosures, and other safety documentation so the system card stays consistent with them, and flag conflicts early
Improve the process between launches; build and maintain templates, style guidance, contributor guides, checklists, and reusable section scaffolds so each cycle starts from a stronger baseline
Pick up other research-adjacent operations and writing, such as internal research summaries, release notes, and documentation that helps research leadership communicate clearly
Minimum qualifications:

Strong project management and execution skills; able to track dozens of open threads to closure during compressed launch periods with many moving parts and many owners
Demonstrated ability to coordinate and influence without direct authority, building trust while chasing drafts and giving constructive editorial feedback
Excellent technical writing skills; able to take dense, jargon-heavy source material and produce prose that is precise, honest, and readable by a smart non-specialist
Comfort working closely with researchers; able to read an evaluation results table, ask the right clarifying questions, and push back when an explanation doesn't hold together
Working knowledge of large language models at a conceptual level, including fluency with vocabulary such as pretraining, RLHF, context windows, evals, and red-teaming
Data communication literacy; able to identify how a chart or table could be made clearer and more accurate
High integrity and a genuine sense of accountability around producing documents that hold Anthropic publicly responsible for its safety claims
Preferred qualifications:

Familiarity with AI safety, AI policy, alignment research, evaluation methodology, or the RSP landscape beyond baseline LLM knowledge
Background in science communication, research publishing, or technical journalism
A track record of shipping long-form technical documents: research reports, whitepapers, technical standards, regulatory filings, or science journalism
Experience with safety, risk, or compliance documentation such as regulatory submissions, safety cases, security disclosures, or clinical/scientific reporting
An eye for visual communication and experience shipping polished, on-brand documents
Light scripting or tooling ability (enough to automate a formatting check or wrangle a spreadsheet)
The annual compensation range for this role is listed below. 

For sales roles, the range provided is the role’s On Target Earnings ("OTE") range, meaning that the range includes both the sales commissions/sales bonuses target and annual base salary for the role.

Annual Salary:
$260,000 - $310,000 USD
Logistics

Minimum education: Bachelor’s degree or an equivalent combination of education, training, and/or experience

Required field of study: A field relevant to the role as demonstrated through coursework, training, or professional experience

Minimum years of experience: Years of experience required will correlate with the internal job level requirements for the position

Location-based hybrid policy: Currently, we expect all staff to be in one of our offices at least 25% of the time. However, some roles may require more time in our offices.

Visa sponsorship: We do sponsor visas! However, we aren't able to successfully sponsor visas for every role and every candidate. But if we make you an offer, we will make every reasonable effort to get you a visa, and we retain an immigration lawyer to help with this.

We encourage you to apply even if you do not believe you meet every single qualification. Not all strong candidates will meet every single qualification as listed.  Research shows that people who identify as being from underrepresented groups are more prone to experiencing imposter syndrome and doubting the strength of their candidacy, so we urge you not to exclude yourself prematurely and to submit an application if you're interested in this work. We think AI systems like the ones we're building have enormous social and ethical implications. We think this makes representation even more important, and we strive to include a range of diverse perspectives on our team.

Your safety matters to us. To protect yourself from potential scams, remember that Anthropic recruiters only contact you from @anthropic.com email addresses. In some cases, we may partner with vetted recruiting agencies who will identify themselves as working on behalf of Anthropic. Be cautious of emails from other domains. Legitimate Anthropic recruiters will never ask for money, fees, or banking information before your first day. If you're ever unsure about a communication, don't click any links—visit anthropic.com/careers directly for confirmed position openings.

How we're different

We believe that the highest-impact AI research will be big science. At Anthropic we work as a single cohesive team on just a few large-scale research efforts. And we value impact — advancing our long-term goals of steerable, trustworthy AI — rather than work on smaller and more specific puzzles. We view AI research as an empirical science, which has as much in common with physics and biology as with traditional efforts in computer science. We're an extremely collaborative group, and we host frequent research discussions to ensure that we are pursuing the highest-impact work at any given time. As such, we greatly value communication skills.

The easiest way to understand our research directions is to read our recent research. This research continues many of the directions our team worked on prior to Anthropic, including: GPT-3, Circuit-Based Interpretability, Multimodal Neurons, Scaling Laws, AI & Compute, Concrete Problems in AI Safety, and Learning from Human Preferences.

Come work with us!

Anthropic is a public benefit corporation headquartered in San Francisco. We offer competitive compensation and benefits, optional equity donation matching, generous vacation and parental leave, flexible working hours, and a lovely office space in which to collaborate with colleagues. Guidance on Candidates' AI Usage: Learn about our policy for using AI in our application process.
</posting>
<letters>
<developer>
I am excited to apply for the Software Engineer position and am confident I will be a strong asset to the
Men & Mice team in this role. I have a strong passion for developing and maintaining applications for an
organization that promotes having fun, breaking things (and fixing them), and ultimately being a part of a
diverse team in fulfilling the mission to equip customers with the tools to manage their core networking
services in a simple and sustainable way.
I have a Bachelor of Science degree in Computer Science and Information Systems. I have worked with
Python and React.js for under a year, Node.js and cybersecurity for over two years, Perl and Linux shell
scripting for over five years, and web development and DDI experience for more than a decade. Having
just picked up PowerShell in my last position showing that I am eager to learn new things and grow with
the company.
I am a seasoned Engineer who is experienced in versed in Agile philosophies and Lean/Scrum
methodologies, has solved countless problems with innovative solutions, and has designed and
developed several projects of various size all in collaboration with a dedicated team and management.
When I was the Technical Team lead at Wells Fargo, I began a mentor program for all members of the
DDI Provisioning Team (US and Off-shore) to freely spread technical and process information, answer
questions about the work and processes, and help the team collaborate in a positive environment. In a
later position, I pioneered the Scrum Master role for fellow DevOps Engineers, also serving as a coach
and mentor to the team on infrastructure technologies and processes. I know I can perform at the same
or greater level for Men & Mice and its customers.
</developer>
<leader>
I was excited to learn about your posting for a Software Development Manager from a
current employee, Brian Nelson. With a Bachelor of Science degree in Computer
Science and Information Systems; hands-on experience in software development and
leading teams in both a project and employee relations, I am confident I will be a
strong asset to your team.
I enjoy being challenged and engaging with projects that require me to work outside
my comfort and knowledge set, as continuing to learn new leadership skills and
techniques are important to me and the success of Galileo Technologies.
My approach to leadership is akin to the Agile philosophy. Communicate clearly the
expectations upfront. Schedule and follow through with consistent checkpoints and
tools for assured success. Coach and guide each individual for greater professional and
personal growth on an iterative basis.
I’ve attached a copy of my resume that details my work experience in software
development, engineering, team leadership and coaching. I can be reached anytime via
my cell phone, 385-414-2779 or via email at kentmschaeffer@icloud.com.
Thank you for your time and consideration. I look forward to speaking with you about
this opportunity.
</leader>
<general>
I am an experienced, caring, detail-oriented, and efficient professional hungry to get back to serving the greater good. Given my
length and depth of professional and volunteer experience, I am confident you will find I have what is needed to excel in the
Administrative Assistant role.
I have built a career of becoming an expert in the field or project assigned within a short amount of time. I pride myself in being
enthusiastic, empathetic, and having the leadership skills to collaborate with and guide others. I have a Bachelor of Science
degree in Computer Science and Information Systems with a minor in Business Management. It is my mission to master this role
by enhancing my knowledge of higher educational resources and communicating the right information to support the SLCC
students and the community at large.
I have a solid track record of consistently and successfully bringing people together to accomplish a common goal, to ensure
everyone feels included and fun is had by all (when appropriate). I see the endless opportunity to serve the varied needs of the
Odyssey House, the Salt Lake County Jail, and our community at large. I further believe it is vital to provide marginalized and
diverse peoples supportive tools and collaborations to bridge equity knowledge and opportunity gaps. Please bring me on board
so that I can further the success of the program.
Thank you for your time and consideration. I look forward to speaking with you and the rest of the team about this opportunity.
</general>
<engineer>
I am an experienced Network, Systems, Data, and Software Engineer hungry to get back to the command line, so to speak. I
would love to join the SLCO family as the next Server Administrator. I am confident you will find me a strong candidate for this
role as I have a strong passion for building a better future for individuals, communities, and the world. Let me show you how I
can benefit the SLCO and its users in this role.
In various capacities and roles, I have built a high proficiency in many technical products and have built and supported
applications and systems in OnPrem and Cloud environments. I have worked with leadership, colleagues, vendors,
internal/external clients, and change management to plan and implement projects with varied technologies and on small to large
scale. I would love to use my skills and experience for the greater good by joining the Salt Lake County Information Technology
Team.
I have a Bachelor of Science degree in Computer Science and Information Systems, a solid background in technical engineering
and support, and am confident I can learn all the tools needed to enhance my craft for the better good. In my first two roles at
Wells Fargo, I learned and documented the processes and knowledge needed to keep a DDI infrastructure and change process
flow stable and more efficient. In my last position at Wells Fargo, I spent two years learning to build and stabilize in-house
developed and vendor applications and systems that managed the information security data for the enterprise.
I have a solid track record of consistently and successfully increasing laughter, productivity, and improvement for myself, the
team, and the organization (not necessarily in that order). I see the endless opportunities to serve the varied needs of the SLCO
and its citizens and end-users. Additionally, I am a strong believer in providing marginalized and diverse peoples supportive
tools and collaborations to bridge equity knowledge gaps. Please allow me to show you what I can do to benefit Salt Lake
County, Utah.
</engineer>
</letters>
<resume>
­Kent Schaeffer
West Valley City, Utah 84120 | +1 (385) 414-2779 | kent@kentknowsme.com
www.linkedin.com/in/kentmschaeffer | kentknowsme.com | github.com/kentknowsme

Summary 

Technical Leader and Engineer with experience in technical leadership, infrastructure, software development, and customer service. Accomplished in systems analysis and automation engineering, proficient in scripting languages and infrastructure solutions. Demonstrates strong problem-solving and leadership abilities, committed to enhancing processes and technical infrastructure. Aiming to leverage expertise to drive innovation and efficiency in a challenging technical environment while fostering supportive tools and collaborations to bridge equity gaps for marginalized and diverse peoples.

Core Competencies

Innovative solution implementer
Strong software and process designer
Concise technical document and diagram writer
Compassionate and concise communicator
Practical manager of vendor relationships
Productive Agile/Scrum mentor and advocate
Vigilant about stability | quality | and safety
Have and will share own snacks and knowledge

Communication & Collaboration
Customer-oriented | supportive | clear and concise | honest | personalized messages and language

Methodologies
ITIL processes | SLA management | asset inventory | incident management | Agile & Scrum | documentation

Technical Skills

    • Software Languages: HTML/CSS/JS | BootStrap | Perl | JavaScript | shell/bash | python (basic)
    • Platforms & Systems: Linux/Unix (RHEL | CentOS | Ubuntu) | MacOS | Windows | DDI (DNS | DHCP | IPAM) | Infoblox & QIP
    • Hardware: Desktops | laptops | servers | printers | copiers | scanners | mobile devices (iPhone | iPad | Android) | conference room AV equipment | network devices | cloud and virtual assets
    • Software: MS Office Suite (Outlook | Word | Excel | PowerPoint | Visio | Project) | Google Suite | LibreOffice | Adobe Creative Suite | Apple Mac products | VPN clients | backup solutions | imaging tools | SCCM | common web browsers
    • Writing Tools: MS Office | Visio & Omnigraffle | Atlassian Confluence & Jira
    • Network & Infrastructure: Network connectivity troubleshooting | basic datacenter server support | Wi-Fi configuration | VPN setup | DDI (DNS | DHCP | IPAM) | most current coax and ethernet cabling standards
    • Ticketing Systems: ServiceNow | Remedy | Jira | Confluence | in-house developed
    • Remote Tools: Remote desktop applications (RDP | VNC) | WebEx | Windows native tools | SSH/SCP/Telnet | LogMeIn Rescue
    • AI Development Tools: Claude | Lumo | Duck | GitHub Copilot for code generation | documentation validation | debugging
    • Trained in: minor & low-voltage electrical | minor plumbing | hardware | gardening | and power tools
    • Experienced in: high-tech | software development | minor housing repair | customer service | paint mixing & cleanup
    • Powered equipment: forklift | DPSL | pallet jack | and reach certified




Highlighted Projects


Pro Services With A Little Aloha (Part-Time) | West Valley City, Utah | remote	Mar 20 2026 to present
Small IT Services business startup

Small startup to provide website, design, Internet setup, and IT support services to SOHO (small-office, home-office) clients



Purple Penguin Properties LLC (Part-Time) | West Valley City, Utah | hybrid	Dec 2024 to present
Small home rental business startup

Small startup to stand up a model to rent homes to customers and help lower-income families


Randstad at Consolidated Edison | New York City | New York | remote	Dec 01 2022 to March 31 2023
Kill Switch enablement 

Developed PowerShell, HTML, XML, and BMC Network Automation scripts and UI configurations to automate kill-switch, check-status, and end-kill-switch actions to reduce risk to all corporate network devices before or during potential security breaches.


Five9 Inc | San Ramon, California (remote)	Mar 15 2022 to Sep 26 2022
Geographical reporting server build-out

Reverse-engineered existing VM server configurations to build out new VM servers in the European region using Google Cloud/CentOS/PostgreSQL/Apache/MySQL, and best-practice standards to establish secure and operational configurations. Documented processes, configurations, and engineer notes using Confluence and SharePoint.


Goldman Sachs | Salt Lake City, Utah (hybrid)	Jun to Dec 2021
DDI Level 2 Support Team Buildout 

Led the build-out of a global DDI Level 2 support team. Modernized infrastructure processes and communication channels for improved operational efficiency. Spearheaded the implementation of support best practices for DNS, DHCP, IPAM, and NTP services. Fostered a collaborative team environment that improved project outcomes. Mentored colleagues on coding, securing, and engineering topics (GitHub, VM servers, Linux).


Wells Fargo Bank | San Francisco, California | remote	
Anomaly Behavior Project	June 2019 to Dec 2020

This project was funded to conduct research and action workflow for abnormal user behavior. Co-architected the technical configurations for data and application platforms using MySQL, PostgreSQL, Cloudera Data Platform, and Trifacta. Designed security access model using RBAC for engineer, developer, analyst, and leader roles. Managed system and application upgrades and vulnerability patching.


Wells Fargo Bank | San Francisco, California | remote	
Scrum Master	January 2019 to Dec 2020

Initiated facilitation of Agile/Scrum ceremonies and management of Jira stories/sprints/epics for one year as Scrum Master. This enhanced team/project communication and efficiency, and set the standard for following Scrum Masters.


Wells Fargo Bank | San Francisco, California | remote	
CMS Restructuring	June 2018 to August 2020

Organized extensive CMS structuring using multiple repository platforms and tools. Built needed technical documentation using MS Word, Confluence, SharePoint, Visio/Omnigraffle, and PDF. Set technology standards and baselines for server/applic ation monitoring and alerting, application release deployment and validation, and related infrastructure | such as F5 Load-balancing.


Professional Experience


Founder & Primary Engineer (Part-Time)
Pro Services With A Little Aloha | West Valley City, Utah | March 2026 – Present
Work with small-businesses and individuals to navigate technical issues and build online presence
Mission: Deliver simple, secure, and maintainable solutions free from unnecessary dependence on platforms that monetize user data.
    • Modern Stack Development: Architecting and deploying secure web platforms (alittlealoha.pro, kentknowsme.com) using Node.js, Vue.js, Astro, and MDX/Starlight, ensuring high performance and maintainability.
    • Cloud-Native Infrastructure: Leveraging Cloudflare Workers, D1 (Serverless SQL), and Pages for edge computing and data persistence, eliminating reliance on traditional monolithic databases.
    • CI/CD & Automation: Implementing GitHub Actions pipelines for automated testing, linting, and deployment, ensuring rapid iteration and zero-downtime releases.
    • DNS & Network Management: Managing custom DNS records and routing via Cloudflare, optimizing traffic flow and security (WAF) for production environments.
    • Outcome-Based Delivery: Operating as a solo engineer responsible for the full lifecycle: from architecture design to deployment, monitoring, and maintenance of production systems.



Property Manager (Part-Time)
Purple Penguin Properties | West Valley City, Utah | December 2024 - Present
    • Manage client relationships and communicate effectively with tenants addressing needs and concerns
    • Coordinate maintenance and repairs with vendors to ensure timely service delivery
    • Handle financial operations including payment collection and vendor management with attention to accuracy


Western Governors University | Millcreek, Utah (hybrid) 	Jul 14 2025 to Sep 25 2025
IT Service Desk Technician I

    • Delivered exceptional customer service and technical support to students | ensuring a smooth user experience.
    • Addressed technical issues efficiently while maintaining high satisfaction levels.
    • Provided timely resolutions to technical inquiries and service requests.
    • Collaborated with team members to enhance support processes and documentation.


Lowe’s | West Jordan, Utah (on-site) 	Jan 15 2025 to July 13 2025
Customer Service Associate

    • Ensured customer satisfaction and boosted sales by delivering excellent service and expert advice on products throughout the store.
    • Contributed to inventory management and product availability | enhancing the shopping experience. 
    • Trained in categories to provide specialized support for Paint | Hardware | Tools | Lumber | Outside Garden products.
    • Maintained organized | stocked shelves for optimal customer accessability.


English Skills Learning Center | West Valley City, Utah (on-site) 	Jan 03 2024 to Sep 13 2024
Digital Literacy Instructor | LDS Humanitarian Center 

    • Designed and delivered a comprehensive Digital Literacy curriculum aligned with education standards and tailored for adult Emergent Reader learners. 
    • Managed diverse classroom sizes and fostered an engaging learning environment.
    • Taught over 120 students daily | adapting lessons to meet individual needs.
    • Received positive feedback from students and administration alike for teaching effectiveness.
    • Planned | installed | configured | and maintained first computer lab with over 30 laptops and other necessary equipment. Planned and prepared laptops for second lab

Eliassen Group at Fidelity Investments | Salt Lake City, Utah (hybrid) 	Jun 2023 to Sep 2023
Contract Principal Systems Analyst 

    • Led the design and implementation of integration guides for business units migrating to a new Camunda-based BPM platform. 
    • Collaborated with cross-functional teams to ensure alignment with business goals.
    • Streamlined processes and developed comprehensive documentation | improving user understanding of the system.

Randstad at Consolidated Edison | New York City | New York (remote)	Dec 01 2022 to March 31 2023
Contract Senior Automation Engineer 

    • Enhanced network device monitoring and management by revamping dashboards and other UI services.
    • Automated configuration changes before or during potential security breaches to reduce risk to all networked devices.
    • Developed scripts utilizing PowerShell | HTML | XML | BMC Network Automation to improve data accuracy and speed.

Five9 Inc | San Ramon, California (remote)	Jan 10 2022 to Sep 26 2022
Senior Software Engineer 

    • Engineered and deployed custom and efficient code that automated data feeds and reporting processes using Perl and SQL
    • deployed report schedules and configurations to pooled servers using GitHub repositories
    • Designed and deployed custom Perl SMTP module to encapsulate customer data reports and transport to external SMTP vendor as API call
    • Reverse-engineered existing VM server configurations to build out new VM servers in Google Cloud environment
    • documented processes, configurations, and engineer notes using Confluence and SharePoint
    • Configured, deployed, and maintained VM servers in a hybrid cloud environment using Google Cloud/CentOS/PostgreSQL/Apache/MySQL, and best-practice standards to establish secure and operational configurations


Goldman Sachs | Salt Lake City, Utah (hybrid)	Jun – Dec 31 2021
DDI Infrastructure Engineer 

    • Accelerated career growth from Analyst to Vice President by leading the build-out of a global DDI team.
    • Modernized infrastructure processes and communication channels for improved operational efficiency.
    • Spearheaded the implementation of support best practices for DNS | DHCP | IPAM | and NTP services.
    • Fostered a collaborative team environment that improved project outcomes.
    • Mentored colleagues on coding | securing | and engineering topics (GitHub | VM servers | Linux)

Wells Fargo Bank | San Francisco, California (remote) 	Aug 1 2008 to Dec 10 2020
Information Security Engineer | Cyber Threat Management Group	Mar 12 2018 to Dec 10 2020
       
    • Built needed technical documentation using MS Word | Confluence | CMS structuring | Visio/Omnigraffle | PDF
    • Provided leadership and mentoring in infrastructure requirements | ensuring robust security and operational efficiency (F5 BigIP | DNS | Grafana/Telegraf)
    • Set technology standards and baselines for server/application monitoring and alerting | application release deployment and validation | and related infrastructure | such as F5 Load-balancing.
    • Developed and promoted new frontend and backend code components to production or applications built on RHEL | Apache | Meteor | NodeJS | MongoDB | and Redis.
    • Organized extensive technical documentation and resources using multiple repository platforms and tools.
    • Co-architected the technical configuration, designed security access model, and managed upgrades and vulnerability patching for the Anomaly Behavior Project | integrating multiple data and application platforms | including MySQL | PostgreSQL | Cloudera Data Platform | and Trifacta.
    • Facilitated Agile/Scrum ceremonies and managed Jira stories/sprints/epics for one year as Scrum Master | enhancing team/project communication and efficiency.
    • Assisted in the server-based Atlassian Jira/Confluence upgrade project by configuring RHEL servers according to standards
    • Developed full-stack code improvements with team Node.js applications | reducing uncollated data objects and manual administrative functions
    • Managed code deployments for team Node.js applications using Ansible | Docker and shell scripts
	
Wells Fargo Bank | San Francisco, California (remote) 	
DDI Automation Engineer and Technical Team Lead | Network Services	Jul 15 2015 to Mar 11 2018

    • Migrated from vendor proprietary Perl libraries to using open-source, industry-standard REST API to validate and provision DDI record changes on Infoblox IPAM system
    • Managed DNS domain and record changes for high-priority and high-visibility marketing campaigns to include DNS and email security records, working directly with marketing professionals, management, and vendors
    • Promoted to Technical Team Lead based on years of dedication to ingenuity, automation, and leadership.
    • Led technical training sessions, earning two Wells Fargo Gold Coin awards for outstanding contributions.
    • Enhanced Perl/Shell scripting and HTML page design skills by building automation to create statistical reports on DDI (DNS, DHCP, IPAM) daily changes.
    • Improved automation to streamline, add security measures, and reduce errors for Analysts to consistently submit 1 |000 to 10 |000 nightly DDI object changes.
    • Created ad hoc automation to validate, format and submit DDI object changes to support massive project migrations.
    • Learned XML, Perl, MySQL, jQuery, and XHTML to enhance and recover from death the internal DDI Request System.
    • Developed automation tools to enhance operational tasks and reporting, and to support critical enterprise projects using Perl, HTML, bash/korn shell, and Infoblox IPAM.
    • Saved an enterprise email record migration project additional time and funds by planning, scheduling, and deploying over 9 |000 record changes.
    • Streamlined processes and code that resulted in over 30% accuracy and efficiency, significant time savings, and at least 20% reduction in errors and security risks.
    • Established best practices for automation development, testing, and implementation.
	
Wells Fargo Bank, San Francisco, California (remote)
DDI Automation and Network Engineer, Network Services	Aug 1 2008 to Jul 14 2015	

    • Worked directly with marketing, management, and vendors to translate business requirements from high-priority and confidential marketing projects into technical documentation and DNS/domain configurations.
    • Provided comprehensive engineering support for enterprise DDI infrastructure, ensuring optimal performance and reliability.
    • Increased productivity by creating and enhancing automation using Korn Shell Scripts on Linux servers for DDI import processing and validation on VitalQIP and Infoblox IPAM solutions
    • Pioneered documentation processes during the Wells Fargo and Wachovia merger by developing the first set of combined process documentation and network diagrams.
    • Collaborated effectively with cross-functional teams to implement solutions that met leadership and customer requirements.
    • Drove initiatives to improve system integration and operational workflows.

TekSystems at Charles Schwab | Phoenix, Arizona (on-site)	Jun 2007 to Jun 2008

Contract Operations Analyst 

    • Provided first-level support for Schwab.com applications and systems by quickly responding to alerts and efficiently resolving technology/security issues on Windows/Linux/Solaris systems.
    • Mentored less experienced Analysts to better identify and more quickly resolve issues. 
    • Scheduled break/fix outage events and made RCA (Root Cause Analysis) reports for business groups.
    • Made changes to load balance configurations using Cisco HSE and GSS technologies. 
    • Recorded highly-visible application problem conference calls and technical notes for the next shift.

Samved Corp at Tata Consultancy (TCS) at AeroPDM-Honeywell - Phoenix, Arizona
Contract eMatrix System Administrator	February 2007 to June 2007

    • Deployed WebSphere and MatrixOne updates and support Developer deployments to dev and staging servers.
    • Provided resolutions to application and infrastructure issues as they arose
    • Participate in rotational on-call duties.
    • Create tools to monitor and automate tasks using Korn/Bash shell scripting on AIX platform.
      Environment: AIX | WebSphere Application Server 5.0 | Korn/Bash shell scripting | eMatrix (MatrixOne)

Perot Systems at Catholic Healthcare West | Phoenix, Arizona
* note: Perot Systems is now part of NTT Data | Catholic Healthcare West (CHW) is now part of Dignity Health)
Application Development Analyst	June 2005 to February 2007

    • Supported IBM WebSphere Application | Portal | Apache/HTTP Server apps and Nagios alerts on SuSE Linux.
    • Maintained Stellent Content/Document Management | FastSearch and WebTrends apps on Windows Server platforms.
    • Deployed and troubleshot Java codebase using Ant and VIM
    • Researched | scheduled and implemented updates and enhancements to application servers and website applications.
    • Maintained Internet website links and virtual sites/URLs | registered new Internet domains | and updated HTML.
    • Reviewed | added and updated configuration | process workflow and policy documentation for supported applications. 
    • managed IIS/Apache/IHS and WebSphere applications that support Internet presence for Catholic Healthcare West and all major facilities. 
    • Consolidated management of Internet domains for CHW | working with colleagues to transfer ownership and maintain top domain records.
      Environment:	Windows 200x | SuSE  Linux 8/9 | IBM WebSphere Application Server 5.1 | Remedy | IBM WebSphere Portal Server 5.1.0.x | Stellent Content Server 6.2/7.5 | WebTrends 7.5 | FastSearch 4.x | Apache/HTTP | HTML

Imperium Staffing at Perot Systems at Catholic Healthcare West | Phoenix, Arizona
Security Administrator
    • Provided enterprise security administration for a large healthcare provider that covers three western states.
    • Managed second-level request and incident queue for Security Administration team using Remedy software.
    • Created | changed and removed user-level access in Active Directory | RightFax | Exchange and proprietary applications on AS/400 | UNIX | and Windows platforms.
    • Provided on-the-job training for new and old applications to junior level team members and new hires.
Environment:	Windows/AD 2000 | Exchange 5.5 | RightFax | AS/400 | Remedy | Technical Documentation
	

Independent Contractor | Phoenix, Arizona (on-site)	Nov 2004 to June 2005

    • Proposed and implemented system/network upgrade projects for small companies and hotels in the Phoenix Metro area.
    • Worked and led company desktop refresh projects using Ghost | Windows XP | MS Office and Altiris Carbon Copy.
    • Installed | configured and tested wireless networks using industry standard brands and WEP/WPA wireless security.
    • Trained company/hotel staff in basic operation and support of installed equipment.
Environment:	Windows XP | Wireless LAN | Project Planning | Training | Ghost | Altiris Carbon Copy | MS Office

Starwood Hotels and Resorts | On-site	2002 to 2004
(Starwood Hotels is now part of Marriott Hotels | St Regis Hotel is now an apartment complex | Century Plaza Hotel is now part of Fairmont)
 
IT Manager | St Regis and Century Plaza Hotels | Los Angeles, California	May 2003 to July 2004

    • Managed and supported Server/Client | internet | telecomm and Retail POS technologies on a 24x7x365 basis for a large convention and luxury hotel near Beverly Hills. 
    • Maintained infrastructure to support over 300 staff | 1100 guest rooms | multiple restaurants and bars | and 100k square feet of convention space. 
    • Monitored and secured multiple separate convention and hotel networks and Internet connections.
    • Managed and implemented full desktop/laptop refresh of staff computers to Windows 2000/XP | and other projects.
    • Prepared and presented annual budget and project proposals for major infrastructure upgrade projects.
    • Trained and led contractors and staff to complete projects | and to support special events and daily operations.
    • Supported back-ups and restorations of server data using NT Backup and ArcServe on Novell NetWare.
Environment:	Managing | Budgeting | Training | Windows NT/2000/XP | Novell 4 | Exchange 5.5 | Compaq/HP | Dell
	
Westin Kierland Resort & Spa | Scottsdale, Arizona 
Overnight Front Desk Agent | Overnight Front Office Team	October 2002 – May 2003

    • Trained Overnight Front Office Manager in Front Desk/Night Audit duties.
    • Created and documented Night Audit processes and checklists for new property.
    • Was trained in Starwood Galaxy PMS | H.S.I. P.O.S. | and Lodgenet systems as Westin Pre-Opening Agent for the Westin Kierland.
    • Managed personal bank of $500 cash.
    • Greeted and registered arriving guests | and reconciled accounts for departing guests.
    • Performed computer audit | system backup and morning reports daily.
    • Prepared rooms and room keys for VIP guest arrivals each day.

Avnet | Chandler, Arizona (hybrid)	Oct 1997 to May 2002

Senior Internet System Specialist | E-Business Infrastructure Team	Jan 2000 to May 2002
 
    • Co-architected internal inventory & lookup web tool used division-wide and by company Help Desk.
    • Installed | secured | and managed server and network technologies to host Avaya | SkillSoft | Aspen | Concur | and other services using 500+ Windows NT/2000 Servers | F5 BigIP load balancers and other appliances in an enterprise DMZ environment
    • Consulted on and provided technical expertise for enterprise Active Directory | VPN and Computer-Based Training (CBT) Server projects.
    • Tested and set requirements for Peregrine Help Desk software usage and data imports.
    • Maintained DNS BIND 4.9 on HP-UX and started upgrade to BIND 9.2 on Solaris.
    • Created websites to support new marketing and technology campaigns (i.e. | for VPN client updates).
    • Participated in team rotation of 24x7 on-call support.
    • Installed and monitored BackupExec and other network-based backup solutions.
    • Administered company-wide DNS zones | records | and IP Address assignments. 
    • Documented | diagrammed and streamlined server configurations | operational processes | and system request processes. 
Environment:	Windows NT/2000/XP | IIS | DNS BIND | SQL/Oracle | F5 BigIP | HTML/ASP/JavaScript | HTTP | FTP | TCP/IP | Cisco/Aventail VPN | shell scripting | Compaq/HP/IBM | BackupExec | Internet appliances | Peregrine

Systems Support Specialist	Oct 1997 to Feb 2000

Engineered and supported Enterprise LAN Technologies in Phoenix Metro area
    • Contributed to design | implementation | and physical transportation of client/server equipment into the new corporate office building.
    • Installed | enhanced and supported technologies globally for enterprise and remote office spaces and warehouses.
    • Supported Desktops | laptops | servers and networked printers for several offices in Arizona.
    • Participated in team rotation of 24x7 on-call support.
    • Installed and supported 30+ Windows NT database | application and file servers. 
    • Administrated | supported and upgraded existing Novell file/print servers. 
    • Co-created processes and forms for new Hires | terminations | and software licensing. 
    • Maintained Microsoft Select CD collection for distribution and loaning purposes.
      
ELT2000/Y2K Project | Chandler, Arizona

    • Installed and supported CA Unicenter Asset Management servers for Y2K computer inventory company-wide. 
    • Administered Oracle and SQL databases to support enterprise inventory and infrastructure systems
    • Created CD-ROM disks with Y2k patches for supported systems and applications. 
    • Supervised technical contractors for data entry and validation over 9 months. 

ARISE Project | Hong Kong | China	Dec 1998 to Mar 1999 

    • Set standard for Asia office LAN installs by implementing new office and distribution center LANs in Hong Kong with one file server, several printers,  and 70+ NT workstations; documenting installation,  and training new support staff.

Environment:	Windows 9x/NT | Novell 3/4 | SQL/Oracle | Compaq/IBM | networked HP printers		

Superior Design at Motorola SSTG (Iridium Project) | Chandler, Arizona (on-site)	1997

Contract PC Support Technician

    • Assisted with Windows NT rollout using Dell workstations and Ghost software. 
    • Provided 2nd and 3rd level technical support to office staff on Windows 9x/NT workstations on Novell network | using Remedy Help Desk software to document work.

Brigham Young University – Hawaii Campus | Laie, Hawaii (on-site)	1994 to 1996

Student Programmer | Library and Academic Support	January 1995 – December 1996

    • Supported Dynix library system and administered staff/student user accounts.
    • Installed/upgraded CAT5 cabling for entire first floor of library.
    • Supported MAC/PC workstations and Novell servers for library and LAS staff.
    • Assisted install of new MAC hardware and cabling for computer lab in library.
    • Trained staff in basic computer usage and support | and updated documentation.
    • Supported and improved PC-based CD-ROM library system.
    • Assisted with planning next fiscal year budget and staff requirements.
	
Student Computer Support Representative | IT Services	August to December 1994

    • Supported staff and faculty MAC and PC computers campus-wide.
    • Provided 1st level support for equipment in all computer labs.
    • Created communication channel between computer lab managers and IT dept.
    • Was trained in CAT5 cable terminations and installations.	

Night Auditor / Assistant Night Manager
Hampton Inn Chandler | Chandler, Arizona | October to December 2002
Scottsdale Villa Mirage | Scottsdale, Arizona | Spring 1997
Hilton Dresden Hotel | Dresden | Germany | Fall 1993
Seven Peaks Resort Hotel (now Marriott Provo) | Provo, Utah | Summer 1993
Comfort Inn | Sandy, Utah | Spring 1993
Sleep Inn (now Ambassador Inn) | St. George, Utah | Summer 1992

    • Greeted and checked-in arriving guests | checked-out departing guests.
    • Reviewed and corrected daily charges to guest and house accounts.
    • Performed night audit for hotel and other outlets.
    • Reviewed and prepared for next day’s departing guests.
    • Prepared full/continental breakfast for smaller properties.
    • Tended to all or most Hotel duties during the night shift.

Utah Valley University | Orem, Utah (on-site)	1992

Computer Lab Assistant	Fall 2002

    • Assisted students with computer use | printing and network/computer problems.
    • Laser printed materials for students and guests.
    • Monitored NetWare server and network for any potential problems.

Shaffer Electric | 
Salinas, California (on-site)	1985 to 1989
Apprentice Electrician


Education

Computer Graphics Certificate Program | Collins College | Tempe, Arizona | 2002
	Learned Adobe Creative Suite (Photoshop, Illustrator, Premiere, Acrobat, Dreamweaver) on MacOS



Bachelor of Science | Brigham Young University‑Hawaii | Laie, Hawaii | 1996
	Major: Computer Science & Information Systems | Minor: Business Administration


Certifications

A+ Core 1 | CompTIA | Passed Oct 2025 – Currently studying for Core 2 exam
Forklift, DPSL, Pallet Jack & Powered Pallet Jack Certified | Lowe’s | 2025
IPv6 Enthusiast Certification | Hurricane Electric | 2025
JavaScript Algorithms and Data Structures | freeCodeCamp | 2024 & 2022
Adult and Pediatric First Aid/CPR/AED | American Red Cross | 2024
Youth Mental Health First Aid | National Council for Mental Wellbeing | 2023
Blended Contact Center Administrator Certification | Five9 University | 2022
Responsive Web Design | freeCodeCamp | 2021
AWS Certified Cloud Practitioner | Amazon Web Services | 2021
Scrum Fundamentals Certified | ScrumStudy.com | 2020
IPv6 Explorer Certification | Hurricane Electric | 2016
Citizens Police Academy Graduate | Gilbert Police Department | 2011
Successful Project Management | Project Management Institute | 2006
Network+ Certification | CompTIA | 2005 
Master Certificate in Computer Fundamentals (Win 95/98) | Brainbench.com | 2002 
Certificate in HTML 3.2 | Brainbench.com | 2001 
Certificate in Computer Industry Knowledge | Brainbench.com | 2000 
Certificate in Written German | Brainbench.com | 2000
Certified NetWare Administrator (3.x) | Novell | 1994



VOLUNTEERING

Math/Reading Tutor and Mentor | Step Up Tutoring | 2026 to Present

Volunteer in Training | Information Technology Disaster Resource Center (ITDRC) | 2026 to Present

Author | Citizendium (https://citizendium.org) | 2025 to present

Advisor | Career Village | 2025 to present

Contributor | Unsplash (https://unsplash.com) | 2025 to present

Ambassador | Kiva | 2024 to 2026

Unaccompanied Minor Refugee (UMR) Foster Parent | Catholic Community Services (CCS) of Utah | Salt Lake City, Utah | 2022 to 2025

Website and Hosting Advisor | Intermountain TESOL (I-TESOL) | Salt Lake City, Utah | 2018 to 2021

Board Member | West United Soccer League | West Valley City, Utah | 2018 to 2020

Varsity Scout Coach | Boy Scouts of America | West Valley City, Utah | 2017 to 2018

English Instructor at LDS Humanitarian Center | English Skills Learning Center (ESLC) | Salt Lake City, Utah | 2013 to 2015

Assistant Coach | Scholastic Chess Clubs | Gilbert Public Schools | Gilbert, Arizona	

Webmaster | Gilbert Parent’s Chess Alliance (www.gpcachess.org) | Gilbert,  Arizona
- Dreamweaver | HTML | JavaScript | CSS


ORGANIZATIONS

Member | Salt Lake City Atlassian User Group | 2025 to Present

Member | Engineers Without Borders (EWB-USA) | Greater Salt Lake Chapter | 2022 to Present

Member | Internet Society | Affordable Internet Access Special Interest Group (SIG) | US San Francisco Bay Area Chapter | 2015 to Present


Speaking Engagements

"DDI Basics" | 20 minute presentation | OpenWest Conference 2018 (https://openwest.org)

"Ghost Stories from a SysAdmin" | 22 minute presentation | SaintCon Conference 2016 (https://youtu.be/fm9NyZcmh5U)
</resume>