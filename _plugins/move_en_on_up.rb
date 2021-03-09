## This plugin moves the content of the /en/ directory, created by netlifycms, to the root directory.
##

require 'fileutils'

def move_en_content(origin, destination)
  if File.exist?(origin)
    FileUtils.cp_r(origin, destination)
    puts "moving files from #{origin} to root"
    FileUtils.rm_rf(origin)
  else
    puts "can not find source file to move"
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  origin = File.join(site.config['destination'], 'en/.')
  destination = site.config['destination']
  move_en_content(origin, destination)
end
