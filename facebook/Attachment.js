var faker = require('faker');
var Model = require('../lib/Model');

module.exports = function Attachment () {
  return Model({
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    url: faker.internet.url(),
    image: faker.image.image()
  });
};
