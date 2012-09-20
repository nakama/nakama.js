TEST_PHOTO = test/Photo/*.js

test: test-photo

test-photo:
	@NODE_ENV=test ./node_modules/.bin/mocha \
			--require should \
			--reporter list \
			--timeout 5000 \
			--slow 20 \
			--growl \
			$(TEST_PHOTO)

.PHONY: test test-photo