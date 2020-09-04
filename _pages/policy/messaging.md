---
layout: policy
title: meta.privacy_security_policy.messaging.title
description: meta.privacy_security_policy.messaging.description
permalink: /policy/messaging-terms-and-conditions/
index: 4
---
{% assign lpath = site.lang | lang_path %}
{{ site.translations[site.lang]["policies"]["sections"][page.index]["content"] | replace: "site.baseurl", lpath | markdownify }}
