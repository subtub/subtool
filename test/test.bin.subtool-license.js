var assert = require('assert');
var testExec = require('./helper');


describe('bin/subtool-license', function() {
  testExec('subtool license -h');
  testExec('subtool license apache');
  testExec('subtool license freebsd');
  testExec('subtool license isc');
  testExec('subtool license mit');
  testExec('subtool license newbsd');
  testExec('subtool license mit -a subtub');
  testExec('subtool license mit -d "2012 - 2013"');
});
