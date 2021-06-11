module Jekyll
  module LocaleUrlFilter
    LOCALE_STRING_CONSTANT = '__LOCALE_BASE_URL__'.freeze

    def locale_url(path = '')
      site_base_url = @context.registers[:site].baseurl
      locale_prefix = @context.registers[:page]['base_path']
      site_base_url.to_s + locale_prefix.to_s + path
    end

    def replace_locale_base_url(input)
      input.gsub LOCALE_STRING_CONSTANT, locale_url
    end
  end
end

Liquid::Template.register_filter(Jekyll::LocaleUrlFilter)
