# identity-site

The static marketing site for login.gov

## Branches

`main` branch is published at https://www.login.gov.

Feature branches should be merged to `main` when they are ready through the normal code review process (have at least **one** person who is not the author Approve the PR).

## Publishing Workflow

Branch off of `main` and make pull requests back to the `main` branch. Federalist will build a live preview for each branch  so we suggest using those builds as staging environments to run your proposed changes by the rest of the team.

To view the preview URL for your branch click the federalist link in your pull request or modify the following URL to include your branch name:

```
https://federalist-proxy.app.cloud.gov/preview/18f/identity-site/{BRANCH}/
```

## Development

This is a Jekyll-built static site. To install dependencies:

```
make setup
```

To run locally in conjunction with [`identity-style-guide`](https://github.com/18F/identity-style-guide/), run the following commands:

0. In the `identity-style-guide` directory, run `npm link`. This will create a symlink that will make changes to this repo accessible in `identity-site`

Then, to start serving the site locally in development:

```
make run
```

This will start multiple processes that will watch for changes in your local `identity-style-guide` repository.

To run specs:

```
make test
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
