require 'spec_helper'

RSpec.describe 'policy.md' do
  let(:doc) { Nokogiri::HTML(file_at('/policy')) }

  it 'has a table of contents with valid links' do
    expect(doc).to include_a_valid_table_of_contents
  end

  it 'opens external links in a new window' do
    expect(doc).to open_external_links_in_new_window
  end

  it 'escapes html correctly' do
    expect(doc).to properly_escape_html
  end
end
