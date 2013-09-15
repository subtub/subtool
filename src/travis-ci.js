/**
 * Module dependencies.
 */
var fs = require('fs');
var md = require('./markdown');

var FILENAME = '.travis.yml';

/**
 * Return Travis-ci Markdown badge as string.
 */
exports.badgeMarkdown = function(githubUsername, githubProject, branch) {
  branch = branch || 'master';
  var img = 'https://travis-ci.org/'+githubUsername+'/'+githubProject+'.png?branch='+branch;
  var url = 'https://travis-ci.org/'+githubUsername+'/'+githubProject;
  return md.link(url, md.image(img, 'Build Status'));
}

/**
 * Generate the content for a travis file.
 */
exports.generateYml = function(config) {
  var tmp = 'language: node_js\n';
  tmp += 'node_js:\n';
  tmp += '  - 0.8\n';
  tmp += '  - 0.10';
  return tmp;
}

/**
 * Create .travis.yml file
 *
 * @param config - like {language: 'node_js', version: '0.8'}
 */
exports.saveYml = function(path, config, callback) {
  var tmp = 'language: '+config.language+'\n';
  tmp += config.language+':\n';

  for (var i=0; i<config.version.length; i++) {
    tmp += '  - '+config.version[i]+'\n';
  };

  fs.writeFile(path+'/'+FILENAME, tmp, function (err) {
    if(err) {
      //console.log(err);
      return callback(false);
    } else {
      return callback(true);
    }
  });
}
