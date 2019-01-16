var Sentiment = require('main/Sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze("You are so amazing");
console.log(result.score)


