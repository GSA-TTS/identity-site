# frozen_string_literal: true

## This plugin copies the fonts and the images from the identity style guide
## to the appropriate path on the built site
##
## The CSS and JS is already handled by the build-js and build-css npm scripts

require 'fileutils'

def copy_assets(origin, destination)
  origin_glob = File.join(origin, '**/*')
  origin_files = Dir.glob(origin_glob).reject { |f| File.directory?(f) }

  origin_files.each do |origin_file|
    filename = origin_file.gsub(origin, '').gsub(%r{^/}, '')
    dest_filename = File.join(destination, filename)
    next if File.exist?(dest_filename)

    FileUtils.mkdir_p(File.dirname(dest_filename))
    FileUtils.cp(origin_file, dest_filename)
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  destination_fonts_dir = File.join(site.config['destination'], 'assets/fonts')
  destination_img_dir = File.join(site.config['destination'], 'assets/img')

  uswds_assets_root = File.join(Dir.pwd, 'node_modules/identity-style-guide/dist/assets/')
  origin_fonts_dir = File.join(uswds_assets_root, 'fonts')
  origin_img_dir = File.join(uswds_assets_root, 'img')

  copy_assets(origin_fonts_dir, destination_fonts_dir)
  copy_assets(origin_img_dir, destination_img_dir)
end
