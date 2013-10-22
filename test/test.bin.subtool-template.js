var assert = require('assert');
var testExec = require('./helper');


describe('bin/subtool-template', function() {
  testExec('subtool-template -h');
  testExec('subtool-template -a');
  testExec('subtool-template -t p5 -l');
  testExec('subtool-template -t p5 -s sketch');
});
