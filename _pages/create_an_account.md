---
title: meta.create-an-account.title
description: meta.create-an-account.description
permalink: /create-an-account/
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

{% capture heading %}
  {% t create-an-account.hero.heading %}
{% endcapture %}

{% capture text %}
  {% t create-an-account.hero.text %}
{% endcapture %}

{% include hero.html class="create-an-account" heading=heading text=text col_class="sm-col-6" %}

<div class="bg-white">
  <div class="container create-an-account">
    <div class="one-account">
      {{ site.translations[site.lang]["what-is-login-page"]["one-account"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
    <div class="secure-account">
      {{ site.translations[site.lang]["what-is-login-page"]["secure-account"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </div>
</div>
