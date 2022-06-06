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
	npm run viewbox || (echo "Make sure all SVG images have a viewBox attribute"; exit 1)
	git diff --quiet assets/img || (echo "Error: Optimize SVG images using 'npm run optimize-assets'"; exit 1)

lint: lint-js lint-assets validate-lockfiles

test: build
	bundle exec rspec spec

test-urls: build
	bundle exec ./scripts/sitemap-check --directory _site --old-urls-file OLD_URLS.yml

htmlproofer:
	bundle exec scripts/htmlproofer

build:
	npm run build-js
	bundle exec jekyll build

nu:
	grep --files-without-match --recursive "Click here if you are not redirected" -- _site | \
		grep --invert-match admin/index.html | \
		xargs ./scripts/vnu --skip-non-html --errors-only 2>&1

validate-gemfile-lock: Gemfile Gemfile.lock
	@echo "Validating Gemfile.lock..."
	@bundle check
	@git diff-index --quiet HEAD Gemfile.lock || (echo "Error: There are uncommitted changes after running 'bundle install'"; exit 1)

validate-package-lock: package.json package-lock.json
	@echo "Validating package-lock.json..."
	@[[ -z $$SKIP_INSTALL ]] && npm install --ignore-scripts || exit 0
	@(! git diff --name-only | grep package-lock.json) || (echo "Error: There are uncommitted changes after running 'npm install'"; exit 1)

validate-lockfiles: validate-gemfile-lock validate-package-lock
