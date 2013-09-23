/**
 * Config file functions.
 */


/**
 * Module dependencies.
 */
var fs = require('fs');

/**
 * The filename we use for our subfiles.
 */
var FILENAME = '.subfile';
exports.FILENAME = FILENAME;

/**
 * The valid version
 */
var VERSION = '0.0.2';

/**
 * Load a config file.
 */
exports.load = function(path, callback) {
  var tmpPath = path+'/'+FILENAME;

  fs.exists(tmpPath, function(exists) {
    if (exists) {
      var config = require(tmpPath);

      // check version of the .subfile
      if (config.version === VERSION) {
        return callback(config);
      } else {
        console.log('Not valid version.');
        return callback(false);
      }
    } else {
      // if no config file was found, return false.
      return callback(false);
    }
  });
}

/**
 * Check the config file.
 *
 * @param path - Path to the config file.
 * @returns True if the file is ok.
 */
exports.lint = function(path) {
  // TODO
  return false;
}
