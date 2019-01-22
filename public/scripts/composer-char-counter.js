$(document).ready(function() {

  let maxCount = 140;

  function eventPrinter () {
    console.log(maxCount - $(this).val().length);
  }
  $('.new-tweet form textarea').on('input', eventPrinter); // using this because MDN doc suggests it'll work for the task at hand
});

var comment = $.trim($("#comment").val());
// https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-get-value-from-textarea