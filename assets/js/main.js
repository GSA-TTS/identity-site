import $ from 'jquery';

import 'bootstrap/js/affix';
import 'bootstrap/js/scrollspy';

$(function() {

  // Mobile nav toggle

  $('#js-mobile-nav-toggle').click( function () {
    $(this).find('span').toggle();
    $(this).find('img').toggleClass('display-none');
    $('header nav').toggleClass('flex');
  });

  // Dropdown menu

  $('.dropdown').focusin( function () {
    $(this).addClass('focused');
  }).focusout(function(){
    $(this).removeClass('focused');
  });

  // Affix

  if ($('#pb-nav--side').length ) {
    
    $('#pb-nav--side').affix({
      offset: {
        top: $('#pb-nav--side').offset().top
      }
    });

    $(window).resize(function() {
      $('#pb-nav--side').affix('checkPosition');
    });
  }

  // Smooth scroll

  $('a[href^="#"]').on('click', function(event) {

    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        $(hash).attr('tabindex', -1).on('blur focusout', function() {
          $(this).removeAttr('tabindex');
        }).focus();

        if (history.pushState) {
          history.pushState(null, null, hash);
        } else {
          window.location.hash = hash;
        }
      });
    }
  });
});
