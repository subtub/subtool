/**
 * Module dependencies.
 */
var fs = require('fs');
var path = require('path');

var FILENAME = 'LICENSE.txt';
exports.FILENAME = FILENAME;

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
    }
  }
  callback(valid);
}
exports.isTypeValid = isTypeValid;

/**
 * Small helper function to load the license templates and
 * replace author and date value.
 */
function get(license, author, date, callback) {
  isTypeValid(license, function(data) {
    if (data) {
      fs.readFile(path.dirname(__dirname)+'/templates/license/'+license+'.txt', function read(err, data) {
        if (err) console.error(err);

        author = author || 'subtub';
        date = date || (new Date()).getFullYear();

        var tmp = data.toString();
        var replaced = tmp.replace('{{author}}', author).replace('{{date}}', date);

        if (callback && typeof(callback) === "function") {
          callback(replaced);
        }
      });
    } else {
      var tmp = '\n';
      tmp += '  error: not correct license type. use the following types:\n';
      tmp += '         '+TYPES.toString()+'\n';
      callback(tmp);
    }
  });
}
exports.get = get;

/**
 * Save the license to textfile.
 */
exports.save = function(path, license, author, date, callback) {
  get(license, author, date, function(data) {
    fs.writeFile(path+'/'+FILENAME, data, function (err) {
      if (err) {
        callback(err);
      } else {
        callback(true);
      }
    });
  });
};
