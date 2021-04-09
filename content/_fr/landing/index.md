---
title: Le seul compte public pour le gouvernement.
description: Utilisez un compte et un mot de passe pour un accès sécurisé et
  privé aux agences gouvernementales participantes.
component:
  class: " "
three_col:
  class: why-login-gov
  col1: >-
    ### Personnes


    Utilisez un seul compte pour un accès sécurisé et privé aux agences gouvernementales participantes.


    [En savoir plus sur login.gov](http://localhost:4000/what-is-login/)
  col2: >-
    ### Partenaires de l’agence


    Protégez les informations de vos utilisateurs avec les plus hauts standards de sécurité numérique et d’expérience utilisateur. Login.gov gère le développement de logiciels, les opérations de sécurité et le support client pour que vous n’ayez pas à le faire.


    [Devenir un partenaire](https://partners.login.gov/)
  col3: >-
    ### Développeurs d’agence


    Ressources de développement, support en temps réel et outils modernes pour vous aider à implémenter et déployer votre application avec login.gov


    [Voir le guide du développeur](https://developers.login.gov/)
one_account_banner: true
permalink: /fr/
twitter_card: large
image: /assets/img/login-gov-600x314.png
redirect_from:
  - /fr/playbook/
  - /fr/playbook/implementation/
  - /fr/playbook/principles/
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
