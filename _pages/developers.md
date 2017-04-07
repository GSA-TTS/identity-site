---
title: Developers
permalink: /developers/
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
<div class="container cntnr-xskinny px2 pt4 pb5" markdown="1">

<!-- MarkdownTOC depth="1" autolink="true" bracket="round" -->

- [Standards-Based](#standards-based)
- [Tiered Accounts](#tiered-accounts)
- [API Documentation & Guides](#api-documentation--guides)
- [Source Code & Examples](#source-code--examples)

<!-- /MarkdownTOC -->

## Standards-Based

login.gov supports both [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language), and
[OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) (an extension of
[OAuth 2.0](https://tools.ietf.org/html/rfc6749)) using the
[iGov Working Group](https://openid.net/wg/igov/) profile. Using standard
interfaces makes it possible to leverage existing libraries and processes to
quickly get started integrating with login.gov.

## Tiered Accounts

We support two levels of accounts, corresponding to
[NIST 800-63-3](https://pages.nist.gov/800-63-3/) levels of assurance (LOA):

- **LOA1** provides verified email

- **LOA3** can additionally provide verified name, phone, address of record and SSN

LOA3 accounts require additional verification (identity proofing), and enable
trusted interactions online for sensitive data like financial information.

When a user upgrades to an LOA3 account for on government agency, we can re-use
the verification work and speed up the sign-up process for other agencies.

## API Documentation & Guides

Our [login.gov developer documentation](https://pages.18f.gov/identity-dev-docs) site contains
detailed information for both SAML and OpenID Connect implementations, as well as information on how
to register a service provider and get started testing with our integration environment.

Guides:

- [SAML guide](https://pages.18f.gov/identity-dev-docs/saml/)
- [OpenID Connect guide](https://pages.18f.gov/identity-dev-docs/openid-connect/)
- [Registration information](https://pages.18f.gov/identity-dev-docs/register/)

## Source Code & Examples

The [login.gov Identity Provider](https://github.com/18f/identity-idp) is completely open source.
We invite code reviews, pull requests and feature requests to help us improve our product.

### Example Apps

We have example apps to provide a starting point to get working with login.gov in a handful of languages.

#### SAML

- [Java (Spring)](https://github.com/18F/identity-sp-java)
- [Ruby (Sinatra)](https://github.com/18F/identity-sp-sinatra)
- [Ruby (Rails)](https://github.com/18F/identity-sp-rails)
- [Python (Flask)](https://github.com/18F/identity-sp-python)

#### OpenID Connect

- [Ruby (Sinatra)](https://github.com/18F/identity-openidconnect-sinatra)
- [iOS (Swift)](https://github.com/18F/identity-openidconnect-ios-client)

</div>
</div>
