var Model = require('../lib/Model');
var User = require('./User');

module.exports = Model({
  factory: function Like () {
    return {
      author: User()
    };
  }
});
