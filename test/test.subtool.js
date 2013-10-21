var assert = require('assert');
var testExec = require('./helper');


describe('bin/subtool', function() {
  testExec('subtool');

  testExec('subtool -h');
  testExec('subtool -V');

  testExec('subtool license -h');
  testExec('subtool license apache');
  testExec('subtool license freebsd');
  testExec('subtool license isc');
  testExec('subtool license mit');
  testExec('subtool license newbsd');
  testExec('subtool license mit -a subtub');
  testExec('subtool license mit -d "2012 - 2013"');

  testExec('subtool readme -h');
  testExec('subtool readme');
  testExec('subtool readme -d');

  testExec('subtool tpl -h');
  testExec('subtool tpl p5 -l');
  testExec('subtool tpl p5 -s sketch');
});
