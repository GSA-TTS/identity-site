### Adding nested pages and subdirectories
Currently the site is organized hierarchically by topic, with each topic constituting a folder and markdown files within that folder constituting the individual web pages about that topic. You might want to add more pages nested under another page already contained within a topic level folder. To do this, do the following:
- Create the child page at the same level as the parent page. This is so Decap CMS will pick up on the new page.
- Add the following front matter fields to the child page: `title`, `child`, `order` and `permalink`.
- `title` is the title of the article. This is a string.
- `child` is a boolean value. For pages that are children of other pages, this should be true.
- `order` is an integer value. It determines the display order of the grandchild pages.
- `permalink` should be set to the desired url. Since this is a child page, you'll want it to follow this pattern: `/section/category/parent/child/`
- In the parent page, add a new field to the front matter titled `children`
- The `children` field is an array of the permalinks of pages that are children to this page

For example: to create a new page at the URL: 
- `/help/verify-your-identity/verify-your-identity-in-person/test`

Child page front matter fields:
```
---
title: Test
child: true
order: 1
permalink: /help/verify-your-identity/verify-your-identity-in-person/test
---
```

Parent page front matter fields:
```
---
layout: help
title: Verify your identity in person
category: verify-your-identity
children: 
  - /help/verify-your-identity/verify-your-identity-in-person/test
permalink: /help/verify-your-identity/verify-your-identity-in-person/
order: 7
---
```
