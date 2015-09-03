[![Coveralls – test coverage
](https://img.shields.io/coveralls/studio-b12/markdown-code-hashtags.svg?style=flat-square)
](https://coveralls.io/r/studio-b12/markdown-code-hashtags)
 [![Travis – build status
](https://img.shields.io/travis/studio-b12/markdown-code-hashtags/master.svg?style=flat-square)
](https://travis-ci.org/studio-b12/markdown-code-hashtags)
 [![David – status of dependencies
](https://img.shields.io/david/studio-b12/markdown-code-hashtags.svg?style=flat-square)
](https://david-dm.org/studio-b12/markdown-code-hashtags)
 [![Stability: stable
](https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square)
](https://nodejs.org/api/documentation.html#documentation_stability_index)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




<div                                                         id="/">&nbsp;</div>

markdown-code-hashtags
======================

**Convert every [`#hashtag`](#hashtag) to a link.**




<p align="center"><a
  title="Graphic by the great Justin Mezzell"
  href="http://justinmezzell.tumblr.com/post/95370140878"
  >
  <br/>
  <br/>
  <img
    src="Readme/Scissors.gif"
    width="400"
    height="300"
  />
  <br/>
  <br/>
</a></p>




<div                                             id="/installation">&nbsp;</div>

Installation
------------

```sh
$ npm install markdown-code-hashtags
```




<div                                                    id="/usage">&nbsp;</div>
<a                                                             id="hashtag"></a>

Usage
-----

```js
const hashtags = require('markdown-code-hashtags');

hashtags(
  'Look! A `#hashtag`!'
);
//» 'Look! A [`#hashtag`](#hashtag)!'

hashtags.custom({hash: '@', swallow: true, urlBase: '/custom/'},
  'Got a different `@link` here.'
);
//» 'Got a different [`link`](/custom/link) here.'
```




<div                                                  id="/license">&nbsp;</div>

License
-------

[MIT][] © [Studio B12 GmbH][]

[MIT]:              ./License.md
[Studio B12 GmbH]:  http://studio-b12.de
