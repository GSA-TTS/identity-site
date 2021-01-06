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
	git diff --quiet assets/img || (echo "Error: Optimize SVG images using 'npm run optimize-assets'"; exit 1)

lint: lint-js lint-assets

test: build
	bundle exec rspec spec

test-urls: build
	bundle exec ./scripts/sitemap-check --directory _site --old-urls-file OLD_URLS.yml

htmlproofer: htmlproofer_internal htmlproofer_external

htmlproofer_internal:
	bundle exec htmlproofer --disable-external --allow-hash-href --empty_alt_ignore `pwd`/_site

htmlproofer_external:
	bundle exec scripts/htmlproofer-external `pwd`/_site

build:
	npm run build-js
	bundle exec jekyll build
