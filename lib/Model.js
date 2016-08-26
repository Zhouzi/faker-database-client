var faker = require('faker');
var assign = require('lodash/assign');
var random = require('lodash/random');
var pickBy = require('lodash/pickBy');

module.exports = function Model (factory, meta) {
  return function (props) {
    var defaults = {
      id: faker.random.uuid(),
      dateCreated: faker.date.recent()
    };
    var result = assign(defaults, factory(), props);

    if (meta == null) {
      return result;
    }

    return pickBy(result, function (value, key) {
      if (meta.hasOwnProperty(key)) {
        var percent = 1 - meta[key];
        return random(0, 1, true) >= percent;
      }

      return true;
    });
  };
};
