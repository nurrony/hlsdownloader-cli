#!/usr/bin/env node
"use strict";var _minimist=_interopRequireDefault(require("minimist"));var _fs=require("fs");var _package=require("./../package.json");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const options={string:["download-dir"],boolean:["version","help"],alias:{d:"download-directory",h:"help",v:"version"},default:{"destination-directory":"./",help:false,version:false}};const argv=(0,_minimist.default)(process.argv.slice(2),options);function help(){return(0,_fs.createReadStream)("./help.txt").pipe(process.stdout)}(function execute(argv){if(argv.h){return help()}if(argv.v){return console.log("hlsdownloader cli version: ",_package.version)}})(argv,undefined);
