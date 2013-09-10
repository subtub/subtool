/**
 * Module dependencies.
 */
var fs = require('fs');
var path = require('path');

/**
 * Small helper function to load the license templates and
 * replace author and date value.
 */
function loadLicense(path, author, date, callback) {
  fs.readFile(process.cwd()+'/templates/license/'+path, function read(err, data) {
    if (err) console.error(err);

    author = author || 'subtub';
    date = date || (new Date()).getFullYear();

    var tmp = data.toString();
    var replaced = tmp.replace('{{author}}', author).replace('{{date}}', date);

    if (callback && typeof(callback) === "function") {
      callback(replaced);
    };
  })
}
exports.loadLicense = loadLicense;

/**
 * The Apache License
 */
exports.apache = function(author, date, callback) {
  loadLicense('apache.txt', author, date, function(data) {
    if (callback && typeof(callback) === "function") {
      callback(data);
    };
  })
}

/**
 * The FreeBSD License
 */
exports.freebsd = function(author, date, callback) {
  loadLicense('freebsd.txt', author, date, function(data) {
    if (callback && typeof(callback) === "function") {
      callback(data);
    };
  })
}

/**
 * The ISC License
 */
exports.isc = function(author, date, callback) {
  loadLicense('isc.txt', author, date, function(data) {
    if (callback && typeof(callback) === "function") {
      callback(data);
    };
  })
}

/**
 * The MIT License
 */
exports.mit = function(author, date, callback) {
  loadLicense('mit.txt', author, date, function(data) {
    if (callback && typeof(callback) === "function") {
      callback(data);
    };
  })
}

/**
 * The NewBSD License
 */
exports.newbsd = function(author, date, callback) {
  loadLicense('newbsd.txt', author, date, function(data) {
    if (callback && typeof(callback) === "function") {
      callback(data);
    };
  })
}
