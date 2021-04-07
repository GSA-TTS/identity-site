---
title: Qu'est-ce que login.gov?
description: meta.what-is-login.description
permalink: /fr/what-is-login/
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

{% capture heading %}
{{ site.data[page.lang].settings.what-is-login-page.hero.heading }}
{% endcapture %}

{% capture text %}
{{ site.data[page.lang].settings.what-is-login-page.hero.text }}
{% endcapture %}

{% include hero.html class="what-is-login" heading=heading text=text %}

  <article class="container what-is-login page-content__prose">
    <div class="one-account page-content__prose">
      {{ site.data[page.lang].settings["what-is-login-page"]["one-account"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
    <div class="secure-account page-content__prose">
      {{ site.data[page.lang].settings["what-is-login-page"]["secure-account"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </article>
