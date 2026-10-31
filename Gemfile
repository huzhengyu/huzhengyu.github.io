source "https://rubygems.org"

# Same Jekyll version and plugins that GitHub Pages uses to build the live site.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-redirect-from"
end

# Needed to run `jekyll serve` on Ruby 3.x
gem "webrick", "~> 1.8"

# Windows: timezone data and faster file watching
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
