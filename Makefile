###
# subtool Makefile
###

include node_modules/common-makefiles/node.make

HINT_DIR = src/ test/ bin/
PLATO_FILES = src/

test: mocha

.PHONY: test
