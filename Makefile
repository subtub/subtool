test:
	@mkdir testing
	@node node_modules/.bin/mocha --reporter spec
	@rm -rf testing

.PHONY: test
