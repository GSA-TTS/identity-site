---
layout: sidenav
title: meta.privacy_security_policy.privacy.title
description: meta.privacy_security_policy.privacy.description
permalink: /policy/our-privacy-act-statement/
redirect_from: /policy/our-privacy-practices/
index: 2
sidenav:
  - name: Our commitment to your privacy and security
    url: /policy/
  - name: How does it work?
    url: /policy/how-does-it-work/
  - name: Our privacy act statement
    url: /policy/our-privacy-act-statement/
  - name: Our security practices
    url: /policy/our-security-practices/
  - name: Messaging terms and conditions
    url: /policy/messaging-terms-and-conditions/    
---

{{ site.translations[site.lang]["policies"]["sections"][page.index]["content"] | replace: "site.baseurl", site.baseurl | markdownify }}
