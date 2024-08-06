# frozen_string_literal: true

require 'spec_helper'

RSpec.describe 'config' do
  describe '_config.yml' do
    it 'has search_affiliate keys for all supported languages' do
      SITE_CONFIG['languages'].each do |locale|
        expect(SITE_CONFIG['search_affiliate'][locale]).to_not be_nil
      end
    end

    it 'has content keys for all supported languages' do
      SITE_CONFIG['languages'].each do |locale|
        expect(SITE_CONFIG['defaults'].count { |x| x.dig('values', 'lang') == locale }).to eq(1)
      end
    end
  end
end
