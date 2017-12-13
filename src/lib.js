import HLSDownloader from 'hlsdownloader'

import { createReadStream } from 'fs'
import { version } from './../package.json'

export function prepareExtraParams(requestParams) {
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
  download(params) {
    const downloader = new HLSDownloader({ ...params })
    downloader.startDownload((err, msg) => err ? console.log(err) : console.log(msg))
  },
  help() {
    createReadStream('./help.txt').pipe(process.stdout)
    return true
  },
  version() {
    console.log(`hlsdownloader cli version: ${version}`)
    return true
  }
}

export function commandFlagPassed({ help, version }) {
  const command = (help && 'help') || (version && 'version')
  return command && commandHandlers[command]()
}

export function availableCommandPassed(playlistURL) {
  const commandList = Object.keys(commandHandlers)
  return (playlistURL && commandList.indexOf(playlistURL) !== -1 && commandHandlers[playlistURL]())
}

export function execute({ destination, d, version, v, help, h, _, ...restArgs }) {
  const playlistURL = _.pop()
  const commandExecuted = commandFlagPassed({ help, version }) || availableCommandPassed(playlistURL)

  if (!commandExecuted && playlistURL) {
    const requestObject = prepareExtraParams(restArgs)
    commandHandlers['download']({ playlistURL, destination, ...requestObject })
  }
}
