---
layout: base
permalink: /
redirect_from:
  - /playbook/
  - /playbook/implementation/
  - /playbook/principles/
one_account_banner: true
title: The public’s one account for government.
description: Use one account and password for secure, private access to
  participating government agencies.
image: /assets/img/login-gov-600x314.png
meta_title: Home
twitter_card: large
---
{% capture title %}
{{ page.title }}
{% endcapture %}

{% capture description %}
{{ page.description }}
{% endcapture %}

{% include hero.html title=title description=description %}

{% include components/3-col.html %}
