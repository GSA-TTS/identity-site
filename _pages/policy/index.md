---
layout: policy
title: meta.privacy_security_policy.intro.title
description: meta.privacy_security_policy.intro.description
permalink: /policy/
index: 0
---
{% assign lpath = site.lang | lang_path %}
{{ site.translations[site.lang]["policies"]["sections"][page.index]["content"] | replace: "site.baseurl", lpath | markdownify }}
