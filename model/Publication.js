var faker = require('faker');
var random = require('lodash/random');
var Model = require('../lib/Model');
var User = require('./User');
var Collection = require('../lib/Collection');
var Comment = require('./Comment');
var Like = require('./Like');

module.exports = function Publication () {
  return Model({
    author: User(),
    content: faker.lorem.paragraphs(),
    comments: Collection(random(0, 10), Comment),
    likes: Collection(random(0, 10), Like),
  });
};
