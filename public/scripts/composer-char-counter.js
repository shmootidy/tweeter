$(document).ready(function() {
  function eventPrinter (event) {
    console.log(event);
  }
  $('.new-tweet').on('click', eventPrinter);
  $('.new-tweet').on('change', eventPrinter);
  $('.new-tweet').on('keyup', eventPrinter);
  $('.new-tweet').on('keydown', eventPrinter);
  $('.new-tweet').on('blur', eventPrinter);
  $('.new-tweet').on('keypress', eventPrinter);
  $('.new-tweet').on('input', eventPrinter);
});
