import $ from 'jquery';

import 'bootstrap/js/affix';
import 'bootstrap/js/scrollspy';

import 'jquery-smooth-scroll';


$(function() {

  // Mobile nav toggle

  $('#js-mobile-nav-toggle').click( function () {
    $(this).find('span').toggle();
    $(this).find('img').toggleClass('display-none');
    $('header nav').toggleClass('sm-show');
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

  // Smooth scroll and scroll spy

  $(window).bind('hashchange', function(event) {
    $.smoothScroll({
      scrollTarget: location.hash.replace(/^\#\/?/, '#'),
      afterScroll: function(options) {
        var $tgt = $(options.scrollTarget);

        $tgt.attr('tabindex', -1).on('blur focusout', function() {
          $(this).removeAttr('tabindex');
        }).focus();
      }
    });
  });

  $('a[href*="#"]').bind('click', function(event) {
    var hash = this.hash.replace(/^#/, '')
    if (this.pathname === location.pathname && hash) {
      event.preventDefault();
      location.hash = '#/' + hash;
    }
  });

  if (location.hash) {
    $(window).trigger('hashchange');
  }
});
