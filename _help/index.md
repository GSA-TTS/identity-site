---
title: meta.help.title
layout: main
permalink: /help/
description: meta.help.description
bg_color: bg-blue-mid
## Help page names should also be listed in translations under "help_subpages"
links:
  - name: Creating an account
    url: /help/creating-an-account/do-i-need-a-mobile-phone-to-use-logingov/
    img_url: /assets/img/create-account-light.svg
  - name: Signing in
    url: /help/signing-in/i-cant-remember-where-my-personal-key-is-and-i-dont-have-my-phone-with-me/
    img_url: /assets/img/sign-in-light.svg
  - name: Changing settings
    url: /help/changing-settings/
    img_url: /assets/img/change-settings-light.svg
  - name: Privacy and security
    url: /help/privacy-and-security/can-i-remove-a-saved-password-or-login-information-from-my-browser/
    img_url: /assets/img/privacy-security-light.svg
  - name: Security keys
    url: /help/security-keys/what-is-a-security-key/
  - name: Trusted Traveler Programs
    url: /help/trusted-traveler-programs/
    img_url: /assets/img/app.svg
  - name: USAJobs
    url: /help/usajobs/
    img_url: /assets/img/app.svg
  - name: SAM
    url: /help/sam/
    img_url: /assets/img/app.svg
---


<div class="bg-navy">
  <div class="container cntnr-xxskinny pl2 sm-pl0 py3 sm-py4">
    <h1 class="mt0 mb1 white">{% t meta.help.title %}</h1>
    <p class="mb0 white fs-20p">
      {% t help_page.p_1 %}
    </p>
  </div>
</div>
<div class="bg-blue-mid flex">
  <div class="container cntnr-xxskinny px2 pt2 sm-pt3 col-12">
    <div class="clearfix">
      <ul class="pl0">
      {% for subpage in page.links %}
        {% assign subpage_slug = subpage.name | slugify %}
        {% assign first_subpage = site.help | where_exp: "item", "item.url contains subpage_slug" | where: 'order', 1 | first %}
        <li class="list-style-none mb2">
          <a class="btn btn-inverse btn-primary btn-big btn-outline flex flex-center no-hover-decoration" href="{{ first_subpage.url | prepend: site.baseurl }}">
            <img src="{{ subpage.img_url | prepend: site.baseurl }}" alt="" class="help-ico mr2" />
            <span class="flex-auto serif left-align">{{ site.translations[site.lang]["help_subpages"][subpage_slug] }}</span>
            <span class="svg-wrapper blue">{% include svg/carat-right.svg %}</span>
          </a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>
