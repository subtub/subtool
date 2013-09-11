/**
 * Some utility functions.
 */


/**
 * Module dependencies.
 */
var fs = require('fs');

/**
 * If package.json exists, load it.
 *
 * @param path - Path to the package.json filepath.
 */
function readPackageJson(path, callback) {
  fs.readFile(path, function(err, data) {
    if (err) {
      // if no package.json was found, return false
      callback(false);
    } else {
      var tmp = data.toString();
      var pkg = JSON.parse(tmp);
      callback(pkg);
    }
  });
}
exports.readPackageJson = readPackageJson;
