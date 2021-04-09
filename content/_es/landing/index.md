---
title: La única cuenta del gobierno para el público.
description: Use una cuenta y contraseña para tener acceso privado y seguro a
  las agencias gubernamentales participantes. participantes.
component:
  class: " "
three_col:
  class: why-login-gov
one_account_banner: true
permalink: /es/
twitter_card: large
image: /assets/img/login-gov-600x314.png
redirect_from:
  - /es/playbook/
  - /es/playbook/implementation/
  - /es/playbook/principles/
---
<article class="container why-login-gov">
  <header class="intro">{{ site.data[page.lang].settings["index"]["why"]["heading"] | replace: 'site.baseurl', site.baseurl | markdownify }}</header>
  <div class="grid-row">
    <div class="tablet:grid-col">
      {{ site.data[page.lang].settings["index"]["why"]["individuals"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
    <div class="tablet:grid-col">
      {{ site.data[page.lang].settings["index"]["why"]["partners"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
    <div class="tablet:grid-col">
      {{ site.data[page.lang].settings["index"]["why"]["developers"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </div>
</article>
