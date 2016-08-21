var faker = require('faker');
var random = require('lodash/random');
var Model = require('../lib/Model');
var User = require('./User');
var Collection = require('../lib/Collection');
var Like = require('./Like');

module.exports = function Comment () {
  return Model({
    content: faker.lorem.sentences(),
    author: User(),
    likes: Collection(random(0, 10), Like),
  });
};
