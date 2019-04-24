# identity-site

The static marketing site for login.gov

## Branches

`master` branch is published at https://www.login.gov

## Publishing Workflow

Branch off of `master` and make pull requests back to the `master` branch. Federalist will build a live preview for each branch  so we suggest using those builds as staging environments to run your proposed changes by the rest of the team.

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

## Release

This is the release process for www.login.gov, the [18F/identity-site](https://github.com/18F/identity-site) repo.

### Branches

Branches in the [18F/identity-site](https://github.com/18F/identity-site) repo that are published:

| branch | URL | role |
| ------ | --- | ---- |
| `master` | https://preview.login.gov | preview (staging) |
| `production` | https://www.login.gov | production |

### Process

1. Feature branches should be merged to `master` when they are ready through the normal code review process (have at least **one** person who is not the author Approve the PR)
2. After merging, changes should be confirmed at https://preview.login.gov
3. When changes are merged/confirmed, update and close the issue in Jira that asked for the change.
4. Production deploys of the static site are low-risk, low effort, and should be done frequently when changes have been made.
5. To deploy to production, create a Pull Request from `master` branch with a **base branch** of `production`
    - Visit this URL https://github.com/18F/identity-site/compare/production...master and click "Create Pull Request" to create a PR that promotes to production.
    - Have at least 🔥✨**two**✨🔥  people who are not the author Approve the PR after inspecting the candidate at the preview URL (https://preview.login.gov)

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
