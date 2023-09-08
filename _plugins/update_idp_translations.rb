require './_plugins/idp_translations'

Jekyll::Hooks.register :site, :post_write do |site|
  next if site.config['skip_idp_translations']

  begin
    IDP::Translations.new(
      languages: site.config['languages'],
      manifest_file: site.config['idp_manifest_path'],
      domain: site.config['idp_base_url'],
      destination: site.config['destination']
    ).update!
  rescue => exception
    puts exception
  end
end
