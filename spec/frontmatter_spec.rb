require 'spec_helper'

RSpec.describe '.md files' do
  global_redirects = []

  Dir["#{REPO_ROOT}/content/**/*.md"].sort.each do |path|
    page = path.split(REPO_ROOT.to_s).last

    describe page do
      it 'does not include duplicate keys in YAML frontmatter' do
        _, frontmatter, _content = File.read(path).split('---', 3)

        expect(YAMLHelper.duplicate_keys(frontmatter)).to be_empty
      end

      it 'includes globally unique redirects' do
        _, frontmatter, _content = File.read(path).split('---', 3)
        data = YAML.load(frontmatter)
        redirects = Array(data['redirect_from'])

        redirects.each do |redirect|
          expect(global_redirects).not_to include(redirect), "Redirect already set:\n\n#{redirect}"
        end

        global_redirects += redirects
      end
    end
  end
end
