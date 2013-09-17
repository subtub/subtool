/**
 * readme.js
 * Everything is formatted using the markdown.js
 */


/**
 * Module dependencies.
 */
var shell = require('shelljs/global');
var license = require('./license');
var md = require('./markdown');
var travis = require('./travis-ci');
var utils = require('./utils');

/**
 * The Readme headline.
 */
function headline(name, version) {
  var tmp = '';
  if (name) tmp += name;
  if (version) tmp += ' v'+version;
  return md.header1(tmp)+'  \n';
}
exports.headline = headline;

/**
 * Generate a Table of Content string. Formatted in Markdown.
 */
function toc(config) {
  var tmp = '';
  for (var i=0; i<config.length; i++) {
    var anchor = config[i].title.toLowerCase();
    anchor = anchor.replace(/\s/g, '-').replace(/\//g, '');
    tmp += md.link('#'+anchor, config[i].title)+'  \n';
  };
  return tmp;
}
exports.toc = toc;

/**
 * Generate the README file. Formatted in Markdown.
 */
function generate(config, callback) {
  if (callback && typeof(callback) === "function") {
    utils.readPackageJson(process.env.PWD+'/package.json', function(data) {
      var tmp = headline(data.name, data.version)+'\n';

      // Travis-ci badge
      if (config.travis) {
        tmp += travis.badgeMarkdown(config.github.username, config.github.project)+'\n\n';
      };

      // Generate toc...
      if (config.readme.toc === true) {
        tmp += md.header2('Table of Content')+'\n\n';
        tmp += toc(config.readme.content);
        tmp += '\n';
      };

      // Add markdown files...
      // var numOfFiles = find(process.env.PWD+config.readme.content).filter(function(file) { return file.match(/\.md$/); });
      // for (var i=0; i<numOfFiles.length; i++) {
      //   console.log('['+i+'] '+numOfFiles[i]);
      //   var str = cat(numOfFiles[i]);
      //   tmp += str;
      // };
      for (var i=0; i<config.readme.content.length; i++) {
        var tmpPath = process.env.PWD+config.readme.content[i].file;
        //console.log('['+i+'] '+tmpPath);
        var str = cat(tmpPath);
        tmp += str;
      };

      // Add license...
      license.get(config.license, 'subtub', '2013', false, function(data) {
        tmp += md.header2('License')+'\n\n';
        tmp += '```\n';
        tmp += data;
        tmp += '```\n';
        tmp += utils.generatedInfoMarkdown();
        return callback(tmp);
      });
    });
  }
}
exports.generate = generate;
