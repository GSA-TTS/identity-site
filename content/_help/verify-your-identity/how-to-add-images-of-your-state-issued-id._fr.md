---
layout: help
title: Comment ajouter des images de votre permis de conduire ou de votre carte d'identité de l’État
category: verify-your-identity
permalink: /fr/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
redirect_from:
  - /fr/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
  - /fr/help/verify-your-identity/troubleshoot-uploading-your-state-issued-id/
do_list:
  - Utilisez une caméra à haute résolution telle qu'une caméra de téléphone intelligent ou de tablette. La webcaméra de votre ordinateur risque de ne pas prendre de photos claires.
  - Utilisez un fond solide et sombre.
  - Prenez vos photos dans un endroit bien éclairé avec une lumière indirecte.
  - Vérifiez que les codes-barres ne sont pas endommagés ou sales.
  - Essayez de maintenir votre téléphone immobile pendant que vous prenez les photos. Il peut être utile de poser vos bras sur la table pour vous stabiliser.
---

{% capture alert_link %}
  <a href="/fr/help/verify-your-identity/accepted-state-issued-identification/" class="usa-link">permis de conduire valide ou de carte d'identité d'État</a>
{% endcapture %}

{% capture alert_content %}
  <strong>
    Si vous n'avez pas de {{ alert_link }} vous ne pouvez pas utiliser Login.gov pour vérifier votre identité.
  </strong>
  Veuillez contacter le centre d'assistance de l'agence partenaire pour savoir ce que vous pouvez faire à la place.
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
      Utilisez un téléphone pour prendre des photos du recto et du verso de votre pièce d’identité
  </h2>
</div>

Si vous utilisez un ordinateur pour vérifier votre identité, vous pourrez passer à un téléphone pour prendre des photos de votre pièce d'identité.

### Conseils pour prendre des photos claires avec un téléphone

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <img alt="La face de la pièce d'identité est centrée dans le cadre de la caméra et placée sur un fond sombre." src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-front.png" />
  </div>
  <div class="tablet:grid-col">
    <img alt="Le dos de pièce d'identité est centré dans le cadre de la caméra et placé sur un fond sombre." src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-back.png" />
  </div>
</div>

{%
  include components/icon-list.html
  items=page.do_list
  size='md'
  icon_color='success'
  icon_shape='check_circle'
%}

### Problèmes courants liés à la prise de photos d'une pièce d'identité

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text="La pièce d'identité est placée sur un fond blanc."
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      do_dont_text="À NE PAS FAIRE"
      text='Utiliser un fond blanc'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text="La pièce d'identité est placée sur un fond texturé."
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      bordered_image=true
      do_dont_text="À NE PAS FAIRE"
      text='Utiliser des arrière-plans texturés à motifs'
    %}
  </div>
</div>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text="Les bords de la pièce d'identité sont tronqués."
      image='/assets/img/help/id-dos-and-donts/id-dont-cropped.png'
      bordered_image=true
      do_dont_text="À NE PAS FAIRE"
      text="Recadrer les bords de votre pièce d'identité"
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text="Il y a des reflets et des ombres projetées sur la pièce d'identité."
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      do_dont_text="À ÉVITER"
      text='Les reflets et les ombres'
    %}
  </div>
</div>

---

## Si vous n'avez pas accès à un téléphone équipé d'une caméra, vous pouvez téléverser un fichier ou utiliser un scanner

* Suivez les [mêmes conseils pour prendre des photos avec un téléphone](#phone-tips).
* Enregistrez chaque fichier au format JPG ou PNG. Vous ne pouvez pas utiliser un fichier PDF. Regardez le nom de votre fichier et il devrait avoir une abréviation après le titre (ex : JohnDoeID_Front.jpg).
* Veillez à ce que vos images soient en haute résolution (environ 2025 x 1275 pixels).
* Les images doivent être en couleur.

---

## Mettez votre navigateur à jour

Un navigateur obsolète peut être à l'origine de votre erreur. Suivez les instructions ci-dessous pour mettre à jour votre navigateur :

* [Google Chrome](https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=fr-CA)
* [Mozilla Firefox](https://support.mozilla.org/fr/kb/mettre-jour-firefox-derniere-version?redirectslug=update-firefox-latest-version)
* [Safari](https://support.apple.com/fr-ca/HT204416)

Veillez à redémarrer votre ordinateur et à essayer de vous connecter à nouveau.

## Effacez le cache et les cookies de votre navigateur

Essayez de vider le cache et les cookies de votre navigateur, ou les données qu'il stocke, pour résoudre votre erreur. Suivez les instructions ci-dessous pour effacer le cache et les cookies de votre navigateur :

* [Google Chrome](https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=fr)
* [Mozilla Firefox](https://support.mozilla.org/fr/kb/comment-vider-le-cache-de-firefox)
* [Safari](https://support.apple.com/fr-ca/HT201265)

Veillez à redémarrer votre ordinateur et essayez de vous connecter à nouveau.
