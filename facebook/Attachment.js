var faker = require('faker');
var Model = require('../lib/Model');

module.exports = Model(function Attachment () {
  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    url: faker.internet.url(),
    image: faker.image.image()
  };
}, {
  description: 0.8,
  image: 0.6
});
