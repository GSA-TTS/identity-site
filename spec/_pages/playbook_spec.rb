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
  end

  describe '/implementation' do
    let(:doc) { Nokogiri::HTML(file_at('/playbook/implementation')) }

    it 'opens external links in a new window' do
      expect(doc).to open_external_links_in_new_window
    end

    it 'escapes html correctly' do
      expect(doc).to properly_escape_html
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
  end
end
