require 'spec_helper'

RSpec.describe 'layout' do
  let(:page) { Nokogiri::HTML(file_at('/')) }

  it 'has correctly configured system-status meta tag' do
    meta = page.at_css('meta[name="system-status"]')
    expect(meta[:content]).to eq('Login.gov site up and running')
  end
end
