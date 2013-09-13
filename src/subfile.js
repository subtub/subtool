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
 * Load a config file.
 */
exports.load = function(path, callback) {
  var tmpPath = path+'/'+FILENAME;

  fs.exists(tmpPath, function(exists) {
    if (exists) {
      var config = require(tmpPath);
      return callback(config);
    } else {
      // if no config file was found, return false.
      return callback(false);
    }
  });
}

/**
 * Generate the config file.
 */
exports.generate = function() {
  var tmp = 'TODO';
  return tmp;
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
