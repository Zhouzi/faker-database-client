/* global describe, it, beforeEach */

var assert = require('assert');
var sinon = require('sinon');
var proxyquire = require('proxyquire');
var fakeId = 'fake-id';
var fakeDate = 'fake-date';
var random = sinon.stub();
var Model = proxyquire('../Model', {
  faker: {
    random: {
      uuid: sinon.stub().returns(fakeId)
    },
    date: {
      recent: sinon.stub().returns(fakeDate)
    }
  },
  'lodash/random': random
});

describe('Model', function () {
  var factoryStub;

  beforeEach(function () {
    factoryStub = sinon.stub();
  });

  it('should expose a function', function () {
    assert.equal(typeof Model, 'function');
  });

  it('should return a fucntion', function () {
    assert.equal(typeof Model({
      factory: factoryStub
    }), 'function');
  });

  it('should return the default props', function () {
    var factory = Model({
      factory: factoryStub
    });
    assert.deepEqual(factory(), {
      id: fakeId,
      dateCreated: fakeDate
    });
  });

  it('should call factory', function () {
    var factory = Model({
      factory: factoryStub
    });
    factory();
    assert.equal(factoryStub.callCount, 1);
  });

  it('should merge the result of factory with the defaults', function () {
    factoryStub.returns({
      foo: 'bar'
    });
    var factory = Model({
      factory: factoryStub
    });
    assert.deepEqual(factory(), {
      id: fakeId,
      dateCreated: fakeDate,
      foo: 'bar'
    });
  });

  it('should randomly strip some values', function () {
    random.returns(0.2);
    factoryStub.returns({
      foo: 'bar',
      baz: 'quz'
    });
    var factory = Model({
      factory: factoryStub,
      meta: {
        foo: 0.4,
        baz: 0.8
      }
    });
    assert.deepEqual(factory(), {
      id: fakeId,
      dateCreated: fakeDate,
      baz: 'quz'
    });
  });

  it('should assign the provided props', function () {
    factoryStub.returns({
      foo: 'bar'
    });
    var factory = Model({
      factory: factoryStub
    });
    assert.deepEqual(factory({
      baz: 'quz'
    }), {
      id: fakeId,
      dateCreated: fakeDate,
      foo: 'bar',
      baz: 'quz'
    });
  });
});
