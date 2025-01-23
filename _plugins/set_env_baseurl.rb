Jekyll::Hooks.register :site, :pre_render do |site|
  site.config['envbaseurl'] = ENV['BASEURL'] || 'https://login.gov/'
end
