var assert = require('assert');
var travis = require('./../src/travis-ci');


describe('src/travis-ci.js', function() {
  
  var config = {language: 'node_js', version: ['0.8', '0.10']};

  describe('#saveYml() with callback', function() {
    it('should return true, if the file was saved', function() {
      travis.saveYml(process.env.PWD+'/testing', config, function(data) {
        assert.equal( true, data );
      })
    })
    it('should return false, if an error occurred', function() {
      travis.saveYml(process.env.PWD+'/not/correct', config, function(data) {
        assert.equal( false, data );
      })
    })
  })

})
