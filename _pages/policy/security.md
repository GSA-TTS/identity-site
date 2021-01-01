---
layout: sidenav
title: meta.privacy_security_policy.security.title
description: meta.privacy_security_policy.security.description
permalink: /policy/our-security-practices/
redirect_from: /security/
index: 3
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
