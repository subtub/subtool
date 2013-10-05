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
  if (githubUsername !== undefined && githubProject !== undefined) {
    branch = branch || 'master';
    var img = 'https://travis-ci.org/'+githubUsername+'/'+githubProject+'.png?branch='+branch;
    var url = 'https://travis-ci.org/'+githubUsername+'/'+githubProject;
    return md.link(url, md.image(img, 'Build Status'));
  } else {
    return false;
  }
};

/**
 * Generate the content for a travis file.
 *
 * @param config - object like {language: 'node_js', version: ['0.8', '0.10']}
 */
function generateYml(config) {
  // If config object is not valid
  if (config === undefined ||
      config.language === undefined ||
      config.version === undefined) {
    return false;
  }
  // If it is valid
  else {
    var tmp = 'language: '+config.language+'\n';
    tmp += config.language+':\n';
    // If config.version is array
    if (config.version instanceof Array) {
      for (var i=0; i<config.version.length; i++) {
        tmp += '  - '+config.version[i]+'\n';  
      }
    }
    // if it is a string
    else if (typeof config.version === 'string'){
      tmp += '  - '+config.version+'\n';
    }
    return tmp;
  }
}
exports.generateYml = generateYml;

/**
 * Create .travis.yml file
 *
 * @param config - like {language: 'node_js', version: '0.8'}
 */
exports.saveYml = function(path, config, callback) {
  fs.writeFile(path+'/'+FILENAME, generateYml(config), function (err) {
    if(err) {
      //console.log(err);
      return callback(false);
    } else {
      return callback(true);
    }
  });
};
