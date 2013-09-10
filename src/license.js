/**
 * Module dependencies.
 */
var fs = require('fs');
var path = require('path');

/**
 * Small helper function to load the license templates and
 * replace name and year value.
 */
function loadLicense(path, name, year, callback) {
  fs.readFile(process.cwd()+'/templates/license/'+path, function read(err, data) {
    if (err) console.error(err);

    year = year || (new Date()).getFullYear();

    var tmp = data.toString();
    var replaced = tmp.replace('{{name}}', name).replace('{{year}}', year);

    if (callback && typeof(callback) === "function") {
      callback(replaced);
    };
  })
}
exports.loadLicense = loadLicense;

/**
 * The Apache License
 */
exports.apache = function(name, year, callback) {
  loadLicense('apache.txt', name, year, function(data) {
    if (callback && typeof(callback) === "function") {
      callback(data);
    };
  })
}

/**
 * The FreeBSD License
 */
exports.freebsd = function(name, year, callback) {
  loadLicense('freebsd.txt', name, year, function(data) {
    if (callback && typeof(callback) === "function") {
      callback(data);
    };
  })
}

/**
 * The ISC License
 */
exports.isc = function(name, year, callback) {
  loadLicense('isc.txt', name, year, function(data) {
    if (callback && typeof(callback) === "function") {
      callback(data);
    };
  })
}

/**
 * The MIT License
 */
exports.mit = function(name, year, callback) {
  loadLicense('mit.txt', name, year, function(data) {
    if (callback && typeof(callback) === "function") {
      callback(data);
    };
  })
}

/**
 * The NewBSD License
 */
exports.newbsd = function(name, year, callback) {
  loadLicense('newbsd.txt', name, year, function(data) {
    if (callback && typeof(callback) === "function") {
      callback(data);
    };
  })
}
