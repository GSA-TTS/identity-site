# frozen_string_literal: true

require 'yaml'
require 'spec_helper'

RSpec.describe 'data' do
  it 'has the same keys across all locales' do
    keys = Dir['_data/*/settings.yml'].map { |path| [path, hash_keys(YAML.load_file(path))] }

    first_file_keys, *other_file_keys = keys
    first_file, first_keys = first_file_keys
    aggregate_failures do
      other_file_keys.each do |other_file, other_keys|
        expect(first_keys).to match_array(other_keys),
                              "Expected `#{other_file}` to contain same keys as `#{first_file}`\n" \
                              "Difference: #{first_keys - other_keys | other_keys - first_keys}"
      end
    end
  end

  it 'has directories for each supported language' do
    SITE_CONFIG['languages'].each do |locale|
      expect(Dir.exist?("_data/#{locale}")).to eq(true), "#{locale} _data folder does not exist"
    end
  end

  describe 'language_map.yml' do
    it 'contains language shortcodes and names' do
      expect(LANGUAGE_MAP_CONFIG['languages']['en']).to eq('English')
      expect(LANGUAGE_MAP_CONFIG['languages']['es']).to eq('Spanish')
      expect(LANGUAGE_MAP_CONFIG['languages']['fr']).to eq('French')
      expect(LANGUAGE_MAP_CONFIG['languages']['zh']).to eq('Simplified Chinese')
    end

    it 'has language map keys for all supported languages' do
      SITE_CONFIG['languages'].each do |locale|
        expect(LANGUAGE_MAP_CONFIG['languages'][locale]).to_not be_nil
      end
    end
  end

  def hash_keys(hash, parent_keys: [], all_keys: [])
    hash.each do |key, value|
      if value.is_a?(Hash)
        hash_keys(value, parent_keys: parent_keys + [key], all_keys:)
      else
        all_keys << [*parent_keys, key].join('.')
      end
    end

    all_keys
  end
end
