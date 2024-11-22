---
layout: help
title: International phone number support
category: manage-your-account
permalink: /help/manage-your-account/international-phone-support/
order: 7 
scripts:
  - /assets/js/country_support.js
redirect_from:
  - /en/help/manage-your-account/international-phone-support/
---
Use the information below to determine if your international phone number can receive an SMS/Text or phone call for multi-factor authentication or to verify your identity.

Due to spam issues, or changes made by our SMS/Text or phone call providers, this list can change and your number may no longer be supported. Sometimes new phone numbers are also not supported for SMS/Text or phone call.

We encourage you to set up more than one authentication method to avoid getting locked out of your account if your phone number is no longer supported. 

<noscript>
  We need JavaScript in order to load the list of supported countries.
</noscript>

{% include country_support_table.html
           heading_country="Country"
           heading_dialing_code="Dialing Code"
           heading_sms="Supports SMS"
           heading_voice="Supports Voice"
           option_yes="Yes"
           option_no="No"
           error_heading="Error loading data"
           error_body="Sorry, there was an error loading the list of supported countries. Please try again later." %}
