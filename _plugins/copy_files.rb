## This plugin copies files configured in the site configuration from a source
## directory to the built site output

Jekyll::Hooks.register :site, :post_write do |site|
  site.config['copy_files'].to_a.each do |config|
    from_entries = [*config['from']]
    to_folder = File.join(site.config['destination'], config['to'])
    FileUtils.mkdir_p(to_folder)
    from_entries.each do |from_entry|
      basename = File.basename(from_entry)
      FileUtils.copy_entry(from_entry, File.join(to_folder, basename))
    end
  end
end
