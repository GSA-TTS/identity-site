---
title: meta.playbook.title
permalink: /playbook/
description: meta.playbook.description
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 flex flex-center flex-justify">
    <div class="sm-col-8 py3 sm-py4">
      <h1 class="mt0 mb1 white">
        {% t meta.playbook.title %}
      </h1>
      <p class="mb0 white fs-20p">
        {% t playbook_page.section_1.p_1 %}
      </p>
    </div>
    <div class="sm-show sm-col-3 center">
      <img alt="" src="{{ '/assets/img/playbook-landing.svg' | relative_url }}" style="max-width:80%;">
    </div>
  </div>
</div>

<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb2">
    <div class="clearfix mxn3">
      <div class="sm-col sm-col-6 px3">
        <h2 class="mt0 mb2 pb2 gray border-bottom border-light-blue" markdown="1">
          {% t playbook_page.section_2.heading_1 %}
        </h2>
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
        <h2 class="mt0 mb2 pb2 gray border-bottom border-light-blue" markdown="1">
          {% t playbook_page.section_2.heading_2 %}
        </h2>
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
