---
layout: help
title: Soporte de número de teléfono internacional
category: manage-your-account
order: 5
scripts:
  - /assets/js/build/country_support.js
---

<noscript>
  Necesitamos JavaScript para cargar la lista de países admitidos.
</noscript>

{% include country_support_table.html
           heading_country="País"
           heading_dialing_code="Codigo para marcar"
           heading_sms="Compatible con SMS"
           heading_voice="Admite marcación por voz"
           option_yes="Sí"
           option_no="No" %}
