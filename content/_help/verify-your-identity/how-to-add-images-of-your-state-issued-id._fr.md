---
layout: help
title: Comment ajouter des photos de votre permis de conduire ou carte d’identité d’un État
category: verify-your-identity
permalink: /fr/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
redirect_from:
  - /fr/help/verify-your-identity/troubleshoot-uploading-your-state-issued-id/
do_list:
  - Assurez-vous d’utiliser une caméra à haute résolution, comme celle d’un smartphone ou d’une tablette. La webcam de votre ordinateur risque en effet de ne pas prendre de photos bien nettes.
  - Utilisez un arrière-plan sombre et uni.
  - Prenez vos photos dans un endroit bien éclairé, avec une lumière indirecte.
  - Vérifiez que les codes-barres des pièces d’identité ne soient ni endommagés, ni sales.
  - Essayez de ne pas bouger votre appareil pendant la prise de photos. Il peut être utile de poser vos bras sur une table pour rester stable.
url_safari: https://www.apple.com/fr/safari/
url_chrome: https://www.google.com/chrome/?brand=WDIF&ds_kid=43700078347700321&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccAvZWVPqrBawjLCJp6uWvrMplezDwWVR7AnWXZhu-4He4V3oXJBOrRoCtTwQAvD_BwE&gclsrc=aw.ds&hl=fr
url_safari_update_doc: https://support.apple.com/fr-ca/HT204416
url_safari_clear_cache_doc: https://support.apple.com/fr-ca/HT201265
url_chrome_update_doc: https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=fr-CA
url_chrome_clear_cache_doc: https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=fr
---

{% capture alert_link %}
  <a href="/fr/help/verify-your-identity/accepted-identification-documents/" class="usa-link">permis de conduire ou de carte d'identité d'un État en cours de validité</a>
{% endcapture %}

{% capture alert_content %}
  <strong>
   Si vous n'avez pas de {{ alert_link }}, vous ne pouvez pas utiliser Login.gov pour confirmer votre identité.
  </strong>
  Veuillez contacter le centre d'assistance de l'organisme partenaire pour découvrir les autres options qui s’offrent à vous.
{% endcapture %}

{%
  include alert.html
  content=alert_content
  type='error'
  role='alert'
%}

## Vue d’ensemble

Vous devez prendre une photo de votre permis de conduire officiel ou carte d’identité d’un État et saisir vos renseignements personnels afin de confirmer votre identité en ligne.

Il est possible que vous deviez prendre une photo de vous-même avec un téléphone afin de confirmer votre identité en ligne. Ceci a pour but de confirmer que vous êtes la personne figurant sur votre pièce d’identité. Si vous n'avez pas de téléphone équipé d'une caméra, vous pouvez [confirmer votre identité en personne.](/fr/help/verify-your-identity/verify-your-identity-in-person/)

Cet article décrit les différentes façons de transmettre des images ou photos pour confirmer votre identité.

---

## Comment prendre des photos de votre permis de conduire ou carte d’identité d’un État

Si vous utilisez un ordinateur pour confirmer votre identité, vous pourrez passer à un téléphone pour prendre des photos de votre pièce d'identité.

### À l’aide de votre téléphone ou tablette

<div class="grid-row grid-gap margin-bottom-2">
  <div class="tablet:grid-col">
    <img alt="Le recto de la pièce d’identité doit être cadré au centre sur un arrière plan foncé." src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-front.png" />
  </div>
  <div class="tablet:grid-col">
    <img alt="Le verso de la pièce d’identité doit être cadré au centre sur un arrière plan foncé." src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-back.png" />
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
      image-alt-text='La pièce d’identité est placée sur un fond blanc.'
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      do_dont_text="NE PAS"
      text='Utiliser un fond blanc'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='La pièce d’identité est placée sur un fond texturé.'
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      bordered_image=true
      do_dont_text="NE PAS"
      text='Utiliser un fond texturé ou à motif'
    %}
  </div>
</div>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='Les bordures de votre pièce d’identité sont recadrés.'
      image='/assets/img/help/id-dos-and-donts/id-dont-cropped.png'
      bordered_image=true
      do_dont_text="NE PAS"
      text="Rogner les bords de votre pièce d’identité"
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='Il y a des reflets et des ombres sur l’image de la pièce d’identité.'
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      do_dont_text="ÉVITER"
      text='Les reflets et les ombres'
    %}
  </div>
</div>

### Comment téléverser des photos si vous n'avez pas accès à un téléphone ou à une tablette avec appareil photo

Si vous n'avez pas accès à un téléphone équipé d'un appareil photo, vous avez peut-être la possibilité de téléverser une photo scannée de votre permis de conduire ou carte d’identité d’un État.

* Suivez les [mêmes conseils pour prendre des photos avec un téléphone](#à-laide-de-votre-téléphone-ou-tablette).
* Enregistrez chaque fichier au format JPG ou PNG. Vous ne pouvez pas utiliser de fichier PDF. Regardez le nom de votre fichier : il devrait contenir une abréviation après le titre (ex : PhotoJeanDupont_recto.jpg).
* Veillez à ce que vos images soient en haute résolution (environ 2 025 x 1 275 pixels).
* Téléversez uniquement des photos en couleur.

---

## Comment ajouter une photo de votre visage pour permettre la vérification de votre identité.

Il est possible qu’on vous demande de prendre des photos de votre permis de conduire ou carte d’identité d’un État, ainsi qu’une photo de votre visage. Ceci a pour but de confirmer que vous êtes la personne figurant sur votre pièce d’identité.

Vous devez utiliser votre téléphone pour prendre des photos de votre visage et de votre pièce d’identité d’un État à l’aide de l’outil de photographie de Login.gov.

### Type d’appareil requis

* Vous devez utiliser un téléphone ou une tablette pour prendre des photos de votre visage et de votre pièce d’identité d’État à l’aide de l’outil de photographie de Login.gov. Il n’est pas possible d’effectuer cette étape sur un ordinateur.
    * Les téléphones ou tablettes équipés d’iOS doivent utiliser le [navigateur Safari.]({{ page.url_safari }})
    * Les téléphones ou tablettes équipés d’Android doivent utiliser le [navigateur Google Chrome.]({{ page.url_chrome }})
* Si vous n’en avez pas, vous pouvez peut-être [confirmer votre identité en personne](/fr/help/verify-your-identity/verify-your-identity-in-person/) dans un bureau du service des postes des États-Unis près de chez vous.

### Avant de vous prendre en photo

* Retirez tous articles ou accessoires vestimentaires susceptibles de cacher votre visage. Nous vous conseillons de retirer vos lunettes ou votre couvre-chef.
* Prenez votre photo dans un endroit bien éclairé.
* Gardez une expression neutre (ne souriez pas).

### Comment utiliser l’outil de photographie

* Placez votre visage à l’intérieur du cercle vert. Veillez à ce que l’ensemble de votre visage soit visible, du menton au sommet de la tête.
* Ne bougez pas pendant que l'outil de photographie prend automatiquement votre photo.
* Cochez la case pour accepter la photo.

---

## Suggestions de dépannage

### Vérifier l’association entre votre appareil et votre navigateur
* Les téléphones ou tablettes équipés d’iOS doivent utiliser le [navigateur Safari.]({{ page.url_safari }})
* Les téléphones ou tablettes équipés d’Android doivent utiliser le [navigateur Google Chrome.]({{ page.url_chrome }})

### Actualiser votre navigateur ou vider le cache et effacer les cookies
* Si vous utilisez Safari, vous pouvez essayer [d’actualiser le navigateur]({{ page.url_safari_update_doc }}) ou [de vider le cache et d’effacer les cookies.]({{ page.url_safari_clear_cache_doc }})
* Si vous utilisez Google Chrome, vous pouvez essayer [d’actualiser le navigateur]({{ page.url_chrome_update_doc }}) ou [de vider le cache et d’effacer les cookies.]({{ page.url_chrome_clear_cache_doc }})
