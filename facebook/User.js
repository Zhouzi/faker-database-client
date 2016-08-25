var faker = require('faker');
var Model = require('../lib/Model');

module.exports = Model({
  factory: function User () {
    return {
      cover: faker.image.image(),
      avatar: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    };
  }
});
