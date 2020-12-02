require 'spec_helper'

RSpec.describe 'index.md' do
  let(:doc) { Nokogiri::HTML(file_at('/')) }

  it 'escapes html correctly' do
    expect(doc).to properly_escape_html
  end

  xit 'links to valid internal pages' do
    expect(doc).to link_to_valid_internal_pages
  end

  it 'has valid links' do
    expect(doc).to link_to_valid_urls
  end

  xit 'contains specific copy that NewRelic checks for' do
    expect(doc.text).to include('secure access to government services')
  end

  it 'has a title' do
    expect(doc).to be_uniquely_titled
  end
end
