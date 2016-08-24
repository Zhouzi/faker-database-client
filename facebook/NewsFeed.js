var Collection = require('../lib/Collection');
var Post = require('./Post');

module.exports = function NewsFeed () {
  return Collection(20, Post);
};
