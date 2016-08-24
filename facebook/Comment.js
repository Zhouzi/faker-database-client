var faker = require('faker');
var Model = require('../lib/Model');
var User = require('./User');
var Like = require('./Like');
var Collection = require('../lib/Collection');

module.exports = function Comment () {
  return Model({
    content: faker.lorem.sentences(),
    author: User(),
    likes: Collection(10, Like)
  });
};
