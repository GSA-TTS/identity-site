---
title: Developers
permalink: /developers/
bg_color: bg-lightest-blue
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 flex flex-center flex-justify">
    <div class="sm-col-8 py3 sm-py4">
      <h1 class="mt0 mb1 white">
        {% t developers_page.intro.heading %}
      </h1>
      <p class="mb3 white fs-20p">
        {% t developers_page.intro.p_1 %}
      </p>
      <a href="https://developers.login.gov/" target="_blank" class="btn btn-primary btn-wide">{% t developers_page.intro.a_1 %}</a>
    </div>
    <div class="sm-show sm-col-3">
      <img alt="" src="{{ '/assets/img/dev-landing.png' | relative_url }}">
    </div>
  </div>
</div>

<div class="bg-white">
  <div class="container cntnr-wide px2 pt3 pb2">
    <div class="clearfix mxn2">
      <div class="col sm-col-4 px2 sm-mb3 mb2">
        <img alt="" src="{{ '/assets/img/comply.svg' | relative_url }}" height="104">
        <h2 class="mt2 mb2 pb2 gray border-bottom">{% t developers_page.column_1.heading %}</h2>
        {{ site.translations[site.lang]["developers_page"]["column_1"]["content"]["p_1"] | markdownify }}
      </div>
      <div class="col sm-col-4 px2 sm-mb3 mb2">
        <img alt="" src="{{ '/assets/img/launch.svg' | relative_url }}" height="104">
        <h2 class="mt2 mb2 pb2 gray border-bottom">{% t developers_page.column_2.heading %}</h2>
        {{ site.translations[site.lang]["developers_page"]["column_2"]["content"]["p_1"] | markdownify }}
      </div>
      <div class="col sm-col-4 px2 sm-mb3 mb2">
        <img alt="" src="{{ '/assets/img/develop.svg' | relative_url }}" height="104">
        <h2 class="mt2 mb2 pb2 gray border-bottom">{% t developers_page.column_3.heading %}</h2>
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
