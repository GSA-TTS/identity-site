require 'capybara/rspec'
require 'webdrivers/chromedriver'
require 'selenium/webdriver'
require 'rack/jekyll'
require 'rack/test'
require 'axe/rspec'

Capybara.register_driver :headless_chrome do |app|
  browser_options = Selenium::WebDriver::Chrome::Options.new
  browser_options.args << '--headless'
  browser_options.args << '--disable-gpu'
  browser_options.args << '--no-sandbox'
  browser_options.args << '--disable-dev-shm-usage'

  Capybara::Selenium::Driver.new app,
                                 browser: :chrome,
                                 options: browser_options
end
Capybara.javascript_driver = :headless_chrome
Webdrivers.cache_time = 86_400

Capybara.app = Rack::Jekyll.new(force_build: true)

sleep 0.1 while Capybara.app.compiling?
