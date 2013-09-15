test:
	@rm -rf testing
	@mkdir testing
	@node node_modules/.bin/mocha --reporter spec

.PHONY: test
