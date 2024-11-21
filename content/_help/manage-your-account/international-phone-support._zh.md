---
layout: help
title: 国际电话号码支持
category: manage-your-account
permalink: /zh/help/manage-your-account/international-phone-support/
order: 7 
scripts:
  - /assets/js/country_support.js
---
使用以下信息来确定你的国际电话号码能否接受短信或接听电话来进行多因素身份证实或验证你的身份。

由于垃圾邮件问题或我们短信和语音提供商所做的改动，此列表可能会改动，你的号码可能不再受支持。有时候新的电话号码也没有语音或短信支持。

我们鼓励你设立不止一种身份验证方法，以防因为你的电话号码不再得到支持而被锁在账户之外。

<noscript>
  我们需要 JavaScript 才能加载支持的国家列表。
</noscript>


{% include country_support_table.html
           heading_country="国家"
           heading_dialing_code="拨号代码"
           heading_sms="支持 SMS"
           heading_voice="支持语音"
           option_yes="支持"
           option_no="不支持"
           error_heading="加载数据出错"
           error_body="抱歉，加载支持国家列表时出错。请随后再试。" %}
