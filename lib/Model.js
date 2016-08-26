var faker = require('faker');
var assign = require('lodash/assign');
var random = require('lodash/random');
var pickBy = require('lodash/pickBy');

module.exports = function Model (factory) {
  return function (props) {
    var defaults = {
      id: faker.random.uuid(),
      dateCreated: faker.date.recent()
    };
    var result = assign(defaults, factory(), props);

    if (factory.meta == null) {
      return result;
    }

    return pickBy(result, function (value, key) {
      if (factory.meta.hasOwnProperty(key)) {
        var percent = 1 - factory.meta[key];
        return random(0, 1, true) >= percent;
      }

      return true;
    });
  };
};
