---
title: Principles
permalink: /playbook/principles/
description: Explore the principles that have helped us make the best system possible.
class: relative
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 py3 sm-py4">
    <h1 class="m0 white">
      {% t principles_page.heading_1 %}
    </h1>
  </div>
</div>
<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb5">
    <div class="clearfix">
      <nav id="pb-nav--side-cntnr" class="sm-col-right sm-col-4 sm-show">
        <ul id="pb-nav--side" class="list-reset nav">
          {% for p in site.playbook.principles %}
            <li class="border-bottom nav-sidenav-item">
              <a class="p2 block h6" href="#{{p.anchor}}">{{p.text}}</a>
            </li>
          {% endfor %}
        </ul>
      </nav>
      <div class="sm-col sm-col-8 sm-pr5">
        <div class="mb4 pt2" id="users">
          <img alt="" width="126" class="mb3 block" src="{{ '/assets/img/graphic-users.svg' | prepend: site.baseurl }}">
          <h2 class="mt0 mb1">
            {% t principles_page.heading_2 %}
          </h2>
          <img alt="" class="mb2" src="{{ '/assets/img/hr-red-3.svg' | prepend: site.baseurl }}" height="6">
          <ul class="list-reset mb3 serif bold list-checked">
            <li class="mb2 pl3">
              {% t principles_page.ul_1.li_1 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_1.li_2 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_1.li_3 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_1.li_4 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_1.li_5 %}
            </li>
          </ul>
          <div class="mb3 pb2 border-bottom border-light-blue h3"> 
            {{ site.translations[site.lang]["principles_page"]["p_1"] | replace: 'site.baseurl', site.baseurl | markdownify}}
          </div>
        </div>
        <div class="mb4 pt2" id="transparent">
          <img alt="" width="154" class="mb3 block" src="{{ '/assets/img/graphic-venn.svg' | prepend: site.baseurl }}">
          <h2 class="mt0 mb1">
            {% t principles_page.heading_3 %}
          </h2>
          <img alt="" class="mb2" src="{{ '/assets/img/hr-red-4.svg' | prepend: site.baseurl }}" height="6">
          <ul class="list-reset mb3 serif bold list-checked">
            <li class="mb2 pl3">
              {% t principles_page.ul_2.li_1 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_2.li_2 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_2.li_3 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_2.li_4 %}
            </li>
          </ul>
          <div class="mb3 pb2 border-bottom border-light-blue h3">
            {{ site.translations[site.lang]["principles_page"]["p_2"] | replace: 'site.baseurl', site.baseurl | markdownify}}
          </div>
        </div>
        <div class="mb4 pt2" id="flexible">
          <img alt="" width="151" class="mb3 block" src="{{ '/assets/img/graphic-half-circle.svg' | prepend: site.baseurl }}">
          <h2 class="mt0 mb1">
            {% t principles_page.heading_4 %}
          </h2>
          <img alt="" class="mb2" src="{{ '/assets/img/hr-red-5.svg' | prepend: site.baseurl }}" height="6">
          <ul class="list-reset mb3 serif bold list-checked">
            <li class="mb2 pl3">
              {% t principles_page.ul_3.li_1 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_3.li_2 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_3.li_3 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_3.li_4 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_3.li_5 %}
            </li>
          </ul>
          <div class="mb3 pb2 border-bottom border-light-blue h3">
            {{ site.translations[site.lang]["principles_page"]["p_3"] | replace: 'site.baseurl', site.baseurl | markdownify}}
          </div>
        </div>
        <div class="mb4 pt2" id="privacy">
          <img alt="" width="123" class="mb3 block" src="{{ '/assets/img/graphic-locks.svg' | prepend: site.baseurl }}">
          <h2 class="mt0 mb1">
            {% t principles_page.heading_5 %}
          </h2><img alt="" class="mb2" src="{{ '/assets/img/hr-red-6.svg' | prepend: site.baseurl }}" height="6">
          <ul class="list-reset mb3 serif bold list-checked">
            <li class="mb2 pl3">
              {% t principles_page.ul_4.li_1 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_4.li_2 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_4.li_3 %}
            </li>
          </ul>
          <div class="mb3 pb2 border-bottom border-light-blue h3">
            {{ site.translations[site.lang]["principles_page"]["p_4"] | replace: 'site.baseurl', site.baseurl | markdownify}}
          </div>
        </div>
        <div class="mb2 pt2" id="security">
          <img alt="" width="152" class="mb3 block" src="{{ '/assets/img/graphic-hex.svg' | prepend: site.baseurl }}">
          <h2 class="mt0 mb1">
            {% t principles_page.heading_6 %}
          </h2>
          <img alt="" class="mb2" src="{{ '/assets/img/hr-red-7.svg' | prepend: site.baseurl }}" height="6">
          <ul class="list-reset mb3 serif bold list-checked">
            <li class="mb2 pl3">
              {% t principles_page.ul_5.li_1 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_5.li_2 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_5.li_3 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_5.li_4 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_5.li_5 %}
            </li>
            <li class="mb2 pl3">
              {% t principles_page.ul_5.li_6 %}
            </li>
          </ul>
          <div class="mb3 pb2 border-bottom border-light-blue h3">
            {{ site.translations[site.lang]["principles_page"]["p_5"] | replace: 'site.baseurl', site.baseurl | markdownify}}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
