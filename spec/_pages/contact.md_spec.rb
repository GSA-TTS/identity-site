require 'spec_helper'

RSpec.describe 'contact.md' do
  let(:doc) { Nokogiri::HTML(file_at('/contact')) }

  it 'escapes html correctly' do
    expect(doc).to properly_escape_html
  end

  xit 'links to valid internal pages' do
    expect(doc).to link_to_valid_internal_pages
  end

  it 'has valid links' do
    expect(doc).to link_to_valid_urls
  end
end
