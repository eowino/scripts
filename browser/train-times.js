//@ts-check
const openSites = require('./index');
const date = new Date();
const minute = date.getMinutes();
let minuteInRange = 0;

const GUN = 'GUN';
const RMD = 'RMD';
const AFS = 'AFS';

// supported minutes: 0, 15, 30, 45;
if (minute >= 45) {
  minuteInRange = 45;
} else if (minute >= 30) {
  minuteInRange = 30;
} else if (minute >= 15) {
  minuteInRange = 15;
}

function getURL(time = '1700', from = GUN, to = AFS) {
  return `https://ojp.nationalrail.co.uk/service/timesandfares/${from}/${to}/today/${time}/dep`;
}

openSites([
  getURL(`${date.getHours()}${minuteInRange}`),
  getURL(`${date.getHours()}${minuteInRange}`, RMD),
  getURL(`${date.getHours()}${minuteInRange}`, AFS, GUN),
]);
