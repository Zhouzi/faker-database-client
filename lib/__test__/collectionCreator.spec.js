/* global describe, it, afterEach */

var assert = require('assert');
var proxyquire = require('proxyquire');
var sinon = require('sinon');
var collectionReturnValue = 'collection-return-value';
var Collection = sinon.stub().returns(collectionReturnValue);
var collectionCreator = proxyquire('../collectionCreator', {
  '../lib/Collection': Collection
});

describe('collectionCreator', function () {
  afterEach(function () {
    Collection.reset();
  });

  it('should export a function', function () {
    assert.equal(typeof collectionCreator, 'function');
  });

  it('should return a function', function () {
    assert.equal(typeof collectionCreator(), 'function');
  });

  it('should create a Collection', function () {
    var creator = collectionCreator(function () {});
    creator();
    assert.equal(Collection.callCount, 1);
  });

  it('should create a collection of 3 items', function () {
    var creator = collectionCreator(function () {});
    creator(3);
    assert.equal(Collection.lastCall.args[0], 3);
  });

  it('should create a collection from factory', function () {
    var factory = function () {};
    var creator = collectionCreator(factory);
    creator(3);
    assert.equal(Collection.lastCall.args[1], factory);
  });

  it('should return the collection', function () {
    var creator = collectionCreator(function () {});
    assert.equal(creator(), collectionReturnValue);
  });
});
