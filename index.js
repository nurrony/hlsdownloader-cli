#!/usr/bin/env node
import minimist from 'minimist'
import HLSDownloader from 'hlsdownloader'

import { createReadStream } from 'fs'
import { version } from './../package.json'

function prepareExtraParams(requestParams) {
  const requestObject = {}
  Object.keys(requestParams).map(paramName => {
    try {
      requestObject[paramName] = JSON.parse(requestParams[paramName])
    } catch (exception) {
      const error = new Error(`${paramName} is not a valid JSON string`)
      error.name = 'ERR_MALFORM_JSON'
      throw error
    }
  })

  return requestObject
}
const commandHandlers = {
  download(downloaderParams) {
    //HLSDownloader.download({ playlistURL, destination })
    console.log('testing', downloaderParams)
  },
  help() {
    createReadStream('./help.txt').pipe(process.stdout)
    return true
  },
  version() {
    console.log('hlsdownloader cli version: ', version)
    return true
  }
}

function commandFlagPassed({ help, version }) {
  const command = (help && 'help') || (version && 'version')
  return command && commandHandlers[command]()
}

function availableCommandPassed(playlistURL) {
  const commandList = Object.keys(commandHandlers)
  return (playlistURL && commandList.indexOf(playlistURL) !== -1 && commandHandlers[playlistURL]())
}

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

function execute({ destination, d, version, v, help, h, _, ...restArgs }) {
  const playlistURL = _.pop()
  const commandExecuted = commandFlagPassed({ help, version }) || availableCommandPassed(playlistURL)

  if (!commandExecuted && playlistURL) {
    const requestObject = prepareExtraParams(restArgs)
    commandHandlers['download']({ playlistURL, destination, ...requestObject })
  } else {
    commandHandlers['help']()
  }
}

execute(argv)
