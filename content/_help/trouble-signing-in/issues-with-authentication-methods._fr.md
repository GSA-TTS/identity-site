---
title: Problèmes liés aux méthodes d’authentification
category: trouble-signing-in
permalink: /fr/help/trouble-signing-in/issues-with-authentication-methods/
order: 3
---

En fonction des méthodes d’authentification que vous avez configurées, vous pourrez peut-être encore accéder à votre compte Login.gov. Une fois que vous avez pu vous connecter, assurez-vous d’avoir configuré plusieurs méthodes d’authentification pour éviter de perdre l’accès à votre compte.

{% capture delete_account_alert_content %}
Si vous ne pouvez pas vous connecter avec votre seule méthode d’authentification, vous devrez supprimer votre compte et en créer un nouveau. Login.gov ne peut pas déverrouiller votre compte pour vous ou vous connecter en votre nom.
{% endcapture %}
{% include alert.html type="warning" class="margin-bottom-4" content=delete_account_alert_content %}

## Le déverrouillage facial ou tactile ne fonctionne pas

À moins que votre appareil et votre navigateur ne prennent en charge la synchronisation avec le nuage, le déverrouillage facial ou tactile ne fonctionne que sur l'appareil et le navigateur où vous l'avez configuré. Vous ne pouvez utiliser le déverrouillage facial ou tactile sur plusieurs appareils que s'ils prennent en charge la synchronisation avec le nuage. Pour plus d'informations, consultez l'article d'aide sur le déverrouillage facial ou tactile.

* Si vous avez configuré le déverrouillage facial ou tactile sur un appareil qui ne prend pas en charge la synchronisation avec le nuage, essayez d'utiliser le même appareil et le même navigateur pour déverrouiller votre compte. Si vous n'y avez plus accès, vous devrez utiliser une autre méthode d'authentification.
* Si vous avez configuré le déverrouillage facial ou tactile sur un appareil connecté à un service en nuage tel qu'iCloud ou votre compte Google, vous pourrez peut-être vous connecter sur n'importe quel autre appareil, à condition qu'il soit également connecté à ce service en nuage.
* Si vous avez configuré le déverrouillage facial ou tactile sur un autre appareil, mais que vous ne voyez pas le déverrouillage facial ou tactile lorsque vous vous connectez à Login.gov, c'est que votre appareil actuel ne prend pas en charge le déverrouillage facial ou tactile. Essayez d'utiliser le même appareil et le même navigateur que ceux que vous avez utilisés pour la configuration.

Nous vous recommandons de configurer d'autres méthodes d'authentification au cas où vous perdriez l'accès à un appareil prenant en charge le déverrouillage facial ou tactile.

## Je ne reçois pas de texte ou d’appel téléphonique

* Si vous avez un téléphone fixe, choisissez de recevoir votre code à usage unique par appel téléphonique plutôt que par message texte. Vous recevrez un message vocal si vous ne pouvez pas répondre à l’appel.
* Si vous avez un téléphone portable, assurez-vous que le mode avion est désactivé.
* Il se peut que votre code ne vous parvienne pas immédiatement. Attendez jusqu’à 10 minutes ou essayez le bouton « Renvoyer le code » pour envoyer à nouveau votre code.
* Assurez-vous que vous n’utilisez pas un numéro de téléphone avec une extension, car Login.gov ne peut pas envoyer de codes à usage unique à des extensions.

{% capture newest_otp_alert_content %}
Seul le code unique le plus récent que vous recevrez fonctionnera. Si vous demandez et recevez plusieurs messages en même temps, il se peut que vous deviez essayer plusieurs codes jusqu’à ce que l’un d’entre eux fonctionne.
{% endcapture %}
{% include alert.html class="margin-bottom-4" content=newest_otp_alert_content %}

## Mon application d'authentification ne fonctionne pas

* Il se peut que l’heure ne soit pas correctement synchronisée entre votre appareil et votre application d’authentification. Assurez-vous que l’heure de votre appareil est correcte en utilisant une page comme [time.gov](https://www.time.gov/).

    * Si vous utilisez Google Authenticator, vous devrez peut-être synchroniser l’heure manuellement. [Suivez les instructions de Google pour synchroniser votre heure.](https://support.google.com/accounts/answer/185834?hl=fr).

## Mon code de sauvegarde ne fonctionne pas

* Assurez-vous d’utiliser un code de sauvegarde que vous n’avez pas encore utilisé. Lorsque vous aurez utilisé les dix codes de sauvegarde, nous vous fournirons une nouvelle liste de codes de sauvegarde.

## Ma clé de sécurité ou mon téléphone ont été perdus ou volés

* Si vous parvenez à retrouver le numéro de téléphone d’origine de votre téléphone, commencez par le faire, puis demandez un code à usage unique. Vous devriez toujours recevoir le code, même si vous utilisez un nouvel appareil et une nouvelle carte SIM.
* Si vous avez perdu votre clé de sécurité, vous devrez utiliser une autre méthode d’authentification ou supprimer votre compte si vous n’avez pas d’autre méthode d’authentification, à moins que vous n’ayez déjà mis en place une sauvegarde.

## Ma carte PIV/CAC ne fonctionne pas
* Il se peut qu’il manque à Login.gov un certificat d’émission pour votre carte. Contactez le service d’assistance de Login.gov pour obtenir de l’aide supplémentaire.

## Articles connexes

* [Authentication options](/fr/help/get-started/authentication-methods/)
