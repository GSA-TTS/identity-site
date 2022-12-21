---
layout: help
title: Soporte de número de teléfono internacional
category: manage-your-account
permalink: /es/help/manage-your-account/international-phone-support/
order: 6
scripts:
  - /assets/js/country_support.js
---
Utilice la siguiente información para determinar si puede utilizar su número de teléfono internacional como método de autenticación de dos factores para recibir SMS (mensajes de texto) o llamadas telefónicas.

Esta lista puede cambiar debido a problemas de spam o a cambios realizados por nuestros proveedores de mensajes de texto y servicios de voz, por lo que su número podría ya no ser compatible. En ocasiones, los nuevos números de teléfono tampoco son compatibles con la voz o los SMS (mensajería de texto).

Le recomendamos que configure más de un método de autenticación para evitar que se bloquee su cuenta si su número telefónico deja de ser compatible.

<noscript>
  Necesitamos JavaScript para cargar la lista de países admitidos.
</noscript>

{% include country_support_table.html
           heading_country="País"
           heading_dialing_code="Codigo para marcar"
           heading_sms="Compatible con SMS"
           heading_voice="Admite marcación por voz"
           option_yes="Sí"
           option_no="No"
           error_heading="No se han podido cargar los datos"
           error_body="Lo sentimos, hubo un error al cargar la lista de países admitidos. Por favor, inténtelo de nuevo más tarde." %}
