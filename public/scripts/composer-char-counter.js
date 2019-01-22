$(document).ready(function() {

  const maxCharCount = 140;

  function eventPrinter () {
    let charCount = maxCharCount - $(this).val().length;
    $(this).siblings('.counter').text(charCount);
  }


  $('.new-tweet form textarea').on('input', eventPrinter); // using this because MDN doc suggests it'll work for the task at hand
});

// https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-get-value-from-textarea