/**
 * Logging messages to console.
 *
 * TODO:
 * - Change to Object to reduce parameter at log() function
 * - Add log.info(), log.warn(), log.error()
 * - Add log to file
 * - Move to own Module
 */


/**
 * Module dependencies.
 */
var clc = require('cli-color');

/**
 * Generated at information.
 *
 * @param config - object like: {silent: true, color: 'green'}
 */
module.exports = function(message, config) {
  var silent = false;
  var color = false;

  // check the config values
  if (config !== undefined) {
  	if (config.silent !== undefined) silent = config.silent;
  	if (config.color !== undefined) {
  		if (config.color === 'red') color = clc.red;
  		else if (config.color === 'green') color = clc.green;
  		else if (config.color === 'yellow') color = clc.yellow;
  		else if (config.color === 'blue') color = clc.blue;
  		else if (config.color === 'magenta') color = clc.magenta;
  		else if (config.color === 'cyan') color = clc.cyan;
  		else if (config.color === 'white') color = clc.white;
  	}
  }

  // log the message
  if (silent === false) {
  	if (color === false) {
      console.log(message);
    } else {
    	console.log(color(message));
    }
    return message;
  } else {
  	return '';
  }
}
