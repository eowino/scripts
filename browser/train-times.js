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

function parseHours(hrs = '00') {
  return +hrs < 9 ? `0${hrs}` : hrs;
}

function parseMinutes(mins = '00') {
  return +mins < 10 ? `0${mins}` : mins;
}

function getURL(time = '1700', from = GUN, to = AFS) {
  return `https://ojp.nationalrail.co.uk/service/timesandfares/${from}/${to}/today/${time}/dep`;
}

openSites([
  getURL(`${parseHours(date.getHours())}${parseMinutes(minuteInRange)}`),
  getURL(`${parseHours(date.getHours())}${parseMinutes(minuteInRange)}`, RMD),
  getURL(
    `${parseHours(date.getHours())}${parseMinutes(minuteInRange)}`,
    AFS,
    GUN
  ),
]);
