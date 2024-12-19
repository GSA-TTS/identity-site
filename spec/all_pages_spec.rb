require 'spec_helper'

def admin_page?(path)
  path.start_with?('admin/')
end

def redirect_page?(path)
  File.read(file_at(path)).include?('<meta http-equiv="refresh"')
end

def external_link?(uri)
  uri.scheme && !/^(www\.)?#{SITE_URI.host}$/.match(uri.host)
end

def get_locale(path)
  match = URI_PATH_NON_ENGLISH_LOCALE_REGEX.match(path)
  if match
    match[1]
  else
    'en'
  end
end

RSpec.describe 'all pages' do
  let(:old_paths) { YAML.load_file('OLD_URLS.yml').map { |url| URI(url).path } }
  let(:redirect_froms) do
    Dir["#{REPO_ROOT}/content/**/*.md"].flat_map do |path|
      _, frontmatter, _page = File.read(path).split('---', 3)
      Array(YAML.load(frontmatter)['redirect_from'])
    end
  end

  files = Dir.glob('**/*.html', base: SITE_ROOT)
  files.reject! { |path| admin_page?(path) || redirect_page?(path) }
  files.sort.each do |path|
    describe path do
      let(:doc) { Nokogiri::HTML(file_at(path)) }

      it 'has a title' do
        expect(doc).to be_uniquely_titled
      end

      it 'escapes html correctly' do
        expect(doc).to properly_escape_html
      end

      it 'does not have broken Markdown links' do
        html = doc.to_s
        expect(html).to_not include(')]')
        expect(html).to_not match(/\]\((http|\/)/)
      end

      it 'does not link to a placeholder redirect_from page' do
        aggregate_failures do
          doc.css('a').each do |a|
            expect(redirect_froms).not_to include(a[:href])
          end
        end
      end

      it 'links as HTTPS to valid page' do
        aggregate_failures do
          doc.css('a').each do |a|
            next if a[:href].start_with?('#')
            uri = URI(a[:href])
            next if external_link?(uri)
            expect(uri).to be_https_scheme, "expected https, got:\n\n#{a.to_html}"
            expect(old_paths).not_to include(uri.path)
          end
        end
      end

      it 'links to valid headings' do
        expect(doc).to link_to_valid_headers
      end

      context 'localization' do
        it 'maintains locale in links' do
          locale = get_locale(path)
          expect(doc).to link_to_locale_pages(locale)
        end
      end
    end
  end
end
