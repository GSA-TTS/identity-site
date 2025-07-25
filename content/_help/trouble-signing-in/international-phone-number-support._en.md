---
layout: help
title: International phone number support
category: trouble-signing-in
permalink: /help/trouble-signing-in/international-phone-number-support/
order: 4
scripts:
  - /assets/js/country_support.js
redirect_from:
  - /help/manage-your-account/international-phone-support/
  - /en/help/manage-your-account/international-phone-support/
---

Use the information below to determine if your international phone number can be used as a two-factor authentication method to receive SMS (text messaging) and/or phone calls.

Due to spam issues, or changes made by our SMS and voice providers, this list can change and your number may no longer be supported. Sometimes new phone numbers are also not supported for voice or SMS (text messaging).

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

## Related articles

* [How do I sign in if I lost my phone or personal key?](/help/trouble-signing-in/how-to-sign-in/)
* [How do I change the phone number associated with my account?](/help/manage-your-account/change-your-phone-number/)
* [I’m receiving security codes I did not request](#)
