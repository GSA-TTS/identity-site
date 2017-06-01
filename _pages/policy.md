---
title: Privacy and security
permalink: /policy/
description: Learn more about our security and privacy practices.
class: relative
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 py3">
    <h1 class="m0 white">
      {% t pages.privacy_policy %}
    </h1>
  </div>
</div>
<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb5">
    <div class="clearfix">
      <nav id="pb-nav--side-cntnr" class="sm-col-right sm-col-3 sm-show">
        <ul id="pb-nav--side" class="list-reset pt2 red nav">
          {% for section in site.translations[site.lang]["policies"] %}
            <li class="mb2"><a class="h5 serif" href="#{{section.anchor}}">{{section.section}}</a></li>
          {% endfor %}
        </ul>
      </nav>
      <div class="sm-col sm-col-8">
        <p class="h3">
          {% t policy_page.content.p_1 %}
        </p>

        <p class="h3">
          {% t policy_page.content.p_2 %}
        </p>

        {% for section in site.translations[site.lang]["policies"] %}
          {% assign _index = forloop.index %}
          {% capture _hr %}/assets/img/hr-red-{{_index}}.svg{% endcapture %}
          <div class="mb4">
            <h2 id="{{ section.anchor }}" class="mt0 mb1 pt2">
            {{ section.section }}
            </h2><img alt="hr" class="mb3" src="{{ _hr | prepend: site.baseurl }}" height="6">
<div markdown="1" class="mb3 pb2 border-bottom border-light-blue h3">
{{ section.content | replace: 'site.baseurl', site.baseurl }}
</div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
