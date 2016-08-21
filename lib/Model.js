var faker = require('faker');
var assign = require('lodash/assign');

module.exports = function Model (props) {
  return assign({
    id: faker.random.uuid(),
    dateCreated: faker.date.recent()
  }, props);
};
