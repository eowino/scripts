//@ts-check
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

function bufferToString(buffer) {
  return decoder.write(Buffer.from(buffer));
}

module.exports = {
  bufferToString,
};
