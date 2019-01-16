


var stream = T.stream('statuses/filter', {track: 'Trump'})


stream.on('tweet', function(tweet) {
    console.log(tweet)

}
