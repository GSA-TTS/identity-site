---
layout: help
title: How to add images of your driver’s license or state ID card
category: verify-your-identity
permalink: /help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
redirect_from:
  - /en/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
do_list: 
  - Do use a high resolution camera like a smartphone or tablet camera. Your computer webcam may not take clear photos.
  - Do use a solid, dark background
  - Do take your photos in a well-lit area with indirect light
  - Do check that ID barcodes are not damaged or dirty
  - Do try to hold your phone still while taking the photos. It may help to prop your arms on the table to steady yourself.
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
## Use a phone to take photos of the front and back of your ID

If you are using a computer to verify your identity, you will be able to switch to a phone to take photos of your ID.

### Tips for taking clear photos with a phone

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <img alt="id front with dark background" src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-front.png" />
  </div>
  <div class="tablet:grid-col">
    <img alt="id back with dark background" src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-back.png" />
  </div>
</div>

{%
  include components/icon-list.html
  items=page.do_list
  size='md'
  icon_color='green'
  icon_shape='check_circle'
%}

### Common issues with taking photos of an ID

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='id on white background'
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      fully-bordered-class='usa-image-example__image--bordered'
      do_dont_text="DON'T"
      text='Use a white background'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='id on textured background'
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      fully-bordered-class='usa-image-example__image--bordered'
      do_dont_text="DON'T"
      text='Use textured, patterned backgrounds'
    %}
  </div>
</div>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='id with incorrect cropping'
      image='/assets/img/help/id-dos-and-donts/id-dont-cropped.png'
      fully-bordered-class='usa-image-example__image--bordered'
      do_dont_text="DON'T"
      text='Crop out the edges of your ID'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='id with glare and shadow'
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      do_dont_text="AVOID"
      text='Glares and shadows'
    %}
  </div>
</div>

## If you don’t have access to a phone with a camera, you can upload a file or use a scanner
* Follow the same [tips for taking photos with a phone](#use-a-phone-to-take-photos-of-the-front-and-back-of-your-id)
* Save each file as a JPG or PNG. You cannot use a PDF file. Look at the name of your file and it should have an abbreviation after the title (ex: JohnDoeID_Front.jpg)
* Make sure your images are high-resolution (around 2025 x 1275 pixels is ideal)
* Images should be in color

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