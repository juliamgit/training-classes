var express = require('express');
var app = express();
app.use(express.static('public'));

var isFizz = function(inputNumber) {
  return inputNumber % 3 === 0;
};

var isBuzz = function(inputNumber) {
  return inputNumber % 5 === 0;
};

var isFizzBuzz = function(inputNumber) {
  return isFizz(inputNumber) && isBuzz(inputNumber);
};

var program = function(number){
  if (isFizzBuzz(number)) {
     return "FizzBuzz";
   }
   else if (isBuzz(number)) {
     return "Buzz";
   }
   else if (isFizz(number)) {
     return "Fizz";
   }
   else if (number < 0) {
     return "no negative numbers";
   }
   else {
     return number.toString();
   }
};

var colorResult = function(result) {
  if (result === "Fizz") {
     return "green";
   }
   else if (result === "Buzz") {
     return "red";
   }
   else if (result === "FizzBuzz") {
     return "blue";
   }
   else {
     return "black";
   }
};

var makeHTML = function(color, result) {
  return "<html></body><p style=color:" + color + ">" + result + "</p></html>";
}


// app.get('/:number', function (request, response) {
//   var result = program(request.params.number);
//   var color = colorResult(result);
//   response.send(makeHTML(color, result));
//   });

app.get('/fizzbuzz', function (request, response) {
    console.log(request);
    console.log(req.query);
    console.log(req.params);
    var result = program(request.query.numberBox);
    var color = colorResult(result);
    response.send(makeHTML(color, result));
    });


app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
