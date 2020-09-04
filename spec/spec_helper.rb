require 'rspec'
require 'pathname'
require 'nokogiri'
require 'set'

Dir['spec/support/**.rb'].each { |f| require File.expand_path(f) }

RSpec.configure do |config|
  config.disable_monkey_patching!
end

SITE_ROOT = Pathname.new(File.expand_path('../../_site', __FILE__))

def file_at(path)
  escaped_path = CGI.unescape(path)
  full_path = SITE_ROOT.join(escaped_path.gsub(%r|^/|, ''))
  html_path = full_path.to_s.sub(/\/$/, "") + '.html'

  if full_path.file?
    File.new(full_path.to_s)
  elsif full_path.directory?
    File.new(full_path.join('index.html').to_s)
  elsif File.file?(html_path)
    File.new(html_path)
  else
    fail "could not locate file named #{path}"
  end
end
