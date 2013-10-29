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
    }
    return tmp;
  },

  listOrdered: function(arr) {
    var tmp = '';
    for (var i=0; i<arr.length; i++) {
      tmp += (i+1)+'. '+arr[i]+this.LINEBREAK;
    }
    return tmp;
  },

  linkList: function(arr) {
    var tmp = '';
    for (var i=0; i<arr.length; i++) {
      tmp += '- ['+arr[i].title+']('+arr[i].url+')'+this.LINEBREAK;
    }
    return tmp;
  }

};
