---
layout: main
title: The public’s one account for government.
description: Use one account and password for secure, private access to
  participating government agencies.
component:
  class: " "
three_col:
  class: why-login-gov
  heading: Lorem ipsum
  col1: >-
    Use one account for secure, private access to participating government
    agencies.


    [Learn about login.gov](https://login.gov/what-is-login/)
  col2: >-
    Protect your users’ information with the highest standards of digital
    security and user experience. Login.gov handles software development,
    security operations, and customer support so you don’t have to.


    [Become a partner](https://partners.login.gov/)
  col3: >-
    Developer resources, real-time support and modern tools to help you
    implement and deploy your application with login.gov


    [See developer guide](https://developers.login.gov/)
one_account_banner: true
permalink: /
twitter_card: large
image: /assets/img/login-gov-600x314.png
redirect_from:
  - /playbook/
  - /playbook/implementation/
  - /playbook/principles/
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
