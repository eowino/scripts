// @ts-check
const { execSync } = require('child_process');

const BrowserNames = {
  BRAVE: 'Brave Browser',
  CHROME: 'Google Chrome',
  FIREFOX: 'Firefox',
  SAFARI: 'Safari'
}

/**
 * @param {Array<String>} sites an array of web URL's to open
 * @param {String} browser the browser to open the websites on
 * @description Takes an array of URL's and opens them in a browser
 */
function openSites(sites, browser = BrowserNames.BRAVE) {
  try {
    sites.forEach(site => {
      execSync(`open -a "${browser}" ${site}`);
    });
  } catch (err) {
    console.error('Ooops 💩 !', err);
  }
}

module.exports = openSites;
