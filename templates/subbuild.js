module.exports = function(doc) {
  
  doc.print(['some information about the subtool:\n',
             'update',
             'init',
             'cheats',
             'template',
             'build']);
  

  doc.funct({
    name: 'subtool',
    description: 'This is the .',
    params: [{name: 'bar', type: 'string'},
             {name: 'baz', type: 'object'}],
    content: 'console.log("hello world");'
  });

  doc.funct({
    name: 'Foo',
    description: 'This is a sample function.',
    params: [{name: 'bar', type: 'string'},
             {name: 'baz', type: 'object'}],
    content: 'console.log("hello world");'
  });


  doc.build({
    src: '../test/files/.sub.file',
    out: '/TestSubbuild'
  });
  
  return doc;
}
