# identity-site

The static marketing site for Login.gov

## Guides for Common Workflows

- [Branching and Publishing Workflow](./docs/development-workflows/branching-and-publishing-workflow.md)
- [Netlify CMS](./docs/development-workflows/netlify-cms.md)
- [Nested Help Articles](./docs/development-workflows/nested-help-articles.md)

## Development

This is a Jekyll-built static site. To install dependencies:

```
make setup
```

Then, to start serving the site locally in development:

```
make run
```

You can then view the site in your browser at http://localhost:4000 .

Optionally, you can add a `_config.dev.yml` file to the root directory to list configuration which should only apply for local development. Any settings in this file will override an equivalent setting in the base Jekyll `_config.yml` configuration. For example, you may want to configure Sass `style` to `expanded` to debug the non-minified styles, or temporarily disable non-English locales to improve rebuild times.

To run specs:

```
make test
```

To run end-to-end browser tests:

```
npm test
```

End-to-end tests include:

- Automated accessibility scan for each page

To check for code formatting or potential syntax errors:

```
make lint
```

To run HTMLProofer

```
make htmlproofer
```

This project uses [Prettier](https://prettier.io/) to format code. When running the lint command above, you may notice errors relating to unexpected code formatting. It's recommended that you install [an editor integration](https://prettier.io/docs/en/editors.html) to automatically format code on save, but you can also resolve these errors automatically from the command-line by running:

```
npm run lint -- --fix
```

The lint task will check to see that SVG images are optimized. To optimize images during local development, run:

```
npm run optimize-assets
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
