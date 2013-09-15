var assert = require('assert');
var shell = require('shelljs/global');


describe('bin/subtool', function() {
  testExec('');

  testExec('-h');
  testExec('-V');

  testExec('license -h');
  testExec('license apache');
  testExec('license freebsd');
  testExec('license isc');
  testExec('license mit');
  testExec('license newbsd');
  testExec('license mit -a subtub');
  testExec('license mit -d "2012 - 2013"');

  testExec('readme -h');
  testExec('readme');
  testExec('readme -n');

  testExec('tpl -h');
  testExec('tpl p5 -l');
  testExec('tpl p5 -t sketch');
})

/**
 * Small execution test helper.
 * Check if the exec code equals 0.
 */
function testExec(cmd) {
  it('execute bin/subtool '+cmd, function() {
    var tmpCode = exec('node bin/subtool '+cmd, {silent:true}).code;
    assert.equal( 0, tmpCode);
  })
}
