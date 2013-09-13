/**
 * Module dependencies.
 */
var md = require('./markdown');

/**
 * Return Travis-ci Markdown badge as string.
 */
exports.badgeMarkdown = function(githubUsername, githubProject, branch) {
	branch = branch || 'master';
	var img = 'https://travis-ci.org/'+githubUsername+'/'+githubProject+'.png?branch='+branch;
	var url = 'https://travis-ci.org/'+githubUsername+'/'+githubProject;
	return md.link(url, md.image(img, 'Build Status'));
}
