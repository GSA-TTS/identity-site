---
title: meta.who-uses-login.title
description: meta.who-uses-login.description
permalink: /fr/who-uses-login/
twitter_card: large
image: /assets/img/login-gov-600x314.png
one_account_banner: true
---

{% capture heading %}
{{ site.data[page.lang].settings.who-uses-login-page.hero.heading }}
{% endcapture %}

{% capture text %}
{{ site.data[page.lang].settings.who-uses-login-page.hero.text }}
{% endcapture %}

{% include hero.html class="who-uses-login" heading=heading text=text %}

<div class="bg-primary-lightest">
  <div class="container who-uses-login">
    <div class="partners list">
      {{ site.data[page.lang].settings["who-uses-login-page"]["partners"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </div>
</div>

<div>
  <div class="container who-uses-login">
    <div class="security">
      {{ site.data[page.lang].settings["who-uses-login-page"]["security"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </div>
</div>
