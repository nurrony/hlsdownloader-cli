#!/usr/bin/env node
import minimist from 'minimist'

import { execute } from './lib'

const options = {
  string: ['destination'],
  boolean: ['version', 'help'],
  alias: {
    d: 'destination',
    h: 'help',
    v: 'version'
  },
  default: {
    destination: './',
    help: false,
    version: false
  }
}

const argv = minimist(process.argv.slice(2), options)

execute(argv);