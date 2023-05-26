module Kramdown
  module Parser
    class Kramdown
      prepend(Module.new do
        def new_block_el(type, *args)
          el = super(type, *args)
          add_css_class!(el, 'usa-list') if type == :ul
          el
        end

        def add_css_class!(el, css_class)
          el.attr['class'] = [*el.attr['class'], css_class].join(' ')
        end
      end)
    end
  end
end
