var Post = require('./Post');
var User = require('./User');
var createPopulate = require('../lib/createPopulate');

module.exports = createPopulate(Post, User);
