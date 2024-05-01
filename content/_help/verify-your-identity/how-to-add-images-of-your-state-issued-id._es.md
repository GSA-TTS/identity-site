---
layout: help
title: Cómo agregar imágenes de su licencia de conducir o tarjeta de identificación estatal
category: verify-your-identity
permalink: /es/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
redirect_from:
  - /es/help/verify-your-identity/troubleshoot-uploading-your-state-issued-id/
do_list:
  - Use una cámara de alta resolución, como la de un smartphone o de una tableta. Es posible que la cámara web de su computadora no tome fotografías nítidas.
  - Use un fondo de un solo color oscuro.
  - Tome sus fotografías en un lugar bien iluminado con luz indirecta.
  - Compruebe que los códigos de barras de la identificación no estén dañados ni sucios.
  - Trate de mantener el dispositivo fijo mientras toma las fotografías. Para mantener la estabilidad, puede apoyar los brazos en una mesa.
url_safari: https://www.apple.com/es/safari/
url_chrome: https://www.google.com/chrome/?brand=WDIF&ds_kid=43700078347700321&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccAvZWVPqrBawjLCJp6uWvrMplezDwWVR7AnWXZhu-4He4V3oXJBOrRoCtTwQAvD_BwE&gclsrc=aw.ds&hl=es
url_safari_update_doc: https://support.apple.com/es-us/102665
url_safari_clear_cache_doc: https://support.apple.com/es-us/105082
url_chrome_update_doc: https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DAndroid&hl=es&oco=1
url_chrome_clear_cache_doc: https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DAndroid&hl=es&oco=1
---

{% capture alert_link %}
  <a href="/es/help/verify-your-identity/accepted-identification-documents/" class="usa-link">licencia de conducir válida o con un documento de identidad estatal</a>
{% endcapture %}

{% capture alert_content %}
  <strong>
    Si no cuenta {{ alert_link }} no puede utilizar Login.gov para verificar su identidad.
  </strong>
  Por favor, comuníquese con el centro de ayuda de la entidad asociada para saber qué puede hacer como alternativa.
{% endcapture %}

{%
  include alert.html
  content=alert_content
  type='error'
  role='alert'
%}

## Información general

Debe tomar una fotografía de su licencia de conducir o tarjeta de identificación estatal, e ingresar su información personal para verificar su identidad en línea.

Es posible que necesite tomarse una fotografía con un teléfono para verificar su identidad en línea. Esto se hace para revisar que usted sea la persona que figura en su identificación. Si no tiene un teléfono con cámara, puede [verificar su identidad en persona](/es/help/verify-your-identity/verify-your-identity-in-person/).

Este artículo describe las distintas maneras de enviar imágenes para verificar su identidad.

---

## Cómo tomar fotografías de su licencia de conducir o tarjeta de identificación estatal

Si está usando una computadora para verificar su identidad, podrá cambiar a un teléfono para tomar fotografías de su identificación.

### Si usa su teléfono o tableta

<div class="grid-row grid-gap margin-bottom-2">
  <div class="tablet:grid-col">
    <img alt="El frente de su identificación está centrado en el marco de la cámara y sobre un fondo de color oscuro." src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-front.png" />
  </div>
  <div class="tablet:grid-col">
    <img alt="El reverso del documento de identidad está centrado en el marco de la cámara y sobre un fondo de color oscuro." src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-back.png" />
  </div>
</div>

{%
  include components/icon-list.html
  items=page.do_list
  size='md'
  icon_color='success'
  icon_shape='check_circle'
%}

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='La identificación está sobre un fondo blanco.'
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      do_dont_text="NO:"
      text='use un fondo de color blanco.'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='El documento de identidad se coloca sobre un fondo texturizado.'
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      bordered_image=true
      do_dont_text="NO:"
      text='use un fondo con textura o con dibujos.'
    %}
  </div>
</div>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='Los bordes del documento de identidad se encuentran recortados.'
      image='/assets/img/help/id-dos-and-donts/id-dont-cropped.png'
      bordered_image=true
      do_dont_text="NO"
      text='recorte los bordes de su identificación.'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='La identificación tiene reflejos y proyecta sombras.'
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      do_dont_text="EVITE"
      text='que se vean reflejos y sombras.'
    %}
  </div>
</div>

### Cómo cargar imágenes si no tiene acceso a un teléfono o tableta con cámara

Si no tiene acceso a un teléfono con cámara, puede cargar una fotografía escaneada de su licencia de conducir o tarjeta de identificación estatal.
* Siga los mismos [consejos para tomar fotografías con un teléfono](#si-usa-su-teléfono-o-tableta).
* Guarde cada archivo como JPG o PNG. No puede utilizar un archivo PDF. El nombre de su archivo debe tener una abreviatura después del título (por ejemplo: JohnDoeID_Front.jpg).
* Revise que sus imágenes sean de alta resolución (lo ideal es alrededor de 2025 x 1275 píxeles).
* Cargue solo imágenes en color.

---

## Cómo agregar una fotografía de su cara para verificar su identidad

Es posible que se le pida que tome fotografías de su licencia de conducir o tarjeta de identificación estatal __y__ una foto de su cara. Esto se hace para revisar que usted sea la persona que figura en su identificación.

Debe usar su teléfono para tomar las fotografías de su cara y de su identificación estatal con la herramienta de la cámara.

### Requisitos del dispositivo

* Debe usar un teléfono o una tableta con cámara para tomar las fotografías de su cara y de su identificación estatal con la herramienta de la cámara. No puede efectuar este paso en un dispositivo de escritorio.
    * Los teléfonos o las tabletas iOS deben usar el [navegador web Safari]({{ page.url_safari }})
    * Los teléfonos o las tabletas Android deben usar el [navegador web Google Chrome]({{ page.url_chrome }})
* Si no tiene un teléfono con cámara, puede [verificar su identidad en persona](/es/help/verify-your-identity/verify-your-identity-in-person/) en una oficina cercana del Servicio Postal de los Estados Unidos.

### Preparación para tomarse su foto

* Quite cualquier prenda o accesorio que pueda cubrirle la cara. Sugerimos que se quite los anteojos o el sombrero.
* Tómese la foto en un lugar bien iluminado.
* Mantenga una expresión neutral (evite sonreír).

### Cómo usar la herramienta de la cámara

* Alinee su cara con el círculo verde. Revise que se vea su rostro completo, desde la barbilla hasta la parte superior de la cabeza.
* Evite moverse mientras la herramienta de la cámara toma su foto automáticamente.
* Toque la marca de verificación para aceptar la fotografía.

---

## Ideas para solucionar problemas

### Verifique su combinación de dispositivo y navegador
* Los teléfonos o las tabletas iOS deben usar el [navegador web Safari]({{ page.url_safari }})
* Los teléfonos o las tabletas Android deben usar el [navegador web Google Chrome]({{ page.url_chrome }})

### Actualice su navegador web o borre la memoria caché y las cookies de este
* Si usa el navegador Safari, intente [actualizarlo]({{ page.url_safari_update_doc }} ) o [borrar la memoria caché y las cookies]({{ page.url_safari_clear_cache_doc }} ) de este.
* Si usa el navegador Google Chrome, intente [actualizarlo]({{ page.url_chrome_update_doc }}) o [borrar la memoria caché y las cookies]({{ page.url_chrome_clear_cache_doc }}) de este.
