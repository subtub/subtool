/**
 * Module dependencies.
 */
var fs = require('fs');
var log = require('./log');

/**
 * Array of the available licenses.
 */
var TYPES = ['apache', 'freebsd', 'isc', 'mit', 'newbsd'];
exports.TYPES = TYPES;

/**
 * Check if the license variable is valid
 */
function isTypeValid(license, callback) {
  var valid = false;
  for (var i=0; i<TYPES.length; i++) {
    if (license === TYPES[i]) {
      valid = true;
    };
  };
  callback(valid);
}
exports.isTypeValid = isTypeValid;

/**
 * Small helper function to load the license templates and
 * replace author and date value.
 */
function get(license, author, date, logSilent, callback) {
  logSilent = logSilent || false;

  isTypeValid(license, function(data) {
    if (data) {
      fs.readFile(process.cwd()+'/templates/license/'+license+'.txt', function read(err, data) {
        if (err) console.error(err);

        author = author || 'subtub';
        date = date || (new Date()).getFullYear();

        var tmp = data.toString();
        var replaced = tmp.replace('{{author}}', author).replace('{{date}}', date);

        if (callback && typeof(callback) === "function") {
          callback(replaced);
        };
      })
    } else {
      log('', logSilent);
      log('  error: not correct license type. use the following types:', logSilent);
      log('         apache, freebsd, isc, mit, newbsd', logSilent);
      log('', logSilent);
      return false;
    }
  });
}
exports.get = get;

/**
 * Save the license to textfile.
 */
exports.save = function(license, author, date, logSilent) {
  logSilent = logSilent || false;

  get(license, author, date, function(data) {
    fs.writeFile('LICENSE.txt', data, function (err) {
      if (err) throw err;
      log('It\'s saved!', logSilent);
    });
  });
}
