var assert = require('assert');
var markdown = require('./../src/markdown');


describe('src/markdown.js', function() {

  describe('#link()', function() {
    it('should return a link.', function() {
      assert.equal( '[baz](http://www.foo.bar/)', markdown.link('http://www.foo.bar/', 'baz') );
    })
  })

  describe('#image()', function() {
    it('should return a image.', function() {
      assert.equal( '![baz](http://www.foo.bar/)', markdown.image('http://www.foo.bar/', 'baz') );
    })
  })

  describe('#header1()', function() {
    it('should return a header1.', function() {
      assert.equal( '# foo', markdown.header1('foo') );
    })
  })

  describe('#header2()', function() {
    it('should return a header2.', function() {
      assert.equal( '## foo', markdown.header2('foo') );
    })
  })

  describe('#header3()', function() {
    it('should return a header3.', function() {
      assert.equal( '### foo', markdown.header3('foo') );
    })
  })

  describe('#header4()', function() {
    it('should return a header4.', function() {
      assert.equal( '#### foo', markdown.header4('foo') );
    })
  })

  describe('#header5()', function() {
    it('should return a header5.', function() {
      assert.equal( '##### foo', markdown.header5('foo') );
    })
  })

  describe('#header6()', function() {
    it('should return a header6.', function() {
      assert.equal( '###### foo', markdown.header6('foo') );
    })
  })

  describe('#blockquotes()', function() {
    it('should return a blockquotes.', function() {
      assert.equal( '> foo', markdown.blockquotes('foo') );
    })
  })

  describe('#inlineCode()', function() {
    it('should return a inlineCode.', function() {
      assert.equal( '`foo`', markdown.inlineCode('foo') );
    })
  })

  describe('#blockCode()', function() {
    it('should return a blockCode.', function() {
      assert.equal( '    foo', markdown.blockCode('foo') );
    })
  })

  describe('#rule()', function() {
    it('should return a rule.', function() {
      assert.equal( '---', markdown.rule() );
    })
  })

  describe('#list()', function() {
    it('should return a list.', function() {
      assert.equal( '- foo\n- bar\n- baz\n', markdown.list(['foo', 'bar', 'baz']) );
    })
  })

  describe('#listOrdered()', function() {
    it('should return a listOrdered.', function() {
      assert.equal( '1. foo\n2. bar\n3. baz\n', markdown.listOrdered(['foo', 'bar', 'baz']) );
    })
  })

  describe('#linkList()', function() {
    it('should return a list with links.', function() {
      var arr = [{url: 'http://foo.baz', title: 'foo'},
                 {url: 'http://bar.baz', title: 'bar'}];
      assert.equal( '- [foo](http://foo.baz)\n- [bar](http://bar.baz)\n', markdown.linkList(arr) );
    })
  })

})
