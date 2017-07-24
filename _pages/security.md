---
title: titles.security
permalink: /security/
description: meta.description.security
styles:
  - /assets/stylesheets/security.css
class: bg-light-blue
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 flex flex-center flex-justify">
    <div class="sm-col-8 py3 sm-py4">
      <h1 class="mt0 mb1 white">
        {% t security_page.heading %}
      </h1>
      <p class="overflow-hidden mb0 white fs-20p">
        {% t security_page.content.p_1 %}
      </p>
    </div>
    <div class="sm-show sm-col-3 center">
      <img alt="" src="{{ '/assets/img/vault-door.svg' | relative_url }}" style="max-width:80%;">
    </div>
  </div>
</div>

<div class="bg-white">
  <div class="container cntnr-wide px2 pt3 pb2">
    <div class="clearfix mxn2">
      <div class="col sm-col-4 px2 sm-mb3 mb2">
        <img src="{{ site.baseurl }}/assets/img/vault.svg" alt="" height="104">
        <h2 class="mt2 mb2 pb2 gray border-bottom border-light-blue">
          {% t security_page.column_1.heading %}
        </h2>
        <p>
          {{ site.translations[site.lang]["security_page"]["column_1"]["p_1"] | replace: 'site.baseurl', site.baseurl | markdownify}}
        </p> 
      </div>
      <div class="col sm-col-4 px2 sm-mb3 mb2">
        <img src="{{ site.baseurl }}/assets/img/safe-deposit.svg" alt="" height="104">
        <h2 class="mt2 mb2 pb2 gray border-bottom border-light-blue">
          {% t security_page.column_2.heading %}
        </h2>
        <p>
          {% t security_page.column_2.p_1 %}
        </p>
        <p>
          {% t security_page.column_2.p_2 %}
        </p>
      </div>
      <div class="col sm-col-4 px2 sm-mb3 mb2">
        <img src="{{ site.baseurl }}/assets/img/key.svg" alt="" height="104">
        <h2 class="mt2 mb2 pb2 gray border-bottom border-light-blue">
          {% t security_page.column_3.heading %}
        </h2>
        <p>
          {% t security_page.column_3.p_1 %}
        </p>
      </div>
    </div>
  </div>
</div>

<footer>
  <div class="container cntnr-wide serif h5">
    <div class="clearfix mxn1">
      <div class="col sm-col-12 my3">
        <img class="col sm-col-2 py1 pl3" src="{{ site.baseurl }}/assets/img/code.svg" alt="" width="113"/>
        <p class="col sm-col-6 px3 regular py1 m0">
          {% t security_page.footer.p_1 %}
        </p>
        <div class="col sm-col-4 px2 py1 vt-dot-border">
          <div class="ml2">
            <div class='sm-show'>
              <img class="col col-6 mb1" src="{{ site.baseurl }}/assets/img/logo.svg" alt="login.gov">
            </div>
            <p class="col col-12" markdown="1">
              {{ site.translations[site.lang]["security_page"]["footer"]["p_2"] | replace: 'site.baseurl', site.baseurl }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
