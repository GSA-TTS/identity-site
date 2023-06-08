# identity-site

The static marketing site for Login.gov

## Branches

`main` branch is published at https://www.login.gov.

Feature branches should be merged to `main` when they are ready through the normal code review process (have at least **one** person who is not the author Approve the PR).

## Publishing Workflow

Branch off of `main` and make pull requests back to the `main` branch. Cloud.gov Pages will build a live preview for each branch so we suggest using those builds as staging environments to run your proposed changes by the rest of the team.

To view the preview URL for your branch, click the Cloud.gov Pages "Details" link in your pull request's checks.

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

### NetlifyCMS
[NetlifyCMS](https://www.netlifycms.org/) is an open source content management system that we use to edit content on the brochure site. To develop and make changes to the CMS, or to edit content locally, first comment out the first `backend` block and then uncomment the second `backend` block that contains `proxy_url`. Then, change the branch name to the name of the branch that you are developing on.

After the changes in `admin/config.yml` are saved *and* the site is served locally, run
```
npx netlify-cms-proxy-server
```

You can then view the CMS in your browser at http://localhost:4000/admin.

### Adding nested pages and subdirectories
Currently the site is organized hierarchically by topic, with each topic constituting a folder and markdown files within that folder constituting the individual web pages about that topic. You might want to add more pages nested under another page already contained within a topic level folder. To do this, do the following:
    - Create the child page at the same level as the parent page. This is so Netlify CMS will pick up on the new page.
    - Add the following front matter fields to the child page: title, child, order and permalink.
    - `title` is the title of the article.
    - `child` is to be a boolean value, and for pages that are children of other pages, this should be true.
    - `order` is to be an integer value. This value functions as order does for the parent pages, it determines the display order of the grandchild pages.
    - `permalink` should be set to the desired url. Since this is to be a child page, you'll want it to follow this pattern: `/section/category/parent/child/`
    - In the parent page, add a new field to the front matter titled `children`
    - The `children` field is an array of the permalinks of pages that are children to this page

For example: to create a new page at the URL /help/verify-your-identity/verify-your-identity-in-person/test

Child page front matter fields:
    - ```
    title: Test
    child: true
    order: 1
    permalink: /help/verify-your-identity/verify-your-identity-in-person/test
    ```

Parent page front matter fields:
    - ```
    layout: help
    title: Verify your identity in person
    category: verify-your-identity
    children: ['/help/verify-your-identity/verify-your-identity-in-person/test','/help/verify-your-identity/verify-your-identity-in-person/test2']
    permalink: /help/verify-your-identity/verify-your-identity-in-person/
    order: 7
    ```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
