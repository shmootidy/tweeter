$(function() {

  function createTweetElement(tweetObj) {
    const userName = tweetObj.user.name;
    const avatar = tweetObj.user.avatars.small;
    const userHandle = tweetObj.user.handle;
    const tweetContent = tweetObj.content.text;
    const datePosted = tweetObj.created_at;

    // create article
    const articleElement = $('<article>').addClass('old-tweets');

    $('<header>').appendTo(articleElement) // keep empty
      .append($('<img>').attr('src', avatar))
      .append($('<span>').addClass('user-name').text(userName))
      .append($('<span>').addClass('user-handle').text(userHandle));

    $('<div>').addClass('content').text(tweetContent).appendTo(articleElement);

    const footerElm = $('<footer>').addClass('content').appendTo(articleElement)
    .append($('<span>').addClass('time').text(datePosted)
    .append($('<span>').addClass('icons') // keep empty
      .append($('<span>').addClass('icon').text('⚑'))
      .append($('<span>').addClass('icon').text('↻'))
      .append($('<span>').addClass('icon').text('♥'))));

    return articleElement;
  } // end of function declaration

  function renderTweets(arrOfTweetObjs) {
    for (const tweetObj of arrOfTweetObjs){
      var $tweet = createTweetElement(tweetObj);
      $('#tweets-container').append($tweet);
    }
  }

  const allTwits = $('#tweets-container');

  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    }).done(function(tweets){
      allTwits.empty();
      renderTweets(tweets);
    });
  }

  loadTweets();

  $('#submit-twit').on('submit', function(e) {
    e.preventDefault();
    const $twit = $(this).serialize();
    const $twitLength = $twit.length - 5; // this takes care of the `text=` that starts the string
    console.log($twit, $twitLength);

    if ($twitLength > 140) {
      return alert("Too long!");
    } else if ($twitLength < 1) {
      return alert('Empty input!')
    }

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $twit,
    }).done(function() {
      loadTweets();
    });
  });

});


/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

