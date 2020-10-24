---
title: meta.home.title
permalink: /
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

{% capture heading %}
{% t index.intro.heading %}
{% endcapture %}

{% capture text %}
{% t index.intro.content %}
{% endcapture %}

{% include hero.html heading=heading text=text %}

<div class="bg-white">
  <div class="container why-login-gov">
    <div>{{ site.translations[site.lang]["index"]["why"]["heading"] | replace: 'site.baseurl', site.baseurl | markdownify }}</div>
    <hr>
    <div class="grid-row">
      <div class="tablet:grid-col">
        {{ site.translations[site.lang]["index"]["why"]["individuals"] | replace: 'site.baseurl', site.baseurl | markdownify }}
      </div>
      <div class="tablet:grid-col">
        {{ site.translations[site.lang]["index"]["why"]["partners"] | replace: 'site.baseurl', site.baseurl | markdownify }}
      </div>
      <div class="tablet:grid-col">
        {{ site.translations[site.lang]["index"]["why"]["developers"] | replace: 'site.baseurl', site.baseurl | markdownify }}
      </div>
    </div>
  </div>
</div>

{% capture banner_content %}

  <p><a class="learn-account-creation link" href="{{ site.baseurl }}/create-an-account">{% t banner.one-account-for-govt.learn %}</a></p>
{% endcapture %}
{% include one_account_banner.html content=banner_content %}
