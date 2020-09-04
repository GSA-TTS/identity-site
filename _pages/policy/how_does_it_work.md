---
layout: policy
title: meta.privacy_security_policy.how.title
description: meta.privacy_security_policy.how.description
permalink: /policy/how-does-it-work/
index: 1
---
{% assign lpath = site.lang | lang_path %}
{{ site.translations[site.lang]["policies"]["sections"][page.index]["content"] | replace: "site.baseurl", lpath | markdownify }}
