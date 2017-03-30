---
title: Implementation
permalink: /playbook/implementation/
class: relative
---

<div class="bg-navy">
  <div class="container cntnr-wide px2 py3">
    <h1 class="m0 white">
      Implementing an identity management system
    </h1>
  </div>
</div>
<div class="bg-white">
  <div class="container cntnr-wide px2 pt4 pb5">
    <div class="clearfix">
      <nav id="pb-nav--side-cntnr" class="sm-col-right sm-col-3 sm-show">
        <ul id="pb-nav--side" class="list-reset pt2 red nav">
          <li class="mb2"><a class="h5 serif" href="#protecting">What are you protecting?</a></li>
          <li class="mb2"><a class="h5 serif" href="#consumer-identity">What is a consumer identity management system?</a></li>
          <li class="mb2"><a class="h5 serif" href="#implementation">Implementation</a></li>
          <li class="mb2"><a class="h5 serif" href="#resources">Resources</a></li>
        </ul>
      </nav>
      <div class="sm-col sm-col-8 mb2">
        <h2 id="protecting" class="mt0 mb2 pt2">
          What are you protecting?
        </h2>
        <p class="mb4 serif fs-20p">
          It’s worth assessing what you really need before beginning implementation. Not all information requires an identity system to manage access. You can protect the privacy of users and reduce the security risk to your systems by avoiding any unnecessary collection of personally identifiable information — this even includes contact details.
        </p>
        <h3 class="mt0 mb2">
          You might not need to implement an identity system if:
        </h3>
        <ul class="mb3 pl2 ml2 serif teal">
          <li class="mb2">
            <span class="gray">You do not need to have an ongoing relationship with users.</span>
          </li>
          <li class="mb2">
            <span class="gray">Transactions don’t depend upon personal information being accurate.</span>
          </li>
          <li class="mb2">
            <span class="gray">You can rely on other forms of security.</span>
          </li>
        </ul>
        <h4 class="mt0 mb2">
          To answer this, ask
        </h4>
        <ul class="list-reset mb4 list-checked">
          <li class="mb3 pl3">
            <div class="mb1 serif bold">
              What transactions will users need?
            </div>
            <p class="h3">
              Will the transactions be ongoing, as when users bookmark benefits or grant applications to fill out later, then return repeatedly to check the application status? Or will they be a one-time or infrequent, as when people download medical or financial records?
            </p>
          </li>
          <li class="mb3 pl3">
            <div class="mb1 serif bold">
              What kind of information do you need to protect your customers?
            </div>
            <p class="h3">
              Do you need full name and other personal information so that users can access private information? Or do you only need to verify that a user fits in certain categories, such as the veterans category or the senior citizens category?
            </p>
          </li>
          <li class="mb3 pl3">
            <div class="mb1 serif bold">
              What sort of crime might access to this information make possible?
            </div>
            <p class="h3">
              Information that seems innocent on its own might still be valuable to fraudsters and other criminals in combination with other easily accessed information.
            </p>
          </li>
          <li class="mb3 pl3">
            <div class="mb1 serif bold">
              What other means of security are available?
            </div>
            <p class="h3">
              Postal tracking numbers, for example, are not secrets because the package will only be delivered to a specific address. The safety of the delivery rests on the security of the building and the conduct of the delivery person, not on the secrecy of the number itself.
            </p>
          </li>
        </ul>
        <h3 class="mt0 mb2">
          What kinds of resources do you already have to identify customers?
        </h3>
        <p class="mb3 serif fs-20p">
          Your agency may already have mission-specific information and resources that can be used to identify customers. By integrating resources you know and trust, you can increase the reliability of identification.
        </p>
        <h4 class="mt0 mb2">
          To answer this, ask
        </h4>
        <ul class="list-reset mb3 list-checked">
          <li class="mb3 pl3">
            <div class="mb1 serif bold">
              What resources are unique to your agency?
            </div>
            <p class="h3">
              Individuals’ confidential interactions with government agencies can generate a trail of metadata. Used carefully, that metadata can facilitate identity verification based on knowledge of those activities. Other government organizations serve as authoritative repositories of biometric data available for internal use. Some agencies may have physical locations that customers can visit.
            </p>
          </li>
        </ul>
        <h2 id="consumer-identity" class="mt0 mb1 pt2">
          What is a consumer identity management system?
        </h2><img alt="hr" class="mb3" src="{{ '/assets/img/hr-red-5.svg' | prepend: site.baseurl }}" width="60">
        <p class="mb5 serif fs-20p">
          When you’re at home and someone knocks at your door it’s easy enough to decide whether or not to answer. Based on your knowledge of who’s outside, you can decide whether to open the door. Is the person outside a friend? A mail carrier or other expected service provider? A complete stranger? Online, the question of deciding “who’s there” is much harder. Consumer identity management systems make it easier for system administrators to decide whether or not to open the door, and how wide.
        </p>
        <h3 class="mt0 mb1">
          What is an identity?
        </h3>
        <p class="mb3 h3">
          In the world of security, “identity” has a very specific technical meaning that differs from a plain English sense. An “identity” in technical terms is a special kind of record — a bundle of different types of data that together describes only one system user [NIST 800-63-3]. That data can include references to official government records, such as driver’s license numbers and registered birth dates, as well as more mutable data such as email addresses and usernames. Physical attributes such as fingerprints and DNA can also be part of an identity record.
        </p>
        <h3 class="mt0 mb1">
          How does identity and access management work?
        </h3>
        <p class="h3">
          System administrators assign access privileges to each identity record. These privileges authorize certain activities and forbid others. To “open the door” safely, however, administrators need confidence that the users knocking at the door are who they say they are.
        </p>
        <p class="mb3 h3">
          To give the system and its administrators confidence in their identities, users need to prove their identities through an activity called authentication. Users authenticate themselves by presenting evidence linking themselves to records. To do that, users first help the system validate their record — for example, by typing in a username. Then users hand over the evidence — often, passwords or other information only the real person would know.
        </p>
        <h3 class="mt0 mb1">
          What does having an identity record enable?
        </h3>
        <p class="mb3 h3">
          Identity systems don’t just benefit system administrators. Users can do some very handy things with an authenticated digital identity. Here’s a small list:
        </p>
        <ul class="mt0 mb5 ml1 pl1 teal h3">
          <li class="mb2">
            <span class="gray"><span class="bold">Pre-filling online forms with verified information speeds up application processing.</span> There’s less redundant effort, and users don’t need to worry about basic errors.</span>
          </li>
          <li class="mb2">
            <span class="gray"><span class="bold">Authenticated users can access and download data the system holds about them, such as account activity.</span> With a verified legal identity, the user can access very sensitive medical or financial records and even download them.</span>
          </li>
          <li class="mb2">
            <span class="gray"><span class="bold">Identity systems can protect your privacy.</span> If you need to be 21 or older to access a service, you can authorize an identity system to confirm your age without sharing your exact birth date.</span>
          </li>
        </ul>
        <h2 id="implementation" class="mb2 pt2">
          Implementation
        </h2><img alt="hr" class="mb3" src="{{ '/assets/img/hr-red-6.svg' | prepend: site.baseurl }}" width="60">
        <ul class="list-reset mb5 h3">
          <li class="mb2">
            <a href="https://pages.18f.gov/identity-dev-docs/" target="_blank">Please read the developer documentation.</a>
          </li>
        </ul>
        <h2 id="resources" class="mb2 pt2">
          Resources
        </h2><img alt="hr" class="mb3" src="{{ '/assets/img/hr-red-7.svg' | prepend: site.baseurl }}" width="60">
        <ul class="list-reset mb3 h3">
          <li class="mb2">
            <a href="https://pages.nist.gov/800-63-3/" target="_blank">National Institute of Standards in Technology</a> (NIST 800-63-3)
          </li>
          <li class="mb2">
            <a href="https://playbook.cio.gov/#introduction" target="_blank">Digital Services Playbook</a>
          </li>
          <li class="mb2">
            <a href="https://github.com/18F/identity-idp" target="_blank">GitHub repo for login.gov</a>
          </li>
          <li class="mb2">
            <a href="https://en.wikipedia.org/wiki/On_the_Internet,_nobody_knows_you%27re_a_dog" target="_blank">On the Internet, nobody knows you're a dog</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
