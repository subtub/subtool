var assert = require('assert');
var config = require('./../src/config');


describe('src/config.js', function() {

	describe('#load()', function() {
    it('should return false if the config filepath is not correct.', function() {
      config.load('not/correct', function(data) {
        assert.equal( false, data );
      })
    })
    
    it('should return the config file content as object.', function() {
      config.load(process.env.PWD+'/docs/config.js', function(data) {
        assert( typeof data === 'object' );
      })
    })
  })

})
