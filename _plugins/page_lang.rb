Jekyll::Hooks.register :pages, :pre_render do |page|
  # example: _pages/en/create-an-account.md
  lang = page.relative_path.gsub('_pages/', '').split('/').first

  page.data['lang'] = lang
end
