---
layout: help
title: Ayuda con un número de teléfono internacional
category: manage-your-account
permalink: /es/help/manage-your-account/international-phone-support/
order: 8
scripts:
  - /assets/js/country_support.js
---

Use esta información para determinar si puede utilizar su número de teléfono internacional como método de autenticación multifactor para recibir mensajes de texto (SMS) o llamadas telefónicas.

Esta lista puede cambiar debido a problemas de correo no deseado o a cambios que hagan nuestros proveedores de mensajes de texto y de llamadas telefónicas, por lo que es posible que su número ya no sea compatible. En ocasiones, los nuevos números de teléfono tampoco son compatibles con los mensajes de texto o las llamadas telefónicas.

Le recomendamos que configure más de un método de autenticación para evitar que se bloquee su cuenta si su número telefónico deja de ser compatible.

<noscript>
  Necesitamos JavaScript para cargar la lista de países admitidos.
</noscript>

{% include country_support_table.html
           heading_country="País"
           heading_dialing_code="Código de marcado"
           heading_sms="Compatible con SMS"
           heading_voice="Compatible con mensajes de voz"
           option_yes="Sí"
           option_no="No"
           error_heading="Error al cargar los datos"
           error_body="Hubo un error al cargar la lista de países admitidos. Inténtelo de nuevo más tarde." %}

## Related articles

* [Cambie el número de teléfono asociado con su cuenta](/es/help/manage-your-account/change-your-phone-number/)
