require './_plugins/idp_translations'

RSpec.describe IDP::Translations do
  subject {
    described_class.new(
      languages: 'asdf',
      manifest_file: 'asdf',
      domain: 'asdf',
      destination: 'asdf'
    )
  }

  it 'updates the files' do
    expect(described_class).to eq true
  end
end
