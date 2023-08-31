---
layout: help
title: Cómo insertar imágenes de su licencia de conducir o identificación estatal
category: verify-your-identity
permalink: /es/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
redirect_from:
  - /en/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
do_list: 
  - Es recomendable utilizar una cámara de alta resolución, como la de un smartphone o una tableta. Es probable que la cámara web de tu computadora no pueda obtener fotografías nítidas.
  - Procura realizar las fotografías en una zona bien iluminada y con luz indirecta.
  - Intenta mantener el teléfono firme mientras realizas las fotografías. Puede ser útil apoyar los brazos sobre una mesa para mantener la estabilidad.
---

{% capture alert_link %}
  <a href="/help/verify-your-identity/accepted-state-issued-identification/">valid drivers' license or state ID card</a>
{% endcapture %}

{% capture alert_content %}
  <strong>
    If you do not have a {{ alert_link }} you cannot use Login.gov for identity verification.
  </strong>
  Please contact the partner agency’s help center to find out what you can do instead.
{% endcapture %}

{%
  include alert.html
  content=alert_content
  type='error'
  role='alert'
%}

<span class="usa-tag usa-tag--informative">Recommended</span>
## Con un teléfono, realice fotografías del anverso y reverso de su documento de identidad

Si está utilizando una computadora para verificar su identidad, puede cambiar a un teléfono para realizar fotografías de su documento de identidad.

### Consejos para obtener fotografías nítidas con un teléfono

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <img alt="" src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-front.png" />
  </div>
  <div class="tablet:grid-col">
    <img alt="" src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-back.png" />
  </div>
</div>

{%
  include components/icon-list.html
  items=page.do_list
  size='md'
  icon_color='green'
  icon_shape='check_circle'
%}

### Aspectos habituales al realizar fotografías de un documento de identidad

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text=''
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      do_dont_text="NO"
      text='Utilizar un fondo blanco'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text=''
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
      image-alt-text=''
      image='/assets/img/help/id-dos-and-donts/id-dont-cropped.png'
      bordered_image=true
      do_dont_text="NO"
      text='Recortar los bordes de la identificación'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text=''
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      do_dont_text="EVITE"
      text='Brillos y sombras'
    %}
  </div>
</div>

## Si no tienes acceso a un teléfono con cámara, puedes subir un archivo o utilizar un escáner.
* Sigue los mismos consejos para hacer fotos de tu documento de identidad con una cámara
* Guarda cada archivo como JPG o PNG. No puedes utilizar un archivo PDF. Fíjate en el nombre de tu archivo y debe tener una abreviatura después del título (por ejemplo: JohnDoeID_Front.jpg)
* Asegúrate de que tu documento de identidad ocupa aproximadamente el 80% de las imágenes
* Asegúrate de que tus imágenes son de alta resolución (lo ideal es en torno a 2025 x 1275 píxeles)
* Las imágenes deben ser en color (RGB de 24 bits).

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