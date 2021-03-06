# egg-qabtest

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-qabtest.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-qabtest
[travis-image]: https://img.shields.io/travis/eggjs/egg-qabtest.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-qabtest
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-qabtest.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-qabtest?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-qabtest.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-qabtest
[snyk-image]: https://snyk.io/test/npm/egg-qabtest/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-qabtest
[download-image]: https://img.shields.io/npm/dm/egg-qabtest.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-qabtest

<!--
Description here.
-->

## Install

```bash
$ npm i egg-qabtest --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.qabtest = {
  enable: true,
  package: 'egg-qabtest',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.qabtest = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
