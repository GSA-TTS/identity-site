run:
	make -f Makefile.server -j4 run

clean:
	rm -rf _site

setup:
	bundle check || bundle install
	npm install

test: build
	bundle exec rspec spec

build:
	npm run build-css
	npm run build-js
	bundle exec jekyll build
