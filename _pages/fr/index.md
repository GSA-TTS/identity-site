---
layout: base
permalink: /fr/
redirect_from:
  - /playbook/
  - /playbook/implementation/
  - /playbook/principles/
one_account_banner: true
title: Le seul compte public pour le gouvernement.
description: Utilisez un compte et un mot de passe pour un accès sécurisé et
  privé aux agences gouvernementales participantes.
image: /assets/img/login-gov-600x314.png
meta_title: Accueil
twitter_card: large
---

{% capture title %}
{{ page.title }}
{% endcapture %}

{% capture description %}
{{ page.description }}
{% endcapture %}

{% include hero.html title=title description=description %}

{% include components/3-col.html %}
