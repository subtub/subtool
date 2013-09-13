var assert = require('assert');
var log = require('./../src/log');


describe('src/log.js', function() {
  
  describe('#log()', function() {
    it('log a message to the console.', function() {
      assert.equal( 'foo', log('foo') );
    })
    it('log nothing because silent mode is active.', function() {
      assert.equal( '', log('foo', true) );
    })
  })

})
