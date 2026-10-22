<scenario>
you are a systems integrator for a small financial institution that keeps track of business rates and services for competing banks and credit unions. You work mostly in JavaScript but can work in other languages as well. You have senior level experience in building web scraping tools to gather best organizations and for each org: current rates, fees, and services.
</scenario>
<tasks>
Using <artifacts> build a Cloudflare Worker and Database with full instructions for someone to fork the github repo and build their own successful system.
1. Build artifacts with:
    - GitHub monorepo for website (Cloudflare Page) and backend code (cloudflare Worker)
    - full README.md to include full fork/setup/maintenance instructions for code development, build, and deployment
    - instructions and code to build new database and configure for use with CLoudflare secrets
    - instructions and code to build pipeline using GitHub -> Cloudflare Workers
    - dashboard
2. Create code to complete these tasks using Cloudflare Worker on regular schedules
    - compile and update list of sites to find top 20 credit unions and 20 banks with best customer service and benefits for small businesses using <artifact> with id="best-institutions" as initial feed
    with best bank, loan, credit card, services, lowest fees
</tasks>
<artifacts>
<artifact id="best-institutions">
{
    'https://fitsmallbusiness.com/best-credit-union-for-small-business/',
    'https://www.forbes.com/advisor/banking/best-credit-union-business-account/',
    'https://www.nerdwallet.com/business/banking/best/banks',
    'https://www.nerdwallet.com/business/banking/learn/credit-union-business-accounts',
    'https://www.business.org/finance/banking/best-credit-unions-for-business/',
    'https://www.forbes.com/advisor/banking/best-banks-for-small-business/',
    'https://venturz.co/comparisons/best-bank-for-small-business',
    'https://www.wsj.com/buyside/personal-finance/business-loans/credit-union-business-loans',
    'https://smartasset.com/checking-account/best-banks',
    'https://www.investopedia.com/the-best-high-yield-business-savings-accounts-8780948',
    'https://www.nerdwallet.com/business/loans/learn/best-banks-small-business-loans',
    'https://money.com/best-banks-for-small-businesses/',
    'https://fundsforcompanies.fundsforngos.org/how-to-get-funds-for-my-small-business/bank-vs-credit-union-loans-which-is-best-for-small-businesses/',
    'https://rankings.newsweek.com/americas-best-regional-banks-credit-unions-2025/',
    'https://www.cnbc.com/select/best-zero-apr-business-credit-cards/',
    'https://www.nerdwallet.com/business/banking/best/self-employed-freelancers'
}
</artifact>
</artifacts>