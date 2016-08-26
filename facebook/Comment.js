var faker = require('faker');
var Model = require('../lib/Model');
var User = require('./User');
var Like = require('./Like');
var Collection = require('../lib/Collection');

module.exports = Model(function Comment () {
  return {
    content: faker.lorem.sentences(),
    author: User(),
    likes: Collection(Like)
  };
});
