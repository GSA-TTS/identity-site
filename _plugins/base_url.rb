module Kramdown
  module Parser
    class Kramdown
      prepend(Module.new do
        def add_link(el, *args)
          el.attr['href'] = ENV['BASEURL'] + el.attr['href'] if ENV['BASEURL'] && el.attr['href']&.start_with?('/')
          super(el, *args)
        end
      end)
    end
  end
end