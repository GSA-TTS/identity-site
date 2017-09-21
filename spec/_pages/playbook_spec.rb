require 'spec_helper'

RSpec.describe '/playbook' do
  describe '/' do
    let(:doc) { Nokogiri::HTML(file_at('/playbook')) }

    it 'opens external links in a new window' do
      expect(doc).to open_external_links_in_new_window
    end

    it 'escapes html correctly' do
      expect(doc).to properly_escape_html
    end

    it 'links to valid headings' do
      expect(doc).to link_to_valid_headers
    end

    it 'links to valid internal pages' do
      expect(doc).to link_to_valid_internal_pages
    end

    it 'has valid links' do
      expect(doc).to link_to_valid_urls
    end
  end

  describe '/implementation' do
    let(:doc) { Nokogiri::HTML(file_at('/playbook/implementation')) }

    it 'opens external links in a new window' do
      expect(doc).to open_external_links_in_new_window
    end

    it 'escapes html correctly' do
      expect(doc).to properly_escape_html
    end

    it 'links to valid headings' do
      expect(doc).to link_to_valid_headers
    end

    it 'links to valid internal pages' do
      expect(doc).to link_to_valid_internal_pages
    end

    it 'has valid links' do
      expect(doc).to link_to_valid_urls
    end
  end

  describe '/principles' do
    let(:doc) { Nokogiri::HTML(file_at('/playbook/principles')) }

    it 'opens external links in a new window' do
      expect(doc).to open_external_links_in_new_window
    end

    it 'escapes html correctly' do
      expect(doc).to properly_escape_html
    end

    it 'links to valid headings' do
      expect(doc).to link_to_valid_headers
    end

    it 'links to valid internal pages' do
      expect(doc).to link_to_valid_internal_pages
    end

    it 'has valid links' do
      expect(doc).to link_to_valid_urls
    end
  end
end
