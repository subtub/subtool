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
  }
  return tmp;
}
exports.toc = toc;

/**
 * Generated by the git-extras tool
 */
function contributors() {
  var sh = require('execSync');
  var summary = sh.exec('sh '+process.cwd()+'/assets/git-extras/bin/git-summary');

  var result = md.header2('Contributors')+'\n\n';
  result += '```';
  result += summary.stdout;
  result += '```\n\n';

  return result;
}

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
      }

      // Generate toc...
      if (config.readme.toc === true) {
        tmp += md.header2('Table of Content')+'\n\n';
        tmp += toc(config.readme.content);
        tmp += '\n';
      }

      // Add the content
      for (var i=0; i<config.readme.content.length; i++) {
        var tmpPwd = process.env.PWD;
        // If the files variable is a single string
        if (typeof config.readme.content[i].file === 'string') {
          tmp += md.readSync(tmpPwd+config.readme.content[i].file);
        }
        // If the files variable is an array
        if (config.readme.content[i].file instanceof Array) {
          for (var j=0; j<config.readme.content[i].file.length; j++) {
            tmp += md.readSync(tmpPwd+config.readme.content[i].file[j]);
          }
        }
      }

      tmp += contributors();

      // Add license...
      license.get(config.license, 'subtub', '2013', function(dataLicense) {
        tmp += md.header2('License')+'\n\n';
        tmp += '```\n';
        tmp += dataLicense;
        tmp += '```\n';
        tmp += utils.generateInfoMarkdown(data.version);
        return callback(tmp);
      });
    });
  }
}
exports.generate = generate;
