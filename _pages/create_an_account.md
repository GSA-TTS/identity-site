---
title: meta.create-an-account.title
description: meta.create-an-account.description
permalink: /create-an-account/
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

{% capture heading %}
{% t create-an-account.hero.heading %}
{% endcapture %}

{% capture text %}
{% t create-an-account.hero.text %}
{% endcapture %}

{% include hero.html class="create-an-account" heading=heading text=text %}

<div class="create-an-account">
  <div class="container">
    <div class="grid-row">
      <article class="desktop:grid-col-7">
        <header class="intro">
          {{ site.translations[site.lang]["create-an-account"]["intro"] | replace: 'site.baseurl', site.baseurl | markdownify }}
        </header>
        <div class="step-1 step list">
          {{ site.translations[site.lang]["create-an-account"]["step_1"] | replace: 'site.baseurl', site.baseurl | markdownify }}
          <div class="mobile step-1-img"></div>
        </div>
        <div class="step-2 step list">
          {{ site.translations[site.lang]["create-an-account"]["step_2"] | replace: 'site.baseurl', site.baseurl | markdownify }}
          <div class="mobile step-2-img"></div>
        </div>
        <div class="step-3 step list">
          {{ site.translations[site.lang]["create-an-account"]["step_3"] | replace: 'site.baseurl', site.baseurl | markdownify }}
          <div class="mobile step-3-img"></div>
        </div>
      </article>
      <aside class="sidebar desktop:grid-col-4 desktop:grid-offset-1 desktop-lg:grid-col-3 desktop-lg:grid-offset-2">
        <div class="box">
          {{ site.translations[site.lang]["create-an-account"]["info"] | replace: 'site.baseurl', site.baseurl | markdownify }}
        </div>
      </aside>
    </div>
  </div>
</div>

{% capture banner_content %}

<p><a class="learn-account-creation usa-button usa-button--big"
    href="https://secure.login.gov/sign_up/enter_email">{% t banner.one-account-for-govt.create %}</a></p>
{% endcapture %}
{% include one_account_banner.html content=banner_content %}
