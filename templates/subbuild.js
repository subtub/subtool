module.exports = function(doc) {
  console.log('\n-doc-object-input--------------------------');
  console.log(doc);
  console.log('-------------------------------------------\n');


  doc.print(['some information about the subtool:',
             'update', 'init', 'cheats', 'template', 'build']);
  

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
    language: 'node_js',
    version: '0.10',
    task: {src: '../test/'}
  })

 //  data.config: {
 //    // Different types of Content:
 //    // Readme, Code, License, 
 //    content: 'code'
 //  },

  // data.header({
  //   author: 'subtub',
  //   date: '2013';
  //   license: 'mit'})
  
  return doc;
}
