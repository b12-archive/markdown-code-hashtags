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

test.skip('Takes other hashes', (is) => {});

test.skip('Swallows the hash', (is) => {});

test.skip('Uses a different URL base', (is) => {});

test.skip('Fails gracefully', (is) => {});
