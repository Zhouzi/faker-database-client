var Model = require('../lib/Model');
var User = require('./User');

module.exports = function Like () {
  return Model({
    author: User()
  });
};
