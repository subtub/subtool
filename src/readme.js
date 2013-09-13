/**
 * readme.js
 * Everything is formatted in Markdown
 */


/**
 * Module dependencies.
 */
var shell = require('shelljs/global');
var utils = require('./utils');
var license = require('./license');
var travis = require('./travis-ci');

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
 * Generate a Table of Content string. Formatted in Markdown.
 */
function toc(config) {
  var tmp = '## Table of Content\n\n';

  for (var i=0; i<config.readme.order.length; i++) {
    tmp += '['+config.readme.order[i].title+'](#'+config.readme.order[i].title+')  \n';
  };
  tmp += '\n';

  return tmp;
}
exports.toc = toc;

/**
 * Generate the README file. Formatted in Markdown.
 */
function readme(config, callback) {
  if (callback && typeof(callback) === "function") {
    utils.readPackageJson(process.env.PWD+'/package.json', function(data) {
      var tmp = headline(data.name, data.version)+'\n';

      // Travis-ci badge
      if (config.travis) {
        tmp += travis.badgeMarkdown(config.github.username, config.github.project)+'\n\n';
      };

      // Generate toc...
      if (config.readme.toc === true) {
        tmp += toc(config);
      };

      // Add markdown files...
      // var numOfFiles = find(process.env.PWD+config.readme.content).filter(function(file) { return file.match(/\.md$/); });
      // for (var i=0; i<numOfFiles.length; i++) {
      //   console.log('['+i+'] '+numOfFiles[i]);
      //   var str = cat(numOfFiles[i]);
      //   tmp += str;
      // };
      for (var i=0; i<config.readme.order.length; i++) {
        var tmpPath = process.env.PWD+config.readme.content+config.readme.order[i].file;
        //console.log('['+i+'] '+tmpPath);
        var str = cat(tmpPath);
        tmp += str;
      };

      // Add license...
      license.mit('subtub', '2013', function(data) {
        tmp += '## License\n\n'+data;

        tmp += generatedInfo();
        return callback(tmp);
      });
    });
  }
}
exports.readme = readme;
