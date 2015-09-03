const custom = ({
  hash = '#',
  swallow = false,
  urlBase = '#',
}, input) => input;

const hashtags = (input) => custom({}, input);

hashtags.custom = custom;
export {hashtags as default};
