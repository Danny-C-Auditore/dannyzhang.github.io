# Yaoyun Zhang - Academic Homepage

Personal academic website built with the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template.

## Local development on Windows

```powershell
bundle install
bundle exec jekyll serve -l -H localhost
```

Then open <http://localhost:4000>.

The Gemfile pins Nokogiri 1.17.2 because the current local Ruby installation is 32-bit Windows. It also includes `tzinfo-data`, which Jekyll requires on Windows.

## Updating the CV

Replace `files/Yaoyun_Zhang_CV.pdf` while keeping the filename unchanged.

## Deployment

The production site is configured for <https://danny-c-auditore.github.io/dannyzhang.github.io/> and the repository `Danny-C-Auditore/dannyzhang.github.io`.
