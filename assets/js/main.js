import $ from 'jquery';
import { accordion, accordionCloseButton, banner, navigation } from 'identity-style-guide';
import domready from 'domready';

window.LoginGov = window.LoginGov || {};

const components = [accordion, accordionCloseButton, banner, navigation];
domready(() => components.forEach((component) => component.on()));

const ariaAccordion = require('aria-accordion');

$(function () {
  // Mobile main nav toggle

  $('#js-mobile-nav-toggle').click(function () {
    $(this).find('span').toggle();
    $(this).find('img').toggleClass('display-none');
    $('header nav').toggleClass('flex');
  });

  // Language picker

  function languagePicker(trigger, dropdown) {
    trigger.on('click keypress', function (event) {
      event.preventDefault();
      var eventType = event.type;
      if (eventType == 'click' || (eventType == 'keypress' && event.which == 13)) {
        $(this).parent().toggleClass('focused');
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

  // Dropdown menu

  $('.dropdown')
    .focusin(function () {
      $(this).addClass('focused');
    })
    .focusout(function () {
      $(this).removeClass('focused');
    });

  $(document).on('click touch', function (event) {
    var $target = $(event.target);
    var $dropdownSm = $('.dropdown-sm');
    if (!$target.hasClass('dropdown-text') && !$target.hasClass('dropdown-sm')) {
      $dropdownSm.removeClass('focused').blur();
    } else {
      $dropdownSm.toggleClass('focused');
    }
  });

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

  // Required element to turn into an accordion
  var elm = document.querySelector('.js-accordion');
  if (elm) {
    new ariaAccordion.Accordion(elm, {}, { reflectStatic: true });
  }
});
