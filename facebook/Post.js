var faker = require('faker');
var Model = require('../lib/Model');
var User = require('./User');
var Attachment = require('./Attachment');
var Like = require('./Like');
var Comment = require('./Comment');
var Collection = require('../lib/Collection');

module.exports = Model(function Post () {
  return {
    author: User(),
    content: faker.lorem.paragraphs(),
    attachment: Attachment(),
    likes: Collection(Like),
    comments: Collection(Comment)
  };
}, {
  attachment: 0.6
});
