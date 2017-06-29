---
title: Home
permalink: /
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

<div id="intro-header" class="bg-navy">
  <div class="container cntnr-wide px2 py3 sm-py4 clearfix">
    <div class="sm-col sm-col-7 sm-col-right">
      <h1 class="mt0 mb2 white">{% t index.intro.heading %}</h1>
      <p class="m0 white fs-20p">{% t index.intro.content %}</p>
    </div>
  </div>
</div>

<div class="bg-white">
  <div class="container cntnr-wide px2 pt3 pb2">
    <div class="clearfix mxn2">
      <div class="col sm-col-4 px2 sm-mb3 mb2">
        <img alt="" src="{{ site.baseurl }}/assets/img/users.svg" height="90">
        <h2 class="mt2 mb2 pb2 gray border-bottom border-light-blue" markdown="1">
          {% t index.column_1.heading %}
        </h2>
        <p class="mb1">
          {% t index.column_1.content.p_1 %}
        </p>
        <ul class="list-reset teal-dots">
          <li class="mb1">
            {% t index.column_1.content.li_1 %}
          </li>
          <li class="mb1">
            {% t index.column_1.content.li_2 %}
          </li>
          <li class="mb1">
            {% t index.column_1.content.li_3 %}
          </li>
        </ul>
      </div>
      <div class="col sm-col-4 px2 sm-mb3 mb2">
        <img alt="" src="{{ site.baseurl }}/assets/img/partners.svg" height="90">
        <h2 class="mt2 mb2 pb2 gray border-bottom border-light-blue">
          {% t index.column_2.heading %}
        </h2>
        {{ site.translations[site.lang]["index"]["column_2"]["p_1"] | replace: 'site.baseurl', site.baseurl | markdownify }}
      </div>
      <div class="col sm-col-4 px2 sm-mb3 mb2">
        <img alt="" src="{{ site.baseurl }}/assets/img/built.svg" height="90">
        <h2 class="mt2 mb2 pb2 gray border-bottom border-light-blue">
          {% t index.column_3.heading %}
        </h2>
        {{ site.translations[site.lang]["index"]["column_3"]["p_1"] | replace: 'site.baseurl', site.baseurl | markdownify }}
      </div>
    </div>
  </div>
</div>

<div class="bg-light-blue">
  <div class="container cntnr-wide px2 py3">
    <div class="clearfix">
      <div class="col-12 sm-col-10 mx-auto">
        <h2 class="mt1 mb2 red">{% t index.footer.heading %}</h2>
        <p class="mt0 fs-20p serif line-height-3" markdown="1">
          {{ site.translations[site.lang]["index"]["footer"]["p_1"] | replace: 'site.baseurl', site.baseurl }}
        </p>
        <div class="center">
          <a href="{{ site.baseurl }}/contact" class="btn btn-primary btn-wide mb2">{% t pages.contact_us %}</a>
        </div>
      </div>
    </div>
  </div>
</div>
