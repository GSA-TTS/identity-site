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

{% include hero.html class="create-an-account" heading=heading text=text col_class="sm-col-6" %}

<div class="create-an-account bg-white grid-container padding-top-9">
  <div class="grid-row">
  <div class="grid-col-7">
    <div class="text border-bottom">{{ site.translations[site.lang]["create-an-account"]["intro"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
    <div class="step-1 step">
      {{ site.translations[site.lang]["create-an-account"]["step_1"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
    <div class="step-2 step">
      {{ site.translations[site.lang]["create-an-account"]["step_2"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
    <div class="step-3 step">
      {{ site.translations[site.lang]["create-an-account"]["step_3"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </div>
  <div class="grid-col-3 grid-offset-2 sidebar">
    <div class="box bg-blue-light">
      {{ site.translations[site.lang]["create-an-account"]["info"] | replace: 'site.baseurl', site.baseurl | markdownify }}
    </div>
  </div>
</div>

{% capture banner_content %}

  <p><a class="learn-account-creation usa-button usa-button--big" href="https://secure.login.gov/sign_up/enter_email">{% t banner.one-account-for-govt.create %}</a></p>
{% endcapture %}
{% include one_account_banner.html content=banner_content %}
