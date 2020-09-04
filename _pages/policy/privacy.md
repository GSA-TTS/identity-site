---
layout: policy
title: meta.privacy_security_policy.privacy.title
description: meta.privacy_security_policy.privacy.description
permalink: /policy/our-privacy-practices/
index: 2
---
{% assign lpath = site.lang | lang_path %}
{{ site.translations[site.lang]["policies"]["sections"][page.index]["content"] | replace: "site.baseurl", lpath | markdownify }}
