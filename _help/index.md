---
title: Help
layout: main
permalink: /help/
description: Get answers to common questions about login.gov.
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
---


<div class="bg-navy">
  <div class="container cntnr-xxskinny py2">
    <h1 class="my0 white pl2 sm-pl0">{{ page.title }}</h1>
  </div>
</div>
<div class="bg-blue-mid flex">
  <div class="container cntnr-xxskinny p2 w-100pc">
    <div class="clearfix">
      <h2 class="h4 mb2 sans-serif white regular">Browse common topics</h2>
      <ul class="pl0">
      {% for subpage in page.links %}
        {% assign subpage_slug = subpage.name | slugify %}
        {% assign first_subpage = site.help | where_exp: "item", "item.url contains subpage_slug" | where: 'order', 1 | first %}
        <li class="list-style-none mb2">
          <a class="no-hover-decoration" href="{{ first_subpage.url | prepend: site.baseurl }}">
            <button class="btn btn-inverse btn-primary btn-big btn-outline flex flex-center w-100pc" tabindex="-1">
              <img src="{{ subpage.img_url | prepend: site.baseurl }}" alt="" class="w-60p mr2" />
              <span class="w-100pc left-align">{{ site.translations[site.lang]["help_subpages"][subpage_slug] }}</span>
              <span class="svg-wrapper blue">{% include svg/carat-right.svg %}</span>
            </button>
          </a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>
