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

  describe 'language_map.yml' do
    it 'contains language shortcodes and names' do
      path = '_data/language_map.yml'
      language_map = YAML.load_file(path)

      expect(language_map['languages']['en']).to eq('English')
      expect(language_map['languages']['es']).to eq('Spanish')
      expect(language_map['languages']['fr']).to eq('French')
      expect(language_map['languages']['zh']).to eq('Chinese')
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
