require 'fileutils'
require 'uri'
require 'net/http'
require 'json'
require 'open-uri'

module IDP
  class Translations
    def initialize(languages:, manifest_file:, domain:, destination:)
      raise 'Missing configuration values' if [domain, languages, manifest_file].any?(&:nil?)

      @languages = languages
      @manifest_file = manifest_file
      @domain = domain
      @destination = destination
    end

    def update!
      destination_translations_dir = File.join(@destination, 'assets/idp_translations')
      origin_manifest_uri = URI("#{@domain}#{@manifest_file}")
      manifest_response_body = get_response_body(origin_manifest_uri)
      manifest_hash = JSON.parse(manifest_response_body)
      document_capture_assets = manifest_hash.dig('entrypoints', 'document-capture', 'assets', 'js')
  
      raise 'Language files not found in IDP manifest' unless document_capture_assets
  
      # only download the translation assets
      document_capture_translations = document_capture_assets
        .grep(/#{@languages.map {|str| "#{str}.js" }.join('|')}/)

      download_files(document_capture_translations, destination_translations_dir)
    end

    private

    def download_files(origin_uris, destination)
      origin_uris.each do |uri|
        stripped_name = uri.split('.').last(2).join('.')
        make_directory("#{destination}/#{stripped_name}")
        download = uri_open("#{@domain}#{uri}")
        copy_stream(download, "#{destination}/#{stripped_name}")
      end
    end

    def get_response_body(*args)
      Net::HTTP.get_response(*args).body
    end

    def make_directory(*args)
      File.dirname(FileUtils.mkdir_p(*args))
    end

    def copy_stream(*args)
      IO.copy_stream(*args)
    end

    def uri_open(uri)
      URI(uri).open
    end
  end
end
