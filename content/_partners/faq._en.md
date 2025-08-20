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
        title: Who has Login.gov partnered with?
        content: >-
            Login.gov has over 50 partners including federal, state, and local government agencies. Our product is integrated with over 500 applications.
    -
        id: a-2
        title: How many people have signed up to use Login.gov?
        content: >-
            As of October 2024, Login.gov has over 100 million user accounts with more than 300 million sign-ins annually.
    -
        id: a-3
        title: Is Login.gov a federal agency?
        content: >-
            Login.gov is not a standalone federal agency. We are a program of the [General Services Administration](https://www.gsa.gov/) (GSA), an agency of the U.S. federal government. The program is run by the [Technology Transformation Services](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services) (TTS), a group that leads the digital transformation of the federal government by helping agencies build, buy, and share technology that allows them to provide more accessible, efficient, and effective products and services for the American people.
    -
        id: a-4
        title: Does Login.gov partner with state, local, and territory governments?
        content: >-
            Yes, Login.gov partners with state, local, and territory governments. These government entities need simple and secure solutions to help the public access services and resources, and with this partnership, they can leverage Login.gov to create a seamless and secure sign-in experience for the public to access these services and resources. [Learn more about the path to partnership](/partners/state-and-local/){:class="usa-nav_link caret"}
    -
        id: a-5
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
            Non-U.S. citizens and non-U.S. immigrants can authenticate with Login.gov, though select features (e.g., SMS / voice OTC for MFA) may be restricted in certain countries. Check our [International phone number support](/help/trouble-signing-in/international-phone-number-support/){:class="external-link"} for a complete list that Login.gov supports for authenticating end-users.
            
            <p>Non-U.S. citizens and non-U.S. immigrants can verify their identity (i.e., “proof”) with Login.gov as long as they have a valid U.S. state-issued ID, Social Security number (SSN), and U.S. address.</p>
    -
        id: b-6
        title: What forms of identification can Login.gov accept for identity proofing?
        content: >-
            At this time, only the following state-issued identification is accepted: 
    
            - Driver’s license from all 50 states, the District of Columbia (DC), and other U.S. territories (American Samoa, Guam, U.S. Virgin Islands, Mariana Islands and Puerto Rico)

            - A non-driver’s license state-issued ID card
              - This is an identity document issued by the state/U.S. territory that asserts identity but does not give driving privileges.

            Users cannot verify their identity on Login.gov without a state-issued ID. We’re currently working to add more ways to verify identity. <a href="https://login.gov/help/verify-your-identity/overview/" class="external-link">Learn more about the requirements for verifying identity</a>
development_accordion:
    -
        id: c-1
        title: Can we have a sandbox?
        content: >-
            Login.gov provides an open sandbox environment to create and test integrations between Login.gov and your applications. In the sandbox environment, we provide a Dashboard where you can manage your test applications. <a href="https://developers.login.gov/testing/#getting-access-to-the-logingov-sandbox" class="external-link">Visit the Developer guide to get started with our sandbox</a>.
    -
        id: c-2
        title: What counts as an authentication?
        content: >-
            An authentication is counted every time the user enters their username/password and is successfully redirected back to a given application.
    -
        id: c-3
        title: How do we get our application to production?
        content: >-
            <a href="https://developers.login.gov/production/" class="external-link">Check Production deployment for more details</a>. We deploy changes to our production configuration on Tuesday and Thursday by the close of the business day. If regular deployment is scheduled for a holiday then it will be completed on an alternate day. 
    -
        id: c-4
        title: What do you support-SAML vs. OAuth vs. OpenID?
        content: >-
            We do not support the OpenID Connect “implicit flow” with `client_secret` because it is [not recommended by the OAuth group](https://oauth.net/2/grant-types/implicit/){:class="external-link"} for security reasons. We do support OpenID Connect `private_key_jwt` and PKCE.


            For more info see:

            - <a href="https://developers.login.gov/saml/getting-started/" class="external-link">SAML developer guide</a>

            - <a href="https://developers.login.gov/oidc/getting-started/" class="external-link">OpenID Connect developer guide</a>
    -
        id: c-5
        title: Do we need an approved IAA before we can launch our integration with Login.gov?
        content: >-
            In order to launch your integration with Login.gov, your agency must first complete an IAA. You can test your application during the IAA process. Once testing is complete and the IAA has been executed, Login.gov aims to launch your integration within two weeks. We recommend a grace period between deployment of your Login.gov configuration and implementation on your site. [Learn more about our IAA process](/partners/get-started/#iaa-anchor){:class="usa-nav_link caret"}
    -
        id: c-6
        title: Do you integrate with Commercial Off-The-Shelf (COTS) solutions?
        content: >-
            Login.gov supports any platform that uses either the SAML or OpenID Connect (OIDC) protocol.
    -
        id: c-7
        title: Can a partner application limit the types of MFA available?
        content: >-
            Yes, partners can configure an app to restrict MFA using one of these options: 

            - Users can choose any MFA option supported by Login.gov;

            - Users must sign in with a phishing-resistant MFA option. Login.gov supports the following phishing-resistant options: Face/touch unlock, security key (such as yubikeys), and PIV/CAC cards; or

            - Users must sign in with a PIV/CAC card.


            The default setting can be configured per application on the partner dashboard, and it can be overridden on a per-request basis.



            To override the default setting, or to set it within the authentication request, please refer to our developer documentation, under the "Authentication Assurance (AAL) Values" dropdown.



            For OIDC: <a href="https://developers.login.gov/oidc/authorization/" class="external-link">https://developers.login.gov/oidc/authorization/</a>

            For SAML: <a href="https://developers.login.gov/saml/authentication/" class="external-link">https://developers.login.gov/saml/authentication/</a>
    -
        id: c-8
        title: How does Login.gov help with agencies’ “Zero Trust” strategy?
        content: >-
            Login.gov can help agencies implement specific controls described in <a href="https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf" class="external-link">OMB M-22-09</a>, which provides guidance on the “Zero-Trust” Executive Order. According to that memo, agencies must use strong MFA throughout their enterprise:

            - MFA must be enforced at the application layer, instead of the network layer.

            - Phishing-resistant MFA is required for agency staff, contractors, and partners.

            - For public users, phishing-resistant MFA must be an option.

            - Password policies must not require use of special characters or regular rotation.


            Login.gov’s implementation supports these needs in the following ways:

            - For agency applications: Login.gov supports an authentication request that requires a user to authenticate with a phishing-resistant MFA supported by Login.gov–such as face/touch unlock, security key, or PIV/CAC card.

            - For public applications: By default, Login.gov provides phishing-resistant MFA as an option.

            - Login.gov password policies meet the latest guidelines as per NIST 800-63B 5.1.1.2, including the requirements mentioned in OMB M-22-09.
---
