# Maintaining Help Section

The Help section of login.gov a slightly different from others. Here are helpful hints for maintaining this section.

## The `_help` files location
For now, the help section is a direct subdirectory of the identity-site. They are located outside of the `_pages` directory. Our goal is to move this section to the `_pages` directory in a future pull request, where we can view the impact of such a move.

## The Help.html template
tbd

## The Help.md landing page
tbd

## The nav__sidenav.html component
tbd

## Adding a new help category
1. Create a `_help` subdirectory
    ```bash
    mkdir _help/new-category-slug
    ```
1. Navigate to config.yml.
1. Add the new category to the `help_pages` collection:
    ```
    help_pages:
    - get-started
    - trouble-signing-in
    - new-category-slug
    ```
1. Navigate to en.yml.
1. Add the new category to the `help_subpages` variable:
    ```
    help_subpages:
      get-started: Get started with login.gov
      trouble-signing-in: Trouble signing in?
      new-category-slug: Title of new category
    ```
    These values are used by [tbd]

    Titles in login.gov use sentence case instead of title case. Make sure category titles have the first letter capitalized.

    * @TODO: Combine help_pages collection in config.yml with help_subpages. DRY.
    * @TODO: Rename help_subpages to help_catogories to improve semantic meaning.
1. Add the new category to the `help_subpages` variable in es.yml and fr.yml.


## Adding a new help page
1. Create a `.md` file in the `_help` subdirectory.
    - In the YAML frontmatter, make sure it's got a numeric `order:` key
    - The content of the file should be the `help/translate_page.html` partial:

    ```bash
    cat > _help/new-category-slug/new-page-slug.md <<MD
    ---
    order: 0
    ---
    {% include help/translate_page.html url=page.url %}
    MD
    ```
1. Navigate to en.yml.
    1. Find the `help` variable. Add the new page under an existing category:
        ```
          get-started:
            overview: Overview
            new-page-slug: New page title
        ```
        > Here, the new page is added to the get-started collection of pages.
    1. Add the new page to the `help_pages` variable:
        ```
          get-started:
            overview: |-
              You can add or delete email addresses from your login.gov Your Account page...
            new-page-slug: |-
              This is the content of the new Help page...
        ```
        Remember to combine the yaml literal operator and the strip operator `|-` to keep line breaks but remove ending empty lines from the content.

        **DO NOT USE HTML.** Content should include markdown syntax only. This applies to headings, lists, images and links. If special styling is required for content _within_ the help article, consider using general CSS selectors. Do not use ids created by markdown, because these ids will be translated and will not apply to translated pages.

        To make sure that any links within the content, use the ``{{ site.baseurl }}/`` prefix. This code converts to `login.gov/es` and `login.gov/fr` respectively.
1. Repeat the above steps in es.yml. Use the same slug (untranslated) as the id.
1. Repeat the above steps in fr.yml.

## Translations
tbd

## Redirects
You'll notice there are several directories that aren't used on the brochure site:
  * usajobs
  * trusted-traveler-programs
  * sam
These pages were part of the former site, included in the navigation. Unfortunately, redirects on a Federalist site cannot be implemented on the server level. We have to create placeholders for these pages and specify where they should be redirected to.

__If you remove a Help directory, please follow the following steps:__
  1. Create an `index.md` page (if one doesn't already exist).
  1. As the front matter for the index.md page, add a `redirect_from` variable. List the pages to be removed under this variable.
      ```
      redirect_from:
      - /help/directory/page-1
      - /help/directory/page-2
      ```
  1. Delete the pages listed in index.md
  1. Add these urls to the `OLD_URLS.yml` file.
  1. Run `make test-urls` locally. If this check passes, you will receive the confirmation `No missing urls!`

__If you remove a Help page, please follow the following steps:__
  1. Find the index.md in the page's section.
  1. Add this page to the `redirect_from` list of pages.
  1. Delete the page.
  1. Add this url to the `OLD_URLS.yml` file.
  1. Run `make test-urls` locally. If this check passes, you will receive the confirmation `No missing urls!`
