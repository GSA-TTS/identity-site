module Kramdown
  module Parser
    class Kramdown
      prepend(Module.new do
        def add_link(el, href, *args)
          href = ENV['BASEURL'].to_s + href if href.start_with?('/')
          super(el, href, *args)
        end
      end)
    end
  end
end