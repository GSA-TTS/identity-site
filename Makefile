run:
	make -f Makefile.server -j4 run

clean:
	rm -rf _site

setup:
	bundle check || bundle install
	yarn install

test: build
	bundle exec rspec spec

test-urls: build
	bundle exec ./scripts/sitemap-check --directory _site --old-urls-file OLD_URLS.yml

build:
	yarn run build-css
	yarn run build-js
	bundle exec jekyll build
