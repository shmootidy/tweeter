$(document).ready(function() {


  function eventPrinter () {
    const maxCharCount = 140;
    let charCount = maxCharCount - $(this).val().length;
    const counter = $(this).siblings('.counter');
    counter.text(charCount);
    if (charCount < 0){
      counter.css('color', 'red');
    } else {
      counter.css('color', 'black');
    }
  }


  $('.new-tweet form textarea').on('input', eventPrinter); // using this because MDN doc suggests it'll work for the task at hand
});

// https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-get-value-from-textarea