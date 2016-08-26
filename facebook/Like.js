var Model = require('../lib/Model');
var User = require('./User');

module.exports = Model(function Like () {
  return {
    author: User()
  };
});
