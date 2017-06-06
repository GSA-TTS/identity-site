---
title: Privacy and security
permalink: /policy/
description: Learn more about our security and privacy practices.
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
        <p class="h3">Your privacy is very important to us. We’re providing you with our privacy policy so you are aware of what information we collect, why we collect it, and what we do with it. login.gov does not collect your email address or phone number unless you choose to provide it. We do collect other limited information automatically from visitors who read or browse information from our site. We do this to better understand how the site is being used and how we can make it more helpful.</p>

        <p class="h3">If you create an account, login.gov collects personally identifiable information (PII) from you, including your email address and phone number. We collect your email address and with your consent share it with each federal agency (“partner agency”) at which you are seeking to access information and services. We collect your phone number in order to enable two-factor authentication as a security measure for your login.gov account. Your phone number is only sent to a one-time password service provider, not any of the partner agencies.</p>

        {% for section in site.data.policy %}
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
