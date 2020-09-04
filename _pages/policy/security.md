---
layout: policy
title: meta.privacy_security_policy.security.title
description: meta.privacy_security_policy.security.description
permalink: /policy/our-security-practices/
index: 3
---
{% assign lpath = site.lang | lang_path %}
{{ site.translations[site.lang]["policies"]["sections"][page.index]["content"] | replace: "site.baseurl", lpath | markdownify }}
