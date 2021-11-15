---
layout: help
title: International phone number support
category: manage-your-account
order: 5
scripts:
  - /assets/js/build/country_support.js
---

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
