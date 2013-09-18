/**
 * Some Markdown functions to generate links, lists etc. strings.
 */

var LINEBREAK = '\n';

exports.link = function(url, title) {
  return '['+title+']('+url+')';
}

exports.image = function(url, altText) {
  altText = altText || '';
  return '!['+altText+']('+url+')';
}

exports.header1 = function(text) {
  return '# '+text;
}

exports.header2 = function(text) {
  return '## '+text;
}

exports.header3 = function(text) {
  return '### '+text;
}

exports.header4 = function(text) {
  return '#### '+text;
}

exports.header5 = function(text) {
  return '##### '+text;
}

exports.header6 = function(text) {
  return '###### '+text;
}

exports.blockquotes = function(text) {
  return '> '+text;
}

exports.inlineCode = function(code) {
  return '`'+code+'`';
}

exports.blockCode = function(code) {
  return '    '+code;
}

exports.rule = function() {
  return '---';
}

exports.list = function(arr) {
  var tmp = '';
  for (var i=0; i<arr.length; i++) {
    tmp += '- '+arr[i]+LINEBREAK;
  };
  return tmp;
}

exports.listOrdered = function(arr) {
  var tmp = '';
  for (var i=0; i<arr.length; i++) {
    tmp += (i+1)+'. '+arr[i]+LINEBREAK;
  };
  return tmp;
}

exports.linkList = function(arr) {
  var tmp = '';
  for (var i=0; i<arr.length; i++) {
    tmp += '- ['+arr[i].title+']('+arr[i].url+')'+LINEBREAK;
  };
  return tmp;
}
