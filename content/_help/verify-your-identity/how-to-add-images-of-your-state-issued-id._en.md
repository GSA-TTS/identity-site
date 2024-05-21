---
layout: help
title: How to add images of your driver’s license or state ID card
category: verify-your-identity
permalink: /help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
redirect_from:
  - /en/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
  - /help/verify-your-identity/troubleshoot-uploading-your-state-issued-id/
do_list:
  - Do use a high resolution camera like a smartphone or tablet camera. Your computer webcam may not take clear photos.
  - Do use a solid, dark background.
  - Do take your photos in a well-lit area with indirect light.
  - Do check that ID barcodes are not damaged or dirty.
  - Do try to hold your device still while taking the photos. It may help to prop your arms on the table to steady yourself.
url_safari: https://www.apple.com/safari/
url_chrome: https://www.google.com/chrome/?brand=WDIF&ds_kid=43700078347700321&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccAvZWVPqrBawjLCJp6uWvrMplezDwWVR7AnWXZhu-4He4V3oXJBOrRoCtTwQAvD_BwE&gclsrc=aw.ds
url_safari_update_doc: https://support.apple.com/en-us/102665
url_safari_clear_cache_doc: https://support.apple.com/en-us/105082
url_chrome_update_doc: https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DAndroid&hl=en&oco=1
url_chrome_clear_cache_doc: https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DAndroid&hl=en&oco=1
---

{% capture alert_link %}
  <a href="/help/verify-your-identity/accepted-identification-documents/" class="usa-link">valid driver's license or state ID card</a>
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

## Overview

You must take a photo of your accepted driver’s license or state ID card and enter your personal information to verify your identity online.

You may need to take a photo of yourself with a phone or tablet to verify your identity online. This is to check that you are the person on your ID. If you don’t have a phone or tablet with a camera, you can [verify your identity in person.](/help/verify-your-identity/verify-your-identity-in-person/)

This article will cover the different ways you can submit images to verify your identity.

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
      image-alt-text='ID is placed on a white background.'
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      do_dont_text="DON'T"
      text='Use a white background'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='ID is placed on a textured background.'
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      bordered_image=true
      do_dont_text="DON'T"
      text='Use textured, patterned backgrounds'
    %}
  </div>
</div>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='ID edges are cropped out.'
      image='/assets/img/help/id-dos-and-donts/id-dont-cropped.png'
      bordered_image=true
      do_dont_text="DON'T"
      text='Crop out the edges of your ID'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='ID has a glare and shadows cast over it.'
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      do_dont_text="AVOID"
      text='Glares and shadows'
    %}
  </div>
</div>

### How to upload images if you don’t have access to a phone or tablet with a camera

If you don’t have access to a phone with a camera, you may have the option to upload a photo of your driver’s license or state ID card.

* Follow the same [tips for taking photos with a phone.](#using-your-phone-or-tablet)
* Save each file as a JPG or PNG. You cannot use a PDF file. Look at the name of your file and it should have an abbreviation after the title (ex: JohnDoeID_Front.jpg).
* Make sure your images are high-resolution (around 2025 x 1275 pixels is ideal).
* Upload color images only.

---

## How to add a photo of your face to help verify your ID

You may be asked to take photos of your driver’s license or state ID card __and__ a photo of your face. This is to check that you are the person on your ID.

### Device requirements

* You must use a phone or tablet with a camera to take pictures of both your face and your state ID using Login.gov’s camera tool. You cannot complete this step on a desktop device.
   * iOS phones or tablets should use the [Safari web browser.]({{ page.url_safari }})
   * Android phones or tablets should use the [Google Chrome web browser.]({{ page.url_chrome }})
* If you don’t have a phone or tablet with a camera, you may be able to [verify your identity in person](/help/verify-your-identity/verify-your-identity-in-person/) at a United States Postal Service location near you.

### Prepare for your photo

* Remove any clothing items or accessories that might cover your face. We suggest removing your glasses or hat.
* Take your photo in a well-lit place.
* Keep your expression neutral (avoid smiling).

### How to use the camera tool

* Line up your face with the green circle. Make sure your entire face is visible, starting from your chin to the top of your head.
* Keep still as the camera tool automatically takes your photo.
* Tap the check mark to accept the photo.

---

## Troubleshooting ideas to try

### Check your device and browser combination
* iOS phones or tablets should use the [Safari web browser.]({{ page.url_safari }})
* Android phones or tablets should use the [Google Chrome web browser.]({{ page.url_chrome }})

### Update your web browser, or clear your cache and cookies
* If you’re using Safari, you can try [updating the browser]({{ page.url_safari_update_doc }}), or [clear the cache and cookies.]({{ page.url_safari_clear_cache_doc }})
* If you’re using Google Chrome, you can try [updating the browser]({{ page.url_chrome_update_doc }}), or [clear the cache and cookies.]({{ page.url_chrome_clear_cache_doc }})
