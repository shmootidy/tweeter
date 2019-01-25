/* eslint no-undef: 'off' */

$(() => {
  function eventPrinter() {
    const maxCharCount = 140;
    const charCount = maxCharCount - $(this).val().length;
    const counter = $(this).siblings('.counter');
    counter.text(charCount);
    const countColor = (charCount < 0) ? 'red' : 'black';
    counter.css('color', `${countColor}`);
  }

  $('.new-tweet form textarea').on('input', eventPrinter);
});
