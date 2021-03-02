---
layout: base
title: Blah
meta_title: Home | Login.gov
description: blah blah blah
permalink: /es/
twitter_card: large
image: /assets/img/login-gov-600x314.png
one_account_banner: true
redirect_from:
- /playbook/
- /playbook/implementation/
- /playbook/principles/
---

{% capture heading %}
{{ page.title }}
{% endcapture %}

{% capture text %}
{{ page.description }}
{% endcapture %}

{% include hero.html heading=heading text=text %}

<article class="container why-login-gov">
  <header class="intro">["index"]["why"]["heading"]</header>
  <div class="grid-row">
    <div class="tablet:grid-col">
      ["index"]["why"]["individuals"]
    </div>
    <div class="tablet:grid-col">
      ["index"]["why"]["partners"]
    </div>
    <div class="tablet:grid-col">
      ["index"]["why"]["developers"]
    </div>
  </div>
</article>
