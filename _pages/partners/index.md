---
title: meta.partners.title
permalink: /partners/
description: meta.partners.description
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 flex flex-center flex-justify">
    <div class="sm-col-8 py3 sm-py4">
      <h1 class="mt0 mb1 white">
        {% t meta.partners.title %}
      </h1>
      <p class="mb0 white fs-20p">
        {% t partners_page.section_1.p_1 %}
      </p>
    </div>
    <div class="sm-show sm-col-3 center">
      <img alt="" src="{{ '/assets/img/dev-landing.png' | relative_url }}" style="max-width:80%;">
    </div>
  </div>
</div>

<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb2">
    <div class="clearfix mxn3">
      <div class="sm-col sm-col-4 px3">
        <h2 class="mt0 mb2 pb2 gray border-bottom border-light-blue" markdown="1">
          {% t partners_page.section_2.heading_1 %}
        </h2>
        <p class="mb3">
          {% t partners_page.section_2.p_1 %}
        </p>
        <p>
          <a href="{{ '/partners/our-agency-partners/' | relative_url }}" class="btn btn-primary btn-wide mb2">
            {% t partners_page.section_2.p_2.a_1 %}
          </a>
        </p>
      </div>
      <div class="sm-col sm-col-4 px3">
        <h2 class="mt0 mb2 pb2 gray border-bottom border-light-blue" markdown="1">
          {% t partners_page.section_2.heading_2 %}
        </h2>
        <p class="mb3">
          {% t partners_page.section_2.p_3 %}
        </p>
        <p>
          <a href="{{ '/partners/why-login-gov/' | relative_url }}" class="btn btn-primary btn-wide mb2">
            {% t partners_page.section_2.p_4.a_1 %}
          </a>
        </p>
      </div>
      <div class="sm-col sm-col-4 px3">
        <h2 class="mt0 mb2 pb2 gray border-bottom border-light-blue" markdown="1">
          {% t partners_page.section_2.heading_3 %}
        </h2>
        <p class="mb3">
          {% t partners_page.section_2.p_5 %}
        </p>
        <p>
          <a href="{{ '/playbook/implementation/' | relative_url }}" class="btn btn-primary btn-wide mb2">
            {% t partners_page.section_2.p_6.a_1 %}
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
<div class="bg-white">
  <div class="container cntnr-wide px2 py3 center">
    <h3 class="inline align-middle gray border-bottom border-light-blue">{% t partners_page.section_3.heading %}</h3>
  </div>
</div>
<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb2">
    <div class="clearfix mxn3">
      <div class="sm-col sm-col-6 px3">
        <h2 class="mt0 mb2 pb2" markdown="1">
          {% t partners_page.section_4.heading_1 %}
        </h2>
        <p class="mb3">
          {% t partners_page.section_4.p_1 %}
        </p>
      </div>
      <div class="sm-col sm-col-6 px3">
        <h2 class="mt0 mb2 pb2" markdown="1">
          {% t partners_page.section_4.heading_2 %}
        </h2>
        <p class="mb3">
          {% t partners_page.section_4.p_2 %}
        </p>
      </div>
    </div>
  </div>
</div>
<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb2">
    <div class="clearfix mxn3">
      <div class="sm-col sm-col-6 px3">
        <h2 class="mt0 mb2 pb2" markdown="1">
          {% t partners_page.section_4.heading_3 %}
        </h2>
        <p class="mb3">
          {% t partners_page.section_4.p_3 %}
        </p>
      </div>
      <div class="sm-col sm-col-6 px3">
        <h2 class="mt0 mb2 pb2" markdown="1">
          {% t partners_page.section_4.heading_4 %}
        </h2>
        <p class="mb3">
          {% t partners_page.section_4.p_4 %}
        </p>
      </div>
    </div>
  </div>
</div>
<div class="bg-lightest-blue">
  <div class="container cntnr-wide px2 py3 center">
    <h3 class="inline align-middle">{% t partners_page.footer.heading %}</h3>
    <span class="inline-block sm-px1 h1 blue align-middle line-height-1">▸</span>
    <p class="m0 fs-20p inline align-middle" markdown="1">
      {{ site.translations[site.lang]["partners_page"]["footer"]["p_1"] | replace: 'site.baseurl', site.baseurl }}
    </p>
  </div>
</div>