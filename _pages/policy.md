---
title: Privacy policy
permalink: /policy/
class: relative
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 py3">
    <h1 class="m0 white">
      {{ page.title }}
    </h1>
  </div>
</div>
<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb5">
    <div class="clearfix">
      <nav id="pb-nav--side-cntnr" class="sm-col-right sm-col-3 sm-show">
        <ul id="pb-nav--side" class="list-reset pt2 red nav">
          {% for section in site.data.policy %}
            <li class="mb2"><a class="h5 serif" href="#{{section.anchor}}">{{section.section}}</a></li>
          {% endfor %}
        </ul>
      </nav>
      <div class="sm-col sm-col-8">
        <p>By using login.gov, you agree that you understand and consent to the following terms of service:</p>
        {% for section in site.data.policy %}
          <div id="{{ section.anchor }}" class="mb4 pt2">
            <h2 class="mt0 mb1">
            {{ section.section }}
            </h2><img alt="hr" class="mb3" src="{{ '/assets/img/hr-red-2.svg' | prepend: site.baseurl }}">
<div markdown="1" class="mb3 pb2 border-bottom border-light-blue h3">
{{ section.content | replace: 'site.baseurl', site.baseurl }}
</div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
