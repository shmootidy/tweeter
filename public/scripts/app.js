$(function() {

  function createTweetElement(tweetObj) {
    let articleElement;
    const userName = tweetObj.user.name;
    const avatar = tweetObj.user.avatars.small;
    const userHandle = tweetObj.user.handle;
    const tweetContent = tweetObj.content.text;
    const datePosted = tweetObj.created_at;


    // user.name          --> section.old-tweets header span.user-name
    // user.avatars.small --> section.old-tweets header img
    // user.handle        --> section.old-tweets header span.user-handle
    // content.text       --> section.old-tweets div.content
    // created_at         --> section.old-tweets footer.content span.time
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

