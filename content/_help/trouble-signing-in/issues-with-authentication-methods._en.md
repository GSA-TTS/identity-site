---
layout: help
title: Issues with authentication methods
category: trouble-signing-in
permalink: /help/trouble-signing-in/issues-with-authentication-methods/
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

Depending on the authentication methods you’ve set up, you may still be able to access your Login.gov account. After you’re able to sign in, make sure you’ve set up more than one authentication method to avoid losing access to your account.

{% capture delete_account_alert_content %}
If you cannot sign in with your only authentication method, you will have to delete your account and create a new account. Login.gov cannot unlock your account for you or sign in on your behalf.
{% endcapture %}
{% include alert.html type="warning" class="margin-bottom-4" content=delete_account_alert_content %}

## Face or touch unlock isn't working

If your device and browser supports cloud sync, you can use face or touch unlock on multiple devices. Otherwise, face or touch unlock only works on the same device and browser where you set it up.

* If you set up face or touch unlock on a device that doesn’t support cloud sync, try using the same device and browser to unlock your account. If you no longer have access to them, you will need to use another authentication method.
* If you set up face or touch unlock on a device that was signed into a cloud service such as iCloud or your Google Account, you may be able to sign in on any other device as long as it’s also signed into that cloud service.
* If you set up face or touch unlock on another device, but don’t see face or touch unlock when signing into Login.gov, your current device does not support face or touch unlock. Try using the same device and browser you used to set it up.

We recommend you set up additional authentication methods in case you lose access to a device that supports face or touch unlock.

## I'm not receiving a text or phone call

* If you have a landline phone, choose to receive your one-time code by phone call instead of a text message. You’ll receive a voicemail if you can’t answer the call.
* If you have a mobile phone, make sure airplane mode is off.
* Your code may not arrive immediately. Wait up to 10 minutes, or try the “Resend code” button to send your code again.
* Make sure you’re not using a phone number with an extension, as Login.gov cannot send one-time codes to extensions.

{% capture newest_otp_alert_content %}
Only the newest one-time code you receive will work. If you request and receive multiple messages at the same time, you may need to try more than one code until one works.
{% endcapture %}
{% include alert.html class="margin-bottom-4" content=newest_otp_alert_content %}

## My authenticator app isn’t working

* The time may not be correctly synced between your device and your authenticator app. Make sure your device’s time is correct by using a page like [time.gov](https://www.time.gov/).

    * If you use Google Authenticator, you may need to sync the time manually. [Follow Google’s instructions to sync your time](https://support.google.com/accounts/answer/185834?hl=en).

## My backup code doesn’t work

* Make sure you’re using a backup code that you haven’t used yet. When you use all ten backup codes, we will provide you a new list of backup codes.

## My security key or phone was lost or stolen

* If you are able to regain access to your phone’s original phone number, do so first and then request a one-time code. You should still receive the code, even if you’re using a new device and SIM card.
* If you’ve lost your security key, you will have to use a different authentication method or delete your account if you have no other authentication method, unless you have already set up a backup.

## My PIV/CAC card isn’t working
* Login.gov may be missing an issuing certificate for your card. [Contact Login.gov support for additional help.](/contact/)

## Related articles

* [Authentication methods](/help/get-started/authentication-methods/)
