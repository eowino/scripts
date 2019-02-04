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

function parseHours(hrs = 0) {
  return +hrs < 9 ? `0${hrs}` : hrs;
}

function parseMinutes(mins = 0) {
  return +mins < 10 ? `0${mins}` : mins;
}

function getURL(time = '1700', from = GUN, to = RMD) {
  return `https://ojp.nationalrail.co.uk/service/timesandfares/${from}/${to}/today/${time}/dep`;
}

const time = `${parseHours(date.getHours())}${parseMinutes(minuteInRange)}`;

if (date.getHours() > 13) {
  openSites([getURL(time), getURL(time, RMD, AFS)]);
} else {
  openSites([getURL(time, GUN, RMD), getURL(time, AFS, GUN)]);
}
