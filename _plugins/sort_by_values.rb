module Jekyll
  module SortByValuesFilter
    # @param [Hash] hash
    # @return [Array<Hash>] entry-like hashes with 'key' and 'value'
    def sort_by_values(hash)
      hash.
        sort_by { |_key, value| value.downcase }.
        map { |key, value| { 'key' => key, 'value' => value } }
    end
  end
end

Liquid::Template.register_filter(Jekyll::SortByValuesFilter)
