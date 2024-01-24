---
layout: partners/faq
permalink: /partners/faq/
title: Frequently Asked Questions (FAQ)
general_section_title: >-
    ## General
logistics_section_title: >-
    ## Logistics
development_section_title: >-
    ## Development
general_accordion:
    -
        id: a-1
        title: What is the benefit of partnering with Login.gov?
        content: >
            <h4 class="accordion-list-headings">For your agency:</h4>

            - Implementation support for your team from integration to launch

            - Technical troubleshooting after launch and user support

            - High availability and uptime

            - Secure two-factor authentication (2FA) backed by a FedRAMP Moderate ATO, which helps your agency meet the President’s “Executive Order on Improving the Nation’s Cybersecurity”

            - Reduced costs through economies of scale across government

            - A platform that stays up to date with current authentication and identity policies and technologies, without additional effort required from your agency

            <h4 class="accordion-list-headings">For your end-users:</h4>

            - One account to access all their websites and applications - eliminating the need to remember multiple passwords and usernames

            - A secure and private authentication experience

            - A simplistic, plain language user experience

            - Simple account management, online help center and responsive user support
    -
        id: a-2
        title: Who has Login.gov partnered with?
        content: >-
            Login.gov has over 30 agency partners. Our product is integrated with over 300 live applications and services including 12 Cabinet level agencies such as the Department of Defense, Department of Homeland Security, and the Department of Energy. 
    -
        id: a-3
        title: How many people have signed up to use Login.gov?
        content: >-
            Over 60 million people have signed up to use Login.gov to date (Q3 of FY2022), with over 135 million sign-ins annually.
    -
        id: a-4
        title: Is Login.gov a federal agency?
        content: >-
            Login.gov is not a standalone federal agency. We are a program of the [General Services Administration](https://www.gsa.gov/) (GSA), an agency of the U.S. federal government. The program is run by the [Technology Transformation Services](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services) (TTS), a group that leads the digital transformation of the federal government by helping agencies build, buy, and share technology that allows them to provide more accessible, efficient, and effective products and services for the American people.
    -
        id: a-5
        title: Does Login.gov partner with state, local, and territory governments?
        content: >-
            Yes, Login.gov partners with state, local, and territory governments. These government entities need simple and secure solutions to help the public access services and resources, and with this partnership, they can leverage Login.gov to create a seamless and secure sign-in experience for the public to access these services and resources. [Learn more about the path to partnership](/partners/state-and-local/){:class="usa-nav_link caret"}
    -
        id: a-6
        title: How do we partner with Login.gov?
        content: >-
            [Contact our Partnerships Team to get started](/partners/business-inquiries/){:class="external-link"}. We’ll work with you to understand and capture your needs and requirements at a high level. Together, we’ll decide whether Login.gov makes sense for your particular agency and use case. If we decide to move forward, the next step is to sign an [Interagency Agreement (IAA)](/partners/get-started/#interagency-agreement-iaa-process). This signals a mutual commitment which allows us to commit further resources to technical discovery and integration and migration planning.
logistics_accordion:
    -
        id: b-1
        title: What is an Interagency Agreement (IAA)?
        content: >-
            An Interagency Agreement (IAA) is a type of contract. Login.gov is a cost-recoverable federal service, which means we must, by law, charge other agencies for our work. Our partnership and financial engagement will be governed by the IAA. 
    -
        id: b-2
        title: Does Login.gov provide authorization?
        content: >-
            Login.gov does not provide authorization. At this time, Login.gov supports authentication and identity verification capabilities. We encourage agencies to take the lead on determining the best strategy for their role management and authorization. 
    -
        id: b-3
        title: What is identity verification (identity proofing)?
        content: >-
            “Identity proofing is the process by which a CSP (credentialing service provider) collects, validates, and verifies information about a person.” <em> - NIST SP 800-63-3, Digital Identity Guidelines</em>

            <p>This is the process Login.gov uses to verify that a user is who they say they are. While many agencies can validate an individual’s identity through an in-person proofing experience, we developed an online application that allows individuals to have their identities verified from their smartphone or computer.</p>
    -
        id: b-4
        title: Can Login.gov authenticate or verify the identity of non-U.S. citizens or non-U.S. immigrants (not a U.S. citizen, U.S. national, lawful permanent resident, or traveling to the United States on an immigrant visa)?
        content: >-
            Non-U.S. citizens and non-U.S. immigrants can authenticate with Login.gov, though select features (e.g., SMS / voice OTP for MFA) may be restricted in certain countries. Check our [International phone number support](/help/manage-your-account/international-phone-support/){:class="external-link"} for a complete list that Login.gov supports for authenticating end-users.
            
            <p>Non-U.S. citizens and non-U.S. immigrants can verify their identity (i.e. “proof”) with Login.gov as long as they have a valid U.S. state-issued ID, Social Security number (SSN), and U.S. address.</p>
    -
        id: b-6
        title: What forms of identification can Login.gov accept for identity proofing?
        content: >-
            At this time, only the following state-issued identification is accepted: 
    
            - Driver’s license from all 50 states, the District of Columbia (DC), and other U.S. territories (American Samoa, Guam, U.S. Virgin Islands, Mariana Islands and Puerto Rico)

            - A non-driver’s license state-issued ID card
              - This is an identity document issued by the state/U.S. territory that asserts identity but does not give driving privileges.

            Users cannot verify their identity on Login.gov without a state-issued ID. We’re currently working to add more ways to verify identity. <a href="https://login.gov/help/verify-your-identity/how-to-verify-your-identity/" class="external-link">Learn more about the requirements for verifying identity</a>
development_accordion:
    -
        id: c-1
        title: Can we have a sandbox?
        content: >-
            Login.gov provides an open sandbox environment to create and test integrations between Login.gov and your applications. In the sandbox environment, we provide a Dashboard where you can manage your test applications. <a href="https://developers.login.gov/testing/#how-to-get-started" class="external-link">Visit the Developer guide to get started with our sandbox</a>.
    -
        id: c-2
        title: What counts as an authentication?
        content: >-
            An authentication is counted every time the user enters their username/password and is successfully redirected back to a given application.
    -
        id: c-3
        title: How do we get our application to production?
        content: >-
            <a href="https://developers.login.gov/production/" class="external-link">Check Production deployment for more details</a>. We deploy changes to our production configuration on Tuesday and Thursday by the close of the business day. If regular deployment is scheduled for a holiday then it will be completed on at alternate day. 
    -
        id: c-4
        title: What do you support-SAML vs. OAuth vs. OpenID?
        content: >-
            We do not support the OpenID Connect “implicit flow” with `client_secret` because it is [not recommended by the OAuth group](https://oauth.net/2/grant-types/implicit/){:class="external-link"} for security reasons. We do support OpenID Connect `private_key_jwt` and PKCE.


            For more info see:

            - <a href="https://developers.login.gov/saml/" class="external-link">SAML developer guide</a>

            - <a href="https://developers.login.gov/oidc/getting-started" class="external-link">OpenID Connect developer guide</a>
    -
        id: c-5
        title: Do we need an approved IAA before we can launch our integration with Login.gov?
        content: >-
            In order to launch your integration with Login.gov, your agency must first complete an IAA. You can test your application during the IAA process. Once testing is complete and the IAA has been executed, Login.gov aims to launch your integration within two weeks. We recommend a grace period between deployment and implementation on your site. [Learn more about our IAA process](/partners/get-started/#iaa-anchor){:class="usa-nav_link caret"}
    -
        id: c-6
        title: Do you integrate with Commercial Off-The-Shelf (COTS) solutions?
        content: >-
            Login.gov supports any platform that uses either the SAML or OpenID Connect (OIDC) protocol.
---
