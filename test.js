const test = require('tape-catch');

const hashtags = require('./module/index');

test('Works with default options', (is) => {
  const expected = 'Look! A [`#hashtag`](#hashtag)!';
  const actual = hashtags('Look! A `#hashtag`!');

  is.equal(actual, expected);

  is.end();
});

test.skip('Takes other hashes', (is) => {});

test.skip('Swallows the hash', (is) => {});

test.skip('Uses a different URL base', (is) => {});

test.skip('Fails gracefully', (is) => {});
