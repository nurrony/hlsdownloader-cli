# HLSDownloader CLI (hlsdl)

### Upgrading is in progress. Please use tag or npm to install stable version. The code is broken in master

[![Greenkeeper badge](https://badges.greenkeeper.io/nmrony/hlsdownloader-cli.svg)](https://greenkeeper.io/)
[![version][npm-version]][npm-url] [![coding style: standard][standard-svg]][standard-site] [![dependencies][npm-dependencies]][dep-status] [![devDependencies][npm-dev-dependencies]][devdep-status] [![Downloads][npm-total-downloads]][npm-url] [![Travis branch](https://img.shields.io/travis/nmrony/hlsdownloader-cli/master.svg?style=flat-square)](https://travis-ci.org/nmrony/hlsdownloader-cli)
[![semantic-release][semvarbadge]][npm-url]

> HLS Downloader is under active development. Please send your thoughts, feature request and pull request

## Installation

```sh
[sudo] npm install -g hlsdownloader-cli
# or
[sudo] yarn global add hlsdownloader-cli
```

## Usage

```js
Usage: hlsdl <url> [options]

Options:
  -d, --destination      path to directory (default: current directory)
  -h, --help             Show help
  -v, --version          Show version number [boolean]

Examples:
  hlsdl http://path/to/playlist.m3u8 --destination /path/to/download
  hlsdl http://path/to/playlist.m3u8 -d /path/to/download
  hlsdl http://path/to/playlist.m3u8 -d /path/to/download --headers '{"X-Powered-By": "Yay!!"}'
```

## Passing **request-promise** parameters

You can pass any [request-promise](https://github.com/request/request-promise) parameter as flag that are supported by
[HLSDownloader](https://github.com/nmrony/hlsdownloader) package

I will be grateful if you all help me to improve this package by giving your suggestions, feature request and
pull requests. I am all ears!!

[npm-badge]: https://nodei.co/npm/hlsdownloader-cli.png?compact=true
[npm-version]: https://img.shields.io/npm/v/hlsdownloader-cli.svg?style=flat-square
[npm-dependencies]: https://img.shields.io/david/nmrony/hlsdownloader-cli.svg?style=flat-square
[npm-dev-dependencies]: https://img.shields.io/david/dev/nmrony/hlsdownloader-cli.svg?style=flat-square
[npm-total-downloads]: https://img.shields.io/npm/dm/hlsdownloader-cli.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/hlsdownloader-cli
[dep-status]: https://david-dm.org/nmrony/hlsdownloader-cli#info=dependencies&view=table
[devdep-status]: https://david-dm.org/nmrony/hlsdownloader-cli#info=devDependencies&view=table
[standard-svg]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-site]: http://standardjs.com
[semvarbadge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
