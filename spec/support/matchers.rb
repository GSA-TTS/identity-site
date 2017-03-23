RSpec::Matchers.define :open_external_links_in_new_window do
  missing_target_blank = []

  match do |actual|
    doc = actual

    doc.css('a[href^=http]').each do |a|
      next if !a.ancestors('nav').empty?

      missing_target_blank << a[:href] if a[:target] != '_blank'
    end

    expect(missing_target_blank).to be_empty
  end

  failure_message do |actual|
    "expected that #{actual.url} would have target=_blank on links:\n#{missing_target_blank.join("\n")}"
  end
end

RSpec::Matchers.define :include_a_valid_table_of_contents do
  error = nil
  missing_headers = []

  match do |actual|
    doc = actual
    toc_comment = doc.at("//comment()[contains(.,'MarkdownTOC')]")

    toc = toc_comment.next_sibling
    until toc.name == 'ul'
      toc = toc.next_sibling
    end

    error = :no_toc if toc.nil?
    expect(toc).to be

    toc.css('a').each do |a|
      target = a[:href]

      anchor = doc.at(target)
      missing_headers << target if anchor.nil?
    end

    expect(missing_headers).to be_empty
  end

  failure_message do |actual|
    case error
    when :no_toc
      "expected that #{actual.url} would have a table of contents (MarkdownTOC)"
    else
      "expected that #{actual.url} would link to valid headers:\n#{missing_headers.join("\n")}"
    end
  end
end

RSpec::Matchers.define :properly_escape_html do
  escaped_html_tags = nil

  match do |actual|
    doc = actual

    escaped_html_tags = doc.to_s.scan(/(&lt;(.+)&gt;)/).map(&:first)

    expect(escaped_html_tags).to be_empty
  end

  failure_message do |actual|
    "expected that #{actual.url} would not have escaped html tags, but found:\n#{escaped_html_tags.join("\n")}"
  end
end
