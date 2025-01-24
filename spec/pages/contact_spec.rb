require 'spec_helper'

RSpec.describe 'Contact us' do
  let(:doc) { page_at('contact/index.html') }

  it 'includes Salesforce form action' do
    form = doc.at_css('form#contact-us-form')

    expect(form['action']).to eq('https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8')
  end

  it 'includes the return url' do
    ret_url_input = doc.at_css("input[name='retURL']")

    expect(ret_url_input['value']).to end_with('/contact/case-submitted/#success')
  end

  context 'Contact form success' do
    let(:path) { "/_policy/contact-submitted._#{lang}.md" }
    let(:content) { front_matter(path) }

    describe 'English' do
      let(:lang) { 'en' }

      it 'includes permalink' do
        expect(content['permalink']).to eq('/contact/case-submitted/')
      end
    end

    describe 'Spanish' do
      let(:lang) { 'es' }

      it 'includes permalink' do
        expect(content['permalink']).to eq('/es/contact/case-submitted/')
      end
    end

    describe 'French' do
      let(:lang) { 'fr' }

      it 'includes permalink' do
        expect(content['permalink']).to eq('/fr/contact/case-submitted/')
      end
    end

    describe 'Chinese' do
      let(:lang) { 'zh' }

      it 'includes permalink' do
        expect(content['permalink']).to eq('/zh/contact/case-submitted/')
      end
    end
  end
end
