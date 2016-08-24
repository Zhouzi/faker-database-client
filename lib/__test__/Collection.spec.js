/* global describe, it */

var assert = require('assert');
var sinon = require('sinon');
var Collection = require('../Collection');

describe('Collection', function () {
  it('should export a function', function () {
    assert.equal(typeof Collection, 'function');
  });

  it('should return an array', function () {
    var actual = Object.prototype.toString.call(Collection());
    var expected = '[object Array]';
    assert.equal(actual, expected);
  });

  it('should return an array of 1 item', function () {
    assert.equal(Collection(1).length, 1);
  });

  it('should return an array of 2 items', function () {
    assert.equal(Collection(2).length, 2);
  });

  it('should call callback', function () {
    var callback = sinon.spy();
    Collection(3, callback);
    assert.equal(callback.callCount, 3);
  });

  it('should fill the array with callback return value', function () {
    var callbackReturnValue = 'callback-return-value';
    var callback = function () {
      return callbackReturnValue;
    };
    var result = Collection(4, callback);
    assert.deepEqual(result, [
      callbackReturnValue,
      callbackReturnValue,
      callbackReturnValue,
      callbackReturnValue
    ]);
  });

  it('should return a random collection if length is not provied', function () {
    var callback = function () {};
    var length1 = Collection(callback).length;
    var length2 = Collection(callback).length;
    assert.notEqual(length1, length2);
  });
});
