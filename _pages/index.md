---
title: meta.home.title
permalink: /
twitter_card: large
image: /assets/img/login-gov-600x314.png
one_account_banner: true
---

{% capture heading %}
{% t index.intro.heading %}
{% endcapture %}

{% capture text %}
{% t index.intro.content %}
{% endcapture %}

{% include hero.html heading=heading text=text %}

<article class="container why-login-gov">
  <header class="intro">{{ site.translations[site.lang]["index"]["why"]["heading"] | replace: 'site.baseurl', site.baseurl | markdownify }}</header>
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
</article>
