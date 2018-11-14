require 'yaml'

class MissingTranslationFinder
  Translation = Struct.new(:key, :english, :spanish, :french) do
    def spanish_translated?
      !spanish.nil? && spanish != ''
    end

    def french_translated?
      !french.nil? && french != ''
    end
  end

  def call
    translations = find_translations_in_folder('_i18n')
    translations.reject do |translation|
      translation.spanish_translated? && translation.french_translated?
    end.map(&:key)
  end

  def find_translations_in_folder(folder)
    keys = load_translation_keys_in_folder(folder)
    keys.map do |key|
      Translation.new(
        key,
        find_translation(key: key, locale: 'en'),
        find_translation(key: key, locale: 'es'),
        find_translation(key: key, locale: 'fr')
      )
    end
  end

  def load_translation_keys_in_folder(folder)
    yaml = YAML.safe_load(File.read("#{folder}/en.yml"))
    load_translation_keys_from_hash(yaml)
  end

  def load_translation_keys_from_hash(hash)
    results = []
    hash.each do |key, value|
      if value.is_a? String
        results.push(key)
      elsif value.is_a? Hash
        children = load_translation_keys_from_hash(value)
        results += children.map { |child_key| "#{key}.#{child_key}" }
      end
    end
    results
  end

  def find_translation(key:, locale:)
    filename_postfix = "#{locale}.yml"
    filename = "_i18n/#{filename_postfix}"
    yaml = YAML.safe_load(File.read(filename))
    path = key.split('.')
    yaml.dig(*path)
  end
end
