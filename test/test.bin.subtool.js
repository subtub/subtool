var assert = require('assert');
var testExec = require('./helper');


describe('bin/subtool', function() {
  testExec('subtool');
  testExec('subtool -h');
  testExec('subtool -V');
  testExec('subtool help init');
  testExec('subtool help readme');
  testExec('subtool help license');
  testExec('subtool help template');
});
