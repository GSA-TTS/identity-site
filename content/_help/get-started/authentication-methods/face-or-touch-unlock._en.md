---
layout: help
title: Face or touch unlock
category: create-account
permalink: /help/create-account/authentication-methods/face-or-touch-unlock/
child: true
order: 1
---

Face or touch unlock lets you sign in by using a scan of your face or fingerprint, entering your PIN or pattern, or scanning a QR code. This allows you to authenticate without using a one-time code.

When you choose to set up face or touch unlock, you’ll start by setting up a face- or fingerprint-based credential. This credential will be saved to your device, or to the cloud if you’re using a compatible browser and device.

## How to set up face and touch unlock

To set up Face or Touch Unlock when creating a Login.gov account:

{: .number-list}

1. Go to <https://secure.login.gov/> and click on "Create an account".

2. Enter your email address and click submit.

3. You will receive an email. Click on the link to confirm your email address.

4. Create password. It must be at least 12 characters long.

5. On the “Secure your account” page, select Face or Touch Unlock.

   If you try to set up face or touch unlock as your only MFA method, you will see an alert advising you to set up a second method immediately after setting up face or touch unlock. This is to help prevent you from failing face or touch unlock in the future and forcing an account deletion, especially if your device does not have cloud sync capability.

6. Choose a device nickname for Face or Touch Unlock.

Face or touch unlock has different experiences for mobile and desktop.

After setting a device nickname, please follow the appropriate steps below, depending on which device you are using to create your account.

<div class="usa-accordion usa-accordion--bordered margin-y-4">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a1"
    >
      Mobile devices
    </button>
  </h4>
  <div id="b-a1" class="usa-accordion__content usa-prose">
    <p>
      With compatible devices, instead of picking an option between using “This device” or “Phone or tablet”, after clicking continue, you will see the opportunity to authenticate by using your device screen lock. This could be face or touch, such as with Apple’s TouchID/FaceID, or it could be a PIN number.
    </p>
  </div>
</div>

<div class="usa-accordion usa-accordion--bordered margin-y-4">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a2"
    >
      Desktop computers
    </button>
  </h4>
  <div id="b-a2" class="usa-accordion__content usa-prose">
    <p>
      After creating your device nickname, you will see a pop-up appear immediately after clicking Continue. (Only in compatible browsers, such as Chrome, Safari, and Edge)
    </p>
    <p>
      You will be prompted to create a passkey by selecting one of two available options: "This device", or "Use a phone or tablet".
    </p>
    <ul>
      <li>
        If you opt to use a passkey using “This device”, you will proceed to either use a face or touch scan or a device password to use face or touch unlock.
      </li>
      <li>
        If you opt to “Use a phone or tablet,” you will see a QR code appear on your screen instead.
        <ul>
          <li>
            Scanning this QR code with the Camera app on your Android or iOS device will allow you to use your phone as a passkey instead of your face or fingerprint scan.
          </li>
          <li>
            This will rely on the screen lock on your phone, such as a PIN or phone-based fingerprint.
          </li>
        </ul>
      </li>
      <li>
        If you are on a device that requires cloud syncing to access passkeys, such as a macOS computer, you will be required to set up cloud sync at this time.
        <ul>
          <li>
            The Login.gov help desk unfortunately does not provide specific instructions for this pathway as this flow is by a third party. We recommend the vendor’s instructions, or contacting the vendor directly for assistance. (e.g. Apple for macOS)
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

## Related articles
* [Issues with Face and touch unlock](/help/trouble-signing-in/authentication/face-and-touch-unlock/)
* [Authentication methods](/help/create-account/authentication-methods/)
* [Issues creating an account](/help/create-account/issues-creating-an-account/)
