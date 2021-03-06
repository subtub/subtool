var assert = require('assert');
var readme = require('./../src/readme');


describe('src/readme.js', function() {
  
  describe('#headline()', function() {
    it('should return the readme headline without param.', function() {
      assert.equal( '#   \n', readme.headline() );
    });
    it('should return the readme headline with param name.', function() {
      assert.equal( '# foo  \n', readme.headline('foo') );
    });
    it('should return the readme headline with param name, version.', function() {
      assert.equal( '# foo v0.0.0  \n', readme.headline('foo', '0.0.0') );
    });
  });

  describe('#toc()', function() {
    // test data
    var data = [{title: 'General Information'},
                {title: 'Getting Started'},
                {title: 'Foo / Bar'}];

    it('should return the table of content.', function() {
      var toc = readme.toc(data);
      assert.equal( '[General Information](#general-information)  \n[Getting Started](#getting-started)  \n[Foo / Bar](#foo--bar)  \n', toc );
    });
  });

});
