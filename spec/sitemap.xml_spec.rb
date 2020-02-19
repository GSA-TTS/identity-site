require 'spec_helper'

RSpec.describe 'sitemap.xml' do
  let(:doc) { Nokogiri::XML(file_at('/sitemap.xml')) }

  it 'is valid XML' do
    expect(doc).to be
  end

  it 'it points to valid pages' do
    doc.remove_namespaces!

    expect(doc.xpath('//urlset/url/loc')).to_not be_empty

    doc.xpath('//urlset/url/loc').each do |loc|
      path = URI(loc.text).path
      expect(file_at(path)).to be
    end
  end
end
