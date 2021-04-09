---
title: Le seul compte public pour le gouvernement.
permalink: /fr/
twitter_card: large
image: /assets/img/login-gov-600x314.png
one_account_banner: true
redirect_from:
  - /playbook/
  - /playbook/implementation/
  - /playbook/principles/
---

{% capture heading %}
{{ site.data[page.lang].settings.index.intro.heading }}
{% endcapture %}

{% capture text %}
{{ site.data[page.lang].settings.index.intro.content }}
{% endcapture %}

{% include hero.html heading=heading text=text %}

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
