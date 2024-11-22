---
layout: help
title: Prise en charge des numéros de téléphone étrangers
category: manage-your-account
permalink: /fr/help/manage-your-account/international-phone-support/
order: 7
scripts:
  - /assets/js/country_support.js
---
Utilisez les informations ci-dessous pour déterminer si votre numéro de téléphone international peut recevoir un SMS ou un appel téléphonique pour l’authentification multi-facteurs pour vérifier votre identité.

En raison de problèmes de spam ou de modifications apportées par nos prestataires SMS et vocaux, il est possible que cette liste change et que votre numéro ne soit plus pris en charge. Il arrive que les numéros de téléphone nouveaux ne soient pas en mesure de recevoir des SMS ou des appels téléphoniques.

Nous vous encourageons à configurer plus d'une méthode d'authentification pour éviter que votre compte ne soit bloqué si votre numéro de téléphone n'est plus pris en charge. 

<noscript>
  JavaScript est nécessaire pour charger la liste des pays pris en charge.
</noscript>

{% include country_support_table.html
           heading_country="Pays"
           heading_dialing_code="Indicatif"
           heading_sms="Prise en charge par SMS"
           heading_voice="Prise en charge vocale"
           option_yes="Oui"
           option_no="Non" error_heading="Erreur lors du chargement des données"
           error_heading="Erreur lors du chargement des données"
           error_body="Désolé, une erreur s'est produite lors du chargement de la liste des pays pris en charge. Veuillez réessayer ultérieurement." %}
