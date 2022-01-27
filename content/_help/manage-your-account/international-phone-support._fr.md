---
layout: help
title: Prise en charge des numéros de téléphone internationaux
category: manage-your-account
permalink: /fr/help/manage-your-account/international-phone-support/
order: 6
scripts:
  - /assets/js/build/country_support.js
---
Utilisez les informations ci-dessous pour déterminer si votre numéro de téléphone international peut être utilisé comme méthode d'authentification à deux facteurs pour recevoir des SMS (messages texte) et/ou des appels téléphoniques. 

En raison de problèmes de messages indésirables ou de modifications apportées par nos fournisseurs de services SMS et vocaux, cette liste peut changer et votre numéro peut ne plus être pris en charge. Parfois, les nouveaux numéros de téléphone ne sont pas non plus pris en charge pour la voix ou les SMS (messages texte).

Nous vous encourageons à configurer plus d'une méthode d'authentification pour éviter le blocage de votre compte si votre numéro de téléphone n'est plus pris en charge.

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