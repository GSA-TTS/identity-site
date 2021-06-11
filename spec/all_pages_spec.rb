require 'spec_helper'

def admin_page?(path)
  path.start_with?('admin/')
end

def redirect_page?(path)
  File.read(file_at(path)).include?('<meta http-equiv="refresh"')
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
