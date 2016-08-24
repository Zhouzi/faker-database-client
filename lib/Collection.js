var times = require('lodash/times');
var random = require('lodash/random');

module.exports = function Collection (length, callback) {
  if (typeof length === 'function') {
    callback = length;
    length = null;
  }

  if (length == null) {
    length = random(0, 10);
  }

  return times(length, callback);
};
