require 'spec_helper'

RSpec.describe '.md files' do
  Dir["#{REPO_ROOT}/content/**/*.md"].sort.each do |path|
    page = path.split(REPO_ROOT.to_s).last

    describe page do
      it 'does not include duplicate keys in YAML frontmatter' do
        _, frontmatter, _content = File.read(path).split('---', 3)

        expect(YAMLHelper.duplicate_keys(frontmatter)).to be_empty
      end
    end
  end
end
