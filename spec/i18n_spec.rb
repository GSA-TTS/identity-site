require 'spec_helper'

RSpec.describe 'i18n' do
  it 'does not have missing translations' do
    missing_translations = MissingTranslationFinder.new.call

    expect(missing_translations).to_not be_empty
  end
end
