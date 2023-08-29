## This plugin copies the fonts and the images from the identity style guide
## to the appropriate path on the built site
##
## The CSS and JS is already handled by Jekyll and the build:js npm script

require 'fileutils'
require 'uri'
require 'net/http'
require 'json'
require 'open-uri'

DOMAIN = 'https://secure.login.gov'

def copy_translations(origin_uris, destination)
  origin_uris.each do |uri|
    filename = uri.gsub(DOMAIN, '').gsub(%r{^/}, '')
    dest_filename = File.join(destination, filename)
    next if File.exist?(dest_filename)

    download = URI.open("#{DOMAIN}#{uri}")
    IO.copy_stream(download, "#{destination}#{uri}")
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  destination_translations_dir = File.join(site.config['destination'], 'assets/translations')
  origin_manifest_uri = URI("#{DOMAIN}/packs/manifest.json")
  manifest_response_body = Net::HTTP.get_response(origin_manifest_uri).body
  manifest_hash = JSON.parse(manifest_response_body)
  document_capture_translations = manifest_hash["entrypoints"]["document-capture"]["assets"]["js"]

  copy_translations(document_capture_translations, destination_translations_dir)
end
