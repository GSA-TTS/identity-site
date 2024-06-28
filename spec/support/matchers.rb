# frozen_string_literal: true

require 'uri'
require 'yaml'

RSpec::Matchers.define :link_to_valid_headers do
  missing_headers = []

  match do |actual|
    doc = actual

    doc.css('a[href^="#"]').each do |a|
      target = a[:href]

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

RSpec::Matchers.define :be_https_scheme do
  match { |uri| expect(uri.scheme).to be_nil.or eq 'https' }
end

RSpec::Matchers.define :link_to_locale_pages do |locale|
  broken_links = []

  match do |actual|
    doc = actual

    doc.css("a[href^='/'],a[href^='#{SITE_URL}']").each do |a|
      # `hreflang` implies that it's intentional for the link target language to differ from the
      # current page language.
      next if a[:hreflang]
      page = a[:href]
      link_path = URI::parse(page).path
      next if link_path.start_with?('/partners/')
      if AVAILABLE_NON_ENGLISH_LOCALES.include?(locale)
        if !link_path.start_with?("/#{locale}/") && !File.file?(File.join(REPO_ROOT, link_path))
          broken_links << a.to_html
        end
      else
        if link_path.match?(URI_PATH_NON_ENGLISH_LOCALE_REGEX) && !File.file?(File.join(REPO_ROOT, link_path))
          broken_links << a.to_html
        end
      end
    end

    doc.css("a[href^='https://secure.login.gov']").each do |a|
      page = a[:href]
      link_path = URI::parse(page).path
      if AVAILABLE_NON_ENGLISH_LOCALES.include?(locale)
        if !link_path.start_with?("/#{locale}/") && link_path != "/#{locale}"
          broken_links << a.to_html
        end
      else
        if link_path.match?(URI_PATH_NON_ENGLISH_LOCALE_REGEX)
          broken_links << a.to_html
        end
      end
    end

    expect(broken_links).to be_empty
  end

  failure_message do |actual|
    "expected that #{actual.url} would link to locale #{locale}:\n\n#{broken_links.join("\n\n")}"
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

site_config = YAML.safe_load(File.read(File.expand_path(File.join(__dir__, '../../_config.yml'))))
site_title = site_config['title']

RSpec::Matchers.define :be_uniquely_titled do
  # Attempts to validate conformance to WCAG Success Criteria 2.4.2: Page Titled
  #
  # Visiting a page with the default app name title is considered a failure, and should be resolved
  # by providing a distinct description for the page via the `title` YAML front-matter metadata.
  #
  # https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html

  title = nil

  match do |doc|
    title = doc.css('title').first.text.strip

    !title.empty? && title.include?(site_title) && title.strip != "| #{site_title}"
  end

  failure_message do |doc|
    "Should have a unique and descriptive title. Found '#{title}'."
  end
end
