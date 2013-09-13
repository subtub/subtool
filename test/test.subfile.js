var assert = require('assert');
var subfile = require('./../src/subfile');


describe('src/subfile.js', function() {

  describe('#FILENAME', function() {
    it('should return .subfile as string', function() {
      assert.equal( '.subfile', subfile.FILENAME );
    })
  })

	describe('#load()', function() {
    it('should return false if the .subfile filepath is not correct.', function() {
      subfile.load('not/correct', function(data) {
        assert.equal( false, data );
      })
    })
    
    it('should return the .subfile file content as object.', function() {
      subfile.load(process.env.PWD+'/.subfile', function(data) {
        assert( typeof data === 'object' );
      })
    })
  })

})
