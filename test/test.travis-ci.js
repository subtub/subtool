var assert = require('assert');
var travis = require('./../src/travis-ci');


describe('src/travis-ci.js', function() {
  
  describe('#badgeMarkdown()', function() {
    it('should return a string if all parameters are valid', function() {
      assert.equal( '[![Build Status](https://travis-ci.org/subtub/subtool.png?branch=develop)](https://travis-ci.org/subtub/subtool)',
                    travis.badgeMarkdown('subtub', 'subtool', 'develop') );
    });
    it('should return a string if the user and project parameters are valid', function() {
      assert.equal( '[![Build Status](https://travis-ci.org/subtub/subtool.png?branch=master)](https://travis-ci.org/subtub/subtool)',
                    travis.badgeMarkdown('subtub', 'subtool') );
    });
    it('should return false if a parameter is not valid', function() {
      assert.equal( false, travis.badgeMarkdown('subtub') );
    });
    it('should return false if a parameter is not valid', function() {
      assert.equal( false, travis.badgeMarkdown() );
    });
  });

  describe('#generateYml()', function() {
    var config = {language: 'node_js', version: ['0.8', '0.10']};

    it('should return the generated .travis.yml content as string', function() {
      var config = {language: 'node_js', version: ['0.8', '0.10']};
      assert.equal( 'language: node_js\nnode_js:\n  - 0.8\n  - 0.10\n', travis.generateYml(config) );
    });
    it('should return the generated .travis.yml content as string', function() {
      var config = {language: 'node_js', version: '0.10'};
      assert.equal( 'language: node_js\nnode_js:\n  - 0.10\n', travis.generateYml(config) );
    });
    it('should return false is the config object is not correct', function() {
      var config = {language: 'node_js'};
      assert.equal( false, travis.generateYml(config) );
    });
    it('should return false if no config object exist', function() {
      assert.equal( false, travis.generateYml() );
    });
  });

  describe('#saveYml()', function() {
    it('should return true, if the file was saved', function() {
      travis.saveYml(process.env.PWD+'/test/files', config, function(data) {
        assert.equal( true, data );
      });
    });
    it('should return false, if an error occurred', function() {
      travis.saveYml(process.env.PWD+'/not/correct', config, function(data) {
        assert.equal( false, data );
      });
    });
  });

});
