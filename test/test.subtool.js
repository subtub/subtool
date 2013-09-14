var assert = require('assert');
var shell = require('shelljs/global');


describe('subtool', function() {
  it('show the help', function() {
    var tmpCode = exec('node bin/subtool').code;
    assert.equal( 0, tmpCode);
  })
})

describe('subtool -h', function() {
  it('show the help', function() {
    var tmpCode = exec('node bin/subtool -h').code;
    assert.equal( 0, tmpCode);
  })
})

describe('subtool license', function() {
  describe('subtool license [type]', function() {
    it('log apache license to console', function() {
      var tmpCode = exec('node bin/subtool license apache').code;
      assert.equal( 0, tmpCode);
    })
    it('log freebsd license to console', function() {
      var tmpCode = exec('node bin/subtool license freebsd').code;
      assert.equal( 0, tmpCode);
    })
    it('log isc license to console', function() {
      var tmpCode = exec('node bin/subtool license isc').code;
      assert.equal( 0, tmpCode);
    })
    it('log mit license to console', function() {
      var tmpCode = exec('node bin/subtool license mit').code;
      assert.equal( 0, tmpCode);
    })
    it('log newbsd license to console', function() {
      var tmpCode = exec('node bin/subtool license newbsd').code;
      assert.equal( 0, tmpCode);
    })
  })
})