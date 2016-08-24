var faker = require('faker');
var Model = require('../lib/Model');
var User = require('./User');
var Attachment = require('./Attachment');
var Like = require('./Like');
var Comment = require('./Comment');
var Collection = require('../lib/Collection');

module.exports = function Post () {
  return Model({
    author: User(),
    content: faker.lorem.paragraphs(),
    attachment: Attachment(),
    likes: Collection(10, Like),
    comments: Collection(10, Comment)
  });
};
