run:
	make -f Makefile.server -j4 run

clean:
	rm -rf _site

test: build
	bundle exec rspec spec

build:
	bundle exec jekyll build
