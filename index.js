#!/usr/bin/env node
import minimist from 'minimist'
import { createReadStream } from 'fs'
import { version } from './../package.json'

const options = {
  string:['download-dir'],
  boolean: ['version', 'help'],
  alias: {
    d: 'download-directory',
    h: 'help',
    v: 'version'
  },
  default: {
    'destination-directory': './',
    help: false,
    version: false
  }
}

const argv = minimist(process.argv.slice(2), options)

function help() {
  return createReadStream('./help.txt').pipe(process.stdout)
}

(function execute (argv) {
  if (argv.h) {
    return help()
  }

  if (argv.v) {
    return console.log(version)
  }
  // start download

})(argv, undefined)
