## This plugin copies the fonts and the images from the identity style guide
## to the appropriate path on the built site
##
## The CSS and JS is already handled by Jekyll and the build:js npm script

require 'fileutils'
require 'uri'
require 'net/http'
require 'json'
require 'open-uri'

def download_files(origin_uris, destination, idp_domain)
  origin_uris.each do |uri|
    stripped_name = uri.split('.').last(2).join('.')
    FileUtils.mkdir_p(File.dirname("#{destination}/#{stripped_name}"))
    download = URI.open("#{idp_domain}#{uri}")
    IO.copy_stream(download, "#{destination}/#{stripped_name}")
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  idp_domain = site.config['idp_base_url']
  languages = site.config['languages']
  manifest_file =  site.config['idp_manifest_path']
  skip_idp_translations = site.config['skip_idp_translations']

  next if ([idp_domain, languages, manifest_file].any?(&:nil?) | skip_idp_translations)
  begin
    destination_translations_dir = File.join(site.config['destination'], 'assets/idp_translations')
    origin_manifest_uri = URI("#{idp_domain}#{manifest_file}")
    manifest_response_body = Net::HTTP.get_response(origin_manifest_uri).body
    manifest_hash = JSON.parse(manifest_response_body)
    document_capture_assets = manifest_hash.dig('entrypoints', 'document-capture', 'assets', 'js')

    raise 'Language files not found in IDP manifest' unless document_capture_assets

    # only download the translation assets
    document_capture_translations = document_capture_assets
      .grep(/#{languages.map {|str| "#{str}.js" }.join('|')}/)
  
    download_files(document_capture_translations, destination_translations_dir, idp_domain)
  rescue => exception
    puts exception
  end
end
