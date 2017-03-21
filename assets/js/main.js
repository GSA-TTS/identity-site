import $ from 'jquery';

import 'bootstrap/js/affix';
import 'bootstrap/js/scrollspy';

import 'jquery-smooth-scroll';


$(function() {
  $('#pb-nav--side').affix({
    offset: {
      top: $('#pb-nav--side').offset().top
    }
  });

  $('#pb-nav--side a, #principles li a').smoothScroll({
    afterScroll: function(options) {
      var $tgt = $(options.scrollTarget);
      $tgt.attr('tabIndex', '-1');
      $tgt[0].focus();
    }
  });
});

$(window).resize(function() {
  $('#pb-nav--side').affix('checkPosition');
});
