import $ from 'jquery';
import { accordion, accordionCloseButton, banner, navigation } from 'identity-style-guide';
import domready from 'domready';

window.LoginGov = window.LoginGov || {};

const components = [accordion, accordionCloseButton, banner, navigation];
domready(() => components.forEach((component) => component.on()));

$(function () {
  // Language picker

  function languagePicker(trigger, dropdown) {
    trigger.on('click keypress', function (event) {
      event.preventDefault();
      var eventType = event.type;
      if (eventType == 'click' || (eventType == 'keypress' && event.which == 13)) {
        dropdown.toggle();

        $(this).attr('aria-expanded', function (i, attr) {
          return attr == 'true' ? 'false' : 'true';
        });
      }
    });
  }

  languagePicker(
    $('.language-picker__label--button'),
    $('.language-picker__label--button + .dropdown'),
  );

  // Smooth scroll

  $('a[href^="#"]').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.getAttribute('href');

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          $(hash)
            .attr('tabindex', -1)
            .on('blur focusout', function () {
              $(this).removeAttr('tabindex');
            })
            .focus();

          if (history.pushState) {
            history.pushState(null, null, hash);
          } else {
            window.location.hash = hash;
          }
        },
      );
    }
  });
});
