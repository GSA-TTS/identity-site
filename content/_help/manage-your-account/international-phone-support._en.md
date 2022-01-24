---
layout: help
title: International phone number support
category: manage-your-account
permalink: /help/manage-your-account/international-phone-support/
order: 5
scripts:
  - /assets/js/build/country_support.js
redirect_from:
  - /en/help/manage-your-account/international-phone-support/
---
The content currently reads: Add another layer of security by using one of the options below to receive or generate a secure code. You’ll enter this code after your password the next time you sign in.

<noscript>
  We need JavaScript in order to load the list of supported countries.
</noscript>

{% include country_support_table.html
           heading_country="Country"
           heading_dialing_code="Dialing Code"
           heading_sms="Supports SMS"
           heading_voice="Supports Voice"
           option_yes="Yes"
           option_no="No" %}