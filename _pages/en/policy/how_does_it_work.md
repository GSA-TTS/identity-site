---
layout: sidenav
title: meta.privacy_security_policy.how.title
description: meta.privacy_security_policy.how.description
permalink: /policy/how-does-it-work/
index: 1
sidenav: policies
---

{{ site.data[page.lang].settings["policies"]["sections"][page.index]["content"] | replace: "site.baseurl", site.baseurl | markdownify }}
