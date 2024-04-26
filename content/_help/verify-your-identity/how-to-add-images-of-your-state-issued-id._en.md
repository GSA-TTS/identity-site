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
  - Do try to hold your phone still while taking the photos. It may help to prop your arms on the table to steady yourself.
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

<div class="margin-top-5">
  <span class="usa-tag usa-tag--informative">Recommended</span>
</div>

<div class="margin-top-2">
  <h2 id="phone-tips" class="margin-0">
    Use a phone to take photos of the front and back of your ID
  </h2>
</div>

If you are using a computer to verify your identity, you will be able to switch to a phone to take photos of your ID.

### Tips for taking clear photos with a phone

<div class="grid-row grid-gap">
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

### Common issues with taking photos of an ID

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

---

## If you don’t have access to a phone with a camera, you can upload a file or use a scanner
* Follow the same [tips for taking photos with a phone](#phone-tips).
* Save each file as a JPG or PNG. You cannot use a PDF file. Look at the name of your file and it should have an abbreviation after the title (ex: JohnDoeID_Front.jpg).
* Make sure your images are high-resolution (around 2025 x 1275 pixels is ideal).
* Images should be in color.

---

## Troubleshooting

An outdated browser might be the cause of your error. Follow the instructions below to update your browser:

* [Google Chrome](https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=en-US)
* [Mozilla Firefox](https://support.mozilla.org/en-US/kb/update-firefox-latest-version)
* [Safari](https://support.apple.com/en-us/HT204416)

Be sure to restart your computer and try signing in again.

## Clear your browser cache and cookies

Try clearing your browser cache and cookies, or the data your browser stores, to resolve your error. Follow the instructions below to clear your browser cache and cookies:

* [Google Chrome](https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en)
* [Mozilla Firefox](https://support.mozilla.org/en-US/kb/how-clear-firefox-cache)
* [Safari](https://support.apple.com/en-us/HT201265)

Be sure to restart your computer and try signing in again.
