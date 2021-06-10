---
title: Qui utilise login.gov?
description: Login.gov est un service de connexion approuvé par le gouvernement.
  Le public utilise login.gov pour un accès simple et sécurisé aux services
  fournis par nos partenaires gouvernementaux.
one_account_banner: true
permalink: /fr/who-uses-login/
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

<div class="bg-primary-lightest">
  <div class="container who-uses-login">
    <div class="partners list">
      {{ site.data[page.lang].settings["who-uses-login-page"]["partners"] | replace_locale_base_url | markdownify }}
    </div>
  </div>
</div>

<div>
  <div class="container who-uses-login">
    <div class="security">
      {{ site.data[page.lang].settings["who-uses-login-page"]["security"] | replace_locale_base_url | markdownify }}
    </div>
  </div>
</div>
