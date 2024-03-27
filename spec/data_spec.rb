require 'yaml'
require 'spec_helper'
require 'pry'

RSpec.describe 'data' do
  it 'has the same keys across all locales' do
    keys = Dir['_data/*/settings.yml'].map { |path| hash_keys(YAML.load_file(path)) }

    expect(keys).not_to be_empty
    keys.combination(2).each do |first, second|
      expect(first).to match_array(second)
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
