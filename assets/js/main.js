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

  // Playbook affix and scroll spy

  if ($('#pb-nav--side').length ) {
    
    $('#pb-nav--side').affix({
      offset: {
        top: $('#pb-nav--side').offset().top
      }
    });

    $('#pb-nav--side a, .js-smooth-scroll a').smoothScroll({
      afterScroll: function(options) {
        var $tgt = $(options.scrollTarget);
        $tgt.attr('tabindex', -1).on('blur focusout', function() {
          $(this).removeAttr('tabindex');
        }).focus();
      }
    });

    $(window).resize(function() {
      $('#pb-nav--side').affix('checkPosition');
    });
  }
});
