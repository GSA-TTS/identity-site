---
layout: main
permalink: /who-uses-login/
title: Who uses login.gov?
description: Login.gov is a trusted, government-issued sign in service. The
  public uses login.gov for simple and secure access to the services our
  government partners provide.
hero_image: /images/img/app.svg
sidenav: false
components:
  - option: Our partners
  - option: Secure and private access for the public
  - option: Banner with link
one_account_banner: true
image: /assets/img/login-gov-600x314.png
twitter_card: large
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
    <div class="partners list">
      {{ site.translations[site.lang]["who-uses-login-page"]["partners"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </div>
</div>

<div>
  <div class="container who-uses-login">
    <div class="security">
      {{ site.translations[site.lang]["who-uses-login-page"]["security"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </div>
</div>
