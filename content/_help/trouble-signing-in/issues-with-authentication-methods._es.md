---
layout: help
title: Problemas con los métodos de autenticación
category: trouble-signing-in
permalink: /es/help/trouble-signing-in/issues-with-authentication-methods/
order: 3
redirect_from: 
  - /es/help/creating-an-account/no-phone-or-other-authentication-method/
  - /es/help/creating-an-account/phone-didnt-get-a-security-code/
  - /es/help/creating-an-account/why-didnt-i-receive-a-security-code-to-confirm-my-phone/
  - /es/help/signing-in/how-do-i-sign-in-if-i-dont-have-my-authentication-methods/
  - /es/help/signing-in/how-do-i-sign-in-if-i-dont-have-my-phone-or-my-personal-key/
  - /es/help/signing-in/how-do-i-sign-in-if-i-dont-have-my-phone-or-my-phone-number-has-changed/
  - /es/help/signing-in/i-cant-remember-where-my-personal-key-is-and-i-dont-have-my-phone-with-me/
  - /es/help/signing-in/if-i-dont-have-my-phone-with-me-can-i-still-sign-in/
  - /es/help/signing-in/personal-key-not-working/
  - /es/help/signing-in/phone-didnt-get-a-security-code/
  - /es/help/signing-in/phone-or-authentication-methods-not-available/
  - /es/help/signing-in/security-code-not-working/
  - /es/help/signing-in/why-didnt-I-receive-a-reset-password-email-from-logingov/
  - /es/help/signing-in/why-didnt-i-receive-a-security-code/
  - /es/help/signing-in/why-is-my-personal-key-invalid/
  - /es/help/signing-in/why-is-my-security-code-invalid/ 
---

Según los métodos de autenticación que haya configurado, es posible que todavía pueda acceder a su cuenta de Login.gov. Una vez que pueda iniciar sesión, cerciórese de haber configurado más de un método de autenticación para evitar perder el acceso a su cuenta.

{% capture delete_account_alert_content %}
Si no puede iniciar sesión con su único método de autenticación, tendrá que eliminar su cuenta y crear una nueva. Login.gov no puede desbloquear su cuenta ni iniciar sesión por usted.
{% endcapture %}
{% include alert.html type="warning" class="margin-bottom-4" content=delete_account_alert_content %}

## El desbloqueo facial o táctil no funciona

Si su dispositivo y navegador admiten la sincronización en la nube, puede utilizar el desbloqueo facial o táctil en varios dispositivos. De lo contrario, el desbloqueo facial o táctil solo funciona en el mismo dispositivo y navegador donde lo configuró.

* Si configura el desbloqueo facial o táctil en un dispositivo que no admite la sincronización en la nube, intente utilizar el mismo dispositivo y navegador para desbloquear su cuenta. Si ya no tiene acceso a ellos, deberá usar otro método de autenticación.
* Si configuró el desbloqueo facial o táctil en un dispositivo en el que había iniciado sesión en un servicio en la nube, como iCloud o su cuenta de Google, es posible que pueda iniciar sesión en cualquier otro dispositivo siempre que también haya iniciado sesión en ese servicio en la nube.
* Si configura el desbloqueo facial o táctil en otro dispositivo, pero no ve el desbloqueo facial o táctil al iniciar sesión en Login.gov, su dispositivo actual no admite el desbloqueo facial o táctil. Trate de usar el mismo dispositivo y navegador que utilizó para configurarlo.

Le recomendamos que configure otros métodos de autenticación en caso de que pierda el acceso a un dispositivo compatible con el desbloqueo facial o táctil.

## No recibo mensajes de texto ni llamadas telefónicas

* Si tiene un teléfono fijo, elija recibir su código de un solo uso mediante una llamada telefónica en lugar de un mensaje de texto. Recibirá un mensaje de voz si no puede contestar la llamada.
* Si tiene un teléfono móvil, asegúrese de que el modo de avión esté desactivado.
* Es posible que su código no llegue inmediatamente. Espere hasta 10 minutos, o pruebe el botón “Reenviar código” para volver a enviar su código.
* Cerciórese de que no está usando un número de teléfono con extensión, ya que Login.gov no puede enviar códigos de un solo uso a extensiones.

{% capture newest_otp_alert_content %}
Solo funcionará el código de un solo uso más reciente que reciba. Si solicita y recibe varios mensajes al mismo tiempo, es posible que tenga que probar más de un código hasta que uno funcione.
{% endcapture %}
{% include alert.html class="margin-bottom-4" content=newest_otp_alert_content %}

## Mi aplicación de autenticación no funciona

* Puede ser que la hora no esté correctamente sincronizada entre su dispositivo y su aplicación de autenticación. Confirme que la hora de su dispositivo sea la correcta utilizando una página como [time.gov](https://www.time.gov/).

  * Si usa Google Authenticator, es posible que tenga que sincronizar la hora manualmente. [Siga las instrucciones de Google para sincronizar la hora](https://support.google.com/accounts/answer/185834?hl=en).

## Mi código de recuperación no funciona

* Asegúrese de que está usando un código de recuperación que aún no ha utilizado. Cuando utilice los diez códigos de recuperación, le proporcionaremos una lista nueva de códigos.

## Perdí o me robaron la clave de seguridad o el teléfono

* Si puede volver a acceder al número original de su teléfono, hágalo primero y luego solicite un código de un solo uso. Debería recibir el código aunque esté usando un dispositivo y una tarjeta SIM nuevos.
* Si perdió su clave de seguridad, tendrá que utilizar un método de autenticación diferente o eliminar su cuenta si no dispone de otro método de autenticación, a menos que ya haya configurado una copia de seguridad.

## Mi tarjeta PIV o CAC no funciona

* Puede ser que Login.gov no tenga un certificado de emisión para su tarjeta. [Contacte con el servicio de asistencia de Login.gov para obtener más ayuda.](https://login.gov/contact/)

## Otros artículos

* [Métodos de autenticación](/help/get-started/authentication-methods/)