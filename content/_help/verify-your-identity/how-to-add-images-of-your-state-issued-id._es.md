---
layout: help
title: Cómo añadir imágenes de su licencia de conducir o tarjeta de identificación estatal
category: verify-your-identity
permalink: /es/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
redirect_from:
  - /es/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
  - /es/help/verify-your-identity/troubleshoot-uploading-your-state-issued-id/
do_list:
  - Use una cámara de alta resolución, como la de un smartphone o de una tableta. Es posible que la cámara web de su computadora no tome fotografías nítidas.
  - Use un fondo de un solo color oscuro.
  - Tome sus fotografías en un lugar bien iluminado con luz indirecta.
  - Compruebe que los códigos de barras de la identificación no estén dañados ni sucios.
  - Trate de mantener el teléfono fijo mientras toma las fotografías. Para mantener la estabilidad, puede apoyar los brazos en una mesa.
---

{% capture alert_link %}
  <a href="/es/help/verify-your-identity/accepted-state-issued-identification/" class="usa-link">licencia de conducir válida o tarjeta de identificación estatal</a>
{% endcapture %}

{% capture alert_content %}
  <strong>
    Si no tiene un {{ alert_link }} no puede usar Login.gov para verificar su identidad.
  </strong>
  Comuníquese con el centro de ayuda de la agencia asociada para saber lo que puede hacer en ese caso.
{% endcapture %}

{%
  include alert.html
  content=alert_content
  type='error'
  role='alert'
%}

<div class="margin-top-5">
  <span class="usa-tag usa-tag--informative">Recomendado</span>
</div>

<div class="margin-top-2">
  <h2 id="phone-tips" class="margin-0">
    Con un teléfono, tome fotografías del frente y reverso de su identificación
  </h2>
</div>

Si está usando una computadora para verificar su identidad, podrá cambiar a un teléfono para tomar fotografías de su identificación.

### Consejos para tomar fotografías nítidas con un teléfono

<div class="grid-row grid-gap">
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

### Problemas comunes al tomar fotografías de una identificación

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='La identificación está sobre un fondo blanco.'
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      do_dont_text="NO:"
      text='Use un fondo blanco'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='El documento de identidad se coloca sobre un fondo texturizado.'
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      bordered_image=true
      do_dont_text="NO:"
      text='Use fondos con texturas o dibujos'
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
      text='Recorte los bordes de la identificación'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='La identificación tiene reflejos y proyecta sombras.'
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      do_dont_text="EVITE"
      text='Reflejos y sombras'
    %}
  </div>
</div>

---

## Si no tiene acceso a un teléfono con cámara, puede cargar un archivo o usar un escáner.
* Siga los mismos [consejos para tomar fotografías con un teléfono](#phone-tips).
* Guarde cada archivo como JPG o PNG. No puede utilizar un archivo PDF. El nombre de su archivo debe tener una abreviatura después del título (por ejemplo: JohnDoeID_Front.jpg).
* Revise que sus imágenes sean de alta resolución (lo ideal es alrededor de 2025 x 1275 píxeles)
* Las imágenes deben ser en color.

---

## Solución de problemas

La causa del error podría ser un navegador obsoleto. Siga estas instrucciones para actualizar su navegador:

* [Google Chrome](https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=es)
* [Mozilla Firefox](https://support.mozilla.org/es/kb/actualizar-firefox-la-ultima-version?redirectslug=update-firefox-latest-version)
* [Safari](https://support.apple.com/es-mx/HT204416)

No olvide reiniciar su computadora y trate de iniciar sesión de nuevo.

## Borre la memoria caché y las cookies de su navegador

Para solucionar el error, intente borrar la memoria caché y las cookies de su navegador, o los datos que este almacena. Siga estas instrucciones para borrar la memoria caché y las cookies de su navegador:

* [Google Chrome](https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=es-419)
* [Mozilla Firefox](https://support.mozilla.org/es/kb/limpia-la-cache-y-elimina-los-archivos-temporales-)
* [Safari](https://support.apple.com/es-mx/HT201265)

No olvide reiniciar su computadora y trate de iniciar sesión de nuevo.
