---
layout: help
title: 身份证实方法
category: get-started
permalink: /zh/help/get-started/authentication-methods/
order: 2
---
除了你的密码之外，Login.gov 还要求你设立至少一种辅助身份证实方法来保障账户安全。这叫做多因素身份证实（MFA）我们使用 MFA 作为保护你信息安全的额外一层保障。

**身份证实方法**
我们鼓励你给自己的账户添加两种身份证实方法。这样万一你丢失了主身份证实方法（比如丢了电话），还有第二种方法来进入账户。如果你被锁在账户之外和/或丢失了身份证实方法，Login.gov 无法授予您访问帐户的权限。如果被锁在账户外，你就不得不删除账户，设立一个新的。

**安全**
虽然你可以从多个身份证实选项中做选择，但有些身份证实方法（比如人脸或触摸解锁、安全密钥、PIV/CAC 卡）可以更安全地防止网络钓鱼和信息盗窃。

## 人脸或触摸解锁

<div class="usa-alert usa-alert--info margin-bottom-4" role="status">
  <div class="usa-alert__body">
    <p class="usa-alert__text">要用刷脸或触摸解锁在多个设备上登录 Login.gov，你可能需要在你的设备上启动云同步。</p>
  </div>
</div>
人脸或触摸解锁让你使用面孔或指纹扫描、输入你的 PIN 码或图案，或者扫描QR码来登录。这样你就不必使用一次性代码来做身份证实。

如果你选择设置人脸或触摸解锁，首先需要设置基于自己面孔或指纹的凭据。这一凭据将存在你的设备里，或者存在云里（如果你使用兼容的浏览器和设备）。

假定你的凭据只存在自己的设备里，那你使用人脸或触摸解锁在 Login.gov 进行身份证实时，必须总使用同一设备和浏览器。如果你的凭据存在云里，那就可以跨设备使用人脸或触摸解锁来进行身份证实。

我们强烈建议你设立一个辅助身份证实方法，以防你万一改换或丢失设备。如果你丢失了自己唯一的身份证实方法，就需要[删除账户并创建新账户。](/help/manage-your-account/delete-your-account/)

## 身份证实应用程序

身份证实应用程序能下载到你设备上，并生成用于登录帐户的安全的六位数代码。虽然如果你设备丢失或被盗，身份证实应用程序不受保护，但对于防止网络钓鱼、黑客攻击或拦截来说，这种方法比接听电话或短信更安全。

如果你选择这一安全的选项，请按照以下步骤下载并安装系统支持的一个应用程序，并针对 Login.gov 做配置。

{: .number-list}

1. 选择一个可以安装 app 的设备，比如电脑或移动设备（手机或平板电脑）。
2. 在设备上下载并安装一个身份证实应用程序。常见选项包括：
   
   * 安卓选项：[Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en), [Authy](https://authy.com/), [LastPass](https://lastpass.com/), [1Password](https://1password.com/).
   * iOS选项：[Google Authenticator](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8), [Authy](https://authy.com/), [LastPass](https://lastpass.com/), [1Password](https://1password.com/).
   * Windows app: [1Password](https://1password.com/), [OTP Manager](https://www.microsoft.com/en-us/store/p/otp-manager/9nblggh6hngn).
   * Mac app: [1Password](https://1password.com/), [OTP Manager](https://itunes.apple.com/us/app/otp-manager/id928941247?mt=12).
   * Chrome 扩展程序: [Authenticator](https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?hl=en)

3. 打开一个新的浏览器，在<https://secure.login.gov/>登录你的 Login.gov 账户。
4. 选择“身份证实应用程序”旁边的“启用”，然后按照说明扫描或输入将身份证实应用程序与你帐户关联的代码。

以后每次登录Login.gov，你就能使用这个应用程序生成的一次性密码了。

## 安全密钥

安全密钥通常是一个外部的物理实体设备，比如你插入电脑的 U 盘。该密钥与你帐户相连接，并且只有在密钥插入并激活后才会授予对帐户的访问权限。由于安全密钥不依赖于你的手机，因此对于网络钓鱼具有最高级别的防护，并在丢失或被盗时对黑客攻击具有内置保护。

Login.gov 要求符合 [FIDO (线上快速身份验证) 标准](https://fidoalliance.org/)的密钥。你想添加多少保护自己账户的密钥都行。

要使用这一安全选项进行 Login.gov 身份证实，请将密钥插入 USB 端口并给密钥一个名字，使其与你的 Login.gov 账户相联系。下一步要你激活密钥。一般只要按密钥上的按钮就行。

## 短信/电话

短信/SMS或打电话很方便但极易遭到盗窃、黑客和其他攻击。

如果你选择使用这一安全性较低的选项，请输入一个电话号码，以便你接听电话或接受短信。如果你只有座机电话，必须通过接听电话来接受一次性代码。Login.gov无法向分机或留言箱发送一次性代码。

每次你登录 Login.gov 账户时，我们会给那个电话号码发送一个独一无二的一次性代码。每个一次性代码 10 分钟后作废，而且只能用一次。如果你没有在 10 分钟内输入该一次性代码，请提出新代码请求。

收到代码后，请将其打入“一次性代码”域。每次你登录 Login.gov，都有通过接听电话或接受短信得到新的一次性代码的选择。每次你登录 Login.gov，都会收到一个新的一次性代码。

<div id="didn-t-receive-your-one-time-code">没收到一次性代码？</div>
 
* 检查你的设备是否已开机
* 关闭飞行模式
请记住，你需要移动设备来通过短信接受一次性代码。如果你有座机电话，请选择通过接听电话接受一次性代码。

选择使用“重发代码”按钮，你可以重新得到一次性代码。

## 备用代码（更不安全）

备用代码是给无法使用电话的用户的一个选项。但是，备用代码是最不安全的双因素身份证实选项。备用代码必须打印出来或写下来，使其容易被盗和遭到钓鱼式攻击。

如果你选择这一不安全的选项，Login.gov 会生成一套十个代码。你使用用户名和密码登录后，系统会提示要代码。每个代码只能使用一次。第十个代码被用后，系统会提示你下载一个新的代码单。请像对待密码一样谨慎对待这些恢复代码。

## 联邦政府雇员和军事人员使用的PIV或CAC

PIV（个人身份验证）卡或CAC（通用访问卡）是给联邦政府雇员和军事人员的安全选项。这些卡采用加密芯片技术，可以抵抗网络钓鱼，而且如果被盗很难破解。

## 没有电话或其他身份证实方法

如果你无法使用电话、身份证实应用程序、安全密钥或任何其他身份证实选项，你只能使用备用代码来设立账户。

**警告：**我们不推荐设立账户时使用备用代码作为唯一的身份证实方法。万一丢失备用代码，你就无法登录你的账户。

设立账户时，你会到达“保护你的账户安全”页面。在这里你必须选择主要身份证实方法。如果你无法使用其他任何选项，选择“备用代码”并点击“继续”。

在“添加另外一种方法”页，选择“我没有上述任何方法”并点击“继续”。
