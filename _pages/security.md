---
title: Security
permalink: /security/
styles:
  - /assets/stylesheets/security.css
class: bg-light-blue
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 py5">
    <img alt="" width="244" class="mt1 mx4 right md-show" src="{{ '/assets/img/vault-door.svg' | prepend: site.baseurl }}">
    <h1 class="mt0 mb1 white">
      How login.gov keeps personal information private
    </h1><img alt="" class="mb3" src="{{ '/assets/img/hr-red-3.svg' | relative_url }}">
    <p class="overflow-hidden white fs-20p serif">
      login.gov encrypts the personal information of each user separately, using a unique value generated from each user’s password. Our encryption method works like a safe deposit box in a bank vault. Only the user has the key. Only the user can open the box to reveal the contents. Only the user knows the password, and only the user can decrypt their information.
    </p>
  </div>
</div>

<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb2">
    <div class="clearfix mxn2">
      <div class="col sm-col-4 px2 mb3">
        <img src="{{ site.baseurl }}/assets/img/vault.svg" alt="" width="122">
        <h2 class="mt2 mb2 pb2 blue border-bottom border-light-blue">The vault</h2>
        <p>It's hard to break into the “vault” or database. login.gov implements the latest <a href="https://www.nist.gov/" target="_blank">National Institute of Standards and Technology (NIST)</a> standards for secure authentication and verification. Our plans for ongoing security include regular penetration testing and external security reviews.</p> 
      </div>
      <div class="col sm-col-4 px2 mb3">
        <img src="{{ site.baseurl }}/assets/img/safe-deposit.svg" alt="" width="122">
        <h2 class="mt2 mb2 pb2 blue border-bottom border-light-blue">The safe deposit box</h2>
        <p>Individual accounts get a double layer of security. We require two-factor authentication as well as strong passwords that meet new NIST requirements. Two factor authentication requires that you login with your password and a code that we send to your phone.</p>
        <p>We will evaluate and implement new authentication methods as they become widely available to make sure that login.gov remains accessible and secure.</p>
      </div>
      <div class="col sm-col-4 px2 mb3">
        <img src="{{ site.baseurl }}/assets/img/key.svg" alt="" width="122">
        <h2 class="mt2 mb2 pb2 blue border-bottom border-light-blue">Your personal key</h2>
        <p>Encrypting personal data separately means that login.gov cannot share any information with other government entities without users’ permission. Not even database administrators can decrypt a user’s personal information without the user’s password.</p>
      </div>
    </div>
  </div>
</div>

<footer>
  <div class="container cntnr-wide serif h5">
    <div class="clearfix mxn1">
      <div class="col sm-col-12 my3">
        <img class="col sm-col-2 py1 pl3" src="{{ site.baseurl }}/assets/img/code.svg" alt="" width="113"/>
        <p class="col sm-col-6 px3 regular py1 m0">We welcome external review of our privacy-protection measures. All of our code is available for public inspection in an open-source repository. Our goal: make sure that at every step users know their privacy is being protected by design.</p>
        <div class="col sm-col-4 px2 py1 vt-dot-border">
          <div class="ml2">
            <div class='sm-show'>
              <img class="col col-6 mb1" src="{{ site.baseurl }}/assets/img/logo.svg" alt="login.gov">
            </div>
            <p class="col col-12">For more information, please visit the login.gov <a href="{{site.baseurl}}/help">Help Center</a> or <a href="{{site.baseurl}}/contact">contact us</a>. You can also visit our <a target="_blank" href="https://github.com/18F/identity-idp">open-source repository</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
