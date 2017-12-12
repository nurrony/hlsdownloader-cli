HLSDownloader CLI (hlsdl)
=========================
[![version][npm-version]][npm-url] [![coding style: standard][standard-svg]][standard-site]  [![dependencies][npm-dependencies]][dep-status] [![devDependencies][npm-dev-dependencies]][devdep-status] [![Downloads][npm-total-downloads]][npm-url] [![Travis branch](https://img.shields.io/travis/nmrony/hlsdownloader-cli/master.svg?style=flat-square)](https://travis-ci.org/nmrony/hlsdownloader-cli)

>For full features list, please check [Todo List](#todo-list) below. Keep an eye on github for updated feature list

Installation
-------------
```sh
[sudo] npm install -g hlsdownloader-cli
# or
[sudo] yarn global add hlsdownloader-cli
```

Usage
-----
```js
Usage: hlsdl <url> [options]

Options:
  -d, --destination      path to directory (default: current directory)
  -h, --help             Show help
  -v, --version          Show version number [boolean]

Examples:
  hlsdl http://path/to/playlist.m3u8 --destination /path/to/download
  hlsdl http://path/to/playlist.m3u8 -d /path/to/download
Usage: hlsdl <url> [options]

Options:
  -d, --destination      path to directory (default: current directory)
  -h, --help             Show help
  -v, --version          Show version number [boolean]

Examples:
  hlsdl http://path/to/playlist.m3u8 --destination /path/to/download
  hlsdl http://path/to/playlist.m3u8 -d /path/to/download
```

Passing **request-promise** parameters
---------------------------------------

> Add more documentation

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
