---
layout: help
title: Cómo insertar imágenes de su licencia de conducir o identificación estatal
category: verify-your-identity
permalink: /es/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
redirect_from:
  - /es/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
  - /es/help/verify-your-identity/troubleshoot-uploading-your-state-issued-id/
do_list:
  - Es recomendable utilizar una cámara de alta resolución, como la de un smartphone o una tableta. Es probable que la cámara web de tu computadora no pueda obtener fotografías nítidas.
  - Utiliza un fondo sólido y oscuro.
  - Procura realizar las fotografías en una zona bien iluminada y con luz indirecta.
  - Comprueba que los códigos de barras no estén dañados o sucios.
  - Intenta mantener el teléfono firme mientras realizas las fotografías. Puede ser útil apoyar los brazos sobre una mesa para mantener la estabilidad.
---

{% capture alert_link %}
  <a href="/es/help/verify-your-identity/accepted-state-issued-identification/" class="usa-link">licencia de conducir válida o con un documento de identidad estatal</a>
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

<div class="margin-top-5">
  <span class="usa-tag usa-tag--informative">Recomendado</span>
</div>

<div class="margin-top-2">
  <h2 id="phone-tips" class="margin-0">
      Con un teléfono, realice fotografías del anverso y reverso de su documento de identidad
  </h2>
</div>

Si está utilizando una computadora para verificar su identidad, puede cambiar a un teléfono para realizar fotografías de su documento de identidad.

### Consejos para obtener fotografías nítidas con un teléfono

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <img alt="El frente del documento de identidad está en el centro del marco de la cámara y sobre un fondo de tono oscuro." src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-front.png" />
  </div>
  <div class="tablet:grid-col">
    <img alt="La parte posterior del documento de identidad está en el centro del marco de la cámara y sobre un fondo de tono oscuro." src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-back.png" />
  </div>
</div>

{%
  include components/icon-list.html
  items=page.do_list
  size='md'
  icon_color='success'
  icon_shape='check_circle'
%}

### Aspectos habituales al realizar fotografías de un documento de identidad

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='El documento de identidad se coloca sobre un fondo de color blanco.'
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      do_dont_text="NO"
      text='Utilizar un fondo blanco'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='El documento de identidad se coloca sobre un fondo texturizado.'
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      bordered_image=true
      do_dont_text="NO"
      text='Utilizar fondos con texturas o dibujos'
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
      text='Recortar los bordes de la identificación'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='El documento de identidad presenta reflejos y sombras.'
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      do_dont_text="EVITE"
      text='Brillos y sombras'
    %}
  </div>
</div>

---

## Si no tienes acceso a un teléfono con cámara, puedes subir un archivo o utilizar un escáner.
* Sigue los mismos [consejos para tomar fotografías con un teléfono](#phone-tips).
* Guarda cada archivo como JPG o PNG. No puedes utilizar un archivo PDF. Fíjate en el nombre de tu archivo y debe tener una abreviatura después del título (por ejemplo: JohnDoeID_Front.jpg).
* Asegúrate de que tus imágenes son de alta resolución (lo ideal es en torno a 2025 x 1275 píxeles)
* Las imágenes deben ser en color.

---

## Actualiza tu navegador

La causa del error podría ser un navegador obsoleto. Sigue las siguientes instrucciones para actualizar tu navegador:

* [Google Chrome](https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=es)
* [Mozilla Firefox](https://support.mozilla.org/es/kb/actualizar-firefox-la-ultima-version?redirectslug=update-firefox-latest-version)
* [Safari](https://support.apple.com/es-mx/HT204416)

Asegúrate de reiniciar tu ordenador e intenta iniciar sesión de nuevo.

## Borrar la caché y las cookies del navegador

Para solucionar el error, intenta borrar la caché y las cookies del navegador, o los datos que este almacena. Sigue las siguientes instrucciones para borrar la caché y las cookies del navegador:

* [Google Chrome](https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=es-419)
* [Mozilla Firefox](https://support.mozilla.org/es/kb/limpia-la-cache-y-elimina-los-archivos-temporales-)
* [Safari](https://support.apple.com/es-mx/HT201265)

Asegúrate de reiniciar tu ordenador e intenta iniciar sesión de nuevo.
