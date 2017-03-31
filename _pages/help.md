---
title: Help Center
permalink: /help/
class: relative
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 py5">
    <img alt="" width="244" class="mt1 mx4 right md-show" src="{{ '/assets/img/help-center.svg' | relative_url }}">
    <h1 class="mt0 mb1 white">
      {{ page.title }}
    </h1><img alt="hr" class="mb3" src="{{ '/assets/img/hr-red-4.svg' | relative_url }}">
    <div class="overflow-hidden white fs-20p serif">
      <p>
        login.gov offers the public secure and private online access to participating government programs. With one login.gov account, users can sign in to multiple government agencies. The goal: make managing federal benefits, services and applications faster and more secure.
      </p>
      <p>
        The General Services Administration, or GSA, manages login.gov. As a federal agency, GSA’s mission is to make interactions with the government easier and more efficient.
      </p>
    </div>
  </div>
</div>
<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb5">
    <div class="clearfix">
      <nav id="pb-nav--side-cntnr" class="sm-col-right sm-col-3 sm-show">
        <ul id="pb-nav--side" class="list-reset pt2 red nav">
          {% for section in site.data.help %}
            <li class="mb2"><a class="h5 serif" href="#{{section.anchor}}">{{section.section}}</a></li>
          {% endfor %}
        </ul>
      </nav>
      <div class="sm-col sm-col-8">
        {% for section in site.data.help %}
          {% assign _index = forloop.index %}
          {% capture _hr %}/assets/img/hr-red-{{_index}}.svg{% endcapture %}
            <div id="{{ section.anchor }}" class="mb4 pt2">
              <h2 class="mt0 mb1">
              {{ section.section }}
              </h2><img alt="hr" class="mb3" src="{{ _hr | prepend: site.baseurl }}" height="6">
                <ul class="mb3 pb2 bold list-reset list-arrow teal-dots js-smooth-scroll border-bottom border-light-blue">
                  {% for question in section.content %}
                    <li class="mb1"><a href="#{{ question.anchor }}">{{ question.question }}</a></li>
                  {% endfor %}
                </ul>
{% for question in section.content %}
<h3 id="{{ question.anchor }}">{{ question.question }}</h3>
<div markdown="1" class="mb3 pb2 border-bottom border-light-blue h3">
{{ question.content | replace: 'site.baseurl', site.baseurl }}
</div>
{% endfor %}
            </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
