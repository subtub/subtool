var assert = require('assert');
var testExec = require('./helper');


describe('bin/subtool-template', function() {
  testExec('subtool template -h');
  testExec('subtool template p5 -l');
  testExec('subtool template p5 -s sketch');
});
