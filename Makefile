###
# subtool Makefile
###

COMMON_MAKEFILES_PATH=node_modules/CommonMakefiles
include $(COMMON_MAKEFILES_PATH)/index.make
include $(COMMON_MAKEFILES_PATH)/node/all.make

HINT_DIR = src/ test/ bin/
PLATO_FILES = src/
