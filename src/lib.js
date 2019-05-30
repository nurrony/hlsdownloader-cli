import { createReadStream } from 'fs';
import HLSDownloader from 'hlsdownloader';
import Ora from 'ora';
import { version } from './../package.json';

export function prepareExtraParams(requestParams) {
  const requestObject = {};
  Object.keys(requestParams).map(paramName => {
    try {
      requestObject[paramName] = JSON.parse(requestParams[paramName]);
    } catch (exception) {
      const error = new Error(`${paramName} is not a valid JSON string`);
      error.name = 'ERR_MALFORM_JSON';
      throw error;
    }
  });

  return requestObject;
}

const _downloadHls = params =>
  new Promise((resolve, reject) =>
    new HLSDownloader({ ...params }).startDownload((err, msg) => (err ? reject(err) : resolve(msg)))
  );

const commandHandlers = {
  async download(params) {
    const spinner = new Ora({ text: 'Downloading available TS and Playlist files...' });
    try {
      spinner.start();
      let { message, errors = null } = await _downloadHls(params);
      spinner.text = message;
      if (errors) {
        spinner.warn();
        console.log('Details:\r\n Following URLs can not be downloaded');
        console.log(`${errors.join('\r\n')}`);
      } else {
        spinner.succeed();
      }
    } catch (error) {
      spinner.text = `Downloading failed.\r\nDetails: ${error.statusCode} - ${error.message}. \r\n`;
      spinner.fail();
    }
  },
  help() {
    createReadStream('./help.txt').pipe(process.stdout);
    return true;
  },
  version() {
    console.log(`hlsdownloader cli version: ${version}`);
    return true;
  }
};

export function commandFlagPassed({ help, version }) {
  const command = (help && 'help') || (version && 'version');
  return command && commandHandlers[command]();
}

export function availableCommandPassed(playlistURL) {
  const commandList = Object.keys(commandHandlers);
  return playlistURL && commandList.indexOf(playlistURL) !== -1 && commandHandlers[playlistURL]();
}

export function execute({ destination, d, version, v, help, h, _, ...restArgs }) {
  const playlistURL = _.pop();
  const commandExecuted = commandFlagPassed({ help, version }) || availableCommandPassed(playlistURL);

  if (!commandExecuted && playlistURL) {
    const requestObject = prepareExtraParams(restArgs);
    commandHandlers['download']({ playlistURL, destination, ...requestObject });
  }
}
