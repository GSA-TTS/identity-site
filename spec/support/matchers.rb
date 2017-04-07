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

RSpec::Matchers.define :link_to_valid_headers do
  missing_headers = []

  match do |actual|
    doc = actual

    doc.css('a[href^="#"]').each do |a|
      target = a[:href]

      next if a[:id] == 'js-mobile-nav-toggle'

      if target == '#'
        missing_headers << a.to_s
      else
        anchor = doc.at(target)
        missing_headers << target if anchor.nil?
      end
    end

    expect(missing_headers).to be_empty
  end

  failure_message do |actual|
    "expected that #{actual.url} would link to valid headers:\n#{missing_headers.join("\n")}"
  end
end

RSpec::Matchers.define :link_to_valid_internal_pages do
  missing_pages = []

  match do |actual|
    doc = actual

    doc.css('a[href^="/"]').each do |a|
      page = a[:href]

      begin
        file_at(page)
      rescue
        missing_pages << page
      end
    end

    expect(missing_pages).to be_empty
  end

  failure_message do |actual|
    "expected that #{actual.url} would link to valid pages:\n#{missing_pages.join("\n")}"
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
