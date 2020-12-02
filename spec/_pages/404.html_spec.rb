require 'spec_helper'

RSpec.describe '/404' do
  let(:doc) { Nokogiri::HTML(file_at('/404.html')) }

  it 'includes Google Analytics' do
    expect(doc.to_s).to include('https://www.google-analytics.com/analytics.js')
  end

  it 'includes DAP' do
    expect(doc.to_s).to include('https://dap.digitalgov.gov')
  end

  it 'has a title' do
    expect(doc).to be_uniquely_titled
  end
end
