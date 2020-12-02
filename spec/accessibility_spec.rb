require 'spec_helper'

RSpec.describe 'Accessibility', type: :feature, js: true do
  it 'home page is accessible' do
    visit '/'
    expect(page).to be_accessible
  end
end
