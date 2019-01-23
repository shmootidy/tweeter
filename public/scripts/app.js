$(function() {

  function createTweetElement(tweetObj) {
    const userName = tweetObj.user.name;
    const avatar = tweetObj.user.avatars.small;
    const userHandle = tweetObj.user.handle;
    const tweetContent = tweetObj.content.text;
    const datePosted = tweetObj.created_at;

    // create article
    const articleElement = $('<article>').addClass('old-tweets');

    const headerElm = $('<header>').appendTo(articleElement); // keep empty
    const avatarElm = $('<img>').attr('src', avatar).appendTo(headerElm);
    const userNameElm = $('<span>').addClass('user-name').text(userName).appendTo(headerElm);
    const handleElm = $('<span>').addClass('user-handle').text(userHandle).appendTo(headerElm);

    const contentElm = $('<div>').addClass('content').text(tweetContent).appendTo(articleElement);

    const footerElm = $('<footer>').addClass('content').appendTo(articleElement); // keep empty
    const timeElm = $('<span>').addClass('time').text(datePosted).appendTo(footerElm);

    const iconsElm = $('<span>').addClass('icons').appendTo(footerElm); // keep empty
    const flagIconElm = $('<span>').addClass('icon').text('⚑').appendTo(iconsElm);
    const retwitIconElm = $('<span>').addClass('icon').text('↻').appendTo(iconsElm);
    const heartIconElm = $('<span>').addClass('icon').text('♥').appendTo(iconsElm);

    return articleElement;
  }

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);
console.log($tweet);
$('#tweets-container').append($tweet);

});
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

