---
layout: help
title: 验证我的电话号码
category: verify-your-identity
permalink: /zh/help/verify-your-identity/phone-number/
order: 4
can_verify_list:
  - 家庭电话号码
  - 手机或移动电话号码
  - 座机号码
cannot_verify_list:
  - 国际电话号码和部分美国属地的号码
  - 谷歌语音或类似 VoIP（基于 IP 的语音传输）号码
  - 高价（收费）电话号码
maybe_verify_list:
  - 大多数预付费电话号码
---

我们会将你的电话号码和其他个人信息与公共和专有记录进行核对，并向你发送一个一次性代码，以验证该电话号码属于你。

## 我可以使用什么电话号码？

你用来验证的电话号码必须是美国国内的号码。如果你输入自己最常用的主要号码，我们最有可能成功验证你的电话号码。

### Login.gov 接受：

{% include components/icon-list.html items=page.can_verify_list size='md' icon_color='success' icon_shape='check_circle'%}

### 我们不接受：

{% include components/icon-list.html items=page.cannot_verify_list size='md' icon_color='error' icon_shape='cancel'%}
{% include components/icon-list.html items=page.maybe_verify_list size='md' icon_color='warning' icon_shape='warning' class='warning-list-margin'%}

## 故障排除

### Login.gov无法将我与我的电话号码匹配。

* 请检查：

    * 您的电话号码是否输入正确。

    * 您使用的电话号码类型是否为有效号码。

* 验证身份期间，请关闭呼叫转移功能。

* 请尝试使用与您姓名关联的其他号码

部分机构不允许您[通过邮寄方式验证地址](/zh/help/verify-your-identity/verify-your-address-by-mail/)，而必须验证电话号码。对于这些机构，您必须验证电话号码才能通过 Login.gov 成功验证身份。如果你没有另外一个电话号码可以尝试，请联系你试图登录的机构，了解你可以采取的替代措施。

## 相关文章

* [验证我的信息](/zh/help/verify-your-identity/issues-verifying-my-personal-information/)
* [通过邮局信件验证我的地址](/zh/help/verify-your-identity/verify-your-address-by-mail/)
