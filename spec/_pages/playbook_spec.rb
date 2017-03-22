require 'spec_helper'

RSpec.describe '/playbook' do
  describe '/' do
    let(:doc) { Nokogiri::HTML(file_at('/playbook')) }

    it 'opens external links in a new window' do
      expect(doc).to open_external_links_in_new_window
    end
  end

  describe '/about' do
    let(:doc) { Nokogiri::HTML(file_at('/playbook/about')) }

    it 'opens external links in a new window' do
      expect(doc).to open_external_links_in_new_window
    end
  end

  describe '/principles' do
    let(:doc) { Nokogiri::HTML(file_at('/playbook/principles')) }

    it 'opens external links in a new window' do
      expect(doc).to open_external_links_in_new_window
    end
  end
end
