var assert = require('assert');
var log = require('./../src/log');


describe('src/log.js', function() {
  
  describe('#log()', function() {
    it('log a message to the console.', function() {
      assert.equal( 'foo', log('foo') );
    });

    it('log a message to the console, with red color.', function() {
      assert.equal( 'foo', log('foo', {color: 'red'}) );
    });
    it('log a message to the console, with green color.', function() {
      assert.equal( 'foo', log('foo', {color: 'green'}) );
    });
    it('log a message to the console, with blue color.', function() {
      assert.equal( 'foo', log('foo', {color: 'blue'}) );
    });
    
    it('log nothing because silent mode is active.', function() {
      assert.equal( '', log('foo', {silent: true}) );
    });
  });

});
