module Jekyll
  module CustomFilters
    def markdownify_with_classes(input, custom_classes = '')
      options = { custom_classes: custom_classes.split }
      Kramdown::Document.new(input, options).to_html
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomFilters)
