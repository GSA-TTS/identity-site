module Jekyll
  module LocaleUrlFilter
    def locale_url(path = '', locale = nil)
      site_base_url = @context.registers[:site].baseurl
      locale ||= @context.registers[:page]['lang']
      default_locale = @context.registers[:site].config["default_locale"]
      if locale == default_locale
        return site_base_url.to_s + path
      end
      collection = @context.registers[:page]['collection']
      permalink = @context.registers[:site].collections[collection].metadata['permalink']
      site_base_url.to_s + Jekyll::URL.new(
        template: permalink,
        placeholders: { collection: locale, path: path },
      ).to_s
    end

    def delocalize_url(path, locale = nil)
      locale ||= @context.registers[:page]['lang']
      path.gsub(%r{^/#{locale}/}, '/')
    end
  end
end

Liquid::Template.register_filter(Jekyll::LocaleUrlFilter)
