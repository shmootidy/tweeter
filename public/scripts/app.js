/* eslint no-undef: 'off' */
/* eslint func-names: 'off' */
/* eslint no-use-before-define: 'off' */
/* eslint padded-blocks: 'off' */
/* eslint object-curly-newline: 'off' */
/* eslint object-newline: 'off' */
/* eslint object-shorthand: 'off' */
/* eslint max-len: 'off' */

$(() => {
  function createTweetElement(tweetObj) {
    const userName = tweetObj.user.name;
    const avatar = tweetObj.user.avatars.small;
    const userHandle = tweetObj.user.handle;
    const tweetContent = tweetObj.content.text;
    const datePosted = timeSince(tweetObj.created_at);

    const articleElement = $('<article>').addClass('old-tweets');

    $('<header>').appendTo(articleElement)
      .append($('<img>').attr('src', avatar))
      .append($('<span>').addClass('user-name').text(userName))
      .append($('<span>').addClass('user-handle').text(userHandle));

    $('<div>').addClass('content').text(tweetContent).appendTo(articleElement);

    $('<footer>').addClass('content').appendTo(articleElement)
      .append($('<span>').addClass('time').text(datePosted))
      .append($('<span>').addClass('icons')
        .append($('<span>').addClass('icon').text('⚑'))
        .append($('<span>').addClass('icon').text('↻'))
        .append($('<span>').addClass('icon').text('♥')));

    return articleElement;
  }

  function renderTweets(arrOfTweetObjs) {
    arrOfTweetObjs.forEach((tweetObj) => {
      const $tweet = createTweetElement(tweetObj);
      $('#tweets-container').prepend($tweet);
    });
  }

  const allTweets = $('#tweets-container');

  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    }).done((tweets) => {
      allTweets.empty();
      renderTweets(tweets);
    });
  }
  loadTweets();

  $('#submit-tweet').on('submit', function (e) {
    e.preventDefault();
    const $tweet = $(this).serialize();
    const $tweetLength = $(this).children('textarea').val().length;

    $('.error').slideUp();

    if ($tweetLength > 140) {
      $('.error').slideDown({ start: function () {
        $(this).text('Too many characters there, bud.');
      } });
      return;
    }
    if ($tweetLength < 1) {
      $('.error').slideDown({ start: function () {
        $(this).text('Ah, yes. The ol\' empty tweet...');
      } });
      return;
    }

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $tweet,
    }).done(() => {
      $('#submit-tweet textarea').val(''); // https://stackoverflow.com/questions/15545379/empty-the-contents-of-a-textarea-after-submit
      $('.counter').text('140');
      loadTweets();
    });
  });

  $('.button').on('click', () => {
    $('.new-tweet').slideToggle({ done: function () {
      if ($(this).css('display') === 'block'){
        $('textarea').focus();
      }
    } });
  });

  $('*').on('keydown', (e) => {
    if (e.key === 'Tab'){
      $('*').addClass('user-is-tabbing');
      $(this).off('keydown');
    }
  }); // adapted from https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

  function timeSince(unixTime) { // https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
    const date = new Date(unixTime);
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000); // a year (in sec) --> 24hr(day) * 60min(hr) * 60sec(min) * 365days(yr)

    if (interval > 1) return `${interval} years`;

    interval = Math.floor(seconds / 2592000); // 30 days (in sec) --> 24hr * 60min * 60sec * 30days(mon)
    if (interval > 1) return `${interval} months`;

    interval = Math.floor(seconds / 86400); // 1 day (in sec) --> 24hr * 60min * 60sec
    if (interval > 1) return `${interval} days`;

    interval = Math.floor(seconds / 3600); // 1 hr (in sec) --> 60min * 60sec
    if (interval > 1) return `${interval} hours`;

    interval = Math.floor(seconds / 60); // 1 min (in sec) --> 60sec

    if (interval > 1) return `${interval} minutes`;

    return `${seconds} seconds`;
  }

});
