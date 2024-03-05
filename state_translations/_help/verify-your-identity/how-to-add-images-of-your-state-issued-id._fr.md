---
layout: help
title: Comment ajouter des images de votre permis de conduire ou de votre carte d’identité category: verify-your-identity
permalink: /fr/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
redirect_from:
  - /en/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
  - /help/verify-your-identity/troubleshoot-uploading-your-state-issued-id/
do_list:
  - Assurez-vous d’utiliser une caméra à haute résolution, comme celle d’un smartphone ou d’une tablette. La webcam de votre ordinateur risque en effet de ne pas prendre de photos bien nettes.
  - Utilisez un arrière-plan sombre et uni.
  - Prenez vos photos dans un endroit bien éclairé, avec une lumière indirecte.
  - Vérifiez que les codes-barres des pièces d’identité ne soient ni endommagés, ni sales.
  - Essayez de ne pas bouger votre téléphone pendant la prise des photos. Il peut être utile de poser vos bras sur une table pour rester stable.
---


{% capture alert\_link %}
  <a href="/help/verify-your-identity/accepted-state-issued-identification/">permis de conduire ou carte d'identité en cours de validité</a>
{% endcapture %}

{% capture alert\_content %}
  <strong> Si vous n’avez pas de {{ alert\_link }}, vous ne pouvez pas utiliser Login.gov à des fins de vérification d’identité.
  </strong>
  Veuillez contacter le centre d'assistance de l'organisme partenaire pour découvrir les autres options qui s’offrent à vous.
{% endcapture %}


{%
  include alert.html
  content=alert_content
  type='error'
  role='alert'
%}

<div class="margin-top-5">
  <span class="usa-tag usa-tag--informative">Recommandation</span>
</div>
<div class="margin-top-2">
  <h2 id="phone-tips" class="margin-0">
    Utiliser un téléphone pour photographier le recto et le verso de votre pièce d’identité
  </h2>
</div>

Si vous utilisez un ordinateur pour vérifier votre identité, vous pourrez passer à un téléphone pour prendre des photos de votre pièce d'identité.

### Conseils pour prendre des photos nettes avec un téléphone

<div class="grid-row grid-gap">
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
  icon_color='green'
  icon_shape='check_circle'
%}

### Problèmes courants liés à la prise de photos d'une pièce d'identité

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='La pièce d’identité est placée sur un fond blanc.'
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      do_dont_text="NE PAS"
      text='Utiliser de fond blanc'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='La pièce d’identité est placée sur un fond texturé.'
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      bordered_image=true
      do_dont_text="NE PAS"
      text='Utiliser de fond texturé ou à motif'
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
      text='Recadrer les bords de votre pièce d’identité'
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
---

## Si vous n'avez pas accès à un téléphone équipé d'une caméra, vous pouvez télécharger un fichier ou utiliser un scanner

* Suivez les mêmes [conseils pour prendre des photos avec un téléphone](#phone-tips).
* Enregistrez chaque fichier au format JPG ou PNG. Vous ne pouvez pas utiliser de fichier PDF. Regardez le nom de votre fichier : il devrait contenir une abréviation après le titre (p. ex. PhotoJeanDupont\_recto.jpg).
* Veillez à ce que vos images soient en haute résolution (environ 2 025 x 1 275 pixels).
* Les images doivent être en couleur.

---

## Dépannage

Un navigateur obsolète peut être à l'origine de l’erreur. Suivez les instructions ci-dessous pour mettre à jour votre navigateur :

* [Google Chrome](https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=en-US)
* [Mozilla Firefox](https://support.mozilla.org/en-US/kb/update-firefox-latest-version)
* [Safari](https://support.apple.com/en-us/HT204416)

Veillez à redémarrer votre ordinateur, puis essayez de vous reconnecter.

## Effacez la mémoire cache et les cookies de votre navigateur

Essayez d’effacer la mémoire cache et les cookies de votre navigateur ou les données qu'il stocke pour résoudre l’erreur. Suivez les instructions ci-dessous pour effacer le cache et les cookies de votre navigateur :

* [Google Chrome](https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en)
* [Mozilla Firefox](https://support.mozilla.org/en-US/kb/how-clear-firefox-cache)
* [Safari](https://support.apple.com/en-us/HT201265)

Veillez à redémarrer votre ordinateur, puis essayez de vous reconnecter.