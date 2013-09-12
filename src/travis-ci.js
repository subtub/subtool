/**
 * Return Travis-ci Markdown badge as string.
 */
exports.badgeMarkdown = function(githubUsername, githubProject, branch) {
	branch = branch || 'master';
	return '[![Build Status](https://travis-ci.org/'+githubUsername+'/'+githubProject+'.png?branch='+branch+')](https://travis-ci.org/'+githubUsername+'/'+githubProject+')\n\n';
}
