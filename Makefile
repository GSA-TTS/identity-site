run:
	make -f Makefile.server -j4 run

clean:
	rm -rf _site

setup:
	bundle check || bundle install
	npm install

lint-js:
	npm run lint

lint-assets:
	npm run optimize-assets > /dev/null
	git status assets/img -s || (echo "Error: Optimize SVG images using 'npm run optimize-assets'"; exit 1)

lint: lint-js lint-assets

test: build
	bundle exec rspec spec

test-urls: build
	bundle exec ./scripts/sitemap-check --directory _site --old-urls-file OLD_URLS.yml

build:
	npm run build-js
	bundle exec jekyll build
