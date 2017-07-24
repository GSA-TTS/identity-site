---
title: titles.privacy_and_security
permalink: /policy/
description: meta.description.privacy_and_security
class: relative
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 py3 sm-py4">
    <h1 class="m0 white">
      {% t titles.privacy_policy %}
    </h1>
  </div>
</div>
<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb5">
    <div class="clearfix">
      <nav id="pb-nav--side-cntnr" class="sm-col-right sm-col-4 sm-show">
        <ul id="pb-nav--side" class="list-reset nav">
          {% for section in site.translations[site.lang]["policies"] %}
            <li class="border-bottom nav-sidenav-item">
              <a class="p2 block h6" href="#{{section.anchor}}">
                {{section.section}}
              </a>
            </li>
          {% endfor %}
        </ul>
      </nav>
      <div class="sm-col sm-col-8 sm-pr5">
        <p class="h3">
          {% t policy_page.content.p_1 %}
        </p>

        <p class="h3">
          {% t policy_page.content.p_2 %}
        </p>

        {% for section in site.translations[site.lang]["policies"] %}
          {% assign _index = forloop.index %}
          {% capture _hr %}/assets/img/hr-red-{{_index}}.svg{% endcapture %}
          <div class="mb2">
            <h2 id="{{ section.anchor }}" class="mt0 mb1 pt2">
            {{ section.section }}
            </h2><img alt="hr" class="mb2" src="{{ _hr | prepend: site.baseurl }}" height="6">
<div markdown="1" class="pb2 border-bottom border-light-blue h3">
{{ section.content | replace: 'site.baseurl', site.baseurl }}
</div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
