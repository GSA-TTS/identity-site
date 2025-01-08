require 'spec_helper'

RSpec.describe '_site' do
  it 'only outputs HTML pages and their corresponding assets' do
    allowed_extensions = %w[
      .css
      .docx
      .gif
      .html
      .ico
      .jpeg
      .jpg
      .js
      .map
      .pdf
      .png
      .svg
      .ttf
      .webp
      .woff
      .woff2
      .xml
    ].to_set.freeze

    allowlisted_files = %w[
      admin/config.yml
      assets/css/main.css.map
      assets/js/main.js.LICENSE.txt
      assets/js/cms.js.LICENSE.txt
      assets/js/post_office_search.js.LICENSE.txt
      browserconfig.xml
      manifest.json
      robots.txt
    ].to_set.freeze

    files = Dir.glob('**/*', base: SITE_ROOT).
      reject { |file| File.directory?(File.join(SITE_ROOT, file)) }.
      reject { |file| allowlisted_files.include?(file) }.
      reject { |file| allowlisted_files.include?(File.basename(file)) }

    expect(files).to all(
      satisfy do |file|
        allowed_extensions.include?(File.extname(file)) && !file.include?('config')
      end
    )
  end
end
