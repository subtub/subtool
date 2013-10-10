###
# Test Task
###

test:
	@rm -rf testing
	@mkdir testing
	@node node_modules/.bin/mocha --reporter spec

.PHONY: test


###
# Hint Task
###

hint:
	@node node_modules/.bin/jshint src/ test/ bin/

.PHONY: hint

###
# Report Task
###

report:
	@node node_modules/.bin/plato -t "subtool" -r --dir report src/

.PHONY: report

