# 2. Add NetlifyCMS

Date: 2021-02-20

## Status

Accepted

## Context

The team would like more control in editing Login.gov content instead of having an engineer edit a large YML file. The goal is to not have to know code in order to make edits to Login.gov.

## Decision

We will add Netlify CMS (Content Management System) to the architecture of the Login.gov.

## Consequences

Content editing can now fall on a designated content editor, whether it may be a content writer, product manager, designer, or any other member of Team Katherine. With Netlify CMS added to the architecture, content editors will be able to add, edit, or delete content without relying on an engineer. Adding Netlify CMS will require content editors to have a GitHub account because an account with Federalist permissions is required in order to access the CMS.

All published content changes will result in a GitHub pull request. Pull requests on the `identity-site` repository requires at least one approval in order for content to be added to the website. This will mean that an engineer may still be involved in the content editing process, although not required.
