require 'spec_helper'

RSpec.describe 'Contact us' do
  let(:md_path) { "/_policy/contact._#{lang}.md" }
  let(:settings) { front_matter(md_path) }
  let(:doc) { page_at('contact/index.html') }

  it 'includes Salesforce form action' do
    form = doc.at_css('form#contact-us-form')

    expect(form['action']).to eq('https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8')
  end

  it 'includes the return url' do
    ret_url = doc.at_css("input[name='retURL']")

    expect(ret_url['value']).to end_with('/contact/contact-submitted/#success')
  end

  describe 'English' do
    let(:lang) { 'en' }

    it 'includes permalink' do
      expect(settings['permalink']).to eq('/contact/')
    end
  end

  describe 'Spanish' do
    let(:lang) { 'es' }

    it 'includes permalink' do
      expect(settings['permalink']).to eq('/es/contact/')
    end
  end

  describe 'French' do
    let(:lang) { 'fr' }

    it 'includes permalink' do
      expect(settings['permalink']).to eq('/fr/contact/')
    end
  end

  describe 'Chinese' do
    let(:lang) { 'zh' }

    it 'includes permalink' do
      expect(settings['permalink']).to eq('/zh/contact/')
    end
  end

  context 'Contact form success' do
    let(:md_path) { "/_policy/contact-submitted._#{lang}.md" }
    let(:settings) { front_matter(md_path) }
    let(:doc) { page_at('contact/contact-submitted/index.html') }

    it 'includes success alert' do
      alert = doc.at_css('p.usa-alert__text')

      expect(alert.text.strip).to start_with('Your help ticket')
    end

    describe 'English' do
      let(:lang) { 'en' }

      it 'includes permalink' do
        expect(settings['permalink']).to eq('/contact/contact-submitted/')
      end
    end

    describe 'Spanish' do
      let(:lang) { 'es' }

      it 'includes permalink' do
        expect(settings['permalink']).to eq('/es/contact/contact-submitted/')
      end
    end

    describe 'French' do
      let(:lang) { 'fr' }

      it 'includes permalink' do
        expect(settings['permalink']).to eq('/fr/contact/contact-submitted/')
      end
    end

    describe 'Chinese' do
      let(:lang) { 'zh' }

      it 'includes permalink' do
        expect(settings['permalink']).to eq('/zh/contact/contact-submitted/')
      end
    end
  end
end
