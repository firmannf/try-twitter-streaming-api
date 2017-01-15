var Twit = require('twit');
var dotenv = require('dotenv');

dotenv.load();

var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_KEY,
    access_token_secret: process.env.ACCESS_SECRET,
});

// var stream = T.stream('statuses/sample');
// stream.on('tweet', function (tweet) {
//   console.log(tweet && tweet.text);
// });

// var stream = T.stream('statuses/firehose');
// stream.on('tweet', function (tweet) {
//   console.log(tweet && tweet.text);
// });

var stream = T.stream('statuses/filter', {track: ['liverpool']});
stream.on('tweet', function (tweet) {
  console.log(tweet && tweet.text);
});

// var stream = T.stream('user');
// stream.on('favorite', function (event) {
//   console.log(event);
// });

// var stream = T.stream('user');
// stream.on('tweet', function (tweet) {
//   console.log(tweet);
// });

// var stream = T.stream('site');
// stream.on('tweet', function (tweet) {
//   console.log(tweet && tweet.text);
// });