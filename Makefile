run:
	make -f Makefile.server -j4 run

clean:
	rm -rf _site && npm run clean

node_modules/.touch: package.json
	npm install
	touch node_modules/.touch

setup: node_modules/.touch
	bundle check || bundle install

test: build
	bundle exec rspec spec

build:
	npm run build && bundle exec jekyll build

.PHONY: setup
