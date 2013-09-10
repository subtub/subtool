/**
 * readme.js
 * Everything is formatted in Markdown
 */

var fs = require('fs');
var path = require('path');
var license = require('./license.js');


/**
 * The Readme headline.
 */
function headline(callback) {
  // The package.json filepath
  var pkgPath = process.env.PWD+'/package.json';
  // check if a package.json exist
  fs.exists(pkgPath, function(data) {
    if (data === true) {
      // read the file
      fs.readFile(pkgPath, function(err, data) {
        var pkg = JSON.parse(data);
        // check if the name and version value exist
        var name = null;
        if (pkg.name) name = pkg.name;
        var version = null;
        if (pkg.version) version = pkg.version;
        return callback('# '+name+' v'+version+'  \n');
      });
    }
    // if no package.json was found, we use the directory name.
    else {
      return callback('# '+path.basename(process.env.PWD)+'  \n');
    };
  });
}
exports.headline = headline;

/**
 * Generated at information.
 */
function generatedInfo() {
  var content = '---\n\n'+
                '*This Readme was generated on '+Date()+'.*  \n';
  return content;
}

/**
 *
 */
function readme(callback) {
  if (callback && typeof(callback) === "function") {
    var tmp = null;
    headline(function(data) {
      tmp = data;
      tmp = '## License';
      tmp += license.mit();
      tmp += generatedInfo();
      return callback(tmp);
    });
  }
}
exports.readme = readme;
