var Collection = require('../lib/Collection');

module.exports = function collectionCreator (factory) {
  return function (length) {
    return Collection(length, factory);
  };
};
