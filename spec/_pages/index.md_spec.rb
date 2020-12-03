require 'spec_helper'

RSpec.describe 'index.md' do
  let(:doc) { Nokogiri::HTML(file_at('/')) }

  xit 'contains specific copy that NewRelic checks for' do
    expect(doc.text).to include('secure access to government services')
  end
end
