---
title: Playbook
permalink: /playbook/
description: Helping developers and technologists in government agencies build usable, secure, and privacy-protecting consumer identity management systems.
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 py5">
    <img alt="" width="231" class="mt1 mx4 right md-show" src="{{ '/assets/img/playbook-landing.svg' | prepend: site.baseurl }}">
    <h1 class="mt0 mb1 white">
      {% t pages.playbook %}
    </h1><img alt="" class="mb3" src="{{ '/assets/img/hr-red-2.svg' | relative_url }}">
    <p class="overflow-hidden white fs-20p serif">
      {% t playbook_page.section_1.p_1 %}
    </p>
  </div>
</div>

<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb5">
    <div class="clearfix mxn3">
      <div class="sm-col sm-col-6 px3">
        <h2 class="mt0 blue">
          {% t playbook_page.section_2.heading_1 %}
        </h2>
        <img alt="" class="mb2" src="{{ '/assets/img/hr-red-3.svg' | relative_url }}" height="6">
        <p class="mb3">
          {% t playbook_page.section_2.p_1 %}
        </p>
        <p>
          <a href="{{ '/playbook/principles/' | relative_url }}" class="btn btn-primary btn-wide mb2">
            {% t playbook_page.section_2.p_2.a_1 %}
          </a>
        </p>
      </div>
      <div class="sm-col sm-col-6 px3">
        <h2 class="mt0 blue">
          {% t playbook_page.section_2.heading_2 %}
        </h2>
        <img alt="" class="mb2" src="{{ '/assets/img/hr-red-4.svg' | relative_url }}" height="6">
        <p class="mb3">
          {% t playbook_page.section_2.p_3 %}
        </p>
        <p>
          <a href="{{ '/playbook/implementation/' | relative_url }}" class="btn btn-primary btn-wide mb2">
            {% t playbook_page.section_2.p_4.a_1 %}
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
