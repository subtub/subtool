var assert = require('assert');
var utils = require('./../src/utils');
var packageJson = require('./../package.json');
var pkg = packageJson.toString();


describe('src/utils.js', function() {

  describe('#readPackageJson()', function() {
    it('should return false if the package.json path is not correct.', function() {
      utils.readPackageJson('not/correct', function(data) {
        assert.equal( false, data );
      });
    });
    
    it('should return the package.json as object.', function() {
      utils.readPackageJson(process.env.PWD+'/package.json', function(data) {
        assert.equal( pkg, data );
      });
    });
  });

});
