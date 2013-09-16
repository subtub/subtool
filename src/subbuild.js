/**
 * subtool build
 *
 * Buildscript for sourcecode generator.
 */

var script = require('./../templates/subbuild.js');



var Subbuild = {
	// speicher
	tmp: {node_js: '', processing: ''},

  language: 'node',

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

  build: function(config) {
  	if (config.src !== undefined) {
  		
  		if (config.out !== undefined) {
  			console.log();
  			console.log('start compiler...');
  			console.log();

  			fs.fs.writeFileSync(config.out, this.tmp.node_js, 'utf-8');
  			console.log();
  			console.log('compiling finished');
  			console.log();
  		};
  	};
  	console.log(config);
  }

};

// Subbuild.prototype.log = function(message) {
//   console.log(message);
// }



script(Subbuild);

console.log('\n-doc-object-output-------------------------');
console.log(Subbuild.tmp);
console.log('-------------------------------------------\n');
