---
layout: main
title: Who uses login.gov?
description: Login.gov is a trusted, government-issued sign in service. The
  public uses login.gov for simple and secure access to the services our
  government partners provide.
one_account_banner: true
permalink: /who-uses-login/
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

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
