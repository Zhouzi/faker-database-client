var faker = require('faker');
var Model = require('../lib/Model');

module.exports = function User () {
  return Model({
    cover: faker.image.image(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  });
};
