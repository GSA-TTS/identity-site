require 'spec_helper'

def admin_page?(path)
  path.start_with?('admin/')
end

def redirect_page?(path)
  File.read(file_at(path)).include?('<meta http-equiv="refresh"')
end

def external_link?(uri)
  uri.scheme && !/^(www\.)?#{SITE_URI.host}$/.match(uri.host)
end

def get_locale(path)
  match = %r{^(fr|es)/}.match(path)
  match[1] if match
end

RSpec.describe 'all pages' do
  files = Dir.glob('**/*.html', base: SITE_ROOT)
  files.reject! { |path| admin_page?(path) || redirect_page?(path) }
  files.sort.each do |path|
    describe path do
      let(:doc) { Nokogiri::HTML(file_at(path)) }

      it 'includes analytics tags' do
        expect(doc.to_s).to include('https://www.google-analytics.com/analytics.js')
        expect(doc.to_s).to include('https://dap.digitalgov.gov')
      end

      it 'has a title' do
        expect(doc).to be_uniquely_titled
      end

      it 'escapes html correctly' do
        expect(doc).to properly_escape_html
      end

      it 'links consistently' do
        aggregate_failures do
          doc.css('a').each do |a|
            next if a[:href].start_with?('#')
            uri = URI(a[:href])
            next if external_link?(uri)
            expect(uri).to be_https_scheme, "expected https, got:\n\n#{a.to_html}"
          end
        end
      end

      xit 'links to valid headings' do
        expect(doc).to link_to_valid_headers
      end

      locale = get_locale(path)
      context 'localization', if: locale do
        it 'maintains locale in links' do
          expect(doc).to link_to_locale_pages(locale)
        end
      end
    end
  end
end
