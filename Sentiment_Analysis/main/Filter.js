var Twit = require('twit');




//Configure the Twitter API
var TWITTER_CONSUMER_KEY = 'N7KMv4kAyyUGx5kqzfLqAyJ5W';
var TWITTER_CONSUMER_SECRET = 'Bt99VhJrInU5KDuQussAw8738Ztl7Ds0wfsR28q5MnsBZKcESV';
var TWITTER_ACCESS_TOKEN = '1045652205448179713-e9aZNvNCWBdSh3ZTmRiJ7He9Hm3LH9';
var TWITTER_ACCESS_TOKEN_SECRET = 'Mm5ytWr1srVRNkrRL5fu1tzcuiuWMyok6rqqiQwxP7emd';



//New Bot
var Bot = new Twit({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});


var stream = Bot.stream('statuses/filter', {track: 'Trump'});



stream.on('tweet', function(tweet) {

    console.log(tweet.text)

});




