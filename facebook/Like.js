var Model = require('../lib/Model');
var User = require('./User');

function Like () {
  return {
    author: User()
  };
}

module.exports = Model(Like);
