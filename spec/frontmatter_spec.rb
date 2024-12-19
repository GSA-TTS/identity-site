require 'spec_helper'

RSpec.describe '.md files' do
  global_redirects = []

  Dir["#{REPO_ROOT}/content/**/*.md"].sort.each do |path|
    page = path.split(REPO_ROOT.to_s).last

    describe page do
      let(:frontmatter) { File.read(path).split('---', 3)[1] }

      it 'does not include duplicate keys in YAML frontmatter' do
        expect(YAMLHelper.duplicate_keys(frontmatter)).to be_empty
      end

      describe 'redirects' do
        let(:redirects) { Array(YAML.load(frontmatter, permitted_classes: [Time])['redirect_from']) }

        it 'includes globally unique redirects' do
          redirects.each do |redirect|
            expect(global_redirects).not_to include(redirect), "Redirect already set:\n\n#{redirect}"
            global_redirects << redirect
          end
        end

        it 'defines redirects in consistent format' do
          redirects.each { |redirect| expect(redirect).to match(%r{^/.+/$}) }
        end

        it 'redirects from pages in the same locale', if: path.match?(/\._([a-z]{2})\.md$/) do
          locale = path.match(/\._([a-z]{2})\.md$/)[1]
          prefix = if locale == 'en'
                     '/'
                   else
                     "/#{locale}"
                   end

          redirects.each { |redirect| expect(redirect).to start_with(prefix) }
        end
      end
    end
  end
end
