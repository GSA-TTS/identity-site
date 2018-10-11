# The jekyll-multiple-languages-plugin does not allow the baseurl to be nil
# because it tries to deconstruct it and add the locale to it for each page.
#
# Federalist will override the config at build time and set the baseurl to nil
# if the site is being built for a live url. This counters that by setting it
# to an empty string if that's been done.
Jekyll::Hooks.register :site, :after_init do |site|
  site.config['baseurl'] ||= ''
end
