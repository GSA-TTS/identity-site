require 'spec_helper'

RSpec.describe 'all pages' do
  Dir["#{SITE_ROOT}/**/*.html"].sort.each do |path|
    is_redirect_page = File.read(path).include?('<meta http-equiv="refresh"')
    next if is_redirect_page

    page = path.split(SITE_ROOT.to_s).last

    describe page do
      let(:doc) { Nokogiri::HTML(file_at(page)) }

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

      xit 'links to valid internal pages' do
        expect(doc).to link_to_valid_internal_pages
      end

      it 'has valid links' do
        expect(doc).to link_to_valid_urls
      end
    end
  end
end
