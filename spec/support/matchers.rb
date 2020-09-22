# frozen_string_literal: true

require 'uri'

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
      rescue StandardError
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

RSpec::Matchers.define :link_to_valid_urls do
  bad_urls = []

  match do |actual|
    doc = actual

    doc.css('a').each do |a|
      href = a[:href]

      next if href == '#'

      begin
        URI(href)
      rescue URI::InvalidURIError
        bad_urls << href
      end
    end

    expect(bad_urls).to be_empty
  end

  failure_message do |actual|
    "expected that #{actual.url} would link to valid URLs, but found:\n#{bad_urls.join("\n")}"
  end
end
