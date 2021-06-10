---
title: ¿Quién usa login.gov?
description: Login.gov es un servicio de inicio de sesión de confianza emitido
  por el gobierno. El público usa login.gov para tener acceso simple y seguro a
  los servicios que brindan nuestros socios gubernamentales.
one_account_banner: true
permalink: /es/who-uses-login/
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
