## This plugin copies the fonts and the images from the identity style guide
## to the appropriate path on the built site
##
## The CSS and JS is already handled by Jekyll and the build:js npm script

require 'fileutils'
require 'uri'
require 'net/http'
require 'json'
require 'open-uri'

DOMAIN = Jekyll.configuration({})['idp_base_url']
LANGUAGES = Jekyll.configuration({})['languages']
MANIFEST_FILE = "/packs/manifest.json"

def download_files(origin_uris, destination)
  origin_uris.each do |uri|
    stripped_name = uri.split('.').last(2).join('.')
    FileUtils.mkdir_p(File.dirname("#{destination}/#{stripped_name}"))
    download = URI.open("#{DOMAIN}#{uri}")
    IO.copy_stream(download, "#{destination}/#{stripped_name}")
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  next if ([DOMAIN, LANGUAGES, MANIFEST_FILE].any?(&:nil?) | site.config['skip_idp_translations'])
  begin
    destination_translations_dir = File.join(site.config['destination'], 'assets/idp_translations')
    origin_manifest_uri = URI("#{DOMAIN}#{MANIFEST_FILE}")
    manifest_response_body = Net::HTTP.get_response(origin_manifest_uri).body
    manifest_hash = JSON.parse(manifest_response_body)
    document_capture_assets = manifest_hash.dig('entrypoints', 'document-capture', 'assets', 'js')

    raise 'Language files not found in IDP manifest' unless document_capture_assets

    # only download the translation assets
    document_capture_translations = document_capture_assets
      .grep(/#{LANGUAGES.map {|str| "#{str}.js" }.join('|')}/)
  
    download_files(document_capture_translations, destination_translations_dir)
  rescue => exception
    puts exception
  end
end
