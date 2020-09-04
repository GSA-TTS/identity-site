module Jekyll::CustomFilter
  # Each method of the module creates a custom Jekyll filter
  def lang_path(input)
    return "" if input == "en"
    return "/#{input}"
  end
end

Liquid::Template.register_filter(Jekyll::CustomFilter)
