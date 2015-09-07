const escape = require('escape-string-regexp');

const custom = ({
  hash = '#',
  swallow = false,
  urlBase = '#',
}, input) => {
  const search = new RegExp(`\`${escape(hash)}([^\\s]+?)\``, 'g');
  const replace = (
    '[`' +
      (swallow ? '' : hash) +
      '$1' +
    '`]' +
    `(${urlBase}$1)`
  );

  return String(input).replace(search, replace);
};

const hashtags = (input) => custom({}, input);

hashtags.custom = custom;
export {hashtags as default};
