---
layout: help
title: 如何添加你驾照或州颁发身份证件的图片
category: verify-your-identity
permalink: /zh/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
do_list: 
  - 请使用高分辨率相机，比如像智能手机或平板电脑的相机。电脑上的网络摄像头不见得能拍出清晰照片。
  - 请使用纯深色背景。
  - 请在一个光线间接照射的明亮地方拍照。
  - 请查看身份证件上的条形码是否无损并干净。
  - 拍照时请把手机拿稳。把胳膊支在桌面可能有助于自己的稳定。
url_safari: https://www.apple.com/cn/safari/
url_chrome: https://www.google.com/chrome/?brand=WDIF&ds_kid=43700078347700321&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccAvZWVPqrBawjLCJp6uWvrMplezDwWVR7AnWXZhu-4He4V3oXJBOrRoCtTwQAvD_BwE&gclsrc=aw.ds&hl=zh-cn
url_safari_update_doc: https://support.apple.com/zh-cn/102665
url_safari_clear_cache_doc: https://support.apple.com/zh-cn/105082
url_chrome_update_doc: https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=zh-Hans
url_chrome_clear_cache_doc: https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DAndroid&oco=1&hl=zh-Hans
---

{% capture alert_link %}
  <a href="/zh/help/verify-your-identity/accepted-identification-documents/">有效驾照或州政府颁发的身份证件</a>
{% endcapture %}

{% capture alert_content %}
  <strong>
    如果你没有 {{ alert_link }} 就不能用 Login.gov 进行身份验证。
  </strong>
  请联系我们合作机构的帮助中心来了解你该怎么办。
{% endcapture %}

{%
  include alert.html
  content=alert_content
  type='error'
  role='alert'
%}
## 综述
要在网上验证身份，你必须拍一张我们接受的驾照或州颁发的身份证件的照片，并输入你的个人信息。

要在网上验证身份，你可能需要用手机拍一张你本人的照片。这是为了查看你是身份证件上的人。如果你没有带相机的手机，可以[亲身验证身份。](/zh/help/verify-your-identity/verify-your-identity-in-person/)

本文讲述你验证身份时提交图片的不同方法。

---

## 如何拍摄你驾照或州颁发身份证件的照片
如果你在使用电脑验证身份，可以切换到用手机拍摄自己身份证件的照片。

### 使用你的手机或平板电脑

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <img alt="身份证件正面处于取景框中间而且置放在暗色背景中。" src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-front.png" />
  </div>
  <div class="tablet:grid-col">
    <img alt="身份证件背面处于取景框中间而且置放在暗色背景中。" src="{{ site.baseurl }}/assets/img/help/id-dos-and-donts/id-do-back.png" />
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
      image-alt-text='身份证件是放在白色背景中的。'
      image='/assets/img/help/id-dos-and-donts/id-dont-white-background.png'
      bordered_image=true
      do_dont_text="别"
      text='使用白色背景'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='身份证件是放在有纹路或图案的背景中的。'
      image='/assets/img/help/id-dos-and-donts/id-dont-textured-background.png'
      bordered_image=true
      do_dont_text="别"
      text='使用有纹路或图案的背景'
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
      do_dont_text="别"
      text='裁掉你身份证件的四边'
    %}
  </div>
  <div class="tablet:grid-col">
    {%
      include components/image-example-incorrect.html
      image-alt-text='身份证件上有炫光和阴影。'
      image='/assets/img/help/id-dos-and-donts/id-dont-shadow.png'
      do_dont_text="避免"
      text='炫光和阴影'
    %}
  </div>
</div>

### 如果你没有带相机的手机或平板电脑，该如何上传图片

如果你没有带相机的手机，可能有上传驾照或州身份证件扫描件的选择。

* 请遵循[用手机拍照的同样提示。](#使用你的手机或平板电脑)
* 把每个文件以 JPG 或 PNG 格式保存。PDF 文件不行。查看一下你文件名，标题后应该有个缩写（例如：JohnDoeID_Front.jpg）。
* 确保图片是高分辨率的（2025 x 1275 最理想）。
* 只上传彩色图片。

---
## 如何添加你面部照片来帮助验证身份

你也许会被要求拍摄驾照或州身份证件的照片以及你面部照片。这是为了查看你是身份证件上的人。

### 设备要求
* 你必须使用自带相机的手机或平板电脑以及 Login.gov 的相机工具来拍摄自己面部和州身份证件的照片。你无法在桌面电脑上完成这一步。
  * iOS 手机或平板电脑应当使用[Safari浏览器。]({{ page.url_safari }})
  * Android手机或平板电脑应当使用[Google Chrome浏览器。]({{ page.url_chrome }})
* 如果你没有带相机的手机，可能能去附近的美国邮局去[亲身验证身份。](/zh/help/verify-your-identity/verify-your-identity-in-person/)

### 准备拍照
* 摘掉可能盖住你面部的任何服饰。我们建议你摘掉眼镜和帽子。
* 在光线明亮的地方拍照。
* 面部表情保持中性（请别微笑）。

### 如何使用相机工具
* 把你的面部放在绿色圆圈里。确保你整个面部 - 从下巴到头顶 - 都可以看见。
* 相机工具自动拍摄你照片时请保持静止。
* 点击打勾符号来接受照片。

---

## 尝试使用以下方法排查问题

### 检查你设备和浏览器的组合
* iOS 手机或平板电脑应当使用[Safari浏览器。]({{ page.url_safari }})
* Android手机或平板电脑应当使用[Google Chrome浏览器。]({{ page.url_chrome }})

### 更新你的浏览器，或者清除缓存以及魔饼（cookie)
* 如果你在使用Safari，可以尝试[更新浏览器]({{ page.url_safari_update_doc }})，或者[清除缓存和魔饼。]({{ page.url_safari_clear_cache_doc }})
* 如果你在使用Google Chrome，可以尝试[更新浏览器]({{ page.url_chrome_update_doc }})，或者[清除缓存和魔饼。]({{ page.url_chrome_clear_cache_doc }})

