/**
 * Module dependencies.
 */
var fs = require('fs');


/**
 * The main object.
 * Some Markdown functions to generate links, lists etc. strings.
 */
module.exports = markdown = {

  LINEBREAK: '\n',

  link: function(url, title) {
    return '['+title+']('+url+')';
  },

  image: function(url, altText) {
    altText = altText || '';
    return '!['+altText+']('+url+')';
  },

  header1: function(text) {
    return '# '+text;
  },

  header2: function(text) {
    return '## '+text;
  },

  header3: function(text) {
    return '### '+text;
  },

  header4: function(text) {
    return '#### '+text;
  },

  header5: function(text) {
    return '##### '+text;
  },

  header6: function(text) {
    return '###### '+text;
  },

  blockquotes: function(text) {
    return '> '+text;
  },

  inlineCode: function(code) {
    return '`'+code+'`';
  },

  blockCode: function(code) {
    return '    '+code;
  },

  rule: function() {
    return '---';
  },

  list: function(arr) {
    var tmp = '';
    for (var i=0; i<arr.length; i++) {
      tmp += '- '+arr[i]+this.LINEBREAK;
    };
    return tmp;
  },

  listOrdered: function(arr) {
    var tmp = '';
    for (var i=0; i<arr.length; i++) {
      tmp += (i+1)+'. '+arr[i]+this.LINEBREAK;
    };
    return tmp;
  },

  linkList: function(arr) {
    var tmp = '';
    for (var i=0; i<arr.length; i++) {
      tmp += '- ['+arr[i].title+']('+arr[i].url+')'+this.LINEBREAK;
    };
    return tmp;
  },

  read: function(path, callback) {
    fs.readFile(path, function(err, data) {
      if (err) {
        return callback(err);
      } else {
        var content = data.toString();
        var tmp = include(content);
        return callback(tmp);
      };
    });
  },

  readSync: function(path) {
    var content = fs.readFileSync(path, 'utf-8');
    var tmp = include(content);
    return tmp;
  }

}

var INCLUDE_START = '\\include{';
var INCLUDE_STOP = '}';

function include(text) {
  var parseInclude = text.split(INCLUDE_START);
  // If an include string was found.
  if (parseInclude.length > 1) {
    var tmpText = parseInclude[0];
    for (var i=1; i<parseInclude.length; i++) {
      var tmpPath = parseInclude[i].split(INCLUDE_STOP);
      // Read the file. The first array object is the path.
      var tmpFile = markdown.readSync(process.env.PWD+tmpPath[0]);
      tmpText += tmpFile;
      if (tmpPath.length > 0) {
        tmpText += tmpPath[1];
      }
    };
    return tmpText;
  }
  // If no include was found...
  else {
    return text;
  }
};
