---
layout: sidenav
title: meta.privacy_security_policy.security.title
description: meta.privacy_security_policy.security.description
permalink: /fr/policy/our-security-practices/
redirect_from: /security/
index: 3
sidenav: policies
redirect_from:
- /security/
---

{{ site.data[page.lang].settings["policies"]["sections"][page.index]["content"] | replace: "site.baseurl", site.baseurl | markdownify }}
