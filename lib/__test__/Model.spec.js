/* global describe, it */

var assert = require('assert');
var proxyquire = require('proxyquire');
var sinon = require('sinon');
var fakeId = 'fake-id';
var fakeDate = 'fake-date';
var Model = proxyquire('../Model', {
  faker: {
    random: {
      uuid: sinon.stub().returns(fakeId)
    },
    date: {
      recent: sinon.stub().returns(fakeDate)
    }
  }
});

describe('Model', function () {
  it('should export a function', function () {
    assert.equal(typeof Model, 'function');
  });

  it('should return an object', function () {
    assert.equal(typeof Model(), 'object');
  });

  it('should have the common properties', function () {
    assert.deepEqual(Object.keys(Model()), [
      'id',
      'dateCreated'
    ]);
  });

  it('should build the id via faker.uuid', function () {
    assert.equal(Model().id, fakeId);
  });

  it('should build the dateCreated via faker.recent', function () {
    assert.equal(Model().dateCreated, fakeDate);
  });

  it('should merge given props', function () {
    assert.deepEqual(Model({ foo: 'bar' }), {
      id: fakeId,
      dateCreated: fakeDate,
      foo: 'bar'
    });
  });

  it('should overwrite existing props', function () {
    var anotherFakeId = 'another-fake-id';
    assert.deepEqual(Model({ id: anotherFakeId, bar: 'quz' }), {
      id: anotherFakeId,
      dateCreated: fakeDate,
      bar: 'quz'
    });
  });
});
