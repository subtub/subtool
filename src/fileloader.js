fs = require('fs')

var IMPORT_TEMPLATE_START = '{{include:';
var IMPORT_TEMPLATE_END = '}}';	

/**
 * Loads the file and searches for moustache-like 
 * include tags - {{include:somefile.txt}}. 
 * This will go on until every include in processed. 
 * Does not handle normal moustache-like template tags
 */
var loadFileWithIncludes = function(filename){
	var data = fs.readFileSync(filename, 'utf8');
  	if(data){
		while((i = data.indexOf(IMPORT_TEMPLATE_START)) != -1){
			var j = data.indexOf(IMPORT_TEMPLATE_END, i + IMPORT_TEMPLATE_START.length); 
			var importFileName = data.substring(i + IMPORT_TEMPLATE_START.length, j);
			var newData = fs.readFileSync(importFileName, 'utf8');
			if(newData){
				var before = data.substring(0, i-1);
				var after = data.substring(j + IMPORT_TEMPLATE_END.length);
				data = before + newData + after;
			}
		}
	}
	return data;
};

