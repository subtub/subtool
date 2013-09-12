/**
 * readme.js
 * Everything is formatted in Markdown
 */


/**
 * Module dependencies.
 */
var utils = require('./utils');
var license = require('./license');

/**
 * The Readme headline.
 */
function headline(name, version) {
  var tmp = '# ';
  if (name) tmp += name;
  if (version) tmp += ' v'+version;
  return tmp+'  \n';
}
exports.headline = headline;

/**
 * Generated at information.
 */
function generatedInfo() {
  return '\n---\n\n'+
         '*This Readme was generated on '+Date()+'.*  \n';
}

/**
 *
 */
function readme(callback) {
  if (callback && typeof(callback) === "function") {
    utils.readPackageJson(process.env.PWD+'/package.json', function(data) {
      var tmp = headline(data.name, data.version)+'\n';

      license.mit('subtub', '2013', function(data) {
        tmp += '## License\n\n'+data;

        tmp += generatedInfo();
        return callback(tmp);
      });
    });
  }
}
exports.readme = readme;
