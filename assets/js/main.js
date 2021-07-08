import $ from 'jquery';
import { accordion, accordionCloseButton, banner, navigation } from 'identity-style-guide';

const components = [accordion, accordionCloseButton, banner, navigation];
components.forEach((component) => component.on());

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
