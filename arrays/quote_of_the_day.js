var myob = require('myobio-node');

var quotes = [];
quotes[0] = "don't run with scissors";
quotes[1] = "don't repeat yourself";
quotes[2] = "don't snooze your alarm";
quotes[3] = "always put the lid on";
quotes[4] = "cut once, measure twice";
quotes[5] = "Simon is always right";

var randomQuote = Math.floor(Math.random() * quotes.length);
myob.output(quotes[randomQuote]);
