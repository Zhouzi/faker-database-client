var times = require('lodash/times');

module.exports = function Collection (length, callback) {
  return times(length, callback);
};
