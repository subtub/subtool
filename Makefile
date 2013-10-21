###
# subtool Makefile
###

COMMON_MAKEFILES_PATH=node_modules/CommonMakefiles
include $(COMMON_MAKEFILES_PATH)/index.make
include $(COMMON_MAKEFILES_PATH)/node/all.make

HINT_DIR = src/ test/ bin/

###
# Test Task
###

test:
	@rm -rf testing
	@mkdir testing
	@node node_modules/.bin/mocha --reporter spec

.PHONY: test


###
# Report Task
###

report:
	@node node_modules/.bin/plato -t "subtool" -r --dir report src/

.PHONY: report

