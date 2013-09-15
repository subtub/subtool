var assert = require('assert');
var travis = require('./../src/travis-ci');


describe('src/travis-ci.js', function() {
  
  describe('#saveYml()', function() {
  	it('should return true, if the file was saved', function() {
  		travis.saveYml(process.env.PWD+'/testing', {language: 'node_js', version: '0.8'}, function(data) {
  			assert.equal( true, data );
  		})
    })
    it('should return false, if an error occurred', function() {
  		travis.saveYml(process.env.PWD+'/not/correct', {language: 'node_js', version: '0.8'}, function(data) {
  			assert.equal( false, data );
  		})
    })
  })

})
