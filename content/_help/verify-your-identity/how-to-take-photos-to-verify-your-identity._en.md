---
layout: help
title: How to take photos to verify your identity
category: verify-your-identity
permalink: /help/verify-your-identity/how-to-take-photos-to-verify-your-identity/
order: 3
redirect_from:
  - /en/help/verify-your-identity/how-to-take-photos-to-verify-your-identity/
  - /help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
  - /help/verify-your-identity/troubleshoot-uploading-your-state-issued-id/
url_safari: https://www.apple.com/safari/
url_chrome: https://www.google.com/chrome/?brand=WDIF&ds_kid=43700078347700321&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccAvZWVPqrBawjLCJp6uWvrMplezDwWVR7AnWXZhu-4He4V3oXJBOrRoCtTwQAvD_BwE&gclsrc=aw.ds
url_safari_update_doc: https://support.apple.com/en-us/102665
url_safari_clear_cache_doc: https://support.apple.com/en-us/105082
url_chrome_update_doc: https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DAndroid&hl=en&oco=1
url_chrome_clear_cache_doc: https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DAndroid&hl=en&oco=1
---

{% capture alert_link %}
  <a href="/help/verify-your-identity/accepted-identification-documents/" class="usa-link">valid state-issued ID, such as a driver's license or state ID card</a>
{% endcapture %}

{% capture alert_content %}
  If you do not have a {{ alert_link }}, you cannot use Login.gov for identity verification.
  Please contact the partner agency’s help center to find out what you can do instead.
{% endcapture %}

{%
  include alert.html
  content=alert_content
  type='error'
  role='alert'
%}

## Overview

To verify your identity online, you must both:

* Take a photo of your valid driver's license or state ID card, and
* Enter your personal information

You may also need to take a photo of yourself with a phone or tablet to ensure you are the person on your ID. If you don’t have access to a phone or tablet with a camera, you can [verify your identity in person](/help/verify-your-identity/verify-your-identity-in-person/).

This article covers how you can submit images to verify your identity.

---

## How to take photos of your driver’s license or state ID card

If you are using a computer to verify your identity, you will be able to switch to a phone or tablet to take photos of your ID.

### Using your phone or tablet

<div class="grid-row grid-gap margin-bottom-2">
  <div class="tablet:grid-col">
    <img alt="ID front is centered in the camera frame and placed on a dark background." src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-front.png" />
  </div>
  <div class="tablet:grid-col">
    <img alt="ID back is centered in the camera frame and placed on a dark background." src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-back.png" />
  </div>
</div>

* Use a high resolution camera like a smartphone or tablet camera, rather than a webcam.
* Place your ID on a solid, dark background.
* Take your photos in a well-lit area with indirect light.
* Check that ID barcodes are not damaged or dirty.
* Hold your device still while taking the photos. It may help to prop your arms on the table to steady yourself.

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image_alt_text='ID is placed on a white background.'
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      text='Avoid white backgrounds.'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image_alt_text='ID is placed on a textured background.'
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      bordered_image=true
      text="Don't use textured, patterned backgrounds."
    %}
  </div>
</div>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image_alt_text='ID edges are cropped out.'
      image='/assets/img/help/id-dos-and-donts/id-dont-cropped.png'
      bordered_image=true
      text='Take a picture of your entire ID.'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image_alt_text='ID has a glare and shadows cast over it.'
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      text='Avoid glare or shadows.'
    %}
  </div>
</div>

## How to take photos of yourself

Some partner agencies may ask you to take a photo of your face and photos of your driver’s license or state ID card. This checks that you are the person on your ID.

{: .number-list}
1. Take your photo in a well-lit place, while avoiding glare.
2. Make sure your entire face is visible, from your chin to the top of your head. Only wear accessories, like glasses, that you also wear in your ID photo. Remove any other items covering your face.
3. Line up your face with the guidelines. Keep your expression neutral and remain still.
4. Follow the instructions to take a photo. The camera tool may automatically take a photo, or you may need to tap a button to take the photo.
5. Tap the checkmark or follow the instructions to accept the photo.

---

## Troubleshooting

### Ensure the information in your photo is clear
* Make sure your name, address, and other information on your ID can be easily read.
* Avoid bright light or glare that may impede the ID scan.

### Consider verifying your identity in person
* If the information on your ID is not up to date, or if you look very different from your ID photo, verifying your identity online may not work.
* Select the option to [verify your identity in person](/help/verify-your-identity/verify-your-identity-in-person/) and visit a local United States Postal Service location to verify your identity.

### Check your device and browser combination
* iOS phones or tablets should use the [Safari web browser.]({{ page.url_safari }})
* Android phones or tablets should use the [Google Chrome web browser.]({{ page.url_chrome }})

### Update your web browser, or clear your cache and cookies
* If you’re using Safari, you can try [updating the browser]({{ page.url_safari_update_doc }}), or [clear the cache and cookies.]({{ page.url_safari_clear_cache_doc }})
* If you’re using Google Chrome, you can try [updating the browser]({{ page.url_chrome_update_doc }}), or [clear the cache and cookies.]({{ page.url_chrome_clear_cache_doc }})

## Related articles

* [How to verify your identity](/help/verify-your-identity/how-to-verify-your-identity/)
* [Accepted identification documents](/help/verify-your-identity/accepted-identification-documents/)
