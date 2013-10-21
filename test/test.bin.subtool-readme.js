var assert = require('assert');
var testExec = require('./helper');


describe('bin/subtool', function() {
  testExec('subtool readme -h');
  testExec('subtool readme');
  testExec('subtool readme -d');
});
