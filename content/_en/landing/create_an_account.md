---
layout: landing
title: Create an account
description: Join the millions of people who trust Login.gov for safe, secure
  access to government agencies.
steps:
  class: create-an-account
  intro: "When you’re ready to create your secure login.gov account, you’ll need
    to provide a few pieces of information:"
  step1: >-
    ## 1. Email address
      * We recommend a personal email address that you’ll always be able to access rather than a work email address.
      * If you already have an account with login.gov with that email address, we’ll send you an email to let you know how you can reset your password and access the account.
  step2: >-
    ## 2. Secure password

    * Passwords must be at least 12 characters and should not include commonly used words or phrases.
  step3: >
    ## 3. One or more [authentication
    methods](/help/authentication-methods/which-authentication-method-should-i-use/)
    such as:


    * **More secure**
       * Security Key
        * Authentication application
        * Federal government employee or military identification (PIV/CAC)
    * **Less secure**
        * SMS/Text messages
        * Backup codes
  info: Depending on the security needs of the agency, you may need to prove your
    identity using a social security number, address, and/or U.S. based
    state-issued identification.
permalink: /create-an-account/
one_account_banner: true
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

<div class="create-an-account">
  <div class="container">
    <div class="grid-row">
      <article class="desktop:grid-col-7">
        <header class="intro">
          {{ site.data[page.lang].settings["create-an-account"]["intro"] | replace_locale_base_url | markdownify }}
        </header>
        <div class="step-1 step list">
          {{ site.data[page.lang].settings["create-an-account"]["step_1"] | replace_locale_base_url | markdownify }}
          <div class="mobile step-1-img"></div>
        </div>
        <div class="step-2 step list">
          {{ site.data[page.lang].settings["create-an-account"]["step_2"] | replace_locale_base_url | markdownify }}
          <div class="mobile step-2-img"></div>
        </div>
        <div class="step-3 step list">
          {{ site.data[page.lang].settings["create-an-account"]["step_3"] | replace_locale_base_url | markdownify }}
          <div class="mobile step-3-img"></div>
        </div>
      </article>
      <div class="sidebar desktop:grid-col-4 desktop:grid-offset-1 desktop-lg:grid-col-3 desktop-lg:grid-offset-2">
        <div class="box">
          {{ site.data[page.lang].settings["create-an-account"]["info"] | replace_locale_base_url | markdownify }}
        </div>
      </div>
    </div>
  </div>
</div>
