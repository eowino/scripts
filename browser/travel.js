// @ts-check
const openSites = require('./index');
const sites = [
  'https://oyster.tfl.gov.uk/oyster/entry.do',
  'http://www.nationalrail.co.uk/service_disruptions/indicator.aspx',
  'https://tfl.gov.uk/tube-dlr-overground/status/',
];

openSites(sites);
