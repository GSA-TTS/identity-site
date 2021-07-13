module Jekyll
  module TranslationsFilter
    # sorts the given array by their translated value
    def sort_translated(keys, prefix = '')
      keys.sort_by do |key|
        translate(key, prefix)
      end
    end

    def translate(key, prefix)
      locale = @context.registers[:page]['lang']
      data = @context.registers[:site].data

      data.dig(locale, *prefix.split('.'), key) ||
        data.dig('en', *prefix.split('.'), key) ||
        (raise "missing translation key #{prefix}.#{key}, locales=#{[locale, 'en'].uniq.join(',')}")
    end
  end
end

Liquid::Template.register_filter(Jekyll::TranslationsFilter)
