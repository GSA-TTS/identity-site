---
title: meta.who-uses-login.title
description: meta.who-uses-login.description
permalink: /who-uses-login/
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

{% capture heading %}
{% t who-uses-login-page.hero.heading %}
{% endcapture %}

{% capture text %}
{% t who-uses-login-page.hero.text %}
{% endcapture %}

{% include hero.html class="who-uses-login" heading=heading text=text %}

<div class="bg-primary-lightest">
  <div class="container who-uses-login">
    <div class="partners">
      {{ site.translations[site.lang]["who-uses-login-page"]["partners"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </div>
</div>

<div class="bg-white">
  <div class="container who-uses-login">
    <div class="security">
      {{ site.translations[site.lang]["who-uses-login-page"]["security"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </div>
</div>

{% capture banner_content %}

  <p><a class="learn-account-creation link" href="{{ site.baseurl }}/create-an-account">{% t banner.one-account-for-govt.learn %}</a></p>
{% endcapture %}
{% include one_account_banner.html content=banner_content %}
