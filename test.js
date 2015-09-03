const test = require('tape-catch');

const hashtags = require('./module/index');

test('Works with default options', (is) => {
  const actualSimple = hashtags('Look! A `#hashtag`!');
  const expectedSimple = 'Look! A [`#hashtag`](#hashtag)!';
  is.equal(actualSimple, expectedSimple,
    'in a simple case'
  );

  const actualIncorrect = hashtags('Look! A `#hash tag`!');
  const expectedIncorrect = 'Look! A `#hash tag`!';
  is.equal(actualIncorrect, expectedIncorrect,
    'ignoring the hashtag when there’s whitespace inside'
  );

  const actualTricky = hashtags('Look! A `#hash`#stuff`tag`!');
  const expectedTricky = 'Look! A [`#hash`](#hash)#stuff`tag`!';
  is.equal(actualTricky, expectedTricky,
    'in a tricky case'
  );

  is.end();
});

test('Takes other hashes', (is) => {
  const actual = hashtags.custom(
    {hash: '@'},
    'Look! A `@user`!'
  );

  const expected = 'Look! A [`@user`](#user)!';

  is.equal(actual, expected,
    'in a simple case'
  );

  is.end();
});

test('Swallows the hash', (is) => {
  const actual = hashtags.custom(
    {swallow: true},
    'Look! A nice `#link` in code!'
  );

  const expected = 'Look! A nice [`link`](#link) in code!';

  is.equal(actual, expected,
    'in a simple case'
  );

  is.end();
});

test('Takes a different URL base', (is) => {
  const actual = hashtags.custom(
    {urlBase: '/see/this/'},
    'Look! This `#tag` points somewhere else!'
  );

  const expected = 'Look! This [`#tag`](/see/this/tag) points somewhere else!';

  is.equal(actual, expected,
    'in a simple case'
  );

  is.end();
});

test.skip('Fails gracefully', (is) => {});
