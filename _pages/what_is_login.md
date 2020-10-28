---
title: meta.what-is-login.title
description: meta.what-is-login.description
permalink: /what-is-login/
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

{% capture heading %}
{% t what-is-login-page.hero.heading %}
{% endcapture %}

{% capture text %}
{% t what-is-login-page.hero.text %}
{% endcapture %}

{% include hero.html class="what-is-login" heading=heading text=text %}

  <article class="container bg-white what-is-login">
    <div class="one-account">
      {{ site.translations[site.lang]["what-is-login-page"]["one-account"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
    <div class="secure-account">
      {{ site.translations[site.lang]["what-is-login-page"]["secure-account"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </article>
