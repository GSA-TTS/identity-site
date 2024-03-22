---
title: 帮助
description: 得到对 Login.gov 常见问题的答案.
layout: help_landing
permalink: /zh/help/
hero: true
redirect_from:
  - /en/help/
---
<div class="container--mod grid-container-tablet-lg tablet-lg:padding-x-0 margin-top-9 padding-bottom-1">
  <ul class="usa-card-group grid-row tablet:flex-align-center usa-list usa-list--unstyled">
    {% for item in site.data[page.lang].settings["help_page"]["categories"] %}
    <li class="card">
      <div class="grid-row flex-row tablet:flex-align-center">
        <div class="grid-col-2">
          <div class="usa-card__img">
            <img alt="" src="{{ item.image | prepend: site.baseurl }}">
          </div>
        </div>
        <div class="grid-col-10 padding-left-1 tablet:padding-left-3">
          <h2 class="margin-bottom-05">
            <a href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a>
          </h2>
          <p class="margin-top-05">{{ item.description }}</p>
        </div>
      </div>
    </li>
    {% endfor %}
  </ul>
</div>
