require 'jekyll'
require './_plugins/locale_url_filter'

class JekyllFilter
  include Jekyll::LocaleUrlFilter

  def initialize(config, page_data)
    @site = Jekyll::Site.new(Jekyll::Configuration.from(config))
    page = Jekyll::Page.new(@site, @site.source, '', 'README.md')
    page.data.merge!(page_data)
    @context = Liquid::Context.new(@site.site_payload, {}, site: @site, page: page)
  end
end

RSpec.describe Jekyll::LocaleUrlFilter do
  let(:config) { {} }
  let(:page_data) { { 'lang' => 'en' } }
  let(:instance) { JekyllFilter.new(config, page_data) }

  describe '#locale_url' do
    let(:path) { '' }
    let(:locale) { nil }
    subject(:locale_url) { instance.locale_url(path, locale) }

    context 'without site base url' do
      let(:config) do
        {
          'collections' => {
            'en' => { 'permalink' => '/:path/' },
            'es' => { 'permalink' => '/:path/' },
          },
        }
      end

      context 'without path' do
        context 'without locale' do
          it 'renders without locale' do
            expect(locale_url).to eq('/')
          end
        end

        context 'with locale' do
          let(:locale) { 'es' }

          it 'renders without locale' do
            expect(locale_url).to eq('/')
          end
        end
      end

      context 'with path' do
        let(:path) { '/path/' }

        context 'without locale' do
          it 'renders without locale' do
            expect(locale_url).to eq('/path/')
          end
        end

        context 'with locale' do
          let(:locale) { 'es' }

          it 'renders without locale' do
            expect(locale_url).to eq('/path/')
          end
        end
      end
    end

    context 'with collection in permalink' do
      let(:config) do
        {
          'collections' => {
            'en' => { 'permalink' => '/:collection/:path/' },
            'es' => { 'permalink' => '/:collection/:path/' },
          },
        }
      end

      context 'without path' do
        context 'without locale' do
          it 'renders with locale from page data' do
            expect(locale_url).to eq('/en/')
          end
        end

        context 'with locale' do
          let(:locale) { 'es' }

          it 'renders with locale' do
            expect(locale_url).to eq('/es/')
          end
        end
      end

      context 'with path' do
        let(:path) { '/path/' }

        context 'without locale' do
          it 'renders without locale' do
            expect(locale_url).to eq('/en/path/')
          end
        end

        context 'with locale' do
          let(:locale) { 'es' }

          it 'renders without locale' do
            expect(locale_url).to eq('/es/path/')
          end
        end
      end
    end

    context 'with site base url' do
      context 'without collection in permalink' do
        let(:config) do
          {
            'baseurl' => 'https://example.com',
            'collections' => {
              'en' => { 'permalink' => '/:path/' },
              'es' => { 'permalink' => '/:path/' },
            },
          }
        end

        context 'without path' do
          context 'without locale' do
            it 'renders without locale' do
              expect(locale_url).to eq('https://example.com/')
            end
          end

          context 'with locale' do
            let(:locale) { 'es' }

            it 'renders without locale' do
              expect(locale_url).to eq('https://example.com/')
            end
          end
        end

        context 'with path' do
          let(:path) { '/path/' }

          context 'without locale' do
            it 'renders without locale' do
              expect(locale_url).to eq('https://example.com/path/')
            end
          end

          context 'with locale' do
            let(:locale) { 'es' }

            it 'renders without locale' do
              expect(locale_url).to eq('https://example.com/path/')
            end
          end
        end
      end

      context 'with collection in permalink' do
        let(:config) do
          {
            'baseurl' => 'https://example.com',
            'collections' => {
              'en' => { 'permalink' => '/:collection/:path/' },
              'es' => { 'permalink' => '/:collection/:path/' },
            },
          }
        end

        context 'without path' do
          context 'without locale' do
            it 'renders with locale from page data' do
              expect(locale_url).to eq('https://example.com/en/')
            end
          end

          context 'with locale' do
            let(:locale) { 'es' }

            it 'renders with locale' do
              expect(locale_url).to eq('https://example.com/es/')
            end
          end
        end

        context 'with path' do
          let(:path) { '/path/' }

          context 'without locale' do
            it 'renders without locale' do
              expect(locale_url).to eq('https://example.com/en/path/')
            end
          end

          context 'with locale' do
            let(:locale) { 'es' }

            it 'renders without locale' do
              expect(locale_url).to eq('https://example.com/es/path/')
            end
          end
        end
      end
    end
  end

  describe '#delocalize_url' do
    let(:path) { '' }
    let(:locale) { nil }
    let(:page_data) { { 'lang' => 'es' } }
    subject(:delocalized_url) { instance.delocalize_url(path, locale) }

    context 'path not including locale' do
      let(:path) { '/fr/example/' }

      context 'without locale' do
        it 'uses page data and does not modify path' do
          expect(delocalized_url).to eq(path)
        end
      end

      context 'with locale' do
        let(:locale) { 'es' }

        it 'does not modify path' do
          expect(delocalized_url).to eq(path)
        end
      end
    end

    context 'path including locale' do
      let(:path) { '/es/example/' }

      context 'without locale' do
        it 'uses page data and delocalizes url' do
          expect(delocalized_url).to eq('/example/')
        end
      end

      context 'with locale' do
        let(:locale) { 'es' }

        it 'delocalizes url' do
          expect(delocalized_url).to eq('/example/')
        end
      end
    end
  end
end
