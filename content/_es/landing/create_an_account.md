---
title: Crea una cuenta
description: Únase a los millones de personas que confían en Login.gov para
  tener acceso seguro a agencias gubernamentales.
one_account_banner: true
steps:
  class: create-an-account
  intro: "Cuando esté listo para crear su cuenta segura de login.gov, deberá
    proporcionar algunos datos:"
  step1: >-
    ## 1. Dirección de correo electrónico

    * Recomendamos una dirección de correo electrónico personal a la que siempre podrá acceder en lugar de una dirección de correo electrónico del trabajo.

    * Si ya tiene una cuenta con login.gov con esa dirección de correo electrónico, le enviaremos un correo electrónico para informarle cómo puede restablecer su contraseña y acceder a la cuenta.
  step2: >-
    ## 2. Contraseña segura

    * Las contraseñas deben tener al menos 12 caracteres y no deben incluir palabras o frases de uso común.
  step3: >-
    ## 3. Uno o más [métodos de
    autenticación](/help/authentication-methods/which-authentication-method-should-i-use/) como:


    * **Mas segura**
      * Clave de seguridad
      * Aplicación de autenticación
      * Identificación militar o de empleado del gobierno federal (PIV/CAC)

    * **Menos segura**
      * SMS/mensajes de texto
      * Códigos de respaldo
  info: Dependiendo de las necesidades de seguridad de la agencia, es posible que
    deba probar su identidad mediante un número de seguro social, una dirección
    y / o una identificación emitida por Los Estados Unidos.
permalink: /es/create-an-account/
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

<div class="create-an-account">
  <div class="container">
    <div class="grid-row">
      <article class="desktop:grid-col-7">
        <header class="intro">
          {{ site.data[page.lang].settings["create-an-account"]["intro"] | replace_locale_base_url | markdownify }}
        </header>
        <div class="step-1 step list">
          {{ site.data[page.lang].settings["create-an-account"]["step_1"] | replace_locale_base_url | markdownify }}
          <div class="mobile step-1-img"></div>
        </div>
        <div class="step-2 step list">
          {{ site.data[page.lang].settings["create-an-account"]["step_2"] | replace_locale_base_url | markdownify }}
          <div class="mobile step-2-img"></div>
        </div>
        <div class="step-3 step list">
          {{ site.data[page.lang].settings["create-an-account"]["step_3"] | replace_locale_base_url | markdownify }}
          <div class="mobile step-3-img"></div>
        </div>
      </article>
      <div class="sidebar desktop:grid-col-4 desktop:grid-offset-1 desktop-lg:grid-col-3 desktop-lg:grid-offset-2">
        <div class="box">
          {{ site.data[page.lang].settings["create-an-account"]["info"] | replace_locale_base_url | markdownify }}
        </div>
      </div>
    </div>
  </div>
</div>
