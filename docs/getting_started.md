## Getting Started

If you want to generate ```README.md``` files with the subtool, it need an ```.subfile``` to configure the generator.

A ```.subfile``` looks like:  

    // subtool configuration file
    // version 0.0.1
    module.exports = {
    
      //Settings for the README.md file.
      readme: {
        content: '/docs',
        toc: true,
        order: [
          {title: 'Foo', file: '/foo.md'},
          {title: 'Bar', file: '/bar.md'},
          {title: 'Baz', file: '/baz.md'}
        ]
      },
      
      // License settings.
      license: 'mit',
      
    }

