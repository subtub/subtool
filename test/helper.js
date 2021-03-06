var assert = require('assert');
var shell = require('shelljs/global');

/**
 * Small execution test helper.
 * Check if the exec code equals 0.
 */
function testExec(cmd) {
  it('execute bin/'+cmd, function(done) {
    var tmpCode = exec('node bin/'+cmd, {silent:true}).code;
    assert.equal( 0, tmpCode);
    done();
  });
}

module.exports = testExec;
