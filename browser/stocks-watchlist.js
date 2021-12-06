// @ts-check
const openSites = require('./index');
const sites = [
  'https://www.google.com/finance/portfolio/watchlist', // Watchlist
  'https://www.google.com/finance/portfolio/202bc006-7d70-4960-87ce-781e83c4788f', // Commodities
  'https://www.google.com/finance/portfolio/253768ae-ed69-4d88-a28f-95adba6a59d5', // Crypto
  'https://www.google.com/finance/portfolio/4a6c31a1-4af2-4140-9b0c-51d280974bfa', // Car
  'https://www.google.com/finance/portfolio/557a136f-c25f-4adb-8e6a-8e58d5605ad2', // Chip Tech
  'https://www.google.com/finance/portfolio/6136c881-5c50-41d0-8a9c-c69fa97dbd17', // Meme
  'https://www.google.com/finance/portfolio/a9ef463c-16c7-4142-8f14-871f0167c94b', // Entertainment
];

openSites(sites);

