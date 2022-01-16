# kiewic.github.io

Install:

    bundle install --path vendor/bundle

Run Jekyll with Bundler:

    bundle exec jekyll serve

Preview the site with drafts:

    bundle exec jekyll serve --drafts

Update:

    bundle update github-pages

For the last update I had to use a different ruby version than the one installed with macOS:

    brew install ruby@2.7

## Versions Installed

    ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-darwin20]
    jekyll 3.9.0

This matches jekyll version from https://pages.github.com/versions/

## Docs

- [Ruby Development Kit][Development-Kit]
- [Jekyll docs][jekyllrb]
- [Jekyll sites examples][jekyll-wiki]
- [Code Snippet Highlighting][code-snippet-highlighting]
- [Liquid for Designers][liquid-for-designers]
- [kramdown Quick Reference][kramdown-quickref]
- DISQUS
  - [Syntax highlighting][disqus-syntax-highlighting]
  - [What HTML tags are allowed within comments?][html-tags-are-allowed]

[Development-Kit]: https://github.com/oneclick/rubyinstaller/wiki/Development-Kit
[jekyllrb]: http://jekyllrb.com/docs/home/
[jekyll-wiki]: https://github.com/jekyll/jekyll/wiki/Sites
[code-snippet-highlighting]: http://jekyllrb.com/docs/templates/#code-snippet-highlighting
[liquid-for-designers]: https://github.com/shopify/liquid/wiki/liquid-for-designers
[kramdown-quickref]: http://kramdown.gettalong.org/quickref.html
[html-tags-are-allowed]: https://help.disqus.com/customer/portal/articles/466253-what-html-tags-are-allowed-within-comments
[disqus-syntax-highlighting]: https://help.disqus.com/customer/portal/articles/665057-syntax-highlighting

