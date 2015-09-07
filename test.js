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
  const simple = {
    actual: hashtags.custom(
      {hash: '@'},
      'Look! A `@user`!'
    ),

    expected: 'Look! A [`@user`](#user)!',
  };

  is.equal(simple.actual, simple.expected,
    'in a simple case'
  );

  const dot = {
    actual: hashtags.custom(
      {hash: '.'},
      'Look! A `.class` and an `#id`!'
    ),

    expected: 'Look! A [`.class`](#class) and an `#id`!',
  };

  is.equal(dot.actual, dot.expected,
    'when the hash is a dot'
  );

  const star = {
    actual: hashtags.custom(
      {hash: '*'},
      'Look! A `*star`!'
    ),

    expected: 'Look! A [`*star`](#star)!',
  };

  is.equal(star.actual, star.expected,
    'when the hash is a star'
  );

  const special = {
    actual: hashtags.custom(
      {hash: '\\d'},
      'Look! A `\\donkey`!'
    ),

    expected: 'Look! A [`\\donkey`](#donkey)!',
  };

  is.equal(special.actual, special.expected,
    'when the hash is a special RegExp sequence'
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
