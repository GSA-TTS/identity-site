---
title: Developers
permalink: /developers/
bg_color: bg-lightest-blue
---

<div class="bg-navy mb1">
  <div id="developer-header" class="container cntnr-wide px2 sm-px3 py4">
    <div class="col-12 sm-col-8">
      <h1 class="mt0 mb3 white">
        {% t developers_page.intro.heading %}
      </h1>
      <p class="mb3 white fs-20p serif">
        {% t developers_page.intro.p_1 %}
      </p>
      <a href="https://developers.login.gov/" target="_blank" class="btn btn-primary btn-wide">{% t developers_page.intro.a_1 %}</a>
    </div>
  </div>
</div>

<div class="bg-white">
  <div class="container cntnr-wide p2 sm-p3">
    <div class="clearfix mxn2">
      <div class="col col-12 sm-col-4 px2">
        <img alt="" src="{{ '/assets/img/comply.svg' | relative_url }}" height="117" width="113">
        <h2 class="mt2 mb2 pb2 blue border-bottom">{% t developers_page.column_1.heading %}</h2>
        {{ site.translations[site.lang]["developers_page"]["column_1"]["content"]["p_1"] | markdownify }}
      </div>
      <div class="col col-12 sm-col-4 px2">
        <img alt="" src="{{ '/assets/img/launch.svg' | relative_url }}" height="117">
        <h2 class="mt2 mb2 pb2 blue border-bottom">{% t developers_page.column_2.heading %}</h2>
        {{ site.translations[site.lang]["developers_page"]["column_2"]["content"]["p_1"] | markdownify }}
      </div>
      <div class="col col-12 sm-col-4 px2">
        <img alt="" src="{{ '/assets/img/develop.svg' | relative_url }}" height="117">
        <h2 class="mt2 mb2 pb2 blue border-bottom">{% t developers_page.column_3.heading %}</h2>
        {{ site.translations[site.lang]["developers_page"]["column_3"]["content"]["p_1"] | markdownify }}
      </div>
    </div>
  </div>
</div>

<div class="bg-lightest-blue">
  <div class="container cntnr-wide px2 py3 center">
    <h3 class="inline align-middle">{% t developers_page.footer.heading %}</h3>
    <span class="inline-block sm-px1 h1 blue align-middle line-height-1">▸</span>
    <p class="m0 fs-20p inline align-middle">{% t developers_page.footer.p_1 %} <a class="nowrap" href="{{ '/contact/' | relative_url }}">{% t developers_page.footer.a_1 %}</a>.</p>
  </div>
</div>
