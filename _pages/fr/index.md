---
layout: base
title: Blah
meta_title: Home | Login.gov
description: blah blah blah
permalink: /fr/
twitter_card: large
image: /assets/img/login-gov-600x314.png
one_account_banner: true
redirect_from:
- /playbook/
- /playbook/implementation/
- /playbook/principles/
---

{% capture title %}
{{ page.title }}
{% endcapture %}

{% capture description %}
{{ page.description }}
{% endcapture %}

{% include hero.html title=title description=description %}

{% include components/3-col.html %}
