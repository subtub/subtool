var assert = require('assert');
var readme = require('./../src/readme');

describe('src/readme.js', function() {
  describe('#headline()', function() {
    it('should return the readme headline.', function() {
      readme.headline(function(data) {
        assert.equal( '# subtool v0.0.1  \n', data );
      })
    })
  })

  describe('#readme()', function() {
    it('should return the readme headline.', function() {
      readme.readme(function(data) {
        assert.equal( 'foo', data );
      })
    })
  })
})
