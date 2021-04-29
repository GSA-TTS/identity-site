module YAMLHelper
  module_function

  # from https://stackoverflow.com/a/55705853
  def duplicate_keys(file_or_content)
    yaml = file_or_content.is_a?(File) ? file_or_content.read : file_or_content
    duplicate_keys = []

    validator = ->(node, parent_path) do
      if node.is_a?(Psych::Nodes::Mapping)
        children = node.children.each_slice(2) # In a Mapping, every other child is the key node, the other is the value node.
        duplicates = children.map { |key_node, _value_node| key_node }.group_by(&:value).select { |_value, nodes| nodes.size > 1 }

        duplicates.each do |key, nodes|
          duplicate_key = {
            file: (file_or_content.path if file_or_content.is_a?(File)),
            key: parent_path + [key],
            occurrences: nodes.map { |occurrence| "line: #{occurrence.start_line + 1}" },
          }.compact

          duplicate_keys << duplicate_key
        end

        children.each { |key_node, value_node| validator.call(value_node, parent_path + [key_node&.value].compact) }
      else
        node.children.to_a.each { |child| validator.call(child, parent_path) }
      end
    end

    ast = Psych.parse_stream(yaml)
    validator.call(ast, [])

    duplicate_keys
  end
end