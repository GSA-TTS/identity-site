require './_plugins/idp_translations'
require 'ostruct'

RSpec.describe IDP::Translations do
  subject {
    described_class.new(
      languages: ['en'],
      manifest_file: 'manifest.json',
      domain: 'google.com',
      destination: '/'
    )
  }

  let(:get_response_body) {
    %q(
      {
        "entrypoints": {
          "document-capture": {
            "assets": {
              "js": [
                "/packs/js/document-capture-asdf.digested.js",
                "/packs/js/document-capture-asdf.digested-qwerty.en.js",
                "/packs/js/document-capture-asdf.digested-qwerty.es.js",
                "/packs/js/document-capture-asdf.digested-qwerty.fr.js",
                "/packs/js/document-capture-asdf.digested-qwerty.zh.js"
              ]
            }
          }
        }
      })
  }
  let(:make_directory) {}
  let(:copy_stream) {}
  let(:uri_open) {}

  before do
    allow(subject).to receive(:get_response_body).and_return(get_response_body)
    allow(subject).to receive(:make_directory).and_return(make_directory)
    allow(subject).to receive(:copy_stream).and_return(copy_stream)
    allow(subject).to receive(:uri_open).and_return(uri_open)
  end

  it 'updates the files' do
    expect(subject).to receive(:get_response_body)
    expect(subject).to receive(:make_directory)
    expect(subject).to receive(:copy_stream)
    expect(subject).to receive(:uri_open)
    subject.update!
  end
end
