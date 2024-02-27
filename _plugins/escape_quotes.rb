module Jekyll
  module EscapeQuotes
    def escape_quotes(input = '')
      input.gsub(/'/, "\\\\'")
    end
  end
end

Liquid::Template.register_filter(Jekyll::EscapeQuotes)
