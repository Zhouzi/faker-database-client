# structured-data-generator

Library that generates fake structured data.

* [Motivation](#motivation)
* [Words of caution](#words-of-caution)
* [Documentation](#documentation)

## Motivation

Inspired by the idea of "code kata", this project offers a way to generate structured data for code exercises.
You can generate Facebook-like news feed's data structure and focus on learning new stuff and/or sharpening your skills.
It really is just a set of functions that return a JavaScript object or a collection so it can be used with whatever you want.
You don't even need to setup a backend as you can save the data to a json file or generate it in the browser.
Of course, you can also persist it to a database if you feel like it.

## Words of caution

While this library sometimes refers to Facebook, Twitter and other products, it is in no way affiliated with them.
Neither it is attempting to recreate their real data structure.
Instead, it provides simpler versions that contains what you'd need to rebuild part of their interface.

## Documentation

This library exposes two types of factories.

### Model(props)

Returns a single JavaScript object and merges the props.

```javascript
var User = require('facebook/User');

User({
  firstName: 'John',
  lastName: 'Doe'
});
```

### Populate(itemsLength, usersLength)

Returns a structured collection of a given Model.

```javascript
var NewsFeed = require('facebook/NewsFeed');

// Returns an array of 20 posts created by 10 users
// The likes, comments and any user-generated content
// is attributed to those 10 users
NewsFeed(20, 10);
```

### Facebook

#### `facebook/Attachment`

```
{
  "id": <uuid>,
  "dateCreated": <date>,
  "title": <sentence>,
  "description": <paragraph|optional>,
  "url": <url>,
  "image": <image|optional>
}
```

#### `facebook/Comment`

```
{
  "id": <uuid>,
  "dateCreated": <date>,
  "content": <sentences>,
  "author": <User>,
  "likes": <Collection(Like)>
}
```

#### `facebook/Like`

```
{
  "id": <uuid>,
  "dateCreated": <date>,
  "author": <User>
}
```

#### `facebook/Post`

```
{
  "id": <uuid>,
  "dateCreated": <date>,
  "author": <User>,
  "content": <paragraphs>,
  "attachment": <Attachment|optional>,
  "likes": <Collection(Like)>,
  "comments": <Collection(Comment)>,
}
```

#### `facebook/User`

```
{
  "id": <uuid>,
  "dateCreated": <date>,
  "avatar": <avatar>,
  "firstName": <firstName>,
  "lastName": <lastName>,
  "email": <email>
}
```

#### `facebook/NewsFeed`

Populate of `Post`s.
