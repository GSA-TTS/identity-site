## This plugin copies the fonts and the images from the identity style guide
## to the appropriate path on the built site
##
## The CSS and JS is already handled by Jekyll and the build:js npm script

require 'fileutils'

DESIGN_SYSTEM_ASSETS_TO_COPY = %w[
  fonts
  img
  js/init.js
]

DESIGN_SYSTEM_ASSETS_DIRECTORY = 'node_modules/@18f/identity-design-system/dist/assets'

Jekyll::Hooks.register :site, :post_write do |site|
  build_assets_directory = File.join(site.config['destination'], 'assets')
  FileUtils.mkdir_p(build_assets_directory)

  DESIGN_SYSTEM_ASSETS_TO_COPY.each do |dir|
    FileUtils.copy_entry(
      File.join(DESIGN_SYSTEM_ASSETS_DIRECTORY, dir),
      File.join(build_assets_directory, dir)
    )
  end
end
