var times = require('lodash/times');
var sample = require('lodash/sample');
var assign = require('lodash/assign');
var reduce = require('lodash/reduce');
var isArray = require('lodash/isArray');

module.exports = function createPopulate (itemFactory, userFactory) {
  return function (nbItems, nbUsers) {
    var users = times(nbUsers, function () {
      return userFactory();
    });

    return times(nbItems, function () {
      var item = itemFactory();
      item = replaceAuthorWith(users)(item);
      return item;
    });
  };
};

function replaceAuthorWith (users) {
  return function replaceAuthor (item) {
    return reduce(item, function (result, value, key) {
      if (key === 'author') {
        result[key] = sample(users);
        return result;
      }

      if (isArray(value)) {
        result[key] = value.map(replaceAuthor);
        return result;
      }

      result[key] = value;
      return result;
    }, {});
  };
}
