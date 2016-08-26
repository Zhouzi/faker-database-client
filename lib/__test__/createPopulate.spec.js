/* global describe, it, beforeEach */

var assert = require('assert');
var sinon = require('sinon');
var createPopulate = require('../createPopulate');

describe('createPopulate', function () {
  var itemFactory;
  var userFactory;
  var populate;
  var fakeUser;

  beforeEach(function () {
    itemFactory = sinon.stub().returns({
      author: 'fake-default-author',
      likes: [
        {
          author: 'fake-default-like-author'
        }
      ],
      comments: [
        {
          author: 'fake-default-comment-author'
        }
      ]
    });

    fakeUser = 'fake-user';
    userFactory = sinon.stub().returns(fakeUser);

    populate = createPopulate(itemFactory, userFactory);
  });

  it('should return a function', function () {
    assert.equal(typeof populate, 'function');
  });

  it('should return an array of given length', function () {
    assert.equal(populate(10).length, 10);
  });

  it('should create 10 items', function () {
    populate(10);
    assert.equal(itemFactory.callCount, 10);
  });

  it('should create 10 users', function () {
    populate(2, 10);
    assert.equal(userFactory.callCount, 10);
  });

  it('should replace author by user', function () {
    var items = populate(10, 20);
    assert.equal(items[0].author, fakeUser);
  });

  it('should replace authors in likes', function () {
    var items = populate(10, 4);
    assert.equal(items[0].likes[0].author, fakeUser);
  });

  it('should replace authors in comments', function () {
    var items = populate(10, 4);
    assert.equal(items[0].comments[0].author, fakeUser);
  });
});
