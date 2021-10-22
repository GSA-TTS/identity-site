---
layout: help
title: Prise en charge des numéros de téléphone internationaux
category: manage-your-account
order: 4
scripts:
  - /assets/js/build/country_support.js
---

<noscript>
  Nous avons besoin de JavaScript pour charger la liste des pays pris en charge.
</noscript>

{% include country_support_table.html
           heading_country="Pays"
           heading_dialing_code="Indicatif"
           heading_sms="Prend en charge les SMS"
           heading_voice="Prend en charge la numérotation vocale"
           option_yes="Oui"
           option_no="Non" %}
