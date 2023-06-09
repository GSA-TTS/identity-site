# Configuring Site Settings

## Local Development

Default Jekyll site settings can be found in `_config.yml`. Refer to [Jekyll documentation](https://jekyllrb.com/docs/configuration/options/) for more information about configuration options.

To override settings in your lcoal environment, you can add a `_config.dev.yml` file to the root directory. Any settings in this file will override an equivalent setting in the base Jekyll `_config.yml` configuration. For example, you may want to configure Sass `style` to `expanded` to debug the non-minified styles, or temporarily disable non-English locales to improve rebuild times.

## Live Site

The Cloud.gov Pages administration dashboard allows us to override `_config.yml` settings for the live site and for preview branches.

Before managing site settings, you will need to request access from one of the existing [Cloud.gov Pages organization managers](https://docs.google.com/document/d/1ZMpi7Gj-Og1dn-qUBfQHqLc1Im7rUzDmIxKn11DPJzk/edit#heading=h.80vseiuz6587). You will need to provide them with your email address and GitHub username.

Once you have access to Cloud.gov Pages:

1. [Sign in to Cloud.gov Pages](https://pages.cloud.gov/)
2. After signing in, click the link for "identity-site" in the list of sites
3. Click "Site settings" in the sidebar
4. Expand "Advanced settings"
5. Enter the configuration overrides under "Live site" or "Preview site", depending on where you want your configuration to apply
6. Click "Save advanced settings"

Saving the settings will automatically trigger a rebuild of the `main` branch. If you also need to rebuild an in-progress branch, you can either push an empty commit to your branch, or find the branch on the "Build history" page and click the "Rebuild" button.
