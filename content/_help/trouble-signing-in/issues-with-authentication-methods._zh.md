---
layout: help
title: 身份证实方法问题
category: trouble-signing-in
permalink: /zh/help/trouble-signing-in/issues-with-authentication-methods/
order: 3
redirect_from: 
  - /help/creating-an-account/no-phone-or-other-authentication-method/
  - /help/creating-an-account/phone-didnt-get-a-security-code/
  - /help/creating-an-account/why-didnt-i-receive-a-security-code-to-confirm-my-phone/
  - /help/signing-in/how-do-i-sign-in-if-i-dont-have-my-authentication-methods/
  - /help/signing-in/how-do-i-sign-in-if-i-dont-have-my-phone-or-my-personal-key/
  - /help/signing-in/how-do-i-sign-in-if-i-dont-have-my-phone-or-my-phone-number-has-changed/
  - /help/signing-in/i-cant-remember-where-my-personal-key-is-and-i-dont-have-my-phone-with-me/
  - /help/signing-in/if-i-dont-have-my-phone-with-me-can-i-still-sign-in/
  - /help/signing-in/personal-key-not-working/
  - /help/signing-in/phone-didnt-get-a-security-code/
  - /help/signing-in/phone-or-authentication-methods-not-available/
  - /help/signing-in/security-code-not-working/
  - /help/signing-in/why-didnt-I-receive-a-reset-password-email-from-logingov/
  - /help/signing-in/why-didnt-i-receive-a-security-code/
  - /help/signing-in/why-is-my-personal-key-invalid/
  - /help/signing-in/why-is-my-security-code-invalid/
---

取决于你设立的身份证实方法，你也许仍然能够访问你的 Login.gov 账户。你登录后，请确保自己设立了一种以上的身份证实方法以防无法访问账户。

{% capture delete_account_alert_content %}
如果你无法使用自己唯一的身份证实方法登录，就得删除账户并创建一个新账户。Login.gov 无法帮你做账户解锁或代表你登录。
{% endcapture %}
{% include alert.html type="warning" class="margin-bottom-4" content=delete_account_alert_content %}

## 人脸或触摸解锁不行

如果你的设备和浏览器支持云同步，就可以跨设备使用人脸或触摸解锁。否则的话，人脸或触摸解锁只能在你当时做设置的同一设备和浏览器上使用。

* 如果你在不支持云同步的设备上设置了人脸或触摸解锁，请尝试使用该设备和浏览器来解锁你的账户。如果你无法使用原来做设置的设备和浏览器，就得使用另外一种身份证实方法。
* 如果你在一个登入云服务（比如iCloud）或你的谷歌账户的设备上设置了人脸或触摸解锁，你也许可以在任何其他设备上登录，只要该设备也是登入那一云服务的。
* 如果你在另一个设备上设置了人脸或触摸解锁，但登录 Login.gov 时看不到人脸或触摸解锁，那么你目前这台设备不支持人脸或触摸解锁。试试使用你当时设置人脸或触摸解锁的那一设备和浏览器。

我们推荐你设置另外一种身份证实方法，以防你无法使用支持人脸或触摸解锁的那台设备。

## 我收不到短信或电话

* 如果你有座机电话，请选择通过接听电话而不是短信接受一次性代码。如果你不能接听电话，会收到电话留言。
* 如果你的是手机，请确保关掉飞行模式。
* 你的代码不见得会马上到达。最多等 10 分钟，或者试试“重发代码”按钮来再次要求发送代码。
* 请确保你用的电话没有分机，因为Login.gov 不能给分机发送一次性代码。

{% capture newest_otp_alert_content %}
只有你收到的最新代码才能奏效。如果你同时要求并接收到了多条信息，则可能需要尝试收到的每个代码来找到那个可以奏效。
{% endcapture %}
{% include alert.html class="margin-bottom-4" content=newest_otp_alert_content %}

## 我的身份证实 app 不行

* 你的设备和身份证实 app 里的时间可能没有正确同步。使用 [time.gov](https://www.time.gov/) 这样的页面来确保你设备上的时间是正确的。
  
  * 如果你使用 Google Authenticator，则可能需要手工来同步时间。[按照Google的说明来对时间做同步](https://support.google.com/accounts/answer/185834?hl=en)

## 我的备用代码不行

* 确保你使用的备用代码尚未被自己用过。你把所有 10 个代码用完后，我们会给你提供一个新备用代码清单。

## 我的安全密钥或电话丢失或被盗

* 如果你能重新使用自己原来的电话号码，那请先这样做，然后要求一个一次性代码。你应当仍然能收到代码，即便你在用一个新的设备和 SIM 卡。
* 如果你丢失了自己的安全密钥，则必须用一个不同的身份证实方法，或者如果没有别的身份证实方法的话请删除你的账户，除非你已设置了备份。

## 我的 PIV/CAC 卡不行
* Login.gov 可能缺乏你卡的发放证书。[联系 Login.gov 支持来获得更多帮助。](https://login.gov/contact/)

## 相关文章

* [身份证实方法](/help/get-started/authentication-methods/)
