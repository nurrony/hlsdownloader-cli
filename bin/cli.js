#!/usr/bin/env node
'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _minimist=require('minimist');var _minimist2=_interopRequireDefault(_minimist);var _hlsdownloader=require('hlsdownloader');var _hlsdownloader2=_interopRequireDefault(_hlsdownloader);var _fs=require('fs');var _package=require('./../package.json');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i]}return target}function prepareExtraParams(requestParams){const requestObject={};Object.keys(requestParams).map(paramName=>{try{requestObject[paramName]=JSON.parse(requestParams[paramName])}catch(exception){const error=new Error(`${paramName} is not a valid JSON string`);error.name='ERR_MALFORM_JSON';throw error}});return requestObject}const commandHandlers={download(params){const downloader=new _hlsdownloader2.default(_extends({},params));downloader.startDownload((err,msg)=>err?console.log(err):console.log(msg))},help(){(0,_fs.createReadStream)('./help.txt').pipe(process.stdout);return true},version(){console.log('hlsdownloader cli version: ',_package.version);return true}};function commandFlagPassed({help,version}){const command=help&&'help'||version&&'version';return command&&commandHandlers[command]()}function availableCommandPassed(playlistURL){const commandList=Object.keys(commandHandlers);return playlistURL&&commandList.indexOf(playlistURL)!==-1&&commandHandlers[playlistURL]()}const options={string:['destination'],boolean:['version','help'],alias:{d:'destination',h:'help',v:'version'},default:{destination:'./',help:false,version:false}};const argv=(0,_minimist2.default)(process.argv.slice(2),options);function execute(_ref){let{destination,d,version,v,help,h,_}=_ref,restArgs=_objectWithoutProperties(_ref,['destination','d','version','v','help','h','_']);const playlistURL=_.pop();const commandExecuted=commandFlagPassed({help,version})||availableCommandPassed(playlistURL);if(!commandExecuted&&playlistURL){const requestObject=prepareExtraParams(restArgs);commandHandlers['download'](_extends({playlistURL,destination},requestObject))}else{commandHandlers['help']()}}execute(argv);
