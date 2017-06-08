---
title: Security
permalink: /security/
description: Learn how login.gov keeps personal information private.
styles:
  - /assets/stylesheets/security.css
class: bg-light-blue
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 py5">
    <img alt="" width="244" class="mt1 mx4 right md-show" src="{{ '/assets/img/vault-door.svg' | prepend: site.baseurl }}">
    <h1 class="mt0 mb1 white">
      {% t security_page.heading %}
    </h1><img alt="" class="mb3" src="{{ '/assets/img/hr-red-3.svg' | relative_url }}">
    <p class="overflow-hidden white fs-20p serif">
      {% t security_page.content.p_1 %}
    </p>
  </div>
</div>

<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb2">
    <div class="clearfix mxn2">
      <div class="col sm-col-4 px2 mb3">
        <img src="{{ site.baseurl }}/assets/img/vault.svg" alt="" width="122">
        <h2 class="mt2 mb2 pb2 blue border-bottom border-light-blue">
          {% t security_page.column_1.heading %}
        </h2>
        <p>
          {{ site.translations[site.lang]["security_page"]["column_1"]["p_1"] | replace: 'site.baseurl', site.baseurl | markdownify}}
        </p> 
      </div>
      <div class="col sm-col-4 px2 mb3">
        <img src="{{ site.baseurl }}/assets/img/safe-deposit.svg" alt="" width="122">
        <h2 class="mt2 mb2 pb2 blue border-bottom border-light-blue">
          {% t security_page.column_2.heading %}
        </h2>
        <p>
          {% t security_page.column_2.p_1 %}
        </p>
        <p>
          {% t security_page.column_2.p_2 %}
        </p>
      </div>
      <div class="col sm-col-4 px2 mb3">
        <img src="{{ site.baseurl }}/assets/img/key.svg" alt="" width="122">
        <h2 class="mt2 mb2 pb2 blue border-bottom border-light-blue">
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
