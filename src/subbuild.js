/**
 * subtool build
 *
 * Buildscript for sourcecode generator.
 */


/**
 * Module dependencies.
 */
var fs = require('fs');

/**
 *
 */
var Subbuild = {
	// Storage
	tmp: {node_js: '', processing: ''},

  /**
   * write text to file.
   * 
   */
  print: function(msg) {
  	//console.log(msg);
  	this.tmp.node_js += '/**\n';
  	for (var i=0; i<msg.length; i++) {
  		this.tmp.node_js += ' * '+msg[i]+'\n';
  	};
  	this.tmp.node_js += ' * '+msg+'\n';
  	this.tmp.node_js += ' */\n';
  },

  log: function(msg) {
  	console.log(msg);
  },
  
  funct: function(config) {
  	// node code
  	this.tmp.node_js += '/**\n';
  	this.tmp.node_js += ' * '+config.name+'\n';
  	this.tmp.node_js += ' * \n'
  	this.tmp.node_js += ' * '+config.description+'\n'
  	this.tmp.node_js += ' */\n';
  	this.tmp.node_js += 'function '+config.name+'('+config.params[0].name+') {\n';
  	this.tmp.node_js += config.content;
  	this.tmp.node_js += '\n}\n';
  	// processing code
  	this.tmp.processing += '/**\n';
  	this.tmp.processing += ' * '+config.name+'\n';
  	this.tmp.processing += ' * \n';
  	this.tmp.processing += ' * '+config.description+'\n';
  	this.tmp.processing += ' */\n';
  	this.tmp.processing += 'void '+config.name+'('+config.params[0].type+' '+config.params[0].name+') {\n';
  	this.tmp.processing += config.content;
  	this.tmp.processing += '\n}\n';
  },

  /**
   * The compiler.
   * We can comile to different languages like java, processing, node, javascript and also static files like Markdown docs or use different languages 
   */
  build: function(config) {
  	//console.log(config);

  	if (config.src !== undefined) {
  		
  		if (config.out !== undefined) {
  			console.log();
  			console.log('  start compiler...');
  			console.log('  source: '+config.src);
  			console.log('  output: '+config.out);

  			fs.writeFile(process.env.PWD+config.out+'.js', this.tmp.node_js, function(err) {
			    if(err) {
			        console.log(err);
			    } else {
			        console.log("  Node.JS saved");
			    };
			  });
			  fs.writeFile(process.env.PWD+config.out+'.pde', this.tmp.processing, function(err) {
			    if(err) {
			        console.log(err);
			    } else {
			        console.log("  Processing saved");
			    };
			  });

  		};
  	};
  }

};

module.exports = Subbuild;
