---
layout: help
title: 如何添加州政府颁发的身份证件
category: verify-your-identity
permalink: /zh/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
order: 3
redirect_from:
  - /en/help/verify-your-identity/how-to-add-images-of-your-state-issued-id/
  - /help/verify-your-identity/troubleshoot-uploading-your-state-issued-id/
do_list: 
  - 请使用高分辨率相机，比如智能手机或平板里的相机。你电脑摄像头不见得能拍清晰的照片。
  - 请使用固定的暗色背景。
  - 请在光线充足、有件接光线的地方拍照。
  - 查看并确保身份证件上的条形码完好无损而且干净。
  - 用手机拍照时手要稳。把胳膊放在桌面上也许可帮你拿稳手机。
---

{% capture alert_link %}
  <a href="/help/verify-your-identity/accepted-state-issued-identification/">有效驾照或州政府颁发的身份证件</a>
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

<div class="margin-top-5">
  <span class="usa-tag usa-tag--informative">建议</span>
</div>

<div class="margin-top-2">
  <h2 id="phone-tips" class="margin-0">
    用手机拍摄身份证件的正面和背面
  </h2>
</div>

如果你在用电脑来验证身份，则可以转用手机来拍你身份证件的照片。

### 用手机拍出清晰照片的提示

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
  icon_color='green'
  icon_shape='check_circle'
%}

### 给身份证件拍照常见问题

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
---

## 如果你没有带相机的手机，可以上传文件或使用扫描期器
* 遵循[用手机拍照的提示。](#phone-tips)
* 把每个文件以 JPG 或 PNG 格式保存。你不能使用 PDF 文件。查看一下文件名，文件名后应当有相应缩写（例如：JohnDoeID_Front.jpg）
* 确保照片是高分辨率的（理想像素是 2025 x 1275左右）。
* 照片应当是彩色的。

---

## 解疑

浏览器老旧过时可能导致出错。请遵照以下说明来更新你的浏览器：

* [Google Chrome](https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=en-US)
* [Mozilla Firefox](https://support.mozilla.org/en-US/kb/update-firefox-latest-version)
* [Safari](https://support.apple.com/en-us/HT204416)

请务必重启电脑并再次尝试登录。

## 清除浏览器缓存和 cookie

请尝试清除浏览器缓存和 cookie （即浏览器存储的数据）来解决出错问题。请遵照以下说明来清除浏览器缓存和 cookie：

* [Google Chrome](https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en)
* [Mozilla Firefox](https://support.mozilla.org/en-US/kb/how-clear-firefox-cache)
* [Safari](https://support.apple.com/en-us/HT201265)

请务必重启电脑并再次尝试登录。
