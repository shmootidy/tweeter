/* eslint strict: 'off' */
/* eslint func-names: 'off' */
/* eslint object-shorthand: 'off' */

'use strict';

module.exports = function makeDataHelpers(db) {
  return {

    saveTweet: function (newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, callback);
    },

    getTweets: function (callback) {
      db.collection('tweets').find().toArray(callback);
    },

  };
};
