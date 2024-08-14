---
layout: help
title: 如何拍照来验证身份
category: verify-your-identity
permalink: /zh/help/verify-your-identity/how-to-take-photos-to-verify-your-identity/
order: 3
redirect_from: 
  - /zh/help/verify-your-identity/troubleshoot-uploading-your-state-issued-id/
  - /zh/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
url_safari: https://www.apple.com/cn/safari/
url_chrome: https://www.google.com/chrome/?brand=WDIF&ds_kid=43700078347700321&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccAvZWVPqrBawjLCJp6uWvrMplezDwWVR7AnWXZhu-4He4V3oXJBOrRoCtTwQAvD_BwE&gclsrc=aw.ds&hl=zh-cn
url_safari_update_doc: https://support.apple.com/zh-cn/102665
url_safari_clear_cache_doc: https://support.apple.com/zh-cn/105082
url_chrome_update_doc: https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=zh-Hans
url_chrome_clear_cache_doc: https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DAndroid&oco=1&hl=zh-Hans
---

{% capture alert_link %}<a href="/zh/help/verify-your-identity/accepted-identification-documents/">有效驾照或州颁发的身份证件</a>{% endcapture %}

{% capture alert_content %}
  <strong>
    如果你没有{{ alert_link }}就不能用 Login.gov 进行身份验证。
  </strong>
  请联系我们合作机构的帮助中心来了解你该怎么办。
{% endcapture %}

{%
  include alert.html
  content=alert_content
  type='error'
  role='alert'
%}

## 概述

要在网上验证身份，您必须同时完成以下操作：
 
* 拍一张您有效的驾驶执照或州身份卡的照片，并且
* 输入您的个人信息

您可能还需要使用手机或平板电脑拍张自己的照片，以显示您就是身份证件上的人。如果您没有带相机的手机或平板电脑，您可以亲身去验证身份。

本文介绍了您如何提交图像来验证身份。

---

## 如何拍摄您驾照或州身份卡的照片

如果您使用电脑来验证身份，则可以切换到手机或平板电脑来拍摄您的身份证件。

### 使用您的手机或平板电脑

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <img alt="身份证件正面处于取景框中间而且置放在暗色背景中。" src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-front.png" />
  </div>
  <div class="tablet:grid-col">
    <img alt="身份证件背面处于取景框中间而且置放在暗色背景中。" src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-back.png" />
  </div>
</div>

* 请使用高分辨率相机（如智能手机或平板电脑的相机），而不是网络摄像头。
* 将您的身份证件放在纯色、深色背景上。
* 在有间接光线的明亮的地方拍照。
* 检查身份证件条形码是否有损坏或脏污。
* 拍照时请把设备拿稳。将手臂撑在桌子上以保持身体稳定可能会有所帮助。

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='身份证件是放在白色背景中的。'
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      text='避免使用白色背景。'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='身份证件是放在有纹路或图案的背景中的。'
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      bordered_image=true
      text='不要使用有纹理、有图案的背景。'
    %}
  </div>
</div>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='裁掉你身份证件的四边。'
      image='/assets/img/help/id-dos-and-donts/id-dont-cropped.png'
      bordered_image=true
      text='拍摄您的整个身份证件。'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='身份证件上有炫光和阴影。'
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      text='避免眩光或阴影。'
    %}
  </div>
</div>

### 上传您身份证件的现有图像

如果您已经有驾照或州身份卡的照片，您可以将其上传，无需拍摄新照片。如果您还必须添加自己面部照片，则没有此选项。

如果您没有相机，可能能去附近的美国邮局去亲身验证身份。

* [遵循使用手机拍照的相同提示。](#using-your-phone-or-tablet)
* 文件只能保存为分辨率为 2025 x 1275 像素的 JPG 或 PNG文档。要知道您照片的文件类型和分辨率，请查看照片名称后的扩展名，例如 .jpg 或 .png。或者使用电脑，右键点击文件，然后点击“获取信息”（macOS）或“属性”（Windows）。
* 请只上传彩色照片。

---

## 如何拍摄自己的照片

Login.gov的一些合作伙伴机构可能会要求您拍摄自己的面部照片以及驾照或州身份卡的照片。这是为了查看您是身份证件上的人。

### 设备要求

* 您必须使用带相机的手机或平板电脑以及 Login.gov 的相机工具来拍摄自己面部和州身份证件的照片。您无法在桌面电脑上完成这一步。
* 如果您没有带相机的手机或平板电脑，可能能去附近的美国邮局去亲身验证身份。

### 准备拍照

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='戴着太阳镜的一个人。面部有任何遮盖物都会导致照片失败。'
      image='/assets/img/help/preparing-to-take-your-photo/selfie-accessories-remove.png'
      text='只配戴您在身份证件照片中也配戴的用品，例如眼镜或帽子。摘掉可能遮挡您面部的其他配饰。'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='人脸上有太多光或炫光，所以照片失败。'
      image='/assets/img/help/preparing-to-take-your-photo/selfie-avoid-glare.png'
      text='在光线明亮的地方给自己拍照，避免眩光。'
    %}
  </div>
</div>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='人脸模糊，因而照片失败。'
      image='/assets/img/help/preparing-to-take-your-photo/selfie-avoid-blurry.png'
      text='保持静止以避免图像模糊。'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='人脸在中央绿色圆圈外，所以照片失败。'
      image='/assets/img/help/preparing-to-take-your-photo/selfie-fill-green-oval.png'
      text='确保您的面部填满整个绿色椭圆圈。'
    %}
  </div>
</div>

### 给您自己拍照
<div class="grid-row grid-gap margin-bottom-2">
  <div class="tablet:grid-col">
    <img alt="人脸在绿色椭圆中手指点击面孔下的勾选标记来确认照片。" src="{{ site.baseurl }}/assets/img/help/preparing-to-take-your-photo/selfie-do-checkmark.png" />
  </div>
</div>

相机将自动拍摄您的照片。点击绿色打勾标记进行确认。

1. 将您的面部与绿色圆圈对齐。确保您整个面部 - 从下巴到头顶 - 都可以看见。
2. 点击打勾标记来接受照片。
3. 如果相机工具没有自动拍摄您的照片，请调整您的面部以使其填满绿色圆圈，然后点击红色圆圈进行拍照。

---

## 故障排除

### 确保您照片中的信息清晰
* 确保您的姓名、地址和身份证件上的其他信息可被轻松读取。
* 避免强光或眩光，因为这可能会妨碍身份证件扫描。

### 考虑亲身去验证您的身份
* 如果您身份证件上的信息不是最新的，或者您看起来与身份证件上的照片非常不同，您可能无法成功在网上验证身份。
* [选择亲身验证身份的选项](/zh/help/verify-your-identity/verify-your-identity-in-person/)，并前往当地的美国邮局去验证您的身份。

### 更新你的浏览器，或者清除缓存以及魔饼（cookie)
* 如果你在使用Safari，可以尝试[更新浏览器]({{ page.url_safari_update_doc }})，或者[清除缓存和魔饼。]({{ page.url_safari_clear_cache_doc }})
* 如果你在使用Google Chrome，可以尝试[更新浏览器]({{ page.url_chrome_update_doc }})，或者[清除缓存和魔饼。]({{ page.url_chrome_clear_cache_doc }})
